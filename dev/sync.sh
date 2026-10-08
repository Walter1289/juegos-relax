#!/bin/bash
# Envuelve los juegos como páginas completas, los copia al clon del repo y sube a GitHub.
set -e
cd /home/claude
bash /home/claude/build2d.sh
python3 - <<'PY'
H='<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="mobile-web-app-capable" content="yes">\n<meta name="theme-color" content="#2b2d52">\n<link rel="manifest" href="../manifest.webmanifest">\n<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png">\n'
import re
FONT_LINKS=re.compile(r'<link rel="preconnect"[^>]*>\n?|<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>\n?')
META='<meta name="description" content="%s">\n<meta property="og:type" content="website">\n<meta property="og:site_name" content="Tomoshibi">\n<meta property="og:title" content="%s">\n<meta property="og:description" content="%s">\n<meta property="og:image" content="https://walter1289.github.io/juegos-relax/icons/icon-512.png">\n<meta name="twitter:card" content="summary">\n<link rel="icon" href="../icons/icon-192.png">\n<link rel="stylesheet" href="../fonts/fonts.css">\n<script src="../shared/guard.js"></script>\n'
DESC={'rio':('Río de Linternas · Tomoshibi','Guía una canoa por un río infinito, enciende linternas y descubre lugares. Sin puntaje ni tiempo.'),'cabana':('Cabaña del Acantilado · Tomoshibi','Limpia, repara y habita una cabaña en lo alto de la montaña. Sin puntaje ni tiempo.')}
SW='<script>if("serviceWorker"in navigator)navigator.serviceWorker.register("../sw.js").catch(function(){})</script>\n'
for src,dst in [('rio-de-linternas.html','jr-clone/rio/index.html'),('cabana-acantilado.html','jr-clone/cabana/index.html')]:
    s=open(src).read();i=s.index('<header>')
    k='rio' if 'rio' in dst else 'cabana';t,d=DESC[k]
    head=FONT_LINKS.sub('',s[:i]).replace('</title>','</title>\n',1)
    head=head.replace('</title>\n','</title>\n'+META%(d,t,d),1)
    open(dst,'w').write(H+head+'</head>\n<body>\n'+s[i:]+'\n'+SW+'</body>\n</html>\n')
PY
bash /home/claude/build3d.sh
# Prueba de arranque de todos los juegos: si falla, no se sube nada
node /home/claude/tests/boot.js /home/claude/jr-clone || { echo "Pruebas fallaron: no se sube"; exit 1; }
# Respaldo de las fuentes en el repositorio (carpeta dev/)
rm -rf jr-clone/dev && mkdir -p jr-clone/dev && cp -r /home/claude/src2d /home/claude/tests /home/claude/build2d.sh /home/claude/build3d.sh /home/claude/sync.sh /home/claude/dev-README.md jr-clone/dev/ && (cd /home/claude && tar --exclude=node_modules -cf - rio3d-src | tar -xf - -C jr-clone/dev) && mv jr-clone/dev/dev-README.md jr-clone/dev/README.md
cd jr-clone
git add -A
if git diff --cached --quiet; then echo "sin cambios"; exit 0; fi
git -c user.name="Walter" -c user.email="waguilar1289@gmail.com" commit -q -m "$1

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_019e37QDBVuTXAXkKigkLuPy"
git push origin main 2>&1 | tail -2
