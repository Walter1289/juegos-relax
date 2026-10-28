/* Service worker: precarga todo y sirve sin conexión. Sube VERSION para forzar actualización. */
const VERSION = 'v75';
const CACHE = 'respirar-' + VERSION;
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './rio/', './rio/index.html',
  './cabana/', './cabana/index.html',
  './rio3d/', './rio3d/index.html', './rio3d/app.js',
  './cabana3d/', './cabana3d/index.html', './cabana3d/app.js',
  './cabana/app.js', './shared/three-TT54MVT6.js',
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
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    const old = (await caches.keys()).filter(k => k.startsWith('respirar-') && k !== CACHE && k !== 'respirar-fonts');
    await Promise.all(ASSETS.map(async u => {
      if (/three-[A-Za-z0-9]+\.js$/.test(u)) { for (const k of old) { const hit = await (await caches.open(k)).match(u); if (hit) return c.put(u, hit); } }
      const r = await fetch(new Request(u, {cache: 'reload'})); if (!r.ok) throw new Error(u); return c.put(u, r);
    }));
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('respirar-') && k !== CACHE && k !== 'respirar-fonts').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Estrategia por tipo de archivo:
   - páginas y código (html, js, css, json): primero la red (máx. 4 s) y, si no hay conexión, el caché. Así cada vez que se abre el juego se ve lo último publicado y nunca se mezclan páginas viejas con código nuevo.
   - lo demás (fuentes, iconos, el fragmento de Three.js con hash en su nombre): caché primero, con actualización en segundo plano. */
const FRESH = /\.(html|js|css|json|webmanifest)$|\/$/;
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
  const hashed = /three-[A-Za-z0-9]+\.js$/.test(url.pathname);
  if (!hashed && (req.mode === 'navigate' || FRESH.test(url.pathname))) {
    e.respondWith(caches.open(CACHE).then(async c => {
      try {
        const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 4000);
        const r = await fetch(req, {signal: ctl.signal, cache: 'no-cache'}); clearTimeout(t);
        if (r && r.ok) { c.put(req, r.clone()); return r; }
        throw new Error('bad');
      } catch (err) {
        const hit = await c.match(req, {ignoreSearch: true});
        return hit || (req.mode === 'navigate' ? c.match('./index.html') : Response.error());
      }
    }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true});
    if (hit) { if (!hashed) fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()) }).catch(() => {}); return hit; }
    const r = await fetch(req).catch(() => null);
    if (r && r.ok) c.put(req, r.clone());
    return r || Response.error();
  }));
});
