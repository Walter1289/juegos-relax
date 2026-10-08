# Medidor de destellos (WCAG 2.3.1)

Simula cada juego fotograma a fotograma (reloj virtual, semilla fija), calcula la luminancia relativa por zona y cuenta
los destellos por segundo (pares de cambios opuestos de ≥10 % de luminancia, con el tono oscuro bajo 0,8).
Informa el área de pantalla que supera 3 destellos/s en tres escalas: fino (~6 px), bloque (~24×11 px) y región (~1 % de pantalla).
Criterio usado: ningún área > ~2 % (pantalla de tableta vista de cerca) con más de 3 destellos/s.

Uso (desde la carpeta de salida del sitio, servida en :8765; hace falta Playwright con Chromium):

    cd jr-clone && python3 -m http.server 8765 &
    node r2d.js castle 1 30      # Río 2D: castle | aldea | rain | base  <semilla> <segundos>
    node r3d.js fest 25 1        # Río 3D: fest | rain | night          <segundos> <semilla>
    node vr.js fest 40 1         # Cabaña 3D: fest | star               <segundos> <semilla>
