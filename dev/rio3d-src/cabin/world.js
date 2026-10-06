/* world.js — entorno: cielo nocturno, luna, montañas, bosque, niebla, nubes y el acantilado con sus pinos y rocas */
import * as THREE from 'three';
import {scene} from './core.js';
import {clamp,rng,spr,glowTex,puffTex} from './util.js';
import {mat} from './mats.js';
import {tex,toonGrad} from '../style.js';
const mists=[],clouds=[];
function ridge(z,col,h,seed,y0){
  const r=rng(seed),sh=new THREE.Shape();sh.moveTo(-340,-60);
  for(let x=-340;x<=340;x+=16)sh.lineTo(x,h*(.45+.55*Math.abs(Math.sin(x*.011+seed)+.5*Math.sin(x*.027+seed*2)))/1.5+r()*h*.08);
  sh.lineTo(340,-60);const m=new THREE.Mesh(new THREE.ShapeGeometry(sh),new THREE.MeshBasicMaterial({color:col,fog:true}));m.position.set(0,y0,z);scene.add(m);
}
function buildSky(){
  const sky=new THREE.Mesh(new THREE.SphereGeometry(600,24,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,
    uniforms:{top:{value:new THREE.Color('#2a3278')},hor:{value:new THREE.Color('#8a7cbc')}},
    vertexShader:'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec3 vP;uniform vec3 top,hor;void main(){float h=normalize(vP).y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.55));gl_FragColor=vec4(c,1.);\n#include <colorspace_fragment>\n}'}));
  sky.renderOrder=-10;scene.add(sky);
  {const sp=new Float32Array(500*3);for(let i=0;i<500;i++){const u=Math.random()*6.283,v=Math.random()*.85+.1,r=Math.sqrt(1-v*v);sp.set([Math.cos(u)*r*560,v*560,Math.sin(u)*r*560-0],i*3)}
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(sp,3));
   scene.add(new THREE.Points(g,new THREE.PointsMaterial({color:0xffffff,size:2,sizeAttenuation:false,transparent:true,opacity:.85,fog:false,depthWrite:false})))}
  const moonS=spr(glowTex,0xfff0cf,150,.9,true);moonS.material.fog=false;moonS.position.set(150,170,-420);scene.add(moonS);
  const moonD=new THREE.Mesh(new THREE.CircleGeometry(17,32),new THREE.MeshBasicMaterial({color:0xfff2d2,fog:false}));moonD.position.set(150,170,-419);moonD.lookAt(0,0,0);scene.add(moonD);
}
function buildFarland(){
  ridge(-150,'#5d62a4',60,1,-24);ridge(-110,'#6a68ab',46,5,-24);ridge(-78,'#7770b0',34,9,-22);
  const ground=new THREE.Mesh(new THREE.CircleGeometry(260,32).rotateX(-Math.PI/2),mat('#6f79ae'));ground.position.y=-14;scene.add(ground);
  const PINEC=['#6f7fb6','#7b88bf','#6877ae','#8591c4'];
  {const N=900,m=new THREE.InstancedMesh(new THREE.ConeGeometry(1.9,7.5,6).translate(0,3.8,0),mat('#ffffff'),N),M=new THREE.Matrix4(),Q=new THREE.Quaternion(),S=new THREE.Vector3(),P=new THREE.Vector3(),c=new THREE.Color();
   const r=rng(77);let n=0;
   for(let i=0;i<4000&&n<N;i++){
     const ang=r()*6.283,d=14+Math.sqrt(r())*150,x=Math.cos(ang)*d+2,z=Math.sin(ang)*d-12;
     if(x>-16&&x<17&&z>-10&&z<9)continue;           // no bajo la cabaña ni su escalera
     const sc=.7+r()*1.1;P.set(x,-14+Math.max(0,-z-30)*.05,z);S.set(sc,sc*(.8+r()*.8),sc);M.compose(P,Q,S);m.setMatrixAt(n,M);m.setColorAt(n,c.set(PINEC[(r()*4)|0]));n++;
   }
   m.count=n;scene.add(m)}
  for(let i=0;i<7;i++){const s=spr(puffTex,0xd8d2f4,60+i*8,.24);s.position.set(-70+i*30,-9+i*1.6,-10-i*6);s.scale.set(70+i*8,18,1);scene.add(s);mists.push(s)}
  for(let i=0;i<6;i++){const s=spr(puffTex,0xc8c0ee,90,.3);s.position.set(-160+i*70,60+((i*37)%30),-200-(i%3)*30);s.scale.set(150,40,1);scene.add(s);clouds.push(s)}
}
function buildCliff(){
  const g=new THREE.BoxGeometry(10,26,12,12,16,12),p=g.attributes.position,r=rng(3);
  const col=new Float32Array(p.count*3),c=new THREE.Color(),c1=new THREE.Color('#8f93c4'),c2=new THREE.Color('#5d6498');
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
  {const top=new THREE.Mesh(new THREE.BoxGeometry(10.4,.5,12.4),mat('#9fb9a0'));top.position.set(-9,3.95,-1);scene.add(top)}
  // pinos y arbustos sobre el acantilado
  {const r=rng(11);for(let i=0;i<7;i++){const x=-13+r()*8,z=-5+r()*8,s=.8+r()*.7;
    const t=new THREE.Mesh(new THREE.ConeGeometry(.8*s,3.2*s,6),mat(['#7ba8a0','#88b7a6','#6f9c98'][i%3]));t.position.set(x,4.2+1.6*s,z);scene.add(t)}}
  // rocas al pie
  {const r=rng(5);for(let i=0;i<8;i++){const s=1+r()*2;const m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),mat('#6c72a8'));m.position.set(-14+r()*12,-13,6+r()*3);m.rotation.set(r()*3,r()*3,0);scene.add(m)}}
}
export function buildWorld(){buildSky();buildFarland();buildCliff()}
// niebla y nubes a la deriva
export function worldStep(dt){
  mists.forEach((m,i)=>{m.position.x+=dt*(.5+i*.08);if(m.position.x>110)m.position.x=-110});clouds.forEach((c,i)=>{c.position.x+=dt*(.4+i*.05);if(c.position.x>260)c.position.x=-260});
}
