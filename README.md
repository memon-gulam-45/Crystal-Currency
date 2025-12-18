# 💎 Crystal Currency — Real-Time Currency Converter (PWA)

A clean, fast, modern **real-time currency converter** built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

Crystal Currency uses live API data to fetch accurate exchange rates and display country flags dynamically — no hardcoded currency list required. It is now a **Progressive Web App (PWA)**, installable on mobile and desktop devices with offline support.

---

## ▶️ Live Demo

[Click Here](https://memon-gulam-45.github.io/Crystal-Currency/)

---

## 🚀 Features

- **🔄 Real-time currency conversion**
- **⚡ Instant two-way conversion** — enter amount in either currency to see the result dynamically
- **🚩 Auto-updated country flags**
- **🎯 Swap currency with one tap**
- **🌐 Live exchange rates** using **Fawaz Ahmed Currency API**
- **📱 Fully responsive UI**
- **🧊 Clean glass-effect design**
- **📱 PWA-enabled** — installable and works offline
- **⏱ Last updated timestamp** for latest rates

---

## 🛠️ Tech Stack

- **HTML5**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Flags API**
- **Fawaz Ahmed Currency API**
- **PWA Features:** service worker, manifest.json, offline caching

---

## 📂 Project Structure

<pre> 
Crystal-Currency/
├── node_modules/
│   └── ...
├── src/
│   ├── codes.js          
│   ├── input.css
│   ├── output.css
│   └── script.js         
│
├── index.html            
├── manifest.json         
├── service-worker.js     
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
</pre>

---

## ⚙️ How It Works

1. User selects **From** and **To** currencies from the dropdowns.
2. Currency list + country flags load dynamically from the **`countryList.js`** mapping and the **Flags API**.
3. Entering an amount in either input updates the converted value instantly.
4. The real-time exchange rate is fetched from the **Fawaz Ahmed Currency API**.
5. The **Last Updated timestamp** shows the date of the latest rate.
6. The **Swap button** instantly flips the selected currencies.
7. PWA functionality enables installation and offline use via service worker.

---

## 📱 PWA Features

- **Installable** on mobile and desktop
- **Offline functionality**: Cached assets allow basic functionality without internet
- **Custom theme color**: `#C6B7E9`
- **Manifest configuration** for app name, icons, and display options

---

## 🙌 Contributing

Contributions are welcome! Feel free to fork this repo and create pull requests.

---

## 👨‍💻 Developer

**Made with 🤍 by [Gulam Mohyudin Memon](https://github.com/memon-gulam-45)**

---

### ⭐ If you like it...

Give this repo a **star** ⭐ and share it with friends who love clean, functional apps!
