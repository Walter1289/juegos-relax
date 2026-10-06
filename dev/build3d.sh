#!/bin/bash
set -e
cd /home/claude/rio3d-src
mkdir -p /home/claude/jr-clone/rio3d /home/claude/jr-clone/cabana3d
npx esbuild main.js --bundle --minify --format=iife --target=es2019 --outfile=/home/claude/jr-clone/rio3d/app.js --log-level=warning
npx esbuild cabin.js --bundle --minify --format=iife --target=es2019 --outfile=/home/claude/jr-clone/cabana3d/app.js --log-level=warning
cp index.html /home/claude/jr-clone/rio3d/index.html
cp cabin.html /home/claude/jr-clone/cabana3d/index.html
