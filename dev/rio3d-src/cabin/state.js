/* state.js — estado de la partida, reglas de tablas, guardado/carga y envejecimiento por abandono */
import {R,RT,IT} from './core.js';
import {A} from '../audio.js';
import {clamp} from './util.js';
import {ITEMS} from './items.js';
import {refreshBlob} from './blobs.js';
export const KEY='cabana3d-v1',CLEAN_MIN=.55,RATE=200;
export const state={repaired:{},spent:0,best:0,done:false,decor:{},own:{},mem:0,notes:[],vis:{},ltr:{},cnt:{}};
export const itemById=id=>ITEMS.find(o=>o.id===id);
export const rate=()=>RATE*(state.repaired.escalera?1.1:1);
export const avail=()=>Math.floor(state.best*rate())-state.spent;
export const doneCount=()=>ITEMS.filter(o=>state.repaired[o.id]).length;
export const nameOf=id=>itemById(id).name.toLowerCase();
export const missing=o=>(o.needs||[]).filter(id=>!state.repaired[id]);
// muestra la versión reparada o la dañada de cada objeto; activa la lluvia con el techo
export function applyVisuals(){ITEMS.forEach(o=>{const it=IT[o.id],r=!!state.repaired[o.id];it.b.visible=!r;it.f.visible=r});RT.rainOn=!!state.repaired.techo;A.rain(RT.rainOn);R.shadowMap.needsUpdate=true}
export function save(){try{const bl={};Object.values(IT).forEach(it=>bl[it.id]=it.blobs.map(m=>+m.userData.s.toFixed(2)));
  localStorage.setItem(KEY,JSON.stringify({r:state.repaired,s:state.spent,b:state.best,d:state.done,t:Date.now(),bl,dc:state.decor,ow:state.own,me:state.mem,nt:state.notes,vv:state.vis,lt:state.ltr,ct:state.cnt}))}catch(e){}}
// zonas: [objetos, horas hasta empezar a ensuciar, horas hasta el máximo, nombre]
const ZONES=[[['piso'],2,10,'el piso'],[['escalera','barandal','plantas','luces'],10,26,'la terraza y la escalera'],[['librero','cama','ventana','cuadro','lampara'],26,50,'el interior'],[['techo','panel','nichos'],50,80,'el techo y los nichos']];
// notify(texto): aviso al jugador (inyectado para no depender de la interfaz)
export function load(notify){
  let o=null;try{o=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}
  if(!o)return;
  state.repaired=o.r||{};state.spent=o.s||0;state.best=o.b||0;state.done=!!o.d;state.decor=o.dc||{};state.own=o.ow||{};state.mem=o.me||0;state.notes=o.nt||[];state.vis=o.vv||{};state.ltr=o.lt||{};state.cnt=o.ct||{};
  Object.values(IT).forEach(it=>{const a=(o.bl||{})[it.id];if(a)it.blobs.forEach((m,i)=>{if(a[i]!=null)m.userData.s=a[i]})});
  const wear=(()=>{try{return localStorage.getItem('ux-wear')==='1'}catch(e){return false}})(),h=(o.t&&wear)?(Date.now()-o.t)/36e5:0;let reached=null;
  ZONES.forEach(([ids,from,to,n])=>{const k=clamp((h-from)/(to-from));if(k>0){ids.forEach(id=>IT[id].blobs.forEach(m=>{m.userData.s=Math.max(m.userData.s,k*.9)}));reached=n}});
  Object.values(IT).forEach(it=>it.blobs.forEach(refreshBlob));
  if(reached)setTimeout(()=>notify('Mientras no estabas, la humedad volvió a ensuciar '+reached),1500);
}
// reinicio total: borra el guardado, repone la suciedad y vuelve a mostrar lo dañado
export function resetState(){
  try{localStorage.removeItem(KEY)}catch(e){}
  state.repaired={};state.spent=0;state.best=0;state.done=false;state.decor={};state.own={};state.mem=0;state.notes=[];state.vis={};state.ltr={};state.cnt={};try{window.__habReset&&window.__habReset()}catch(e){}Object.values(IT).forEach(it=>it.blobs.forEach(m=>{m.userData.s=1;refreshBlob(m)}));applyVisuals();
}
