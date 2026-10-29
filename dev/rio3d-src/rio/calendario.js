/* Calendario: fechas del año real que cambian el ánimo del río (sin metas ni castigos; si no juegas ese día, no pierdes nada).
   Primeras: Ōmisoka (31 dic), Shōgatsu/Hatsumōde (1–3 ene), Setsubun (3 feb), Tanabata (7 jul), Obon (13–16 ago).
   Para probar: ?fecha=12-31 en la dirección, o localStorage rio3d-fecha = "08-14". */
import {A} from '../audio-rio.js';
import {S,P} from './state.js';
import {lang} from '../i18n.js';
import {toast} from './hud.js';
import {reward,pulse} from './rewards.js';
const T3=o=>o[lang()]||o.es;
export const EVENTOS=[
 {id:'omisoka',d:[[12,31]],glow:1.2,es:'Es Ōmisoka, la última noche del año. En Japón los templos tocan la campana 108 veces para soltar lo que pesa. Deja que suene.',en:'It is Ōmisoka, the last night of the year. In Japan temples ring the bell 108 times to let go of what weighs. Let it ring.',ja:'大晦日、一年の最後の夜です。日本のお寺では除夜の鐘を108回つき、重たいものを手放します。鐘に耳をすませて。',bell:7},
 {id:'shogatsu',d:[[1,1],[1,2],[1,3]],glow:1.15,es:'Año nuevo: es tiempo de hatsumōde, la primera visita al templo. Pide poco y con calma.',en:'New Year: the time of hatsumōde, the first temple visit. Ask for little, and calmly.',ja:'新年、初詣の季節です。願いは少なく、静かに。',bell:3},
 {id:'setsubun',d:[[2,3]],glow:1,es:'Hoy es Setsubun, el umbral entre el invierno y la primavera. Todo lo viejo puede quedarse atrás.',en:'Today is Setsubun, the threshold between winter and spring. Whatever is old may stay behind.',ja:'今日は節分、冬と春のはざまです。古いものは置いていって大丈夫。',bell:2},
 {id:'tanabata',d:[[7,7]],glow:1.15,es:'Es Tanabata: dos estrellas se encuentran esta noche. Mira el cielo y pide un deseo pequeño.',en:'It is Tanabata: two stars meet tonight. Look up and make a small wish.',ja:'七夕です。今夜は二つの星が出会います。空を見上げて、小さな願いをひとつ。',bell:2},
 {id:'obon',d:[[8,13],[8,14],[8,15],[8,16]],glow:1.4,es:'Es Obon: los faroles guían a quienes recordamos. Cada luz que sueltas hoy es un recuerdo.',en:'It is Obon: lanterns guide those we remember. Every light you release today is a memory.',ja:'お盆です。灯籠は思い出す人たちを導きます。今日流す灯は、ひとつの思い出。',bell:3}];
export function evento(){
  let m,d;try{const q=new URLSearchParams(location.search).get('fecha')||localStorage.getItem('rio3d-fecha');if(q&&/^\d{1,2}-\d{1,2}$/.test(q)){[m,d]=q.split('-').map(Number)}}catch(e){}
  if(!m){const n=new Date();m=n.getMonth()+1;d=n.getDate()}
  return EVENTOS.find(e=>e.d.some(x=>x[0]===m&&x[1]===d))||null}
export const EV=evento();
/* brillo extra de las linternas del río en la fecha (1 = normal) */
export const glowEvento=EV?EV.glow:1;
let done=false;
export function calendarioTick(){
  if(done||!EV||!S.started||P.t<9)return;done=true;
  const key='rio3d-cal',tag=EV.id+'-'+new Date().getFullYear();
  try{if(localStorage.getItem(key)===tag&&!new URLSearchParams(location.search).get('fecha'))return;localStorage.setItem(key,tag)}catch(e){}
  setTimeout(()=>{toast(T3(EV));pulse.t=10;
    for(let i=0;i<EV.bell;i++)setTimeout(()=>{try{A.bell(i%2?220:146.83,A.ctx.currentTime+.05,.2,true,0,-3)}catch(e){}},2500+i*6500)},800)
}
