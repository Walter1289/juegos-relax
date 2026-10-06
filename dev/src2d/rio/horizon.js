/* horizon.js — horizonte: cielo, sol/luna, montañas de tinta en tres planos y bruma */
import {clamp,lerp,hash,circ,rgba} from './util.js';
import {V,G} from './state.js';

export const HZK=[[0,[244,205,150],[252,236,214]],[.22,[238,150,120],[250,205,170]],[.42,[84,92,160],[160,150,198]],[.62,[44,56,112],[96,104,164]],[.84,[130,116,176],[232,186,176]],[1,[244,205,150],[252,236,214]]];
export function hzCol(tod){
  let i=0;while(i<HZK.length-2&&tod>HZK[i+1][0])i++;
  const a=HZK[i],b=HZK[i+1];let u=clamp((tod-a[0])/(b[0]-a[0]),0,1);u=u*u*(3-2*u);
  return [a[1].map((c,j)=>lerp(c,b[1][j],u)),a[2].map((c,j)=>lerp(c,b[2][j],u))];
}
export function drawHorizon(g,sk){
  const {VW,VH}=V,hh=Math.max(96,VH*.15),tod=(G.clock/360)%1,[top,bot]=hzCol(tod);
  let gr=g.createLinearGradient(0,0,0,hh);gr.addColorStop(0,rgba(top,1));gr.addColorStop(1,rgba(bot,1));
  g.fillStyle=gr;g.fillRect(0,0,VW,hh);
  // sol bajo y luna
  if(tod<.46){const sy=hh*(.5+tod*1.0);let sg=g.createRadialGradient(VW*.62,sy,2,VW*.62,sy,60);sg.addColorStop(0,'rgba(255,240,200,.95)');sg.addColorStop(.25,'rgba(255,200,130,.5)');sg.addColorStop(1,'rgba(255,200,130,0)');g.fillStyle=sg;g.fillRect(VW*.62-70,sy-70,140,140);g.fillStyle='#fff4d6';circ(g,VW*.62,sy,11);g.fill()}
  else if(tod>.4&&tod<.92){g.fillStyle='rgba(250,246,226,.95)';circ(g,VW*.3,hh*.42,12);g.fill();V.lights.push([VW*.3,hh*.42,90,.7])}
  // montañas kársticas en tres planos
  const dk=clamp(V.dark*1.1,0,1);
  [[.32,[168,196,190],.5,.58,.003],[.5,[118,160,156],.62,.45,.006],[.72,[84,126,122],.72,.34,.011]].forEach(([h0,col,al,hf,par],l)=>{
    const sh=V.sc*par+V.cs0*par*2,P=170;
    const c=[lerp(col[0],34,dk),lerp(col[1],46,dk),lerp(col[2],92,dk)];
    g.fillStyle=rgba(c,al);
    const k0=Math.floor(sh/P)-1;
    for(let k=k0;k<=k0+Math.ceil(VW/P)+3;k++){
      const px=k*P-sh+(hash(k*7+l*13)-.5)*P*.5,w=46+hash(k*3+l)*70,Hh=hh*(h0*.45+hash(k*5+l*2)*hf*1.1);
      g.beginPath();g.moveTo(px-w,hh+2);
      g.quadraticCurveTo(px-w*.6,hh-Hh*.7,px-w*.2,hh-Hh);g.quadraticCurveTo(px+w*.12,hh-Hh*1.04,px+w*.28,hh-Hh*.84);
      g.quadraticCurveTo(px+w*.62,hh-Hh*.46,px+w,hh+2);g.closePath();g.fill();
    }
  });
  // bruma en la base y difuminado hacia el río
  let mg=g.createLinearGradient(0,hh*.35,0,hh+4);mg.addColorStop(0,rgba(bot,0));mg.addColorStop(1,rgba(bot,.92));g.fillStyle=mg;g.fillRect(0,hh*.35,VW,hh*.65+4);
  let fg=g.createLinearGradient(0,hh,0,hh+VH*.2);fg.addColorStop(0,rgba(bot,.8));fg.addColorStop(1,rgba(bot,0));g.fillStyle=fg;g.fillRect(0,hh,VW,VH*.2);
}
