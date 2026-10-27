/* Ceremonia de liberación: al cerrar una vuelta completa al río, todas las linternas que llevas suben despacio al cielo. Sin destellos: ascenso suave y desvanecimiento. */
import * as THREE from 'three';
import {scene} from './core.js';
import {P} from './state.js';
import {mkLantern} from './lanterns.js';
import {A} from '../audio-rio.js';
const list=[];
export function startCeremony(n){
  const m=Math.min(n,70);
  for(let i=0;i<m;i++){
    const g=mkLantern();g.scale.setScalar(.9+Math.random()*.6);
    const f=4+Math.random()*20,l=(Math.random()-.5)*16;
    const x=P.px+Math.sin(P.psi)*f+Math.cos(P.psi)*l,z=P.pz-Math.cos(P.psi)*f+Math.sin(P.psi)*l;
    g.position.set(x,.3,z);g.visible=false;g.userData.refl.visible=false;
    g.userData.c={t:-(i/m)*7-Math.random()*.6,life:15+Math.random()*5,x,z,ph:Math.random()*6,sp:1+Math.random()*.5};
    scene.add(g);list.push(g)}
  for(let i=0;i<9;i++)setTimeout(()=>{try{A.chime(0,i%5)}catch(e){}},500+i*520);
}
export function ceremonyStep(dt){
  for(let i=list.length-1;i>=0;i--){const g=list[i],c=g.userData.c;c.t+=dt;if(c.t<0)continue;g.visible=true;
    const t=c.t,y=.3+t*(1.1*c.sp+t*.15*c.sp);g.position.set(c.x+Math.sin(t*.45+c.ph)*.9+t*.25,y,c.z+Math.cos(t*.37+c.ph)*.7);g.rotation.z=Math.sin(t*.8+c.ph)*.06;
    const o=Math.min(1,t/.9)*Math.min(1,(c.life-t)/4.5);g.userData.glow.material.opacity=.75*Math.max(0,o);
    g.userData.body.material.opacity=1;
    if(t>=c.life){scene.remove(g);g.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material)o.material.dispose()});list.splice(i,1)}}
}
