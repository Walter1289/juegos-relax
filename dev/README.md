# Fuentes (respaldo)
- `src2d/rio`, `src2d/cabana`: juegos 2D en módulos ES (esbuild → un solo fragmento HTML con `template.html`).
- `rio3d-src/rio/*`, `rio3d-src/cabin/*`: Río 3D y Cabaña 3D en módulos ES; `ux.js`, `pause.js`, `i18n.js`, `audio*.js` compartidos.
- `tests/boot.js`: prueba de arranque por juego (es/en/ja). `build2d.sh`, `build3d.sh`, `sync.sh`: compilación y publicación.
Las rutas de los scripts asumen /home/claude; ajusta si se clona en otro lado.
- `style.js` también reúne lo compartido de animación y rendimiento: `windify()`/`windTick()`/`gustAt()` (viento único para la vegetación de ambos juegos, en el sombreador de vértices) y `bake()` (funde mallas estáticas por material para bajar llamadas de dibujo).
- El lanchero (`rio/boat.js`) usa brazos de dos huesos con cinemática inversa; la canoa, el farol y los faroles del porche se mueven con muelles/péndulos, no con senos fijos.
