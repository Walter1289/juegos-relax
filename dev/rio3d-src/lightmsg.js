/* Mensaje del cartel de la cabaña: cada linterna del Río revela un fragmento; las luces recogidas se ofrecen a la cabaña. Estado compartido por localStorage. */
import {lang} from './i18n.js';
const P={es:['Cuando','el río','te entregue','su luz,','la cabaña','recordará','tu','nombre.'],
  en:['When','the river','hands you','its light,','the cabin','will remember','your','name.'],
  ja:['川が','灯を','授ける','とき、','小屋は','あなたの','名を','思い出す。']};
export const parts=()=>P[lang()]||P.es;
export const luces=()=>{try{return Math.max(0,+localStorage.getItem('rio3d-lant')||0)}catch(e){return 0}};
/* cada 4 linternas se descifra un fragmento y cada 8 una línea completa del cartel (4 líneas = 32 linternas) */
export const found=()=>Math.min(8,Math.floor(luces()/4));
export const joiner=()=>lang()==='ja'?'':' ';
export function lines(n=found()){const p=parts(),j=joiner(),out=[];for(let i=0;i<8;i+=2)out.push((i<n?p[i]:'···')+j+(i+1<n?p[i+1]:'···'));return out}
export const stairLit=()=>Math.min(8,Math.ceil(luces()/4));
export const offered=()=>{try{return +localStorage.getItem('tomo-ofrenda')||0}catch(e){return 0}};
export const setOffered=n=>{try{localStorage.setItem('tomo-ofrenda',String(n))}catch(e){}};
/* el cartel completo (32 linternas) despierta el estanque secreto de la cabaña */
export const secreto=()=>luces()>=32;
export const secretoVisto=()=>{try{return localStorage.getItem('tomo-secreto')==='1'}catch(e){return false}};
export const setSecretoVisto=()=>{try{localStorage.setItem('tomo-secreto','1')}catch(e){}};
/* 25 linternas liberadas en el templo abren el camino a la cabaña de la colina */
export const CAMINO=25;
export const liberadas=()=>{try{return Math.max(0,+localStorage.getItem('rio3d-rel')||0)}catch(e){return 0}};
export const disponibles=()=>Math.max(0,luces()-liberadas());
export const camino=()=>{try{return localStorage.getItem('rio3d-camino')==='1'}catch(e){return false}};
export function liberar(){try{localStorage.setItem('rio3d-rel',String(liberadas()+CAMINO));localStorage.setItem('rio3d-camino','1')}catch(e){}}
export const descubiertos=()=>{try{return JSON.parse(localStorage.getItem('rio3d-found')||'[]')}catch(e){return []}};
