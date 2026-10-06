/* Guardado y carga local del avance (localStorage) */
import {state,KEY,OLD_KEY,dirt,dctx,DW,DH,rt} from './state.js';
import {age} from './dirt.js';

export function save(){try{localStorage.setItem(KEY,JSON.stringify({r:state.repaired,s:state.spent,d:state.done,b:state.best,t:Date.now(),img:dirt.toDataURL('image/png')}))}catch(e){}}
let saveT=0;export const scheduleSave=()=>{clearTimeout(saveT);saveT=setTimeout(save,600)};
export function load(cb){
  let o=null;
  try{o=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(OLD_KEY)||'null')}catch(e){}
  if(!o){cb();return}
  state.repaired=o.r||{};state.spent=o.s||0;state.done=!!o.d;state.best=o.b||0;rt.sceneDirty=true;
  const finish=()=>{if(o.t)age(Math.max(0,(Date.now()-o.t)/36e5));cb()};
  if(o.img){const im=new Image();im.onload=()=>{dctx.clearRect(0,0,DW,DH);dctx.drawImage(im,0,0);finish()};im.onerror=finish;im.src=o.img}else finish();
}
