/* Service worker: precarga todo y sirve sin conexión. Sube VERSION para forzar actualización. */
const VERSION = 'v47';
const CACHE = 'respirar-' + VERSION;
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './rio/', './rio/index.html',
  './cabana/', './cabana/index.html',
  './rio3d/', './rio3d/index.html', './rio3d/app.js',
  './cabana3d/', './cabana3d/index.html', './cabana3d/app.js',
  './privacidad.html',
  './creditos.html',
  './datos.html',
  './shared/guard.js',
  './fonts/fonts.css',
  './fonts/fredoka-latin-500-normal.woff2',
  './fonts/fredoka-latin-600-normal.woff2',
  './fonts/fredoka-latin-ext-500-normal.woff2',
  './fonts/fredoka-latin-ext-600-normal.woff2',
  './fonts/nunito-latin-400-normal.woff2',
  './fonts/nunito-latin-600-normal.woff2',
  './fonts/nunito-latin-700-normal.woff2',
  './fonts/nunito-latin-800-normal.woff2',
  './fonts/nunito-latin-ext-400-normal.woff2',
  './fonts/nunito-latin-ext-600-normal.woff2',
  './fonts/nunito-latin-ext-700-normal.woff2',
  './fonts/nunito-latin-ext-800-normal.woff2',
  './fonts/shippori-mincho-latin-500-normal.woff2',
  './fonts/shippori-mincho-latin-700-normal.woff2',
  './fonts/shippori-mincho-latin-ext-500-normal.woff2',
  './fonts/shippori-mincho-latin-ext-700-normal.woff2',
  './fonts/zen-maru-gothic-latin-400-normal.woff2',
  './fonts/zen-maru-gothic-latin-500-normal.woff2',
  './fonts/zen-maru-gothic-latin-700-normal.woff2',
  './fonts/zen-maru-gothic-latin-ext-400-normal.woff2',
  './fonts/zen-maru-gothic-latin-ext-500-normal.woff2',
  './fonts/zen-maru-gothic-latin-ext-700-normal.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(ASSETS.map(u => fetch(new Request(u, {cache: 'reload'})).then(r => { if (!r.ok) throw new Error(u); return c.put(u, r); })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('respirar-') && k !== CACHE && k !== 'respirar-fonts').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Caché primero, con actualización en segundo plano (stale-while-revalidate) solo para mismo origen. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) {
    /* Fuentes de Google: se guardan la primera vez y luego funcionan sin conexión */
    if (/(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
      e.respondWith(caches.open('respirar-fonts').then(async c => {
        const hit = await c.match(req); if (hit) return hit;
        try { const r = await fetch(req); if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; } catch (err) { return Response.error(); }
      }));
    }
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true});
    const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r }).catch(() => null);
    return hit || (await net) || (req.mode === 'navigate' ? c.match('./index.html') : Response.error());
  }));
});
