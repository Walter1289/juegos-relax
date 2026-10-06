// Audio generado (sin archivos): agua, drone, flauta tipo shakuhachi, campanillas, remo, grillos.
const SC=[0,2,3,7,8]; // hirajoshi
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
/* subtítulo de ambiente (UX es global; si falta, no pasa nada) */
const cap=(k,g)=>{try{window.UX&&UX.cap(k,g)}catch(e){}};
const hz=(deg,oct)=>73.42*Math.pow(2,(SC[deg%5]+12*(oct+Math.floor(deg/5)))/12);
export const A={
  ctx:null,on:true,
  init(){
    if(this.ctx)return;
    const C=this.ctx=new (window.AudioContext||window.webkitAudioContext)();
    this.m=C.createGain();this.m.gain.value=.8;window.UX?UX.out(C,this.m):this.m.connect(C.destination);
    const len=C.sampleRate*2.6,ir=C.createBuffer(2,len,C.sampleRate);
    for(let ch=0;ch<2;ch++){const d=ir.getChannelData(ch);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.4)}
    this.rv=C.createConvolver();this.rv.buffer=ir;const rg=C.createGain();rg.gain.value=.55;this.rv.connect(rg);rg.connect(this.m);
    const nb=C.createBuffer(1,C.sampleRate*3,C.sampleRate),nd=nb.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;this.nb=nb;
    const loop=k=>{if(k&&window.UX&&UX.pinkSrc){const g=UX.pinkSrc(C,k);g.start(0,Math.random()*6);return g}const s=C.createBufferSource();s.buffer=nb;s.loop=true;s.start(0,Math.random()*2);return s};
    // agua del río
    const w=loop(.81),wf=C.createBiquadFilter();wf.type='bandpass';wf.frequency.value=520;wf.Q.value=.5;this.wg=C.createGain();this.wg.gain.value=.03;
    w.connect(wf);wf.connect(this.wg);this.wg.connect(this.m);
    // murmullo agudo del arroyo
    const w2=loop(1.46),wf2=C.createBiquadFilter();wf2.type='bandpass';wf2.frequency.value=2200;wf2.Q.value=1.2;this.wg2=C.createGain();this.wg2.gain.value=.008;
    w2.connect(wf2);wf2.connect(this.wg2);this.wg2.connect(this.m);
    // grillos de noche
    const cr=loop(),cf=C.createBiquadFilter();cf.type='bandpass';cf.frequency.value=4300;cf.Q.value=4;this.cg=C.createGain();this.cg.gain.value=0;
    const lfo=C.createOscillator(),lg=C.createGain();lfo.frequency.value=2.1;lg.gain.value=.5;lfo.connect(lg);lg.connect(this.cg.gain);lfo.start();
    cr.connect(cf);cf.connect(this.cg);this.cg.connect(this.m);
    // drone
    this.dg=C.createGain();this.dg.gain.value=.05;this.dg.connect(this.m);this.dg.connect(this.rv);
    [1,1.5,2.0].forEach((r,i)=>{const o=C.createOscillator();o.type='sine';o.frequency.value=73.42*r*(i===2?1.003:1);const g=C.createGain();g.gain.value=i===1?.5:.7;o.connect(g);g.connect(this.dg);o.start()});
    const dl=C.createOscillator(),dlg=C.createGain();dl.frequency.value=.07;dlg.gain.value=.02;dl.connect(dlg);dlg.connect(this.dg.gain);dl.start();
    // fregado (ruido filtrado cuyo volumen sigue el movimiento) y lluvia
    const sc=loop(1.6),sf=C.createBiquadFilter();sf.type='bandpass';sf.frequency.value=2600;sf.Q.value=.8;this.sg=C.createGain();this.sg.gain.value=0;
    sc.connect(sf);sf.connect(this.sg);this.sg.connect(this.m);this.sf=sf;
    const rn=loop(2.69),rf=C.createBiquadFilter();rf.type='highpass';rf.frequency.value=1800;this.rg=C.createGain();this.rg.gain.value=0;
    rn.connect(rf);rf.connect(this.rg);this.rg.connect(this.m);
    // viento en el acantilado: ruido grave con ráfagas lentas
    const wd=loop(.71),wdf=C.createBiquadFilter();wdf.type='bandpass';wdf.frequency.value=420;wdf.Q.value=.6;this.wdg=C.createGain();this.wdg.gain.value=.012;
    const wl=C.createOscillator(),wlg=C.createGain();wl.frequency.value=.09;wlg.gain.value=.009;wl.connect(wlg);wlg.connect(this.wdg.gain);wl.start();
    const wl2=C.createOscillator(),wlg2=C.createGain();wl2.frequency.value=.023;wlg2.gain.value=180;wl2.connect(wlg2);wlg2.connect(wdf.frequency);wl2.start();
    wd.connect(wdf);wdf.connect(this.wdg);this.wdg.connect(this.m);
    this.nextFlute=C.currentTime+10;
    this.initPad();
  },
  /* capa pad adaptativa: acordes hirajoshi (semitonos {0,2,3,7,8}) sobre re3 = 146.83 Hz */
  initPad(){
    const C=this.ctx,f=C.createBiquadFilter();f.type='lowpass';f.frequency.value=500;f.Q.value=.4;
    const pg=C.createGain();pg.gain.value=0;f.connect(pg);pg.connect(this.m);
    const send=C.createGain();send.gain.value=.5;pg.connect(send);send.connect(this.rv);
    const vs=[];for(let i=0;i<4;i++){
      const a=C.createOscillator(),b=C.createOscillator(),ga=C.createGain(),gb=C.createGain(),l=C.createOscillator(),lg=C.createGain();
      a.type='sine';b.type='triangle';b.detune.value=(i%2?7:-7);ga.gain.value=.5;gb.gain.value=.18;
      l.frequency.value=.04+i*.017;lg.gain.value=.25;l.connect(lg);lg.connect(ga.gain);
      a.connect(ga);b.connect(gb);ga.connect(f);gb.connect(f);a.start();b.start();l.start();vs.push([a,b]);
    }
    this.pad={f,pg,vs,ch:0};this.mood={prog:0,night:1};this.padChord(true);this.nextChord=C.currentTime+15;this.padFilter();
  },
  /* prog 0..1: avance de la reparación (sucia = grave y oscura; reparada = cálida y brillante); night 0..1 si hubiera ciclo día/noche */
  setMood(prog,night){this.mood={prog:clamp(prog,0,1),night:night==null?1:night};if(this.pad&&this.ctx)this.padFilter()},
  padFilter(){
    const m=this.mood,t=this.ctx.currentTime,bright=m.prog*(1-.35*m.night);
    this.pad.f.frequency.setTargetAtTime(520+bright*1000,t,2.5);
    this.pad.pg.gain.setTargetAtTime(.04*(1+.15*(1-m.night)),t,2);
  },
  padChord(first){
    const C=this.ctx,p=this.pad,t=C.currentTime,D=146.83,pr=this.mood.prog;
    const dark=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],
          mid=[[-12,0,7,15],[-4,3,7,12],[0,7,12,15],[-4,0,7,15]],
          warm=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,12,19]];
    const set=pr<.5?mid:warm;p.ch=(p.ch+1+(Math.random()<.3?1:0))%set.length;
    const ch=set[p.ch];
    p.vs.forEach(([a,b],i)=>{const fr=D*Math.pow(2,ch[i]/12);a.frequency.setTargetAtTime(fr,t,first?.01:3.2);b.frequency.setTargetAtTime(fr*1.002,t,first?.01:3.2)});
    this.padFilter();
  },
  scrub(level){if(!this.ctx)return;if(level>.2&&this.on)cap('Fregado');this.sg.gain.setTargetAtTime(Math.min(.12,level*.12),this.ctx.currentTime,.05);this.sf.frequency.setTargetAtTime(1800+level*1800,this.ctx.currentTime,.1)},
  rain(on){if(this.ctx&&on&&this.on)cap('Lluvia en el techo',40000);if(this.ctx)this.rg.gain.setTargetAtTime(on?.035:0,this.ctx.currentTime,1.2)},
  chime(x,deg){
    if(!this.ctx||!this.on)return;cap('Campanita',2500);const t=this.ctx.currentTime;
    [0,2,4].forEach((k,i)=>this.pluck(hz((deg||0)+k+5,2),t+i*.15,.09,x));
  },
  breathTone(up,dur){
    const c=this.ctx;if(!c||c.state!=='running'||!this.on)return;const t=c.currentTime;
    [[1,.05],[1.5,.022]].forEach(([k,v])=>{const o=c.createOscillator(),gn=c.createGain();o.type='sine';
      o.frequency.setValueAtTime((up?196:262)*k,t);o.frequency.linearRampToValueAtTime((up?262:196)*k,t+dur);
      if(up){gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(v,t+dur)}else{gn.gain.setValueAtTime(v,t);gn.gain.linearRampToValueAtTime(0,t+dur)}
      o.connect(gn);gn.connect(this.m);o.start(t);o.stop(t+dur+.1)})},
  resume(){if(this.ctx&&this.ctx.state!=='running')this.ctx.resume()},
  setOn(v){this.on=v;if(this.m)this.m.gain.setTargetAtTime(v?.8:0,this.ctx.currentTime,.2)},
  update(speed,night,t){const day=1-night;
    if(!this.ctx)return;const n=this.ctx.currentTime;
    if(n>this.nextChord){this.nextChord=n+14+Math.random()*3;if(this.on)this.padChord()}
    // subtítulos de ambiente continuo (viento, grillos, agua), espaciados
    if(!this.nextAmb)this.nextAmb=n+6;
    if(this.on&&n>this.nextAmb){this.nextAmb=n+18+Math.random()*10;const k=['Viento','Grillos','Murmullo de agua'][this.ambI=((this.ambI||0)+1)%3];cap(k,30000)}
    this.wg.gain.setTargetAtTime(.028+Math.min(speed,7)*.007,n,.3);
    this.wg2.gain.setTargetAtTime(.006+Math.min(speed,7)*.0016,n,.3);
    this.cg.gain.setTargetAtTime(.002*night,n,1.5);
    if(!this.nextFrog)this.nextFrog=n+4;
    if(this.on&&n>this.nextFrog){this.nextFrog=n+2.5+Math.random()*(day?9:5);this.frog(Math.random()*1.6-.8,day)}
    if(!this.nextBell)this.nextBell=n+14;
    if(this.on&&n>this.nextBell){this.nextBell=n+30+Math.random()*35;this.bell()}
    if(n>this.nextFlute){this.nextFlute=n+28+Math.random()*30;this.phrase()}
  },
  pan(x){const p=this.ctx.createStereoPanner();p.pan.value=Math.max(-1,Math.min(1,x));p.connect(this.m);const s=this.ctx.createGain();s.gain.value=.55;s.connect(this.rv);return[p]},
  pluck(f,when,vol,x){
    const C=this.ctx,t=when,[p]=this.pan(x||0);
    [[1,1],[2.76,.28],[5.4,.1]].forEach(([r,a],i)=>{
      const o=C.createOscillator();o.type='sine';o.frequency.value=f*r;const g=C.createGain();
      g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol*a,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+2.6/(1+i*.6));
      o.connect(g);g.connect(p);g.connect(this.rv);o.start(t);o.stop(t+3);
    });
  },
  lantern(x){
    if(!this.ctx||!this.on)return;const t=this.ctx.currentTime;
    cap('Nota de linterna');const a=Math.floor(Math.random()*5);
    this.pluck(hz(a+5,2),t,.1,x);this.pluck(hz(a+7,2),t+.16,.07,x);
  },
  flute(deg,oct,when,dur,vol){
    const C=this.ctx,f=hz(deg,oct),t=when;
    const o=C.createOscillator();o.type='sine';o.frequency.value=f;
    const vb=C.createOscillator(),vg=C.createGain();vb.frequency.value=4.6;vg.gain.value=f*.007;vb.connect(vg);vg.connect(o.frequency);
    const nz=C.createBufferSource();nz.buffer=this.nb;nz.loop=true;const nf=C.createBiquadFilter();nf.type='bandpass';nf.frequency.value=f*2;nf.Q.value=4;const ng=C.createGain();ng.gain.value=vol*.5;
    const g=C.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.35);g.gain.setTargetAtTime(0,t+dur,.5);
    o.connect(g);nz.connect(nf);nf.connect(ng);ng.connect(g);g.connect(this.m);g.connect(this.rv);
    o.start(t);vb.start(t);nz.start(t);o.stop(t+dur+2.5);vb.stop(t+dur+2.5);nz.stop(t+dur+2.5);
  },
  phrase(){
    if(!this.on)return;cap('Flauta shakuhachi');const t=this.ctx.currentTime+.2;let tt=t;
    const seq=[[0,2,2.6],[2,2,1.8],[1,2,1.6],[4,1,3.4]].slice(0,2+Math.floor(Math.random()*3));
    seq.forEach(([d,o,du])=>{this.flute(d,o+1,tt,du,.035);tt+=du*.9});
  },
  frog(x,day){
    cap('Croar de ranas',14000);
    const C=this.ctx,t=C.currentTime+.05,[p]=this.pan(x),big=Math.random()<.4,f0=big?210+Math.random()*40:340+Math.random()*80,nn=1+((Math.random()*3)|0);
    for(let i=0;i<nn;i++){const tt=t+i*(big?.26:.17);
      const o=C.createOscillator(),g=C.createGain(),f=C.createBiquadFilter();o.type='triangle';
      o.frequency.setValueAtTime(f0,tt);o.frequency.exponentialRampToValueAtTime(f0*1.35,tt+.06);o.frequency.exponentialRampToValueAtTime(f0*.85,tt+.14);
      f.type='bandpass';f.frequency.value=f0*2;f.Q.value=2;
      g.gain.setValueAtTime(0,tt);g.gain.linearRampToValueAtTime((day?.012:.02)*(big?1.2:.8),tt+.03);g.gain.exponentialRampToValueAtTime(.0001,tt+.16);
      o.connect(f);f.connect(g);g.connect(p);g.connect(this.rv);o.start(tt);o.stop(tt+.2)}
  },
  bell(){
    cap('Campana de templo');
    const C=this.ctx,t=C.currentTime+.1,[p]=this.pan(Math.random()*1.2-.6),f=hz(Math.floor(Math.random()*3),0)*2;
    [[1,1,7],[2.01,.35,5],[2.76,.28,4],[4.07,.12,2.5],[5.4,.08,2]].forEach(([r,a,d])=>{
      const o=C.createOscillator(),g=C.createGain();o.type='sine';o.frequency.value=f*r;
      g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.022*a,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);
      o.connect(g);g.connect(p);g.connect(this.rv);o.start(t);o.stop(t+d+.1)})
  },
  paddle(side){
    if(!this.ctx||!this.on)return;const C=this.ctx,t=C.currentTime,[p]=this.pan(side*.7);
    const s=C.createBufferSource();s.buffer=this.nb;const f=C.createBiquadFilter();f.type='lowpass';f.frequency.setValueAtTime(1400,t);f.frequency.exponentialRampToValueAtTime(300,t+.5);
    const g=C.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.09,t+.05);g.gain.exponentialRampToValueAtTime(.0001,t+.6);
    s.connect(f);f.connect(g);g.connect(p);s.start(t,Math.random()*2);s.stop(t+.7);
  },
  plop(x){
    if(!this.ctx||!this.on)return;const C=this.ctx,t=C.currentTime;const o=C.createOscillator(),g=C.createGain(),p=C.createStereoPanner?C.createStereoPanner():null;
    o.type='sine';o.frequency.setValueAtTime(520,t);o.frequency.exponentialRampToValueAtTime(190,t+.12);
    g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.05,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+.22);
    o.connect(g);if(p){p.pan.value=Math.max(-1,Math.min(1,x||0));g.connect(p);p.connect(this.m)}else g.connect(this.m);o.start(t);o.stop(t+.25);
  },
  /* maullido suave del gato */
  meow(){
    if(!this.ctx||!this.on)return;cap('Maullido suave',4000);const C=this.ctx,t=C.currentTime;
    const o=C.createOscillator(),f=C.createBiquadFilter(),g=C.createGain();o.type='triangle';
    o.frequency.setValueAtTime(520,t);o.frequency.linearRampToValueAtTime(820,t+.14);o.frequency.linearRampToValueAtTime(480,t+.42);
    f.type='bandpass';f.frequency.value=1500;f.Q.value=1.2;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.035,t+.07);g.gain.exponentialRampToValueAtTime(.0001,t+.5);
    o.connect(f);f.connect(g);g.connect(this.m);g.connect(this.rv);o.start(t);o.stop(t+.55);
  },
  /* madera que cruje al reparar */
  creak(){
    if(!this.ctx||!this.on)return;cap('Madera que cruje',4000);const C=this.ctx,t=C.currentTime;
    const o=C.createOscillator(),f=C.createBiquadFilter(),g=C.createGain();o.type='sawtooth';
    o.frequency.setValueAtTime(95,t);o.frequency.exponentialRampToValueAtTime(150,t+.18);o.frequency.exponentialRampToValueAtTime(70,t+.4);
    f.type='lowpass';f.frequency.value=420;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.03,t+.06);g.gain.exponentialRampToValueAtTime(.0001,t+.45);
    o.connect(f);f.connect(g);g.connect(this.m);o.start(t);o.stop(t+.5);
  },
  /* destello agudo de la estrella fugaz */
  sparkle(){
    if(!this.ctx||!this.on)return;const t=this.ctx.currentTime;this.pluck(hz(4,4),t,.035,.4);this.pluck(hz(7,4),t+.12,.025,.4);
  },
  bump(){
    if(!this.ctx||!this.on)return;const C=this.ctx,t=C.currentTime;const o=C.createOscillator(),g=C.createGain();
    o.type='sine';o.frequency.setValueAtTime(110,t);o.frequency.exponentialRampToValueAtTime(48,t+.35);
    g.gain.setValueAtTime(.18,t);g.gain.exponentialRampToValueAtTime(.0001,t+.45);o.connect(g);g.connect(this.m);o.start(t);o.stop(t+.5);
  }
};
