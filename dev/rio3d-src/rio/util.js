/* Utilidades puras: hash, ruido de valor, clamp/lerp/suavizado, diferencia angular y atajo del DOM. */
export const hash=(a,b=0)=>{const h=Math.sin(a*127.1+b*311.7)*43758.5453;return h-Math.floor(h)};
export const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
export const sm=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t)};
export const lerp=(a,b,t)=>a+(b-a)*t;
export function vn(x,y){const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
  const a=hash(xi,yi),b=hash(xi+1,yi),c=hash(xi,yi+1),d=hash(xi+1,yi+1);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v}
export const el=id=>document.getElementById(id);
export const sm01=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t)};
export const angD=(a,b)=>{let d=a-b;while(d>Math.PI)d-=6.2832;while(d<-Math.PI)d+=6.2832;return d};
