/* Entrada del jugador: puntero (timón/cabeceo), teclado (P.key) y estado de dirección compartido (IN). */
import {A} from '../audio-rio.js';
import {clamp} from './util.js';
import {S,skipCine,P} from './state.js';
import {canvas} from './core.js';
/* dirección por puntero: steer (-1..1) y pitch (cabeceo de la mirada) */
export const IN={steer:0,pitch:0,pad:0};
/* mirada libre de 360°: arrastrar gira la vista sin tocar el rumbo de la canoa. auto: vuelve sola al frente tras unos segundos (esquema estándar) */
export const LOOK={on:false,drag:false,auto:true,yaw:0,pitch:0,vy:0,lx:0,ly:0,lt:0,t:99};
/* esquema táctil: 'std' = izquierda dirige (joystick flotante), derecha mira, botones ✕ ○ □ △ y Start; 'classic' = el control anterior */
export const CTL={scheme:'std',ui:null,onScheme:null};
try{const v=localStorage.getItem('rio3d-ctl');if(v==='classic'||v==='std')CTL.scheme=v}catch(e){}
LOOK.auto=CTL.scheme==='std';
let sId=null,lId=null,sx=0,sy=0;
const lookDown=e=>{LOOK.drag=true;LOOK.lx=e.clientX;LOOK.ly=e.clientY;LOOK.lt=e.timeStamp;LOOK.vy=0;LOOK.t=0};
const lookMove=e=>{const dx=e.clientX-LOOK.lx,dy=e.clientY-LOOK.ly,dt=Math.max(8,e.timeStamp-LOOK.lt)/1000;LOOK.lx=e.clientX;LOOK.ly=e.clientY;LOOK.lt=e.timeStamp;
  const k=.0052*(innerWidth/innerHeight<1?1.25:1);LOOK.yaw-=dx*k;LOOK.pitch=clamp(LOOK.pitch-dy*.0038,-1.15,1.15);LOOK.vy=LOOK.vy*.6+(-dx*k/dt)*.4;LOOK.t=0};
const lookUp=()=>{LOOK.drag=false;LOOK.t=0;if(Math.abs(LOOK.vy)>4)LOOK.vy=Math.sign(LOOK.vy)*4};
/* ---------- entrada ---------- */
canvas.addEventListener('pointerdown',e=>{
  if(!S.started||S.X.photo)return;skipCine();canvas.setPointerCapture(e.pointerId);A.resume();
  if(CTL.scheme==='std'){
    if(e.clientX<innerWidth/2){if(sId===null){sId=e.pointerId;sx=e.clientX;sy=e.clientY;P.hold=true;IN.steer=0;IN.pitch=0;if(CTL.ui)CTL.ui.joy(sx,sy,0)}}
    else if(lId===null){lId=e.pointerId;lookDown(e)}
    return}
  if(LOOK.on){LOOK.drag=true;LOOK.lx=e.clientX;LOOK.ly=e.clientY;LOOK.lt=e.timeStamp;LOOK.vy=0;return}
  P.hold=true;upd(e)});
canvas.addEventListener('pointermove',e=>{
  if(S.X.photo)return;
  if(CTL.scheme==='std'){
    if(e.pointerId===sId){const dx=e.clientX-sx,v=Math.abs(dx)<8?0:clamp((dx-Math.sign(dx)*8)/70,-1,1);IN.steer=v;if(CTL.ui)CTL.ui.joy(sx,sy,v)}
    else if(e.pointerId===lId)lookMove(e);
    return}
  if(LOOK.drag)lookMove(e);else if(P.hold)upd(e)});
export const relAll=()=>{P.hold=false;IN.steer=0;IN.pitch=0;sId=null;lId=null;if(LOOK.drag)lookUp();if(CTL.ui)CTL.ui.joyOff()};
const rel=e=>{
  if(CTL.scheme==='std'){
    if(e.pointerId===sId){sId=null;P.hold=false;IN.steer=0;if(CTL.ui)CTL.ui.joyOff()}
    else if(e.pointerId===lId){lId=null;lookUp()}
    return}
  P.hold=false;IN.steer=0;IN.pitch=0;if(LOOK.drag)lookUp()};
canvas.addEventListener('pointerup',rel);canvas.addEventListener('pointercancel',rel);
export function setScheme(v){CTL.scheme=v==='classic'?'classic':'std';try{localStorage.setItem('rio3d-ctl',CTL.scheme)}catch(e){}relAll();LOOK.on=false;LOOK.auto=CTL.scheme==='std';if(CTL.onScheme)CTL.onScheme()}
function upd(e){const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;IN.steer=Math.abs(x)<.1?0:clamp((x-Math.sign(x)*.1)*1.4,-1,1);IN.pitch=y}
addEventListener('keydown',e=>{if(e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW'){P.key.up=true;e.preventDefault()}if(e.code==='ArrowLeft'||e.code==='KeyA')P.key.l=true;if(e.code==='ArrowRight'||e.code==='KeyD')P.key.r=true});
addEventListener('keyup',e=>{if(e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW')P.key.up=false;if(e.code==='ArrowLeft'||e.code==='KeyA')P.key.l=false;if(e.code==='ArrowRight'||e.code==='KeyD')P.key.r=false});
