/* Sonido generado en el navegador: viento, grillos, flauta, campanas, pad adaptativo y lluvia */
import {uCap} from './util.js';
import {state} from './state.js';
import {progress} from './rules.js';

export const A={
  ctx:null,master:null,cleanG:null,echo:null,muted:false,
  init(){
    if(this.ctx)return;
    try{
      const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
      const c=new C();this.ctx=c;
      const m=c.createGain();m.gain.value=this.muted?0:.55;m.connect(c.destination);this.master=m;
      const nb=c.createBuffer(1,c.sampleRate*2,c.sampleRate),nd=nb.getChannelData(0);
      for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
      this.nb=nb;
      const noise=(off)=>{const s=c.createBufferSource();s.buffer=nb;s.loop=true;s.start(0,off||0);return s};
      const w=noise(),wf=c.createBiquadFilter();wf.type='bandpass';wf.frequency.value=420;wf.Q.value=.6;
      const wg=c.createGain();wg.gain.value=.10;
      const lfo=c.createOscillator();lfo.frequency.value=.07;const lg=c.createGain();lg.gain.value=.06;lfo.connect(lg);lg.connect(wg.gain);lfo.start();
      w.connect(wf);wf.connect(wg);wg.connect(m);
      const n2=noise(),hf=c.createBiquadFilter();hf.type='highpass';hf.frequency.value=1800;
      const cg=c.createGain();cg.gain.value=0;const sp=this.panner(0,0,-2,2,.4);sp.connect(m);this.scrubP=sp;n2.connect(hf);hf.connect(cg);cg.connect(sp);this.cleanG=cg;
      const dl=c.createDelay(1);dl.delayTime.value=.42;const fb=c.createGain();fb.gain.value=.38;
      const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1800;
      dl.connect(lp);lp.connect(fb);fb.connect(dl);lp.connect(m);this.echo=dl;
      this.rainGs=[];
      [-2.2,2.2].forEach(px=>{
        const n3=noise(Math.random()*1.8),rf=c.createBiquadFilter();rf.type='bandpass';rf.frequency.value=3200;rf.Q.value=.5;
        const rg=c.createGain();rg.gain.value=0;const rp=this.panner(px,2,-.5,2,.4);rp.connect(m);n3.connect(rf);rf.connect(rg);rg.connect(rp);this.rainGs.push(rg);
      });
      // viento afuera (a la derecha) y rumor lejano de la ciudad (abajo a la derecha)
      const wnd=noise(Math.random()*1.8),wb=c.createBiquadFilter();wb.type='bandpass';wb.frequency.value=380;wb.Q.value=.8;
      const wgn=c.createGain();wgn.gain.value=.05;const wl2=c.createOscillator(),wlg=c.createGain();wl2.frequency.value=.08;wlg.gain.value=.04;wl2.connect(wlg);wlg.connect(wgn.gain);wl2.start();
      const wp=this.panner(5,0,-1,2,.5);wp.connect(m);wnd.connect(wb);wb.connect(wgn);wgn.connect(wp);
      const cty=noise(Math.random()*1.8),cb=c.createBiquadFilter();cb.type='lowpass';cb.frequency.value=260;
      const cgn=c.createGain();cgn.gain.value=.05;const cp=this.panner(6,-1,-8,3,.3);cp.connect(m);cty.connect(cb);cb.connect(cgn);cgn.connect(cp);
      this.rain(!!state.repaired.techo);
      this.loop();
      this.pad();
    }catch(e){this.ctx=null}
  },
  panner(x,y,z,ref,roll){
    const p=this.ctx.createPanner();p.panningModel='HRTF';p.distanceModel='inverse';p.refDistance=ref||2;p.rolloffFactor=roll==null?.6:roll;
    if(p.positionX){p.positionX.value=x;p.positionY.value=y;p.positionZ.value=z}else p.setPosition(x,y,z);
    return p;
  },
  setPos(p,x,y,z){
    if(p.positionX){const t=this.ctx.currentTime;p.positionX.setTargetAtTime(x,t,.08);p.positionY.setTargetAtTime(y,t,.08);p.positionZ.setTargetAtTime(z,t,.08)}else p.setPosition(x,y,z);
  },
  dest(x,z){
    if(x==null)return this.master;
    const p=this.panner(x,0,z==null?-1.5:z,2,.6);p.connect(this.master);p.connect(this.echo);return p;
  },
  scrubPos(x01,y01){if(this.scrubP)this.setPos(this.scrubP,(x01-.5)*8,(.5-y01)*3,-2)},
  note(f,t0,dur,vol,type,x,z){
    const c=this.ctx,o=c.createOscillator(),gn=c.createGain(),dst=this.dest(x,z);
    o.type=type||'triangle';o.frequency.value=f;
    gn.gain.setValueAtTime(0,t0);gn.gain.linearRampToValueAtTime(vol,t0+dur*.35);gn.gain.exponentialRampToValueAtTime(.0001,t0+dur);
    o.connect(gn);gn.connect(dst);o.start(t0);o.stop(t0+dur+.05);
  },
  chirp(t0,pn){
    const c=this.ctx,o=c.createOscillator(),gn=c.createGain();
    o.frequency.value=4300+Math.random()*200;
    gn.gain.setValueAtTime(0,t0);gn.gain.linearRampToValueAtTime(.012,t0+.01);gn.gain.linearRampToValueAtTime(0,t0+.06);
    o.connect(gn);gn.connect(pn||this.master);o.start(t0);o.stop(t0+.08);
  },
  flute(f,t,dur,vol,x,z){
    const c=this.ctx,o=c.createOscillator(),gn=c.createGain(),dst=this.dest(x,z);o.type='sine';
    o.frequency.setValueAtTime(f*.96,t);o.frequency.exponentialRampToValueAtTime(f,t+.18);
    const vb=c.createOscillator(),vg=c.createGain();vb.frequency.value=4.8;vg.gain.setValueAtTime(0,t);vg.gain.linearRampToValueAtTime(f*.012,t+dur*.6);vb.connect(vg);vg.connect(o.frequency);vb.start(t);vb.stop(t+dur+.5);
    gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(vol,t+.4);gn.gain.setValueAtTime(vol*.85,t+dur*.7);gn.gain.linearRampToValueAtTime(0,t+dur);
    const s=c.createBufferSource();s.buffer=this.nb;s.loop=true;const bp=c.createBiquadFilter();bp.type='bandpass';bp.frequency.value=f*2;bp.Q.value=4;
    const ng=c.createGain();ng.gain.setValueAtTime(0,t);ng.gain.linearRampToValueAtTime(vol*.5,t+.2);ng.gain.linearRampToValueAtTime(0,t+dur);
    s.connect(bp);bp.connect(ng);ng.connect(dst);s.start(t);s.stop(t+dur+.1);
    o.connect(gn);gn.connect(dst);o.start(t);o.stop(t+dur+.1);
  },
  bell(f,t,vol,x,z){
    const c=this.ctx,dst=this.dest(x,z);
    [[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([k,a,d])=>{
      const o=c.createOscillator(),gn=c.createGain();o.type='sine';o.frequency.value=f*k;
      gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(vol*a,t+.005);gn.gain.exponentialRampToValueAtTime(.0001,t+3*d);
      o.connect(gn);gn.connect(dst);o.start(t);o.stop(t+3*d+.1);
    });
  },
  breathTone(up,dur){
    const c=this.ctx;if(!c||c.state!=='running')return;const t=c.currentTime;
    [[1,.05],[1.5,.022]].forEach(([k,v])=>{
      const o=c.createOscillator(),gn=c.createGain();o.type='sine';
      o.frequency.setValueAtTime((up?196:262)*k,t);o.frequency.linearRampToValueAtTime((up?262:196)*k,t+dur);
      if(up){gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(v,t+dur)}else{gn.gain.setValueAtTime(v,t);gn.gain.linearRampToValueAtTime(0,t+dur)}
      o.connect(gn);gn.connect(this.master);gn.connect(this.echo);o.start(t);o.stop(t+dur+.1);
    });
  },
  loop(){
    const c=this.ctx;if(!c)return;
    const sc=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33];
    const R=(a,b)=>a+Math.random()*(b-a);
    [[73.42,.026],[110,.016],[146.83,.01]].forEach(([f,v],i)=>{
      const o=c.createOscillator(),gn=c.createGain(),l=c.createOscillator(),lg=c.createGain();
      o.type='sine';o.frequency.value=f;gn.gain.value=v;l.frequency.value=.05+i*.03;lg.gain.value=v*.6;l.connect(lg);lg.connect(gn.gain);
      o.connect(gn);gn.connect(this.master);o.start();l.start();
    });
    let fi=3;
    const phrase=()=>{
      if(!this.ctx)return;let t=c.currentTime+.2,tot=0;
      if(c.state==='running'){
        const n=2+Math.floor(Math.random()*3),px=R(-3,3);
        for(let i=0;i<n;i++){fi=Math.max(0,Math.min(7,fi+Math.floor(Math.random()*5)-2));const d=R(1.8,3.4);this.flute(sc[fi],t,d,.05,px+R(-.3,.3),-2.5);t+=d*.88;tot+=d*.88}
        uCap('Flauta shakuhachi',25000);
      }
      setTimeout(phrase,(tot+R(7,12))*1000);
    };setTimeout(phrase,4000);
    const koto=()=>{
      if(!this.ctx)return;
      if(c.state==='running'){const t=c.currentTime+.05;let i=Math.floor(Math.random()*6),kx=R(-4,4);for(let j=0;j<3;j++)this.note(sc[Math.min(9,i+[0,2,1][j])],t+j*.3,2.4,.05,'triangle',kx,-2);uCap('Koto',25000)}
      setTimeout(koto,R(9000,16000));
    };setTimeout(koto,7000);
    const bells=()=>{
      if(!this.ctx)return;
      if(c.state==='running'){this.bell(sc[5+Math.floor(Math.random()*5)],c.currentTime+.05,.04,R(-5,5),R(-5,-1));uCap('Campanillas',25000)}
      setTimeout(bells,R(4000,9000));
    };setTimeout(bells,3000);
    const k=()=>{if(!this.ctx)return;if(c.state==='running'){const t=c.currentTime;const pn=this.panner(R(-6,6),R(-.5,1),R(-5,3),2,.6);pn.connect(this.master);for(let i=0;i<3;i++)this.chirp(t+i*.11,pn);uCap('Grillos',20000)}setTimeout(k,1800+Math.random()*3500)};
    k();
    // ambiente continuo (viento, lluvia sobre el techo): subtítulo ocasional
    setInterval(()=>{if(!this.ctx||c.state!=='running')return;uCap('Viento',45000);if(state.repaired.techo)uCap('Lluvia suave',45000)},9000);
  },
  /* Capa lenta tipo pad: acordes hirajoshi en re (0,2,3,7,8 sobre D3). Cada ~15 s cambia de acorde y cada 5 s se adapta al avance:
     cabaña sucia = una octava más grave y filtro cerrado; más reparada = más cálido, brillante y con voz alta; techo reparado = voz de brillo extra. */
  pad(){
    const c=this.ctx,D3=146.83,SC=[0,2,3,7,8];
    const out=c.createGain();out.gain.value=.04;
    const fl=c.createBiquadFilter();fl.type='lowpass';fl.frequency.value=300;fl.Q.value=.4;
    const snd=c.createGain();snd.gain.value=.35;
    fl.connect(out);out.connect(this.master);out.connect(snd);snd.connect(this.echo);
    const vs=[['sine',-3],['triangle',4],['sine',-5],['triangle',3],['sine',5]].map(([ty,d])=>{
      const o=c.createOscillator(),gn=c.createGain();o.type=ty;o.detune.value=d;o.frequency.value=D3;gn.gain.value=0;o.connect(gn);gn.connect(fl);o.start();return {o,gn};
    });
    const deg=i=>{const n=SC.length,k=((i%n)+n)%n,oc=Math.floor(i/n);return D3*Math.pow(2,(SC[k]+12*oc)/12)};
    let root=0,n=0;
    const tune=tc=>{
      if(c.state!=='running')return;
      const t=c.currentTime,p=Math.max(0,Math.min(1,progress())),sm=p*p*(3-2*p),roofed=!!state.repaired.techo;
      const base=root+(p<.35?-5:0);
      const fr=[deg(base),deg(base+2),deg(base+4),deg(base+(p>.7?7:5)),deg(base+6)];
      const gs=[.5,.3+.15*sm,.28,.42*sm,roofed?.26:0];
      vs.forEach((v,i)=>{v.o.frequency.setTargetAtTime(fr[i],t,tc);v.gn.gain.setTargetAtTime(gs[i],t,tc)});
      fl.frequency.setTargetAtTime(280+2300*sm,t,tc);
    };
    tune(2.5);
    setInterval(()=>{
      if(!this.ctx||c.state!=='running')return;
      const ch=++n%3===0;
      if(ch){root=(root+1+Math.floor(Math.random()*4))%5;uCap('Acorde suave',60000)}
      tune(ch?3.5:4);
    },5000);
  },
  level(v){if(this.cleanG)this.cleanG.gain.setTargetAtTime(v,this.ctx.currentTime,.06)},
  rain(on){if(this.rainGs)this.rainGs.forEach(g=>g.gain.setTargetAtTime(on?.035:0,this.ctx.currentTime,.8));if(on)uCap('Lluvia suave',45000)},
  chime(x){
    if(!this.ctx)return;const t=this.ctx.currentTime,px=x==null?0:x;
    this.note(659.25,t,1.4,.09,'sine',px,-1.5);this.note(880,t+.12,1.8,.09,'sine',px,-1.5);this.note(1318.5,t+.26,2,.05,'sine',px,-1.5);
  },
  mute(on){this.muted=on;if(this.master)this.master.gain.setTargetAtTime(on?0:.55,this.ctx.currentTime,.05)}
};
document.addEventListener('visibilitychange',()=>{const c=A.ctx;if(!c)return;if(document.hidden)c.suspend();else if(!window.PZ.on)c.resume()});
