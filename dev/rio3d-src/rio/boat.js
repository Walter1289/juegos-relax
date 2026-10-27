/* Canoa y remero: casco, remos, personaje con sombrero de paja (3ª persona), y su animación por fotograma. */
import {toonGrad,tex} from '../style.js';
import * as THREE from 'three';
import {clamp} from './util.js';
import {P,S} from './state.js';
import {MT,scene,spr} from './core.js';
const MTc=MT;
/* ---------- canoa en primera persona ---------- */
/* Inspirada en las barcas fluviales japonesas: casco de tablones con proa alta que se curva hacia arriba, popa baja y recta, borda clara, farol de papel colgante. */
export const boat=new THREE.Group();scene.add(boat);
const ZS=1.4,ZB=-3.4,NST=26,PF=[[0,0],[.3,.03],[.62,.1],[.88,.3],[1,.62],[1.04,.9],[1.06,1]],PN=PF.length;
const bw=u=>.9*(u<.3?.62+.14*Math.sin(u/.3*Math.PI/2):Math.max(.03,.76*Math.pow(Math.max(0,1-Math.pow((u-.3)/.7,2.2)),.65)));
const sheerH=u=>.46+.14*Math.pow(1-u,3)+.64*Math.pow(Math.max(0,(u-.55)/.45),2.6);
const keelY=u=>-.2+.34*Math.pow(Math.max(0,(u-.6)/.4),2)+.08*Math.pow(1-u,2);
const zAt=u=>ZS+(ZB-ZS)*u;
function rowPts(u,inner){const b=bw(u),h=sheerH(u),k=keelY(u),o=[];
  const pt=(f,sx)=>inner?[sx*(f[0]*b*.94-(f[0]>0?.045:0)),k+.06+f[1]*(h-k-.06)]:[sx*f[0]*b,k+f[1]*(h-k)];
  for(let i=PN-1;i>=1;i--)o.push(pt(PF[i],-1));o.push(pt(PF[0],1));for(let i=1;i<PN;i++)o.push(pt(PF[i],1));return o}
function gridGeo(rows,uvK){ // rows: [{z,pts:[[x,y]..]}] → superficie con UV (largo, arco)
  const W=rows[0].pts.length,pos=[],uv=[],idx=[];let L=0;
  rows.forEach((r,si)=>{if(si)L+=Math.abs(r.z-rows[si-1].z);let arc=0;r.pts.forEach((p,i)=>{if(i){const q=r.pts[i-1];arc+=Math.hypot(p[0]-q[0],p[1]-q[1])}pos.push(p[0],p[1],r.z);uv.push(L*uvK,arc*uvK)})});
  for(let s=0;s<rows.length-1;s++)for(let i=0;i<W-1;i++){const a=s*W+i,b2=a+1,c=a+W,d=c+1;idx.push(a,c,b2,b2,c,d)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g}
const stIdx=[...Array(NST+1).keys()],uOf=i=>i/NST;
const hullPlank=new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0x9c6a48,emissive:0x2a1a10,map:tex('plank'),side:THREE.DoubleSide});
const hullIn=new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xb98a62,emissive:0x2a1a10,map:tex('plank'),side:THREE.DoubleSide});
const woodD=MTc(0x6e4a34,{map:tex('wood')}),trim=MTc(0xd9b98c,{map:tex('woodV')}),plk=MTc(0xc89a74,{map:tex('plank'),side:THREE.DoubleSide});
{boat.add(new THREE.Mesh(gridGeo(stIdx.map(i=>({z:zAt(uOf(i)),pts:rowPts(uOf(i),false)})),.8),hullPlank));
  boat.add(new THREE.Mesh(gridGeo(stIdx.map(i=>({z:zAt(uOf(i)),pts:rowPts(uOf(i),true)})),.8),hullIn));
  // cinta de borda (parte superior entre el casco exterior e interior)
  [-1,1].forEach(sx=>{const rows=stIdx.map(i=>{const o=rowPts(uOf(i),false),n=rowPts(uOf(i),true),k=sx<0?0:o.length-1;return{z:zAt(uOf(i)),pts:[o[k],n[k]]}});boat.add(new THREE.Mesh(gridGeo(rows,.8),trim))});
  // espejo de popa (cierre trasero)
  {const o=rowPts(0,false),pos=[0,(keelY(0)+sheerH(0))/2,ZS],idx=[];o.forEach(p=>pos.push(p[0],p[1],ZS));for(let i=1;i<o.length;i++)idx.push(0,i,i+1);
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();boat.add(new THREE.Mesh(g,hullPlank))}
  // borda (tubo de madera clara siguiendo el borde, con un leve resalte en la proa)
  [-1,1].forEach(sx=>{const cv=new THREE.CatmullRomCurve3(stIdx.map(i=>{const u=uOf(i);return new THREE.Vector3(sx*bw(u)*1.06,sheerH(u)+.012,zAt(u))}));
    boat.add(new THREE.Mesh(new THREE.TubeGeometry(cv,50,.034,6,false),trim))});
  // piso de tablones
  {const rows=stIdx.map(i=>{const u=uOf(i),b=bw(u)*.7,y=keelY(u)+.22;return{z:zAt(u),pts:[[-b,y],[b,y]]}});const fg=gridGeo(rows,.8);boat.add(new THREE.Mesh(fg,plk))}
  // travesaños (bancos) a lo ancho
  [[-1.55,.3],[-2.25,.4],[.55,.34],[-.55,.3]].forEach(([z,y])=>{const u=(ZS-z)/(ZS-ZB),w=bw(u)*1.72;const t=new THREE.Mesh(new THREE.BoxGeometry(w,.045,.14),z===.55?plk:trim);t.position.set(0,y+.1,z);boat.add(t)});
  // cuerdas atadas a la proa y rollo de cuerda
  const rope=new THREE.Mesh(new THREE.TorusGeometry(.2,.04,6,14),MTc(0xd9c392));rope.rotation.x=Math.PI/2;rope.scale.setScalar(.7);rope.position.set(.3,.3,-2.2);boat.add(rope);
  const rope2=rope.clone();rope2.scale.setScalar(.6);rope2.position.set(.3,.34,-2.2);boat.add(rope2);
  [.55,.7,.85].forEach(u=>{const z=zAt(u),b=bw(u)*1.06,h=sheerH(u);const l=new THREE.Mesh(new THREE.TorusGeometry(b*.55,.012,4,16,Math.PI),MTc(0xd9c392));l.rotation.set(0,Math.PI/2,0);l.rotation.z=Math.PI;l.position.set(0,h-.2,z);l.scale.set(1,.5,1);/* costilla de cuerda */boat.add(l)});
  // remate de proa (adorno)
  const bw2=new THREE.Mesh(new THREE.SphereGeometry(.06,8,6),woodD);bw2.position.set(0,sheerH(1)+.03,ZB+.02);boat.add(bw2)}
const cargoMs=[];
{const nm=MTc(0x8a7b5e,{map:tex('cloth')}),pm=MTc(0xa88a5c,{map:tex('woodV')});
  [[-.35,.4,-1.55,.34],[-.05,.38,-1.35,.28],[-.3,.36,-1.1,.26]].forEach(([x,y,z,r])=>{const n=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),nm);n.scale.set(1.1,.65,1);n.position.set(x,y,z);boat.add(n);cargoMs.push(n)});
  // pértiga de bambú con nudos
  const bg=new THREE.Group();bg.position.set(-.52,.46,-1.9);bg.rotation.set(Math.PI/2,0,0);boat.add(bg);
  const bp=new THREE.Mesh(new THREE.CylinderGeometry(.025,.035,4.6,8),pm);bg.add(bp);
  for(let k=-4;k<=4;k++){const nd=new THREE.Mesh(new THREE.TorusGeometry(.036-k*.0007,.007,4,8),MTc(0x6f5a34));nd.rotation.x=Math.PI/2;nd.position.y=k*.5;bg.add(nd)}}
/* farol de papel (chōchin) colgado de un poste curvo en la proa */
const lanternG=new THREE.Group();lanternG.position.set(0,1.46,-3.28);boat.add(lanternG);
const postM=MTc(0x5c3d2a,{map:tex('woodV')});
{const post=new THREE.Mesh(new THREE.CylinderGeometry(.028,.04,.95,6),postM);post.position.set(0,sheerH(.9)+.45,-2.95);boat.add(post);
  const arm=new THREE.Mesh(new THREE.TorusGeometry(.2,.022,5,12,Math.PI*.55),postM);arm.rotation.set(0,Math.PI/2,0);arm.rotation.z=-.6;arm.position.set(0,sheerH(.9)+.9,-3.05);boat.add(arm)}
export const bl=new THREE.Mesh(new THREE.SphereGeometry(.15,16,12),new THREE.MeshBasicMaterial({color:0xffe2a8}));bl.scale.set(1,1.3,1);bl.position.set(0,-.18,0);lanternG.add(bl);
{const rib=MTc(0x7a3a24);[-.17,-.09,0,.09,.17].forEach(y=>{const r=.15*Math.sqrt(Math.max(0,1-Math.pow(y/.195,2)))+.004;const t=new THREE.Mesh(new THREE.TorusGeometry(r,.0055,4,18),rib);t.rotation.x=Math.PI/2;t.position.y=-.18+y;lanternG.add(t)});
  [.215,-.215].forEach(y=>{const c=new THREE.Mesh(new THREE.CylinderGeometry(.075,.075,.035,10),rib);c.position.y=-.18+y;lanternG.add(c)});
  const cord=new THREE.Mesh(new THREE.CylinderGeometry(.006,.006,.2,3),rib);cord.position.y=.02;lanternG.add(cord);
  const tas=new THREE.Mesh(new THREE.ConeGeometry(.02,.1,6),MTc(0xb8432e));tas.position.y=-.45;lanternG.add(tas)}
export const blGlow=spr(0xffc77a,2.4);blGlow.position.set(0,-.18,0);lanternG.add(blGlow);
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
{const indigo=MTc(0x26365a,{map:tex('cloth')}),indigoL=MTc(0x4d6590,{map:tex('cloth')}),pants=MTc(0x2a3148,{map:tex('cloth')}),skin=MTc(0xd9a982),
  kasa=MTc(0xe4c27e,{map:tex('straw'),side:THREE.DoubleSide}),kasaD=MTc(0xb48a4a,{map:tex('straw'),side:THREE.DoubleSide}),hair=MTc(0x24212a),mino=MTc(0xb8944f,{map:tex('straw'),side:THREE.DoubleSide}),minoD=MTc(0x8f6f3a,{map:tex('straw'),side:THREE.DoubleSide}),cord=MTc(0xa83a2c),wrap=MTc(0xd8d0bc,{map:tex('cloth')});
  // piernas cruzadas con pantalón recogido y tobillos envueltos
  const lg=new THREE.Mesh(new THREE.SphereGeometry(.5,16,12),pants);lg.scale.set(1.2,.42,.85);lg.position.y=-.1;me.add(lg);
  [-1,1].forEach(sd=>{const k=new THREE.Mesh(new THREE.SphereGeometry(.17,10,8),pants);k.position.set(sd*.5,-.02,-.3);me.add(k);
    const sh=new THREE.Mesh(new THREE.CylinderGeometry(.1,.12,.5,8),pants);sh.rotation.x=Math.PI/2;sh.rotation.z=sd*.15;sh.position.set(sd*.4,-.05,-.1);me.add(sh);
    const ft=new THREE.Mesh(new THREE.SphereGeometry(.11,8,6),wrap);ft.scale.set(.9,.6,1.4);ft.position.set(sd*.22,-.12,-.42);me.add(ft)});
  // torso: chaqueta añil con solapa cruzada (happi) y faja de cuerda
  const bd=new THREE.Mesh(new THREE.CylinderGeometry(.3,.4,.8,14),indigo);bd.position.y=.42;torso.add(bd);
  const obi=new THREE.Mesh(new THREE.TorusGeometry(.37,.05,6,18),wrap);obi.rotation.x=Math.PI/2;obi.position.y=.1;torso.add(obi);
  const knot=new THREE.Mesh(new THREE.SphereGeometry(.06,6,5),wrap);knot.position.set(.1,.1,.37);torso.add(knot);
  [-1,1].forEach(sd=>{const lp=new THREE.Mesh(new THREE.BoxGeometry(.1,.62,.04),indigoL);lp.position.set(sd*.08,.5,.33);lp.rotation.z=sd*.45;torso.add(lp)});
  const sd2=new THREE.Mesh(new THREE.SphereGeometry(.44,14,10),indigo);sd2.scale.set(1,.45,.7);sd2.position.y=.78;torso.add(sd2);
  const nk=new THREE.Mesh(new THREE.CylinderGeometry(.09,.1,.16,8),skin);nk.position.y=.95;torso.add(nk);
  // mino: capa de paja en capas sobre hombros y espalda
  [[.88,.5,.3],[.66,.58,.34],[.44,.66,.36],[.24,.72,.34]].forEach(([y,r,h],i)=>{const m=new THREE.Mesh(new THREE.ConeGeometry(r,h,24,1,true),i%2?minoD:mino);m.position.set(0,y,-.1);m.rotation.x=-.12;m.scale.set(1,1,.85);torso.add(m)});
  // cabeza: cara, moño y cinta
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.21,16,12),skin);hd.position.y=.2;head.add(hd);
  const hr=new THREE.Mesh(new THREE.SphereGeometry(.22,16,10,0,Math.PI*2,0,Math.PI*.55),hair);hr.position.set(0,.2,-.02);hr.rotation.x=-.45;head.add(hr);
  const tk=new THREE.Mesh(new THREE.SphereGeometry(.07,8,6),hair);tk.position.set(0,.42,-.12);head.add(tk);
  [-1,1].forEach(sd=>{const ey=new THREE.Mesh(new THREE.SphereGeometry(.022,6,4),hair);ey.position.set(sd*.07,.2,.195);head.add(ey)});
  // kasa: sombrero cónico ancho, con anillos de bambú y cordón rojo bajo la barbilla
  const ht=new THREE.Mesh(new THREE.ConeGeometry(.7,.4,32,1,true),kasa);ht.position.y=.12;hatG.add(ht);
  [.2,.38,.56,.74].forEach(f=>{const r=new THREE.Mesh(new THREE.TorusGeometry(.7*f+.02,.009,4,32),kasaD);r.rotation.x=Math.PI/2;r.position.y=.12+.2-.4*f+.002;hatG.add(r)});
  const tp=new THREE.Mesh(new THREE.ConeGeometry(.07,.07,8),kasaD);tp.position.y=.34;hatG.add(tp);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.695,.02,6,32),kasaD);rim.rotation.x=Math.PI/2;rim.position.y=-.08;hatG.add(rim);
  [-1,1].forEach(s2=>{const st=new THREE.Mesh(new THREE.CylinderGeometry(.009,.009,.34,4),cord);st.position.set(s2*.17,-.2,.05);st.rotation.z=s2*.12;hatG.add(st)});
  const kn=new THREE.Mesh(new THREE.SphereGeometry(.03,6,5),cord);kn.position.set(0,-.34,.16);hatG.add(kn);
  [-1,1].forEach(side=>{const p=new THREE.Group();p.position.set(side*.42,.75,0);torso.add(p);
    const a=new THREE.Mesh(new THREE.CylinderGeometry(.1,.075,.6,10),indigo);a.position.y=-.3;p.add(a);
    const h=new THREE.Mesh(new THREE.SphereGeometry(.085,10,8),skin);h.position.y=-.63;p.add(h);
    const cf=new THREE.Mesh(new THREE.TorusGeometry(.082,.022,5,10),wrap);cf.rotation.x=Math.PI/2;cf.position.y=-.53;p.add(cf);
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
