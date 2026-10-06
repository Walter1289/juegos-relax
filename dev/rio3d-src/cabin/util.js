/* util.js — utilidades puras: matemáticas, DOM, PRNG con semilla, texturas de brillo y sprites */
import * as THREE from 'three';
export const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
export const lerp=(a,b,t)=>a+(b-a)*t;
export const el=id=>document.getElementById(id);
// generador pseudoaleatorio con semilla (mulberry32)
export function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
export const Y0=4.2;   // altura de la terraza
// escribe texto sólo si cambió (evita trabajo inútil del traductor al vuelo)
export const sT=(e,t)=>{if(e._t!==t){e._t=t;e.textContent=t}};
export const mkTex=(w,h,fn)=>{const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);return new THREE.CanvasTexture(c)};
// texturas de brillo y de bruma: se crean con initTex() para conservar el orden original de creación (UUID/Math.random de three)
export let glowTex,puffTex;
export function initTex(){
glowTex=mkTex(128,128,(g)=>{const gr=g.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.25,'rgba(255,255,255,.5)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,128,128)});
puffTex=mkTex(128,128,(g)=>{for(let i=0;i<9;i++){const x=40+Math.random()*48,y=44+Math.random()*40,r=18+Math.random()*18,gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(255,255,255,.5)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,128,128)}});
}
export const spr=(tex,col,sz,op,add)=>{const s=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,color:col,transparent:true,opacity:op==null?1:op,depthWrite:false,blending:add?THREE.AdditiveBlending:THREE.NormalBlending}));s.scale.set(sz,sz,1);return s};
