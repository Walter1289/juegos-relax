/* input.js — entrada: puntero (mantener y arrastrar) y teclado (flechas, A/D) */
import {canvas} from './canvas.js';
import {G,keys,view} from './state.js';

const KMAP={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',Space:'p',ArrowUp:'p',KeyW:'p'};
export function initInput(){
  const vx0=e=>(e.clientX-canvas.getBoundingClientRect().left)/view.U;
  canvas.addEventListener('pointerdown',e=>{if(!G.started)return;e.preventDefault();canvas.setPointerCapture(e.pointerId);G.hold=true;G.px=vx0(e)});
  canvas.addEventListener('pointermove',e=>{if(G.hold)G.px=vx0(e)});
  const pUp=()=>{G.hold=false;G.px=null};
  canvas.addEventListener('pointerup',pUp);canvas.addEventListener('pointercancel',pUp);
  addEventListener('keydown',e=>{const k=KMAP[e.code];if(!k||!G.started)return;e.preventDefault();keys[k]=true});
  addEventListener('keyup',e=>{const k=KMAP[e.code];if(k)keys[k]=false});
}
