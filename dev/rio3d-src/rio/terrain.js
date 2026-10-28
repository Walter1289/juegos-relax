/* Terreno en streaming: reconstruye la malla y las instancias por ventana (generador por filas) alrededor del jugador. */
import * as THREE from 'three';
import {vn,hash,sm} from './util.js';
import {COLS,ROWS,BACK,DX,DZ,bambooAt,gardenAt,forestAt,H,cx,hw,SE,clearAt,castleClear,castleMask,BLOCK} from './world.js';
import {tmp,cBed,cG1,cG2,cSand,cHi,cTop,cBam,cSeasG,cGold,cGold2,cPetal,cGravel,MAXT,V3,Q,UP,S3,M4,crownM,trunkM,BLOS,SBLOS,SBBLOS,BRD,umbM,UMB,pineM,PINE,bushM,BBLOS,BUSH,bambM,BAMB,bleafM,BLEAF,reedM,REED,padM,lotM,tPos,tCol,tGeo} from './props.js';
let anchor={a:1e9,b:1e9};
const tPosS=new Float32Array(COLS*ROWS*3),tColS=new Float32Array(COLS*ROWS*3),STG=new Map();
const FULL=new Map();let cullDirty=true;
function stg(mesh){let s=STG.get(mesh);if(!s){const n=mesh.instanceMatrix.array.length;s={m:new Float32Array(n),c:new Float32Array(n/16*3)};STG.set(mesh,s)}return s}
const stM=(mesh,i,M)=>{M.toArray(stg(mesh).m,i*16)};
const stC=(mesh,i,c)=>{const S=stg(mesh);S.hc=1;const a=S.c;a[i*3]=c.r;a[i*3+1]=c.g;a[i*3+2]=c.b};
function commitInst(mesh,n){const s=stg(mesh);mesh.instanceMatrix.array.set(s.m.subarray(0,n*16));mesh.instanceMatrix.needsUpdate=true;if(s.hc){if(!mesh.instanceColor)mesh.setColorAt(0,tmp);mesh.instanceColor.array.set(s.c.subarray(0,n*3));mesh.instanceColor.needsUpdate=true}mesh.count=n;FULL.set(mesh,n);cullDirty=true}
function* rebuild(ax,as){
  const cm=[];
  const x0=ax-(COLS/2)*DX,s0=as-BACK;
  let p=0,np=0,nc=0,nt=0,nu=0,nr=0,nb=0,nk=0;
  for(let j=0;j<ROWS;j++){if(j%5===0)yield;
    const s=s0+j*DZ,bam=bambooAt(s),ga=gardenAt(s),fo=forestAt(s);
    for(let i=0;i<COLS;i++){
      const x=x0+i*DX,y=H(x,s),o=(j*COLS+i)*3;
      tPosS[o]=x;tPosS[o+1]=y;tPosS[o+2]=-s;
      const d=Math.abs(x-cx(s))-hw(s),n=vn(x*.05,s*.05),j2=(hash(i+x0,j)-.5)*.05;
      if(d<0)tmp.copy(cBed);
      else{
        tmp.copy(cG1).lerp(cG2,n);
        tmp.lerp(cSand,1-sm(.5,3.5,d));
        tmp.lerp(cHi,sm(6,13,y)*.8);tmp.lerp(cTop,sm(13,24,y));if(bam>0)tmp.lerp(cBam,bam*sm(0,5,d)*.65);if(SE.gk)tmp.lerp(cSeasG,SE.gk*sm(.4,3,d)*(1-bam*.6));
        if(ga>.05){const pk=vn(x*.11+3,s*.11+7);if(pk>.5)tmp.lerp(cPetal,ga*sm(.5,.8,pk)*.42*sm(.4,3,d))}
        {const cm=castleMask(x,s);if(cm>0)tmp.lerp(cGravel,cm*.9)}
        {const gn=vn(x*.03+50,s*.03+20);const gk=sm(.5,.72,gn)*sm(.4,2.5,d)*(1-sm(9,26,d));if(gk>0)tmp.lerp(vn(x*.2,s*.2)>.5?cGold:cGold2,gk*.85)}
      }
      tColS[o]=tmp.r+j2;tColS[o+1]=tmp.g+j2;tColS[o+2]=tmp.b+j2;
      // árboles
      if(d>5&&y<17&&np<MAXT&&!clearAt(s,d)&&!castleClear(x,s)){
        const r=hash(x*3.1,s*1.7);
        const dens=.05*(.5+vn(x*.03+9,s*.03))*(d<34?.75:1)+(d<36?(.05+.09*fo)*(1-d/44):0)*(.6+.8*vn(x*.07,s*.07))+(d<60?ga*.11*(1-d/70):0);
        if(r<dens*(1-bam*.92)){
          const ox=(hash(x,s)-.5)*DX*.9,oz=(hash(s,x)-.5)*DZ*.9,sc=.8+hash(x+4,s+1)*.9;
          V3.set(x+ox,H(x+ox,s+oz)-.1,-(s+oz));
          Q.setFromAxisAngle(UP,hash(s,x)*6.28);
          const hb=hash(x*.7,s*.3),blossom=d<60&&hb<(.04+ga*.95);
          if(blossom){
            S3.set(sc,sc,sc);M4.compose(V3,Q,S3);stM(crownM,nc,M4);stM(trunkM,nc,M4);
            /* jardín de sakura y cerezos del castillo: SIEMPRE rosados, sea cual sea la estación */
            stC(crownM,nc,tmp.set((hb<ga*.95?SBLOS:BLOS)[(hash(x,s+3)*4)|0]));nc++;
          }else if(hash(x*1.1,s*1.7)<.3){
            S3.set(sc*1.05,sc*(.9+hash(s,5)*.5),sc*1.05);M4.compose(V3,Q,S3);stM(crownM,nc,M4);stM(trunkM,nc,M4);stC(crownM,nc,tmp.set(BRD[(hash(x,s+7)*BRD.length)|0]));nc++;
          }else if(hash(x*1.9,s*.8)>.55&&nu<560){
            S3.set(sc*1.2,sc*1.2,sc*1.2);M4.compose(V3,Q,S3);stM(umbM,nu,M4);stC(umbM,nu,tmp.set(UMB[(hash(x+5,s)*4)|0]));nu++;
          }else{
            S3.set(sc,sc*(.9+hash(s,3)*1.1),sc);M4.compose(V3,Q,S3);stM(pineM,nt,M4);
            stC(pineM,nt,tmp.set(PINE[(hash(x+2,s)*4)|0]));nt++;
          }
          np++;
        }
      }
    }
  }
  for(let j=0;j<ROWS;j++){if(j%5===0)yield;const s=s0+j*DZ,ga=gardenAt(s),bam=bambooAt(s);
    for(let i=0;i<COLS;i+=1){const x=x0+i*DX,d=Math.abs(x-cx(s))-hw(s);if(d<2.2||d>55||nb>=2380||clearAt(s,d)||castleClear(x,s))continue;const y=H(x,s);if(y>15)continue;
      const r=hash(x*2.3+1,s*1.3);if(r>(.05+ga*.2)*(1-bam*.8))continue;
      const ox=(hash(x,s+9)-.5)*DX,oz=(hash(s,x+9)-.5)*DZ,sc=.7+hash(x+8,s)*.9+ga*.3;V3.set(x+ox,H(x+ox,s+oz)-.1,-(s+oz));Q.setFromAxisAngle(UP,hash(s,x)*6.28);S3.set(sc*1.2,sc,sc*1.1);M4.compose(V3,Q,S3);
      stM(bushM,nb,M4);stC(bushM,nb,tmp.set(ga>.25&&hash(x,s+5)<.55?SBBLOS[(hash(x,s)*4)|0]:BUSH[(hash(s,x+2)*4)|0]));nb++}}
  for(let j=0;j<ROWS;j++){if(j%5===0)yield;const s=s0+j*DZ,bam=bambooAt(s);if(bam<.02)continue;
    for(let i=0;i<COLS;i++){const x=x0+i*DX,c0=cx(s),d=Math.abs(x-c0)-hw(s);if(d<.3||d>26||nk>=2790)continue;
      for(let q=0;q<2;q++){if(hash(x*3.7+q*5,s*2.9+q)>bam*(1.05-d*.012))continue;
        const ox=(hash(x+q,s+3)-.5)*DX,oz=(hash(s+q,x+3)-.5)*DZ,xx=x+ox,zz=s+oz,hh=11+hash(xx,zz)*12,sc=.8+hash(zz,xx)*.6,tl=.05+hash(xx*2,zz)*.14,sg=xx>c0?1:-1,y0=H(xx,zz)-.3;
        V3.set(xx,y0,-zz);Q.setFromAxisAngle(new THREE.Vector3(0,0,1),sg*tl);S3.set(sc,hh,sc);M4.compose(V3,Q,S3);stM(bambM,nk,M4);stC(bambM,nk,tmp.set(BAMB[(hash(xx,zz+1)*4)|0]));
        const tx=xx-sg*Math.sin(tl)*hh,ty=y0+Math.cos(tl)*hh;V3.set(tx,ty,-zz);Q.identity();const ls=1.5+hash(zz,xx+4)*1.6;S3.set(ls,ls,ls);M4.compose(V3,Q,S3);stM(bleafM,nk,M4);stC(bleafM,nk,tmp.set(BLEAF[(hash(xx+2,zz)*4)|0]));nk++}}}
  cm.push([bambM,nk],[bleafM,nk]);
  cm.push([bushM,nb]);
  for(let j=0;j<ROWS;j++){if(j%5===0)yield;const s=s0+j*DZ;
    for(let k=0;k<4;k++){const sd=k%2?1:-1;if(hash(s*.53,k+3)>.62||nr>=1960)continue;
      const inw=k>1&&hash(s,k+9)>.6;const e=hw(s)+sd*0+(inw?-(1.5+hash(s,k+1)*4):(-.3+hash(s,k+2)*3.4));
      const x=cx(s)+sd*e,z=-(s+(hash(s,k)-.5)*DZ);if(inw&&Math.abs(x-cx(s))>hw(s)-1.5)continue;
      const sc=.7+hash(s+k,7)*.9;V3.set(x,Math.max(-.2,H(x,s)-.15),z);Q.setFromAxisAngle(UP,hash(s,k+5)*6.28);S3.set(sc,sc*(.8+hash(s,k+6)*.7),sc);M4.compose(V3,Q,S3);
      stM(reedM,nr,M4);stC(reedM,nr,tmp.set(REED[(hash(s,k+4)*4)|0]));nr++}}
  cm.push([reedM,nr],[umbM,nu]);
  cm.push([pineM,nt],[crownM,nc],[trunkM,nc]);


  // nenúfares en el agua
  let pn=0,ln=0;
  for(let j=0;j<ROWS;j++){if(j%5===0)yield;const s=s0+j*DZ;
    for(let k=0;k<3;k++){
      if(hash(s*.37,k+7)>.5||pn>=700)continue;
      const e=(hash(s+k,5)*2-1)*(hw(s)-2.2),x=cx(s)+e;
      V3.set(x,.03,-(s+(hash(s,k)-.5)*DZ));Q.setFromAxisAngle(UP,hash(s,k+2)*6.28);const sc=.7+hash(s+k,9)*.9;S3.set(sc,1,sc);
      M4.compose(V3,Q,S3);stM(padM,pn,M4);stC(padM,pn,tmp.set(hash(s,k)>.5?'#a8dba9':'#96cfa0'));pn++;
      if(hash(s,k+11)>.72&&ln<224){M4.compose(V3.setY(.05),Q,S3.set(1,1,1));stM(lotM,ln,M4);stC(lotM,ln,tmp.set(hash(s,k+1)>.4?'#f7b9cf':'#fbe39a'));ln++}
    }}
  cm.push([padM,pn],[lotM,ln]);

  for(const [mm,n] of cm)commitInst(mm,n);tPos.set(tPosS);tCol.set(tColS);tGeo.attributes.position.needsUpdate=true;tGeo.attributes.color.needsUpdate=true;tGeo.computeVertexNormals();
}

/* Recorte por vista: las instancias (árboles, arbustos, bambú…) que quedan detrás de la cámara, fuera de pantalla o más allá de la niebla no se dibujan.
   Libera mucha carga de la GPU, y con ella el juego puede mantener la resolución nativa del iPad en vez de bajarla. */
const CR=new Map([[pineM,16],[crownM,14],[umbM,12],[bambM,26],[bushM,4],[reedM,4],[padM,2.5],[lotM,2.5]]);
const PAIR=new Map([[crownM,trunkM],[bambM,bleafM]]);
const _mc=new THREE.PerspectiveCamera(),_pm=new THREE.Matrix4(),_fr=new THREE.Frustum(),_lp=new THREE.Vector3(1e9,0,0),_lq=new THREE.Quaternion(),_cp=new THREE.Vector3(),_cq=new THREE.Quaternion();
export function cullInstances(cam,fogFar){
  cam.getWorldPosition(_cp);cam.getWorldQuaternion(_cq);
  if(!cullDirty&&_cp.distanceToSquared(_lp)<6&&Math.abs(_cq.dot(_lq))>.9997&&Math.abs(fogFar-_lf)<8)return;
  cullDirty=false;_lp.copy(_cp);_lq.copy(_cq);_lf=fogFar;
  /* frustum ensanchado (margen para giros rápidos) */
  _mc.fov=Math.min(150,cam.fov*1.4);_mc.aspect=cam.aspect*1.15;_mc.near=cam.near;_mc.far=cam.far;_mc.updateProjectionMatrix();
  _mc.matrixWorld.copy(cam.matrixWorld);_mc.matrixWorldInverse.copy(cam.matrixWorldInverse);
  _pm.multiplyMatrices(_mc.projectionMatrix,_mc.matrixWorldInverse);_fr.setFromProjectionMatrix(_pm);
  const pl=_fr.planes,far=fogFar+30;
  for(const [mesh,r] of CR){
    const n=FULL.get(mesh);if(!n)continue;const st=stg(mesh),m=st.m,dst=mesh.instanceMatrix.array;
    const mate=PAIR.get(mesh),st2=mate&&FULL.get(mate)?stg(mate):null;
    let k=0;
    for(let i=0;i<n;i++){
      const o=i*16,x=m[o+12],y=m[o+13],z=m[o+14];
      const dx=x-_cp.x,dz=z-_cp.z;if(dx*dx+dz*dz>(far+r)*(far+r))continue;
      let vis=true;for(let q=0;q<6;q++){const pn=pl[q];if(pn.normal.x*x+pn.normal.y*y+pn.normal.z*z+pn.constant<-r){vis=false;break}}
      if(!vis)continue;
      const d=k*16;for(let c=0;c<16;c++)dst[d+c]=m[o+c];
      if(st.hc){const ic=mesh.instanceColor.array;ic[k*3]=st.c[i*3];ic[k*3+1]=st.c[i*3+1];ic[k*3+2]=st.c[i*3+2]}
      if(st2){const da=mate.instanceMatrix.array;for(let c=0;c<16;c++)da[d+c]=st2.m[o+c];if(st2.hc){const ic2=mate.instanceColor.array;ic2[k*3]=st2.c[i*3];ic2[k*3+1]=st2.c[i*3+1];ic2[k*3+2]=st2.c[i*3+2]}}
      k++;
    }
    mesh.count=k;mesh.instanceMatrix.needsUpdate=true;if(st.hc&&mesh.instanceColor)mesh.instanceColor.needsUpdate=true;
    if(mate){mate.count=k;mate.instanceMatrix.needsUpdate=true;if(mate.instanceColor)mate.instanceColor.needsUpdate=true}
  }
}
let _lf=0;
let rbGen=null,rbAs=0,rbDone=false;
export function ensureTerrain(px,pz,buildFoam){
  const as=Math.floor(-pz/(DZ*BLOCK))*DZ*BLOCK,ax=Math.round(px/(DX*BLOCK))*DX*BLOCK;
  if(!rbGen&&(as!==anchor.b||ax!==anchor.a)){const far=!rbDone||Math.abs(as-anchor.b)>150||Math.abs(ax-anchor.a)>150;anchor={a:ax,b:as};rbGen=rebuild(ax,as);rbAs=as;if(far){while(!rbGen.next().done);buildFoam(as);rbGen=null;rbDone=true}}
  if(rbGen){const t0=performance.now();let r;do{r=rbGen.next()}while(!r.done&&performance.now()-t0<3);if(r.done){buildFoam(rbAs);rbGen=null;rbDone=true}}
}

