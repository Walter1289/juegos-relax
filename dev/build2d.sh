#!/bin/bash
# Compila los juegos 2D: src2d/<juego>/main.js (módulos ES) → un solo <script> incrustado en template.html (marcador <!--BUNDLE-->).
# Salida: /home/claude/rio-de-linternas.html y /home/claude/cabana-acantilado.html (fragmentos autocontenidos que usa sync.sh y los artefactos).
set -e
cd /home/claude
build_one(){ # $1 carpeta, $2 archivo de salida
  [ -f "src2d/$1/main.js" ] || return 0
  npx esbuild "src2d/$1/main.js" --bundle --format=iife --target=es2019 --outfile="/tmp/jr-$1.bundle.js" --log-level=warning
  python3 - "$1" "$2" <<'PY'
import sys
g,out=sys.argv[1],sys.argv[2]
t=open(f'/home/claude/src2d/{g}/template.html').read()
b=open(f'/tmp/jr-{g}.bundle.js').read().replace('</script','<\\/script')
assert '<!--BUNDLE-->' in t
open(f'/home/claude/{out}','w').write(t.replace('<!--BUNDLE-->','<script>\n'+b+'\n</script>'))
PY
}
build_one rio rio-de-linternas.html
build_one cabana cabana-acantilado.html
