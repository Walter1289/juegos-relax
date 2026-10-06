/* Núcleo gráfico: renderizador, escena, cámara, luces base, textura de brillo y utilidades de sprite/material. */
import {A} from '../audio-rio.js';
import {toonGrad} from '../style.js';
import * as THREE from 'three';
/* ---------- renderer / escena ---------- */
export const canvas=document.getElementById('c');
export const R=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
R.setPixelRatio(Math.min(devicePixelRatio||1,1.5));
export const scene=new THREE.Scene();
scene.fog=new THREE.Fog(0xcccccc,22,250);
export const cam=new THREE.PerspectiveCamera(68,1,.05,900);
function resize(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);cam.aspect=w/h;cam.fov=w/h<1?82:68;cam.updateProjectionMatrix()}
addEventListener('resize',resize);addEventListener('orientationchange',()=>setTimeout(resize,250));resize();
document.addEventListener('visibilitychange',()=>{try{if(A.ctx){if(document.hidden)A.ctx.suspend();else if(A.on&&!PZ.on)A.ctx.resume()}}catch(e){}});
export const hemi=new THREE.HemisphereLight(0xffffff,0x8a9a88,1.2);scene.add(hemi);
export const dir=new THREE.DirectionalLight(0xffffff,1);scene.add(dir);
export const glowTex=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');
  const gr=g.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.25,'rgba(255,255,255,.55)');gr.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle=gr;g.fillRect(0,0,128,128);return new THREE.CanvasTexture(c)})();
export const spr=(col,sz)=>{const s=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:col,blending:THREE.AdditiveBlending,depthWrite:false,fog:false,transparent:true}));s.scale.set(sz,sz,1);return s};
export const MT=(c,o)=>new THREE.MeshToonMaterial(Object.assign({gradientMap:toonGrad,color:c},o||{}));
