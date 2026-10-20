# 🎧 Hirschmilch Radio — Ultra Stream Portal

A single-page web radio portal built with **HTML, CSS, JavaScript, React, and Tailwind CSS**.

## 📁 Project structure

```text
hirschmilch-radio/
├── index.html          # HTML document and external libraries
├── style.css           # Custom CSS styles
├── tailwind.config.js   # Tailwind CDN theme and animation configuration
├── script.js            # Browser-ready React application and logic
└── README.md            # Project notes
```

## 🚀 Run locally

1. Download and extract the project files.
2. Keep all files in the same directory.
3. Open `index.html` in a modern browser. A local web server is also suitable.
4. Keep an internet connection enabled because React, ReactDOM, Tailwind CSS, Google Fonts, artwork, radio streams, and metadata services are loaded from external URLs.

## ✨ Features

- 🎚️ Eight Hirschmilch radio channels with alternate stream URLs.
- ▶️ Play/pause, volume, mute, and stream failover.
- 🌗 Dark/light theme and English/Macedonian interface text.
- ⭐ Favourite channels saved in local storage.
- 🎵 Live track metadata lookup, track history, and Spotify search.
- ⏱️ Sleep timer and keyboard shortcuts.
- 📊 Audio spectrum visualizer.
- 📈 Visitor counters stored locally in the browser.

## 🧩 Code organization

- `index.html` contains the document structure and imports the required CDN libraries.
- `style.css` contains the custom CSS that was originally inside the HTML `<style>` element.
- `tailwind.config.js` contains the Tailwind configuration that was originally inline in the HTML head.
- `script.js` contains the React application in browser-ready JavaScript. The original JSX syntax is compiled to `React.createElement`, so the page does **not** rely on Babel Standalone fetching an external JSX file. This also avoids the common `file://` loading problem that can leave the page blank when JSX is loaded from an external file.

The application logic and UI behavior were preserved; only the way JSX is delivered to the browser was changed. External services and radio streams can still be unavailable independently of the local code.
