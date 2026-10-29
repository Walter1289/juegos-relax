/* Cámara: vista 1ª/3ª persona (botón y tecla C), balanceo y transición suave entre ambas. */
import * as THREE from 'three';
import {el} from './util.js';
import {S,P} from './state.js';
import {cam} from './core.js';
import {IN,LOOK} from './input.js';
/* ---- cámara en tercera persona ---- */
let psiC=0;
const tpQ=new THREE.Quaternion(),fpQ=new THREE.Quaternion(),tmpCam=new THREE.PerspectiveCamera(),tpP=new THREE.Vector3(),tpT=new THREE.Vector3(),fwdV=new THREE.Vector3();
const camBtn=el('cam');
export function setCam(m){S.camMode=m;camBtn.textContent=m?'Vista 3ª':'Vista 1ª';try{localStorage.setItem('rio3d-cam',m)}catch(e){}}
camBtn.onclick=()=>setCam(1-S.camMode);
const lookBtn=el('look');window.__setLook=on=>setLook(on);
function setLook(on){LOOK.on=on;LOOK.drag=false;if(on){P.hold=false;IN.steer=0}lookBtn.textContent=on?'Mirando':'Mirar';lookBtn.setAttribute('aria-pressed',on?'true':'false');lookBtn.classList.toggle('on',on)}
lookBtn.onclick=()=>setLook(!LOOK.on);
addEventListener('keydown',e=>{if(e.code==='KeyL')setLook(!LOOK.on)});
addEventListener('keydown',e=>{if(e.code==='KeyC')setCam(1-S.camMode)});
try{setCam(+localStorage.getItem('rio3d-cam')||0)}catch(e){}
/* posiciona la cámara por fotograma; bob = balanceo de la canoa */
export function updateCamera(dt,bob){
  const cm=(window.UX&&UX.calm&&UX.calm())?.25:1;bob*=cm;
  const sway=Math.sin(P.t*.5)*.01*cm;
  cam.position.set(P.px,1.72+bob,P.pz).addScaledVector(new THREE.Vector3(Math.sin(P.psi),0,-Math.cos(P.psi)),-.05);
  /* mirada libre: con inercia suave mientras está activa; al desactivar vuelve al frente */
  LOOK.t+=dt;
  if(LOOK.on||LOOK.drag||(LOOK.auto&&LOOK.t<3.5)){if(!LOOK.drag){LOOK.yaw+=LOOK.vy*dt;LOOK.vy*=Math.exp(-dt*2.6)}}
  else{const k=Math.exp(-dt*2.4);LOOK.yaw*=k;LOOK.pitch*=k;LOOK.vy=0}
  if(LOOK.yaw>Math.PI)LOOK.yaw-=2*Math.PI;else if(LOOK.yaw<-Math.PI)LOOK.yaw+=2*Math.PI;
  P.pitch+=((-IN.pitch*.22)-P.pitch)*2*dt;
  cam.rotation.set(P.pitch-.13+LOOK.pitch,-P.psi+LOOK.yaw+sway,-P.steer*.035-(P.yawr||0)*.07,'YXZ');
  S.camK+=((S.camMode?1:0)-S.camK)*Math.min(1,dt*2.2);if(S.camK<.01)psiC=P.psi;
  {const bf=innerWidth/innerHeight<1?82:68,nf=bf*(1-.3*S.camK*S.camK*(3-2*S.camK));if(Math.abs(cam.fov-nf)>.05){cam.fov=nf;cam.updateProjectionMatrix()}}
  if(S.camK>.003){const k=S.camK*S.camK*(3-2*S.camK);fpQ.copy(cam.quaternion);
    psiC+=(P.psi-psiC)*Math.min(1,dt*1.6);const psiL=psiC-LOOK.yaw,ca=psiL+.3;
    fwdV.set(Math.sin(ca),0,-Math.cos(ca));
    tpP.set(P.px,6.2+bob,P.pz).addScaledVector(fwdV,-10.8);
    fwdV.set(Math.sin(psiL),0,-Math.cos(psiL));tpT.set(P.px,.3+LOOK.pitch*7,P.pz).addScaledVector(fwdV,6.5);tpT.x+=Math.cos(psiL)*1.9;tpT.z+=Math.sin(psiL)*1.9;
    tmpCam.position.copy(tpP);tmpCam.lookAt(tpT);tpQ.copy(tmpCam.quaternion);
    cam.position.lerp(tpP,k);cam.quaternion.copy(fpQ).slerp(tpQ,k)}
}
