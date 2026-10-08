/* fogfx.js — niebla de mejor calidad para TODO el Río 3D (se importa antes del primer render).
   Cambia los fragmentos de niebla de three: curva suave como antes + menos niebla en altura (el valle se llena de bruma y las copas asoman),
   resplandor del sol dentro de la niebla (más clara y cálida hacia el sol) y tramado (dithering) que elimina las bandas del degradado. */
import * as THREE from 'three';
export const FU={sunDir:{value:new THREE.Vector3(0,1,0)},sunCol:{value:new THREE.Vector3(1,.85,.6)},misc:{value:new THREE.Vector4(0,.08,0,0)}};
export const DITHER='gl_FragColor.rgb+=(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5)/255.;';
const SC=THREE.ShaderChunk;
SC.fog_pars_vertex='#ifdef USE_FOG\nvarying float vFogDepth;varying vec3 vFogWP;\n#endif';
SC.fog_vertex='#ifdef USE_FOG\nvFogDepth=-mvPosition.z;vFogWP=transpose(mat3(viewMatrix))*mvPosition.xyz;\n#endif';
SC.fog_pars_fragment=`#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;varying vec3 vFogWP;uniform vec3 fogSunDir;uniform vec3 fogSunCol;uniform vec4 fogMisc;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`;
SC.fog_fragment=`#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor=1.-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);
#else
float tF=clamp((vFogDepth-fogNear)/(fogFar-fogNear),0.,1.);
float cF=tF*tF*(3.-2.*tF);
float hF=exp(-max(cameraPosition.y+vFogWP.y,0.)*fogMisc.y);
float fogFactor=mix(cF*(.3+.7*hF),1.,smoothstep(.82,1.,tF));
vec2 fwp=cameraPosition.xz+vFogWP.xz;float ftt=fogMisc.w*.06;
float fpn=.5+.3*sin(fwp.x*.021+sin(fwp.y*.017+ftt)*1.7+ftt*.7)+.2*sin(fwp.y*.037-fwp.x*.011-ftt*1.3);
fogFactor=clamp(fogFactor*mix(1.,.5+1.*fpn,fogMisc.z*(1.-smoothstep(.82,1.,tF))),0.,1.);
#endif
float scF=pow(max(dot(normalize(vFogWP),fogSunDir),0.),5.)*fogMisc.x*fogFactor;
gl_FragColor.rgb=mix(gl_FragColor.rgb,mix(fogColor,fogSunCol,clamp(scF,0.,.8)),fogFactor);
${DITHER}
#endif`;
/* todos los materiales reciben los uniformes de la niebla (también los que ya definen su propio onBeforeCompile) */
const inject=sh=>{sh.uniforms.fogSunDir=FU.sunDir;sh.uniforms.fogSunCol=FU.sunCol;sh.uniforms.fogMisc=FU.misc};
Object.defineProperty(THREE.Material.prototype,'onBeforeCompile',{configurable:true,
  get(){return this._obc||inject},
  set(f){const w=(sh,r)=>{inject(sh);f(sh,r)};w.toString=()=>f.toString()+'/*fogfx*/';this._obc=w}});
