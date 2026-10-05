# juegos-relax
Juegos para bajar la ansiedad y estrés del día a día

Dos juegos relajantes en HTML5 Canvas, sin dependencias ni build:

- `rio/` Río de Linternas
- `cabana/` Cabaña del Acantilado
- `rio3d/` Río 3D (prototipo en primera persona, Three.js)

Se publican con GitHub Pages desde la rama `main`, carpeta raíz.

## Instalar y usar sin conexión

Las páginas son una PWA: abre el sitio una vez con conexión y luego usa «Añadir a pantalla de inicio» (iPad/iPhone) o «Instalar» (Chrome/Edge en Linux o Android). Un service worker guarda todo para jugar sin internet. Para forzar una actualización, sube `VERSION` en `sw.js`.

`rio3d/app.js` se genera con esbuild desde un código fuente aparte (Three.js va incluido en el paquete).

