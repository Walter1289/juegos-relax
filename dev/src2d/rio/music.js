/* music.js — música ambiente: pad de acordes, bordón, taiko, shakuhachi, campanillas, koto, campana de templo y grillos.
   Los métodos usan `this` (el objeto A de audio.js, donde se mezclan con Object.assign). */
import {clamp,lerp,cap,rnd} from './util.js';
import {V,G} from './state.js';
import {lmIndexAt,lmPos,lmType,nearCastle} from './world.js';
import {SC} from './audio.js';

export const musicMethods={
  /* Capa lenta tipo pad: acordes de la escala hirajoshi en re (D3 + {0,2,3,7,8}) que cambian cada ~15 s.
     La hora del juego (día brillante / noche grave y cerrada) y el lugar cercano modulan el acorde y el filtro. */
  pad(){
    const c=this.ctx,D3=146.83,HI=[0,2,3,7,8];
    const fr=d=>D3*Math.pow(2,(HI[((d%5)+5)%5]+12*Math.floor(d/5))/12);   // grado de la escala -> Hz
    const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=700;lp.Q.value=.5;
    const out=c.createGain();out.gain.value=0;lp.connect(out);out.connect(this.bus);
    out.gain.setTargetAtTime(.04,c.currentTime,5);   // entra muy despacio
    const V4=[];
    for(let i=0;i<4;i++){
      const vg=c.createGain();vg.gain.value=.25;vg.connect(lp);
      const os=[['sine',0,.7],['triangle',5,.3]].map(([ty,cents,k])=>{
        const o=c.createOscillator(),g2=c.createGain();o.type=ty;o.detune.value=cents*(i%2?1:-1);o.frequency.value=fr(i*2);g2.gain.value=k;o.connect(g2);g2.connect(vg);o.start();return o;
      });
      V4.push(os);
    }
    let lastRoot=-1,lastKey='',lastT=-99,roots=[0,1,3];
    const tick=()=>{
      if(!this.ctx)return;
      if(this.ok()){
        const t=c.currentTime,night=clamp((V.dark-.15)/.4,0,1),bright=1-night;   // 0 = día, 1 = noche cerrada
        const k=lmIndexAt(G.s),near=Math.abs(G.s-lmPos(k))<800,ty=near?lmType(k):-1;
        const key=ty+(night>.5?'n':'d');
        let cut=lerp(1500,420,night),vol=.04,mood='';
        if(ty===10){cut*=1.5;vol=.046;mood='fiesta'}else if(ty===5){cut*=.6;mood='templo'}else if(ty===6){cut*=1.5;vol=.036;mood='cascada'}else if(ty===8){cut*=.9;mood='bambu'}else if(ty===3||ty===7){cut*=1.15;mood='calido'}
        lp.frequency.setTargetAtTime(cut,t,3);out.gain.setTargetAtTime(vol,t,4);
        if(key!==lastKey||t-lastT>=15){
          lastKey=key;lastT=t;
          let r;do r=roots[Math.floor(Math.random()*roots.length)];while(r===lastRoot&&roots.length>1);lastRoot=r;
          let ds;
          if(mood==='templo')ds=[-5,0,3,-2];                       // grave y solemne: re - la, con la octava baja
          else if(mood==='cascada')ds=[5,8,10,13];                  // aire: una octava arriba
          else if(mood==='bambu'){const q=(Math.random()<.5)?0:3;ds=[q,q+3,q+5,q+8]}   // quintas huecas (re-la, la-mi)
          else if(mood==='fiesta')ds=night>.5?[3,5,8,10]:[3,5,8,12];  // acorde festivo y abierto: quintas y octavas brillantes
          else if(mood==='calido')ds=[2,4,7,9];                     // voz alta y cálida
          else ds=night>.5?[r-5,r,r+2,r+4]:[r,r+2,r+4,r+5];         // noche más grave, día más brillante
          ds.forEach((d,i)=>V4[i].forEach(o=>o.frequency.setTargetAtTime(fr(d),t,2.2)));
          this.padMood=mood||'base';this.padDeg=ds;
        }
      }
      setTimeout(tick,2500);
    };tick();
  },
  music(){
    const c=this.ctx;
    this.pad();
    // bordón grave y suave
    [[73.42,.03],[110,.02],[146.83,.012]].forEach(([f,v],i)=>{
      const o=c.createOscillator(),gn=c.createGain(),l=c.createOscillator(),lg=c.createGain();
      o.type='sine';o.frequency.value=f;gn.gain.value=v;l.frequency.value=.05+i*.03;lg.gain.value=v*.6;l.connect(lg);lg.connect(gn.gain);
      o.connect(gn);gn.connect(this.bus);o.start();l.start();
    });
    // taiko: compás lento de 8 pasos con silencios; en el festival del castillo, patrón de 16 pasos vivo (don, ka, doko, redoble)
    let step=0,fs=0;
    const FEST=[[.4,1],0,[.1,1.55],[.15,1.3],[.26,1.1],0,[.1,1.55],[.1,1.45],[.36,.95],0,[.1,1.55],[.18,1.3],[.24,1.12],[.12,1.4],[.14,1.3],[.12,1.5]];
    const drums=()=>{
      if(!this.ctx)return;
      let wait=950;
      if(this.ok()){
        const fest=nearCastle(G.s,900),t=c.currentTime+.05;
        if(fest){
          wait=420;const p=fs%16,fill=((fs>>4)%4)===3&&p>=8;   // cada 4 compases, un redoble acelerado
          const h=fill?[.2+(p-8)*.03,1.2+(p-8)*.05]:FEST[p];
          if(h){this.drum(t,h[0],h[1]);this.beatAt=performance.now()+50;if(p===0)cap('Taiko',15000)}
          if(p%4===2)this.drum(t+.02,.05,1.9);   // shime-daiko agudo
          fs++;
        }else{
          const p=step%8,rest=((step>>3)%4)===3;
          if(!rest){
            if(p===0){this.drum(t,.34,1);cap('Tambor lejano',20000)}else if(p===3)this.drum(t,.12,1.35);else if(p===5)this.drum(t,.16,1.15);else if(p===6&&Math.random()<.4)this.drum(t,.09,1.45);
          }else if(p===0)this.drum(t,.12,.9);
          step++;
        }
      }
      setTimeout(drums,wait);
    };setTimeout(drums,3000);
    // shakuhachi: frases de 2 a 4 notas
    let fi=3;
    const phrase=()=>{
      if(!this.ctx)return;
      let t=c.currentTime+.2,tot=0;
      if(this.ok()){
        cap('Flauta shakuhachi',12000);const n=2+Math.floor(Math.random()*3),px=rnd(-3,3);
        for(let i=0;i<n;i++){
          fi=clamp(fi+Math.floor(Math.random()*5)-2,0,7);
          const d=rnd(1.8,3.4);this.flute(SC[fi],t,d,.06,px+rnd(-.3,.3),-2.5);t+=d*.88;tot+=d*.88;
        }
      }
      setTimeout(phrase,(tot+rnd(6,11))*1000);
    };setTimeout(phrase,5000);
    // campanillas (suzu) y koto ocasional
    const bells=()=>{
      if(!this.ctx)return;
      if(this.ok()){
        const t=c.currentTime+.05,k=SC[5+Math.floor(Math.random()*5)];cap('Campanillas',12000);
        this.bell(k,t,.045,false,rnd(-5,5),rnd(-5,-1));if(Math.random()<.5)this.bell(SC[5+Math.floor(Math.random()*5)],t+rnd(.18,.4),.035,false,rnd(-5,5),rnd(-5,-1));
      }
      setTimeout(bells,rnd(3500,8000));
    };setTimeout(bells,2500);
    const koto=()=>{if(!this.ctx)return;if(this.ok()){cap('Koto',12000);const t=c.currentTime+.05;let i=Math.floor(Math.random()*6),kx=rnd(-4,4);for(let j=0;j<3;j++){this.pluck(SC[clamp(i+[0,2,1][j],0,9)],.06,t+j*.28,kx,-2)}}setTimeout(koto,rnd(14000,24000))};setTimeout(koto,9000);
    // campana de templo, muy de vez en cuando
    const temple=()=>{if(!this.ctx)return;if(this.ok()){cap('Campana de templo',15000);this.bell(146.83,c.currentTime+.05,.08,true,rnd(-6,6),-8)}setTimeout(temple,rnd(35000,55000))};setTimeout(temple,16000);
    // grillos de noche
    const cr=()=>{if(!this.ctx)return;if(this.ok()&&V.dark>.3){cap('Grillos',30000);const t=c.currentTime;for(let i=0;i<3;i++)this.chirp(t+i*.11)}setTimeout(cr,1400+Math.random()*3000)};cr();
  },
};
