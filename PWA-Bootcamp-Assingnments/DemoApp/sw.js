
var cacheName = 'shell-content';
var filesToCache = [
  '/index.html',
  '/index.js',
  '/style.css',
  '/sw.js',
  '/',
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
    );
  });