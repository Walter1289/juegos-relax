/* Piezas de los lugares: cajas/cilindros/brillos, objetos japoneses tradicionales, garza, materiales y fusión de mallas (optimizeLM/disposeLM). */
import {toonGrad} from '../style.js';
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {MT,spr,glowTex} from './core.js';
import {reedM} from './props.js';
import {lmG,lmAnim} from './lm-data.js';
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
  const r=new THREE.Mesh(new THREE.ConeGeometry(.62,.5,4),MT(st));r.rotation.y=Math.PI/4;r.position.y=2.6;h.add(r);const t=new THREE.Mesh(new THREE.SphereGeometry(.11,6,5),MT(st));t.position.y=2.92;h.add(t);gl(h,0xffc77a,2.6,0,2.05,0,.8);return h}
function shimenawa(g,gy,hwv,z){for(const sd of[-1,1])cyl(g,.22,.3,10,0x6a4a3a,sd*(hwv+1.6),gy(sd*(hwv+1.6),z)+4.6,z,7);
  const L=hwv*2+3.2;const rp=cyl(g,.12,.12,L,0xe6d8a0,0,8.6,z,6);rp.rotation.z=Math.PI/2;
  for(let i=0;i<12;i++){const t=(i+.5)/12,x=-L/2+t*L;const sh=new THREE.Mesh(new THREE.PlaneGeometry(.42,1),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,side:THREE.DoubleSide}));sh.position.set(x,7.9,z);sh.rotation.set(0,0,(i%2?.18:-.18));g.add(sh)}
  for(const sd of[-1,1]){const tl=new THREE.Mesh(new THREE.ConeGeometry(.3,1,6),MT(0xe6d8a0));tl.position.set(sd*(hwv*.5),7.8,z);tl.rotation.x=Math.PI;g.add(tl)}}
export function signs(g,gy,hwv,ch,rope,bg){for(const sd of[-1,1]){nobori(g,gy,sd*(hwv+1.6),54,ch,bg);nobori(g,gy,sd*(hwv+3.6),49,ch,bg);tourou(g,gy,sd*(hwv+2.8),42)}if(rope)shimenawa(g,gy,hwv,37)}
export function roof(g,R,hh,y,col,sq=1){const r=new THREE.Mesh(new THREE.ConeGeometry(R,hh,4),MT(col));r.rotation.y=Math.PI/4;r.position.y=y;r.scale.z=sq;g.add(r);
  const q=R*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([a,b])=>{const t=new THREE.Mesh(new THREE.ConeGeometry(.32,1.3,5),MT(col));t.position.set(a*q,y-hh/2+.55,b*q*sq);t.rotation.set(b*.7,0,-a*.7);g.add(t)})}
export function pagoda(g,x,y,z){const h=new THREE.Group();h.position.set(x,y,z);g.add(h);bx(h,6.4,1.2,6.4,0x8f8c88,0,.5,0);let yy=1.1;
  for(let i=0;i<4;i++){const w=4.3-i*.75;bx(h,w,2.3,w,i%2?0xf1e6d3:0xe9ddc8,0,yy+1.15,0);bx(h,w+.12,.18,w+.12,0xb5473a,0,yy+.1,0);for(const [a,b]of[[1,1],[-1,1],[1,-1],[-1,-1]])cyl(h,.1,.1,2.3,0xb5473a,a*w/2,yy+1.15,b*w/2,6);roof(h,(w/2+.95)/.707,1.5,yy+2.9,0x55505e);yy+=3.1}
  cyl(h,.1,.18,4.6,0xd9a85a,0,yy+1.3,0,6);for(let i=0;i<6;i++)cyl(h,.55-i*.07,.55-i*.07,.12,0xd9a85a,0,yy+.2+i*.62,0,8);gl(h,0xffc77a,5,0,3,3.4,.7);return h}
export function torii(g,x,y,z,sc,col){const h=new THREE.Group();h.position.set(x,y,z);h.scale.setScalar(sc);g.add(h);[-2.2,2.2].forEach(sx=>cyl(h,.3,.36,6,col,sx,3,0,8));bx(h,6.8,.4,.55,0x2c2a2e,0,6.4,0);bx(h,5.6,.35,.4,col,0,5.4,0);bx(h,.5,.9,.4,col,0,5.85,0);return h}
export function mkHeron(sc,ph){const h=new THREE.Group(),w=0xf6f3ee,w2=0xe9e4da;
  const b=new THREE.Mesh(new THREE.SphereGeometry(.5,10,8),MT(w));b.scale.set(1,.8,1.5);b.position.y=1.35;h.add(b);
  const tl=new THREE.Mesh(new THREE.ConeGeometry(.2,.7,5),MT(w2));tl.rotation.x=-Math.PI/2-.3;tl.position.set(0,1.35,-.85);h.add(tl);
  cyl(h,.045,.045,1.1,0x3d3a36,-.12,.55,.05,4);cyl(h,.045,.045,1.1,0x3d3a36,.12,.55,.05,4);
  const nk=new THREE.Group();nk.userData.noMerge=true;nk.position.set(0,1.6,.55);h.add(nk);
  const n1=cyl(nk,.07,.09,1,w,0,.45,.05,5);n1.rotation.x=-.35;const n2=cyl(nk,.06,.07,.7,w,0,1.05,.3,5);n2.rotation.x=.45;
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.14,8,6),MT(w));hd.position.set(0,1.4,.55);nk.add(hd);
  const bk=new THREE.Mesh(new THREE.ConeGeometry(.05,.5,4),MT(0xe3a24a));bk.rotation.x=Math.PI/2;bk.position.set(0,1.38,.9);nk.add(bk);
  h.scale.setScalar(sc);lmAnim.push({nk,ph});return h}
export const fallMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{t:{value:0},fogCol:{value:new THREE.Color(0xdde4ee)}},
  vertexShader:'varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}',
  fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`});
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
