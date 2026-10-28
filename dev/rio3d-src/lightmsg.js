/* Mensaje del cartel de la cabaña: cada linterna del Río revela un fragmento; las luces recogidas se ofrecen a la cabaña. Estado compartido por localStorage. */
import {lang} from './i18n.js';
const P={es:['Cuando','el río','te entregue','su luz,','la cabaña','recordará','tu','nombre.'],
  en:['When','the river','hands you','its light,','the cabin','will remember','your','name.'],
  ja:['川が','灯を','授ける','とき、','小屋は','あなたの','名を','思い出す。']};
export const parts=()=>P[lang()]||P.es;
export const luces=()=>{try{return Math.max(0,+localStorage.getItem('rio3d-lant')||0)}catch(e){return 0}};
/* Secuencia: el Río es el juego principal. Al cerrar una vuelta completa (11 lugares) en el templo de la campana se celebra una ceremonia que libera todas las linternas llevadas.
   Con 33 o más (los 33 templos del peregrinaje de Kannon) se despierta el camino a la cabaña de la colina. Cada ceremonia descifra una línea del cartel. */
export const UMBRAL=33;
export const ceremonias=()=>{try{return Math.max(0,+localStorage.getItem('rio3d-cer')||0)}catch(e){return 0}};
export const lapK=()=>{try{const v=localStorage.getItem('rio3d-lapk');return v==null?-1:+v}catch(e){return -1}};
export const setLapK=k=>{try{localStorage.setItem('rio3d-lapk',String(k))}catch(e){}};
export const liberadas=()=>{try{return Math.max(0,+localStorage.getItem('rio3d-rel')||0)}catch(e){return 0}};
export const disponibles=()=>luces();
export const camino=()=>{try{return localStorage.getItem('rio3d-camino')==='1'}catch(e){return false}};
export const GRAN=108;
export const grandes=()=>{try{return Math.max(0,+localStorage.getItem('rio3d-gran')||0)}catch(e){return 0}};
/* Recompensas por vuelta: 2 ceremonias = luz de proa dorada; 3 = las linternas te atraen desde más lejos; 108 o más en una vuelta = Gran ceremonia (campanas y cielo dorado) */
export const proaDorada=()=>ceremonias()>=2;
export const iman=()=>ceremonias()>=3?40:27;
export function ceremonia(n,abre){try{if(n>=GRAN)localStorage.setItem('rio3d-gran',String(grandes()+1));localStorage.setItem('rio3d-rel',String(liberadas()+n));localStorage.setItem('rio3d-lant','0');localStorage.setItem('rio3d-cer',String(ceremonias()+1));if(abre)localStorage.setItem('rio3d-camino','1')}catch(e){}}
/* cartel: dos fragmentos (una línea) por ceremonia */
export const found=()=>Math.min(8,ceremonias()*2);
export const joiner=()=>lang()==='ja'?'':' ';
export function lines(n=found()){const p=parts(),j=joiner(),out=[];for(let i=0;i<8;i+=2)out.push((i<n?p[i]:'···')+j+(i+1<n?p[i+1]:'···'));return out}
export const stairLit=()=>Math.min(8,Math.ceil(liberadas()/12));
export const offered=()=>{try{return +localStorage.getItem('tomo-ofrenda')||0}catch(e){return 0}};
export const setOffered=n=>{try{localStorage.setItem('tomo-ofrenda',String(n))}catch(e){}};
/* el estanque de la maqueta existe una vez despertada la cabaña; el cartel completo (4 ceremonias) lo ilumina */
export const secreto=()=>camino();
export const cartelCompleto=()=>ceremonias()>=4;
export const secretoVisto=()=>{try{return localStorage.getItem('tomo-secreto')==='1'}catch(e){return false}};
export const setSecretoVisto=()=>{try{localStorage.setItem('tomo-secreto','1')}catch(e){}};
export const descubiertos=()=>{try{return JSON.parse(localStorage.getItem('rio3d-found')||'[]')}catch(e){return []}};

/* ---------- actos (kishōtenketsu): cada ceremonia cierra un acto ---------- */
export const ACTOS=[{k:'起',es:'Salir',en:'Set out',ja:'出発'},{k:'承',es:'Seguir',en:'Go on',ja:'つづける'},{k:'転',es:'Reencontrar',en:'Meet again',ja:'めぐりあい'},{k:'結',es:'Soltar',en:'Let go',ja:'手放す'}];
/* acto en curso: 1 antes de la primera ceremonia … 4 tras la tercera; tras la cuarta el cartel está completo y empieza el ciclo libre */
export const acto=()=>Math.min(4,ceremonias()+1);
/* ---------- ofrendas: una palabra cerrada por vuelta (siempre opcional, solo en este dispositivo) ---------- */
export const PALABRAS={
  prisa:{es:'prisa',en:'rush',ja:'急ぎ'},ruido:{es:'ruido',en:'noise',ja:'騒がしさ'},cansancio:{es:'cansancio',en:'weariness',ja:'疲れ'},
  calma:{es:'calma',en:'calm',ja:'静けさ'},compania:{es:'compañía',en:'company',ja:'ぬくもり'},curiosidad:{es:'curiosidad',en:'curiosity',ja:'好奇心'},
  si:{es:'sí',en:'yes',ja:'はい'},cambio:{es:'cambió',en:'it changed',ja:'変わった'},yano:{es:'ya no',en:'no longer',ja:'もう違う'}};
export const ofrendas=()=>{try{const a=JSON.parse(localStorage.getItem('rio3d-ofr')||'[]');return Array.isArray(a)?a:[]}catch(e){return[]}};
export const addOfrenda=(cer,w)=>{try{const a=ofrendas().filter(x=>x[0]!==cer);a.push([cer,w]);localStorage.setItem('rio3d-ofr',JSON.stringify(a))}catch(e){}};
export const ofrendaPend=()=>{try{return +localStorage.getItem('rio3d-ofr-pend')||0}catch(e){return 0}};
export const setOfrendaPend=n=>{try{n?localStorage.setItem('rio3d-ofr-pend',String(n)):localStorage.removeItem('rio3d-ofr-pend')}catch(e){}};
/* ---------- cartas de umbral de Mara: una por ceremonia; su voz cambia con el camino ---------- */
export const CARTAS_UMBRAL=[
 {es:'Cerré mi primera vuelta y las luces subieron solas. Qué torpe me sentí, y qué bien. Si lees esto, la cabaña ya te abrió la puerta.',
  en:'I closed my first lap and the lights rose on their own. How clumsy I felt, and how good. If you are reading this, the cabin has already opened its door to you.',
  ja:'最初の一周を終えると、灯がひとりでに昇っていきました。不器用な自分が、なんだかうれしかった。これを読んでいるなら、小屋はもうあなたを迎え入れています。'},
 {es:'Ya conozco el puente por su crujido y a las garzas por su silencio. Dejé un gesto en cada lugar, como quien deja una nota sobre la mesa. Hazlo tú también.',
  en:'I know the bridge by its creak and the herons by their silence. I left a small gesture at every place, like a note on the table. You do it too.',
  ja:'橋はきしむ音で、サギは静けさで覚えました。それぞれの場所に小さな仕草を残しました。食卓に置き手紙をするように。あなたもそうしてみて。'},
 {es:'Esta vuelta dudé. Quizá no buscaba un lugar, sino reconocerme en lo que dejé atrás. Mira las luces que soltaste: ¿siguen siendo las mismas?',
  en:'I doubted myself this lap. Maybe I was not looking for a place, but for myself in what I left behind. Look at the lights you let go: are they still the same?',
  ja:'この一周、迷いました。探していたのは場所ではなく、置いてきたものの中の自分だったのかもしれません。あなたが放った灯を見て。まだ同じですか。'},
 {es:'La última luz subió y la cabaña quedó en silencio, como cuando todo está en su sitio. Te dejo la llave bajo la lámpara del porche. Es tuya; yo sigo río abajo.',
  en:'The last light rose and the cabin fell silent, the way it does when everything is in its place. I leave the key under the porch lamp. It is yours; I go on down the river.',
  ja:'最後の灯が昇り、小屋はすべてが収まるべきところに収まったように静まりました。鍵は縁側の灯の下に置いておきます。ここはあなたの小屋。私は川を下っていきます。'}];
export const cartaUmbral=(n)=>{const c=CARTAS_UMBRAL[n-1];return c?(c[lang()]||c.es):''};
export const primeraFrase=t=>(t||'').split(/(?<=[.!?。])\s*/)[0];
