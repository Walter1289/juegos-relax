<div align="center">

# Sin Prisa

**Juegos tranquilos, sin puntaje ni tiempo, para soltar la mente al final del día.**

<a href="https://walter1289.github.io/juegos-relax/"><img src="https://img.shields.io/badge/%E2%96%B6%20JUGAR%20AHORA-2b2d52?style=for-the-badge&labelColor=ffc77a&color=2b2d52" alt="Jugar ahora" height="56"></a>

<sub>Funciona en iPad, celular y computadora. No necesitas instalar nada.</sub>

</div>

---

## ¿Solo quieres jugar?

Toca el botón **JUGAR AHORA** o abre <https://walter1289.github.io/juegos-relax/>. Con auriculares se disfruta más.

| Juego | Qué es |
|---|---|
| **Río de Linternas** | Guía una canoa por un río infinito, enciende linternas y descubre lugares. |
| **Cabaña del Acantilado** | Limpia, repara y decora una cabaña en lo alto de la montaña. |
| **Río 3D** | El río en tres dimensiones, en primera o tercera persona. |
| **Cabaña 3D** | La cabaña en tres dimensiones: gira, friega, repara y habita. |

Para jugar sin conexión: abre el sitio una vez y usa «Añadir a pantalla de inicio» (iPad/iPhone) o «Instalar» (Chrome/Edge).

---

## Para quien quiera ver el código

Son juegos en HTML5 (Canvas y Three.js), sin servidor. Se publican con GitHub Pages desde la rama `main`, carpeta raíz.

- `rio/` Río de Linternas · `cabana/` Cabaña del Acantilado
- `rio3d/` Río 3D · `cabana3d/` Cabaña 3D (Three.js)
- `dev/` código fuente (sin `node_modules`: ejecuta `npm install` dentro de `dev/rio3d-src`); `rio3d/app.js` y `cabana3d/app.js` se generan con esbuild.
- `sw.js` es el service worker (modo sin conexión); para forzar una actualización se sube su `VERSION`.

---

## Legal

© 2026 Walter. Código abierto bajo licencia MIT (ver [LICENSE](LICENSE)); el nombre y los iconos no se licencian para obras derivadas. Contacto: waguilar1289@gmail.com. Sin cuentas, anuncios ni rastreo: [privacidad](https://walter1289.github.io/juegos-relax/privacidad.html) · [créditos](https://walter1289.github.io/juegos-relax/creditos.html).
