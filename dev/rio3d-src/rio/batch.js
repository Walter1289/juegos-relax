/* Batch: acumula geometría procedural con COLOR POR VÉRTICE (sombreado plano) para fusionar edificios enteros en muy pocas llamadas de dibujo.
   Se usa en el castillo, el dragón y el festival. Todas las primitivas respetan la matriz actual (T/save/restore). */
import * as THREE from 'three';
const _c=new THREE.Color(),cc=new Map(),_m=new THREE.Matrix4(),_q=new THREE.Quaternion(),_e=new THREE.Euler(),_p=new THREE.Vector3(),_s=new THREE.Vector3(1,1,1);
export const rgb=h=>{if(Array.isArray(h))return h;let v=cc.get(h);if(!v){_c.set(h);v=[_c.r,_c.g,_c.b];cc.set(h,v)}return v};
/* variación de color (luminosidad ±a) determinista */
export const tint=(h,f)=>{const c=rgb(h);return[Math.min(1.4,c[0]*f),Math.min(1.4,c[1]*f),Math.min(1.4,c[2]*f)]};
const icoCache=new Map();
function ico(det){let g=icoCache.get(det);if(!g){g=new THREE.IcosahedronGeometry(1,det);g=g.index?g.toNonIndexed():g;icoCache.set(det,g)}return g}
export class Batch{
  constructor(){this.P=new Float32Array(1<<17);this.C=new Float32Array(1<<17);this.n=0;this.m=new THREE.Matrix4();this.st=[];this.ref=null}
  _grow(){const P=new Float32Array(this.P.length*2),C=new Float32Array(this.C.length*2);P.set(this.P);C.set(this.C);this.P=P;this.C=C}
  save(){this.st.push(this.m.clone());return this}
  restore(){this.m=this.st.pop();return this}
  /* traslada, rota (YXZ) y escala la matriz actual */
  T(x=0,y=0,z=0,ry=0,rx=0,rz=0,sx=1,sy=sx,sz=sx){_e.set(rx,ry,rz,'YXZ');_q.setFromEuler(_e);_p.set(x,y,z);_s.set(sx,sy,sz);_m.compose(_p,_q,_s);this.m.multiply(_m);return this}
  /* ejecuta fn dentro de una transformación local */
  at(x,y,z,ry,fn,rx,rz,sc){this.save();this.T(x,y,z,ry||0,rx||0,rz||0,sc||1);fn(this);this.restore();return this}
  tri(a,b,c,col){
    col=rgb(col);const e=this.m.elements,e0=e[0],e1=e[1],e2=e[2],e4=e[4],e5=e[5],e6=e[6],e8=e[8],e9=e[9],e10=e[10],e12=e[12],e13=e[13],e14=e[14];
    let ax=a[0],ay=a[1],az=a[2],bx=b[0],by=b[1],bz=b[2],cx=c[0],cy=c[1],cz=c[2];
    const Ax=e0*ax+e4*ay+e8*az+e12,Ay=e1*ax+e5*ay+e9*az+e13,Az=e2*ax+e6*ay+e10*az+e14;
    let Bx=e0*bx+e4*by+e8*bz+e12,By=e1*bx+e5*by+e9*bz+e13,Bz=e2*bx+e6*by+e10*bz+e14,Cx=e0*cx+e4*cy+e8*cz+e12,Cy=e1*cx+e5*cy+e9*cz+e13,Cz=e2*cx+e6*cy+e10*cz+e14;
    if(this.ref){const r=this.ref,rx=e0*r[0]+e4*r[1]+e8*r[2]+e12,ry=e1*r[0]+e5*r[1]+e9*r[2]+e13,rz=e2*r[0]+e6*r[1]+e10*r[2]+e14;
      const ux=Bx-Ax,uy=By-Ay,uz=Bz-Az,vx=Cx-Ax,vy=Cy-Ay,vz=Cz-Az,nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
      if(nx*((Ax+Bx+Cx)/3-rx)+ny*((Ay+By+Cy)/3-ry)+nz*((Az+Bz+Cz)/3-rz)<0){let t=Bx;Bx=Cx;Cx=t;t=By;By=Cy;Cy=t;t=Bz;Bz=Cz;Cz=t}}
    if(this.n+9>this.P.length)this._grow();const P=this.P,C=this.C,n=this.n,r0=col[0],g0=col[1],b0=col[2];
    P[n]=Ax;P[n+1]=Ay;P[n+2]=Az;P[n+3]=Bx;P[n+4]=By;P[n+5]=Bz;P[n+6]=Cx;P[n+7]=Cy;P[n+8]=Cz;
    C[n]=r0;C[n+1]=g0;C[n+2]=b0;C[n+3]=r0;C[n+4]=g0;C[n+5]=b0;C[n+6]=r0;C[n+7]=g0;C[n+8]=b0;this.n=n+9;return this}
  /* referencia de orientación: punto INTERIOR (coord. locales) para orientar las caras hacia fuera */
  orient(r){this.ref=r;this.rw=null;return this}
  free(){this.ref=null;this.rw=null;return this}
  quad(a,b,c,d,col){this.tri(a,b,c,col);this.tri(a,c,d,col);return this}
  /* caja centrada en (cx,cy,cz); sb=false omite la cara inferior */
  box(w,h,d,col,cx=0,cy=0,cz=0,sb=true){col=rgb(col);const x0=cx-w/2,x1=cx+w/2,y0=cy-h/2,y1=cy+h/2,z0=cz-d/2,z1=cz+d/2,o=this.ref;this.ref=null;
    this.quad([x1,y0,z1],[x1,y0,z0],[x1,y1,z0],[x1,y1,z1],col);this.quad([x0,y0,z0],[x0,y0,z1],[x0,y1,z1],[x0,y1,z0],col);
    this.quad([x0,y1,z1],[x1,y1,z1],[x1,y1,z0],[x0,y1,z0],col);if(sb)this.quad([x0,y0,z0],[x1,y0,z0],[x1,y0,z1],[x0,y0,z1],col);
    this.quad([x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1],col);this.quad([x1,y0,z0],[x0,y0,z0],[x0,y1,z0],[x1,y1,z0],col);this.ref=o;return this}
  /* caja con base en y=cy (apoyada) */
  boxB(w,h,d,col,cx=0,cy=0,cz=0,sb=false){return this.box(w,h,d,col,cx,cy+h/2,cz,sb)}
  /* cilindro/cono con base en cy, eje Y; r1=0 -> cono */
  cyl(r0,r1,h,seg,col,cx=0,cy=0,cz=0,capB=false){col=rgb(col);const o=this.ref;this.ref=null;const pts=(r,y)=>{const a=[];for(let i=0;i<seg;i++){const t=i/seg*6.2832;a.push([cx+r*Math.cos(t),cy+y,cz+r*Math.sin(t)])}return a};
    const B=pts(r0,0),Tp=pts(r1,h);
    for(let i=0;i<seg;i++){const j=(i+1)%seg;if(r1<1e-4)this.tri(B[i],[cx,cy+h,cz],B[j],col);else this.quad(B[i],Tp[i],Tp[j],B[j],col)}
    if(r1>=1e-4)for(let i=0;i<seg;i++)this.tri([cx,cy+h,cz],Tp[(i+1)%seg],Tp[i],col);
    if(capB)for(let i=0;i<seg;i++)this.tri([cx,cy,cz],B[i],B[(i+1)%seg],col);this.ref=o;return this}
  /* esferoide (icosaedro) */
  ball(r,col,x=0,y=0,z=0,sx=1,sy=1,sz=1,det=1){col=rgb(col);const g=ico(det),p=g.attributes.position,o=this.ref;this.ref=null;
    for(let i=0;i<p.count;i+=3){const v=[0,1,2].map(k=>[x+p.getX(i+k)*r*sx,y+p.getY(i+k)*r*sy,z+p.getZ(i+k)*r*sz]);this.tri(v[0],v[1],v[2],col)}this.ref=o;return this}
  /* geometría arbitraria de three (con o sin índice) */
  geo(g,col){col=rgb(col);const p=g.attributes.position,ix=g.index,n=ix?ix.count:p.count,o=this.ref;this.ref=null;
    const v=i=>{const k=ix?ix.getX(i):i;return[p.getX(k),p.getY(k),p.getZ(k)]};for(let i=0;i<n;i+=3)this.tri(v(i),v(i+1),v(i+2),col);this.ref=o;return this}
  /* superficie entre anillos (arrays de puntos [x,y,z] del mismo tamaño); colf(i,j)->color */
  loft(rings,colf,closed=true){const R=rings.length,N=rings[0].length;
    for(let j=0;j<R-1;j++)for(let i=0;i<(closed?N:N-1);i++){const i2=(i+1)%N;this.quad(rings[j][i],rings[j+1][i],rings[j+1][i2],rings[j][i2],rgb(typeof colf==='function'?colf(i,j):colf))}return this}
  count(){return this.n/9}
  /* crea la malla (sin fusionar luego: userData.noMerge) */
  mesh(mat){const N=this.n,p=this.P.subarray(0,N),g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(p,3));
    const n=new Float32Array(N);for(let i=0;i<N;i+=9){const ux=p[i+3]-p[i],uy=p[i+4]-p[i+1],uz=p[i+5]-p[i+2],vx=p[i+6]-p[i],vy=p[i+7]-p[i+1],vz=p[i+8]-p[i+2];
      let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;const l=Math.sqrt(nx*nx+ny*ny+nz*nz)||1;nx/=l;ny/=l;nz/=l;for(let k=0;k<9;k+=3){n[i+k]=nx;n[i+k+1]=ny;n[i+k+2]=nz}}
    g.setAttribute('normal',new THREE.BufferAttribute(n,3));g.setAttribute('color',new THREE.BufferAttribute(this.C.subarray(0,N),3));g.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(N/3*2),2));
    g.computeBoundingSphere();const m=new THREE.Mesh(g,mat);m.userData.noMerge=true;return m}
}
