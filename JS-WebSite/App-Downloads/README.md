# 📱 Android App Download Portal

> 🌐 A small, lightweight website for browsing and downloading Android applications hosted on **GitLab**.

This project demonstrates how **HTML, CSS, and JavaScript** can be combined to create a simple Android app download page with automatic link and file-age status checks.

<p align="center">
  <a href="https://js-website.ct.ws/App-Downloads/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://img.shields.io/badge/🔍_Preview-Open_Website-6366F1?style=for-the-badge"
      alt="Preview Website"
    />
  </a>
</p>

<img width="1926" height="1074" alt="1" src="https://github.com/user-attachments/assets/629a8462-f40c-45d2-ae90-3f4e34707641" />

## ✨ Features

- 📥 **GitLab downloads** — provides download links for Android application files stored on GitLab.
- 🔎 **Automatic status checks** — checks configured GitLab links and evaluates the available file update information.
- 🟢 **NEW LINK** — the file is no more than one month old.
- 🟠 **OLD LINK** — the file is older than one month.
- 🧭 **Clear status labels** — helps visitors quickly see whether a file is recent or older.
- 🪶 **Lightweight frontend** — built with standard web technologies: HTML, CSS, and JavaScript.

## 🏷️ Link Status Rules

| Status | Meaning |
| --- | --- |
| 🟢 **NEW LINK** | The file was added or updated within the last month. |
| 🟠 **OLD LINK** | The file is more than one month old. |

> ℹ️ **Important:** `OLD LINK` describes the age of the file; it does not automatically mean the download link is broken. Link availability should be checked separately from file age.

## ⚙️ How It Works

1. The website displays Android application download entries.
2. Each entry points to a file hosted on GitLab.
3. JavaScript checks the configured link and uses the available file-date information to determine its age.
4. The page displays **NEW LINK** or **OLD LINK** according to the one-month rule.
5. Visitors can use the provided link to download the application from GitLab.

## 🧰 Technologies

- **HTML** — page structure and app information.
- **CSS** — layout, styling, and status-label appearance.
- **JavaScript** — link checks, file-age calculation, and dynamic status display.
- **GitLab** — hosts the Android application files.

<img width="1920" height="1078" alt="2" src="https://github.com/user-attachments/assets/661c10a7-7703-482f-a03c-3bf2e9495d60" />

## 🎯 Project Purpose

This is a small example of a practical download website. It brings Android app download links together in one place and gives visitors a quick indication of how recently the hosted files were updated.

## 🚀 Possible Improvements

- 📱 Improve the responsive layout for phones, tablets, and desktops.
- 🧾 Show the app version, file size, and last-updated date.
- ✅ Display a separate availability result for links that can be reached successfully.
- 🔄 Add a refresh control to rerun the status checks.
- 🛡️ Handle GitLab API limits and failed requests with clear error messages.

<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/f4e5bb34-15c4-4a30-8c79-0064ff3d1ccb" />

<p align="center">
  💚 <strong>Simple • Useful • Built with HTML, CSS & JavaScript</strong>
</p>
