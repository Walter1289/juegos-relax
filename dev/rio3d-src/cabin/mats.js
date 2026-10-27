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
/* paleta del antiguo Japón: hinoki cálido, vigas oscuras, tejas pizarra, laca bermellón y piedra gris (se aplica a todo el color antiguo de la cabaña) */
const JP={'#dcae92':'#cfa578','#c89479':'#b98b5f','#d4a98c':'#c79a6e','#c49a7d':'#b2865a','#d2a58a':'#c29868',
 '#b0806a':'#5a3d2e','#8f6f66':'#4b342a','#9a7a70':'#573d31','#d9b995':'#dcc194','#dcbc98':'#dcc194','#d4b290':'#d3b784','#e0c19e':'#e2c99d','#e0c2a2':'#dcc194',
 '#ecc9ae':'#8e3d2e','#f1d3bb':'#a14a38','#e7c9ae':'#d9bf92','#f2d6c0':'#e6d3ae','#f6c3b4':'#707c96','#e7a293':'#4f596f','#9b8b88':'#3e4659',
 '#a9a4c6':'#aaa59d','#8f8ab0':'#8c877f','#aaa5c8':'#b1aca3','#9a95bb':'#9b968d','#b4afd2':'#bdb8ae','#8e89b0':'#837e76',
 '#e6a091':'#2f4a74','#7fc3bd':'#9a6a3c','#d9a9cb':'#6a7f58','#a6cf92':'#c9a14a','#a1918c':'#8d7f74'};
export const mat=(c,o)=>{const k=c+(o?JSON.stringify(o):'');if(!mc.has(k))mc.set(k,toon(JP[String(c).toLowerCase()]||c,KIND.get(String(c).toLowerCase()),Object.assign({flatShading:true},o||{})));return mc.get(k)};
export function box(w,h,d,c,x,y,z,p,o){const mt=typeof c==='string'?mat(c,o):c;const g=new THREE.BoxGeometry(w,h,d);const kd=mt.userData&&mt.userData.kind;if(kd)boxUV(g,w,h,d,DENS[kd]);const m=new THREE.Mesh(g,mt);m.position.set(x,y,z);if(p)p.add(m);return m}
