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
export function ceremonia(n,abre){try{localStorage.setItem('rio3d-rel',String(liberadas()+n));localStorage.setItem('rio3d-lant','0');localStorage.setItem('rio3d-cer',String(ceremonias()+1));if(abre)localStorage.setItem('rio3d-camino','1')}catch(e){}}
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
