/* Canoa y remero: casco, remos, personaje con sombrero de paja (3ª persona), y su animación por fotograma. */
import {toonGrad,tex} from '../style.js';
import * as THREE from 'three';
import {clamp} from './util.js';
import {P,S} from './state.js';
import {MT,scene,spr} from './core.js';
const MTc=MT;
/* ---------- canoa en primera persona ---------- */
export const boat=new THREE.Group();scene.add(boat);
const shape=new THREE.Shape();shape.moveTo(0,3.4);shape.quadraticCurveTo(.5,2.4,.7,1);shape.lineTo(.7,-1.3);shape.lineTo(-.7,-1.3);shape.lineTo(-.7,1);shape.quadraticCurveTo(-.5,2.4,0,3.4);
const hull=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.24,bevelEnabled:false}),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xe0a67c,emissive:0x40281a,map:tex('wood')}));hull.rotation.x=-Math.PI/2;hull.position.y=-.04;boat.add(hull);
const floor=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xb08468,emissive:0x2a1a12,map:tex('plank')}));floor.geometry.scale(.8,.86,1);floor.geometry.translate(0,.2,0);floor.rotation.x=-Math.PI/2;floor.position.y=.21;boat.add(floor);
{const woodD=MTc(0x8a5f45,{map:tex('wood')}),plk=MTc(0xc89a74,{map:tex('plank')});
  const out=shape,rim=new THREE.Shape(out.getPoints(24));const hole=new THREE.Path(rim.getPoints(24).map(p=>new THREE.Vector2(p.x*.86,p.y*.9+.1)).reverse());rim.holes.push(hole);
  const rg=new THREE.ExtrudeGeometry(rim,{depth:.07,bevelEnabled:false});const gun=new THREE.Mesh(rg,woodD);gun.rotation.x=-Math.PI/2;gun.position.y=.2;boat.add(gun);
  for(let i=0;i<6;i++){const z=-2.3+i*.72,w=i<2?1.0-i*.1:1.28;const rb=new THREE.Mesh(new THREE.BoxGeometry(w,.07,.08),woodD);rb.position.set(0,.23,z);boat.add(rb)}
  const seat=new THREE.Mesh(new THREE.BoxGeometry(1.35,.07,.34),plk);seat.position.set(0,.5,.55);boat.add(seat);
  const rope=new THREE.Mesh(new THREE.TorusGeometry(.2,.045,6,14),MTc(0xd9c392));rope.rotation.x=Math.PI/2;rope.position.set(.25,.27,-1.7);boat.add(rope);
  const rope2=rope.clone();rope2.scale.setScalar(.8);rope2.position.set(.25,.32,-1.7);boat.add(rope2);
  const bw=new THREE.Mesh(new THREE.SphereGeometry(.13,8,6),woodD);bw.position.set(0,.22,-3.35);boat.add(bw)}
const cargoMs=[];
{const nm=MTc(0x8a7b5e,{map:tex('cloth')}),pm=MTc(0xa88a5c,{map:tex('woodV')});
  [[-.35,.34,-1.55,.34],[-.05,.32,-1.35,.28],[-.3,.3,-1.1,.26]].forEach(([x,y,z,r])=>{const n=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),nm);n.scale.set(1.1,.65,1);n.position.set(x,y,z);boat.add(n);cargoMs.push(n)});
  const bp=new THREE.Mesh(new THREE.CylinderGeometry(.025,.035,4.6,6),pm);bp.position.set(-.55,.9,-2.6);bp.rotation.set(1.28,0,.14);boat.add(bp);
  const ln=new THREE.Mesh(new THREE.CylinderGeometry(.006,.006,2.3,3),MTc(0xd8d0c0));ln.position.set(-.95,.35,-4.7);boat.add(ln)}
const pole=new THREE.Mesh(new THREE.CylinderGeometry(.03,.04,.9,6),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0x7a5a4c}));pole.position.set(0,.55,-3.05);boat.add(pole);
export const bl=new THREE.Mesh(new THREE.SphereGeometry(.12,10,8),new THREE.MeshBasicMaterial({color:0xffe2a8}));bl.position.set(0,1.05,-3.05);boat.add(bl);
export const blGlow=spr(0xffc77a,2.4);blGlow.position.copy(bl.position);boat.add(blGlow);
export const bowLight=new THREE.PointLight(0xffc98a,0,22,1.6);bowLight.position.set(0,1.5,-2.8);boat.add(bowLight);
function mkPaddle(){
  const g=new THREE.Group(),mat=new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xefd0a4,emissive:0x3a2a1a});
  const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.022,.022,2.1,6),mat);shaft.rotation.x=Math.PI/2;shaft.position.z=.9;g.add(shaft);
  const blade=new THREE.Mesh(new THREE.BoxGeometry(.2,.03,.62),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xe59a86}));blade.position.z=1.55;g.add(blade);
  const grip=new THREE.Mesh(new THREE.BoxGeometry(.2,.04,.05),mat);grip.position.z=-.15;g.add(grip);
  const w=new THREE.Group();w.add(g);boat.add(w);return w;
}
const paddles=[mkPaddle(),mkPaddle()];
const HD=[new THREE.Vector3(-.7,.5,-.3),new THREE.Vector3(.7,.5,-.3)];
const REST=[new THREE.Vector3(-1.05,.55,-.9),new THREE.Vector3(1.05,.55,-.9)];
const me=new THREE.Group();boat.add(me);me.position.set(0,.42,.55);me.scale.setScalar(1.3);
const torso=new THREE.Group();torso.position.y=.3;me.add(torso);
const head=new THREE.Group();head.position.y=1.0;torso.add(head);
const hatG=new THREE.Group();hatG.position.y=.2;head.add(hatG);
const armPivot=[];
{const shirt=MTc(0x8d98a8,{map:tex('cloth')}),vest=MTc(0x6f7a8c,{map:tex('cloth')}),pants=MTc(0x45495a,{map:tex('cloth')}),skin=MTc(0xd9a982),hat=MTc(0xe0b96f,{map:tex('straw'),side:THREE.DoubleSide}),hatD=MTc(0xb98a4a,{map:tex('straw')}),hair=MTc(0x2d2a2e);
  const lg=new THREE.Mesh(new THREE.SphereGeometry(.5,14,10),pants);lg.scale.set(1.2,.42,.85);lg.position.y=-.1;me.add(lg);
  [-1,1].forEach(sd=>{const k=new THREE.Mesh(new THREE.SphereGeometry(.17,8,6),pants);k.position.set(sd*.5,-.02,-.3);me.add(k)});
  const bd=new THREE.Mesh(new THREE.CylinderGeometry(.3,.4,.8,12),shirt);bd.position.y=.42;torso.add(bd);
  const fold=new THREE.Mesh(new THREE.TorusGeometry(.35,.03,6,14),vest);fold.rotation.x=Math.PI/2;fold.position.y=.12;torso.add(fold);
  const sd=new THREE.Mesh(new THREE.SphereGeometry(.44,12,8),shirt);sd.scale.set(1,.45,.7);sd.position.y=.78;torso.add(sd);
  const col=new THREE.Mesh(new THREE.TorusGeometry(.14,.045,6,10),vest);col.rotation.x=Math.PI/2;col.position.y=.9;torso.add(col);
  const nk=new THREE.Mesh(new THREE.CylinderGeometry(.09,.1,.16,6),skin);nk.position.y=.95;torso.add(nk);
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.21,14,10),hair);hd.position.y=.2;head.add(hd);
  const ht=new THREE.Mesh(new THREE.ConeGeometry(.66,.36,24,1,true),hat);ht.position.y=.1;hatG.add(ht);
  const tp=new THREE.Mesh(new THREE.ConeGeometry(.1,.08,8),hatD);tp.position.y=.22;hatG.add(tp);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.655,.018,6,28),hatD);rim.rotation.x=Math.PI/2;rim.position.y=-.075;hatG.add(rim);
  [-1,1].forEach(s2=>{const st=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,.3,4),hair);st.position.set(s2*.18,-.12,.05);hatG.add(st)});
  [-1,1].forEach(side=>{const p=new THREE.Group();p.position.set(side*.42,.75,0);torso.add(p);
    const a=new THREE.Mesh(new THREE.CylinderGeometry(.095,.08,.6,8),shirt);a.position.y=-.3;p.add(a);
    const h=new THREE.Mesh(new THREE.SphereGeometry(.085,8,6),skin);h.position.y=-.62;p.add(h);
    const cf=new THREE.Mesh(new THREE.TorusGeometry(.085,.025,5,8),vest);cf.rotation.x=Math.PI/2;cf.position.y=-.52;p.add(cf);
    armPivot.push(p)})}
const cPad=new THREE.Group();boat.add(cPad);
{const m1=MTc(0xb98a56,{map:tex('woodV')}),m2=MTc(0xcf8d74,{map:tex('plank')});const sh=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,2.1,6),m1);sh.rotation.x=Math.PI/2;sh.position.z=1.05;cPad.add(sh);
  const bl=new THREE.Mesh(new THREE.BoxGeometry(.22,.04,.55),m2);bl.position.z=2.0;cPad.add(bl);
  const gr=new THREE.Mesh(new THREE.BoxGeometry(.2,.04,.05),m1);gr.position.z=-.03;cPad.add(gr)}
let padX=1,lagS=0;
const pv=new THREE.Vector3();
/* coloca la canoa en el agua con su vaivén; devuelve el balanceo (bob) que usa la cámara */
export function placeBoat(){
  const bob=Math.sin(P.t*.9)*.03+Math.sin(P.t*1.7)*.012;
  boat.position.set(P.px,bob*.6,P.pz);boat.rotation.set(0,-P.psi,-P.steer*.025+Math.sin(P.t*.7)*.008);boat.updateMatrixWorld(true);
  return bob}
/* remos en primera persona (el del lado hacia el que giras se hunde como timón) */
export function updatePaddles(){
  paddles.forEach((w,i)=>{
    const sx=i?1:-1,k=clamp(P.steer*sx,0,1);          // el remo del lado hacia el que giras se hunde como timón
    const B=new THREE.Vector3().copy(REST[i]);
    B.lerp(new THREE.Vector3(sx*1.25,-.1,-.9+Math.sin(P.t*1.3+i)*.08),k);
    const dv=pv.copy(B).sub(HD[i]).normalize();
    w.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),dv);w.position.copy(B).addScaledVector(dv,-1.55);
  });
}
/* personaje y remo en 3ª persona */
export function updateCharacter(dt){
  {const tp=S.camK>.45||S.cineW>.15;me.visible=tp;cargoMs.forEach(n=>n.visible=tp);cPad.visible=tp;paddles.forEach(w=>w.visible=!tp);
   if(tp){if(P.steer>.2)padX=Math.min(1,padX+dt*3);else if(P.steer<-.2)padX=Math.max(-1,padX-dt*3);
    lagS+=(P.steer-lagS)*Math.min(1,dt*2.2);const br=Math.sin(P.t*1.4);
    torso.rotation.z=-P.steer*.2+Math.sin(P.t*.6)*.02;torso.rotation.y=-P.steer*.28;torso.rotation.x=.05+br*.012+Math.abs(P.steer)*.06;
    head.rotation.y=-P.steer*.38+Math.sin(P.t*.35)*.08;head.rotation.x=.04+Math.sin(P.t*.5)*.03;
    hatG.rotation.z=(P.steer-lagS)*.45;hatG.rotation.x=-Math.abs(P.steer-lagS)*.12;
    const hand=pv.set(padX*.5,.8,.5),dip=Math.abs(P.steer)>.2?1:0,
      tipT=new THREE.Vector3(padX*(.7+dip*.55),-.2,1.35+Math.sin(P.t*1.2)*.12*(1-dip)+dip*.1);
    const d2=tipT.clone().sub(hand).normalize();cPad.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),d2);cPad.position.copy(hand);
    // brazos hacia el remo (mano alta en el mango, mano baja en el eje)
    const grips=[hand.clone().addScaledVector(d2,.75),hand.clone()];if(padX<0)grips.reverse();
    armPivot.forEach((p,i)=>{const sp=p.getWorldPosition(new THREE.Vector3());const tgt=boat.localToWorld(grips[i].clone());const dv=tgt.sub(sp);const len=dv.length();
      p.parent.worldToLocal(tgt.copy(sp).add(dv));const loc=tgt.sub(p.position);
      p.quaternion.setFromUnitVectors(new THREE.Vector3(0,-1,0),loc.clone().normalize());p.scale.y=clamp(loc.length()/.66,.7,1.5)})}}
}
