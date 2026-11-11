/* Piezas de los lugares: cajas/cilindros/brillos, objetos japoneses tradicionales, garza, materiales y fusión de mallas (optimizeLM/disposeLM). */
import {toonGrad,bake,tex,lumpy,n3,tierGeo} from '../style.js';
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {MT,spr,glowTex} from './core.js';
import {reedM} from './props.js';
import {lmG,lmAnim} from './lm-data.js';
import {hash} from './util.js';
const _UPH=new THREE.Vector3(0,1,0);
/* ---- primitivas ---- */
export const bx=(g,w,h,d,c,x,y,z,o)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),MT(c,o));m.position.set(x,y,z);g.add(m);return m};
export const cyl=(g,r1,r2,h,c,x,y,z,seg=7,o)=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,seg),MT(c,o));m.position.set(x,y,z);g.add(m);return m};
export const gl=(g,col,sz,x,y,z,base=.7)=>{const s=spr(col,sz);s.position.set(x,y,z);s.userData.base=base;g.add(s);lmG.push(s);return s};
const kTex=new Map();
export function kanjiTex(ch,bg,fg,wp=64,hp=256){const key=ch+bg+wp;if(kTex.has(key))return kTex.get(key);const c=document.createElement('canvas');c.width=wp;c.height=hp;const x=c.getContext('2d');x.fillStyle=bg;x.fillRect(0,0,wp,hp);x.fillStyle=fg;x.fillRect(0,0,wp,5);x.fillRect(0,hp-5,wp,5);
  const fs=Math.min(wp*.72,hp/Math.max(1,[...ch].length)*.8);x.font='bold '+fs+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif';x.textAlign='center';x.textBaseline='middle';
  const n=[...ch].length;[...ch].forEach((cc,i)=>x.fillText(cc,wp/2,hp/(n*2)+i*hp/n));const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;kTex.set(key,t);return t}
function nobori(g,gy,x,z,ch,bg){const y=gy(x,z),h=new THREE.Group();h.position.set(x,y,z);g.add(h);cyl(h,.07,.09,6.4,0x4a3a32,0,3.2,0,5);bx(h,1.3,.09,.09,0x4a3a32,.62,6.0,0);
  const b=new THREE.Mesh(new THREE.PlaneGeometry(1.15,4.4),new THREE.MeshToonMaterial({gradientMap:toonGrad,map:kanjiTex(ch,bg,'#f6efe0'),side:THREE.DoubleSide}));b.userData.noMerge=true;b.position.set(.62,3.75,0);h.add(b);h.userData.sw=1;lmAnim.push({b,ph:x});return h}
export function tourou(g,gy,x,z,sc=1){const h=new THREE.Group();h.position.set(x,gy(x,z),z);h.scale.setScalar(sc);g.add(h);const st=0xa8a6a2;
  cyl(h,.5,.62,.3,st,0,.15,0,8);cyl(h,.17,.2,1.3,st,0,.95,0,6);cyl(h,.45,.3,.2,st,0,1.7,0,8);bx(h,.62,.55,.62,st,0,2.05,0);
  bx(h,.34,.34,.66,0xffd9a0,0,2.05,0).material=new THREE.MeshBasicMaterial({color:0xffd9a0});bx(h,.66,.34,.34,0xffd9a0,0,2.05,0).material=new THREE.MeshBasicMaterial({color:0xffd9a0});
  const r=new THREE.Mesh(roofGeo(1.1,1.1,.5,{lift:.14,th:.1,ns:2,nv:2}),MT(0x9a9894,{side:THREE.DoubleSide}));r.position.y=2.34;h.add(r);const t=new THREE.Mesh(new THREE.SphereGeometry(.11,6,5),MT(st));t.position.y=2.92;h.add(t);gl(h,0xffc77a,2.6,0,2.05,0,.8);return h}
function shimenawa(g,gy,hwv,z){for(const sd of[-1,1])cyl(g,.22,.3,10,0x6a4a3a,sd*(hwv+1.6),gy(sd*(hwv+1.6),z)+4.6,z,7);
  const L=hwv*2+3.2;const rp=cyl(g,.12,.12,L,0xe6d8a0,0,8.6,z,6);rp.rotation.z=Math.PI/2;
  for(let i=0;i<12;i++){const t=(i+.5)/12,x=-L/2+t*L;const sh=new THREE.Mesh(new THREE.PlaneGeometry(.42,1),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,side:THREE.DoubleSide}));sh.position.set(x,7.9,z);sh.rotation.set(0,0,(i%2?.18:-.18));g.add(sh)}
  for(const sd of[-1,1]){const tl=new THREE.Mesh(new THREE.ConeGeometry(.3,1,6),MT(0xe6d8a0));tl.position.set(sd*(hwv*.5),7.8,z);tl.rotation.x=Math.PI;g.add(tl)}}
export function signs(g,gy,hwv,ch,rope,bg){for(const sd of[-1,1]){nobori(g,gy,sd*(hwv+1.6),54,ch,bg);nobori(g,gy,sd*(hwv+3.6),49,ch,bg);tourou(g,gy,sd*(hwv+2.8),42)}if(rope)shimenawa(g,gy,hwv,37)}
/* ---- tejado japonés: faldón cóncavo (suave en el alero, empinado arriba), esquinas levantadas, canto con grosor y cumbrera.
   w×d es la planta del alero, h la altura; con w≠d sale a cuatro aguas con cumbrera. Se ve por debajo (doble cara). ---- */
export function roofGeo(w,d,h,o={}){const ns=o.ns||4,nv=o.nv||3,lift=o.lift==null?h*.3:o.lift,th=o.th==null?Math.min(.22,h*.12):o.th,cc=o.concave||1.7,
  rl=Math.max(0,(w-d)/2)*(o.ridge==null?.85:o.ridge),rz=Math.max(0,(d-w)/2)*(o.ridge==null?.85:o.ridge),top=o.top||0;
  const per=[];for(const [x0,z0,x1,z1] of[[-1,1,1,1],[1,1,1,-1],[1,-1,-1,-1],[-1,-1,-1,1]])for(let i=0;i<ns;i++){const t=i/ns;per.push([(x0+(x1-x0)*t)*w/2,(z0+(z1-z0)*t)*d/2])}
  const n=per.length,pos=[],uv=[],idx=[];let acc=0;
  for(let i=0;i<=n;i++){const [ex,ez]=per[i%n],c=Math.abs(ex)/(w/2)*Math.abs(ez)/(d/2),c2=c*c;if(i>0){const q=per[i-1];acc+=Math.hypot(ex-q[0],ez-q[1])}
    const tx=Math.max(-rl-top,Math.min(rl+top,ex)),tz=Math.max(-rz-top,Math.min(rz+top,ez)),k=1+.05*c2;
    pos.push(ex*k,-th+lift*c2,ez*k);uv.push(acc*.5,-.1);                                             // canto inferior del alero
    for(let j=0;j<=nv;j++){const v=j/nv;pos.push(ex*k+(tx-ex*k)*v,h*Math.pow(v,cc)+lift*c2*Math.pow(1-v,3),ez*k+(tz-ez*k)*v);uv.push(acc*.5,v*Math.hypot(w,d)*.35)}}
  const R=nv+2;for(let i=0;i<n;i++)for(let j=0;j<R-1;j++){const a=i*R+j,b=(i+1)*R+j;idx.push(a,b,a+1,b,b+1,a+1)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g}
export const roofMat=(col,kind='shingle')=>MT(col,{side:THREE.DoubleSide,map:tex(kind)});
/* tejado apoyado en y (base del alero); cumbrera con remates si la planta es alargada */
export function hipRoof(g,w,d,h,y,col,o={}){const m=new THREE.Mesh(roofGeo(w,d,h,o),roofMat(col,o.kind));m.position.set(o.x||0,y,o.z||0);g.add(m);
  const rl=Math.max(0,(w-d)/2)*(o.ridge==null?.85:o.ridge),rz=Math.max(0,(d-w)/2)*(o.ridge==null?.85:o.ridge),rc=o.ridgeCol==null?0x3a3640:o.ridgeCol;
  if(rl>0||rz>0){const L=(rl||rz)*2+.5,b=bx(g,rl?L:.32,.26,rl?.32:L,rc,o.x||0,y+h+.06,o.z||0);void b;
    for(const sd of[-1,1]){const e=bx(g,rl?.22:.36,.5,rl?.36:.22,rc,(o.x||0)+(rl?sd*L/2:0),y+h+.2,(o.z||0)+(rl?0:sd*L/2));e.rotation[rl?'z':'x']=sd*(rl?-.35:.35)}}
  return m}
/* compatibilidad: R y hh como el cono de antes (R = radio de un cono de 4 lados girado 45°, centrado en y) */
export function roof(g,R,hh,y,col,sq=1){return hipRoof(g,R*1.414,R*1.414*sq,hh,y-hh/2,col,{lift:hh*.3})}
/* viga curva (se levanta hacia las puntas) para torii y aleros */
export function beamGeo(len,h,d,rise,flare=.2){const g=new THREE.BoxGeometry(len,h,d,10,1,1),p=g.attributes.position;
  for(let i=0;i<p.count;i++){const x=p.getX(i),t=2*x/len,y=p.getY(i);p.setXY(i,x+Math.sign(x)*(y+h/2)*flare*Math.abs(t),y+rise*t*t)}g.computeVertexNormals();return g}
/* roca: bulto irregular con estratos (escalones horizontales) */
export function rockGeo(r,seed=0,det=1,sy=1){const g=lumpy(new THREE.IcosahedronGeometry(r,det),.26,1.25/r,seed,.9),p=g.attributes.position,st=r*.42;
  for(let i=0;i<p.count;i++){const y=p.getY(i);p.setY(i,(y*.45+Math.round(y/st)*st*.55)*sy)}g.computeVertexNormals();return g}
export const rock=(g,r,c,x,y,z,seed=0,sy=1,det=1)=>{const m=new THREE.Mesh(rockGeo(r,seed,det,sy),MT(c));m.position.set(x,y,z);m.rotation.y=seed*1.7;g.add(m);return m};
export function pagoda(g,x,y,z){const h=new THREE.Group();h.position.set(x,y,z);g.add(h);bx(h,6.4,1.2,6.4,0x8f8c88,0,.5,0);let yy=1.1;
  for(let i=0;i<4;i++){const w=4.3-i*.75;bx(h,w,2.3,w,i%2?0xf1e6d3:0xe9ddc8,0,yy+1.15,0);bx(h,w+.12,.18,w+.12,0xb5473a,0,yy+.1,0);for(const [a,b]of[[1,1],[-1,1],[1,-1],[-1,-1]])cyl(h,.1,.1,2.3,0xb5473a,a*w/2,yy+1.15,b*w/2,6);roof(h,(w/2+.95)/.707,1.5,yy+2.9,0x55505e);
    for(const [a,b,ry]of[[1,0,1],[-1,0,1],[0,1,0],[0,-1,0]]){const wn=bx(h,ry?.12:w*.42,1.0,ry?w*.42:.12,0x3a2f2c,a*(w/2+.02),yy+1.3,b*(w/2+.02));bx(h,ry?.16:w*.5,.1,ry?w*.5:.16,0xb5473a,a*(w/2+.03),yy+1.88,b*(w/2+.03))}
    bx(h,w+.9,.1,w+.9,0xb5473a,0,yy+.32,0);for(const sd of[-1,1]){bx(h,w+.9,.07,.07,0xd9a85a,0,yy+.75,sd*(w+.9)/2);bx(h,.07,.07,w+.9,0xd9a85a,sd*(w+.9)/2,yy+.75,0)}yy+=3.1}
  cyl(h,.1,.18,4.6,0xd9a85a,0,yy+1.3,0,6);for(let i=0;i<6;i++)cyl(h,.55-i*.07,.55-i*.07,.12,0xd9a85a,0,yy+.2+i*.62,0,8);gl(h,0xffc77a,5,0,3,3.4,.7);return h}
/* torii estilo myōjin: pilares que se inclinan hacia dentro y se afinan arriba, nuki con cuñas, placa central,
   y shimagi + kasagi curvos que se levantan en las puntas. o.w: medio ancho entre pilares; o.water: sin basa (pies en el agua); o.rope: shimenawa */
export function torii(g,x,y,z,sc,col,o={}){const h=new THREE.Group(),W=o.w||2.2,dk=0x2c2a2e;h.position.set(x,y,z);h.scale.setScalar(sc);g.add(h);
  [-1,1].forEach(sd=>{const p=cyl(h,.24,.34,6.3,col,sd*(W+.1),3.05,0,10);p.rotation.z=sd*.035;
    if(o.water){cyl(h,.37,.39,1.5,dk,sd*(W+.2),.2,0,10)}else{cyl(h,.5,.58,.34,0xb9b5ad,sd*(W+.2),.17,0,10);cyl(h,.4,.44,.36,0xa6a29a,sd*(W+.2),.5,0,10)}
    for(const q of[-1,1])bx(h,.12,.22,.5,col,sd*W+q*.42,4.75,0)});
  bx(h,W*2+1.7,.34,.34,col,0,4.75,0);bx(h,.46,.82,.3,col,0,5.33,0);bx(h,.74,.96,.07,dk,0,5.33,.19);bx(h,.56,.78,.03,0xd9a85a,0,5.33,.235);
  const sm=new THREE.Mesh(beamGeo(W*2+2.5,.36,.5,.34,.25),MT(col));sm.position.y=5.92;h.add(sm);
  const ks=new THREE.Mesh(beamGeo(W*2+3.3,.3,.74,.46,.4),MT(dk));ks.position.y=6.27;h.add(ks);
  const kc=new THREE.Mesh(beamGeo(W*2+3.5,.07,.86,.5,.4),MT(0x45414a));kc.position.y=6.47;h.add(kc);
  if(o.rope){const N=9;for(let i=0;i<N;i++){const t0=i/N*2-1,t1=(i+1)/N*2-1,sag=t=>4.2-.45*(1-t*t),A=[t0*W,sag(t0)],B=[t1*W,sag(t1)],r=cyl(h,.07,.07,Math.hypot(B[0]-A[0],B[1]-A[1])+.04,0xe6d8a0,(A[0]+B[0])/2,(A[1]+B[1])/2,0,5);r.rotation.z=Math.atan2(B[1]-A[1],B[0]-A[0])+Math.PI/2}
    for(const t of[-.6,-.2,.2,.6]){const sh=new THREE.Mesh(new THREE.PlaneGeometry(.26,.6),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,side:THREE.DoubleSide}));sh.position.set(t*W,3.9-.45*(1-t*t)+.02,0);sh.rotation.z=t>0?.15:-.15;h.add(sh)}}
  return h}
/* garceta de ~1,05 m a escala 1 (antes medía 3 m): patas con rodilla, cuerpo inclinado con alas plegadas y plumas de cola,
   cuello en S, cabeza con pico de daga, ojo y penacho. El cuello y la cabeza van en una sola malla animable (nk). */
const HERM=new THREE.MeshToonMaterial({gradientMap:toonGrad,vertexColors:true});
export function mkHeron(sc,ph){const h=new THREE.Group(),w=0xf6f3ee,w2=0xe2ddd2,dk=0x3d3a36;
  const sp=(par,c,r,sx,sy,sz,x,y,z,rx)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(r,10,8),MT(c));m.scale.set(sx,sy,sz);m.position.set(x,y,z);if(rx)m.rotation.x=rx;par.add(m);return m};
  const sg=(par,c,a,b,r0,r1,n)=>{const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b),m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r0,A.distanceTo(B),n||5,1),MT(c));m.position.copy(A).add(B).multiplyScalar(.5);m.quaternion.setFromUnitVectors(_UPH,B.sub(A).normalize());par.add(m);return m};
  [-1,1].forEach(sd=>{sg(h,dk,[sd*.045,-.1,.03],[sd*.045,.22,-.03],.012,.014,4);sg(h,dk,[sd*.045,.22,-.03],[sd*.05,.46,.03],.014,.022,4)});
  sp(h,w,.5,.3,.27,.5,0,.57,0,-.3);[-1,1].forEach(sd=>sp(h,w2,.5,.09,.2,.43,sd*.125,.58,-.05,-.3));
  sg(h,w2,[0,.5,-.2],[0,.4,-.44],.065,.01,5);[-1,0,1].forEach(q=>sg(h,w,[q*.035,.64,-.1],[q*.07,.46,-.42],.012,.002,3));
  const nk=new THREE.Group();nk.userData.noMerge=true;nk.position.set(0,.64,.2);h.add(nk);
  nk.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([[0,-.04,-.03],[0,.09,.09],[0,.21,.035],[0,.33,.03],[0,.41,.1]].map(q=>new THREE.Vector3(...q))),8,.03,5,false),MT(w)));
  sp(nk,w,.05,1,.95,1.5,0,.42,.14);sg(nk,0xe3a24a,[0,.415,.19],[0,.4,.43],.02,.003,4);sg(nk,w,[0,.45,.1],[0,.475,-.07],.01,.002,3);
  [-1,1].forEach(sd=>sp(nk,0x1c1a1a,.008,1,1,1,sd*.04,.43,.17));
  bake(nk,{vc:true,mat:HERM});nk.children.forEach(m=>{m.userData.noMerge=true});
  h.scale.setScalar(sc);lmAnim.push({nk,ph});return h}
/* agua que cae: velos verticales que aceleran al bajar, bordes irregulares, labio brillante arriba y espuma abajo */
export const fallMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{t:{value:0},fogCol:{value:new THREE.Color(0xdde4ee)}},
  vertexShader:'varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}',
  fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;
  float h1(float n){return fract(sin(n*127.1)*43758.5453);}
  float n1(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);float a=h1(i.x+i.y*57.),b=h1(i.x+1.+i.y*57.),c=h1(i.x+(i.y+1.)*57.),d=h1(i.x+1.+(i.y+1.)*57.);return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
  void main(){float fall=1.-vU.y,acc=fall*fall*.9+fall*.6;                 /* la caída acelera */
    float v1=n1(vec2(vU.x*26.,acc*3.2-t*1.5)),v2=n1(vec2(vU.x*11.+3.,acc*1.7-t*.9)),v3=n1(vec2(vU.x*52.,acc*6.-t*2.4));
    float veil=v1*.5+v2*.35+v3*.25;
    float ed=.5-abs(vU.x-.5),wob=.06+.07*n1(vec2(vU.y*5.-t*.7,vU.x<.5?1.:9.));
    float e=smoothstep(0.,wob+.05,ed);
    float lip=smoothstep(.93,1.,vU.y),foam=smoothstep(.22,0.,vU.y)*(.6+.4*n1(vec2(vU.x*14.,t*2.)));
    float a=(.5+.42*smoothstep(.3,.85,veil))*e;a=max(a,foam*e*.95);a=max(a,lip*e*.8);
    vec3 c=mix(vec3(.66,.85,.93),vec3(1.),clamp(smoothstep(.45,.95,veil)+foam+lip*.7,0.,1.));
    float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*(1.-fg*.45));
#include <colorspace_fragment>
}`});
/* cortina de la cascada: lámina que se abomba hacia fuera y se ensancha al caer */
export function fallGeo(w,h,bulge=.5,spread=.18){const g=new THREE.PlaneGeometry(w,h,6,6),p=g.attributes.position;
  for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),f=.5-y/h,u=2*x/w;p.setXYZ(i,x*(1+spread*f),y,bulge*(1-u*u)*(.35+.65*f)+f*f*bulge*.8)}g.computeVertexNormals();return g}
export const glowMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{map:{value:glowTex},k:{value:1}},
  vertexShader:'attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}',
  fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`});
const _inv=new THREE.Matrix4(),_v=new THREE.Vector3();
export function optimizeLM(g){
  g.updateMatrixWorld(true);_inv.copy(g.matrixWorld).invert();
  const buckets=new Map(),glows=[],gone=[];
  g.traverse(o=>{
    if(o.isSprite&&o.userData.base!=null){glows.push(o);return}
    if(!o.isMesh||o.isInstancedMesh||o.material.isShaderMaterial||!o.material.isMaterial)return;
    for(let p=o;p&&p!==g;p=p.parent)if(p.userData.noMerge)return;
    const mt=o.material,key=[mt.type,mt.color.getHex(),mt.emissive?mt.emissive.getHex():0,mt.side,mt.map?mt.map.uuid:0,mt.transparent,mt.opacity,mt.depthWrite].join('|');
    let geo=o.geometry;geo=geo.index?geo.toNonIndexed():geo.clone();
    for(const n of Object.keys(geo.attributes))if(n!=='position'&&n!=='normal'&&n!=='uv')geo.deleteAttribute(n);
    if(!geo.attributes.normal)geo.computeVertexNormals();if(!geo.attributes.uv)geo.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count*2),2));
    geo.applyMatrix4(_inv.clone().multiply(o.matrixWorld));
    let b=buckets.get(key);if(!b){b={mat:mt,geos:[]};buckets.set(key,b)}b.geos.push(geo);gone.push(o)});
  for(const o of gone){if(o.parent)o.parent.remove(o);o.geometry.dispose();if(o.material.dispose&&![...buckets.values()].some(b=>b.mat===o.material))o.material.dispose()}
  for(const b of buckets.values()){const mg=mergeGeometries(b.geos);b.geos.forEach(x=>x.dispose());if(!mg)continue;const me=new THREE.Mesh(mg,b.mat);g.add(me)}
  if(glows.length){const n=glows.length,q=new THREE.PlaneGeometry(1,1),ig=new THREE.InstancedBufferGeometry();ig.index=q.index;ig.setAttribute('position',q.attributes.position);ig.setAttribute('uv',q.attributes.uv);
    const C=new Float32Array(n*3),S=new Float32Array(n),L=new Float32Array(n*3),B=new Float32Array(n);
    glows.forEach((s,i)=>{_v.setFromMatrixPosition(s.matrixWorld).applyMatrix4(_inv);C.set([_v.x,_v.y,_v.z],i*3);S[i]=s.scale.x;L.set([s.material.color.r,s.material.color.g,s.material.color.b],i*3);B[i]=s.userData.base;
      if(s.parent)s.parent.remove(s);s.material.dispose()});
    ig.setAttribute('iC',new THREE.InstancedBufferAttribute(C,3));ig.setAttribute('iS',new THREE.InstancedBufferAttribute(S,1));ig.setAttribute('iCol',new THREE.InstancedBufferAttribute(L,3));ig.setAttribute('iB',new THREE.InstancedBufferAttribute(B,1));ig.instanceCount=n;
    const gm=new THREE.Mesh(ig,glowMat);gm.frustumCulled=false;gm.renderOrder=4;g.add(gm)}
  return g}
export function disposeLM(g){const sh=new Set([glowMat,fallMat,reedM.material]);
  g.traverse(o=>{if(o.isInstancedMesh&&o.userData.keep){o.dispose();return}
    if(o.geometry)o.geometry.dispose();const ms=o.material?(Array.isArray(o.material)?o.material:[o.material]):[];ms.forEach(x=>{if(!sh.has(x))x.dispose()})});
  for(let i=lmAnim.length-1;i>=0;i--){const q=lmAnim[i],ob=q.b||q.nk;let p=ob;while(p&&p!==g)p=p.parent;if(p===g)lmAnim.splice(i,1)}
  for(let i=lmG.length-1;i>=0;i--){let p=lmG[i];while(p&&p!==g)p=p.parent;if(p===g)lmG.splice(i,1)}}

/* la cabaña del acantilado a escala de paisaje: risco, terraza sobre pilotes, ventanas encendidas, pinos y un cerezo */
export function farCabin(c,k,crag=true){
if(crag){/* risco: columna de roca con estratos y cornisas, más ancha abajo, con un sombrero de hierba irregular */
  const rk=new THREE.CylinderGeometry(5.3,9.2,12,11,6),p=rk.attributes.position;
  for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),rr=Math.hypot(x,z);if(rr<.01)continue;const band=Math.floor((y+6)/1.9),f=1+.13*n3(x*.22,y*.3,z*.22,k)+.06*Math.sin(band*2.7+k)+(Math.abs(y)<5.9?.05*Math.sin(Math.atan2(z,x)*5+band):0);p.setXYZ(i,x*f,y,z*f)}
  rk.computeVertexNormals();const rm=new THREE.Mesh(rk,MT(0x8f6e60,{map:tex('rock')}));rm.position.y=4;c.add(rm);
  for(const [a,yy,r] of[[.4,1.2,2.6],[2.5,3.4,2.1],[4.4,.4,3],[5.6,5,1.7]])rock(c,r,0x86685b,Math.cos(a)*7,yy,Math.sin(a)*7,a+k,.8);
  const gr=new THREE.Mesh(lumpy(new THREE.CylinderGeometry(5.9,5.5,.9,11,1),.12,.5,k,1),MT(0x7a9a62));gr.position.y=10.2;c.add(gr);
  for(const [a,r] of[[1,5.6],[3.2,5.7],[5.1,5.5]]){const t=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(1,1),.25,1.6,a,.6),MT(0x6f9460));t.position.set(Math.cos(a)*r,9.9,Math.sin(a)*r);t.scale.set(1.3,.8,1.3);c.add(t)}}
for(const [x,z] of[[-2.6,-1.6],[2.6,-1.6],[-2.6,1.6],[2.6,1.6]])cyl(c,.14,.18,3,0x4b342a,x,10,z,5);
bx(c,7.4,.3,4.6,0xb8946c,0,11.5,0);
bx(c,5.4,2.4,3.4,0xe8d3b6,0,12.8,-.2);for(const x of[-2.7,2.7])bx(c,.2,2.4,.2,0x4b342a,x,12.8,1.4);
bx(c,2.2,1.4,.1,0xffd9a0,-.9,12.9,1.55).material=new THREE.MeshBasicMaterial({color:0xffd9a0});bx(c,1.4,1.4,.1,0xffd9a0,1.6,12.9,1.55).material=new THREE.MeshBasicMaterial({color:0xffe6b8});
hipRoof(c,8.4,5.6,1.9,13.95,0x4f4a58,{z:-.2,lift:.5});

gl(c,0xffc77a,12,0,12.8,2.4,.8);
for(let i=0;i<5;i++){for(const [r,hh,yy] of[[1.25,2,0],[.85,1.9,1.3]]){const pn=new THREE.Mesh(tierGeo(r,hh,6,i+yy,{zig:.2,droop:.15}),MT(i%2?0x5c7a58:0x6d8466));pn.position.set(-3.6+i*.5+(i>2?5.6:0),10.4+yy+hash(k,i+210)*.6,-1.4+(hash(k,i+220)-.5)*3);c.add(pn)}}

  const bl=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(1.5,1),.22,1.3,3,.7),MT(0xf3bccb));bl.position.set(-4.4,10.4,.8);bl.scale.y=.9;c.add(bl)}
