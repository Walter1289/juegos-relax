/* Ondas en el agua: anillos reutilizables que se expanden y se desvanecen. */
import * as THREE from 'three';
import {scene} from './core.js';
const ripples=[];for(let i=0;i<28;i++){const m=new THREE.Mesh(new THREE.RingGeometry(.35,.42,28).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0,depthWrite:false,fog:true}));m.position.y=.04;m.userData.age=9;scene.add(m);ripples.push(m)}
let ripI=0;
export const spawnRipple=(x,z)=>{const m=ripples[ripI++%ripples.length];m.position.set(x,.04,z);m.userData.age=0};
export function updateRipples(dt){
  ripples.forEach(m=>{if(m.userData.age<4){m.userData.age+=dt;const a=m.userData.age/4;m.scale.setScalar(1+a*6);m.material.opacity=.35*(1-a)}else m.material.opacity=0});
}
