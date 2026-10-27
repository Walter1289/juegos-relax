/* world.js — entorno: cielo nocturno, luna, montañas, bosque, niebla, nubes y el acantilado con sus pinos y rocas */
import * as THREE from 'three';
import {scene} from './core.js';
import {clamp,rng,spr,glowTex,puffTex} from './util.js';
import {mat} from './mats.js';
import {tex,toonGrad} from '../style.js';
import {FU,DITHER} from '../fogfx.js';
import {RT} from './core.js';
const mists=[],clouds=[],banks=[];
const RIV=z=>12+16*Math.sin(z*.021+.6)+8*Math.sin(z*.047),RY=-13.6;
function ridge(z,col,h,seed,y0){
  const r=rng(seed),sh=new THREE.Shape();sh.moveTo(-340,-60);
  for(let x=-340;x<=340;x+=16)sh.lineTo(x,h*(.45+.55*Math.abs(Math.sin(x*.011+seed)+.5*Math.sin(x*.027+seed*2)))/1.5+r()*h*.08);
  sh.lineTo(340,-60);const m=new THREE.Mesh(new THREE.ShapeGeometry(sh),new THREE.MeshBasicMaterial({color:col,fog:true}));m.position.set(0,y0,z);scene.add(m);
}
const SUN=new THREE.Vector3(140,100,-420);
function buildSky(){
  const sky=new THREE.Mesh(new THREE.SphereGeometry(600,24,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,
    uniforms:{top:{value:new THREE.Color('#3a3f7c')},mid:{value:new THREE.Color('#c9799d')},hor:{value:new THREE.Color('#fbb67a')},sd:{value:SUN.clone().normalize()}},
    vertexShader:'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec3 vP;uniform vec3 top,mid,hor;uniform vec3 sd;void main(){vec3 d=normalize(vP);float h=clamp(d.y,0.,1.);vec3 c=mix(hor,mid,smoothstep(0.,.22,h));c=mix(c,top,smoothstep(.16,.85,h));float s=max(dot(d,sd),0.);c+=vec3(1.,.62,.32)*pow(s,6.)*.55+vec3(1.,.85,.6)*pow(s,40.)*.5;c=mix(c,vec3(.25,.22,.42),smoothstep(0.,-.4,d.y)*.7);gl_FragColor=vec4(c,1.);\n#include <colorspace_fragment>\n'+DITHER+'}'}));
  sky.renderOrder=-10;scene.add(sky);
  {const sp=new Float32Array(160*3);for(let i=0;i<160;i++){const u=Math.random()*6.283,v=Math.random()*.5+.42,r=Math.sqrt(1-v*v);sp.set([Math.cos(u)*r*560,v*560,Math.sin(u)*r*560-0],i*3)}
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(sp,3));
   scene.add(new THREE.Points(g,new THREE.PointsMaterial({color:0xffffff,size:1.6,sizeAttenuation:false,transparent:true,opacity:.5,fog:false,depthWrite:false})))}
  const sunS=spr(glowTex,0xffc27a,260,.85,true);sunS.material.fog=false;sunS.position.copy(SUN);scene.add(sunS);
  const sunD=new THREE.Mesh(new THREE.CircleGeometry(15,32),new THREE.MeshBasicMaterial({color:0xfff0c8,fog:false}));sunD.position.copy(SUN).multiplyScalar(.998);sunD.lookAt(0,0,0);scene.add(sunD);
}
function buildFarland(){
  ridge(-190,'#a38aa8',70,1,-24);ridge(-150,'#9a82a6',60,6,-24);ridge(-110,'#8f7ca4',46,5,-24);ridge(-78,'#82749f',34,9,-22);
  const ground=new THREE.Mesh(new THREE.CircleGeometry(260,32).rotateX(-Math.PI/2),mat('#86906f'));ground.position.y=-14;scene.add(ground);
  const PINEC=['#6d8466','#7a936f','#5f7a5d','#86a077'];
  {const N=900,m=new THREE.InstancedMesh(new THREE.ConeGeometry(1.9,7.5,6).translate(0,3.8,0),mat('#ffffff'),N),M=new THREE.Matrix4(),Q=new THREE.Quaternion(),S=new THREE.Vector3(),P=new THREE.Vector3(),c=new THREE.Color();
   const r=rng(77);let n=0;
   for(let i=0;i<4000&&n<N;i++){
     const ang=r()*6.283,d=14+Math.sqrt(r())*150,x=Math.cos(ang)*d+2,z=Math.sin(ang)*d-12;
     if(x>-16&&x<17&&z>-10&&z<9)continue;
     if(Math.abs(x-RIV(z))<(10+Math.max(0,-z)*.16+6))continue;   // el cauce del río queda despejado           // no bajo la cabaña ni su escalera
     const sc=.7+r()*1.1;P.set(x,-14+Math.max(0,-z-30)*.05,z);S.set(sc,sc*(.8+r()*.8),sc);M.compose(P,Q,S);m.setMatrixAt(n,M);m.setColorAt(n,c.set(PINEC[(r()*4)|0]));n++;
   }
   m.count=n;scene.add(m)}
  for(let i=0;i<7;i++){const s=spr(puffTex,0xf3cfd2,60+i*8,.26);s.position.set(-70+i*30,-9+i*1.6,-10-i*6);s.scale.set(70+i*8,18,1);scene.add(s);mists.push(s)}
  // bancos de bruma en el valle: capas a distintas profundidades que se desplazan en sentidos opuestos
  {const r=rng(31);for(let i=0;i<14;i++){const d=i%2?1:-1,z=-18-r()*85,y=-12+r()*9,w=70+r()*70,s=spr(puffTex,i%3?0xf0c8d0:0xf8dcd0,60,.1+r()*.12);
    s.position.set(-140+r()*280,y,z);s.scale.set(w,10+r()*12,1);s.userData.v=d*(.3+r()*.5);s.userData.ph=r()*6;s.userData.o=s.material.opacity;scene.add(s);banks.push(s)}}
  for(let i=0;i<6;i++){const s=spr(puffTex,0xf6c4b4,90,.38);s.position.set(-160+i*70,60+((i*37)%30),-200-(i%3)*30);s.scale.set(150,40,1);scene.add(s);clouds.push(s)}
}

/* ---- el valle del Río (el mismo río del otro juego): cinta de agua que serpentea bajo el acantilado, con sakuras, un castillo lejano y canoas con farolillo ---- */
const boats=[];
function buildValley(){
  // agua: cinta con degradado transversal (orillas verdosas oscuras, centro reflejando el cielo dorado)
  {const N=90,pos=[],col=[],idx=[],uv=[],c=new THREE.Color(),cE=new THREE.Color('#5d8f8c'),cM=new THREE.Color('#ffd3a0'),cC=new THREE.Color('#d8949e');
   for(let i=0;i<=N;i++){const z=34-i*(270/N),w=8+i*.16,x=RIV(z);
     for(let k=0;k<5;k++){const u=k/4,xx=x+(u-.5)*2*w;pos.push(xx,RY,z);const m=1-Math.abs(u-.5)*2;c.copy(cE).lerp(cC,Math.min(1,m*1.4)).lerp(cM,Math.max(0,m-.45)*(i<40?.7:.5));col.push(c.r,c.g,c.b);uv.push(u,i*.35)}}
   for(let i=0;i<N;i++)for(let k=0;k<4;k++){const a=i*5+k;idx.push(a,a+5,a+1,a+1,a+5,a+6)}
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);
   scene.add(new THREE.Mesh(g,new THREE.MeshBasicMaterial({vertexColors:true,fog:false})));
   // rayas suaves de corriente (casi estáticas: sin parpadeos)
   const st=document.createElement('canvas');st.width=64;st.height=256;const sg=st.getContext('2d');for(let i=0;i<40;i++){const x=Math.random()*64,y=Math.random()*256;sg.fillStyle='rgba(255,236,210,'+(.08+Math.random()*.12)+')';sg.fillRect(x,y,2+Math.random()*10,1.5)}
   const t=new THREE.CanvasTexture(st);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(1,3);
   const m2=new THREE.Mesh(g,new THREE.MeshBasicMaterial({map:t,transparent:true,depthWrite:false,fog:true}));m2.position.y=.03;scene.add(m2);riverTex=t}
  // sakuras y pinos en las orillas
  {const r=rng(52),N=70,trunkM=new THREE.InstancedMesh(new THREE.CylinderGeometry(.25,.4,3.2,5).translate(0,1.6,0),mat('#5a3d33'),N),
     crown=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,1),mat('#ffffff'),N*3),M=new THREE.Matrix4(),Q=new THREE.Quaternion(),S=new THREE.Vector3(),P=new THREE.Vector3(),c=new THREE.Color();
   const PK=['#f3bccb','#eea9bd','#f8d0da','#e99fb4'];let n=0,k=0;
   for(let i=0;i<500&&n<N;i++){const z=30-r()*230,side=r()<.5?-1:1,off=11+r()*28,x=RIV(z)+side*(off+Math.max(0,-z)*.12);
     if(x>-22&&x<26&&z>-14&&z<16)continue;
     const sc=1+r()*1.1,y=RY+.2;P.set(x,y,z);S.setScalar(sc);M.compose(P,Q,S);trunkM.setMatrixAt(n,M);
     for(let j=0;j<3;j++){P.set(x+(r()-.5)*1.8*sc,y+3.8*sc+(j?r()*.9:0),z+(r()-.5)*1.8*sc);S.set(2.3*sc*(1-j*.18),1.7*sc,2.3*sc*(1-j*.18));M.compose(P,Q,S);crown.setMatrixAt(k,M);crown.setColorAt(k,c.set(r()<.18?'#8aa874':PK[(r()*4)|0]));k++}n++}
   trunkM.count=n;crown.count=k;scene.add(trunkM,crown)}
  // castillo lejano entre la bruma (guiño al final del río) y una pagoda en la orilla
  {const g=new THREE.Group(),wm=new THREE.MeshBasicMaterial({color:0xf0dcd8,fog:true}),rm=new THREE.MeshBasicMaterial({color:0x6f6f8f,fog:true}),stone=new THREE.MeshBasicMaterial({color:0x9e92a6,fog:true});
   const bxm=(w,h,d,m,x,y,z)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,y,z);g.add(b);return b};
   bxm(34,7,26,stone,0,3.5,0);let y=7,w=24;for(let i=0;i<4;i++){bxm(w,5,w*.75,wm,0,y+2.5,0);const rf=new THREE.Mesh(new THREE.ConeGeometry(w*.78,3.2,4),rm);rf.rotation.y=Math.PI/4;rf.position.y=y+6.4;rf.scale.z=.75;g.add(rf);y+=5.2;w-=4.5}
   g.position.set(-70,-8,-210);g.scale.setScalar(1.3);scene.add(g)}
  // canoas con farolillo que bajan despacio por el río
  for(let i=0;i<4;i++){const g=new THREE.Group(),hull=new THREE.Mesh(new THREE.CapsuleGeometry(.35,2.6,3,6),mat('#5a3d2e'));hull.rotation.x=Math.PI/2;hull.scale.set(1,1,.6);g.add(hull);
    const lan=spr(glowTex,0xffb870,3.2,.9,true);lan.position.set(0,1,-1.2);g.add(lan);const lb=new THREE.Mesh(new THREE.SphereGeometry(.2,8,6),new THREE.MeshBasicMaterial({color:0xffd9a0}));lb.position.set(0,.8,-1.2);g.add(lb);
    g.userData={u:.1+i*.22,sp:.0035+i*.0006};scene.add(g);boats.push(g)}
}
let riverTex=null;
function buildCliff(){
  const g=new THREE.BoxGeometry(10,26,12,12,16,12),p=g.attributes.position,r=rng(3);
  const col=new Float32Array(p.count*3),c=new THREE.Color(),c1=new THREE.Color('#d0aa8c'),c2=new THREE.Color('#6d5a62');
  const nz=(x,y,z)=>Math.sin(x*1.3+y*.7)*.35+Math.sin(z*1.7+y*1.1)*.3+Math.sin(x*3.1+z*2.3+y*.4)*.15;
  for(let i=0;i<p.count;i++){
    let x=p.getX(i),y=p.getY(i),z=p.getZ(i);
    if(y<13-.01){const k=nz(x,y,z)*1.6+(r()-.5)*.25;const front=z>5.9,side=Math.abs(x)>4.9;
      if(!front||true){p.setX(i,x+(side?k:k*.3)*(Math.abs(x)<4.9?.3:1));p.setZ(i,z+(front?k*.35:k*.6))}}
    const t=clamp((y+13)/26);c.copy(c2).lerp(c1,t);const jit=(r()-.5)*.06;col[i*3]=c.r+jit;col[i*3+1]=c.g+jit;col[i*3+2]=c.b+jit;
  }
  g.setAttribute('color',new THREE.BufferAttribute(col,3));g.computeVertexNormals();
  const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*3.2,uv.getY(i)*3.2);
  const m=new THREE.Mesh(g,new THREE.MeshToonMaterial({vertexColors:true,flatShading:true,map:tex('rock'),gradientMap:toonGrad}));m.position.set(-9,-9,-1);m.receiveShadow=true;m.castShadow=true;scene.add(m);
  {const top=new THREE.Mesh(new THREE.BoxGeometry(10.4,.5,12.4),mat('#8fa57c'));top.position.set(-9,3.95,-1);scene.add(top)}
  // pinos y arbustos sobre el acantilado
  {const r=rng(11);for(let i=0;i<7;i++){const x=-13+r()*8,z=-5+r()*8,s=.8+r()*.7;
    const t=new THREE.Mesh(new THREE.ConeGeometry(.8*s,3.2*s,6),mat(['#5f7a5d','#6c8a63','#557050'][i%3]));t.position.set(x,4.2+1.6*s,z);scene.add(t)}}
  // sakura sobre el acantilado
  {const sg=new THREE.Group();sg.position.set(-12.2,4.2,1.8);scene.add(sg);const tm=new THREE.Mesh(new THREE.CylinderGeometry(.22,.38,3,6),mat('#5a3d33'));tm.position.y=1.5;tm.rotation.z=.08;sg.add(tm);
   [[0,3.6,0,1.7],[1.2,3.2,.4,1.3],[-1.1,3.3,-.3,1.2],[.2,4.4,.2,1.1]].forEach(([x,y,z,r],i)=>{const c=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),mat(['#f3bccb','#eea9bd','#f8d0da','#e99fb4'][i]));c.position.set(x,y,z);sg.add(c)})}
  // rocas al pie
  {const r=rng(5);for(let i=0;i<8;i++){const s=1+r()*2;const m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),mat('#7b6a70'));m.position.set(-14+r()*12,-13,6+r()*3);m.rotation.set(r()*3,r()*3,0);scene.add(m)}}
}
export function buildWorld(){buildSky();buildFarland();buildValley();buildCliff()}
// niebla y nubes a la deriva
const MOON=SUN.clone().normalize();
export function worldStep(dt){
  {const T=RT.T;FU.sunDir.value.copy(MOON);FU.sunCol.value.set(1,.72,.5);FU.misc.value.set(.55,.05,.5,T);
   banks.forEach(b=>{b.position.x+=dt*b.userData.v;if(b.position.x>160)b.position.x=-160;if(b.position.x<-160)b.position.x=160;b.material.opacity=b.userData.o*(.8+.2*Math.sin(T*.12+b.userData.ph))})}
  boats.forEach(b=>{const u=b.userData;u.u+=u.sp*dt;if(u.u>1)u.u-=1;const z=30-u.u*240,x=RIV(z)+Math.sin(RT.T*.3+u.u*20)*1.2;b.position.set(x,RY+.1+Math.sin(RT.T*.9+u.u*9)*.04,z);const z2=z-1,x2=RIV(z2);b.rotation.y=Math.atan2(-(x2-x),-(z2-z))+Math.PI;b.scale.setScalar(1+u.u*.0)});
  if(riverTex)riverTex.offset.y=(RT.T*.004)%1;
  mists.forEach((m,i)=>{m.position.x+=dt*(.5+i*.08);if(m.position.x>110)m.position.x=-110});clouds.forEach((c,i)=>{c.position.x+=dt*(.4+i*.05);if(c.position.x>260)c.position.x=-260});
}
