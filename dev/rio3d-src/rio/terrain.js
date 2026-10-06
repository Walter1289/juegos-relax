/* Terreno en streaming: reconstruye la malla y las instancias por ventana (generador por filas) alrededor del jugador. */
import * as THREE from 'three';
import {vn,hash,sm} from './util.js';
import {COLS,ROWS,DX,DZ,bambooAt,gardenAt,forestAt,H,cx,hw,SE,clearAt,BLOCK} from './world.js';
import {tmp,cBed,cG1,cG2,cSand,cHi,cTop,cBam,cSeasG,cGold,cGold2,MAXT,V3,Q,UP,S3,M4,crownM,trunkM,BLOS,BRD,umbM,UMB,pineM,PINE,bushM,BBLOS,BUSH,bambM,BAMB,bleafM,BLEAF,reedM,REED,padM,lotM,tPos,tCol,tGeo} from './props.js';
let anchor={a:1e9,b:1e9};
const tPosS=new Float32Array(COLS*ROWS*3),tColS=new Float32Array(COLS*ROWS*3),STG=new Map();
function stg(mesh){let s=STG.get(mesh);if(!s){const n=mesh.instanceMatrix.array.length;s={m:new Float32Array(n),c:new Float32Array(n/16*3)};STG.set(mesh,s)}return s}
const stM=(mesh,i,M)=>{M.toArray(stg(mesh).m,i*16)};
const stC=(mesh,i,c)=>{const S=stg(mesh);S.hc=1;const a=S.c;a[i*3]=c.r;a[i*3+1]=c.g;a[i*3+2]=c.b};
function commitInst(mesh,n){const s=stg(mesh);mesh.instanceMatrix.array.set(s.m.subarray(0,n*16));mesh.instanceMatrix.needsUpdate=true;if(s.hc){if(!mesh.instanceColor)mesh.setColorAt(0,tmp);mesh.instanceColor.array.set(s.c.subarray(0,n*3));mesh.instanceColor.needsUpdate=true}mesh.count=n}
function* rebuild(ax,as){
  const cm=[];
  const x0=ax-(COLS/2)*DX,s0=as-60*1;
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
        {const gn=vn(x*.03+50,s*.03+20);const gk=sm(.5,.72,gn)*sm(.4,2.5,d)*(1-sm(9,26,d));if(gk>0)tmp.lerp(vn(x*.2,s*.2)>.5?cGold:cGold2,gk*.85)}
      }
      tColS[o]=tmp.r+j2;tColS[o+1]=tmp.g+j2;tColS[o+2]=tmp.b+j2;
      // árboles
      if(d>5&&y<17&&np<MAXT&&!clearAt(s,d)){
        const r=hash(x*3.1,s*1.7);
        const dens=.05*(.5+vn(x*.03+9,s*.03))*(d<34?.75:1)+(d<36?(.05+.09*fo)*(1-d/44):0)*(.6+.8*vn(x*.07,s*.07))+(d<60?ga*.11*(1-d/70):0);
        if(r<dens*(1-bam*.92)){
          const ox=(hash(x,s)-.5)*DX*.9,oz=(hash(s,x)-.5)*DZ*.9,sc=.8+hash(x+4,s+1)*.9;
          V3.set(x+ox,H(x+ox,s+oz)-.1,-(s+oz));
          Q.setFromAxisAngle(UP,hash(s,x)*6.28);
          const blossom=d<60&&hash(x*.7,s*.3)<(.04+ga*.95);
          if(blossom){
            S3.set(sc,sc,sc);M4.compose(V3,Q,S3);stM(crownM,nc,M4);stM(trunkM,nc,M4);
            stC(crownM,nc,tmp.set(BLOS[(hash(x,s+3)*4)|0]));nc++;
          }else if(hash(x*1.1,s*1.7)<.3){
            S3.set(sc*1.05,sc*(.9+hash(s,5)*.5),sc*1.05);M4.compose(V3,Q,S3);stM(crownM,nc,M4);stM(trunkM,nc,M4);stC(crownM,nc,tmp.set(BRD[(hash(x,s+7)*BRD.length)|0]));nc++;
          }else if(hash(x*1.9,s*.8)>.55&&nu<400){
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
    for(let i=0;i<COLS;i+=1){const x=x0+i*DX,d=Math.abs(x-cx(s))-hw(s);if(d<2.2||d>55||nb>=1700||clearAt(s,d))continue;const y=H(x,s);if(y>15)continue;
      const r=hash(x*2.3+1,s*1.3);if(r>(.05+ga*.2)*(1-bam*.8))continue;
      const ox=(hash(x,s+9)-.5)*DX,oz=(hash(s,x+9)-.5)*DZ,sc=.7+hash(x+8,s)*.9+ga*.3;V3.set(x+ox,H(x+ox,s+oz)-.1,-(s+oz));Q.setFromAxisAngle(UP,hash(s,x)*6.28);S3.set(sc*1.2,sc,sc*1.1);M4.compose(V3,Q,S3);
      stM(bushM,nb,M4);stC(bushM,nb,tmp.set(ga>.25&&hash(x,s+5)<.55?BBLOS[(hash(x,s)*4)|0]:BUSH[(hash(s,x+2)*4)|0]));nb++}}
  for(let j=0;j<ROWS;j++){if(j%5===0)yield;const s=s0+j*DZ,bam=bambooAt(s);if(bam<.02)continue;
    for(let i=0;i<COLS;i++){const x=x0+i*DX,c0=cx(s),d=Math.abs(x-c0)-hw(s);if(d<.3||d>26||nk>=1990)continue;
      for(let q=0;q<2;q++){if(hash(x*3.7+q*5,s*2.9+q)>bam*(1.05-d*.012))continue;
        const ox=(hash(x+q,s+3)-.5)*DX,oz=(hash(s+q,x+3)-.5)*DZ,xx=x+ox,zz=s+oz,hh=11+hash(xx,zz)*12,sc=.8+hash(zz,xx)*.6,tl=.05+hash(xx*2,zz)*.14,sg=xx>c0?1:-1,y0=H(xx,zz)-.3;
        V3.set(xx,y0,-zz);Q.setFromAxisAngle(new THREE.Vector3(0,0,1),sg*tl);S3.set(sc,hh,sc);M4.compose(V3,Q,S3);stM(bambM,nk,M4);stC(bambM,nk,tmp.set(BAMB[(hash(xx,zz+1)*4)|0]));
        const tx=xx-sg*Math.sin(tl)*hh,ty=y0+Math.cos(tl)*hh;V3.set(tx,ty,-zz);Q.identity();const ls=1.5+hash(zz,xx+4)*1.6;S3.set(ls,ls,ls);M4.compose(V3,Q,S3);stM(bleafM,nk,M4);stC(bleafM,nk,tmp.set(BLEAF[(hash(xx+2,zz)*4)|0]));nk++}}}
  cm.push([bambM,nk],[bleafM,nk]);
  cm.push([bushM,nb]);
  for(let j=0;j<ROWS;j++){if(j%5===0)yield;const s=s0+j*DZ;
    for(let k=0;k<4;k++){const sd=k%2?1:-1;if(hash(s*.53,k+3)>.62||nr>=1400)continue;
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
      if(hash(s*.37,k+7)>.5||pn>=500)continue;
      const e=(hash(s+k,5)*2-1)*(hw(s)-2.2),x=cx(s)+e;
      V3.set(x,.03,-(s+(hash(s,k)-.5)*DZ));Q.setFromAxisAngle(UP,hash(s,k+2)*6.28);const sc=.7+hash(s+k,9)*.9;S3.set(sc,1,sc);
      M4.compose(V3,Q,S3);stM(padM,pn,M4);stC(padM,pn,tmp.set(hash(s,k)>.5?'#a8dba9':'#96cfa0'));pn++;
      if(hash(s,k+11)>.72&&ln<160){M4.compose(V3.setY(.05),Q,S3.set(1,1,1));stM(lotM,ln,M4);stC(lotM,ln,tmp.set(hash(s,k+1)>.4?'#f7b9cf':'#fbe39a'));ln++}
    }}
  cm.push([padM,pn],[lotM,ln]);

  for(const [mm,n] of cm)commitInst(mm,n);tPos.set(tPosS);tCol.set(tColS);tGeo.attributes.position.needsUpdate=true;tGeo.attributes.color.needsUpdate=true;tGeo.computeVertexNormals();
}
let rbGen=null,rbAs=0,rbDone=false;
export function ensureTerrain(px,pz,buildFoam){
  const as=Math.floor(-pz/(DZ*BLOCK))*DZ*BLOCK,ax=Math.round(px/(DX*BLOCK))*DX*BLOCK;
  if(!rbGen&&(as!==anchor.b||ax!==anchor.a)){const far=!rbDone||Math.abs(as-anchor.b)>150||Math.abs(ax-anchor.a)>150;anchor={a:ax,b:as};rbGen=rebuild(ax,as);rbAs=as;if(far){while(!rbGen.next().done);buildFoam(as);rbGen=null;rbDone=true}}
  if(rbGen){const t0=performance.now();let r;do{r=rbGen.next()}while(!r.done&&performance.now()-t0<3);if(r.done){buildFoam(rbAs);rbGen=null;rbDone=true}}
}

