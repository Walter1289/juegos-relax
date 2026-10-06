/* Mundo: curva infinita del río, altura del terreno, posición de lugares y zonas (jardín, bambú, bosque, niebla). */
import {SEAS,seasonIdx} from '../season.js';
import {hash,sm,vn} from './util.js';
/* ---------- el río (curva infinita) ---------- */
const cxB=s=>{let b=0;const kc=Math.round((s-240)/260);for(let k=kc-1;k<=kc+1;k++)if(((k%10)+10)%10===6){const p=240+k*260+hash(k,5)*50,sd=1;b+=sd*34*Math.exp(-Math.pow((s-p)/70,2))}return b};
export const cx=s=>Math.sin(s*.0045)*55+Math.sin(s*.0017+1.3)*110+Math.sin(s*.011)*12+cxB(s);
export const hw=s=>21+4*Math.sin(s*.003+2)+2*Math.sin(s*.013);
export const tanAng=s=>Math.atan((cx(s+1)-cx(s-1))/2);
export function H(x,s){
  const d=Math.abs(x-cx(s))-hw(s);
  if(d<0)return -1.5+1.7*sm(-5,0,d);
  const hills=vn(x*.018,s*.018)*12+vn(x*.055,s*.055)*4;
  return .2+.6*sm(0,4,d)+hills*sm(5,60,d)+Math.min(d,160)*.1*sm(30,100,d);
}

/* malla del terreno por ventana */
export const COLS=150,ROWS=120,DX=2.6,DZ=3,BLOCK=8;
/* estación activa */
export const SE=SEAS[seasonIdx()];
/* separación entre lugares y su posición a lo largo del río */
export const LMS=260,lmPos=k=>240+k*LMS+hash(k,5)*50;
/* zonas temáticas según la distancia a los lugares */
export const gardenAt=s=>{let b=0;const kc=Math.round((s-240)/260);for(let k=kc-2;k<=kc+2;k++)if(((k%10)+10)%10===3)b=Math.max(b,1-sm(40,170,Math.abs(lmPos(k)-s)));return b};
export const bambooAt=s=>{let b=0;const kc=Math.round((s-240)/260);for(let k=kc-2;k<=kc+2;k++)if(((k%10)+10)%10===8)b=Math.max(b,1-sm(70,190,Math.abs(lmPos(k)-s)));return b};
export const clearAt=(s,d)=>{const kc=Math.round((s-240)/260);for(let k=kc-1;k<=kc+1;k++){const t=((k%10)+10)%10;if((t===5||t===7)&&Math.abs(lmPos(k)-s)<(t===5?26:12)&&d<(t===5?48:20))return true}return false};
export const forestAt=s=>sm(.4,.55,vn(s*.0022+31,5)*.6+vn(s*.0053+8,2)*.4);
export const mistAt=s=>{let m=0;const i0=Math.floor(s/650);for(let i=i0-1;i<=i0+1;i++){const c=i*650+250+hash(i,7)*220,w=120+hash(i,8)*70,u=(s-c)/w;m=Math.max(m,Math.exp(-u*u))}return m};
