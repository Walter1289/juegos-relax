/* Ranitas de San Antonio (amagaeru) sobre algunas rocas: respiran, de vez en cuando se recolocan o croan,
   y si la canoa pasa muy cerca saltan al agua. Dos mallas por rana (cuerpo y patas traseras). */
import {A} from '../audio-rio.js';
import {toonGrad} from '../style.js';
import * as THREE from 'three';
import {P} from './state.js';
import {MT} from './core.js';
import {env} from './env.js';
import {W} from './weather.js';
import {bake} from '../style.js';
import {spawnRipple} from './ripples.js';
import {splash} from './shore.js';
const FROGM=new THREE.MeshToonMaterial({gradientMap:toonGrad,vertexColors:true});
const GR=0x86c26e,GD=0x5f9a58,CR=0xeeeac6,BK=0x23261f,GO=0xd8b85a;
const sph=(par,c,r,sx,sy,sz,x,y,z,rx=0,ry=0)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(r,10,7),MT(c));m.scale.set(sx,sy,sz);m.position.set(x,y,z);m.rotation.set(rx,ry,0);par.add(m);return m};
let bodyG=null,legG=null;
function build(){const b=new THREE.Group(),l=new THREE.Group();
  sph(b,GR,.1,1,.66,1.3,0,.085,.025,.38);                 // cuerpo sentado: grupa baja, pecho alto
  sph(b,GD,.07,.9,.4,1.1,0,.125,.06,.38);                  // lomo más oscuro
  sph(b,GR,.074,1.2,.72,1.12,0,.135,-.105);               // cabeza ancha
  sph(b,CR,.062,1.05,.6,1,0,.092,-.1);                    // garganta clara
  sph(b,BK,.05,1.5,.12,.5,0,.128,-.168);                  // antifaz oscuro del hocico al ojo
  [-1,1].forEach(s=>{sph(b,GR,.03,1,1,1,s*.05,.178,-.115);sph(b,GO,.02,1,1,1,s*.062,.182,-.122);sph(b,BK,.012,1,1,1,s*.074,.184,-.127);
    const a=new THREE.Mesh(new THREE.CylinderGeometry(.014,.012,.11,5),MT(GR));a.position.set(s*.078,.05,-.085);a.rotation.set(-.25,0,s*-.22);b.add(a);
    sph(b,GR,.03,1.1,.3,1.3,s*.092,.008,-.11,0,s*-.4);                                 // mano
    sph(l,GR,.062,.62,.6,1.3,s*.105,.055,.07,0,s*.55);                                 // muslo plegado
    sph(l,GD,.04,.55,.5,1.35,s*.135,.03,.02,0,s*-.5);                                  // pierna
    sph(l,GR,.04,1.1,.22,1.5,s*.14,.008,-.03,0,s*-.3)});                               // pie largo
  bake(b,{vc:true,mat:FROGM});bake(l,{vc:true,mat:FROGM});bodyG=b.children[0].geometry;legG=l.children[0].geometry}
export function mkFrog(){if(!bodyG)build();const g=new THREE.Group(),b=new THREE.Mesh(bodyG,FROGM),l=new THREE.Mesh(legG,FROGM);g.add(b,l);g.rotation.order='YXZ';g.scale.setScalar(1.1);
  g.userData={st:0,b,l,t:Math.random()*9,hop:6+Math.random()*12,hk:0,ry0:0,ry1:0,ck:4+Math.random()*10,j:0,hx:0,hy:0,hz:0,tx:0,tz:0};return g}
const _w=new THREE.Vector3();
/* g: rana (hija del grupo de la roca) · rk: datos de la roca {x,z,r} */
export function updateFrog(g,rk,dt){const u=g.userData;u.t+=dt;
  const dx=P.px-rk.x,dz=P.pz-rk.z,d=Math.hypot(dx,dz);
  if(u.st===2){if(d>55){u.st=0;g.visible=true;g.position.set(u.hx,u.hy,u.hz);g.rotation.set(0,u.ry1,0);u.l.scale.z=1;u.l.position.z=0}return}
  if(u.st===1){u.j+=dt;const T=.62,k=Math.min(1,u.j/T),hgt=.55;
    g.position.set(u.hx+(u.tx-u.hx)*k,u.hy*(1-k)+Math.sin(Math.PI*k)*hgt-.06*k,u.hz+(u.tz-u.hz)*k);
    const run=Math.hypot(u.tx-u.hx,u.tz-u.hz),sl=(Math.cos(Math.PI*k)*hgt*Math.PI-u.hy)/run;g.rotation.x=Math.atan(sl)*.9;
    const ext=Math.sin(Math.PI*Math.min(1,k*1.6));u.l.scale.z=1+1.5*ext;u.l.position.z=.07*ext;
    if(k>=1){u.st=2;g.visible=false;g.getWorldPosition(_w);splash(_w.x,.05,_w.z,4);spawnRipple(_w.x,_w.z,.7,3,.9);try{A.plop((_w.x-P.px)/25)}catch(e){}}
    return}
  /* sentada: la garganta late, y cada tanto da un saltito para recolocarse */
  const br=Math.sin(u.t*5.2)*.5+.5;u.b.scale.set(1+.012*br,1+.03*br,1);
  if(u.hk>0){u.hk-=dt;const k=1-Math.max(0,u.hk)/.26;g.rotation.y=u.ry0+(u.ry1-u.ry0)*k;g.position.y=u.hy+Math.sin(Math.PI*k)*.045;u.l.scale.z=1+.35*Math.sin(Math.PI*k)}
  else{u.hop-=dt;if(u.hop<=0){u.hop=7+Math.random()*16;u.hk=.26;u.ry0=g.rotation.y;u.ry1=u.ry0+(Math.random()-.5)*1.5}}
  if(d<32){u.ck-=dt*(.35+env.night*.9+(W.rain||0)*.9);if(u.ck<=0){u.ck=7+Math.random()*12;try{A.croak((rk.x-P.px)/25)}catch(e){}}}
  /* la canoa pasa cerca: gira hacia el agua lejos de la canoa y salta */
  if(d<rk.r+4.6&&d>.01){const nx=-dx/d,nz=-dz/d,R=rk.r*1.25+1;u.st=1;u.j=0;u.hk=0;u.hx=g.position.x;u.hz=g.position.z;u.tx=nx*R;u.tz=nz*R;
    u.ry1=g.rotation.y=Math.atan2(-(u.tx-u.hx),-(u.tz-u.hz));u.b.scale.set(1,1,1)}
}
