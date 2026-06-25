const CACHE_NAME = 'toefl-cache-v1';
const urlsToCache = [
  './',
  './login.html',
  './dashboard.html',
  './index.html',
  './manifest.json'
];

// Instalar el Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Responder con los archivos guardados
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});