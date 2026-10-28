/* Recompensas intermedias: una novedad pequeña cada ~20 s como mucho, nunca dos juntas ni una ventana que detenga el juego.
   Si llega una mientras otra está reciente, espera su turno (queda solo la última). */
import {A} from '../audio-rio.js';
import {toast} from './hud.js';
import {P} from './state.js';
import {lang} from '../i18n.js';
export const pulse={t:0};          /* segundos restantes del brillo extra de la proa */
const GAP=20;let last=-99,q=null,timer=0;
const T3=o=>o[lang()]||o.es;
function fire(o){
  last=P.t;
  if(o.msg)toast(T3(o.msg));
  if(o.audio){try{A.milestone(o.n||0)}catch(e){}}
  if(o.pulse)pulse.t=o.pulse;
  if(o.fx)try{o.fx()}catch(e){}
}
/* o: {msg:{es,en,ja}, audio?:true, n?:número, pulse?:segundos, fx?:fn, delay?:ms} */
export function reward(o){
  if(o.delay){setTimeout(()=>reward(Object.assign({},o,{delay:0})),o.delay);return}
  if(P.t-last>=GAP)fire(o);else q=o;
}
export function rewardTick(dt){
  if(pulse.t>0)pulse.t=Math.max(0,pulse.t-dt);
  if(q&&P.t-last>=GAP){const o=q;q=null;fire(o)}
}
/* gesto sugerido: resalta el botón ○ (quedarse quieto) unos segundos, sin parpadeo */
export function hintStill(){
  const b=document.getElementById('abo');if(!b)return;b.classList.add('hint');setTimeout(()=>b.classList.remove('hint'),14000)
}
