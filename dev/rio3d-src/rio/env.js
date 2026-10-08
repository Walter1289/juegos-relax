/* Entorno: cielo, sol/luna, estrellas, ciclo del día (setEnv/applyEnv) y agua. */
import * as THREE from 'three';
import {clamp,lerp} from './util.js';
import {S} from './state.js';
import {scene,spr,hemi,dir} from './core.js';
import {FU,DITHER} from '../fogfx.js';
/* ---------- cielo ---------- */
export const sky=new THREE.Mesh(new THREE.SphereGeometry(700,24,16),new THREE.ShaderMaterial({
  side:THREE.BackSide,depthWrite:false,fog:false,
  uniforms:{top:{value:new THREE.Color()},hor:{value:new THREE.Color()},sunDir:{value:new THREE.Vector3(0,1,0)},sunCol:{value:new THREE.Color()},glow:{value:1}},
  vertexShader:'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`varying vec3 vP;uniform vec3 top,hor,sunDir,sunCol;uniform float glow;
  void main(){vec3 d=normalize(vP);float h=d.y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5));
   float s=max(dot(d,normalize(sunDir)),0.);c+=sunCol*(pow(s,18.)*.45+pow(s,200.)*.6)*glow;
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
   ${DITHER}
}`}));
sky.renderOrder=-10;scene.add(sky);
const sunS=spr(0xffe2b0,140),moonS=spr(0xdfe6ff,70);scene.add(sunS,moonS);
const starG=new THREE.BufferGeometry(),sp=new Float32Array(450*3);
for(let i=0;i<450;i++){const u=Math.random()*6.283,v=Math.random()*.95+.05,r=Math.sqrt(1-v*v);sp.set([Math.cos(u)*r*680,v*680,Math.sin(u)*r*680],i*3)}
starG.setAttribute('position',new THREE.BufferAttribute(sp,3));
const stars=new THREE.Points(starG,new THREE.PointsMaterial({color:0xffffff,size:2.2,sizeAttenuation:false,transparent:true,opacity:0,fog:false,depthWrite:false}));scene.add(stars);
/* ---------- ciclo del día ---------- */
const K=(t,top,hor,fog,sun,hi,si,night,hg)=>({t,top:new THREE.Color(top),hor:new THREE.Color(hor),fog:new THREE.Color(fog),sun:new THREE.Color(sun),hi,si,night,hg:new THREE.Color(hg)});
const KEYS=[
  K(0,'#242a5c','#6a5c9a','#5b5a92','#9db0ff',.6,.25,1,'#4a5a70'),
  K(.12,'#8fa4d8','#f6c7c0','#efcfcf','#ffd2a8',1.4,.5,.2,'#c4ccc0'),
  K(.35,'#80b9e0','#d6edf0','#cfe7ea','#fff3d6',1.9,1.3,0,'#c8d6c0'),
  K(.6,'#7e79c2','#f9bd9c','#e8b9b3','#ffb98a',1.5,.8,.1,'#c8c4c0'),
  K(.75,'#1f2552','#4a4c88','#3b3f78','#9db0ff',.62,.28,1,'#4a5a70'),
  K(1,'#242a5c','#6a5c9a','#5b5a92','#9db0ff',.6,.25,1,'#4a5a70')];
export const env={top:new THREE.Color(),hor:new THREE.Color(),fog:new THREE.Color(),sun:new THREE.Color(),hg:new THREE.Color(),hi:1,si:1,night:0};
function setEnv(t){
  let i=0;while(i<KEYS.length-2&&t>KEYS[i+1].t)i++;
  const a=KEYS[i],b=KEYS[i+1],k=clamp((t-a.t)/(b.t-a.t));
  ['top','hor','fog','sun','hg'].forEach(n=>env[n].copy(a[n]).lerp(b[n],k));
  env.hi=lerp(a.hi,b.hi,k);env.si=lerp(a.si,b.si,k);env.night=lerp(a.night,b.night,k);
}
const sunDir=new THREE.Vector3(),moonDir=new THREE.Vector3();
export function applyEnv(px,pz){
  setEnv(S.tod);
  const el=Math.sin(Math.PI*2*(S.tod-.12));
  sunDir.set(.25,el,-.9).normalize();moonDir.set(-.25,-el*.9+.05,-.9).normalize();
  scene.fog.color.copy(env.fog);
  sky.material.uniforms.top.value.copy(env.top);sky.material.uniforms.hor.value.copy(env.hor);
  const sday=el>0;const sd=sday?sunDir:moonDir;
  sky.material.uniforms.sunDir.value.copy(sd);sky.material.uniforms.sunCol.value.copy(env.sun);sky.material.uniforms.glow.value=sday?1:.5;
  hemi.color.copy(env.hor).lerp(env.top,.4);hemi.groundColor.copy(env.hg);hemi.intensity=env.hi;
  dir.color.copy(env.sun);dir.intensity=env.si;dir.position.copy(sd).multiplyScalar(100).add(new THREE.Vector3(px,0,pz));dir.target.position.set(px,0,pz);dir.target.updateMatrixWorld();
  sky.position.set(px,0,pz);
  sunS.position.set(px,0,pz).addScaledVector(sunDir,640);moonS.position.set(px,0,pz).addScaledVector(moonDir,640);
  sunS.material.opacity=clamp(el*4+.2,0,1);moonS.material.opacity=clamp(-el*4,0,1)*.9;
  stars.position.set(px,0,pz);stars.material.opacity=clamp(env.night*1.1,0,1);
  water.material.uniforms.sunDir.value.copy(sd);water.material.uniforms.sunCol.value.copy(env.sun).multiplyScalar(clamp(sday?el*3:-el*1.5,0,1));
  water.material.uniforms.hor.value.copy(env.hor);water.material.uniforms.top.value.copy(env.top);water.material.uniforms.fog.value.copy(env.fog);
  water.material.uniforms.night.value=env.night;
  S.glowK=clamp(env.night*1.2+.25,0,1);
}
export const todName=t=>t<.1?'Madrugada':t<.2?'Amanecer':t<.5?'Día':t<.68?'Atardecer':t<.92?'Noche':'Madrugada';
/* ---------- agua ---------- */
/* ---------- agua ---------- */
export const water=new THREE.Mesh(new THREE.PlaneGeometry(1000,1000),new THREE.ShaderMaterial({
  uniforms:{t:{value:0},deep:{value:new THREE.Color('#5a8f9c')},shallow:{value:new THREE.Color('#a3c8c4')},hor:{value:new THREE.Color()},top:{value:new THREE.Color()},fog:{value:new THREE.Color()},
    sunDir:{value:new THREE.Vector3(0,1,0)},sunCol:{value:new THREE.Color()},night:{value:0},fogN:{value:22},fogF:{value:250},fogSunDir:FU.sunDir,fogSunCol:FU.sunCol,fogMisc:FU.misc},
  vertexShader:'varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
  fragmentShader:`varying vec3 vW;uniform float t,night,fogN,fogF;uniform vec3 deep,shallow,hor,top,fog,sunDir,sunCol,fogSunDir,fogSunCol;uniform vec4 fogMisc;
  float hh(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
  float wn(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(hh(i),hh(i+vec2(1,0)),f.x),mix(hh(i+vec2(0,1)),hh(i+vec2(1,1)),f.x),f.y);}
  void main(){
    vec2 p=vW.xz;
    float dx=cos(p.x*.35+t*.8)*.05+cos(p.x*.9+p.y*.6-t*1.3)*.03+cos(p.y*.25+t*.5)*.03+cos(p.x*2.1+p.y*1.3+t*1.9)*.012;
    float dz=cos(p.y*.4+t*.7)*.05+cos(p.y*.8-p.x*.5+t*1.1)*.03+cos(p.x*.3-t*.6)*.03+cos(p.y*2.3-p.x*1.1+t*1.7)*.012;
    vec3 n=normalize(vec3(-dx*.6,1.,-dz*.6));
    vec3 v=normalize(cameraPosition-vW);float dist=length(cameraPosition-vW);
    float fr=pow(1.-max(dot(n,v),0.),3.);
    vec3 base=mix(deep,shallow,.5+.5*sin(p.x*.05+p.y*.04+t*.1));
    base*=mix(1.,.45,night);
    vec3 refl=mix(hor,top,.35);
    float st=wn(vec2(p.x*.07+t*.02,p.y*1.5+t*.25)),st2=wn(vec2(p.x*.16-t*.03,p.y*3.1-t*.4));
    float streak=smoothstep(.62,.9,st)*.55+smoothstep(.66,.92,st2)*.4;
    float dk=smoothstep(.55,.2,wn(vec2(p.x*.05,p.y*.9+t*.15)));
    base=mix(base,base*.78,dk*.6);
    vec3 c=mix(base,refl,clamp(fr*.9+.26,0.,1.));
    c=mix(c,mix(hor,vec3(1.),.55),streak*(1.-night*.7)*.38);
    float sp=smoothstep(.9,1.,wn(p*2.6+vec2(t*.5,-t*.3)));c+=sunCol*sp*.38;   /* destellos del agua suaves a propósito (WCAG 2.3.1) */
    vec3 h=normalize(sunDir+v);c+=sunCol*pow(max(dot(n,h),0.),90.)*.9;
    float tF=clamp((dist-fogN)/(fogF-fogN),0.,1.);float cF=tF*tF*(3.-2.*tF);float ffF=mix(cF,1.,smoothstep(.82,1.,tF));
    {vec2 fwp=vW.xz;float ftt=fogMisc.w*.06;float fpn=.5+.3*sin(fwp.x*.021+sin(fwp.y*.017+ftt)*1.7+ftt*.7)+.2*sin(fwp.y*.037-fwp.x*.011-ftt*1.3);
     ffF=clamp(ffF*mix(1.,.5+1.*fpn,fogMisc.z*(1.-smoothstep(.82,1.,tF))),0.,1.);}
    float scF=pow(max(dot(normalize(vW-cameraPosition),fogSunDir),0.),5.)*fogMisc.x*ffF;
    c=mix(c,mix(fog,pow(fogSunCol,vec3(2.2)),clamp(scF,0.,.8)),ffF);
    gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
    ${DITHER}
}`}));
water.rotation.x=-Math.PI/2;scene.add(water);

