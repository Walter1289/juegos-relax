/* Canoa y lanchero: casco, remos, personaje (3ª persona) y su animación por fotograma.
   Movimiento: la canoa se mece con muelles (no con senos fijos), el farol cuelga como un péndulo y el lanchero rema con brazos articulados,
   respira, mira alrededor y descansa entre remadas. */
import {toonGrad,tex,gustAt,bake} from '../style.js';
import * as THREE from 'three';
import {clamp} from './util.js';
import {P,S} from './state.js';
import {MT,scene,spr,R,cam} from './core.js';
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
  {const rows=stIdx.map(i=>{const u=uOf(i),b=bw(u)*.84-.03,y=keelY(u)+.34;/* el piso queda siempre por encima del agua: antes rozaba la superficie y el río «entraba» en la canoa al cabecear */return{z:zAt(u),pts:[[-b,y],[b,y]]}});const fg=gridGeo(rows,.8);boat.add(new THREE.Mesh(fg,plk))}
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
  [[-.35,.4,-1.55,.34],[-.05,.38,-1.35,.28],[-.3,.36,-1.1,.26]].forEach(([x,y,z,r])=>{const n=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),nm);n.scale.set(1.1,.65,1);n.position.set(x,y,z);n.userData.dyn=true;boat.add(n);cargoMs.push(n)});
  // pértiga de bambú con nudos
  const bg=new THREE.Group();bg.position.set(-.52,.46,-1.9);bg.rotation.set(Math.PI/2,0,0);boat.add(bg);
  const bp=new THREE.Mesh(new THREE.CylinderGeometry(.025,.035,4.6,8),pm);bg.add(bp);
  for(let k=-4;k<=4;k++){const nd=new THREE.Mesh(new THREE.TorusGeometry(.036-k*.0007,.007,4,8),MTc(0x6f5a34));nd.rotation.x=Math.PI/2;nd.position.y=k*.5;bg.add(nd)}}
/* farol de papel (chōchin) colgado de un poste curvo en la proa */
const lanternG=new THREE.Group();lanternG.position.set(0,1.46,-3.28);boat.add(lanternG);
const postM=MTc(0x5c3d2a,{map:tex('woodV')});
{const post=new THREE.Mesh(new THREE.CylinderGeometry(.028,.04,.95,6),postM);post.position.set(0,sheerH(.9)+.45,-2.95);boat.add(post);
  const arm=new THREE.Mesh(new THREE.TorusGeometry(.2,.022,5,12,Math.PI*.55),postM);arm.rotation.set(0,Math.PI/2,0);arm.rotation.z=-.6;arm.position.set(0,sheerH(.9)+.9,-3.05);boat.add(arm)}
export const bl=new THREE.Mesh(new THREE.SphereGeometry(.15,16,12),new THREE.MeshBasicMaterial({color:0xffe2a8}));bl.scale.set(1,1.3,1);bl.position.set(0,-.18,0);bl.userData.dyn=true;lanternG.add(bl);
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
/* ---------- lanchero ----------
   Proporciones reales (sentado mide ~0,9 m sobre el banco; el kasa mide menos que la manga de la canoa), hanten añil con mon blanco,
   hachimaki, tekkō en las muñecas y brazos de dos huesos (hombro–codo–muñeca) que agarran de verdad el remo. */
const SC=1.12,me=new THREE.Group();boat.add(me);me.position.set(0,.47,.55);me.scale.setScalar(SC);
const torso=new THREE.Group();torso.position.y=.1;me.add(torso);
const head=new THREE.Group();head.position.y=.615;torso.add(head);
const hatG=new THREE.Group();hatG.position.y=.15;head.add(hatG);
const tails=new THREE.Group();tails.position.set(0,.135,.1);head.add(tails);
const _Y=new THREE.Vector3(0,1,0),_D=new THREE.Vector3(0,-1,0),_Z=new THREE.Vector3(0,0,1);
const seg=(par,a,b,r0,r1,mat,rs)=>{const A=new THREE.Vector3(a[0],a[1],a[2]),B=new THREE.Vector3(b[0],b[1],b[2]),m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r0,A.distanceTo(B),rs||8,1),mat);
  m.position.copy(A).add(B).multiplyScalar(.5);m.quaternion.setFromUnitVectors(_Y,B.sub(A).normalize());par.add(m);return m};
const ball=(par,p,r,mat,sx,sy,sz,ws,hs)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(r,ws||10,hs||8),mat);m.position.set(p[0],p[1],p[2]);if(sx)m.scale.set(sx,sy,sz);par.add(m);return m};
const L1=.26,L2=.27,SH=[new THREE.Vector3(-.2,.44,0),new THREE.Vector3(.2,.44,0)],arms=[],eyes=[];
{const indigo=MTc(0x2b4a82,{map:tex('cloth')}),indigoD=MTc(0x223c6c,{map:tex('cloth')}),indigoL=MTc(0x7c9bcc,{map:tex('cloth')}),pants=MTc(0x2a3148,{map:tex('cloth')}),skin=MTc(0xdcae88),skinD=MTc(0xc99873),
  kasa=MTc(0xe4c27e,{map:tex('straw'),side:THREE.DoubleSide}),kasaD=MTc(0xb48a4a,{map:tex('straw')}),hair=MTc(0x24212a),cord=MTc(0xa83a2c),wrap=MTc(0xe2dac6,{map:tex('cloth')}),wm=MTc(0xf2efe6,{side:THREE.DoubleSide});
  // piernas cruzadas: muslo, rodilla, espinilla y pie con tabi
  ball(me,[0,.09,.03],.17,pants,1.25,.6,1);
  [-1,1].forEach(sd=>{const hip=[sd*.09,.09,.02],knee=[sd*.33,.085,-.27],ank=[-sd*.07,.06+(sd>0?.03:0),-.37];
    seg(me,hip,knee,.088,.07,pants);ball(me,knee,.074,pants);seg(me,knee,ank,.066,.05,pants);ball(me,[ank[0]-sd*.05,ank[1],ank[2]-.01],.055,wrap,1.5,.62,.85)});
  // torso torneado (cintura, pecho, hombros caídos) y aplanado de pecho a espalda, con faldón del hanten
  const prof=[[.212,-.07],[.2,0],[.174,.1],[.17,.16],[.186,.26],[.2,.36],[.196,.42],[.158,.482],[.085,.52],[.05,.555]].map(([r,y])=>new THREE.Vector2(r,y));
  const bd=new THREE.Mesh(new THREE.LatheGeometry(prof,18),indigo);bd.scale.z=.74;torso.add(bd);
  const hem=new THREE.Mesh(new THREE.CylinderGeometry(.208,.214,.028,18,1,true),wm);hem.position.y=-.05;hem.scale.z=.74;torso.add(hem);
  const obi=new THREE.Mesh(new THREE.TorusGeometry(.176,.021,6,20),wrap);obi.rotation.x=Math.PI/2;obi.position.y=.125;obi.scale.y=.76;torso.add(obi);
  ball(torso,[.04,.125,-.14],.028,wrap);seg(torso,[.04,.12,-.142],[.07,.04,-.15],.012,.008,wrap,5);seg(torso,[.04,.12,-.142],[.015,.035,-.152],.012,.008,wrap,5);
  // solapas cruzadas (izquierda sobre derecha) y cuello interior claro
  [-1,1].forEach(sd=>{const cv=new THREE.CatmullRomCurve3([new THREE.Vector3(sd*.07,.515,-.02),new THREE.Vector3(sd*.085,.44,-.118),new THREE.Vector3(sd*.06,.31,-.143),new THREE.Vector3(-sd*.02,.15,-.132)]);
    const t=new THREE.Mesh(new THREE.TubeGeometry(cv,10,sd>0?.02:.017,5,false),indigoL);torso.add(t)});
  {const cv=new THREE.CatmullRomCurve3([new THREE.Vector3(-.05,.53,-.01),new THREE.Vector3(0,.455,-.085),new THREE.Vector3(.05,.53,-.01)]);torso.add(new THREE.Mesh(new THREE.TubeGeometry(cv,8,.013,5,false),wm))}
  // espalda: mon blanco (anillo con punto) siguiendo la curva de la espalda
  const mon=new THREE.Mesh(new THREE.RingGeometry(.04,.078,22),wm);mon.position.set(0,.31,.147);mon.rotation.x=-.04;torso.add(mon);
  const mon2=new THREE.Mesh(new THREE.CircleGeometry(.018,12),wm);mon2.position.set(0,.31,.148);torso.add(mon2);
  seg(torso,[0,.53,0],[0,.62,-.005],.05,.045,skin);
  // cabeza: cráneo, mandíbula suave, orejas, cara sencilla, pelo recogido y hachimaki con las puntas sueltas
  ball(head,[0,.1,0],.105,skin,.95,1.06,1,14,12);ball(head,[0,.05,-.02],.08,skin,.95,.9,1);
  [-1,1].forEach(sd=>{ball(head,[sd*.098,.09,.012],.022,skinD,.6,1,.8,6,5);
    const ey=ball(head,[sd*.038,.1,-.094],.013,hair,1.25,.85,.5,6,5);ey.userData.dyn=true;eyes.push(ey);
    const br=new THREE.Mesh(new THREE.BoxGeometry(.034,.006,.008),hair);br.position.set(sd*.04,.128,-.096);br.rotation.z=-sd*.16;head.add(br)});
  ball(head,[0,.082,-.103],.014,skinD,.9,1.1,1,6,5);
  {const mo=new THREE.Mesh(new THREE.BoxGeometry(.03,.004,.006),skinD);mo.position.set(0,.05,-.096);head.add(mo)}
  const hr=new THREE.Mesh(new THREE.SphereGeometry(.111,14,10,0,Math.PI*2,0,Math.PI*.56),hair);hr.position.set(0,.102,.012);hr.rotation.x=.5;head.add(hr);
  seg(head,[0,.2,.035],[0,.235,-.02],.022,.018,hair,6);
  const hb=new THREE.Mesh(new THREE.TorusGeometry(.103,.011,5,20),wm);hb.rotation.x=Math.PI/2+.1;hb.position.y=.137;head.add(hb);
  [-1,1].forEach(sd=>{const t=new THREE.Mesh(new THREE.BoxGeometry(.022,.12,.004).translate(0,-.06,0),wm);t.position.x=sd*.014;t.rotation.z=sd*.14;tails.add(t)});
  // kasa: cono ancho (0,8 m) con aros de bambú, remate y cordón rojo anudado bajo la barbilla
  const ht=new THREE.Mesh(new THREE.ConeGeometry(.4,.2,30,1,true),kasa);ht.position.y=.1;hatG.add(ht);
  [.25,.5,.75].forEach(f=>{const r=new THREE.Mesh(new THREE.TorusGeometry(.4*f+.006,.005,4,28),kasaD);r.rotation.x=Math.PI/2;r.position.y=.2-.2*f+.002;hatG.add(r)});
  const tp=new THREE.Mesh(new THREE.ConeGeometry(.04,.045,8),kasaD);tp.position.y=.215;hatG.add(tp);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.398,.011,5,30),kasaD);rim.rotation.x=Math.PI/2;hatG.add(rim);
  [-1,1].forEach(sd=>seg(hatG,[sd*.1,.02,.0],[sd*.012,-.225,-.07],.005,.005,cord,4));ball(hatG,[0,-.228,-.072],.014,cord,1,1,1,6,5);
  // brazos: manga ancha hasta el codo, antebrazo con tekkō y mano
  [-1,1].forEach((sd,i)=>{const up=new THREE.Group(),fo=new THREE.Group();torso.add(up,fo);
    ball(up,[0,0,0],.068,indigo);const sl=new THREE.Mesh(new THREE.CylinderGeometry(.064,.08,L1+.02,10,1).translate(0,-(L1+.02)/2,0),indigo);up.add(sl);
    const cuff=new THREE.Mesh(new THREE.CylinderGeometry(.079,.086,.085,10,1,true).translate(0,-.03,0),indigoD);cuff.material.side=THREE.DoubleSide;fo.add(cuff);
    const fa=new THREE.Mesh(new THREE.CylinderGeometry(.041,.032,.25,8,1).translate(0,-.125,0),skin);fo.add(fa);
    const tk=new THREE.Mesh(new THREE.CylinderGeometry(.039,.035,.1,8,1).translate(0,-.185,0),wrap);fo.add(tk);
    ball(fo,[0,-L2,0],.043,skin,1,1.15,.82);
    arms.push({up,fo,t:new THREE.Vector3(sd*.2,.15,-.2)})})}
/* remo de 3ª persona: 1,7 m (antes 2,3 m): pala de hoja, caña y empuñadura en T */
const cPad=new THREE.Group();boat.add(cPad);const PADL=1.5;
{const m1=MTc(0xb98a56,{map:tex('woodV')}),m2=MTc(0xcf8d74,{map:tex('plank')});const sh=new THREE.Mesh(new THREE.CylinderGeometry(.019,.021,1.3,6),m1);sh.rotation.x=Math.PI/2;sh.position.z=.65;cPad.add(sh);
  const bl2=new THREE.Mesh(new THREE.CylinderGeometry(.085,.06,.46,8,1),m2);bl2.rotation.x=Math.PI/2;bl2.scale.set(1,1,.16);bl2.position.z=1.5;cPad.add(bl2);
  const tip=new THREE.Mesh(new THREE.SphereGeometry(.085,8,6),m2);tip.scale.set(1,.16,.5);tip.position.z=1.73;cPad.add(tip);
  const gr=new THREE.Mesh(new THREE.CylinderGeometry(.018,.018,.11,6),m1);gr.rotation.z=Math.PI/2;gr.position.z=-.01;cPad.add(gr)}
/* piezas estáticas fusionadas por material: la canoa y el lanchero pasan de más de cien mallas a unas treinta */
[boat,lanternG,me,torso,head,hatG,tails,cPad,...arms.flatMap(a=>[a.up,a.fo]),...boat.children.filter(o=>o.isGroup&&o!==me&&o!==lanternG&&o!==cPad&&!paddles.includes(o))].forEach(g=>bake(g));
paddles.forEach(w=>bake(w.children[0]));
/* ---------- dinámica de la canoa ---------- */
const BD={roll:0,rollV:0,pitch:0,pitchV:0,lx:0,lxv:0,lz:0,lzv:0,v0:0,t0:0,sr:0,sp:0};
const calmK=()=>{try{return window.UX&&UX.calm&&UX.calm()?.4:1}catch(e){return 1}};
/* coloca la canoa en el agua; devuelve el balanceo (bob) que usa la cámara.
   El alabeo y el cabeceo son muelles amortiguados: responden al giro y a la remada con un poco de inercia y se asientan solos. */
export function placeBoat(){
  const t=P.t,dt=Math.min(.05,Math.max(0,t-BD.t0));BD.t0=t;const ck=calmK();
  const bob=Math.sin(t*.9)*.03+Math.sin(t*1.7)*.012+Math.sin(t*.53+1)*.01;
  const yr=P.yawr||0,acc=dt>0?(P.v-BD.v0)/dt:0;BD.v0=P.v;
  const tr=-P.steer*.05-yr*.11+BD.sr+(Math.sin(t*.7)*.008+Math.sin(t*1.13+2)*.006)*ck,tp=-Math.abs(yr)*.045+BD.sp+clamp(acc,-2,2)*.012+(Math.sin(t*.8)*.004+Math.sin(t*.47+.6)*.005)*ck;
  BD.rollV+=((tr-BD.roll)*30-BD.rollV*6.6)*dt;BD.roll+=BD.rollV*dt;
  BD.pitchV+=((tp-BD.pitch)*24-BD.pitchV*6)*dt;BD.pitch+=BD.pitchV*dt;
  boat.position.set(P.px,bob*.6,P.pz);boat.rotation.order='YXZ';boat.rotation.set(BD.pitch,-P.psi,BD.roll);
  /* farol: péndulo de 0,3 m que responde a los giros, a los cambios de velocidad y a las rachas */
  {const w2=32,dp=1.5,gu=(gustAt(P.px,P.pz)-.4)*.05*ck;
    BD.lzv+=(-w2*BD.lz-dp*BD.lzv+(yr*Math.max(.6,P.v)*1.4-BD.rollV*2.2+gu*8)*ck)*dt;BD.lz=clamp(BD.lz+BD.lzv*dt,-.5,.5);
    BD.lxv+=(-w2*BD.lx-dp*BD.lxv+(clamp(acc,-3,3)*1.6+BD.pitchV*2.2+gu*5)*ck)*dt;BD.lx=clamp(BD.lx+BD.lxv*dt,-.4,.4);
    lanternG.rotation.set(BD.lx,0,BD.lz)}
  boat.updateMatrixWorld(true);
  return bob}
/* remos en primera persona (el del lado hacia el que giras se hunde como timón) */
const padK=[0,0],_pb=new THREE.Vector3(),_pt=new THREE.Vector3(),pv=new THREE.Vector3();
export function updatePaddles(){
  paddles.forEach((w,i)=>{
    const sx=i?1:-1,kt=clamp(P.steer*sx,0,1);padK[i]+=(kt-padK[i])*.12;const k=padK[i]*padK[i]*(3-2*padK[i]);
    const B=_pb.copy(REST[i]);B.y+=Math.sin(P.t*.83+i*2.1)*.008;
    B.lerp(_pt.set(sx*1.25,-.1,-.9+Math.sin(P.t*1.3+i)*.08),k);
    const dv=pv.copy(B).sub(HD[i]).normalize();
    w.quaternion.setFromUnitVectors(_Z,dv);w.position.copy(B).addScaledVector(dv,-1.55);
  });
}
/* personaje y remo en 3ª persona */
let warmed=false;
/* precalienta lo que solo se ve en 3ª persona (shaders y texturas) para que el primer cambio de cámara no dé un tirón */
function warmUp(){warmed=true;try{const vs=[me,cPad,...cargoMs];vs.forEach(o=>o.visible=true);R.compile(scene,cam);
  vs.forEach(o=>o.traverse(m=>{if(m.isMesh){const mm=m.material;if(mm&&mm.map)R.initTexture(mm.map)}}));
  me.visible=cPad.visible=false;cargoMs.forEach(n=>n.visible=false)}catch(e){}}
/* estado de la animación */
const AN={padX:1,th:3.6,left:2,rest:1.5,T:new THREE.Vector3(.78,-.1,1.2),H:new THREE.Vector3(0,.95,.35),ry:0,rx:0,rz:0,gy:0,gyv:0,gp:0,gpv:0,gyT:0,gpT:0,gT:2,blink:3,hv:0,lag:0};
const _a=new THREE.Vector3(),_b=new THREE.Vector3(),_c=new THREE.Vector3(),_d=new THREE.Vector3(),_e=new THREE.Vector3(),_n=new THREE.Vector3(),_t1=new THREE.Vector3(),_t2=new THREE.Vector3(),_q=new THREE.Quaternion();
/* cinemática inversa de dos huesos: hombro fijo, mano en el objetivo y codo hacia abajo y afuera */
function solveArm(i,T){const A=arms[i],S=SH[i],sd=i?1:-1;A.t.lerp(T,.35);
  _d.subVectors(A.t,S);let L=_d.length();const mx=(L1+L2)*.995;if(L>mx){_d.multiplyScalar(mx/L);L=mx}if(L<.2){_d.set(0,-.14,-.14);L=_d.length()}
  const a=(L1*L1-L2*L2+L*L)/(2*L),h=Math.sqrt(Math.max(0,L1*L1-a*a));_n.copy(_d).divideScalar(L);
  _e.set(sd*.5,-1,.35);_e.addScaledVector(_n,-_e.dot(_n)).normalize();
  _c.copy(S).addScaledVector(_n,a).addScaledVector(_e,h);          // codo
  A.up.position.copy(S);A.up.quaternion.setFromUnitVectors(_D,_b.subVectors(_c,S).normalize());
  A.fo.position.copy(_c);A.fo.quaternion.setFromUnitVectors(_D,_b.copy(S).add(_d).sub(_c).normalize())}
const toTorso=v=>v.sub(me.position).divideScalar(SC).sub(torso.position).applyQuaternion(_q);
export function updateCharacter(dt){
  if(!warmed)warmUp();
  const tp=S.camK>.45||S.cineW>.15;me.visible=tp;cargoMs.forEach(n=>n.visible=tp);cPad.visible=tp;paddles.forEach(w=>w.visible=!tp);
  if(!tp){BD.sr*=.9;BD.sp*=.9;return}
  const t=P.t,z0=me.position.z,steering=Math.abs(P.steer)>.15,still=P.v<.45,ck=calmK(),e=k=>Math.min(1,dt*k);
  if(P.steer>.2)AN.padX=Math.min(1,AN.padX+dt*1.6);else if(P.steer<-.2)AN.padX=Math.max(-1,AN.padX+-dt*1.6);else AN.padX+=((AN.padX<0?-1:1)-AN.padX)*e(3);
  const px=AN.padX,sx=px<0?-1:1,cross=1-Math.abs(px);
  /* ritmo: una a tres remadas tranquilas y luego deja la pala a la rastra un rato; la corriente hace el resto */
  let pull=0;
  if(still||steering){AN.th+=(3.6-AN.th)*e(2.5);AN.left=1}
  else if(AN.rest>0){AN.rest-=dt;AN.th+=(3.6-AN.th)*e(2);if(AN.rest<=0){AN.th=3.6;AN.left=1+((Math.random()*3)|0)}}
  else{const w=Math.sin(AN.th)>0?3.3:2.3;AN.th+=dt*w*(.85+.15*Math.sin(t*.31));
    if(AN.th>6.2832+3.6){AN.th-=6.2832;if(--AN.left<=0)AN.rest=2.2+Math.random()*4}
    pull=Math.max(0,Math.sin(AN.th))}
  const th=AN.th,cs=Math.cos(th),sn=Math.sin(th);
  /* objetivo de la pala (centro) y de la mano de arriba, en coordenadas de la canoa */
  const cy=me.position.y+SC*.54;
  if(still){_a.set(sx*.74,.56,z0-.3);_b.set(-sx*.34,.64,z0-.34)}                                   // parado: remo cruzado sobre las bordas
  else if(steering){_a.set(sx*.74,-.2,z0+.78+Math.sin(t*1.2)*.05);_b.set(-sx*.03,cy-.18,z0-.32)}    // timón: pala hundida a popa
  else if(AN.rest>0){_a.set(sx*.76,-.07+Math.sin(t*.9)*.02,z0+.72);_b.set(-sx*.03,cy-.2,z0-.32)}  // descanso: pala a la rastra
  else{_a.set(sx*(.78+.05*Math.max(0,-sn)),-.04-(sn>0?.2:.15)*sn,z0+.08-.52*cs);_b.set(-sx*.03,cy-.2+.05*cs,z0-.36+.08*cs)}
  _a.x=px*Math.abs(_a.x);_a.y+=cross*.8;_b.x*=Math.abs(px);_b.y+=cross*.1;
  AN.T.lerp(_a,e(still?3:7));AN.H.lerp(_b,e(6));
  /* el remo tiene longitud fija: sale de la mano de arriba hacia la pala */
  _d.subVectors(AN.T,AN.H).normalize();_c.copy(AN.T).addScaledVector(_d,-PADL);
  _e.subVectors(_c,AN.H);if(_e.length()>.09)_e.setLength(.09);_c.copy(AN.H).add(_e);
  cPad.quaternion.setFromUnitVectors(_Z,_d);cPad.position.copy(_c);
  /* torso: gira con la remada, se inclina hacia la pala y respira */
  const br=Math.sin(t*1.25),sk=still||steering||AN.rest>0?0:1;
  AN.ry+=((sx*.24*cs*sk-P.steer*.2)*Math.abs(px)-AN.ry)*e(6);AN.rx+=((-.05-.09*cs*sk-Math.abs(P.steer)*.04)-AN.rx)*e(6);AN.rz+=((-sx*.07*pull-P.steer*.1)-AN.rz)*e(6);
  torso.rotation.set(AN.rx+br*.01,AN.ry,AN.rz+Math.sin(t*.6)*.012-BD.roll*.5);
  torso.scale.set(1+br*.012,1+br*.006,1+br*.022);
  BD.sr+=(-sx*.014*pull-BD.sr)*e(8);BD.sp+=(.006*cs*sk-BD.sp)*e(8);
  /* manos sobre el remo: la de arriba en la empuñadura, la de abajo medio metro más abajo, del lado de la pala */
  _q.copy(torso.quaternion).invert();
  const top=toTorso(_t1.copy(_c)),low=toTorso(_t2.copy(_c).addScaledVector(_d,.46));
  solveArm(sx>0?0:1,top);solveArm(sx>0?1:0,low);
  /* mirada: la cabeza no sigue al torso; cada pocos segundos elige algo que mirar y llega con un pequeño rebote */
  AN.gT-=dt;if(steering){AN.gyT=-P.steer*.5;AN.gpT=.03;AN.gT=1.2}
  else if(AN.gT<=0){AN.gT=2.5+Math.random()*5;const r=Math.random();if(r<.55){AN.gyT=(Math.random()-.5)*.3;AN.gpT=Math.random()*.08-.02}else if(r<.9){AN.gyT=(Math.random()<.5?-1:1)*(.45+Math.random()*.5);AN.gpT=Math.random()*.1}else{AN.gyT=(Math.random()-.5)*.4;AN.gpT=-.22}}
  AN.gyv+=((AN.gyT-AN.gy)*26-AN.gyv*8.2)*dt;AN.gy+=AN.gyv*dt;AN.gpv+=((AN.gpT-AN.gp)*26-AN.gpv*8.2)*dt;AN.gp+=AN.gpv*dt;
  head.rotation.set(AN.gp-AN.rx*.8+Math.sin(t*.5)*.015,AN.gy-AN.ry*.75+Math.sin(t*.35)*.03,-AN.rz*.6);
  /* movimiento secundario: el kasa llega tarde a los giros de la cabeza; las puntas del hachimaki ondean con el viento */
  AN.lag+=(AN.gyv+(P.yawr||0)-AN.lag)*e(5);hatG.rotation.set(-.06-Math.abs(AN.lag)*.03,0,clamp(AN.lag*.07,-.14,.14));
  {const g=gustAt(P.px,P.pz)*ck;tails.rotation.set(.25+g*.55+Math.sin(t*5.3)*.1*(.3+g),Math.sin(t*3.1)*.2*(.3+g),0)}
  AN.blink-=dt;{const k=AN.blink<.12?.15:1;eyes[0].scale.y=eyes[1].scale.y=.85*k;if(AN.blink<=0)AN.blink=2.5+Math.random()*4.5}
}
