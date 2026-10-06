/* Luciérnagas nocturnas: nube de puntos que acompaña a la canoa. */
import * as THREE from 'three';
import {clamp} from './util.js';
import {P} from './state.js';
import {glowTex,scene} from './core.js';
/* ---------- luciérnagas ---------- */
const FFN=140,ffBase=[];const ffG=new THREE.BufferGeometry(),ffP=new Float32Array(FFN*3);
for(let i=0;i<FFN;i++)ffBase.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);
ffG.setAttribute('position',new THREE.BufferAttribute(ffP,3));
const ffM=new THREE.PointsMaterial({color:0xfff2a0,size:.35,map:glowTex,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false});
const ff=new THREE.Points(ffG,ffM);ff.frustumCulled=false;scene.add(ff);
export function updateFireflies(night){
  ffM.opacity=clamp(night*1.3-.2,0,.9);ff.visible=ffM.opacity>.01;
  if(ff.visible){for(let i=0;i<FFN;i++){const b=ffBase[i],t=P.t*.4+b[3];
    const fx=Math.sin(P.psi),fz=-Math.cos(P.psi);
    ffP[i*3]=P.px+b[0]+Math.sin(t*2.1+i)*1.5;ffP[i*3+1]=b[1]+Math.sin(t*3+i)*.4;ffP[i*3+2]=P.pz+b[2]+Math.cos(t*1.7+i)*1.5}
    ffG.attributes.position.needsUpdate=true}
}
