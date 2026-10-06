// Audio del río 3D: mismo paisaje sonoro del río 2D (arroyo burbujeante, bordón, shakuhachi, suzu, koto, campana de templo).
import {hap} from './hap.js';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const SC=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33];
const rnd=(a,b)=>a+Math.random()*(b-a);
export const A={
  on:true,resume(){if(this.ctx&&this.ctx.state!=='running')this.ctx.resume()},setOn(v){this.on=v;if(this.ctx)this.mute(!v)},
  rain(on){this.setRain(on?1:0)},update(){},scrub(){},
  chime(){this.discover()},lantern(x){hap(9);if(!this.ok())return;this.cap('Nota de linterna');const t=this.ctx.currentTime;this.pluck(SC[3+((Math.random()*4)|0)],.1,t,(x||0)*3,-2);this.bell(SC[6+((Math.random()*3)|0)],t+.2,.05,false,(x||0)*3,-3)},
  plop(x){if(!this.ok())return;this.cap('Salpicadura');const c=this.ctx,t=c.currentTime,o=c.createOscillator(),g=c.createGain(),d=this.dest((x||0)*4,-3);o.frequency.setValueAtTime(520,t);o.frequency.exponentialRampToValueAtTime(190,t+.12);g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.03,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+.22);o.connect(g);g.connect(d);o.start(t);o.stop(t+.25)},
  vol:1,ctx:null,master:null,bus:null,nbuf:null,muted:false,idx:3,
  init(){
    if(this.ctx)return;
    try{
      const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
      const c=new C();this.ctx=c;
      const m=c.createGain();m.gain.value=this.muted?0:.6*this.vol;m.connect(c.destination);this.master=m;
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
      this.music();this.padInit();
    }catch(e){this.ctx=null}
  },
  setRain(r){if(!this.rgs)return;if(r>.5)this.cap('Lluvia suave');this.rainLvl=r;const t=this.ctx.currentTime;this.rgs.forEach(([g,v])=>g.gain.setTargetAtTime(r*v,t,.6))},
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
      const u=Math.max(0,Math.min(1,1-Math.abs(dz)/1500));if(u>.45)this.cap('Cascada cercana');
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
  bump(v=.6,dir=0){
    hap(v>.5?22:12);if(!this.ok())return;this.cap('Golpe suave de la canoa');const c=this.ctx,t=c.currentTime,pn=this.panner((dir||0)*1.3,-.3,0,1.5,.8);pn.connect(this.master);
    const o=c.createOscillator(),gn=c.createGain();
    o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(70,t+.2);
    gn.gain.setValueAtTime(.16*v,t);gn.gain.exponentialRampToValueAtTime(.0001,t+.3);
    o.connect(gn);gn.connect(pn);o.start(t);o.stop(t+.35);
  },
  discover(){hap([14,70,14]);if(!this.ok())return;this.cap('Nota de linterna');const t=this.ctx.currentTime;[0,3,5,6].forEach((i,j)=>this.pluck(SC[i],.12,t+j*.2));this.bell(SC[8],t+.9,.07)},
  music(){
    const c=this.ctx;
    // bordón grave y suave
    [[73.42,.03],[110,.02],[146.83,.012]].forEach(([f,v],i)=>{
      const o=c.createOscillator(),gn=c.createGain(),l=c.createOscillator(),lg=c.createGain();
      o.type='sine';o.frequency.value=f;gn.gain.value=v;l.frequency.value=.05+i*.03;lg.gain.value=v*.6;l.connect(lg);lg.connect(gn.gain);
      o.connect(gn);gn.connect(this.bus);o.start();l.start();
    });
    // taiko: compás lento de 8 pasos con silencios
    let step=0;
    const drums=()=>{
      if(!this.ctx)return;
      if(this.ok()){
        const t=c.currentTime+.05,p=step%8,rest=((step>>3)%4)===3;
        if(!rest){
          if(p===0){this.drum(t,.34,1);this.cap('Tambor lejano')}else if(p===3)this.drum(t,.12,1.35);else if(p===5)this.drum(t,.16,1.15);else if(p===6&&Math.random()<.4)this.drum(t,.09,1.45);
        }else if(p===0)this.drum(t,.12,.9);
        step++;
      }
      setTimeout(drums,950);
    };setTimeout(drums,3000);
    // shakuhachi: frases de 2 a 4 notas
    let fi=3;
    const phrase=()=>{
      if(!this.ctx)return;
      let t=c.currentTime+.2,tot=0;
      if(this.ok()){this.cap('Flauta shakuhachi');
        const n=2+Math.floor(Math.random()*3),px=rnd(-3,3);
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
      if(this.ok()){this.cap('Campanillas');
        const t=c.currentTime+.05,k=SC[5+Math.floor(Math.random()*5)];
        this.bell(k,t,.045,false,rnd(-5,5),rnd(-5,-1));if(Math.random()<.5)this.bell(SC[5+Math.floor(Math.random()*5)],t+rnd(.18,.4),.035,false,rnd(-5,5),rnd(-5,-1));
      }
      setTimeout(bells,rnd(3500,8000));
    };setTimeout(bells,2500);
    const koto=()=>{if(!this.ctx)return;if(this.ok()){this.cap('Koto');const t=c.currentTime+.05;let i=Math.floor(Math.random()*6),kx=rnd(-4,4);for(let j=0;j<3;j++){this.pluck(SC[clamp(i+[0,2,1][j],0,9)],.06,t+j*.28,kx,-2)}}setTimeout(koto,rnd(14000,24000))};setTimeout(koto,9000);
    // campana de templo, muy de vez en cuando
    const temple=()=>{if(!this.ctx)return;if(this.ok()){this.cap('Campana de templo');this.bell(146.83,c.currentTime+.05,.08,true,rnd(-6,6),-8)}setTimeout(temple,rnd(35000,55000))};setTimeout(temple,16000);
  },
  /* Capa musical lenta: acordes de escala hirajoshi (re) que cambian con la hora, el lugar y la estación */
  padInit(){
    const c=this.ctx,f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=800;f.Q.value=.4;
    const pg=c.createGain();pg.gain.value=0;f.connect(pg);pg.connect(this.bus);
    const vs=[];for(let i=0;i<4;i++){
      const a=c.createOscillator(),b=c.createOscillator(),ga=c.createGain(),gb=c.createGain(),l=c.createOscillator(),lg=c.createGain();
      a.type='sine';b.type='triangle';b.detune.value=(i%2?7:-7);ga.gain.value=.5;gb.gain.value=.18;
      l.frequency.value=.04+i*.017;lg.gain.value=.25;l.connect(lg);lg.connect(ga.gain);
      a.connect(ga);b.connect(gb);ga.connect(f);gb.connect(f);a.start();b.start();l.start();vs.push([a,b]);
    }
    this.pad={f,pg,vs,ch:0,t0:0};this.mood={el:.5,lm:-1,sn:0};this.padChord(true);
    const tick=()=>{if(!this.ctx)return;if(this.ok())this.padChord();setTimeout(tick,15000+Math.random()*4000)};setTimeout(tick,9000);
  },
  setMood(el,lm,sn){this.mood={el,lm,sn};if(this.pad&&this.ok())this.padFilter()},
  padFilter(){
    const m=this.mood,f=this.pad.f,t=this.ctx.currentTime,day=Math.max(0,Math.min(1,m.el*1.6));
    let cut=420+day*900,gain=.045+(1-day)*.012;
    if(m.lm===6)cut+=500;if(m.lm===5){cut-=120;gain*=1.2}if(m.lm===2)gain*=1.1;
    f.frequency.setTargetAtTime(cut,t,2.5);this.pad.pg.gain.setTargetAtTime(this.muted?0:gain*this.vol,t,2);
  },
  padChord(first){
    const c=this.ctx,m=this.mood,p=this.pad,t=c.currentTime,D=146.83;
    const day=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,14,15]],dusk=[[0,7,12,15],[-4,3,7,12],[0,3,7,12],[-4,0,7,15]],night=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]];
    const set=m.el>.35?day:m.el>-.05?dusk:night;p.ch=(p.ch+1+(Math.random()<.3?1:0))%set.length;
    let ch=set[p.ch].slice();
    if(m.lm===3||m.lm===7)ch[3]=ch[3]+12;       // sakura/casa de té: voz alta y cálida
    if(m.lm===8)ch=[ch[0],ch[0]+7,ch[0]+14,ch[0]+19]; // bambú: quintas huecas
    if(m.lm===5)ch=[-12,-5,0,7];                 // templo: grave solemne
    if(m.lm===6)ch=ch.map((x,i)=>i>1?x+12:x);    // cascada: aire
    const sh=m.sn===3?-2:m.sn===2?-1:0;          // estación: invierno más grave
    p.vs.forEach(([a,b],i)=>{const fr=D*Math.pow(2,(ch[i]+sh)/12);a.frequency.setTargetAtTime(fr,t,first?.01:3.2);b.frequency.setTargetAtTime(fr*1.002,t,first?.01:3.2)});
    this.padFilter();
  },
  boom(x){if(!this.ok())return;this.cap('Fuegos artificiales');const c=this.ctx,t=c.currentTime,d=this.dest((x||0)*5,-9);
    const o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(95,t);o.frequency.exponentialRampToValueAtTime(38,t+.5);g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.0001,t+.7);o.connect(g);g.connect(d);o.start(t);o.stop(t+.8);
    const s=c.createBufferSource();s.buffer=this.nbuf;const hp=c.createBiquadFilter();hp.type='highpass';hp.frequency.value=2500;const ng=c.createGain();ng.gain.setValueAtTime(0,t+.5);ng.gain.linearRampToValueAtTime(.035,t+.55);ng.gain.exponentialRampToValueAtTime(.0001,t+1.6);s.connect(hp);hp.connect(ng);ng.connect(d);s.start(t+.5,Math.random());s.stop(t+1.7);hap(8)},
  onCap:null,
  cap(k){if(!this.onCap)return;const n=performance.now(),l=this._cl||(this._cl={}),gap={'Golpe suave de la canoa':1500,'Fuegos artificiales':1500,'Salpicadura':9000,'Lluvia suave':40000,'Cascada cercana':30000}[k]||9000;if(l[k]&&n-l[k]<gap)return;l[k]=n;this.onCap(k)},
  mute(on){this.muted=on;if(this.master)this.master.gain.setTargetAtTime(on?0:.6*this.vol,this.ctx.currentTime,.05);if(this.pad)this.padFilter()},
  quack(x){if(!this.ok())return;this.cap('Cuac de pato');const c=this.ctx,t=c.currentTime,d=this.dest((x||0)*4,-3);
    [[0,420,300],[.14,360,250]].forEach(([dl,f0,f1])=>{const o=c.createOscillator(),bp=c.createBiquadFilter(),g=c.createGain();o.type='sawtooth';o.frequency.setValueAtTime(f0,t+dl);o.frequency.exponentialRampToValueAtTime(f1,t+dl+.1);bp.type='bandpass';bp.frequency.value=1000;bp.Q.value=2.5;g.gain.setValueAtTime(0,t+dl);g.gain.linearRampToValueAtTime(.03,t+dl+.015);g.gain.exponentialRampToValueAtTime(.0001,t+dl+.12);o.connect(bp);bp.connect(g);g.connect(d);o.start(t+dl);o.stop(t+dl+.14)})},
  flap(x){hap([6,40,6,40,6]);if(!this.ok())return;this.cap('Aleteo de garza');const c=this.ctx,t=c.currentTime,d=this.dest((x||0)*4,-3),s=c.createBufferSource();s.buffer=this.nbuf;const bp=c.createBiquadFilter();bp.type='bandpass';bp.frequency.value=700;bp.Q.value=.8;const g=c.createGain();g.gain.setValueAtTime(0,t);
    for(let i=0;i<5;i++){g.gain.linearRampToValueAtTime(.05,t+i*.16+.04);g.gain.linearRampToValueAtTime(.006,t+i*.16+.13)}g.gain.linearRampToValueAtTime(0,t+.95);s.connect(bp);bp.connect(g);g.connect(d);s.start(t,Math.random());s.stop(t+1)},
  setVol(v){this.vol=v;if(this.master&&!this.muted)this.master.gain.setTargetAtTime(.6*v,this.ctx.currentTime,.1);if(this.pad)this.padFilter()}
};
