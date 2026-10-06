/* input.js — entrada: puntero (orbitar, pan, pellizco, fregar), rueda, selección por rayo y aro del pincel */
import * as THREE from 'three';
import {canvas,cam,occl,IT,RT} from './core.js';
import {A} from '../audio.js';
import {clamp} from './util.js';
import {C,resetCam,panBy} from './camera.js';
import {itemById,state,save} from './state.js';
import {hasDirt,dirtyNear,BRUSH,vis} from './dirt.js';
import {refreshBlob} from './blobs.js';
import {puff} from './fx.js';
import {cat,petCat} from './cat.js';
import {attempt} from './actions.js';
import {updateUI} from './ui.js';
import {LT} from './lights.js';
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();
const itemGroups=()=>Object.values(IT).map(i=>i.g).concat([cat]);
// objeto bajo el puntero (reparable, gato o nada) y el punto 3D tocado
export function pick(e){
  const r=canvas.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);ray.setFromCamera(ndc,cam);
  const hits=ray.intersectObjects(itemGroups().concat(occl),true);
  for(const h of hits){if(!vis(h.object))continue;let o=h.object;while(o&&!o.userData.itemId)o=o.parent;
    return o?{id:o.userData.itemId,point:h.point}:{id:null,point:h.point}}
  return{id:null};
}
let lastTap=0,lastTapXY=[0,0];
const nearBlob=(x,y)=>dirtyNear(x,y,BRUSH()*.8).length>0;
const ptrs=new Map();let mode=null,down=null,pinch0=0,lastScrub=0,scrubLvl=0,scrubPt=null,saveT=0,lastHap=0;
let ring;
// aro del pincel
export function makeRing(){ring=document.createElement('div');ring.style.cssText='position:fixed;pointer-events:none;z-index:4;width:70px;height:70px;margin:-35px 0 0 -35px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 0 14px rgba(255,255,255,.25);opacity:0;transition:opacity .2s';document.body.appendChild(ring)}
export const isIdle=()=>!mode;
export function bindInput(){
canvas.addEventListener('pointerdown',e=>{
  if(!RT.started)return;canvas.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});A.resume();
  if(ptrs.size===2){mode='pinch';const [a,b]=[...ptrs.values()];pinch0=Math.hypot(a.x-b.x,a.y-b.y);return}
  const h=pick(e);down={x:e.clientX,y:e.clientY,t:performance.now(),moved:0,id:h.id};
  // doble toque: centrar
  const now=performance.now();if(now-lastTap<320&&Math.hypot(e.clientX-lastTapXY[0],e.clientY-lastTapXY[1])<30){resetCam();lastTap=0}else{lastTap=now;lastTapXY=[e.clientX,e.clientY]}
  const nb=nearBlob(e.clientX,e.clientY);
  if(e.button===2||e.shiftKey)mode='pan';
  else mode=(nb||(h.id&&hasDirt(h.id)))?'scrub':'orbit';
  if(e.pointerType==='mouse'&&e.button===1)mode='pan';
});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
canvas.addEventListener('pointermove',e=>{
  if(mode==='scrub'&&RT.started){ring.style.opacity=1;ring.style.width=ring.style.height=BRUSH()*1.6+'px';ring.style.margin=(-BRUSH()*.8)+'px 0 0 '+(-BRUSH()*.8)+'px';ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px'}
  const p=ptrs.get(e.pointerId);if(!p)return;const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;
  if(mode==='pinch'&&ptrs.size===2){const [a,b]=[...ptrs.values()],d=Math.hypot(a.x-b.x,a.y-b.y);C.tr=clamp(C.tr*pinch0/d,9,34);pinch0=d;panBy(dx/2,dy/2);return}
  ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';
  if(!down)return;down.moved+=Math.hypot(dx,dy);
  if(mode==='pan'){panBy(dx,dy);return}
  if(mode==='orbit'){C.tth=clamp(C.tth-dx*.006,-.95,.95);C.tph=clamp(C.tph+dy*.004,.03,.42)}
  else if(mode==='scrub'){
    const d=Math.hypot(dx,dy);const near=dirtyNear(e.clientX,e.clientY,BRUSH());
    if(near.length){
      const amt=clamp(d/16,0,1)*.08;
      near.forEach(o=>{o.m.userData.s=Math.max(0,o.m.userData.s-amt*(1-.4*o.dd/BRUSH()));refreshBlob(o.m)});
      const h=pick(e);scrubPt=h.point||near[0].m.getWorldPosition(new THREE.Vector3());
      scrubLvl=clamp(d/20,0,1);lastScrub=performance.now();
      if(!down.hapd&&lastScrub-lastHap>1200){down.hapd=true;lastHap=lastScrub;UX.hap(6)}   // micro-toque suave al empezar a limpiar
      if(Math.random()<.5)puff(scrubPt.x,scrubPt.y+.1,scrubPt.z+.1,1,0xffffff,1.2,1.2);
      A.scrub(scrubLvl);clearTimeout(saveT);saveT=setTimeout(()=>{updateUI();save()},700)
    }else A.scrub(0);
  }
});
const up=e=>{
  if(!ptrs.has(e.pointerId))return;ptrs.delete(e.pointerId);A.scrub(0);scrubPt=null;ring.style.opacity=0;
  if(down&&down.moved<8&&performance.now()-down.t<450&&down.id&&mode!=='pinch'){if(down.id==='gato'){petCat();}const o=itemById(down.id);if(o)attempt(o);}
  if(ptrs.size===0){down=null;mode=null}
};
canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);
canvas.addEventListener('wheel',e=>{if(!RT.started)return;e.preventDefault();C.tr=clamp(C.tr*(1+e.deltaY*.001),9,34)},{passive:false});
}
// farol de mano: ilumina donde se friega (con el barandal reparado) y corta el sonido de fregado al soltar
export function handStep(dt){
  const hl=scrubPt&&state.repaired.barandal&&performance.now()-lastScrub<400;
  if(hl){LT.handL.position.set(scrubPt.x,scrubPt.y+1.2,scrubPt.z+1.2)}LT.handL.intensity+=((hl?2.4:0)-LT.handL.intensity)*Math.min(1,dt*6);
  if(performance.now()-lastScrub>200)A.scrub(0);
}
