/* audio.js — sonido generado (escala hirajoshi): agua, arroyos, lluvia, efectos y notas; la música viene de music.js */
import {clamp,cap,rnd} from './util.js';
import {musicMethods} from './music.js';

export const SC=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33];
export const A={
  ctx:null,master:null,bus:null,nbuf:null,muted:false,idx:3,
  init(){
    if(this.ctx)return;
    try{
      const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
      const c=new C();this.ctx=c;
      const m=c.createGain();m.gain.value=this.muted?0:.6;m.connect(c.destination);this.master=m;
      const bus=c.createGain();bus.gain.value=1;bus.connect(m);this.bus=bus;
      const nb=c.createBuffer(1,c.sampleRate*2,c.sampleRate),nd=nb.getChannelData(0);
      for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
      this.nbuf=nb;
      // reverberación sencilla (impulso de ruido que decae)
      const rl=Math.floor(c.sampleRate*2.8),rb=c.createBuffer(2,rl,c.sampleRate);
      for(let ch=0;ch<2;ch++){const d=rb.getChannelData(ch);for(let i=0;i<rl;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/rl,2.6)}
      const cv=c.createConvolver();cv.buffer=rb;const wet=c.createGain();wet.gain.value=.38;bus.connect(cv);cv.connect(wet);wet.connect(m);
      // agua
      const w=this.noise(),lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=650;
      const wg=c.createGain();wg.gain.value=.07;
      const lfo=c.createOscillator();lfo.frequency.value=.09;const lg=c.createGain();lg.gain.value=.04;lfo.connect(lg);lg.connect(wg.gain);lfo.start();
      w.connect(lp);lp.connect(wg);wg.connect(m);
      const w2=this.noise(),bp=c.createBiquadFilter();bp.type='bandpass';bp.frequency.value=2200;bp.Q.value=.7;
      const g2=c.createGain();g2.gain.value=.02;w2.connect(bp);bp.connect(g2);g2.connect(m);
      // Arroyos en cada orilla (sonido espacial HRTF): suenan más fuerte del lado al que te acercas
      this.bk={};this.bkx={'-1':-4,'1':4};
      [-1,1].forEach(side=>{
        const pn=this.panner(side*4,0,0,2,.6);pn.connect(m);this.bk[side]=pn;
        [[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([f,q,lf,v],i)=>{
          const n=this.noise(Math.random()*1.8),b=c.createBiquadFilter();b.type='bandpass';b.frequency.value=f;b.Q.value=q;
          const gn=c.createGain();gn.gain.value=v;const l=c.createOscillator(),lg=c.createGain();l.frequency.value=lf*(side>0?1.13:.91);lg.gain.value=v*.7;l.connect(lg);lg.connect(gn.gain);l.start();
          n.connect(b);b.connect(gn);gn.connect(pn);
        });
      });
      const blip=()=>{
        if(!this.ctx)return;
        if(this.ok()&&Math.random()<.75){
          const side=Math.random()*(Math.abs(this.bkx['-1'])+Math.abs(this.bkx['1']))<Math.abs(this.bkx['1'])?-1:1;
          const t=c.currentTime,o=c.createOscillator(),gn=c.createGain(),f=rnd(450,1100);
          const pn=this.panner(this.bkx[side],0,rnd(-4,2),2,.6,true);pn.connect(m);
          o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*rnd(1.4,2),t+.07);
          gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(rnd(.01,.026),t+.012);gn.gain.exponentialRampToValueAtTime(.0001,t+.1);
          o.connect(gn);gn.connect(pn);o.start(t);o.stop(t+.12);
        }
        setTimeout(blip,rnd(90,260));
      };blip();
      // Cascadita: ruido que se acerca por delante cuando te aproximas al lugar
      const wn=this.noise(Math.random()*1.5),wh=c.createBiquadFilter();wh.type='highpass';wh.frequency.value=380;
      const wl=c.createBiquadFilter();wl.type='lowpass';wl.frequency.value=4200;
      const wgn=c.createGain();wgn.gain.value=0;const wpn=this.panner(0,0,-30,2,.5);
      wn.connect(wh);wh.connect(wl);wl.connect(wgn);wgn.connect(wpn);wpn.connect(m);this.wfG=wgn;this.wfP=wpn;
      // Llovizna estéreo: dos canales decorrelacionados + gotas sueltas en posiciones al azar
      this.rgs=[];
      [[-.75,3200],[.75,3600]].forEach(([pan,hf])=>{
        const sp=c.createStereoPanner();sp.pan.value=pan;sp.connect(m);
        const r1=this.noise(Math.random()*1.8),hp=c.createBiquadFilter();hp.type='highpass';hp.frequency.value=hf;
        const rg=c.createGain();rg.gain.value=0;r1.connect(hp);hp.connect(rg);rg.connect(sp);this.rgs.push([rg,.07]);
        const r2=this.noise(Math.random()*1.8),bp2=c.createBiquadFilter();bp2.type='bandpass';bp2.frequency.value=1500;bp2.Q.value=.6;
        const rg2=c.createGain();rg2.gain.value=0;r2.connect(bp2);bp2.connect(rg2);rg2.connect(sp);this.rgs.push([rg2,.035]);
      });
      this.rainLvl=0;
      const dropT=()=>{
        if(!this.ctx)return;
        if(this.ok()&&this.rainLvl>.2){
          const t=c.currentTime,o=c.createOscillator(),gn=c.createGain(),pn=this.panner(rnd(-4,4),rnd(0,1),rnd(-4,1),1.5,.7,true);pn.connect(m);
          o.frequency.setValueAtTime(rnd(1800,3200),t);o.frequency.exponentialRampToValueAtTime(rnd(900,1400),t+.05);
          gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(.02*this.rainLvl,t+.004);gn.gain.exponentialRampToValueAtTime(.0001,t+.07);
          o.connect(gn);gn.connect(pn);o.start(t);o.stop(t+.09);
        }
        setTimeout(dropT,rnd(70,260));
      };dropT();
      this.music();
    }catch(e){this.ctx=null}
  },
  setRain(r){if(!this.rgs)return;this.rainLvl=r;if(r>.35&&this.ok())cap('Lluvia suave',25000);const t=this.ctx.currentTime;this.rgs.forEach(([g,v])=>g.gain.setTargetAtTime(r*v,t,.6))},
  ok(){return this.ctx&&this.ctx.state==='running'},
  breathTone(up,dur){
    if(!this.ok())return;const c=this.ctx,t=c.currentTime;
    [[1,.05],[1.5,.022]].forEach(([k,v])=>{
      const o=c.createOscillator(),gn=c.createGain();o.type='sine';
      o.frequency.setValueAtTime((up?196:262)*k,t);o.frequency.linearRampToValueAtTime((up?262:196)*k,t+dur);
      if(up){gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(v,t+dur)}else{gn.gain.setValueAtTime(v,t);gn.gain.linearRampToValueAtTime(0,t+dur)}
      o.connect(gn);gn.connect(this.bus);o.start(t);o.stop(t+dur+.1);
    });
  },
  noise(off){const c=this.ctx,s=c.createBufferSource();s.buffer=this.nbuf;s.loop=true;s.start(0,off||0);return s},
  panner(x,y,z,ref,roll,now){
    const p=this.ctx.createPanner();p.panningModel='HRTF';p.distanceModel='inverse';p.refDistance=ref||2;p.rolloffFactor=roll==null?.6:roll;
    if(p.positionX){p.positionX.value=x;p.positionY.value=y;p.positionZ.value=z}else p.setPosition(x,y,z);
    return p;
  },
  setPos(p,x,y,z){
    if(p.positionX){const t=this.ctx.currentTime;p.positionX.setTargetAtTime(x,t,.2);p.positionY.setTargetAtTime(y,t,.2);p.positionZ.setTargetAtTime(z,t,.2)}else p.setPosition(x,y,z);
  },
  dest(x,z){if(x==null)return this.bus;const p=this.panner(x,0,z==null?-1.5:z,2,.6);p.connect(this.bus);return p},
  space(ox,hw,dz){
    if(!this.ctx)return;
    const L=Math.max(.9,(hw+ox)/40),R=Math.max(.9,(hw-ox)/40);
    this.bkx['-1']=-L;this.bkx['1']=R;this.setPos(this.bk[-1],-L,0,0);this.setPos(this.bk[1],R,0,0);
    if(dz==null||dz<-300){this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4)}
    else{
      const u=Math.max(0,Math.min(1,1-Math.abs(dz)/1500));
      if(u>.3&&this.ok())cap('Cascada cercana',25000);
      this.wfG.gain.setTargetAtTime(.34*Math.pow(u,1.5),this.ctx.currentTime,.4);
      this.setPos(this.wfP,-ox/40,0,-dz/40);
    }
  },
  pluck(f,vol,when,x,z){
    if(!this.ok())return;const c=this.ctx,t=when||c.currentTime,d=this.dest(x,z);
    [[1,1],[2,.25],[3.01,.1]].forEach(([k,a],i)=>{
      const o=c.createOscillator(),gn=c.createGain();o.type=i?'sine':'triangle';o.frequency.value=f*k;
      gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(vol*a,t+.01);gn.gain.exponentialRampToValueAtTime(.0001,t+(i?1.1:2));
      o.connect(gn);gn.connect(d);o.start(t);o.stop(t+2.1);
    });
  },
  flute(f,t,dur,vol,x,z){
    if(!this.ok())return;const c=this.ctx,d=this.dest(x,z);
    const o=c.createOscillator(),o2=c.createOscillator(),gn=c.createGain(),g2=c.createGain();
    o.type='sine';o2.type='triangle';
    o.frequency.setValueAtTime(f*.96,t);o.frequency.exponentialRampToValueAtTime(f,t+.18);o2.frequency.setValueAtTime(f*2*.96,t);o2.frequency.exponentialRampToValueAtTime(f*2,t+.18);
    const vb=c.createOscillator(),vg=c.createGain();vb.frequency.value=4.8;vg.gain.setValueAtTime(0,t);vg.gain.linearRampToValueAtTime(f*.012,t+dur*.6);vb.connect(vg);vg.connect(o.frequency);vb.start(t);vb.stop(t+dur+.5);
    g2.gain.value=.1;o2.connect(g2);g2.connect(gn);o.connect(gn);
    gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(vol,t+.35);gn.gain.setValueAtTime(vol*.85,t+dur*.7);gn.gain.linearRampToValueAtTime(0,t+dur);
    const s=c.createBufferSource();s.buffer=this.nbuf;s.loop=true;const bp=c.createBiquadFilter();bp.type='bandpass';bp.frequency.value=f*2;bp.Q.value=4;
    const ng=c.createGain();ng.gain.setValueAtTime(0,t);ng.gain.linearRampToValueAtTime(vol*.5,t+.2);ng.gain.linearRampToValueAtTime(0,t+dur);
    s.connect(bp);bp.connect(ng);ng.connect(d);s.start(t);s.stop(t+dur+.1);
    gn.connect(d);o.start(t);o2.start(t);o.stop(t+dur+.1);o2.stop(t+dur+.1);
  },
  drum(t,vol,p){
    if(!this.ok())return;const c=this.ctx;
    const o=c.createOscillator(),gn=c.createGain();o.type='sine';
    o.frequency.setValueAtTime(115*p,t);o.frequency.exponentialRampToValueAtTime(48*p,t+.28);
    gn.gain.setValueAtTime(vol,t);gn.gain.exponentialRampToValueAtTime(.0001,t+.9);
    o.connect(gn);gn.connect(this.bus);o.start(t);o.stop(t+1);
    const s=c.createBufferSource();s.buffer=this.nbuf;const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=500;
    const ng=c.createGain();ng.gain.setValueAtTime(vol*.5,t);ng.gain.exponentialRampToValueAtTime(.0001,t+.1);
    s.connect(lp);lp.connect(ng);ng.connect(this.bus);s.start(t,Math.random());s.stop(t+.15);
  },
  bell(f,t,vol,long,x,z){
    if(!this.ok())return;const c=this.ctx,dst=this.dest(x,z);
    [[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([k,a,d])=>{
      const o=c.createOscillator(),gn=c.createGain();o.type='sine';o.frequency.value=f*k;
      const D=(long?7:3)*d;
      gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(vol*a,t+.005);gn.gain.exponentialRampToValueAtTime(.0001,t+D);
      o.connect(gn);gn.connect(dst);o.start(t);o.stop(t+D+.1);
    });
  },
  next(vol,x,z){this.idx=clamp(this.idx+Math.floor(Math.random()*4)-1,3,SC.length-1);this.bell(SC[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,vol*.9,false,x,z)},
  paddle(side){
    if(!this.ok())return;const c=this.ctx,pn=this.panner((side||0)*1.1,-.3,-.4,1.5,.8);pn.connect(this.master);
    const s=c.createBufferSource();s.buffer=this.nbuf;
    const bp=c.createBiquadFilter();bp.type='bandpass';bp.frequency.value=900+Math.random()*500;bp.Q.value=.9;
    const gn=c.createGain(),t=c.currentTime;
    gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(.14,t+.05);gn.gain.exponentialRampToValueAtTime(.0001,t+.4);
    s.connect(bp);bp.connect(gn);gn.connect(pn);s.start(t,Math.random());s.stop(t+.45);
  },
  bump(v,dir){
    if(!this.ok())return;cap('Golpe suave de la canoa',5000);const c=this.ctx,t=c.currentTime,pn=this.panner((dir||0)*1.3,-.3,0,1.5,.8);pn.connect(this.master);
    const o=c.createOscillator(),gn=c.createGain();
    o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(70,t+.2);
    gn.gain.setValueAtTime(.16*v,t);gn.gain.exponentialRampToValueAtTime(.0001,t+.3);
    o.connect(gn);gn.connect(pn);o.start(t);o.stop(t+.35);
  },
  firework(pan){
    if(!this.ok())return;const c=this.ctx,t=c.currentTime+.02,d=this.dest(pan,-8);
    // golpe grave
    const o=c.createOscillator(),gn=c.createGain();o.type='sine';o.frequency.setValueAtTime(95,t);o.frequency.exponentialRampToValueAtTime(38,t+.35);
    gn.gain.setValueAtTime(.0001,t);gn.gain.linearRampToValueAtTime(.14,t+.01);gn.gain.exponentialRampToValueAtTime(.0001,t+.7);
    o.connect(gn);gn.connect(d);o.start(t);o.stop(t+.75);
    // chisporroteo: ruido agudo en pequeños estallidos que se apagan
    const s=c.createBufferSource();s.buffer=this.nbuf;s.loop=true;const hp=c.createBiquadFilter();hp.type='highpass';hp.frequency.value=3500;
    const ng=c.createGain();ng.gain.value=0;
    for(let i=0;i<16;i++){const tt=t+.12+i*.07+Math.random()*.05;ng.gain.setValueAtTime(.03*(1-i/20)*(.5+Math.random()),tt);ng.gain.setTargetAtTime(0,tt,.012)}
    s.connect(hp);hp.connect(ng);ng.connect(d);s.start(t,Math.random());s.stop(t+1.4);
  },
  shoot(){
    if(!this.ok())return;const c=this.ctx,t=c.currentTime,o=c.createOscillator(),gn=c.createGain();o.type='sine';
    o.frequency.setValueAtTime(2600,t);o.frequency.exponentialRampToValueAtTime(900,t+.8);
    gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(.008,t+.2);gn.gain.linearRampToValueAtTime(0,t+.85);
    o.connect(gn);gn.connect(this.bus);o.start(t);o.stop(t+.9);
  },
  discover(){if(!this.ok())return;cap('Melodía de descubrimiento',4000);const t=this.ctx.currentTime;[0,3,5,6].forEach((i,j)=>this.pluck(SC[i],.12,t+j*.2));this.bell(SC[8],t+.9,.07)},
  chirp(t0){
    const c=this.ctx,o=c.createOscillator(),gn=c.createGain();
    o.frequency.value=4300+Math.random()*200;
    gn.gain.setValueAtTime(0,t0);gn.gain.linearRampToValueAtTime(.012,t0+.01);gn.gain.linearRampToValueAtTime(0,t0+.06);
    o.connect(gn);gn.connect(this.master);o.start(t0);o.stop(t0+.08);
  },
  mute(on){this.muted=on;if(this.master)this.master.gain.setTargetAtTime(on?0:.6,this.ctx.currentTime,.05)}
};
/* pad() y music() (capa lenta, taiko, flauta, campanillas…) se mezclan aquí para conservar `this` */
Object.assign(A,musicMethods);
