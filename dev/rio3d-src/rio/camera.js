/* Cámara: vista 1ª/3ª persona (botón y tecla C), balanceo y transición suave entre ambas. */
import * as THREE from 'three';
import {el} from './util.js';
import {S,P} from './state.js';
import {cam} from './core.js';
import {IN} from './input.js';
/* ---- cámara en tercera persona ---- */
let psiC=0;
const tpQ=new THREE.Quaternion(),fpQ=new THREE.Quaternion(),tmpCam=new THREE.PerspectiveCamera(),tpP=new THREE.Vector3(),tpT=new THREE.Vector3(),fwdV=new THREE.Vector3();
const camBtn=el('cam');
export function setCam(m){S.camMode=m;camBtn.textContent=m?'Vista 3ª':'Vista 1ª';try{localStorage.setItem('rio3d-cam',m)}catch(e){}}
camBtn.onclick=()=>setCam(1-S.camMode);
addEventListener('keydown',e=>{if(e.code==='KeyC')setCam(1-S.camMode)});
try{setCam(+localStorage.getItem('rio3d-cam')||0)}catch(e){}
/* posiciona la cámara por fotograma; bob = balanceo de la canoa */
export function updateCamera(dt,bob){
  const cm=(window.UX&&UX.calm&&UX.calm())?.25:1;bob*=cm;
  const sway=Math.sin(P.t*.5)*.01*cm;
  cam.position.set(P.px,1.18+bob,P.pz).addScaledVector(new THREE.Vector3(Math.sin(P.psi),0,-Math.cos(P.psi)),-.15);
  P.pitch+=((-IN.pitch*.22)-P.pitch)*2*dt;
  cam.rotation.set(P.pitch-.06,-P.psi+sway,-P.steer*.02,'YXZ');
  S.camK+=((S.camMode?1:0)-S.camK)*Math.min(1,dt*2.2);if(S.camK<.01)psiC=P.psi;
  {const bf=innerWidth/innerHeight<1?82:68,nf=bf*(1-.3*S.camK*S.camK*(3-2*S.camK));if(Math.abs(cam.fov-nf)>.05){cam.fov=nf;cam.updateProjectionMatrix()}}
  if(S.camK>.003){const k=S.camK*S.camK*(3-2*S.camK);fpQ.copy(cam.quaternion);
    psiC+=(P.psi-psiC)*Math.min(1,dt*1.6);const ca=psiC+.3;
    fwdV.set(Math.sin(ca),0,-Math.cos(ca));
    tpP.set(P.px,6.2+bob,P.pz).addScaledVector(fwdV,-10.8);
    fwdV.set(Math.sin(psiC),0,-Math.cos(psiC));tpT.set(P.px,.3,P.pz).addScaledVector(fwdV,6.5);tpT.x+=Math.cos(psiC)*1.9;tpT.z+=Math.sin(psiC)*1.9;
    tmpCam.position.copy(tpP);tmpCam.lookAt(tpT);tpQ.copy(tmpCam.quaternion);
    cam.position.lerp(tpP,k);cam.quaternion.copy(fpQ).slerp(tpQ,k)}
}
