/* Cinemática de descubrimiento: la cámara orbita el lugar recién hallado y se puede saltar con un toque. */
import * as THREE from 'three';
import {hash,sm01} from './util.js';
import {S} from './state.js';
import {lmPos,hw,H} from './world.js';
import {cam} from './core.js';
import {lmMade} from './lm-data.js';
const cV=new THREE.Vector3(),cF=new THREE.Vector3(),cT=new THREE.PerspectiveCamera();
const reduceMotion=matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
export function startCine(k){if(S.cine||reduceMotion||S.X.photo)return;const g=lmMade.get(k);if(!g)return;const s=lmPos(k),hwv=hw(s),type=k%10,side=type===6?1:(hash(k,9)>.5?1:-1);
  const FO=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[side*(hwv+10),4,0,1],[0,2.5,0,0],[side*(hwv+19),6,0,1],[side*(hwv+8),8,0,1],[side*(hwv-3),3,0,1],[0,8,0,0],[0,0,0,0]][type];
  const sided=FO[3]===1,R=sided?Math.abs(FO[0])+hwv*.3:[46,30,52,0,40,0,0,0,30,30][type];
  S.cine={k,g,t:0,dur:11.5,fx:FO[0],fy:FO[1],fz:FO[2],sd:side,sided,R:Math.max(30,R),h:[10,6,12,10,8,13,10,7,6,9][type]}}
export function cineStep(dt){
  if(!S.cine){S.cineW=0;return}
  S.cine.t+=dt;if(!S.cine.snapped&&S.cine.t>5.4){S.cine.snapped=true;S.X.snap(S.cine.k%10)}const c=S.cine,w=sm01(0,2.6,c.t)*(1-sm01(c.dur-2.6,c.dur,c.t));S.cineW=w;
  if(c.t>=c.dur){S.cine=null;S.cineW=0;return}
  c.g.updateMatrixWorld(true);
  const a=-.5+.95*(c.t/c.dur),ca=Math.cos(a),sa=Math.sin(a),dx0=c.sided?-c.sd:0,dz0=c.sided?0:1;
  const dx=dx0*ca+dz0*sa,dz=-dx0*sa+dz0*ca;
  cV.set(c.fx+dx*c.R,c.fy+c.h,c.fz+dz*c.R);c.g.localToWorld(cV);
  const gy2=H(cV.x,-cV.z);cV.y=Math.max(cV.y,gy2+3);
  cF.set(c.fx,c.fy,c.fz);c.g.localToWorld(cF);
  cT.position.copy(cV);cT.lookAt(cF);
  cam.position.lerp(cV,w);cam.quaternion.slerp(cT.quaternion,w)}
