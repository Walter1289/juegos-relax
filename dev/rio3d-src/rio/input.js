/* Entrada del jugador: puntero (timón/cabeceo), teclado (P.key) y estado de dirección compartido (IN). */
import {A} from '../audio-rio.js';
import {clamp} from './util.js';
import {S,skipCine,P} from './state.js';
import {canvas} from './core.js';
/* dirección por puntero: steer (-1..1) y pitch (cabeceo de la mirada) */
export const IN={steer:0,pitch:0};
/* ---------- entrada ---------- */
canvas.addEventListener('pointerdown',e=>{if(!S.started||S.X.photo)return;skipCine();canvas.setPointerCapture(e.pointerId);P.hold=true;upd(e);A.resume()});
canvas.addEventListener('pointermove',e=>{if(P.hold&&!S.X.photo)upd(e)});
const rel=()=>{P.hold=false;IN.steer=0;IN.pitch=0};
canvas.addEventListener('pointerup',rel);canvas.addEventListener('pointercancel',rel);
function upd(e){const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;IN.steer=Math.abs(x)<.1?0:clamp((x-Math.sign(x)*.1)*1.4,-1,1);IN.pitch=y}
addEventListener('keydown',e=>{if(e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW'){P.key.up=true;e.preventDefault()}if(e.code==='ArrowLeft'||e.code==='KeyA')P.key.l=true;if(e.code==='ArrowRight'||e.code==='KeyD')P.key.r=true});
addEventListener('keyup',e=>{if(e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW')P.key.up=false;if(e.code==='ArrowLeft'||e.code==='KeyA')P.key.l=false;if(e.code==='ArrowRight'||e.code==='KeyD')P.key.r=false});
