/* Entrada del jugador: puntero (timón/cabeceo), teclado (P.key) y estado de dirección compartido (IN). */
import {A} from '../audio-rio.js';
import {clamp} from './util.js';
import {S,skipCine,P} from './state.js';
import {canvas} from './core.js';
/* dirección por puntero: steer (-1..1) y pitch (cabeceo de la mirada) */
export const IN={steer:0,pitch:0};
/* mirada libre de 360° (botón Mirar): arrastrar gira la vista sin tocar el rumbo de la canoa */
export const LOOK={on:false,drag:false,yaw:0,pitch:0,vy:0,lx:0,ly:0,lt:0};
/* ---------- entrada ---------- */
canvas.addEventListener('pointerdown',e=>{if(!S.started||S.X.photo)return;skipCine();canvas.setPointerCapture(e.pointerId);A.resume();if(LOOK.on){LOOK.drag=true;LOOK.lx=e.clientX;LOOK.ly=e.clientY;LOOK.lt=e.timeStamp;LOOK.vy=0;return}P.hold=true;upd(e)});
canvas.addEventListener('pointermove',e=>{
  if(LOOK.drag&&!S.X.photo){const dx=e.clientX-LOOK.lx,dy=e.clientY-LOOK.ly,dt=Math.max(8,e.timeStamp-LOOK.lt)/1000;LOOK.lx=e.clientX;LOOK.ly=e.clientY;LOOK.lt=e.timeStamp;
    const k=.0052*(innerWidth/innerHeight<1?1.25:1);LOOK.yaw-=dx*k;LOOK.pitch=clamp(LOOK.pitch-dy*.0038,-1.15,1.15);LOOK.vy=LOOK.vy*.6+(-dx*k/dt)*.4;return}
  if(P.hold&&!S.X.photo)upd(e)});
const rel=()=>{P.hold=false;IN.steer=0;IN.pitch=0;LOOK.drag=false;if(Math.abs(LOOK.vy)>4)LOOK.vy=Math.sign(LOOK.vy)*4};
canvas.addEventListener('pointerup',rel);canvas.addEventListener('pointercancel',rel);
function upd(e){const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;IN.steer=Math.abs(x)<.1?0:clamp((x-Math.sign(x)*.1)*1.4,-1,1);IN.pitch=y}
addEventListener('keydown',e=>{if(e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW'){P.key.up=true;e.preventDefault()}if(e.code==='ArrowLeft'||e.code==='KeyA')P.key.l=true;if(e.code==='ArrowRight'||e.code==='KeyD')P.key.r=true});
addEventListener('keyup',e=>{if(e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW')P.key.up=false;if(e.code==='ArrowLeft'||e.code==='KeyA')P.key.l=false;if(e.code==='ArrowRight'||e.code==='KeyD')P.key.r=false});
