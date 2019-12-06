const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'about.html',
    '/css/style.css',
    '/js/main.js'
];

self.addEventListener('install', e => {
    console.log('Service Worker installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    console.log('Service Worker activated');

    // clear previous cache, if the cache name has changed
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', e => {
    console.log('Service Worker fetching');

    e.respondWith(
        caches.match(e.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(e.request);
            })
    );
});
