/* mats.js — materiales con caché (clasificados por tipo de textura) y helper box() */
import * as THREE from 'three';
import {toon,boxUV,DENS} from '../style.js';
const mc=new Map();
const KIND=new Map();
const kindFor=(list,k)=>list.forEach(c=>KIND.set(c.toLowerCase(),k));
kindFor(['#dcae92','#c89479','#d4a98c','#c49a7d','#d2a58a'],'wood');
kindFor(['#b0806a','#d9b995','#a1918c','#dcbc98','#d4b290','#e0c19e','#a8978c','#9d8c82','#b0a095','#ecc9ae','#f1d3bb','#e0c2a2','#b3a398','#8f6f66','#9a7a70','#8e7f7a','#f2d6c0','#e7c9ae'],'woodV');
kindFor(['#a9a4c6','#8f8ab0','#aaa5c8','#9a95bb','#b4afd2','#8e89b0'],'stone');
kindFor(['#e7a293','#9b8b88'],'shingle');
kindFor(['#9fb9a0'],'grass');
export const mat=(c,o)=>{const k=c+(o?JSON.stringify(o):'');if(!mc.has(k))mc.set(k,toon(c,KIND.get(String(c).toLowerCase()),Object.assign({flatShading:true},o||{})));return mc.get(k)};
export function box(w,h,d,c,x,y,z,p,o){const mt=typeof c==='string'?mat(c,o):c;const g=new THREE.BoxGeometry(w,h,d);const kd=mt.userData&&mt.userData.kind;if(kd)boxUV(g,w,h,d,DENS[kd]);const m=new THREE.Mesh(g,mt);m.position.set(x,y,z);if(p)p.add(m);return m}
