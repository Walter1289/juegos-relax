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
  {const cm=mat('#e8d6c0');const bd=new THREE.Mesh(new THREE.SphereGeometry(.42,12,10),cm);bd.scale.set(1.3,.7,.9);bd.position.y=.25;cat.add(bd);
    const hd=new THREE.Mesh(new THREE.SphereGeometry(.26,10,8),cm);hd.position.set(.5,.3,.05);cat.add(hd);
    [[.58,.54],[.42,.54]].forEach(([x,y],i)=>{const e=new THREE.Mesh(new THREE.ConeGeometry(.08,.16,4),cm);e.position.set(x,y,.05+(i?-.1:.1));cat.add(e)});
    const tl=new THREE.Mesh(new THREE.TorusGeometry(.3,.06,6,12,4),mat('#d9b995'));tl.position.set(-.35,.12,.2);tl.rotation.x=1.5;cat.add(tl)}
  cat.position.set(4.3,Y0+.05,2.6);cat.rotation.y=-.5;cat.userData.itemId='gato';cat.visible=false;scene.add(cat);
  heart=spr(glowTex,0xff9fb0,.5,0,true);heart.visible=false;scene.add(heart);
}
export function petCat(){heart.position.set(cat.position.x+.4,cat.position.y+1,cat.position.z);heart.visible=true;heartT=1.6;A.meow();A.chime(.2,2);toast('Ronronea…');UX.hap(25)}
export function catStep(dt,T){
  cat.visible=Object.keys(state.repaired).length>0;
  if(heart.visible){heartT-=dt;heart.position.y+=dt*.6;heart.material.opacity=clamp(heartT,0,1);heart.scale.setScalar(.7+.2*Math.sin(T*8));if(heartT<=0)heart.visible=false}
  cat.scale.y=1+.03*Math.sin(T*1.6);
}
