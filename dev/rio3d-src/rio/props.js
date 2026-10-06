/* Props del terreno: mallas instanciadas (árboles, nenúfares, juncos, parasoles, arbustos, bambú) y paleta del suelo. */
import {toonGrad,tex} from '../style.js';
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {hash,clamp} from './util.js';
import {COLS,ROWS,SE} from './world.js';
import {SAKURA} from '../season.js';
import {scene} from './core.js';
/* ---------- terreno por ventana, siempre alineado a una malla fija ---------- */
export const tPos=new Float32Array(COLS*ROWS*3),tCol=new Float32Array(COLS*ROWS*3);
export const tGeo=new THREE.BufferGeometry();
tGeo.setAttribute('position',new THREE.BufferAttribute(tPos,3));tGeo.setAttribute('color',new THREE.BufferAttribute(tCol,3));
{const idx=new Uint16Array((COLS-1)*(ROWS-1)*6);let k=0;
 for(let j=0;j<ROWS-1;j++)for(let i=0;i<COLS-1;i++){const a=j*COLS+i,b=a+1,c=a+COLS,d=c+1;idx.set([a,b,c,b,d,c],k);k+=6}
 tGeo.setIndex(new THREE.BufferAttribute(idx,1))}
const terrain=new THREE.Mesh(tGeo,new THREE.MeshToonMaterial({vertexColors:true,gradientMap:toonGrad}));terrain.frustumCulled=false;scene.add(terrain);
export const cSand=new THREE.Color('#eadcb9'),cG1=new THREE.Color('#b6dca3'),cG2=new THREE.Color('#8fc79b'),cHi=new THREE.Color('#bdd6c8'),cTop=new THREE.Color('#d3cce9'),cBed=new THREE.Color('#c8d6c0'),cGold=new THREE.Color('#d9b45f'),cGold2=new THREE.Color('#c8964a'),cPetal=new THREE.Color('#f6c9d8'),cGravel=new THREE.Color('#d9d2bf'),tmp=new THREE.Color();
/* árboles, nenúfares y flores: instancias reconstruidas junto con el terreno */
export const MAXT=1900;
function shadeGeo(g,uvs,lo,hi){g=g.index?g.toNonIndexed():g;const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*uvs[0],uv.getY(i)*uvs[1]);
  g.computeBoundingBox();const y0=g.boundingBox.min.y,y1=g.boundingBox.max.y,p=g.attributes.position,c=new Float32Array(p.count*3);
  for(let i=0;i<p.count;i++){const k=lo+(hi-lo)*((p.getY(i)-y0)/(y1-y0||1));c[i*3]=c[i*3+1]=c[i*3+2]=k}
  g.setAttribute('color',new THREE.BufferAttribute(c,3));return g}
const pineGeo=mergeGeometries([[2.0,2.6,.8],[1.6,2.5,2.4],[1.2,2.3,3.9],[.75,2.0,5.3]].map(([r,h,y])=>shadeGeo(new THREE.ConeGeometry(r,h,8,1).translate(0,y+h/2,0),[4,2],.72,1.18)).map(g=>{g.deleteAttribute('normal');return g}));
pineGeo.computeVertexNormals();
const crownGeo=mergeGeometries([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3]].map(([r,x,y,z])=>{const g=new THREE.IcosahedronGeometry(r,1);g.translate(x,y,z);g.deleteAttribute('normal');return shadeGeo(g,[3,3],.82,1.22)}));
crownGeo.computeVertexNormals();
const LEAFM=()=>new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,vertexColors:true,map:tex('leaf')});
export const pineM=new THREE.InstancedMesh(pineGeo,new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,vertexColors:true,map:tex('needle')}),MAXT);
export const crownM=new THREE.InstancedMesh(crownGeo,LEAFM(),MAXT);
export const trunkM=new THREE.InstancedMesh(new THREE.CylinderGeometry(.2,.34,4.2,6).translate(0,2.1,0),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0x8a6a5c,map:tex('bark')}),MAXT);
export const padM=new THREE.InstancedMesh(new THREE.CircleGeometry(.7,10).rotateX(-Math.PI/2),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff}),500);
export const lotM=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(.28,0).translate(0,.2,0),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff}),160);
[pineM,crownM,trunkM,padM,lotM].forEach(m=>{m.frustumCulled=false;scene.add(m)});
/* ---- juncos dorados, árboles-parasol y macizos kársticos (estilo acuarela china) ---- */
export const swayU={value:0};
function swayMat(m){m.onBeforeCompile=sh=>{sh.uniforms.uSw=swayU;sh.vertexShader='uniform float uSw;\n'+sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)};return m}
export const bladeGeo=(()=>{const gs=[];for(let i=0;i<9;i++){const a=i/9*6.28+hash(i,1),h=.9+hash(i,2)*1.3,l=.07,x=Math.cos(a)*.25*hash(i,3),z=Math.sin(a)*.25*hash(i,3),lean=(hash(i,4)-.5)*.9;
    const g=new THREE.BufferGeometry(),p=new Float32Array([-l,0,0,l,0,0,lean*.5-l*.5,h*.6,0,lean*.5+l*.5,h*.6,0,lean,h,0]);g.setAttribute('position',new THREE.BufferAttribute(p,3));
    g.setIndex([0,1,2,1,3,2,2,3,4]);g.computeVertexNormals();const col=new Float32Array(15);const cs=[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]];cs.forEach((c,k)=>col.set(c,k*3));g.setAttribute('color',new THREE.BufferAttribute(col,3));
    g.rotateY(a);g.translate(x,0,z);gs.push(g)}return mergeGeometries(gs)})();
export const reedM=new THREE.InstancedMesh(bladeGeo,swayMat(new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,vertexColors:true,side:THREE.DoubleSide})),1400);
const umbGeo=(()=>{const gs=[];const tk=new THREE.CylinderGeometry(.14,.3,4.2,6).translate(0,2.1,0);const tc=new Float32Array(tk.attributes.position.count*3).fill(.3);tk.setAttribute('color',new THREE.BufferAttribute(tc,3));gs.push(tk);
  [[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([x,y,z,r])=>{const g=new THREE.SphereGeometry(1,9,5).toNonIndexed();g.scale(r,r*.28,r);g.translate(x,y,z);
    const p=g.attributes.position,c=new Float32Array(p.count*3);for(let i=0;i<p.count;i++){const k=.62+.4*clamp((p.getY(i)-y)/(r*.28)*.5+.5);c[i*3]=k*.9;c[i*3+1]=k;c[i*3+2]=k*.92}g.setAttribute('color',new THREE.BufferAttribute(c,3));
    g.deleteAttribute('uv');gs.push(g)});
  gs[0]=gs[0].toNonIndexed();gs[0].deleteAttribute('uv');return mergeGeometries(gs)})();
export const umbM=new THREE.InstancedMesh(umbGeo,new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,vertexColors:true}),400);
[reedM,umbM].forEach(o=>{o.frustumCulled=false;scene.add(o)});
export const UMB=['#5d7a64','#4f6b5c','#6a8a6e','#566f5d'],REED=['#ffffff','#f0e0b0','#e6c98a','#d6b070'];
export const M4=new THREE.Matrix4(),Q=new THREE.Quaternion(),V3=new THREE.Vector3(),S3=new THREE.Vector3(),UP=new THREE.Vector3(0,1,0);
export const cSeasG=new THREE.Color(SE.gnd);
export const PINE=SE.pine,BLOS=SE.blos,SBLOS=SAKURA.blos,SBBLOS=SAKURA.bblos;
export const bushM=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,1).scale(1,.72,1).translate(0,.45,0),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,map:tex('leaf')}),1700);bushM.frustumCulled=false;scene.add(bushM);
export const BUSH=['#6fa383','#7fb592','#5f957a','#8cc09a'],BBLOS=SE.bblos;
const bambGeo=(()=>{const g=new THREE.CylinderGeometry(.11,.15,1,5,8,true).translate(0,.5,0).toNonIndexed();const p=g.attributes.position,c=new Float32Array(p.count*3);for(let i=0;i<p.count;i++){const y=p.getY(i),k=(Math.round(y*8)%3===0)?.68:1;c[i*3]=k;c[i*3+1]=k;c[i*3+2]=k*.95}g.setAttribute('color',new THREE.BufferAttribute(c,3));g.deleteAttribute('uv');g.computeVertexNormals();return g})();
export const bambM=new THREE.InstancedMesh(bambGeo,new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,vertexColors:true}),2000);
export const bleafM=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0).scale(1,.5,1),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff}),2000);
[bambM,bleafM].forEach(o=>{o.frustumCulled=false;scene.add(o)});
export const BAMB=['#8fc58a','#9fd194','#7bb87f','#a9d89a'],BLEAF=['#b7e08f','#a4d68a','#c4e89b','#92cc86'],BRD=SE.brd;export const cBam=new THREE.Color('#9ccf8a');
