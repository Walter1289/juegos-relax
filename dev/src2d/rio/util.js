/* util.js — utilidades puras: matemáticas, hash determinista, primitivas de canvas y atajos tolerantes a UX */
export const $=s=>document.querySelector(s);
/* UX (idioma, subtítulos, háptica) lo define ux.js; estos atajos toleran que aún no exista */
export const cap=(k,gap)=>{try{window.UX&&window.UX.cap(k,gap)}catch(e){}};
export const hap=p=>{try{window.UX&&window.UX.hap(p)}catch(e){}};
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const lerp=(a,b,t)=>a+(b-a)*t;
export const hash=n=>{const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)};
export const H2=(a,b)=>hash(a*37.13+b*91.7+b*b*.37);
export const mk=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};
export function poly(g,pts){g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath()}
export function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
export function circ(g,x,y,r){g.beginPath();g.arc(x,y,r,0,7)}
export function line(g,x0,y0,x1,y1){g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke()}
export const rgba=(c,a)=>'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+a+')';
export const rnd=(a,b)=>a+Math.random()*(b-a);
