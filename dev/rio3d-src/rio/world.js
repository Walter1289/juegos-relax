/* Mundo: curva infinita del río, altura del terreno, posición de lugares y zonas (jardín, bambú, bosque, niebla). */
import {SEAS,seasonIdx} from '../season.js';
import {hash,sm,vn} from './util.js';
/* ---------- ciclo de lugares: 11 por vuelta; el penúltimo es el jardín de sakura (tipo 3) y el último el castillo (tipo 10) ---------- */
export const NL=11,ORDER=[0,1,2,4,5,6,7,8,9,3,10];
export const lmType=k=>ORDER[((k%NL)+NL)%NL];
/* ---------- el río (curva infinita) ---------- */
const cxB=s=>{let b=0;const kc=Math.round((s-240)/260);for(let k=kc-1;k<=kc+1;k++)if(lmType(k)===6){const p=240+k*260+hash(k,5)*50,sd=1;b+=sd*34*Math.exp(-Math.pow((s-p)/70,2))}return b};
export const cx=s=>Math.sin(s*.0045)*55+Math.sin(s*.0017+1.3)*110+Math.sin(s*.011)*12+cxB(s);
export const hw=s=>21+4*Math.sin(s*.003+2)+2*Math.sin(s*.013);
export const tanAng=s=>Math.atan((cx(s+1)-cx(s-1))/2);
export function H(x,s){
  const d=Math.abs(x-cx(s))-hw(s);
  if(d<0)return -1.5+1.7*sm(-5,0,d);
  const hills=vn(x*.018,s*.018)*12+vn(x*.055,s*.055)*4;
  return castleH(x,s,.2+.6*sm(0,4,d)+hills*sm(5,60,d)+Math.min(d,160)*.1*sm(30,100,d));
}
/* ---------- Castillo de la Garza Blanca: meseta + foso tallados en el terreno (marco local del castillo) ----------
   Marco del castillo: origen en el centro de la meseta, +z hacia el río, x a lo largo de la orilla, y absoluta (agua = 0). */
export const CAS={PO:66,PH:7,X:66,ZF:44,ZB:-52,MZ0:50,MZ1:60};
const casC=new Map();
export function casInfo(k){let I=casC.get(k);if(!I){const s0=lmPos(k),a=tanAng(s0);I={k,s0,a,x0:cx(s0),hw0:hw(s0),side:hash(k,9)>.5?1:-1,ca:Math.cos(a),sa:Math.sin(a)};casC.set(k,I)}return I}
/* mundo (x,s) -> marco local del castillo */
export function casLocal(I,x,s){const wx=x-I.x0,wz=I.s0-s,gx=wx*I.ca+wz*I.sa,gz=-wx*I.sa+wz*I.ca;return[I.side*gz,-I.side*gx+I.hw0+CAS.PO]}
/* castillo cercano a s (o null) */
export function castleNear(s){const kc=Math.round((s-240)/260);for(let k=kc-1;k<=kc+1;k++)if(lmType(k)===10)return casInfo(k);return null}
const sdRect=(x,z,x0,x1,z0,z1)=>Math.max(x0-x,x-x1,z0-z,z-z1);
function castleH(x,s,h){
  const I=castleNear(s);if(!I||Math.abs(s-I.s0)>200)return h;
  const [lx,lz]=casLocal(I,x,s);if(lz<-130||lz>95||Math.abs(lx)>150)return h;
  const sd0=Math.max(Math.abs(lx)-CAS.X,lz-CAS.ZF,CAS.ZB-lz);
  /* alrededores aplanados (la meseta resalta como una colina baja) */
  const pull=1-sm(4,70,sd0);if(pull>0)h=h*(1-pull)+Math.min(h,3.2)*pull;
  const mp=1-sm(0,2,sd0+1.5);if(mp>0)h=h*(1-mp)+CAS.PH*mp;
  /* foso: franja frente al muro (z 46..60) + canal que lo une al río */
  const sd=Math.min(Math.max(Math.abs(lx)-62,Math.abs(lz-53)-7),Math.max(Math.abs(lx+50)-6,Math.abs(lz-65)-10));
  const mm=1-sm(-.2,2.2,sd);if(mm>0)h=h*(1-mm)-1.6*mm;
  return h}
/* 1 = meseta del castillo (para teñir el suelo) */
export function castleMask(x,s){const I=castleNear(s);if(!I||Math.abs(s-I.s0)>130)return 0;const[lx,lz]=casLocal(I,x,s);return 1-sm(0,2,Math.max(Math.abs(lx)-CAS.X,lz-CAS.ZF,CAS.ZB-lz)+1.5)}
/* true = sin árboles/arbustos (meseta, foso y explanada del embarcadero) */
export function castleClear(x,s){const I=castleNear(s);if(!I||Math.abs(s-I.s0)>130)return false;const[lx,lz]=casLocal(I,x,s);return Math.abs(lx)<80&&lz>-66&&lz<72}
/* dragón anunciador: unos 200–360 m río arriba del castillo, sin solaparse con el jardín de sakura */
export function dragonS(k){const c=lmPos(k),sk=lmPos(k-1);return sk-80>=c-360?sk-80:sk+80}

/* malla del terreno por ventana */
export const COLS=150,ROWS=120,DX=2.6,DZ=3,BLOCK=8;
/* estación activa */
export const SE=SEAS[seasonIdx()];
/* separación entre lugares y su posición a lo largo del río */
export const LMS=260,lmPos=k=>240+k*LMS+hash(k,5)*50;
/* zonas temáticas según la distancia a los lugares */
/* intensidad de cerezos rosados: jardín de sakura (todas las estaciones) y alrededores del castillo */
export const gardenAt=s=>{let b=0;const kc=Math.round((s-240)/260);for(let k=kc-2;k<=kc+2;k++){const t=lmType(k);if(t===3)b=Math.max(b,1-sm(40,170,Math.abs(lmPos(k)-s)));else if(t===10)b=Math.max(b,.9*(1-sm(55,230,Math.abs(lmPos(k)-s))))}return b};
export const bambooAt=s=>{let b=0;const kc=Math.round((s-240)/260);for(let k=kc-2;k<=kc+2;k++)if(lmType(k)===8)b=Math.max(b,1-sm(70,190,Math.abs(lmPos(k)-s)));return b};
export const clearAt=(s,d)=>{const kc=Math.round((s-240)/260);for(let k=kc-1;k<=kc+1;k++){const t=lmType(k);if((t===5||t===7)&&Math.abs(lmPos(k)-s)<(t===5?26:12)&&d<(t===5?48:20))return true}return false};
export const forestAt=s=>sm(.4,.55,vn(s*.0022+31,5)*.6+vn(s*.0053+8,2)*.4);
export const mistAt=s=>{let m=0;const i0=Math.floor(s/650);for(let i=i0-1;i<=i0+1;i++){const c=i*650+250+hash(i,7)*220,w=120+hash(i,8)*70,u=(s-c)/w;m=Math.max(m,Math.exp(-u*u))}return m};
