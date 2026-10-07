/* Entrada de Río 3D: el código vive en ./rio/ (módulos ES); esbuild parte de este archivo. */
import './ux.js';
import './rio/main.js';
import {addAlbumTexts} from './album.js';
try{window.UX.mood()}catch(e){}
try{addAlbumTexts(window.UX)}catch(e){}
