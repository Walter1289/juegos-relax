// Estilo compartido "indie pintado a mano": texturas procedurales y sombreado por bandas (toon).
import * as THREE from 'three';

function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const cache={};
// densidad = repeticiones de la textura por metro
export const DENS={wood:.7,woodV:.7,stone:.55,shingle:.6,rock:.22,grass:.12,bark:.9,sand:.2,leaf:.25,needle:.3,cloth:1.2,straw:1.0,plank:.8};

function paint(kind){
  const S=256,c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d'),r=rng(kind.length*97+kind.charCodeAt(0));
  const shade=(v,a)=>`rgba(${v},${v},${v},${a})`;
  g.fillStyle='#e9e4de';g.fillRect(0,0,S,S);
  if(kind==='wood'||kind==='woodV'){
    const v=kind==='woodV';
    for(let i=0;i<150;i++){const p=r()*S,l=40+r()*160,o=r()*S,w=.6+r()*1.8;g.strokeStyle=r()>.5?'rgba(95,70,55,'+(.05+r()*.12)+')':'rgba(255,248,238,'+(.05+r()*.1)+')';g.lineWidth=w;g.beginPath();
      if(v){g.moveTo(p,o);g.bezierCurveTo(p+4,o+l*.3,p-4,o+l*.7,p+2,o+l)}else{g.moveTo(o,p);g.bezierCurveTo(o+l*.3,p+4,o+l*.7,p-4,o+l,p+2)}g.stroke()}
    for(let i=0;i<3;i++){const x=r()*S,y=r()*S;g.strokeStyle='rgba(80,55,40,.22)';g.lineWidth=1.2;for(let k=1;k<4;k++){g.beginPath();g.ellipse(x,y,k*3.5,k*2.2,v?1.57:0,0,7);g.stroke()}}
    g.strokeStyle='rgba(70,50,40,.18)';g.lineWidth=2;g.beginPath();if(v){g.moveTo(0,0);g.lineTo(0,S)}else{g.moveTo(0,0);g.lineTo(S,0)}g.stroke();
  }else if(kind==='stone'){
    g.fillStyle='#8b86a0';g.fillRect(0,0,S,S);
    const rows=4;for(let y=0;y<rows;y++){let x=-(r()*40);const h=S/rows;while(x<S){const w=38+r()*50;const v=190+r()*55|0;g.fillStyle=`rgb(${v},${v-3},${v+8})`;
      g.beginPath();g.roundRect?g.roundRect(x+3,y*h+3,w-6,h-6,10):g.rect(x+3,y*h+3,w-6,h-6);g.fill();
      g.fillStyle='rgba(255,255,255,.18)';g.fillRect(x+9,y*h+7,w-24,3);
      for(let k=0;k<14;k++){g.fillStyle=shade(120,.08);g.fillRect(x+6+r()*(w-12),y*h+6+r()*(h-12),2,2)}x+=w}}
  }else if(kind==='shingle'){
    g.fillStyle='#b8aea6';g.fillRect(0,0,S,S);
    const rows=6,h=S/rows;for(let y=0;y<rows;y++){const off=(y%2)*22;for(let x=-22;x<S+22;x+=44){const v=196+r()*50|0;g.fillStyle=`rgb(${v},${v-6},${v-8})`;g.beginPath();g.moveTo(x+off+2,y*h);g.lineTo(x+off+42,y*h);g.lineTo(x+off+42,y*h+h*.55);g.quadraticCurveTo(x+off+22,y*h+h*1.15,x+off+2,y*h+h*.55);g.closePath();g.fill();
      g.strokeStyle='rgba(60,40,40,.28)';g.lineWidth=1.5;g.stroke();g.fillStyle='rgba(255,255,255,.2)';g.fillRect(x+off+8,y*h+3,26,3)}}
  }else if(kind==='rock'){
    g.fillStyle='#d4d0dc';g.fillRect(0,0,S,S);
    for(let i=0;i<60;i++){const x=r()*S,y=r()*S,rad=10+r()*40,v=170+r()*70|0;g.fillStyle=`rgba(${v},${v-4},${v+10},.35)`;g.beginPath();g.ellipse(x,y,rad,rad*.6,r()*3,0,7);g.fill()}
    for(let i=0;i<30;i++){g.strokeStyle='rgba(50,45,80,'+(.12+r()*.2)+')';g.lineWidth=1+r()*2;g.beginPath();let x=r()*S,y=r()*S;g.moveTo(x,y);for(let k=0;k<4;k++){x+=r()*40-20;y+=r()*30;g.lineTo(x,y)}g.stroke()}
  }else if(kind==='grass'){
    g.fillStyle='#e8efe0';g.fillRect(0,0,S,S);
    for(let i=0;i<900;i++){const x=r()*S,y=r()*S,v=r()>.5?'rgba(120,170,110,':'rgba(255,255,220,';g.strokeStyle=v+(.08+r()*.2)+')';g.lineWidth=1;g.beginPath();g.moveTo(x,y);g.lineTo(x+r()*4-2,y-3-r()*7);g.stroke()}
    for(let i=0;i<20;i++){g.fillStyle='rgba(255,255,255,.3)';g.beginPath();g.arc(r()*S,r()*S,1.5+r()*1.5,0,7);g.fill()}
  }else if(kind==='bark'){
    g.fillStyle='#d9cfc6';g.fillRect(0,0,S,S);
    for(let i=0;i<70;i++){const x=r()*S;g.strokeStyle='rgba(60,45,40,'+(.12+r()*.25)+')';g.lineWidth=1+r()*3;g.beginPath();g.moveTo(x,0);g.bezierCurveTo(x+8,S*.3,x-8,S*.6,x+3,S);g.stroke()}
  }else if(kind==='leaf'){
    g.fillStyle='#ecebe4';g.fillRect(0,0,S,S);
    for(let i=0;i<260;i++){const x=r()*S,y=r()*S,rad=6+r()*14,v=r()>.45?(215+r()*40|0):(120+r()*60|0);
      for(const ox of[-S,0,S])for(const oy of[-S,0,S]){if(x+ox<-30||x+ox>S+30||y+oy<-30||y+oy>S+30)continue;g.fillStyle=`rgba(${v},${v},${v-6},${.35+r()*.4})`;g.beginPath();g.ellipse(x+ox,y+oy,rad,rad*.62,r()*3.14,0,7);g.fill()}}
    for(let i=0;i<120;i++){const x=r()*S,y=r()*S;g.fillStyle='rgba(70,80,60,.28)';g.beginPath();g.ellipse(x,y+9,9,4,0,0,7);g.fill();g.fillStyle='rgba(255,255,235,.5)';g.beginPath();g.ellipse(x-1,y-3,6,2.4,-.5,0,7);g.fill()}
  }else if(kind==='cloth'){
    g.fillStyle='#e6e6e8';g.fillRect(0,0,S,S);
    for(let i=0;i<S;i+=4){g.fillStyle='rgba(90,95,110,'+(.07+r()*.06)+')';g.fillRect(i,0,1.6,S);g.fillStyle='rgba(255,255,255,'+(.1+r()*.08)+')';g.fillRect(0,i,S,1.6)}
    for(let i=0;i<9;i++){const x=r()*S,y=r()*S;g.strokeStyle='rgba(60,65,85,.2)';g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.bezierCurveTo(x+20,y+30,x-18,y+60,x+6,y+95);g.stroke();g.strokeStyle='rgba(255,255,255,.22)';g.lineWidth=2;g.beginPath();g.moveTo(x+4,y);g.bezierCurveTo(x+24,y+30,x-14,y+60,x+10,y+95);g.stroke()}
    for(let i=0;i<5;i++){g.fillStyle='rgba(70,75,95,.25)';g.fillRect(r()*S,r()*S,10+r()*10,1.5)}
  }else if(kind==='straw'){
    g.fillStyle='#e8e0cc';g.fillRect(0,0,S,S);
    for(let i=-S;i<S*2;i+=7){g.strokeStyle='rgba(120,90,40,'+(.18+r()*.2)+')';g.lineWidth=2;g.beginPath();g.moveTo(i,0);g.lineTo(i+S,S);g.stroke();g.strokeStyle='rgba(255,250,225,'+(.25+r()*.2)+')';g.beginPath();g.moveTo(i+3,0);g.lineTo(i+3-S,S);g.stroke()}
    for(let i=0;i<S;i+=7){g.strokeStyle='rgba(110,80,35,.22)';g.lineWidth=1.5;g.beginPath();g.moveTo(i,0);g.lineTo(i,S);g.stroke()}
  }else if(kind==='plank'){
    g.fillStyle='#e9e0d6';g.fillRect(0,0,S,S);const n=5,h=S/n;
    for(let k=0;k<n;k++){const y=k*h;g.fillStyle='rgba('+(200+r()*40|0)+','+(190+r()*30|0)+',175,.45)';g.fillRect(0,y,S,h);
      for(let i=0;i<22;i++){const yy=y+3+r()*(h-6);g.strokeStyle=r()>.5?'rgba(95,70,55,'+(.1+r()*.14)+')':'rgba(255,248,238,.18)';g.lineWidth=.8+r()*1.5;g.beginPath();g.moveTo(r()*60,yy);g.bezierCurveTo(80,yy+3,160,yy-3,S,yy+1);g.stroke()}
      g.fillStyle='rgba(60,42,32,.55)';g.fillRect(0,y,S,2.5);
      for(const nx of[18,S-18]){g.fillStyle='rgba(50,40,36,.55)';g.beginPath();g.arc(nx,y+h/2,2.2,0,7);g.fill()}}
  }else if(kind==='needle'){
    g.fillStyle='#d7dbd2';g.fillRect(0,0,S,S);
    for(let row=0;row<8;row++){const y0=row*S/8;for(let x=-10;x<S+10;x+=14){const xx=x+(row%2)*7+r()*3,l=18+r()*10,v=r()>.5?(235|0):(130+r()*50|0);
      g.strokeStyle=`rgba(${v},${v},${v-10},${.45+r()*.4})`;g.lineWidth=2+r()*2;g.lineCap='round';g.beginPath();g.moveTo(xx,y0);g.lineTo(xx+r()*8-4,y0+l);g.stroke()}
      g.strokeStyle='rgba(50,70,50,.3)';g.lineWidth=3;g.beginPath();g.moveTo(0,y0+S/8-2);g.lineTo(S,y0+S/8-2);g.stroke()}
  }
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;
}
export const tex=k=>cache[k]||(cache[k]=paint(k));

// degradado de sombreado: pocas bandas suaves, como un dibujo animado pintado
export const toonGrad=(()=>{const d=new Uint8Array([112,160,208,255]);const t=new THREE.DataTexture(d,4,1,THREE.RedFormat);t.minFilter=t.magFilter=THREE.NearestFilter;t.generateMipmaps=false;t.needsUpdate=true;return t})();

// escala los UV de una caja según su tamaño real, así las texturas no se estiran
export function boxUV(g,w,h,d,dens){
  const uv=g.attributes.uv;const dims=[[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];
  for(let f=0;f<6;f++)for(let i=0;i<4;i++){const k=f*4+i;uv.setXY(k,uv.getX(k)*dims[f][0]*dens,uv.getY(k)*dims[f][1]*dens)}
  uv.needsUpdate=true;
}
export function toon(color,kind,o){
  const p=Object.assign({color,gradientMap:toonGrad},o||{});if(kind)p.map=tex(kind);
  const m=new THREE.MeshToonMaterial(p);m.userData.kind=kind||null;return m;
}
// viñeta + grano ligero encima del canvas (CSS)
export function addVignette(){
  const d=document.createElement('div');d.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)';document.body.appendChild(d);
}

// textura de papel acuarela sobre toda la imagen (muy sutil)
export function addPaper(){
  const c=document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,256,256);
  for(let i=0;i<5200;i++){const v=200+Math.random()*55|0;g.fillStyle=`rgba(${v-30},${v-34},${v-44},${Math.random()*.35})`;g.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}
  for(let i=0;i<60;i++){g.strokeStyle='rgba(120,110,100,.06)';g.lineWidth=1;g.beginPath();const x=Math.random()*256,y=Math.random()*256;g.moveTo(x,y);g.lineTo(x+Math.random()*60-30,y+Math.random()*60-30);g.stroke()}
  const d=document.createElement('div');d.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url('+c.toDataURL()+');background-size:256px';document.body.appendChild(d);
}
