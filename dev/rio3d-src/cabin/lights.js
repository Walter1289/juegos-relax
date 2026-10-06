/* lights.js — luces de la escena (luna, hemisférica, cálida) y encendido gradual de lámparas según las reparaciones */
import * as THREE from 'three';
import {scene,RT} from './core.js';
import {spr,glowTex} from './util.js';
import {state} from './state.js';
// luces y brillos que crean otros módulos (faroles, bombillas, nichos, lámpara, ventana, farol de mano)
export const LT={porchL:[],bulbs:[],nichoGlow:[],lampL:null,lampGlow:null,winL:null,handL:null};
// nivel de encendido (0..1) de cada grupo de luz
export const lit={lamp:0,lant:0,str:0,nich:0,moon:0,smoke:0,rain:0};
export function initLights(){
  const hemi=new THREE.HemisphereLight(0xb6b9ff,0x6b5a8a,1.15);scene.add(hemi);
  const moon=new THREE.DirectionalLight(0xd5dcff,1.15);moon.position.set(-12,18,16);moon.target.position.set(4,4,0);scene.add(moon,moon.target);
  moon.castShadow=true;moon.shadow.mapSize.set(2048,2048);Object.assign(moon.shadow.camera,{left:-20,right:22,top:16,bottom:-14,near:1,far:70});moon.shadow.bias=-.0006;moon.shadow.normalBias=.04;moon.shadow.radius=3;
  const warm=new THREE.DirectionalLight(0xffd2b0,.4);warm.position.set(14,6,14);scene.add(warm);
}
export function makeLamp(){
  LT.lampL=new THREE.PointLight(0xffc88a,0,14,1.4);LT.lampL.position.set(1.5,7.2,-.6);scene.add(LT.lampL);
  LT.lampGlow=spr(glowTex,0xffc88a,4.5,0,true);LT.lampGlow.position.set(1.5,7.15,-1);scene.add(LT.lampGlow);
}
export function makeHand(){LT.handL=new THREE.PointLight(0xffd7a0,0,9,1.6);scene.add(LT.handL)}
export function makeWin(){LT.winL=new THREE.PointLight(0xaabfff,0,9,1.5);LT.winL.position.set(2.4,6.2,-1.6);scene.add(LT.winL)}
// encendido según reparaciones: lámpara, faroles, luces de cuerda, nichos, luz de ventana
export function lightStep(dt){
  const T=RT.T,R_=state.repaired,tgt={lamp:R_.lampara&&R_.panel?1:0,lant:R_.techo?1:0,str:R_.luces?1:0,nich:R_.nichos?1:0,moon:R_.ventana?1:0,smoke:R_.techo?1:0,rain:R_.techo?1:0};
  for(const n in lit)lit[n]+=(tgt[n]-lit[n])*Math.min(1,dt*1.6);
  const fl=.93+.05*Math.sin(T*9)+.03*Math.sin(T*23);
  LT.lampL.intensity=2.6*lit.lamp*fl;LT.lampGlow.material.opacity=.55*lit.lamp*fl;
  LT.porchL.forEach((p,i)=>{p.L.intensity=1.6*lit.lant*(fl+.02*i);p.gl.material.opacity=.7*lit.lant*fl;p.body.material.emissiveIntensity=lit.lant});
  LT.bulbs.forEach((b,i)=>{b.material.opacity=lit.str*(.55+.15*Math.sin(T*2+i))});
  LT.nichoGlow.forEach((g,i)=>{g.material.opacity=.7*lit.nich*(.8+.2*Math.sin(T*1.6+i*2))});
  LT.winL.intensity=1.2*lit.moon;
}
