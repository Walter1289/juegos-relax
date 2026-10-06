/* world.js — el mundo: curva del río, ancho, lugares (LM), celdas de objetos generadas por hash y luz del día */
import {clamp,lerp,H2} from './util.js';

/* ===== Mundo: el río es una función de la distancia recorrida s ===== */
export const center=s=>Math.sin(s*.0021)*130+Math.sin(s*.00057+1.3)*190+Math.sin(s*.0061+.4)*32;
export const halfW=s=>{let w=165+34*Math.sin(s*.0013+2)+14*Math.sin(s*.004);const k=lmIndexAt(s);if(lmType(k)===9){const u=Math.max(0,1-Math.abs(s-lmPos(k))/750);w+=95*u*u*(3-2*u)}return w};
export const LM=['Puente de madera','Torii sobre el agua','Aldea de farolillos','Jardín de sakura','Cañaveral de las garzas','Templo de la campana','Cascadita de musgo','Casa de té','Bosque de bambú','Estanque de lotos'];
export const LM_GAP=4000,LM_OFF=2000;
export const lmIndexAt=s=>Math.round((s-LM_OFF)/LM_GAP);
export const lmPos=k=>LM_OFF+k*LM_GAP;
export const lmType=k=>((k%10)+10)%10;
/* Objetos de cada celda de 100 px de río, generados siempre igual a partir de su número */
export const CELL=100;
const cache=new Map();
export function genCell(c){
  let a=cache.get(c);if(a)return a;
  a=[];
  const R=i=>H2(c,i),base=c*CELL,mid=base+CELL/2,hw=halfW(mid);
  const k=lmIndexAt(mid),near=Math.abs(mid-lmPos(k))<520,type=lmType(k);
  const grove=near&&type===3,marsh=near&&type===4,bamb=near&&type===8,lotus=near&&type===9;
  for(let j=0;j<5;j++)a.push({t:'streak',s:base+R(40+j)*CELL,off:(R(45+j)*2-1)*(hw-20),len:10+R(50+j)*18});
  if(R(1)<.55)a.push({t:'lantern',s:base+R(2)*CELL,off:(R(3)*2-1)*(hw-60),id:c+':l'});
  if(R(4)<.5){const n=2+Math.floor(R(5)*4);for(let j=0;j<n;j++)a.push({t:'pad',s:base+R(6+j)*CELL,off:(R(10+j)*2-1)*(hw-40),r:10+R(14+j)*9,sd:R(20+j)})}
  if(lotus)for(let j=0;j<7;j++)a.push({t:'pad',s:base+R(60+j)*CELL,off:(R(70+j)*2-1)*(hw-30),r:12+R(80+j)*10,sd:.6+R(90+j)*.4});
  if(R(7)<.18)a.push({t:'rock',s:base+R(8)*CELL,off:(R(9)*2-1)*(hw-70),r:15+R(11)*12,id:c+':r',sd:R(24)});
  if(R(12)<.14)a.push({t:'duck',s:base+R(13)*CELL,off:(R(15)*2-1)*(hw-80),sd:R(16)});
  if(R(17)<.16)a.push({t:'koi',s:base+R(18)*CELL,off:(R(19)*2-1)*(hw-80),sd:R(21)});
  for(const side of [-1,1]){
    for(let j=0;j<2;j++){const s=base+H2(c,side*13+j)*CELL;a.push({t:'patch',s,off:side*(halfW(s)+20+H2(c,side*17+j)*420),r:40+H2(c,side*19+j)*60,sd:H2(c,side*23+j)})}
    const n=4+Math.floor(H2(c,side*7+30)*4);
    for(let j=0;j<n;j++){
      const s=base+H2(c,side*100+j)*CELL,kind=H2(c,side*50+j+.5),e=H2(c,side*70+j),h=halfW(s);
      let t='tuft',extra=14+Math.pow(e,1.5)*520;
      if(marsh&&kind>.25){t='reed';extra=-14+e*90}
      else if(bamb&&kind>.2){t='bamboo';extra=8+e*190}
      else if(grove&&kind>.45){t='sakura';extra=60+e*420}
      else if(kind>.94){t='post';extra=16+e*10}
      else if(kind>.82){t=grove?'sakura':'tree';extra=60+e*460}
      else if(kind>.7){t='bamboo';extra=30+e*300}
      else if(kind>.55){t='reed';extra=-6+e*18}
      a.push({t,s,off:side*(h+extra),side,sd:H2(c,side*90+j),r:t==='sakura'?46+e*30:t==='tree'?34+e*26:0});
    }
  }
  cache.set(c,a);
  if(cache.size>240)cache.delete(cache.keys().next().value);
  return a;
}

/* Luz del día: ciclo lento de atardecer a noche y de vuelta */
const KF=[[0,[255,170,90,.16],.05],[.22,[255,120,90,.2],.14],[.42,[60,70,150,.3],.48],[.62,[20,28,80,.26],.64],[.84,[120,100,180,.22],.34],[1,[255,170,90,.16],.05]];
export function sky(tod){
  let i=0;while(i<KF.length-2&&tod>KF[i+1][0])i++;
  const a=KF[i],b=KF[i+1];let u=clamp((tod-a[0])/(b[0]-a[0]),0,1);u=u*u*(3-2*u);
  return {tint:a[1].map((v,j)=>lerp(v,b[1][j],u)),dark:lerp(a[2],b[2],u)};
}
