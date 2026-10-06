/* main.js — arranque: orden de inicialización, bucle de animación, enlace con la pausa (PZ) y el menú «Más» (UX.btns) */
import '../../rio3d-src/pause.js';   // IIFE: define window.PZ (pausa, Esc, menú «Más»)
import {$} from './util.js';
import {G} from './state.js';
import {initCanvas} from './canvas.js';
import {initInput} from './input.js';
import {A} from './audio.js';
import {fx} from './particles.js';
import {update} from './rules.js';
import {render} from './render.js';
import {updateHUD} from './ui.js';
import {save,load} from './save.js';
import {initControls} from './controls.js';
import {initCalm} from './calm.js';
import {setupI18n,startI18n} from './i18n.js';

const PZ=window.PZ,UX=window.UX;

initCanvas();
initInput();
initControls();

let last=0,saveAcc=0;
function frame(ms){
  if(PZ.on){last=ms/1000;requestAnimationFrame(frame);return}
  const t=ms/1000,dt=Math.min(.05,last?t-last:.016);last=t;
  if(G.started){update(dt);saveAcc+=dt;if(saveAcc>8){saveAcc=0;save()}}else G.clock+=dt;
  fx(dt);render();
  requestAnimationFrame(frame);
}
load();updateHUD();
requestAnimationFrame(frame);
initCalm();

/* Enlace con la pausa compartida y gancho de pruebas */
PZ.ctx=()=>A.ctx;PZ.started=()=>G.started;
window.__jr={state:()=>({started:G.started,dist:Math.round(G.s),lamps:G.lit.size,clock:Math.round(G.clock)})};
setupI18n();
PZ.more(document.querySelector('header'),[$('#breath-btn'),$('#mute'),$('#reset'),...UX.btns('btn')]);
startI18n();   // al final: traduce el DOM actual (incluido el menú «Más» y la pausa) y observa los cambios
