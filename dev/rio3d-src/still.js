/* Canoa quieta: un botón detiene la corriente y la canoa. Sin metas: mientras flotas quieto, el río te muestra cosas
   (una libélula a los 20 s, pequeñas escenas cada ~50 s). Una vez al día, quedarse quieto ≥45 s da un recuerdo para la cabaña. */
import {albumSee} from './album.js';
const SK='rio-still';
export const STILL={on:false,k:0,t:0,ev:0};
const LINES=[
['Un pez sube a respirar y deja círculos en el agua.','A fish rises for air and leaves circles on the water.','魚が息をしに上がり、水に輪を残します。'],
['El viento mueve las cañas, y luego vuelve el silencio.','The wind stirs the reeds, then silence returns.','風が葦をゆらし、また静けさが戻ります。'],
['Una hoja pasa despacio; tú no.','A leaf drifts by, slowly; you do not.','葉がゆっくり流れていきます。あなたは動きません。'],
['Se oye el agua rozando la canoa. Eso es todo, y alcanza.','You can hear water brushing the canoe. That is all, and it is enough.','水がカヌーをなでる音だけ。それで十分です。'],
['Las nubes se reflejan en el río, tan quietas como tú.','Clouds reflect in the river, as still as you are.','雲が川に映り、あなたと同じくらい静かです。'],
];
export function addStillTexts(ux){ux.add(LINES);ux.add([['Quedarme quieto','Stay still','じっとする'],['Seguir el río','Follow the river','川を進む'],['Una libélula se posa en la proa.','A dragonfly lands on the bow.','トンボが船首に止まりました。'],['Quedarte quieto también cuenta. Un recuerdo para la cabaña.','Staying still counts too. A keepsake for the cabin.','じっとしているのも大切。小屋に思い出がひとつ。']])}
const day=()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()};
const get=()=>{try{return JSON.parse(localStorage.getItem(SK)||'{}')||{}}catch(e){return{}}};
export const stillTotal=()=>get().n||0;
export const claimStill=state=>{state.cnt=state.cnt||{};const n=Math.max(0,stillTotal()-(state.cnt.st||0));if(n)state.cnt.st=stillTotal();return n};
let btn=null,paid=false;
export function initStill(){
  if(btn||typeof document==='undefined')return;try{addStillTexts(window.UX)}catch(e){}
  btn=document.createElement('button');btn.type='button';btn.id='stillBtn';
  btn.style.cssText='position:fixed;left:12px;bottom:max(96px,calc(env(safe-area-inset-bottom) + 88px));z-index:58;min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:rgba(32,34,70,.82);color:#fbf1e0;font:600 .85rem system-ui;cursor:pointer;display:none';
  const tr=s=>{try{return UX.tr(s)}catch(e){return s}};
  const lab=()=>{btn.textContent=tr(STILL.on?'Seguir el río':'Quedarme quieto')};lab();
  btn.onclick=()=>{STILL.on=!STILL.on;STILL.t=0;STILL.ev=0;paid=false;lab();try{UX.hap(8)}catch(e){}};
  document.body.appendChild(btn);
  /* el botón solo aparece cuando el juego ya empezó (se llama a showStill) */
}
export const showStill=v=>{if(!btn)initStill();if(btn)btn.style.display=v?'block':'none'};
/* dt en segundos; ripple(): ondas en la canoa; started: el juego ya corre */
export function tickStill(dt,started,ripple){
  if(started&&(!btn||btn.style.display==='none'))showStill(true);
  STILL.k+=((STILL.on?1:0)-STILL.k)*Math.min(1,dt*1.2);
  if(!STILL.on)return;
  STILL.t+=dt;
  if(STILL.ev===0&&STILL.t>=20){STILL.ev=1;albumSee('libelula');try{UX.say(UX.tr('Una libélula se posa en la proa.'))}catch(e){}try{ripple&&ripple()}catch(e){}}
  else if(STILL.ev>=1&&STILL.t>=20+STILL.ev*50){const l=LINES[(STILL.ev-1)%LINES.length];STILL.ev++;try{UX.say(UX.tr(l[0]))}catch(e){}try{ripple&&ripple()}catch(e){}}
  if(!paid&&STILL.t>=45){paid=true;const o=get();if(o.d!==day()){o.d=day();o.n=(o.n||0)+1;try{localStorage.setItem(SK,JSON.stringify(o))}catch(e){}try{UX.say(UX.tr('Quedarte quieto también cuenta. Un recuerdo para la cabaña.'))}catch(e){}}}
}
