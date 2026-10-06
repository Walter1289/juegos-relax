/* Constantes y utilidades de dibujo compartidas por todos los módulos de la cabaña */
export const W=960,H=720,DPR=Math.min(window.devicePixelRatio||1,2);
export const $=s=>document.querySelector(s);
/* Ayudas de UX (idioma, subtítulos, háptica): window.UX lo define ../../rio3d-src/ux.js; se consulta de forma perezosa. */
export const uTr=s=>window.UX?window.UX.tr(s):s;
export const uCap=(k,g)=>{try{window.UX&&window.UX.cap(k,g)}catch(e){}};
export const uHap=p=>{try{window.UX&&window.UX.hap(p)}catch(e){}};
export const mk=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};
export const rnd=(a,b)=>a+Math.random()*(b-a);
export const lerp=(a,b,t)=>a+(b-a)*t;
export const hash=n=>{const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)};
export function poly(g,pts){g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath()}
export function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
export function line(g,x0,y0,x1,y1){g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke()}
export const HEX=[[95,140,62],[120,330,58],[70,520,56]];
export function hexPath(g,x,y,r){g.beginPath();for(let i=0;i<6;i++){const a=Math.PI/3*i,px=x+r*Math.cos(a),py=y+r*Math.sin(a);i?g.lineTo(px,py):g.moveTo(px,py)}g.closePath()}
