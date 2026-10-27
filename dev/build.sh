#!/bin/bash
# Compila todo el sitio desde la raíz del repo. Uso: bash dev/build.sh
set -e
D="$(cd "$(dirname "$0")" && pwd)"; R="$(dirname "$D")"
cd "$D/rio3d-src"
# 3D: Three.js en un fragmento compartido con nombre por contenido (se cachea una vez para Río y Cabaña)
rm -f "$R"/rio3d/three-*.js "$R"/cabana3d/three-*.js
npx esbuild main.js cabin.js --bundle --splitting --format=esm --minify --target=es2019 \
  --outdir="$R/.out3d" --entry-names=[name] --chunk-names=three-[hash] --log-level=warning
CH=$(ls "$R/.out3d"/three-*.js | head -1); CN=$(basename "$CH")
mkdir -p "$R/shared"; rm -f "$R"/shared/three-*.js; cp "$CH" "$R/shared/$CN"
# los fragmentos importan "./three-XXXX.js": reescribir a la ruta compartida
sed "s#\./$CN#../shared/$CN#g" "$R/.out3d/main.js" > "$R/rio3d/app.js"
sed "s#\./$CN#../shared/$CN#g" "$R/.out3d/cabin.js" > "$R/cabana3d/app.js"
rm -rf "$R/.out3d"
sed 's#<script src="app.js"></script>#<script type="module" src="app.js"></script>#' index.html > "$R/rio3d/index.html"
sed 's#<script src="app.js"></script>#<script type="module" src="app.js"></script>#' cabin.html > "$R/cabana3d/index.html"
# 2D
python3 "$D/tools/b2d.py" "$R"
echo "ok · chunk: $CN"
