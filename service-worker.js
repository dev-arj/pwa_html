self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/manifest.json',
                '/index.html',
                '/styles.css',
                '/main.js',
                '/images/car-1.jpg',
                '/images/car-2.jpg',
                '/images/icon.png'
            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});