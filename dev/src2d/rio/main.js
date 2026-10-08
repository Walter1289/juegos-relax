/* main.js — arranque: orden de inicialización, bucle de animación, enlace con la pausa (PZ) y el menú «Más» (UX.btns) */
import '../../rio3d-src/pause.js';   // IIFE: define window.PZ (pausa, Esc, menú «Más»)
import {openAlbum,addAlbumTexts} from '../../rio3d-src/album.js';
import {initPad,padButton,addPadTexts} from '../../rio3d-src/steerpad.js';
import {$} from './util.js';
import {G,keys} from './state.js';
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
import {lmIndexAt,lmPos,lmType} from './world.js';
import {castleDbg} from './castle.js';
import {fwInfo} from './fireworks.js';

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
initPad({set:(n,v)=>{keys[n]=v},started:()=>G.started,anchor:()=>document.getElementById('game')});

/* Enlace con la pausa compartida y gancho de pruebas */
PZ.ctx=()=>A.ctx;PZ.started=()=>G.started;
window.__jr={
  state:()=>({started:G.started,dist:Math.round(G.s),lamps:G.lit.size,clock:Math.round(G.clock)}),
  /* depuración: tp(s) teletransporta la distancia G.s (y centra la canoa); setClock(c) fija la hora (ciclo de 360 s); lmPos/lmType exponen el mundo */
  tp:s=>{G.s=s;G.ox=0;G.vx=0;return Math.round(G.s)},
  setClock:c=>{G.clock=c;return G.clock},
  lmPos,lmType,lmIndexAt,G,
  lmFound:()=>[...G.found],
  typeNear:(r)=>{const k=lmIndexAt(G.s);return Math.abs(G.s-lmPos(k))<(r||600)?lmType(k):-1},
  /* avanza la simulación n pasos de dt segundos sin dibujar (para capturas con poca velocidad de fotogramas) */
  step:(n,dt)=>{for(let i=0;i<n;i++){update(dt||.05);fx(dt||.05)}return Math.round(G.s)},
  render,fw:fwInfo,audio:A,
  dbg:castleDbg,
};
setupI18n();
addAlbumTexts(UX);addPadTexts(UX);
const albBtn=document.createElement('button');albBtn.type='button';albBtn.className='btn';albBtn.textContent='Cuaderno del río';albBtn.onclick=()=>openAlbum(UX.tr);
PZ.more(document.querySelector('header'),[albBtn,padButton('btn'),$('#breath-btn'),$('#mute'),$('#reset'),...UX.btns('btn')]);
startI18n();   // al final: traduce el DOM actual (incluido el menú «Más» y la pausa) y observa los cambios
