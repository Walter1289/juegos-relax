/* Clima: niebla por tramos, bancos de niebla, llovizna, montañas de tinta del horizonte y ajuste de luz/niebla. */
import {A} from '../audio-rio.js';
import * as THREE from 'three';
import {vn,sm,clamp,lerp,hash} from './util.js';
import {S,P} from './state.js';
import {mistAt,cx,hw} from './world.js';
import {glowTex,scene,hemi,dir} from './core.js';
import {env,water,sky} from './env.js';
import {spawnRipple} from './ripples.js';
import {toast} from './hud.js';
import {FU,DITHER} from '../fogfx.js';
/* ====== AMBIENTE: niebla por tramos, llovizna, montañas ====== */
// bancos de niebla bajos
const MS=16,mists=[];for(let i=0;i<MS;i++){const m=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,transparent:true,opacity:0,depthWrite:false,fog:false,color:0xffffff}));m.scale.set(70,24,1);m.renderOrder=3;scene.add(m);mists.push(m)}
// lluvia
const RN=800,rainG=new THREE.BufferGeometry(),rainP=new Float32Array(RN*6),rv=[];
for(let i=0;i<RN;i++)rv.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);
rainG.setAttribute('position',new THREE.BufferAttribute(rainP,3));
const rainM=new THREE.LineBasicMaterial({color:0xdde8ff,transparent:true,opacity:0,depthWrite:false});
const rainL=new THREE.LineSegments(rainG,rainM);rainL.frustumCulled=false;rainL.visible=false;scene.add(rainL);
export const W={rain:0,target:0,t:50,on:false};
// montañas kársticas de tinta en el horizonte
const ridges=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([r,hb,t,seed])=>{
  const N=220,pos=new Float32Array((N+1)*2*3),idx=[];
  for(let i=0;i<=N;i++){const th=i/N*Math.PI*2,c=Math.cos(th),s=Math.sin(th);
    const n1=vn(c*2.2+seed,s*2.2+seed),n2=vn(c*8+seed*2,s*8+seed),sp=Math.pow(Math.max(0,n2-.5)/.5,1.4);
    const h=hb*(.3+.55*Math.pow(n1,1.5)+.9*sp);
    pos.set([c*r,-40,s*r,c*r,h,s*r],i*6);if(i<N){const a=i*2;idx.push(a,a+1,a+2,a+1,a+3,a+2)}}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setIndex(idx);
  const m=new THREE.Mesh(g,new THREE.ShaderMaterial({side:THREE.DoubleSide,fog:false,depthWrite:false,
    uniforms:{col:{value:new THREE.Color()},hor:{value:new THREE.Color()},hm:{value:hb*1.3}},
    vertexShader:'varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
${DITHER}
}`}));
  m.renderOrder=-8;m.frustumCulled=false;m.userData.t=t;scene.add(m);return m});
export const _c=new THREE.Color(),_c2=new THREE.Color();
export function weather(dt,s){
  // ciclo de llovizna
  if(S.started){W.t-=dt;if(W.t<=0){W.target=W.target?0:1;W.t=W.target?60+Math.random()*40:100+Math.random()*70;if(W.target)toast('Empieza una llovizna suave')}}
  W.rain+=(W.target-W.rain)*Math.min(1,dt*.25);
  const on=W.rain>.15;if(on!==W.on){W.on=on;A.rain(on)}
  const dawn=1-sm(.08,.3,S.tod);
  const f=clamp(Math.max(mistAt(s)*.95,W.rain*.4,dawn*.4,.2));W.fog=f;
  scene.fog.near=lerp(22,5,f);scene.fog.far=lerp(250,85,f);
  _c.set(0xe6e4ee).multiplyScalar(1-env.night*.7);scene.fog.color.copy(env.fog).lerp(_c,f*.55);
  const u=water.material.uniforms;u.fogN.value=scene.fog.near;u.fogF.value=scene.fog.far;u.fog.value.copy(scene.fog.color);
  sky.material.uniforms.hor.value.lerp(scene.fog.color,f*.8);sky.material.uniforms.top.value.lerp(scene.fog.color,f*.35);
  hemi.intensity*=1-.22*W.rain;dir.intensity*=1-.45*W.rain;
  // niebla de calidad: parámetros compartidos por todos los materiales (ver fogfx.js)
  {const sd=sky.material.uniforms.sunDir.value;FU.sunDir.value.copy(sd).normalize();
    _c.copy(env.sun).convertLinearToSRGB();FU.sunCol.value.set(_c.r,_c.g,_c.b);
    FU.misc.value.x=.55*(1-env.night)*clamp(1.25-Math.abs(FU.sunDir.value.y)*1.3,.25,1);
    FU.misc.value.y=lerp(.15,.07,f);FU.misc.value.z=.5+.4*f;FU.misc.value.w=P.t}
  // montañas
  ridges.forEach(m=>{m.position.set(P.px,0,P.pz);const t=m.userData.t;
    _c.copy(env.hor);_c2.copy(env.top).multiplyScalar(.55).lerp(_c.set(0x7b86a8).multiplyScalar(1-env.night*.75),.45);
    m.material.uniforms.col.value.copy(env.hor).lerp(_c2,1-t).lerp(scene.fog.color,f*.75);
    m.material.uniforms.hor.value.copy(sky.material.uniforms.hor.value)});
  // bancos de niebla
  const base=Math.floor(s/25)-2;
  for(let j=0;j<MS;j++){const i=base+j,sp=mists[((i%MS)+MS)%MS],ss=i*25;
    const x=cx(ss)+(hash(i,3)-.5)*hw(ss)*1.5;sp.position.set(x+Math.sin(P.t*.05+i)*3,1.2+hash(i,4)*2.2,-ss);
    const dx=sp.position.x-P.px,dz=sp.position.z-P.pz,d=Math.hypot(dx,dz);
    sp.material.opacity=f*.38*sm(6,22,d)*(1-sm(300,380,d))*(.7+.3*hash(i,5));sp.material.color.copy(scene.fog.color).multiplyScalar(1.05)}
  // lluvia
  rainL.visible=W.rain>.03;rainM.opacity=.3*W.rain;
  if(rainL.visible){for(let i=0;i<RN;i++){const v=rv[i];v[1]-=16*dt;if(v[1]<0){v[1]=13+Math.random()*2;v[0]=Math.random()*40-20;v[2]=Math.random()*40-24}
    const x=P.px+v[0],z=P.pz+v[2];rainP.set([x,v[1],z,x-.05,v[1]+.65,z],i*6)}rainG.attributes.position.needsUpdate=true;
    if(Math.random()<dt*9*W.rain)spawnRipple(P.px+(Math.random()-.5)*28,P.pz-Math.random()*22+4)}
}
