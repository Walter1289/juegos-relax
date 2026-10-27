/* secret.js — estanque secreto de la cabaña: una maqueta circular del Río con sus lugares; se despierta al descifrar todo el cartel */
import * as THREE from 'three';
import {scene,canvas,cam} from './core.js';
import {A} from '../audio.js';
import {Y0,spr,glowTex} from './util.js';
import {mat} from './mats.js';
import {secreto,descubiertos} from '../lightmsg.js';
export const SPX=-8.8,SPZ=.3,SPR=5;
let ring=null,boats=[],surge=0,ang=0,lastT=null,wake=[],waterM=null;
export function buildSecret(){
  if(!secreto())return;
  const found=new Set(descubiertos());
  const G=new THREE.Group();G.position.set(SPX,Y0,SPZ);scene.add(G);
  const M=(g,m,x,y,z)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);return o};
  /* cuenca: base de piedra, borde, agua anular, banco de hierba e isla central */
  G.add(M(new THREE.CylinderGeometry(4.5,4.6,.34,40),mat('#7d7a86'),0,.1,0));
  const rim=new THREE.Mesh(new THREE.TorusGeometry(4.45,.2,8,48),mat('#a9a4b0'));rim.rotation.x=Math.PI/2;rim.position.y=.3;G.add(rim);
  const bank=new THREE.Mesh(new THREE.RingGeometry(3.25,4.3,40),mat('#7fa06a'));bank.rotation.x=-Math.PI/2;bank.position.y=.29;G.add(bank);
  const wc=document.createElement('canvas');wc.width=256;wc.height=32;{const g=wc.getContext('2d');const gr=g.createLinearGradient(0,0,256,0);gr.addColorStop(0,'#bfe3ea');gr.addColorStop(.5,'#9ccbd8');gr.addColorStop(1,'#bfe3ea');g.fillStyle=gr;g.fillRect(0,0,256,32);g.fillStyle='rgba(255,255,255,.35)';for(let i=0;i<30;i++)g.fillRect(Math.random()*256,Math.random()*32,10+Math.random()*30,1)}
  const wt=new THREE.CanvasTexture(wc);wt.colorSpace=THREE.SRGBColorSpace;
  const water=new THREE.Mesh(new THREE.RingGeometry(1.8,3.3,48,1),new THREE.MeshBasicMaterial({map:wt,transparent:true,opacity:.92}));water.rotation.x=-Math.PI/2;water.position.y=.31;G.add(water);waterM=water;
  G.add(M(new THREE.CylinderGeometry(1.75,1.9,.5,32),mat('#7fa06a'),0,.4,0));
  const col=(c,on)=>on?c:'#8d8b94',lit=(g,c,x,y,z,s=1.1)=>{const L=spr(glowTex,c,s,.5,true);L.position.set(x,y,z);g.add(L)};
  /* castillo de la Garza Blanca en la isla (siempre; es el destino del río) */
  {const on=found.has(10),c=new THREE.Group();c.position.y=.65;G.add(c);
   [[1.05,.42,0],[.78,.4,.42],[.55,.36,.8]].forEach(([w,h,y],i)=>{c.add(M(new THREE.BoxGeometry(w,h,w),mat(col('#efe6d2',on)),0,y+h/2,0));c.add(M(new THREE.ConeGeometry(w*.82,.26,4),mat(col('#4f4a58',on)),0,y+h+.1,0)).rotation.y=Math.PI/4;c.children[c.children.length-1].rotation.y=Math.PI/4});
   if(on)lit(c,0xffd9a0,0,.7,.2,1.6)}
  const types=[0,1,2,3,4,5,6,7,8,9];
  types.forEach((t,i)=>{
    const on=found.has(t),a=-Math.PI/2+i/10*Math.PI*2,r=t===9?2.5:(t===0?2.55:3.75),x=Math.cos(a)*r,z=Math.sin(a)*r;
    const g=new THREE.Group();g.position.set(x,t===9||t===0?.31:.3,z);g.rotation.y=-a-Math.PI/2;G.add(g);
    const m=(c)=>mat(col(c,on));
    if(t===0){/* puente arqueado sobre el anillo de agua, hacia la isla */
      g.position.set(Math.cos(a)*2.55,.34,Math.sin(a)*2.55);g.rotation.y=-a;
      for(let q=-5;q<=5;q++){const u=q/5,b=M(new THREE.BoxGeometry(.26,.07,.55),m('#b0876c'),u*1.0,.16*(1-u*u),0);b.rotation.z=-u*.5;g.add(b)}
      [-1,1].forEach(sd=>g.add(M(new THREE.BoxGeometry(2.1,.05,.05),m('#b5473a'),0,.28,sd*.27)))}
    else if(t===1){[-.3,.3].forEach(sx=>g.add(M(new THREE.CylinderGeometry(.035,.04,.62,6),m('#c23f33'),sx,.31,0)));g.add(M(new THREE.BoxGeometry(.9,.07,.12),m('#2c2a2e'),0,.66,0));g.add(M(new THREE.BoxGeometry(.7,.05,.08),m('#c23f33'),0,.55,0))}
    else if(t===2){[[-.28,.1],[.2,-.12],[.05,.28]].forEach(([hx,hz],j)=>{g.add(M(new THREE.BoxGeometry(.3,.2,.28),m('#e8d3b6'),hx,.1,hz));g.add(M(new THREE.ConeGeometry(.28,.18,4),m('#8f6a5f'),hx,.29,hz)).rotation.y=Math.PI/4;if(on)lit(g,0xffc27a,hx,.12,hz+.16,.4)})}
    else if(t===3){g.add(M(new THREE.CylinderGeometry(.03,.05,.4,5),m('#5a3d33'),0,.2,0));g.add(M(new THREE.IcosahedronGeometry(.3,1),m('#f3bccb'),0,.55,0));g.add(M(new THREE.IcosahedronGeometry(.2,0),m('#eea9bd'),.18,.45,.08))}
    else if(t===4){g.position.y=.31;g.add(M(new THREE.SphereGeometry(.13,8,6),m('#f6f3ee'),0,.2,0));g.children[g.children.length-1].scale.set(1,.8,1.5);g.add(M(new THREE.CylinderGeometry(.015,.02,.3,5),m('#f6f3ee'),0,.4,.05));g.add(M(new THREE.ConeGeometry(.02,.1,4),m('#e3a24a'),0,.5,.12)).rotation.x=Math.PI/2}
    else if(t===5){let y=0;[[.5,.22],[.4,.2],[.3,.18]].forEach(([w,h],j)=>{g.add(M(new THREE.BoxGeometry(w,h,w),m('#efe3cd'),0,y+h/2,0));g.add(M(new THREE.ConeGeometry(w*.85,.14,4),m('#4c4a5a'),0,y+h+.05,0)).rotation.y=Math.PI/4;y+=h+.1});if(on)lit(g,0xffc77a,0,.4,0,.9)}
    else if(t===6){[[0,.15,0,.3],[.12,.4,0,.22],[-.1,.55,0,.16]].forEach(([dx,y,dz,rr])=>g.add(M(new THREE.IcosahedronGeometry(rr,0),m('#7a8a7e'),dx,y,dz)));const f=M(new THREE.PlaneGeometry(.14,.5),new THREE.MeshBasicMaterial({color:on?0xdff3fa:0x9a9aa2,transparent:true,opacity:.85,side:THREE.DoubleSide}),0,.35,.26);g.add(f)}
    else if(t===7){g.add(M(new THREE.BoxGeometry(.5,.28,.4),m('#e8d3b6'),0,.2,0));g.add(M(new THREE.ConeGeometry(.42,.22,4),m('#8f6a5f'),0,.45,0)).rotation.y=Math.PI/4;g.add(M(new THREE.ConeGeometry(.16,.07,10),m('#c23f33'),.38,.38,.14));g.add(M(new THREE.CylinderGeometry(.008,.008,.32,4),m('#b0876c'),.38,.22,.14));if(on)lit(g,0xffc77a,0,.25,.24,.6)}
    else if(t===8){for(let q=0;q<6;q++){const h=.5+(q%3)*.15;g.add(M(new THREE.CylinderGeometry(.02,.026,h,5),m(q%2?'#8fb06a':'#7fa05f'),(q-2.5)*.08,h/2,(q%2)*.1))}}
    else if(t===9){[[0,0],[.28,.12],[-.2,.2]].forEach(([dx,dz])=>{g.add(M(new THREE.CylinderGeometry(.14,.14,.02,10),m('#7fbf8a'),dx,.03,dz));});g.add(M(new THREE.IcosahedronGeometry(.07,0),m('#f5a4bd'),.28,.1,.12))}
    if(on&&t!==2&&t!==5&&t!==7)lit(g,0xffd9a0,0,.4,0,.9)});
  /* canoas de farolillo que recorren el anillo de agua */
  ring=new THREE.Group();G.add(ring);
  for(let i=0;i<5;i++){const a=i/5*Math.PI*2,b=new THREE.Group();b.position.set(Math.cos(a)*2.45,.36,Math.sin(a)*2.45);b.rotation.y=-a;ring.add(b);
    b.add(M(new THREE.BoxGeometry(.3,.06,.1),mat('#6b4a36'),0,0,0));b.add(M(new THREE.SphereGeometry(.07,6,5),new THREE.MeshBasicMaterial({color:0xffd9a0}),0,.12,0));const L=spr(glowTex,0xffc27a,.7,.6,true);L.position.y=.14;b.add(L)}
  boats.push(ring);
  /* mojón de piedra con una luz en el camino de entrada */
  const lamp=new THREE.Mesh(new THREE.CylinderGeometry(.12,.16,.9,6),mat('#a9a4b0'));lamp.position.set(3.2,.75,-4.3);G.add(lamp);lit(G,0xffc27a,3.2,1.3,-4.3,1.6);
}
/* tocar el agua despierta la corriente: las canoas aceleran y la fuerza se va apagando sola */
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();let dn=null;
function bindTap(){
  canvas.addEventListener('pointerdown',e=>{dn={x:e.clientX,y:e.clientY,t:performance.now()}});
  canvas.addEventListener('pointerup',e=>{if(!dn||!waterM)return;const mv=Math.hypot(e.clientX-dn.x,e.clientY-dn.y),dt=performance.now()-dn.t;dn=null;if(mv>8||dt>450)return;
    const r=canvas.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);ray.setFromCamera(ndc,cam);
    const h=ray.intersectObject(waterM,false)[0];if(!h)return;
    surge=Math.min(1.4,surge+.8);try{A.chime(0,2)}catch(x){}try{navigator.vibrate&&navigator.vibrate(12)}catch(x){}
    const g=new THREE.Mesh(new THREE.RingGeometry(.08,.14,24),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.7,side:THREE.DoubleSide,depthWrite:false}));
    g.rotation.x=-Math.PI/2;g.position.copy(waterM.parent.worldToLocal(h.point.clone()));g.position.y=.33;waterM.parent.add(g);wake.push({g,a:0})});
}
let bound=false;
export const secretStep=t=>{if(!ring)return;if(!bound){bound=true;bindTap()}
  const dt=lastT==null?.016:Math.min(.05,Math.max(0,t-lastT));lastT=t;
  surge*=Math.exp(-dt*.38);ang+=(.1+surge*.85)*dt;ring.rotation.y=-ang;
  for(let i=wake.length-1;i>=0;i--){const w=wake[i];w.a+=dt;const k=w.a/1.6;w.g.scale.setScalar(1+k*14);w.g.material.opacity=.7*(1-k);if(k>=1){w.g.parent.remove(w.g);w.g.geometry.dispose();w.g.material.dispose();wake.splice(i,1)}}};
