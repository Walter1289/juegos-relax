/* Ornamentos japoneses reutilizables para interiores y jardines: armadura, biombo, pinturas, hogar irori, ikebana, pino podado, pila tsukubai,
   cerca de bambú, farol de papel, campanilla fūrin, cojines, musgo. Todo son mallas toon normales: optimizeLM las funde después por material. */
import * as THREE from 'three';
import {tex,toonGrad,lumpy,trunkGeo,tuftGeo} from '../style.js';
import {MT,spr} from './core.js';
import {bx,cyl,gl,rockGeo} from './lm-parts.js';
import {hash} from './util.js';
const TAU=6.2832,DS={side:THREE.DoubleSide};
/* ---------- pinturas (lienzo) ---------- */
const PT=new Map();
export function paintTex(kind,seed=1){const key=kind+seed;if(PT.has(key))return PT.get(key);const c=document.createElement('canvas'),W=c.width=kind==='sand'?512:256,Hh=c.height=kind==='sand'?512:256,x=c.getContext('2d');let r=seed*97+13;const rn=()=>{r=(r*16807)%2147483647;return r/2147483647};
  if(kind==='pine'||kind==='crane'||kind==='sakura'){/* pan de oro con nubes, y pino retorcido / grullas / rama de cerezo */
    const g=x.createLinearGradient(0,0,0,Hh);g.addColorStop(0,'#e8c66a');g.addColorStop(1,'#cfa648');x.fillStyle=g;x.fillRect(0,0,W,Hh);
    x.fillStyle='rgba(255,236,170,.55)';for(let i=0;i<7;i++){const cx=rn()*W,cy=rn()*Hh;for(let j=0;j<4;j++){x.beginPath();x.ellipse(cx+j*16-24,cy+Math.sin(j)*4,22,9,0,0,TAU);x.fill()}}
    x.strokeStyle='rgba(120,84,30,.25)';x.lineWidth=1;for(let i=1;i<4;i++){x.beginPath();x.moveTo(i*W/4,0);x.lineTo(i*W/4,Hh);x.stroke();x.beginPath();x.moveTo(0,i*Hh/4);x.lineTo(W,i*Hh/4);x.stroke()}
    if(kind==='pine'){x.strokeStyle='#4a3020';x.lineCap='round';x.lineWidth=13;x.beginPath();x.moveTo(40,Hh);x.bezierCurveTo(70,170,30,130,110,95);x.bezierCurveTo(150,78,170,90,215,60);x.stroke();x.lineWidth=7;x.beginPath();x.moveTo(84,140);x.bezierCurveTo(120,150,150,140,190,150);x.stroke();
      x.fillStyle='#3f6f4a';for(const [px,py,s] of[[110,80,1],[165,62,.9],[215,48,.8],[70,118,.7],[190,138,.85],[140,128,.6]])for(let j=0;j<3;j++){x.beginPath();x.ellipse(px+(j-1)*20*s,py-(j===1?7:0)*s,24*s,10*s,0,0,TAU);x.fill()}
      x.fillStyle='#5f9466';for(const [px,py,s] of[[110,76,1],[165,58,.9],[215,44,.8],[190,134,.85]]){x.beginPath();x.ellipse(px,py-5*s,18*s,5*s,0,0,TAU);x.fill()}
      x.fillStyle='#c2463a';x.beginPath();x.arc(206,200,20,0,TAU);x.fill()}
    else if(kind==='crane'){for(const [px,py,s,fl] of[[70,90,1,1],[160,60,.8,-1],[200,150,.9,1]]){x.save();x.translate(px,py);x.scale(s*fl,s);x.fillStyle='#fbf6ea';x.beginPath();x.moveTo(-46,-6);x.quadraticCurveTo(-10,-34,10,-4);x.quadraticCurveTo(34,-30,58,-22);x.quadraticCurveTo(30,-2,12,6);x.quadraticCurveTo(-8,10,-46,-6);x.fill();
        x.fillStyle='#2b2b2b';x.beginPath();x.moveTo(34,-22);x.lineTo(58,-22);x.lineTo(44,-12);x.fill();x.strokeStyle='#fbf6ea';x.lineWidth=4;x.beginPath();x.moveTo(-40,-6);x.quadraticCurveTo(-58,-14,-66,-26);x.stroke();x.fillStyle='#c2463a';x.beginPath();x.arc(-66,-27,4,0,TAU);x.fill();x.restore()}
      x.fillStyle='#3f6f4a';for(let i=0;i<5;i++){x.beginPath();x.ellipse(20+i*52,Hh-12,34,14,0,0,TAU);x.fill()}}
    else{x.strokeStyle='#4a3020';x.lineCap='round';x.lineWidth=8;x.beginPath();x.moveTo(0,200);x.bezierCurveTo(70,170,110,120,170,110);x.bezierCurveTo(200,104,220,70,256,60);x.stroke();x.lineWidth=4;x.beginPath();x.moveTo(110,135);x.quadraticCurveTo(130,80,170,50);x.stroke();
      for(let i=0;i<46;i++){const t=rn(),px=20+t*220+rn()*24-12,py=195-t*140+rn()*50-25;x.fillStyle=rn()<.5?'#f7b7c9':'#fbdbe4';x.beginPath();x.arc(px,py,5+rn()*4,0,TAU);x.fill()}}}
  else if(kind==='wave'){/* seigaiha: olas en índigo */x.fillStyle='#e9e2d0';x.fillRect(0,0,W,Hh);x.strokeStyle='#3f5a8a';x.lineWidth=2;const R=22;for(let j=Hh/11+2;j>=-1;j--)for(let i=-1;i<W/(R*2)+1;i++){const cx=i*R*2+(j%2?R:0),cy=j*11;x.fillStyle='#e9e2d0';x.beginPath();x.arc(cx,cy,R,Math.PI,TAU);x.fill();for(const q of[1,.72,.44]){x.beginPath();x.arc(cx,cy,R*q,Math.PI,TAU);x.stroke()}}}
  else if(kind==='asanoha'){/* celosía de hoja de cáñamo para los montantes (ranma) */x.fillStyle='#f1e6cc';x.fillRect(0,0,W,Hh);x.strokeStyle='#4b342a';x.lineWidth=3;const s=32,hh=s*.866;for(let j=-1;j<Hh/hh+1;j++)for(let i=-1;i<W/s+1;i++){const cx=i*s+(j%2?s/2:0),cy=j*hh;for(let k=0;k<6;k++){const a=k*TAU/6;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(a)*s,cy+Math.sin(a)*s);x.stroke()}}}
  else if(kind==='sand'){/* arena rastrillada: surcos rectos que rodean en anillos cada piedra (seed cambia el trazo) */x.fillStyle='#e6dfcf';x.fillRect(0,0,W,Hh);const rocks=[[.26,.4,.11],[.62,.3,.08],[.7,.68,.13]],ph=seed*1.7,wav=seed%3;
    x.lineWidth=2.2;for(let j=0;j<46;j++){const y0=j/46*Hh+5;x.strokeStyle=j%2?'rgba(150,138,112,.55)':'rgba(255,252,240,.6)';x.beginPath();for(let i=0;i<=W;i+=6){let y=y0+(wav===1?Math.sin(i*.035+ph)*7:wav===2?Math.sin(i*.012+ph)*14:0);x[i?'lineTo':'moveTo'](i,y)}x.stroke()}
    for(const [rx,ry,rr] of rocks){x.fillStyle='#e6dfcf';x.beginPath();x.arc(rx*W,ry*Hh,rr*W+26,0,TAU);x.fill();for(let q=0;q<5;q++){x.strokeStyle=q%2?'rgba(150,138,112,.6)':'rgba(255,252,240,.65)';x.beginPath();x.arc(rx*W,ry*Hh,rr*W+4+q*5,0,TAU);x.stroke()}}}
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;if(kind==='wave'||kind==='asanoha'){t.wrapS=t.wrapT=THREE.RepeatWrapping}PT.set(key,t);return t}
const pic=(h,w,ht,t,x,y,z,ry=0,em=.0)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,ht),new THREE.MeshToonMaterial({gradientMap:toonGrad,map:t,side:THREE.DoubleSide,emissive:new THREE.Color(0xffffff),emissiveMap:t,emissiveIntensity:.32+em}));m.position.set(x,y,z);m.rotation.y=ry;h.add(m);return m};
export {pic};
/* biombo plegable de n hojas en zigzag */
export function byobu(h,x,y,z,ry,n,kind,ht=1.7,pw=.8){const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=ry;h.add(g);const t=paintTex(kind),a=.38,dx=Math.cos(a)*pw;
  for(let i=0;i<n;i++){const tt=t.clone();tt.needsUpdate=true;tt.repeat.set(1/n,1);tt.offset.set(i/n,0);const p=pic(g,pw,ht,tt,(i-(n-1)/2)*dx,ht/2+.04,0,(i%2?1:-1)*a);const f=bx(g,pw+.04,.05,.03,0x2a2018,p.position.x,.03,0);f.rotation.y=p.rotation.y;const f2=bx(g,pw+.04,.05,.03,0x2a2018,p.position.x,ht+.06,0);f2.rotation.y=p.rotation.y}return g}
/* montante calado sobre un vano */
export function ranma(h,w,x,y,z,ry=0){const t=paintTex('asanoha').clone();t.needsUpdate=true;t.repeat.set(w/1.1,.42);pic(h,w,.46,t,x,y,z,ry,.1);const a=bx(h,w+.1,.06,.08,0x3a2a24,x,y+.26,z),b=bx(h,w+.1,.06,.08,0x3a2a24,x,y-.26,z);a.rotation.y=b.rotation.y=ry}
/* ---------- armadura (yoroi) sobre su arcón ---------- */
export function yoroi(h,x,y,z,rd=0x8d2a23){const gd=0xd9a85a,bk=0x2a2c33;bx(h,.62,.5,.46,0x3a2a24,x,y+.25,z);bx(h,.66,.05,.5,gd,x,y+.5,z);
  for(const sx of[-1,0,1])bx(h,.24,.36,.08,rd,x+sx*.25,y+.72,z+.2).rotation.x=-.18;for(const sx of[-1,1])bx(h,.08,.36,.3,rd,x+sx*.36,y+.72,z).rotation.z=sx*.18;
  const to=new THREE.Mesh(new THREE.CylinderGeometry(.3,.26,.56,10),MT(rd-0x130b07));to.scale.z=.62;to.position.set(x,y+1.2,z);h.add(to);for(const q of[.98,1.16,1.34])bx(h,.58,.03,.36,gd,x,y+q,z);
  for(const sx of[-1,1]){bx(h,.24,.4,.34,rd,x+sx*.42,y+1.28,z).rotation.z=sx*.3;bx(h,.25,.03,.35,gd,x+sx*.45,y+1.14,z).rotation.z=sx*.3}
  bx(h,.24,.2,.2,bk,x,y+1.6,z+.04);cyl(h,.3,.37,.14,rd,x,y+1.68,z-.03,10);const kb=new THREE.Mesh(new THREE.SphereGeometry(.23,10,8,0,TAU,0,1.7),MT(bk));kb.position.set(x,y+1.72,z);h.add(kb);bx(h,.34,.03,.14,bk,x,y+1.74,z+.22);
  const cr=new THREE.Mesh(new THREE.TorusGeometry(.2,.022,4,12,Math.PI),MT(gd,{emissive:0x5a3a10}));cr.position.set(x,y+1.86,z+.2);h.add(cr)}
/* ---------- hogar hundido (irori) con tetera de hierro colgada ---------- */
export function irori(h,x,y,z,top){for(const [w,d,ox,oz] of[[1.1,.12,0,.49],[1.1,.12,0,-.49],[.12,.86,.49,0],[.12,.86,-.49,0]])bx(h,w,.1,d,0x3a2a24,x+ox,y+.05,z+oz);bx(h,.86,.04,.86,0x8f8a80,x,y+.03,z);
  const e=bx(h,.3,.05,.3,0xff8a3a,x,y+.07,z);e.material=new THREE.MeshBasicMaterial({color:0xff9a4a});e.rotation.y=.6;for(let i=0;i<3;i++)cyl(h,.03,.035,.3,0x2a2420,x+Math.cos(i*2.1)*.12,y+.1,z+Math.sin(i*2.1)*.12,5).rotation.z=1.2;
  const s=spr(0xff9a4a,1.5);s.material.opacity=.55;s.position.set(x,y+.25,z);h.add(s);
  const kt=new THREE.Mesh(lumpy(new THREE.SphereGeometry(.2,10,8),.012,6,3),MT(0x2e3036));kt.scale.y=.82;kt.position.set(x,y+.62,z);h.add(kt);cyl(h,.07,.09,.04,0x24262b,x,y+.79,z,8);cyl(h,.02,.02,.04,0xd9a85a,x,y+.83,z,5);
  const sp=cyl(h,.02,.035,.16,0x2e3036,x+.22,y+.66,z,5);sp.rotation.z=-1;const hd=new THREE.Mesh(new THREE.TorusGeometry(.17,.012,5,12,Math.PI),MT(0x24262b));hd.position.set(x,y+.76,z);h.add(hd);
  if(top){cyl(h,.025,.025,top-y-.95,0x8fb06a,x,(top+y+.95)/2,z,5);const fi=new THREE.Mesh(new THREE.SphereGeometry(.12,6,5),MT(0x6a4634));fi.scale.set(1.6,.5,.4);fi.position.set(x,y+1.5,z);h.add(fi)}return s}
/* ---------- arreglo floral ---------- */
export function ikebana(h,x,y,z,seed=1,col=0xf5a4bd){const v=new THREE.Mesh(new THREE.LatheGeometry([[.0,0],[.07,0],[.1,.08],[.06,.2],[.04,.26],[.06,.3]].map(p=>new THREE.Vector2(p[0],p[1])),9),MT(0x3f5a6b,DS));v.position.set(x,y,z);h.add(v);
  const br=new THREE.Mesh(trunkGeo(.012,.02,.75,4,5,{bend:.5,seed,branches:[[.3,.22,.6,.05,.008],[.45,-.18,.72,-.06,.007]]}),MT(0x4a3428));br.position.set(x,y+.26,z);br.rotation.z=.25;h.add(br);
  for(let i=0;i<7;i++){const b=new THREE.Mesh(new THREE.IcosahedronGeometry(.045+hash(seed,i)*.03,0),MT(col));b.position.set(x+(hash(seed,i+9)-.5)*.5-.08,y+.55+hash(seed,i+20)*.45,z+(hash(seed,i+30)-.5)*.3);h.add(b)}
  const tf=new THREE.Mesh(tuftGeo(4,.38,.1,seed),MT(0x6fa86a,DS));tf.position.set(x,y+.28,z);h.add(tf)}
/* ---------- pino de jardín podado en nubes (niwaki) ---------- */
export function niwaki(h,x,y,z,seed=1,sc=1){const g=new THREE.Group();g.position.set(x,y,z);g.scale.setScalar(sc);g.rotation.y=seed*1.3;h.add(g);
  const tr=new THREE.Mesh(trunkGeo(.09,.2,3,6,7,{bend:.55,seed,flare:.3}),MT(0x5a4034,{map:tex('bark')}));g.add(tr);
  for(const [px,py,pz,r] of[[.5,3.05,.1,.95],[-.75,2.3,.25,.7],[.95,1.9,-.35,.62],[-.2,1.5,-.6,.5],[.1,3.5,-.2,.55]]){const p=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(r,1),.2,2.2,seed+px*9,.4),MT(0x4f8a5a));p.scale.y=.42;p.position.set(px,py,pz);g.add(p);
    const p2=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(r*.7,1),.16,2.6,seed+px*5,.4),MT(0x6aa66e));p2.scale.y=.36;p2.position.set(px+.05,py+.14,pz);g.add(p2);
    const b=cyl(g,.03,.045,Math.hypot(px,pz)+.2,0x5a4034,px*.5,py-.12,pz*.5,4);b.rotation.z=Math.PI/2;b.rotation.y=-Math.atan2(pz,px)}return g}
/* ---------- pila de piedra con caño de bambú y cazo ---------- */
export function tsukubai(h,x,y,z,seed=1){const b=new THREE.Mesh(rockGeo(.55,seed,1,.62),MT(0x8f918c,{map:tex('rock')}));b.position.set(x,y+.2,z);h.add(b);
  const w=new THREE.Mesh(new THREE.CircleGeometry(.3,12).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xbfe6ea}));w.position.set(x,y+.5,z);h.add(w);
  cyl(h,.04,.045,.95,0x8fb06a,x-.62,y+.47,z,6);const sp=cyl(h,.03,.03,.62,0x8fb06a,x-.36,y+.86,z,6);sp.rotation.z=Math.PI/2-.2;
  const ld=cyl(h,.012,.012,.5,0xc9b27a,x+.1,y+.53,z+.12,4);ld.rotation.z=Math.PI/2;ld.rotation.y=.5;cyl(h,.05,.05,.07,0xc9b27a,x+.32,y+.53,z,7);
  for(let i=0;i<4;i++){const m=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(.3+hash(seed,i)*.15,1),.14,2.4,seed+i,.4),MT(i%2?0x7fb36a:0x6aa35e));m.scale.y=.3;m.position.set(x+Math.cos(i*1.7+seed)*.75,y+.04,z+Math.sin(i*1.7+seed)*.75);h.add(m)}}
/* ---------- cerca de bambú atada (yotsume-gaki) ---------- */
export function takegaki(h,x0,z0,x1,z1,gyf,ht=1){const L=Math.hypot(x1-x0,z1-z0),n=Math.max(2,Math.round(L/.42)),ry=-Math.atan2(z1-z0,x1-x0);
  for(let i=0;i<=n;i++){const t=i/n,x=x0+(x1-x0)*t,z=z0+(z1-z0)*t,post=i%4===0;cyl(h,post?.045:.022,post?.05:.022,post?ht+.15:ht-.1,post?0x7a8a4a:0xb9b06a,x,gyf(x,z)+(post?ht+.15:ht-.1)/2,z,5)}
  for(const q of[.3,.62,.9]){const r=cyl(h,.02,.02,L,0xa9a35e,(x0+x1)/2,(gyf(x0,z0)+gyf(x1,z1))/2+ht*q,(z0+z1)/2,5);r.rotation.z=Math.PI/2;r.rotation.y=ry}}
/* ---------- farol de papel colgante (chōchin) ---------- */
export function chochin(h,x,y,z,col=0xd9453a,sc=1,glow=true){const b=new THREE.Mesh(new THREE.SphereGeometry(.26*sc,10,8),new THREE.MeshBasicMaterial({color:col}));b.scale.y=1.25;b.position.set(x,y,z);h.add(b);
  for(const q of[-1,1])cyl(h,.12*sc,.12*sc,.06*sc,0x1e2028,x,y+q*.33*sc,z,8);for(const q of[-.14,0,.14])cyl(h,.262*sc*Math.sqrt(1-(q/.33)**2),.262*sc*Math.sqrt(1-(q/.33)**2),.012,0x8a2a22,x,y+q*sc,z,10);
  cyl(h,.008,.008,.3*sc,0x2a2018,x,y+.5*sc,z,3);if(glow)gl(h,0xffb080,2.4*sc,x,y,z,.45)}
/* ---------- campanilla de viento (fūrin): cúpula de vidrio, badajo y tira de papel; devuelve el grupo para mecerlo ---------- */
export function furin(h,x,y,z,col=0x9fd8e6){const g=new THREE.Group();g.position.set(x,y,z);g.userData.noMerge=true;g.userData.ph=x*3+z;h.add(g);
  const m=q=>{q.userData.noMerge=true;return q};
  const d=m(new THREE.Mesh(new THREE.SphereGeometry(.11,10,7,0,TAU,0,1.75),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:col,transparent:true,opacity:.72,side:THREE.DoubleSide})));d.position.y=-.3;g.add(d);
  const s=m(new THREE.Mesh(new THREE.CylinderGeometry(.004,.004,.62,3),MT(0x2a2018)));s.position.y=-.45;g.add(s);const k=m(new THREE.Mesh(new THREE.SphereGeometry(.018,5,4),MT(0xd9a85a)));k.position.y=-.4;g.add(k);
  const p=m(new THREE.Mesh(new THREE.PlaneGeometry(.07,.3),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xfbf6ea,side:THREE.DoubleSide})));p.position.y=-.9;g.add(p);
  const c=m(new THREE.Mesh(new THREE.CylinderGeometry(.004,.004,.3,3),MT(0x2a2018)));c.position.y=-.15;g.add(c);return g}
/* ---------- cojín mullido ---------- */
export function zabuton(h,x,y,z,col,em){const m=new THREE.Mesh(lumpy(new THREE.SphereGeometry(.44,10,6),.03,3,x*7+z),MT(col,em?{emissive:em}:undefined));m.scale.set(1,.17,1);m.position.set(x,y+.05,z);h.add(m);
  const t=new THREE.Mesh(new THREE.IcosahedronGeometry(.04,0),MT(0xd9a85a));t.position.set(x,y+.12,z);h.add(t);return m}
/* ---------- montículo de musgo ---------- */
export function moss(h,x,y,z,r,seed=1,col=0x7fb36a){const m=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(r,1),r*.22,2/r,seed,.4),MT(col));m.scale.y=.3;m.position.set(x,y,z);h.add(m);return m}
/* ---------- vela alta (shokudai) ---------- */
export function shokudai(h,x,y,z){cyl(h,.13,.16,.05,0x2a2018,x,y+.03,z,8);cyl(h,.02,.025,1.0,0x2a2018,x,y+.55,z,5);cyl(h,.09,.05,.05,0xd9a85a,x,y+1.07,z,8);cyl(h,.025,.025,.16,0xfbf6ea,x,y+1.17,z,5);
  const f=new THREE.Mesh(new THREE.ConeGeometry(.025,.09,5),new THREE.MeshBasicMaterial({color:0xffc96a}));f.position.set(x,y+1.3,z);h.add(f);const s=spr(0xffc77a,1.6);s.material.opacity=.6;s.position.set(x,y+1.3,z);h.add(s)}
/* ---------- soporte con katana y wakizashi ---------- */
export function katanaKake(h,x,y,z){const pw=0x3a2a24;bx(h,1.2,.06,.3,pw,x,y+.03,z);for(const sx of[-1,1]){const u=bx(h,.07,.6,.22,pw,x+sx*.48,y+.33,z);u.rotation.x=.08}
  for(const [yy,L] of[[.52,1.05],[.3,.7]]){const sa=new THREE.Mesh(new THREE.TorusGeometry(2.6,.022,5,10,L/2.6),MT(0x1e2028));sa.position.set(x+.08,y+yy+2.6-.03,z);sa.rotation.z=-Math.PI/2-L/5.2;h.add(sa);
    const ts=cyl(h,.026,.026,.28,0x3a3d6b,x-L/2-.04,y+yy+.02,z,6);ts.rotation.z=Math.PI/2-.12;const tb=cyl(h,.06,.06,.02,0xd9a85a,x-L/2+.1,y+yy,z,8);tb.rotation.z=Math.PI/2}}
