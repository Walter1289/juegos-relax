/* Mensaje del cartel de la cabaña: cada linterna del Río revela un fragmento; las luces recogidas se ofrecen a la cabaña. Estado compartido por localStorage. */
import {lang} from './i18n.js';
const P={es:['Cuando','el río','te entregue','su luz,','la cabaña','recordará','tu','nombre.'],
  en:['When','the river','hands you','its light,','the cabin','will remember','your','name.'],
  ja:['川が','灯を','授ける','とき、','小屋は','あなたの','名を','思い出す。']};
export const parts=()=>P[lang()]||P.es;
export const luces=()=>{try{return Math.max(0,+localStorage.getItem('rio3d-lant')||0)}catch(e){return 0}};
export const found=()=>Math.min(8,luces());
export const joiner=()=>lang()==='ja'?'':' ';
/* cuatro líneas de dos fragmentos; el fragmento aún no hallado se muestra como puntos */
export function lines(n=found()){const p=parts(),j=joiner(),out=[];for(let i=0;i<8;i+=2)out.push((i<n?p[i]:'···')+j+(i+1<n?p[i+1]:'···'));return out}
export const stairLit=()=>Math.min(8,Math.ceil(luces()/2));
export const offered=()=>{try{return +localStorage.getItem('tomo-ofrenda')||0}catch(e){return 0}};
export const setOffered=n=>{try{localStorage.setItem('tomo-ofrenda',String(n))}catch(e){}};
