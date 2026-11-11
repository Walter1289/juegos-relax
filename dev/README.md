# Fuentes (respaldo)
- `src2d/rio`, `src2d/cabana`: juegos 2D en módulos ES (esbuild → un solo fragmento HTML con `template.html`).
- `rio3d-src/rio/*`, `rio3d-src/cabin/*`: Río 3D y Cabaña 3D en módulos ES; `ux.js`, `pause.js`, `i18n.js`, `audio*.js` compartidos.
- `tests/boot.js`: prueba de arranque por juego (es/en/ja). `build2d.sh`, `build3d.sh`, `sync.sh`: compilación y publicación.
Las rutas de los scripts asumen /home/claude; ajusta si se clona en otro lado.
- `style.js` también reúne lo compartido de animación y rendimiento: `windify()`/`windTick()`/`gustAt()` (viento único para la vegetación de ambos juegos, en el sombreador de vértices) y `bake()` (funde mallas estáticas por material para bajar llamadas de dibujo).
- El lanchero (`rio/boat.js`) usa brazos de dos huesos con cinemática inversa; la canoa, el farol y los faroles del porche se mueven con muelles/péndulos, no con senos fijos.
- Pescadores (`rio/scenery.js`), patos y garzas (`rio/fauna.js`, `rio/lm-parts.js`) siguen la escala y el estilo del lanchero. En la cabaña, la estructura fija y cada objeto reparable se funden con `bake()` al construirse; las mallas marcadas con `S()` (oclusores) y las manchas quedan sueltas.

### Agua, ondas y ranas (Río 3D)
- `rio/ripples.js`: las ondas son trenes de anillos (cresta clara / valle oscuro) con contorno irregular, instanciadas en **una** llamada de dibujo. `spawnRipple(x,z,size,life,amp)`.
- `rio/shore.js`: `laceTex` (encaje de espuma en mosaico) lo comparten la estela (instanciada, se deshace por erosión), la espuma de la orilla y la de las rocas. Las ondas de proa nacen a lo largo del rumbo.
- `rio/env.js`: el agua deforma su dominio con `cloudTex` (vetas que serpentean) y tiene rachas de viento (`gu`) y rizado por lluvia (`ruf`).
- `rio/frogs.js`: ranas en ~30 % de las rocas (`mkFrog`, `updateFrog`); saltan si la canoa pasa a menos de `r+4.6` m y vuelven cuando se aleja 55 m. Sonido `A.croak`.
- Velocidad de la canoa: remada 2.34 y corriente .99 (10 % menos que antes).

### Vegetación orgánica y pirotecnia de la aldea
- `style.js`: `lumpy` (bultos de follaje irregulares), `tierGeo` (pisos de conífera con falda en zigzag), `trunkGeo` (tronco curvo con raíces y ramas), `sprayGeo` (penacho de hojas de bambú), `tuftGeo` (mata de hierba). Los usan `rio/props.js`, `cabin/world.js` y `cabin/terrain.js`.
- `rio/moments.js`: los fuegos salen de tierra tras las casas de la aldea (`festVillage`), suben con estela (~1,2 s), estallan a 13–20 m y se apagan en 1,5 s (2 s el sauce dorado). Tipos: peonía, anillo, sauce. Respetan la profundidad (los tapan árboles y montes) y el agua refleja cada estallido (`fwP`/`fwC` en el shader del agua).

### Estructuras y sitios orgánicos (Río 3D)
- `rio/lm-parts.js`: `roofGeo`/`hipRoof` (tejado japonés cóncavo con esquinas levantadas; `roof()` lo usa, así que templo y pagoda lo heredan), `torii` myōjin (vigas curvas `beamGeo`, cuñas, placa, opción `water`/`rope`), `rockGeo`/`rock` (roca con estratos), `fallGeo` + `fallMat` (cortina de cascada abombada, velos que aceleran, espuma), risco de `farCabin` con estratos.
- `rio/lm-build.js`: puente (pilas con tajamar hasta las vigas), aldea (tejados de paja/teja, postes, engawa, celosías, arco-torii), sakura (troncos curvos, copas irregulares), camino a la cabaña (losas irregulares, matas, torii de entrada), cascada (rocas, repisas, helechos, ondas al pie vía `g.userData.fall`), casa de té, estanque de lotos (instancias de `padM`/`lotM`).
- `rio/dragon.js`: cuerpo de 10 lados con vientre de placas, cresta de llamas, patas redondas con garras, cabeza con hocico, astas y bigotes; se mece con `dragonU` (shader). `world.js: clearAt` despeja árboles a su alrededor.
- `sw.js`: VERSION v92. Acordarse de subirla en cada publicación.

## Bajar a tierra a meditar (rio/visit.js)
Desde la primera vuelta cerrada (`vueltas()` en lightmsg.js: cuenta vueltas con o sin linternas) aparece un botón al pasar por la aldea, el templo y la casa de té.
Cada lugar deja en `g.userData.visit` su tipo, las vistas (`ref` + `eye`/`look` en coordenadas locales) y lo que se anima (faroles de la plaza, campana y mazo, vapor del té).
visit.js detiene la canoa (STILL), mueve la cámara con un fundido, muestra frases sin prisa y activa `A.zen(kind)` (cuencos, campanillas y koto suelto; el tambor calla).
Acciones: encender los ocho faroles de la piedra ceremonial, tocar la campana (`A.gong`), tomar té y cambiar entre sala y galería. Prueba: `/home/claude/shots/vis.js`.
