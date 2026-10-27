/* skyfx.js — cielo artístico compartido por el cielo y el agua: textura de nubes (generada una vez, determinista),
   uniformes comunes (SU) y el código GLSL: degradado + resplandor del crepúsculo, nubes iluminadas por sol/luna, disco solar y lunar, Vía Láctea tenue.
   Nada aquí parpadea: todo varía despacio (WCAG 2.3.1). */
import * as THREE from 'three';
/* ---------- textura de ruido (r: formas grandes · g: detalle · b: manchas lunares / polvo) ---------- */
function mulberry(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function tileNoise(n,cells,rnd){
  const g=new Float32Array(cells*cells);for(let i=0;i<g.length;i++)g[i]=rnd();
  const o=new Float32Array(n*n);
  for(let y=0;y<n;y++){const fy=y/n*cells,y0=Math.floor(fy),ty=fy-y0,sy=ty*ty*(3-2*ty),r0=(y0%cells)*cells,r1=((y0+1)%cells)*cells;
    for(let x=0;x<n;x++){const fx=x/n*cells,x0=Math.floor(fx),tx=fx-x0,sx=tx*tx*(3-2*tx),xa=x0%cells,xb=(x0+1)%cells;
      const a=g[r0+xa],b=g[r0+xb],c=g[r1+xa],d=g[r1+xb];
      o[y*n+x]=(a+(b-a)*sx)*(1-sy)+(c+(d-c)*sx)*sy}}
  return o}
function fbm(n,base,oct,seed){
  const rnd=mulberry(seed),o=new Float32Array(n*n);let amp=1,tot=0;
  for(let i=0;i<oct;i++){const t=tileNoise(n,base<<i,rnd);for(let k=0;k<o.length;k++)o[k]+=t[k]*amp;tot+=amp;amp*=.5}
  let mn=1e9,mx=-1e9;for(let k=0;k<o.length;k++){o[k]/=tot;if(o[k]<mn)mn=o[k];if(o[k]>mx)mx=o[k]}
  for(let k=0;k<o.length;k++)o[k]=(o[k]-mn)/(mx-mn);
  return o}
function makeCloudTex(){
  const n=256,r=fbm(n,4,5,11),g=fbm(n,8,4,23),b=fbm(n,6,4,37),d=new Uint8Array(n*n*4);
  for(let i=0;i<n*n;i++){d[i*4]=r[i]*255;d[i*4+1]=g[i]*255;d[i*4+2]=b[i]*255;d[i*4+3]=255}
  const t=new THREE.DataTexture(d,n,n,THREE.RGBAFormat);
  t.wrapS=t.wrapT=THREE.RepeatWrapping;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.needsUpdate=true;return t}
/* Las UUID de three usan Math.random: la textura se crea con una semilla propia para no alterar la secuencia del resto del escenario. */
export const cloudTex=(()=>{const mr=Math.random;Math.random=mulberry(7);try{return makeCloudTex()}finally{Math.random=mr}})();
/* ---------- uniformes compartidos (cielo y agua apuntan a los mismos objetos) ---------- */
const V3=()=>new THREE.Vector3(),C3=()=>new THREE.Color();
export const SU={
  top:{value:C3()},hor:{value:C3()},hz:{value:C3()},
  sunDir:{value:new THREE.Vector3(0,1,0)},moonDir:{value:new THREE.Vector3(0,1,0)},sunCol:{value:C3()},
  lightDir:{value:new THREE.Vector3(0,1,0)},lightCol:{value:C3()},
  sunI:{value:1},moonI:{value:0},gI:{value:0},night:{value:0},cover:{value:.25},mist:{value:0},skyT:{value:0},
  cloudTex:{value:cloudTex}};
/* ---------- GLSL compartido ---------- */
export const SKYGLSL=`
uniform vec3 top,hor,hz,sunDir,moonDir,sunCol,lightDir,lightCol;
uniform float sunI,moonI,gI,night,cover,mist,skyT;
uniform sampler2D cloudTex;
float cdens(vec2 uv,float det){float d=texture2D(cloudTex,uv*.35).r*(1.-det);if(det>0.)d+=texture2D(cloudTex,uv*1.1+.37).g*det;return d;}
/* degradado + resplandor del crepúsculo hacia el sol y cinturón rosado en el lado opuesto */
vec3 skyBase(vec3 d){
  float h=clamp(d.y,0.,1.);
  vec3 c=mix(hor,top,pow(h,.5));
  vec2 sa=normalize(sunDir.xz),da=normalize(d.xz+vec2(1e-5));
  float az=dot(sa,da);
  c+=hz*gI*(pow(max(az,0.),3.)*exp(-h*5.)*1.15+exp(-h*13.)*.22);
  c+=mix(hor,vec3(1.,.72,.86),.5)*gI*pow(max(-az,0.),2.)*exp(-h*8.)*.28;
  return c;
}
/* nubes: rgb = color, a = cobertura. Iluminadas por el sol (o la luna) con borde plateado hacia la luz.
   soft: bordes más difusos · det: peso de la capa de detalle fino (el agua usa bordes suaves y sin detalle) */
vec4 cloudL(vec3 d,float soft,float det){
  float up=smoothstep(.03,.26,d.y);
  if(up<=0.)return vec4(0.);
  vec2 uv=d.xz/(d.y+.32)*.6+vec2(skyT*.0035,skyT*.0014);
  float dn=cdens(uv,det);
  float thr=mix(.60,.30,cover);
  float a=smoothstep(thr,thr+.17+soft,dn)*up;
  if(a<=.002)return vec4(0.);
  float dl=cdens(uv+normalize(lightDir.xz+vec2(1e-5))*.05,det);
  float lit=clamp(.62-(dl-dn)*7.,0.,1.);
  float core=smoothstep(thr+.1,thr+.42+soft,dn);
  vec3 amb=mix(top,hor,.5)*.6+vec3(.30,.30,.34)*(1.-night*.75);
  vec3 col=amb*(1.-core*.25)+lightCol*lit*(1.-core*.35)*.85;
  col+=lightCol*pow(max(dot(d,lightDir),0.),6.)*.38*(1.-core*.6);
  col=mix(col,hor*1.05,mist*.45);
  return vec4(col,a*(1.-mist*.35));
}
/* sol, luna y Vía Láctea; cl = cobertura de nubes en ese punto (las nubes tapan los discos) */
vec3 celestial(vec3 d,float cl){
  vec3 c=vec3(0.);
  float sd=max(dot(d,sunDir),0.);
  c+=sunCol*(pow(sd,18.)*.40+pow(sd,200.)*.55)*sunI*(1.-cl*.5);
  c+=vec3(1.,.96,.86)*smoothstep(.9986,.9991,sd)*sunI*1.5*(1.-cl);
  float md=dot(d,moonDir);
  if(md>0.){
    vec3 mu=normalize(cross(moonDir,vec3(0.,1.,0.))),mv=cross(mu,moonDir);
    vec2 mp=vec2(dot(d,mu),dot(d,mv))/.052;float mr=length(mp);
    float maria=texture2D(cloudTex,mp*.22+.5).b;
    vec3 mc=mix(vec3(.90,.92,.99),vec3(.62,.68,.88),smoothstep(.42,.62,maria)*.6)*(1.-.22*mr*mr);
    c+=mc*smoothstep(1.,.86,mr)*moonI*(1.-cl)*.95;
    c+=vec3(.55,.62,.95)*(pow(md,40.)*.26+pow(md,400.)*.32)*moonI*(1.-cl*.6);
  }
  if(night>.02){
    vec3 mwN=normalize(vec3(.55,.35,.76));float bw=dot(d,mwN);
    float dust=texture2D(cloudTex,vec2(atan(d.z,d.x)*.4775,bw*1.7)).b;
    c+=vec3(.62,.60,.95)*exp(-bw*bw*14.)*(.35+.9*dust*dust)*.13*night*smoothstep(.04,.35,d.y)*(1.-cl);
  }
  return c;
}
/* lo que ve el agua al reflejar el cielo: degradado, nubes y un camino de luz amplio y suave (sin destellos) */
vec3 skyRefl(vec3 d){
  d.y=max(d.y,.02);
  vec3 c=skyBase(d);
  vec4 cl=cloudL(d,.2,0.);c=mix(c,cl.rgb,cl.a*.7);
  float sd=max(dot(d,sunDir),0.),md=max(dot(d,moonDir),0.);
  c+=sunCol*(pow(sd,60.)*.5+pow(sd,16.)*.18)*sunI*(1.-cl.a*.7);
  c+=vec3(.55,.62,.95)*(pow(md,90.)*.4+pow(md,20.)*.12)*moonI*(1.-cl.a*.6);
  return c;
}`;
