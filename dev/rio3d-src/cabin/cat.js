/* cat.js — gato dormido en el porche (aparece tras la primera reparación) y el corazoncito al acariciarlo */
import * as THREE from 'three';
import {scene} from './core.js';
import {A} from '../audio.js';
import {Y0,clamp,spr,glowTex} from './util.js';
import {mat} from './mats.js';
import {state} from './state.js';
import {toast} from './ui.js';
export let cat;
let heart,heartT=0;
export function makeCat(){
  cat=new THREE.Group();
  {const cm=mat('#e8d6c0');const bd=new THREE.Mesh(new THREE.SphereGeometry(.42,12,10),cm);bd.scale.set(1.3,.7,.9);bd.position.y=.25;cat.add(bd);cat.userData.bd=bd;cat.userData.ears=[];
    const hd=new THREE.Mesh(new THREE.SphereGeometry(.26,10,8),cm);hd.position.set(.5,.3,.05);cat.add(hd);
    [[.58,.54],[.42,.54]].forEach(([x,y],i)=>{const e=new THREE.Mesh(new THREE.ConeGeometry(.08,.16,4),cm);e.position.set(x,y,.05+(i?-.1:.1));cat.add(e);cat.userData.ears.push(e)});
    const tl=new THREE.Mesh(new THREE.TorusGeometry(.3,.06,6,12,4),mat('#d9b995'));tl.position.set(-.35,.12,.2);tl.rotation.x=1.5;cat.add(tl);cat.userData.tl=tl}
  cat.position.set(4.3,Y0+.05,2.6);cat.rotation.y=-.5;cat.userData.itemId='gato';cat.visible=false;scene.add(cat);
  heart=spr(glowTex,0xff9fb0,.5,0,true);heart.visible=false;scene.add(heart);
}
export function petCat(){heart.position.set(cat.position.x+.4,cat.position.y+1,cat.position.z);heart.visible=true;heartT=1.6;A.meow();A.chime(.2,2);toast('Ronronea…');UX.hap(25)}
export function catStep(dt,T){
  cat.visible=Object.keys(state.repaired).length>0;
  if(heart.visible){heartT-=dt;heart.position.y+=dt*.6;heart.material.opacity=clamp(heartT,0,1);heart.scale.setScalar(.7+.2*Math.sin(T*8));if(heartT<=0)heart.visible=false}
  /* duerme: respira con el lomo (no con todo el cuerpo), mueve la punta de la cola y de vez en cuando le tiembla una oreja */
  {const u=cat.userData,b=Math.sin(T*1.15+Math.sin(T*.21)*.6);u.bd.scale.set(1.3+b*.012,.7+b*.03,.9+b*.02);u.bd.position.y=.25+b*.012;
   u.tl.rotation.z=Math.sin(T*.6)*.1+Math.max(0,Math.sin(T*.23+1))*Math.sin(T*3.1)*.08;
   u.tw=(u.tw==null?4:u.tw)-dt;if(u.tw<-.18){u.tw=5+Math.random()*9;u.ei=(Math.random()*2)|0}
   u.ears.forEach((e,i)=>{e.rotation.x=u.tw<0&&i===(u.ei||0)?Math.sin((u.tw+.18)/.18*Math.PI*2)*.35:0})}
}
