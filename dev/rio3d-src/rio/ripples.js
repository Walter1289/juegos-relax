/* Ondas en el agua: trenes de anillos concéntricos (cresta clara, valle oscuro) con contorno irregular.
   Todas van en una sola llamada de dibujo (geometría instanciada); las inactivas colapsan a tamaño cero. */
import * as THREE from 'three';
import {scene} from './core.js';
import {SU} from './skyfx.js';
const N=64,iA=new Float32Array(N*4),iB=new Float32Array(N*4),st=[];
for(let i=0;i<N;i++)st.push({age:9,life:4,size:1,amp:0});
const g=new THREE.InstancedBufferGeometry();{const q=new THREE.PlaneGeometry(2,2).rotateX(-Math.PI/2);g.index=q.index;g.setAttribute('position',q.attributes.position)}
const aA=new THREE.InstancedBufferAttribute(iA,4),aB=new THREE.InstancedBufferAttribute(iB,4);aA.setUsage(THREE.DynamicDrawUsage);aB.setUsage(THREE.DynamicDrawUsage);
g.setAttribute('iA',aA);g.setAttribute('iB',aB);g.instanceCount=N;
export const rippleMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,
  uniforms:{hor:SU.hor,night:SU.night,fogF:{value:250}},
  vertexShader:`attribute vec4 iA,iB;varying vec2 vP;varying vec4 vB;varying float vD;
  void main(){vP=position.xz;vB=iB;vec3 w=vec3(iA.x+position.x*iB.x,.04,iA.y+position.z*iB.x);vD=distance(w,cameraPosition);gl_Position=projectionMatrix*viewMatrix*vec4(w,1.);}`,
  /* vB: x=radio actual (m), y=longitud de onda (m), z=opacidad, w=semilla */
  fragmentShader:`varying vec2 vP;varying vec4 vB;varying float vD;uniform vec3 hor;uniform float night,fogF;
  void main(){
    float r=length(vP),an=atan(vP.y,vP.x),sd=vB.w*6.2832;
    r*=1.+.045*sin(an*3.+sd)+.03*sin(an*5.-sd*2.3)+.018*sin(an*9.+sd*4.1);
    float d=(.84-r)*vB.x;                       /* metros por detrás del frente de onda */
    float wv=sin(d/vB.y*6.2832)*exp(-max(d,0.)/(vB.y*1.9))*smoothstep(-.22*vB.y,.1*vB.y,d);
    float cr=smoothstep(.22,.8,wv),tr=smoothstep(.18,.7,-wv);
    float a=(cr*.5+tr*.26)*vB.z*(1.-smoothstep(.9,1.,r))*(1.-smoothstep(vB.y*90.,vB.y*240.,vD))*(1.-smoothstep(fogF*.25,fogF*.6,vD));
    if(a<.004)discard;
    vec3 li=mix(hor,vec3(1.),.55)*(1.-night*.55),dk=mix(hor,vec3(.05,.16,.22),.8)*(1.-night*.5);
    gl_FragColor=vec4(mix(dk,li,cr/(cr+tr+1e-4)),a);
#include <colorspace_fragment>
  }`});
const mesh=new THREE.Mesh(g,rippleMat);mesh.frustumCulled=false;mesh.renderOrder=2;scene.add(mesh);
let ripI=0;
/* size: escala general (1 = onda de la canoa o de un pez; .3 = gota de lluvia); life en segundos; amp: opacidad relativa */
export const spawnRipple=(x,z,size=1,life=4,amp=1)=>{const i=ripI++%N,s=st[i];s.age=0;s.life=life;s.size=size*(.9+Math.random()*.2);s.amp=amp;iA[i*4]=x;iA[i*4+1]=z;iB[i*4+1]=.3*s.size;iB[i*4+3]=Math.random()};
export function updateRipples(dt){
  for(let i=0;i<N;i++){const s=st[i];if(s.age>=s.life){if(iB[i*4]!==0){iB[i*4]=0;iB[i*4+2]=0}continue}
    s.age+=dt;const a=Math.min(1,s.age/s.life);
    iB[i*4]=s.size*(.32+3*Math.pow(a,.85));iB[i*4+2]=s.amp*Math.min(1,a*12)*Math.pow(1-a,1.4)}
  aA.needsUpdate=aB.needsUpdate=true;
}
