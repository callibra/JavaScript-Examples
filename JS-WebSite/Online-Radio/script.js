// Browser-ready JavaScript compiled from the original React JSX.
// JSX is transformed to React.createElement so no in-browser Babel compilation is required.
const { useState, useEffect, useRef, useCallback, useMemo } = React;
// Inline SVG icon components
const Sparkles = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "m12 3-1.9 5.8a2 2 0 0 1-1.28 1.28L3 12l5.8 1.9a2 2 0 0 1 1.28 1.28L12 21l1.9-5.8a2 2 0 0 1 1.28-1.28L21 12l-5.8-1.9a2 2 0 0 1-1.28-1.28Z" }));
const Clock = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("polyline", { points: "12 6 12 12 16 14" }));
const Globe = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
    React.createElement("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }));
const Keyboard = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", ry: "2" }),
    React.createElement("line", { x1: "6", y1: "8", x2: "6", y2: "8" }),
    React.createElement("line", { x1: "10", y1: "8", x2: "10", y2: "8" }),
    React.createElement("line", { x1: "14", y1: "8", x2: "14", y2: "8" }),
    React.createElement("line", { x1: "18", y1: "8", x2: "18", y2: "8" }),
    React.createElement("line", { x1: "6", y1: "12", x2: "6", y2: "12" }),
    React.createElement("line", { x1: "10", y1: "12", x2: "10", y2: "12" }),
    React.createElement("line", { x1: "14", y1: "12", x2: "14", y2: "12" }),
    React.createElement("line", { x1: "18", y1: "12", x2: "18", y2: "12" }),
    React.createElement("line", { x1: "8", y1: "16", x2: "16", y2: "16" }));
const Sun = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("circle", { cx: "12", cy: "12", r: "5" }),
    React.createElement("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
    React.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
    React.createElement("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
    React.createElement("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
    React.createElement("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
    React.createElement("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
    React.createElement("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
    React.createElement("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }));
const Moon = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }));
const Radio = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }),
    React.createElement("path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "2" }),
    React.createElement("path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }),
    React.createElement("path", { d: "M19.1 4.9c3.9 3.9 3.9 10.2 0 14.1" }));
const Grid = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("rect", { x: "3", y: "3", width: "7", height: "7" }),
    React.createElement("rect", { x: "14", y: "3", width: "7", height: "7" }),
    React.createElement("rect", { x: "14", y: "14", width: "7", height: "7" }),
    React.createElement("rect", { x: "3", y: "14", width: "7", height: "7" }));
const X = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
const Search = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("circle", { cx: "11", cy: "11", r: "8" }),
    React.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }));
const Star = ({ className, filled }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: filled ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }));
const History = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    React.createElement("path", { d: "M3 3v5h5" }),
    React.createElement("path", { d: "M12 7v5l4 2" }));
const Music = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M9 18V5l12-2v13" }),
    React.createElement("circle", { cx: "6", cy: "18", r: "3" }),
    React.createElement("circle", { cx: "18", cy: "16", r: "3" }));
const Copy = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    React.createElement("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }));
const Check = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("polyline", { points: "20 6 9 17 4 12" }));
const Calendar = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" }));
const Eye = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "3" }));
const Disc = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "3" }));
const ExternalLink = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    React.createElement("polyline", { points: "15 3 21 3 21 9" }),
    React.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" }));
const Loader2 = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }));
const Pause = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }),
    React.createElement("rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }));
const Play = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("polygon", { points: "5 3 19 12 5 21 5 3" }));
const VolumeX = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
    React.createElement("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
    React.createElement("line", { x1: "17", y1: "9", x2: "23", y2: "15" }));
const Volume2 = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
    React.createElement("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" }));
const Activity = ({ className }) => React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }));
const HIRSCHMILCH_STATIONS = [
    {
        id: 'chillout',
        name: 'Chillout',
        fullName: 'Hirschmilch Chillout',
        genre: 'Ambient / Downtempo / Lo-Fi',
        description: 'Atmospheric ambient soundscapes, relaxed downtempo beats, and soothing lo-fi textures.',
        defaultArtwork: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/chillout.mp3',
            'https://hirschmilch.de:8000/chillout.mp3',
            'https://hirschmilch.de/chillout.mp3'
        ],
        accentColor: '#10b981',
        badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
        id: 'electronic',
        name: 'Electronic',
        fullName: 'Hirschmilch Electronic',
        genre: 'Electro / IDM / Synthwave',
        description: 'Cutting-edge electronic synthlines, crisp modular beats, and experimental synthesizer grooves.',
        defaultArtwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/electronic.mp3',
            'https://hirschmilch.de:8000/electronic.mp3',
            'https://hirschmilch.de/electronic.mp3'
        ],
        accentColor: '#06b6d4',
        badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    },
    {
        id: 'hypnotic',
        name: 'Hypnotic',
        fullName: 'Hirschmilch Hypnotic',
        genre: 'Hypnotic Techno / Deep Ambient',
        description: 'Deep, immersive atmospheric rhythms and mind-bending hypnotic soundscapes.',
        defaultArtwork: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/hypnotic.mp3',
            'https://hirschmilch.de:8000/hypnotic.mp3',
            'https://hirschmilch.de/hypnotic.mp3'
        ],
        accentColor: '#a855f7',
        badgeBg: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    },
    {
        id: 'organichouse',
        name: 'Organic House',
        fullName: 'Hirschmilch Organic House',
        genre: 'Organic / Deep Melodic',
        description: 'Organic acoustic textures, warm live percussion, and deep emotive melodic house.',
        defaultArtwork: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/organichouse.mp3',
            'https://hirschmilch.de:8000/organichouse.mp3',
            'https://hirschmilch.de/organichouse.mp3'
        ],
        accentColor: '#f59e0b',
        badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    },
    {
        id: 'proghouse',
        name: 'Prog House',
        fullName: 'Hirschmilch Prog House',
        genre: 'Progressive House',
        description: 'Driving basslines, emotional melodies, and deep progressive house energy.',
        defaultArtwork: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/proghouse.mp3',
            'https://hirschmilch.de:8000/proghouse.mp3',
            'https://hirschmilch.de/proghouse.mp3'
        ],
        accentColor: '#6366f1',
        badgeBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    },
    {
        id: 'progressive',
        name: 'Progressive',
        fullName: 'Hirschmilch Progressive',
        genre: 'Progressive Trance',
        description: 'Pure hypnotic progressive trance, uplifting synths, and driving cosmic energy.',
        defaultArtwork: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/progressive.mp3',
            'https://hirschmilch.de:8000/progressive.mp3',
            'https://hirschmilch.de/progressive.mp3'
        ],
        accentColor: '#d946ef',
        badgeBg: 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30'
    },
    {
        id: 'psytrance',
        name: 'Psytrance',
        fullName: 'Hirschmilch Psytrance',
        genre: 'Psytrance / Goa',
        description: 'High-octane psychedelic trance, explosive rhythms, and mind-expanding sounds.',
        defaultArtwork: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/psytrance.mp3',
            'https://hirschmilch.de:8000/psytrance.mp3',
            'https://hirschmilch.de/psytrance.mp3'
        ],
        accentColor: '#ec4899',
        badgeBg: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    },
    {
        id: 'techno',
        name: 'Techno',
        fullName: 'Hirschmilch Techno',
        genre: 'Underground Techno',
        description: 'Industrial warehouse techno, pounding kick drums, and raw hypnotic energy.',
        defaultArtwork: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
        streamUrls: [
            'https://hirschmilch.de:7000/techno.mp3',
            'https://hirschmilch.de:8000/techno.mp3',
            'https://hirschmilch.de/techno.mp3'
        ],
        accentColor: '#f43f5e',
        badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    }
];
const TRANSLATIONS = {
    en: {
        portalTitle: "HIRSCHMILCH ULTRA LIVE PORTAL",
        liveTime: "Live Time",
        keys: "Keys",
        light: "Light",
        dark: "Dark",
        radioTitle: "HIRSCHMILCH RADIO",
        liveChannels: "8 Direct HD Channels Live",
        channel: "Channel",
        selectChannel: "Select one of 8 official HD streams",
        searchPlaceholder: "Search channel or genre (Chillout, Techno, Psytrance...)",
        allChannels: "All",
        favorites: "Favorites",
        nowPlaying: "Now Playing Live",
        sessionTime: "Listening Session",
        liveStream: "Live HD Stream",
        copy: "Copy",
        history: "History",
        historyTitle: "Track History",
        historySubtitle: "Previously broadcast tracks in this session",
        historyEmpty: "History populates automatically as tracks change.",
        sleepTimer: "Sleep Timer",
        sleepDesc: "Automatically pause radio after specified minutes.",
        min: "min",
        cancelTimer: "Cancel active timer",
        timerSet: "Sleep timer set for",
        timerExpired: "Sleep timer expired - stream paused.",
        timerCanceled: "Sleep timer canceled",
        shortcuts: "Keyboard Shortcuts",
        space: "Play / Pause",
        muteKey: "Mute / Unmute",
        volumeKeys: "Volume Up / Down",
        channelKeys: "Previous / Next Channel",
        menuKey: "Open Channels Menu",
        historyKey: "View History",
        listenersLive: "Live",
        todayVisitors: "Today",
        totalVisitors: "Total",
        connecting: "CONNECTING...",
        hdLive: "HD LIVE",
        audioSpectrum: "Audio Spectrum",
        searchSpotify: "Search on Spotify",
        allRights: "Hirschmilch Radio Ultra Stream Portal",
        listenLive: "Listen Live",
        playChannel: "Play Channel →",
        copied: "Copied to clipboard!"
    },
    mk: {
        portalTitle: "HIRSCHMILCH ULTRA LIVE PORTAL",
        liveTime: "Време во живо",
        keys: "Копчиња",
        light: "Светла",
        dark: "Темна",
        radioTitle: "HIRSCHMILCH RADIO",
        liveChannels: "8 Директни HD Канали Live",
        channel: "Канал",
        selectChannel: "Изберете еден од 8-те официјални HD стримови",
        searchPlaceholder: "Пребарај канал или жанр (Chillout, Techno, Psytrance...)",
        allChannels: "Сите",
        favorites: "Омилени",
        nowPlaying: "Се емитува во живо",
        sessionTime: "Време на слушање",
        liveStream: "HD Стрим во живо",
        copy: "Копирај",
        history: "Историја",
        historyTitle: "Историја на Песни",
        historySubtitle: "Претходно емитувани нумери во оваа сесија",
        historyEmpty: "Историјата се пополнува автоматски кога серверот испраќа информации.",
        sleepTimer: "Тајмер за Исклучување",
        sleepDesc: "Автоматски паузирај го радиото по изминати минути.",
        min: "мин",
        cancelTimer: "Прекини го активниот тајмер",
        timerSet: "Тајмерот е поставен на",
        timerExpired: "Тајмерот истече - стримот е паузиран.",
        timerCanceled: "Тајмерот е откажан",
        shortcuts: "Кратенки од Тастатура",
        space: "Пушти / Паузирај",
        muteKey: "Исклучи / Вклучи Звук",
        volumeKeys: "Зголеми / Намали Јачина",
        channelKeys: "Претходен / Следен Канал",
        menuKey: "Отвори мени со Канали",
        historyKey: "Преглед на Историја",
        listenersLive: "Во Живо",
        todayVisitors: "Денес",
        totalVisitors: "Вкупно",
        connecting: "ПОВРЗУВАЊЕ...",
        hdLive: "HD LIVE",
        audioSpectrum: "Аудио Спектар",
        searchSpotify: "Пребарај на Spotify",
        allRights: "Hirschmilch Radio Ultra Stream Portal",
        listenLive: "Слушате во живо",
        playChannel: "Пушти Канал →",
        copied: "Копирано во клипборд!"
    }
};
const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const t = setTimeout(onClose, 3000);
        return () => clearTimeout(t);
    }, [message, onClose]);
    return (React.createElement("div", { className: "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs shadow-2xl animate-fade-in border border-indigo-400/40" },
        React.createElement(Check, { className: "w-4 h-4 text-emerald-300 shrink-0" }),
        React.createElement("span", null, message),
        React.createElement("button", { onClick: onClose, className: "ml-2 p-1 hover:bg-indigo-700/50 rounded-lg transition-colors text-indigo-200 hover:text-white", "aria-label": "Close" },
            React.createElement(X, { className: "w-3.5 h-3.5" }))));
};
const Header = ({ darkMode, setDarkMode, lang, setLang, t, currentStation, realTime, onOpenStationModal, onOpenShortcutsModal }) => (React.createElement("header", { className: "w-full max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-3" },
    React.createElement("div", { className: "flex items-center justify-between border-b border-slate-800/60 pb-3 text-xs" },
        React.createElement("div", { className: "flex items-center gap-2 font-bold tracking-wide text-indigo-400" },
            React.createElement(Sparkles, { className: "w-4 h-4 text-pink-400 animate-spin-slow" }),
            React.createElement("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-300" }, t.portalTitle)),
        React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement("div", { className: "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 font-mono text-[11px]" },
                React.createElement(Clock, { className: "w-3.5 h-3.5 text-emerald-400" }),
                React.createElement("span", null,
                    t.liveTime,
                    ": "),
                React.createElement("strong", { className: "text-emerald-400 font-semibold" }, realTime)),
            React.createElement("button", { onClick: () => setLang(lang === 'en' ? 'mk' : 'en'), className: `px-2.5 py-1.5 rounded-xl border font-mono font-bold text-xs flex items-center gap-1.5 transition-all ${darkMode ? 'bg-slate-900/80 border-slate-800 text-indigo-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-indigo-600 hover:bg-slate-100'}`, title: "Change Language" },
                React.createElement(Globe, { className: "w-3.5 h-3.5" }),
                React.createElement("span", null, lang.toUpperCase())),
            React.createElement("button", { onClick: onOpenShortcutsModal, className: `p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`, title: t.shortcuts },
                React.createElement(Keyboard, { className: "w-3.5 h-3.5 text-indigo-400" }),
                React.createElement("span", { className: "hidden sm:inline font-mono text-[11px]" }, t.keys)),
            React.createElement("button", { onClick: () => setDarkMode(!darkMode), className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-amber-400 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}` },
                darkMode ? React.createElement(Sun, { className: "w-3.5 h-3.5" }) : React.createElement(Moon, { className: "w-3.5 h-3.5" }),
                React.createElement("span", { className: "hidden sm:inline" }, darkMode ? t.light : t.dark)))),
    React.createElement("div", { className: "flex items-center justify-between gap-4 mt-4" },
        React.createElement("div", { className: "flex items-center space-x-3.5" },
            React.createElement("div", { className: "p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 text-white shadow-xl shadow-indigo-500/25 animate-float" },
                React.createElement(Radio, { className: "w-7 h-7" })),
            React.createElement("div", null,
                React.createElement("h1", { className: "font-black text-xl sm:text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400" }, t.radioTitle),
                React.createElement("p", { className: "text-xs text-slate-400 font-medium flex items-center gap-2 mt-0.5" },
                    React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping" }),
                    React.createElement("span", null, t.liveChannels)))),
        React.createElement("button", { onClick: onOpenStationModal, className: `flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs border transition-all duration-300 shadow-lg ${darkMode
                ? 'bg-indigo-600/20 border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/30'
                : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'}` },
            React.createElement(Grid, { className: "w-4 h-4 text-indigo-400" }),
            React.createElement("span", { className: "hidden sm:inline" },
                t.channel,
                ":"),
            React.createElement("span", { className: "text-white font-extrabold" }, currentStation.name)))));
const StationSelectorModal = ({ isOpen, onClose, stations, currentStation, onSelectStation, favorites, onToggleFavorite, darkMode, t }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    if (!isOpen)
        return null;
    const filtered = stations.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.description.toLowerCase().includes(searchTerm.toLowerCase());
        if (filterCategory === 'favs')
            return matchesSearch && favorites.includes(s.id);
        return matchesSearch;
    });
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" },
        React.createElement("div", { className: `w-full max-w-3xl rounded-3xl p-6 shadow-2xl border max-h-[85vh] flex flex-col glass-modal ${darkMode ? 'border-slate-800 text-slate-100' : 'border-slate-200 text-slate-800'}` },
            React.createElement("div", { className: "flex items-center justify-between pb-4 border-b border-slate-800" },
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" },
                        React.createElement(Grid, { className: "w-5 h-5" })),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-black text-lg" }, "Hirschmilch Radio Channels"),
                        React.createElement("p", { className: "text-xs text-slate-400" }, t.selectChannel))),
                React.createElement("button", { onClick: onClose, className: "p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white" },
                    React.createElement(X, { className: "w-5 h-5" }))),
            React.createElement("div", { className: "mt-4 flex flex-col sm:flex-row items-center gap-3" },
                React.createElement("div", { className: "relative flex-1 w-full" },
                    React.createElement(Search, { className: "w-4 h-4 absolute left-3.5 top-3 text-slate-400" }),
                    React.createElement("input", { type: "text", placeholder: t.searchPlaceholder, value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: `w-full pl-10 pr-4 py-2.5 text-xs font-medium rounded-2xl border outline-none transition-all ${darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-500'}` })),
                React.createElement("div", { className: "flex items-center gap-1.5 self-start sm:self-auto" },
                    React.createElement("button", { onClick: () => setFilterCategory('all'), className: `px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${filterCategory === 'all' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800/50 border-slate-700 text-slate-400'}` },
                        t.allChannels,
                        " (8)"),
                    React.createElement("button", { onClick: () => setFilterCategory('favs'), className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${filterCategory === 'favs' ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-800/50 border-slate-700 text-slate-400'}` },
                        React.createElement(Star, { className: "w-3.5 h-3.5", filled: filterCategory === 'favs' }),
                        t.favorites,
                        " (",
                        favorites.length,
                        ")"))),
            React.createElement("div", { className: "mt-4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3.5 pr-1 custom-scrollbar flex-1" }, filtered.map((st) => {
                const isActive = currentStation.id === st.id;
                const isFav = favorites.includes(st.id);
                return (React.createElement("div", { key: st.id, onClick: () => {
                        onSelectStation(st);
                        onClose();
                    }, className: `group relative flex flex-col justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-200 hover:scale-[1.01] ${isActive
                        ? 'bg-gradient-to-br from-indigo-900/70 to-purple-900/70 border-indigo-500 shadow-xl shadow-indigo-500/20'
                        : darkMode
                            ? 'bg-slate-950/70 border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-800/40'
                            : 'bg-slate-50 border-slate-200 hover:border-indigo-500/40'}` },
                    React.createElement("div", { className: "flex items-start space-x-3" },
                        React.createElement("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-md ${st.badgeBg}` },
                            React.createElement(Radio, { className: "w-6 h-6" })),
                        React.createElement("div", { className: "min-w-0 flex-1" },
                            React.createElement("div", { className: "flex items-center justify-between" },
                                React.createElement("h4", { className: "font-extrabold text-sm truncate" }, st.fullName),
                                React.createElement("button", { onClick: (e) => {
                                        e.stopPropagation();
                                        onToggleFavorite(st.id);
                                    }, className: `p-1 rounded-lg transition-colors ${isFav ? 'text-amber-400' : 'text-slate-500 hover:text-slate-300'}` },
                                    React.createElement(Star, { className: "w-4 h-4", filled: isFav }))),
                            React.createElement("p", { className: "text-[11px] font-bold text-indigo-400 mt-0.5" }, st.genre),
                            React.createElement("p", { className: "text-[11px] text-slate-400 mt-1 line-clamp-2" }, st.description))),
                    React.createElement("div", { className: "mt-3 pt-2 border-t border-slate-800/50 flex items-center justify-between text-[11px]" },
                        React.createElement("span", { className: "text-slate-400 font-mono" }, "128 KBPS MP3"),
                        React.createElement("span", { className: `font-bold flex items-center gap-1 ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-indigo-400'}` }, isActive ? t.listenLive : t.playChannel))));
            })))));
};
const HistoryModal = ({ isOpen, onClose, history, darkMode, onCopyTrack, t }) => {
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" },
        React.createElement("div", { className: `w-full max-w-lg rounded-3xl p-6 shadow-2xl border glass-modal ${darkMode ? 'border-slate-800 text-slate-100' : 'border-slate-200 text-slate-800'}` },
            React.createElement("div", { className: "flex items-center justify-between pb-4 border-b border-slate-800" },
                React.createElement("div", { className: "flex items-center gap-2.5" },
                    React.createElement("div", { className: "p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" },
                        React.createElement(History, { className: "w-5 h-5" })),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-bold text-lg" }, t.historyTitle),
                        React.createElement("p", { className: "text-xs text-slate-400" }, t.historySubtitle))),
                React.createElement("button", { onClick: onClose, className: "p-2 rounded-xl hover:bg-slate-800 text-slate-400" },
                    React.createElement(X, { className: "w-5 h-5" }))),
            React.createElement("div", { className: "mt-4 max-h-80 overflow-y-auto space-y-2.5 pr-1 custom-scrollbar" }, history.length === 0 ? (React.createElement("div", { className: "text-center py-12 text-slate-500 text-xs" },
                React.createElement(Music, { className: "w-8 h-8 mx-auto mb-2 opacity-40" }),
                t.historyEmpty)) : (history.map((item, idx) => (React.createElement("div", { key: item.id || idx, className: "flex items-center space-x-3 p-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 hover:border-indigo-500/40 transition-all" },
                React.createElement("img", { src: item.artwork, alt: item.title, className: "w-11 h-11 rounded-xl object-cover shrink-0 bg-slate-800" }),
                React.createElement("div", { className: "flex-1 min-w-0" },
                    React.createElement("p", { className: "font-bold text-xs truncate" }, item.title),
                    React.createElement("p", { className: "text-[11px] text-indigo-400 truncate mt-0.5" }, item.artist)),
                React.createElement("div", { className: "flex items-center space-x-2 shrink-0" },
                    React.createElement("span", { className: "text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-1 rounded-lg" }, item.time),
                    React.createElement("button", { onClick: () => onCopyTrack(`${item.artist} - ${item.title}`), className: "p-1.5 rounded-lg hover:bg-indigo-500/20 text-slate-400 hover:text-indigo-400" },
                        React.createElement(Copy, { className: "w-3.5 h-3.5" })))))))))));
};
const SleepTimerModal = ({ isOpen, onClose, sleepMinutes, onStartTimer, onCancelTimer, darkMode, t }) => {
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" },
        React.createElement("div", { className: `w-full max-w-sm rounded-3xl p-6 shadow-2xl border glass-modal ${darkMode ? 'border-slate-800 text-slate-100' : 'border-slate-200 text-slate-800'}` },
            React.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement(Clock, { className: "w-5 h-5 text-indigo-400" }),
                    React.createElement("h3", { className: "font-bold text-base" }, t.sleepTimer)),
                React.createElement("button", { onClick: onClose, className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400" },
                    React.createElement(X, { className: "w-4 h-4" }))),
            React.createElement("p", { className: "text-xs text-slate-400 mt-3" }, t.sleepDesc),
            React.createElement("div", { className: "grid grid-cols-3 gap-2 my-4" }, [15, 30, 45, 60, 90, 120].map((mins) => (React.createElement("button", { key: mins, onClick: () => onStartTimer(mins), className: `py-2.5 rounded-xl font-bold text-xs border transition-all ${sleepMinutes === mins ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 hover:border-indigo-500/50 text-slate-300'}` },
                mins,
                " ",
                t.min)))),
            sleepMinutes > 0 && (React.createElement("button", { onClick: onCancelTimer, className: "w-full py-2.5 rounded-xl font-semibold text-xs bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/30" }, t.cancelTimer)))));
};
const ShortcutsModal = ({ isOpen, onClose, darkMode, t }) => {
    if (!isOpen)
        return null;
    const shortcuts = [
        { key: 'Space', desc: t.space },
        { key: 'M', desc: t.muteKey },
        { key: '↑ / ↓', desc: t.volumeKeys },
        { key: '← / →', desc: t.channelKeys },
        { key: 'C', desc: t.menuKey },
        { key: 'H', desc: t.historyKey }
    ];
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" },
        React.createElement("div", { className: `w-full max-w-sm rounded-3xl p-6 shadow-2xl border glass-modal ${darkMode ? 'border-slate-800 text-slate-100' : 'border-slate-200 text-slate-800'}` },
            React.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement(Keyboard, { className: "w-5 h-5 text-indigo-400" }),
                    React.createElement("h3", { className: "font-bold text-base" }, t.shortcuts)),
                React.createElement("button", { onClick: onClose, className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400" },
                    React.createElement(X, { className: "w-4 h-4" }))),
            React.createElement("div", { className: "space-y-2 mt-4" }, shortcuts.map((sc, i) => (React.createElement("div", { key: i, className: "flex items-center justify-between text-xs py-1.5 border-b border-slate-800/40" },
                React.createElement("span", { className: "font-mono bg-slate-800 px-2 py-1 rounded text-indigo-300 font-bold" }, sc.key),
                React.createElement("span", { className: "text-slate-400 font-medium" }, sc.desc))))))));
};
const Footer = ({ darkMode, onlineUsers, todayVisitors, totalVisitors, t }) => (React.createElement("footer", { className: `w-full border-t py-4 px-6 mt-6 transition-colors ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}` },
    React.createElement("div", { className: "max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" },
        React.createElement("div", null,
            "\u00A9 ",
            new Date().getFullYear(),
            " ",
            t.allRights),
        React.createElement("div", { className: "flex items-center gap-6 font-mono" },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("span", { className: "relative flex h-2.5 w-2.5" },
                    React.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                    React.createElement("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" })),
                React.createElement("span", { className: "text-slate-400 font-sans" },
                    t.listenersLive,
                    ":"),
                React.createElement("strong", { className: "text-emerald-400 font-bold" }, onlineUsers)),
            React.createElement("div", { className: "flex items-center gap-1.5" },
                React.createElement(Calendar, { className: "w-3.5 h-3.5 text-indigo-400" }),
                React.createElement("span", { className: "text-slate-400 font-sans" },
                    t.todayVisitors,
                    ":"),
                React.createElement("strong", { className: "text-slate-200 font-bold" }, todayVisitors)),
            React.createElement("div", { className: "flex items-center gap-1.5" },
                React.createElement(Eye, { className: "w-3.5 h-3.5 text-pink-400" }),
                React.createElement("span", { className: "text-slate-400 font-sans" },
                    t.totalVisitors,
                    ":"),
                React.createElement("strong", { className: "text-slate-200 font-bold" }, totalVisitors))))));
function App() {
    const [lang, setLang] = useState(() => localStorage.getItem('hirsch_lang') || 'mk');
    const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.en, [lang]);
    const [station, setStation] = useState(() => {
        const saved = localStorage.getItem('hirsch_saved_station_id');
        return HIRSCHMILCH_STATIONS.find(s => s.id === saved) || HIRSCHMILCH_STATIONS[0];
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoadingAudio, setIsLoadingAudio] = useState(false);
    const [volume, setVolume] = useState(0.85);
    const [isMuted, setIsMuted] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [visualizerMode, setVisualizerMode] = useState('bars');
    const [toastMessage, setToastMessage] = useState(null);
    const [isStationModalOpen, setIsStationModalOpen] = useState(false);
    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
    const [realTime, setRealTime] = useState(() => new Date().toLocaleTimeString());
    const [sessionListenTime, setSessionListenTime] = useState(0);
    const [sleepMinutes, setSleepMinutes] = useState(0);
    const [isSleepModalOpen, setIsSleepModalOpen] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(() => ({
        title: station.fullName,
        artist: station.genre,
        artwork: station.defaultArtwork,
        isLiveStream: true
    }));
    const [favorites, setFavorites] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('hirsch_fav_stations')) || ['chillout', 'psytrance'];
        }
        catch {
            return ['chillout', 'psytrance'];
        }
    });
    const [history, setHistory] = useState([]);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [onlineUsers, setOnlineUsers] = useState(1);
    const [todayVisitors, setTodayVisitors] = useState(1);
    const [totalVisitors, setTotalVisitors] = useState(1);
    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const streamUrlIndexRef = useRef(0);
    const audioCtxRef = useRef(null);
    const analyserRef = useRef(null);
    const sourceRef = useRef(null);
    const initAudioContext = useCallback(() => {
        if (audioCtxRef.current)
            return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx)
                return;
            const ctx = new AudioCtx();
            const analyser = ctx.createAnalyser();
            analyser.fftSize = 64;
            if (audioRef.current) {
                const source = ctx.createMediaElementSource(audioRef.current);
                source.connect(analyser);
                analyser.connect(ctx.destination);
                sourceRef.current = source;
            }
            audioCtxRef.current = ctx;
            analyserRef.current = analyser;
        }
        catch (e) {
            console.warn("Web Audio API visualizer initialized fallback mode:", e);
        }
    }, []);
    const playCurrentStation = useCallback((urlIndex = 0) => {
        if (!audioRef.current)
            return;
        streamUrlIndexRef.current = urlIndex;
        const url = station.streamUrls[urlIndex] || station.streamUrls[0];
        setIsLoadingAudio(true);
        audioRef.current.src = url;
        audioRef.current.play().then(() => {
            setIsPlaying(true);
            setIsLoadingAudio(false);
            initAudioContext();
        }).catch((err) => {
            console.warn("Playback stream failover trigger:", err);
            if (urlIndex + 1 < station.streamUrls.length) {
                playCurrentStation(urlIndex + 1);
            }
            else {
                setIsPlaying(false);
                setIsLoadingAudio(false);
            }
        });
    }, [station, initAudioContext]);
    const togglePlay = useCallback(() => {
        if (!audioRef.current)
            return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
        else {
            if (!audioRef.current.src || audioRef.current.src === '' || audioRef.current.src === window.location.href) {
                playCurrentStation(0);
            }
            else {
                setIsLoadingAudio(true);
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    setIsLoadingAudio(false);
                    initAudioContext();
                }).catch(() => {
                    playCurrentStation(0);
                });
            }
        }
    }, [isPlaying, playCurrentStation, initAudioContext]);
    const handleVolume = useCallback((e) => {
        const newVol = parseFloat(e.target.value);
        setVolume(newVol);
        if (audioRef.current) {
            audioRef.current.volume = newVol;
        }
        if (newVol > 0 && isMuted) {
            setIsMuted(false);
            if (audioRef.current)
                audioRef.current.muted = false;
        }
    }, [isMuted]);
    const toggleMute = useCallback(() => {
        if (!audioRef.current)
            return;
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);
        audioRef.current.muted = nextMuted;
    }, [isMuted]);
    const toggleFavorite = useCallback((stationId) => {
        setFavorites(prev => {
            const updated = prev.includes(stationId)
                ? prev.filter(id => id !== stationId)
                : [...prev, stationId];
            localStorage.setItem('hirsch_fav_stations', JSON.stringify(updated));
            return updated;
        });
    }, []);
    const copyTrackToClipboard = useCallback((text) => {
        if (!text)
            return;
        const fallbackCopyTextToClipboard = (txt) => {
            const textArea = document.createElement("textarea");
            textArea.value = txt;
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            }
            catch (err) { }
            document.body.removeChild(textArea);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => {
                fallbackCopyTextToClipboard(text);
            });
        }
        else {
            fallbackCopyTextToClipboard(text);
        }
        setToastMessage(t.copied || "Copied to clipboard!");
    }, [t.copied]);
    const selectStation = useCallback((st) => {
        setStation(st);
        streamUrlIndexRef.current = 0;
        if (audioRef.current) {
            audioRef.current.src = st.streamUrls[0];
            if (isPlaying) {
                setIsLoadingAudio(true);
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    setIsLoadingAudio(false);
                }).catch(() => {
                    setIsPlaying(false);
                    setIsLoadingAudio(false);
                });
            }
        }
    }, [isPlaying]);
    useEffect(() => {
        localStorage.setItem('hirsch_lang', lang);
    }, [lang]);
    useEffect(() => {
        localStorage.setItem('hirsch_saved_station_id', station.id);
        setCurrentTrack({
            title: station.fullName,
            artist: station.genre,
            artwork: station.defaultArtwork,
            isLiveStream: true
        });
        setSessionListenTime(0);
    }, [station]);
    useEffect(() => {
        const timer = setInterval(() => setRealTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        const todayStr = new Date().toISOString().split('T')[0];
        let total = parseInt(localStorage.getItem('hirsch_total_visits') || '0', 10);
        if (!sessionStorage.getItem('hirsch_visited_session')) {
            total += 1;
            localStorage.setItem('hirsch_total_visits', total.toString());
            sessionStorage.setItem('hirsch_visited_session', 'true');
        }
        setTotalVisitors(total || 1);
        const lastDate = localStorage.getItem('hirsch_today_date');
        let today = parseInt(localStorage.getItem('hirsch_today_visits') || '0', 10);
        if (lastDate !== todayStr) {
            today = 1;
            localStorage.setItem('hirsch_today_date', todayStr);
        }
        else if (!sessionStorage.getItem('hirsch_today_counted')) {
            today += 1;
        }
        localStorage.setItem('hirsch_today_visits', today.toString());
        sessionStorage.setItem('hirsch_today_counted', 'true');
        setTodayVisitors(today || 1);
    }, []);
    const fetchLiveTrackInfo = useCallback(async (selectedStation) => {
        let title = '';
        let artist = '';
        let listenersFound = 0;
        const proxyUrls = [
            `https://api.allorigins.win/raw?url=${encodeURIComponent('https://hirschmilch.de:7000/status-json.xsl')}`,
            `https://corsproxy.io/?${encodeURIComponent('https://hirschmilch.de/status-json.xsl')}`
        ];
        for (const proxyUrl of proxyUrls) {
            try {
                const res = await fetch(proxyUrl, { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    const sources = data?.icestats?.source;
                    if (sources) {
                        const sourceList = Array.isArray(sources) ? sources : [sources];
                        const stationSource = sourceList.find(s => s.listenurl && (s.listenurl.includes(`/${selectedStation.id}.mp3`) || s.listenurl.includes(`/${selectedStation.id}`)));
                        if (stationSource) {
                            if (stationSource.listeners) {
                                listenersFound = parseInt(stationSource.listeners, 10);
                            }
                            if (stationSource.title && stationSource.title.trim().length > 0) {
                                const fullTitle = stationSource.title.trim();
                                if (fullTitle.includes(' - ')) {
                                    const parts = fullTitle.split(' - ');
                                    artist = parts[0].trim();
                                    title = parts.slice(1).join(' - ').trim();
                                }
                                else {
                                    artist = selectedStation.name;
                                    title = fullTitle;
                                }
                            }
                        }
                        break;
                    }
                }
            }
            catch (e) { }
        }
        if (listenersFound > 0) {
            setOnlineUsers(listenersFound);
        }
        if (!title || !artist) {
            setCurrentTrack({
                title: selectedStation.fullName,
                artist: selectedStation.genre,
                artwork: selectedStation.defaultArtwork,
                isLiveStream: true
            });
            return;
        }
        let artworkUrl = selectedStation.defaultArtwork;
        try {
            const itunesRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artist + ' ' + title)}&entity=song&limit=1`);
            if (itunesRes.ok) {
                const itunesData = await itunesRes.json();
                if (itunesData.results && itunesData.results.length > 0 && itunesData.results[0].artworkUrl100) {
                    artworkUrl = itunesData.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
                }
            }
        }
        catch (err) { }
        setCurrentTrack(prev => {
            if (prev.artist === artist && prev.title === title) {
                return prev;
            }
            const newTrackObj = {
                id: Date.now(),
                title: title,
                artist: artist,
                artwork: artworkUrl,
                isLiveStream: false,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            };
            setHistory(prevHist => {
                if (prevHist.length > 0 && prevHist[0].title === title)
                    return prevHist;
                return [newTrackObj, ...prevHist].slice(0, 15);
            });
            return newTrackObj;
        });
    }, []);
    useEffect(() => {
        fetchLiveTrackInfo(station);
        const interval = setInterval(() => fetchLiveTrackInfo(station), 12000);
        return () => clearInterval(interval);
    }, [station, fetchLiveTrackInfo]);
    useEffect(() => {
        let timer = null;
        if (isPlaying) {
            timer = setInterval(() => {
                setSessionListenTime(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (timer)
                clearInterval(timer);
        };
    }, [isPlaying]);
    useEffect(() => {
        let interval = null;
        if (sleepMinutes > 0 && isPlaying) {
            interval = setInterval(() => {
                setSleepMinutes(prev => {
                    if (prev <= 1 / 60) {
                        if (audioRef.current)
                            audioRef.current.pause();
                        setIsPlaying(false);
                        setToastMessage(t.timerExpired);
                        return 0;
                    }
                    return prev - 1 / 60;
                });
            }, 1000);
        }
        return () => { if (interval)
            clearInterval(interval); };
    }, [sleepMinutes, isPlaying, t]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')
                return;
            if (e.code === 'Space') {
                e.preventDefault();
                togglePlay();
            }
            else if (e.key === 'm' || e.key === 'M') {
                e.preventDefault();
                toggleMute();
            }
            else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setVolume(prev => {
                    const nv = Math.min(1, prev + 0.1);
                    if (audioRef.current)
                        audioRef.current.volume = nv;
                    return nv;
                });
            }
            else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setVolume(prev => {
                    const nv = Math.max(0, prev - 0.1);
                    if (audioRef.current)
                        audioRef.current.volume = nv;
                    return nv;
                });
            }
            else if (e.key === 'c' || e.key === 'C') {
                e.preventDefault();
                setIsStationModalOpen(prev => !prev);
            }
            else if (e.key === 'h' || e.key === 'H') {
                e.preventDefault();
                setIsHistoryOpen(prev => !prev);
            }
            else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const currIdx = HIRSCHMILCH_STATIONS.findIndex(s => s.id === station.id);
                let nextIdx = e.key === 'ArrowRight' ? currIdx + 1 : currIdx - 1;
                if (nextIdx >= HIRSCHMILCH_STATIONS.length)
                    nextIdx = 0;
                if (nextIdx < 0)
                    nextIdx = HIRSCHMILCH_STATIONS.length - 1;
                selectStation(HIRSCHMILCH_STATIONS[nextIdx]);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPlaying, isMuted, station, togglePlay, toggleMute, selectStation]);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        let frameId;
        const render = () => {
            frameId = requestAnimationFrame(render);
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);
            let bufferLength = 32;
            let dataArray = new Uint8Array(bufferLength);
            if (analyserRef.current && isPlaying) {
                analyserRef.current.getByteFrequencyData(dataArray);
            }
            else if (isPlaying) {
                for (let i = 0; i < bufferLength; i++) {
                    dataArray[i] = Math.floor(Math.sin(Date.now() / 200 + i) * 60 + 100);
                }
            }
            else {
                dataArray.fill(4);
            }
            if (visualizerMode === 'bars') {
                const barWidth = (width / bufferLength) - 2;
                for (let i = 0; i < bufferLength; i++) {
                    const barHeight = (dataArray[i] / 255) * height;
                    const x = i * (barWidth + 2);
                    const y = height - barHeight;
                    const gradient = ctx.createLinearGradient(0, height, 0, 0);
                    gradient.addColorStop(0, '#6366f1');
                    gradient.addColorStop(0.5, '#ec4899');
                    gradient.addColorStop(1, '#06b6d4');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(x, y, barWidth, barHeight);
                }
            }
            else if (visualizerMode === 'wave') {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#38bdf8';
                const sliceWidth = width / bufferLength;
                let x = 0;
                for (let i = 0; i < bufferLength; i++) {
                    const v = dataArray[i] / 128.0;
                    const y = (v * height) / 2;
                    if (i === 0)
                        ctx.moveTo(x, y);
                    else
                        ctx.lineTo(x, y);
                    x += sliceWidth;
                }
                ctx.lineTo(width, height / 2);
                ctx.stroke();
            }
            else if (visualizerMode === 'circle') {
                const centerX = width / 2;
                const centerY = height / 2;
                const radius = Math.min(width, height) / 3;
                for (let i = 0; i < bufferLength; i++) {
                    const angle = (i / bufferLength) * Math.PI * 2;
                    const barHeight = (dataArray[i] / 255) * 12;
                    const x1 = centerX + Math.cos(angle) * radius;
                    const y1 = centerY + Math.sin(angle) * radius;
                    const x2 = centerX + Math.cos(angle) * (radius + barHeight);
                    const y2 = centerY + Math.sin(angle) * (radius + barHeight);
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.strokeStyle = '#e879f9';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }
        };
        render();
        return () => cancelAnimationFrame(frameId);
    }, [isPlaying, visualizerMode]);
    const formatTime = (secs) => {
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };
    const openSpotifyTrack = () => {
        const query = encodeURIComponent(`${currentTrack.artist} ${currentTrack.title}`);
        window.open(`https://open.spotify.com/search/${query}`, '_blank', 'noopener,noreferrer');
    };
    return (React.createElement("div", { className: `min-h-screen font-sans flex flex-col justify-between relative overflow-hidden transition-colors ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800 light'}` },
        React.createElement("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none opacity-20 blur-[130px] transition-all duration-1000", style: { backgroundColor: station.accentColor } }),
        React.createElement("audio", { ref: audioRef, crossOrigin: "anonymous", preload: "none", onPlaying: () => { setIsLoadingAudio(false); initAudioContext(); }, onWaiting: () => setIsLoadingAudio(true), onError: () => {
                if (isPlaying && streamUrlIndexRef.current + 1 < station.streamUrls.length) {
                    playCurrentStation(streamUrlIndexRef.current + 1);
                }
            } }),
        React.createElement(Header, { darkMode: darkMode, setDarkMode: setDarkMode, lang: lang, setLang: setLang, t: t, currentStation: station, realTime: realTime, onOpenStationModal: () => setIsStationModalOpen(true), onOpenShortcutsModal: () => setIsShortcutsOpen(true) }),
        React.createElement("main", { className: "w-full max-w-5xl mx-auto px-4 py-4 flex-1 flex flex-col items-center justify-center z-10" },
            React.createElement("div", { className: "w-full rounded-3xl p-6 sm:p-8 shadow-2xl glass-card transition-all duration-300" },
                React.createElement("div", { className: "flex flex-col md:flex-row items-center gap-8" },
                    React.createElement("div", { className: "relative group w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl shrink-0 bg-slate-900 border border-white/10" },
                        React.createElement("img", { src: currentTrack.artwork, alt: currentTrack.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", onError: (e) => { e.target.src = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop'; } }),
                        React.createElement("div", { className: `absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0'}` },
                            React.createElement(Disc, { className: "w-5 h-5 animate-spin-slow text-indigo-400" })),
                        React.createElement("button", { onClick: () => toggleFavorite(station.id), className: "absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-amber-400 border border-white/20 hover:scale-110 transition-all" },
                            React.createElement(Star, { className: "w-4 h-4", filled: favorites.includes(station.id) })),
                        React.createElement("div", { className: "absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-2 rounded-2xl bg-black/75 backdrop-blur-md text-white text-xs border border-white/10" },
                            React.createElement("span", { className: "flex items-center gap-2 font-bold" },
                                React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" }),
                                isLoadingAudio ? t.connecting : t.hdLive),
                            React.createElement("span", { className: "text-slate-300 font-mono text-[11px]" }, "128 KBPS MP3"))),
                    React.createElement("div", { className: "flex-1 w-full flex flex-col justify-between space-y-5" },
                        React.createElement("div", { className: "w-full space-y-2 border-b border-slate-800/80 pb-4" },
                            React.createElement("div", { className: "flex items-center justify-between" },
                                React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5" },
                                    React.createElement(Music, { className: "w-4 h-4" }),
                                    " ",
                                    t.nowPlaying),
                                React.createElement("div", { className: "flex items-center gap-2" },
                                    React.createElement("button", { onClick: openSpotifyTrack, className: "p-2 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-400 transition-colors", title: t.searchSpotify },
                                        React.createElement(ExternalLink, { className: "w-4 h-4" })),
                                    React.createElement("button", { onClick: () => copyTrackToClipboard(`${currentTrack.artist} - ${currentTrack.title}`), className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-xs font-semibold" },
                                        React.createElement(Copy, { className: "w-3.5 h-3.5" }),
                                        React.createElement("span", null, t.copy)),
                                    React.createElement("button", { onClick: () => setIsHistoryOpen(true), className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs font-semibold" },
                                        React.createElement(History, { className: "w-3.5 h-3.5" }),
                                        React.createElement("span", null, t.history)))),
                            React.createElement("div", null,
                                React.createElement("h2", { className: "text-xl sm:text-3xl font-black tracking-tight text-white line-clamp-1" }, currentTrack.title),
                                React.createElement("p", { className: "text-base sm:text-lg font-bold text-indigo-400 mt-0.5" }, currentTrack.artist))),
                        React.createElement("div", { className: "flex flex-col space-y-3" },
                            React.createElement("div", { className: "flex items-center justify-between" },
                                React.createElement("button", { onClick: () => setIsSleepModalOpen(true), className: `p-3 rounded-2xl border transition-all text-xs flex items-center gap-1.5 ${sleepMinutes > 0 ? 'bg-indigo-600 border-indigo-400 text-white animate-pulse' : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'}` },
                                    React.createElement(Clock, { className: "w-4 h-4" }),
                                    sleepMinutes > 0 && React.createElement("span", { className: "font-mono font-bold" },
                                        Math.ceil(sleepMinutes),
                                        t.min)),
                                React.createElement("button", { onClick: togglePlay, disabled: isLoadingAudio, className: "p-5 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 text-white shadow-xl shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center min-w-[68px] min-h-[68px]" }, isLoadingAudio ? React.createElement(Loader2, { className: "w-8 h-8 animate-spin text-white" }) : isPlaying ? React.createElement(Pause, { className: "w-8 h-8 fill-white" }) : React.createElement(Play, { className: "w-8 h-8 fill-white ml-1" })),
                                React.createElement("button", { onClick: () => setVisualizerMode(prev => prev === 'bars' ? 'wave' : prev === 'wave' ? 'circle' : 'bars'), className: "px-3 py-2 rounded-2xl border border-slate-800 bg-slate-900/80 text-xs font-mono text-indigo-400 hover:bg-slate-800" }, visualizerMode.toUpperCase())),
                            React.createElement("div", { className: "space-y-1.5 pt-1" },
                                React.createElement("div", { className: "flex items-center justify-between text-xs font-mono font-semibold text-slate-400" },
                                    React.createElement("span", null,
                                        t.sessionTime,
                                        ": ",
                                        React.createElement("strong", { className: "text-emerald-400" }, formatTime(sessionListenTime))),
                                    React.createElement("span", { className: "flex items-center gap-1 text-slate-300" },
                                        React.createElement("span", { className: "w-2 h-2 rounded-full bg-rose-500 animate-ping" }),
                                        t.liveStream)),
                                React.createElement("div", { className: "w-full h-2.5 bg-slate-900 rounded-full overflow-hidden shadow-inner border border-white/5 relative" },
                                    React.createElement("div", { className: `h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 ${isPlaying ? 'w-full animate-pulse' : 'w-0'} transition-all duration-500 rounded-full` })))),
                        React.createElement("div", { className: "p-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 space-y-1" },
                            React.createElement("div", { className: "flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider" },
                                React.createElement("span", { className: "flex items-center gap-1" },
                                    React.createElement(Activity, { className: "w-3.5 h-3.5 text-cyan-400" }),
                                    " ",
                                    t.audioSpectrum),
                                React.createElement("span", { className: "text-indigo-400 font-mono" }, "Live Audio Engine")),
                            React.createElement("canvas", { ref: canvasRef, width: 400, height: 36, className: "w-full h-9 rounded-lg" })),
                        React.createElement("div", { className: "p-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 flex items-center space-x-3" },
                            React.createElement("button", { onClick: toggleMute, className: "text-slate-400 hover:text-indigo-400 transition-colors shrink-0" }, isMuted || volume === 0 ? React.createElement(VolumeX, { className: "w-5 h-5 text-rose-500" }) : React.createElement(Volume2, { className: "w-5 h-5" })),
                            React.createElement("input", { type: "range", min: "0", max: "1", step: "0.01", value: isMuted ? 0 : volume, onChange: handleVolume, className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" }),
                            React.createElement("span", { className: "text-xs font-mono text-slate-400 font-bold w-9 text-right shrink-0" },
                                Math.round((isMuted ? 0 : volume) * 100),
                                "%")))))),
        React.createElement(StationSelectorModal, { isOpen: isStationModalOpen, onClose: () => setIsStationModalOpen(false), stations: HIRSCHMILCH_STATIONS, currentStation: station, onSelectStation: (st) => selectStation(st), favorites: favorites, onToggleFavorite: toggleFavorite, darkMode: darkMode, t: t }),
        React.createElement(HistoryModal, { isOpen: isHistoryOpen, onClose: () => setIsHistoryOpen(false), history: history, darkMode: darkMode, onCopyTrack: copyTrackToClipboard, t: t }),
        React.createElement(SleepTimerModal, { isOpen: isSleepModalOpen, onClose: () => setIsSleepModalOpen(false), sleepMinutes: sleepMinutes, onStartTimer: (mins) => { setSleepMinutes(mins); setIsSleepModalOpen(false); setToastMessage(`${t.timerSet} ${mins} ${t.min}`); }, onCancelTimer: () => { setSleepMinutes(0); setIsSleepModalOpen(false); setToastMessage(t.timerCanceled); }, darkMode: darkMode, t: t }),
        React.createElement(ShortcutsModal, { isOpen: isShortcutsOpen, onClose: () => setIsShortcutsOpen(false), darkMode: darkMode, t: t }),
        toastMessage && React.createElement(Toast, { message: toastMessage, onClose: () => setToastMessage(null) }),
        React.createElement(Footer, { darkMode: darkMode, onlineUsers: onlineUsers, todayVisitors: todayVisitors, totalVisitors: totalVisitors, t: t })));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
