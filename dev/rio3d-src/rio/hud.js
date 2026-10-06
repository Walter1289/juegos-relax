/* HUD: avisos (toast), diario de lugares, botones de inicio/sonido, guardado de posición y marcadores de hora/distancia. */
import {A} from '../audio-rio.js';
import {seasonIdx} from '../season.js';
import {el} from './util.js';
import {S,P,goAt} from './state.js';
import {LMS,lmPos,lmType} from './world.js';
import {todName} from './env.js';
import {LM,lmFound} from './lm-data.js';
export function toast(m){const t=el('toast');t.textContent=m;t.style.opacity=1;clearTimeout(toast.h);toast.h=setTimeout(()=>t.style.opacity=0,4200)}
/* ---------- diario de lugares ---------- */
const chipEls=LM.map(n=>{const e=document.createElement('span');e.className='chip';e.textContent=n;el('chips').appendChild(e);return e});
export function updateDiary(ps){el('places').textContent=lmFound.size+'/'+LM.length;chipEls.forEach((e,i)=>e.classList.toggle('on',lmFound.has(i)));
  let k=Math.max(0,Math.floor((ps-240)/LMS)-1);while(lmPos(k)<ps+1)k++;el('next').textContent='Siguiente: '+LM[lmType(k)]+' en '+Math.max(0,Math.round((lmPos(k)-ps)/10)*10)+' m'}
/* ---------- botones, posición guardada y arranque ---------- */
el('snd').onclick=()=>{A.on=!A.on;if(A.ctx)A.setOn(A.on);el('snd').textContent='Sonido: '+(A.on?'sí':'no')};
try{S.savedS=+localStorage.getItem('rio3d-pos')||0}catch(e){}
export function savePos(){try{if(S.started&&P.dist>80)localStorage.setItem('rio3d-pos',String(Math.round(P.dist)))}catch(e){}}
setInterval(savePos,2500);addEventListener('pagehide',savePos);document.addEventListener('visibilitychange',savePos);
if(S.savedS>150){el('go').textContent='Continuar ('+S.savedS+' m)';el('go2').hidden=false;el('go2').onclick=()=>{try{localStorage.removeItem('rio3d-pos')}catch(e){}S.savedS=0;el('go').onclick()}}
el('go').onclick=()=>{
  if(S.savedS>150)goAt(S.savedS);
  try{A.init();A.resume()}catch(e){}
  el('start').hidden=true;el('hud').hidden=false;el('places-row').hidden=false;updateDiary(0);el('hint').hidden=false;S.started=true;
  setTimeout(()=>{try{if(localStorage.getItem('rio3d-ob')==='1')el('hint').style.opacity=0}catch(e){el('hint').style.opacity=0}},9000);
};
/* marcadores periódicos (cada 0.4 s): diario, ambiente sonoro, distancia y hora */
let hudT=0;
export function updateHud(dt,s){
  hudT-=dt;if(hudT<=0){hudT=.4;updateDiary(P.dist||s);{const ps2=P.dist||s,kk=Math.round((ps2-240)/LMS);let lt=-1;for(const q of[kk-1,kk,kk+1])if(q>=0&&Math.abs(lmPos(q)-ps2)<280)lt=lmType(q);A.setMood(Math.sin(Math.PI*2*(S.tod-.12)),lt,seasonIdx())}el('m').textContent=Math.round(P.dist/ (1)) ;el('tod').textContent=todName(S.tod)}
}
