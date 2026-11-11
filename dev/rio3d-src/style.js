// Estilo compartido "indie pintado a mano": texturas procedurales y sombreado por bandas (toon).
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

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
    for(let i=0;i<640;i++){const x=r()*S,y=r()*S,rad=3.5+r()*8,v=r()>.45?(215+r()*40|0):(120+r()*60|0);
      for(const ox of[-S,0,S])for(const oy of[-S,0,S]){if(x+ox<-30||x+ox>S+30||y+oy<-30||y+oy>S+30)continue;g.fillStyle=`rgba(${v},${v},${v-6},${.35+r()*.4})`;g.beginPath();g.ellipse(x+ox,y+oy,rad,rad*.62,r()*3.14,0,7);g.fill()}}
    for(let i=0;i<260;i++){const x=r()*S,y=r()*S;g.fillStyle='rgba(70,80,60,.3)';g.beginPath();g.ellipse(x,y+5,5,2.4,0,0,7);g.fill();g.fillStyle='rgba(255,255,235,.5)';g.beginPath();g.ellipse(x-1,y-2,3.6,1.5,-.5,0,7);g.fill()}
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
  painterly(g,S,r,kind);
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;return t;
}
/* pase pictórico: manchas amplias de aguada, pinceladas sueltas y una leve deriva cálido/frío, todo repetible en los bordes.
   Rompe la uniformidad «generada» de cada patrón sin cambiar su valor medio (los colores del juego siguen saliendo del material). */
function painterly(g,S,r,kind){
  const wrap=(x,y,rad,fn)=>{for(const ox of[-S,0,S])for(const oy of[-S,0,S]){if(x+ox<-rad||x+ox>S+rad||y+oy<-rad||y+oy>S+rad)continue;fn(x+ox,y+oy)}};
  const dir=kind==='woodV'||kind==='bark'||kind==='needle'?1.57:kind==='straw'?.78:0,soft=kind==='cloth'||kind==='straw'?.6:1;
  // aguadas: grandes manchas claras y oscuras de borde difuso
  for(let i=0;i<16;i++){const x=r()*S,y=r()*S,rad=34+r()*58,dk=r()>.5,a=(.05+r()*.06)*soft;
    wrap(x,y,rad,(px,py)=>{const gr=g.createRadialGradient(px,py,0,px,py,rad);gr.addColorStop(0,dk?`rgba(58,50,70,${a})`:`rgba(255,250,236,${a*1.25})`);gr.addColorStop(1,dk?'rgba(58,50,70,0)':'rgba(255,250,236,0)');g.fillStyle=gr;g.fillRect(px-rad,py-rad,rad*2,rad*2)})}
  // deriva de temperatura: toques cálidos y fríos muy tenues
  for(let i=0;i<7;i++){const x=r()*S,y=r()*S,rad=50+r()*60,w=r()>.5;
    wrap(x,y,rad,(px,py)=>{const gr=g.createRadialGradient(px,py,0,px,py,rad);gr.addColorStop(0,w?'rgba(255,214,170,.07)':'rgba(170,196,255,.06)');gr.addColorStop(1,w?'rgba(255,214,170,0)':'rgba(170,196,255,0)');g.fillStyle=gr;g.fillRect(px-rad,py-rad,rad*2,rad*2)})}
  // pinceladas: trazos cortos de pincel seco siguiendo la dirección del material
  g.lineCap='round';
  for(let i=0;i<90;i++){const x=r()*S,y=r()*S,l=10+r()*26,a=dir+(r()-.5)*.7,w=1.5+r()*3.5,dk=r()>.55,al=(.035+r()*.05)*soft,dx=Math.cos(a)*l,dy=Math.sin(a)*l,bx=(r()-.5)*6,by=(r()-.5)*6;
    wrap(x,y,l+4,(px,py)=>{g.strokeStyle=dk?`rgba(50,44,62,${al})`:`rgba(255,252,240,${al*1.3})`;g.lineWidth=w;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+dx*.5+bx,py+dy*.5+by,px+dx,py+dy);g.stroke()})}
  g.lineCap='butt';
}
export const tex=k=>cache[k]||(cache[k]=paint(k));

// degradado de sombreado: pocas bandas suaves, como un dibujo animado pintado
export const toonGrad=(()=>{const d=new Uint8Array([104,138,172,206,236,255]);const t=new THREE.DataTexture(d,6,1,THREE.RedFormat);t.minFilter=t.magFilter=THREE.NearestFilter;t.generateMipmaps=false;t.needsUpdate=true;return t})();

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

/* ---------- viento compartido (Río y Cabaña) ----------
   Un solo reloj y una sola fuerza para toda la vegetación: frentes de ráfaga anchos que viajan en la dirección del viento,
   una oscilación propia de cada planta y un temblor fino de hoja. Se calcula en el sombreador de vértices (sin coste de CPU). */
export const WIND={t:{value:0},s:{value:1}};
export function windTick(dt,k){const t=(WIND.t.value+=dt);
  // la fuerza «respira»: calmas y rachas que nunca se repiten igual (periodos inconmensurables)
  const br=.62+.26*Math.sin(t*.071)+.18*Math.sin(t*.173+1.3)*Math.sin(t*.029);
  WIND.s.value+=((k==null?1:k)*Math.max(.18,br)-WIND.s.value)*Math.min(1,dt*.8)}
/* versión en JS de la misma ráfaga, para objetos sueltos (faroles, ramas, cintas): devuelve ~0..1 */
export function gustAt(x,z){const t=WIND.t.value,a=x*.8+z*.6,g=.5+.5*Math.sin(a*.05-t*.6+Math.sin(x*.03-z*.021+t*.11)*1.9);return g*g*(3-2*g)*WIND.s.value}
const WGLSL=`uniform float uWT,uWS;
vec3 windOff(vec2 ip,float k,float amp){vec2 wd=vec2(.8,.6);
  float g=.5+.5*sin(dot(ip,wd)*.05-uWT*.6+sin(ip.x*.03-ip.y*.021+uWT*.11)*1.9);g=g*g*(3.-2.*g);
  float ph=ip.x*.37+ip.y*.43;
  float sw=sin(uWT*1.7+ph)*.6+sin(uWT*2.9+ph*1.31)*.4;
  vec2 d=wd*((.22+.78*g)+sw*.3*(.35+g))+vec2(-wd.y,wd.x)*sin(uWT*1.23+ph*.71)*.2*(.3+g);
  d*=amp*k*uWS;return vec3(d.x,-length(d)*.3*k,d.y);}
vec3 windFl(vec3 wp,float fl){float a=uWT*3.7+wp.x*2.9+wp.z*2.3+wp.y*1.7;return vec3(sin(a),cos(a*.83+1.),sin(a*1.21+2.))*fl*uWS;}
`;
const f3=v=>Number(v).toFixed(4);
/* añade viento a un material. H: altura (en unidades locales) a la que la planta se dobla del todo · amp: metros de vaivén arriba ·
   pow: curva de rigidez · fl: temblor de hoja · base: parte del movimiento que afecta a toda la pieza (copas separadas del tronco) */
export function windify(m,o){o=Object.assign({H:1,amp:.2,pow:2,fl:0,base:0},o||{});
  m.onBeforeCompile=sh=>{sh.uniforms.uWT=WIND.t;sh.uniforms.uWS=WIND.s;
    sh.vertexShader=WGLSL+sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
#ifdef USE_INSTANCING
 mat4 wM=modelMatrix*instanceMatrix;
#else
 mat4 wM=modelMatrix;
#endif
 float wK=${f3(o.base)}+${f3(1-o.base)}*pow(clamp(position.y/${f3(o.H)},0.,1.),${f3(o.pow)});
 vec3 wOff=windOff(wM[3].xz,wK,${f3(o.amp)})+windFl((wM*vec4(position,1.)).xyz,${f3(o.fl)})*wK;`).replace('#include <project_vertex>',`#include <project_vertex>
 mvPosition.xyz+=(viewMatrix*vec4(wOff,0.)).xyz;gl_Position=projectionMatrix*mvPosition;`)};
  m.customProgramCacheKey=()=>'wind:'+[o.H,o.amp,o.pow,o.fl,o.base].join(',');return m}

/* ---------- fusión de piezas estáticas ----------
   Junta las mallas hijas directas de un grupo que comparten material (mismo color, textura y caras) en una sola malla: mismo dibujo, muchas
   menos llamadas a la GPU. Con vc:true lo junta todo en UNA malla y guarda el color de cada pieza por vértice (para animales pequeños sin textura).
   Las mallas con userData.dyn se dejan sueltas (las que se animan o cambian de color). */
export function bake(group,o){o=o||{};const by=new Map();
  for(const m of [...group.children]){if(!m.isMesh||m.isInstancedMesh||m.userData.dyn||m.material.vertexColors||m.material.transparent)continue;
    m.updateMatrix();let g=m.geometry.clone().applyMatrix4(m.matrix);if(g.index)g=g.toNonIndexed();const mm=m.material,n=g.attributes.position.count;
    for(const k of Object.keys(g.attributes))if(k!=='position'&&k!=='normal'&&k!=='uv')g.deleteAttribute(k);
    if(!g.attributes.normal)g.computeVertexNormals();
    if(o.vc){g.deleteAttribute('uv');const c=new Float32Array(n*3);for(let i=0;i<n;i++){c[i*3]=mm.color.r;c[i*3+1]=mm.color.g;c[i*3+2]=mm.color.b}g.setAttribute('color',new THREE.BufferAttribute(c,3))}
    else if(!g.attributes.uv)g.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(n*2),2));
    const key=o.vc?'vc':[mm.type,mm.color.getHex(),mm.map?mm.map.uuid:'',mm.side,mm.emissive?mm.emissive.getHex():'',mm.flatShading?1:0].join('|');
    if(!by.has(key))by.set(key,{mm,gs:[],cs:m.castShadow,rs:m.receiveShadow});by.get(key).gs.push(g);group.remove(m)}
  for(const {mm,gs,cs,rs} of by.values()){const mesh=new THREE.Mesh(gs.length>1?mergeGeometries(gs):gs[0],o.vc?o.mat:mm);mesh.castShadow=cs;mesh.receiveShadow=rs;group.add(mesh)}
  return group}

/* ===== vegetación orgánica: formas irregulares sin subir el número de triángulos =====
   Todo se deforma por posición (los vértices duplicados reciben lo mismo, sin grietas). */
export const n3=(x,y,z,s=0)=>Math.sin(x*1.7+y*2.3+s)*Math.sin(y*1.9+z*2.1+s*1.3)*.6+Math.sin(z*3.3+x*2.9+s*.7)*Math.sin(x*1.3-y*1.1+s)*.4;
/* bulto de follaje: esfera centrada en el origen con abolladuras y panza inferior más plana */
export function lumpy(g,amp=.16,freq=1.5,seed=0,under=.8){const p=g.attributes.position;
  for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),k=1+amp*n3(x*freq,y*freq,z*freq,seed);p.setXYZ(i,x*k,y*k*(y<0?under:1),z*k)}
  g.computeVertexNormals();return g}
/* piso de conífera: cono con la falda en zigzag (ramas que cuelgan), radio irregular y la punta algo ladeada; base en y=0 */
export function tierGeo(r,h,seg,seed=0,o={}){const hs=o.hs||1,zig=o.zig==null?.16:o.zig,droop=o.droop==null?.13:o.droop;
  let g=new THREE.ConeGeometry(r,h,seg,hs,!!o.open);const p=g.attributes.position,st=6.2832/seg,lx=Math.sin(seed*3.1)*r*.1,lz=Math.cos(seed*2.3)*r*.1;
  for(let i=0;i<p.count;i++){let x=p.getX(i),y=p.getY(i),z=p.getZ(i);const rr=Math.hypot(x,z),t=(y+h/2)/h;
    if(rr>1e-4){const a=Math.atan2(z,x),id=Math.round(a/st+seg)%seg,odd=(id+Math.round(seed))%2;
      if(t<.01){const f=1+zig*(odd?1:-.7)+.1*Math.sin(a*3+seed*5);x*=f;z*=f;y-=droop*h*(odd?1:.15)*(1+.5*Math.sin(a*2+seed))}
      else{const f=1+.1*Math.sin(a*2+seed*2+t*4);x*=f;z*=f}}
    else if(t<.01)y+=h*.06;                                  /* centro de la tapa: hundido para que la falda no se vea plana */
    x+=lx*t;z+=lz*t;p.setXYZ(i,x,y+h/2,z)}
  g.computeVertexNormals();return g}
/* tronco: curva suave en S, raíces abiertas en la base y ramas que suben hacia la copa. branches: [[y0,tx,ty,tz,r],...] */
export function trunkGeo(rt,rb,h,seg,hs,o={}){const bend=o.bend==null?.14:o.bend,sd=o.seed||0;
  const cxz=y=>{const t=y/h;return[bend*Math.sin(Math.PI*t)*(1-t*.3),bend*.55*Math.sin(6.2832*t+sd)*(1-t)]};
  const g=new THREE.CylinderGeometry(rt,rb,h,seg,hs,true).translate(0,h/2,0),p=g.attributes.position;
  for(let i=0;i<p.count;i++){let x=p.getX(i),y=p.getY(i),z=p.getZ(i);const t=y/h,a=Math.atan2(z,x);
    if(t<.16){const f=1+(o.flare==null?.75:o.flare)*Math.pow(1-t/.16,2)*(1+.35*Math.sin(a*3+sd));x*=f;z*=f}
    const c=cxz(y);p.setXYZ(i,x+c[0],y,z+c[1])}
  const gs=[g],up=new THREE.Vector3(0,1,0),d=new THREE.Vector3(),q=new THREE.Quaternion();
  for(const [y0,tx,ty,tz,r] of(o.branches||[])){const c=cxz(y0);d.set(tx-c[0],ty-y0,tz-c[1]);const len=d.length();d.normalize();q.setFromUnitVectors(up,d);
    const b=new THREE.CylinderGeometry(r*.35,r,len,4,1,true).translate(0,len/2,0);b.applyQuaternion(q);b.translate(c[0],y0,c[1]);gs.push(b)}
  const m=gs.length>1?mergeGeometries(gs):g;m.computeVertexNormals();return m}
const kite=(out,col,bx,by,bz,dx,dy,dz,len,w,droop,k0,k1)=>{/* hoja en cometa: base, dos puntos medios y punta caída (2 triángulos) */
  const sx=-dz,sz=dx,sl=Math.hypot(sx,sz)||1,mx=bx+dx*len*.5,my=by+dy*len*.5+len*.06,mz=bz+dz*len*.5,tx=bx+dx*len,ty=by+dy*len-droop*len,tz=bz+dz*len,
    ax=sx/sl*w,az=sz/sl*w;out.push(bx,by,bz,mx-ax,my,mz-az,mx+ax,my,mz+az, mx-ax,my,mz-az,tx,ty,tz,mx+ax,my,mz+az);
  const km=(k0+k1)/2;col.push(k0,k0,k0,km,km,km,km,km,km, km,km,km,k1,k1,k1,km,km,km)};
const finish=(pos,col)=>{const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));
  g.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(pos.length/3*2),2));g.computeVertexNormals();return g};
/* penacho de hojas (bambú, puntas de rama): hojas largas que salen de un punto y cuelgan; radio ~1 */
export function sprayGeo(n=10,seed=1){const pos=[],col=[];
  for(let i=0;i<n;i++){const a=i/n*6.2832+Math.sin(i*7.3+seed)*.5,up=i%3===0?.75:(i%3===1?.15:-.2),l=.85+.35*Math.sin(i*3.7+seed*2),c=Math.cos(up);
    kite(pos,col,0,0,0,Math.cos(a)*c,Math.sin(up),Math.sin(a)*c,l,.2+.05*Math.sin(i*5.1),.3+.2*Math.abs(Math.sin(i*2.3+seed)),.72,1.12)}
  return finish(pos,col)}
/* mata de hierba: briznas anchas que se abren y se curvan; altura h, radio r */
export function tuftGeo(n=5,h=1,r=.3,seed=1){const pos=[],col=[];
  for(let i=0;i<n;i++){const a=i/n*6.2832+Math.sin(i*4.1+seed)*.6,lean=.25+.3*Math.abs(Math.sin(i*2.9+seed)),hh=h*(.7+.3*Math.abs(Math.sin(i*5.3+seed*3))),c=Math.cos(a),s=Math.sin(a),L=Math.hypot(lean,1);
    kite(pos,col,c*r*.25,0,s*r*.25,c*lean/L,1/L,s*lean/L,hh*L,r*.3,.12+.1*Math.sin(i*3.3+seed),.62,1.1)}
  return finish(pos,col)}
