(function(){
/* ====== SETTINGS ====== */
var IMAGE_DIR='images/';                 // folder with the images (next to index.html)
var STREAM='https://hirschmilch.de:7000/chillout.aac'; // Hirschmilch Radio - Chillout
var INTERVAL=5000, FADE=1000;            // time per image / fade time (ms)
var TIMES=[3,5,10,20,30];                // time-per-image options (seconds) offered by the time button, max 30
var ZOOM_FROM=1.05, ZOOM_TO=1.10;        // small zoom only when a new image appears while playing (it settles back to 100%)
var ZOOM_MS=2000;                        // how long that zoom settle takes (ms)
var SLIDE_MS=900, BLUR_MS=1200, IRIS_MS=1300, WIPE_MS=1000, FLIP_MS=1100, SPIN_MS=1100;   // durations of the other effects (ms)
var REFRESH=10000;                       // how often the folder is re-scanned (ms)
/* ====================== */

var $=function(id){return document.getElementById(id)};
var layers=[$('la'),$('lb')], cur=1, idx=0, slides=[], playing=false, timer=null, idleT=null;
var audio=$('aud'), musicWanted=true, gestureBound=false, loadedOnce=false;
var EXT=/\.(jpe?g|png|webp|gif|avif|bmp)$/i;
var ICON_PLAY='<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>';
var ICON_STOP='<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>';

$('logo').onerror=function(){this.style.display='none'};

/* title = file name without extension */
function nameOf(path){
  var n=path.split('/').pop();
  try{n=decodeURIComponent(n);}catch(e){}
  return n.replace(EXT,'').replace(/_+/g,' ').trim();
}
function toSlide(file){
  return {src:IMAGE_DIR+file.split('/').map(encodeURIComponent).join('/'),t:nameOf(file)};
}
function sortList(a){
  return a.sort(function(x,y){return x.t.localeCompare(y.t,undefined,{numeric:true,sensitivity:'base'});});
}

/* ====== READ THE FOLDER ====== */
/* Pure JavaScript: reads the folder listing the web server provides for images/ (directory listing must be enabled). */
function fromListing(){
  return fetch(IMAGE_DIR,{cache:'no-store'}).then(function(r){
    if(!r.ok) throw 0;
    return r.text();
  }).then(function(html){
    var re=/href="([^"?#]+)"/gi, m, out=[], seen={};
    while((m=re.exec(html))){
      var href=m[1];
      if(!EXT.test(href)) continue;
      var file=href.split('/').pop();
      try{file=decodeURIComponent(file);}catch(e){}
      if(!seen[file]){seen[file]=1;out.push(toSlide(file));}
    }
    return out;
  });
}
function readFolder(){
  return fromListing().then(sortList).catch(function(){return null;});
}

/* ====== SLIDESHOW ====== */
function setUI(){
  if(!slides.length){
    $('count').textContent='0 / 0';
    $('info').classList.add('empty');
    return;
  }
  $('info').classList.remove('empty');
  $('ttl').textContent=slides[idx].t;
  $('count').textContent=(idx+1)+' / '+slides.length;
}

/* ====== TRANSITION + ZOOM EFFECTS ======
   The effect button cycles through these. Zoom only happens while playing (it always settles back to 100%).
   Not playing: the transition still runs, but with no zoom at all. */
var EASE='cubic-bezier(.2,.6,.2,1)', EASE_IO='cubic-bezier(.65,0,.35,1)';
var fxIdx=0, toastT=null, lastMix=-1, lastUsed=0;
function rnd(a,b){return a+Math.random()*(b-a);}
function setOrigin(el,lo,hi){el.style.transformOrigin=rnd(lo,hi).toFixed(0)+'% '+rnd(lo,hi).toFixed(0)+'%';}
function prep(el){
  stopMotion(el);
  el.style.transition='none';
  el.style.opacity='0';
  el.style.transform='scale(1)';
  el.style.filter='none';
  el.style.clipPath='none';
  el.style.transformOrigin='50% 50%';
}
function flush(el){void el.offsetWidth;}

/* Rest-zoom (all effects except Classic, only while playing): while an image stays on screen (3 / 5 / 10 / 20 / 30 s)
   it very slowly does EITHER a zoom-in OR a zoom-out - never both - until the next image replaces it. Always tiny.
   Uses the separate CSS "scale" property, so it stacks on top of the effect's own transform.
   Each effect has its own: direction d ('in' / 'out'), amount a (0.01 = 1%) and easing s ('lin' / 'ease').
   Index = position in EFFECTS. */
var DRIFT={
 1:{d:'in',  a:0.010, s:'lin'},    // Slide
 2:{d:'out', a:0.012, s:'ease'},   // Blur Dissolve
 3:{d:'in',  a:0.015, s:'lin'},    // Iris
 4:{d:'out', a:0.010, s:'ease'},   // Wipe
 5:{d:'in',  a:0.012, s:'ease'},   // Flip
 6:{d:'out', a:0.015, s:'lin'}     // Spin
 /* Classic (0) has no rest-zoom. Mix (7) uses the rest-zoom of whichever effect it picked. */
};
function motion(el,used,resume){
  var cfg=DRIFT[used];
  if(!cfg||!el.animate) return;
  if(resume&&cfg.d==='out') return;                 // a zoom-out cannot start from 100% without a jump; it starts with the next image
  var total=INTERVAL+FADE+500;
  var step=Math.max(100,Math.ceil(total/150)), kf=[];
  function at(t){
    var u=t/total, sh=(cfg.s==='ease')?u*u*(3-2*u):u;
    var v=1+cfg.a*(cfg.d==='in'?sh:(1-sh));
    return v;
  }
  for(var t=0;t<total;t+=step) kf.push({offset:t/total,scale:at(t).toFixed(4)});
  kf.push({offset:1,scale:at(total).toFixed(4)});
  try{ el._pulse=el.animate(kf,{duration:total,easing:'linear',fill:'forwards'}); }catch(e){}
}
function stopMotion(el){
  if(el._pulse){ try{el._pulse.cancel();}catch(e){} el._pulse=null; }
}
/* Stop pressed: ease the current image back to exactly 100% */
function settleScale(el){
  if(!el._pulse) return;
  var cs=getComputedStyle(el).scale;
  stopMotion(el);
  if(cs&&cs!=='none'&&el.animate){ try{ el._pulse=el.animate([{scale:cs},{scale:'1'}],{duration:600,easing:'ease-out'}); }catch(e){} }
}

var EFFECTS=[
 { name:'Classic',        /* default: crossfade + small zoom that settles */
   run:function(n,p,d,z){
     prep(n);
     if(z){ setOrigin(n,20,80); n.style.transform='scale('+rnd(ZOOM_FROM,ZOOM_TO).toFixed(3)+')'; }
     flush(n);
     var tr='opacity '+FADE+'ms, transform '+ZOOM_MS+'ms '+EASE;
     n.style.transition=tr; n.style.opacity='1'; n.style.transform='scale(1)';
     p.style.transition=tr; p.style.opacity='0';
   }},
 { name:'Slide',          /* horizontal slide + medium zoom */
   run:function(n,p,d,z){
     prep(n); n.style.opacity='1';
     n.style.transform='translateX('+(d*100)+'%) scale('+(z?rnd(1.08,1.12).toFixed(3):1)+')';
     flush(n);
     var tr='transform '+SLIDE_MS+'ms '+EASE_IO;
     n.style.transition=tr; n.style.transform='translateX(0%) scale(1)';
     p.style.transition=tr; p.style.transform='translateX('+(-d*100)+'%) scale(1)';
   }},
 { name:'Blur Dissolve',  /* soft blur dissolve + very subtle zoom */
   run:function(n,p,d,z){
     prep(n);
     n.style.filter='blur(18px)';
     if(z){ setOrigin(n,35,65); n.style.transform='scale('+rnd(1.03,1.05).toFixed(3)+')'; }
     flush(n);
     n.style.transition='opacity '+BLUR_MS+'ms ease, filter '+BLUR_MS+'ms ease, transform '+ZOOM_MS+'ms '+EASE;
     n.style.opacity='1'; n.style.filter='blur(0px)'; n.style.transform='scale(1)';
     p.style.transition='opacity '+BLUR_MS+'ms ease, filter '+BLUR_MS+'ms ease';
     p.style.opacity='0'; p.style.filter='blur(18px)';
   }},
 { name:'Iris',           /* circle opens from the center + strong zoom */
   run:function(n,p,d,z){
     prep(n); n.style.opacity='1';
     n.style.clipPath='circle(0% at 50% 50%)';
     if(z) n.style.transform='scale('+rnd(1.25,1.35).toFixed(3)+')';
     flush(n);
     n.style.transition='clip-path '+IRIS_MS+'ms '+EASE_IO+', transform '+(IRIS_MS+500)+'ms '+EASE;
     n.style.clipPath='circle(80% at 50% 50%)'; n.style.transform='scale(1)';
   }},
 { name:'Wipe',           /* vertical wipe (up, or down when going back) + zoom with parallax on the old image */
   run:function(n,p,d,z){
     prep(n); n.style.opacity='1';
     n.style.clipPath=d>0?'inset(100% 0 0 0)':'inset(0 0 100% 0)';
     if(z){ setOrigin(n,40,60); n.style.transform='scale('+rnd(1.14,1.18).toFixed(3)+')'; }
     flush(n);
     n.style.transition='clip-path '+WIPE_MS+'ms '+EASE_IO+', transform '+(WIPE_MS+600)+'ms '+EASE;
     n.style.clipPath='inset(0 0 0 0)'; n.style.transform='scale(1)';
     if(z){ p.style.transition='transform '+WIPE_MS+'ms '+EASE_IO; p.style.transform='scale(1.08)'; }
   }},
 { name:'Flip',           /* 3D card flip around the vertical axis + zoom-out */
   run:function(n,p,d,z){
     prep(n);
     n.style.transform='perspective(1400px) rotateY('+(-d*70)+'deg) scale('+(z?rnd(1.10,1.16).toFixed(3):1)+')';
     flush(n);
     n.style.transition='opacity '+FLIP_MS+'ms ease, transform '+(FLIP_MS+300)+'ms '+EASE_IO;
     n.style.opacity='1'; n.style.transform='perspective(1400px) rotateY(0deg) scale(1)';
     p.style.transition='opacity '+FLIP_MS+'ms ease, transform '+FLIP_MS+'ms '+EASE_IO;
     p.style.opacity='0'; p.style.transform='perspective(1400px) rotateY('+(d*70)+'deg) scale(1)';
   }},
 { name:'Spin',           /* slight rotation while fading in + big zoom-out */
   run:function(n,p,d,z){
     prep(n);
     n.style.transform='rotate('+(-d*6)+'deg) scale('+(z?rnd(1.30,1.40).toFixed(3):1)+')';
     flush(n);
     n.style.transition='opacity '+SPIN_MS+'ms ease, transform '+(SPIN_MS+400)+'ms '+EASE;
     n.style.opacity='1'; n.style.transform='rotate(0deg) scale(1)';
     p.style.transition='opacity '+SPIN_MS+'ms ease, transform '+SPIN_MS+'ms '+EASE_IO;
     p.style.opacity='0'; p.style.transform='rotate('+(d*6)+'deg) scale(1)';
   }},
 { name:'Mix (random)',   /* must stay LAST: picks a different effect from the list above on every change */
   run:function(n,p,d,z){
     var pool=EFFECTS.length-1, k;
     do{ k=Math.floor(Math.random()*pool); }while(k===lastMix&&pool>1);
     lastMix=k;
     EFFECTS[k].run(n,p,d,z);
   }}
];

function show(i,dir){
  if(!slides.length) return;
  dir=dir||1;
  idx=(i+slides.length)%slides.length;
  var prev=layers[cur]; cur=1-cur; var next=layers[cur];
  next.style.backgroundImage='url("'+slides[idx].src+'")';
  next.style.zIndex=2; prev.style.zIndex=1;   // new image always on top (stays below the shade and the controls)
  EFFECTS[fxIdx].run(next,prev,dir,playing);
  var used=(EFFECTS[fxIdx].name==='Mix (random)')?lastMix:fxIdx;   // the effect that really ran
  lastUsed=used;
  if(playing&&used!==0) motion(next,used,false);                   // every effect except Classic (#1)
  setUI();
  var nx=slides[(idx+1)%slides.length]; if(nx){var im=new Image(); im.src=nx.src;}
}

function schedule(){
  clearTimeout(timer);
  if(playing&&slides.length>1) timer=setTimeout(function(){show(idx+1);schedule();},INTERVAL);
}
function go(d){ if(!slides.length) return; show(idx+d,d); schedule(); }

function setPlaying(p){
  playing=p;
  $('play').innerHTML=p?ICON_STOP:ICON_PLAY;
  $('play').classList.toggle('active',p);
  if(!slides.length) return;
  if(!p){
    var l=layers[cur];
    l.style.transition='opacity '+FADE+'ms, transform .6s ease, filter .6s ease';
    l.style.transform='scale(1)'; l.style.filter='none';
    settleScale(l);
  } else if(lastUsed>0){
    motion(layers[cur],lastUsed,true);     // play pressed while an image rests: slow zoom-in continues from 100%
  }
  schedule();
}

/* ====== AUTO REFRESH (new / deleted images) ====== */
function applyList(list){
  var same=list.length===slides.length && list.every(function(s,i){return s.src===slides[i].src;});
  if(same) return;
  var wasEmpty=!slides.length;
  var curSrc=slides[idx]&&slides[idx].src;
  slides=list;
  if(!slides.length){            // folder is empty now
    clearTimeout(timer);
    layers.forEach(function(l){l.style.transition='opacity '+FADE+'ms';l.style.opacity='0';});
    setUI();
    return;
  }
  if(wasEmpty){ show(0); setPlaying(true); return; }
  var k=-1;
  for(var i=0;i<slides.length;i++){ if(slides[i].src===curSrc){k=i;break;} }
  if(k>=0){ idx=k; setUI(); schedule(); }    // current image still exists: keep showing it
  else { show(Math.min(idx,slides.length-1)); schedule(); }   // it was deleted: move on
}
function refresh(){
  readFolder().then(function(list){
    if(list===null){
      if(!loadedOnce){
        $('info').classList.remove('empty');
        $('ttl').textContent='Cannot read the images folder. Enable directory listing for it on the server.';
      }
      return;
    }
    loadedOnce=true;
    applyList(list);
    if(!list.length){
      $('info').classList.remove('empty');
      $('ttl').textContent='No images found. Add files to the images folder.';
    }
  });
}

/* ====== MUSIC (live radio) ====== */
function setMusUI(on){
  $('mus').classList.toggle('active',on);
  $('mus').classList.toggle('muted',!on);
}
function musicStart(){
  audio.src=STREAM;
  var p=audio.play();
  if(p&&p.then){
    p.then(function(){setMusUI(true);}).catch(function(){setMusUI(false);bindGesture();});
  }
}
function musicStop(){
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  setMusUI(false);
}
/* If the browser blocks autoplay, music starts on the first click / tap / key press. */
function bindGesture(){
  if(gestureBound) return;
  gestureBound=true;
  var ev=['pointerdown','keydown','touchend'];
  var fn=function(e){
    if(e.target.closest&&e.target.closest('#mus')) return;
    ev.forEach(function(n){document.removeEventListener(n,fn,true);});
    gestureBound=false;
    if(musicWanted&&audio.paused) musicStart();
  };
  ev.forEach(function(n){document.addEventListener(n,fn,true);});
}
audio.addEventListener('error',function(){if(audio.getAttribute('src'))setMusUI(false);});
$('mus').onclick=function(){
  if(!audio.paused&&audio.getAttribute('src')){musicWanted=false;musicStop();}
  else{musicWanted=true;musicStart();}
};

/* ====== CONTROLS ====== */
function wake(){
  document.body.classList.remove('idle');
  clearTimeout(idleT);
  idleT=setTimeout(function(){document.body.classList.add('idle');},3500);
}
$('prev').onclick=function(){go(-1)};
$('next').onclick=function(){go(1)};
$('play').onclick=function(){setPlaying(!playing)};
$('eye').onclick=function(){document.body.classList.toggle('off')};
function toast(t){
  var e=$('toast'); e.textContent=t; e.classList.add('show');
  clearTimeout(toastT); toastT=setTimeout(function(){e.classList.remove('show');},1800);
}
var timeIdx=Math.max(0,TIMES.indexOf(INTERVAL/1000));
function nextTime(){
  timeIdx=(timeIdx+1)%TIMES.length;
  INTERVAL=TIMES[timeIdx]*1000;
  toast('Time per image: '+TIMES[timeIdx]+' s ('+(timeIdx+1)+'/'+TIMES.length+')');
  schedule();                    // restart the timer with the new time
}
function nextEffect(){
  fxIdx=(fxIdx+1)%EFFECTS.length;
  toast('Effect '+(fxIdx+1)+'/'+EFFECTS.length+': '+EFFECTS[fxIdx].name);
  if(slides.length){ show(idx,1); schedule(); }   // replay the current image with the new effect
}
$('fx').onclick=nextEffect;
$('tm').onclick=nextTime;
document.addEventListener('keydown',function(e){
  if(e.key==='ArrowRight')go(1);
  else if(e.key==='ArrowLeft')go(-1);
  else if(e.key===' '){e.preventDefault();setPlaying(!playing);}
  else if(e.key==='h'||e.key==='H')document.body.classList.toggle('off');
  else if(e.key==='e'||e.key==='E')nextEffect();
  else if(e.key==='t'||e.key==='T')nextTime();
  wake();
});
['mousemove','pointerdown','touchstart'].forEach(function(ev){document.addEventListener(ev,wake,{passive:true});});
document.addEventListener('visibilitychange',function(){if(!document.hidden)refresh();});

/* ====== START ====== */
$('play').innerHTML=ICON_PLAY;
$('info').classList.add('empty');
setMusUI(false);
wake();
musicStart();                 // music plays by default
setPlaying(true);             // slideshow plays by default (starts as soon as images are found)
refresh();
setInterval(refresh,REFRESH);
})();
