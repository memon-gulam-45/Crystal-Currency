const CACHE_NAME = "crystal-currency-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./src/script.js",
  "./src/codes.js",
  "./src/output.css",
  "./manifest.json",
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate
self.addEventListener("activate", () => {
  console.log("Service Worker Activated");
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
