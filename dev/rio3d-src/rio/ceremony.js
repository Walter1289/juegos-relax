/* Ceremonia de liberación: al cerrar una vuelta completa al río, todas las linternas que llevas suben despacio al cielo. Sin destellos: ascenso suave y desvanecimiento. */
import * as THREE from 'three';
import {scene} from './core.js';
import {P} from './state.js';
import {mkLantern} from './lanterns.js';
import {A} from '../audio-rio.js';
const list=[];
export function startCeremony(n,gran){
  const m=Math.min(n,gran?100:70),D=gran?12:7;
  for(let i=0;i<m;i++){
    const g=mkLantern();if(gran)g.userData.glow.material.color.set(0xffd27a);g.scale.setScalar(.9+Math.random()*.6);
    const f=(gran?6:4)+Math.random()*(gran?38:20),l=(Math.random()-.5)*(gran?30:16);
    const x=P.px+Math.sin(P.psi)*f+Math.cos(P.psi)*l,z=P.pz-Math.cos(P.psi)*f+Math.sin(P.psi)*l;
    g.position.set(x,.3,z);g.visible=false;g.userData.refl.visible=false;
    g.userData.c={t:-(i/m)*D-Math.random()*.6,k:gran?.5:1,life:15+Math.random()*5,x,z,ph:Math.random()*6,sp:1+Math.random()*.5};
    scene.add(g);list.push(g)}
  const nc=gran?24:9;for(let i=0;i<nc;i++)setTimeout(()=>{try{A.chime(0,i%5)}catch(e){}},500+i*(gran?480:520));
}
export function ceremonyStep(dt){
  for(let i=list.length-1;i>=0;i--){const g=list[i],c=g.userData.c;c.t+=dt;if(c.t<0)continue;g.visible=true;
    const t=c.t,y=.3+t*(1.1*c.sp+t*.15*c.sp);g.position.set(c.x+Math.sin(t*.45+c.ph)*.9+t*.25,y,c.z+Math.cos(t*.37+c.ph)*.7);g.rotation.z=Math.sin(t*.8+c.ph)*.06;
    const o=Math.min(1,t/.9)*Math.min(1,(c.life-t)/4.5);g.userData.glow.material.opacity=.75*c.k*Math.max(0,o);
    g.userData.body.material.opacity=1;
    if(t>=c.life){scene.remove(g);g.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material)o.material.dispose()});list.splice(i,1)}}
}
