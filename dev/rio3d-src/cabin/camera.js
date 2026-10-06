/* camera.js — cámara orbital: orbitar, pan, zoom, reencuadre, foco en un objeto y botones de cámara */
import {cam,RT} from './core.js';
import {clamp} from './util.js';
// th/ph/r = valores suavizados; t* = destino; g* = punto de mira destino; focusT = segundos de foco restantes
export const C={th:.3,ph:.15,r:16,tx:2.2,ty:5.6,tz:.5,tth:.3,tph:.15,tr:16,gx:2.2,gy:5.6,gz:.5,focusT:0};
const TGT0=[2.2,5.6,.5];
const panClamp=()=>{C.gx=clamp(C.gx,-4,9);C.gy=clamp(C.gy,3,9);C.gz=clamp(C.gz,-3,4)};
export function resetCam(){C.gx=TGT0[0];C.gy=TGT0[1];C.gz=TGT0[2];C.tr=16;C.tth=.3;C.tph=.15;C.focusT=0}
export const zoomBy=f=>{C.tr=clamp(C.tr*f,9,34)};
export function panBy(dx,dy){const k=C.r*.0016,s=Math.sin(C.th),c=Math.cos(C.th);C.gx+=(-dx*c)*k;C.gz+=(dx*s)*k;C.gy+=dy*k;C.focusT=0;panClamp()}
export function focusOn(o){C.gx=o.focus[0];C.gy=o.focus[1];C.gz=o.focus[2];C.tr=Math.min(C.tr,14);C.focusT=4.5}
// botones flotantes de zoom y centrar
export function makeCamUI(){
  const ctl=document.createElement('div');ctl.id='camctl';
  ctl.style.cssText='position:fixed;right:max(10px,env(safe-area-inset-right));top:64px;z-index:6;display:flex;flex-direction:column;gap:8px';
  [['+','Acercar',()=>zoomBy(.8)],['−','Alejar',()=>zoomBy(1.25)],['⌂','Centrar vista',resetCam]].forEach(([t,l,f])=>{const b=document.createElement('button');b.textContent=t;b.title=b.ariaLabel=l;
    b.style.cssText='width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 1.2rem system-ui;cursor:pointer;touch-action:manipulation';b.onclick=ev=>{ev.stopPropagation();f()};ctl.appendChild(b)});
  document.body.appendChild(ctl);
}
// atajos de teclado: zoom, centrar y girar
export function bindKeys(){
  addEventListener('keydown',e=>{if(!RT.started)return;const k=e.key;
    if(k==='+'||k==='=')zoomBy(.85);else if(k==='-'||k==='_')zoomBy(1.18);else if(k==='r'||k==='R'||k==='0')resetCam();
    else if(k==='ArrowLeft')C.tth=clamp(C.tth-.08,-.95,.95);else if(k==='ArrowRight')C.tth=clamp(C.tth+.08,-.95,.95);
    else if(k==='ArrowUp')C.tph=clamp(C.tph+.03,.03,.42);else if(k==='ArrowDown')C.tph=clamp(C.tph-.03,.03,.42)});
}
// idle: sin gesto activo (deriva suave del giro)
export function camStep(dt,idle){
  const T=RT.T;
  if(C.focusT>0){C.focusT-=dt;if(C.focusT<=0){C.gx=TGT0[0];C.gy=TGT0[1];C.gz=TGT0[2];C.tr=Math.max(C.tr,16)}}
  const k=1-Math.pow(.004,dt);
  C.th+=(C.tth-C.th)*k;C.ph+=(C.tph-C.ph)*k;C.r+=(C.tr-C.r)*k;C.tx+=(C.gx-C.tx)*k*.6;C.ty+=(C.gy-C.ty)*k*.6;C.tz+=(C.gz-C.tz)*k*.6;
  if(idle)C.tth+=Math.sin(T*.12)*.0003;
  const th=C.th,ph=C.ph;
  cam.position.set(C.tx+C.r*Math.sin(th)*Math.cos(ph),C.ty+C.r*Math.sin(ph),C.tz+C.r*Math.cos(th)*Math.cos(ph));cam.lookAt(C.tx,C.ty,C.tz);
}
