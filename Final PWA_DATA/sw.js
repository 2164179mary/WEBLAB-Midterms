const staticAssets = [
    './',
	'index.html',
    './manifest3.json',
    './home.html',
    './CSS/index.css',
    './CSS/home.css',
    './CSS/Logos/cashe-logo.png',
    '',
    './scripts/indexedDB.js',
    './scripts/modal.js',
    './scripts/app.js'
];
self.addEventListener('install', async event => {
    const cache = await caches.open('index-static');
    cache.addAll(staticAssets);
});
self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});
async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req); 
}