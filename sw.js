// sw.js

const CACHE_NAME = 'parla-con-il-profeta-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './scripts.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event (pulizia vecchi cache se necessario)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Ritorna la risorsa da cache se presente, altrimenti la scarica
      return response || fetch(event.request);
    })
  );
});
