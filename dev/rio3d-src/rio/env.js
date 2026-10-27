/* Entorno: cielo, sol/luna, estrellas, ciclo del día (setEnv/applyEnv) y agua. */
import * as THREE from 'three';
import {clamp,lerp,sm} from './util.js';
import {S,P} from './state.js';
import {scene,spr,hemi,dir,R} from './core.js';
import {FU,DITHER} from '../fogfx.js';
import {SU,SKYGLSL} from './skyfx.js';
/* ---------- cielo: degradado, resplandor del crepúsculo, nubes, disco solar y lunar (ver skyfx.js) ---------- */
export const sky=new THREE.Mesh(new THREE.SphereGeometry(700,24,16),new THREE.ShaderMaterial({
  side:THREE.BackSide,depthWrite:false,fog:false,
  uniforms:{...SU},
  vertexShader:'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`varying vec3 vP;${SKYGLSL}
  void main(){vec3 d=normalize(vP);
   vec3 c=skyBase(d);
   vec4 cl=cloudL(d,0.,.3);
   c+=celestial(d,cl.a);
   c=mix(c,cl.rgb,cl.a);
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
   ${DITHER}
}`}));
sky.renderOrder=-10;scene.add(sky);
const sunS=spr(0xffe2b0,140),moonS=spr(0xdfe6ff,70);scene.add(sunS,moonS);
/* estrellas: mismas 450 posiciones de siempre; ahora con tamaño, brillo y tinte propios, un parpadeo muy lento y las nubes las tapan */
const starG=new THREE.BufferGeometry(),sp=new Float32Array(450*3),sab=new Float32Array(450*2),stc=new Float32Array(450*3);
const sh=i=>{const x=Math.sin(i*12.9898+78.233)*43758.5453;return x-Math.floor(x)};
for(let i=0;i<450;i++){const u=Math.random()*6.283,v=Math.random()*.95+.05,r=Math.sqrt(1-v*v);sp.set([Math.cos(u)*r*680,v*680,Math.sin(u)*r*680],i*3);
  const b=sh(i+.5),big=b>.93?1:0;sab.set([1.8+b*1.4+big*1.1,.35+.65*sh(i+101.7)],i*2);
  const w=sh(i+203.1);stc.set([.86+.14*w,.9+.1*(1-w),1],i*3)}
starG.setAttribute('position',new THREE.BufferAttribute(sp,3));
starG.setAttribute('ab',new THREE.BufferAttribute(sab,2));starG.setAttribute('tc',new THREE.BufferAttribute(stc,3));
const starU={...SU,pr:{value:1},time:{value:0},calm:{value:0}};
const stars=new THREE.Points(starG,new THREE.ShaderMaterial({transparent:true,depthWrite:false,fog:false,uniforms:starU,
  vertexShader:`attribute vec2 ab;attribute vec3 tc;uniform float pr,time,calm;varying vec3 vC;varying float vA;${SKYGLSL}
  void main(){vec3 d=normalize(position);
   float h=smoothstep(0.,.22,d.y);
   float tw=1.-(1.-calm)*.18*(.5+.5*sin(time*(.35+ab.y*.5)+ab.x*40.));
   float occ=1.-cloudL(d,0.,.3).a;
   vA=clamp(night*1.1,0.,1.)*h*occ*(.8+.2*ab.y)*tw*(1.-moonI*pow(max(dot(d,moonDir),0.),30.));
   vC=tc;gl_PointSize=ab.x*pr;
   gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vC;varying float vA;
  void main(){float r=length(gl_PointCoord-.5)*2.;float a=smoothstep(1.,.15,r)*vA;if(a<.004)discard;gl_FragColor=vec4(vC,a);
#include <colorspace_fragment>
}`}));scene.add(stars);
/* ---------- ciclo del día ---------- */
/* t: hora (0..1; el sol sale en .12 y se pone en .62) · top/hor: cielo · fog: niebla · sun: luz · hi/si: intensidad ambiente/directa · night · hg: suelo del hemisferio · hz: resplandor del crepúsculo */
const K=(t,top,hor,fog,sun,hi,si,night,hg,hz)=>({t,top:new THREE.Color(top),hor:new THREE.Color(hor),fog:new THREE.Color(fog),sun:new THREE.Color(sun),hi,si,night,hg:new THREE.Color(hg),hz:new THREE.Color(hz)});
const KEYS=[
  K(0,   '#1d2358','#4f4a88','#5b5a92','#9db0ff',.6, .25,1,  '#4a5a70','#6a5aa8'),   // noche
  K(.06, '#2d3a7c','#9a7fb0','#8c80a8','#b9b8ff',.8, .3, .8, '#56627a','#b98ac0'),   // hora azul previa al alba
  K(.115,'#8fa4d8','#f8c4b8','#efcfcf','#ffd2a8',1.35,.52,.3,'#c4ccc0','#ff9f7a'),   // amanecer
  K(.2,  '#86b2e2','#e9dcd6','#e2dcdc','#ffe8c4',1.7, 1,  .04,'#c8d2c0','#ffcfa0'),  // mañana
  K(.37, '#80b9e0','#d6edf0','#cfe7ea','#fff3d6',1.9, 1.3,0, '#c8d6c0','#fff0d0'),   // mediodía
  K(.52, '#82b0dc','#e8e6d8','#dfe2d6','#fff0cc',1.8, 1.15,0,'#c8d0b8','#ffe0b0'),   // tarde
  K(.595,'#8e88c8','#fbc79e','#ecc3b6','#ffbf8a',1.5, .85,.06,'#c8c4c0','#ffb070'),  // hora dorada
  K(.645,'#5f55a8','#f09a96','#c79aa8','#ff9b86',1.15,.5, .3,'#8a8aa0','#ff7f7a'),   // atardecer
  K(.70, '#2c3278','#8a66a6','#6f66a0','#a6b0ff',.85, .34,.7,'#58607e','#a874b8'),   // hora azul
  K(.77, '#1f2552','#4a4c88','#3b3f78','#9db0ff',.62, .28,1, '#4a5a70','#5a56a0'),   // noche
  K(1,   '#1d2358','#4f4a88','#5b5a92','#9db0ff',.6, .25,1,  '#4a5a70','#6a5aa8')];
export const env={top:new THREE.Color(),hor:new THREE.Color(),fog:new THREE.Color(),sun:new THREE.Color(),hg:new THREE.Color(),hz:new THREE.Color(),hi:1,si:1,night:0};
function setEnv(t){
  let i=0;while(i<KEYS.length-2&&t>KEYS[i+1].t)i++;
  const a=KEYS[i],b=KEYS[i+1];let k=clamp((t-a.t)/(b.t-a.t));k=k*k*(3-2*k);
  ['top','hor','fog','sun','hg','hz'].forEach(n=>env[n].copy(a[n]).lerp(b[n],k));
  env.hi=lerp(a.hi,b.hi,k);env.si=lerp(a.si,b.si,k);env.night=lerp(a.night,b.night,k);
}
const sunDir=new THREE.Vector3(),moonDir=new THREE.Vector3(),_ld=new THREE.Vector3(),moonLight=new THREE.Color('#a9b8ff');
let _lastT=P.t,_calmT=-9999,_calm=false;   // reloj del cielo = tiempo de juego (P.t): se detiene en pausa y es reproducible
export function applyEnv(px,pz){
  const now=performance.now(),dtr=Math.min(.1,Math.max(0,P.t-_lastT));_lastT=P.t;
  if(now-_calmT>1000){_calmT=now;try{_calm=!!(window.UX&&UX.calm&&UX.calm())}catch(e){_calm=false}}
  setEnv(S.tod);
  const el=Math.sin(Math.PI*2*(S.tod-.12));
  sunDir.set(.25,el,-.9).normalize();moonDir.set(-.25,-el*.9+.05,-.9).normalize();
  const sy=sunDir.y,my=moonDir.y;
  scene.fog.color.copy(env.fog);
  /* cielo compartido (las nubes derivan muy despacio; con «menos movimiento» casi quietas) */
  SU.skyT.value+=dtr*(_calm?.2:1);
  SU.top.value.copy(env.top);SU.hor.value.copy(env.hor);SU.hz.value.copy(env.hz);
  SU.sunDir.value.copy(sunDir);SU.moonDir.value.copy(moonDir);SU.sunCol.value.copy(env.sun);
  SU.sunI.value=sm(-.08,.04,sy);SU.moonI.value=sm(-.03,.1,my)*(1-.8*sm(-.05,.15,sy));
  SU.gI.value=sm(-.34,-.02,sy)*(1-sm(0,.42,sy));SU.night.value=env.night;
  {const sl=sm(-.3,.1,sy),ml=.3*SU.moonI.value*(1-sl);
    SU.lightDir.value.copy(sunDir).multiplyScalar(sl).addScaledVector(moonDir,ml+.001).normalize();
    SU.lightCol.value.setRGB(env.sun.r*sl+moonLight.r*ml,env.sun.g*sl+moonLight.g*ml,env.sun.b*sl+moonLight.b*ml)}
  starU.pr.value=R.getPixelRatio();starU.time.value=SU.skyT.value;starU.calm.value=_calm?1:0;
  const sday=el>0;const sd=sday?sunDir:moonDir;
  hemi.color.copy(env.hor).lerp(env.top,.4);hemi.groundColor.copy(env.hg);hemi.intensity=env.hi;
  dir.color.copy(env.sun);dir.intensity=env.si;dir.position.copy(sd).multiplyScalar(100).add(_ld.set(px,0,pz));dir.target.position.set(px,0,pz);dir.target.updateMatrixWorld();
  sky.position.set(px,0,pz);
  sunS.position.set(px,0,pz).addScaledVector(sunDir,640);moonS.position.set(px,0,pz).addScaledVector(moonDir,640);
  sunS.material.opacity=clamp(el*4+.2,0,1)*.6;moonS.material.opacity=clamp(-el*4,0,1)*.55;
  stars.position.set(px,0,pz);
  const wu=water.material.uniforms;
  wu.lDir.value.copy(sd);wu.lCol.value.copy(env.sun).multiplyScalar(clamp(sday?el*3:-el*1.5,0,1));
  S.glowK=clamp(env.night*1.2+.25,0,1);
}
export const todName=t=>t<.1?'Madrugada':t<.2?'Amanecer':t<.5?'Día':t<.68?'Atardecer':t<.92?'Noche':'Madrugada';
/* ---------- agua: refleja el cielo (degradado, nubes, sol y luna) y se funde con la niebla ---------- */
export const water=new THREE.Mesh(new THREE.PlaneGeometry(1000,1000),new THREE.ShaderMaterial({
  uniforms:{...SU,t:{value:0},deep:{value:new THREE.Color('#5a8f9c')},shallow:{value:new THREE.Color('#a3c8c4')},fog:{value:new THREE.Color()},
    lDir:{value:new THREE.Vector3(0,1,0)},lCol:{value:new THREE.Color()},fogN:{value:22},fogF:{value:250},fogSunDir:FU.sunDir,fogSunCol:FU.sunCol,fogMisc:FU.misc},
  vertexShader:'varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
  fragmentShader:`varying vec3 vW;uniform float t,fogN,fogF;uniform vec3 deep,shallow,fog,lDir,lCol,fogSunDir,fogSunCol;uniform vec4 fogMisc;
  ${SKYGLSL}
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
    float lod=1.-smoothstep(8.,70.,dist);   /* detalle fino de superficie: baja amplitud, media cero y desvanecido con la distancia (sin parpadeo) */
    base*=1.+(sin(p.x*3.1+p.y*2.3+t*.9)*sin(p.y*2.7-p.x*1.9-t*.7)*.045+sin(p.x*7.3-p.y*5.1+t*.6)*sin(p.y*6.1+p.x*4.7-t*.5)*.02)*lod;
    vec3 refl=skyRefl(reflect(-v,normalize(vec3(n.x*.3,1.,n.z*.3))))*.86;   /* espejo de lago calmo: el reflejo del cielo sigue solo una fracción de las ondas (evita parpadeo al avanzar) */
    float st=wn(vec2(p.x*.07+t*.02,p.y*1.5+t*.25)),st2=wn(vec2(p.x*.16-t*.03,p.y*3.1-t*.4));
    float streak=smoothstep(.62,.9,st)*.55+smoothstep(.66,.92,st2)*.4;
    float dk=smoothstep(.55,.2,wn(vec2(p.x*.05,p.y*.9+t*.15)));
    base=mix(base,base*.78,dk*.6);
    vec3 c=mix(base,refl,clamp(fr*.9+.26,0.,1.));
    c=mix(c,mix(hor,vec3(1.),.55),streak*(1.-night*.7)*.38);
    float sp=smoothstep(.9,1.,wn(p*2.6+vec2(t*.5,-t*.3)));c+=lCol*sp*.38;   /* destellos del agua suaves a propósito (WCAG 2.3.1) */
    vec3 h=normalize(lDir+v);c+=lCol*pow(max(dot(n,h),0.),90.)*.6;
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
