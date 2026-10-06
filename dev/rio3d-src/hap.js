/* Háptica suave: usa vibración del navegador donde existe (Android, etc.). iPadOS no la expone a las webs. */
const g=()=>{try{return localStorage.getItem('rio3d-hap')!=='0'}catch(e){return true}};
let sw=null;
export function hap(p){
  if(!g())return;
  try{
    if(navigator.vibrate){navigator.vibrate(p);return}
    // Safari 17.4+: alternar un interruptor nativo produce un toque háptico (solo dentro de un gesto del usuario)
    if(!sw){const l=document.createElement('label');l.style.cssText='position:fixed;left:-99px;top:0;opacity:0;pointer-events:none';const i=document.createElement('input');i.type='checkbox';i.setAttribute('switch','');l.appendChild(i);document.body.appendChild(l);sw=l}
    sw.click();
  }catch(e){}
}
