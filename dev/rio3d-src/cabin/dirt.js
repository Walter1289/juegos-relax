/* dirt.js — suciedad: medición de limpieza y progreso, estado de cada objeto y búsqueda de manchas bajo el pincel */
import * as THREE from 'three';
import {IT,cam,canvas} from './core.js';
import {clamp} from './util.js';
import {ITEMS} from './items.js';
import {state,avail,doneCount,missing,nameOf,CLEAN_MIN} from './state.js';
import {C} from './camera.js';
export const cleanOf=id=>{const b=IT[id].blobs;return b.length?1-b.reduce((a,m)=>a+m.userData.s,0)/b.length:1};
// cur: limpieza medida por objeto y total
export const cur={all:0,items:{}};
export function measure(){let t=0;ITEMS.forEach(o=>{const c=cleanOf(o.id);cur.items[o.id]=c;t+=c});cur.all=t/ITEMS.length;state.best=Math.max(state.best,cur.all)}
export const progress=()=>.55*Math.min(1,cur.all/.96)+.45*doneCount()/ITEMS.length;
// estado de un objeto: reparado, bloqueado (requisitos, limpieza, tablas) o listo
export function status(o){
  if(state.repaired[o.id])return{k:'done',t:'Reparado'};
  if(missing(o).length)return{k:'locked',t:'Necesita: '+missing(o).map(nameOf).join(', ')};
  const c=cur.items[o.id]||0;
  if(c<CLEAN_MIN)return{k:'locked',t:'Limpia la zona · '+Math.round(c/CLEAN_MIN*100)+'%'};
  if(avail()<o.cost)return{k:'locked',t:'Faltan '+(o.cost-avail())+' tablas'};
  return{k:'ready',t:'Listo · '+o.cost+' tablas'};
}
// ¿el objeto (y sus padres) es visible?
export const vis=o=>{while(o){if(!o.visible)return false;o=o.parent}return true};
export const hasDirt=id=>IT[id]&&IT[id].blobs.some(m=>m.visible);
// pincel: radio en pantalla según el zoom
export const BRUSH=()=>clamp(58*16/C.r,34,90);
const bp=new THREE.Vector3();
// manchas visibles bajo (x,y) de pantalla dentro del radio; sólo las más cercanas a la cámara
export function dirtyNear(x,y,rad){const r=canvas.getBoundingClientRect(),out=[];let dmin=1e9;
  Object.values(IT).forEach(it=>{if(!vis(it.g))return;it.blobs.forEach(m=>{if(!m.visible)return;m.getWorldPosition(bp);const d=bp.distanceTo(cam.position);const p=bp.clone().project(cam);
    if(p.z>1)return;const sx=(p.x+1)/2*r.width+r.left,sy=(1-p.y)/2*r.height+r.top,dd=Math.hypot(sx-x,sy-y);if(dd<rad){out.push({m,d,dd,it});if(d<dmin)dmin=d}})});
  return out.filter(o=>o.d<dmin+5)}
