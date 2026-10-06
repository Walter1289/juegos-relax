(()=>{var Vx=()=>{try{return localStorage.getItem("rio3d-hap")!=="0"}catch{return!0}},Iu=null;function ir(i){if(Vx())try{if(navigator.vibrate){navigator.vibrate(i);return}if(!Iu){let t=document.createElement("label");t.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),t.appendChild(e),document.body.appendChild(t),Iu=t}Iu.click()}catch{}}var Lu=(i,t,e)=>Math.max(t,Math.min(e,i)),Wi=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],tn=(i,t)=>i+Math.random()*(t-i),ce={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(ir(9),!this.ok())return;this.cap("Nota de linterna");let t=this.ctx.currentTime;this.pluck(Wi[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(Wi[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;this.cap("Salpicadura");let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},vol:1,ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6*this.vol,e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let T=0;T<r.length;T++)r[T]=Math.random()*2-1;this.nbuf=s;let o=Math.floor(t.sampleRate*2.8),a=t.createBuffer(2,o,t.sampleRate);for(let T=0;T<2;T++){let R=a.getChannelData(T);for(let P=0;P<o;P++)R[P]=(Math.random()*2-1)*Math.pow(1-P/o,2.6)}let c=t.createConvolver();c.buffer=a;let l=t.createGain();l.gain.value=.38,n.connect(c),c.connect(l),l.connect(e);let h=this.noise(),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=650;let d=t.createGain();d.gain.value=.07;let f=t.createOscillator();f.frequency.value=.09;let p=t.createGain();p.gain.value=.04,f.connect(p),p.connect(d.gain),f.start(),h.connect(u),u.connect(d),d.connect(e);let x=this.noise(),m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=2200,m.Q.value=.7;let g=t.createGain();g.gain.value=.02,x.connect(m),m.connect(g),g.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(T=>{let R=this.panner(T*4,0,0,2,.6);R.connect(e),this.bk[T]=R,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([P,N,D,C],U)=>{let k=this.noise(Math.random()*1.8),W=t.createBiquadFilter();W.type="bandpass",W.frequency.value=P,W.Q.value=N;let tt=t.createGain();tt.gain.value=C;let O=t.createOscillator(),X=t.createGain();O.frequency.value=D*(T>0?1.13:.91),X.gain.value=C*.7,O.connect(X),X.connect(tt.gain),O.start(),k.connect(W),W.connect(tt),tt.connect(R)})});let _=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let T=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,R=t.currentTime,P=t.createOscillator(),N=t.createGain(),D=tn(450,1100),C=this.panner(this.bkx[T],0,tn(-4,2),2,.6,!0);C.connect(e),P.frequency.setValueAtTime(D,R),P.frequency.exponentialRampToValueAtTime(D*tn(1.4,2),R+.07),N.gain.setValueAtTime(0,R),N.gain.linearRampToValueAtTime(tn(.01,.026),R+.012),N.gain.exponentialRampToValueAtTime(1e-4,R+.1),P.connect(N),N.connect(C),P.start(R),P.stop(R+.12)}setTimeout(_,tn(90,260))}};_();let E=this.noise(Math.random()*1.5),v=t.createBiquadFilter();v.type="highpass",v.frequency.value=380;let b=t.createBiquadFilter();b.type="lowpass",b.frequency.value=4200;let M=t.createGain();M.gain.value=0;let A=this.panner(0,0,-30,2,.5);E.connect(v),v.connect(b),b.connect(M),M.connect(A),A.connect(e),this.wfG=M,this.wfP=A,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([T,R])=>{let P=t.createStereoPanner();P.pan.value=T,P.connect(e);let N=this.noise(Math.random()*1.8),D=t.createBiquadFilter();D.type="highpass",D.frequency.value=R;let C=t.createGain();C.gain.value=0,N.connect(D),D.connect(C),C.connect(P),this.rgs.push([C,.07]);let U=this.noise(Math.random()*1.8),k=t.createBiquadFilter();k.type="bandpass",k.frequency.value=1500,k.Q.value=.6;let W=t.createGain();W.gain.value=0,U.connect(k),k.connect(W),W.connect(P),this.rgs.push([W,.035])}),this.rainLvl=0;let y=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let T=t.currentTime,R=t.createOscillator(),P=t.createGain(),N=this.panner(tn(-4,4),tn(0,1),tn(-4,1),1.5,.7,!0);N.connect(e),R.frequency.setValueAtTime(tn(1800,3200),T),R.frequency.exponentialRampToValueAtTime(tn(900,1400),T+.05),P.gain.setValueAtTime(0,T),P.gain.linearRampToValueAtTime(.02*this.rainLvl,T+.004),P.gain.exponentialRampToValueAtTime(1e-4,T+.07),R.connect(P),P.connect(N),R.start(T),R.stop(T+.09)}setTimeout(y,tn(70,260))}};y(),this.music(),this.padInit()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;i>.5&&this.cap("Lluvia suave"),this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let o=e.createOscillator(),a=e.createGain();o.type="sine",o.frequency.setValueAtTime((i?196:262)*s,n),o.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r,n+t)):(a.gain.setValueAtTime(r,n),a.gain.linearRampToValueAtTime(0,n+t)),o.connect(a),a.connect(this.bus),o.start(n),o.stop(n+t+.1)})},noise(i){let t=this.ctx,e=t.createBufferSource();return e.buffer=this.nbuf,e.loop=!0,e.start(0,i||0),e},panner(i,t,e,n,s,r){let o=this.ctx.createPanner();return o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=n||2,o.rolloffFactor=s==null?.6:s,o.positionX?(o.positionX.value=i,o.positionY.value=t,o.positionZ.value=e):o.setPosition(i,t,e),o},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));r>.45&&this.cap("Cascada cercana"),this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,o=e||r.currentTime,a=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([c,l],h)=>{let u=r.createOscillator(),d=r.createGain();u.type=h?"sine":"triangle",u.frequency.value=i*c,d.gain.setValueAtTime(0,o),d.gain.linearRampToValueAtTime(t*l,o+.01),d.gain.exponentialRampToValueAtTime(1e-4,o+(h?1.1:2)),u.connect(d),d.connect(a),u.start(o),u.stop(o+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r),c=o.createOscillator(),l=o.createOscillator(),h=o.createGain(),u=o.createGain();c.type="sine",l.type="triangle",c.frequency.setValueAtTime(i*.96,t),c.frequency.exponentialRampToValueAtTime(i,t+.18),l.frequency.setValueAtTime(i*2*.96,t),l.frequency.exponentialRampToValueAtTime(i*2,t+.18);let d=o.createOscillator(),f=o.createGain();d.frequency.value=4.8,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(i*.012,t+e*.6),d.connect(f),f.connect(c.frequency),d.start(t),d.stop(t+e+.5),u.gain.value=.1,l.connect(u),u.connect(h),c.connect(h),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(n,t+.35),h.gain.setValueAtTime(n*.85,t+e*.7),h.gain.linearRampToValueAtTime(0,t+e);let p=o.createBufferSource();p.buffer=this.nbuf,p.loop=!0;let x=o.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let m=o.createGain();m.gain.setValueAtTime(0,t),m.gain.linearRampToValueAtTime(n*.5,t+.2),m.gain.linearRampToValueAtTime(0,t+e),p.connect(x),x.connect(m),m.connect(a),p.start(t),p.stop(t+e+.1),h.connect(a),c.start(t),l.start(t),c.stop(t+e+.1),l.stop(t+e+.1)},drum(i,t,e){if(!this.ok())return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28),r.gain.setValueAtTime(t,i),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(this.bus),s.start(i),s.stop(i+1);let o=n.createBufferSource();o.buffer=this.nbuf;let a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=500;let c=n.createGain();c.gain.setValueAtTime(t*.5,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.1),o.connect(a),a.connect(c),c.connect(this.bus),o.start(i,Math.random()),o.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([c,l,h])=>{let u=o.createOscillator(),d=o.createGain();u.type="sine",u.frequency.value=i*c;let f=(n?7:3)*h;d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(e*l,t+.005),d.gain.exponentialRampToValueAtTime(1e-4,t+f),u.connect(d),d.connect(a),u.start(t),u.stop(t+f+.1)})},next(i,t,e){this.idx=Lu(this.idx+Math.floor(Math.random()*4)-1,3,Wi.length-1),this.bell(Wi[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),o=t.currentTime;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+.4),n.connect(s),s.connect(r),r.connect(e),n.start(o,Math.random()),n.stop(o+.45)},bump(i=.6,t=0){if(ir(i>.5?22:12),!this.ok())return;this.cap("Golpe suave de la canoa");let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),o=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),o.gain.setValueAtTime(.16*i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(o),o.connect(s),r.start(n),r.stop(n+.35)},discover(){if(ir([14,70,14]),!this.ok())return;this.cap("Nota de linterna");let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(Wi[t],.12,i+e*.2)),this.bell(Wi[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([c,l],h)=>{let u=i.createOscillator(),d=i.createGain(),f=i.createOscillator(),p=i.createGain();u.type="sine",u.frequency.value=c,d.gain.value=l,f.frequency.value=.05+h*.03,p.gain.value=l*.6,f.connect(p),p.connect(d.gain),u.connect(d),d.connect(this.bus),u.start(),f.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let c=i.currentTime+.05,l=t%8;(t>>3)%4===3?l===0&&this.drum(c,.12,.9):l===0?(this.drum(c,.34,1),this.cap("Tambor lejano")):l===3?this.drum(c,.12,1.35):l===5?this.drum(c,.16,1.15):l===6&&Math.random()<.4&&this.drum(c,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let c=i.currentTime+.2,l=0;if(this.ok()){this.cap("Flauta shakuhachi");let h=2+Math.floor(Math.random()*3),u=tn(-3,3);for(let d=0;d<h;d++){n=Lu(n+Math.floor(Math.random()*5)-2,0,7);let f=tn(1.8,3.4);this.flute(Wi[n],c,f,.06,u+tn(-.3,.3),-2.5),c+=f*.88,l+=f*.88}}setTimeout(s,(l+tn(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){this.cap("Campanillas");let c=i.currentTime+.05,l=Wi[5+Math.floor(Math.random()*5)];this.bell(l,c,.045,!1,tn(-5,5),tn(-5,-1)),Math.random()<.5&&this.bell(Wi[5+Math.floor(Math.random()*5)],c+tn(.18,.4),.035,!1,tn(-5,5),tn(-5,-1))}setTimeout(r,tn(3500,8e3))}};setTimeout(r,2500);let o=()=>{if(this.ctx){if(this.ok()){this.cap("Koto");let c=i.currentTime+.05,l=Math.floor(Math.random()*6),h=tn(-4,4);for(let u=0;u<3;u++)this.pluck(Wi[Lu(l+[0,2,1][u],0,9)],.06,c+u*.28,h,-2)}setTimeout(o,tn(14e3,24e3))}};setTimeout(o,9e3);let a=()=>{this.ctx&&(this.ok()&&(this.cap("Campana de templo"),this.bell(146.83,i.currentTime+.05,.08,!0,tn(-6,6),-8)),setTimeout(a,tn(35e3,55e3)))};setTimeout(a,16e3)},padInit(){let i=this.ctx,t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=800,t.Q.value=.4;let e=i.createGain();e.gain.value=0,t.connect(e),e.connect(this.bus);let n=[];for(let r=0;r<4;r++){let o=i.createOscillator(),a=i.createOscillator(),c=i.createGain(),l=i.createGain(),h=i.createOscillator(),u=i.createGain();o.type="sine",a.type="triangle",a.detune.value=r%2?7:-7,c.gain.value=.5,l.gain.value=.18,h.frequency.value=.04+r*.017,u.gain.value=.25,h.connect(u),u.connect(c.gain),o.connect(c),a.connect(l),c.connect(t),l.connect(t),o.start(),a.start(),h.start(),n.push([o,a])}this.pad={f:t,pg:e,vs:n,ch:0,t0:0},this.mood={el:.5,lm:-1,sn:0},this.padChord(!0);let s=()=>{this.ctx&&(this.ok()&&this.padChord(),setTimeout(s,15e3+Math.random()*4e3))};setTimeout(s,9e3)},setMood(i,t,e){this.mood={el:i,lm:t,sn:e},this.pad&&this.ok()&&this.padFilter()},padFilter(){let i=this.mood,t=this.pad.f,e=this.ctx.currentTime,n=Math.max(0,Math.min(1,i.el*1.6)),s=420+n*900,r=.045+(1-n)*.012;i.lm===6&&(s+=500),i.lm===5&&(s-=120,r*=1.2),i.lm===2&&(r*=1.1),t.frequency.setTargetAtTime(s,e,2.5),this.pad.pg.gain.setTargetAtTime(this.muted?0:r*this.vol,e,2)},padChord(i){let t=this.ctx,e=this.mood,n=this.pad,s=t.currentTime,r=146.83,o=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,14,15]],a=[[0,7,12,15],[-4,3,7,12],[0,3,7,12],[-4,0,7,15]],c=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],l=e.el>.35?o:e.el>-.05?a:c;n.ch=(n.ch+1+(Math.random()<.3?1:0))%l.length;let h=l[n.ch].slice();(e.lm===3||e.lm===7)&&(h[3]=h[3]+12),e.lm===8&&(h=[h[0],h[0]+7,h[0]+14,h[0]+19]),e.lm===5&&(h=[-12,-5,0,7]),e.lm===6&&(h=h.map((d,f)=>f>1?d+12:d));let u=e.sn===3?-2:e.sn===2?-1:0;n.vs.forEach(([d,f],p)=>{let x=r*Math.pow(2,(h[p]+u)/12);d.frequency.setTargetAtTime(x,s,i?.01:3.2),f.frequency.setTargetAtTime(x*1.002,s,i?.01:3.2)}),this.padFilter()},boom(i){if(!this.ok())return;this.cap("Fuegos artificiales");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*5,-9),s=t.createOscillator(),r=t.createGain();s.frequency.setValueAtTime(95,e),s.frequency.exponentialRampToValueAtTime(38,e+.5),r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.7),s.connect(r),r.connect(n),s.start(e),s.stop(e+.8);let o=t.createBufferSource();o.buffer=this.nbuf;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let c=t.createGain();c.gain.setValueAtTime(0,e+.5),c.gain.linearRampToValueAtTime(.035,e+.55),c.gain.exponentialRampToValueAtTime(1e-4,e+1.6),o.connect(a),a.connect(c),c.connect(n),o.start(e+.5,Math.random()),o.stop(e+1.7),ir(8)},roar(){if(ir([30,60,30,90,40]),!this.ok())return;this.cap("Rugido del drag\xF3n");let i=this.ctx,t=i.currentTime,e=this.dest(0,-12),n=i.createOscillator(),s=i.createOscillator(),r=i.createGain(),o=i.createBiquadFilter();n.type="sawtooth",s.type="square",n.frequency.setValueAtTime(70,t),n.frequency.linearRampToValueAtTime(110,t+.5),n.frequency.exponentialRampToValueAtTime(48,t+2.2),s.frequency.setValueAtTime(35,t),s.frequency.exponentialRampToValueAtTime(24,t+2.2),o.type="lowpass",o.frequency.setValueAtTime(260,t),o.frequency.linearRampToValueAtTime(900,t+.5),o.frequency.exponentialRampToValueAtTime(140,t+2.2),o.Q.value=4,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.16,t+.3),r.gain.setValueAtTime(.16,t+.9),r.gain.exponentialRampToValueAtTime(1e-4,t+2.4),n.connect(o),s.connect(o),o.connect(r),r.connect(e),n.start(t),s.start(t),n.stop(t+2.5),s.stop(t+2.5);let a=i.createBufferSource();a.buffer=this.nbuf;let c=i.createBiquadFilter();c.type="bandpass",c.frequency.value=420,c.Q.value=1.2;let l=i.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(.05,t+.3),l.gain.exponentialRampToValueAtTime(1e-4,t+1.8),a.connect(c),c.connect(l),l.connect(e),a.start(t,Math.random()),a.stop(t+2)},onCap:null,cap(i){if(!this.onCap)return;let t=performance.now(),e=this._cl||(this._cl={}),n={"Golpe suave de la canoa":1500,"Fuegos artificiales":1500,Salpicadura:9e3,"Lluvia suave":4e4,"Cascada cercana":3e4}[i]||9e3;e[i]&&t-e[i]<n||(e[i]=t,this.onCap(i))},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6*this.vol,this.ctx.currentTime,.05),this.pad&&this.padFilter()},quack(i){if(!this.ok())return;this.cap("Cuac de pato");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3);[[0,420,300],[.14,360,250]].forEach(([s,r,o])=>{let a=t.createOscillator(),c=t.createBiquadFilter(),l=t.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,e+s),a.frequency.exponentialRampToValueAtTime(o,e+s+.1),c.type="bandpass",c.frequency.value=1e3,c.Q.value=2.5,l.gain.setValueAtTime(0,e+s),l.gain.linearRampToValueAtTime(.03,e+s+.015),l.gain.exponentialRampToValueAtTime(1e-4,e+s+.12),a.connect(c),c.connect(l),l.connect(n),a.start(e+s),a.stop(e+s+.14)})},flap(i){if(ir([6,40,6,40,6]),!this.ok())return;this.cap("Aleteo de garza");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3),s=t.createBufferSource();s.buffer=this.nbuf;let r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.8;let o=t.createGain();o.gain.setValueAtTime(0,e);for(let a=0;a<5;a++)o.gain.linearRampToValueAtTime(.05,e+a*.16+.04),o.gain.linearRampToValueAtTime(.006,e+a*.16+.13);o.gain.linearRampToValueAtTime(0,e+.95),s.connect(r),r.connect(o),o.connect(n),s.start(e,Math.random()),s.stop(e+1)},setVol(i){this.vol=i,this.master&&!this.muted&&this.master.gain.setTargetAtTime(.6*i,this.ctx.currentTime,.1),this.pad&&this.padFilter()}};var sm=0,vd=1,rm=2;var ka=1,om=2,So=3,Vs=0,Tn=1,me=2,ts=0,Bi=1,kn=2,Md=3,bd=4,am=5;var pr=100,cm=101,lm=102,hm=103,um=104,dm=200,fm=201,pm=202,mm=203,Sd=204,Ed=205,gm=206,xm=207,_m=208,ym=209,vm=210,Mm=211,bm=212,Sm=213,Em=214,sl=0,rl=1,ol=2,ao=3,al=4,cl=5,ll=6,hl=7,Vl=0,Tm=1,wm=2,Oi=0,Td=1,wd=2,Ad=3,Rd=4,Cd=5,Pd=6,Id=7;var Ld=300,Ws=301,mr=302,Wl=303,Xl=304,Ga=306,co=1e3,Yi=1001,ul=1002,vn=1003,Am=1004;var Va=1005;var Dn=1006,ql=1007;var Xs=1008;var ei=1009,Dd=1010,Nd=1011,Eo=1012,Yl=1013,Hi=1014,Si=1015,fi=1016,Zl=1017,Jl=1018,To=1020,Ud=35902,Fd=35899,Bd=1021,Od=1022,Ei=1023,Ji=1026,qs=1027,wo=1028,$l=1029,Ys=1030,Kl=1031;var jl=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Ql=35840,th=35841,eh=35842,nh=35843,ih=36196,sh=37492,rh=37496,oh=37488,ah=37489,Za=37490,ch=37491,lh=37808,hh=37809,uh=37810,dh=37811,fh=37812,ph=37813,mh=37814,gh=37815,xh=37816,_h=37817,yh=37818,vh=37819,Mh=37820,bh=37821,Sh=36492,Eh=36494,Th=36495,wh=36283,Ah=36284,Ja=36285,Rh=36286;var ua=2300,dl=2301,nl=2302,ad=2303,cd=2400,ld=2401,hd=2402;var Rm=3200;var $a=0,Cm=1,ys="",Ln="srgb",da="srgb-linear",fa="linear",ke="srgb";var il=7680;var Pm=519,Im=512,Lm=513,Dm=514,Ch=515,Nm=516,Um=517,Ph=518,Fm=519,Hd=35044;var zd="300 es",Di=2e3,lo=2001;function Wx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bm(){let i=pa("canvas");return i.style.display="block",i}var Mp={},ho=null;function ma(...i){let t="THREE."+i.shift();ho?ho("log",t,...i):console.log(t,...i)}function Om(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Om(i);let t="THREE."+i.shift();if(ho)ho("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Om(i);let t="THREE."+i.shift();if(ho)ho("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function cr(...i){let t=i.join(" ");t in Mp||(Mp[t]=!0,jt(...i))}function Hm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zm={[sl]:rl,[ol]:ll,[al]:hl,[ao]:cl,[rl]:sl,[ll]:ol,[hl]:al,[cl]:ao},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Du=Math.PI/180,fl=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function qx(i,t){return(i%t+t)%t}function Nu(i,t,e){return(1-e)*i+e*t}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qd=class qd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qd.prototype.isVector2=!0;var ut=qd,fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==p){let m=c*d+l*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),E=Math.sin(_);g=Math.sin(g*_)/E,a=Math.sin(a*_)/E,c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+x*a}else{c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+x*a;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+c*f-l*d,t[e+1]=c*p+h*d+l*u-a*f,t[e+2]=l*p+h*f+a*d-c*u,t[e+3]=h*p-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yd=class Yd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Uu.copy(this).projectOnVector(t),this.sub(Uu)}reflect(t){return this.sub(Uu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yd.prototype.isVector3=!0;var L=Yd,Uu=new L,bp=new fn,Zd=class Zd{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],E=s[4],v=s[7],b=s[2],M=s[5],A=s[8];return r[0]=o*x+a*_+c*b,r[3]=o*m+a*E+c*M,r[6]=o*g+a*v+c*A,r[1]=l*x+h*_+u*b,r[4]=l*m+h*E+u*M,r[7]=l*g+h*v+u*A,r[2]=d*x+f*_+p*b,r[5]=d*m+f*E+p*M,r[8]=d*g+f*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fu.makeScale(t,e)),this}rotate(t){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fu.makeRotation(-t)),this}translate(t,e){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zd.prototype.isMatrix3=!0;var le=Zd,Fu=new le,Sp=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ep=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){let i={enabled:!0,workingColorSpace:da,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ke&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ys?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[da]:{primaries:t,whitePoint:n,transfer:fa,toXYZ:Sp,fromXYZ:Ep,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Sp,fromXYZ:Ep,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}var Ce=Yx();function gs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gr,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gr===void 0&&(Gr=pa("canvas")),Gr.width=t.width,Gr.height=t.height;let s=Gr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Gr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=pa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gs(e[n]/255)*255):e[n]=gs(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zx=0,uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bu(s[o].image)):r.push(Bu(s[o]))}else r=Bu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?pl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Jx=0,Ou=new L,qn=class i extends $i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=Dn,o=Xs,a=Ei,c=ei,l=i.DEFAULT_ANISOTROPY,h=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=ms(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ou).x}get height(){return this.source.getSize(Ou).y}get depth(){return this.source.getSize(Ou).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case co:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case co:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Ld;qn.DEFAULT_ANISOTROPY=1;var Jd=class Jd{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,v=(f+1)/2,b=(g+1)/2,M=(h+d)/4,A=(u+x)/4,y=(p+m)/4;return E>v&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=A/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jd.prototype.isVector4=!0;var on=Jd,ml=class extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new qn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new uo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ga=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Gl=class Gl{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,p,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Vr.setFromMatrixColumn(t,0).length(),r=1/Vr.setFromMatrixColumn(t,1).length(),o=1/Vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,p=l*h,x=l*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,p=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=p*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($x,t,Kx)}lookAt(t,e,n){let s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ls.crossVectors(n,ai),Ls.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ls.crossVectors(n,ai)),Ls.normalize(),Ac.crossVectors(ai,Ls),s[0]=Ls.x,s[4]=Ac.x,s[8]=ai.x,s[1]=Ls.y,s[5]=Ac.y,s[9]=ai.y,s[2]=Ls.z,s[6]=Ac.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],E=n[7],v=n[11],b=n[15],M=s[0],A=s[4],y=s[8],T=s[12],R=s[1],P=s[5],N=s[9],D=s[13],C=s[2],U=s[6],k=s[10],W=s[14],tt=s[3],O=s[7],X=s[11],J=s[15];return r[0]=o*M+a*R+c*C+l*tt,r[4]=o*A+a*P+c*U+l*O,r[8]=o*y+a*N+c*k+l*X,r[12]=o*T+a*D+c*W+l*J,r[1]=h*M+u*R+d*C+f*tt,r[5]=h*A+u*P+d*U+f*O,r[9]=h*y+u*N+d*k+f*X,r[13]=h*T+u*D+d*W+f*J,r[2]=p*M+x*R+m*C+g*tt,r[6]=p*A+x*P+m*U+g*O,r[10]=p*y+x*N+m*k+g*X,r[14]=p*T+x*D+m*W+g*J,r[3]=_*M+E*R+v*C+b*tt,r[7]=_*A+E*P+v*U+b*O,r[11]=_*y+E*N+v*k+b*X,r[15]=_*T+E*D+v*W+b*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=c*f-l*d,E=a*f-l*u,v=a*d-c*u,b=o*f-l*h,M=o*d-c*h,A=o*u-a*h;return e*(x*_-m*E+g*v)-n*(p*_-m*b+g*M)+s*(p*E-x*b+g*A)-r*(p*v-x*M+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,E=e*c-s*o,v=e*l-r*o,b=n*c-s*a,M=n*l-r*a,A=s*l-r*c,y=h*x-u*p,T=h*m-d*p,R=h*g-f*p,P=u*m-d*x,N=u*g-f*x,D=d*g-f*m,C=_*D-E*N+v*P+b*R-M*T+A*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=(a*D-c*N+l*P)*U,t[1]=(s*N-n*D-r*P)*U,t[2]=(x*A-m*M+g*b)*U,t[3]=(d*M-u*A-f*b)*U,t[4]=(c*R-o*D-l*T)*U,t[5]=(e*D-s*R+r*T)*U,t[6]=(m*v-p*A-g*E)*U,t[7]=(h*A-d*v+f*E)*U,t[8]=(o*N-a*R+l*y)*U,t[9]=(n*R-e*N-r*y)*U,t[10]=(p*M-x*v+g*_)*U,t[11]=(u*v-h*M-f*_)*U,t[12]=(a*T-o*P-c*y)*U,t[13]=(e*P-n*T+s*y)*U,t[14]=(x*E-p*b-m*_)*U,t[15]=(h*b-u*E+d*_)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,_=c*l,E=c*h,v=c*u,b=n.x,M=n.y,A=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+v)*b,s[2]=(p-E)*b,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+g))*M,s[6]=(m+_)*M,s[7]=0,s[8]=(p+E)*A,s[9]=(m-_)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Vr.set(s[0],s[1],s[2]).length(),a=Vr.set(s[4],s[5],s[6]).length(),c=Vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ci.copy(this);let l=1/o,h=1/a,u=1/c;return Ci.elements[0]*=l,Ci.elements[1]*=l,Ci.elements[2]*=l,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Di,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Di)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Di,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Di)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===lo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Gl.prototype.isMatrix4=!0;var Me=Gl,Vr=new L,Ci=new Me,$x=new L(0,0,0),Kx=new L(1,1,1),Ls=new L,Ac=new L,ai=new L,Tp=new Me,wp=new fn,Ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wp.setFromEuler(this),this.setFromQuaternion(wp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jx=0,Ap=new L,Wr=new fn,ls=new Me,Rc=new L,jo=new L,Qx=new L,t_=new fn,Rp=new L(1,0,0),Cp=new L(0,1,0),Pp=new L(0,0,1),Ip={type:"added"},e_={type:"removed"},Xr={type:"childadded",child:null},Hu={type:"childremoved",child:null},En=class i extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Ni,n=new fn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new le}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(Rp,t)}rotateY(t){return this.rotateOnAxis(Cp,t)}rotateZ(t){return this.rotateOnAxis(Pp,t)}translateOnAxis(t,e){return Ap.copy(t).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rp,t)}translateY(t){return this.translateOnAxis(Cp,t)}translateZ(t){return this.translateOnAxis(Pp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rc.copy(t):Rc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(jo,Rc,this.up):ls.lookAt(Rc,jo,this.up),this.quaternion.setFromRotationMatrix(ls),s&&(ls.extractRotation(s.matrixWorld),Wr.setFromRotationMatrix(ls),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ip),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e_),Hu.child=t,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ip),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,Qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new L(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},n_={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function zu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=qx(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zu(o,r,t+1/3),this.g=zu(o,r,t),this.b=zu(o,r,t-1/3)}return Ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){let n=km[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Ce.workingToColorSpace(zn.copy(this),t),Math.round(Te(zn.r*255,0,255))*65536+Math.round(Te(zn.g*255,0,255))*256+Math.round(Te(zn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.workingToColorSpace(zn.copy(this),e);let n=zn.r,s=zn.g,r=zn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.workingToColorSpace(zn.copy(this),e),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Ln){Ce.workingToColorSpace(zn.copy(this),t);let e=zn.r,n=zn.g,s=zn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(Cc);let n=Nu(Ds.h,Cc.h,e),s=Nu(Ds.s,Cc.s,e),r=Nu(Ds.l,Cc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new pt;pt.NAMES=km;var _a=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lr=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new L,hs=new L,ku=new L,us=new L,qr=new L,Yr=new L,Lp=new L,Gu=new L,Vu=new L,Wu=new L,Xu=new on,qu=new on,Yu=new on,ps=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pi.subVectors(t,e),s.cross(Pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pi.subVectors(s,e),hs.subVectors(n,e),ku.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(hs),c=Pi.dot(ku),l=hs.dot(hs),h=hs.dot(ku),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,us)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,us.x),c.addScaledVector(o,us.y),c.addScaledVector(a,us.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xu.setScalar(0),qu.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(t,e),qu.fromBufferAttribute(t,n),Yu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xu,r.x),o.addScaledVector(qu,r.y),o.addScaledVector(Yu,r.z),o}static isFrontFacing(t,e,n,s){return Pi.subVectors(n,e),hs.subVectors(t,e),Pi.cross(hs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Pi.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qr.subVectors(s,n),Yr.subVectors(r,n),Gu.subVectors(t,n);let c=qr.dot(Gu),l=Yr.dot(Gu);if(c<=0&&l<=0)return e.copy(n);Vu.subVectors(t,s);let h=qr.dot(Vu),u=Yr.dot(Vu);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(qr,o);Wu.subVectors(t,r);let f=qr.dot(Wu),p=Yr.dot(Wu);if(p>=0&&f<=p)return e.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Yr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Lp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Lp,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(qr,o).addScaledVector(Yr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ki=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(r,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pc.copy(n.boundingBox)),Pc.applyMatrix4(t.matrixWorld),this.union(Pc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Ic.subVectors(this.max,Qo),Zr.subVectors(t.a,Qo),Jr.subVectors(t.b,Qo),$r.subVectors(t.c,Qo),Ns.subVectors(Jr,Zr),Us.subVectors($r,Jr),sr.subVectors(Zr,$r);let e=[0,-Ns.z,Ns.y,0,-Us.z,Us.y,0,-sr.z,sr.y,Ns.z,0,-Ns.x,Us.z,0,-Us.x,sr.z,0,-sr.x,-Ns.y,Ns.x,0,-Us.y,Us.x,0,-sr.y,sr.x,0];return!Zu(e,Zr,Jr,$r,Ic)||(e=[1,0,0,0,1,0,0,0,1],!Zu(e,Zr,Jr,$r,Ic))?!1:(Lc.crossVectors(Ns,Us),e=[Lc.x,Lc.y,Lc.z],Zu(e,Zr,Jr,$r,Ic))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new L,new L,new L,new L,new L,new L,new L,new L],Ii=new L,Pc=new Ki,Zr=new L,Jr=new L,$r=new L,Ns=new L,Us=new L,sr=new L,Qo=new L,Ic=new L,Lc=new L,rr=new L;function Zu(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rr.fromArray(i,r);let a=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),c=t.dot(rr),l=e.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var yn=new L,Dc=new ut,i_=0,Kt=class extends $i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hd,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dc.fromBufferAttribute(this,e),Dc.applyMatrix3(t),this.setXY(e,Dc.x,Dc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix3(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ya=class extends Kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var va=class extends Kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Kt{constructor(t,e,n){super(new Float32Array(t),e,n)}},s_=new Ki,ta=new L,Ju=new L,ji=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):s_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ta.subVectors(t,this.center);let e=ta.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ta,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ta.copy(t.center).add(Ju)),this.expandByPoint(ta.copy(t.center).sub(Ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},r_=0,vi=new Me,$u=new En,Kr=new L,ci=new Ki,ea=new Ki,Cn=new L,ue=class i extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wx(t)?va:ya)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,n){return vi.makeTranslation(t,e,n),this.applyMatrix4(vi),this}scale(t,e,n){return vi.makeScale(t,e,n),this.applyMatrix4(vi),this}lookAt(t){return $u.lookAt(t),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(ci.min,ea.min),ci.expandByPoint(Cn),Cn.addVectors(ci.max,ea.max),ci.expandByPoint(Cn)):(ci.expandByPoint(ea.min),ci.expandByPoint(ea.max))}ci.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Cn.fromBufferAttribute(a,l),c&&(Kr.fromBufferAttribute(t,l),Cn.add(Kr)),s=Math.max(s,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new L,c[y]=new L;let l=new L,h=new L,u=new L,d=new ut,f=new ut,p=new ut,x=new L,m=new L;function g(y,T,R){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),h.sub(l),u.sub(l),f.sub(d),p.sub(d);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[y].add(x),a[T].add(x),a[R].add(x),c[y].add(m),c[T].add(m),c[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,T=_.length;y<T;++y){let R=_[y],P=R.start,N=R.count;for(let D=P,C=P+N;D<C;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let E=new L,v=new L,b=new L,M=new L;function A(y){b.fromBufferAttribute(s,y),M.copy(b);let T=a[y];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(M,T);let P=v.dot(c[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,P)}for(let y=0,T=_.length;y<T;++y){let R=_[y],P=R.start,N=R.count;for(let D=P,C=P+N;D<C;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Kt(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ma=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hd,this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Xn=new L,po=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix4(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyNormalMatrix(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.transformDirection(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ku=new L,o_=new L,a_=new le,Li=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ku.subVectors(n,e).cross(o_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ku),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||a_.getNormalMatrix(t),s=this.coplanarPoint(Ku).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},c_=0,Mi=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Bi,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Ed,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qi=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jr,na=new L,Qr=new L,to=new L,eo=new ut,ia=new ut,Gm=new Me,Nc=new L,sa=new L,Uc=new L,Dp=new ut,ju=new ut,Np=new ut,xs=class extends En{constructor(t=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ma(e,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new po(n,3,0,!1)),jr.setAttribute("uv",new po(n,2,3,!1))}this.geometry=jr,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qr.setFromMatrixScale(this.matrixWorld),Gm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-to.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fc(Nc.set(-.5,-.5,0),to,o,Qr,s,r),Fc(sa.set(.5,-.5,0),to,o,Qr,s,r),Fc(Uc.set(.5,.5,0),to,o,Qr,s,r),Dp.set(0,0),ju.set(1,0),Np.set(1,1);let a=t.ray.intersectTriangle(Nc,sa,Uc,!1,na);if(a===null&&(Fc(sa.set(-.5,.5,0),to,o,Qr,s,r),ju.set(0,1),a=t.ray.intersectTriangle(Nc,Uc,sa,!1,na),a===null))return;let c=t.ray.origin.distanceTo(na);c<t.near||c>t.far||e.push({distance:c,point:na.clone(),uv:ps.getInterpolation(na,Nc,sa,Uc,Dp,ju,Np,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fc(i,t,e,n,s,r){eo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ia.x=r*eo.x-s*eo.y,ia.y=s*eo.x+r*eo.y):ia.copy(eo),i.copy(t),i.x+=ia.x,i.y+=ia.y,i.applyMatrix4(Gm)}var fs=new L,Qu=new L,Bc=new L,Oc=new L,mo=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fs.copy(this.origin).addScaledVector(this.direction,e),fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qu.copy(t).add(e).multiplyScalar(.5),Bc.copy(e).sub(t).normalize(),Oc.copy(this.origin).sub(Qu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Bc),a=Oc.dot(this.direction),c=-Oc.dot(Bc),l=Oc.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qu).addScaledVector(Bc,d),f}intersectSphere(t,e){if(t.radius<0)return null;fs.subVectors(t.center,this.origin);let n=fs.dot(this.direction),s=fs.dot(fs)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fs)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,E=n.z-o.z,v=Math.abs(c),b=Math.abs(l),M=Math.abs(h),A,y,T,R,P,N,D,C,U,k,W,tt;if(v>=b&&v>=M?(T=c,N=u,U=p,tt=g,c>=0?(A=l,y=h,R=d,P=f,D=x,C=m,k=_,W=E):(A=h,y=l,R=f,P=d,D=m,C=x,k=E,W=_)):b>=M?(T=l,N=d,U=x,tt=_,l>=0?(A=h,y=c,R=f,P=u,D=m,C=p,k=E,W=g):(A=c,y=h,R=u,P=f,D=p,C=m,k=g,W=E)):(T=h,N=f,U=m,tt=E,h>=0?(A=c,y=l,R=u,P=d,D=p,C=x,k=g,W=_):(A=l,y=c,R=d,P=u,D=x,C=p,k=_,W=g)),T===0)return null;let O=A/T,X=y/T,J=1/T,mt=R-O*N,wt=P-X*N,ae=D-O*U,se=C-X*U,Yt=k-O*tt,nt=W-X*tt,ot=Yt*se-nt*ae,bt=mt*nt-wt*Yt,Ot=ae*wt-se*mt;if(s){if(ot<0||bt<0||Ot<0)return null}else if((ot<0||bt<0||Ot<0)&&(ot>0||bt>0||Ot>0))return null;let Rt=ot+bt+Ot;if(Rt===0)return null;let Jt=J*(ot*N+bt*U+Ot*tt);return(Rt>0?Jt<0:Jt>0)?null:this.at(Jt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Up=new Me,or=new mo,Hc=new ji,Fp=new L,zc=new L,kc=new L,Gc=new L,td=new L,Vc=new L,Bp=new L,Wc=new L,$=class extends En{constructor(t=new ue,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Vc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(td.fromBufferAttribute(u,t),o?Vc.addScaledVector(td,h):Vc.addScaledVector(td.sub(e),h))}e.add(Vc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(r),or.copy(t.ray).recast(t.near),!(Hc.containsPoint(or.origin)===!1&&(or.intersectSphere(Hc,Fp)===null||or.origin.distanceToSquared(Fp)>(t.far-t.near)**2))&&(Up.copy(r).invert(),or.copy(t.ray).applyMatrix4(Up),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,or)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=E;v<b;v+=3){let M=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);s=Xc(this,g,t,n,l,h,u,M,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=Xc(this,o,t,n,l,h,u,_,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=E;v<b;v+=3){let M=v,A=v+1,y=v+2;s=Xc(this,g,t,n,l,h,u,M,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,E=m+1,v=m+2;s=Xc(this,o,t,n,l,h,u,_,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function l_(i,t,e,n,s,r,o,a){let c;if(t.side===Tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Vs,a),c===null)return null;Wc.copy(a),Wc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Wc);return l<e.near||l>e.far?null:{distance:l,point:Wc.clone(),object:i}}function Xc(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,zc),i.getVertexPosition(c,kc),i.getVertexPosition(l,Gc);let h=l_(i,t,e,n,zc,kc,Gc,Bp);if(h){let u=new L;ps.getBarycoord(Bp,zc,kc,Gc,u),s&&(h.uv=ps.getInterpolatedAttribute(s,a,c,l,u,new ut)),r&&(h.uv1=ps.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=ps.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};ps.getNormal(zc,kc,Gc,d.normal),h.face=d,h.barycoord=u}return h}var hr=class extends qn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=vn,h=vn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=class extends Kt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},no=new Me,Op=new Me,qc=[],Hp=new Ki,h_=new Me,ra=new $,oa=new ji,Pn=class extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,no),Hp.copy(t.boundingBox).applyMatrix4(no),this.boundingBox.union(Hp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,no),oa.copy(t.boundingSphere).applyMatrix4(no),this.boundingSphere.union(oa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),t.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,no),Op.multiplyMatrices(n,no),ra.matrixWorld=Op,ra.raycast(t,qc);for(let o=0,a=qc.length;o<a;o++){let c=qc[o];c.instanceId=r,c.object=this,e.push(c)}qc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(s*this.count),s,this.count,wo,Si));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new ji,u_=new ut(.5,.5),Yc=new L,go=class{constructor(t=new Li,e=new Li,n=new Li,s=new Li,r=new Li,o=new Li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],E=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,f-h,g-p,b-_).normalize(),s[1].setComponents(l+o,f+h,g+p,b+_).normalize(),s[2].setComponents(l+a,f+u,g+x,b+E).normalize(),s[3].setComponents(l-a,f-u,g-x,b-E).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,g-m,b-v).normalize();else if(s[4].setComponents(l-c,f-d,g-m,b-v).normalize(),e===Di)s[5].setComponents(l+c,f+d,g+m,b+v).normalize();else if(e===lo)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);let e=u_.distanceTo(t.center);return ar.radius=.7071067811865476+e,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Yc.x=s.normal.x>0?t.max.x:t.min.x,Yc.y=s.normal.y>0?t.max.y:t.min.y,Yc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xo=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xl=new L,_l=new L,zp=new Me,aa=new mo,Zc=new ji,ed=new L,kp=new L,yl=class extends En{constructor(t=new ue,e=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xl.fromBufferAttribute(e,s-1),_l.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xl.distanceTo(_l);t.setAttribute("lineDistance",new fe(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zc.copy(n.boundingSphere),Zc.applyMatrix4(s),Zc.radius+=r,t.ray.intersectsSphere(Zc)===!1)return;zp.copy(s).invert(),aa.copy(t.ray).applyMatrix4(zp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){let g=h.getX(x),_=h.getX(x+1),E=Jc(this,t,aa,c,g,_,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=Jc(this,t,aa,c,x,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){let g=Jc(this,t,aa,c,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Jc(this,t,aa,c,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jc(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(xl.fromBufferAttribute(a,s),_l.fromBufferAttribute(a,r),e.distanceSqToSegment(xl,_l,ed,kp)>n)return;ed.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ed);if(!(l<t.near||l>t.far))return{distance:l,point:kp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Gp=new L,Vp=new L,ba=class extends yl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Gp.fromBufferAttribute(e,s),Vp.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gp.distanceTo(Vp);t.setAttribute("lineDistance",new fe(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var li=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wp=new Me,ud=new mo,$c=new ji,Kc=new L,bi=class extends En{constructor(t=new ue,e=new li){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$c.copy(n.boundingSphere),$c.applyMatrix4(s),$c.radius+=r,t.ray.intersectsSphere($c)===!1)return;Wp.copy(s).invert(),ud.copy(t.ray).applyMatrix4(Wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=l.getX(p);Kc.fromBufferAttribute(u,m),Xp(Kc,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Kc.fromBufferAttribute(u,p),Xp(Kc,p,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xp(i,t,e,n,s,r,o){let a=ud.distanceSqToPoint(i);if(a<e){let c=new L;ud.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Sa=class extends qn{constructor(t=[],e=Ws,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fi=class extends qn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bs=class extends qn{constructor(t,e,n=Hi,s,r,o,a=vn,c=vn,l,h=Ji,u=1){if(h!==Ji&&h!==qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},vl=class extends Bs{constructor(t,e=Hi,n=Ws,s,r,o=vn,a=vn,c,l=Ji){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ea=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},In=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function p(x,m,g,_,E,v,b,M,A,y,T){let R=v/A,P=b/y,N=v/2,D=b/2,C=M/2,U=A+1,k=y+1,W=0,tt=0,O=new L;for(let X=0;X<k;X++){let J=X*P-D;for(let mt=0;mt<U;mt++){let wt=mt*R-N;O[x]=wt*_,O[m]=J*E,O[g]=C,l.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[g]=M>0?1:-1,h.push(O.x,O.y,O.z),u.push(mt/A),u.push(1-X/y),W+=1}}for(let X=0;X<y;X++)for(let J=0;J<A;J++){let mt=d+J+U*X,wt=d+J+U*(X+1),ae=d+(J+1)+U*(X+1),se=d+(J+1)+U*X;c.push(mt,wt,se),c.push(wt,ae,se),tt+=6}a.addGroup(f,tt,T),f+=tt,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hi=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Le=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function _(){let v=new L,b=new L,M=0,A=(e-t)/n;for(let y=0;y<=r;y++){let T=[],R=y/r,P=R*(e-t)+t;for(let N=0;N<=s;N++){let D=N/s,C=D*c+a,U=Math.sin(C),k=Math.cos(C);b.x=P*U,b.y=-R*n+m,b.z=P*k,u.push(b.x,b.y,b.z),v.set(U,A,k).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-R),T.push(p++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let R=x[T][y],P=x[T+1][y],N=x[T+1][y+1],D=x[T][y+1];(t>0||T!==0)&&(h.push(R,P,D),M+=3),(e>0||T!==r-1)&&(h.push(P,N,D),M+=3)}l.addGroup(g,M,0),g+=M}function E(v){let b=p,M=new ut,A=new L,y=0,T=v===!0?t:e,R=v===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let C=N/s*c+a,U=Math.cos(C),k=Math.sin(C);A.x=T*k,A.y=m*R,A.z=T*U,u.push(A.x,A.y,A.z),d.push(0,R,0),M.x=U*.5+.5,M.y=k*.5*R+.5,f.push(M.x,M.y),p++}for(let N=0;N<s;N++){let D=b+N,C=P+N;v===!0?h.push(C,C+1,D):h.push(C+1,C,D),y+=3}l.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oe=class i extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ml=class i extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new L,v=new L,b=new L;for(let M=0;M<e.length;M+=3)f(e[M+0],E),f(e[M+1],v),f(e[M+2],b),c(E,v,b,_)}function c(_,E,v,b){let M=b+1,A=[];for(let y=0;y<=M;y++){A[y]=[];let T=_.clone().lerp(v,y/M),R=E.clone().lerp(v,y/M),P=M-y;for(let N=0;N<=P;N++)N===0&&y===M?A[y][N]=T:A[y][N]=T.clone().lerp(R,N/P)}for(let y=0;y<M;y++)for(let T=0;T<2*(M-y)-1;T++){let R=Math.floor(T/2);T%2===0?(d(A[y][R+1]),d(A[y+1][R]),d(A[y][R])):(d(A[y][R+1]),d(A[y+1][R+1]),d(A[y+1][R]))}}function l(_){let E=new L;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(_),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let _=new L;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let v=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(v,1-b)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let E=o[_+0],v=o[_+2],b=o[_+4],M=Math.max(E,v,b),A=Math.min(E,v,b);M>.9&&A<.1&&(E<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,E){let v=_*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function p(){let _=new L,E=new L,v=new L,b=new L,M=new ut,A=new ut,y=new ut;for(let T=0,R=0;T<r.length;T+=9,R+=6){_.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),M.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),b.copy(_).add(E).add(v).divideScalar(3);let P=m(b);x(M,R+0,_,P),x(A,R+2,E,P),x(y,R+4,v,P)}}function x(_,E,v,b){b<0&&_.x===1&&(o[E]=_.x-1),v.x===0&&v.z===0&&(o[E]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new Me;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_o=class extends ui{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends _o{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kd(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var qp=new L,Yp=new L,nd=new kd,id=new kd,sd=new kd,yo=class extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Yp.subVectors(s[0],s[1]).add(s[0]),l=Yp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),nd.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,x,m),id.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,x,m),sd.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(nd.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),id.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sd.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(nd.calc(c),id.calc(c),sd.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zp(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function d_(i,t){let e=1-i;return e*e*t}function f_(i,t){return 2*(1-i)*i*t}function p_(i,t){return i*i*t}function la(i,t,e,n){return d_(i,t)+f_(i,e)+p_(i,n)}function m_(i,t){let e=1-i;return e*e*e*t}function g_(i,t){let e=1-i;return 3*e*e*i*t}function x_(i,t){return 3*(1-i)*i*i*t}function __(i,t){return i*i*i*t}function ha(i,t,e,n,s){return m_(i,t)+g_(i,e)+x_(i,n)+__(i,s)}var Ta=class extends ui{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ha(t,s.x,r.x,o.x,a.x),ha(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sl=class extends ui{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ha(t,s.x,r.x,o.x,a.x),ha(t,s.y,r.y,o.y,a.y),ha(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends ui{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends ui{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends ui{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(la(t,s.x,r.x,o.x),la(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tl=class extends ui{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(la(t,s.x,r.x,o.x),la(t,s.y,r.y,o.y),la(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zp(a,c.x,l.x,h.x,u.x),Zp(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},dd=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:yo,CubicBezierCurve:Ta,CubicBezierCurve3:Sl,EllipseCurve:_o,LineCurve:wa,LineCurve3:El,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:Tl,SplineCurve:Ra}),wl=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new dd[s.type]().fromJSON(s))}return this}},ur=class extends wl{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wa(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Aa(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ta(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new _o(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Os=class extends ur{constructor(t){super(t),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ur().fromJSON(s))}return this}};function y_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Vm(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=E_(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,u=c;for(let d=e;d<s;d+=e){let f=i[d],p=i[d+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Ca(r,o,e,a,c,l,0),o}function Vm(i,t,e,n,s){let r;if(s===U_(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Jp(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Jp(o/n|0,i[o],i[o+1],r);return r&&vo(r,r.next)&&(Ia(r),r=r.next),r}function dr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vo(e,e.next)||hn(e.prev,e,e.next)===0)){if(Ia(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ca(i,t,e,n,s,r,o){if(!i)return;!o&&r&&C_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?M_(i,n,s,r):v_(i)){t.push(c.i,i.i,l.i),Ia(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=b_(dr(i),t),Ca(i,t,e,n,s,r,2)):o===2&&S_(i,t,e,n,s,r):Ca(dr(i),t,e,n,s,r,1);break}}}function v_(i){let t=i.prev,e=i,n=i.next;if(hn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ca(s,a,r,c,o,l,p.x,p.y)&&hn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function M_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(hn(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),g=fd(f,p,t,e,n),_=fd(x,m,t,e,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=g&&v&&v.z<=_;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&ca(a,h,c,u,l,d,E.x,E.y)&&hn(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ca(a,h,c,u,l,d,v.x,v.y)&&hn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&ca(a,h,c,u,l,d,E.x,E.y)&&hn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ca(a,h,c,u,l,d,v.x,v.y)&&hn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function b_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!vo(n,s)&&Xm(n,e,e.next,s)&&Pa(n,s)&&Pa(s,n)&&(t.push(n.i,e.i,s.i),Ia(e),Ia(e.next),e=i=s),e=e.next}while(e!==i);return dr(e)}function S_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L_(o,a)){let c=qm(o,a);o=dr(o,o.next),c=dr(c,c.next),Ca(o,t,e,n,s,r,0),Ca(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function E_(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Vm(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(I_(l))}s.sort(T_);for(let r=0;r<s.length;r++)e=w_(s[r],e);return e}function T_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function w_(i,t){let e=A_(i,t);if(!e)return t;let n=qm(e,i);return dr(n,n.next),dr(e,e.next)}function A_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(vo(i,e))return e;do{if(vo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Wm(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Pa(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&R_(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function R_(i,t){return hn(i.prev,i,t.prev)<0&&hn(t.next,i,i.next)<0}function C_(i,t,e,n){let s=i;do s.z===0&&(s.z=fd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,P_(s)}function P_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function fd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function I_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wm(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ca(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Wm(i,t,e,n,s,r,o,a)}function L_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!D_(i,t)&&(Pa(i,t)&&Pa(t,i)&&N_(i,t)&&(hn(i.prev,i,t.prev)||hn(i,t.prev,t))||vo(i,t)&&hn(i.prev,i,i.next)>0&&hn(t.prev,t,t.next)>0)}function hn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vo(i,t){return i.x===t.x&&i.y===t.y}function Xm(i,t,e,n){let s=Qc(hn(i,t,e)),r=Qc(hn(i,t,n)),o=Qc(hn(e,n,i)),a=Qc(hn(e,n,t));return!!(s!==r&&o!==a||s===0&&jc(i,e,t)||r===0&&jc(i,n,t)||o===0&&jc(e,i,n)||a===0&&jc(e,t,n))}function jc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qc(i){return i>0?1:i<0?-1:0}function D_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pa(i,t){return hn(i.prev,i,i.next)<0?hn(i,t,i.next)>=0&&hn(i,i.prev,t)>=0:hn(i,t,i.prev)<0||hn(i,i.next,t)<0}function N_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qm(i,t){let e=pd(i.i,i.x,i.y),n=pd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jp(i,t,e,n){let s=pd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function U_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var md=class{static triangulate(t,e,n=2){return y_(t,e,n)}},Zi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$p(t),Kp(n,t);let o=t.length;e.forEach($p);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Kp(n,e[c]);let a=md.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function $p(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mo=class i extends ue{constructor(t=new Os([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:F_,E,v=!1,b,M,A,y;if(g){E=g.getSpacedPoints(h),v=!0,d=!1;let rt=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,rt),M=new L,A=new L,y=new L}d||(m=0,f=0,p=0,x=0);let T=a.extractPoints(l),R=T.shape,P=T.holes;if(!Zi.isClockWise(R)){R=R.reverse();for(let rt=0,ht=P.length;rt<ht;rt++){let ft=P[rt];Zi.isClockWise(ft)&&(P[rt]=ft.reverse())}}function D(rt){let ft=10000000000000001e-36,dt=rt[0];for(let xt=1;xt<=rt.length;xt++){let Nt=xt%rt.length,Gt=rt[Nt],$t=Gt.x-dt.x,ne=Gt.y-dt.y,B=$t*$t+ne*ne,Ae=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(dt.x),Math.abs(dt.y)),ge=ft*Ae*Ae;if(B<=ge){rt.splice(Nt,1),xt--;continue}dt=Gt}}D(R),P.forEach(D);let C=P.length,U=R;for(let rt=0;rt<C;rt++){let ht=P[rt];R=R.concat(ht)}function k(rt,ht,ft){return ht||ee("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ht,ft)}let W=R.length;function tt(rt,ht,ft){let dt,xt,Nt,Gt=rt.x-ht.x,$t=rt.y-ht.y,ne=ft.x-rt.x,B=ft.y-rt.y,Ae=Gt*Gt+$t*$t,ge=Gt*B-$t*ne;if(Math.abs(ge)>Number.EPSILON){let I=Math.sqrt(Ae),S=Math.sqrt(ne*ne+B*B),V=ht.x-$t/I,q=ht.y+Gt/I,et=ft.x-B/S,gt=ft.y+ne/S,yt=((et-V)*B-(gt-q)*ne)/(Gt*B-$t*ne);dt=V+Gt*yt-rt.x,xt=q+$t*yt-rt.y;let it=dt*dt+xt*xt;if(it<=2)return new ut(dt,xt);Nt=Math.sqrt(it/2)}else{let I=!1;Gt>Number.EPSILON?ne>Number.EPSILON&&(I=!0):Gt<-Number.EPSILON?ne<-Number.EPSILON&&(I=!0):Math.sign($t)===Math.sign(B)&&(I=!0),I?(dt=-$t,xt=Gt,Nt=Math.sqrt(Ae)):(dt=Gt,xt=$t,Nt=Math.sqrt(Ae/2))}return new ut(dt/Nt,xt/Nt)}let O=[];for(let rt=0,ht=U.length,ft=ht-1,dt=rt+1;rt<ht;rt++,ft++,dt++)ft===ht&&(ft=0),dt===ht&&(dt=0),O[rt]=tt(U[rt],U[ft],U[dt]);let X=[],J,mt=O.concat();for(let rt=0,ht=C;rt<ht;rt++){let ft=P[rt];J=[];for(let dt=0,xt=ft.length,Nt=xt-1,Gt=dt+1;dt<xt;dt++,Nt++,Gt++)Nt===xt&&(Nt=0),Gt===xt&&(Gt=0),J[dt]=tt(ft[dt],ft[Nt],ft[Gt]);X.push(J),mt=mt.concat(J)}let wt;if(m===0)wt=Zi.triangulateShape(U,P);else{let rt=[],ht=[];for(let ft=0;ft<m;ft++){let dt=ft/m,xt=f*Math.cos(dt*Math.PI/2),Nt=p*Math.sin(dt*Math.PI/2)+x;for(let Gt=0,$t=U.length;Gt<$t;Gt++){let ne=k(U[Gt],O[Gt],Nt);bt(ne.x,ne.y,-xt),dt===0&&rt.push(ne)}for(let Gt=0,$t=C;Gt<$t;Gt++){let ne=P[Gt];J=X[Gt];let B=[];for(let Ae=0,ge=ne.length;Ae<ge;Ae++){let I=k(ne[Ae],J[Ae],Nt);bt(I.x,I.y,-xt),dt===0&&B.push(I)}dt===0&&ht.push(B)}}wt=Zi.triangulateShape(rt,ht)}let ae=wt.length,se=p+x;for(let rt=0;rt<W;rt++){let ht=d?k(R[rt],mt[rt],se):R[rt];v?(A.copy(b.normals[0]).multiplyScalar(ht.x),M.copy(b.binormals[0]).multiplyScalar(ht.y),y.copy(E[0]).add(A).add(M),bt(y.x,y.y,y.z)):bt(ht.x,ht.y,0)}for(let rt=1;rt<=h;rt++)for(let ht=0;ht<W;ht++){let ft=d?k(R[ht],mt[ht],se):R[ht];v?(A.copy(b.normals[rt]).multiplyScalar(ft.x),M.copy(b.binormals[rt]).multiplyScalar(ft.y),y.copy(E[rt]).add(A).add(M),bt(y.x,y.y,y.z)):bt(ft.x,ft.y,u/h*rt)}for(let rt=m-1;rt>=0;rt--){let ht=rt/m,ft=f*Math.cos(ht*Math.PI/2),dt=p*Math.sin(ht*Math.PI/2)+x;for(let xt=0,Nt=U.length;xt<Nt;xt++){let Gt=k(U[xt],O[xt],dt);bt(Gt.x,Gt.y,u+ft)}for(let xt=0,Nt=P.length;xt<Nt;xt++){let Gt=P[xt];J=X[xt];for(let $t=0,ne=Gt.length;$t<ne;$t++){let B=k(Gt[$t],J[$t],dt);v?bt(B.x,B.y+E[h-1].y,E[h-1].x+ft):bt(B.x,B.y,u+ft)}}}Yt(),nt();function Yt(){let rt=s.length/3;if(d){let ht=0,ft=W*ht;for(let dt=0;dt<ae;dt++){let xt=wt[dt];Ot(xt[2]+ft,xt[1]+ft,xt[0]+ft)}ht=h+m*2,ft=W*ht;for(let dt=0;dt<ae;dt++){let xt=wt[dt];Ot(xt[0]+ft,xt[1]+ft,xt[2]+ft)}}else{for(let ht=0;ht<ae;ht++){let ft=wt[ht];Ot(ft[2],ft[1],ft[0])}for(let ht=0;ht<ae;ht++){let ft=wt[ht];Ot(ft[0]+W*h,ft[1]+W*h,ft[2]+W*h)}}n.addGroup(rt,s.length/3-rt,0)}function nt(){let rt=s.length/3,ht=0;ot(U,ht),ht+=U.length;for(let ft=0,dt=P.length;ft<dt;ft++){let xt=P[ft];ot(xt,ht),ht+=xt.length}n.addGroup(rt,s.length/3-rt,1)}function ot(rt,ht){let ft=rt.length;for(;--ft>=0;){let dt=ft,xt=ft-1;xt<0&&(xt=rt.length-1);for(let Nt=0,Gt=h+m*2;Nt<Gt;Nt++){let $t=W*Nt,ne=W*(Nt+1),B=ht+dt+$t,Ae=ht+xt+$t,ge=ht+xt+ne,I=ht+dt+ne;Rt(B,Ae,ge,I)}}}function bt(rt,ht,ft){c.push(rt),c.push(ht),c.push(ft)}function Ot(rt,ht,ft){Jt(rt),Jt(ht),Jt(ft);let dt=s.length/3,xt=_.generateTopUV(n,s,dt-3,dt-2,dt-1);De(xt[0]),De(xt[1]),De(xt[2])}function Rt(rt,ht,ft,dt){Jt(rt),Jt(ht),Jt(dt),Jt(ht),Jt(ft),Jt(dt);let xt=s.length/3,Nt=_.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);De(Nt[0]),De(Nt[1]),De(Nt[3]),De(Nt[1]),De(Nt[2]),De(Nt[3])}function Jt(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function De(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return B_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new dd[s.type]().fromJSON(s)),new i(n,t.options)}},F_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-u),new ut(d,1-p),new ut(x,1-g)]:[new ut(a,1-c),new ut(h,1-u),new ut(f,1-p),new ut(m,1-g)]}};function B_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class i extends Ml{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var an=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*d-o;for(let E=0;E<l;E++){let v=E*u-r;p.push(v,-_,0),x.push(0,0,1),m.push(E/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let E=_+l*g,v=_+l*(g+1),b=_+1+l*(g+1),M=_+1+l*g;f.push(E,v,M),f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fr=class i extends ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new L,p=new ut;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let g=0;g<n;g++){let _=g+m,E=_,v=_+n+1,b=_+n+2,M=_+1;a.push(E,v,M),a.push(v,b,M)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},La=class i extends ue{constructor(t=new Os([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let _=p[m];Zi.isClockWise(_)===!0&&(p[m]=_.reverse())}let x=Zi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){let _=x[m],E=_[0]+u,v=_[1]+u,b=_[2]+u;n.push(E,v,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return O_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function O_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pe=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],E=g/n,v=o+E*a,b=t*Math.cos(v),M=Math.sqrt(t*t-b*b),A=0;g===0&&o===0?A=.5/e:g===n&&c===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=s+T*r;u.x=-M*Math.cos(R),u.y=b,u.z=M*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+A,1-E),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let E=h[g][_+1],v=h[g][_],b=h[g+1][_],M=h[g+1][_+1];(g!==0||o>0)&&f.push(E,v,M),(g!==n-1||c<Math.PI)&&f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new L,f=new L,p=new L;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let _=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,E=(s+1)*(x-1)+m,v=(s+1)*x+m;c.push(g,_,v),c.push(_,E,v)}this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function gr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jp(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Gn(i){let t={};for(let e=0;e<i.length;e++){let n=gr(i[e]);for(let s in n)t[s]=n[s]}return t}function jp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function H_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var Ym={clone:gr,merge:Gn},z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=k_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=H_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Al=class extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var _e=class extends Mi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Da=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rl=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cl=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function io(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function rd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pl=class extends Hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cd,endingEnd:cd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ld:r=t,a=2*e-n;break;case hd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ld:o=t,c=2*n-e;break;case hd:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,E=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[l+b]+E*o[c+b]+v*o[u+b];return r}},Il=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ll=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dl=class extends Hs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[l+p],m=o[c+p],g=f*d+p*2,_=u[g],E=u[g+1],v=t*d+p*2,b=h[v],M=h[v+1],A=V_(n,e,_,b,s);r[p]=Zm(A,x,E,M,m)}return r}};function Zm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function G_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function V_(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Zm(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=G_(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var di=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),rd(t.settings)&&(n.settings={inTangents:io(t.settings.inTangents,Array),outTangents:io(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Dl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ua:e=this.InterpolantFactoryMethodDiscrete;break;case dl:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break;case ad:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return dl;case this.InterpolantFactoryMethodSmooth:return nl;case this.InterpolantFactoryMethodBezier:return ad}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;rd(this.settings)&&(Qp(this.settings.inTangents,t),Qp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ee("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ee("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Xx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ee("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===nl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,rd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=dl;var zs=class extends di{constructor(t,e,n){super(t,e,n)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=ua;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Nl.prototype.ValueTypeName="color";var Ul=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Ul.prototype.ValueTypeName="number";var Fl=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Na=class extends di{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends di{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=ua;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Bl.prototype.ValueTypeName="vector";var Ol=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jm=new Ol,Hl=class{constructor(t){this.manager=t!==void 0?t:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=class extends En{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ua=class extends bo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},od=new Me,tm=new L,em=new L,Fa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tm.setFromMatrixPosition(t.matrixWorld),e.position.copy(tm),em.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(em),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){od.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(od,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===lo||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(od)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},tl=new L,el=new fn,Xi=new L,Ba=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tl,el,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,el,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(tl,el,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,el,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new L,nm=new ut,im=new ut,gn=class extends Ba{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Du*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(Du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z)}getViewSize(t,e){return this.getViewBounds(t,nm,im),e.subVectors(im,nm)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Du*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var gd=class extends Fa{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Oa=class extends bo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gs=class extends Ba{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xd=class extends Fa{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new xd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var za=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var so=-90,ro=1,zl=class extends En{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(so,ro,t,e);s.layers=this.layers,this.add(s);let r=new gn(so,ro,t,e);r.layers=this.layers,this.add(r);let o=new gn(so,ro,t,e);o.layers=this.layers,this.add(o);let a=new gn(so,ro,t,e);a.layers=this.layers,this.add(a);let c=new gn(so,ro,t,e);c.layers=this.layers,this.add(c);let l=new gn(so,ro,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},kl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Vd="\\[\\]\\.:\\/",W_=new RegExp("["+Vd+"]","g"),Wd="[^"+Vd+"]",X_="[^"+Vd.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",Wd),Y_=/(WCOD+)?/.source.replace("WCOD",X_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wd),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wd),$_=new RegExp("^"+q_+Y_+Z_+J_+"$"),K_=["material","materials","bones","map"],_d=class{constructor(t,e,n){let s=n||en.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},en=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(t){let e=$_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=_d;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rE=new Float32Array(1);var $d=class $d{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};$d.prototype.isMatrix2=!0;var yd=$d;function Xd(i,t,e,n){let s=j_(n);switch(e){case Bd:return i*t;case wo:return i*t/s.components*s.byteLength;case $l:return i*t/s.components*s.byteLength;case Ys:return i*t*2/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case Od:return i*t*3/s.components*s.byteLength;case Ei:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case th:case nh:return Math.max(i,16)*Math.max(t,8)/4;case Ql:case eh:return Math.max(i,8)*Math.max(t,8)/2;case ih:case sh:case oh:case ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rh:case Za:case ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ph:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sh:case Eh:case Th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wh:case Ah:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ja:case Rh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j_(i){switch(i){case ei:case Dd:return{byteLength:1,components:1};case Eo:case Nd:case fi:return{byteLength:2,components:1};case Zl:case Jl:return{byteLength:2,components:4};case Hi:case Yl:case Si:return{byteLength:4,components:1};case Ud:case Fd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function x0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function iy(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ye={alphahash_fragment:sy,alphahash_pars_fragment:ry,alphamap_fragment:oy,alphamap_pars_fragment:ay,alphatest_fragment:cy,alphatest_pars_fragment:ly,aomap_fragment:hy,aomap_pars_fragment:uy,batching_pars_vertex:dy,batching_vertex:fy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:xy,bumpmap_pars_fragment:_y,clipping_planes_fragment:yy,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:My,clipping_planes_vertex:by,color_fragment:Sy,color_pars_fragment:Ey,color_pars_vertex:Ty,color_vertex:wy,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Py,displacementmap_vertex:Iy,emissivemap_fragment:Ly,emissivemap_pars_fragment:Dy,colorspace_fragment:Ny,colorspace_pars_fragment:Uy,envmap_fragment:Fy,envmap_common_pars_fragment:By,envmap_pars_fragment:Oy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:$y,envmap_vertex:zy,fog_vertex:ky,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:Zy,lights_pars_begin:Jy,lights_toon_fragment:Ky,lights_toon_pars_fragment:jy,lights_phong_fragment:Qy,lights_phong_pars_fragment:tv,lights_physical_fragment:ev,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,lightprobes_pars_fragment:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:hv,map_fragment:uv,map_pars_fragment:dv,map_particle_fragment:fv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:xv,morphcolor_vertex:_v,morphnormal_vertex:yv,morphtarget_pars_vertex:vv,morphtarget_vertex:Mv,normal_fragment_begin:bv,normal_fragment_maps:Sv,normal_pars_fragment:Ev,normal_pars_vertex:Tv,normal_vertex:wv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Iv,opaque_fragment:Lv,packing:Dv,premultiplied_alpha_fragment:Nv,project_vertex:Uv,dithering_fragment:Fv,dithering_pars_fragment:Bv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:kv,shadowmap_vertex:Gv,shadowmask_pars_fragment:Vv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:Zv,specularmap_pars_fragment:Jv,tonemapping_fragment:$v,tonemapping_pars_fragment:Kv,transmission_fragment:jv,transmission_pars_fragment:Qv,uv_pars_fragment:t1,uv_pars_vertex:e1,uv_vertex:n1,worldpos_vertex:i1,background_vert:s1,background_frag:r1,backgroundCube_vert:o1,backgroundCube_frag:a1,cube_vert:c1,cube_frag:l1,depth_vert:h1,depth_frag:u1,distance_vert:d1,distance_frag:f1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:x1,meshbasic_vert:_1,meshbasic_frag:y1,meshlambert_vert:v1,meshlambert_frag:M1,meshmatcap_vert:b1,meshmatcap_frag:S1,meshnormal_vert:E1,meshnormal_frag:T1,meshphong_vert:w1,meshphong_frag:A1,meshphysical_vert:R1,meshphysical_frag:C1,meshtoon_vert:P1,meshtoon_frag:I1,points_vert:L1,points_frag:D1,shadow_vert:N1,shadow_frag:U1,sprite_vert:F1,sprite_frag:B1},Ct={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ns={basic:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Gn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Gn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Gn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Gn([Ct.points,Ct.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Gn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Gn([Ct.common,Ct.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Gn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Gn([Ct.sprite,Ct.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Gn([Ct.common,Ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Gn([Ct.lights,Ct.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};ns.physical={uniforms:Gn([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Ih={r:0,b:0,g:0},O1=new Me,_0=new le;_0.set(-1,0,0,0,1,0,0,0,1);function H1(i,t,e,n,s,r){let o=new pt(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let v=_.backgroundBlurriness>0;E=t.get(E,v)}return E}function p(_){let E=!1,v=f(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,E){let v=f(E);v&&(v.isCubeTexture||v.mapping===Ga)?(l===void 0&&(l=new $(new In(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:gr(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_0),l.material.toneMapped=Ce.getTransfer(v.colorSpace)!==ke,(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $(new an(2,2),new nn({name:"BackgroundMaterial",uniforms:gr(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ce.getTransfer(v.colorSpace)!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(Ih,Gd(i)),e.buffers.color.setClear(Ih.r,Ih.g,Ih.b,E,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function z1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(P,N,D,C,U){let k=!1,W=u(P,C,D,N);r!==W&&(r=W,l(r.object)),k=f(P,C,D,U),k&&p(P,C,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(P,N,D,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,N,D,C){let U=C.wireframe===!0,k=n[N.id];k===void 0&&(k={},n[N.id]=k);let W=P.isInstancedMesh===!0?P.id:0,tt=k[W];tt===void 0&&(tt={},k[W]=tt);let O=tt[D.id];O===void 0&&(O={},tt[D.id]=O);let X=O[U];return X===void 0&&(X=d(c()),O[U]=X),X}function d(P){let N=[],D=[],C=[];for(let U=0;U<e;U++)N[U]=0,D[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:C,object:P,attributes:{},index:null}}function f(P,N,D,C){let U=r.attributes,k=N.attributes,W=0,tt=D.getAttributes();for(let O in tt)if(tt[O].location>=0){let J=U[O],mt=k[O];if(mt===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),J===void 0||J.attribute!==mt||mt&&J.data!==mt.data)return!0;W++}return r.attributesNum!==W||r.index!==C}function p(P,N,D,C){let U={},k=N.attributes,W=0,tt=D.getAttributes();for(let O in tt)if(tt[O].location>=0){let J=k[O];J===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let mt={};mt.attribute=J,J&&J.data&&(mt.data=J.data),U[O]=mt,W++}r.attributes=U,r.attributesNum=W,r.index=C}function x(){let P=r.newAttributes;for(let N=0,D=P.length;N<D;N++)P[N]=0}function m(P){g(P,0)}function g(P,N){let D=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;D[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),U[P]!==N&&(i.vertexAttribDivisor(P,N),U[P]=N)}function _(){let P=r.newAttributes,N=r.enabledAttributes;for(let D=0,C=N.length;D<C;D++)N[D]!==P[D]&&(i.disableVertexAttribArray(D),N[D]=0)}function E(P,N,D,C,U,k,W){W===!0?i.vertexAttribIPointer(P,N,D,U,k):i.vertexAttribPointer(P,N,D,C,U,k)}function v(P,N,D,C){x();let U=C.attributes,k=D.getAttributes(),W=N.defaultAttributeValues;for(let tt in k){let O=k[tt];if(O.location>=0){let X=U[tt];if(X===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let J=X.normalized,mt=X.itemSize,wt=t.get(X);if(wt===void 0)continue;let ae=wt.buffer,se=wt.type,Yt=wt.bytesPerElement,nt=se===i.INT||se===i.UNSIGNED_INT||X.gpuType===Yl;if(X.isInterleavedBufferAttribute){let ot=X.data,bt=ot.stride,Ot=X.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<O.locationSize;Rt++)g(O.location+Rt,ot.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Rt=0;Rt<O.locationSize;Rt++)m(O.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Rt=0;Rt<O.locationSize;Rt++)E(O.location+Rt,mt/O.locationSize,se,J,bt*Yt,(Ot+mt/O.locationSize*Rt)*Yt,nt)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<O.locationSize;ot++)g(O.location+ot,X.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ot=0;ot<O.locationSize;ot++)m(O.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ot=0;ot<O.locationSize;ot++)E(O.location+ot,mt/O.locationSize,se,J,mt*Yt,mt/O.locationSize*ot*Yt,nt)}}else if(W!==void 0){let J=W[tt];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(O.location,J);break;case 3:i.vertexAttrib3fv(O.location,J);break;case 4:i.vertexAttrib4fv(O.location,J);break;default:i.vertexAttrib1fv(O.location,J)}}}}_()}function b(){T();for(let P in n){let N=n[P];for(let D in N){let C=N[D];for(let U in C){let k=C[U];for(let W in k)h(k[W].object),delete k[W];delete C[U]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let D in N){let C=N[D];for(let U in C){let k=C[U];for(let W in k)h(k[W].object),delete k[W];delete C[U]}}delete n[P.id]}function A(P){for(let N in n){let D=n[N];for(let C in D){let U=D[C];if(U[P.id]===void 0)continue;let k=U[P.id];for(let W in k)h(k[W].object),delete k[W];delete U[P.id]}}}function y(P){for(let N in n){let D=n[N],C=P.isInstancedMesh===!0?P.id:0,U=D[C];if(U!==void 0){for(let k in U){let W=U[k];for(let tt in W)h(W[tt].object),delete W[tt];delete U[k]}delete D[C],Object.keys(D).length===0&&delete n[N]}}}function T(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function k1(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function G1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ei&&A!==Si&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(jt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:v,maxSamples:b,samples:M}}function V1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Li,a=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,E=_*4,v=g.clippingState||null;c.value=v,v=h(p,d,E,f);for(let b=0;b!==E;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,v=f;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ro=4,W1=6,X1=20,q1=256,Ka=new Gs,$m=new pt,Kd=null,jd=0,Qd=0,tf=!1,Y1=new L,xr=new L,Dh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Y1}=r;Kd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kd,jd,Qd),this._renderer.xr.enabled=tf,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:fi,format:Ei,colorSpace:da,depthBuffer:!1},s=Km(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z1(r)),this._blurMaterial=$1(r,t,e),this._ggxMaterial=J1(r,t,e)}return s}_compileMaterial(t){let e=new $(new ue,t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,s,r){let c=new gn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($m),u.toneMapping=Oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $(new In,new Pe({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,g=!0):(m.color.copy($m),g=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Ao(s,v*b,E>2?b:0,b,b),u.setRenderTarget(s),g&&u.render(x,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ws||t.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ao(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ro?n-p+Ro:0),g=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,Ao(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Ka),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Ao(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(a,Ka)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ro?s-this._lodMax+Ro:0),d=4*(this._cubeSize-h);Ao(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(c,Ka)}};function Z1(i){let t=[],e=[],n=i,s=i-Ro+1+W1;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let g=0;g<u;g++){let _=g%3*2/3-1,E=g>2?0:-1,v=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];p.set(v,f*d*g);for(let b=0;b<d;b++){let M=h[b*2]*2-1,A=h[b*2+1]*2-1;g===0?xr.set(1,A,M):g===1?xr.set(-M,1,-A):g===2?xr.set(-M,A,1):g===3?xr.set(-1,A,-M):g===4?xr.set(-M,-1,A):xr.set(M,A,-1),xr.toArray(x,(g*d+b)*f)}}let m=new ue;m.setAttribute("position",new Kt(p,f)),m.setAttribute("outputDirection",new Kt(x,f)),e.push(new $(m,null)),n>Ro&&n--}return{lodMeshes:e,sizeLods:t}}function Km(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function J1(i,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function $1(i,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:X1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function jm(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Qm(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Fh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nh=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new In(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ts});r.uniforms.tEquirect.value=e;let o=new $(s,r),a=e.minFilter;return e.minFilter===Xs&&(e.minFilter=Dn),new zl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function K1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Wl||f===Xl)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Nh(p.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Wl||f===Xl,x=f===Ws||f===mr;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Dh(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Dh(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Wl?d.mapping=Ws:f===Xl&&(d.mapping=mr),d}function c(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function j1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cr("WebGLRenderer: "+n+" extension not supported."),s}}}function Q1(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let E=0,v=_.length;E<v;E+=3){let b=_[E+0],M=_[E+1],A=_[E+2];d.push(b,M,M,A,A,b)}}else{let _=p.array;x=p.version;for(let E=0,v=_.length/3-1;E<v;E+=3){let b=E+0,M=E+1,A=E+2;d.push(b,M,M,A,A,b)}}let m=new(p.count>=65535?va:ya)(d,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tM(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function eM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nM(i,t,e){let n=new WeakMap,s=new on;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let v=a.attributes.position.count*E,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*b*4*u),A=new ga(M,v,b,u);A.type=Si,A.needsUpdate=!0;let y=E*4;for(let R=0;R<u;R++){let P=m[R],N=g[R],D=_[R],C=v*b*4*R;for(let U=0;U<P.count;U++){let k=U*y;f===!0&&(s.fromBufferAttribute(P,U),M[C+k+0]=s.x,M[C+k+1]=s.y,M[C+k+2]=s.z,M[C+k+3]=0),p===!0&&(s.fromBufferAttribute(N,U),M[C+k+4]=s.x,M[C+k+5]=s.y,M[C+k+6]=s.z,M[C+k+7]=0),x===!0&&(s.fromBufferAttribute(D,U),M[C+k+8]=s.x,M[C+k+9]=s.y,M[C+k+10]=s.z,M[C+k+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ut(v,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function iM(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var sM={[Td]:"LINEAR_TONE_MAPPING",[wd]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[Rd]:"ACES_FILMIC_TONE_MAPPING",[Pd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Cd]:"CUSTOM_TONE_MAPPING"};function rM(i,t,e,n,s,r){let o=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ue;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Al({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $(l,h),d=new Gs(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,_=[],E=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),c!==null&&c.setSize(v,b);for(let M=0;M<_.length;M++){let A=_[M];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){_=v,E=_.length>0&&_[0].isRenderPass===!0;let b=o.width,M=o.height;_.length>0&&a===null&&(a=new Nn(b,M,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(b,M,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let y=_[A];y.setSize&&y.setSize(b,M)}},this.begin=function(v,b){if(x||v.toneMapping===Oi&&_.length===0)return!1;if(g=b,b!==null){let M=b.width,A=b.height;(o.width!==M||o.height!==A)&&this.setSize(M,A)}return E===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Oi,!0},this.hasRenderPass=function(){return E},this.end=function(v,b){v.toneMapping=m,x=!0;let M=o,A=a;for(let y=0;y<_.length;y++){let T=_[y];T.enabled!==!1&&(T.render(v,A,M,b),T.needsSwap!==!1&&(M=A,A=A===a?c:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},Ce.getTransfer(f)===ke&&(h.defines.SRGB_TRANSFER="");let y=sM[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var y0=new qn,sf=new Bs(1,1),v0=new ga,M0=new gl,b0=new Sa,t0=[],e0=[],n0=new Float32Array(16),i0=new Float32Array(9),s0=new Float32Array(4);function Po(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=t0[s];if(r===void 0&&(r=new Float32Array(s),t0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function wn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function An(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bh(i,t){let e=e0[t];e===void 0&&(e=new Int32Array(t),e0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function oM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function aM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2fv(this.addr,t),An(e,t)}}function cM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(wn(e,t))return;i.uniform3fv(this.addr,t),An(e,t)}}function lM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4fv(this.addr,t),An(e,t)}}function hM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;s0.set(n),i.uniformMatrix2fv(this.addr,!1,s0),An(e,n)}}function uM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;i0.set(n),i.uniformMatrix3fv(this.addr,!1,i0),An(e,n)}}function dM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;n0.set(n),i.uniformMatrix4fv(this.addr,!1,n0),An(e,n)}}function fM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2iv(this.addr,t),An(e,t)}}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3iv(this.addr,t),An(e,t)}}function gM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4iv(this.addr,t),An(e,t)}}function xM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _M(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2uiv(this.addr,t),An(e,t)}}function yM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3uiv(this.addr,t),An(e,t)}}function vM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4uiv(this.addr,t),An(e,t)}}function MM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sf.compareFunction=e.isReversedDepthBuffer()?Ph:Ch,r=sf):r=y0,e.setTexture2D(t||r,s)}function bM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||M0,s)}function SM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||b0,s)}function EM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||v0,s)}function TM(i){switch(i){case 5126:return oM;case 35664:return aM;case 35665:return cM;case 35666:return lM;case 35674:return hM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return _M;case 36295:return yM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return EM}}function wM(i,t){i.uniform1fv(this.addr,t)}function AM(i,t){let e=Po(t,this.size,2);i.uniform2fv(this.addr,e)}function RM(i,t){let e=Po(t,this.size,3);i.uniform3fv(this.addr,e)}function CM(i,t){let e=Po(t,this.size,4);i.uniform4fv(this.addr,e)}function PM(i,t){let e=Po(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function IM(i,t){let e=Po(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function LM(i,t){let e=Po(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function DM(i,t){i.uniform1iv(this.addr,t)}function NM(i,t){i.uniform2iv(this.addr,t)}function UM(i,t){i.uniform3iv(this.addr,t)}function FM(i,t){i.uniform4iv(this.addr,t)}function BM(i,t){i.uniform1uiv(this.addr,t)}function OM(i,t){i.uniform2uiv(this.addr,t)}function HM(i,t){i.uniform3uiv(this.addr,t)}function zM(i,t){i.uniform4uiv(this.addr,t)}function kM(i,t,e){let n=this.cache,s=t.length,r=Bh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=sf:o=y0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function GM(i,t,e){let n=this.cache,s=t.length,r=Bh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||M0,r[o])}function VM(i,t,e){let n=this.cache,s=t.length,r=Bh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||b0,r[o])}function WM(i,t,e){let n=this.cache,s=t.length,r=Bh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||v0,r[o])}function XM(i){switch(i){case 5126:return wM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return IM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return BM;case 36294:return OM;case 36295:return HM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return WM}}var rf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=TM(e.type)}},of=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=XM(e.type)}},af=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ef=/(\w+)(\])?(\[|\.)?/g;function r0(i,t){i.seq.push(t),i.map[t.id]=t}function qM(i,t,e){let n=i.name,s=n.length;for(ef.lastIndex=0;;){let r=ef.exec(n),o=ef.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){r0(e,l===void 0?new rf(a,i,t):new of(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new af(a),r0(e,u)),e=u}}}var Co=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);qM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function o0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var YM=37297,ZM=0;function JM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var a0=new le;function $M(i){Ce._getMatrix(a0,Ce.workingColorSpace,i);let t=`mat3( ${a0.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case fa:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function c0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+JM(i.getShaderSource(t),a)}else return r}function KM(i,t){let e=$M(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jM={[Td]:"Linear",[wd]:"Reinhard",[Ad]:"Cineon",[Rd]:"ACESFilmic",[Pd]:"AgX",[Id]:"Neutral",[Cd]:"Custom"};function QM(i,t){let e=jM[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lh=new L;function tb(){Ce.getLuminanceCoefficients(Lh);let i=Lh.x.toFixed(4),t=Lh.y.toFixed(4),e=Lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function nb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ib(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qa(i){return i!==""}function l0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(i){return i.replace(sb,ob)}var rb=new Map;function ob(i,t){let e=ye[t];if(e===void 0){let n=rb.get(t);if(n!==void 0)e=ye[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cf(e)}var ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(i){return i.replace(ab,cb)}function cb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function d0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var lb={[ka]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function hb(i){return lb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ub={[Ws]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE_UV"};function db(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ub[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fb={[mr]:"ENVMAP_MODE_REFRACTION"};function pb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mb={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[Tm]:"ENVMAP_BLENDING_MIX",[wm]:"ENVMAP_BLENDING_ADD"};function gb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mb[i.combine]||"ENVMAP_BLENDING_NONE"}function xb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _b(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=hb(e),l=db(e),h=pb(e),u=gb(e),d=xb(e),f=eb(e),p=nb(r),x=s.createProgram(),m,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qa).join(`
`),g.length>0&&(g+=`
`)):(m=[d0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),g=[d0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?ye.tonemapping_pars_fragment:"",e.toneMapping!==Oi?QM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,KM("linearToOutputTexel",e.outputColorSpace),tb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qa).join(`
`)),o=cf(o),o=l0(o,e),o=h0(o,e),a=cf(a),a=l0(a,e),a=h0(a,e),o=u0(o),a=u0(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=_+m+o,v=_+g+a,b=o0(s,s.VERTEX_SHADER,E),M=o0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(b)||"",C=s.getShaderInfoLog(M)||"",U=N.trim(),k=D.trim(),W=C.trim(),tt=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,M);else{let X=c0(s,b,"vertex"),J=c0(s,M,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+X+`
`+J)}else U!==""?jt("WebGLProgram: Program Info Log:",U):(k===""||W==="")&&(O=!1);O&&(P.diagnostics={runnable:tt,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(b),s.deleteShader(M),y=new Co(s,x),T=ib(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,YM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ZM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=M,this}var yb=0,lf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hf(t),e.set(t,n)),n}},hf=class{constructor(t){this.id=yb++,this.code=t,this.usedTimes=0}};function vb(i){return i===Ys||i===Za||i===Ja}function Mb(i,t,e,n,s,r){let o=new xa,a=new lf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,T,R,P,N,D){let C=P.fog,U=N.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,tt=t.get(y.envMap||k,W),O=tt&&tt.mapping===Ga?tt.image.height:null,X=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&jt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=J!==void 0?J.length:0,wt=0;U.morphAttributes.position!==void 0&&(wt=1),U.morphAttributes.normal!==void 0&&(wt=2),U.morphAttributes.color!==void 0&&(wt=3);let ae,se,Yt,nt;if(X){let He=ns[X];ae=He.vertexShader,se=He.fragmentShader}else{ae=y.vertexShader,se=y.fragmentShader;let He=a.getVertexShaderStage(y),Ne=a.getFragmentShaderStage(y);a.update(y,He,Ne),Yt=He.id,nt=Ne.id}let ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ot=N.isInstancedMesh===!0,Rt=N.isBatchedMesh===!0,Jt=!!y.map,De=!!y.matcap,rt=!!tt,ht=!!y.aoMap,ft=!!y.lightMap,dt=!!y.bumpMap&&y.wireframe===!1,xt=!!y.normalMap,Nt=!!y.displacementMap,Gt=!!y.emissiveMap,$t=!!y.metalnessMap,ne=!!y.roughnessMap,B=y.anisotropy>0,Ae=y.clearcoat>0,ge=y.dispersion>0,I=y.retroreflectivity>0,S=y.iridescence>0,V=y.sheen>0,q=y.transmission>0,et=B&&!!y.anisotropyMap,gt=Ae&&!!y.clearcoatMap,yt=Ae&&!!y.clearcoatNormalMap,it=Ae&&!!y.clearcoatRoughnessMap,at=S&&!!y.iridescenceMap,St=S&&!!y.iridescenceThicknessMap,Dt=V&&!!y.sheenColorMap,vt=V&&!!y.sheenRoughnessMap,_t=!!y.specularMap,Ht=!!y.specularColorMap,Zt=!!y.specularIntensityMap,he=q&&!!y.transmissionMap,z=q&&!!y.thicknessMap,Mt=!!y.gradientMap,st=!!y.alphaMap,Et=y.alphaTest>0,It=!!y.alphaHash,lt=!!y.extensions,Vt=Oi;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Bt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:ae,fragmentShader:se,defines:y.defines,customVertexShaderID:Yt,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&N._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&N.instanceColor!==null,instancingMorph:Ot&&N.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:De,envMap:rt,envMapMode:rt&&tt.mapping,envMapCubeUVHeight:O,aoMap:ht,lightMap:ft,bumpMap:dt,normalMap:xt,displacementMap:Nt,emissiveMap:Gt,normalMapObjectSpace:xt&&y.normalMapType===Cm,normalMapTangentSpace:xt&&y.normalMapType===$a,packedNormalMap:xt&&y.normalMapType===$a&&vb(y.normalMap.format),metalnessMap:$t,roughnessMap:ne,anisotropy:B,anisotropyMap:et,clearcoat:Ae,clearcoatMap:gt,clearcoatNormalMap:yt,clearcoatRoughnessMap:it,dispersion:ge,retroreflection:I,iridescence:S,iridescenceMap:at,iridescenceThicknessMap:St,sheen:V,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:_t,specularColorMap:Ht,specularIntensityMap:Zt,transmission:q,transmissionMap:he,thicknessMap:z,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:Et,alphaHash:It,combine:y.combine,mapUv:Jt&&p(y.map.channel),aoMapUv:ht&&p(y.aoMap.channel),lightMapUv:ft&&p(y.lightMap.channel),bumpMapUv:dt&&p(y.bumpMap.channel),normalMapUv:xt&&p(y.normalMap.channel),displacementMapUv:Nt&&p(y.displacementMap.channel),emissiveMapUv:Gt&&p(y.emissiveMap.channel),metalnessMapUv:$t&&p(y.metalnessMap.channel),roughnessMapUv:ne&&p(y.roughnessMap.channel),anisotropyMapUv:et&&p(y.anisotropyMap.channel),clearcoatMapUv:gt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:yt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:St&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(y.sheenRoughnessMap.channel),specularMapUv:_t&&p(y.specularMap.channel),specularColorMapUv:Ht&&p(y.specularColorMap.channel),specularIntensityMapUv:Zt&&p(y.specularIntensityMap.channel),transmissionMapUv:he&&p(y.transmissionMap.channel),thicknessMapUv:z&&p(y.thicknessMap.channel),alphaMapUv:st&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||B),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Jt||st),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:bt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&Ce.getTransfer(y.map.colorSpace)===ke,decodeVideoTextureEmissive:Gt&&y.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(y.emissiveMap.colorSpace)===ke,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===me,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(T,y),_(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){let T=f[y.type],R;if(T){let P=ns[T];R=Ym.clone(P.uniforms)}else R=y.uniforms;return R}function v(y,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new _b(i,T,y,s),l.push(R),h.set(T,R)),R}function b(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:b,releaseShaderCache:M,programs:l,dispose:A}}function bb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function f0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function p0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function c(d,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let E=a(d,f,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function l(d,f,p,x,m,g){let _=a(d,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||Sb),n.length>1&&n.sort(f||f0),s.length>1&&s.sort(f||f0)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Eb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new p0,i.set(n,[o])):s>=r.length?(o=new p0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new pt};break;case"SpotLight":e={position:new L,direction:new L,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function wb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ab=0;function Rb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cb(i){let t=new Tb,e=wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Me,o=new Me;function a(l){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,E=0,v=0,b=0,M=0,A=0,y=0,T=0,R=0;l.sort(Rb);for(let N=0,D=l.length;N<D;N++){let C=l[N],U=C.color,k=C.intensity,W=C.distance,tt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ys?tt=C.shadow.map.texture:tt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],k);R++}else if(C.isSunLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=tt;let mt=X.getViewportCount();for(let wt=0;wt<mt;wt++)n.sunShadowMatrix[x+wt]=X.getMatrix(wt),n.sunShadowCascade[x+wt]=X._cascadeData[wt];x+=mt,p++}n.sun[f]=O,f++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=O,m++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(U).multiplyScalar(k),O.distance=W,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[_]=O;let X=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=X.matrix,C.castShadow){let J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=tt,A++}_++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(U).multiplyScalar(k),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=O,E++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let X=C.shadow,J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=O,g++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(k),O.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[v]=O,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==E||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==y||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=E,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=E,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=y,P.numLightProbes=R,n.version=Ab++)}function c(l,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){let v=l[_];if(v.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function m0(i){let t=new Cb(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Pb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new m0(i),t.set(s,[a])):r>=o.length?(a=new m0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Db=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Nb=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],g0=new Me,ja=new L,nf=new L;function Ub(i,t,e){let n=new go,s=new ut,r=new ut,o=new on,a=new Rl,c=new Cl,l={},h=e.maxTextureSize,u={[Vs]:Tn,[Tn]:Vs,[me]:me},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Ib,fragmentShader:Lb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ue;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let g=this.type;this.render=function(M,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===om&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ka);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ts),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=g!==this.type;D&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=M.length;C<U;C++){let k=M[C],W=k.shadow;if(W===void 0){jt("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let tt=W.getFrameExtents();s.multiply(tt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,W.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=O,W.map===null||D===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===So){if(k.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Nn(s.x,s.y,{format:Ys,type:fi,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new Bs(s.x,s.y,Si),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Ji,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=vn,W.map.depthTexture.magFilter=vn}else k.isPointLight?(W.map=new Nh(s.x),W.map.depthTexture=new vl(s.x,Hi)):(W.map=new Nn(s.x,s.y),W.map.depthTexture=new Bs(s.x,s.y,Hi)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Ji,this.type===ka?(W.map.depthTexture.compareFunction=O?Ph:Ch,W.map.depthTexture.minFilter=Dn,W.map.depthTexture.magFilter=Dn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=vn,W.map.depthTexture.magFilter=vn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let X=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,y);for(let J=0;J<X;J++){let mt=W.getCamera(J);if(k.isPointLight){let wt=W.camera,ae=W.matrix,se=k.distance||wt.far;se!==wt.far&&(wt.far=se,wt.updateProjectionMatrix()),ja.setFromMatrixPosition(k.matrixWorld),wt.position.copy(ja),nf.copy(wt.position),nf.add(Db[J]),wt.up.copy(Nb[J]),wt.lookAt(nf),wt.updateMatrixWorld(),ae.makeTranslation(-ja.x,-ja.y,-ja.z),g0.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(g0,wt.coordinateSystem,wt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,J),i.clear();else{J===0&&(i.setRenderTarget(W.map),i.clear());let wt=W.getViewport(J);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),N.viewport(o)}n=W.getFrustum(J),v(A,y,mt,k,this.type)}W.isPointLightShadow!==!0&&this.type===So&&_(W,y),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,P)};function _(M,A){let y=t.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Nn(s.x,s.y,{format:Ys,type:fi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,y,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,y,f,x,null)}function E(M,A,y,T){let R=null,P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,D=A.uuid,C=l[N];C===void 0&&(C={},l[N]=C);let U=C[D];U===void 0&&(U=R.clone(),C[D]=U,A.addEventListener("dispose",b)),R=U}if(R.visible=A.visible,R.wireframe=A.wireframe,T===So?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=y}return R}function v(M,A,y,T,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===So)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let D=t.update(M),C=M.material;if(Array.isArray(C)){let U=D.groups;for(let k=0,W=U.length;k<W;k++){let tt=U[k],O=C[tt.materialIndex];if(O&&O.visible){let X=E(M,O,T,R);M.onBeforeShadow(i,M,A,y,D,X,tt),i.renderBufferDirect(y,null,D,X,M,tt),M.onAfterShadow(i,M,A,y,D,X,tt)}}}else if(C.visible){let U=E(M,C,T,R);M.onBeforeShadow(i,M,A,y,D,U,null),i.renderBufferDirect(y,null,D,U,M,null),M.onAfterShadow(i,M,A,y,D,U,null)}}let N=M.children;for(let D=0,C=N.length;D<C;D++)v(N[D],A,y,T,R)}function b(M){M.target.removeEventListener("dispose",b);for(let y in l){let T=l[y],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Fb(i,t){function e(){let z=!1,Mt=new on,st=null,Et=new on(0,0,0,0);return{setMask:function(It){st!==It&&!z&&(i.colorMask(It,It,It,It),st=It)},setLocked:function(It){z=It},setClear:function(It,lt,Vt,Bt,He){He===!0&&(It*=Bt,lt*=Bt,Vt*=Bt),Mt.set(It,lt,Vt,Bt),Et.equals(Mt)===!1&&(i.clearColor(It,lt,Vt,Bt),Et.copy(Mt))},reset:function(){z=!1,st=null,Et.set(-1,0,0,0)}}}function n(){let z=!1,Mt=!1,st=null,Et=null,It=null;return{setReversed:function(lt){if(Mt!==lt){let Vt=t.get("EXT_clip_control");lt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Mt=lt;let Bt=It;It=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(lt){lt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(lt){st!==lt&&!z&&(i.depthMask(lt),st=lt)},setFunc:function(lt){if(Mt&&(lt=zm[lt]),Et!==lt){switch(lt){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case ol:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=lt}},setLocked:function(lt){z=lt},setClear:function(lt){It!==lt&&(It=lt,Mt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){z=!1,st=null,Et=null,It=null,Mt=!1}}}function s(){let z=!1,Mt=null,st=null,Et=null,It=null,lt=null,Vt=null,Bt=null,He=null;return{setTest:function(Ne){z||(Ne?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Ne){Mt!==Ne&&!z&&(i.stencilMask(Ne),Mt=Ne)},setFunc:function(Ne,Vn,oi){(st!==Ne||Et!==Vn||It!==oi)&&(i.stencilFunc(Ne,Vn,oi),st=Ne,Et=Vn,It=oi)},setOp:function(Ne,Vn,oi){(lt!==Ne||Vt!==Vn||Bt!==oi)&&(i.stencilOp(Ne,Vn,oi),lt=Ne,Vt=Vn,Bt=oi)},setLocked:function(Ne){z=Ne},setClear:function(Ne){He!==Ne&&(i.clearStencil(Ne),He=Ne)},reset:function(){z=!1,Mt=null,st=null,Et=null,It=null,lt=null,Vt=null,Bt=null,He=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,E=null,v=null,b=null,M=null,A=null,y=new pt(0,0,0),T=0,R=!1,P=null,N=null,D=null,C=null,U=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,tt=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=tt>=1):O.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=tt>=2);let X=null,J={},mt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),ae=new on().fromArray(mt),se=new on().fromArray(wt);function Yt(z,Mt,st,Et){let It=new Uint8Array(4),lt=i.createTexture();i.bindTexture(z,lt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<st;Vt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return lt}let nt={};nt[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(ao),dt(!1),xt(vd),ot(i.CULL_FACE),ht(ts);function ot(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function bt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ot(z,Mt){return d[z]!==Mt?(i.bindFramebuffer(z,Mt),d[z]=Mt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Mt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Rt(z,Mt){let st=p,Et=!1;if(z){st=f.get(Mt),st===void 0&&(st=[],f.set(Mt,st));let It=z.textures;if(st.length!==It.length||st[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Vt=It.length;lt<Vt;lt++)st[lt]=i.COLOR_ATTACHMENT0+lt;st.length=It.length,Et=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Et=!0);Et&&i.drawBuffers(st)}function Jt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let De={[pr]:i.FUNC_ADD,[cm]:i.FUNC_SUBTRACT,[lm]:i.FUNC_REVERSE_SUBTRACT};De[hm]=i.MIN,De[um]=i.MAX;let rt={[dm]:i.ZERO,[fm]:i.ONE,[pm]:i.SRC_COLOR,[Sd]:i.SRC_ALPHA,[vm]:i.SRC_ALPHA_SATURATE,[_m]:i.DST_COLOR,[gm]:i.DST_ALPHA,[mm]:i.ONE_MINUS_SRC_COLOR,[Ed]:i.ONE_MINUS_SRC_ALPHA,[ym]:i.ONE_MINUS_DST_COLOR,[xm]:i.ONE_MINUS_DST_ALPHA,[Mm]:i.CONSTANT_COLOR,[bm]:i.ONE_MINUS_CONSTANT_COLOR,[Sm]:i.CONSTANT_ALPHA,[Em]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(z,Mt,st,Et,It,lt,Vt,Bt,He,Ne){if(z===ts){m===!0&&(bt(i.BLEND),m=!1);return}if(m===!1&&(ot(i.BLEND),m=!0),z!==am){if(z!==g||Ne!==R){if((_!==pr||b!==pr)&&(i.blendEquation(i.FUNC_ADD),_=pr,b=pr),Ne)switch(z){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kn:i.blendFunc(i.ONE,i.ONE);break;case Md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",z);break}else switch(z){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Md:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bd:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",z);break}E=null,v=null,M=null,A=null,y.set(0,0,0),T=0,g=z,R=Ne}return}It=It||Mt,lt=lt||st,Vt=Vt||Et,(Mt!==_||It!==b)&&(i.blendEquationSeparate(De[Mt],De[It]),_=Mt,b=It),(st!==E||Et!==v||lt!==M||Vt!==A)&&(i.blendFuncSeparate(rt[st],rt[Et],rt[lt],rt[Vt]),E=st,v=Et,M=lt,A=Vt),(Bt.equals(y)===!1||He!==T)&&(i.blendColor(Bt.r,Bt.g,Bt.b,He),y.copy(Bt),T=He),g=z,R=!1}function ft(z,Mt){z.side===me?bt(i.CULL_FACE):ot(i.CULL_FACE);let st=z.side===Tn;Mt&&(st=!st),dt(st),z.blending===Bi&&z.transparent===!1?ht(ts):ht(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Et=z.stencilWrite;a.setTest(Et),Et&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function xt(z){z!==sm?(ot(i.CULL_FACE),z!==N&&(z===vd?i.cullFace(i.BACK):z===rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),N=z}function Nt(z){z!==D&&(W&&i.lineWidth(z),D=z)}function Gt(z,Mt,st){z?(ot(i.POLYGON_OFFSET_FILL),(C!==Mt||U!==st)&&(C=Mt,U=st,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,st))):bt(i.POLYGON_OFFSET_FILL)}function $t(z){z?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ne(z){z===void 0&&(z=i.TEXTURE0+k-1),X!==z&&(i.activeTexture(z),X=z)}function B(z,Mt,st){st===void 0&&(X===null?st=i.TEXTURE0+k-1:st=X);let Et=J[st];Et===void 0&&(Et={type:void 0,texture:void 0},J[st]=Et),(Et.type!==z||Et.texture!==Mt)&&(X!==st&&(i.activeTexture(st),X=st),i.bindTexture(z,Mt||nt[z]),Et.type=z,Et.texture=Mt)}function Ae(){let z=J[X];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function S(){try{i.texSubImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function V(){try{i.texSubImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function gt(){try{i.texStorage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function yt(){try{i.texStorage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function it(){try{i.texImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function at(){try{i.texImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function St(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function Dt(z,Mt){u[z]!==Mt&&(i.pixelStorei(z,Mt),u[z]=Mt)}function vt(z){ae.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ae.copy(z))}function _t(z){se.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),se.copy(z))}function Ht(z,Mt){let st=l.get(Mt);st===void 0&&(st=new WeakMap,l.set(Mt,st));let Et=st.get(z);Et===void 0&&(Et=i.getUniformBlockIndex(Mt,z.name),st.set(z,Et))}function Zt(z,Mt){let Et=l.get(Mt).get(z);c.get(Mt)!==Et&&(i.uniformBlockBinding(Mt,Et,z.__bindingPointIndex),c.set(Mt,Et))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,J={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,E=null,v=null,b=null,M=null,A=null,y=new pt(0,0,0),T=0,R=!1,P=null,N=null,D=null,C=null,U=null,ae.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:Ot,drawBuffers:Rt,useProgram:Jt,setBlending:ht,setMaterial:ft,setFlipSided:dt,setCullFace:xt,setLineWidth:Nt,setPolygonOffset:Gt,setScissorTest:$t,activeTexture:ne,bindTexture:B,unbindTexture:Ae,compressedTexImage2D:ge,compressedTexImage3D:I,texImage2D:it,texImage3D:at,pixelStorei:Dt,getParameter:St,updateUBOMapping:Ht,uniformBlockBinding:Zt,texStorage2D:gt,texStorage3D:yt,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:et,scissor:vt,viewport:_t,reset:he}}function Bb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return p?new OffscreenCanvas(I,S):pa("canvas")}function m(I,S,V){let q=1,et=ge(I);if((et.width>V||et.height>V)&&(q=V/Math.max(et.width,et.height)),q<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let gt=Math.floor(q*et.width),yt=Math.floor(q*et.height);d===void 0&&(d=x(gt,yt));let it=S?x(gt,yt):d;return it.width=gt,it.height=yt,it.getContext("2d").drawImage(I,0,0,gt,yt),jt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+gt+"x"+yt+")."),it}else return"data"in I&&jt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),I;return I}function g(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,S,V,q,et,gt=!1){if(I!==null){if(i[I]!==void 0)return i[I];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let yt;q&&(yt=t.get("EXT_texture_norm16"),yt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=S;if(S===i.RED&&(V===i.FLOAT&&(it=i.R32F),V===i.HALF_FLOAT&&(it=i.R16F),V===i.UNSIGNED_BYTE&&(it=i.R8),V===i.UNSIGNED_SHORT&&yt&&(it=yt.R16_EXT),V===i.SHORT&&yt&&(it=yt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.R8UI),V===i.UNSIGNED_SHORT&&(it=i.R16UI),V===i.UNSIGNED_INT&&(it=i.R32UI),V===i.BYTE&&(it=i.R8I),V===i.SHORT&&(it=i.R16I),V===i.INT&&(it=i.R32I)),S===i.RG&&(V===i.FLOAT&&(it=i.RG32F),V===i.HALF_FLOAT&&(it=i.RG16F),V===i.UNSIGNED_BYTE&&(it=i.RG8),V===i.UNSIGNED_SHORT&&yt&&(it=yt.RG16_EXT),V===i.SHORT&&yt&&(it=yt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RG8UI),V===i.UNSIGNED_SHORT&&(it=i.RG16UI),V===i.UNSIGNED_INT&&(it=i.RG32UI),V===i.BYTE&&(it=i.RG8I),V===i.SHORT&&(it=i.RG16I),V===i.INT&&(it=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGB8UI),V===i.UNSIGNED_SHORT&&(it=i.RGB16UI),V===i.UNSIGNED_INT&&(it=i.RGB32UI),V===i.BYTE&&(it=i.RGB8I),V===i.SHORT&&(it=i.RGB16I),V===i.INT&&(it=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),V===i.UNSIGNED_INT&&(it=i.RGBA32UI),V===i.BYTE&&(it=i.RGBA8I),V===i.SHORT&&(it=i.RGBA16I),V===i.INT&&(it=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_SHORT&&yt&&(it=yt.RGB16_EXT),V===i.SHORT&&yt&&(it=yt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),S===i.RGBA){let at=gt?fa:Ce.getTransfer(et);V===i.FLOAT&&(it=i.RGBA32F),V===i.HALF_FLOAT&&(it=i.RGBA16F),V===i.UNSIGNED_BYTE&&(it=at===ke?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&yt&&(it=yt.RGBA16_EXT),V===i.SHORT&&yt&&(it=yt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function b(I,S){let V;return I?S===null||S===Hi||S===To?V=i.DEPTH24_STENCIL8:S===Si?V=i.DEPTH32F_STENCIL8:S===Eo&&(V=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hi||S===To?V=i.DEPTH_COMPONENT24:S===Si?V=i.DEPTH_COMPONENT32F:S===Eo&&(V=i.DEPTH_COMPONENT16),V}function M(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function y(I){let S=I.target;S.removeEventListener("dispose",y),P(S)}function T(I){let S=n.get(I);if(S.__webglInit===void 0)return;let V=I.source,q=f.get(V);if(q){let et=q[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(I),Object.keys(q).length===0&&f.delete(V)}n.remove(I)}function R(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let V=I.source,q=f.get(V);delete q[S.__cacheKey],o.memory.textures--}function P(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let et=0;et<S.__webglFramebuffer[q].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[q][et]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=I.textures;for(let q=0,et=V.length;q<et;q++){let gt=n.get(V[q]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(I)}let N=0;function D(){N=0}function C(){return N}function U(I){N=I}function k(){let I=N;return I>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function W(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function tt(I,S){let V=n.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let q=I.image;if(q===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(V,I,S);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function O(I,S){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){bt(V,I,S);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function X(I,S){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){bt(V,I,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function J(I,S){let V=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){Ot(V,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let mt={[co]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[ul]:i.MIRRORED_REPEAT},wt={[vn]:i.NEAREST,[Am]:i.NEAREST_MIPMAP_NEAREST,[Va]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[ql]:i.LINEAR_MIPMAP_NEAREST,[Xs]:i.LINEAR_MIPMAP_LINEAR},ae={[Im]:i.NEVER,[Fm]:i.ALWAYS,[Lm]:i.LESS,[Ch]:i.LEQUAL,[Dm]:i.EQUAL,[Ph]:i.GEQUAL,[Nm]:i.GREATER,[Um]:i.NOTEQUAL};function se(I,S){if(S.type===Si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===ql||S.magFilter===Va||S.magFilter===Xs||S.minFilter===Dn||S.minFilter===ql||S.minFilter===Va||S.minFilter===Xs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,mt[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,mt[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,mt[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,wt[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,wt[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==Va&&S.minFilter!==Xs||S.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Yt(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let q=S.source,et=f.get(q);et===void 0&&(et={},f.set(q,et));let gt=W(S);if(gt!==I.__cacheKey){et[gt]===void 0&&(et[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[gt].usedTimes++;let yt=et[I.__cacheKey];yt!==void 0&&(et[I.__cacheKey].usedTimes--,yt.usedTimes===0&&R(S)),I.__cacheKey=gt,I.__webglTexture=et[gt].texture}return V}function nt(I,S,V){return Math.floor(Math.floor(I/V)/S)}function ot(I,S,V,q){let gt=I.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,q,S.data);else{gt.sort((Dt,vt)=>Dt.start-vt.start);let yt=0;for(let Dt=1;Dt<gt.length;Dt++){let vt=gt[yt],_t=gt[Dt],Ht=vt.start+vt.count,Zt=nt(_t.start,S.width,4),he=nt(vt.start,S.width,4);_t.start<=Ht+1&&Zt===he&&nt(_t.start+_t.count-1,S.width,4)===Zt?vt.count=Math.max(vt.count,_t.start+_t.count-vt.start):(++yt,gt[yt]=_t)}gt.length=yt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Dt=0,vt=gt.length;Dt<vt;Dt++){let _t=gt[Dt],Ht=Math.floor(_t.start/4),Zt=Math.ceil(_t.count/4),he=Ht%S.width,z=Math.floor(Ht/S.width),Mt=Zt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,he),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,he,z,Mt,st,V,q,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function bt(I,S,V){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);let et=Yt(I,S),gt=S.source;e.bindTexture(q,I.__webglTexture,i.TEXTURE0+V);let yt=n.get(gt);if(gt.version!==yt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let st=Ce.getPrimaries(Ce.workingColorSpace),Et=S.colorSpace===ys?null:Ce.getPrimaries(S.colorSpace),It=S.colorSpace===ys||st===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let at=m(S.image,!1,s.maxTextureSize);at=Ae(S,at);let St=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),vt=v(S.internalFormat,St,Dt,S.normalized,S.colorSpace,S.isVideoTexture);se(q,S);let _t,Ht=S.mipmaps,Zt=S.isVideoTexture!==!0,he=yt.__version===void 0||et===!0,z=gt.dataReady,Mt=M(S,at);if(S.isDepthTexture)vt=b(S.format===qs,S.type),he&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,vt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,St,Dt,null));else if(S.isDataTexture)if(Ht.length>0){Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,Ht[0].width,Ht[0].height);for(let st=0,Et=Ht.length;st<Et;st++)_t=Ht[st],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,St,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,st,vt,_t.width,_t.height,0,St,Dt,_t.data);S.generateMipmaps=!1}else Zt?(he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,at.width,at.height),z&&ot(S,at,St,Dt)):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,St,Dt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,Ht[0].width,Ht[0].height,at.depth);for(let st=0,Et=Ht.length;st<Et;st++)if(_t=Ht[st],S.format!==Ei)if(St!==null)if(Zt){if(z)if(S.layerUpdates.size>0){let It=Xd(_t.width,_t.height,S.format,S.type);for(let lt of S.layerUpdates){let Vt=_t.data.subarray(lt*It/_t.data.BYTES_PER_ELEMENT,(lt+1)*It/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,lt,_t.width,_t.height,1,St,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,at.depth,St,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,at.depth,0,_t.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,at.depth,St,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,at.depth,0,St,Dt,_t.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,Ht[0].width,Ht[0].height);for(let st=0,Et=Ht.length;st<Et;st++)_t=Ht[st],S.format!==Ei?St!==null?Zt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,st,vt,_t.width,_t.height,0,_t.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,St,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,st,vt,_t.width,_t.height,0,St,Dt,_t.data)}else if(S.isDataArrayTexture)if(Zt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,at.width,at.height,at.depth),z)if(S.layerUpdates.size>0){let st=Xd(at.width,at.height,S.format,S.type);for(let Et of S.layerUpdates){let It=at.data.subarray(Et*st/at.data.BYTES_PER_ELEMENT,(Et+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,at.width,at.height,1,St,Dt,It)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,at.width,at.height,at.depth,0,St,Dt,at.data);else if(S.isData3DTexture)Zt?(he&&e.texStorage3D(i.TEXTURE_3D,Mt,vt,at.width,at.height,at.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,vt,at.width,at.height,at.depth,0,St,Dt,at.data);else if(S.isFramebufferTexture){if(he)if(Zt)e.texStorage2D(i.TEXTURE_2D,Mt,vt,at.width,at.height);else{let st=at.width,Et=at.height;for(let It=0;It<Mt;It++)e.texImage2D(i.TEXTURE_2D,It,vt,st,Et,0,St,Dt,null),st>>=1,Et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),at.parentNode!==st){st.appendChild(at),u.add(S),st.onpaint=Et=>{let It=Et.changedElements;for(let lt of u)It.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let It=i.RGBA,lt=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,lt,Vt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Zt&&he){let st=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Mt,vt,st.width,st.height)}for(let st=0,Et=Ht.length;st<Et;st++)_t=Ht[st],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,St,Dt,_t):e.texImage2D(i.TEXTURE_2D,st,vt,St,Dt,_t);S.generateMipmaps=!1}else if(Zt){if(he){let st=ge(at);e.texStorage2D(i.TEXTURE_2D,Mt,vt,st.width,st.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,vt,St,Dt,at);g(S)&&_(q),yt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ot(I,S,V){if(S.image.length!==6)return;let q=Yt(I,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+V);let gt=n.get(et);if(et.version!==gt.__version||q===!0){e.activeTexture(i.TEXTURE0+V);let yt=Ce.getPrimaries(Ce.workingColorSpace),it=S.colorSpace===ys?null:Ce.getPrimaries(S.colorSpace),at=S.colorSpace===ys||yt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,Dt=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let lt=0;lt<6;lt++)!St&&!Dt?vt[lt]=m(S.image[lt],!0,s.maxCubemapSize):vt[lt]=Dt?S.image[lt].image:S.image[lt],vt[lt]=Ae(S,vt[lt]);let _t=vt[0],Ht=r.convert(S.format,S.colorSpace),Zt=r.convert(S.type),he=v(S.internalFormat,Ht,Zt,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,Mt=gt.__version===void 0||q===!0,st=et.dataReady,Et=M(S,_t);se(i.TEXTURE_CUBE_MAP,S);let It;if(St){z&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,_t.width,_t.height);for(let lt=0;lt<6;lt++){It=vt[lt].mipmaps;for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];S.format!==Ei?Ht!==null?z?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Bt.width,Bt.height,Ht,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,he,Bt.width,Bt.height,0,Bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Bt.width,Bt.height,Ht,Zt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,he,Bt.width,Bt.height,0,Ht,Zt,Bt.data)}}}else{if(It=S.mipmaps,z&&Mt){It.length>0&&Et++;let lt=ge(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Dt){z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,vt[lt].width,vt[lt].height,Ht,Zt,vt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,he,vt[lt].width,vt[lt].height,0,Ht,Zt,vt[lt].data);for(let Vt=0;Vt<It.length;Vt++){let He=It[Vt].image[lt].image;z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,He.width,He.height,Ht,Zt,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,he,He.width,He.height,0,Ht,Zt,He.data)}}else{z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ht,Zt,vt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,he,Ht,Zt,vt[lt]);for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Ht,Zt,Bt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,he,Ht,Zt,Bt.image[lt])}}}g(S)&&_(i.TEXTURE_CUBE_MAP),gt.__version=et.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Rt(I,S,V,q,et,gt){let yt=r.convert(V.format,V.colorSpace),it=r.convert(V.type),at=v(V.internalFormat,yt,it,V.normalized,V.colorSpace),St=n.get(S),Dt=n.get(V);if(Dt.__renderTarget=S,!St.__hasExternalTextures){let vt=Math.max(1,S.width>>gt),_t=Math.max(1,S.height>>gt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,gt,at,vt,_t,S.depth,0,yt,it,null):e.texImage2D(et,gt,at,vt,_t,0,yt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,et,Dt.__webglTexture,0,$t(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,et,Dt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(I,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let q=S.depthTexture,et=q&&q.isDepthTexture?q.type:null,gt=b(S.stencilBuffer,et),yt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(S),gt,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(S),gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,I)}else{let q=S.textures;for(let et=0;et<q.length;et++){let gt=q[et],yt=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),at=v(gt.internalFormat,yt,it,gt.normalized,gt.colorSpace);ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(S),at,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(S),at,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(I,S,V){let q=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(S.depthTexture);if(et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(et.__webglInit===void 0&&(et.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),se(i.TEXTURE_CUBE_MAP,S.depthTexture);let St=r.convert(S.depthTexture.format),Dt=r.convert(S.depthTexture.type),vt;S.depthTexture.format===Ji?vt=i.DEPTH_COMPONENT24:S.depthTexture.format===qs&&(vt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,vt,S.width,S.height,0,St,Dt,null)}}else tt(S.depthTexture,0);let gt=et.__webglTexture,yt=$t(S),it=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,at=S.depthTexture.format===qs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ji)ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else if(S.depthTexture.format===qs)ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(I){let S=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",et)};q.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=q}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)De(S.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?De(S.__webglFramebuffer[0],I,0):De(S.__webglFramebuffer,I,0)}else if(V){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Jt(S.__webglDepthbuffer[q],I,!1);else{let et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Jt(S.__webglDepthbuffer,I,!1);else{let et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(I,S,V){let q=n.get(I);S!==void 0&&Rt(q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&rt(I)}function ft(I){let S=I.texture,V=n.get(I),q=n.get(S);I.addEventListener("dispose",y);let et=I.textures,gt=I.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),gt){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let at=0;at<S.mipmaps.length;at++)V.__webglFramebuffer[it][at]=i.createFramebuffer()}else V.__webglFramebuffer[it]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)V.__webglFramebuffer[it]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let it=0,at=et.length;it<at;it++){let St=n.get(et[it]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ne(I)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let at=et[it];V.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[it]);let St=r.convert(at.format,at.colorSpace),Dt=r.convert(at.type),vt=v(at.internalFormat,St,Dt,at.normalized,at.colorSpace,I.isXRRenderTarget===!0),_t=$t(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,vt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,V.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),se(i.TEXTURE_CUBE_MAP,S);for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)Rt(V.__webglFramebuffer[it][at],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else Rt(V.__webglFramebuffer[it],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);g(S)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,at=et.length;it<at;it++){let St=et[it],Dt=n.get(St),vt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Dt.__webglTexture),se(vt,St),Rt(V.__webglFramebuffer,I,St,i.COLOR_ATTACHMENT0+it,vt,0),g(St)&&_(vt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(it=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),se(it,S),S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)Rt(V.__webglFramebuffer[at],I,S,i.COLOR_ATTACHMENT0,it,at);else Rt(V.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,it,0);g(S)&&_(it),e.unbindTexture()}I.depthBuffer&&rt(I)}function dt(I){let S=I.textures;for(let V=0,q=S.length;V<q;V++){let et=S[V];if(g(et)){let gt=E(I),yt=n.get(et).__webglTexture;e.bindTexture(gt,yt),_(gt),e.unbindTexture()}}}let xt=[],Nt=[];function Gt(I){if(I.samples>0){if(ne(I)===!1){let S=I.textures,V=I.width,q=I.height,et=i.COLOR_BUFFER_BIT,gt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(I),it=S.length>1;if(it)for(let St=0;St<S.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let at=I.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Dt=n.get(S[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,et,i.NEAREST),c===!0&&(xt.length=0,Nt.length=0,xt.push(i.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(xt.push(gt),Nt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<S.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Dt=n.get(S[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function $t(I){return Math.min(s.maxSamples,I.samples)}function ne(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ae(I,S){let V=I.colorSpace,q=I.format,et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==da&&V!==ys&&(Ce.getTransfer(V)===ke?(q!==Ei||et!==ei)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",V)),S}function ge(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=tt,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=ht,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ob(i,t){function e(n,s=ys){let r,o=Ce.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dd)return i.BYTE;if(n===Nd)return i.SHORT;if(n===Eo)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===Bd)return i.ALPHA;if(n===Od)return i.RGB;if(n===Ei)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===wo)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===Ys)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===th||n===eh||n===nh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ih||n===sh||n===rh||n===oh||n===ah||n===Za||n===ch)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ih||n===sh)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oh)return r.COMPRESSED_R11_EAC;if(n===ah)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===ch)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lh||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===xh||n===_h||n===yh||n===vh||n===Mh||n===bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ph)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_h)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sh||n===Eh||n===Th)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sh)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wh||n===Ah||n===Ja||n===Rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===To?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ea(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:Hb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends $i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding!="undefined",m=new uf,g={},_=e.getContextAttributes(),E=null,v=null,b=[],M=[],A=new ut,y=null,T=null,R=new gn;R.viewport=new on;let P=new gn;P.viewport=new on;let N=[R,P],D=new kl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=b[nt];return ot===void 0&&(ot=new fo,b[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=b[nt];return ot===void 0&&(ot=new fo,b[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=b[nt];return ot===void 0&&(ot=new fo,b[nt]=ot),ot.getHandSpace()};function k(nt){let ot=M.indexOf(nt.inputSource);if(ot===-1)return;let bt=b[ot];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,l||o),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let nt=0;nt<b.length;nt++){let ot=M[nt];ot!==null&&(M[nt]=null,b[nt].disconnect(ot))}C=null,U=null,m.reset();for(let nt in g)delete g[nt];if(t.setRenderTarget(E),f=null,d=null,u=null,s=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),T!==null){let nt=T.camera;nt.fov=T.fov,nt.zoom=T.zoom,nt.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ot=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=_.stencil?qs:Ji,Ot=_.stencil?To:Hi);let Jt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Nn(d.textureWidth,d.textureHeight,{format:Ei,type:ei,depthTexture:new Bs(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let bt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(nt){for(let ot=0;ot<nt.removed.length;ot++){let bt=nt.removed[ot],Ot=M.indexOf(bt);Ot>=0&&(M[Ot]=null,b[Ot].disconnect(bt))}for(let ot=0;ot<nt.added.length;ot++){let bt=nt.added[ot],Ot=M.indexOf(bt);if(Ot===-1){for(let Jt=0;Jt<b.length;Jt++)if(Jt>=M.length){M.push(bt),Ot=Jt;break}else if(M[Jt]===null){M[Jt]=bt,Ot=Jt;break}if(Ot===-1)break}let Rt=b[Ot];Rt&&Rt.connect(bt)}}let O=new L,X=new L;function J(nt,ot,bt){O.setFromMatrixPosition(ot.matrixWorld),X.setFromMatrixPosition(bt.matrixWorld);let Ot=O.distanceTo(X),Rt=ot.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,De=Rt[14]/(Rt[10]-1),rt=Rt[14]/(Rt[10]+1),ht=(Rt[9]+1)/Rt[5],ft=(Rt[9]-1)/Rt[5],dt=(Rt[8]-1)/Rt[0],xt=(Jt[8]+1)/Jt[0],Nt=De*dt,Gt=De*xt,$t=Ot/(-dt+xt),ne=$t*-dt;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ne),nt.translateZ($t),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Rt[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let B=De+$t,Ae=rt+$t,ge=Nt-ne,I=Gt+(Ot-ne),S=ht*rt/Ae*B,V=ft*rt/Ae*B;nt.projectionMatrix.makePerspective(ge,I,S,V,B,Ae),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function mt(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ot=nt.near,bt=nt.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),D.near=P.near=R.near=ot,D.far=P.far=R.far=bt,(C!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,U=D.far),D.layers.mask=nt.layers.mask|6,R.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ot=nt.parent,Rt=D.cameras;mt(D,Ot);for(let Jt=0;Jt<Rt.length;Jt++)mt(Rt[Jt],Ot);Rt.length===2?J(D,R,P):D.projectionMatrix.copy(R.projectionMatrix),T===null&&nt.isPerspectiveCamera&&(T={camera:nt,fov:nt.fov,zoom:nt.zoom}),wt(nt,D,Ot)};function wt(nt,ot,bt){bt===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=fl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(nt){return g[nt]};let ae=null;function se(nt,ot){if(h=ot.getViewerPose(l||o),p=ot,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ot=!1;bt.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let rt=0;rt<bt.length;rt++){let ht=bt[rt],ft=null;if(f!==null)ft=f.getViewport(ht);else{let xt=u.getViewSubImage(d,ht);ft=xt.viewport,rt===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let dt=N[rt];dt===void 0&&(dt=new gn,dt.layers.enable(rt),dt.viewport=new on,N[rt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ft.x,ft.y,ft.width,ft.height),rt===0&&(D.matrix.copy(dt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(dt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let rt=u.getDepthInformation(bt[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<bt.length;rt++){let ht=bt[rt].camera;if(ht){let ft=g[ht];ft||(ft=new Ea,g[ht]=ft);let dt=u.getCameraImage(ht);ft.sourceTexture=dt}}}}for(let bt=0;bt<b.length;bt++){let Ot=M[bt],Rt=b[bt];Ot!==null&&Rt!==void 0&&Rt.update(Ot,ot,l||o)}ae&&ae(nt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}let Yt=new x0;Yt.setAnimationLoop(se),this.setAnimationLoop=function(nt){ae=nt},this.dispose=function(){}}},kb=new Me,S0=new le;S0.set(-1,0,0,0,1,0,0,0,1);function Gb(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Gd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,E,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,_,E):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Tn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Tn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),E=_.envMap,v=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(S0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,_,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vb(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let M=b.program;n.uniformBlockBinding(v,M)}function l(v,b){let M=s[v.id];M===void 0&&(m(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",_));let A=b.program;n.updateUBOMapping(v,A);let y=t.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function h(v){let b=u();v.__bindingPointIndex=b;let M=i.createBuffer(),A=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,T=M.length;y<T;y++){let R=M[y];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)f(R[P],y,P,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,M,A){if(x(v,b,M,A)===!0){let y=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let N=T[P],D=g(N);p(N,v.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,b,M){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,M)}function x(v,b,M,A){let y=v.value,T=b+"_"+M;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let R=A[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(v){let b=v.uniforms,M=0,A=16;for(let T=0,R=b.length;T<R;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,D=P.length;N<D;N++){let C=P[N],U=Array.isArray(C.value)?C.value:[C.value];for(let k=0,W=U.length;k<W;k++){let tt=U[k],O=g(tt),X=M%A,J=X%O.boundary,mt=X+J;M+=J,mt!==0&&A-mt<O.storage&&(M+=A-mt),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=O.storage}}}let y=M%A;return y>0&&(M+=A-y),v.__size=M,v.__cache={},this}function g(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),b}function _(v){let b=v.target;b.removeEventListener("dispose",_);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:E}}var Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),es=null;function Xb(){return es===null&&(es=new hr(Wb,16,16,Ys,fi),es.name="DFG_LUT",es.minFilter=Dn,es.magFilter=Dn,es.wrapS=Yi,es.wrapT=Yi,es.generateMipmaps=!1,es.needsUpdate=!0),es}var Uh=class{constructor(t={}){let{canvas:e=Bm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ei}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([jl,Kl,$l]),g=new Set([ei,Hi,Eo,To,Zl,Jl]),_=new Uint32Array(4),E=new Int32Array(4),v=new L,b=null,M=null,A=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,D=null,C=null,U=null;this._outputColorSpace=Ln;let k=0,W=0,tt=null,O=-1,X=null,J=new on,mt=new on,wt=null,ae=new pt(0),se=0,Yt=e.width,nt=e.height,ot=1,bt=null,Ot=null,Rt=new on(0,0,Yt,nt),Jt=new on(0,0,Yt,nt),De=!1,rt=new go,ht=!1,ft=!1,dt=new Me,xt=new L,Nt=new on,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ne(){return tt===null?ot:1}let B=n;function Ae(w,H){return e.getContext(w,H)}let ge,I,S,V,q,et,gt,yt,it,at,St,Dt,vt,_t,Ht,Zt,he,z,Mt,st,Et,It,lt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",He,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),B===null){let H="webgl2";if(B=Ae(H,w),B===null)throw Ae(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(w){throw e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),ee("WebGLRenderer: "+w.message),w}function Vt(){ge=new j1(B),ge.init(),Et=new Ob(B,ge),I=new G1(B,ge,t,Et),S=new Fb(B,ge),I.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),D=B.createFramebuffer(),C=B.createFramebuffer(),U=B.createFramebuffer(),V=new eM(B),q=new bb,et=new Bb(B,ge,S,q,I,Et,V),gt=new K1(R),yt=new iy(B),It=new z1(B,yt),it=new Q1(B,yt,V,It),at=new iM(B,it,yt,It,V),z=new nM(B,I,et),Ht=new V1(q),St=new Mb(R,gt,ge,I,It,Ht),Dt=new Gb(R,q),vt=new Eb,_t=new Pb(ge),he=new H1(R,gt,S,at,p,c),Zt=new Ub(R,at,I),lt=new Vb(B,V,I,S),Mt=new k1(B,ge,V),st=new tM(B,ge,V),V.programs=St.programs,R.capabilities=I,R.extensions=ge,R.properties=q,R.renderLists=vt,R.shadowMap=Zt,R.state=S,R.info=V}x!==ei&&(T=new rM(x,e.width,e.height,a,s,r));let Bt=new df(R,B);this.xr=Bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(w){w!==void 0&&(ot=w,this.setSize(Yt,nt,!1))},this.getSize=function(w){return w.set(Yt,nt)},this.setSize=function(w,H,j=!0){if(Bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=w,nt=H,e.width=Math.floor(w*ot),e.height=Math.floor(H*ot),j===!0&&(e.style.width=w+"px",e.style.height=H+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(Yt*ot,nt*ot).floor()},this.setDrawingBufferSize=function(w,H,j){Yt=w,nt=H,ot=j,e.width=Math.floor(w*j),e.height=Math.floor(H*j),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(x===ei){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,H,j,Y){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,H,j,Y),S.viewport(J.copy(Rt).multiplyScalar(ot).round())},this.getScissor=function(w){return w.copy(Jt)},this.setScissor=function(w,H,j,Y){w.isVector4?Jt.set(w.x,w.y,w.z,w.w):Jt.set(w,H,j,Y),S.scissor(mt.copy(Jt).multiplyScalar(ot).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){S.setScissorTest(De=w)},this.setOpaqueSort=function(w){bt=w},this.setTransparentSort=function(w){Ot=w},this.getClearColor=function(w){return w.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,j=!0){let Y=0;if(w){let Z=!1;if(tt!==null){let Lt=tt.texture.format;Z=m.has(Lt)}if(Z){let Lt=tt.texture.type,Ft=g.has(Lt),Pt=he.getClearColor(),zt=he.getClearAlpha(),Wt=Pt.r,xe=Pt.g,Ee=Pt.b;Ft?(_[0]=Wt,_[1]=xe,_[2]=Ee,_[3]=zt,B.clearBufferuiv(B.COLOR,0,_)):(E[0]=Wt,E[1]=xe,E[2]=Ee,E[3]=zt,B.clearBufferiv(B.COLOR,0,E))}else Y|=B.COLOR_BUFFER_BIT}H&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),he.dispose(),vt.dispose(),_t.dispose(),q.dispose(),gt.dispose(),at.dispose(),It.dispose(),lt.dispose(),St.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Hr),Bt.removeEventListener("sessionend",xi),Fn.stop()};function He(w){w.preventDefault(),ma("WebGLRenderer: Context Lost."),P=!0}function Ne(){ma("WebGLRenderer: Context Restored."),P=!1;let w=V.autoReset,H=Zt.enabled,j=Zt.autoUpdate,Y=Zt.needsUpdate,Z=Zt.type;Vt(),V.autoReset=w,Zt.enabled=H,Zt.autoUpdate=j,Zt.needsUpdate=Y,Zt.type=Z}function Vn(w){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oi(w){let H=w.target;H.removeEventListener("dispose",oi),cs(H)}function cs(w){Br(w),q.remove(w)}function Br(w){let H=q.get(w).programs;H!==void 0&&(H.forEach(function(j){St.releaseProgram(j)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,j,Y,Z,Lt){H===null&&(H=Gt);let Ft=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pt=Bn(w,H,j,Y,Z);S.setMaterial(Y,Ft);let zt=j.index,Wt=1;if(Y.wireframe===!0){if(zt=it.getWireframeAttribute(j),zt===void 0)return;Wt=2}let xe=j.drawRange,Ee=j.attributes.position,kt=xe.start*Wt,ze=(xe.start+xe.count)*Wt;Lt!==null&&(kt=Math.max(kt,Lt.start*Wt),ze=Math.min(ze,(Lt.start+Lt.count)*Wt)),zt!==null?(kt=Math.max(kt,0),ze=Math.min(ze,zt.count)):Ee!=null&&(kt=Math.max(kt,0),ze=Math.min(ze,Ee.count));let _n=ze-kt;if(_n<0||_n===1/0)return;It.setup(Z,Y,Pt,j,zt);let Qe,Ze=Mt;if(zt!==null&&(Qe=yt.get(zt),Ze=st,Ze.setIndex(Qe)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*ne()),Ze.setMode(B.LINES)):Ze.setMode(B.TRIANGLES);else if(Z.isLine){let On=Y.linewidth;On===void 0&&(On=1),S.setLineWidth(On*ne()),Z.isLineSegments?Ze.setMode(B.LINES):Z.isLineLoop?Ze.setMode(B.LINE_LOOP):Ze.setMode(B.LINE_STRIP)}else Z.isPoints?Ze.setMode(B.POINTS):Z.isSprite&&Ze.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let On=Z._multiDrawStarts,Ut=Z._multiDrawCounts,Wn=Z._multiDrawCount,Ue=zt?yt.get(zt).bytesPerElement:1,yi=q.get(Y).currentProgram.getUniforms();for(let Vi=0;Vi<Wn;Vi++)yi.setValue(B,"_gl_DrawID",Vi),Ze.render(On[Vi]/Ue,Ut[Vi])}else if(Z.isInstancedMesh)Ze.renderInstances(kt,_n,Z.count);else if(j.isInstancedBufferGeometry){let On=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ut=Math.min(j.instanceCount,On);Ze.renderInstances(kt,_n,Ut)}else Ze.render(kt,_n)};function Ko(w,H,j,Y){N!==null&&w.isNodeMaterial&&N.setObject(Y,w),ht===!0&&Ht.setState(w,j,!1),w.transparent===!0&&w.side===me&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,Re(w,H,Y),w.side=Vs,w.needsUpdate=!0,Re(w,H,Y),w.side=me):Re(w,H,Y)}this.compile=function(w,H,j=null){j===null&&(j=w),N!==null&&N.renderStart(w,H,j),M=_t.get(j),M.init(H),y.push(M),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),w!==j&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),ft=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ft),ht===!0&&Ht.setGlobalState(this.clippingPlanes,H),N!==null&&Zt.render(M.state.shadowsArray,j,H);let Y=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Lt=Z.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){let Pt=Lt[Ft];Ko(Pt,j,H,Z),Y.add(Pt)}else Ko(Lt,j,H,Z),Y.add(Lt)}),M=y.pop(),N!==null&&N.renderEnd(),Y},this.compileAsync=function(w,H,j=null){let Y=this.compile(w,H,j);return new Promise(Z=>{function Lt(){if(Y.forEach(function(Ft){let zt=q.get(Ft).currentProgram;(zt===void 0||zt.isReady())&&Y.delete(Ft)}),Y.size===0){Z(w);return}setTimeout(Lt,10)}ge.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Or=null;function Rs(w){Or&&Or(w)}function Hr(){Fn.stop()}function xi(){Fn.start()}let Fn=new x0;Fn.setAnimationLoop(Rs),typeof self!="undefined"&&Fn.setContext(self),this.setAnimationLoop=function(w){Or=w,Bt.setAnimationLoop(w),w===null?Fn.stop():Fn.start()},Bt.addEventListener("sessionstart",Hr),Bt.addEventListener("sessionend",xi),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(w,H);let j=Bt.enabled===!0&&Bt.isPresenting===!0,Y=T!==null&&(tt===null||j)&&T.begin(R,tt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(H),H=Bt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,H,tt),M=_t.get(w,y.length),M.init(H),M.state.textureUnits=et.getTextureUnits(),y.push(M),dt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),rt.setFromProjectionMatrix(dt,Di,H.reversedDepth),ft=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ft),b=vt.get(w,A.length),b.init(),A.push(b),Bt.enabled===!0&&Bt.isPresenting===!0){let Ft=R.xr.getDepthSensingMesh();Ft!==null&&Gi(Ft,H,-1/0,R.sortObjects)}Gi(w,H,0,R.sortObjects),b.finish(),N!==null&&N.updateLights(M.state.lightsArray),R.sortObjects===!0&&b.sort(bt,Ot),$t=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,$t&&he.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ht.beginShadows();let Z=M.state.shadowsArray;if(Zt.render(Z,w,H),ht===!0&&Ht.endShadows(),(Y&&T.hasRenderPass())===!1){let Ft=b.opaque,Pt=b.transmissive;if(M.setupLights(),H.isArrayCamera){let zt=H.cameras;if(Pt.length>0)for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt];K(Ft,Pt,w,Ee)}$t&&he.render(w);for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt];wc(b,w,Ee,Ee.viewport)}}else Pt.length>0&&K(Ft,Pt,w,H),$t&&he.render(w),wc(b,w,H)}tt!==null&&W===0&&(et.updateMultisampleRenderTarget(tt),et.updateRenderTargetMipmap(tt)),Y&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,H),It.resetDefaultState(),O=-1,X=null,y.pop(),y.length>0?(M=y[y.length-1],et.setTextureUnits(M.state.textureUnits),ht===!0&&Ht.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function Gi(w,H,j,Y){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(rt)){Y&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);let Ft=at.update(w),Pt=w.material;Pt.visible&&b.push(w,Ft,Pt,j,Nt.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(rt))){let Ft=at.update(w),Pt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Nt.copy(Ft.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(Pt)){let zt=Ft.groups;for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt],kt=Pt[Ee.materialIndex];kt&&kt.visible&&b.push(w,Ft,kt,j,Nt.z,Ee,H)}}else Pt.visible&&b.push(w,Ft,Pt,j,Nt.z,null,H)}}let Lt=w.children;for(let Ft=0,Pt=Lt.length;Ft<Pt;Ft++)Gi(Lt[Ft],H,j,Y)}function wc(w,H,j,Y){let{opaque:Z,transmissive:Lt,transparent:Ft}=w;M.setupLightsView(j),ht===!0&&Ht.setGlobalState(R.clippingPlanes,j),Y&&S.viewport(J.copy(Y)),Z.length>0&&Tt(Z,H,j),Lt.length>0&&Tt(Lt,H,j),Ft.length>0&&Tt(Ft,H,j),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function K(w,H,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let kt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Nn(1,1,{generateMipmaps:!0,type:kt?fi:ei,minFilter:Xs,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let Lt=M.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||J;Lt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);let Pt=R.getRenderTarget(),zt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(ae),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),$t&&he.render(j);let xe=R.toneMapping;R.toneMapping=Oi;let Ee=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),ht===!0&&Ht.setGlobalState(R.clippingPlanes,Y),Tt(w,j,Y),et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ze=0,_n=H.length;ze<_n;ze++){let Qe=H[ze],{object:Ze,geometry:On,material:Ut,group:Wn}=Qe;if(Ut.side===me&&Ze.layers.test(Y.layers)){let Ue=Ut.side;Ut.side=Tn,Ut.needsUpdate=!0,ve(Ze,j,Y,On,Ut,Wn),Ut.side=Ue,Ut.needsUpdate=!0,kt=!0}}kt===!0&&(et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt))}R.setRenderTarget(Pt,zt,Wt),R.setClearColor(ae,se),Ee!==void 0&&(Y.viewport=Ee),R.toneMapping=xe}function Tt(w,H,j){let Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Lt=w.length;Z<Lt;Z++){let Ft=w[Z],{object:Pt,geometry:zt,group:Wt}=Ft,xe=Ft.material;xe.allowOverride===!0&&Y!==null&&(xe=Y),Pt.layers.test(j.layers)&&ve(Pt,H,j,zt,xe,Wt)}}function ve(w,H,j,Y,Z,Lt){N!==null&&Z.isNodeMaterial&&N.setObject(w,Z),w.onBeforeRender(R,H,j,Y,Z,Lt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(R,H,j,Y,w,Lt),Z.transparent===!0&&Z.side===me&&Z.forceSinglePass===!1?(Z.side=Tn,Z.needsUpdate=!0,R.renderBufferDirect(j,H,Y,Z,w,Lt),Z.side=Vs,Z.needsUpdate=!0,R.renderBufferDirect(j,H,Y,Z,w,Lt),Z.side=me):R.renderBufferDirect(j,H,Y,Z,w,Lt),w.onAfterRender(R,H,j,Y,Z,Lt)}function Re(w,H,j){H.isScene!==!0&&(H=Gt);let Y=q.get(w),Z=M.state.lights,Lt=M.state.shadowsArray,Ft=Z.state.version,Pt=St.getParameters(w,Z.state,Lt,H,j,M.state.lightProbeGridArray),zt=St.getProgramCacheKey(Pt),Wt=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let xe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=gt.get(w.envMap||Y.environment,xe),Y.envMapRotation=Y.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",oi),Wt=new Map,Y.programs=Wt);let Ee=Wt.get(zt);if(Ee!==void 0){if(Y.currentProgram===Ee&&Y.lightsStateVersion===Ft)return de(w,Pt),Ee}else Pt.uniforms=St.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,j,Pt),w.onBeforeCompile(Pt,R),Ee=St.acquireProgram(Pt,zt),Wt.set(zt,Ee),Y.uniforms=Pt.uniforms;let kt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),de(w,Pt),Y.needsLights=Pu(w),Y.lightsStateVersion=Ft,Y.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.sunLights.value=Z.state.sun,kt.sunLightShadows.value=Z.state.sunShadow,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.sunShadowMatrix.value=Z.state.sunShadowMatrix,kt.sunShadowCascade.value=Z.state.sunShadowCascade,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=Ee,Y.uniformsList=null,Ee}function re(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=Co.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function de(w,H){let j=q.get(w);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function te(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let j=0,Y=w.length;j<Y;j++){let Z=w[j];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Bn(w,H,j,Y,Z){H.isScene!==!0&&(H=Gt),et.resetTextureUnits();let Lt=H.fog,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Pt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ce.workingColorSpace,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=gt.get(Y.envMap||Ft,zt),xe=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ee=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!j.morphAttributes.position,ze=!!j.morphAttributes.normal,_n=!!j.morphAttributes.color,Qe=Oi;Y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Qe=R.toneMapping);let Ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,On=Ze!==void 0?Ze.length:0,Ut=q.get(Y),Wn=M.state.lights;if(ht===!0&&(ft===!0||w!==X)){let $e=w===X&&Y.id===O;Ht.setState(Y,w,$e)}let Ue=!1;Y.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Wn.state.version||Ut.outputColorSpace!==Pt||Z.isBatchedMesh&&Ut.batching===!1||!Z.isBatchedMesh&&Ut.batching===!0||Z.isBatchedMesh&&Ut.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ut.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ut.instancing===!1||!Z.isInstancedMesh&&Ut.instancing===!0||Z.isSkinnedMesh&&Ut.skinning===!1||!Z.isSkinnedMesh&&Ut.skinning===!0||Z.isInstancedMesh&&Ut.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ut.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ut.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ut.instancingMorph===!1&&Z.morphTexture!==null||Ut.envMap!==Wt||Y.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Ht.numPlanes||Ut.numIntersection!==Ht.numIntersection)||Ut.vertexAlphas!==xe||Ut.vertexTangents!==Ee||Ut.morphTargets!==kt||Ut.morphNormals!==ze||Ut.morphColors!==_n||Ut.toneMapping!==Qe||Ut.morphTargetsCount!==On||!!Ut.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Ut.__version=Y.version);let yi=Ut.currentProgram;Ue===!0&&(yi=Re(Y,H,Z),N&&Y.isNodeMaterial&&N.onUpdateProgram(Y,yi,Ut));let Vi=!1,Cs=!1,zr=!1,Xe=yi.getUniforms(),mn=Ut.uniforms;if(S.useProgram(yi.program)&&(Vi=!0,Cs=!0,zr=!0),Y.id!==O&&(O=Y.id,Cs=!0),Ut.needsLights){let $e=te(M.state.lightProbeGridArray,Z);Ut.lightProbeGrid!==$e&&(Ut.lightProbeGrid=$e,Cs=!0)}if(Vi||X!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Xe.setValue(B,"projectionMatrix",w.projectionMatrix),Xe.setValue(B,"viewMatrix",w.matrixWorldInverse);let Is=Xe.map.cameraPosition;Is!==void 0&&Is.setValue(B,xt.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Xe.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Xe.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Cs=!0,zr=!0)}if(Ut.needsLights&&(Wn.state.sunShadowMap.length>0&&Xe.setValue(B,"sunShadowMap",Wn.state.sunShadowMap,et),Wn.state.directionalShadowMap.length>0&&Xe.setValue(B,"directionalShadowMap",Wn.state.directionalShadowMap,et),Wn.state.spotShadowMap.length>0&&Xe.setValue(B,"spotShadowMap",Wn.state.spotShadowMap,et),Wn.state.pointShadowMap.length>0&&Xe.setValue(B,"pointShadowMap",Wn.state.pointShadowMap,et)),Z.isSkinnedMesh){Xe.setOptional(B,Z,"bindMatrix"),Xe.setOptional(B,Z,"bindMatrixInverse");let $e=Z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Xe.setValue(B,"boneTexture",$e.boneTexture,et))}Z.isBatchedMesh&&(Xe.setOptional(B,Z,"batchingTexture"),Xe.setValue(B,"batchingTexture",Z._matricesTexture,et),Xe.setOptional(B,Z,"batchingIdTexture"),Xe.setValue(B,"batchingIdTexture",Z._indirectTexture,et),Xe.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Xe.setValue(B,"batchingColorTexture",Z._colorsTexture,et));let Ps=j.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&z.update(Z,j,yi),(Cs||Ut.receiveShadow!==Z.receiveShadow)&&(Ut.receiveShadow=Z.receiveShadow,Xe.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Xb()),Cs){if(Xe.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&_i(mn,zr),Lt&&Y.fog===!0&&Dt.refreshFogUniforms(mn,Lt),Dt.refreshMaterialUniforms(mn,Y,ot,nt,M.state.transmissionRenderTarget[w.id]),Ut.needsLights&&Ut.lightProbeGrid){let $e=Ut.lightProbeGrid;mn.probesSH.value=$e.texture,mn.probesMin.value.copy($e.boundingBox.min),mn.probesMax.value.copy($e.boundingBox.max),mn.probesResolution.value.copy($e.resolution)}Co.upload(B,re(Ut),mn,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Co.upload(B,re(Ut),mn,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Xe.setValue(B,"center",Z.center),Xe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Xe.setValue(B,"normalMatrix",Z.normalMatrix),Xe.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let $e=Y.uniformsGroups;for(let Is=0,kr=$e.length;Is<kr;Is++){let vp=$e[Is];lt.update(vp,yi),lt.bind(vp,yi)}}return yi}function _i(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Pu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(w,H,j){let Y=q.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=H,q.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let j=q.get(w);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,j=0){tt=w,k=H,W=j;let Y=null,Z=!1,Lt=!1;if(w){let Pt=q.get(w);if(Pt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,Pt.__webglFramebuffer),J.copy(w.viewport),mt.copy(w.scissor),wt=w.scissorTest,S.viewport(J),S.scissor(mt),S.setScissorTest(wt),O=-1;return}else if(Pt.__webglFramebuffer===void 0)et.setupRenderTarget(w);else if(Pt.__hasExternalTextures)et.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let xe=w.depthTexture;if(Pt.__boundDepthTexture!==xe){if(xe!==null&&q.has(xe)&&(w.width!==xe.image.width||w.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(w)}}let zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Lt=!0);let Wt=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?Y=Wt[H][j]:Y=Wt[H],Z=!0):w.samples>0&&et.useMultisampledRTT(w)===!1?Y=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[j]:Y=Wt,J.copy(w.viewport),mt.copy(w.scissor),wt=w.scissorTest}else J.copy(Rt).multiplyScalar(ot).floor(),mt.copy(Jt).multiplyScalar(ot).floor(),wt=De;if(j!==0&&(Y=D),S.bindFramebuffer(B.FRAMEBUFFER,Y)&&S.drawBuffers(w,Y),S.viewport(J),S.scissor(mt),S.setScissorTest(wt),Z){let Pt=q.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,j)}else if(Lt){let Pt=H;for(let zt=0;zt<w.textures.length;zt++){let Wt=q.get(w.textures[zt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+zt,Wt.__webglTexture,j,Pt)}}else if(w!==null&&j!==0){let Pt=q.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,j)}O=-1};function yp(w){let H=q.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=I.textureFormatReadable(w.format),H.__typeReadable=I.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,j,Y,Z,Lt,Ft,Pt=0){if(!(w&&w.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt){S.bindFramebuffer(B.FRAMEBUFFER,zt);try{let Wt=w.textures[Pt],xe=Wt.format,Ee=Wt.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=yp(Wt);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Y&&j>=0&&j<=w.height-Z&&B.readPixels(H,j,Y,Z,Et.convert(xe),Et.convert(Ee),Lt)}finally{let Wt=tt!==null?q.get(tt).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,H,j,Y,Z,Lt,Ft,Pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt)if(H>=0&&H<=w.width-Y&&j>=0&&j<=w.height-Z){S.bindFramebuffer(B.FRAMEBUFFER,zt);let Wt=w.textures[Pt],xe=Wt.format,Ee=Wt.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=yp(Wt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.bufferData(B.PIXEL_PACK_BUFFER,Lt.byteLength,B.STREAM_READ),B.readPixels(H,j,Y,Z,Et.convert(xe),Et.convert(Ee),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let _n=tt!==null?q.get(tt).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,_n);let Qe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Hm(B,Qe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Lt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ze),B.deleteSync(Qe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,j=0){let Y=Math.pow(2,-j),Z=Math.floor(w.image.width*Y),Lt=Math.floor(w.image.height*Y),Ft=H!==null?H.x:0,Pt=H!==null?H.y:0;et.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Ft,Pt,Z,Lt),S.unbindTexture()},this.copyTextureToTexture=function(w,H,j=null,Y=null,Z=0,Lt=0){let Ft,Pt,zt,Wt,xe,Ee,kt,ze,_n,Qe=w.isCompressedTexture?w.mipmaps[Lt]:w.image;if(j!==null)Ft=j.max.x-j.min.x,Pt=j.max.y-j.min.y,zt=j.isBox3?j.max.z-j.min.z:1,Wt=j.min.x,xe=j.min.y,Ee=j.isBox3?j.min.z:0;else{let mn=Math.pow(2,-Z);Ft=Math.floor(Qe.width*mn),Pt=Math.floor(Qe.height*mn),w.isDataArrayTexture?zt=Qe.depth:w.isData3DTexture?zt=Math.floor(Qe.depth*mn):zt=1,Wt=0,xe=0,Ee=0}Y!==null?(kt=Y.x,ze=Y.y,_n=Y.z):(kt=0,ze=0,_n=0);let Ze=Et.convert(H.format),On=Et.convert(H.type),Ut;H.isData3DTexture?(et.setTexture3D(H,0),Ut=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(et.setTexture2DArray(H,0),Ut=B.TEXTURE_2D_ARRAY):(et.setTexture2D(H,0),Ut=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);let Wn=S.getParameter(B.UNPACK_ROW_LENGTH),Ue=S.getParameter(B.UNPACK_IMAGE_HEIGHT),yi=S.getParameter(B.UNPACK_SKIP_PIXELS),Vi=S.getParameter(B.UNPACK_SKIP_ROWS),Cs=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,Qe.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),S.pixelStorei(B.UNPACK_SKIP_ROWS,xe),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Ee);let zr=w.isDataArrayTexture||w.isData3DTexture,Xe=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let mn=q.get(w),Ps=q.get(H),$e=q.get(mn.__renderTarget),Is=q.get(Ps.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,$e.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let kr=0;kr<zt;kr++)zr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(w).__webglTexture,Z,Ee+kr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(H).__webglTexture,Lt,_n+kr)),B.blitFramebuffer(Wt,xe,Ft,Pt,kt,ze,Ft,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||q.has(w)){let mn=q.get(w),Ps=q.get(H);S.bindFramebuffer(B.READ_FRAMEBUFFER,C),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let $e=0;$e<zt;$e++)zr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Z,Ee+$e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Z),Xe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ps.__webglTexture,Lt,_n+$e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ps.__webglTexture,Lt),Z!==0?B.blitFramebuffer(Wt,xe,Ft,Pt,kt,ze,Ft,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):Xe?B.copyTexSubImage3D(Ut,Lt,kt,ze,_n+$e,Wt,xe,Ft,Pt):B.copyTexSubImage2D(Ut,Lt,kt,ze,Wt,xe,Ft,Pt);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Xe?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ut,Lt,kt,ze,_n,Ft,Pt,zt,Ze,On,Qe.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,Lt,kt,ze,_n,Ft,Pt,zt,Ze,Qe.data):B.texSubImage3D(Ut,Lt,kt,ze,_n,Ft,Pt,zt,Ze,On,Qe):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Ft,Pt,Ze,On,Qe.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Qe.width,Qe.height,Ze,Qe.data):B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Ft,Pt,Ze,On,Qe);S.pixelStorei(B.UNPACK_ROW_LENGTH,Wn),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue),S.pixelStorei(B.UNPACK_SKIP_PIXELS,yi),S.pixelStorei(B.UNPACK_SKIP_ROWS,Vi),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Cs),Lt===0&&H.generateMipmaps&&B.generateMipmap(Ut),S.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&et.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?et.setTextureCube(w,0):w.isData3DTexture?et.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?et.setTexture2DArray(w,0):et.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){k=0,W=0,tt=null,S.reset(),It.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}};function qb(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var E0={};function Yb(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=qb(i.length*97+i.charCodeAt(0)),r=(a,c)=>`rgba(${a},${a},${a},${c})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let a=i==="woodV";for(let c=0;c<150;c++){let l=s()*256,h=40+s()*160,u=s()*256,d=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=d,n.beginPath(),a?(n.moveTo(l,u),n.bezierCurveTo(l+4,u+h*.3,l-4,u+h*.7,l+2,u+h)):(n.moveTo(u,l),n.bezierCurveTo(u+h*.3,l+4,u+h*.7,l-4,u+h,l+2)),n.stroke()}for(let c=0;c<3;c++){let l=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let u=1;u<4;u++)n.beginPath(),n.ellipse(l,h,u*3.5,u*2.2,a?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),a?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let a=4;for(let c=0;c<a;c++){let l=-(s()*40),h=256/a;for(;l<256;){let u=38+s()*50,d=190+s()*55|0;n.fillStyle=`rgb(${d},${d-3},${d+8})`,n.beginPath(),n.roundRect?n.roundRect(l+3,c*h+3,u-6,h-6,10):n.rect(l+3,c*h+3,u-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(l+9,c*h+7,u-24,3);for(let f=0;f<14;f++)n.fillStyle=r(120,.08),n.fillRect(l+6+s()*(u-12),c*h+6+s()*(h-12),2,2);l+=u}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let a=6,c=256/a;for(let l=0;l<a;l++){let h=l%2*22;for(let u=-22;u<278;u+=44){let d=196+s()*50|0;n.fillStyle=`rgb(${d},${d-6},${d-8})`,n.beginPath(),n.moveTo(u+h+2,l*c),n.lineTo(u+h+42,l*c),n.lineTo(u+h+42,l*c+c*.55),n.quadraticCurveTo(u+h+22,l*c+c*1.15,u+h+2,l*c+c*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(u+h+8,l*c+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let a=0;a<60;a++){let c=s()*256,l=s()*256,h=10+s()*40,u=170+s()*70|0;n.fillStyle=`rgba(${u},${u-4},${u+10},.35)`,n.beginPath(),n.ellipse(c,l,h,h*.6,s()*3,0,7),n.fill()}for(let a=0;a<30;a++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let c=s()*256,l=s()*256;n.moveTo(c,l);for(let h=0;h<4;h++)c+=s()*40-20,l+=s()*30,n.lineTo(c,l);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let a=0;a<900;a++){let c=s()*256,l=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(c,l),n.lineTo(c+s()*4-2,l-3-s()*7),n.stroke()}for(let a=0;a<20;a++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let a=0;a<70;a++){let c=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(c,0),n.bezierCurveTo(c+8,256*.3,c-8,256*.6,c+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let a=0;a<260;a++){let c=s()*256,l=s()*256,h=6+s()*14,u=s()>.45?215+s()*40|0:120+s()*60|0;for(let d of[-256,0,256])for(let f of[-256,0,256])c+d<-30||c+d>286||l+f<-30||l+f>286||(n.fillStyle=`rgba(${u},${u},${u-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(c+d,l+f,h,h*.62,s()*3.14,0,7),n.fill())}for(let a=0;a<120;a++){let c=s()*256,l=s()*256;n.fillStyle="rgba(70,80,60,.28)",n.beginPath(),n.ellipse(c,l+9,9,4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(c-1,l-3,6,2.4,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(a,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,a,256,1.6);for(let a=0;a<9;a++){let c=s()*256,l=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(c,l),n.bezierCurveTo(c+20,l+30,c-18,l+60,c+6,l+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(c+4,l),n.bezierCurveTo(c+24,l+30,c-14,l+60,c+10,l+95),n.stroke()}for(let a=0;a<5;a++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let a=-256;a<256*2;a+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(a+3,0),n.lineTo(a+3-256,256),n.stroke();for(let a=0;a<256;a+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let a=5,c=256/a;for(let l=0;l<a;l++){let h=l*c;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,c);for(let u=0;u<22;u++){let d=h+3+s()*(c-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,d),n.bezierCurveTo(80,d+3,160,d-3,256,d+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let u of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(u,h+c/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let a=0;a<8;a++){let c=a*256/8;for(let l=-10;l<266;l+=14){let h=l+a%2*7+s()*3,u=18+s()*10,d=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${d},${d},${d-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,c),n.lineTo(h+s()*8-4,c+u),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,c+256/8-2),n.lineTo(256,c+256/8-2),n.stroke()}}let o=new Fi(e);return o.wrapS=o.wrapT=co,o.colorSpace=Ln,o.anisotropy=4,o}var Ye=i=>E0[i]||(E0[i]=Yb(i)),Ie=(()=>{let i=new Uint8Array([112,160,208,255]),t=new hr(i,4,1,wo);return t.minFilter=t.magFilter=vn,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function T0(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function w0(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function Zs(){let i=null;try{i=localStorage.getItem("rio3d-season")}catch{}if(i!==null&&i!==""&&i!=="auto"&&+i>=0&&+i<4)return+i;let t=new Date().getMonth();return t===11||t<=1?3:t<=4?0:t<=7?1:2}var Oh=[{name:"Primavera",pine:["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],brd:["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],gnd:"#b6dca3",gk:0,pet:{c:16762578,size:.42,fall:1,base:.12,gain:.88}},{name:"Verano",pine:["#5fa383","#6fb593","#559a7e","#7cc09d"],blos:["#9aa8e6","#8c9ae0","#b3a2e8","#7f93d8"],bblos:["#9aa8e6","#b3a2e8","#8c9ae0","#a7b6ee"],brd:["#6fae74","#5f9f6a","#7cbc7a","#4f9468","#88c27f","#6aa878","#58a070"],gnd:"#9fd08a",gk:.18,pet:{c:16777215,size:.3,fall:1,base:0,gain:0}},{name:"Oto\xF1o",pine:["#6fa386","#80b496","#659a80","#8cc09d"],blos:["#d94a32","#e8702e","#f2a33a","#c43d2c"],bblos:["#d9573a","#e8803a","#f0b43a","#c9462f"],brd:["#d9533a","#e8802f","#f0b43a","#c9462f","#b8532f","#e39a4a","#cf6a3a"],gnd:"#d3a45f",gk:.32,pet:{c:15237178,size:.55,fall:1.35,base:.3,gain:.7}},{name:"Invierno",pine:["#a9c4b8","#b9d3c6","#9dbaae","#c4dccf"],blos:["#f6e3ea","#f2d3de","#fbeff3","#efc9d8"],bblos:["#f6e3ea","#fbeff3","#efc9d8","#f2d3de"],brd:["#cfd8d6","#b9c4c2","#a8b4b3","#dfe6e4","#9fa9a8","#c4cdcb","#b0bbb9"],gnd:"#eef3f8",gk:.62,pet:{c:16777215,size:.28,fall:1.1,base:.55,gain:.45}}],zi={c:15773373,c2:15044520,blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],pet:16762578};var Zb=["es","en","ja"],ni="es";try{let i=localStorage.getItem("rio3d-lang");ni=Zb.includes(i)?i:"es"}catch{}var ff=()=>ni,A0=i=>{try{localStorage.setItem("rio3d-lang",i)}catch{}},Jb=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"]],$b=new Map(Jb.map(i=>[i[0],i])),Kb=ni==="en"?1:2;var jb=[[/^Siguiente: (.+) en (\d+) m$/,i=>ni==="en"?`Next: ${Yn(i[1])} in ${i[2]} m`:`\u6B21: ${Yn(i[1])}\uFF08\u3042\u3068${i[2]} m\uFF09`],[/^Descubriste: (.+)$/,i=>ni==="en"?`You discovered: ${Yn(i[1])}`:`\u767A\u898B\uFF1A${Yn(i[1])}`],[/^Continuar \((\d+) m\)$/,i=>ni==="en"?`Continue (${i[1]} m)`:`\u7D9A\u3051\u308B\uFF08${i[1]} m\uFF09`],[/^Soltar linterna \((\d+)\)$/,i=>ni==="en"?`Release lantern (${i[1]})`:`\u30E9\u30F3\u30BF\u30F3\u3092\u6D41\u3059\uFF08${i[1]}\uFF09`],[/^Auto \(ahora ([\d.]+)×\)$/,i=>ni==="en"?`Auto (now ${i[1]}\xD7)`:`\u81EA\u52D5\uFF08\u73FE\u5728 ${i[1]}\xD7\uFF09`],[/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,i=>ni==="en"?`${i[1]}/${i[2]} places \xB7 ${Yn(i[3])} \xB7 you reached ${i[4]} m \xB7 lanterns released: ${i[5]}`:`${i[1]}/${i[2]}\u304B\u6240 \xB7 ${Yn(i[3])} \xB7 \u5230\u9054 ${i[4]} m \xB7 \u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[5]}`],[/^Linternas dejadas: (\d+)$/,i=>ni==="en"?`Lanterns left here: ${i[1]}`:`\u3053\u3053\u306B\u6B8B\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[1]}`],[/^Tu linterna del (.+)$/,i=>ni==="en"?`Your lantern from ${i[1]}`:`${i[1]}\u306E\u30E9\u30F3\u30BF\u30F3`]];function Yn(i){if(ni==="es"||typeof i!="string")return i;let t=i.trim();if(!t)return i;let e=$b.get(t);if(e)return i.replace(t,e[Kb]);for(let[n,s]of jb){let r=t.match(n);if(r)return i.replace(t,s(r))}return i}function Hh(i){if(i.nodeType===3){let e=Yn(i.nodeValue);e!==i.nodeValue&&(i.nodeValue=e);return}if(i.nodeType!==1||i.tagName==="SCRIPT"||i.tagName==="STYLE")return;i.placeholder&&(i.placeholder=Yn(i.placeholder));let t=i.getAttribute&&i.getAttribute("aria-label");if(t){let e=Yn(t);e!==t&&i.setAttribute("aria-label",e)}for(let e of i.childNodes)Hh(e)}function R0(){ni!=="es"&&(document.documentElement.lang=ni,Hh(document.body),new MutationObserver(i=>{for(let t of i)t.type==="characterData"?Hh(t.target):t.addedNodes.forEach(Hh)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0}))}function C0(i){let{R:t,scene:e,cam:n,canvas:s,el:r,toast:o,P:a,LM:c,lmFound:l,lmPos:h,LMS:u,mkLantern:d,cx:f,hw:p,A:x,SEAS:m,seasonIdx:g}=i,_={photo:!1,want:null},E={get(K,Tt){try{let ve=localStorage.getItem(K);return ve===null?Tt:ve}catch{return Tt}},set(K,Tt){try{return localStorage.setItem(K,Tt),!0}catch{return!1}},del(K){try{localStorage.removeItem(K)}catch{}}},v=m[g()],b=document.createElement("style");b.textContent=`
  .xp{position:fixed;z-index:9;background:var(--panel);border:1px solid var(--line);backdrop-filter:blur(8px);color:var(--ink);font:500 .85rem system-ui,sans-serif}
  .xm{inset:0;display:grid;place-items:center;background:rgba(20,22,46,.62);padding:16px;border:0;border-radius:0}
  .xm>div{width:min(640px,100%);max-height:88vh;overflow:auto;background:rgba(43,45,82,.97);border:1px solid var(--line);border-radius:18px;padding:16px 18px}
  .xm h2{margin:0 0 10px;font:600 1.15rem system-ui,sans-serif}
  .xm .row{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:10px 0}
  .xm select,.xm button.q{background:rgba(255,255,255,.08);color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:8px 10px;font:600 .85rem system-ui,sans-serif}
  .xm .close{position:sticky;top:0;float:right;background:transparent;border:1px solid var(--line);color:var(--ink);border-radius:99px;padding:5px 12px;cursor:pointer}
  .xgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:10px}
  .xcard{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:rgba(255,255,255,.04)}
  .xcard .im{aspect-ratio:16/10;background:#3a3d70 center/cover;display:grid;place-items:center;font-size:2rem;color:#7d82b8}
  .xcard .tx{padding:7px 9px;font-size:.78rem;line-height:1.35;color:var(--muted)}
  .xcard b{display:block;color:var(--ink);font-size:.85rem}
  .xcard.no{opacity:.55}
  #lantB{position:fixed;right:max(14px,env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:6;background:var(--panel);border:1px solid var(--lamp);color:var(--lamp);border-radius:99px;padding:9px 16px;font:700 .85rem system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(6px)}
  #xph{background:rgba(54,58,102,.55);left:0;right:0;bottom:0;padding:10px max(12px,env(safe-area-inset-right)) calc(12px + env(safe-area-inset-bottom)) max(12px,env(safe-area-inset-left));border-radius:18px 18px 0 0;display:flex;flex-direction:column;gap:9px;align-items:center}
  #xph .fr{display:flex;gap:7px;flex-wrap:wrap;justify-content:center}
  #xph .chip2{padding:6px 12px;border-radius:99px;border:1px solid var(--line);background:rgba(255,255,255,.06);color:var(--muted);font:600 .8rem system-ui,sans-serif;cursor:pointer}
  #xph .chip2.on{color:#3b2a1a;background:var(--lamp);border-color:var(--lamp)}
  #xph label{display:flex;gap:8px;align-items:center;font-size:.78rem;color:var(--muted)}
  #xph input[type=range]{width:min(34vw,200px);accent-color:#ffc77a}
  #xshut{width:64px;height:64px;border-radius:50%;border:4px solid #fff;background:rgba(255,255,255,.28);cursor:pointer;flex:none}
  #xshut:active{background:#fff}
  #xclose{position:fixed;top:max(12px,env(safe-area-inset-top));right:max(14px,env(safe-area-inset-right));z-index:9;background:var(--panel);border:1px solid var(--line);color:var(--ink);border-radius:99px;padding:8px 16px;font:700 .85rem system-ui,sans-serif;cursor:pointer}
  #xflash{position:fixed;inset:0;background:#fff;opacity:0;pointer-events:none;z-index:12;transition:opacity .45s}
  body.photo canvas{cursor:grab}
  `,document.head.appendChild(b);let M=Math.min(devicePixelRatio||1,2),A=[.7,.85,1,1.25,1.5],y=0;A.forEach((K,Tt)=>{K<=M+.001&&(y=Tt)});let T=E.get("rio3d-q","auto"),R=Math.min(y,3),P=y,N=1/60,D=0,C=5,U=0,k=0,W=0,tt=0,O={hi:1.5,mid:1,lo:.7},X=()=>_.photo?Math.min(M,1.75):Math.min(T==="auto"?A[R]:O[T]||1,M);function J(){let K=X();Math.abs(K-tt)>.01&&(tt=K,t.setPixelRatio(K),t.setSize(innerWidth,innerHeight,!1),Rt())}_.tick=function(K){if(!(document.hidden||!i.started()||_.photo)&&(K=Math.min(K,.1),N+=(K-N)*.04,D+=K,!(D<1))){if(D=0,T!=="auto"){J();return}if(C>0){C--,tt||J();return}N>.027?(k++,U=0):N<.0185?(U++,k=0):(U=0,k=0),k>=2&&R>0?(R--,k=0,C=6,W&&performance.now()-W<3e4&&(P=Math.min(P,R)),J()):U>=12&&R<Math.min(P,y)&&(R++,U=0,C=10,W=performance.now(),J())}};let mt=()=>T==="auto"?"Auto (ahora "+Math.min(A[R],M).toFixed(2)+"\xD7)":"Fija",wt={none:{n:"Sin filtro"},nat:{n:"Natural",t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},warm:{n:"C\xE1lido",t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},mist:{n:"Bruma",t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},ink:{n:"Tinta",t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},moon:{n:"Noche azul",t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}},ae=E.get("rio3d-filter","nat");wt[ae]||(ae="nat");let se=E.get("rio3d-frame","1")==="1",Yt=null,nt=new lr,ot=new Gs(-1,1,1,-1,0,1),bt=new nn({depthTest:!1,depthWrite:!1,uniforms:{tex:{value:null},px:{value:new ut},tint:{value:new L(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
    vec3 g(vec3 c){return pow(max(c,0.),vec3(.4545));}
    void main(){
      vec3 c=g(texture2D(tex,vUv).rgb),b=vec3(0.);
      for(int i=0;i<8;i++){float a=float(i)*.7854;vec2 o=vec2(cos(a),sin(a))*px;b+=g(texture2D(tex,vUv+o*7.).rgb)+g(texture2D(tex,vUv+o*16.).rgb);}
      b/=16.;c+=max(b-.5,0.)*glow;
      c*=tint;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,sat);
      c=(c-.5)*con+.5;c=mix(c,vec3(.86,.88,.95),lift);
      vec2 q=vUv-.5;c*=1.-vig*smoothstep(.22,.82,length(q*vec2(1.,.9)));
      float n=fract(sin(dot(vUv*vec2(1243.,987.)+time,vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*grain;
      c=pow(max(c,0.),vec3(2.2));gl_FragColor=vec4(c,1.);
      #include <colorspace_fragment>
    }`});nt.add(new $(new an(2,2),bt));let Ot=new ut;function Rt(){Yt&&(t.getDrawingBufferSize(Ot),(Yt.width!==Ot.x||Yt.height!==Ot.y)&&Yt.setSize(Ot.x,Ot.y))}function Jt(){if(Yt){Rt();return}t.getDrawingBufferSize(Ot);try{Yt=new Nn(Ot.x,Ot.y,{samples:4,type:fi,depthBuffer:!0})}catch{Yt=new Nn(Ot.x,Ot.y,{samples:4,depthBuffer:!0})}}_.render=function(){let K=wt[ae];if(_.photo&&K.t){Jt(),t.setRenderTarget(Yt),t.render(e,n),t.setRenderTarget(null);let Tt=bt.uniforms;Tt.tex.value=Yt.texture,Tt.px.value.set(1/Yt.width,1/Yt.height),Tt.tint.value.set(K.t[0],K.t[1],K.t[2]),Tt.sat.value=K.sat,Tt.con.value=K.con,Tt.lift.value=K.lift,Tt.vig.value=K.vig,Tt.glow.value=K.glow,Tt.grain.value=K.grain,Tt.time.value=a.t%10,t.render(nt,ot)}else t.render(e,n);if(_.want){let Tt=_.want;_.want=null;try{Tt()}catch(ve){console.error("want",ve&&ve.message)}}};let De=new L(0,1,0),rt=new L(1,0,0),ht=new fn,ft=new fn,dt=0,xt=0,Nt=1,Gt=0,$t=0,ne=1;_.camAdjust=function(){Gt+=(dt-Gt)*.25,$t+=(xt-$t)*.25,ne+=(Nt-ne)*.25,(Math.abs(Gt)>1e-4||Math.abs($t)>1e-4)&&(ht.setFromAxisAngle(De,Gt),ft.setFromAxisAngle(rt,$t),n.quaternion.premultiply(ht).multiply(ft)),Math.abs(ne-1)>.001&&(n.fov=Math.max(18,Math.min(110,n.fov*ne)),n.updateProjectionMatrix())};let B=new Map,Ae=0;s.addEventListener("pointerdown",K=>{if(_.photo&&(s.setPointerCapture(K.pointerId),B.set(K.pointerId,[K.clientX,K.clientY]),B.size===2)){let Tt=[...B.values()];Ae=Math.hypot(Tt[0][0]-Tt[1][0],Tt[0][1]-Tt[1][1])}}),s.addEventListener("pointermove",K=>{if(!_.photo||!B.has(K.pointerId))return;let Tt=B.get(K.pointerId),ve=K.clientX-Tt[0],Re=K.clientY-Tt[1];if(Tt[0]=K.clientX,Tt[1]=K.clientY,B.size===1){let re=.0045*Nt;dt-=ve*re,xt=Math.max(-1.05,Math.min(1.05,xt-Re*re))}else if(B.size===2){let re=[...B.values()],de=Math.hypot(re[0][0]-re[1][0],re[0][1]-re[1][1]);Ae>0&&(Nt=Math.max(.35,Math.min(1.35,Nt*Ae/de))),Ae=de,Ht.value=Nt}});let ge=K=>{B.delete(K.pointerId),Ae=0};s.addEventListener("pointerup",ge),s.addEventListener("pointercancel",ge),s.addEventListener("wheel",K=>{_.photo&&(Nt=Math.max(.35,Math.min(1.35,Nt*(1+Math.sign(K.deltaY)*.06))),Ht.value=Nt,K.preventDefault())},{passive:!1});let I=r("hud"),S=r("hr"),V=r("menu"),q=r("more"),et=(K,Tt,ve,Re)=>{let re=document.createElement("button");return re.id=K,re.type="button",re.textContent=Tt,ve?V.insertBefore(re,Re||null):S.insertBefore(re,Re||r("cam")),re};q.onclick=K=>{K.stopPropagation(),V.hidden=!V.hidden,q.setAttribute("aria-expanded",String(!V.hidden))},document.addEventListener("click",K=>{(!V.hidden&&!S.contains(K.target)||!V.hidden&&V.contains(K.target)&&K.target.tagName==="BUTTON"&&K.target.id!=="snd")&&(V.hidden=!0,q.setAttribute("aria-expanded","false"))});let gt=et("pauseB","Pausa");gt.dataset.pz="1";let yt=et("photoB","Foto"),it=et("diaryB","Diario",!0,r("snd")),at=et("setB","Ajustes",!0,r("snd")),St=et("restB","Reiniciar",!0),Dt=document.createElement("div");Dt.id="xph",Dt.className="xp",Dt.hidden=!0,Dt.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`,document.body.appendChild(Dt);let vt=document.createElement("button");vt.id="xclose",vt.textContent="Salir de foto",vt.hidden=!0,document.body.appendChild(vt);let _t=document.createElement("div");_t.id="xflash",document.body.appendChild(_t);let Ht=Dt.querySelector("#xzm"),Zt=Dt.querySelector("#xhr"),he=Dt.querySelector("#xfl"),z=Dt.querySelector("#xfm"),Mt={};Object.keys(wt).forEach(K=>{let Tt=document.createElement("button");Tt.className="chip2",Tt.textContent=wt[K].n,Tt.onclick=()=>{ae=K,E.set("rio3d-filter",K),st()},he.appendChild(Tt),Mt[K]=Tt});function st(){for(let K in Mt)Mt[K].classList.toggle("on",K===ae);z.classList.toggle("on",se)}z.onclick=()=>{se=!se,E.set("rio3d-frame",se?"1":"0"),st()},Dt.querySelector("#xvw").onclick=()=>i.setCam(1-i.getCam()),Ht.oninput=()=>{Nt=+Ht.value},Zt.oninput=()=>i.setTod(+Zt.value);let Et=["hud","next","hint","toast","lantB"],It=()=>[...document.body.children].filter(K=>K.tagName==="DIV"&&/pointer-events:none/.test(K.style.cssText)&&K.id!=="xflash");function lt(K){K!==_.photo&&(K&&!i.started()||(_.photo=K,document.body.classList.toggle("photo",K),Et.forEach(Tt=>{let ve=r(Tt)||document.getElementById(Tt);ve&&(ve.style.visibility=K?"hidden":"")}),It().forEach(Tt=>Tt.style.visibility=K?"hidden":""),Dt.hidden=!K,vt.hidden=!K,K?(dt=xt=0,Nt=1,Ht.value=1,Zt.value=i.getTod(),st(),J(),o("Arrastra para mirar \xB7 pellizca para acercar")):(dt=xt=0,Nt=1,B.clear(),J(),Hr())))}yt.onclick=()=>lt(!0),vt.onclick=()=>lt(!1),addEventListener("keydown",K=>{K.code==="KeyP"&&lt(!_.photo),K.code==="Escape"&&_.photo&&lt(!1),K.code==="Enter"&&_.photo&&Vt()});function Vt(){_.want=()=>{_t.style.transition="none",_t.style.opacity=.9,requestAnimationFrame(()=>{_t.style.transition="opacity .5s",_t.style.opacity=0});let K=s.width,Tt=s.height,ve=s;if(se){let Re=Math.round(K*.03),re=Math.round(K*.065),de=document.createElement("canvas");de.width=K+2*Re,de.height=Tt+Re+re;let te=de.getContext("2d");te.fillStyle="#f3ead6",te.fillRect(0,0,de.width,de.height),te.drawImage(s,Re,Re,K,Tt);let Bn=i.nearLM(a.dist||0),_i=Math.round(re*.4);te.fillStyle="#5a4a3c",te.font=_i+"px Georgia,serif",te.textBaseline="middle",te.fillText("R\xEDo 3D"+(Bn?"  \xB7  "+Yn(Bn):""),Re,Tt+Re+re*.52),te.textAlign="right",te.fillStyle="#8a7a68",te.fillText(Math.round(a.dist||0)+" m  \xB7  "+Yn(v.name)+"  \xB7  "+Yn(i.todName(i.getTod())),de.width-Re,Tt+Re+re*.52),ve=de}ve.toBlob(Re=>{if(!Re)return;let re=new File([Re],"rio3d-"+Date.now()+".jpg",{type:"image/jpeg"}),de=()=>{let te=document.createElement("a");te.href=URL.createObjectURL(Re),te.download=re.name,document.body.appendChild(te),te.click(),setTimeout(()=>{URL.revokeObjectURL(te.href),te.remove()},4e3)};navigator.canShare&&navigator.canShare({files:[re]})?navigator.share({files:[re],title:"R\xEDo 3D"}).catch(te=>{te&&te.name!=="AbortError"&&de()}):de()},"image/jpeg",.92)}}Dt.querySelector("#xshut").onclick=Vt;let Bt=K=>"rio3d-snap-"+K,He=new Set;for(let K=0;K<c.length;K++)E.get(Bt(K),null)&&He.add(K);_.hasSnap=K=>He.has(K),_.snap=function(K){_.want=()=>{let ve=Math.round(420*s.height/s.width),Re=document.createElement("canvas");Re.width=420,Re.height=ve,Re.getContext("2d").drawImage(s,0,0,420,ve);let re=Re.toDataURL("image/jpeg",.72);E.set(Bt(K),re)&&(He.add(K),E.set("rio3d-snapd-"+K,new Date().toISOString().slice(0,10)))}},_.found=K=>{E.get("rio3d-snapd-"+K,null)||E.set("rio3d-snapd-"+K,new Date().toISOString().slice(0,10))};let Ne=K=>K?new Date(K+"T12:00:00").toLocaleDateString(ff(),{day:"numeric",month:"short"}):"",Vn=K=>{let Tt=document.createElement("div");return Tt.className="xp xm",Tt.innerHTML='<div><button class="close">Cerrar</button>'+K+"</div>",Tt.onclick=ve=>{(ve.target===Tt||ve.target.classList.contains("close"))&&Tt.remove()},document.body.appendChild(Tt),Tt};it.onclick=()=>{let K=oi(),Tt=new Array(c.length).fill(0);K.forEach(re=>{let de=Math.round((re.s-240)/u);Tt[i.lmType(de)]++});let ve=+E.get("rio3d-pos","0"),Re='<h2>Diario del r\xEDo</h2><p style="margin:0 0 12px;color:var(--muted)">'+l.size+"/"+c.length+" lugares \xB7 "+v.name+" \xB7 llegaste hasta "+ve+" m \xB7 linternas soltadas: "+K.length+'</p><div class="xgrid">';c.forEach((re,de)=>{let te=l.has(de),Bn=te&&E.get(Bt(de),null);Re+='<div class="xcard'+(te?"":" no")+'"><div class="im"'+(Bn?' style="background-image:url('+Bn+')"':"")+">"+(Bn?"":te?"?":"\xB7")+'</div><div class="tx"><b>'+(te?re:"A\xFAn por descubrir")+"</b>"+(te?Bn?Ne(E.get("rio3d-snapd-"+de,"")):"Vuelve a pasar para fotografiarlo":"Sigue r\xEDo abajo")+(Tt[de]?"<br>Linternas dejadas: "+Tt[de]:"")+"</div></div>"}),Vn(Re+"</div>")};let oi=()=>{try{return JSON.parse(E.get("rio3d-left","[]"))||[]}catch{return[]}},cs=oi(),Br=new Map,Ko=[],Or=new Set,Rs=document.createElement("button");Rs.id="lantB",document.body.appendChild(Rs),Rs.hidden=!0;function Hr(){let K=i.getCount();Rs.hidden=!(i.started()&&K>0&&!_.photo),Rs.textContent="Soltar linterna ("+K+")"}Rs.onclick=()=>{if(i.getCount()<=0||_.photo)return;let K=-a.pz+7,Tt=Math.max(-p(K)+4,Math.min(p(K)-4,a.px+Math.sin(a.psi)*7-f(K)));cs.push({s:Math.round(K*10)/10,e:Math.round(Tt*10)/10,t:Date.now()}),cs.length>80&&cs.shift(),E.set("rio3d-left",JSON.stringify(cs)),i.setCount(i.getCount()-1);try{x.plop(0)}catch{}i.spawnRipple(f(K)+Tt,-K),Hr(),cs.length===1&&o("Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.")},_.update=function(K,Tt){if(!i.started())return;wc(K),((_.update.n=(_.update.n||0)+1)&15)===0&&Hr();let ve=a.t,Re=i.glowK();for(let[re,de]of Br){let te=cs[re];(!te||te.s<Tt-70||te.s>Tt+280)&&(e.remove(de),Ko.push(de),Br.delete(re))}cs.forEach((re,de)=>{if(re.s<Tt-70||re.s>Tt+280)return;let te=Br.get(de);te||(te=Ko.pop()||d(),te.scale.setScalar(1.25),te.userData.body.material=te.userData.body.material.clone(),te.userData.body.material.color.set(16773328),e.add(te),Br.set(de,te)),te.position.set(f(re.s)+re.e+Math.sin(ve*.3+de)*.5,Math.sin(ve*1.1+de)*.04,-re.s),te.rotation.z=Math.sin(ve*.8+de*2)*.08,te.userData.glow.material.opacity=(.6+.3*Re)*(.85+.15*Math.sin(ve*3+de)),te.userData.refl.material.opacity=(.3+.3*Re)*(.9+.1*Math.sin(ve*2+de));let Bn=te.position.x-a.px,_i=te.position.z-a.pz;Bn*Bn+_i*_i<196&&!Or.has(de)&&!_.photo&&(Or.add(de),o("Tu linterna del "+Ne(new Date(re.t).toISOString().slice(0,10))))})},St.onclick=()=>{let K=Vn('<h2>\xBFVolver al inicio del r\xEDo?</h2><p style="color:var(--muted);margin:0 0 14px">Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.</p><div class="row"><button class="q" id="xno">Cancelar</button><button class="q" id="xyes" style="background:#ffc77a;color:#3b2a1a">Reiniciar recorrido</button></div>');K.querySelector("#xno").onclick=()=>K.remove(),K.querySelector("#xyes").onclick=()=>{K.remove(),i.restart()}},at.onclick=()=>{let K=Vn(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Autom\xE1tica</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (m\xE1s fluida)</option></select></div>
    <div class="row"><span>Volumen</span><input type="range" id="xv" min="0" max="1" step=".05" style="width:55%;accent-color:#ffc77a"></div>
    <div class="row"><span>Estaci\xF3n<br><small style="color:var(--muted)">Cambiarla recarga el r\xEDo</small></span><select id="xs"><option value="auto">Seg\xFAn la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Oto\xF1o</option><option value="3">Invierno</option></select></div>
    <div class="row"><span>Idioma</span><select id="xl"><option value="es">Espa\xF1ol</option><option value="en">English</option><option value="ja">\u65E5\u672C\u8A9E</option></select></div>
    <div class="row"><span>Subt\xEDtulos de ambiente<br><small style="color:var(--muted)">Describe los sonidos con texto</small></span><select id="xsub"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Vibraci\xF3n suave<br><small style="color:var(--muted)">Si tu dispositivo la permite</small></span><select id="xhp"><option value="1">S\xED</option><option value="0">No</option></select></div>
    <div class="row"><span>Modo una mano<br><small style="color:var(--muted)">Botones al alcance del pulgar</small></span><select id="xh"><option value="0">No</option><option value="r">Derecha</option><option value="l">Izquierda</option></select></div>`),Tt=K.querySelector("#xq"),ve=K.querySelector("#xs"),Re=K.querySelector("#xql"),re=K.querySelector("#xv");re.value=x.vol,re.oninput=()=>{x.setVol(+re.value),E.set("rio3d-vol",re.value)},Tt.value=T,ve.value=E.get("rio3d-season","auto"),Re.textContent=mt(),Tt.onchange=()=>{T=Tt.value,E.set("rio3d-q",T),C=3,J(),Re.textContent=mt()},ve.onchange=()=>{E.set("rio3d-season",ve.value);try{i.savePos()}catch{}location.reload()};let de=K.querySelector("#xl");de.value=ff(),de.onchange=()=>{A0(de.value);try{i.savePos()}catch{}location.reload()};let te=K.querySelector("#xsub");te.value=E.get("rio3d-subs","0"),te.onchange=()=>E.set("rio3d-subs",te.value);let Bn=K.querySelector("#xhp");Bn.value=E.get("rio3d-hap","1"),Bn.onchange=()=>E.set("rio3d-hap",Bn.value);let _i=K.querySelector("#xh");_i.value=E.get("rio3d-hand","0"),_i.onchange=()=>{E.set("rio3d-hand",_i.value),document.body.classList.remove("hand-r","hand-l"),_i.value!=="0"&&document.body.classList.add("hand-"+_i.value)}};{let K=parseFloat(E.get("rio3d-vol","1"));K>=0&&K<=1&&(x.vol=K)}let xi=E.get("rio3d-ob","0")==="1"?9:0,Fn=0,Gi=r("hint");function wc(K){xi>=9||!i.started()||(Fn+=K,xi===0&&Fn>1?(Gi.hidden=!1,Gi.style.opacity=1,Gi.textContent="Mant\xE9n presionado y desliza a los lados para dirigir la canoa",xi=1,Fn=0):xi===1&&(Math.abs(a.steer)>.35||Fn>40)?(xi=2,Fn=0,Gi.textContent="Las luces sobre el agua son linternas: pasa cerca para recogerlas"):xi===2&&(i.getCount()>0||Fn>60)?(xi=3,Fn=0,Gi.textContent="Con Foto puedes guardar un momento; con Diario ves tus lugares"):xi===3&&Fn>10&&(Gi.style.opacity=0,xi=9,E.set("rio3d-ob","1")))}return bt.uniforms.time.value=0,J(),st(),addEventListener("resize",()=>setTimeout(Rt,50)),_}(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},t=document.createElement("style");t.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(t);let e=document.createElement("div");e.id="pz",e.hidden=!0,e.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(e);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,e.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,o){if(r=r.filter(Boolean),!s||!r.length)return;let a=document.createElement("style");a.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(a);let c=document.createElement("button");c.type="button",c.textContent=o||"M\xE1s",c.className=r[0].className||"",c.id="pzMoreB";let l=document.createElement("div");return l.id="pzMore",l.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),l.appendChild(h)}),s.appendChild(c),document.body.appendChild(l),c.onclick=h=>{if(h.stopPropagation(),l.hidden=!l.hidden,!l.hidden){let u=c.getBoundingClientRect();l.style.top=u.bottom+6+"px",l.style.right=Math.max(8,innerWidth-u.right)+"px"}},document.addEventListener("click",h=>{!l.hidden&&!l.contains(h.target)&&h.target!==c&&(l.hidden=!0)}),addEventListener("resize",()=>{l.hidden=!0}),c},e.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();var Q=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Fe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Be=(i,t,e)=>{let n=Fe((e-i)/(t-i));return n*n*(3-2*n)},_r=(i,t,e)=>i+(t-i)*e;function sn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Q(e,n),l=Q(e+1,n),h=Q(e,n+1),u=Q(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}var We=i=>document.getElementById(i),pf=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Io=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=6.2832;for(;e<-Math.PI;)e+=6.2832;return e};var tc=11,Qb=[0,1,2,4,5,6,7,8,9,3,10],Ke=i=>Qb[(i%tc+tc)%tc],tS=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if(Ke(n)===6){let s=240+n*260+Q(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},ie=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+tS(i),be=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),xn=i=>Math.atan((ie(i+1)-ie(i-1))/2);function Zn(i,t){let e=Math.abs(i-ie(t))-be(t);if(e<0)return-1.5+1.7*Be(-5,0,e);let n=sn(i*.018,t*.018)*12+sn(i*.055,t*.055)*4;return eS(i,t,.2+.6*Be(0,4,e)+n*Be(5,60,e)+Math.min(e,160)*.1*Be(30,100,e))}var oe={PO:66,PH:7,X:66,ZF:44,ZB:-52,MZ0:50,MZ1:60},P0=new Map;function mf(i){let t=P0.get(i);if(!t){let e=rn(i),n=xn(e);t={k:i,s0:e,a:n,x0:ie(e),hw0:be(e),side:Q(i,9)>.5?1:-1,ca:Math.cos(n),sa:Math.sin(n)},P0.set(i,t)}return t}function ec(i,t,e){let n=t-i.x0,s=i.s0-e,r=n*i.ca+s*i.sa,o=-n*i.sa+s*i.ca;return[i.side*o,-i.side*r+i.hw0+oe.PO]}function yr(i){let t=Math.round((i-240)/260);for(let e=t-1;e<=t+1;e++)if(Ke(e)===10)return mf(e);return null}function eS(i,t,e){let n=yr(t);if(!n||Math.abs(t-n.s0)>200)return e;let[s,r]=ec(n,i,t);if(r<-130||r>95||Math.abs(s)>150)return e;let o=Math.max(Math.abs(s)-oe.X,r-oe.ZF,oe.ZB-r),a=1-Be(4,70,o);a>0&&(e=e*(1-a)+Math.min(e,3.2)*a);let c=1-Be(0,2,o+1.5);c>0&&(e=e*(1-c)+oe.PH*c);let l=Math.min(Math.max(Math.abs(s)-62,Math.abs(r-53)-7),Math.max(Math.abs(s+50)-6,Math.abs(r-65)-10)),h=1-Be(-.2,2.2,l);return h>0&&(e=e*(1-h)-1.6*h),e}function I0(i,t){let e=yr(t);if(!e||Math.abs(t-e.s0)>130)return 0;let[n,s]=ec(e,i,t);return 1-Be(0,2,Math.max(Math.abs(n)-oe.X,s-oe.ZF,oe.ZB-s)+1.5)}function gf(i,t){let e=yr(t);if(!e||Math.abs(t-e.s0)>130)return!1;let[n,s]=ec(e,i,t);return Math.abs(n)<80&&s>-66&&s<72}function Lo(i){let t=rn(i),e=rn(i-1);return e-80>=t-360?e-80:e+80}var Jn=150,$n=120,is=2.6,Kn=3,nc=8,Un=Oh[Zs()],Ti=260,rn=i=>240+i*Ti+Q(i,5)*50,vr=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++){let s=Ke(n);s===3?t=Math.max(t,1-Be(40,170,Math.abs(rn(n)-i))):s===10&&(t=Math.max(t,.9*(1-Be(55,230,Math.abs(rn(n)-i)))))}return t},Do=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)Ke(n)===8&&(t=Math.max(t,1-Be(70,190,Math.abs(rn(n)-i))));return t},xf=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=Ke(n);if((s===5||s===7)&&Math.abs(rn(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},No=i=>Be(.4,.55,sn(i*.0022+31,5)*.6+sn(i*.0053+8,2)*.4),zh=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+Q(n,7)*220,r=120+Q(n,8)*70,o=(i-s)/r;t=Math.max(t,Math.exp(-o*o))}return t};var ct={tod:.5,glowK:.3,started:!1,camMode:0,camK:0,count:0,scareT:0,cine:null,cineW:0,savedS:0,X:null},F={px:ie(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};F.pz=-30;F.px=ie(30);F.psi=xn(30);function kh(i){F.pz=-i,F.px=ie(i),F.psi=xn(i),F.dist=i}function L0(){ct.cine&&ct.cine.t>1.5&&(ct.cine.t=Math.max(ct.cine.t,ct.cine.dur-2.4))}var vs=document.getElementById("c"),ss=new Uh({canvas:vs,antialias:!0,powerPreference:"high-performance"});ss.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var At=new lr;At.fog=new _a(13421772,22,250);var pn=new gn(68,1,.05,900);function _f(){let i=innerWidth,t=innerHeight;ss.setSize(i,t,!1),pn.aspect=i/t,pn.fov=i/t<1?82:68,pn.updateProjectionMatrix()}addEventListener("resize",_f);addEventListener("orientationchange",()=>setTimeout(_f,250));_f();document.addEventListener("visibilitychange",()=>{try{ce.ctx&&(document.hidden?ce.ctx.suspend():ce.on&&!PZ.on&&ce.ctx.resume())}catch{}});var Mr=new Ua(16777215,9083528,1.2);At.add(Mr);var Ms=new Ha(16777215,1);At.add(Ms);var jn=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Fi(i)})(),ii=(i,t)=>{let e=new xs(new Qi({map:jn,color:i,blending:kn,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},Xt=(i,t)=>new _e(Object.assign({gradientMap:Ie,color:i},t||{}));var wi=new $(new pe(700,24,16),new nn({side:Tn,depthWrite:!1,fog:!1,uniforms:{top:{value:new pt},hor:{value:new pt},sunDir:{value:new L(0,1,0)},sunCol:{value:new pt},glow:{value:1}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,hor,sunDir,sunCol;uniform float glow;
  void main(){vec3 d=normalize(vP);float h=d.y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5));
   float s=max(dot(d,normalize(sunDir)),0.);c+=sunCol*(pow(s,18.)*.45+pow(s,200.)*.6)*glow;
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));wi.renderOrder=-10;At.add(wi);var Mf=ii(16769712,140),bf=ii(14673663,70);At.add(Mf,bf);var D0=new ue,N0=new Float32Array(450*3);for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);N0.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3)}D0.setAttribute("position",new Kt(N0,3));var Sf=new bi(D0,new li({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));At.add(Sf);var Uo=(i,t,e,n,s,r,o,a,c)=>({t:i,top:new pt(t),hor:new pt(e),fog:new pt(n),sun:new pt(s),hi:r,si:o,night:a,hg:new pt(c)}),Gh=[Uo(0,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70"),Uo(.12,"#8fa4d8","#f6c7c0","#efcfcf","#ffd2a8",1.4,.5,.2,"#c4ccc0"),Uo(.35,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0"),Uo(.6,"#7e79c2","#f9bd9c","#e8b9b3","#ffb98a",1.5,.8,.1,"#c8c4c0"),Uo(.75,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70"),Uo(1,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70")],Se={top:new pt,hor:new pt,fog:new pt,sun:new pt,hg:new pt,hi:1,si:1,night:0};function nS(i){let t=0;for(;t<Gh.length-2&&i>Gh[t+1].t;)t++;let e=Gh[t],n=Gh[t+1],s=Fe((i-e.t)/(n.t-e.t));["top","hor","fog","sun","hg"].forEach(r=>Se[r].copy(e[r]).lerp(n[r],s)),Se.hi=_r(e.hi,n.hi,s),Se.si=_r(e.si,n.si,s),Se.night=_r(e.night,n.night,s)}var yf=new L,vf=new L;function U0(i,t){nS(ct.tod);let e=Math.sin(Math.PI*2*(ct.tod-.12));yf.set(.25,e,-.9).normalize(),vf.set(-.25,-e*.9+.05,-.9).normalize(),At.fog.color.copy(Se.fog),wi.material.uniforms.top.value.copy(Se.top),wi.material.uniforms.hor.value.copy(Se.hor);let n=e>0,s=n?yf:vf;wi.material.uniforms.sunDir.value.copy(s),wi.material.uniforms.sunCol.value.copy(Se.sun),wi.material.uniforms.glow.value=n?1:.5,Mr.color.copy(Se.hor).lerp(Se.top,.4),Mr.groundColor.copy(Se.hg),Mr.intensity=Se.hi,Ms.color.copy(Se.sun),Ms.intensity=Se.si,Ms.position.copy(s).multiplyScalar(100).add(new L(i,0,t)),Ms.target.position.set(i,0,t),Ms.target.updateMatrixWorld(),wi.position.set(i,0,t),Mf.position.set(i,0,t).addScaledVector(yf,640),bf.position.set(i,0,t).addScaledVector(vf,640),Mf.material.opacity=Fe(e*4+.2,0,1),bf.material.opacity=Fe(-e*4,0,1)*.9,Sf.position.set(i,0,t),Sf.material.opacity=Fe(Se.night*1.1,0,1),pi.material.uniforms.sunDir.value.copy(s),pi.material.uniforms.sunCol.value.copy(Se.sun).multiplyScalar(Fe(n?e*3:-e*1.5,0,1)),pi.material.uniforms.hor.value.copy(Se.hor),pi.material.uniforms.top.value.copy(Se.top),pi.material.uniforms.fog.value.copy(Se.fog),pi.material.uniforms.night.value=Se.night,ct.glowK=Fe(Se.night*1.2+.25,0,1)}var Vh=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",pi=new $(new an(1e3,1e3),new nn({uniforms:{t:{value:0},deep:{value:new pt("#5a8f9c")},shallow:{value:new pt("#a3c8c4")},hor:{value:new pt},top:{value:new pt},fog:{value:new pt},sunDir:{value:new L(0,1,0)},sunCol:{value:new pt},night:{value:0},fogN:{value:22},fogF:{value:250}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,night,fogN,fogF;uniform vec3 deep,shallow,hor,top,fog,sunDir,sunCol;
  float hh(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
  float wn(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(hh(i),hh(i+vec2(1,0)),f.x),mix(hh(i+vec2(0,1)),hh(i+vec2(1,1)),f.x),f.y);}
  void main(){
    vec2 p=vW.xz;
    float dx=cos(p.x*.35+t*.8)*.05+cos(p.x*.9+p.y*.6-t*1.3)*.03+cos(p.y*.25+t*.5)*.03+cos(p.x*2.1+p.y*1.3+t*1.9)*.012;
    float dz=cos(p.y*.4+t*.7)*.05+cos(p.y*.8-p.x*.5+t*1.1)*.03+cos(p.x*.3-t*.6)*.03+cos(p.y*2.3-p.x*1.1+t*1.7)*.012;
    vec3 n=normalize(vec3(-dx*.6,1.,-dz*.6));
    vec3 v=normalize(cameraPosition-vW);float dist=length(cameraPosition-vW);
    float fr=pow(1.-max(dot(n,v),0.),3.);
    vec3 base=mix(deep,shallow,.5+.5*sin(p.x*.05+p.y*.04+t*.1));
    base*=mix(1.,.45,night);
    vec3 refl=mix(hor,top,.35);
    float st=wn(vec2(p.x*.07+t*.02,p.y*1.5+t*.25)),st2=wn(vec2(p.x*.16-t*.03,p.y*3.1-t*.4));
    float streak=smoothstep(.62,.9,st)*.55+smoothstep(.66,.92,st2)*.4;
    float dk=smoothstep(.55,.2,wn(vec2(p.x*.05,p.y*.9+t*.15)));
    base=mix(base,base*.78,dk*.6);
    vec3 c=mix(base,refl,clamp(fr*.9+.26,0.,1.));
    c=mix(c,mix(hor,vec3(1.),.55),streak*(1.-night*.7)*.38);
    float sp=smoothstep(.93,1.,wn(p*2.6+vec2(t*.5,-t*.3)));c+=sunCol*sp*.9;
    vec3 h=normalize(sunDir+v);c+=sunCol*pow(max(dot(n,h),0.),90.)*1.4;
    c=mix(c,fog,smoothstep(fogN,fogF,dist));
    gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));pi.rotation.x=-Math.PI/2;At.add(pi);function bs(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ue,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=F0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=F0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function F0(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Kt(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ef=new Float32Array(Jn*$n*3),Tf=new Float32Array(Jn*$n*3),Js=new ue;Js.setAttribute("position",new Kt(Ef,3));Js.setAttribute("color",new Kt(Tf,3));{let i=new Uint16Array((Jn-1)*($n-1)*6),t=0;for(let e=0;e<$n-1;e++)for(let n=0;n<Jn-1;n++){let s=e*Jn+n,r=s+1,o=s+Jn,a=o+1;i.set([s,r,o,r,a,o],t),t+=6}Js.setIndex(new Kt(i,1))}var B0=new $(Js,new _e({vertexColors:!0,gradientMap:Ie}));B0.frustumCulled=!1;At.add(B0);var O0=new pt("#eadcb9"),H0=new pt("#b6dca3"),z0=new pt("#8fc79b"),k0=new pt("#bdd6c8"),G0=new pt("#d3cce9"),V0=new pt("#c8d6c0"),W0=new pt("#d9b45f"),X0=new pt("#c8964a"),q0=new pt("#f6c9d8"),Y0=new pt("#d9d2bf"),Je=new pt,ic=1900;function Z0(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let l=0;l<s.count;l++)s.setXY(l,s.getX(l)*t[0],s.getY(l)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,o=i.boundingBox.max.y,a=i.attributes.position,c=new Float32Array(a.count*3);for(let l=0;l<a.count;l++){let h=e+(n-e)*((a.getY(l)-r)/(o-r||1));c[l*3]=c[l*3+1]=c[l*3+2]=h}return i.setAttribute("color",new Kt(c,3)),i}var J0=bs([[2,2.6,.8],[1.6,2.5,2.4],[1.2,2.3,3.9],[.75,2,5.3]].map(([i,t,e])=>Z0(new Oe(i,t,8,1).translate(0,e+t/2,0),[4,2],.72,1.18)).map(i=>(i.deleteAttribute("normal"),i)));J0.computeVertexNormals();var $0=bs([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3]].map(([i,t,e,n])=>{let s=new Mn(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),Z0(s,[3,3],.82,1.22)}));$0.computeVertexNormals();var iS=()=>new _e({gradientMap:Ie,color:16777215,vertexColors:!0,map:Ye("leaf")}),sc=new Pn(J0,new _e({gradientMap:Ie,color:16777215,vertexColors:!0,map:Ye("needle")}),ic),br=new Pn($0,iS(),ic),rc=new Pn(new Le(.2,.34,4.2,6).translate(0,2.1,0),new _e({gradientMap:Ie,color:9071196,map:Ye("bark")}),ic),oc=new Pn(new hi(.7,10).rotateX(-Math.PI/2),new _e({gradientMap:Ie,color:16777215}),500),ac=new Pn(new Mn(.28,0).translate(0,.2,0),new _e({gradientMap:Ie,color:16777215}),160);[sc,br,rc,oc,ac].forEach(i=>{i.frustumCulled=!1,At.add(i)});var wf={value:0};function sS(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=wf,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var Af=(()=>{let i=[];for(let t=0;t<9;t++){let e=t/9*6.28+Q(t,1),n=.9+Q(t,2)*1.3,s=.07,r=Math.cos(e)*.25*Q(t,3),o=Math.sin(e)*.25*Q(t,3),a=(Q(t,4)-.5)*.9,c=new ue,l=new Float32Array([-s,0,0,s,0,0,a*.5-s*.5,n*.6,0,a*.5+s*.5,n*.6,0,a,n,0]);c.setAttribute("position",new Kt(l,3)),c.setIndex([0,1,2,1,3,2,2,3,4]),c.computeVertexNormals();let h=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((d,f)=>h.set(d,f*3)),c.setAttribute("color",new Kt(h,3)),c.rotateY(e),c.translate(r,0,o),i.push(c)}return bs(i)})(),Ss=new Pn(Af,sS(new _e({gradientMap:Ie,color:16777215,vertexColors:!0,side:me})),1400),rS=(()=>{let i=[],t=new Le(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new Kt(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,o])=>{let a=new pe(1,9,5).toNonIndexed();a.scale(o,o*.28,o),a.translate(n,s,r);let c=a.attributes.position,l=new Float32Array(c.count*3);for(let h=0;h<c.count;h++){let u=.62+.4*Fe((c.getY(h)-s)/(o*.28)*.5+.5);l[h*3]=u*.9,l[h*3+1]=u,l[h*3+2]=u*.92}a.setAttribute("color",new Kt(l,3)),a.deleteAttribute("uv"),i.push(a)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),bs(i)})(),cc=new Pn(rS,new _e({gradientMap:Ie,color:16777215,vertexColors:!0}),400);[Ss,cc].forEach(i=>{i.frustumCulled=!1,At.add(i)});var K0=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],Wh=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],je=new Me,bn=new fn,Sn=new L,un=new L,Es=new L(0,1,0),j0=new pt(Un.gnd),Q0=Un.pine,tg=Un.blos,eg=zi.blos,ng=zi.bblos,Fo=new Pn(new Mn(1,1).scale(1,.72,1).translate(0,.45,0),new _e({gradientMap:Ie,color:16777215,map:Ye("leaf")}),1700);Fo.frustumCulled=!1;At.add(Fo);var ig=["#6fa383","#7fb592","#5f957a","#8cc09a"],A2=Un.bblos,oS=(()=>{let i=new Le(.11,.15,1,5,8,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=Math.round(s*8)%3===0?.68:1;e[n*3]=r,e[n*3+1]=r,e[n*3+2]=r*.95}return i.setAttribute("color",new Kt(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),lc=new Pn(oS,new _e({gradientMap:Ie,color:16777215,vertexColors:!0}),2e3),hc=new Pn(new Mn(1,0).scale(1,.5,1),new _e({gradientMap:Ie,color:16777215}),2e3);[lc,hc].forEach(i=>{i.frustumCulled=!1,At.add(i)});var sg=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],rg=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],Rf=Un.brd,og=new pt("#9ccf8a");var uc={a:1e9,b:1e9},Xh=new Float32Array(Jn*$n*3),qh=new Float32Array(Jn*$n*3),ag=new Map;function Pf(i){let t=ag.get(i);if(!t){let e=i.instanceMatrix.array.length;t={m:new Float32Array(e),c:new Float32Array(e/16*3)},ag.set(i,t)}return t}var Ai=(i,t,e)=>{e.toArray(Pf(i).m,t*16)},rs=(i,t,e)=>{let n=Pf(i);n.hc=1;let s=n.c;s[t*3]=e.r,s[t*3+1]=e.g,s[t*3+2]=e.b};function aS(i,t){let e=Pf(i);i.instanceMatrix.array.set(e.m.subarray(0,t*16)),i.instanceMatrix.needsUpdate=!0,e.hc&&(i.instanceColor||i.setColorAt(0,Je),i.instanceColor.array.set(e.c.subarray(0,t*3)),i.instanceColor.needsUpdate=!0),i.count=t}function*cS(i,t){let e=[],n=i-Jn/2*is,s=t-60,r=0,o=0,a=0,c=0,l=0,h=0,u=0,d=0;for(let x=0;x<$n;x++){x%5===0&&(yield);let m=s+x*Kn,g=Do(m),_=vr(m),E=No(m);for(let v=0;v<Jn;v++){let b=n+v*is,M=Zn(b,m),A=(x*Jn+v)*3;Xh[A]=b,Xh[A+1]=M,Xh[A+2]=-m;let y=Math.abs(b-ie(m))-be(m),T=sn(b*.05,m*.05),R=(Q(v+n,x)-.5)*.05;if(y<0)Je.copy(V0);else{if(Je.copy(H0).lerp(z0,T),Je.lerp(O0,1-Be(.5,3.5,y)),Je.lerp(k0,Be(6,13,M)*.8),Je.lerp(G0,Be(13,24,M)),g>0&&Je.lerp(og,g*Be(0,5,y)*.65),Un.gk&&Je.lerp(j0,Un.gk*Be(.4,3,y)*(1-g*.6)),_>.05){let P=sn(b*.11+3,m*.11+7);P>.5&&Je.lerp(q0,_*Be(.5,.8,P)*.42*Be(.4,3,y))}{let P=I0(b,m);P>0&&Je.lerp(Y0,P*.9)}{let P=sn(b*.03+50,m*.03+20),N=Be(.5,.72,P)*Be(.4,2.5,y)*(1-Be(9,26,y));N>0&&Je.lerp(sn(b*.2,m*.2)>.5?W0:X0,N*.85)}}if(qh[A]=Je.r+R,qh[A+1]=Je.g+R,qh[A+2]=Je.b+R,y>5&&M<17&&o<ic&&!xf(m,y)&&!gf(b,m)){let P=Q(b*3.1,m*1.7),N=.05*(.5+sn(b*.03+9,m*.03))*(y<34?.75:1)+(y<36?(.05+.09*E)*(1-y/44):0)*(.6+.8*sn(b*.07,m*.07))+(y<60?_*.11*(1-y/70):0);if(P<N*(1-g*.92)){let D=(Q(b,m)-.5)*is*.9,C=(Q(m,b)-.5)*Kn*.9,U=.8+Q(b+4,m+1)*.9;Sn.set(b+D,Zn(b+D,m+C)-.1,-(m+C)),bn.setFromAxisAngle(Es,Q(m,b)*6.28);let k=Q(b*.7,m*.3);y<60&&k<.04+_*.95?(un.set(U,U,U),je.compose(Sn,bn,un),Ai(br,a,je),Ai(rc,a,je),rs(br,a,Je.set((k<_*.95?eg:tg)[Q(b,m+3)*4|0])),a++):Q(b*1.1,m*1.7)<.3?(un.set(U*1.05,U*(.9+Q(m,5)*.5),U*1.05),je.compose(Sn,bn,un),Ai(br,a,je),Ai(rc,a,je),rs(br,a,Je.set(Rf[Q(b,m+7)*Rf.length|0])),a++):Q(b*1.9,m*.8)>.55&&l<400?(un.set(U*1.2,U*1.2,U*1.2),je.compose(Sn,bn,un),Ai(cc,l,je),rs(cc,l,Je.set(K0[Q(b+5,m)*4|0])),l++):(un.set(U,U*(.9+Q(m,3)*1.1),U),je.compose(Sn,bn,un),Ai(sc,c,je),rs(sc,c,Je.set(Q0[Q(b+2,m)*4|0])),c++),o++}}}}for(let x=0;x<$n;x++){x%5===0&&(yield);let m=s+x*Kn,g=vr(m),_=Do(m);for(let E=0;E<Jn;E+=1){let v=n+E*is,b=Math.abs(v-ie(m))-be(m);if(b<2.2||b>55||u>=1700||xf(m,b)||gf(v,m)||Zn(v,m)>15||Q(v*2.3+1,m*1.3)>(.05+g*.2)*(1-_*.8))continue;let y=(Q(v,m+9)-.5)*is,T=(Q(m,v+9)-.5)*Kn,R=.7+Q(v+8,m)*.9+g*.3;Sn.set(v+y,Zn(v+y,m+T)-.1,-(m+T)),bn.setFromAxisAngle(Es,Q(m,v)*6.28),un.set(R*1.2,R,R*1.1),je.compose(Sn,bn,un),Ai(Fo,u,je),rs(Fo,u,Je.set(g>.25&&Q(v,m+5)<.55?ng[Q(v,m)*4|0]:ig[Q(m,v+2)*4|0])),u++}}for(let x=0;x<$n;x++){x%5===0&&(yield);let m=s+x*Kn,g=Do(m);if(!(g<.02))for(let _=0;_<Jn;_++){let E=n+_*is,v=ie(m),b=Math.abs(E-v)-be(m);if(!(b<.3||b>26||d>=1990))for(let M=0;M<2;M++){if(Q(E*3.7+M*5,m*2.9+M)>g*(1.05-b*.012))continue;let A=(Q(E+M,m+3)-.5)*is,y=(Q(m+M,E+3)-.5)*Kn,T=E+A,R=m+y,P=11+Q(T,R)*12,N=.8+Q(R,T)*.6,D=.05+Q(T*2,R)*.14,C=T>v?1:-1,U=Zn(T,R)-.3;Sn.set(T,U,-R),bn.setFromAxisAngle(new L(0,0,1),C*D),un.set(N,P,N),je.compose(Sn,bn,un),Ai(lc,d,je),rs(lc,d,Je.set(sg[Q(T,R+1)*4|0]));let k=T-C*Math.sin(D)*P,W=U+Math.cos(D)*P;Sn.set(k,W,-R),bn.identity();let tt=1.5+Q(R,T+4)*1.6;un.set(tt,tt,tt),je.compose(Sn,bn,un),Ai(hc,d,je),rs(hc,d,Je.set(rg[Q(T+2,R)*4|0])),d++}}}e.push([lc,d],[hc,d]),e.push([Fo,u]);for(let x=0;x<$n;x++){x%5===0&&(yield);let m=s+x*Kn;for(let g=0;g<4;g++){let _=g%2?1:-1;if(Q(m*.53,g+3)>.62||h>=1400)continue;let E=g>1&&Q(m,g+9)>.6,v=be(m)+_*0+(E?-(1.5+Q(m,g+1)*4):-.3+Q(m,g+2)*3.4),b=ie(m)+_*v,M=-(m+(Q(m,g)-.5)*Kn);if(E&&Math.abs(b-ie(m))>be(m)-1.5)continue;let A=.7+Q(m+g,7)*.9;Sn.set(b,Math.max(-.2,Zn(b,m)-.15),M),bn.setFromAxisAngle(Es,Q(m,g+5)*6.28),un.set(A,A*(.8+Q(m,g+6)*.7),A),je.compose(Sn,bn,un),Ai(Ss,h,je),rs(Ss,h,Je.set(Wh[Q(m,g+4)*4|0])),h++}}e.push([Ss,h],[cc,l]),e.push([sc,c],[br,a],[rc,a]);let f=0,p=0;for(let x=0;x<$n;x++){x%5===0&&(yield);let m=s+x*Kn;for(let g=0;g<3;g++){if(Q(m*.37,g+7)>.5||f>=500)continue;let _=(Q(m+g,5)*2-1)*(be(m)-2.2),E=ie(m)+_;Sn.set(E,.03,-(m+(Q(m,g)-.5)*Kn)),bn.setFromAxisAngle(Es,Q(m,g+2)*6.28);let v=.7+Q(m+g,9)*.9;un.set(v,1,v),je.compose(Sn,bn,un),Ai(oc,f,je),rs(oc,f,Je.set(Q(m,g)>.5?"#a8dba9":"#96cfa0")),f++,Q(m,g+11)>.72&&p<160&&(je.compose(Sn.setY(.05),bn,un.set(1,1,1)),Ai(ac,p,je),rs(ac,p,Je.set(Q(m,g+1)>.4?"#f7b9cf":"#fbe39a")),p++)}}e.push([oc,f],[ac,p]);for(let[x,m]of e)aS(x,m);Ef.set(Xh),Tf.set(qh),Js.attributes.position.needsUpdate=!0,Js.attributes.color.needsUpdate=!0,Js.computeVertexNormals()}var Sr=null,cg=0,Cf=!1;function lg(i,t,e){let n=Math.floor(-t/(Kn*nc))*Kn*nc,s=Math.round(i/(is*nc))*is*nc;if(!Sr&&(n!==uc.b||s!==uc.a)){let r=!Cf||Math.abs(n-uc.b)>150||Math.abs(s-uc.a)>150;if(uc={a:s,b:n},Sr=cS(s,n),cg=n,r){for(;!Sr.next().done;);e(n),Sr=null,Cf=!0}}if(Sr){let r=performance.now(),o;do o=Sr.next();while(!o.done&&performance.now()-r<3);o.done&&(e(cg),Sr=null,Cf=!0)}}var Lf=140,hg=[],Df=new ue,Yh=new Float32Array(Lf*3);for(let i=0;i<Lf;i++)hg.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);Df.setAttribute("position",new Kt(Yh,3));var If=new li({color:16773792,size:.35,map:jn,transparent:!0,opacity:0,blending:kn,depthWrite:!1}),Zh=new bi(Df,If);Zh.frustumCulled=!1;At.add(Zh);function ug(i){if(If.opacity=Fe(i*1.3-.2,0,.9),Zh.visible=If.opacity>.01,Zh.visible){for(let t=0;t<Lf;t++){let e=hg[t],n=F.t*.4+e[3],s=Math.sin(F.psi),r=-Math.cos(F.psi);Yh[t*3]=F.px+e[0]+Math.sin(n*2.1+t)*1.5,Yh[t*3+1]=e[1]+Math.sin(n*3+t)*.4,Yh[t*3+2]=F.pz+e[2]+Math.cos(n*1.7+t)*1.5}Df.attributes.position.needsUpdate=!0}}var Qn=Xt,Ge=new Qt;At.add(Ge);var Ts=new Os;Ts.moveTo(0,3.4);Ts.quadraticCurveTo(.5,2.4,.7,1);Ts.lineTo(.7,-1.3);Ts.lineTo(-.7,-1.3);Ts.lineTo(-.7,1);Ts.quadraticCurveTo(-.5,2.4,0,3.4);var Nf=new $(new Mo(Ts,{depth:.24,bevelEnabled:!1}),new _e({gradientMap:Ie,color:14722684,emissive:4204570,map:Ye("wood")}));Nf.rotation.x=-Math.PI/2;Nf.position.y=-.04;Ge.add(Nf);var dc=new $(new La(Ts),new _e({gradientMap:Ie,color:11568232,emissive:2759186,map:Ye("plank")}));dc.geometry.scale(.8,.86,1);dc.geometry.translate(0,.2,0);dc.rotation.x=-Math.PI/2;dc.position.y=.21;Ge.add(dc);{let i=Qn(9068357,{map:Ye("wood")}),t=Qn(13146740,{map:Ye("plank")}),e=Ts,n=new Os(e.getPoints(24)),s=new ur(n.getPoints(24).map(u=>new ut(u.x*.86,u.y*.9+.1)).reverse());n.holes.push(s);let r=new Mo(n,{depth:.07,bevelEnabled:!1}),o=new $(r,i);o.rotation.x=-Math.PI/2,o.position.y=.2,Ge.add(o);for(let u=0;u<6;u++){let d=-2.3+u*.72,f=u<2?1-u*.1:1.28,p=new $(new In(f,.07,.08),i);p.position.set(0,.23,d),Ge.add(p)}let a=new $(new In(1.35,.07,.34),t);a.position.set(0,.5,.55),Ge.add(a);let c=new $(new _s(.2,.045,6,14),Qn(14271378));c.rotation.x=Math.PI/2,c.position.set(.25,.27,-1.7),Ge.add(c);let l=c.clone();l.scale.setScalar(.8),l.position.set(.25,.32,-1.7),Ge.add(l);let h=new $(new pe(.13,8,6),i);h.position.set(0,.22,-3.35),Ge.add(h)}var fg=[];{let i=Qn(9075550,{map:Ye("cloth")}),t=Qn(11045468,{map:Ye("woodV")});[[-.35,.34,-1.55,.34],[-.05,.32,-1.35,.28],[-.3,.3,-1.1,.26]].forEach(([s,r,o,a])=>{let c=new $(new Mn(a,1),i);c.scale.set(1.1,.65,1),c.position.set(s,r,o),Ge.add(c),fg.push(c)});let e=new $(new Le(.025,.035,4.6,6),t);e.position.set(-.55,.9,-2.6),e.rotation.set(1.28,0,.14),Ge.add(e);let n=new $(new Le(.006,.006,2.3,3),Qn(14209216));n.position.set(-.95,.35,-4.7),Ge.add(n)}var pg=new $(new Le(.03,.04,.9,6),new _e({gradientMap:Ie,color:8018508}));pg.position.set(0,.55,-3.05);Ge.add(pg);var fc=new $(new pe(.12,10,8),new Pe({color:16769704}));fc.position.set(0,1.05,-3.05);Ge.add(fc);var $h=ii(16762746,2.4);$h.position.copy(fc.position);Ge.add($h);var Kh=new Oa(16763274,0,22,1.6);Kh.position.set(0,1.5,-2.8);Ge.add(Kh);function dg(){let i=new Qt,t=new _e({gradientMap:Ie,color:15716516,emissive:3811866}),e=new $(new Le(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new $(new In(.2,.03,.62),new _e({gradientMap:Ie,color:15047302}));n.position.z=1.55,i.add(n);let s=new $(new In(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new Qt;return r.add(i),Ge.add(r),r}var mg=[dg(),dg()],lS=[new L(-.7,.5,-.3),new L(.7,.5,-.3)],hS=[new L(-1.05,.55,-.9),new L(1.05,.55,-.9)],wr=new Qt;Ge.add(wr);wr.position.set(0,.42,.55);wr.scale.setScalar(1.3);var Ri=new Qt;Ri.position.y=.3;wr.add(Ri);var Bo=new Qt;Bo.position.y=1;Ri.add(Bo);var $s=new Qt;$s.position.y=.2;Bo.add($s);var gg=[];{let i=Qn(9279656,{map:Ye("cloth")}),t=Qn(7305868,{map:Ye("cloth")}),e=Qn(4540762,{map:Ye("cloth")}),n=Qn(14264706),s=Qn(14727535,{map:Ye("straw"),side:me}),r=Qn(12159562,{map:Ye("straw")}),o=Qn(2959918),a=new $(new pe(.5,14,10),e);a.scale.set(1.2,.42,.85),a.position.y=-.1,wr.add(a),[-1,1].forEach(g=>{let _=new $(new pe(.17,8,6),e);_.position.set(g*.5,-.02,-.3),wr.add(_)});let c=new $(new Le(.3,.4,.8,12),i);c.position.y=.42,Ri.add(c);let l=new $(new _s(.35,.03,6,14),t);l.rotation.x=Math.PI/2,l.position.y=.12,Ri.add(l);let h=new $(new pe(.44,12,8),i);h.scale.set(1,.45,.7),h.position.y=.78,Ri.add(h);let u=new $(new _s(.14,.045,6,10),t);u.rotation.x=Math.PI/2,u.position.y=.9,Ri.add(u);let d=new $(new Le(.09,.1,.16,6),n);d.position.y=.95,Ri.add(d);let f=new $(new pe(.21,14,10),o);f.position.y=.2,Bo.add(f);let p=new $(new Oe(.66,.36,24,1,!0),s);p.position.y=.1,$s.add(p);let x=new $(new Oe(.1,.08,8),r);x.position.y=.22,$s.add(x);let m=new $(new _s(.655,.018,6,28),r);m.rotation.x=Math.PI/2,m.position.y=-.075,$s.add(m),[-1,1].forEach(g=>{let _=new $(new Le(.008,.008,.3,4),o);_.position.set(g*.18,-.12,.05),$s.add(_)}),[-1,1].forEach(g=>{let _=new Qt;_.position.set(g*.42,.75,0),Ri.add(_);let E=new $(new Le(.095,.08,.6,8),i);E.position.y=-.3,_.add(E);let v=new $(new pe(.085,8,6),n);v.position.y=-.62,_.add(v);let b=new $(new _s(.085,.025,5,8),t);b.rotation.x=Math.PI/2,b.position.y=-.52,_.add(b),gg.push(_)})}var Tr=new Qt;Ge.add(Tr);{let i=Qn(12159574,{map:Ye("woodV")}),t=Qn(13602164,{map:Ye("plank")}),e=new $(new Le(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,Tr.add(e);let n=new $(new In(.22,.04,.55),t);n.position.z=2,Tr.add(n);let s=new $(new In(.2,.04,.05),i);s.position.z=-.03,Tr.add(s)}var Er=1,Jh=0,xg=new L;function _g(){let i=Math.sin(F.t*.9)*.03+Math.sin(F.t*1.7)*.012;return Ge.position.set(F.px,i*.6,F.pz),Ge.rotation.set(0,-F.psi,-F.steer*.025+Math.sin(F.t*.7)*.008),Ge.updateMatrixWorld(!0),i}function yg(){mg.forEach((i,t)=>{let e=t?1:-1,n=Fe(F.steer*e,0,1),s=new L().copy(hS[t]);s.lerp(new L(e*1.25,-.1,-.9+Math.sin(F.t*1.3+t)*.08),n);let r=xg.copy(s).sub(lS[t]).normalize();i.quaternion.setFromUnitVectors(new L(0,0,1),r),i.position.copy(s).addScaledVector(r,-1.55)})}function vg(i){{let t=ct.camK>.45||ct.cineW>.15;if(wr.visible=t,fg.forEach(e=>e.visible=t),Tr.visible=t,mg.forEach(e=>e.visible=!t),t){F.steer>.2?Er=Math.min(1,Er+i*3):F.steer<-.2&&(Er=Math.max(-1,Er-i*3)),Jh+=(F.steer-Jh)*Math.min(1,i*2.2);let e=Math.sin(F.t*1.4);Ri.rotation.z=-F.steer*.2+Math.sin(F.t*.6)*.02,Ri.rotation.y=-F.steer*.28,Ri.rotation.x=.05+e*.012+Math.abs(F.steer)*.06,Bo.rotation.y=-F.steer*.38+Math.sin(F.t*.35)*.08,Bo.rotation.x=.04+Math.sin(F.t*.5)*.03,$s.rotation.z=(F.steer-Jh)*.45,$s.rotation.x=-Math.abs(F.steer-Jh)*.12;let n=xg.set(Er*.5,.8,.5),s=Math.abs(F.steer)>.2?1:0,o=new L(Er*(.7+s*.55),-.2,1.35+Math.sin(F.t*1.2)*.12*(1-s)+s*.1).clone().sub(n).normalize();Tr.quaternion.setFromUnitVectors(new L(0,0,1),o),Tr.position.copy(n);let a=[n.clone().addScaledVector(o,.75),n.clone()];Er<0&&a.reverse(),gg.forEach((c,l)=>{let h=c.getWorldPosition(new L),u=Ge.localToWorld(a[l].clone()),d=u.sub(h),f=d.length();c.parent.worldToLocal(u.copy(h).add(d));let p=u.sub(c.position);c.quaternion.setFromUnitVectors(new L(0,-1,0),p.clone().normalize()),c.scale.y=Fe(p.length()/.66,.7,1.5)})}}}var jh=[];for(let i=0;i<28;i++){let t=new $(new fr(.35,.42,28).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,At.add(t),jh.push(t)}var uS=0,si=(i,t)=>{let e=jh[uS++%jh.length];e.position.set(i,.04,t),e.userData.age=0};function Mg(i){jh.forEach(t=>{if(t.userData.age<4){t.userData.age+=i;let e=t.userData.age/4;t.scale.setScalar(1+e*6),t.material.opacity=.35*(1-e)}else t.material.opacity=0})}var Ks={steer:0,pitch:0};vs.addEventListener("pointerdown",i=>{!ct.started||ct.X.photo||(L0(),vs.setPointerCapture(i.pointerId),F.hold=!0,Sg(i),ce.resume())});vs.addEventListener("pointermove",i=>{F.hold&&!ct.X.photo&&Sg(i)});var bg=()=>{F.hold=!1,Ks.steer=0,Ks.pitch=0};vs.addEventListener("pointerup",bg);vs.addEventListener("pointercancel",bg);function Sg(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;Ks.steer=Math.abs(t)<.1?0:Fe((t-Math.sign(t)*.1)*1.4,-1,1),Ks.pitch=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!1)});var ki=["Puente de madera","Torii sobre el agua","Aldea de farolillos","Jard\xEDn de sakura","Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos","Castillo de la Garza Blanca"],mi=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>mi.add(i))}catch{}function Eg(){try{localStorage.setItem("rio3d-found",JSON.stringify([...mi]))}catch{}}var Ar=[],ri=new Map,Tg=new Set,os=[],Uf=new Set;function ti(i){let t=We("toast");t.textContent=i,t.style.opacity=1,clearTimeout(ti.h),ti.h=setTimeout(()=>t.style.opacity=0,4200)}var dS=ki.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,We("chips").appendChild(t),t});function Qh(i){We("places").textContent=mi.size+"/"+ki.length,dS.forEach((e,n)=>e.classList.toggle("on",mi.has(n)));let t=Math.max(0,Math.floor((i-240)/Ti)-1);for(;rn(t)<i+1;)t++;We("next").textContent="Siguiente: "+ki[Ke(t)]+" en "+Math.max(0,Math.round((rn(t)-i)/10)*10)+" m"}We("snd").onclick=()=>{ce.on=!ce.on,ce.ctx&&ce.setOn(ce.on),We("snd").textContent="Sonido: "+(ce.on?"s\xED":"no")};try{ct.savedS=+localStorage.getItem("rio3d-pos")||0}catch{}function pc(){try{ct.started&&F.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(F.dist)))}catch{}}setInterval(pc,2500);addEventListener("pagehide",pc);document.addEventListener("visibilitychange",pc);ct.savedS>150&&(We("go").textContent="Continuar ("+ct.savedS+" m)",We("go2").hidden=!1,We("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}ct.savedS=0,We("go").onclick()});We("go").onclick=()=>{ct.savedS>150&&kh(ct.savedS);try{ce.init(),ce.resume()}catch{}We("start").hidden=!0,We("hud").hidden=!1,We("places-row").hidden=!1,Qh(0),We("hint").hidden=!1,ct.started=!0,setTimeout(()=>{try{localStorage.getItem("rio3d-ob")==="1"&&(We("hint").style.opacity=0)}catch{We("hint").style.opacity=0}},9e3),setTimeout(()=>ti("Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros."),1500*1e3)};var Ff=0;function wg(i,t){if(Ff-=i,Ff<=0){Ff=.4,Qh(F.dist||t);{let e=F.dist||t,n=Math.round((e-240)/Ti),s=-1;for(let r of[n-1,n,n+1])r>=0&&Math.abs(rn(r)-e)<280&&(s=Ke(r));ce.setMood(Math.sin(Math.PI*2*(ct.tod-.12)),s,Zs())}We("m").textContent=Math.round(F.dist/1),We("tod").textContent=Vh(ct.tod)}}var Of=46,Rr=new Map,Bf=[],tu=new Set;try{JSON.parse(localStorage.getItem("rio3d-coll")||"[]").forEach(i=>tu.add(i))}catch{}try{ct.count=+localStorage.getItem("rio3d-lant")||0}catch{}var eu=i=>{let t=70+i*Of+Q(i,1)*20,e=(Q(i,2)*2-1)*.6*be(t);return[ie(t)+e,-t]};function Hf(){let i=new Qt,t=new $(new Le(.3,.3,.55,10),new Pe({color:16767392}));t.position.y=.38;let e=new $(new Le(.34,.34,.06,10),new Pe({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=ii(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new $(new an(1,1).rotateX(-Math.PI/2),new Pe({map:jn,color:16762746,transparent:!0,opacity:.4,blending:kn,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function Ag(i,t){let e=Math.max(0,Math.floor((t-120)/Of)),n=Math.floor((t+320)/Of);for(let[s,r]of Rr)(s<e||s>n)&&(At.remove(r),Bf.push(r),Rr.delete(s));for(let s=e;s<=n;s++){if(tu.has(s)||Rr.has(s))continue;let r=Bf.pop()||Hf();r.userData.fade=1,r.scale.setScalar(1),At.add(r),Rr.set(s,r)}for(let[s,r]of Rr){let[o,a]=eu(s);r.position.set(o,Math.sin(i*1.1+s)*.04,a),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*ct.glowK)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*ct.glowK)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(At.remove(r),Rr.delete(s),Bf.push(r),r.userData.collecting=!1))}}function Rg(){for(let[i,t]of Rr){if(t.userData.collecting)continue;let[e,n]=eu(i),s=e-F.px,r=n-F.pz;if(s*s+r*r<17){tu.add(i),ct.count++;try{localStorage.setItem("rio3d-lant",String(ct.count)),localStorage.setItem("rio3d-coll",JSON.stringify([...tu]))}catch{}t.userData.collecting=!0;let o=Math.atan2(s,-r)-F.psi;ce.lantern(Math.sin(o)),si(e,n),We("n").textContent=ct.count,ct.count===1&&ti("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}}var mc=16,Cg=[];for(let i=0;i<mc;i++){let t=new xs(new Qi({map:jn,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,At.add(t),Cg.push(t)}var zf=800,kf=new ue,Pg=new Float32Array(zf*6),Ig=[];for(let i=0;i<zf;i++)Ig.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);kf.setAttribute("position",new Kt(Pg,3));var Lg=new xo({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),gc=new ba(kf,Lg);gc.frustumCulled=!1;gc.visible=!1;At.add(gc);var ln={rain:0,target:0,t:50,on:!1},fS=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),o=[];for(let l=0;l<=220;l++){let h=l/220*Math.PI*2,u=Math.cos(h),d=Math.sin(h),f=sn(u*2.2+n,d*2.2+n),p=sn(u*8+n*2,d*8+n),x=Math.pow(Math.max(0,p-.5)/.5,1.4),m=t*(.3+.55*Math.pow(f,1.5)+.9*x);if(r.set([u*i,-40,d*i,u*i,m,d*i],l*6),l<220){let g=l*2;o.push(g,g+1,g+2,g+1,g+3,g+2)}}let a=new ue;a.setAttribute("position",new Kt(r,3)),a.setIndex(o);let c=new $(a,new nn({side:me,fog:!1,depthWrite:!1,uniforms:{col:{value:new pt},hor:{value:new pt},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));return c.renderOrder=-8,c.frustumCulled=!1,c.userData.t=e,At.add(c),c}),Oo=new pt,nu=new pt;function Dg(i,t){ct.started&&(ln.t-=i,ln.t<=0&&(ln.target=ln.target?0:1,ln.t=ln.target?60+Math.random()*40:100+Math.random()*70,ln.target&&ti("Empieza una llovizna suave"))),ln.rain+=(ln.target-ln.rain)*Math.min(1,i*.25);let e=ln.rain>.15;e!==ln.on&&(ln.on=e,ce.rain(e));let n=1-Be(.08,.3,ct.tod),s=Fe(Math.max(zh(t)*.95,ln.rain*.4,n*.4,.2));ln.fog=s,At.fog.near=_r(22,5,s),At.fog.far=_r(250,85,s),Oo.set(15131886).multiplyScalar(1-Se.night*.7),At.fog.color.copy(Se.fog).lerp(Oo,s*.55);let r=pi.material.uniforms;r.fogN.value=At.fog.near,r.fogF.value=At.fog.far,r.fog.value.copy(At.fog.color),wi.material.uniforms.hor.value.lerp(At.fog.color,s*.8),wi.material.uniforms.top.value.lerp(At.fog.color,s*.35),Mr.intensity*=1-.22*ln.rain,Ms.intensity*=1-.45*ln.rain,fS.forEach(a=>{a.position.set(F.px,0,F.pz);let c=a.userData.t;Oo.copy(Se.hor),nu.copy(Se.top).multiplyScalar(.55).lerp(Oo.set(8095400).multiplyScalar(1-Se.night*.75),.45),a.material.uniforms.col.value.copy(Se.hor).lerp(nu,1-c).lerp(At.fog.color,s*.75),a.material.uniforms.hor.value.copy(wi.material.uniforms.hor.value)});let o=Math.floor(t/25)-2;for(let a=0;a<mc;a++){let c=o+a,l=Cg[(c%mc+mc)%mc],h=c*25,u=ie(h)+(Q(c,3)-.5)*be(h)*1.5;l.position.set(u+Math.sin(F.t*.05+c)*3,1.2+Q(c,4)*2.2,-h);let d=l.position.x-F.px,f=l.position.z-F.pz,p=Math.hypot(d,f);l.material.opacity=s*.5*Be(6,22,p)*(1-Be(300,380,p))*(.7+.3*Q(c,5)),l.material.color.copy(At.fog.color).multiplyScalar(1.05)}if(gc.visible=ln.rain>.03,Lg.opacity=.42*ln.rain,gc.visible){for(let a=0;a<zf;a++){let c=Ig[a];c[1]-=16*i,c[1]<0&&(c[1]=13+Math.random()*2,c[0]=Math.random()*40-20,c[2]=Math.random()*40-24);let l=F.px+c[0],h=F.pz+c[2];Pg.set([l,c[1],h,l-.05,c[1]+.65,h],a*6)}kf.attributes.position.needsUpdate=!0,Math.random()<i*9*ln.rain&&si(F.px+(Math.random()-.5)*28,F.pz-Math.random()*22+4)}}var Gf=0;function Ng(i,t){if(ct.started){let e=F.hold||F.key.up,n=Fe(Ks.steer+(F.key.r?1:0)-(F.key.l?1:0),-1,1),s=ct.X.photo?0:2.6*(1-.85*ct.cineW);F.v+=(s-F.v)*.5*i;let r=xn(t),o=n*(.55+Math.min(F.v,6)/6*.45);F.psi+=o*i,Math.abs(n)<.1&&(F.psi+=(r-F.psi)*.32*i),F.psi=Fe(F.psi,r-1.35,r+1.35),window.__lock!=null&&(F.psi=window.__lock),F.steer+=(n-F.steer)*3*i,F.px+=Math.sin(F.psi)*F.v*i+Math.sin(r)*1.1*i,F.pz+=-Math.cos(F.psi)*F.v*i-Math.cos(r)*1.1*i;let a=-F.pz,c=ie(a),l=be(a)-1.7,h=F.px-c;if(Math.abs(h)>l&&(F.px=c+Math.sign(h)*l,F.v>1.2&&F.t-F.bumpT>1.2&&(ce.bump(),F.bumpT=F.t),F.v*=.6,F.psi+=(xn(a)-F.psi)*.4),F.dist=Math.max(F.dist,a),Gf-=i,Math.abs(n)>.25&&Gf<=0){Gf=.7;let u=n>0?1:-1,d=new L(u*1.2,0,.3);Ge.localToWorld(d),si(d.x,d.z)}}}var qt=(i,t,e,n,s,r,o,a,c)=>{let l=new $(new In(t,e,n),Xt(s,c));return l.position.set(r,o,a),i.add(l),l},Ve=(i,t,e,n,s,r,o,a,c=7,l)=>{let h=new $(new Le(t,e,n,c),Xt(s,l));return h.position.set(r,o,a),i.add(h),h},we=(i,t,e,n,s,r,o=.7)=>{let a=ii(t,e);return a.position.set(n,s,r),a.userData.base=o,i.add(a),Ar.push(a),a},Vf=new Map;function Xf(i,t,e,n=64,s=256){let r=i+t+n;if(Vf.has(r))return Vf.get(r);let o=document.createElement("canvas");o.width=n,o.height=s;let a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.fillRect(0,0,n,5),a.fillRect(0,s-5,n,5);let c=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);a.font="bold "+c+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',a.textAlign="center",a.textBaseline="middle";let l=[...i].length;[...i].forEach((u,d)=>a.fillText(u,n/2,s/(l*2)+d*s/l));let h=new Fi(o);return h.colorSpace=Ln,Vf.set(r,h),h}function Ug(i,t,e,n,s,r){let o=t(e,n),a=new Qt;a.position.set(e,o,n),i.add(a),Ve(a,.07,.09,6.4,4864562,0,3.2,0,5),qt(a,1.3,.09,.09,4864562,.62,6,0);let c=new $(new an(1.15,4.4),new _e({gradientMap:Ie,map:Xf(s,r,"#f6efe0"),side:me}));return c.userData.noMerge=!0,c.position.set(.62,3.75,0),a.add(c),a.userData.sw=1,os.push({b:c,ph:e}),a}function Ho(i,t,e,n,s=1){let r=new Qt;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let o=11052706;Ve(r,.5,.62,.3,o,0,.15,0,8),Ve(r,.17,.2,1.3,o,0,.95,0,6),Ve(r,.45,.3,.2,o,0,1.7,0,8),qt(r,.62,.55,.62,o,0,2.05,0),qt(r,.34,.34,.66,16767392,0,2.05,0).material=new Pe({color:16767392}),qt(r,.66,.34,.34,16767392,0,2.05,0).material=new Pe({color:16767392});let a=new $(new Oe(.62,.5,4),Xt(o));a.rotation.y=Math.PI/4,a.position.y=2.6,r.add(a);let c=new $(new pe(.11,6,5),Xt(o));return c.position.y=2.92,r.add(c),we(r,16762746,2.6,0,2.05,0,.8),r}function pS(i,t,e,n){for(let o of[-1,1])Ve(i,.22,.3,10,6965818,o*(e+1.6),t(o*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=Ve(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let o=0;o<12;o++){let a=(o+.5)/12,c=-s/2+a*s,l=new $(new an(.42,1),new _e({gradientMap:Ie,color:16777215,side:me}));l.position.set(c,7.9,n),l.rotation.set(0,0,o%2?.18:-.18),i.add(l)}for(let o of[-1,1]){let a=new $(new Oe(.3,1,6),Xt(15128736));a.position.set(o*(e*.5),7.8,n),a.rotation.x=Math.PI,i.add(a)}}function Cr(i,t,e,n,s,r){for(let o of[-1,1])Ug(i,t,o*(e+1.6),54,n,r),Ug(i,t,o*(e+3.6),49,n,r),Ho(i,t,o*(e+2.8),42);s&&pS(i,t,e,37)}function su(i,t,e,n,s,r=1){let o=new $(new Oe(t,e,4),Xt(s));o.rotation.y=Math.PI/4,o.position.y=n,o.scale.z=r,i.add(o);let a=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([c,l])=>{let h=new $(new Oe(.32,1.3,5),Xt(s));h.position.set(c*a,n-e/2+.55,l*a*r),h.rotation.set(l*.7,0,-c*.7),i.add(h)})}function Fg(i,t,e,n){let s=new Qt;s.position.set(t,e,n),i.add(s),qt(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let o=0;o<4;o++){let a=4.3-o*.75;qt(s,a,2.3,a,o%2?15853267:15326664,0,r+1.15,0),qt(s,a+.12,.18,a+.12,11880250,0,r+.1,0);for(let[c,l]of[[1,1],[-1,1],[1,-1],[-1,-1]])Ve(s,.1,.1,2.3,11880250,c*a/2,r+1.15,l*a/2,6);su(s,(a/2+.95)/.707,1.5,r+2.9,5591134),r+=3.1}Ve(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let o=0;o<6;o++)Ve(s,.55-o*.07,.55-o*.07,.12,14264410,0,r+.2+o*.62,0,8);return we(s,16762746,5,0,3,3.4,.7),s}function Bg(i,t,e,n,s,r){let o=new Qt;return o.position.set(t,e,n),o.scale.setScalar(s),i.add(o),[-2.2,2.2].forEach(a=>Ve(o,.3,.36,6,r,a,3,0,8)),qt(o,6.8,.4,.55,2894382,0,6.4,0),qt(o,5.6,.35,.4,r,0,5.4,0),qt(o,.5,.9,.4,r,0,5.85,0),o}function ru(i,t){let e=new Qt,n=16184302,s=15328474,r=new $(new pe(.5,10,8),Xt(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let o=new $(new Oe(.2,.7,5),Xt(s));o.rotation.x=-Math.PI/2-.3,o.position.set(0,1.35,-.85),e.add(o),Ve(e,.045,.045,1.1,4012598,-.12,.55,.05,4),Ve(e,.045,.045,1.1,4012598,.12,.55,.05,4);let a=new Qt;a.userData.noMerge=!0,a.position.set(0,1.6,.55),e.add(a);let c=Ve(a,.07,.09,1,n,0,.45,.05,5);c.rotation.x=-.35;let l=Ve(a,.06,.07,.7,n,0,1.05,.3,5);l.rotation.x=.45;let h=new $(new pe(.14,8,6),Xt(n));h.position.set(0,1.4,.55),a.add(h);let u=new $(new Oe(.05,.5,4),Xt(14918218));return u.rotation.x=Math.PI/2,u.position.set(0,1.38,.9),a.add(u),e.scale.setScalar(i),os.push({nk:a,ph:t}),e}var js=new nn({transparent:!0,depthWrite:!1,side:me,uniforms:{t:{value:0},fogCol:{value:new pt(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`}),ou=new nn({transparent:!0,depthWrite:!1,blending:kn,uniforms:{map:{value:jn},k:{value:1}},vertexShader:"attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`}),Wf=new Me,iu=new L;function au(i){i.updateMatrixWorld(!0),Wf.copy(i.matrixWorld).invert();let t=new Map,e=[],n=[];i.traverse(s=>{if(s.isSprite&&s.userData.base!=null){e.push(s);return}if(!s.isMesh||s.isInstancedMesh||s.material.isShaderMaterial||!s.material.isMaterial)return;for(let l=s;l&&l!==i;l=l.parent)if(l.userData.noMerge)return;let r=s.material,o=[r.type,r.color.getHex(),r.emissive?r.emissive.getHex():0,r.side,r.map?r.map.uuid:0,r.transparent,r.opacity,r.depthWrite].join("|"),a=s.geometry;a=a.index?a.toNonIndexed():a.clone();for(let l of Object.keys(a.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&a.deleteAttribute(l);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new Kt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(Wf.clone().multiply(s.matrixWorld));let c=t.get(o);c||(c={mat:r,geos:[]},t.set(o,c)),c.geos.push(a),n.push(s)});for(let s of n)s.parent&&s.parent.remove(s),s.geometry.dispose(),s.material.dispose&&![...t.values()].some(r=>r.mat===s.material)&&s.material.dispose();for(let s of t.values()){let r=bs(s.geos);if(s.geos.forEach(a=>a.dispose()),!r)continue;let o=new $(r,s.mat);i.add(o)}if(e.length){let s=e.length,r=new an(1,1),o=new za;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=new Float32Array(s*3),c=new Float32Array(s),l=new Float32Array(s*3),h=new Float32Array(s);e.forEach((d,f)=>{iu.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Wf),a.set([iu.x,iu.y,iu.z],f*3),c[f]=d.scale.x,l.set([d.material.color.r,d.material.color.g,d.material.color.b],f*3),h[f]=d.userData.base,d.parent&&d.parent.remove(d),d.material.dispose()}),o.setAttribute("iC",new Ui(a,3)),o.setAttribute("iS",new Ui(c,1)),o.setAttribute("iCol",new Ui(l,3)),o.setAttribute("iB",new Ui(h,1)),o.instanceCount=s;let u=new $(o,ou);u.frustumCulled=!1,u.renderOrder=4,i.add(u)}return i}function qf(i){let t=new Set([ou,js,Ss.material]);i.traverse(e=>{if(e.isInstancedMesh&&e.userData.keep){e.dispose();return}e.geometry&&e.geometry.dispose(),(e.material?Array.isArray(e.material)?e.material:[e.material]:[]).forEach(s=>{t.has(s)||s.dispose()})});for(let e=os.length-1;e>=0;e--){let n=os[e],r=n.b||n.nk;for(;r&&r!==i;)r=r.parent;r===i&&os.splice(e,1)}for(let e=Ar.length-1;e>=0;e--){let n=Ar[e];for(;n&&n!==i;)n=n.parent;n===i&&Ar.splice(e,1)}}var cu=new pt,Og=new Map,Hg=new Me,zg=new fn,kg=new Ni,Gg=new L,Vg=new L(1,1,1),Pr=i=>{if(Array.isArray(i))return i;let t=Og.get(i);return t||(cu.set(i),t=[cu.r,cu.g,cu.b],Og.set(i,t)),t},Rn=(i,t)=>{let e=Pr(i);return[Math.min(1.4,e[0]*t),Math.min(1.4,e[1]*t),Math.min(1.4,e[2]*t)]},Wg=new Map;function mS(i){let t=Wg.get(i);return t||(t=new Mn(1,i),t=t.index?t.toNonIndexed():t,Wg.set(i,t)),t}var gi=class{constructor(){this.P=new Float32Array(1<<17),this.C=new Float32Array(1<<17),this.n=0,this.m=new Me,this.st=[],this.ref=null}_grow(){let t=new Float32Array(this.P.length*2),e=new Float32Array(this.C.length*2);t.set(this.P),e.set(this.C),this.P=t,this.C=e}save(){return this.st.push(this.m.clone()),this}restore(){return this.m=this.st.pop(),this}T(t=0,e=0,n=0,s=0,r=0,o=0,a=1,c=a,l=a){return kg.set(r,s,o,"YXZ"),zg.setFromEuler(kg),Gg.set(t,e,n),Vg.set(a,c,l),Hg.compose(Gg,zg,Vg),this.m.multiply(Hg),this}at(t,e,n,s,r,o,a,c){return this.save(),this.T(t,e,n,s||0,o||0,a||0,c||1),r(this),this.restore(),this}tri(t,e,n,s){s=Pr(s);let r=this.m.elements,o=r[0],a=r[1],c=r[2],l=r[4],h=r[5],u=r[6],d=r[8],f=r[9],p=r[10],x=r[12],m=r[13],g=r[14],_=t[0],E=t[1],v=t[2],b=e[0],M=e[1],A=e[2],y=n[0],T=n[1],R=n[2],P=o*_+l*E+d*v+x,N=a*_+h*E+f*v+m,D=c*_+u*E+p*v+g,C=o*b+l*M+d*A+x,U=a*b+h*M+f*A+m,k=c*b+u*M+p*A+g,W=o*y+l*T+d*R+x,tt=a*y+h*T+f*R+m,O=c*y+u*T+p*R+g;if(this.ref){let Yt=this.ref,nt=o*Yt[0]+l*Yt[1]+d*Yt[2]+x,ot=a*Yt[0]+h*Yt[1]+f*Yt[2]+m,bt=c*Yt[0]+u*Yt[1]+p*Yt[2]+g,Ot=C-P,Rt=U-N,Jt=k-D,De=W-P,rt=tt-N,ht=O-D,ft=Rt*ht-Jt*rt,dt=Jt*De-Ot*ht,xt=Ot*rt-Rt*De;if(ft*((P+C+W)/3-nt)+dt*((N+U+tt)/3-ot)+xt*((D+k+O)/3-bt)<0){let Nt=C;C=W,W=Nt,Nt=U,U=tt,tt=Nt,Nt=k,k=O,O=Nt}}this.n+9>this.P.length&&this._grow();let X=this.P,J=this.C,mt=this.n,wt=s[0],ae=s[1],se=s[2];return X[mt]=P,X[mt+1]=N,X[mt+2]=D,X[mt+3]=C,X[mt+4]=U,X[mt+5]=k,X[mt+6]=W,X[mt+7]=tt,X[mt+8]=O,J[mt]=wt,J[mt+1]=ae,J[mt+2]=se,J[mt+3]=wt,J[mt+4]=ae,J[mt+5]=se,J[mt+6]=wt,J[mt+7]=ae,J[mt+8]=se,this.n=mt+9,this}orient(t){return this.ref=t,this.rw=null,this}free(){return this.ref=null,this.rw=null,this}quad(t,e,n,s,r){return this.tri(t,e,n,r),this.tri(t,n,s,r),this}box(t,e,n,s,r=0,o=0,a=0,c=!0){s=Pr(s);let l=r-t/2,h=r+t/2,u=o-e/2,d=o+e/2,f=a-n/2,p=a+n/2,x=this.ref;return this.ref=null,this.quad([h,u,p],[h,u,f],[h,d,f],[h,d,p],s),this.quad([l,u,f],[l,u,p],[l,d,p],[l,d,f],s),this.quad([l,d,p],[h,d,p],[h,d,f],[l,d,f],s),c&&this.quad([l,u,f],[h,u,f],[h,u,p],[l,u,p],s),this.quad([l,u,p],[h,u,p],[h,d,p],[l,d,p],s),this.quad([h,u,f],[l,u,f],[l,d,f],[h,d,f],s),this.ref=x,this}boxB(t,e,n,s,r=0,o=0,a=0,c=!1){return this.box(t,e,n,s,r,o+e/2,a,c)}cyl(t,e,n,s,r,o=0,a=0,c=0,l=!1){r=Pr(r);let h=this.ref;this.ref=null;let u=(p,x)=>{let m=[];for(let g=0;g<s;g++){let _=g/s*6.2832;m.push([o+p*Math.cos(_),a+x,c+p*Math.sin(_)])}return m},d=u(t,0),f=u(e,n);for(let p=0;p<s;p++){let x=(p+1)%s;e<1e-4?this.tri(d[p],[o,a+n,c],d[x],r):this.quad(d[p],f[p],f[x],d[x],r)}if(e>=1e-4)for(let p=0;p<s;p++)this.tri([o,a+n,c],f[(p+1)%s],f[p],r);if(l)for(let p=0;p<s;p++)this.tri([o,a,c],d[p],d[(p+1)%s],r);return this.ref=h,this}ball(t,e,n=0,s=0,r=0,o=1,a=1,c=1,l=1){e=Pr(e);let h=mS(l),u=h.attributes.position,d=this.ref;this.ref=null;for(let f=0;f<u.count;f+=3){let p=[0,1,2].map(x=>[n+u.getX(f+x)*t*o,s+u.getY(f+x)*t*a,r+u.getZ(f+x)*t*c]);this.tri(p[0],p[1],p[2],e)}return this.ref=d,this}geo(t,e){e=Pr(e);let n=t.attributes.position,s=t.index,r=s?s.count:n.count,o=this.ref;this.ref=null;let a=c=>{let l=s?s.getX(c):c;return[n.getX(l),n.getY(l),n.getZ(l)]};for(let c=0;c<r;c+=3)this.tri(a(c),a(c+1),a(c+2),e);return this.ref=o,this}loft(t,e,n=!0){let s=t.length,r=t[0].length;for(let o=0;o<s-1;o++)for(let a=0;a<(n?r:r-1);a++){let c=(a+1)%r;this.quad(t[o][a],t[o+1][a],t[o+1][c],t[o][c],Pr(typeof e=="function"?e(a,o):e))}return this}count(){return this.n/9}mesh(t){let e=this.n,n=this.P.subarray(0,e),s=new ue;s.setAttribute("position",new Kt(n,3));let r=new Float32Array(e);for(let a=0;a<e;a+=9){let c=n[a+3]-n[a],l=n[a+4]-n[a+1],h=n[a+5]-n[a+2],u=n[a+6]-n[a],d=n[a+7]-n[a+1],f=n[a+8]-n[a+2],p=l*f-h*d,x=h*u-c*f,m=c*d-l*u,g=Math.sqrt(p*p+x*x+m*m)||1;p/=g,x/=g,m/=g;for(let _=0;_<9;_+=3)r[a+_]=p,r[a+_+1]=x,r[a+_+2]=m}s.setAttribute("normal",new Kt(r,3)),s.setAttribute("color",new Kt(this.C.subarray(0,e),3)),s.setAttribute("uv",new Kt(new Float32Array(e/3*2),2)),s.computeBoundingSphere();let o=new $(s,t);return o.userData.noMerge=!0,o}};var Xg=[12731706,4022170,15253850,5214058,14256806,8014490,15790310,3095130,15043130],gS=[15781806,15253658,15980219],lu=[];function Jg(i,t,e,n,s,r,o,a){let{S:c,E:l,rnd:h}=i;c.at(t,e,n,s,u=>{u.cyl(.37,.2,1.28,7,r,0,0,0).cyl(.28,.27,.16,7,r===15790310?G.red:Rn(G.woodD,1.2),0,.62,0).ball(.17,gS[h()*3|0],0,1.42,0,1,1.1,1,0).ball(.185,G.black,0,1.48,-.03,1,.8,1,0),o&&u.cyl(.04,.04,.7,4,G.woodD,.38,.7,.28),a&&(u.box(.1,.1,.55,r,.3,1.1,.1),u.box(.1,.1,.55,r,-.3,1.1,.1))}),o&&(l.at(t,e,n,s,u=>u.cyl(.13,.13,.34,6,16767392,.38,.38,.28)),h()<.45&&we(i.h,16762746,2.6,t+Math.sin(s)*.28+Math.cos(s)*.38,e+.55,n+Math.cos(s)*.28-Math.sin(s)*.38,.85))}function xc(i,t,e,n,s,r){let{fr:o,rnd:a}=i;for(let c=0;c<n;c++){let l=t+(a()-.5)*s*2,h=e+(a()-.5)*s*.9,u=o.ground(l,h);u<.35||Jg(i,l,u,h,r+(a()-.5)*1.2,Xg[a()*Xg.length|0],a()<.5,!1)}}function qg(i,t,e,n){let{S:s,E:r,CL:o,fr:a,rnd:c}=i,l=Math.max(a.ground(t,e),.4),h=[[G.red,G.cream],[G.blue,G.cream],[G.orange,G.cream],[G.green,G.cream]][c()*4|0];s.at(t,l,e,n,f=>{for(let p of[-1,1])for(let x of[-1,1])f.cyl(.08,.1,2.7,5,G.woodD,p*1.65,0,x*.9);f.box(3.5,.95,1.3,G.woodM,0,.48,.5,!1).box(3.7,.12,1.5,Rn(G.woodM,1.25),0,.98,.5);for(let p=0;p<3;p++)f.ball(.17,[G.red,G.cream,15292282,G.orange][c()*4|0],-1.1+p*1.1,1.28,.45,1,1,1,0).cyl(.02,.02,.5,3,G.woodD,-1.1+p*1.1,1,.45);f.box(.7,.5,.5,9071178,1.2,1.3,.6).box(.6,.3,.5,13199183,-.2,1.2,.62)}),o.at(t,l,e,n,f=>{for(let x=0;x<7;x++){let m=-1.9+3.8*x/7,g=-1.9+3.8*(x+1)/7,_=x%2?h[1]:h[0];f.quad([m,3,-1.1],[g,3,-1.1],[g,2.55,1.35],[m,2.55,1.35],_),f.tri([m,2.55,1.35],[g,2.55,1.35],[(m+g)/2,2.15,1.4],_)}f.quad([-1.9,2.55,-1.1],[1.9,2.55,-1.1],[1.9,3,-1.1],[-1.9,3,-1.1],h[0])});let u=Math.cos(n),d=Math.sin(n);for(let f of[-1,1])r.at(t,l,e,n,p=>p.cyl(.28,.28,.55,6,G.red,f*1.7,1.85,1.2)),we(i.h,16757610,3.3,t+f*1.7*u+1.2*d,l+2.1,e-f*1.7*d+1.2*u,.85)}function Yg(i,t,e){let{S:n,fr:s}=i,r=Math.max(s.ground(t,e),.4),o=r+1.55;n.at(t,o,e,0,c=>{c.at(0,0,0,0,l=>l.cyl(1,1,1.5,14,8014382,0,-.75,0),0,0,Math.PI/2);for(let l of[-1,1])c.at(l*.6,0,0,0,h=>h.cyl(1.05,1.05,.16,14,G.red,0,-.08,0),0,0,Math.PI/2);for(let l of[-1,1])for(let h=0;h<14;h++){let u=h/14*6.283;c.ball(.06,G.gold,l*.78,Math.cos(u)*1,Math.sin(u)*1,1,1,1,0)}for(let l of[-1,1])c.box(.3,1.4,.3,G.woodD,l*.6,-1,.95),c.box(.3,1.4,.3,G.woodD,l*.6,-1,-.95);c.box(1.8,.25,2.4,G.woodD,0,-1.4,0)});let a=new _e({gradientMap:Ie,color:15324844,side:me,fog:!0});for(let c of[-1,1]){let l=new $(new hi(.97,20),a);l.userData.noMerge=!0,l.position.set(t+c*.7,o,e),l.rotation.y=Math.PI/2,i.h.add(l),i.drums.push(l)}for(let c of[-1,1]){let l=t+c*1.95;Jg(i,l,Math.max(s.ground(l,e),.4),e,Math.atan2(-c,0),c>0?15790310:G.red,!1,!0)}}function Zg(i,t,e){let{S:n,CL:s,fr:r}=i,o=Math.max(r.ground(t,e),.4),a=12;n.cyl(.1,.14,a,5,G.woodD,t,o,e),n.ball(.28,G.gold,t,o+a+.2,e,1,1,1,1),n.cyl(.12,0,1.3,4,G.gold,t,o+a+.4,e);let c=[G.black,G.red,G.blue,15292282,G.green];s.at(t,o,e,0,l=>{c.forEach((h,u)=>{let d=a-.8-u*1.7,f=3.6-u*.25;l.at(.1,d,0,.2*u,p=>{p.cyl(.62-u*.04,.14,f,8,h,0,0,0)},0,-Math.PI/2+.08*u),l.ball(.12,16777215,.5,d+.25,.45,1,1,1,0),l.ball(.12,16777215,.5,d+.25,-.45,1,1,1,0)}),[16234441,16773792,10146047,10937249,16756838].forEach((h,u)=>l.quad([0,a-.4,.25*u-.5],[0,a-.7,.25*u-.5],[2.8,a-2-u*.12,.25*u-.5],[2.8,a-1.7-u*.12,.25*u-.5],h))})}function xS(i,t){let{S:e,E:n,CL:s,fr:r}=i,o=r.river(t),a=o.zc-o.hw-1.8,c=o.zc+o.hw+1.8,l=12.8,h=3.9;for(let f of[a,c]){let p=Math.max(r.ground(t,f),.2);e.cyl(.14,.2,l-p+.8,6,G.woodM,t,p-.3,f),e.ball(.3,G.gold,t,l+.8,f,1,1,1,0)}let u=f=>[t,l-h*Math.sin(Math.PI*f),a+(c-a)*f],d=Math.max(12,Math.round((c-a)/1.8));for(let f=0;f<d;f++)ws(e,u(f/d),u((f+1)/d),.09,G.woodD);for(let f=1;f<d;f++){let p=u(f/d),x=lu[(f+Math.abs(t|0))%4];e.box(.04,.35,.04,G.woodD,p[0],p[1]-.17,p[2],!1),n.cyl(.42,.34,.95,6,x,p[0],p[1]-1.3,p[2]),e.cyl(.44,0,.22,6,G.black,p[0],p[1]-.34,p[2]),f%3===0&&we(i.h,16757610,3.6,p[0],p[1]-.85,p[2],.8)}for(let f=0;f<d;f++){let p=u((f+.1)/d),x=u((f+.9)/d);s.tri([p[0],p[1]-.05,p[2]],[x[0],x[1]-.05,x[2]],[(p[0]+x[0])/2,Math.min(p[1],x[1])-.7,(p[2]+x[2])/2],[G.red,G.cream,G.purple,G.orange][f%4])}}function*$g(i){lu.length=0,lu.push(G.red,G.cream,G.orange,15292282);let{S:t,E:e,CL:n,fr:s,rnd:r}=i;for(let c of[-86,-62,-38,38,62,86])xS(i,c),yield;for(let c=0;c<40;c++){let l=-62+c*3.15;Math.abs(l+10)<9||(e.cyl(.36,.3,.8,6,lu[c%4],l,oe.PH+1.6,oe.ZF+.5),t.box(.04,.5,.04,G.woodD,l,oe.PH+2.5,oe.ZF+.5,!1),c%3===0&&we(i.h,16757610,3.2,l,oe.PH+2,oe.ZF+.7,.8))}for(let c=0;c<14;c++){let l=-80+c*12+r()*3;if(Math.abs(l+10)<10)continue;let h=oe.PO-.8,u=Math.max(s.ground(l,h),.3);Yf(i,l,u,h,[G.red,G.purple,G.blue,G.orange,G.green][c%5])}let o=[-76,-60,-36,16,28,40,52,64,76],a=[-52,-30,-12,6,24,44,62];for(let c of o)qg(i,c,oe.PO-2.8,0),yield;for(let c of a){let l=s.river(c);qg(i,c,l.zc+l.hw+3.2,Math.PI),yield}for(let c of o)xc(i,c,oe.PO-.4,2,3,0),yield;for(let c of a){let l=s.river(c);xc(i,c,l.zc+l.hw+1.2,2,3,Math.PI),yield}xc(i,-10,oe.PO+1,2,1.2,0),xc(i,-16,oe.PO-6,4,3,0),xc(i,-4,oe.PO-6,4,3,0),Yg(i,-24,oe.PO-4.5),Yg(i,4,oe.PO-4.5),Zg(i,-17,oe.PO-1.6),Zg(i,-3,oe.PO-1.6)}var G={plaster:16184300,plasterS:15131093,tile:5726575,tile2:6713727,ridge:15658214,black:2763827,woodD:3811876,woodM:7162426,red:11876396,redD:9251363,gold:14989394,stone:10395033,stoneD:6118490,gravel:14341056,win:16767120,pink:zi.c,pink2:zi.c2,pink3:16304598,trunk:7294787,purple:5913996,cream:16773590,orange:15766330,blue:3104666,green:5214047},{PH:dn}=oe,_S=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function pu(i,t,e,n,s,r,o,a,c,l={}){var v;let h=l.n||5,u=(v=l.flare)!=null?v:.7,d=Math.max(4,Math.ceil(2*s/1.5)),f=Math.max(4,Math.ceil(2*r/1.5)),p=[],x=l.tile||G.tile,m=l.tile2||G.tile2,g=new Set([0,d,d+f,2*d+f]),_=2*d+2*f;for(let b=0;b<=h;b++){let M=b/h,A=s+(o-s)*M,y=r+(a-r)*M,T=e+c*Math.pow(M,1.55),R=[],P=(N,D)=>{let C=Math.pow(Math.abs(N)/Math.max(A,.01),6)*Math.pow(Math.abs(D)/Math.max(y,.01),6);R.push([t+N,T+u*Math.pow(1-M,2.2)*Math.min(1,C*1.1),n+D])};for(let N=0;N<d;N++)P(-A+2*A*N/d,-y);for(let N=0;N<f;N++)P(A,-y+2*y*N/f);for(let N=0;N<d;N++)P(A-2*A*N/d,y);for(let N=0;N<f;N++)P(-A,y-2*y*N/f);p.push(R)}i.orient([t,e-40,n]).loft(p,(b,M)=>g.has(b)||g.has((b+1)%_)?G.ridge:b%2?x:m);let E=p[0].map(b=>[b[0],b[1]-.55,b[2]]);return i.loft([p[0],E],G.plaster),i.free(),p}function $f(i,t,e,n,s,r,o,a,c,l,h={}){var E;pu(i,t,e,n,s,r,o,a,c,h);let u=e+c,d=(E=h.ov)!=null?E:.9,f=o+d,p=Math.max(4,Math.ceil(2*f/1.5)),x=5,m=h.tile||G.tile,g=h.tile2||G.tile2,_=[];for(let v=0;v<=x;v++){let b=-a+2*a*v/x,M=1-Math.abs(b)/a;_.push([b,l*Math.pow(M,1.35)])}i.orient([t,u-40,n]);for(let v=0;v<x;v++)for(let b=0;b<p;b++){let M=t-f+2*f*b/p,A=t-f+2*f*(b+1)/p,y=_[v],T=_[v+1];i.quad([M,u+y[1]+.15,n+y[0]],[A,u+y[1]+.15,n+y[0]],[A,u+T[1]+.15,n+T[0]],[M,u+T[1]+.15,n+T[0]],b%2?m:g)}for(let v of[-1,1]){let b=t+v*o;i.orient([t,u,n]);for(let A=0;A<x;A++){let y=_[A],T=_[A+1];i.quad([b,u,n+y[0]],[b,u,n+T[0]],[b,u+T[1],n+T[0]],[b,u+y[1],n+y[0]],G.plaster)}let M=t+v*(o+d);i.orient([t,u,n]);for(let A=0;A<x;A++){let y=_[A],T=_[A+1];i.quad([M,u+y[1]-.1,n+y[0]],[M,u+T[1]-.1,n+T[0]],[M,u+T[1]+.3,n+T[0]],[M,u+y[1]+.3,n+y[0]],G.woodD)}i.free(),i.box(.3,.9,.9,G.gold,b+v*.1,u+l*.38,n)}i.free(),i.box(2*f,.5,.7,G.ridge,t,u+l+.35,n);for(let v of[-1,1])i.box(1.1,1.2,1.2,G.black,t+v*f,u+l+.55,n);return u+l+.55}function Kf(i,t,e,n,s,r,o,a={}){let c=Math.max(2,Math.ceil(s/1.7)),l=4,h=a.tile||G.tile,u=a.tile2||G.tile2,d=[];for(let p=0;p<=l;p++){let x=-r/2+r*p/l,m=1-Math.abs(x)/(r/2);d.push([x,o*Math.pow(m,1.3)+(p===0||p===l?.18:0)])}i.orient([t,e-30,n]);for(let p=0;p<l;p++)for(let x=0;x<c;x++){let m=t-s/2+s*x/c,g=t-s/2+s*(x+1)/c,_=d[p],E=d[p+1];i.quad([m,e+_[1],n+_[0]],[g,e+_[1],n+_[0]],[g,e+E[1],n+E[0]],[m,e+E[1],n+E[0]],(p===l/2-.5||l/2+.5,x%2?h:u))}if(!a.noCap)for(let p of[-1,1]){let x=t+p*s/2;for(let m=0;m<l;m++){let g=d[m],_=d[m+1];i.quad([x,e,n+g[0]],[x,e,n+_[0]],[x,e+_[1],n+_[0]],[x,e+g[1],n+g[0]],G.plaster)}}i.free(),i.box(s,.38,.7,G.ridge,t,e+o+.2,n);let f=[[t-s/2,e-.5,n-r/2],[t+s/2,e-.5,n-r/2]];i.quad([t-s/2,e,n-r/2],[t+s/2,e,n-r/2],f[1],f[0],G.plaster),i.quad([t+s/2,e,n+r/2],[t-s/2,e,n+r/2],[t-s/2,e-.5,n+r/2],[t+s/2,e-.5,n+r/2],G.plaster)}function tx(i,t,e,n,s){let o=[];for(let a=0;a<=16;a++){let c=-t/2+t*a/16,l=1-Math.abs(c)/(t/2);o.push([c,e*(.5-.5*Math.cos(Math.PI*Math.pow(l,.9)))])}i.save().T(0,0,0,0,s),i.orient([0,-3,-n/2]);for(let a=0;a<16;a++){let c=o[a],l=o[a+1],h=a%2?G.tile:G.tile2;i.quad([c[0],c[1]+.2,.95],[l[0],l[1]+.2,.95],[l[0],l[1]+.2,-n],[c[0],c[1]+.2,-n],h),i.quad([c[0],c[1]-.1,.75],[l[0],l[1]-.1,.75],[l[0],l[1]+.2,.95],[c[0],c[1]+.2,.95],G.plaster),i.quad([c[0],-.7,.5],[l[0],-.7,.5],[l[0],l[1]-.1,.5],[c[0],c[1]-.1,.5],G.plaster),i.quad([c[0],c[1]-.55,.62],[l[0],l[1]-.55,.62],[l[0],l[1]+0,.62],[c[0],c[1]+0,.62],G.woodD),i.quad([c[0],-.7,-n],[l[0],-.7,-n],[l[0],l[1]+.2,-n],[c[0],c[1]+.2,-n],G.plaster)}i.box(.26,e*.5,n,G.ridge,0,e*.5+.3,-n/2+.45,!1),i.free(),i.ball(.5,G.gold,0,e*.55,.75,1,1,.8,1),i.restore()}function yS(i,t,e,n,s){i.save().T(0,0,0,0,s),i.orient([0,-2,-n/2]);for(let r of[-1,1])i.quad([0,e+.2,.5],[0,e+.2,-n],[r*(t/2+.45),-.1,-n],[r*(t/2+.45),-.1,.8],r>0?G.tile:G.tile2);i.tri([-t/2-.2,-.4,.5],[t/2+.2,-.4,.5],[0,e+.1,.5],G.plaster).tri([-t/2-.35,-.4,.58],[t/2+.35,-.4,.58],[0,e+.35,.58],G.woodD).tri([-t/2,-.4,.62],[t/2,-.4,.62],[0,e,.62],G.plaster),i.free().ball(.3,G.gold,0,e*.4,.7,1,1,.7,0),i.restore()}function ex(i,t=1){i.save().T(0,0,0,0,0,0,t);let e=[];for(let s=0;s<=9;s++){let r=s/9;e.push([-.4*Math.sin(r*2.4)*0+(-.1+r*.5-r*r*1.5)*1,.3+r*2.4-r*r*.2,0])}for(let s=0;s<=9;s++){let r=s/9,o=e[s],a=.52*(1-r*.8)+.08;i.ball(a,Rn(G.gold,.88+.2*(s%2)),o[0],o[1],o[2],1,1.05,.9,1),s>1&&s<9&&i.cyl(.13,0,.55,4,G.gold,o[0]-.05,o[1]+a*.85,0)}let n=e[9];i.ball(.3,G.gold,n[0]-.35,n[1]+.2,0,1.6,.5,.9,1).ball(.26,Rn(G.gold,1.1),n[0]-.7,n[1]+.55,0,1.3,.4,1.1,1),i.ball(.62,G.gold,.55,.35,0,1.35,.9,1,1).box(.9,.14,.6,G.gold,.95,.04,0).box(.9,.1,.55,G.gold,.95,.78,0).cyl(.07,0,.5,4,16777215,1.25,.15,.16).cyl(.07,0,.5,4,16777215,1.25,.15,-.16),i.ball(.1,G.black,.78,.62,.3,1,1,1,0).ball(.1,G.black,.78,.62,-.3,1,1,1,0);for(let s of[-1,1])i.cyl(.1,0,.9,4,G.red,.45,.95,s*.28);i.restore()}function Kg(i,t,e,n,s,r,o,a,c){let l=[o];for(;l[l.length-1]>r+.05;){let f=l[l.length-1],p=(f-r)/(o-r);l.push(Math.max(r,f-(.85+.5*(1-p)+c()*.35)))}let h=f=>a*Math.pow((o-f)/(o-r),1.6),u=f=>{let p=h(f),x=n+p,m=s+p;return[[t-x,f,e-m],[t+x,f,e-m],[t+x,f,e+m],[t-x,f,e+m]]},d=[[0,0,-1],[1,0,0],[0,0,1],[-1,0,0]];i.orient([t,(r+o)/2,e]);for(let f=0;f<l.length-1;f++){let p=u(l[f]),x=u(l[f+1]),m=.78+.22*((l[f]-r)/(o-r));for(let g=0;g<4;g++){let _=p[g],E=p[(g+1)%4],v=x[g],b=x[(g+1)%4],M=Math.hypot(E[0]-_[0],E[2]-_[2]),A=(T,R)=>{let P=[_[0]+(E[0]-_[0])*T,_[1],_[2]+(E[2]-_[2])*T],N=[v[0]+(b[0]-v[0])*T,v[1],v[2]+(b[2]-v[2])*T];return[P[0]+(N[0]-P[0])*R,P[1]+(N[1]-P[1])*R,P[2]+(N[2]-P[2])*R]};i.quad(A(0,0),A(1,0),A(1,1),A(0,1),G.stoneD);let y=-c()*.5/M*3;for(;y<1;){let T=(1.5+c()*1.5)/M,R=y+T,P=Math.max(0,y)+.05/M*1.3,N=Math.min(1,R)-.05/M*1.3;if(N>P){let D=d[g],C=tt=>tt,U=.1,k=(tt,O)=>{let X=A(tt,O);return[X[0]+D[0]*U,X[1],X[2]+D[2]*U]},W=Rn(G.stone,m*(.8+c()*.34));i.quad(k(P,.06),k(N,.06),k(N,.94),k(P,.94),W)}y=R}}}i.free()}function du(i,t,e,n,s,r=1,o=1.4){i.S.at(t,e,n,s,a=>{a.box(r+.3,o+.3,.2,G.woodD,0,0,.1).box(r+.5,.14,.4,G.woodM,0,o/2+.28,.2);for(let c=-1;c<=1;c++)a.box(.07,o,.06,G.woodD,c*r*.3,0,.28);a.box(r,.06,.06,G.woodD,0,0,.28)}),i.E.at(t,e,n,s,a=>{a.box(r,o,.05,G.win,0,0,.2)})}function jf(i,t,e,n,s,r,o,a,c,l={}){for(let h=0;h<a;h++){let u=(h+.5)/a-.5;for(let d of[1,-1])du(i,t+u*(s-3),n,e+d*(r/2),d>0?0:Math.PI,l.w,l.h)}for(let h=0;h<c;h++){let u=(h+.5)/c-.5;for(let d of[1,-1])du(i,t+d*(s/2),n,e+u*(r-3),d>0?Math.PI/2:-Math.PI/2,l.w,l.h)}}var vS=[0,Math.PI/2,Math.PI,-Math.PI/2];function jg(i,t,e,n,s,r,o,a,c,l){let h=n+(r-n)*l,u=s+(o-s)*l,d=e+a*Math.pow(l,1.55),f=a*1.55*Math.pow(l,.55),p=c%2?n-r:s-o,x=Math.atan2(f,Math.max(.3,p));return{px:i+(c===1?h:c===3?-h:0),py:d,pz:t+(c===0?u:c===2?-u:0),ry:vS[c],ang:x}}function hu(i,t,e,n,s){let{P:r,S:o,G:a}=i,c=n,l=0;return s.forEach((h,u)=>{let{w:d,d:f,h:p}=h;r.box(d,p,f,G.plaster,t,c+p/2,e,!1),o.box(d+.26,.7,f+.26,G.woodD,t,c+.35,e,!1),o.box(d+.22,.34,f+.22,G.woodD,t,c+p-.4,e,!1),h.wood&&o.box(d+.2,p*.36,f+.2,G.woodM,t,c+p*.2+.3,e,!1);for(let _ of[-1,1])for(let E of[-1,1])o.box(.42,p,.42,G.woodD,t+_*d/2,c+p/2,e+E*f/2,!1);let x=h.nx||3,m=h.nz||2;for(let _=1;_<x;_++)for(let E of[1,-1])o.box(.2,p-1.1,.12,G.woodD,t-d/2+d*_/x,c+p/2,e+E*(f/2+.03),!1);jf(i,t,e,c+p*.55,d,f,p,x,m,{});let g=s[u+1];if(h.ro){let _=h.ro,E=g?g.w/2:0,v=g?g.d/2:0,b=c+p-.25,M=d/2+_.o,A=f/2+_.o;if(_.irimoya){if(l=$f(r,t,b,e,M,A,d/2-.4,f/2-.4,_.rise,_.gh,{}),_.shachi)for(let y of[-1,1])a.at(t+y*(d/2-.4+.9+.6),l-.3,e,y>0?0:Math.PI,T=>ex(T,_.shachi))}else pu(r,t,b,e,M,A,E,v,_.rise,_);if(!_.irimoya){for(let y of _.k||[]){let T=jg(t,e,b,M,A,E,v,_.rise,y,.36);r.at(T.px,T.py,T.pz,T.ry,R=>tx(R,_.kw||8,_.kh||3.4,_.kd||5,T.ang))}for(let y of _.c||[]){let T=jg(t,e,b,M,A,E,v,_.rise,y,.42);r.at(T.px,T.py,T.pz,T.ry,R=>yS(R,_.cw||3.6,_.ch||1.6,_.cd||3,T.ang))}}c=b+_.rise}else c+=p}),{top:c,ridge:l}}function _c(i,t,e,n,s,r,o={}){let a=o.h||5,c=o.wd||4.4;i.P.at(t,e,n,r,l=>{l.box(s,a,c,G.plaster,0,a/2,0,!1),Kf(l,0,a-.3,0,s,c+2.2,o.rise||2.4,{})}),i.S.at(t,e,n,r,l=>{l.box(s+.1,.55,c+.22,G.woodD,0,.28,0,!1),l.box(s+.1,.3,c+.2,G.woodD,0,a-.2,0,!1);let h=Math.max(1,Math.floor(s/2.6));for(let u=0;u<h;u++){let d=-s/2+s*(u+.5)/h;for(let f of[1,-1])l.at(d,a*.5,f*(c/2+.13),f>0?0:Math.PI,p=>{u%2?p.quad([-.3,-.3,0],[.3,-.3,0],[.3,.3,0],[-.3,.3,0],G.black):p.tri([-.38,-.32,0],[.38,-.32,0],[0,.4,0],G.black)})}})}function yc(i,t,e,n,s,r,o={}){let a=n-t,c=s-e,l=Math.hypot(a,c),h=Math.atan2(-c,a),u=(t+n)/2,d=(e+s)/2,f=o.h||3,p=o.th||1.3;i.P.at(u,r,d,h,x=>{x.box(l,f,p,G.plaster,0,f/2,0,!1),Kf(x,0,f-.05,0,l,p+1.5,.95,{})}),i.S.at(u,r,d,h,x=>{x.box(l+.05,.3,p+.1,G.woodD,0,.15,0,!1);let m=Math.max(1,Math.floor(l/3));for(let g=0;g<m;g++){let _=-l/2+l*(g+.5)/m;x.at(_,f*.52,p/2+.13,0,E=>{if(g%3===0)E.tri([-.34,-.3,0],[.34,-.3,0],[0,.36,0],G.black);else if(g%3===1)E.quad([-.28,-.28,0],[.28,-.28,0],[.28,.28,0],[-.28,.28,0],G.black);else{let b=[];for(let M=0;M<8;M++)b.push([Math.cos(M/8*6.283)*.3,Math.sin(M/8*6.283)*.3,0]);for(let M=0;M<8;M++)E.tri([0,0,0],b[M],b[(M+1)%8],G.black)}})}})}function MS(i,t,e,n){let{P:s,S:r,G:o,E:a,CL:c}=i;s.box(13,4.8,7,G.plaster,t,n+2.4,e,!1),r.box(13.3,.8,7.3,G.woodD,t,n+.4,e,!1),r.box(13.2,.4,7.2,G.woodD,t,n+4.4,e,!1),r.box(4.2,3.7,.3,G.black,t,n+1.85,e+3.52,!1);for(let h of[-1,1])r.box(.55,4.2,.6,G.woodD,t+h*2.4,n+2.1,e+3.6,!1),r.box(.9,3.2,.15,G.red,t+h*3.2,n+1.7,e+3.75,!1);r.box(5.6,.55,.7,G.woodD,t,n+4.1,e+3.7,!1);for(let h of[-1,1])for(let u=0;u<2;u++)du(i,t+h*(4.4+u*1.5),n+2.6,e+3.5,0,.9,1.2);s.box(10,3.4,5,G.plaster,t,n+4.6+1.7,e,!1),r.box(10.26,.5,5.26,G.woodD,t,n+4.6+.25,e,!1),r.box(10.2,.3,5.2,G.woodD,t,n+4.6+3.2,e,!1),jf(i,t,e,n+6.6,10,5,3.4,3,1,{}),pu(s,t,n+4.55,e,6.5+1.1,3.5+1.1,5,2.5,2.2,{});let l=$f(s,t,n+4.6+3.15,e,5+1.8,2.5+1.8,4.4,2.1,1.9,2.6,{});for(let h of[-1,1])o.at(t+h*(4.4+.9+.6),l-.3,e,h>0?0:Math.PI,u=>ex(u,.5));s.at(t,n+4.55+2.2*Math.pow(.45,1.55),e+3.5+1.1-(1.1+1.5)*.45,0,h=>tx(h,6,2.5,3,.5));for(let h=0;h<5;h++){let u=t-5+h*2.5,d=n+3.4;c.box(1.9,2,.05,G.purple,u,d,e+3.62,!1),c.at(u,d,e+3.66,0,f=>{let x=[];for(let m=0;m<10;m++)x.push([Math.cos(m/10*6.283)*.5,Math.sin(m/10*6.283)*.5,0]);for(let m=0;m<10;m++)f.tri([0,0,0],x[m],x[(m+1)%10],G.cream)})}for(let h of[-1,1,0])a.box(.9,1.3,.9,G.red,t+h*6.1,n+3.3,e+4.2),r.box(.12,.9,.12,G.woodD,t+h*6.1,n+4.4,e+4.2),we(i.h,16757610,5,t+h*6.1,n+3.3,e+4.4,.85)}function bS(i,t,e,n){let{P:s,S:r,G:o,E:a}=i;s.box(8,4.6,6.4,G.plaster,t,n+2.3,e,!1),r.box(8.26,.6,6.66,G.woodD,t,n+.3,e,!1),r.box(8.2,.3,6.6,G.woodD,t,n+4.3,e,!1),r.box(3.2,3.5,.3,G.black,t,n+1.75,e+3.25,!1);for(let l of[-1,1])r.box(.5,3.9,.5,G.woodD,t+l*1.9,n+1.95,e+3.3,!1);r.box(4.6,.5,.6,G.woodD,t,n+3.9,e+3.4,!1),s.box(5.6,3,4.4,G.plaster,t,n+4.45+1.5-.15,e,!1),r.box(5.86,.4,4.66,G.woodD,t,n+4.45+.05,e,!1),jf(i,t,e,n+6,5.6,4.4,3,2,1,{}),pu(s,t,n+4.45,e,4+1.5,3.2+1.5,2.8,2.2,1.8,{});let c=$f(s,t,n+4.45+3,e,2.8+1.6,2.2+1.6,2.4,1.9,1.5,2.2,{});for(let l of[-1,1])a.box(.7,1,.7,G.red,t+l*3,n+3.2,e+3.6)}function Qg(i,t,e,n,s,r){let o=i.S;o.cyl(.3*s,.46*s,3.5*s,6,G.trunk,t,e,n);let a=(r()-.5)*.8;o.cyl(.16*s,.24*s,2.2*s,5,G.trunk,t+a*.8,e+2.8*s,n+a*.4);let c=[G.pink,G.pink2,G.pink3,Rn(G.pink,1.06)];for(let[l,h,u,d]of[[0,4.7,0,2.9],[1.9,4.1,.7,2],[-1.7,4.3,-.9,2.2],[.4,5.9,-.4,1.8]])o.ball(d*s*(.9+r()*.25),c[r()*4|0],t+l*s,e+h*s,n+u*s,1,.78,1,1);o.cyl(2.5*s,2.5*s,.04,9,G.pink3,t+(r()-.5)*1.4,e+.06,n+(r()-.5)*1.4,!0)}function fu(i,t,e,n,s=1){let r=i.S,o=G.stone;r.cyl(.5*s,.62*s,.3*s,7,o,t,e,n),r.cyl(.17*s,.2*s,1.3*s,6,o,t,e+.3*s,n),r.cyl(.5*s,.32*s,.2*s,7,o,t,e+1.6*s,n),r.box(.7*s,.6*s,.7*s,o,t,e+2.1*s,n,!1),i.E.box(.46*s,.4*s,.74*s,G.win,t,e+2.1*s,n).box(.74*s,.4*s,.46*s,G.win,t,e+2.1*s,n),r.cyl(.7*s,0,.55*s,4,o,t,e+2.4*s,n),we(i.h,16762746,2.8*s+.4,t,e+2.1*s,n,.8)}function SS(i){let{side:t,s:e,a:n,hwv:s}=i,r=Math.cos(n),o=Math.sin(n),a=ie(e),c=oe.PO,l=(d,f)=>{let p=t*(s+c-f),x=t*d;return[a+p*r-x*o,e-(p*o+x*r)]};return{toW:l,ground:(d,f)=>{let[p,x]=l(d,f);return Zn(p,x)},river:d=>{let f=t*d,p=0;for(let m=0;m<4;m++){let g=e-(p*o+f*r);p=(ie(g)-a+f*o)/r}let x=e-(p*o+f*r);return{zc:s+c-t*p,hw:be(x)}},side:t,s0:e,a:n,hw0:s}}function ws(i,t,e,n,s,r){let o=e[0]-t[0],a=e[1]-t[1],c=e[2]-t[2],l=Math.hypot(o,a,c);l<1e-4||i.save().T((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,Math.atan2(o,c),-Math.atan2(a,Math.hypot(o,c)),0).box(n,r||n,l,s).restore()}function*nx(i,t,e){let n=performance.now(),{side:s,hwv:r}=e,o=_S(t*7919+11),a=new Qt;a.position.set(s*(r+oe.PO),0,0),a.rotation.y=-s*Math.PI/2,i.add(a);let c={P:new gi,S:new gi,G:new gi,E:new gi,CL:new gi,h:a,rnd:o,fr:SS(e),ctx:e,drums:[]},{P:l,S:h,G:u,E:d,CL:f}=c,p=dn+12,x=-10,m={},g=0,_=performance.now(),E=O=>{let X=l.count()+h.count()+u.count()+d.count()+f.count(),J=performance.now();m[O]=[X-g,Math.round(J-_)],g=X,_=J};h.box(2*oe.X-1,.3,oe.ZF-oe.ZB-1,G.gravel,0,dn-.08,(oe.ZF+oe.ZB)/2,!1),Kg(h,0,(oe.ZF+oe.ZB)/2,oe.X,(oe.ZF-oe.ZB)/2,-1.8,dn,4.8,o),h.box(2*oe.X+1.4,.5,1.2,G.stone,0,dn+0,oe.ZF+.3,!1),Kg(h,0,-12,30,22,dn-.4,p,6.4,o),h.box(61.6,.3,45.6,G.gravel,0,p-.1,-12,!1),E("piedra"),yield;let v=5.8,b=24;for(let O=0;O<b;O++){let X=p-.5*(O+1),J=10.5+O;h.box(v,X-dn,1,Rn(G.stone,.92+.1*(O*7%3)/2),x,(dn+X)/2,J+.5,!1);for(let mt of[-1,1])h.box(.6,X+.8-dn,1,G.stone,x+mt*(v/2+.3),(dn+X+.8)/2,J+.5,!1);if(O%4===1)for(let mt of[-1,1])fu(c,x+mt*(v/2+1.5),X,J+.5,.8)}E("escalera"),yield;let M=12,A=-17,y=hu(c,M,A,p,[{w:26,d:22,h:5.4,nx:5,nz:4,wood:!0,ro:{o:2.6,rise:3.3,c:[0,2],cw:4.2,cd:3.2}},{w:23.4,d:19.4,h:4.8,nx:5,nz:4,ro:{o:2.4,rise:3,k:[0,2],kw:9,kh:3.6,kd:5.5}},{w:20.8,d:16.8,h:4.4,nx:4,nz:3,ro:{o:2.2,rise:2.8,c:[1,3],cw:4,cd:3.4}},{w:18.2,d:14.2,h:4,nx:4,nz:3,ro:{o:2,rise:2.6,k:[0,2],kw:7,kh:3,kd:4.5}},{w:15.6,d:11.8,h:3.8,nx:3,nz:2},{w:13.2,d:9.8,h:3.6,nx:3,nz:2,ro:{o:2.7,rise:3,gh:4.4,irimoya:!0,shachi:1}}]);E("keep"),yield;let T=hu(c,-22,-27,p,[{w:12,d:10,h:4.6,nx:3,nz:2,ro:{o:1.9,rise:2.2,k:[0],kw:5,kh:2.4,kd:3.4}},{w:9.2,d:7.4,h:3.8,nx:2,nz:2,ro:{o:2,rise:2.2,gh:3,irimoya:!0,shachi:.6}}]),R=hu(c,24,2,p,[{w:10.6,d:9,h:4.2,nx:3,nz:2,ro:{o:1.8,rise:2,k:[0],kw:5,kh:2.2,kd:3}},{w:8,d:6.6,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:2,gh:2.8,irimoya:!0,shachi:.55}}]),P=hu(c,-24,3,p,[{w:10,d:10,h:4.4,nx:3,nz:3,ro:{o:1.8,rise:2,c:[0],cw:3.4,cd:2.8}},{w:7.4,d:7.4,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:3.6}}]);u.cyl(.14,0,2.2,5,G.gold,-24,P.top+.2,3).ball(.32,G.gold,-24,P.top+.2,3);for(let[O,X,J]of[[y,M,A],[T,-22,-27],[R,24,2]])h.cyl(.07,.09,4.4,4,G.woodD,X,O.ridge+.1,J),c.CL.quad([X,O.ridge+4.2,J],[X+3.4,O.ridge+3.8,J],[X+3.4,O.ridge+2.4,J],[X,O.ridge+2.7,J],G.purple);_c(c,-8.5,p,-22,15,0),_c(c,-22,p,-12,20,Math.PI/2),_c(c,-16.5,p,3,5,0),_c(c,8.5,p,3,25,0),_c(c,22,p,-4.1,3.6,Math.PI/2),bS(c,-10,3,p),E("torres"),yield;let N=oe.ZF-1,D=oe.X-1,C=oe.ZB+1;yc(c,-D,N,-16.5,N,dn),yc(c,-3.5,N,D,N,dn),yc(c,-D,C,-D,N,dn),yc(c,D,N,D,C,dn),yc(c,D,C,-D,C,dn),MS(c,-10,N-3,dn),E("muros+puerta"),yield;for(let[O,X]of[[-44,-30],[44,-34],[-46,14]]){l.box(16,5.2,8,G.plaster,O,dn+2.6,X,!1),h.box(16.2,.7,8.2,G.woodD,O,dn+.5,X,!1),Kf(l,O,dn+5.1,X,17.5,10.4,3.2);for(let J=0;J<3;J++)du(c,O-4.5+J*4.5,dn+3.4,X+4.05,0,.9,1.1)}ES(c),E("kura+puente"),yield;let U=0,k=[];for(let O=0;O<7;O++){let X=15+O*3.6;k.push([x-8.2,X],[x+8.2,X])}for(let O=0;O<13;O++)k.push([-62+o()*50,-46+o()*84],[40+o()*22,-46+o()*84]);for(let O=0;O<6;O++)k.push([-40+o()*80,-49+o()*7]);for(let[O,X]of k)X>12&&X<38&&Math.abs(O-x)<7&&Math.abs(O-x)>1||Math.abs(O)<39&&X>-42&&X<19&&!(X>12&&Math.abs(O-x)>7)||X>37&&Math.abs(O-x)<10||(Qg(c,O,dn+.05,X,.8+o()*.5,o),++U%9===0&&(yield));for(let[O,X]of[[-15,-10],[-11,-16],[-16,-4],[-7,-8],[-3,-14]])Qg(c,O,p+.05,X,.75+o()*.3,o);for(let O=0;O<12;O++){let X=-61+O*10.4+o()*2;Math.abs(X-x)<10||fu(c,X,dn+.05,36,.9)}E("arboles"),yield,yield*$g(c),E("festival"),yield;let W=TS();a.add(l.mesh(W.plaster)),E("m-pl"),yield,a.add(h.mesh(W.solid)),E("m-s"),yield,a.add(u.mesh(W.gold),d.mesh(W.emis),f.mesh(W.cloth)),E("m-rest"),yield;for(let[O,X,J,mt]of[[M-13.5,p+4,A+11.5,26],[M+13.5,p+5,A+11.5,24],[M,p+13,A+11,26],[M,p+21,A+8,22],[M,p+28,A+6,18],[M,p+34,A+5,14],[-22,p+4,-21,14],[24,p+5,8,14],[-24,p+5,9,14],[-10,dn+5,oe.ZF+3,18]])we(a,16766354,mt,O,X,J,.2);E("focos"),i.updateMatrixWorld(!0);let tt=new L(M,p+14,A);return a.localToWorld(tt),i.userData.cas={parts:m,ms:0,tris:l.count()+h.count()+u.count()+d.count()+f.count(),mats:W,keep:{x:M,z:A,top:y.top,ridge:y.ridge},drums:c.drums,h:a,fr:c.fr,cw:tt},i.userData.cas.ms=performance.now()-n,i}function ES(i){let{S:t,E:e}=i,n=-10,s=61.5,r=44.4,o=1.2,a=dn+.2,c=16,l=5.4,h=x=>1.1*Math.sin(Math.PI*x)*(1-x),u=(x,m=0,g=0)=>{let _=x/c;return[n+m,o+(a-o)*_+h(_)+g,s+(r-s)*_]};for(let x=0;x<c;x++)ws(t,u(x),u(x+1),l,Rn(G.red,.9+.12*(x%2)),.3);for(let x of[-1,1]){let m=x*(l/2+.1);for(let g=0;g<=c;g++){let _=u(g,m);if(t.box(.22,1.5,.22,G.red,_[0],_[1]+.85,_[2],!1),g%5===0&&(t.ball(.2,G.gold,_[0],_[1]+1.75,_[2],1,1,1,0),e.box(.42,.6,.42,G.red,_[0],_[1]+2.2,_[2]),we(i.h,16757610,3.4,_[0],_[1]+2.2,_[2],.85)),g<c){let E=u(g+1,m);for(let v of[1.5,.8])ws(t,[_[0],_[1]+v,_[2]],[E[0],E[1]+v,E[2]],.12,G.red)}}}for(let x of[s-.4,(s+r)/2,r+.4])for(let m of[-1,1])t.cyl(.2,.26,o+2.6,6,G.woodD,n+m*(l/2-.2),-1.5,x);let d=oe.PO-3,f=oe.PO+5.2;for(let x=0;x<10;x++)t.box(3.6,.18,.62,Rn(G.woodM,.9+.2*(x%2)),n,.62,d+x*.9,!1);for(let x=0;x<6;x++)for(let m of[-1,1])t.cyl(.12,.15,2.4,5,G.woodD,n+m*1.7,-1.5,d+.6+x*1.6);for(let x of[-1,1])t.cyl(.14,.16,3.2,5,G.woodD,n+x*1.8,.6,f-.4),e.box(.4,.55,.4,G.red,n+x*1.8,3.95,f-.4),we(i.h,16757610,3.6,n+x*1.8,3.95,f-.4,.9);let p=i.fr;for(let x=0;x<6;x++){let m=d-.8-x*.9,g=p.ground(n,m);t.box(4.6,.22,.82,Rn(G.stone,.9+.1*(x%3)),n,Math.max(g,.5),m,!1)}for(let x of[-1,1])for(let m=0;m<3;m++){let g=58.5-m*1.4,_=n+x*(4.6+m*.9),E=p.ground(_,g);Yf(i,_,Math.max(E,.3),g,[G.red,G.purple,G.blue][m%3])}}function Yf(i,t,e,n,s,r=6.2){i.S.cyl(.07,.09,r,5,G.woodD,t,e,n),i.S.box(1.3,.09,.09,G.woodD,t+.6,e+r-.2,n,!1),i.CL.box(1.1,r*.66,.04,s,t+.62,e+r*.62,n,!1),i.CL.box(1.14,.26,.05,G.cream,t+.62,e+r-.5,n,!1)}function TS(){let i=t=>new _e(Object.assign({gradientMap:Ie,color:16777215,vertexColors:!0,fog:!1},t||{}));return{plaster:i(),solid:i(),gold:i({emissive:0}),cloth:i({side:me}),emis:new Pe({color:16777215,vertexColors:!0,fog:!0})}}var uu=(i,t,e)=>{i.r+=t.r*e,i.g+=t.g*e,i.b+=t.b*e},Zf=new pt,Jf=new pt(1,.8,.5),wS=new pt(1,.72,.3);function ix(i,t,e){let n=i.userData.cas;if(!n||!n.cw)return;let s=n.mats,r=n.cw.x-F.px,o=n.cw.z-F.pz,a=Math.hypot(r,o),c=Be(70,640,a)*.8;Zf.copy(At.fog.color);let l=1-c;for(let f of[s.plaster,s.solid,s.cloth])f.color.setScalar(1-c),f.emissive.copy(Zf).multiplyScalar(c);uu(s.plaster.emissive,Jf,t*.34*l),uu(s.solid.emissive,Jf,t*.1*l),uu(s.cloth.emissive,Jf,t*.22*l),s.gold.color.setScalar(1-c),s.gold.emissive.copy(Zf).multiplyScalar(c),uu(s.gold.emissive,wS,(.14+.35*t)*l);let h=.3+.7*t;s.emis.color.setRGB(h,h*.95,h*.9);let u=performance.now(),d=Math.exp(-Math.max(0,u-(ce.hitT||0))/160);for(let f of n.drums){let p=1+.05*d;f.scale.set(p,p,1)}}function sx(i){let t=AS(i);return t.userData.job?t:au(t)}function AS(i){let t=rn(i),e=xn(t),n=Ke(i),s=new Qt,r=be(t),o=n===6||Q(i,9)>.5?1:-1;s.position.set(ie(t),0,-t),s.rotation.y=-e;let a=(f,p)=>{let x=-e;return Zn(ie(t)+f*Math.cos(x)+p*Math.sin(x),t-(-f*Math.sin(x)+p*Math.cos(x)))},c=13199183,l=11569004,h=8018508,u=zi.c,d=8368266;if(n===0){let f=r*2+12,p=18,x=11880250,m=10329242,g=M=>3.4+1.7*(1-M*M);for(let M=0;M<p;M++){let A=(M+.5)/p*2-1,y=A*f/2,T=g(A),R=qt(s,f/p+.4,.34,4.2,l,y,T,0,{map:Ye("plank")});R.rotation.z=-A*.4,qt(s,.07,.34,4.3,h,y-f/p/2,T,0).rotation.z=-A*.4}for(let M of[-1.7,1.7])for(let A=0;A<p;A++){let y=(A+.5)/p*2-1,T=y*f/2,R=qt(s,f/p+.5,.4,.3,7293498,T,g(y)-.4,M);R.rotation.z=-y*.4}for(let M of[-2,2]){for(let A=0;A<=p;A++){let y=A/p*2-1,T=y*f/2,R=g(y);qt(s,.18,1.5,.18,x,T,R+.95,M);let P=new $(new pe(.16,8,6),Xt(14264410));if(P.position.set(T,R+1.8,M),s.add(P),A%3===0){let N=new $(new Le(.22,.22,.45,8),new Pe({color:16767392}));N.position.set(T,R+2.35,M),s.add(N);let D=new $(new Oe(.3,.2,8),Xt(x));D.position.set(T,R+2.68,M),s.add(D),we(s,16762746,3,T,R+2.35,M,.8)}}for(let A=0;A<p;A++){let y=(A+.5)/p*2-1,T=y*f/2,R=g(y),P=qt(s,f/p+.2,.14,.14,x,T,R+1.5,M);P.rotation.z=-y*.4;let N=qt(s,f/p+.2,.1,.1,x,T,R+.7,M);N.rotation.z=-y*.4}}let _=g(0);for(let[M,A]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])Ve(s,.22,.26,4.2,x,M,_+2.1,A,8);let E=new $(new Oe(4.6,2.4,4),Xt(5982799));E.rotation.y=Math.PI/4,E.position.y=_+5.4,E.scale.set(1,1,.8),s.add(E),qt(s,6.4,.3,.3,14264410,0,_+4.35,-1.8),qt(s,6.4,.3,.3,14264410,0,_+4.35,1.8);let v=new $(new pe(.4,10,8),new Pe({color:16764810}));v.position.set(0,_+3.6,0),s.add(v),we(s,16762746,6,0,_+3.6,0,.9);let b=[15245466,15913098,10274736,10466268];for(let M=0;M<12;M++){let A=(M+.5)/12*2-1,y=A*(f/2-2),T=g(A)+2.7+Math.sin(M*1.7)*.06,R=new $(new an(.5,.7),Xt(b[M%4],{side:me}));R.position.set(y,T,0),R.rotation.set(0,0,Math.PI),s.add(R)}qt(s,f-4,.04,.04,7293498,0,g(0)+3.1,0).scale.y=1,[-1,1].forEach(M=>{let A=M*(f/2+.6);qt(s,3.4,5.5,5,m,A,.3,0,{map:Ye("stone")}),qt(s,3.6,.35,5.3,8223610,A,3.2,0);for(let R=0;R<3;R++)qt(s,1.2,.3,4.2,m,M*(f/2+2.6+R*1.1),.2+R*0,0).position.y=2.2-R*.8;let y=new $(new pe(.5,8,6),Xt(12039082));y.scale.set(.9,1.1,1),y.position.set(A,3.9,2.2),s.add(y);let T=y.clone();T.position.z=-2.2,s.add(T)}),[-.28,.28].forEach(M=>{qt(s,1.8,5.2,4,m,M*f,.4,0,{map:Ye("stone")})})}else if(n===1)[-1,1].forEach(f=>{Ve(s,.32,.38,7,c,f*3.6,2,0,10)}),qt(s,10.5,.5,1,c,0,5.7,0),qt(s,11.8,.35,1.3,5982794,0,6.15,0),qt(s,8,.28,.5,c,0,4.8,0),we(s,16762746,3,0,4.2,0,.6);else if(n===2){let f=(m,g,_,E,v,b,M,A)=>{let y=a(g,_);m.position.set(g,y-.2,_),m.rotation.y=A,s.add(m),qt(m,E,b,v,15258550,0,b/2,0,{map:Ye("plank")}),qt(m,E+.3,.35,v+.3,7293498,0,.1,0);let T=new $(new Oe(Math.max(E,v)*.82,b*.7,4),Xt(M));T.rotation.y=Math.PI/4,T.position.y=b+b*.3,T.scale.set(E/Math.max(E,v),1,v/Math.max(E,v)),m.add(T);let R=new Pe({color:16769184}),P=qt(m,.9,.9,.12,16769184,-E*.22,b*.55,v/2+.02);P.material=R;let N=qt(m,.9,.9,.12,16769184,E*.22,b*.55,v/2+.02);N.material=R,qt(m,.8,1.5,.14,8014394,0,.85,v/2+.04),we(m,16762746,4.2,-E*.22,b*.55,v/2+.6,.85),we(m,16762746,4.2,E*.22,b*.55,v/2+.6,.85);let D=qt(m,.7,1.6,.7,9075314,E*.25,b+1.1,-v*.2),C=ii(16777215,3);C.material.blending=Bi,C.material.opacity=.3,C.position.set(E*.25,b+2.8,-v*.2),m.add(C);let U=new $(new pe(.22,8,6),Xt(14245962,{emissive:8006170}));U.position.set(E/2-.2,b*.78,v/2+.5),m.add(U),we(m,16751210,2.4,E/2-.2,b*.78,v/2+.5,.8)},p=[11759722,9398879,11042906,8219250],x=0;for(let m of[-1,1])for(let g=0;g<7;g++){let _=-26+g*8.5+Q(i,g+m*9)*3,E=r+7+Q(i,g+30+m)*6+g%2*5,v=4+Q(i,g+50)*2.5,b=3.6+Q(i,g+60)*2,M=2.6+Q(i,g+70)*1.6;f(new Qt,m*E,_,v,b,M,p[(g+x)%4],m>0?-Math.PI/2:Math.PI/2),x++}for(let[m,g]of[[-1,-10],[1,6],[-1,18]]){let _=new Qt;_.position.set(m*(r-3.2),.35,g),s.add(_),qt(_,8,.25,2.2,11569004,m*-0+0,0,0,{map:Ye("plank")}).position.x=m*4;for(let b of[0,3,6.4])for(let M of[-1,1])Ve(_,.1,.12,1.8,7293498,m*b+0,.2,M,5);let E=new $(new pe(.26,8,6),new Pe({color:16766362}));E.position.set(m*6.4,1.5,1),_.add(E),we(_,16762746,3.6,m*6.4,1.5,1,.9);let v=new $(new pe(1,10,6),Xt(6965818));v.scale.set(.6,.3,1.9),v.position.set(m*-3.2,-.15,2.2),_.add(v)}for(let m=0;m<18;m++){let g=m/17,_=-24+g*48,E=m%2?1:-1,v=new $(new pe(.25,8,6),new Pe({color:m%3?16766362:16751226}));v.position.set(E*(r+4+Math.sin(m)*1.2),4.2+Math.sin(m*1.9)*.5,_),s.add(v),we(s,m%3?16762746:16751210,3.2,v.position.x,v.position.y,_,.85)}we(s,16756838,46,o*(r+11),6,0,.28);for(let m of[-1,1])Ve(s,.25,.3,6.5,11880250,m*(r-.5),2.6,-34,8);qt(s,r*2,.4,.5,11880250,0,5.8,-34),we(s,16762746,4,-r*.5,5.2,-34,.9),we(s,16762746,4,r*.5,5.2,-34,.9),we(s,16762746,4,0,5.2,-34,.9)}else if(n===3){Cr(s,a,r,"\u685C",!1,"#d98aa6");for(let p=0;p<14;p++){let x=o*(r+4.5+Q(i,p)*15),m=(p-6.5)*4.1+Q(i,p+20)*2.4,g=a(x,m),_=new Qt,E=.9+Q(i,p+60)*.5;_.position.set(x,g,m),s.add(_),Ve(_,.26*E,.44*E,3.4*E,7294787,0,1.7*E,0,6);let v=Ve(_,.14*E,.2*E,2.2*E,7294787,.7*E,3.6*E,0,5);v.rotation.z=-.7;for(let[M,A,y,T,R]of[[0,4.5,0,2.7,u],[1.7,4,.6,1.9,zi.c2],[-1.5,4.2,-.8,2.1,u],[.4,5.5,-.4,1.6,16304598]]){let P=new $(new Mn(T*E*(.92+Q(i,p+M*7)*.2),1),Xt(R));P.scale.y=.78,P.position.set(M*E,A*E,y*E),_.add(P)}let b=new $(new hi(2.6*E,9).rotateX(-Math.PI/2),Xt(16173528,{side:me}));b.position.set(Q(i,p+9)*1.5-.7,.07,Q(i,p+19)*1.5-.7),_.add(b),p%3===0&&we(_,16758475,7,0,4.6*E,0,.22)}for(let p of[-1,1]){let x=Ho(s,a,o*(r+3.4),p*10+2,1.1);x.position.y=a(o*(r+3.4),p*10+2)}let f=qt(s,3.2,.28,.9,11880250,o*(r+7.5),a(o*(r+7.5),-3)+.55,-3);qt(s,3.2,.7,.12,11880250,o*(r+7.5),a(o*(r+7.5),-3)+1,-3.5)}else if(n===4){Cr(s,a,r,"\u9DFA",!1,"#5f8aa8");let f=900,p=new Pn(Af,Ss.material,f);p.frustumCulled=!1;let x=0;for(let g=0;g<f;g++){let _=g%2?1:-1,E=_*(r-5.5+Q(i,g)*13),v=(Q(i,g+50)-.5)*84;if(Math.abs(E)<r-5.8)continue;let b=1.1+Q(i,g+70)*1.5,M=Math.max(-.25,a(E,v)-.15);Sn.set(E,M,v),bn.setFromAxisAngle(Es,Q(i,g+90)*6.28),un.set(b,b*(1+Q(i,g+30)*.9),b),je.compose(Sn,bn,un),p.setMatrixAt(x,je),p.setColorAt(x,Je.set(Wh[Q(i,g+4)*4|0])),x++}p.count=x,p.userData.keep=!0,s.add(p),s.userData.hp=[];for(let g=0;g<20;g++){let _=g%2?1:-1,E=g%3!==0,v=_*(r-(E?2.2+Q(i,g)*3.5:-1.5+Q(i,g)*2)),b=(Q(i,g+10)-.5)*70,M=.95+Q(i,g+5)*.5,A=Q(i,g+3)*6.28,y=E?-.12:a(v,b)-.1;if(g>=12){s.userData.hp.push([v,y,b,A,M,{gone:0}]);continue}let T=ru(M,Q(i,g)*6.28);T.position.set(v,y,b),T.rotation.y=A,s.add(T)}let m=ii(16777215,10);m.material.blending=Bi,m.material.opacity=.25,m.position.set(0,1.2,0),s.add(m)}else if(n===5){Cr(s,a,r,"\u9418",!0,"#9a3a30");let f=o*(r+19),p=a(f,0),x=new Qt;x.position.set(f,p,0),x.rotation.y=-o*Math.PI/2,s.add(x);let m=10131604;qt(x,17,3,15,m,0,-.5,0),qt(x,15,.5,13,11841964,0,1.25,0),qt(x,13,.5,11,12763064,0,1.75,0);for(let b=0;b<7;b++)qt(x,6,.4,1.1,m,0,1.5-b*.28,7.9+b*.95);for(let[b,M]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])Ve(x,.34,.38,5,12730163,b,4.6,M,8);qt(x,9.4,.5,.7,12730163,0,7.3,3.4),qt(x,9.4,.5,.7,12730163,0,7.3,-3.4),qt(x,.7,.5,7.2,12730163,-4.2,7.3,0),qt(x,.7,.5,7.2,12730163,4.2,7.3,0),qt(x,9,.35,.6,14264410,0,6.7,3.4),qt(x,9,.2,7,8018508,0,2.15,0),su(x,9.6,2.7,9.1,4999770),qt(x,5.2,1.5,5.2,15721421,0,8.7,0),qt(x,5.5,.2,5.5,12730163,0,7.9,0),su(x,5.3,2,11.2,4144461),Ve(x,.1,.1,1.6,14264410,0,13,0,6);let g=new $(new pe(.34,8,6),Xt(14264410,{emissive:5913104}));g.position.y=12.3,x.add(g),qt(x,.5,.5,5,4864562,0,6.8,0),Ve(x,.05,.05,1.1,3811874,0,6.1,0,4);let _=Ve(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});Ve(x,.8,.8,.12,14264410,0,5.6,0,12),we(x,16762746,5,0,4.6,0,.6);let E=Ve(x,.2,.2,4,6965818,0,3.3,2.6,6);E.rotation.x=Math.PI/2,E.position.set(0,3.5,2.6),Ve(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let b of[-4,4])for(let M of[3.4,-3.4]){let A=new $(new pe(.34,8,6),Xt(14245962,{emissive:9054746}));A.scale.y=1.3,A.position.set(b*1.12,6.2,M*1.05),x.add(A),we(x,16751210,3,b*1.12,6.2,M*1.05,.85)}for(let b of[-3.4,3.4])for(let M of[10.4,14.5])Ho(x,()=>0,b,M,1.15).position.y=-.1;for(let b=0;b<5;b++)qt(x,2.6,.12,1.6,m,0,-.3,10+b*2.1);Bg(x,0,-.4,17.5,1.1,12730163);let v=Fg(x,0,1.5,-3.5);v.position.set(o>0?-11.5:11.5,1.5,-2.5),v.scale.setScalar(1.1)}else if(n===6){let f=o*(r+3.6),p=a(f,0),x=new Qt;x.position.set(f,p,0),s.add(x),Cr(s,a,r,"\u6EDD",!1,"#3f7a8a");let m=M=>Xt(M);for(let M=0;M<22;M++){let A=3+Q(i,M)*3.5,y=o*(7.8+Q(i,M+5)*9),T=Q(i,M+9)*15+(y*o<8?3:0),R=(Q(i,M+13)-.5)*17,P=new $(new Mn(A,1),m(M%3?8030846:7114616));P.position.set(y,T,R),P.scale.y=1.2,x.add(P);let N=new $(new Mn(A*.75,1),m(8369002));N.position.set(y,T+A*.65,R),N.scale.set(1.05,.45,1.05),x.add(N)}for(let M=0;M<10;M++){let A=1+Q(i,M+60)*1.2,y=new $(new Mn(A,0),m(8030846));y.position.set(-o*(.5+Q(i,M+70)*3),A*.4,(Q(i,M+80)-.5)*12),x.add(y)}let g=new $(new an(7,19,1,1),js);g.position.set(-o*.5,9.6,0),g.rotation.y=Math.PI/2,x.add(g);let _=new $(new an(3,14,1,1),js);_.position.set(-o*.7,7,-5.6),_.rotation.y=Math.PI/2,_.rotation.z=.04,x.add(_);let E=new $(new hi(6.5,24).rotateX(-Math.PI/2),new Pe({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));E.position.set(-o*3.6,.1,0),x.add(E);let v=new $(new an(3.4,4.6).rotateX(-Math.PI/2),js);v.rotation.y=o>0?Math.PI/2:-Math.PI/2,v.position.set(-o*3.4,.12,0),x.add(v);for(let M=0;M<6;M++){let A=ii(16777215,5+Q(i,M)*3);A.material.blending=Bi,A.material.opacity=.5,A.position.set(-o*(1+Q(i,M+3)*4),.5+Q(i,M)*.8,(Q(i,M+9)-.5)*7),x.add(A)}let b=ii(16777215,26);b.material.blending=Bi,b.material.opacity=.5,b.position.set(-o*3,4,0),x.add(b)}else if(n===7){Cr(s,a,r,"\u8336",!0,"#a9453a");let f=o*(r-3),p=new Qt;p.position.set(f,0,0),s.add(p);for(let g of[-2.4,2.4])for(let _ of[-2,2])Ve(p,.12,.12,3,h,g,-.2,_,5);qt(p,6,.3,5,l,0,1.3,0),qt(p,4.6,2.4,3.6,15258550,0,2.6,0),qt(p,4.8,.2,3.8,5982794,0,3.9,0),qt(p,4.7,.15,3.7,5982794,0,1.45,0);let x=new $(new Oe(4.6,2,4),Xt(9398879));x.rotation.y=Math.PI/4,x.position.y=4.8,p.add(x),qt(p,1.2,1.1,.1,16769184,0,2.7,1.85).material=new Pe({color:16769184}),we(p,16762746,4,0,2.7,2.1,.9);for(let g of[-.55,.55]){let _=new $(new an(1,1.4),new _e({gradientMap:Ie,map:Xf("\u8336","#2f3f6b","#ffffff",128,160),side:me}));_.position.set(g,2.9,1.93),p.add(_)}for(let g of[-2.4,2.4]){let _=new $(new pe(.3,8,6),Xt(14245962,{emissive:8006170}));_.scale.y=1.3,_.position.set(g,3.2,2.3),p.add(_),we(p,16751210,2.6,g,3.2,2.3,.8)}Ve(p,.05,.05,2.6,l,3.4,2.2,3.2,5);let m=new $(new Oe(1.7,.7,12),Xt(12730163));m.position.set(3.4,3.6,3.2),p.add(m),qt(p,1.8,.15,.6,l,3.4,1.5,3.2),qt(p,1.8,.05,.62,12730163,3.4,1.6,3.2);for(let g of[-1,1]){let _=Ho(s,a,f+g*6,5,1);_.position.y=a(f+g*6,5)}}else if(n===8){Cr(s,a,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let f of[-1,1])for(let p=0;p<6;p++)Ho(s,a,f*(r+3+Q(i,p)*2.5),-45+p*18+Q(i,p+3)*4);for(let f=0;f<12;f++){let p=f%2?1:-1,x=p*(r+4+Q(i,f)*12),m=(Q(i,f+20)-.5)*110,g=new $(new an(3.6,22),new Pe({map:jn,color:16773296,transparent:!0,opacity:.14,blending:kn,depthWrite:!1,side:me}));g.position.set(x,a(x,m)+10,m),g.rotation.set(0,Q(i,f+9)*3,p*.25),s.add(g)}}else if(n===10)s.userData.job=nx(s,i,{gy:a,hwv:r,side:o,s:t,a:e});else for(let f=0;f<46;f++){let p=(Q(i,f)-.5)*r*1.5,x=(Q(i,f+40)-.5)*34,m=new $(new hi(.8+Q(i,f+7)*.5,10).rotateX(-Math.PI/2),Xt(8372106,{side:me}));if(m.position.set(p,.05,x),s.add(m),f%4===0){let g=new $(new Mn(.34,0),Xt(16098493,{emissive:9058896}));g.scale.y=1.2,g.position.set(p,.3,x),s.add(g),we(s,16752576,1.8,p,.5,x,.35)}}return s}var Qs=new L,Qf=new L,tp=new gn,RS=matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;function rx(i){if(ct.cine||RS||ct.X.photo)return;let t=ri.get(i);if(!t)return;let e=rn(i),n=be(e),s=Ke(i),r=s===6||Q(i,9)>.5?1:-1,o=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0],[r*(n+80),36,r*12,1]][s],a=o[3]===1,c=a?Math.abs(o[0])+n*.3:[46,30,52,0,40,0,0,0,30,30,0][s];ct.cine={k:i,g:t,t:0,dur:s===10?17:11.5,fx:o[0],fy:o[1],fz:o[2],sd:r,sided:a,R:Math.max(30,c),h:[10,6,12,10,8,13,10,7,6,9,-26][s]}}function ox(i){if(!ct.cine){ct.cineW=0;return}ct.cine.t+=i,!ct.cine.snapped&&ct.cine.t>5.4&&(ct.cine.snapped=!0,ct.X.snap(Ke(ct.cine.k)));let t=ct.cine,e=pf(0,2.6,t.t)*(1-pf(t.dur-2.6,t.dur,t.t));if(ct.cineW=e,t.t>=t.dur){ct.cine=null,ct.cineW=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),o=t.sided?-t.sd:0,a=t.sided?0:1,c=o*s+a*r,l=-o*r+a*s;Qs.set(t.fx+c*t.R,t.fy+t.h,t.fz+l*t.R),t.g.localToWorld(Qs);let h=Zn(Qs.x,-Qs.z);Qs.y=Math.max(Qs.y,h+3),Qf.set(t.fx,t.fy,t.fz),t.g.localToWorld(Qf),tp.position.copy(Qs),tp.lookAt(Qf),pn.position.lerp(Qs,e),pn.quaternion.slerp(tp.quaternion,e)}var tr=0,ax=new fn,cx=new fn,ep=new gn,np=new L,mu=new L,gu=new L,lx=We("cam");function Ir(i){ct.camMode=i,lx.textContent=i?"Vista 3\xAA":"Vista 1\xAA";try{localStorage.setItem("rio3d-cam",i)}catch{}}lx.onclick=()=>Ir(1-ct.camMode);addEventListener("keydown",i=>{i.code==="KeyC"&&Ir(1-ct.camMode)});try{Ir(+localStorage.getItem("rio3d-cam")||0)}catch{}function hx(i,t){let e=Math.sin(F.t*.5)*.01;pn.position.set(F.px,1.18+t,F.pz).addScaledVector(new L(Math.sin(F.psi),0,-Math.cos(F.psi)),-.15),F.pitch+=(-Ks.pitch*.22-F.pitch)*2*i,pn.rotation.set(F.pitch-.06,-F.psi+e,-F.steer*.02,"YXZ"),ct.camK+=((ct.camMode?1:0)-ct.camK)*Math.min(1,i*2.2),ct.camK<.01&&(tr=F.psi);{let n=innerWidth/innerHeight<1?82:68,s=n*(1-.3*ct.camK*ct.camK*(3-2*ct.camK));Math.abs(pn.fov-s)>.05&&(pn.fov=s,pn.updateProjectionMatrix())}if(ct.camK>.003){let n=ct.camK*ct.camK*(3-2*ct.camK);cx.copy(pn.quaternion),tr+=(F.psi-tr)*Math.min(1,i*1.6);let s=tr+.3;gu.set(Math.sin(s),0,-Math.cos(s)),np.set(F.px,6.2+t,F.pz).addScaledVector(gu,-10.8),gu.set(Math.sin(tr),0,-Math.cos(tr)),mu.set(F.px,.3,F.pz).addScaledVector(gu,6.5),mu.x+=Math.cos(tr)*1.9,mu.z+=Math.sin(tr)*1.9,ep.position.copy(np),ep.lookAt(mu),ax.copy(ep.quaternion),pn.position.lerp(np,n),pn.quaternion.copy(cx).slerp(ax,n)}}var xu=3120762,ip=4176271,er=14989394,ux=12730163,vc=15986400;function dx(i){let t=Lo(i),e=xn(t),n=Q(i,9)>.5?1:-1,s=be(t),r=new Qt;r.position.set(ie(t),0,-t),r.rotation.y=-e;let o=(D,C)=>{let U=-e;return Zn(ie(t)+D*Math.cos(U)+C*Math.sin(U),t-(-D*Math.sin(U)+C*Math.cos(U)))},a=n*(s+14),c=Math.max(o(a,0),.4),l=new Qt;l.position.set(a,c,0),l.scale.setScalar(1.5),r.add(l);let h=new gi,u=new gi,d=new gi,f=new gi,p={S:h,E:d,h:l};h.boxB(11,1.1,11,G.stone,0,-1,0).boxB(9,1.2,9,Rn(G.stone,1.08),0,.1,0).boxB(7,1.3,7,Rn(G.stone,.95),0,1.3,0).boxB(6.2,.3,6.2,G.gravel,0,2.6,0),u.boxB(7.4,.2,7.4,er,0,2.55,0,!1);for(let[D,C]of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]])fu(p,D,.2,C,1);for(let D of[-1,1])for(let C=0;C<4;C++)h.boxB(.5,.5,.5,Rn(G.stone,.9),D*5.7,.1+0,-3.5+C*2.3,!1);let x=2.9,m=new yo([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13,2.4],[0,12.5,4.2]].map(D=>new L(D[0],D[1]+x-.4,D[2]))),g=64,_=m.getPoints(g),E=[],v=new L(0,1,0),b=D=>.2+.98*Math.pow(Math.sin(Math.min(1,D*1.5)*Math.PI/2),.7)*(1-.32*D);for(let D=0;D<=g;D++){let C=D/g,U=_[D],k=m.getTangent(C),W=new L().crossVectors(v,k);W.lengthSq()<1e-4&&W.set(1,0,0),W.normalize();let tt=new L().crossVectors(k,W).normalize(),O=b(C),X=[];for(let J=0;J<8;J++){let mt=J/8*6.2832,wt=Math.cos(mt),ae=Math.sin(mt);X.push([U.x+(W.x*wt+tt.x*ae)*O,U.y+(W.y*wt+tt.y*ae)*O,U.z+(W.z*wt+tt.z*ae)*O])}E.push(X)}h.loft(E,(D,C)=>D>=5&&D<=7?Rn(er,.95+.1*(C%2)):Rn(C%2?ip:xu,.92+.12*((C>>1)%2)));for(let D=3;D<g-4;D+=2){let C=D/g,U=_[D],k=m.getTangent(C),W=b(C),tt=.35+W*.9;h.at(U.x,U.y+W*.95,U.z,Math.atan2(k.x,k.z),O=>{O.cyl(.2*tt,0,1.5*tt,4,D%4?ux:er,0,0,0)},-Math.atan2(k.y,Math.hypot(k.x,k.z))*.6)}for(let[D,C]of[[22,1],[22,-1],[40,1],[40,-1]]){let U=_[D],k=b(D/g),W=[U.x+C*(k+.6),U.y-k*.8,U.z+.2],tt=[U.x+C*(k+1.6),Math.max(x,U.y-k*.8-2.2),U.z+.6];ws(h,[U.x+C*k*.7,U.y-k*.4,U.z],W,.38,xu),ws(h,W,tt,.3,ip);for(let O=-1;O<=1;O++)h.at(tt[0]+C*.15,tt[1],tt[2]+O*.22,0,X=>X.cyl(.09,0,.55,4,vc,0,-.1,0),0,0,C*-1.1)}{let D=_[40],C=b(40/g);d.ball(.55,16762986,D.x+(C+1.7),Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,1,1,1,1),we(l,16766354,6,D.x+C+1.7,Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,.9)}{let D=_[0];for(let C=0;C<5;C++)h.at(D.x,D.y,D.z-.2,(C-2)*.28,U=>U.cyl(.3,0,1.8,4,C%2?ux:er,0,0,0),-1,0,0)}let M=_[g],A=m.getTangent(1);h.at(M.x,M.y,M.z,0,D=>{D.ball(1.15,ip,0,0,.3,1,.92,1.25,1).boxB(1.15,.62,1.9,xu,0,-.5,1.1).box(1.3,.3,1.2,er,0,.45,.9),D.at(0,-.88,1.05,0,C=>C.box(1,.32,1.8,Rn(xu,.9),0,0,.5),.38);for(let C of[-1,1]){for(let U=0;U<3;U++)D.cyl(.09,0,.45,4,vc,C*.44,-.45,1.4+U*.5),D.at(C*.44,-.8,1.4+U*.5,0,k=>k.cyl(.08,0,.38,4,vc,0,0,0),Math.PI);D.ball(.16,G.black,C*.28,.05,2.12,1,1,1,0),D.at(C*.5,.85,-.1,0,U=>{U.cyl(.24,.06,1.5,5,er,0,0,0)},-.95,0,C*.2),D.at(C*.62,1.65,-1.1,0,U=>{U.cyl(.07,0,1.1,5,er,0,0,0)},-1.45,0,C*.25);for(let U=0;U<2;U++){let k=[C*.5,-.35,1.9];ws(h,k,[C*(1.5+U*.5),-.5-U*.35,2.8],.06,vc),ws(h,[C*(1.5+U*.5),-.5-U*.35,2.8],[C*(2.6+U*.4),-1.6-U*.4,2],.05,vc)}}d.box(.8,.16,1.45,16742954,0,-.62,1.5);for(let C of[-1,1])d.ball(.2,16769658,C*.58,.32,.95,1,1.1,.8,1)});for(let D=0;D<7;D++){let C=(D-3)*.28;f.at(M.x,M.y+.4,M.z-.6,0,U=>U.quad([-.35,0,0],[.35,0,0],[.5+C*.3,-1.2,-3.4-D*.1],[-.5+C*.3,-1.2,-3.4-D*.1],D%2?G.red:er),0,0,C)}we(l,16753226,5.5,M.x,M.y-.5,M.z+1.7,.85),we(l,16769658,2.4,M.x-.6,M.y+.3,M.z+1.1,.8),we(l,16769658,2.4,M.x+.6,M.y+.3,M.z+1.1,.8);let y=D=>new _e(Object.assign({gradientMap:Ie,color:16777215,vertexColors:!0,fog:!0},D||{})),T=y(),R=y({emissive:2759680}),P=y({side:me}),N=new Pe({color:16777215,vertexColors:!0,fog:!0});return l.add(h.mesh(T),u.mesh(R),f.mesh(P),d.mesh(N)),r.userData.dragon={k:i,s:t,mouth:new L(a,c+(M.y-.5)*1.5,M.z*1.5+2.5),roared:!1},r.updateMatrixWorld(!0),r}var zo=new Map;try{window.__dragons=zo}catch{}function CS(i,t,e){for(let[n,s]of zo){let r=s.userData.dragon.s;(r<i-140||r>i+380)&&(At.remove(s),qf(s),zo.delete(n))}for(let n=Math.max(0,t-1);n<=e+2;n++){if(Ke(n)!==10||zo.has(n))continue;let s=Lo(n);if(s<i-140||s>i+380)continue;let r=dx(n);zo.set(n,r),At.add(r)}for(let[,n]of zo){let s=n.userData.dragon;if(!s.roared&&i>s.s-60&&i<s.s+20){s.roared=!0;try{ce.roar()}catch{}ti("El drag\xF3n anuncia el Castillo de la Garza Blanca")}}}function fx(i){let t=Math.max(0,Math.floor((i-140)/Ti)),e=Math.floor((i+340)/Ti);CS(i,t,e);for(let[n,s]of ri)(n<t||n>e)&&(s.parent&&At.remove(s),qf(s),ri.delete(n));for(let n=t;n<=e;n++){let s=ri.get(n);s||(s=sx(n),ri.set(n,s)),s.parent||At.add(s);{let r=Ke(n);if(rn(n)-i<(r===2?70:r===10?130:55)&&i-rn(n)<25&&(!mi.has(r)||!ct.X.hasSnap(r)&&!Uf.has(r))){let o=!mi.has(r);if(mi.add(r),Uf.add(r),Tg.add(n),rx(n),o){ti("Descubriste: "+ki[r]);try{ce.chime(0,n%5)}catch{}Eg(),Qh(i),ct.X.found(r)}}}}for(let[,n]of ri)if(n.userData.job){let s=performance.now(),r;do r=n.userData.job.next();while(!r.done&&performance.now()-s<5);r.done&&(n.userData.job=null,au(n))}else n.userData.cas&&ix(n,Se.night,.016);for(let n of Ar)n.material.opacity=n.userData.base*(.3+.7*ct.glowK);ou.uniforms.k.value=ct.glowK,js.uniforms.t.value=F.t,js.uniforms.fogCol.value.copy(At.fog.color);for(let n of os)n.nk?n.nk.rotation.x=Math.sin(F.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(F.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(F.t*1.1+n.ph)*.12}var rp=new Pe({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:me}),ko=$n,px=new Float32Array(ko*4*2*3),mx=new Float32Array(ko*4*2*4),Go=new ue;Go.setAttribute("position",new Kt(px,3));Go.setAttribute("color",new Kt(mx,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<ko-1;e++){let n=(t*ko+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}Go.setIndex(i)}var Mc=new $(Go,rp);Mc.frustumCulled=!1;Mc.renderOrder=1;At.add(Mc);function gx(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<ko;s++){let r=t+s*Kn,o=be(r)-1+(sn(r*.08,e*9)-.5)*.9,a=.9+sn(r*.2,e)*.9,c=ie(r)+n*o,l=-r,h=.25+.55*sn(r*.11+e*30,5),u=(e*ko+s)*4,d=[c-n*a*1.4,c-n*a*.4,c+n*a*.5,c+n*a*1.5],f=[0,h,h*.6,0];for(let p=0;p<4;p++)px.set([d[p],.05,l],(u+p)*3),mx.set([1,1,1,f[p]],(u+p)*4)}}Go.attributes.position.needsUpdate=Go.attributes.color.needsUpdate=!0}var xx=36,op=[];for(let i=0;i<xx;i++){let t=new $(new hi(.5,20).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},At.add(t),op.push(t)}var PS=0,sp=0;function yu(i,t,e,n,s){let r=op[PS++%xx];r.position.set(i,.045,t),r.userData={age:0,vx:e,vz:n,sc:s},r.scale.setScalar(.4)}var vu=60,ap=new ue,_u=new Float32Array(vu*3),cp=[];for(let i=0;i<vu;i++)cp.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});ap.setAttribute("position",new Kt(_u,3));var IS=new li({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),_x=new bi(ap,IS);_x.frustumCulled=!1;At.add(_x);var LS=0;function Mu(i,t,e,n){for(let s=0;s<n;s++){let r=cp[LS++%vu];r.l=1,r.x=i,r.y=t,r.z=e;let o=Math.random()*6.28,a=.8+Math.random()*1.4;r.vx=Math.cos(o)*a,r.vz=Math.sin(o)*a,r.vy=2+Math.random()*2.2}si(i,e)}function yx(i){for(let t=0;t<vu;t++){let e=cp[t];e.l>0&&(e.l-=i*1.4,e.vy-=9*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,e.y<0&&(e.l=0)),_u[t*3]=e.l>0?e.x:0,_u[t*3+1]=e.l>0?e.y:-50,_u[t*3+2]=e.z}if(ap.attributes.position.needsUpdate=!0,sp-=i,sp<=0&&ct.started){sp=.11;let t=Math.min(F.v,5),e=Math.cos(F.psi),n=Math.sin(F.psi),s=F.px-Math.sin(F.psi)*1.5,r=F.pz+Math.cos(F.psi)*1.5;for(let o of[-1,1])yu(s+e*.5*o,r+n*.5*o,e*o*.5,n*o*.5,1)}op.forEach(t=>{let e=t.userData;if(e.age>=3.2){t.material.opacity=0;return}e.age+=i;let n=e.age/3.2;t.position.x+=(e.vx||0)*i,t.position.z+=(e.vz||0)*i,t.scale.setScalar((.4+n*2.6)*(e.sc||1)),t.material.opacity=.38*(1-n)*(1-n)})}var DS=5,Lr=[],vx=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function NS(i){let t=new Qt,e=vx[i%vx.length],n=new $(new pe(.5,12,8),Xt(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new $(new pe(.5,10,6),Xt(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new Qt;r.position.z=.45,t.add(r);let o=new $(new Oe(.22,.5,4),Xt(e[0],{side:me}));o.rotation.x=-Math.PI/2,o.scale.set(1.2,1,.18),o.position.z=.22,r.add(o);let a=new $(new Oe(.08,.3,3),Xt(e[0]));return a.position.set(0,.2,.05),a.rotation.x=-.3,t.add(a),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},At.add(t),t}for(let i=0;i<DS;i++)Lr.push(NS(i));function Ex(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(be(e)-3);i.position.set(ie(e)+n,-.05,-e),i.userData.st=0,i.userData.hd=xn(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}Lr.forEach(i=>Ex(i,30+Math.random()*60));function Tx(i,t){for(let e of Lr){let n=e.userData;n.t+=i;let s=e.position.z-F.pz,r=-e.position.z;if(r<t-12||r>t+120){Ex(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let o=e.position.x-ie(r),a=be(r)-3;Math.abs(o)>a&&(n.hd+=(xn(r)+(o>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd+Math.PI,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,Mu(e.position.x,.1,e.position.z,5),ce.plop((e.position.x-F.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&yu(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let o=.95,a=n.j/o,c=Math.sin(Math.PI*a)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+c;let l=Math.cos(Math.PI*a)*1.25*Math.PI/o;e.rotation.set(0,-n.hd+Math.PI,0),e.rotateX(Math.atan2(l,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=o&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd+Math.PI,0),Mu(e.position.x,.1,e.position.z,9),ce.plop((e.position.x-F.px)/25))}}yx(i)}var wx=[],Dr=[];function US(i){let t=new Qt,e=i%3!==2,n=e?16184302:9279656,s=e?15262424:7305868,r=new $(new pe(.28,10,8),Xt(n));r.scale.set(.7,.7,1.8),t.add(r);let o=new $(new Le(.045,.06,.5,6),Xt(n));o.rotation.x=1.15,o.position.set(0,.1,-.5),t.add(o);let a=new $(new pe(.09,8,6),Xt(n));a.position.set(0,.3,-.72),t.add(a);let c=new $(new Oe(.035,.3,5),Xt(15245898));c.rotation.x=-Math.PI/2,c.position.set(0,.3,-.95),t.add(c);let l=[-1,1].map(u=>{let d=new Qt;d.position.set(u*.12,.08,-.05),t.add(d);let f=new $(new In(1.35,.03,.62),Xt(s));f.position.x=u*.68,d.add(f);let p=new $(new In(.5,.03,.4),Xt(e?4934485:5857391));return p.position.set(u*1.5,0,.05),d.add(p),d}),h=new $(new Oe(.12,.45,4),Xt(n));return h.rotation.x=Math.PI/2,h.position.z=.65,t.add(h),t.scale.setScalar(1.5),t.userData={wings:l,ph:Math.random()*6,fl:0,sp:5+Math.random()*2.5,hd:0,h:7+Math.random()*7,off:(Math.random()-.5)*20},At.add(t),t}function FS(i){let t=new Qt,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new $(new Le(.025,.018,.5,6),Xt(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new $(new pe(.055,8,6),Xt(n));r.position.z=-.27,t.add(r);let o=new Pe({color:15398655,transparent:!0,opacity:.5,side:me,depthWrite:!1}),a=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([c,l])=>{let h=new Qt;h.position.set(0,.02,l),t.add(h);let u=new $(new an(.38,.1).rotateX(-Math.PI/2),o);u.position.x=c*.2,h.add(u),a.push([h,c])}),t.scale.setScalar(1.8),t.userData={wings:a,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},At.add(t),t}for(let i=0;i<8;i++)Dr.push(FS(i));var Nr=[];function BS(i){let t=new Qt,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new $(new pe(.3,10,8),Xt(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new $(new Oe(.12,.3,5),Xt(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let o=new Qt;o.position.set(0,.3,-.25),t.add(o);let a=new $(new Le(.06,.08,.34,6),Xt(e));a.position.y=.15,o.add(a);let c=new $(new pe(.1,8,6),Xt(i%2?3486766:e));c.position.set(0,.34,-.03),o.add(c);let l=new $(new Oe(.04,.16,5),Xt(15245898));return l.rotation.x=-Math.PI/2,l.position.set(0,.33,-.15),o.add(l),t.scale.setScalar(1.15),t.userData={neck:o,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},At.add(t),t}function lp(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(be(e)-6);i.position.set(ie(e)+n,0,-e),i.userData.hd=xn(e)+(Math.random()-.5)*2}for(let i=0;i<4;i++){let t=BS(i);i>=2&&t.scale.setScalar(.72),Nr.push(t)}Nr.forEach(i=>lp(i,30));function Ax(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(be(e)+2);i.position.set(ie(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}Dr.forEach(i=>Ax(i,30));function Rx(i,t){let e=1-Fe(Se.night*1.5,0,1)*1,n=e>.15&&ln.rain<.6;for(let s of Nr){s.visible=e>.1;let r=s.userData;r.t+=i;let o=-s.position.z,a=o-t;if(!r.follow&&!(r.flee>0)&&(a<-14||a>110)){lp(s,t);continue}if(r.follow&&a<-70){r.follow=0,lp(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&!r.follow&&!(r.flee>0)&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let c=Math.sin(Math.PI*Fe(1-r.dip/1.3));r.neck.rotation.x=1.2*c,s.rotation.x=.9*c*.5,s.position.y=-.05*c,c>.9&&!r.rip&&(r.rip=!0,si(s.position.x,s.position.z-.4),ce.plop((s.position.x-F.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let c=s.position.x-ie(o);Math.abs(c)>be(o)-5&&(r.hd+=(xn(o)+(c>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*(r.spd||.35)*i,s.position.z-=Math.cos(r.hd)*(r.spd||.35)*i}s.rotation.y=-r.hd+Math.PI}for(let s of Dr){if(s.visible=n,!n)continue;let r=s.userData;if(r.t-=i,zS(s,r,i))continue;let o=-s.position.z-t;if(o<-12||o>90){Ax(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let d=-s.position.z+(Math.random()-.5)*8,f=s.position.x-ie(d);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let p=r.tx-ie(-r.tz);Math.abs(p)>be(-r.tz)+3&&(r.tx=ie(-r.tz)+Math.sign(p)*(be(-r.tz)+1))}let a=Math.min(1,i*3.2),c=s.position.x,l=s.position.z;s.position.x+=(r.tx-s.position.x)*a,s.position.z+=(r.tz-s.position.z)*a,s.position.y+=(r.ty-s.position.y)*a+Math.sin(F.t*9+r.ph)*.004;let h=s.position.x-c,u=s.position.z-l;Math.hypot(h,u)>.002&&(s.rotation.y=Math.atan2(-h,-u)),s.rotation.x=-Math.min(.5,Math.hypot(h,u)*20)*.5,r.wings.forEach(([d,f],p)=>{d.rotation.z=f*Math.sin(F.t*70+p*1.7+r.ph)*.45})}}var bc=(()=>{try{return JSON.parse(localStorage.getItem("rio3d-enc")||"{}")||{}}catch{return{}}})();function Wo(i,t){if(!bc[i]){bc[i]=Date.now();try{localStorage.setItem("rio3d-enc",JSON.stringify(bc))}catch{}ti(t)}}var OS=(()=>{let i=ru(1,0);os.pop(),i.updateMatrixWorld(!0);let t=[];return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);n.deleteAttribute("uv");let s=e.material.color,r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;n.setAttribute("color",new Kt(o,3)),t.push(n.index?n.toNonIndexed():n)}),bs(t)})(),nr=new Pn(OS,new _e({gradientMap:Ie,vertexColors:!0}),24);nr.frustumCulled=!1;nr.count=0;At.add(nr);var Vo=[],Cx=[];function HS(i,t,e,n){let s=Cx.pop()||US(0);s.rotation.order="YXZ",s.scale.setScalar(2.1),s.visible=!0,s.position.set(i,t+1.2,e),s.userData.fl2={t:0,hd:n,vy:3.2,sp:2.2,ph:Math.random()*6},At.add(s),Vo.push(s);try{ce.flap((i-F.px)/25)}catch{}Wo("heron","Las garzas alzan el vuelo a tu paso")}var as=new L,Mx=new fn,bx=new L,Sx=new Me;function Px(i,t){if(!ct.started)return;let e=!window.__noScare&&(Math.abs(F.steer)>.8||F.t-F.bumpT<.8);ct.scareT=e?2.5:Math.max(0,ct.scareT-i);let n=Math.sin(F.psi),s=Math.cos(F.psi),r=ct.scareT<=0;for(let a of Lr){let c=a.userData;if(c.st!==0)continue;c.sp0==null&&(c.sp0=c.sp);let l=a.position.x-F.px,h=a.position.z-F.pz,u=Math.hypot(l,h);if(!r&&u<11){c.hd+=Io(Math.atan2(l,-h),c.hd)*Math.min(1,i*6),c.sp=3.4,c.cur=0;continue}if(r&&u<26){c.dir||(c.dir=Math.random()<.5?-1:1);let d=-.4+Math.sin(F.t*.5+c.ph)*1.3,f=F.px+s*c.dir*2.7+n*d,p=F.pz+n*c.dir*2.7-s*d,x=f-a.position.x,m=p-a.position.z,g=Math.hypot(x,m);if(c.hd+=Io(Math.atan2(x,-m),c.hd)*Math.min(1,i*3.2),c.sp=Math.max(.7,Math.min(4,F.v+g*.9)),c.cur=1,u<5.5&&(Wo("koi","Los peces se acercan a nadar contigo"),Math.random()<i*.35)){yu(a.position.x+Math.sin(c.hd)*.4,a.position.z-Math.cos(c.hd)*.4,0,0,.55);try{ce.plop((a.position.x-F.px)/25)}catch{}}if(u<6.5&&Math.random()<i*.06){c.st=1,c.j=0,c.vx=Math.sin(c.hd)*2.6,c.vz=-Math.cos(c.hd)*2.6,Mu(a.position.x,.1,a.position.z,6);try{ce.plop((a.position.x-F.px)/25)}catch{}}}else c.sp=c.sp0,c.cur=0}Nr.forEach((a,c)=>{let l=a.userData;if(!a.visible)return;let h=a.position.x-F.px,u=a.position.z-F.pz,d=Math.hypot(h,u);if(l.flee>0){l.flee-=i,l.hd+=Io(Math.atan2(h,-u),l.hd)*Math.min(1,i*4),l.spd=2.6;return}if(!r&&d<16){l.follow=0,l.flee=3;return}if(r&&(l.follow||d<17)){l.follow||(l.follow=1,l.qT=1+Math.random()*3,c<2&&Wo("duck","Un pato decide acompa\xF1arte"));let f=3.8+c*1.7,p=Math.sin(F.t*.4+c*2)*1.1+(c%2?1:-1)*.9,x=F.px-n*f+s*p,m=F.pz+s*f+n*p,g=x-a.position.x,_=m-a.position.z,E=Math.hypot(g,_);if(l.hd+=Io(Math.atan2(g,-_),l.hd)*Math.min(1,i*2.6),l.spd=Math.max(.1,Math.min(3.4,(E>.8?F.v*1.05:F.v*.9)+E*.5)),l.qT-=i,l.qT<=0&&d<12){l.qT=5+Math.random()*9;try{ce.quack((a.position.x-F.px)/25)}catch{}}}else l.spd=0});for(let[a,c]of ri){let l=c.userData.hp;if(!(!l||Ke(a)!==4))for(let h of l){let u=h[5];if(u.gone>0&&(u.gone-=i,u.gone>0))continue;as.set(h[0],h[1],h[2]),c.localToWorld(as);let d=as.x-F.px,f=as.z-F.pz;Math.hypot(d,f)<(ct.scareT>0?22:13)&&F.t>(u.cd||0)&&(u.gone=70,u.cd=F.t+4,HS(as.x,as.y,as.z,Math.atan2(d,-f)+(Math.random()-.5)*.8))}}let o=0;for(let[a,c]of ri){let l=c.userData.hp;if(!(!l||Ke(a)!==4))for(let h of l)h[5].gone>0||o>=24||(as.set(h[0],h[1],h[2]),c.localToWorld(as),Mx.setFromAxisAngle(Es,c.rotation.y+h[3]),bx.setScalar(h[4]),Sx.compose(as,Mx,bx),nr.setMatrixAt(o++,Sx))}nr.count=o,nr.instanceMatrix.needsUpdate=!0;for(let a=Vo.length-1;a>=0;a--){let c=Vo[a],l=c.userData.fl2;l.t+=i,l.vy=Math.max(.6,l.vy-i*.35),c.position.y>11&&(l.vy=Math.min(l.vy,.2)),l.sp=Math.min(6.2,l.sp+i*1.6);let h=-c.position.z;l.hd+=Io(xn(h)+Math.sin(l.ph)*.3,l.hd)*i*.6,c.position.x+=Math.sin(l.hd)*l.sp*i,c.position.z-=Math.cos(l.hd)*l.sp*i,c.position.y+=l.vy*i,c.rotation.y=-l.hd,c.rotation.x=Math.min(.5,l.vy*.12);let u=Math.sin(l.t*(l.t<4?10:6)+l.ph)*(l.t<8?.8:.3);c.userData.wings.forEach((d,f)=>{d.rotation.z=(f?1:-1)*u}),(l.t>16||Math.hypot(c.position.x-F.px,c.position.z-F.pz)>230)&&(At.remove(c),Cx.push(c),Vo.splice(a,1))}}var As=new L;function zS(i,t,e){if(t.land>0)return t.land-=e,t.land<=0||ct.scareT>0||!i.visible?(t.land=0,t.app=0,t.t=.2,t.ty=2.4,t.tx=i.position.x+(Math.random()-.5)*5,t.tz=i.position.z-4,!1):(Ge.localToWorld(As.set(t.lx,t.ly,t.lz)),i.position.copy(As),i.quaternion.copy(Ge.quaternion),t.wings.forEach(([n,s])=>{n.rotation.z=s*.12}),!0);if(!ct.started||!i.visible||ct.scareT>0)return!1;if(t.app)return t.t=3,Ge.localToWorld(As.set(t.lx,t.ly,t.lz)),t.tx=As.x,t.ty=As.y,t.tz=As.z,!(t.app-=e>0?e:0)||t.app<=0?(t.app=0,!1):(i.position.distanceTo(As)<.45&&(t.app=0,t.land=14+Math.random()*18,Wo("dragonfly","Una lib\xE9lula se pos\xF3 en la proa de tu canoa")),!1);if(Math.random()<e*.18&&(Ge.localToWorld(As.set(0,.5,-3)),i.position.distanceTo(As)<7)){let n=0;for(let s of Dr)(s.userData.land>0||s.userData.app>0)&&n++;n<2&&(t.lx=(Math.random()-.5)*.3,t.ly=.62,t.lz=-3.05+Math.random()*.25,t.app=5)}return!1}var bu=38,hp=new Map,Ix=[0,1,2].map(i=>{let t=new Mn(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getY(r),c=e.getZ(r),l=1+(Q(Math.round(o*5)+i*9,Math.round(a*5)+Math.round(c*5))-.5)*.35;e.setXYZ(r,o*l*1.15,a*l*.72,c*l);let h=.7+.4*Fe((a+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=h}t.setAttribute("color",new Kt(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),kS=new _e({gradientMap:Ie,color:12039108,vertexColors:!0,map:Ye("rock")}),GS=new _e({gradientMap:Ie,color:8829066,map:Ye("leaf")}),VS=new Pe({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:me});function WS(i){let t=Q(i,41);if(i<2||t>.34)return null;let e=i*bu+Q(i,42)*bu,n=(Q(i,43)*2-1)*be(e)*.4;return{s:e,x:ie(e)+n,z:-e,r:.9+Q(i,44)*1.1,v:Math.floor(Q(i,45)*3),a:Q(i,46)*6.28}}function XS(i){let t=new Qt,e=new $(Ix[i.v],kS);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new $(Ix[(i.v+1)%3],GS);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new $(new fr(1.05,1.55,24).rotateX(-Math.PI/2),VS);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function Lx(i,t){let e=Math.floor((t-25)/bu),n=Math.floor((t+280)/bu);for(let[s,r]of hp)(s<e||s>n)&&r&&At.remove(r);for(let s=e;s<=n;s++){let r=hp.get(s);if(r===void 0){let h=WS(s);r=h?XS(h):null,hp.set(s,r)}if(!r)continue;r.parent||At.add(r);let o=F.px-r.userData.x,a=F.pz-r.userData.z,c=r.userData.r*1.2+1.5,l=Math.hypot(o,a);l<c&&l>.01&&(F.px+=o/l*(c-l)*.6,F.pz+=a/l*(c-l)*.6,F.v*=.9,F.t-F.bumpT>1.2&&(ce.bump(),F.bumpT=F.t,si(r.userData.x+o/l*-r.userData.r,r.userData.z+a/l*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(F.t*1.4+s)}}var Xo=230,Sc=new Map,qS=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let a=0;a<=16;a++){let c=a/16;for(let l=0;l<26;l++){let h=l/26*6.283,u=1+(sn(Math.cos(h)*2.2+i*7,Math.sin(h)*2.2+c*3)-.5)*.5+(sn(Math.cos(h)*7+i,c*9)-.5)*.14,d=Math.pow(Math.max(0,1-Math.pow(c,2.2)),.62)*(1+.38*(1-c)*(1-c)),f=c,p=(sn(i*3,c*2)-.5)*.5*c;n.push(Math.cos(h)*d*u+p,f,Math.sin(h)*d*u);let x=sn(Math.cos(h)*5+i,c*14),m=Be(.18,.5,sn(Math.cos(h)*9,c*20+i)),g=.45+.2*c+.12*x;s.push(g*(.75+.2*m),g*(.9+.12*m),g*(.82+.1*m))}}for(let a=0;a<16;a++)for(let c=0;c<26;c++){let l=(c+1)%26,h=a*26+c,u=a*26+l,d=(a+1)*26+c,f=(a+1)*26+l;r.push(h,d,u,u,d,f)}let o=new ue;return o.setAttribute("position",new fe(n,3)),o.setAttribute("color",new fe(s,3)),o.setIndex(r),o.computeVertexNormals(),o}),YS=new Da({vertexColors:!0,color:12175040,fog:!1}),up=new Qi({map:jn,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function ZS(i,t){let e=Q(i,60+t),n=44+e*46,s=95+Q(i,61+t)*120,r=i*Xo+Q(i,62+t)*Xo*.9,o=be(r)+150+Q(i,63+t)*170,a=new Qt,c=new $(qS[(i*2+(t>0?1:0)+4)%4],YS.clone());c.scale.set(n,s,n*(.8+Q(i,64)*.4)),c.position.y=-30,c.rotation.y=Q(i,65)*6,a.add(c);for(let l=0;l<2;l++){let h=new xs(up);h.scale.set(n*4.5,s*.7,1),h.position.set((l?.4:-.3)*n,s*(.18+.2*l),0),h.renderOrder=2,a.add(h)}return a.position.set(ie(r)+t*o,0,-r),a.userData={s:r},a}var JS=(i,t)=>{let e=i*Xo+Q(i,62+t)*Xo*.9,n=yr(e);return!!n&&t===n.side&&Math.abs(e-n.s0)<210};function Dx(i){let t=Math.floor((i-260)/Xo),e=Math.floor((i+720)/Xo);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),o=Sc.get(r);if(o===void 0&&(o=Q(n,70+s)>.18&&!JS(n,s)?ZS(n,s):null,Sc.set(r,o),o&&(o.userData.c=n)),o){o.userData.c=n,o.parent||At.add(o);let a=Math.hypot(o.position.x-F.px,o.position.z-F.pz),c=Fe(Be(60,520,a)*.88+.08);o.children[0].material.color.set(6130818).lerp(nu.set(3099218),Se.night*.7).lerp(Oo.copy(Se.hor).lerp(At.fog.color,.5),c)}}for(let[n,s]of Sc)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&At.remove(s)}var dp=[];function $S(i){let t=new Qt,e=Xt(3091244),n=Xt(3102307),s=new $(new pe(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new $(new Le(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let o=new $(new pe(.12,8,6),Xt(14264706));if(o.position.set(0,1.38,.2),t.add(o),i%2){let c=new $(new Oe(.75,.45,10,1,!0),Xt(3158063,{side:me}));c.position.set(0,1.95,.2),t.add(c);let l=new $(new Le(.015,.015,1,4),e);l.position.set(0,1.45,.2),t.add(l)}else{let c=new $(new Oe(.34,.2,10,1,!0),Xt(14332522,{side:me}));c.position.set(0,1.55,.2),t.add(c)}let a=new $(new Le(.02,.02,4,4),Xt(8018502));return a.position.set(.35,1.2,-.9),a.rotation.set(1,0,-.3),t.add(a),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},At.add(t),t}for(let i=0;i<3;i++)dp.push($S(i));function Nx(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(be(e)-9);i.position.set(ie(e)+n,0,-e),i.userData.hd=xn(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}dp.forEach(i=>Nx(i,40+Math.random()*100));function Ux(i,t){for(let e of dp){let n=e.userData;if(e.position.z>F.pz+30||-e.position.z>t+300){Nx(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(F.t*.8+n.ph)*.03,e.rotation.set(Math.sin(F.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(F.t*.7+n.ph)*.02)}}var Cu=8,Zo=44,Tu=new Float32Array(Cu*Zo*3),wu=new Float32Array(Cu*Zo*3),Ec=new ue;Ec.setAttribute("position",new Kt(Tu,3));Ec.setAttribute("color",new Kt(wu,3));var Fr=new bi(Ec,new li({size:2.6,map:jn,vertexColors:!0,transparent:!0,blending:kn,depthWrite:!1,depthTest:!1,fog:!1}));Fr.renderOrder=9;Fr.frustumCulled=!1;Fr.visible=!1;At.add(Fr);var mp=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],Tc=[];for(let i=0;i<Cu;i++)Tc.push({age:9,x:0,y:0,z:0,c:mp[0],v:new Float32Array(Zo*3)});var fp=0,Su=!1;function KS(i){let t=Math.round((i-240)/Ti);for(let e of[t-1,t,t+1])if(e>=0&&Ke(e)===2&&Math.abs(rn(e)-i)<230)return!0;return!1}function Fx(){let i=Tc.find(t=>t.age>=3);if(i){i.age=0,i.x=F.px+(Math.random()-.5)*40,i.y=4+Math.random()*5,i.z=F.pz-(55+Math.random()*40),i.c=mp[Math.random()*mp.length|0];for(let t=0;t<Zo;t++){let e=Math.random()*6.283,n=Math.acos(2*Math.random()-1),s=5+Math.random()*4;i.v[t*3]=Math.sin(n)*Math.cos(e)*s,i.v[t*3+1]=Math.cos(n)*s,i.v[t*3+2]=Math.sin(n)*Math.sin(e)*s}try{ce.boom((i.x-F.px)/30)}catch{}}}function Bx(i,t){let e=Su;Su=t>.55&&KS(F.dist||-F.pz),Su&&!e&&Wo("festival","Festival de linternas: la aldea celebra esta noche"),Su&&(fp-=i,fp<=0&&(fp=1.4+Math.random()*2,Fx(),Math.random()<.35&&setTimeout(Fx,350)));let n=!1;for(let s=0;s<Cu;s++){let r=Tc[s];r.age<3&&(r.age+=i);let o=r.age<3?Math.pow(Math.max(0,1-r.age/2.7),1.5):0;o>0&&(n=!0);for(let a=0;a<Zo;a++){let c=(s*Zo+a)*3,l=r.age;Tu[c]=r.x+r.v[a*3]*l*.8,Tu[c+1]=r.y+r.v[a*3+1]*l*.8-1.9*l*l,Tu[c+2]=r.z+r.v[a*3+2]*l*.8,wu[c]=r.c[0]*o,wu[c+1]=r.c[1]*o,wu[c+2]=r.c[2]*o}}Fr.visible=n,n&&(Ec.attributes.position.needsUpdate=!0,Ec.attributes.color.needsUpdate=!0)}var gp=new nn({transparent:!0,side:Tn,depthWrite:!1,blending:kn,fog:!1,uniforms:{t:{value:0},k:{value:0}},vertexShader:"varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 u;uniform float t,k;void main(){float a=u.x*6.283;float w=sin(a*3.+t*.25+sin(a*7.+t*.4)*1.3)*.5+.5;float band=smoothstep(.15,.55,u.y)*smoothstep(1.,.55,u.y);float f=band*(.3+.7*w)*(.55+.45*sin(a*11.-t*.5));vec3 c=mix(vec3(.2,1.,.6),vec3(.55,.4,1.),smoothstep(.45,.95,u.y));gl_FragColor=vec4(c*f*k*.75,1.);}"}),Ur=new $(new Le(330,330,120,48,1,!0),gp);Ur.frustumCulled=!1;Ur.visible=!1;Ur.renderOrder=-1;At.add(Ur);function Ox(i){let t=Zs()===3?Fe(i*1.5-.7,0,1):0;Ur.visible=t>.01,Ur.visible&&(Ur.position.set(F.px,95,F.pz),gp.uniforms.t.value=F.t,gp.uniforms.k.value=t)}var qo=300,Yo=new ue,Au=new Float32Array(qo*3),Hx=[];for(let i=0;i<qo;i++)Hx.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);Yo.setAttribute("position",new Kt(Au,3));var jS=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new Fi(i)})(),Ru=new Float32Array(qo*3),xp=new li({map:jS,alphaTest:.3,color:16777215,vertexColors:!0,size:Un.pet.size,transparent:!0,opacity:.85,depthWrite:!1}),pp=-1,QS=new pt(Un.pet.c),tE=new pt(zi.pet),Eu=new pt;Yo.setAttribute("color",new Kt(Ru,3));var zx=new bi(Yo,xp);zx.frustumCulled=!1;At.add(zx);function kx(i){for(let t=0;t<qo;t++){let e=Hx[t];e[1]-=i*Un.pet.fall*(.45+.3*Math.sin(e[3]+F.t)),e[1]<.2&&(e[1]=10+Math.random()*3,e[0]=Math.random()*60-30,e[2]=-Math.random()*60),Au[t*3]=F.px+e[0]+Math.sin(F.t*.7+e[3])*1.5,Au[t*3+1]=e[1],Au[t*3+2]=F.pz+e[2]+10+Math.cos(F.t*.5+e[3])}{let t=vr(F.dist||-F.pz),e=Math.max(.3*No(-F.pz),t);if(Yo.setDrawRange(0,Math.round(qo*Math.max(Un.pet.base+Un.pet.gain*e,t*.85))),Math.abs(t-pp)>.02||pp<0){pp=t,Eu.copy(QS).lerp(tE,Fe(t*1.6));for(let n=0;n<qo;n++)Ru[n*3]=Eu.r,Ru[n*3+1]=Eu.g,Ru[n*3+2]=Eu.b;Yo.attributes.color.needsUpdate=!0,xp.size=Un.pet.size+(.42-Un.pet.size)*Fe(t*1.6)}}Yo.attributes.position.needsUpdate=!0,xp.opacity=.85*(1-Fe(Se.night,0,1)*.8)}function Gx(i){window.__r3d={fc:(t,e)=>{window.__fc=t?()=>{pn.position.set(t[0],t[1],t[2]),pn.lookAt(e[0],e[1],e[2]),pn.updateMatrixWorld()}:null},LM:ki,lmType:Ke,NL:tc,lmFound:mi,lmMade:ri,castleNear:yr,dragonS:Lo,casInfo:mf,casLocal:ec,fwB:Tc,fw:Fr,cam:pn,crit:{fish:Lr,wbirds:Nr,dfs:Dr,fliers:Vo,liveH:nr,ENC:bc,get scare(){return ct.scareT}},sim:i,cnt:()=>{let t={};return At.traverse(e=>{if((e.isMesh||e.isSprite||e.isPoints)&&e.visible){let n=e,s=!0;for(;n;){if(!n.visible){s=!1;break}n=n.parent}if(!s)return;let r=(e.isInstancedMesh?"inst":e.isSprite?"sprite":e.isPoints?"pts":"mesh")+":"+(e.material.type||"");t[r]=(t[r]||0)+1}}),t},info:()=>({g:ss.info.memory.geometries,t:ss.info.memory.textures,p:ss.info.programs.length,calls:ss.info.render.calls,tris:ss.info.render.triangles,lm:ri.size,ch:At.children.length}),cineJump:t=>{ct.cine&&(ct.cine.t=t)},cineOn:()=>!!ct.cine,bambooAt:Do,gardenAt:vr,forestAt:No,lmPos:rn,wbirds:Nr,massifs:Sc,birds:wx,dfs:Dr,fish:Lr,W:ln,mistAt:zh,setCam:Ir,P:F,lanternPos:eu,setTod:t=>{ct.tod=t},scene:At,tp:(t,e=0,n=0)=>{F.pz=-t,F.px=ie(t)+n,F.psi=xn(t)+e},sideOf:t=>Q(t,9)>.5?1:-1,get tod(){return ct.tod}}}var $o=performance.now();T0();w0();function _p(i,t){if(t||requestAnimationFrame(_p),PZ.on&&!t){$o=i;return}let e=Math.max(0,Math.min(.05,(i-$o)/1e3));Jo.tick(Math.max(0,(i-$o)/1e3)),$o=i,F.t+=e;let n=-F.pz;Ng(e,n);let s=_g();kx(e),yg(),vg(e),hx(e,s),ox(e),window.__fc&&window.__fc(),ct.started&&!Jo.photo&&(ct.tod=(ct.tod+e/900)%1),U0(F.px,F.pz),Dg(e,n),lg(F.px,F.pz,gx),wf.value=F.t,pi.position.set(F.px,0,F.pz),pi.material.uniforms.t.value=F.t;let r=Se.night;Kh.intensity=ct.glowK*3.2,$h.material.opacity=.3+.35*ct.glowK,fc.material.color.set(16769704),Lx(e,F.dist||n),Ux(e,F.dist||n),Dx(F.dist||n),up.color.copy(At.fog.color).multiplyScalar(1.05),Px(e,F.dist||n),Tx(e,F.dist||n),Rx(e,F.dist||n),rp.opacity=.55+.15*Math.sin(F.t*.8),Mc.position.y=Math.sin(F.t*.9)*.01,Ag(F.t,F.dist||n),fx(F.dist||n),Rg(),Mg(e),Bx(e,r),Ox(r),ug(r),ce.update(F.v+Math.abs(F.steer)*1.5,r,F.t),wg(e,n),Jo.camAdjust(),Jo.update(e,F.dist||n),t||Jo.render()}var Jo=C0({R:ss,scene:At,cam:pn,canvas:vs,el:We,toast:ti,P:F,LM:ki,lmFound:mi,lmPos:rn,LMS:Ti,mkLantern:Hf,cx:ie,hw:be,lmType:Ke,A:ce,hash:Q,spawnRipple:si,SEAS:Oh,seasonIdx:Zs,started:()=>ct.started,getTod:()=>ct.tod,setTod:i=>{ct.tod=i},todName:Vh,getCount:()=>ct.count,setCount:i=>{ct.count=i;try{localStorage.setItem("rio3d-lant",String(i))}catch{}We("n").textContent=i},glowK:()=>ct.glowK,restart:()=>{ct.cine=null,ct.cineW=0;try{localStorage.removeItem("rio3d-pos")}catch{}kh(0),F.v=2.6,F.dist=0,F.pitch=0,ct.savedS=0,ti("De vuelta al inicio del r\xEDo")},setCam:Ir,getCam:()=>ct.camMode,savePos:pc,nearLM:i=>{let t=Math.round((i-240)/Ti);for(let e of[t,t-1,t+1])if(Math.abs(rn(e)-i)<130&&e>=0)return ki[Ke(e)];return""}});ct.X=Jo;We("n").textContent=ct.count;PZ.ctx=()=>ce.ctx;PZ.started=()=>ct.started;requestAnimationFrame(_p);{let i=We("cap"),t=0,e=()=>{try{return localStorage.getItem("rio3d-subs")==="1"}catch{return!1}};ce.onCap=n=>{!e()||!i||(i.textContent="["+Yn(n)+"]",i.style.opacity=1,clearTimeout(t),t=setTimeout(()=>i.style.opacity=0,2600))};try{let n=localStorage.getItem("rio3d-hand");(n==="r"||n==="l")&&document.body.classList.add("hand-"+n)}catch{}R0()}var eE=(i,t,e)=>{window.__lastT=window.__lastT||$o;for(let n=0;n<i;n++)window.__lastT+=t*1e3,e&&e(n),_p(window.__lastT,!0);$o=window.__lastT};Gx(eE);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
