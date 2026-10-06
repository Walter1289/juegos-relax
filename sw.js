/* Service worker: precarga todo y sirve sin conexión. Sube VERSION para forzar actualización. */
const VERSION='v11';
const CACHE = 'respirar-' + VERSION;
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './rio/', './rio/index.html',
  './cabana/', './cabana/index.html',
  './rio3d/', './rio3d/index.html', './rio3d/app.js',
  './cabana3d/', './cabana3d/index.html', './cabana3d/app.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('respirar-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Caché primero, con actualización en segundo plano (stale-while-revalidate) solo para mismo origen. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true});
    const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r }).catch(() => null);
    return hit || (await net) || (req.mode === 'navigate' ? c.match('./index.html') : Response.error());
  }));
});
