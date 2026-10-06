/* blobs.js — manchas de suciedad (blobs) sobre cada objeto reparable: creación, dispersión y escala visible */
import * as THREE from 'three';
import {rng} from './util.js';
import {mat} from './mats.js';
const MOSS=['#8cbb78','#7faa70','#9a92b6'];
let blobGeo;   // se crea con la primera mancha (mismo orden de creación que el original)
export function blob(it,x,y,z,r,o){o=o||{};if(!blobGeo)blobGeo=new THREE.IcosahedronGeometry(1,0);const m=new THREE.Mesh(blobGeo,mat(o.c||MOSS[(Math.random()*3)|0]));
  m.position.set(x,y,z);m.rotation.x=o.rx||0;m.userData={item:it.id,base:o.wall?[r,r,r*.3]:[r,r*.28,r],s:1};m.scale.set(...m.userData.base);it.g.add(m);it.blobs.push(m);return m}
export function scatter(it,n,seed,fn,rmin,rmax,o){const r=rng(seed);for(let i=0;i<n;i++){const p=fn(r);blob(it,p[0],p[1],p[2],rmin+r()*(rmax-rmin),o)}}
// aplica la escala s (0..1) del blob; oculto cuando casi no queda suciedad
export function refreshBlob(m){const s=m.userData.s,b=m.userData.base;m.scale.set(b[0]*s,b[1]*s,b[2]*s);m.visible=s>.04}
