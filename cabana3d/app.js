(()=>{(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},t=document.createElement("style");t.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(t);let e=document.createElement("div");e.id="pz",e.hidden=!0,e.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(e);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,e.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,a){if(r=r.filter(Boolean),!s||!r.length)return;let o=document.createElement("style");o.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(o);let l=document.createElement("button");l.type="button",l.textContent=a||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),c.appendChild(h)}),s.appendChild(l),document.body.appendChild(c),l.onclick=h=>{if(h.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let d=l.getBoundingClientRect();c.style.top=d.bottom+6+"px",c.style.right=Math.max(8,innerWidth-d.right)+"px"}},document.addEventListener("click",h=>{!c.hidden&&!c.contains(h.target)&&h.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},e.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();(function(){if(window.UX)return;let i=["es","en","ja"],t={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},e={get(u,f){try{let p=localStorage.getItem(u);return p===null?f:p}catch{return f}},set(u,f){try{localStorage.setItem(u,f)}catch{}}},n=e.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,a=[],o=window.UX={lang:n,onLang:null,add(u){u.forEach(f=>r.set(f[0],f))},rx(u){u.forEach(f=>a.push(f))},tr(u){if(n==="es"||typeof u!="string")return u;let f=u.trim();if(!f)return u;let p=r.get(f);if(p)return u.replace(f,p[s]);for(let[v,m]of a){let g=f.match(v);if(g)return u.replace(f,m(g,n==="en"?1:2,o.tr))}return u},init(){if(n==="es")return;document.documentElement.lang=n;let u=f=>{if(f.nodeType===3){let m=o.tr(f.nodeValue);m!==f.nodeValue&&(f.nodeValue=m);return}if(f.nodeType!==1||f.tagName==="SCRIPT"||f.tagName==="STYLE")return;let p=f.getAttribute&&f.getAttribute("aria-label");if(p){let m=o.tr(p);m!==p&&f.setAttribute("aria-label",m)}let v=f.getAttribute&&f.getAttribute("title");if(v){let m=o.tr(v);m!==v&&f.setAttribute("title",m)}f.childNodes.forEach(u)};u(document.body),new MutationObserver(f=>{for(let p of f)p.type==="characterData"?u(p.target):p.addedNodes.forEach(u)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(u){if(e.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(u);return}if(!o._sw){let f=document.createElement("label");f.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let p=document.createElement("input");p.type="checkbox",p.setAttribute("switch",""),f.appendChild(p),document.body.appendChild(f),o._sw=f}o._sw.click()}catch{}},subsOn:()=>e.get("rio3d-subs","0")==="1",cap(u,f){if(!o.subsOn())return;let p=performance.now(),v=o._cl||(o._cl={});if(v[u]&&p-v[u]<(f||9e3))return;v[u]=p;let m=document.getElementById("uxcap");m||(m=document.createElement("div"),m.id="uxcap",m.setAttribute("aria-live","polite"),m.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(m)),m.textContent="["+o.tr(u)+"]",m.style.opacity=1,clearTimeout(o._ct),o._ct=setTimeout(()=>m.style.opacity=0,2600)},btns(u,f){f=f||{};let p=(S,R)=>{let I=document.createElement("button");return I.type="button",I.id=S,I.className=u||"",I.onclick=R,I},v=[],m=p("uxLang",()=>{let S=i[(i.indexOf(n)+1)%3];e.set("rio3d-lang",S);try{o.onLang&&o.onLang()}catch{}location.reload()});m.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+t[n],v.push(m);let g=p("uxSubs",()=>{e.set("rio3d-subs",o.subsOn()?"0":"1"),g.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});g.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",v.push(g);let M=p("uxHap",()=>{let S=e.get("rio3d-hap","1")==="1";e.set("rio3d-hap",S?"0":"1"),M.textContent=S?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",S||o.hap(15)});if(M.textContent=e.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",v.push(M),f.hand){let S={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},R=["0","r","l"],I=L=>{document.body.classList.remove("hand-r","hand-l"),L!=="0"&&document.body.classList.add("hand-"+L)},N=e.get("rio3d-hand","0");S[N]||(N="0"),I(N);let O=p("uxHand",()=>{N=R[(R.indexOf(N)+1)%3],e.set("rio3d-hand",N),I(N),O.textContent=S[N]});O.textContent=S[N],v.push(O)}let w=p("uxVol",()=>{let S=["1",".7",".4"],R=S.indexOf(String(o.api.vol()).replace("0.","."));o.api.setVol(S[(R+1)%3]),w.textContent=y()}),y=()=>l("Volumen: ","Volume: ","\u97F3\u91CF: ")+Math.round(o.api.vol()*100)+" %";w.textContent=y(),v.push(w);let E=p("uxSoft",()=>{o.api.setSoft(!o.api.soft()),E.textContent=T()}),T=()=>o.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");E.textContent=T(),v.push(E);let C=p("uxSleep",()=>{let S=[0,15,30,45];o.api.sleep(S[(S.indexOf(o.api.sleepMin())+1)%4]),C.textContent=_()}),_=()=>o.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+o.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(C.textContent=_(),o._sb=()=>{C.textContent=_()},v.push(C),f.wear){let S=p("uxWear",()=>{e.set("ux-wear",e.get("ux-wear","0")==="1"?"0":"1"),S.textContent=R()}),R=()=>e.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");S.textContent=R(),v.push(S)}return v},ask(u,f){let p=document.createElement("div");p.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let v=document.createElement("div");v.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let m=document.createElement("p");m.style.margin="0 0 14px",m.textContent=o.tr(u),v.appendChild(m);let g=(M,w)=>{let y=document.createElement("button");return y.type="button",y.textContent=M,y.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",y.onclick=()=>{p.remove(),w&&w()},y};v.appendChild(g(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),v.appendChild(g(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),f)),p.appendChild(v),document.body.appendChild(p)}},l=(u,f,p)=>n==="en"?f:n==="ja"?p:u,c={vol:e.get("ux-vol","1"),soft:e.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};o.quiet=!1;let h=()=>{for(let u of c.nodes)try{let f=u.c.currentTime;u.lp.frequency.setTargetAtTime(c.soft?2800:22e3,f,.1),u.g.gain.setTargetAtTime(+c.vol*c.k,f,.1)}catch{}};o.out=(u,f)=>{let p=u.createBiquadFilter();p.type="lowpass",p.frequency.value=c.soft?2800:22e3,p.Q.value=.5;let v=u.createGain();return v.gain.value=+c.vol*c.k,f.connect(p),p.connect(v),v.connect(u.destination),c.nodes.push({c:u,lp:p,g:v}),v},o.pinkSrc=(u,f)=>{let p=u._pink;if(!p){let g=u.sampleRate,M=Math.floor(g*12),w=Math.floor(g*1.5),y=M+w,E=new Float32Array(y),T=0,C=0,_=0,S=0,R=0,I=0,N=0;for(let L=0;L<y;L++){let B=Math.random()*2-1;T=.99886*T+B*.0555179,C=.99332*C+B*.0750759,_=.969*_+B*.153852,S=.8665*S+B*.3104856,R=.55*R+B*.5329522,I=-.7616*I-B*.016898,E[L]=(T+C+_+S+R+I+N+B*.5362)*.2215*.5,N=B*.115926}p=u.createBuffer(1,M,g);let O=p.getChannelData(0);for(let L=0;L<M;L++)O[L]=E[L];for(let L=0;L<w;L++){let B=L/w*Math.PI/2;O[L]=E[L]*Math.sin(B)+E[M+L]*Math.cos(B)}u._pink=p}let v=u.createBufferSource();v.buffer=p,v.loop=!0;let m=u.createGain();return m.gain.value=f||1,v.connect(m),m.start=(g,M)=>v.start(g||0,M||0),m.stop=g=>v.stop(g),m},o.api={soft:()=>c.soft,setSoft(u){c.soft=!!u,e.set("ux-soft",u?"1":"0"),h()},vol:()=>+c.vol,setVol(u){c.vol=String(u),e.set("ux-vol",c.vol),h()},sleepMin:()=>c.min,sleep(u){c.min=u,c.end=u?Date.now()+u*6e4:0,c.k=1,o.quiet=!1,c.ov&&(c.ov.style.opacity=0),h()}},setInterval(()=>{if(!c.end)return;let u=(c.end-Date.now())/1e3;if(!c.ov){let f=document.createElement("div");f.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(f),c.ov=f}if(u<=0){c.end=0,c.min=0,c.k=0,h(),c.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{c.k=1,o.quiet=!1,h(),c.ov.style.opacity=0,o._sb&&o._sb()},1500);return}u<300&&(o.quiet=!0,c.k=Math.pow(u/300,2),c.ov.style.opacity=(1-u/300)*.6,h())},1e3);{let u=0,f=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(u+=5,u>=f)){f+=1800;let p=document.getElementById("uxrest");p||(p=document.createElement("div"),p.id="uxrest",p.setAttribute("aria-live","polite"),p.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(p)),p.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),p.style.opacity=1,clearTimeout(o._rt),o._rt=setTimeout(()=>p.style.opacity=0,7e3)}},5e3)}o.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]])})();var rg=[0,2,3,7,8],ag=(i,t,e)=>Math.min(e,Math.max(t,i)),ni=(i,t)=>{try{window.UX&&UX.cap(i,t)}catch{}},cs=(i,t)=>73.42*Math.pow(2,(rg[i%5]+12*(t+Math.floor(i/5)))/12),Qt={ctx:null,on:!0,init(){if(this.ctx)return;let i=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.m=i.createGain(),this.m.gain.value=.8,window.UX?UX.out(i,this.m):this.m.connect(i.destination);let t=i.sampleRate*2.6,e=i.createBuffer(2,t,i.sampleRate);for(let I=0;I<2;I++){let N=e.getChannelData(I);for(let O=0;O<t;O++)N[O]=(Math.random()*2-1)*Math.pow(1-O/t,2.4)}this.rv=i.createConvolver(),this.rv.buffer=e;let n=i.createGain();n.gain.value=.55,this.rv.connect(n),n.connect(this.m);let s=i.createBuffer(1,i.sampleRate*3,i.sampleRate),r=s.getChannelData(0);for(let I=0;I<r.length;I++)r[I]=Math.random()*2-1;this.nb=s;let a=I=>{if(I&&window.UX&&UX.pinkSrc){let O=UX.pinkSrc(i,I);return O.start(0,Math.random()*6),O}let N=i.createBufferSource();return N.buffer=s,N.loop=!0,N.start(0,Math.random()*2),N},o=a(.81),l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=520,l.Q.value=.5,this.wg=i.createGain(),this.wg.gain.value=.03,o.connect(l),l.connect(this.wg),this.wg.connect(this.m);let c=a(1.46),h=i.createBiquadFilter();h.type="bandpass",h.frequency.value=2200,h.Q.value=1.2,this.wg2=i.createGain(),this.wg2.gain.value=.008,c.connect(h),h.connect(this.wg2),this.wg2.connect(this.m);let d=a(),u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=4300,u.Q.value=4,this.cg=i.createGain(),this.cg.gain.value=0;let f=i.createOscillator(),p=i.createGain();f.frequency.value=2.1,p.gain.value=.5,f.connect(p),p.connect(this.cg.gain),f.start(),d.connect(u),u.connect(this.cg),this.cg.connect(this.m),this.dg=i.createGain(),this.dg.gain.value=.05,this.dg.connect(this.m),this.dg.connect(this.rv),[1,1.5,2].forEach((I,N)=>{let O=i.createOscillator();O.type="sine",O.frequency.value=73.42*I*(N===2?1.003:1);let L=i.createGain();L.gain.value=N===1?.5:.7,O.connect(L),L.connect(this.dg),O.start()});let v=i.createOscillator(),m=i.createGain();v.frequency.value=.07,m.gain.value=.02,v.connect(m),m.connect(this.dg.gain),v.start();let g=a(1.6),M=i.createBiquadFilter();M.type="bandpass",M.frequency.value=2600,M.Q.value=.8,this.sg=i.createGain(),this.sg.gain.value=0,g.connect(M),M.connect(this.sg),this.sg.connect(this.m),this.sf=M;let w=a(2.69),y=i.createBiquadFilter();y.type="highpass",y.frequency.value=1800,this.rg=i.createGain(),this.rg.gain.value=0,w.connect(y),y.connect(this.rg),this.rg.connect(this.m);let E=a(.71),T=i.createBiquadFilter();T.type="bandpass",T.frequency.value=420,T.Q.value=.6,this.wdg=i.createGain(),this.wdg.gain.value=.012;let C=i.createOscillator(),_=i.createGain();C.frequency.value=.09,_.gain.value=.009,C.connect(_),_.connect(this.wdg.gain),C.start();let S=i.createOscillator(),R=i.createGain();S.frequency.value=.023,R.gain.value=180,S.connect(R),R.connect(T.frequency),S.start(),E.connect(T),T.connect(this.wdg),this.wdg.connect(this.m),this.nextFlute=i.currentTime+10,this.initPad()},initPad(){let i=this.ctx,t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=500,t.Q.value=.4;let e=i.createGain();e.gain.value=0,t.connect(e),e.connect(this.m);let n=i.createGain();n.gain.value=.5,e.connect(n),n.connect(this.rv);let s=[];for(let r=0;r<4;r++){let a=i.createOscillator(),o=i.createOscillator(),l=i.createGain(),c=i.createGain(),h=i.createOscillator(),d=i.createGain();a.type="sine",o.type="triangle",o.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,h.frequency.value=.04+r*.017,d.gain.value=.25,h.connect(d),d.connect(l.gain),a.connect(l),o.connect(c),l.connect(t),c.connect(t),a.start(),o.start(),h.start(),s.push([a,o])}this.pad={f:t,pg:e,vs:s,ch:0},this.mood={prog:0,night:1},this.padChord(!0),this.nextChord=i.currentTime+15,this.padFilter()},setMood(i,t){this.mood={prog:ag(i,0,1),night:t==null?1:t},this.pad&&this.ctx&&this.padFilter()},padFilter(){let i=this.mood,t=this.ctx.currentTime,e=i.prog*(1-.35*i.night);this.pad.f.frequency.setTargetAtTime(520+e*1e3,t,2.5),this.pad.pg.gain.setTargetAtTime(.04*(1+.15*(1-i.night)),t,2)},padChord(i){let t=this.ctx,e=this.pad,n=t.currentTime,s=146.83,r=this.mood.prog,a=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],o=[[-12,0,7,15],[-4,3,7,12],[0,7,12,15],[-4,0,7,15]],l=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,12,19]],c=r<.5?o:l;e.ch=(e.ch+1+(Math.random()<.3?1:0))%c.length;let h=c[e.ch];e.vs.forEach(([d,u],f)=>{let p=s*Math.pow(2,h[f]/12);d.frequency.setTargetAtTime(p,n,i?.01:3.2),u.frequency.setTargetAtTime(p*1.002,n,i?.01:3.2)}),this.padFilter()},scrub(i){this.ctx&&(i>.2&&this.on&&ni("Fregado"),this.sg.gain.setTargetAtTime(Math.min(.12,i*.12),this.ctx.currentTime,.05),this.sf.frequency.setTargetAtTime(1800+i*1800,this.ctx.currentTime,.1))},rain(i){this.ctx&&i&&this.on&&ni("Lluvia en el techo",4e4),this.ctx&&this.rg.gain.setTargetAtTime(i?.035:0,this.ctx.currentTime,1.2)},chime(i,t){if(!this.ctx||!this.on)return;ni("Campanita",2500);let e=this.ctx.currentTime;[0,2,4].forEach((n,s)=>this.pluck(cs((t||0)+n+5,2),e+s*.15,.09,i))},breathTone(i,t){let e=this.ctx;if(!e||e.state!=="running"||!this.on)return;let n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.setValueAtTime((i?196:262)*s,n),a.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r,n+t)):(o.gain.setValueAtTime(r,n),o.gain.linearRampToValueAtTime(0,n+t)),a.connect(o),o.connect(this.m),a.start(n),a.stop(n+t+.1)})},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.m&&this.m.gain.setTargetAtTime(i?.8:0,this.ctx.currentTime,.2)},update(i,t,e){let n=1-t;if(!this.ctx)return;let s=this.ctx.currentTime;if(s>this.nextChord&&(this.nextChord=s+14+Math.random()*3,this.on&&this.padChord()),this.nextAmb||(this.nextAmb=s+6),this.on&&s>this.nextAmb){this.nextAmb=s+18+Math.random()*10;let r=["Viento","Grillos","Murmullo de agua"][this.ambI=((this.ambI||0)+1)%3];ni(r,3e4)}this.wg.gain.setTargetAtTime(.028+Math.min(i,7)*.007,s,.3),this.wg2.gain.setTargetAtTime(.006+Math.min(i,7)*.0016,s,.3),this.cg.gain.setTargetAtTime(.002*t,s,1.5),this.nextFrog||(this.nextFrog=s+4),this.on&&s>this.nextFrog&&(this.nextFrog=s+2.5+Math.random()*(n?9:5),this.frog(Math.random()*1.6-.8,n)),this.nextBell||(this.nextBell=s+14),this.on&&s>this.nextBell&&(this.nextBell=s+30+Math.random()*35,this.bell()),s>this.nextFlute&&(this.nextFlute=s+28+Math.random()*30,this.phrase())},pan(i){let t=this.ctx.createStereoPanner();t.pan.value=Math.max(-1,Math.min(1,i)),t.connect(this.m);let e=this.ctx.createGain();return e.gain.value=.55,e.connect(this.rv),[t]},pluck(i,t,e,n){let s=this.ctx,r=t,[a]=this.pan(n||0);[[1,1],[2.76,.28],[5.4,.1]].forEach(([o,l],c)=>{let h=s.createOscillator();h.type="sine",h.frequency.value=i*o;let d=s.createGain();d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(e*l,r+.008),d.gain.exponentialRampToValueAtTime(1e-4,r+2.6/(1+c*.6)),h.connect(d),d.connect(a),d.connect(this.rv),h.start(r),h.stop(r+3)})},lantern(i){if(!this.ctx||!this.on)return;let t=this.ctx.currentTime;ni("Nota de linterna");let e=Math.floor(Math.random()*5);this.pluck(cs(e+5,2),t,.1,i),this.pluck(cs(e+7,2),t+.16,.07,i)},flute(i,t,e,n,s){let r=this.ctx,a=cs(i,t),o=e,l=r.createOscillator();l.type="sine",l.frequency.value=a;let c=r.createOscillator(),h=r.createGain();c.frequency.value=4.6,h.gain.value=a*.007,c.connect(h),h.connect(l.frequency);let d=r.createBufferSource();d.buffer=this.nb,d.loop=!0;let u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=a*2,u.Q.value=4;let f=r.createGain();f.gain.value=s*.5;let p=r.createGain();p.gain.setValueAtTime(0,o),p.gain.linearRampToValueAtTime(s,o+.35),p.gain.setTargetAtTime(0,o+n,.5),l.connect(p),d.connect(u),u.connect(f),f.connect(p),p.connect(this.m),p.connect(this.rv),l.start(o),c.start(o),d.start(o),l.stop(o+n+2.5),c.stop(o+n+2.5),d.stop(o+n+2.5)},phrase(){if(!this.on)return;ni("Flauta shakuhachi");let t=this.ctx.currentTime+.2;[[0,2,2.6],[2,2,1.8],[1,2,1.6],[4,1,3.4]].slice(0,2+Math.floor(Math.random()*3)).forEach(([n,s,r])=>{this.flute(n,s+1,t,r,.035),t+=r*.9})},frog(i,t){ni("Croar de ranas",14e3);let e=this.ctx,n=e.currentTime+.05,[s]=this.pan(i),r=Math.random()<.4,a=r?210+Math.random()*40:340+Math.random()*80,o=1+(Math.random()*3|0);for(let l=0;l<o;l++){let c=n+l*(r?.26:.17),h=e.createOscillator(),d=e.createGain(),u=e.createBiquadFilter();h.type="triangle",h.frequency.setValueAtTime(a,c),h.frequency.exponentialRampToValueAtTime(a*1.35,c+.06),h.frequency.exponentialRampToValueAtTime(a*.85,c+.14),u.type="bandpass",u.frequency.value=a*2,u.Q.value=2,d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime((t?.012:.02)*(r?1.2:.8),c+.03),d.gain.exponentialRampToValueAtTime(1e-4,c+.16),h.connect(u),u.connect(d),d.connect(s),d.connect(this.rv),h.start(c),h.stop(c+.2)}},bell(){ni("Campana de templo");let i=this.ctx,t=i.currentTime+.1,[e]=this.pan(Math.random()*1.2-.6),n=cs(Math.floor(Math.random()*3),0)*2;[[1,1,7],[2.01,.35,5],[2.76,.28,4],[4.07,.12,2.5],[5.4,.08,2]].forEach(([s,r,a])=>{let o=i.createOscillator(),l=i.createGain();o.type="sine",o.frequency.value=n*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.022*r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+a),o.connect(l),l.connect(e),l.connect(this.rv),o.start(t),o.stop(t+a+.1)})},paddle(i){if(!this.ctx||!this.on)return;let t=this.ctx,e=t.currentTime,[n]=this.pan(i*.7),s=t.createBufferSource();s.buffer=this.nb;let r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1400,e),r.frequency.exponentialRampToValueAtTime(300,e+.5);let a=t.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.09,e+.05),a.gain.exponentialRampToValueAtTime(1e-4,e+.6),s.connect(r),r.connect(a),a.connect(n),s.start(e,Math.random()*2),s.stop(e+.7)},plop(i){if(!this.ctx||!this.on)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=t.createStereoPanner?t.createStereoPanner():null;n.type="sine",n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.05,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),r?(r.pan.value=Math.max(-1,Math.min(1,i||0)),s.connect(r),r.connect(this.m)):s.connect(this.m),n.start(e),n.stop(e+.25)},meow(){if(!this.ctx||!this.on)return;ni("Maullido suave",4e3);let i=this.ctx,t=i.currentTime,e=i.createOscillator(),n=i.createBiquadFilter(),s=i.createGain();e.type="triangle",e.frequency.setValueAtTime(520,t),e.frequency.linearRampToValueAtTime(820,t+.14),e.frequency.linearRampToValueAtTime(480,t+.42),n.type="bandpass",n.frequency.value=1500,n.Q.value=1.2,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.035,t+.07),s.gain.exponentialRampToValueAtTime(1e-4,t+.5),e.connect(n),n.connect(s),s.connect(this.m),s.connect(this.rv),e.start(t),e.stop(t+.55)},creak(){if(!this.ctx||!this.on)return;ni("Madera que cruje",4e3);let i=this.ctx,t=i.currentTime,e=i.createOscillator(),n=i.createBiquadFilter(),s=i.createGain();e.type="sawtooth",e.frequency.setValueAtTime(95,t),e.frequency.exponentialRampToValueAtTime(150,t+.18),e.frequency.exponentialRampToValueAtTime(70,t+.4),n.type="lowpass",n.frequency.value=420,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.03,t+.06),s.gain.exponentialRampToValueAtTime(1e-4,t+.45),e.connect(n),n.connect(s),s.connect(this.m),e.start(t),e.stop(t+.5)},sparkle(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime;this.pluck(cs(4,4),i,.035,.4),this.pluck(cs(7,4),i+.12,.025,.4)},bump(){if(!this.ctx||!this.on)return;let i=this.ctx,t=i.currentTime,e=i.createOscillator(),n=i.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(48,t+.35),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.45),e.connect(n),n.connect(this.m),e.start(t),e.stop(t+.5)}};var Kd=0,Rh=1,jd=2;var Ra=1,_l=2,mr=3,Qi=0,rn=1,Mn=2,fi=0,ts=1,Li=2,Ch=3,Ih=4,Qd=5;var Ss=100,tf=101,ef=102,nf=103,sf=104,rf=200,af=201,of=202,lf=203,Ph=204,Lh=205,cf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,xf=214,Lo=0,Do=1,No=2,tr=3,Uo=4,Fo=5,Oo=6,Bo=7,vl=0,_f=1,vf=2,$n=0,Dh=1,Nh=2,Uh=3,Fh=4,Oh=5,Bh=6,zh=7;var kh=300,es=301,Es=302,yl=303,bl=304,Ca=306,er=1e3,ri=1001,zo=1002,Ye=1003,yf=1004;var Ia=1005;var nn=1006,Ml=1007;var ns=1008;var Sn=1009,Vh=1010,Hh=1011,gr=1012,Sl=1013,Kn=1014,On=1015,jn=1016,El=1017,Tl=1018,xr=1020,Gh=35902,Wh=35899,Xh=1021,qh=1022,Bn=1023,oi=1026,is=1027,_r=1028,wl=1029,ss=1030,Al=1031;var Rl=1033,Pa=33776,La=33777,Da=33778,Na=33779,Cl=35840,Il=35841,Pl=35842,Ll=35843,Dl=36196,Nl=37492,Ul=37496,Fl=37488,Ol=37489,Ua=37490,Bl=37491,zl=37808,kl=37809,Vl=37810,Hl=37811,Gl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,Jl=37818,$l=37819,Kl=37820,jl=37821,Ql=36492,tc=36494,ec=36495,nc=36283,ic=36284,Fa=36285,sc=36286;var Zr=2300,ko=2301,Io=2302,ph=2303,mh=2400,gh=2401,xh=2402;var bf=3200;var Oa=0,Mf=1,Di="",mn="srgb",Jr="srgb-linear",$r="linear",ve="srgb";var Po=7680;var Sf=519,Ef=512,Tf=513,wf=514,rc=515,Af=516,Rf=517,ac=518,Cf=519,Yh=35044;var Zh="300 es",Jn=2e3,nr=2001;function og(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function If(){let i=Kr("canvas");return i.style.display="block",i}var dd={},ir=null;function jr(...i){let t="THREE."+i.shift();ir?ir("log",t,...i):console.log(t,...i)}function Pf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Pf(i);let t="THREE."+i.shift();if(ir)ir("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=Pf(i);let t="THREE."+i.shift();if(ir)ir("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ps(...i){let t=i.join(" ");t in dd||(dd[t]=!0,Vt(...i))}function Lf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Df={[Lo]:Do,[No]:Oo,[Uo]:Bo,[tr]:Fo,[Do]:Lo,[Oo]:No,[Bo]:Uo,[Fo]:tr},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kc=Math.PI/180,Vo=180/Math.PI;function wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function cg(i,t){return(i%t+t)%t}function Vc(i,t,e){return(1-e)*i+e*t}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tu=class tu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tu.prototype.isVector2=!0;var at=tu,Nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*v;m<0&&(u=-u,f=-f,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);g=Math.sin(g*M)/w,o=Math.sin(o*M)/w,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+v*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eu=class eu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hc.copy(this).projectOnVector(t),this.sub(Hc)}reflect(t){return this.sub(Hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eu.prototype.isVector3=!0;var P=eu,Hc=new P,fd=new Nn,nu=class nu{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],M=s[1],w=s[4],y=s[7],E=s[2],T=s[5],C=s[8];return r[0]=a*v+o*M+l*E,r[3]=a*m+o*w+l*T,r[6]=a*g+o*y+l*C,r[1]=c*v+h*M+d*E,r[4]=c*m+h*w+d*T,r[7]=c*g+h*y+d*C,r[2]=u*v+f*M+p*E,r[5]=u*m+f*w+p*T,r[8]=u*g+f*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nu.prototype.isMatrix3=!0;var Jt=nu,Gc=new Jt,pd=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){let i={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jr]:{primaries:t,whitePoint:n,transfer:$r,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}var ce=hg();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,Ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=Kr("canvas")),Us.width=t.width,Us.height=t.height;let s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ug=0,sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wc(s[a].image)):r.push(Wc(s[a]))}else r=Wc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var dg=0,Xc=new P,gn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=nn,a=ns,o=Bn,l=Sn,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=wi(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=kh;gn.DEFAULT_ANISOTROPY=1;var iu=class iu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(f+1)/2,E=(g+1)/2,T=(h+u)/4,C=(d+v)/4,_=(p+m)/4;return w>y&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};iu.prototype.isVector4=!0;var De=iu,Go=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new gn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Go{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qr=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wo=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xl=class xl{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,v,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,v,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),a=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u+v*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,v=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fg,t,pg)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Gi.crossVectors(n,Tn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Gi.crossVectors(n,Tn)),Gi.normalize(),to.crossVectors(Tn,Gi),s[0]=Gi.x,s[4]=to.x,s[8]=Tn.x,s[1]=Gi.y,s[5]=to.y,s[9]=Tn.y,s[2]=Gi.z,s[6]=to.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],M=n[3],w=n[7],y=n[11],E=n[15],T=s[0],C=s[4],_=s[8],S=s[12],R=s[1],I=s[5],N=s[9],O=s[13],L=s[2],B=s[6],X=s[10],W=s[14],st=s[3],q=s[7],j=s[11],et=s[15];return r[0]=a*T+o*R+l*L+c*st,r[4]=a*C+o*I+l*B+c*q,r[8]=a*_+o*N+l*X+c*j,r[12]=a*S+o*O+l*W+c*et,r[1]=h*T+d*R+u*L+f*st,r[5]=h*C+d*I+u*B+f*q,r[9]=h*_+d*N+u*X+f*j,r[13]=h*S+d*O+u*W+f*et,r[2]=p*T+v*R+m*L+g*st,r[6]=p*C+v*I+m*B+g*q,r[10]=p*_+v*N+m*X+g*j,r[14]=p*S+v*O+m*W+g*et,r[3]=M*T+w*R+y*L+E*st,r[7]=M*C+w*I+y*B+E*q,r[11]=M*_+w*N+y*X+E*j,r[15]=M*S+w*O+y*W+E*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15],M=l*f-c*u,w=o*f-c*d,y=o*u-l*d,E=a*f-c*h,T=a*u-l*h,C=a*d-o*h;return e*(v*M-m*w+g*y)-n*(p*M-m*E+g*T)+s*(p*w-v*E+g*C)-r*(p*y-v*T+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],M=e*o-n*a,w=e*l-s*a,y=e*c-r*a,E=n*l-s*o,T=n*c-r*o,C=s*c-r*l,_=h*v-d*p,S=h*m-u*p,R=h*g-f*p,I=d*m-u*v,N=d*g-f*v,O=u*g-f*m,L=M*O-w*N+y*I+E*R-T*S+C*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*O-l*N+c*I)*B,t[1]=(s*N-n*O-r*I)*B,t[2]=(v*C-m*T+g*E)*B,t[3]=(u*T-d*C-f*E)*B,t[4]=(l*R-a*O-c*S)*B,t[5]=(e*O-s*R+r*S)*B,t[6]=(m*y-p*C-g*w)*B,t[7]=(h*C-u*y+f*w)*B,t[8]=(a*N-o*R+c*_)*B,t[9]=(n*R-e*N-r*_)*B,t[10]=(p*T-v*y+g*M)*B,t[11]=(d*y-h*T-f*M)*B,t[12]=(o*S-a*I-l*_)*B,t[13]=(e*I-n*S+s*_)*B,t[14]=(v*w-p*E-m*M)*B,t[15]=(h*E-d*w+u*M)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,v=a*h,m=a*d,g=o*d,M=l*c,w=l*h,y=l*d,E=n.x,T=n.y,C=n.z;return s[0]=(1-(v+g))*E,s[1]=(f+y)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+g))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(p+w)*C,s[9]=(m-M)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),l=Fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Xn.copy(this);let c=1/a,h=1/o,d=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,e.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Jn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===nr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Jn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===nr)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};xl.prototype.isMatrix4=!0;var de=xl,Fs=new P,Xn=new de,fg=new P(0,0,0),pg=new P(1,1,1),Gi=new P,to=new P,Tn=new P,gd=new de,xd=new Nn,Ri=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xd.setFromEuler(this),this.setFromQuaternion(xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mg=0,_d=new P,Os=new Nn,yi=new de,eo=new P,Ur=new P,gg=new P,xg=new Nn,vd=new P(1,0,0),yd=new P(0,1,0),bd=new P(0,0,1),Md={type:"added"},_g={type:"removed"},Bs={type:"childadded",child:null},qc={type:"childremoved",child:null},Je=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Ri,n=new Nn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(vd,t)}rotateY(t){return this.rotateOnAxis(yd,t)}rotateZ(t){return this.rotateOnAxis(bd,t)}translateOnAxis(t,e){return _d.copy(t).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vd,t)}translateY(t){return this.translateOnAxis(yd,t)}translateZ(t){return this.translateOnAxis(bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ur,eo,this.up):yi.lookAt(eo,Ur,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(yi),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Md),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_g),qc.child=t,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Md),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,gg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new P(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ut=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},no={h:0,s:0,l:0};function Yc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=cg(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yc(a,r,t+1/3),this.g=Yc(a,r,t),this.b=Yc(a,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=Nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return ce.workingToColorSpace(cn.copy(this),t),Math.round(ae(cn.r*255,0,255))*65536+Math.round(ae(cn.g*255,0,255))*256+Math.round(ae(cn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=mn){ce.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(no);let n=Vc(Wi.h,no.h,e),s=Vc(Wi.s,no.s,e),r=Vc(Wi.l,no.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Ht;Ht.NAMES=Nf;var ta=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ea=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qn=new P,bi=new P,Zc=new P,Mi=new P,zs=new P,ks=new P,Sd=new P,Jc=new P,$c=new P,Kc=new P,jc=new De,Qc=new De,th=new De,Ti=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qn.subVectors(s,e),bi.subVectors(n,e),Zc.subVectors(t,e);let a=qn.dot(qn),o=qn.dot(bi),l=qn.dot(Zc),c=bi.dot(bi),h=bi.dot(Zc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return jc.setScalar(0),Qc.setScalar(0),th.setScalar(0),jc.fromBufferAttribute(t,e),Qc.fromBufferAttribute(t,n),th.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jc,r.x),a.addScaledVector(Qc,r.y),a.addScaledVector(th,r.z),a}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),bi.subVectors(t,e),qn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,n),ks.subVectors(r,n),Jc.subVectors(t,n);let l=zs.dot(Jc),c=ks.dot(Jc);if(l<=0&&c<=0)return e.copy(n);$c.subVectors(t,s);let h=zs.dot($c),d=ks.dot($c);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(zs,a);Kc.subVectors(t,r);let f=zs.dot(Kc),p=ks.dot(Kc);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ks,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Sd.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Sd,o);let g=1/(m+v+u);return a=v*g,o=u*g,e.copy(n).addScaledVector(zs,a).addScaledVector(ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),so.subVectors(this.max,Fr),Vs.subVectors(t.a,Fr),Hs.subVectors(t.b,Fr),Gs.subVectors(t.c,Fr),Xi.subVectors(Hs,Vs),qi.subVectors(Gs,Hs),hs.subVectors(Vs,Gs);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-hs.z,hs.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,hs.z,0,-hs.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-hs.y,hs.x,0];return!eh(e,Vs,Hs,Gs,so)||(e=[1,0,0,0,1,0,0,0,1],!eh(e,Vs,Hs,Gs,so))?!1:(ro.crossVectors(Xi,qi),e=[ro.x,ro.y,ro.z],eh(e,Vs,Hs,Gs,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new P,new P,new P,new P,new P,new P,new P,new P],Yn=new P,io=new ci,Vs=new P,Hs=new P,Gs=new P,Xi=new P,qi=new P,hs=new P,Fr=new P,so=new P,ro=new P,us=new P;function eh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qe=new P,ao=new at,yg=0,Ve=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yh,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var na=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ia=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},bg=new ci,Or=new P,nh=new P,hi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(nh)),this.expandByPoint(Or.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mg=0,Dn=new de,ih=new Je,Ws=new P,wn=new ci,Br=new ci,Qe=new P,Se=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(og(t)?ia:na)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(wn.min,Br.min),wn.expandByPoint(Qe),Qe.addVectors(wn.max,Br.max),wn.expandByPoint(Qe)):(wn.expandByPoint(Br.min),wn.expandByPoint(Br.max))}wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(t,c),Qe.add(Ws)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ve(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,d=new P,u=new at,f=new at,p=new at,v=new P,m=new P;function g(_,S,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[_].add(v),o[S].add(v),o[R].add(v),l[_].add(m),l[S].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,S=M.length;_<S;++_){let R=M[_],I=R.start,N=R.count;for(let O=I,L=I+N;O<L;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new P,y=new P,E=new P,T=new P;function C(_){E.fromBufferAttribute(s,_),T.copy(E);let S=o[_];w.copy(S),w.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(T,S);let I=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,S=M.length;_<S;++_){let R=M[_],I=R.start,N=R.count;for(let O=I,L=I+N;O<L;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Ve(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yh,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},pn=new P,sa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sh=new P,Sg=new P,Eg=new Jt,Zn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sh.subVectors(n,e).cross(Sg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(sh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Eg.getNormalMatrix(t),s=this.coplanarPoint(sh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tg=0,Un=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ts,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Lh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},or=class extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xs,zr=new P,qs=new P,Ys=new P,Zs=new at,kr=new at,Uf=new de,oo=new P,Vr=new P,lo=new P,Ed=new at,rh=new at,Td=new at,ra=class extends Je{constructor(t=new or){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xo(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new sa(n,3,0,!1)),Xs.setAttribute("uv",new sa(n,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;co(oo.set(-.5,-.5,0),Ys,a,qs,s,r),co(Vr.set(.5,-.5,0),Ys,a,qs,s,r),co(lo.set(.5,.5,0),Ys,a,qs,s,r),Ed.set(0,0),rh.set(1,0),Td.set(1,1);let o=t.ray.intersectTriangle(oo,Vr,lo,!1,zr);if(o===null&&(co(Vr.set(-.5,.5,0),Ys,a,qs,s,r),rh.set(0,1),o=t.ray.intersectTriangle(oo,lo,Vr,!1,zr),o===null))return;let l=t.ray.origin.distanceTo(zr);l<t.near||l>t.far||e.push({distance:l,point:zr.clone(),uv:Ti.getInterpolation(zr,oo,Vr,lo,Ed,rh,Td,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function co(i,t,e,n,s,r){Zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(kr.x=r*Zs.x-s*Zs.y,kr.y=s*Zs.x+r*Zs.y):kr.copy(Zs),i.copy(t),i.x+=kr.x,i.y+=kr.y,i.applyMatrix4(Uf)}var Ei=new P,ah=new P,ho=new P,uo=new P,ms=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ah.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),uo.copy(this.origin).sub(ah);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ho),o=uo.dot(this.direction),l=-uo.dot(ho),c=uo.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ah).addScaledVector(ho,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,v=e.y-a.y,m=e.z-a.z,g=n.x-a.x,M=n.y-a.y,w=n.z-a.z,y=Math.abs(l),E=Math.abs(c),T=Math.abs(h),C,_,S,R,I,N,O,L,B,X,W,st;if(y>=E&&y>=T?(S=l,N=d,B=p,st=g,l>=0?(C=c,_=h,R=u,I=f,O=v,L=m,X=M,W=w):(C=h,_=c,R=f,I=u,O=m,L=v,X=w,W=M)):E>=T?(S=c,N=u,B=v,st=M,c>=0?(C=h,_=l,R=f,I=d,O=m,L=p,X=w,W=g):(C=l,_=h,R=d,I=f,O=p,L=m,X=g,W=w)):(S=h,N=f,B=m,st=w,h>=0?(C=l,_=c,R=d,I=u,O=p,L=v,X=g,W=M):(C=c,_=l,R=u,I=d,O=v,L=p,X=M,W=g)),S===0)return null;let q=C/S,j=_/S,et=1/S,Nt=R-q*N,Ct=I-j*N,me=O-q*B,ie=L-j*B,he=X-q*st,J=W-j*st,Q=he*ie-J*me,Mt=Nt*J-Ct*he,qt=me*Ct-ie*Nt;if(s){if(Q<0||Mt<0||qt<0)return null}else if((Q<0||Mt<0||qt<0)&&(Q>0||Mt>0||qt>0))return null;let wt=Q+Mt+qt;if(wt===0)return null;let Yt=et*(Q*N+Mt*B+qt*st);return(wt>0?Yt<0:Yt>0)?null:this.at(Yt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wd=new de,ds=new ms,fo=new hi,Ad=new P,po=new P,mo=new P,go=new P,oh=new P,xo=new P,Rd=new P,_o=new P,zt=class extends Je{constructor(t=new Se,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(oh.fromBufferAttribute(d,t),a?xo.addScaledVector(oh,h):xo.addScaledVector(oh.sub(e),h))}e.add(xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(fo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(fo,Ad)===null||ds.origin.distanceToSquared(Ad)>(t.far-t.near)**2))&&(wd.copy(r).invert(),ds.copy(t.ray).applyMatrix4(wd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,E=w;y<E;y+=3){let T=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);s=vo(this,g,t,n,c,h,d,T,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let M=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=vo(this,a,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,E=w;y<E;y+=3){let T=y,C=y+1,_=y+2;s=vo(this,g,t,n,c,h,d,T,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let M=m,w=m+1,y=m+2;s=vo(this,a,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wg(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Qi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:i}}function vo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,po),i.getVertexPosition(l,mo),i.getVertexPosition(c,go);let h=wg(i,t,e,n,po,mo,go,Rd);if(h){let d=new P;Ti.getBarycoord(Rd,po,mo,go,d),s&&(h.uv=Ti.getInterpolatedAttribute(s,o,l,c,d,new at)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,o,l,c,d,new at)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Ti.getNormal(po,mo,go,u.normal),h.face=u,h.barycoord=d}return h}var gs=class extends gn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ye,h=Ye,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var aa=class extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Js=new de,Cd=new de,yo=[],Id=new ci,Ag=new de,Hr=new zt,Gr=new hi,oa=class extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Id.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(Id)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Gr.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Cd.multiplyMatrices(n,Js),Hr.matrixWorld=Cd,Hr.raycast(t,yo);for(let a=0,o=yo.length;a<o;a++){let l=yo[a];l.instanceId=r,l.object=this,e.push(l)}yo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gs(new Float32Array(s*this.count),s,this.count,_r,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new hi,Rg=new at(.5,.5),bo=new P,lr=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],M=r[12],w=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,g-p,E-M).normalize(),s[1].setComponents(c+a,f+h,g+p,E+M).normalize(),s[2].setComponents(c+o,f+d,g+v,E+w).normalize(),s[3].setComponents(c-o,f-d,g-v,E-w).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,g-m,E-y).normalize();else if(s[4].setComponents(c-l,f-u,g-m,E-y).normalize(),e===Jn)s[5].setComponents(c+l,f+u,g+m,E+y).normalize();else if(e===nr)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);let e=Rg.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cr=class extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qo=new P,Yo=new P,Pd=new de,Wr=new ms,Mo=new hi,lh=new P,Ld=new P,Zo=class extends Je{constructor(t=new Se,e=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qo.fromBufferAttribute(e,s-1),Yo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qo.distanceTo(Yo);t.setAttribute("lineDistance",new oe(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Pd.copy(s).invert(),Wr.copy(t.ray).applyMatrix4(Pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=h.getX(v),M=h.getX(v+1),w=So(this,t,Wr,l,g,M,v);w&&e.push(w)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=So(this,t,Wr,l,v,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=So(this,t,Wr,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){let v=So(this,t,Wr,l,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function So(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(qo.fromBufferAttribute(o,s),Yo.fromBufferAttribute(o,r),e.distanceSqToSegment(qo,Yo,lh,Ld)>n)return;lh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lh);if(!(c<t.near||c>t.far))return{distance:c,point:Ld.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Dd=new P,Nd=new P,la=class extends Zo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Dd.fromBufferAttribute(e,s),Nd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Dd.distanceTo(Nd);t.setAttribute("lineDistance",new oe(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ui=class extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ud=new de,_h=new ms,Eo=new hi,To=new P,Ci=class extends Je{constructor(t=new Se,e=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;Ud.copy(s).invert(),_h.copy(t.ray).applyMatrix4(Ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,v=f;p<v;p++){let m=c.getX(p);To.fromBufferAttribute(d,m),Fd(To,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,v=f;p<v;p++)To.fromBufferAttribute(d,p),Fd(To,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fd(i,t,e,n,s,r,a){let o=_h.distanceSqToPoint(i);if(o<e){let l=new P;_h.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends gn{constructor(t=[],e=es,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xs=class extends gn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends gn{constructor(t,e,n=Kn,s,r,a,o=Ye,l=Ye,c,h=oi,d=1){if(h!==oi&&h!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jo=class extends Zi{constructor(t,e=Kn,n=es,s,r,a=Ye,o=Ye,l,c=oi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ha=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},An=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function p(v,m,g,M,w,y,E,T,C,_,S){let R=y/C,I=E/_,N=y/2,O=E/2,L=T/2,B=C+1,X=_+1,W=0,st=0,q=new P;for(let j=0;j<X;j++){let et=j*I-O;for(let Nt=0;Nt<B;Nt++){let Ct=Nt*R-N;q[v]=Ct*M,q[m]=et*w,q[g]=L,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(Nt/C),d.push(1-j/_),W+=1}}for(let j=0;j<_;j++)for(let et=0;et<C;et++){let Nt=u+et+B*j,Ct=u+et+B*(j+1),me=u+(et+1)+B*(j+1),ie=u+(et+1)+B*j;l.push(Nt,Ct,ie),l.push(Ct,me,ie),st+=6}o.addGroup(f,st,S),f+=st,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ua=class i extends Se{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,v=s+1,m=new P,g=new P;for(let M=0;M<=p;M++){let w=0,y=0,E=0,T=0;if(M<=n){let S=M/n,R=S*Math.PI/2;y=-h-t*Math.cos(R),E=t*Math.sin(R),T=-t*Math.cos(R),w=S*d}else if(M<=n+r){let S=(M-n)/r;y=-h+S*e,E=t,T=0,w=d+S*u}else{let S=(M-n-r)/n,R=S*Math.PI/2;y=h+t*Math.sin(R),E=t*Math.cos(R),T=t*Math.sin(R),w=d+u+S*d}let C=Math.max(0,Math.min(1,w/f)),_=0;M===0?_=.5/s:M===p&&(_=-.5/s);for(let S=0;S<=s;S++){let R=S/s,I=R*Math.PI*2,N=Math.sin(I),O=Math.cos(I);g.x=-E*O,g.y=y,g.z=E*N,o.push(g.x,g.y,g.z),m.set(-E*O,T,E*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+_,C)}if(M>0){let S=(M-1)*v;for(let R=0;R<s;R++){let I=S+R,N=S+R+1,O=M*v+R,L=M*v+R+1;a.push(I,N,O),a.push(N,L,O)}}}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class i extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fn=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,v=[],m=n/2,g=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function M(){let y=new P,E=new P,T=0,C=(e-t)/n;for(let _=0;_<=r;_++){let S=[],R=_/r,I=R*(e-t)+t;for(let N=0;N<=s;N++){let O=N/s,L=O*l+o,B=Math.sin(L),X=Math.cos(L);E.x=I*B,E.y=-R*n+m,E.z=I*X,d.push(E.x,E.y,E.z),y.set(B,C,X).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-R),S.push(p++)}v.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let R=v[S][_],I=v[S+1][_],N=v[S+1][_+1],O=v[S][_+1];(t>0||S!==0)&&(h.push(R,I,O),T+=3),(e>0||S!==r-1)&&(h.push(I,N,O),T+=3)}c.addGroup(g,T,0),g+=T}function w(y){let E=p,T=new at,C=new P,_=0,S=y===!0?t:e,R=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;let I=p;for(let N=0;N<=s;N++){let L=N/s*l+o,B=Math.cos(L),X=Math.sin(L);C.x=S*X,C.y=m*R,C.z=S*B,d.push(C.x,C.y,C.z),u.push(0,R,0),T.x=B*.5+.5,T.y=X*.5*R+.5,f.push(T.x,T.y),p++}for(let N=0;N<s;N++){let O=E+N,L=I+N;y===!0?h.push(L,L+1,O):h.push(L+1,L,O),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sn=class i extends Fn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},da=class i extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new P,y=new P,E=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],w),f(e[T+1],y),f(e[T+2],E),l(w,y,E,M)}function l(M,w,y,E){let T=E+1,C=[];for(let _=0;_<=T;_++){C[_]=[];let S=M.clone().lerp(y,_/T),R=w.clone().lerp(y,_/T),I=T-_;for(let N=0;N<=I;N++)N===0&&_===T?C[_][N]=S:C[_][N]=S.clone().lerp(R,N/I)}for(let _=0;_<T;_++)for(let S=0;S<2*(T-_)-1;S++){let R=Math.floor(S/2);S%2===0?(u(C[_][R+1]),u(C[_+1][R]),u(C[_][R])):(u(C[_][R+1]),u(C[_+1][R+1]),u(C[_+1][R]))}}function c(M){let w=new P;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let y=m(M)/2/Math.PI+.5,E=g(M)/Math.PI+.5;a.push(y,1-E)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let w=a[M+0],y=a[M+2],E=a[M+4],T=Math.max(w,y,E),C=Math.min(w,y,E);T>.9&&C<.1&&(w<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){let y=M*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function p(){let M=new P,w=new P,y=new P,E=new P,T=new at,C=new at,_=new at;for(let S=0,R=0;S<r.length;S+=9,R+=6){M.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),E.copy(M).add(w).add(y).divideScalar(3);let I=m(E);v(T,R+0,M,I),v(C,R+2,w,I),v(_,R+4,y,I)}}function v(M,w,y,E){E<0&&M.x===1&&(a[w]=M.x-1),y.x===0&&y.z===0&&(a[w]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new de;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hr=class extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$o=class extends hr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Od=new P,Bd=new P,ch=new Jh,hh=new Jh,uh=new Jh,Ko=class extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Bd.subVectors(s[0],s[1]).add(s[0]),c=Bd);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Od.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Od),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),ch.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,v,m),hh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,v,m),uh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(ch.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),uh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ch.calc(l),hh.calc(l),uh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Cg(i,t){let e=1-i;return e*e*t}function Ig(i,t){return 2*(1-i)*i*t}function Pg(i,t){return i*i*t}function qr(i,t,e,n){return Cg(i,t)+Ig(i,e)+Pg(i,n)}function Lg(i,t){let e=1-i;return e*e*e*t}function Dg(i,t){let e=1-i;return 3*e*e*i*t}function Ng(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function Yr(i,t,e,n,s){return Lg(i,t)+Dg(i,e)+Ng(i,n)+Ug(i,s)}var fa=class extends Rn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,s.x,r.x,a.x,o.x),Yr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jo=class extends Rn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,s.x,r.x,a.x,o.x),Yr(t,s.y,r.y,a.y,o.y),Yr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pa=class extends Rn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends Rn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Rn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(t,s.x,r.x,a.x),qr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends Rn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(t,s.x,r.x,a.x),qr(t,s.y,r.y,a.y),qr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(zd(o,l.x,c.x,h.x,d.x),zd(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},vh=Object.freeze({__proto__:null,ArcCurve:$o,CatmullRomCurve3:Ko,CubicBezierCurve:fa,CubicBezierCurve3:jo,EllipseCurve:hr,LineCurve:pa,LineCurve3:Qo,QuadraticBezierCurve:ma,QuadraticBezierCurve3:tl,SplineCurve:ga}),el=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vh[s.type]().fromJSON(s))}return this}},xa=class extends el{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new pa(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ma(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new fa(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new hr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ii=class extends xa{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xa().fromJSON(s))}return this}};function Fg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ff(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Vg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return _a(r,a,e,o,l,c,0),a}function Ff(i,t,e,n,s){let r;if(s===jg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=kd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=kd(a/n|0,i[a],i[a+1],r);return r&&ur(r,r.next)&&(ya(r),r=r.next),r}function _s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ur(e,e.next)||ze(e.prev,e,e.next)===0)){if(ya(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _a(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Bg(i,n,s,r):Og(i)){t.push(l.i,i.i,c.i),ya(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zg(_s(i),t),_a(i,t,e,n,s,r,2)):a===2&&kg(i,t,e,n,s,r):_a(_s(i),t,e,n,s,r,1);break}}}function Og(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Xr(s,o,r,l,a,c,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ze(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),g=yh(f,p,t,e,n),M=yh(v,m,t,e,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=g&&y&&y.z<=M;){if(w.x>=f&&w.x<=v&&w.y>=p&&w.y<=m&&w!==s&&w!==a&&Xr(o,h,l,d,c,u,w.x,w.y)&&ze(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Xr(o,h,l,d,c,u,y.x,y.y)&&ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=v&&w.y>=p&&w.y<=m&&w!==s&&w!==a&&Xr(o,h,l,d,c,u,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Xr(o,h,l,d,c,u,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ur(n,s)&&Bf(n,e,e.next,s)&&va(n,s)&&va(s,n)&&(t.push(n.i,e.i,s.i),ya(e),ya(e.next),e=i=s),e=e.next}while(e!==i);return _s(e)}function kg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jg(a,o)){let l=zf(a,o);a=_s(a,a.next),l=_s(l,l.next),_a(a,t,e,n,s,r,0),_a(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ff(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Zg(c))}s.sort(Hg);for(let r=0;r<s.length;r++)e=Gg(s[r],e);return e}function Hg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Gg(i,t){let e=Wg(i,t);if(!e)return t;let n=zf(e,i);return _s(n,n.next),_s(e,e.next)}function Wg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ur(i,e))return e;do{if(ur(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Of(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);va(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Xg(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Xg(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function qg(i,t,e,n){let s=i;do s.z===0&&(s.z=yh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yg(s)}function Yg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function yh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Of(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Xr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Of(i,t,e,n,s,r,a,o)}function Jg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$g(i,t)&&(va(i,t)&&va(t,i)&&Kg(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||ur(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ur(i,t){return i.x===t.x&&i.y===t.y}function Bf(i,t,e,n){let s=Ao(ze(i,t,e)),r=Ao(ze(i,t,n)),a=Ao(ze(e,n,i)),o=Ao(ze(e,n,t));return!!(s!==r&&a!==o||s===0&&wo(i,e,t)||r===0&&wo(i,n,t)||a===0&&wo(e,i,n)||o===0&&wo(e,t,n))}function wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ao(i){return i>0?1:i<0?-1:0}function $g(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function va(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function Kg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zf(i,t){let e=bh(i.i,i.x,i.y),n=bh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kd(i,t,e,n){let s=bh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Mh=class{static triangulate(t,e,n=2){return Fg(t,e,n)}},ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Vd(t),Hd(n,t);let a=t.length;e.forEach(Vd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Hd(n,e[l]);let o=Mh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Vd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ba=class i extends Se{constructor(t=new Ii([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Qg,w,y=!1,E,T,C,_;if(g){w=g.getSpacedPoints(h),y=!0,u=!1;let tt=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,tt),T=new P,C=new P,_=new P}u||(m=0,f=0,p=0,v=0);let S=o.extractPoints(c),R=S.shape,I=S.holes;if(!ai.isClockWise(R)){R=R.reverse();for(let tt=0,rt=I.length;tt<rt;tt++){let ct=I[tt];ai.isClockWise(ct)&&(I[tt]=ct.reverse())}}function O(tt){let ct=10000000000000001e-36,ht=tt[0];for(let mt=1;mt<=tt.length;mt++){let Gt=mt%tt.length,kt=tt[Gt],Zt=kt.x-ht.x,Kt=kt.y-ht.y,D=Zt*Zt+Kt*Kt,ge=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(ht.x),Math.abs(ht.y)),se=ct*ge*ge;if(D<=se){tt.splice(Gt,1),mt--;continue}ht=kt}}O(R),I.forEach(O);let L=I.length,B=R;for(let tt=0;tt<L;tt++){let rt=I[tt];R=R.concat(rt)}function X(tt,rt,ct){return rt||Xt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(rt,ct)}let W=R.length;function st(tt,rt,ct){let ht,mt,Gt,kt=tt.x-rt.x,Zt=tt.y-rt.y,Kt=ct.x-tt.x,D=ct.y-tt.y,ge=kt*kt+Zt*Zt,se=kt*D-Zt*Kt;if(Math.abs(se)>Number.EPSILON){let A=Math.sqrt(ge),x=Math.sqrt(Kt*Kt+D*D),z=rt.x-Zt/A,H=rt.y+kt/A,Y=ct.x-D/x,ut=ct.y+Kt/x,pt=((Y-z)*D-(ut-H)*Kt)/(kt*D-Zt*Kt);ht=z+kt*pt-tt.x,mt=H+Zt*pt-tt.y;let Z=ht*ht+mt*mt;if(Z<=2)return new at(ht,mt);Gt=Math.sqrt(Z/2)}else{let A=!1;kt>Number.EPSILON?Kt>Number.EPSILON&&(A=!0):kt<-Number.EPSILON?Kt<-Number.EPSILON&&(A=!0):Math.sign(Zt)===Math.sign(D)&&(A=!0),A?(ht=-Zt,mt=kt,Gt=Math.sqrt(ge)):(ht=kt,mt=Zt,Gt=Math.sqrt(ge/2))}return new at(ht/Gt,mt/Gt)}let q=[];for(let tt=0,rt=B.length,ct=rt-1,ht=tt+1;tt<rt;tt++,ct++,ht++)ct===rt&&(ct=0),ht===rt&&(ht=0),q[tt]=st(B[tt],B[ct],B[ht]);let j=[],et,Nt=q.concat();for(let tt=0,rt=L;tt<rt;tt++){let ct=I[tt];et=[];for(let ht=0,mt=ct.length,Gt=mt-1,kt=ht+1;ht<mt;ht++,Gt++,kt++)Gt===mt&&(Gt=0),kt===mt&&(kt=0),et[ht]=st(ct[ht],ct[Gt],ct[kt]);j.push(et),Nt=Nt.concat(et)}let Ct;if(m===0)Ct=ai.triangulateShape(B,I);else{let tt=[],rt=[];for(let ct=0;ct<m;ct++){let ht=ct/m,mt=f*Math.cos(ht*Math.PI/2),Gt=p*Math.sin(ht*Math.PI/2)+v;for(let kt=0,Zt=B.length;kt<Zt;kt++){let Kt=X(B[kt],q[kt],Gt);Mt(Kt.x,Kt.y,-mt),ht===0&&tt.push(Kt)}for(let kt=0,Zt=L;kt<Zt;kt++){let Kt=I[kt];et=j[kt];let D=[];for(let ge=0,se=Kt.length;ge<se;ge++){let A=X(Kt[ge],et[ge],Gt);Mt(A.x,A.y,-mt),ht===0&&D.push(A)}ht===0&&rt.push(D)}}Ct=ai.triangulateShape(tt,rt)}let me=Ct.length,ie=p+v;for(let tt=0;tt<W;tt++){let rt=u?X(R[tt],Nt[tt],ie):R[tt];y?(C.copy(E.normals[0]).multiplyScalar(rt.x),T.copy(E.binormals[0]).multiplyScalar(rt.y),_.copy(w[0]).add(C).add(T),Mt(_.x,_.y,_.z)):Mt(rt.x,rt.y,0)}for(let tt=1;tt<=h;tt++)for(let rt=0;rt<W;rt++){let ct=u?X(R[rt],Nt[rt],ie):R[rt];y?(C.copy(E.normals[tt]).multiplyScalar(ct.x),T.copy(E.binormals[tt]).multiplyScalar(ct.y),_.copy(w[tt]).add(C).add(T),Mt(_.x,_.y,_.z)):Mt(ct.x,ct.y,d/h*tt)}for(let tt=m-1;tt>=0;tt--){let rt=tt/m,ct=f*Math.cos(rt*Math.PI/2),ht=p*Math.sin(rt*Math.PI/2)+v;for(let mt=0,Gt=B.length;mt<Gt;mt++){let kt=X(B[mt],q[mt],ht);Mt(kt.x,kt.y,d+ct)}for(let mt=0,Gt=I.length;mt<Gt;mt++){let kt=I[mt];et=j[mt];for(let Zt=0,Kt=kt.length;Zt<Kt;Zt++){let D=X(kt[Zt],et[Zt],ht);y?Mt(D.x,D.y+w[h-1].y,w[h-1].x+ct):Mt(D.x,D.y,d+ct)}}}he(),J();function he(){let tt=s.length/3;if(u){let rt=0,ct=W*rt;for(let ht=0;ht<me;ht++){let mt=Ct[ht];qt(mt[2]+ct,mt[1]+ct,mt[0]+ct)}rt=h+m*2,ct=W*rt;for(let ht=0;ht<me;ht++){let mt=Ct[ht];qt(mt[0]+ct,mt[1]+ct,mt[2]+ct)}}else{for(let rt=0;rt<me;rt++){let ct=Ct[rt];qt(ct[2],ct[1],ct[0])}for(let rt=0;rt<me;rt++){let ct=Ct[rt];qt(ct[0]+W*h,ct[1]+W*h,ct[2]+W*h)}}n.addGroup(tt,s.length/3-tt,0)}function J(){let tt=s.length/3,rt=0;Q(B,rt),rt+=B.length;for(let ct=0,ht=I.length;ct<ht;ct++){let mt=I[ct];Q(mt,rt),rt+=mt.length}n.addGroup(tt,s.length/3-tt,1)}function Q(tt,rt){let ct=tt.length;for(;--ct>=0;){let ht=ct,mt=ct-1;mt<0&&(mt=tt.length-1);for(let Gt=0,kt=h+m*2;Gt<kt;Gt++){let Zt=W*Gt,Kt=W*(Gt+1),D=rt+ht+Zt,ge=rt+mt+Zt,se=rt+mt+Kt,A=rt+ht+Kt;wt(D,ge,se,A)}}}function Mt(tt,rt,ct){l.push(tt),l.push(rt),l.push(ct)}function qt(tt,rt,ct){Yt(tt),Yt(rt),Yt(ct);let ht=s.length/3,mt=M.generateTopUV(n,s,ht-3,ht-2,ht-1);ye(mt[0]),ye(mt[1]),ye(mt[2])}function wt(tt,rt,ct,ht){Yt(tt),Yt(rt),Yt(ht),Yt(rt),Yt(ct),Yt(ht);let mt=s.length/3,Gt=M.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);ye(Gt[0]),ye(Gt[1]),ye(Gt[3]),ye(Gt[1]),ye(Gt[2]),ye(Gt[3])}function Yt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function ye(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return t0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vh[s.type]().fromJSON(s)),new i(n,t.options)}},Qg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-d),new at(u,1-p),new at(v,1-g)]:[new at(o,1-l),new at(h,1-d),new at(f,1-p),new at(m,1-g)]}};function t0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cn=class i extends da{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ma=class i extends da{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},vs=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let M=g*u-a;for(let w=0;w<c;w++){let y=w*d-r;p.push(y,-M,0),v.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let w=M+c*g,y=M+c*(g+1),E=M+1+c*(g+1),T=M+1+c*g;f.push(w,y,T),f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Sa=class i extends Se{constructor(t=new Ii([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;ai.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let M=p[m];ai.isClockWise(M)===!0&&(p[m]=M.reverse())}let v=ai.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let M=p[m];f=f.concat(M)}for(let m=0,g=f.length;m<g;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,g=v.length;m<g;m++){let M=v[m],w=M[0]+d,y=M[1]+d,E=M[2]+d;n.push(w,y,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return e0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function e0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var hn=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let M=[],w=g/n,y=a+w*o,E=t*Math.cos(y),T=Math.sqrt(t*t-E*E),C=0;g===0&&a===0?C=.5/e:g===n&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let S=_/e,R=s+S*r;d.x=-T*Math.cos(R),d.y=E,d.z=T*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(S+C,1-w),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let w=h[g][M+1],y=h[g][M],E=h[g+1][M],T=h[g+1][M+1];(g!==0||a>0)&&f.push(w,y,T),(g!==n-1||l<Math.PI)&&f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var di=class i extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let g=0;g<=s;g++){let M=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(g,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Gd(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Gd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=Ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Gd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function n0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $h(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var kf={clone:Ts,merge:un},i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=n0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},nl=class extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ys=class extends Un{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var bs=class extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},il=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $s(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gh:r=t,o=2*e-n;break;case xh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:a=t,l=2*n-e;break;case xh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let E=0;E!==o;++E)r[E]=g*a[h+E]+M*a[c+E]+w*a[l+E]+y*a[d+E];return r}},al=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ol=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ll=class extends $i{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),v=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let v=a[c+p],m=a[l+p],g=f*u+p*2,M=d[g],w=d[g+1],y=t*u+p*2,E=h[y],T=h[y+1],C=a0(n,e,M,E,s);r[p]=Vf(C,v,w,T,m)}return r}};function Vf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function r0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function a0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Vf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=r0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dh(t.settings)&&(n.settings={inTangents:$s(t.settings.inTangents,Array),outTangents:$s(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zr:e=this.InterpolantFactoryMethodDiscrete;break;case ko:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dh(this.settings)&&(Wd(this.settings.inTangents,t),Wd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&lg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let v=e[d+p];if(v!==e[u+p]||v!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=ko;var Ki=class extends In{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Zr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};cl.prototype.ValueTypeName="color";var hl=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};hl.prototype.ValueTypeName="number";var ul=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ea=class extends In{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends In{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Zr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};dl.prototype.ValueTypeName="vector";var fl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hf=new fl,pl=class{constructor(t){this.manager=t!==void 0?t:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ta=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fh=new de,Xd=new P,qd=new P,wa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Xd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xd),qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ro=new P,Co=new Nn,ii=new P,Aa=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Co,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ro,Co,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new P,Yd=new at,Zd=new at,en=class extends Aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Yd,Zd),e.subVectors(Zd,Yd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sh=class extends wa{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Pi=class extends dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},fr=class extends Aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eh=class extends wa{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ks=-90,js=1,ml=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Ks,js,t,e);s.layers=this.layers,this.add(s);let r=new en(Ks,js,t,e);r.layers=this.layers,this.add(r);let a=new en(Ks,js,t,e);a.layers=this.layers,this.add(a);let o=new en(Ks,js,t,e);o.layers=this.layers,this.add(o);let l=new en(Ks,js,t,e);l.layers=this.layers,this.add(l);let c=new en(Ks,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gl=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kh="\\[\\]\\.:\\/",o0=new RegExp("["+Kh+"]","g"),jh="[^"+Kh+"]",l0="[^"+Kh.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",jh),h0=/(WCOD+)?/.source.replace("WCOD",l0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),f0=new RegExp("^"+c0+h0+u0+d0+"$"),p0=["material","materials","bones","map"],Th=class{constructor(t,e,n){let s=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(t){let e=f0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Th;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zb=new Float32Array(1);var Jd=new de,Ms=class{constructor(t,e,n=0,s=1/0){this.ray=new ms(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jd),this}intersectObject(t,e=!0,n=[]){return wh(t,this,n,e),n.sort($d),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wh(t[s],this,n,e);return n.sort($d),n}};function $d(i,t){return i.distance-t.distance}function wh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wh(r[a],t,e,!0)}}var su=class su{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};su.prototype.isMatrix2=!0;var Ah=su;function Qh(i,t,e,n){let s=m0(n);switch(e){case Xh:return i*t;case _r:return i*t/s.components*s.byteLength;case wl:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case Al:return i*t*2/s.components*s.byteLength;case qh:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Rl:return i*t*4/s.components*s.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:case Ll:return Math.max(i,16)*Math.max(t,8)/4;case Cl:case Pl:return Math.max(i,8)*Math.max(t,8)/2;case Dl:case Nl:case Fl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ul:case Ua:case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ql:case tc:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m0(i){switch(i){case Sn:case Vh:return{byteLength:1,components:1};case gr:case Hh:case jn:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case Kn:case Sl:case On:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function x0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
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
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
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
#endif`,gx=`uniform sampler2D dfgLUT;
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
}`,xx=`
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,__=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,D_=`uniform vec3 diffuse;
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
}`,N_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
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
}`,F_=`#define MATCAP
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
}`,O_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,z_=`#define NORMAL
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
}`,k_=`#define PHONG
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
}`,V_=`#define PHONG
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
}`,H_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
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
}`,q_=`uniform float size;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,J_=`uniform vec3 color;
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
}`,$_=`uniform float rotation;
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
}`,K_=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:_0,alphahash_pars_fragment:v0,alphamap_fragment:y0,alphamap_pars_fragment:b0,alphatest_fragment:M0,alphatest_pars_fragment:S0,aomap_fragment:E0,aomap_pars_fragment:T0,batching_pars_vertex:w0,batching_vertex:A0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:I0,iridescence_fragment:P0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:k0,common:V0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:G0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:Z0,colorspace_pars_fragment:J0,envmap_fragment:$0,envmap_common_pars_fragment:K0,envmap_pars_fragment:j0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:ex,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:sx,gradientmap_pars_fragment:rx,lightmap_pars_fragment:ax,lights_lambert_fragment:ox,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:ux,lights_toon_pars_fragment:dx,lights_phong_fragment:fx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:xx,lights_fragment_maps:_x,lights_fragment_end:vx,lightprobes_pars_fragment:yx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:wx,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Px,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Nx,morphtarget_vertex:Ux,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:zx,normal_vertex:kx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:qx,packing:Yx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:$x,dithering_pars_fragment:Kx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:e_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:a_,skinnormal_vertex:o_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:h_,tonemapping_pars_fragment:u_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:x_,background_vert:__,background_frag:v_,backgroundCube_vert:y_,backgroundCube_frag:b_,cube_vert:M_,cube_frag:S_,depth_vert:E_,depth_frag:T_,distance_vert:w_,distance_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:I_,linedashed_frag:P_,meshbasic_vert:L_,meshbasic_frag:D_,meshlambert_vert:N_,meshlambert_frag:U_,meshmatcap_vert:F_,meshmatcap_frag:O_,meshnormal_vert:B_,meshnormal_frag:z_,meshphong_vert:k_,meshphong_frag:V_,meshphysical_vert:H_,meshphysical_frag:G_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:Z_,shadow_frag:J_,sprite_vert:$_,sprite_frag:K_},bt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},mi={basic:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:un([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:un([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:un([bt.points,bt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:un([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:un([bt.common,bt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:un([bt.sprite,bt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:un([bt.common,bt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:un([bt.lights,bt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};mi.physical={uniforms:un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var oc={r:0,b:0,g:0},j_=new de,up=new Jt;up.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t,e,n,s,r){let a=new Ht(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let y=M.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(M){let w=!1,y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===Ca)?(c===void 0&&(c=new zt(new An(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ts(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(up),c.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new zt(new vs(2,2),new xn({name:"BackgroundMaterial",uniforms:Ts(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(oc,$h(i)),e.buffers.color.setClear(oc.r,oc.g,oc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:v,dispose:g}}function tv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,N,O,L,B){let X=!1,W=d(I,L,O,N);r!==W&&(r=W,c(r.object)),X=f(I,L,O,B),X&&p(I,L,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(I,N,O,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,N,O,L){let B=L.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let W=I.isInstancedMesh===!0?I.id:0,st=X[W];st===void 0&&(st={},X[W]=st);let q=st[O.id];q===void 0&&(q={},st[O.id]=q);let j=q[B];return j===void 0&&(j=u(l()),q[B]=j),j}function u(I){let N=[],O=[],L=[];for(let B=0;B<e;B++)N[B]=0,O[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,O,L){let B=r.attributes,X=N.attributes,W=0,st=O.getAttributes();for(let q in st)if(st[q].location>=0){let et=B[q],Nt=X[q];if(Nt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Nt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Nt=I.instanceColor)),et===void 0||et.attribute!==Nt||Nt&&et.data!==Nt.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function p(I,N,O,L){let B={},X=N.attributes,W=0,st=O.getAttributes();for(let q in st)if(st[q].location>=0){let et=X[q];et===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let Nt={};Nt.attribute=et,et&&et.data&&(Nt.data=et.data),B[q]=Nt,W++}r.attributes=B,r.attributesNum=W,r.index=L}function v(){let I=r.newAttributes;for(let N=0,O=I.length;N<O;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){let O=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;O[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),B[I]!==N&&(i.vertexAttribDivisor(I,N),B[I]=N)}function M(){let I=r.newAttributes,N=r.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==I[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function w(I,N,O,L,B,X,W){W===!0?i.vertexAttribIPointer(I,N,O,B,X):i.vertexAttribPointer(I,N,O,L,B,X)}function y(I,N,O,L){v();let B=L.attributes,X=O.getAttributes(),W=N.defaultAttributeValues;for(let st in X){let q=X[st];if(q.location>=0){let j=B[st];if(j===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let et=j.normalized,Nt=j.itemSize,Ct=t.get(j);if(Ct===void 0)continue;let me=Ct.buffer,ie=Ct.type,he=Ct.bytesPerElement,J=ie===i.INT||ie===i.UNSIGNED_INT||j.gpuType===Sl;if(j.isInterleavedBufferAttribute){let Q=j.data,Mt=Q.stride,qt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<q.locationSize;wt++)g(q.location+wt,Q.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<q.locationSize;wt++)m(q.location+wt);i.bindBuffer(i.ARRAY_BUFFER,me);for(let wt=0;wt<q.locationSize;wt++)w(q.location+wt,Nt/q.locationSize,ie,et,Mt*he,(qt+Nt/q.locationSize*wt)*he,J)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)g(q.location+Q,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Q=0;Q<q.locationSize;Q++)w(q.location+Q,Nt/q.locationSize,ie,et,Nt*he,Nt/q.locationSize*Q*he,J)}}else if(W!==void 0){let et=W[st];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(q.location,et);break;case 3:i.vertexAttrib3fv(q.location,et);break;case 4:i.vertexAttrib4fv(q.location,et);break;default:i.vertexAttrib1fv(q.location,et)}}}}M()}function E(){S();for(let I in n){let N=n[I];for(let O in N){let L=N[O];for(let B in L){let X=L[B];for(let W in X)h(X[W].object),delete X[W];delete L[B]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let O in N){let L=N[O];for(let B in L){let X=L[B];for(let W in X)h(X[W].object),delete X[W];delete L[B]}}delete n[I.id]}function C(I){for(let N in n){let O=n[N];for(let L in O){let B=O[L];if(B[I.id]===void 0)continue;let X=B[I.id];for(let W in X)h(X[W].object),delete X[W];delete B[I.id]}}}function _(I){for(let N in n){let O=n[N],L=I.isInstancedMesh===!0?I.id:0,B=O[L];if(B!==void 0){for(let X in B){let W=B[X];for(let st in W)h(W[st].object),delete W[st];delete B[X]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function S(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function ev(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Sn&&C!==On&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:E,samples:T}}function iv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Zn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,y=g.clippingState||null;l.value=y,y=h(p,u,w,f);for(let E=0;E!==w;++E)y[E]=e[E];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,y=f;w!==v;++w,y+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var yr=4,sv=6,rv=20,av=256,Ba=new fr,Gf=new Ht,ru=null,au=0,ou=0,lu=!1,ov=new P,ws=new P,cc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ov}=r;ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ru,au,ou),this._renderer.xr.enabled=lu,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:jn,format:Bn,colorSpace:Jr,depthBuffer:!1},s=Wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lv(r)),this._blurMaterial=hv(r,t,e),this._ggxMaterial=cv(r,t,e)}return s}_compileMaterial(t){let e=new zt(new Se,t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s,r){let l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Gf),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new An,new Ee({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,g=!0):(m.color.copy(Gf),g=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;vr(s,y*E,w>2?E:0,E,E),d.setRenderTarget(s),g&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===es||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-yr?n-p+yr:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,vr(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(o,Ba),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,vr(t,m,g,3*v,2*v),s.setRenderTarget(t),s.render(o,Ba)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-yr?s-this._lodMax+yr:0),u=4*(this._cubeSize-h);vr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ba)}};function lv(i){let t=[],e=[],n=i,s=i-yr+1+sv;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let g=0;g<d;g++){let M=g%3*2/3-1,w=g>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(y,f*u*g);for(let E=0;E<u;E++){let T=h[E*2]*2-1,C=h[E*2+1]*2-1;g===0?ws.set(1,C,T):g===1?ws.set(-T,1,-C):g===2?ws.set(-T,C,1):g===3?ws.set(-1,C,-T):g===4?ws.set(-T,-1,C):ws.set(T,C,-1),ws.toArray(v,(g*u+E)*f)}}let m=new Se;m.setAttribute("position",new Ve(p,f)),m.setAttribute("outputDirection",new Ve(v,f)),e.push(new zt(m,null)),n>yr&&n--}return{lodMeshes:e,sizeLods:t}}function Wf(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cv(i,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:av,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function hv(i,t,e){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Xf(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function qf(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hc=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ca(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:fi});r.uniforms.tEquirect.value=e;let a=new zt(s,r),o=e.minFilter;return e.minFilter===ns&&(e.minFilter=nn),new ml(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function uv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===yl||f===bl)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new hc(p.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===yl||f===bl,v=f===es||f===Es;if(p||v){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new cc(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return p&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new cc(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===yl?u.mapping=es:f===bl&&(u.mapping=Es),u}function l(u){let f=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function dv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("WebGLRenderer: "+n+" extension not supported."),s}}}function fv(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,v=0;if(p===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let w=0,y=M.length;w<y;w+=3){let E=M[w+0],T=M[w+1],C=M[w+2];u.push(E,T,T,C,C,E)}}else{let M=p.array;v=p.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let E=w+0,T=w+1,C=w+2;u.push(E,T,T,C,C,E)}}let m=new(p.count>=65535?ia:na)(u,1);m.version=v;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function pv(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gv(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),v===!0&&(w=3);let y=o.attributes.position.count*w,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*E*4*d),C=new Qr(T,y,E,d);C.type=On,C.needsUpdate=!0;let _=w*4;for(let R=0;R<d;R++){let I=m[R],N=g[R],O=M[R],L=y*E*4*R;for(let B=0;B<I.count;B++){let X=B*_;f===!0&&(s.fromBufferAttribute(I,B),T[L+X+0]=s.x,T[L+X+1]=s.y,T[L+X+2]=s.z,T[L+X+3]=0),p===!0&&(s.fromBufferAttribute(N,B),T[L+X+4]=s.x,T[L+X+5]=s.y,T[L+X+6]=s.z,T[L+X+7]=0),v===!0&&(s.fromBufferAttribute(O,B),T[L+X+8]=s.x,T[L+X+9]=s.y,T[L+X+10]=s.z,T[L+X+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new at(y,E)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var _v={[Dh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function vv(i,t,e,n,s,r){let a=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Se;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let h=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new zt(c,h),u=new fr(-1,1,1,-1,0,1),f=null,p=null,v=!1,m,g=null,M=[],w=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let T=0;T<M.length;T++){let C=M[T];C.setSize&&C.setSize(y,E)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;let E=a.width,T=a.height;M.length>0&&o===null&&(o=new bn(E,T,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(E,T,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let _=M[C];_.setSize&&_.setSize(E,T)}},this.begin=function(y,E){if(v||y.toneMapping===$n&&M.length===0)return!1;if(g=E,E!==null){let T=E.width,C=E.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=$n,!0},this.hasRenderPass=function(){return w},this.end=function(y,E){y.toneMapping=m,v=!0;let T=a,C=o;for(let _=0;_<M.length;_++){let S=M[_];S.enabled!==!1&&(S.render(y,C,T,E),S.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},ce.getTransfer(f)===ve&&(h.defines.SRGB_TRANSFER="");let _=_v[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(d,u),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var dp=new gn,uu=new Zi(1,1),fp=new Qr,pp=new Wo,mp=new ca,Yf=[],Zf=[],Jf=new Float32Array(16),$f=new Float32Array(9),Kf=new Float32Array(4);function Mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Yf[s];if(r===void 0&&(r=new Float32Array(s),Yf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fc(i,t){let e=Zf[t];e===void 0&&(e=new Int32Array(t),Zf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Ev(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Kf.set(n),i.uniformMatrix2fv(this.addr,!1,Kf),Ke(e,n)}}function Tv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;$f.set(n),i.uniformMatrix3fv(this.addr,!1,$f),Ke(e,n)}}function wv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Jf.set(n),i.uniformMatrix4fv(this.addr,!1,Jf),Ke(e,n)}}function Av(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function Pv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function Nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function Uv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uu.compareFunction=e.isReversedDepthBuffer()?ac:rc,r=uu):r=dp,e.setTexture2D(t||r,s)}function Fv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pp,s)}function Ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mp,s)}function Bv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fp,s)}function zv(i){switch(i){case 5126:return yv;case 35664:return bv;case 35665:return Mv;case 35666:return Sv;case 35674:return Ev;case 35675:return Tv;case 35676:return wv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Iv;case 5125:return Pv;case 36294:return Lv;case 36295:return Dv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}function kv(i,t){i.uniform1fv(this.addr,t)}function Vv(i,t){let e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Hv(i,t){let e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function Gv(i,t){let e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function Wv(i,t){let e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xv(i,t){let e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qv(i,t){let e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yv(i,t){i.uniform1iv(this.addr,t)}function Zv(i,t){i.uniform2iv(this.addr,t)}function Jv(i,t){i.uniform3iv(this.addr,t)}function $v(i,t){i.uniform4iv(this.addr,t)}function Kv(i,t){i.uniform1uiv(this.addr,t)}function jv(i,t){i.uniform2uiv(this.addr,t)}function Qv(i,t){i.uniform3uiv(this.addr,t)}function ty(i,t){i.uniform4uiv(this.addr,t)}function ey(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uu:a=dp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ny(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pp,r[a])}function iy(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mp,r[a])}function sy(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fp,r[a])}function ry(i){switch(i){case 5126:return kv;case 35664:return Vv;case 35665:return Hv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return $v;case 5125:return Kv;case 36294:return jv;case 36295:return Qv;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zv(e.type)}},fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}},pu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},cu=/(\w+)(\])?(\[|\.)?/g;function jf(i,t){i.seq.push(t),i.map[t.id]=t}function ay(i,t,e){let n=i.name,s=n.length;for(cu.lastIndex=0;;){let r=cu.exec(n),a=cu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jf(e,c===void 0?new du(o,i,t):new fu(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new pu(o),jf(e,d)),e=d}}}var br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ay(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var oy=37297,ly=0;function cy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var tp=new Jt;function hy(i){ce._getMatrix(tp,ce.workingColorSpace,i);let t=`mat3( ${tp.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ep(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+cy(i.getShaderSource(t),o)}else return r}function uy(i,t){let e=hy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var dy={[Dh]:"Linear",[Nh]:"Reinhard",[Uh]:"Cineon",[Fh]:"ACESFilmic",[Bh]:"AgX",[zh]:"Neutral",[Oh]:"Custom"};function fy(i,t){let e=dy[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lc=new P;function py(){ce.getLuminanceCoefficients(lc);let i=lc.x.toFixed(4),t=lc.y.toFixed(4),e=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function gy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ka(i){return i!==""}function np(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ip(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(i){return i.replace(_y,yy)}var vy=new Map;function yy(i,t){let e=ne[t];if(e===void 0){let n=vy.get(t);if(n!==void 0)e=ne[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mu(e)}var by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(i){return i.replace(by,My)}function My(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Sy={[Ra]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Ey(i){return Sy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ty={[es]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE_UV"};function wy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ty[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ay={[Es]:"ENVMAP_MODE_REFRACTION"};function Ry(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cy={[vl]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[vf]:"ENVMAP_BLENDING_ADD"};function Iy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cy[i.combine]||"ENVMAP_BLENDING_NONE"}function Py(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ly(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ey(e),c=wy(e),h=Ry(e),d=Iy(e),u=Py(e),f=my(e),p=gy(r),v=s.createProgram(),m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ka).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ka).join(`
`),g.length>0&&(g+=`
`)):(m=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),g=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?ne.tonemapping_pars_fragment:"",e.toneMapping!==$n?fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,uy("linearToOutputTexel",e.outputColorSpace),py(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ka).join(`
`)),a=mu(a),a=np(a,e),a=ip(a,e),o=mu(o),o=np(o,e),o=ip(o,e),a=sp(a),o=sp(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=M+m+a,y=M+g+o,E=Qf(s,s.VERTEX_SHADER,w),T=Qf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,E),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(T)||"",B=N.trim(),X=O.trim(),W=L.trim(),st=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,T);else{let j=ep(s,E,"vertex"),et=ep(s,T,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+j+`
`+et)}else B!==""?Vt("WebGLProgram: Program Info Log:",B):(X===""||W==="")&&(q=!1);q&&(I.diagnostics={runnable:st,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(E),s.deleteShader(T),_=new br(s,v),S=xy(s,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,oy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ly++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=T,this}var Dy=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xu(t),e.set(t,n)),n}},xu=class{constructor(t){this.id=Dy++,this.code=t,this.usedTimes=0}};function Ny(i){return i===ss||i===Ua||i===Fa}function Uy(i,t,e,n,s,r){let a=new rr,o=new gu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,S,R,I,N,O){let L=I.fog,B=N.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||X,W),q=st&&st.mapping===Ca?st.image.height:null,j=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Nt=et!==void 0?et.length:0,Ct=0;B.morphAttributes.position!==void 0&&(Ct=1),B.morphAttributes.normal!==void 0&&(Ct=2),B.morphAttributes.color!==void 0&&(Ct=3);let me,ie,he,J;if(j){let Ae=mi[j];me=Ae.vertexShader,ie=Ae.fragmentShader}else{me=_.vertexShader,ie=_.fragmentShader;let Ae=o.getVertexShaderStage(_),xe=o.getFragmentShaderStage(_);o.update(_,Ae,xe),he=Ae.id,J=xe.id}let Q=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),qt=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,Yt=!!_.map,ye=!!_.matcap,tt=!!st,rt=!!_.aoMap,ct=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,Gt=!!_.displacementMap,kt=!!_.emissiveMap,Zt=!!_.metalnessMap,Kt=!!_.roughnessMap,D=_.anisotropy>0,ge=_.clearcoat>0,se=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,z=_.sheen>0,H=_.transmission>0,Y=D&&!!_.anisotropyMap,ut=ge&&!!_.clearcoatMap,pt=ge&&!!_.clearcoatNormalMap,Z=ge&&!!_.clearcoatRoughnessMap,K=x&&!!_.iridescenceMap,gt=x&&!!_.iridescenceThicknessMap,Ft=z&&!!_.sheenColorMap,yt=z&&!!_.sheenRoughnessMap,xt=!!_.specularMap,Ot=!!_.specularColorMap,Wt=!!_.specularIntensityMap,jt=H&&!!_.transmissionMap,F=H&&!!_.thicknessMap,_t=!!_.gradientMap,$=!!_.alphaMap,vt=_.alphaTest>0,Tt=!!_.alphaHash,it=!!_.extensions,Bt=$n;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Lt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:me,fragmentShader:ie,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:qt,instancingColor:qt&&N.instanceColor!==null,instancingMorph:qt&&N.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:ye,envMap:tt,envMapMode:tt&&st.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:ct,bumpMap:ht,normalMap:mt,displacementMap:Gt,emissiveMap:kt,normalMapObjectSpace:mt&&_.normalMapType===Mf,normalMapTangentSpace:mt&&_.normalMapType===Oa,packedNormalMap:mt&&_.normalMapType===Oa&&Ny(_.normalMap.format),metalnessMap:Zt,roughnessMap:Kt,anisotropy:D,anisotropyMap:Y,clearcoat:ge,clearcoatMap:ut,clearcoatNormalMap:pt,clearcoatRoughnessMap:Z,dispersion:se,retroreflection:A,iridescence:x,iridescenceMap:K,iridescenceThicknessMap:gt,sheen:z,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:xt,specularColorMap:Ot,specularIntensityMap:Wt,transmission:H,transmissionMap:jt,thicknessMap:F,gradientMap:_t,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:vt,alphaHash:Tt,combine:_.combine,mapUv:Yt&&p(_.map.channel),aoMapUv:rt&&p(_.aoMap.channel),lightMapUv:ct&&p(_.lightMap.channel),bumpMapUv:ht&&p(_.bumpMap.channel),normalMapUv:mt&&p(_.normalMap.channel),displacementMapUv:Gt&&p(_.displacementMap.channel),emissiveMapUv:kt&&p(_.emissiveMap.channel),metalnessMapUv:Zt&&p(_.metalnessMap.channel),roughnessMapUv:Kt&&p(_.roughnessMap.channel),anisotropyMapUv:Y&&p(_.anisotropyMap.channel),clearcoatMapUv:ut&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(_.sheenRoughnessMap.channel),specularMapUv:xt&&p(_.specularMap.channel),specularColorMapUv:Ot&&p(_.specularColorMap.channel),specularIntensityMapUv:Wt&&p(_.specularIntensityMap.channel),transmissionMapUv:jt&&p(_.transmissionMap.channel),thicknessMapUv:F&&p(_.thicknessMap.channel),alphaMapUv:$&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(mt||D),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Yt||$),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Ct,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===ve,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(S,_),M(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let S=f[_.type],R;if(S){let I=mi[S];R=kf.clone(I.uniforms)}else R=_.uniforms;return R}function y(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new Ly(i,S,_,s),c.push(R),h.set(S,R)),R}function E(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:C}}function Fy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Oy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function op(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,v,m,g){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,f,p,v,m,g,M){M.reversedDepth===!0&&(m=-m);let w=o(u,f,p,v,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(u,f,p,v,m,g){let M=o(u,f,p,v,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Oy),n.length>1&&n.sort(f||ap),s.length>1&&s.sort(f||ap)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function By(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new op,i.set(n,[a])):s>=r.length?(a=new op,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function ky(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vy=0;function Hy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gy(i){let t=new zy,e=ky(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new de,a=new de;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,M=0,w=0,y=0,E=0,T=0,C=0,_=0,S=0,R=0;c.sort(Hy);for(let N=0,O=c.length;N<O;N++){let L=c[N],B=L.color,X=L.intensity,W=L.distance,st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ss?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*X,d+=B.g*X,u+=B.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],X);R++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=st;let Nt=j.getViewportCount();for(let Ct=0;Ct<Nt;Ct++)n.sunShadowMatrix[v+Ct]=j.getMatrix(Ct),n.sunShadowCascade[v+Ct]=j._cascadeData[Ct];v+=Nt,p++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=L.shadow.matrix,E++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[M]=q;let j=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,j.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[M]=j.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=st,C++}M++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=q,w++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[y]=q,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==E||I.numPointShadows!==T||I.numSpotShadows!==C||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=E,I.numPointShadows=T,I.numSpotShadows=C,I.numSpotMaps=_,I.numLightProbes=R,n.version=Vy++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let y=c[M];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),u++}else if(y.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function lp(i){let t=new Gy(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Wy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new lp(i),t.set(s,[o])):r>=a.length?(o=new lp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
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
}`,Yy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Zy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],cp=new de,za=new P,hu=new P;function Jy(i,t,e){let n=new lr,s=new at,r=new at,a=new De,o=new il,l=new sl,c={},h=e.maxTextureSize,d={[Qi]:rn,[rn]:Qi,[Mn]:Mn},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Se;p.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new zt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let g=this.type;this.render=function(T,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===_l&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ra);let S=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(fi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=g!==this.type;O&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){let X=T[L],W=X.shadow;if(W===void 0){Vt("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let st=W.getFrameExtents();s.multiply(st),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,W.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===mr){if(X.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new bn(s.x,s.y,{format:ss,type:jn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Zi(s.x,s.y,On),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye}else X.isPointLight?(W.map=new hc(s.x),W.map.depthTexture=new Jo(s.x,Kn)):(W.map=new bn(s.x,s.y),W.map.depthTexture=new Zi(s.x,s.y,Kn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=oi,this.type===Ra?(W.map.depthTexture.compareFunction=q?ac:rc,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,_);for(let et=0;et<j;et++){let Nt=W.getCamera(et);if(X.isPointLight){let Ct=W.camera,me=W.matrix,ie=X.distance||Ct.far;ie!==Ct.far&&(Ct.far=ie,Ct.updateProjectionMatrix()),za.setFromMatrixPosition(X.matrixWorld),Ct.position.copy(za),hu.copy(Ct.position),hu.add(Yy[et]),Ct.up.copy(Zy[et]),Ct.lookAt(hu),Ct.updateMatrixWorld(),me.makeTranslation(-za.x,-za.y,-za.z),cp.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),W._frustum.setFromProjectionMatrix(cp,Ct.coordinateSystem,Ct.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,et),i.clear();else{et===0&&(i.setRenderTarget(W.map),i.clear());let Ct=W.getViewport(et);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),N.viewport(a)}n=W.getFrustum(et),y(C,_,Nt,X,this.type)}W.isPointLightShadow!==!0&&this.type===mr&&M(W,_),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,R,I)};function M(T,C){let _=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new bn(s.x,s.y,{format:ss,type:jn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,_,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,_,f,v,null)}function w(T,C,_,S){let R=null,I=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=R.uuid,O=C.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let B=L[O];B===void 0&&(B=R.clone(),L[O]=B,C.addEventListener("dispose",E)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,S===mr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=_}return R}function y(T,C,_,S,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===mr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let O=t.update(T),L=T.material;if(Array.isArray(L)){let B=O.groups;for(let X=0,W=B.length;X<W;X++){let st=B[X],q=L[st.materialIndex];if(q&&q.visible){let j=w(T,q,S,R);T.onBeforeShadow(i,T,C,_,O,j,st),i.renderBufferDirect(_,null,O,j,T,st),T.onAfterShadow(i,T,C,_,O,j,st)}}}else if(L.visible){let B=w(T,L,S,R);T.onBeforeShadow(i,T,C,_,O,B,null),i.renderBufferDirect(_,null,O,B,T,null),T.onAfterShadow(i,T,C,_,O,B,null)}}let N=T.children;for(let O=0,L=N.length;O<L;O++)y(N[O],C,_,S,R)}function E(T){T.target.removeEventListener("dispose",E);for(let _ in c){let S=c[_],R=T.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function $y(i,t){function e(){let F=!1,_t=new De,$=null,vt=new De(0,0,0,0);return{setMask:function(Tt){$!==Tt&&!F&&(i.colorMask(Tt,Tt,Tt,Tt),$=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,it,Bt,Lt,Ae){Ae===!0&&(Tt*=Lt,it*=Lt,Bt*=Lt),_t.set(Tt,it,Bt,Lt),vt.equals(_t)===!1&&(i.clearColor(Tt,it,Bt,Lt),vt.copy(_t))},reset:function(){F=!1,$=null,vt.set(-1,0,0,0)}}}function n(){let F=!1,_t=!1,$=null,vt=null,Tt=null;return{setReversed:function(it){if(_t!==it){let Bt=t.get("EXT_clip_control");it?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),_t=it;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(it){it?Q(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(it){$!==it&&!F&&(i.depthMask(it),$=it)},setFunc:function(it){if(_t&&(it=Df[it]),vt!==it){switch(it){case Lo:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case Fo:i.depthFunc(i.GEQUAL);break;case Oo:i.depthFunc(i.GREATER);break;case Bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=it}},setLocked:function(it){F=it},setClear:function(it){Tt!==it&&(Tt=it,_t&&(it=1-it),i.clearDepth(it))},reset:function(){F=!1,$=null,vt=null,Tt=null,_t=!1}}}function s(){let F=!1,_t=null,$=null,vt=null,Tt=null,it=null,Bt=null,Lt=null,Ae=null;return{setTest:function(xe){F||(xe?Q(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(xe){_t!==xe&&!F&&(i.stencilMask(xe),_t=xe)},setFunc:function(xe,Wn,ti){($!==xe||vt!==Wn||Tt!==ti)&&(i.stencilFunc(xe,Wn,ti),$=xe,vt=Wn,Tt=ti)},setOp:function(xe,Wn,ti){(it!==xe||Bt!==Wn||Lt!==ti)&&(i.stencilOp(xe,Wn,ti),it=xe,Bt=Wn,Lt=ti)},setLocked:function(xe){F=xe},setClear:function(xe){Ae!==xe&&(i.clearStencil(xe),Ae=xe)},reset:function(){F=!1,_t=null,$=null,vt=null,Tt=null,it=null,Bt=null,Lt=null,Ae=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],v=null,m=!1,g=null,M=null,w=null,y=null,E=null,T=null,C=null,_=new Ht(0,0,0),S=0,R=!1,I=null,N=null,O=null,L=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,st=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=st>=1):q.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=st>=2);let j=null,et={},Nt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),me=new De().fromArray(Nt),ie=new De().fromArray(Ct);function he(F,_t,$,vt){let Tt=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<$;Bt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(_t+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return it}let J={};J[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(tr),ht(!1),mt(Rh),Q(i.CULL_FACE),rt(fi);function Q(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function qt(F,_t){return u[F]!==_t?(i.bindFramebuffer(F,_t),u[F]=_t,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function wt(F,_t){let $=p,vt=!1;if(F){$=f.get(_t),$===void 0&&($=[],f.set(_t,$));let Tt=F.textures;if($.length!==Tt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Bt=Tt.length;it<Bt;it++)$[it]=i.COLOR_ATTACHMENT0+it;$.length=Tt.length,vt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,vt=!0);vt&&i.drawBuffers($)}function Yt(F){return v!==F?(i.useProgram(F),v=F,!0):!1}let ye={[Ss]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[ef]:i.FUNC_REVERSE_SUBTRACT};ye[nf]=i.MIN,ye[sf]=i.MAX;let tt={[rf]:i.ZERO,[af]:i.ONE,[of]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[ff]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[cf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[Lh]:i.ONE_MINUS_SRC_ALPHA,[df]:i.ONE_MINUS_DST_COLOR,[hf]:i.ONE_MINUS_DST_ALPHA,[pf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(F,_t,$,vt,Tt,it,Bt,Lt,Ae,xe){if(F===fi){m===!0&&(Mt(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),F!==Qd){if(F!==g||xe!==R){if((M!==Ss||E!==Ss)&&(i.blendEquation(i.FUNC_ADD),M=Ss,E=Ss),xe)switch(F){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Li:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",F);break}else switch(F){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ch:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",F);break}w=null,y=null,T=null,C=null,_.set(0,0,0),S=0,g=F,R=xe}return}Tt=Tt||_t,it=it||$,Bt=Bt||vt,(_t!==M||Tt!==E)&&(i.blendEquationSeparate(ye[_t],ye[Tt]),M=_t,E=Tt),($!==w||vt!==y||it!==T||Bt!==C)&&(i.blendFuncSeparate(tt[$],tt[vt],tt[it],tt[Bt]),w=$,y=vt,T=it,C=Bt),(Lt.equals(_)===!1||Ae!==S)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Ae),_.copy(Lt),S=Ae),g=F,R=!1}function ct(F,_t){F.side===Mn?Mt(i.CULL_FACE):Q(i.CULL_FACE);let $=F.side===rn;_t&&($=!$),ht($),F.blending===ts&&F.transparent===!1?rt(fi):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let vt=F.stencilWrite;o.setTest(vt),vt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),kt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function mt(F){F!==Kd?(Q(i.CULL_FACE),F!==N&&(F===Rh?i.cullFace(i.BACK):F===jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),N=F}function Gt(F){F!==O&&(W&&i.lineWidth(F),O=F)}function kt(F,_t,$){F?(Q(i.POLYGON_OFFSET_FILL),(L!==_t||B!==$)&&(L=_t,B=$,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,$))):Mt(i.POLYGON_OFFSET_FILL)}function Zt(F){F?Q(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Kt(F){F===void 0&&(F=i.TEXTURE0+X-1),j!==F&&(i.activeTexture(F),j=F)}function D(F,_t,$){$===void 0&&(j===null?$=i.TEXTURE0+X-1:$=j);let vt=et[$];vt===void 0&&(vt={type:void 0,texture:void 0},et[$]=vt),(vt.type!==F||vt.texture!==_t)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(F,_t||J[F]),vt.type=F,vt.texture=_t)}function ge(){let F=et[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function x(){try{i.texSubImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function ut(){try{i.texStorage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function pt(){try{i.texStorage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function Z(){try{i.texImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function K(){try{i.texImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function gt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Ft(F,_t){d[F]!==_t&&(i.pixelStorei(F,_t),d[F]=_t)}function yt(F){me.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),me.copy(F))}function xt(F){ie.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Ot(F,_t){let $=c.get(_t);$===void 0&&($=new WeakMap,c.set(_t,$));let vt=$.get(F);vt===void 0&&(vt=i.getUniformBlockIndex(_t,F.name),$.set(F,vt))}function Wt(F,_t){let vt=c.get(_t).get(F);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,F.__bindingPointIndex),l.set(_t,vt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,et={},u={},f=new WeakMap,p=[],v=null,m=!1,g=null,M=null,w=null,y=null,E=null,T=null,C=null,_=new Ht(0,0,0),S=0,R=!1,I=null,N=null,O=null,L=null,B=null,me.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:Mt,bindFramebuffer:qt,drawBuffers:wt,useProgram:Yt,setBlending:rt,setMaterial:ct,setFlipSided:ht,setCullFace:mt,setLineWidth:Gt,setPolygonOffset:kt,setScissorTest:Zt,activeTexture:Kt,bindTexture:D,unbindTexture:ge,compressedTexImage2D:se,compressedTexImage3D:A,texImage2D:Z,texImage3D:K,pixelStorei:Ft,getParameter:gt,updateUBOMapping:Ot,uniformBlockBinding:Wt,texStorage2D:ut,texStorage3D:pt,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:yt,viewport:xt,reset:jt}}function Ky(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return p?new OffscreenCanvas(A,x):Kr("canvas")}function m(A,x,z){let H=1,Y=se(A);if((Y.width>z||Y.height>z)&&(H=z/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ut=Math.floor(H*Y.width),pt=Math.floor(H*Y.height);u===void 0&&(u=v(ut,pt));let Z=x?v(ut,pt):u;return Z.width=ut,Z.height=pt,Z.getContext("2d").drawImage(A,0,0,ut,pt),Vt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ut+"x"+pt+")."),Z}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function g(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,x,z,H,Y,ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pt;H&&(pt=t.get("EXT_texture_norm16"),pt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.R16_EXT),z===i.SHORT&&pt&&(Z=pt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RG16_EXT),z===i.SHORT&&pt&&(Z=pt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGB16_EXT),z===i.SHORT&&pt&&(Z=pt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let K=ut?$r:ce.getTransfer(Y);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=K===ve?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGBA16_EXT),z===i.SHORT&&pt&&(Z=pt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(A,x){let z;return A?x===null||x===Kn||x===xr?z=i.DEPTH24_STENCIL8:x===On?z=i.DEPTH32F_STENCIL8:x===gr&&(z=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Kn||x===xr?z=i.DEPTH_COMPONENT24:x===On?z=i.DEPTH_COMPONENT32F:x===gr&&(z=i.DEPTH_COMPONENT16),z}function T(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),S(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),I(x)}function S(A){let x=n.get(A);if(x.__webglInit===void 0)return;let z=A.source,H=f.get(z);if(H){let Y=H[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(A),Object.keys(H).length===0&&f.delete(z)}n.remove(A)}function R(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let z=A.source,H=f.get(z);delete H[x.__cacheKey],a.memory.textures--}function I(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let Y=0;Y<x.__webglFramebuffer[H].length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[H][Y]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=A.textures;for(let H=0,Y=z.length;H<Y;H++){let ut=n.get(z[H]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(A)}let N=0;function O(){N=0}function L(){return N}function B(A){N=A}function X(){let A=N;return A>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function W(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function st(A,x){let z=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let H=A.image;if(H===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function q(A,x){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Mt(z,A,x);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function j(A,x){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Mt(z,A,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function et(A,x){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){qt(z,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let Nt={[er]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[zo]:i.MIRRORED_REPEAT},Ct={[Ye]:i.NEAREST,[yf]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},me={[Ef]:i.NEVER,[Cf]:i.ALWAYS,[Tf]:i.LESS,[rc]:i.LEQUAL,[wf]:i.EQUAL,[ac]:i.GEQUAL,[Af]:i.GREATER,[Rf]:i.NOTEQUAL};function ie(A,x){if(x.type===On&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===Ml||x.magFilter===Ia||x.magFilter===ns||x.minFilter===nn||x.minFilter===Ml||x.minFilter===Ia||x.minFilter===ns)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Nt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Nt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Nt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ct[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ct[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==Ia&&x.minFilter!==ns||x.type===On&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function he(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let H=x.source,Y=f.get(H);Y===void 0&&(Y={},f.set(H,Y));let ut=W(x);if(ut!==A.__cacheKey){Y[ut]===void 0&&(Y[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[ut].usedTimes++;let pt=Y[A.__cacheKey];pt!==void 0&&(Y[A.__cacheKey].usedTimes--,pt.usedTimes===0&&R(x)),A.__cacheKey=ut,A.__webglTexture=Y[ut].texture}return z}function J(A,x,z){return Math.floor(Math.floor(A/z)/x)}function Q(A,x,z,H){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,H,x.data);else{ut.sort((Ft,yt)=>Ft.start-yt.start);let pt=0;for(let Ft=1;Ft<ut.length;Ft++){let yt=ut[pt],xt=ut[Ft],Ot=yt.start+yt.count,Wt=J(xt.start,x.width,4),jt=J(yt.start,x.width,4);xt.start<=Ot+1&&Wt===jt&&J(xt.start+xt.count-1,x.width,4)===Wt?yt.count=Math.max(yt.count,xt.start+xt.count-yt.start):(++pt,ut[pt]=xt)}ut.length=pt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ft=0,yt=ut.length;Ft<yt;Ft++){let xt=ut[Ft],Ot=Math.floor(xt.start/4),Wt=Math.ceil(xt.count/4),jt=Ot%x.width,F=Math.floor(Ot/x.width),_t=Wt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,jt,F,_t,$,z,H,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function Mt(A,x,z){let H=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=i.TEXTURE_3D);let Y=he(A,x),ut=x.source;e.bindTexture(H,A.__webglTexture,i.TEXTURE0+z);let pt=n.get(ut);if(ut.version!==pt.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let $=ce.getPrimaries(ce.workingColorSpace),vt=x.colorSpace===Di?null:ce.getPrimaries(x.colorSpace),Tt=x.colorSpace===Di||$===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=m(x.image,!1,s.maxTextureSize);K=ge(x,K);let gt=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),yt=y(x.internalFormat,gt,Ft,x.normalized,x.colorSpace,x.isVideoTexture);ie(H,x);let xt,Ot=x.mipmaps,Wt=x.isVideoTexture!==!0,jt=pt.__version===void 0||Y===!0,F=ut.dataReady,_t=T(x,K);if(x.isDepthTexture)yt=E(x.format===is,x.type),jt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,yt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,yt,K.width,K.height,0,gt,Ft,null));else if(x.isDataTexture)if(Ot.length>0){Wt&&jt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,Ot[0].width,Ot[0].height);for(let $=0,vt=Ot.length;$<vt;$++)xt=Ot[$],Wt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,gt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,$,yt,xt.width,xt.height,0,gt,Ft,xt.data);x.generateMipmaps=!1}else Wt?(jt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,K.width,K.height),F&&Q(x,K,gt,Ft)):e.texImage2D(i.TEXTURE_2D,0,yt,K.width,K.height,0,gt,Ft,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,yt,Ot[0].width,Ot[0].height,K.depth);for(let $=0,vt=Ot.length;$<vt;$++)if(xt=Ot[$],x.format!==Bn)if(gt!==null)if(Wt){if(F)if(x.layerUpdates.size>0){let Tt=Qh(xt.width,xt.height,x.format,x.type);for(let it of x.layerUpdates){let Bt=xt.data.subarray(it*Tt/xt.data.BYTES_PER_ELEMENT,(it+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,it,xt.width,xt.height,1,gt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,K.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,yt,xt.width,xt.height,K.depth,0,xt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,K.depth,gt,Ft,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,yt,xt.width,xt.height,K.depth,0,gt,Ft,xt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Wt&&jt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,Ot[0].width,Ot[0].height);for(let $=0,vt=Ot.length;$<vt;$++)xt=Ot[$],x.format!==Bn?gt!==null?Wt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,yt,xt.width,xt.height,0,xt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,gt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,$,yt,xt.width,xt.height,0,gt,Ft,xt.data)}else if(x.isDataArrayTexture)if(Wt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,yt,K.width,K.height,K.depth),F)if(x.layerUpdates.size>0){let $=Qh(K.width,K.height,x.format,x.type);for(let vt of x.layerUpdates){let Tt=K.data.subarray(vt*$/K.data.BYTES_PER_ELEMENT,(vt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,K.width,K.height,1,gt,Ft,Tt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,gt,Ft,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,K.width,K.height,K.depth,0,gt,Ft,K.data);else if(x.isData3DTexture)Wt?(jt&&e.texStorage3D(i.TEXTURE_3D,_t,yt,K.width,K.height,K.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,gt,Ft,K.data)):e.texImage3D(i.TEXTURE_3D,0,yt,K.width,K.height,K.depth,0,gt,Ft,K.data);else if(x.isFramebufferTexture){if(jt)if(Wt)e.texStorage2D(i.TEXTURE_2D,_t,yt,K.width,K.height);else{let $=K.width,vt=K.height;for(let Tt=0;Tt<_t;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,yt,$,vt,0,gt,Ft,null),$>>=1,vt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(x),$.onpaint=vt=>{let Tt=vt.changedElements;for(let it of d)Tt.includes(it.image)&&(it.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Tt=i.RGBA,it=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,it,Bt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Wt&&jt){let $=se(Ot[0]);e.texStorage2D(i.TEXTURE_2D,_t,yt,$.width,$.height)}for(let $=0,vt=Ot.length;$<vt;$++)xt=Ot[$],Wt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,gt,Ft,xt):e.texImage2D(i.TEXTURE_2D,$,yt,gt,Ft,xt);x.generateMipmaps=!1}else if(Wt){if(jt){let $=se(K);e.texStorage2D(i.TEXTURE_2D,_t,yt,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ft,K)}else e.texImage2D(i.TEXTURE_2D,0,yt,gt,Ft,K);g(x)&&M(H),pt.__version=ut.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function qt(A,x,z){if(x.image.length!==6)return;let H=he(A,x),Y=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let ut=n.get(Y);if(Y.version!==ut.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let pt=ce.getPrimaries(ce.workingColorSpace),Z=x.colorSpace===Di?null:ce.getPrimaries(x.colorSpace),K=x.colorSpace===Di||pt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let gt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ft=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let it=0;it<6;it++)!gt&&!Ft?yt[it]=m(x.image[it],!0,s.maxCubemapSize):yt[it]=Ft?x.image[it].image:x.image[it],yt[it]=ge(x,yt[it]);let xt=yt[0],Ot=r.convert(x.format,x.colorSpace),Wt=r.convert(x.type),jt=y(x.internalFormat,Ot,Wt,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,_t=ut.__version===void 0||H===!0,$=Y.dataReady,vt=T(x,xt);ie(i.TEXTURE_CUBE_MAP,x);let Tt;if(gt){F&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,jt,xt.width,xt.height);for(let it=0;it<6;it++){Tt=yt[it].mipmaps;for(let Bt=0;Bt<Tt.length;Bt++){let Lt=Tt[Bt];x.format!==Bn?Ot!==null?F?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,0,0,Lt.width,Lt.height,Ot,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,jt,Lt.width,Lt.height,0,Lt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,0,0,Lt.width,Lt.height,Ot,Wt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,jt,Lt.width,Lt.height,0,Ot,Wt,Lt.data)}}}else{if(Tt=x.mipmaps,F&&_t){Tt.length>0&&vt++;let it=se(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,jt,it.width,it.height)}for(let it=0;it<6;it++)if(Ft){F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,yt[it].width,yt[it].height,Ot,Wt,yt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,jt,yt[it].width,yt[it].height,0,Ot,Wt,yt[it].data);for(let Bt=0;Bt<Tt.length;Bt++){let Ae=Tt[Bt].image[it].image;F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,0,0,Ae.width,Ae.height,Ot,Wt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,jt,Ae.width,Ae.height,0,Ot,Wt,Ae.data)}}else{F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Wt,yt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,jt,Ot,Wt,yt[it]);for(let Bt=0;Bt<Tt.length;Bt++){let Lt=Tt[Bt];F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,0,0,Ot,Wt,Lt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,jt,Ot,Wt,Lt.image[it])}}}g(x)&&M(i.TEXTURE_CUBE_MAP),ut.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function wt(A,x,z,H,Y,ut){let pt=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),K=y(z.internalFormat,pt,Z,z.normalized,z.colorSpace),gt=n.get(x),Ft=n.get(z);if(Ft.__renderTarget=x,!gt.__hasExternalTextures){let yt=Math.max(1,x.width>>ut),xt=Math.max(1,x.height>>ut);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,ut,K,yt,xt,x.depth,0,pt,Z,null):e.texImage2D(Y,ut,K,yt,xt,0,pt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Y,Ft.__webglTexture,0,Zt(x)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Y,Ft.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let H=x.depthTexture,Y=H&&H.isDepthTexture?H.type:null,ut=E(x.stencilBuffer,Y),pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(x),ut,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(x),ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,A)}else{let H=x.textures;for(let Y=0;Y<H.length;Y++){let ut=H[Y],pt=r.convert(ut.format,ut.colorSpace),Z=r.convert(ut.type),K=y(ut.internalFormat,pt,Z,ut.normalized,ut.colorSpace);Kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(x),K,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(A,x,z){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x.depthTexture);let gt=r.convert(x.depthTexture.format),Ft=r.convert(x.depthTexture.type),yt;x.depthTexture.format===oi?yt=i.DEPTH_COMPONENT24:x.depthTexture.format===is&&(yt=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,yt,x.width,x.height,0,gt,Ft,null)}}else st(x.depthTexture,0);let ut=Y.__webglTexture,pt=Zt(x),Z=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,K=x.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===oi)Kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,ut,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,ut,0);else if(x.depthTexture.format===is)Kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,ut,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(A){let x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)ye(x.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?ye(x.__webglFramebuffer[0],A,0):ye(x.__webglFramebuffer,A,0)}else if(z){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=i.createRenderbuffer(),Yt(x.__webglDepthbuffer[H],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ut)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Yt(x.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,x,z){let H=n.get(A);x!==void 0&&wt(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&tt(A)}function ct(A){let x=A.texture,z=n.get(A),H=n.get(x);A.addEventListener("dispose",_);let Y=A.textures,ut=A.isWebGLCubeRenderTarget===!0,pt=Y.length>1;if(pt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,a.memory.textures++),ut){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let K=0;K<x.mipmaps.length;K++)z.__webglFramebuffer[Z][K]=i.createFramebuffer()}else z.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)z.__webglFramebuffer[Z]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let Z=0,K=Y.length;Z<K;Z++){let gt=n.get(Y[Z]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Kt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let K=Y[Z];z.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let gt=r.convert(K.format,K.colorSpace),Ft=r.convert(K.type),yt=y(K.internalFormat,gt,Ft,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),xt=Zt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,yt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)wt(z.__webglFramebuffer[Z][K],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else wt(z.__webglFramebuffer[Z],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);g(x)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let Z=0,K=Y.length;Z<K;Z++){let gt=Y[Z],Ft=n.get(gt),yt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ft.__webglTexture),ie(yt,gt),wt(z.__webglFramebuffer,A,gt,i.COLOR_ATTACHMENT0+Z,yt,0),g(gt)&&M(yt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,H.__webglTexture),ie(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)wt(z.__webglFramebuffer[K],A,x,i.COLOR_ATTACHMENT0,Z,K);else wt(z.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Z,0);g(x)&&M(Z),e.unbindTexture()}A.depthBuffer&&tt(A)}function ht(A){let x=A.textures;for(let z=0,H=x.length;z<H;z++){let Y=x[z];if(g(Y)){let ut=w(A),pt=n.get(Y).__webglTexture;e.bindTexture(ut,pt),M(ut),e.unbindTexture()}}}let mt=[],Gt=[];function kt(A){if(A.samples>0){if(Kt(A)===!1){let x=A.textures,z=A.width,H=A.height,Y=i.COLOR_BUFFER_BIT,ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(A),Z=x.length>1;if(Z)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let K=A.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);let Ft=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,Y,i.NEAREST),l===!0&&(mt.length=0,Gt.length=0,mt.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(mt.push(ut),Gt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);let Ft=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Zt(A){return Math.min(s.maxSamples,A.samples)}function Kt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ge(A,x){let z=A.colorSpace,H=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Jr&&z!==Di&&(ce.getTransfer(z)===ve?(H!==Bn||Y!==Sn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",z)),x}function se(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=rt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jy(i,t){function e(n,s=Di){let r,a=ce.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===El)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Sl)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===Bn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===_r)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===Rl)return i.RGBA_INTEGER;if(n===Pa||n===La||n===Da||n===Na)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Il||n===Pl||n===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Ua||n===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Nl)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fl)return r.COMPRESSED_R11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===tc||n===ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ql)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===Fa||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ha(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:Qy,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,v=typeof XRWebGLBinding!="undefined",m=new _u,g={},M=e.getContextAttributes(),w=null,y=null,E=[],T=[],C=new at,_=null,S=null,R=new en;R.viewport=new De;let I=new en;I.viewport=new De;let N=[R,I],O=new gl,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=E[J];return Q===void 0&&(Q=new ar,E[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=E[J];return Q===void 0&&(Q=new ar,E[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=E[J];return Q===void 0&&(Q=new ar,E[J]=Q),Q.getHandSpace()};function X(J){let Q=T.indexOf(J.inputSource);if(Q===-1)return;let Mt=E[Q];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,c||a),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",st);for(let J=0;J<E.length;J++){let Q=T[J];Q!==null&&(T[J]=null,E[J].disconnect(Q))}L=null,B=null,m.reset();for(let J in g)delete g[J];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",st),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,qt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=M.stencil?is:oi,qt=M.stencil?xr:Kn);let Yt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new bn(u.textureWidth,u.textureHeight,{format:Bn,type:Sn,depthTexture:new Zi(u.textureWidth,u.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(J){for(let Q=0;Q<J.removed.length;Q++){let Mt=J.removed[Q],qt=T.indexOf(Mt);qt>=0&&(T[qt]=null,E[qt].disconnect(Mt))}for(let Q=0;Q<J.added.length;Q++){let Mt=J.added[Q],qt=T.indexOf(Mt);if(qt===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=T.length){T.push(Mt),qt=Yt;break}else if(T[Yt]===null){T[Yt]=Mt,qt=Yt;break}if(qt===-1)break}let wt=E[qt];wt&&wt.connect(Mt)}}let q=new P,j=new P;function et(J,Q,Mt){q.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);let qt=q.distanceTo(j),wt=Q.projectionMatrix.elements,Yt=Mt.projectionMatrix.elements,ye=wt[14]/(wt[10]-1),tt=wt[14]/(wt[10]+1),rt=(wt[9]+1)/wt[5],ct=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],mt=(Yt[8]+1)/Yt[0],Gt=ye*ht,kt=ye*mt,Zt=qt/(-ht+mt),Kt=Zt*-ht;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Kt),J.translateZ(Zt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let D=ye+Zt,ge=tt+Zt,se=Gt-Kt,A=kt+(qt-Kt),x=rt*tt/ge*D,z=ct*tt/ge*D;J.projectionMatrix.makePerspective(se,A,x,z,D,ge),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Nt(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,Mt=J.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),O.near=I.near=R.near=Q,O.far=I.far=R.far=Mt,(L!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,B=O.far),O.layers.mask=J.layers.mask|6,R.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let qt=J.parent,wt=O.cameras;Nt(O,qt);for(let Yt=0;Yt<wt.length;Yt++)Nt(wt[Yt],qt);wt.length===2?et(O,R,I):O.projectionMatrix.copy(R.projectionMatrix),S===null&&J.isPerspectiveCamera&&(S={camera:J,fov:J.fov,zoom:J.zoom}),Ct(J,O,qt)};function Ct(J,Q,Mt){Mt===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(J){return g[J]};let me=null;function ie(J,Q){if(h=Q.getViewerPose(c||a),p=Q,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let qt=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,qt=!0);for(let tt=0;tt<Mt.length;tt++){let rt=Mt[tt],ct=null;if(f!==null)ct=f.getViewport(rt);else{let mt=d.getViewSubImage(u,rt);ct=mt.viewport,tt===0&&(t.setRenderTargetTextures(y,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(y))}let ht=N[tt];ht===void 0&&(ht=new en,ht.layers.enable(tt),ht.viewport=new De,N[tt]=ht),ht.matrix.fromArray(rt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(rt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),tt===0&&(O.matrix.copy(ht.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),qt===!0&&O.cameras.push(ht)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let tt=d.getDepthInformation(Mt[0]);tt&&tt.isValid&&tt.texture&&m.init(tt,s.renderState)}if(wt&&wt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let tt=0;tt<Mt.length;tt++){let rt=Mt[tt].camera;if(rt){let ct=g[rt];ct||(ct=new ha,g[rt]=ct);let ht=d.getCameraImage(rt);ct.sourceTexture=ht}}}}for(let Mt=0;Mt<E.length;Mt++){let qt=T[Mt],wt=E[Mt];qt!==null&&wt!==void 0&&wt.update(qt,Q,c||a)}me&&me(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let he=new hp;he.setAnimationLoop(ie),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}},eb=new de,gp=new Jt;gp.set(-1,0,0,0,1,0,0,0,1);function nb(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$h(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ib(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let T=E.program;n.uniformBlockBinding(y,T)}function c(y,E){let T=s[y.id];T===void 0&&(m(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",M));let C=E.program;n.updateUBOMapping(y,C);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let E=d();y.__bindingPointIndex=E;let T=i.createBuffer(),C=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],T=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,S=T.length;_<S;_++){let R=T[_];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)f(R[I],_,I,C);else f(R,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,T,C){if(v(y,E,T,C)===!0){let _=y.__offset,S=y.value;if(Array.isArray(S)){let R=0;for(let I=0;I<S.length;I++){let N=S[I],O=g(N);p(N,y.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function v(y,E,T,C){let _=y.value,S=E+"_"+T;if(C[S]===void 0)return typeof _=="number"||typeof _=="boolean"?C[S]=_:ArrayBuffer.isView(_)?C[S]=_.slice():C[S]=_.clone(),!0;{let R=C[S];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){let E=y.uniforms,T=0,C=16;for(let S=0,R=E.length;S<R;S++){let I=Array.isArray(E[S])?E[S]:[E[S]];for(let N=0,O=I.length;N<O;N++){let L=I[N],B=Array.isArray(L.value)?L.value:[L.value];for(let X=0,W=B.length;X<W;X++){let st=B[X],q=g(st),j=T%C,et=j%q.boundary,Nt=j+et;T+=et,Nt!==0&&C-Nt<q.storage&&(T+=C-Nt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=q.storage}}}let _=T%C;return _>0&&(T+=C-_),y.__size=T,y.__cache={},this}function g(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),E}function M(y){let E=y.target;E.removeEventListener("dispose",M);let T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function rb(){return pi===null&&(pi=new gs(sb,16,16,ss,jn),pi.name="DFG_LUT",pi.minFilter=nn,pi.magFilter=nn,pi.wrapS=ri,pi.wrapT=ri,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var uc=class{constructor(t={}){let{canvas:e=If(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Sn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=f,m=new Set([Rl,Al,wl]),g=new Set([Sn,Kn,gr,xr,El,Tl]),M=new Uint32Array(4),w=new Int32Array(4),y=new P,E=null,T=null,C=[],_=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,O=null,L=null,B=null;this._outputColorSpace=mn;let X=0,W=0,st=null,q=-1,j=null,et=new De,Nt=new De,Ct=null,me=new Ht(0),ie=0,he=e.width,J=e.height,Q=1,Mt=null,qt=null,wt=new De(0,0,he,J),Yt=new De(0,0,he,J),ye=!1,tt=new lr,rt=!1,ct=!1,ht=new de,mt=new P,Gt=new De,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Kt(){return st===null?Q:1}let D=n;function ge(b,U){return e.getContext(b,U)}let se,A,x,z,H,Y,ut,pt,Z,K,gt,Ft,yt,xt,Ot,Wt,jt,F,_t,$,vt,Tt,it;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Wn,!1),D===null){let U="webgl2";if(D=ge(U,b),D===null)throw ge(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(b){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Wn,!1),Xt("WebGLRenderer: "+b.message),b}function Bt(){se=new dv(D),se.init(),vt=new jy(D,se),A=new nv(D,se,t,vt),x=new $y(D,se),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=D.createFramebuffer(),L=D.createFramebuffer(),B=D.createFramebuffer(),z=new mv(D),H=new Fy,Y=new Ky(D,se,x,H,A,vt,z),ut=new uv(R),pt=new x0(D),Tt=new tv(D,pt),Z=new fv(D,pt,z,Tt),K=new xv(D,Z,pt,Tt,z),F=new gv(D,A,Y),Ot=new iv(H),gt=new Uy(R,ut,se,A,Tt,Ot),Ft=new nb(R,H),yt=new By,xt=new Wy(se),jt=new Q_(R,ut,x,K,p,l),Wt=new Jy(R,K,A),it=new ib(D,z,A,x),_t=new ev(D,se,z),$=new pv(D,se,z),z.programs=gt.programs,R.capabilities=A,R.extensions=se,R.properties=H,R.renderLists=yt,R.shadowMap=Wt,R.state=x,R.info=z}v!==Sn&&(S=new vv(v,e.width,e.height,o,s,r));let Lt=new vu(R,D);this.xr=Lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(he,J,!1))},this.getSize=function(b){return b.set(he,J)},this.setSize=function(b,U,G=!0){if(Lt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}he=b,J=U,e.width=Math.floor(b*Q),e.height=Math.floor(U*Q),G===!0&&(e.style.width=b+"px",e.style.height=U+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(he*Q,J*Q).floor()},this.setDrawingBufferSize=function(b,U,G){he=b,J=U,Q=G,e.width=Math.floor(b*G),e.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(v===Sn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,U,G,k){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,U,G,k),x.viewport(et.copy(wt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(Yt)},this.setScissor=function(b,U,G,k){b.isVector4?Yt.set(b.x,b.y,b.z,b.w):Yt.set(b,U,G,k),x.scissor(Nt.copy(Yt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){x.setScissorTest(ye=b)},this.setOpaqueSort=function(b){Mt=b},this.setTransparentSort=function(b){qt=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,G=!0){let k=0;if(b){let V=!1;if(st!==null){let Et=st.texture.format;V=m.has(Et)}if(V){let Et=st.texture.type,Rt=g.has(Et),St=jt.getClearColor(),It=jt.getClearAlpha(),Dt=St.r,ee=St.g,re=St.b;Rt?(M[0]=Dt,M[1]=ee,M[2]=re,M[3]=It,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Dt,w[1]=ee,w[2]=re,w[3]=It,D.clearBufferiv(D.COLOR,0,w))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Wn,!1),jt.dispose(),yt.dispose(),xt.dispose(),H.dispose(),ut.dispose(),K.dispose(),Tt.dispose(),it.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",id),Lt.removeEventListener("sessionend",sd),ls.stop()};function Ae(b){b.preventDefault(),jr("WebGLRenderer: Context Lost."),I=!0}function xe(){jr("WebGLRenderer: Context Restored."),I=!1;let b=z.autoReset,U=Wt.enabled,G=Wt.autoUpdate,k=Wt.needsUpdate,V=Wt.type;Bt(),z.autoReset=b,Wt.enabled=U,Wt.autoUpdate=G,Wt.needsUpdate=k,Wt.type=V}function Wn(b){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ti(b){let U=b.target;U.removeEventListener("dispose",ti),jm(U)}function jm(b){Qm(b),H.remove(b)}function Qm(b){let U=H.get(b).programs;U!==void 0&&(U.forEach(function(G){gt.releaseProgram(G)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,k,V,Et){U===null&&(U=kt);let Rt=V.isMesh&&V.matrixWorld.determinantAffine()<0,St=ng(b,U,G,k,V);x.setMaterial(k,Rt);let It=G.index,Dt=1;if(k.wireframe===!0){if(It=Z.getWireframeAttribute(G),It===void 0)return;Dt=2}let ee=G.drawRange,re=G.attributes.position,Pt=ee.start*Dt,_e=(ee.start+ee.count)*Dt;Et!==null&&(Pt=Math.max(Pt,Et.start*Dt),_e=Math.min(_e,(Et.start+Et.count)*Dt)),It!==null?(Pt=Math.max(Pt,0),_e=Math.min(_e,It.count)):re!=null&&(Pt=Math.max(Pt,0),_e=Math.min(_e,re.count));let Xe=_e-Pt;if(Xe<0||Xe===1/0)return;Tt.setup(V,k,St,G,It);let Pe,we=_t;if(It!==null&&(Pe=pt.get(It),we=$,we.setIndex(Pe)),V.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Kt()),we.setMode(D.LINES)):we.setMode(D.TRIANGLES);else if(V.isLine){let on=k.linewidth;on===void 0&&(on=1),x.setLineWidth(on*Kt()),V.isLineSegments?we.setMode(D.LINES):V.isLineLoop?we.setMode(D.LINE_LOOP):we.setMode(D.LINE_STRIP)}else V.isPoints?we.setMode(D.POINTS):V.isSprite&&we.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(se.get("WEBGL_multi_draw"))we.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let on=V._multiDrawStarts,At=V._multiDrawCounts,fn=V._multiDrawCount,ue=It?pt.get(It).bytesPerElement:1,Ln=H.get(k).currentProgram.getUniforms();for(let ei=0;ei<fn;ei++)Ln.setValue(D,"_gl_DrawID",ei),we.render(on[ei]/ue,At[ei])}else if(V.isInstancedMesh)we.renderInstances(Pt,Xe,V.count);else if(G.isInstancedBufferGeometry){let on=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,At=Math.min(G.instanceCount,on);we.renderInstances(Pt,Xe,At)}else we.render(Pt,Xe)};function nd(b,U,G,k){N!==null&&b.isNodeMaterial&&N.setObject(k,b),rt===!0&&Ot.setState(b,G,!1),b.transparent===!0&&b.side===Mn&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,Qa(b,U,k),b.side=Qi,b.needsUpdate=!0,Qa(b,U,k),b.side=Mn):Qa(b,U,k)}this.compile=function(b,U,G=null){G===null&&(G=b),N!==null&&N.renderStart(b,U,G),T=xt.get(G),T.init(U),_.push(T),G.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),b!==G&&b.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),ct=this.localClippingEnabled,rt=Ot.init(this.clippingPlanes,ct),rt===!0&&Ot.setGlobalState(this.clippingPlanes,U),N!==null&&Wt.render(T.state.shadowsArray,G,U);let k=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Et=V.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){let St=Et[Rt];nd(St,G,U,V),k.add(St)}else nd(Et,G,U,V),k.add(Et)}),T=_.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(b,U,G=null){let k=this.compile(b,U,G);return new Promise(V=>{function Et(){if(k.forEach(function(Rt){let It=H.get(Rt).currentProgram;(It===void 0||It.isReady())&&k.delete(Rt)}),k.size===0){V(b);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Bc=null;function tg(b){Bc&&Bc(b)}function id(){ls.stop()}function sd(){ls.start()}let ls=new hp;ls.setAnimationLoop(tg),typeof self!="undefined"&&ls.setContext(self),this.setAnimationLoop=function(b){Bc=b,Lt.setAnimationLoop(b),b===null?ls.stop():ls.start()},Lt.addEventListener("sessionstart",id),Lt.addEventListener("sessionend",sd),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(b,U);let G=Lt.enabled===!0&&Lt.isPresenting===!0,k=S!==null&&(st===null||G)&&S.begin(R,st);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,U,st),T=xt.get(b,_.length),T.init(U),T.state.textureUnits=Y.getTextureUnits(),_.push(T),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(ht,Jn,U.reversedDepth),ct=this.localClippingEnabled,rt=Ot.init(this.clippingPlanes,ct),E=yt.get(b,C.length),E.init(),C.push(E),Lt.enabled===!0&&Lt.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&zc(Rt,U,-1/0,R.sortObjects)}zc(b,U,0,R.sortObjects),E.finish(),N!==null&&N.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(Mt,qt),Zt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Zt&&jt.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ot.beginShadows();let V=T.state.shadowsArray;if(Wt.render(V,b,U),rt===!0&&Ot.endShadows(),(k&&S.hasRenderPass())===!1){let Rt=E.opaque,St=E.transmissive;if(T.setupLights(),U.isArrayCamera){let It=U.cameras;if(St.length>0)for(let Dt=0,ee=It.length;Dt<ee;Dt++){let re=It[Dt];ad(Rt,St,b,re)}Zt&&jt.render(b);for(let Dt=0,ee=It.length;Dt<ee;Dt++){let re=It[Dt];rd(E,b,re,re.viewport)}}else St.length>0&&ad(Rt,St,b,U),Zt&&jt.render(b),rd(E,b,U)}st!==null&&W===0&&(Y.updateMultisampleRenderTarget(st),Y.updateRenderTargetMipmap(st)),k&&S.end(R),b.isScene===!0&&b.onAfterRender(R,b,U),Tt.resetDefaultState(),q=-1,j=null,_.pop(),_.length>0?(T=_[_.length-1],Y.setTextureUnits(T.state.textureUnits),rt===!0&&Ot.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,N!==null&&N.renderEnd()};function zc(b,U,G,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(tt)){k&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);let Rt=K.update(b),St=b.material;St.visible&&E.push(b,Rt,St,G,Gt.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(tt))){let Rt=K.update(b),St=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Gt.copy(Rt.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(St)){let It=Rt.groups;for(let Dt=0,ee=It.length;Dt<ee;Dt++){let re=It[Dt],Pt=St[re.materialIndex];Pt&&Pt.visible&&E.push(b,Rt,Pt,G,Gt.z,re,U)}}else St.visible&&E.push(b,Rt,St,G,Gt.z,null,U)}}let Et=b.children;for(let Rt=0,St=Et.length;Rt<St;Rt++)zc(Et[Rt],U,G,k)}function rd(b,U,G,k){let{opaque:V,transmissive:Et,transparent:Rt}=b;T.setupLightsView(G),rt===!0&&Ot.setGlobalState(R.clippingPlanes,G),k&&x.viewport(et.copy(k)),V.length>0&&ja(V,U,G),Et.length>0&&ja(Et,U,G),Rt.length>0&&ja(Rt,U,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ad(b,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Pt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new bn(1,1,{generateMipmaps:!0,type:Pt?jn:Sn,minFilter:ns,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Et=T.state.transmissionRenderTarget[k.id],Rt=k.viewport||et;Et.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),It=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(me),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),Zt&&jt.render(G);let ee=R.toneMapping;R.toneMapping=$n;let re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),rt===!0&&Ot.setGlobalState(R.clippingPlanes,k),ja(b,G,k),Y.updateMultisampleRenderTarget(Et),Y.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let _e=0,Xe=U.length;_e<Xe;_e++){let Pe=U[_e],{object:we,geometry:on,material:At,group:fn}=Pe;if(At.side===Mn&&we.layers.test(k.layers)){let ue=At.side;At.side=rn,At.needsUpdate=!0,od(we,G,k,on,At,fn),At.side=ue,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(Y.updateMultisampleRenderTarget(Et),Y.updateRenderTargetMipmap(Et))}R.setRenderTarget(St,It,Dt),R.setClearColor(me,ie),re!==void 0&&(k.viewport=re),R.toneMapping=ee}function ja(b,U,G){let k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Et=b.length;V<Et;V++){let Rt=b[V],{object:St,geometry:It,group:Dt}=Rt,ee=Rt.material;ee.allowOverride===!0&&k!==null&&(ee=k),St.layers.test(G.layers)&&od(St,U,G,It,ee,Dt)}}function od(b,U,G,k,V,Et){N!==null&&V.isNodeMaterial&&N.setObject(b,V),b.onBeforeRender(R,U,G,k,V,Et),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(R,U,G,k,b,Et),V.transparent===!0&&V.side===Mn&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,R.renderBufferDirect(G,U,k,V,b,Et),V.side=Qi,V.needsUpdate=!0,R.renderBufferDirect(G,U,k,V,b,Et),V.side=Mn):R.renderBufferDirect(G,U,k,V,b,Et),b.onAfterRender(R,U,G,k,V,Et)}function Qa(b,U,G){U.isScene!==!0&&(U=kt);let k=H.get(b),V=T.state.lights,Et=T.state.shadowsArray,Rt=V.state.version,St=gt.getParameters(b,V.state,Et,U,G,T.state.lightProbeGridArray),It=gt.getProgramCacheKey(St),Dt=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=ut.get(b.envMap||k.environment,ee),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",ti),Dt=new Map,k.programs=Dt);let re=Dt.get(It);if(re!==void 0){if(k.currentProgram===re&&k.lightsStateVersion===Rt)return cd(b,St),re}else St.uniforms=gt.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,G,St),b.onBeforeCompile(St,R),re=gt.acquireProgram(St,It),Dt.set(It,re),k.uniforms=St.uniforms;let Pt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=Ot.uniform),cd(b,St),k.needsLights=sg(b),k.lightsStateVersion=Rt,k.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.sunLights.value=V.state.sun,Pt.sunLightShadows.value=V.state.sunShadow,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.sunShadowMatrix.value=V.state.sunShadowMatrix,Pt.sunShadowCascade.value=V.state.sunShadowCascade,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=re,k.uniformsList=null,re}function ld(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=br.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function cd(b,U){let G=H.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function eg(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let G=0,k=b.length;G<k;G++){let V=b[G];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function ng(b,U,G,k,V){U.isScene!==!0&&(U=kt),Y.resetTextureUnits();let Et=U.fog,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,St=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ce.workingColorSpace,It=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=ut.get(k.envMap||Rt,It),ee=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,re=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!G.morphAttributes.position,_e=!!G.morphAttributes.normal,Xe=!!G.morphAttributes.color,Pe=$n;k.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Pe=R.toneMapping);let we=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,on=we!==void 0?we.length:0,At=H.get(k),fn=T.state.lights;if(rt===!0&&(ct===!0||b!==j)){let Re=b===j&&k.id===q;Ot.setState(k,b,Re)}let ue=!1;k.version===At.__version?(At.needsLights&&At.lightsStateVersion!==fn.state.version||At.outputColorSpace!==St||V.isBatchedMesh&&At.batching===!1||!V.isBatchedMesh&&At.batching===!0||V.isBatchedMesh&&At.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&At.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&At.instancing===!1||!V.isInstancedMesh&&At.instancing===!0||V.isSkinnedMesh&&At.skinning===!1||!V.isSkinnedMesh&&At.skinning===!0||V.isInstancedMesh&&At.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&At.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&At.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&At.instancingMorph===!1&&V.morphTexture!==null||At.envMap!==Dt||k.fog===!0&&At.fog!==Et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ot.numPlanes||At.numIntersection!==Ot.numIntersection)||At.vertexAlphas!==ee||At.vertexTangents!==re||At.morphTargets!==Pt||At.morphNormals!==_e||At.morphColors!==Xe||At.toneMapping!==Pe||At.morphTargetsCount!==on||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,At.__version=k.version);let Ln=At.currentProgram;ue===!0&&(Ln=Qa(k,U,V),N&&k.isNodeMaterial&&N.onUpdateProgram(k,Ln,At));let ei=!1,ki=!1,Ds=!1,be=Ln.getUniforms(),He=At.uniforms;if(x.useProgram(Ln.program)&&(ei=!0,ki=!0,Ds=!0),k.id!==q&&(q=k.id,ki=!0),At.needsLights){let Re=eg(T.state.lightProbeGridArray,V);At.lightProbeGrid!==Re&&(At.lightProbeGrid=Re,ki=!0)}if(ei||j!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),be.setValue(D,"projectionMatrix",b.projectionMatrix),be.setValue(D,"viewMatrix",b.matrixWorldInverse);let Hi=be.map.cameraPosition;Hi!==void 0&&Hi.setValue(D,mt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&be.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&be.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,ki=!0,Ds=!0)}if(At.needsLights&&(fn.state.sunShadowMap.length>0&&be.setValue(D,"sunShadowMap",fn.state.sunShadowMap,Y),fn.state.directionalShadowMap.length>0&&be.setValue(D,"directionalShadowMap",fn.state.directionalShadowMap,Y),fn.state.spotShadowMap.length>0&&be.setValue(D,"spotShadowMap",fn.state.spotShadowMap,Y),fn.state.pointShadowMap.length>0&&be.setValue(D,"pointShadowMap",fn.state.pointShadowMap,Y)),V.isSkinnedMesh){be.setOptional(D,V,"bindMatrix"),be.setOptional(D,V,"bindMatrixInverse");let Re=V.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),be.setValue(D,"boneTexture",Re.boneTexture,Y))}V.isBatchedMesh&&(be.setOptional(D,V,"batchingTexture"),be.setValue(D,"batchingTexture",V._matricesTexture,Y),be.setOptional(D,V,"batchingIdTexture"),be.setValue(D,"batchingIdTexture",V._indirectTexture,Y),be.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&be.setValue(D,"batchingColorTexture",V._colorsTexture,Y));let Vi=G.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&F.update(V,G,Ln),(ki||At.receiveShadow!==V.receiveShadow)&&(At.receiveShadow=V.receiveShadow,be.setValue(D,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=rb()),ki){if(be.setValue(D,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&ig(He,Ds),Et&&k.fog===!0&&Ft.refreshFogUniforms(He,Et),Ft.refreshMaterialUniforms(He,k,Q,J,T.state.transmissionRenderTarget[b.id]),At.needsLights&&At.lightProbeGrid){let Re=At.lightProbeGrid;He.probesSH.value=Re.texture,He.probesMin.value.copy(Re.boundingBox.min),He.probesMax.value.copy(Re.boundingBox.max),He.probesResolution.value.copy(Re.resolution)}br.upload(D,ld(At),He,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(br.upload(D,ld(At),He,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&be.setValue(D,"center",V.center),be.setValue(D,"modelViewMatrix",V.modelViewMatrix),be.setValue(D,"normalMatrix",V.normalMatrix),be.setValue(D,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Re=k.uniformsGroups;for(let Hi=0,Ns=Re.length;Hi<Ns;Hi++){let ud=Re[Hi];it.update(ud,Ln),it.bind(ud,Ln)}}return Ln}function ig(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function sg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(b,U,G){let k=H.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=U,H.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let G=H.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){st=b,X=U,W=G;let k=null,V=!1,Et=!1;if(b){let St=H.get(b);if(St.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,St.__webglFramebuffer),et.copy(b.viewport),Nt.copy(b.scissor),Ct=b.scissorTest,x.viewport(et),x.scissor(Nt),x.setScissorTest(Ct),q=-1;return}else if(St.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(St.__hasExternalTextures)Y.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ee=b.depthTexture;if(St.__boundDepthTexture!==ee){if(ee!==null&&H.has(ee)&&(b.width!==ee.image.width||b.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}let It=b.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Dt=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?k=Dt[U][G]:k=Dt[U],V=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?k=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[G]:k=Dt,et.copy(b.viewport),Nt.copy(b.scissor),Ct=b.scissorTest}else et.copy(wt).multiplyScalar(Q).floor(),Nt.copy(Yt).multiplyScalar(Q).floor(),Ct=ye;if(G!==0&&(k=O),x.bindFramebuffer(D.FRAMEBUFFER,k)&&x.drawBuffers(b,k),x.viewport(et),x.scissor(Nt),x.setScissorTest(Ct),V){let St=H.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,G)}else if(Et){let St=U;for(let It=0;It<b.textures.length;It++){let Dt=H.get(b.textures[It]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+It,Dt.__webglTexture,G,St)}}else if(b!==null&&G!==0){let St=H.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,G)}q=-1};function hd(b){let U=H.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=A.textureFormatReadable(b.format),U.__typeReadable=A.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,G,k,V,Et,Rt,St=0){if(!(b&&b.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){x.bindFramebuffer(D.FRAMEBUFFER,It);try{let Dt=b.textures[St],ee=Dt.format,re=Dt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St);let Pt=hd(Dt);if(Pt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&G>=0&&G<=b.height-V&&D.readPixels(U,G,k,V,vt.convert(ee),vt.convert(re),Et)}finally{let Dt=st!==null?H.get(st).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,U,G,k,V,Et,Rt,St=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(U>=0&&U<=b.width-k&&G>=0&&G<=b.height-V){x.bindFramebuffer(D.FRAMEBUFFER,It);let Dt=b.textures[St],ee=Dt.format,re=Dt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St);let Pt=hd(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.bufferData(D.PIXEL_PACK_BUFFER,Et.byteLength,D.STREAM_READ),D.readPixels(U,G,k,V,vt.convert(ee),vt.convert(re),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Xe=st!==null?H.get(st).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Xe);let Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Lf(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Et),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(_e),D.deleteSync(Pe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,G=0){let k=Math.pow(2,-G),V=Math.floor(b.image.width*k),Et=Math.floor(b.image.height*k),Rt=U!==null?U.x:0,St=U!==null?U.y:0;Y.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Rt,St,V,Et),x.unbindTexture()},this.copyTextureToTexture=function(b,U,G=null,k=null,V=0,Et=0){let Rt,St,It,Dt,ee,re,Pt,_e,Xe,Pe=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(G!==null)Rt=G.max.x-G.min.x,St=G.max.y-G.min.y,It=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,ee=G.min.y,re=G.isBox3?G.min.z:0;else{let He=Math.pow(2,-V);Rt=Math.floor(Pe.width*He),St=Math.floor(Pe.height*He),b.isDataArrayTexture?It=Pe.depth:b.isData3DTexture?It=Math.floor(Pe.depth*He):It=1,Dt=0,ee=0,re=0}k!==null?(Pt=k.x,_e=k.y,Xe=k.z):(Pt=0,_e=0,Xe=0);let we=vt.convert(U.format),on=vt.convert(U.type),At;U.isData3DTexture?(Y.setTexture3D(U,0),At=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),At=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),At=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let fn=x.getParameter(D.UNPACK_ROW_LENGTH),ue=x.getParameter(D.UNPACK_IMAGE_HEIGHT),Ln=x.getParameter(D.UNPACK_SKIP_PIXELS),ei=x.getParameter(D.UNPACK_SKIP_ROWS),ki=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(D.UNPACK_SKIP_ROWS,ee),x.pixelStorei(D.UNPACK_SKIP_IMAGES,re);let Ds=b.isDataArrayTexture||b.isData3DTexture,be=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let He=H.get(b),Vi=H.get(U),Re=H.get(He.__renderTarget),Hi=H.get(Vi.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,Re.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Ns=0;Ns<It;Ns++)Ds&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(b).__webglTexture,V,re+Ns),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(U).__webglTexture,Et,Xe+Ns)),D.blitFramebuffer(Dt,ee,Rt,St,Pt,_e,Rt,St,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||H.has(b)){let He=H.get(b),Vi=H.get(U);x.bindFramebuffer(D.READ_FRAMEBUFFER,L),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let Re=0;Re<It;Re++)Ds?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,He.__webglTexture,V,re+Re):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,He.__webglTexture,V),be?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vi.__webglTexture,Et,Xe+Re):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vi.__webglTexture,Et),V!==0?D.blitFramebuffer(Dt,ee,Rt,St,Pt,_e,Rt,St,D.COLOR_BUFFER_BIT,D.NEAREST):be?D.copyTexSubImage3D(At,Et,Pt,_e,Xe+Re,Dt,ee,Rt,St):D.copyTexSubImage2D(At,Et,Pt,_e,Dt,ee,Rt,St);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(At,Et,Pt,_e,Xe,Rt,St,It,we,on,Pe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(At,Et,Pt,_e,Xe,Rt,St,It,we,Pe.data):D.texSubImage3D(At,Et,Pt,_e,Xe,Rt,St,It,we,on,Pe):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Et,Pt,_e,Rt,St,we,on,Pe.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Et,Pt,_e,Pe.width,Pe.height,we,Pe.data):D.texSubImage2D(D.TEXTURE_2D,Et,Pt,_e,Rt,St,we,on,Pe);x.pixelStorei(D.UNPACK_ROW_LENGTH,fn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Ln),x.pixelStorei(D.UNPACK_SKIP_ROWS,ei),x.pixelStorei(D.UNPACK_SKIP_IMAGES,ki),Et===0&&U.generateMipmaps&&D.generateMipmap(At),x.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){X=0,W=0,st=null,x.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function ab(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var xp={},_p={wood:.7,woodV:.7,stone:.55,shingle:.6,rock:.22,grass:.12,bark:.9,sand:.2,leaf:.25,needle:.3,cloth:1.2,straw:1,plank:.8};function ob(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=ab(i.length*97+i.charCodeAt(0)),r=(o,l)=>`rgba(${o},${o},${o},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let o=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,d=s()*256,u=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=u,n.beginPath(),o?(n.moveTo(c,d),n.bezierCurveTo(c+4,d+h*.3,c-4,d+h*.7,c+2,d+h)):(n.moveTo(d,c),n.bezierCurveTo(d+h*.3,c+4,d+h*.7,c-4,d+h,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let d=1;d<4;d++)n.beginPath(),n.ellipse(c,h,d*3.5,d*2.2,o?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),o?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let o=4;for(let l=0;l<o;l++){let c=-(s()*40),h=256/o;for(;c<256;){let d=38+s()*50,u=190+s()*55|0;n.fillStyle=`rgb(${u},${u-3},${u+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*h+3,d-6,h-6,10):n.rect(c+3,l*h+3,d-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*h+7,d-24,3);for(let f=0;f<14;f++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(d-12),l*h+6+s()*(h-12),2,2);c+=d}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let o=6,l=256/o;for(let c=0;c<o;c++){let h=c%2*22;for(let d=-22;d<278;d+=44){let u=196+s()*50|0;n.fillStyle=`rgb(${u},${u-6},${u-8})`,n.beginPath(),n.moveTo(d+h+2,c*l),n.lineTo(d+h+42,c*l),n.lineTo(d+h+42,c*l+l*.55),n.quadraticCurveTo(d+h+22,c*l+l*1.15,d+h+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(d+h+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let o=0;o<60;o++){let l=s()*256,c=s()*256,h=10+s()*40,d=170+s()*70|0;n.fillStyle=`rgba(${d},${d-4},${d+10},.35)`,n.beginPath(),n.ellipse(l,c,h,h*.6,s()*3,0,7),n.fill()}for(let o=0;o<30;o++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let o=0;o<900;o++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let o=0;o<20;o++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let o=0;o<70;o++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let o=0;o<260;o++){let l=s()*256,c=s()*256,h=6+s()*14,d=s()>.45?215+s()*40|0:120+s()*60|0;for(let u of[-256,0,256])for(let f of[-256,0,256])l+u<-30||l+u>286||c+f<-30||c+f>286||(n.fillStyle=`rgba(${d},${d},${d-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+u,c+f,h,h*.62,s()*3.14,0,7),n.fill())}for(let o=0;o<120;o++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.28)",n.beginPath(),n.ellipse(l,c+9,9,4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-3,6,2.4,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let o=0;o<256;o+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(o,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,o,256,1.6);for(let o=0;o<9;o++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let o=0;o<5;o++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let o=-256;o<256*2;o+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(o,0),n.lineTo(o+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(o+3,0),n.lineTo(o+3-256,256),n.stroke();for(let o=0;o<256;o+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(o,0),n.lineTo(o,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let o=5,l=256/o;for(let c=0;c<o;c++){let h=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,l);for(let d=0;d<22;d++){let u=h+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,u),n.bezierCurveTo(80,u+3,160,u-3,256,u+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let d of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(d,h+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let o=0;o<8;o++){let l=o*256/8;for(let c=-10;c<266;c+=14){let h=c+o%2*7+s()*3,d=18+s()*10,u=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${u},${u},${u-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,l),n.lineTo(h+s()*8-4,l+d),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let a=new xs(e);return a.wrapS=a.wrapT=er,a.colorSpace=mn,a.anisotropy=4,a}var yu=i=>xp[i]||(xp[i]=ob(i)),bu=(()=>{let i=new Uint8Array([112,160,208,255]),t=new gs(i,4,1,_r);return t.minFilter=t.magFilter=Ye,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function vp(i,t,e,n,s){let r=i.attributes.uv,a=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]*s,r.getY(c)*a[o][1]*s)}r.needsUpdate=!0}function yp(i,t,e){let n=Object.assign({color:i,gradientMap:bu},e||{});t&&(n.map=yu(t));let s=new ys(n);return s.userData.kind=t||null,s}function bp(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}var pe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Mu=(i,t,e)=>i+(t-i)*e,fe=i=>document.getElementById(i);function tn(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ft=4.2,Va=(i,t)=>{i._t!==t&&(i._t=t,i.textContent=t)},pc=(i,t,e)=>{let n=document.createElement("canvas");return n.width=i,n.height=t,e(n.getContext("2d"),i,t),new xs(n)},Ne,Sr;function Mp(){Ne=pc(128,128,i=>{let t=i.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)}),Sr=pc(128,128,i=>{for(let t=0;t<9;t++){let e=40+Math.random()*48,n=44+Math.random()*40,s=18+Math.random()*18,r=i.createRadialGradient(e,n,0,e,n,s);r.addColorStop(0,"rgba(255,255,255,.5)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,128,128)}})}var Ue=(i,t,e,n,s)=>{let r=new ra(new or({map:i,color:t,transparent:!0,opacity:n==null?1:n,depthWrite:!1,blending:s?Li:ts}));return r.scale.set(e,e,1),r};var le={started:!1,rainOn:!1,T:0},ke={},mc=[],kn=fe("c"),zn=new uc({canvas:kn,antialias:!0,powerPreference:"high-performance"});zn.setPixelRatio(Math.min(devicePixelRatio||1,1.5));zn.shadowMap.enabled=!0;zn.shadowMap.type=_l;zn.shadowMap.autoUpdate=!1;zn.shadowMap.needsUpdate=!0;var $t=new ea;$t.fog=new ta(new Ht("#7f75b4"),45,230);var dn=new en(50,1,.1,900);function gc(){let i=innerWidth,t=innerHeight;zn.setSize(i,t,!1),zn.shadowMap.needsUpdate=!0,dn.aspect=i/t,dn.fov=i/t<1.15?66:50,dn.updateProjectionMatrix()}addEventListener("resize",gc);gc();var Ep=[["Piso","Floor","\u5E8A"],["Escalera","Stairs","\u968E\u6BB5"],["Barandal","Railing","\u624B\u3059\u308A"],["Techo","Roof","\u5C4B\u6839"],["Panel solar","Solar panel","\u30BD\u30FC\u30E9\u30FC\u30D1\u30CD\u30EB"],["Ventana","Window","\u7A93"],["Librero","Bookshelf","\u672C\u68DA"],["Cama","Bed","\u30D9\u30C3\u30C9"],["L\xE1mpara del techo","Ceiling lamp","\u5929\u4E95\u30E9\u30F3\u30D7"],["Luces de cuerda","String lights","\u30E9\u30A4\u30C8\u306E\u98FE\u308A"],["Cuadro","Painting","\u7D75"],["Plantas","Plants","\u690D\u7269"],["Nichos de pared","Wall niches","\u58C1\u306E\u304F\u307C\u307F"]],lb=[["Cepillo ancho","Wide brush","\u5E45\u5E83\u30D6\u30E9\u30B7"],["Limpias con un cepillo m\xE1s grande","You clean with a bigger brush","\u5927\u304D\u306A\u30D6\u30E9\u30B7\u3067\u6383\u9664\u3067\u304D\u307E\u3059"],["Mochila de herramientas","Tool backpack","\u9053\u5177\u30EA\u30E5\u30C3\u30AF"],["Ganas 10% m\xE1s de tablas al limpiar","You earn 10% more planks when cleaning","\u6383\u9664\u3067\u5F97\u3089\u308C\u308B\u677F\u304C10%\u5897\u3048\u307E\u3059"],["Farol de mano","Hand lantern","\u624B\u6301\u3061\u30E9\u30F3\u30BF\u30F3"],["Ilumina el \xE1rea mientras limpias","Lights up the area while you clean","\u6383\u9664\u4E2D\u306B\u5468\u308A\u3092\u7167\u3089\u3057\u307E\u3059"],["Cubeta de lluvia","Rain bucket","\u96E8\u306E\u30D0\u30B1\u30C4"],["Suena lluvia suave sobre el techo","Soft rain plays on the roof","\u5C4B\u6839\u306B\u3084\u3055\u3057\u3044\u96E8\u97F3\u304C\u97FF\u304D\u307E\u3059"],["Bater\xEDa solar","Solar battery","\u30BD\u30FC\u30E9\u30FC\u30D0\u30C3\u30C6\u30EA\u30FC"],["Energ\xEDa guardada para la noche","Energy stored for the night","\u591C\u306E\u305F\u3081\u306B\u84C4\u3048\u305F\u96FB\u529B"],["Cortinas de lino","Linen curtains","\u9EBB\u306E\u30AB\u30FC\u30C6\u30F3"],["Entra la luz de la luna","Moonlight comes in","\u6708\u306E\u5149\u304C\u5DEE\u3057\u8FBC\u307F\u307E\u3059"],["Novela de monta\xF1a","Mountain novel","\u5C71\u306E\u5C0F\u8AAC"],["Un libro para las noches","A book for the evenings","\u591C\u306E\u305F\u3081\u306E\u4E00\u518A"],["Manta tejida","Woven blanket","\u624B\u7DE8\u307F\u306E\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8"],["Para las noches fr\xEDas","For cold nights","\u5BD2\u3044\u591C\u306E\u305F\u3081\u306B"],["Foco c\xE1lido","Warm bulb","\u3042\u305F\u305F\u304B\u3044\u96FB\u7403"],["Una luz amplia sobre la cama","A broad light over the bed","\u30D9\u30C3\u30C9\u3092\u5E83\u304F\u7167\u3089\u3059\u5149"],["Bombillas de colores","Colored bulbs","\u30AB\u30E9\u30D5\u30EB\u306A\u96FB\u7403"],["Las luces se vuelven de colores","The lights turn colorful","\u30E9\u30A4\u30C8\u304C\u8272\u3068\u308A\u3069\u308A\u306B\u306A\u308A\u307E\u3059"],["Pincel de acuarela","Watercolor brush","\u6C34\u5F69\u306E\u7B46"],["Un recuerdo de la monta\xF1a","A memory of the mountain","\u5C71\u306E\u601D\u3044\u51FA"],["Semillas de lavanda","Lavender seeds","\u30E9\u30D9\u30F3\u30C0\u30FC\u306E\u7A2E"],["Huele a campo","Smells like the countryside","\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059"],["Luci\xE9rnagas en frasco","Fireflies in a jar","\u74F6\u306E\u4E2D\u306E\u30DB\u30BF\u30EB"],["M\xE1s luci\xE9rnagas afuera","More fireflies outside","\u5916\u306B\u3082\u3063\u3068\u30DB\u30BF\u30EB\u304C\u98DB\u3073\u307E\u3059"]],Tp=[["el piso","the floor","\u5E8A"],["la terraza y la escalera","the terrace and the stairs","\u30C6\u30E9\u30B9\u3068\u968E\u6BB5"],["el interior","the interior","\u5BA4\u5185"],["el techo y los nichos","the roof and the niches","\u5C4B\u6839\u3068\u58C1\u306E\u304F\u307C\u307F"]];UX.add(Ep);UX.add(lb);UX.add(Tp);UX.add([["Caba\xF1a 3D","Cabin 3D","\u30AD\u30E3\u30D3\u30F3 3D"],["prototipo","prototype","\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Caba\xF1a 3D \xB7 prototipo","Cabin 3D \xB7 prototype","\u30AD\u30E3\u30D3\u30F3 3D \xB7 \u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Una caba\xF1a de madera y piedra en lo alto de un acantilado, de noche. L\xEDmpiala y rep\xE1rala poco a poco, sin prisa.","A cabin of wood and stone high on a cliff, at night. Clean and repair it little by little, with no rush.","\u5D16\u306E\u4E0A\u306B\u305F\u305F\u305A\u3080\u3001\u6728\u3068\u77F3\u306E\u5C0F\u3055\u306A\u5C0F\u5C4B\u3002\u591C\u306E\u9759\u3051\u3055\u306E\u4E2D\u3001\u6025\u304C\u305A\u5C11\u3057\u305A\u3064\u6383\u9664\u3057\u3066\u76F4\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u3002"],["Arrastra sobre la suciedad para fregarla y ganar tablas.","Drag over the grime to scrub it and earn planks.","\u6C5A\u308C\u306E\u4E0A\u3092\u306A\u305E\u3063\u3066\u3053\u3059\u308A\u3001\u677F\u3092\u96C6\u3081\u307E\u3057\u3087\u3046\u3002"],["Toca un objeto limpio (o su bot\xF3n de abajo) para repararlo.","Tap a clean object (or its button below) to repair it.","\u304D\u308C\u3044\u306B\u306A\u3063\u305F\u3082\u306E\u3092\u30BF\u30C3\u30D7\uFF08\u307E\u305F\u306F\u4E0B\u306E\u30DC\u30BF\u30F3\uFF09\u3067\u4FEE\u7406\u3057\u307E\u3059\u3002"],["Arrastra el fondo para girar; pellizca o usa la rueda para acercar.","Drag the background to rotate; pinch or use the wheel to zoom.","\u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30D4\u30F3\u30C1\u3084\u30DB\u30A4\u30FC\u30EB\u3067\u30BA\u30FC\u30E0\u3057\u307E\u3059\u3002"],["Mejor con auriculares. Tu avance se guarda en este dispositivo.","Best with headphones. Your progress is saved on this device.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\u3002\u9032\u307F\u5177\u5408\u306F\u3053\u306E\u7AEF\u672B\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"],["Entrar a la caba\xF1a","Enter the cabin","\u5C0F\u5C4B\u306B\u5165\u308B"],["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Arrastra sobre la suciedad para limpiar \xB7 arrastra el fondo para girar \xB7 pellizca para acercar","Drag over the grime to clean \xB7 drag the background to rotate \xB7 pinch to zoom","\u6C5A\u308C\u3092\u306A\u305E\u3063\u3066\u6383\u9664 \xB7 \u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30D4\u30F3\u30C1\u3067\u30BA\u30FC\u30E0"],["Inhala","Inhale","\u5438\u3063\u3066"],["Gracias por respirar","Thank you for breathing","\u547C\u5438\u3057\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046"],["Sost\xE9n","Hold","\u6B62\u3081\u3066"],["Exhala","Exhale","\u5410\u3044\u3066"],["Acercar","Zoom in","\u30BA\u30FC\u30E0\u30A4\u30F3"],["Alejar","Zoom out","\u30BA\u30FC\u30E0\u30A2\u30A6\u30C8"],["Centrar vista","Center view","\u8996\u70B9\u3092\u623B\u3059"],["Esencial","Essential","\u5FC5\u9808"],["Funcional","Functional","\u6A5F\u80FD"],["Decoraci\xF3n","Decoration","\u98FE\u308A"],["Colecci\xF3n","Collection","\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"],["Vac\xEDa. Cada reparaci\xF3n te da un objeto.","Empty. Every repair gives you an item.","\u7A7A\u3063\u307D\u3002\u4FEE\u7406\u3059\u308B\u305F\u3073\u306B\u30A2\u30A4\u30C6\u30E0\u304C\u3082\u3089\u3048\u307E\u3059\u3002"],["Reparado","Repaired","\u4FEE\u7406\u6E08\u307F"],["Tu caba\xF1a est\xE1 lista. Buen trabajo.","Your cabin is ready. Nice work.","\u5C0F\u5C4B\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\u3002\u3088\u304F\u3067\u304D\u307E\u3057\u305F\u3002"],["Limpia m\xE1s esa zona antes de repararla","Clean that area more before repairing it","\u4FEE\u7406\u3059\u308B\u524D\u306B\u3001\u3082\u3046\u5C11\u3057\u305D\u306E\u5834\u6240\u3092\u6383\u9664\u3057\u307E\u3057\u3087\u3046"],["Ronronea\u2026","Purring\u2026","\u30B4\u30ED\u30B4\u30ED\u2026"],["Caba\xF1a reiniciada","Cabin reset","\u5C0F\u5C4B\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F"],["Llevas un buen rato aqu\xED: respira hondo y estira un poco los hombros.","You have been here a while: take a deep breath and stretch your shoulders a little.","\u3057\u3070\u3089\u304F\u904A\u3093\u3067\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u8EFD\u304F\u4F38\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["\xBFReiniciar la caba\xF1a desde cero?","Restart the cabin from scratch?","\u5C0F\u5C4B\u3092\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059\u304B\uFF1F"],["Los farolillos suben al cielo","Lanterns drift up into the sky","\u30E9\u30F3\u30BF\u30F3\u304C\u591C\u7A7A\u3078\u6607\u3063\u3066\u3044\u304D\u307E\u3059"],["Campanita","Little bell","\u5C0F\u3055\u306A\u9234"],["Lluvia en el techo","Rain on the roof","\u5C4B\u6839\u306E\u96E8\u97F3"],["Croar de ranas","Frogs croaking","\u30AB\u30A8\u30EB\u306E\u9CF4\u304D\u58F0"],["Murmullo de agua","Water murmur","\u6C34\u306E\u305B\u305B\u3089\u304E"],["Maullido suave","Soft meow","\u3084\u3055\u3057\u3044\u9CF4\u304D\u58F0"]]);var Su=(i,t)=>{let e=cb.get(i);return e?e[t]:i},cb=new Map(Ep.concat(Tp).map(i=>[i[0].toLowerCase(),[i[0],i[1].toLowerCase(),i[2]]])),Sp=(i,t)=>i.split(", ").map(e=>Su(e,t)).join(t===1?", ":"\u3001");UX.rx([[/^Tablas: (\d+)$/,(i,t)=>t===1?"Planks: "+i[1]:"\u677F: "+i[1]],[/^Necesita: (.+)$/,(i,t)=>(t===1?"Needs: ":"\u5FC5\u8981: ")+Sp(i[1],t)],[/^Limpia la zona · (\d+)%$/,(i,t)=>(t===1?"Clean the area \xB7 ":"\u30A8\u30EA\u30A2\u3092\u6383\u9664 \xB7 ")+i[1]+"%"],[/^Faltan (\d+) tablas$/,(i,t)=>t===1?i[1]+" more planks needed":"\u3042\u3068\u677F"+i[1]+"\u679A"],[/^Listo · (\d+) tablas$/,(i,t)=>t===1?"Ready \xB7 "+i[1]+" planks":"\u6E96\u5099OK \xB7 \u677F"+i[1]+"\u679A"],[/^Faltan (\d+) tablas\. Sigue limpiando\.$/,(i,t)=>t===1?i[1]+" more planks needed. Keep cleaning.":"\u3042\u3068\u677F"+i[1]+"\u679A\u3002\u6383\u9664\u3092\u7D9A\u3051\u307E\u3057\u3087\u3046\u3002"],[/^Primero repara: (.+)$/,(i,t)=>(t===1?"Repair first: ":"\u5148\u306B\u4FEE\u7406: ")+Sp(i[1],t)],[/^(.+) reparado\. Ganaste: (.+)$/,(i,t,e)=>t===1?e(i[1])+" repaired. You got: "+e(i[2]):e(i[1])+"\u3092\u4FEE\u7406\u3057\u307E\u3057\u305F\u3002\u7372\u5F97: "+e(i[2])],[/^(.+) ya está reparado$/,(i,t,e)=>t===1?e(i[1])+" is already repaired":e(i[1])+"\u306F\u3082\u3046\u4FEE\u7406\u6E08\u307F\u3067\u3059"],[/^Siguiente: (repara|limpia) (.+?)( \(toca su botón\))?$/,(i,t)=>{let e=i[1]==="repara",n=Su(i[2],t);return t===1?"Next: "+(e?"repair":"clean")+" the "+n+(i[3]?" (tap its button)":""):"\u6B21: "+n+"\u3092"+(e?"\u4FEE\u7406":"\u6383\u9664")+(i[3]?"\uFF08\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30D7\uFF09":"")}],[/^Mientras no estabas, la humedad volvió a ensuciar (.+)$/,(i,t)=>{let e=Su(i[1],t);return t===1?"While you were away, damp dirtied "+e+" again.":"\u7559\u5B88\u306E\u3042\u3044\u3060\u306B\u6E7F\u6C17\u3067\u3001"+e+"\u304C\u307E\u305F\u6C5A\u308C\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002"}]]);try{document.title=UX.tr(document.title)}catch{}var wp=["Esencial","Funcional","Decoraci\xF3n"],Ze=[{id:"piso",tier:0,name:"Piso",cost:10,focus:[1.5,ft,1],reward:["Cepillo ancho","Limpias con un cepillo m\xE1s grande"]},{id:"escalera",tier:0,name:"Escalera",cost:14,needs:["piso"],focus:[12,1,2.8],reward:["Mochila de herramientas","Ganas 10% m\xE1s de tablas al limpiar"]},{id:"barandal",tier:0,name:"Barandal",cost:14,needs:["piso"],focus:[2.5,ft+.6,3.9],reward:["Farol de mano","Ilumina el \xE1rea mientras limpias"]},{id:"techo",tier:0,name:"Techo",cost:24,needs:["piso"],focus:[1.5,8.2,.5],reward:["Cubeta de lluvia","Suena lluvia suave sobre el techo"]},{id:"panel",tier:1,name:"Panel solar",cost:20,needs:["techo"],focus:[4.4,8.4,.9],reward:["Bater\xEDa solar","Energ\xEDa guardada para la noche"]},{id:"ventana",tier:1,name:"Ventana",cost:16,needs:["techo"],focus:[2.4,6.1,-2.8],reward:["Cortinas de lino","Entra la luz de la luna"]},{id:"librero",tier:1,name:"Librero",cost:14,needs:["piso"],focus:[-1.4,5.6,-2.5],reward:["Novela de monta\xF1a","Un libro para las noches"]},{id:"cama",tier:1,name:"Cama",cost:14,needs:["techo"],focus:[4.5,5,-1.6],reward:["Manta tejida","Para las noches fr\xEDas"]},{id:"lampara",tier:2,name:"L\xE1mpara del techo",cost:10,needs:["panel"],focus:[1.5,7,-1],reward:["Foco c\xE1lido","Una luz amplia sobre la cama"]},{id:"luces",tier:2,name:"Luces de cuerda",cost:14,needs:["panel","barandal"],focus:[1.5,7,2.5],reward:["Bombillas de colores","Las luces se vuelven de colores"]},{id:"cuadro",tier:2,name:"Cuadro",cost:10,needs:["librero"],focus:[.55,6.4,-2.8],reward:["Pincel de acuarela","Un recuerdo de la monta\xF1a"]},{id:"plantas",tier:2,name:"Plantas",cost:8,needs:["barandal"],focus:[6.9,ft+.6,3],reward:["Semillas de lavanda","Huele a campo"]},{id:"nichos",tier:2,name:"Nichos de pared",cost:12,needs:["lampara"],focus:[-9.8,1,5.5],reward:["Luci\xE9rnagas en frasco","M\xE1s luci\xE9rnagas afuera"]}];var Eu=new Map,Ap=new Map,Ha=(i,t)=>i.forEach(e=>Ap.set(e.toLowerCase(),t));Ha(["#dcae92","#c89479","#d4a98c","#c49a7d","#d2a58a"],"wood");Ha(["#b0806a","#d9b995","#a1918c","#dcbc98","#d4b290","#e0c19e","#a8978c","#9d8c82","#b0a095","#ecc9ae","#f1d3bb","#e0c2a2","#b3a398","#8f6f66","#9a7a70","#8e7f7a","#f2d6c0","#e7c9ae"],"woodV");Ha(["#a9a4c6","#8f8ab0","#aaa5c8","#9a95bb","#b4afd2","#8e89b0"],"stone");Ha(["#e7a293","#9b8b88"],"shingle");Ha(["#9fb9a0"],"grass");var Te=(i,t)=>{let e=i+(t?JSON.stringify(t):"");return Eu.has(e)||Eu.set(e,yp(i,Ap.get(String(i).toLowerCase()),Object.assign({flatShading:!0},t||{}))),Eu.get(e)};function ot(i,t,e,n,s,r,a,o,l){let c=typeof n=="string"?Te(n,l):n,h=new An(i,t,e),d=c.userData&&c.userData.kind;d&&vp(h,i,t,e,_p[d]);let u=new zt(h,c);return u.position.set(s,r,a),o&&o.add(u),u}var hb=["#8cbb78","#7faa70","#9a92b6"],Tu;function ub(i,t,e,n,s,r){r=r||{},Tu||(Tu=new Cn(1,0));let a=new zt(Tu,Te(r.c||hb[Math.random()*3|0]));return a.position.set(t,e,n),a.rotation.x=r.rx||0,a.userData={item:i.id,base:r.wall?[s,s,s*.3]:[s,s*.28,s],s:1},a.scale.set(...a.userData.base),i.g.add(a),i.blobs.push(a),a}function _n(i,t,e,n,s,r,a){let o=tn(e);for(let l=0;l<t;l++){let c=n(o);ub(i,c[0],c[1],c[2],s+o()*(r-s),a)}}function Ni(i){let t=i.userData.s,e=i.userData.base;i.scale.set(e[0]*t,e[1]*t,e[2]*t),i.visible=t>.04}var wu="cabana3d-v1",Ga=.55,db=200,lt={repaired:{},spent:0,best:0,done:!1,decor:{},own:{},mem:0,notes:[],vis:{},ltr:{}},Au=i=>Ze.find(t=>t.id===i),fb=()=>db*(lt.repaired.escalera?1.1:1),As=()=>Math.floor(lt.best*fb())-lt.spent,Rs=()=>Ze.filter(i=>lt.repaired[i.id]).length,xc=i=>Au(i).name.toLowerCase(),rs=i=>(i.needs||[]).filter(t=>!lt.repaired[t]);function Er(){Ze.forEach(i=>{let t=ke[i.id],e=!!lt.repaired[i.id];t.b.visible=!e,t.f.visible=e}),le.rainOn=!!lt.repaired.techo,Qt.rain(le.rainOn),zn.shadowMap.needsUpdate=!0}function Vn(){try{let i={};Object.values(ke).forEach(t=>i[t.id]=t.blobs.map(e=>+e.userData.s.toFixed(2))),localStorage.setItem(wu,JSON.stringify({r:lt.repaired,s:lt.spent,b:lt.best,d:lt.done,t:Date.now(),bl:i,dc:lt.decor,ow:lt.own,me:lt.mem,nt:lt.notes,vv:lt.vis,lt:lt.ltr}))}catch{}}var pb=[[["piso"],2,10,"el piso"],[["escalera","barandal","plantas","luces"],10,26,"la terraza y la escalera"],[["librero","cama","ventana","cuadro","lampara"],26,50,"el interior"],[["techo","panel","nichos"],50,80,"el techo y los nichos"]];function Rp(i){let t=null;try{t=JSON.parse(localStorage.getItem(wu)||"null")}catch{}if(!t)return;lt.repaired=t.r||{},lt.spent=t.s||0,lt.best=t.b||0,lt.done=!!t.d,lt.decor=t.dc||{},lt.own=t.ow||{},lt.mem=t.me||0,lt.notes=t.nt||[],lt.vis=t.vv||{},lt.ltr=t.lt||{},Object.values(ke).forEach(r=>{let a=(t.bl||{})[r.id];a&&r.blobs.forEach((o,l)=>{a[l]!=null&&(o.userData.s=a[l])})});let e=(()=>{try{return localStorage.getItem("ux-wear")==="1"}catch{return!1}})(),n=t.t&&e?(Date.now()-t.t)/36e5:0,s=null;pb.forEach(([r,a,o,l])=>{let c=pe((n-a)/(o-a));c>0&&(r.forEach(h=>ke[h].blobs.forEach(d=>{d.userData.s=Math.max(d.userData.s,c*.9)})),s=l)}),Object.values(ke).forEach(r=>r.blobs.forEach(Ni)),s&&setTimeout(()=>i("Mientras no estabas, la humedad volvi\xF3 a ensuciar "+s),1500)}function Cp(){try{localStorage.removeItem(wu)}catch{}lt.repaired={},lt.spent=0,lt.best=0,lt.done=!1,lt.decor={},lt.own={},lt.mem=0,lt.notes=[],lt.vis={},lt.ltr={};try{window.__habReset&&window.__habReset()}catch{}Object.values(ke).forEach(i=>i.blobs.forEach(t=>{t.userData.s=1,Ni(t)})),Er()}var Ce={porchL:[],bulbs:[],nichoGlow:[],lampL:null,lampGlow:null,winL:null,handL:null},vn={lamp:0,lant:0,str:0,nich:0,moon:0,smoke:0,rain:0};function Ip(){let i=new Ta(11975167,7035530,1.15);$t.add(i);let t=new pr(14015743,1.15);t.position.set(-12,18,16),t.target.position.set(4,4,0),$t.add(t,t.target),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-20,right:22,top:16,bottom:-14,near:1,far:70}),t.shadow.bias=-6e-4,t.shadow.normalBias=.04,t.shadow.radius=3;let e=new pr(16765616,.4);e.position.set(14,6,14),$t.add(e)}function Pp(){Ce.lampL=new Pi(16763018,0,14,1.4),Ce.lampL.position.set(1.5,7.2,-.6),$t.add(Ce.lampL),Ce.lampGlow=Ue(Ne,16763018,4.5,0,!0),Ce.lampGlow.position.set(1.5,7.15,-1),$t.add(Ce.lampGlow)}function Lp(){Ce.handL=new Pi(16766880,0,9,1.6),$t.add(Ce.handL)}function Dp(){Ce.winL=new Pi(11190271,0,9,1.5),Ce.winL.position.set(2.4,6.2,-1.6),$t.add(Ce.winL)}function Np(i){let t=le.T,e=lt.repaired,n={lamp:e.lampara&&e.panel?1:0,lant:e.techo?1:0,str:e.luces?1:0,nich:e.nichos?1:0,moon:e.ventana?1:0,smoke:e.techo?1:0,rain:e.techo?1:0};for(let r in vn)vn[r]+=(n[r]-vn[r])*Math.min(1,i*1.6);let s=.93+.05*Math.sin(t*9)+.03*Math.sin(t*23);Ce.lampL.intensity=2.6*vn.lamp*s,Ce.lampGlow.material.opacity=.55*vn.lamp*s,Ce.porchL.forEach((r,a)=>{r.L.intensity=1.6*vn.lant*(s+.02*a),r.gl.material.opacity=.7*vn.lant*s,r.body.material.emissiveIntensity=vn.lant}),Ce.bulbs.forEach((r,a)=>{r.material.opacity=vn.str*(.55+.15*Math.sin(t*2+a))}),Ce.nichoGlow.forEach((r,a)=>{r.material.opacity=.7*vn.nich*(.8+.2*Math.sin(t*1.6+a*2))}),Ce.winL.intensity=1.2*vn.moon}var Up=[],Fp=[];function Ru(i,t,e,n,s){let r=tn(n),a=new Ii;a.moveTo(-340,-60);for(let l=-340;l<=340;l+=16)a.lineTo(l,e*(.45+.55*Math.abs(Math.sin(l*.011+n)+.5*Math.sin(l*.027+n*2)))/1.5+r()*e*.08);a.lineTo(340,-60);let o=new zt(new Sa(a),new Ee({color:t,fog:!0}));o.position.set(0,s,i),$t.add(o)}function mb(){let i=new zt(new hn(600,24,16),new xn({side:rn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ht("#2a3278")},hor:{value:new Ht("#8a7cbc")}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,hor;void main(){float h=normalize(vP).y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.55));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));i.renderOrder=-10,$t.add(i);{let n=new Float32Array(1500);for(let r=0;r<500;r++){let a=Math.random()*6.283,o=Math.random()*.85+.1,l=Math.sqrt(1-o*o);n.set([Math.cos(a)*l*560,o*560,Math.sin(a)*l*560-0],r*3)}let s=new Se;s.setAttribute("position",new Ve(n,3)),$t.add(new Ci(s,new ui({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:.85,fog:!1,depthWrite:!1})))}let t=Ue(Ne,16773327,150,.9,!0);t.material.fog=!1,t.position.set(150,170,-420),$t.add(t);let e=new zt(new Ji(17,32),new Ee({color:16773842,fog:!1}));e.position.set(150,170,-419),e.lookAt(0,0,0),$t.add(e)}function gb(){Ru(-150,"#5d62a4",60,1,-24),Ru(-110,"#6a68ab",46,5,-24),Ru(-78,"#7770b0",34,9,-22);let i=new zt(new Ji(260,32).rotateX(-Math.PI/2),Te("#6f79ae"));i.position.y=-14,$t.add(i);let t=["#6f7fb6","#7b88bf","#6877ae","#8591c4"];{let n=new oa(new sn(1.9,7.5,6).translate(0,3.8,0),Te("#ffffff"),900),s=new de,r=new Nn,a=new P,o=new P,l=new Ht,c=tn(77),h=0;for(let d=0;d<4e3&&h<900;d++){let u=c()*6.283,f=14+Math.sqrt(c())*150,p=Math.cos(u)*f+2,v=Math.sin(u)*f-12;if(p>-16&&p<17&&v>-10&&v<9)continue;let m=.7+c()*1.1;o.set(p,-14+Math.max(0,-v-30)*.05,v),a.set(m,m*(.8+c()*.8),m),s.compose(o,r,a),n.setMatrixAt(h,s),n.setColorAt(h,l.set(t[c()*4|0])),h++}n.count=h,$t.add(n)}for(let e=0;e<7;e++){let n=Ue(Sr,14209780,60+e*8,.24);n.position.set(-70+e*30,-9+e*1.6,-10-e*6),n.scale.set(70+e*8,18,1),$t.add(n),Up.push(n)}for(let e=0;e<6;e++){let n=Ue(Sr,13156590,90,.3);n.position.set(-160+e*70,60+e*37%30,-200-e%3*30),n.scale.set(150,40,1),$t.add(n),Fp.push(n)}}function xb(){let i=new An(10,26,12,12,16,12),t=i.attributes.position,e=tn(3),n=new Float32Array(t.count*3),s=new Ht,r=new Ht("#8f93c4"),a=new Ht("#5d6498"),o=(h,d,u)=>Math.sin(h*1.3+d*.7)*.35+Math.sin(u*1.7+d*1.1)*.3+Math.sin(h*3.1+u*2.3+d*.4)*.15;for(let h=0;h<t.count;h++){let d=t.getX(h),u=t.getY(h),f=t.getZ(h);if(u<13-.01){let m=o(d,u,f)*1.6+(e()-.5)*.25,g=f>5.9,M=Math.abs(d)>4.9;t.setX(h,d+(M?m:m*.3)*(Math.abs(d)<4.9?.3:1)),t.setZ(h,f+(g?m*.35:m*.6))}let p=pe((u+13)/26);s.copy(a).lerp(r,p);let v=(e()-.5)*.06;n[h*3]=s.r+v,n[h*3+1]=s.g+v,n[h*3+2]=s.b+v}i.setAttribute("color",new Ve(n,3)),i.computeVertexNormals();let l=i.attributes.uv;for(let h=0;h<l.count;h++)l.setXY(h,l.getX(h)*3.2,l.getY(h)*3.2);let c=new zt(i,new ys({vertexColors:!0,flatShading:!0,map:yu("rock"),gradientMap:bu}));c.position.set(-9,-9,-1),c.receiveShadow=!0,c.castShadow=!0,$t.add(c);{let h=new zt(new An(10.4,.5,12.4),Te("#9fb9a0"));h.position.set(-9,3.95,-1),$t.add(h)}{let h=tn(11);for(let d=0;d<7;d++){let u=-13+h()*8,f=-5+h()*8,p=.8+h()*.7,v=new zt(new sn(.8*p,3.2*p,6),Te(["#7ba8a0","#88b7a6","#6f9c98"][d%3]));v.position.set(u,4.2+1.6*p,f),$t.add(v)}}{let h=tn(5);for(let d=0;d<8;d++){let u=1+h()*2,f=new zt(new Cn(u,0),Te("#6c72a8"));f.position.set(-14+h()*12,-13,6+h()*3),f.rotation.set(h()*3,h()*3,0),$t.add(f)}}}function Op(){mb(),gb(),xb()}function Bp(i){Up.forEach((t,e)=>{t.position.x+=i*(.5+e*.08),t.position.x>110&&(t.position.x=-110)}),Fp.forEach((t,e)=>{t.position.x+=i*(.4+e*.05),t.position.x>260&&(t.position.x=-260)})}var zp=[],Cu=260,kp=new Float32Array(Cu*6),Vp=[],Iu=60,_c=new Float32Array(Iu*3),Hp=[],vc,yc,Tr,bc,Wa;function Gp(){for(let i=0;i<12;i++){let t=Ue(Sr,15328506,2,0);t.userData.ph=i/12,$t.add(t),zp.push(t)}vc=new Se;for(let i=0;i<Cu;i++)Vp.push([Math.random()*30-12,Math.random()*18,Math.random()*18-8]);vc.setAttribute("position",new Ve(kp,3)),Tr=new la(vc,new cr({color:13621503,transparent:!0,opacity:0,fog:!0})),Tr.frustumCulled=!1,$t.add(Tr),yc=new Se;for(let i=0;i<Iu;i++)Hp.push([Math.random()*30-14,Math.random()*9+1,Math.random()*14-6,Math.random()*6.28]);yc.setAttribute("position",new Ve(_c,3)),bc=new ui({color:16773792,size:.4,map:Ne,transparent:!0,opacity:0,blending:Li,depthWrite:!1}),Wa=new Ci(yc,bc),Wa.frustumCulled=!1,$t.add(Wa)}function Wp(i,t,e){let n=le.T;if(zp.forEach((s,r)=>{let a=(n*.07+s.userData.ph)%1;s.position.set(-1.2+a*3.2+Math.sin(n*.6+r)*.3,11.6+a*5.5,-1.8+Math.sin(n*.4+r*2)*.2);let o=1+a*4.2;s.scale.set(o,o,1),s.material.opacity=.38*(1-a)*Math.min(1,a*8)*vn.smoke}),Tr.material.opacity=.28*vn.rain,Tr.visible=vn.rain>.02,Tr.visible){for(let s=0;s<Cu;s++){let r=Vp[s];r[1]-=15*i,r[1]<-2&&(r[1]=17+Math.random()*3,r[0]=Math.random()*34-14,r[2]=Math.random()*20-9),kp.set([r[0],r[1],r[2],r[0]-.12,r[1]+.7,r[2]],s*6)}vc.attributes.position.needsUpdate=!0}if(bc.opacity=pe(t*.9+(e?.3:0)-.1,0,.9),Wa.visible=bc.opacity>.02,Wa.visible){for(let s=0;s<Iu;s++){let r=Hp[s],a=n*.4+r[3];_c[s*3]=r[0]+Math.sin(a*2+s)*1.5,_c[s*3+1]=r[1]+Math.sin(a*3+s)*.5,_c[s*3+2]=r[2]+Math.cos(a*1.7+s)*1.5}yc.attributes.position.needsUpdate=!0}}var Mc=[],_b=0;function Xp(){for(let i=0;i<40;i++){let t=Ue(Ne,16777215,.4,0,!0);t.visible=!1,$t.add(t),Mc.push({s:t,life:0,vx:0,vy:0,vz:0})}}function Pu(i,t,e,n,s,r,a){for(let o=0;o<n;o++){let l=Mc[_b++%Mc.length];l.s.position.set(i,t,e),l.s.material.color.set(s),l.s.visible=!0,l.life=1,l.vx=(Math.random()-.5)*r,l.vy=Math.random()*r*.6+(a||.5),l.vz=(Math.random()-.5)*r,l.s.scale.setScalar(.25+Math.random()*.3)}}var Cs=i=>Pu(i[0],i[1],i[2]+.5,22,16771504,5,2);function qp(i){Mc.forEach(t=>{if(t.s.visible){if(t.life-=i*.9,t.life<=0){t.s.visible=!1;return}t.s.position.x+=t.vx*i,t.s.position.y+=t.vy*i,t.s.position.z+=t.vz*i,t.vy-=2.2*i,t.s.material.opacity=t.life*.9}})}var Lu="#dcae92",Yp="#c89479",Zp="#d9b995",gi="#b0806a",Qn="#a1918c",Jp="#a9a4c6",$p="#e7a293",Kp="#7fc3bd",te,jp=()=>(te=new Ut,te),Ui=i=>(mc.push(i),i),wr=i=>9.4-(i+1)*(2.2/3.4),Fi=Math.atan(2.2/3.4),yn=i=>{let t=new Ut,e=new Ut,n=new Ut;return t.userData.itemId=i,t.add(e,n),te.add(t),ke[i]={id:i,g:t,b:e,f:n,blobs:[]}},Sc={paint:null};function Qp(){jp(),$t.add(te),ot(12.4,.28,.22,gi,2,ft-.35,3.9,te),ot(12.4,.28,.22,gi,2,ft-.35,-2.9,te);for(let t=0;t<8;t++)ot(.2,.26,7.2,"#8f6f66",-3.8+t*1.65,ft-.35,.5,te);[[-3.6,3.7],[-3.6,-2.7],[1,3.7],[1,-2.7],[4.8,3.7],[4.8,-2.7],[7.7,3.7],[7.7,-2.7]].forEach(([t,e])=>Ui(ot(.38,18.4,.38,"#9a7a70",t,ft-9.5,e,te)));for(let t of[1,4.8]){let e=ot(.15,.15,6.6,"#8f6f66",t,ft-5,.5,te);e.rotation.x=0}let i=(t,e,n,s,r)=>{let a=Math.hypot(n-t,s-e),o=ot(a,.16,.16,"#8f6f66",(t+n)/2,(e+s)/2,r,te);o.rotation.z=Math.atan2(s-e,n-t)};i(-3.6,ft-4,1,ft-.5,3.7),i(1,ft-.5,4.8,ft-4,3.7),i(4.8,ft-4,7.7,ft-.5,3.7),i(1,ft-4,4.8,ft-.5,3.7),i(4.8,ft-.5,7.7,ft-4,3.7),ot(12,.1,6.8,"#4a4470",2,ft-.6,.5,te),Ui(ot(8.2,3.9,.2,Lu,1.5,ft+1.95,-2.95,te));for(let t=0;t<14;t++)ot(.05,3.9,.04,Yp,-2.4+t*.6,ft+1.95,-2.83,te);Ui(ot(8.1,.9,.1,Jp,1.5,ft+.45,-2.8,te));for(let t=0;t<8;t++)ot(.04,.9,.02,"#8f8ab0",-2.1+t*1,ft+.45,-2.74,te);{let t=new Ii;[[3,0],[-1,0],[-1,3.9],[1,5.2],[3,3.9]].forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n));for(let e of[-2.6,5.4]){let n=new ba(t,{depth:.2,bevelEnabled:!1});n.rotateY(Math.PI/2);let s=new zt(n,Te(Lu));s.position.set(e,ft,0),te.add(s),Ui(s)}}Ui(ot(8.4,.8,.22,gi,1.5,7.8,1,te)),[-2.5,5.5].forEach(t=>Ui(ot(.3,3.5,.3,gi,t,ft+1.75,1,te)));{let t=new Ut;te.add(t);for(let e=0;e<9;e++)ot(.9+e%2*.05,.5,.9,["#aaa5c8","#9a95bb","#b4afd2"][e%3],-1.2+e%2*.04,7.4+e*.44,-1.8,t);ot(1.1,.15,1.1,"#8e89b0",-1.2,11.4,-1.8,t),Ui(t.children[0])}ot(9.9,.18,.3,gi,1.5,9.5,-1,te),ot(9.9,.2,.22,gi,1.5,7.2,2.45,te),ot(9.9,.2,.22,gi,1.5,7.2,-4.45,te),ot(.2,.2,6.8,gi,-3.3,7.15,-1,te),ot(.2,.2,6.8,gi,6.3,7.15,-1,te),[-2.6,5.6].forEach(t=>{let e=new Ut;e.position.set(t,6.5,2.1),te.add(e),ot(.03,.5,.03,"#6a5058",0,.5,0,e);let n=ot(.3,.42,.3,Te("#ffe0a8",{emissive:"#ffb860",emissiveIntensity:0}),0,0,0,e);ot(.38,.07,.38,"#a86a5c",0,.24,0,e),ot(.38,.07,.38,"#a86a5c",0,-.24,0,e);let s=Ue(Ne,16761466,3.2,0,!0);e.add(s);let r=new Pi(16761466,0,11,1.5);e.add(r),Ce.porchL.push({body:n,gl:s,L:r})}),[[-3.2,"#e6a091","#f5c9d9"],[-2.4,"#7fc3bd","#f8e5a0"],[-1.6,"#d9a9cb","#ffffff"],[-.8,"#a6cf92","#f5c9d9"]].forEach(([t,e,n])=>{ot(.5,.4,.5,e,t,ft+.2,3.3,te);let s=new zt(new Cn(.34,0),Te("#79b08a"));s.position.set(t,ft+.55,3.3),te.add(s),[[.1,.8],[-.12,.72],[.05,.95]].forEach(([r,a])=>{let o=new zt(new Cn(.1,0),Te(n));o.position.set(t+r,ft+a,3.35),te.add(o)})});for(let[t,e]of[[0,"#e6a091"],[1,Kp]]){let n=new zt(new ua(.3,3.2,4,8),Te(e));n.rotation.x=Math.PI/2,n.scale.set(1,1,.7),n.position.set(7.1+t*0,ft+.75+t*.6,-.6),te.add(n);let s=ot(.45,.12,.8,"#4a4470",7.1,ft+.9+t*.6,-.5,te);s.visible=!0}[-1.9,.7].forEach(t=>{ot(.14,1.9,.14,"#8f6f66",7.1,ft+.95,t,te)});{let e=ft,n=15.1,s=ft-5.9,r=Math.hypot(n-8.2,s-e),a=Math.atan2(s-e,n-8.2);[2.15,3.45].forEach(o=>{let l=ot(r,.22,.14,"#8f6f66",(8.2+n)/2,(e+s)/2-.3,o,te);l.rotation.z=a,Ui(l)}),ot(2,.2,2.2,Zp,15.7,ft-6.1,2.8,te),[[15.1,2],[16.4,3.6]].forEach(([o,l])=>ot(.3,12,.3,"#9a7a70",o,ft-12,l,te))}{let t=Ue(Ne,16761466,3,.55,!0);t.position.set(16.5,ft-5.2,3.5),te.add(t),ot(.08,1.1,.08,"#6a5058",16.5,ft-5.7,3.5,te)}}function tm(){{let i=yn("piso"),t=tn(21);for(let e=0;e<24;e++){let n=-3.76+e*.5;if(ot(.46,.14,7,["#dcbc98","#d4b290","#e0c19e"][e%3],n,ft-.07,.5,i.f),t()>.27){let s=7*(.55+.45*t()),r=ot(.46,.14,s,["#a8978c","#9d8c82","#b0a095"][e%3],n,ft-.07+(t()-.5)*.1,.5+(7-s)*(t()>.5?.5:-.5),i.b);r.rotation.y=(t()-.5)*.06,r.rotation.z=(t()-.5)*.05}}_n(i,14,31,e=>[-3.5+e()*11,ft+.04,-1+e()*4.6],.35,.75)}{let i=yn("barandal"),t=tn(5);for(let e=0;e<11;e++){let n=-3.8+e*1.2;if(ot(.13,1.05,.13,"#ecc9ae",n,ft+.52,3.9,i.f),![2,5,8].includes(e)){let s=ot(.13,1.05,.13,Qn,n,ft+.52,3.9,i.b);s.rotation.z=(t()-.5)*.34}}ot(12,.12,.15,"#f1d3bb",2.2,ft+1.06,3.9,i.f),ot(12,.1,.12,"#f1d3bb",2.2,ft+.55,3.9,i.f),[[-2.9,1.6],[2.6,2.4],[6.4,2.8]].forEach(([e,n])=>{let s=ot(n,.12,.14,Qn,e,ft+1.02+(t()-.5)*.06,3.9,i.b);s.rotation.z=(t()-.5)*.1}),[[-1.3,2.1],[4.3,1.6]].forEach(([e,n])=>ot(n,.1,.12,Qn,e,ft+.5,3.9,i.b)),_n(i,6,41,e=>[-3.5+e()*11,ft+1.1,3.9],.28,.5)}{let i=yn("escalera"),t=tn(9),e=Math.atan2(-5.9,6.9);for(let n=0;n<9;n++){let s=8.9+n*.72,r=ft-.28-n*.63;if(ot(.8,.12,1.5,"#e0c2a2",s,r,2.8,i.f),![2,5].includes(n)){let a=ot(.8,.12,1.5,n%2?Qn:"#b3a398",s,r+(t()-.5)*.06,2.8,i.b);a.rotation.z=(t()-.5)*.28,a.rotation.x=(t()-.5)*.1}}for(let n=0;n<9;n+=2)ot(.09,1,.09,"#f1d3bb",8.9+n*.72,ft+.22-n*.63,3.62,i.f);{let n=ot(Math.hypot(6.9,5.9),.1,.1,"#f1d3bb",12.1,ft-2.7,3.62,i.f);n.rotation.z=e}[1,5].forEach(n=>ot(.09,.7,.09,Qn,8.9+n*.72,ft+.05-n*.63,3.62,i.b)),_n(i,8,51,n=>{let s=n()*8;return[8.9+s*.72,ft-.2-s*.63,2.8+(n()-.5)*1.1]},.3,.5)}{let i=yn("techo"),t=tn(33),e=(r,a)=>{let o=new Ut;return[[.7,Fi],[-2.7,-Fi]].forEach(([l,c])=>{let h=ot(9.8,.24,4.1,r,1.5,8.3,l,o);h.rotation.x=c+(a&&l>0,0),h.position.z=l}),o},n=e($p),s=e("#9b8b88");i.f.add(n),i.b.add(s);for(let r=0;r<11;r++){let a=(r+.5)/11,o=2.3-a*3.3,l=wr(o)+.13,c=ot(9.8,.04,.07,"#f6c3b4",1.5,l,o,i.f);c.rotation.x=Fi;let h=ot(9.8,.04,.07,"#7e706e",1.5,l,o,i.b);h.rotation.x=Fi}[[.5,1.3,1,.7],[3.6,.4,1.2,.8],[-1.8,1.6,.9,.6],[5.6,1.2,.8,.7]].forEach(([r,a,o,l])=>{let c=ot(o,.03,l,"#2d2848",r,wr(a)+.14,a,i.b);c.rotation.x=Fi}),_n(i,14,61,r=>{let a=-.9+r()*3.1;return[-3+r()*9,wr(a)+.2,a]},.35,.7,{rx:Fi})}{let i=yn("panel"),t=e=>{let n=new Ut;n.position.set(4.4,wr(.9)+.28,.9),n.rotation.x=Fi+(e?-.2:0),n.rotation.z=e?.17:0,ot(2.7,.08,1.6,e?"#9c8a8e":"#efe9f8",0,0,0,n),ot(2.5,.06,1.4,e?"#434a7c":"#6784c8",0,.05,0,n);for(let s=1;s<5;s++)ot(.025,.02,1.4,e?"#6b709c":"#a9c0ef",-1.25+s*.5,.09,0,n);for(let s=1;s<3;s++)ot(2.5,.02,.025,e?"#6b709c":"#a9c0ef",0,.09,-.7+s*.47,n);if(e){let s=ot(.9,.02,.03,"#e9e6f5",.3,.1,.1,n);s.rotation.y=.7;let r=ot(.6,.02,.03,"#e9e6f5",-.5,.1,-.2,n);r.rotation.y=-.5}return n};i.f.add(t(!1)),i.b.add(t(!0)),_n(i,3,71,e=>[3.3+e()*2.2,wr(.9)+.4,.5+e()*.8],.3,.5,{rx:Fi})}Sc.paint=pc(256,200,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#f7d9c9"),n.addColorStop(.6,"#e8b9c9"),n.addColorStop(1,"#b8a9d9"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#fff3d6",i.beginPath(),i.arc(190,55,22,0,7),i.fill(),i.fillStyle="#8f9ccf",i.beginPath(),i.moveTo(0,e),i.lineTo(70,90),i.lineTo(130,150),i.lineTo(190,80),i.lineTo(t,150),i.lineTo(t,e),i.fill(),i.fillStyle="#6f7fb8",i.beginPath(),i.moveTo(0,e),i.lineTo(50,140),i.lineTo(110,e),i.fill(),i.fillStyle="#7aa88f";for(let s=0;s<12;s++){let r=10+s*20;i.beginPath(),i.moveTo(r,e),i.lineTo(r+8,e-34-s%3*10),i.lineTo(r+16,e),i.fill()}});{let i=yn("ventana"),t=-2.84,e=2.4,n=ft+1.95;[[0,.9],[0,-.9]].forEach(([r,a])=>0);let s=(r,a)=>{ot(1.9,.12,.14,r,e,n+.9,t,a),ot(1.9,.12,.14,r,e,n-.9,t,a),ot(.12,1.9,.14,r,e-.9,n,t,a),ot(.12,1.9,.14,r,e+.9,n,t,a)};s("#f2d6c0",i.f),s(Qn,i.b),ot(1.7,1.7,.05,Te("#cbd8ff",{emissive:"#90a8ea",emissiveIntensity:.8}),e,n,t+.02,i.f),ot(.06,1.7,.07,"#f2d6c0",e,n,t+.06,i.f),ot(1.7,.06,.07,"#f2d6c0",e,n,t+.06,i.f),ot(.5,1.9,.1,"#f6e9d8",e-.85,n+0,t+.12,i.f),ot(.5,1.9,.1,"#f6e9d8",e+.85,n,t+.12,i.f),ot(1.7,1.7,.05,"#2b2644",e,n,t+.02,i.b),[[.8,.04,.5],[.04,.7,-.3],[.5,.04,-.6]].forEach(([r,a,o])=>{let l=ot(r,a,.02,"#e9e6f5",e+o*.3,n+o*.3,t+.06,i.b);l.rotation.z=o*2}),_n(i,3,81,r=>[e-.7+r()*1.4,n+.95,t+.1],.25,.4,{wall:!1})}}function em(){{let i=yn("librero"),t=-1.4,e=-2.55,n=["#c97d68","#6498b9","#cfb67c","#82ab84","#b0769c","#dad2bc"],s=r=>{let a=new Ut;a.position.set(t,ft,e);let o=r?Qn:"#d4a98c";ot(.1,2.7,.6,o,-.8,1.35,0,a),ot(.1,2.7,.6,o,.8,1.35,0,a),ot(1.7,2.7,.05,r?"#8e7f7a":"#c49a7d",0,1.35,-.28,a),(r?[0,.9,1.8]:[0,.68,1.36,2.04,2.7]).forEach(h=>ot(1.7,.08,.6,o,0,h+.04,0,a));let c=tn(r?4:8);if(r){for(let h=0;h<6;h++){let d=ot(.14,.5,.38,n[h],-.6+h*.18,.34+(h>3?.9:0),0,a);d.rotation.z=(c()-.5)*.9}for(let h=0;h<5;h++){let d=ot(.14,.38,.28,n[h],-.5+c()*1.4,.1,.7+c()*.4,a);d.rotation.z=1.4+c()*.4,d.rotation.y=c()*3}}else for(let h=0;h<4;h++){let d=-.7;for(;d<.6;){let u=.1+c()*.12;ot(u,.45+c()*.12,.38,n[c()*6|0],d+u/2,.68*h+.3,0,a),d+=u+.01}}return r&&(a.rotation.z=.1),a};i.f.add(s(!1)),i.b.add(s(!0)),_n(i,4,91,r=>[t-.7+r()*1.4,ft+2.76,e+(r()-.5)*.3],.25,.4)}{let i=yn("cama"),t=4.5,e=-1.6,n=s=>{let r=new Ut;r.position.set(t,ft,e);let a=s?Qn:"#d2a58a";if(ot(2.1,.35,2.8,a,0,.3,0,r),ot(2.1,.8,.14,a,0,.75,-1.35,r),s&&(r.children[1].rotation.z=.12),[[-.95,-1.3],[.95,-1.3],[-.95,1.3],[.95,1.3]].forEach(([o,l],c)=>ot(.14,.3,.14,a,o,.1,l,r)),ot(1.9,.28,2.6,s?"#a9a2b4":"#f3ead8",0,.62,0,r),s)ot(1.1,.2,.5,"#bdb6c9",.2,.82,-1.05,r);else{ot(1.95,.1,1.7,"#86c9c2",0,.8,.45,r);for(let o=0;o<4;o++)ot(1.96,.03,.12,"#f2bccb",0,.86,-.1+o*.36,r);ot(1.1,.22,.5,"#fffaf0",0,.86,-1.05,r)}return r};i.f.add(n(!1)),i.b.add(n(!0)),_n(i,4,101,s=>[t-.8+s()*1.6,ft+.82,e-1.1+s()*2.2],.3,.5)}Pp();{let i=yn("lampara"),t=1.5,e=-1,n=s=>{let r=new Ut;r.position.set(t,7.15,e),ot(.03,s?.7:1.7,.03,"#6a5058",0,s?.9:1.35,0,r);let a=new zt(new sn(.55,.5,12,1,!0),new bs({color:s?"#9a919c":"#f8ebd0",side:Mn,emissive:s?"#000":"#ffcf8a",emissiveIntensity:s?0:.6,flatShading:!0}));if(a.position.y=.1,r.add(a),s)r.rotation.z=.35;else{let o=new zt(new hn(.14,10,8),new Ee({color:16773320}));o.position.y=-.02,r.add(o)}return r};i.f.add(n(!1)),i.b.add(n(!0)),_n(i,1,111,s=>[t,7.45,e],.25,.3)}{let i=yn("luces"),t=tn(13),e=[16767392,16234959,12183257,13483509];for(let n=0;n<3;n++){let s=-3+n*3.1,r=s+3.1;for(let a=0;a<=4;a++){let o=a/4,l=Mu(s,r,o),c=7-.35*Math.sin(Math.PI*o),h=2.55,d=e[(n*5+a)%4],u=new zt(new hn(.11,8,6),new Ee({color:d}));u.position.set(l,c-.12,h),i.f.add(u);let f=Ue(Ne,d,1.5,0,!0);if(f.position.copy(u.position),$t.add(f),Ce.bulbs.push(f),!(n===1&&a>0&&a<4)){let p=new zt(new hn(.1,8,6),Te("#8d8398"));p.position.set(l,c-.1,h),p.rotation.set(t(),t(),0),i.b.add(p)}if(a<4){let p=Mu(s,r,(a+1)/4),v=7-.35*Math.sin(Math.PI*(a+1)/4),m=ot(Math.hypot(p-l,v-c),.02,.02,"#4a3f55",(l+p)/2,(c+v)/2,h,i.f);if(m.rotation.z=Math.atan2(v-c,p-l),n!==1){let g=ot(Math.hypot(p-l,v-c),.02,.02,"#6a6076",(l+p)/2,(c+v)/2,h,i.b);g.rotation.z=m.rotation.z}}}}_n(i,2,121,n=>[-2+n()*7,7.3,2.4],.2,.3)}{let i=yn("cuadro"),t=.55,e=ft+2.25,n=-2.84,s=r=>{let a=new Ut;a.position.set(t,e,n),r&&(a.rotation.z=.28),ot(1.25,1,.08,r?Qn:"#c89479",0,0,0,a);let o=new zt(new vs(1.05,.8),r?new bs({color:"#bcb5c8"}):new Ee({map:Sc.paint}));if(o.position.z=.05,a.add(o),r){let l=ot(.7,.02,.02,"#eee9f7",0,0,.06,a);l.rotation.z=.8}return a};i.f.add(s(!1)),i.b.add(s(!0)),_n(i,1,131,r=>[t,e+.55,n+.1],.22,.3)}{let i=yn("plantas"),t=tn(7);[[6.5,"#e6a091"],[7.3,"#7fc3bd"]].forEach(([e,n],s)=>{ot(.55,.45,.55,n,e,ft+.22,3,i.f),ot(.55,.45,.55,"#a89b92",e,ft+.22,3,i.b);for(let r=0;r<7;r++){let a=new zt(new Cn(.17,0),Te("#79b08a"));a.position.set(e+(t()-.5)*.5,ft+.6+t()*.35,3+(t()-.5)*.4),i.f.add(a);let o=new zt(new Cn(.1,0),Te(["#c9b4ee","#f5c9d9","#fff3c4"][r%3]));o.position.set(a.position.x,a.position.y+.2,a.position.z),i.f.add(o);let l=ot(.03,.45,.03,"#8a7a62",e+(t()-.5)*.4,ft+.7,3+(t()-.5)*.3,i.b);l.rotation.z=(t()-.5)*.8}}),_n(i,2,141,e=>[6.5+e()*.9,ft+.5,3],.25,.35)}{let i=yn("nichos"),t=tn(17);[[-10.9,2.4],[-8.5,-.2],[-11.1,-2.7]].forEach(([e,n])=>{let s=(c,h,d,u,f)=>{let p=new zt(new Fn(c,c,h,6),typeof d=="string"?Te(d):d);return p.rotation.x=Math.PI/2,p.rotation.y=Math.PI/6,p.position.set(e,n,u),f.add(p),p};s(.95,.7,"#c89479",5.2,te),s(.78,.3,Te("#383254"),5.55,i.b),s(.78,.3,new Ee({color:16769190}),5.55,i.f);let r=new zt(new hn(.3,10,8),new bs({color:16774096,emissive:16766602,emissiveIntensity:.9,transparent:!0,opacity:.9}));r.position.set(e,n-.25,5.6),i.f.add(r);let a=Ue(Ne,16764806,3.2,0,!0);a.position.set(e,n,5.9),$t.add(a),Ce.nichoGlow.push(a);let o=ot(.9,.02,.02,"#cfcbe0",e,n+.2,5.6,i.b);o.rotation.z=.5;let l=ot(.9,.02,.02,"#cfcbe0",e,n-.1,5.6,i.b);l.rotation.z=-.4}),_n(i,3,151,e=>[-11+e()*3,3.7,5.2],.3,.4)}}var dt={th:.3,ph:.15,r:16,tx:2.2,ty:5.6,tz:.5,tth:.3,tph:.15,tr:16,gx:2.2,gy:5.6,gz:.5,focusT:0},Ar=[2.2,5.6,.5],vb=()=>{dt.gx=pe(dt.gx,-4,9),dt.gy=pe(dt.gy,3,9),dt.gz=pe(dt.gz,-3,4)};function Cr(){dt.gx=Ar[0],dt.gy=Ar[1],dt.gz=Ar[2],dt.tr=16,dt.tth=.3,dt.tph=.15,dt.focusT=0}var Rr=i=>{dt.tr=pe(dt.tr*i,9,34)};function Xa(i,t){let e=dt.r*.0016,n=Math.sin(dt.th),s=Math.cos(dt.th);dt.gx+=-i*s*e,dt.gz+=i*n*e,dt.gy+=t*e,dt.focusT=0,vb()}function Du(i){dt.gx=i.focus[0],dt.gy=i.focus[1],dt.gz=i.focus[2],dt.tr=Math.min(dt.tr,14),dt.focusT=4.5}function nm(){let i=document.createElement("div");i.id="camctl",i.style.cssText="position:fixed;right:max(10px,env(safe-area-inset-right));top:64px;z-index:6;display:flex;flex-direction:column;gap:8px",[["+","Acercar",()=>Rr(.8)],["\u2212","Alejar",()=>Rr(1.25)],["\u2302","Centrar vista",Cr]].forEach(([t,e,n])=>{let s=document.createElement("button");s.textContent=t,s.title=s.ariaLabel=e,s.style.cssText="width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 1.2rem system-ui;cursor:pointer;touch-action:manipulation",s.onclick=r=>{r.stopPropagation(),n()},i.appendChild(s)}),document.body.appendChild(i)}function im(){addEventListener("keydown",i=>{if(!le.started)return;let t=i.key;t==="+"||t==="="?Rr(.85):t==="-"||t==="_"?Rr(1.18):t==="r"||t==="R"||t==="0"?Cr():t==="ArrowLeft"?dt.tth=pe(dt.tth-.08,-.95,.95):t==="ArrowRight"?dt.tth=pe(dt.tth+.08,-.95,.95):t==="ArrowUp"?dt.tph=pe(dt.tph+.03,.03,.42):t==="ArrowDown"&&(dt.tph=pe(dt.tph-.03,.03,.42))})}function sm(i,t){let e=le.T;dt.focusT>0&&(dt.focusT-=i,dt.focusT<=0&&(dt.gx=Ar[0],dt.gy=Ar[1],dt.gz=Ar[2],dt.tr=Math.max(dt.tr,16)));let n=1-Math.pow(.004,i);dt.th+=(dt.tth-dt.th)*n,dt.ph+=(dt.tph-dt.ph)*n,dt.r+=(dt.tr-dt.r)*n,dt.tx+=(dt.gx-dt.tx)*n*.6,dt.ty+=(dt.gy-dt.ty)*n*.6,dt.tz+=(dt.gz-dt.tz)*n*.6,t&&(dt.tth+=Math.sin(e*.12)*3e-4);let s=dt.th,r=dt.ph;dn.position.set(dt.tx+dt.r*Math.sin(s)*Math.cos(r),dt.ty+dt.r*Math.sin(r),dt.tz+dt.r*Math.cos(s)*Math.cos(r)),dn.lookAt(dt.tx,dt.ty,dt.tz)}var Uu=i=>{let t=ke[i].blobs;return t.length?1-t.reduce((e,n)=>e+n.userData.s,0)/t.length:1},Is={all:0,items:{}};function Ec(){let i=0;Ze.forEach(t=>{let e=Uu(t.id);Is.items[t.id]=e,i+=e}),Is.all=i/Ze.length,lt.best=Math.max(lt.best,Is.all)}var as=()=>.55*Math.min(1,Is.all/.96)+.45*Rs()/Ze.length;function qa(i){if(lt.repaired[i.id])return{k:"done",t:"Reparado"};if(rs(i).length)return{k:"locked",t:"Necesita: "+rs(i).map(xc).join(", ")};let t=Is.items[i.id]||0;return t<Ga?{k:"locked",t:"Limpia la zona \xB7 "+Math.round(t/Ga*100)+"%"}:As()<i.cost?{k:"locked",t:"Faltan "+(i.cost-As())+" tablas"}:{k:"ready",t:"Listo \xB7 "+i.cost+" tablas"}}var Fu=i=>{for(;i;){if(!i.visible)return!1;i=i.parent}return!0},rm=i=>ke[i]&&ke[i].blobs.some(t=>t.visible),Ps=()=>pe(928/dt.r,34,90),Nu=new P;function Ya(i,t,e){let n=kn.getBoundingClientRect(),s=[],r=1e9;return Object.values(ke).forEach(a=>{Fu(a.g)&&a.blobs.forEach(o=>{if(!o.visible)return;o.getWorldPosition(Nu);let l=Nu.distanceTo(dn.position),c=Nu.clone().project(dn);if(c.z>1)return;let h=(c.x+1)/2*n.width+n.left,d=(1-c.y)/2*n.height+n.top,u=Math.hypot(h-i,d-t);u<e&&(s.push({m:o,d:l,dd:u,it:a}),l<r&&(r=l))})}),s.filter(a=>a.d<r+5)}var am=0;function Fe(i){let t=fe("toast");t.textContent=i,t.classList.add("show"),clearTimeout(am),am=setTimeout(()=>t.classList.remove("show"),3200)}var om={},Ir=document.createElement("div");Ir.className="grp";function lm(i){wp.forEach((t,e)=>{let n=document.createElement("div");n.className="grp";let s=document.createElement("span");s.className="lab",s.textContent=t,n.appendChild(s),Ze.filter(r=>r.tier===e).forEach(r=>{let a=document.createElement("button");a.type="button",a.className="chip",a.innerHTML="<b></b><small></small>",a.firstChild.textContent=r.name,a.onclick=()=>i(r),n.appendChild(a),om[r.id]=a}),fe("chips").appendChild(n)}),fe("chips").appendChild(Ir)}function Za(){Ir.textContent="";let i=document.createElement("span");i.className="lab",i.textContent="Colecci\xF3n",Ir.appendChild(i);let t=Ze.filter(e=>lt.repaired[e.id]);if(!t.length){let e=document.createElement("span");e.className="loot",e.textContent="Vac\xEDa. Cada reparaci\xF3n te da un objeto.",Ir.appendChild(e)}t.forEach(e=>{let n=document.createElement("span");n.className="loot on",n.textContent=e.reward[0],n.title=e.reward[1],Ir.appendChild(n)})}function Oi(){Ec();let i=as();fe("fill").style.width=(i*100).toFixed(1)+"%",Va(fe("pct"),Math.round(i*100)+"%"),Va(fe("mats"),"Tablas: "+Math.max(0,As())),Ze.forEach(t=>{let e=qa(t),n=om[t.id],s="chip "+e.k;n.className!==s&&(n.className=s),Va(n.lastChild,e.t)})}var xi,Ou=null;function cm(i){xi=document.createElement("button"),xi.style.cssText="position:fixed;top:104px;left:50%;transform:translateX(-50%);z-index:6;background:var(--panel);border:1px solid var(--line);color:var(--ink);padding:7px 14px;border-radius:99px;font:inherit;font-size:.82rem;cursor:pointer;max-width:80%;opacity:0;transition:opacity .5s;pointer-events:none",xi.id="nextb",document.body.appendChild(xi),xi.onclick=()=>{Ou&&i(Ou)}}function hm(){let i=Ze.find(e=>!lt.repaired[e.id]&&!rs(e).length);if(Ou=i||null,!i||!le.started){xi.style.opacity=0,xi.style.pointerEvents="none";return}let t=qa(i);Va(xi,"Siguiente: "+(t.k==="ready"?"repara ":"limpia ")+i.name.toLowerCase()+(t.k==="ready"?" (toca su bot\xF3n)":"")),xi.style.opacity=.92,xi.style.pointerEvents="auto"}var Pr=!1,Bu=0;function um(i,t){t=t||0;let e=["Inhala","Sost\xE9n","Exhala"],n=[4e3,1e3,6e3],s=fe("bcircle");if(Pr){if(t>=15){fe("btxt").textContent="Gracias por respirar",s.style.transform="scale(.7)",Bu=setTimeout(()=>{Pr=!1,fe("breath").hidden=!0},2800);return}fe("btxt").textContent=e[i];try{i===0&&Qt.breathTone(!0,5),i===2&&Qt.breathTone(!1,6)}catch{}s.style.transition="transform "+n[i]/1e3+"s ease-in-out",s.style.transform=i===0?"scale(1.5)":i===2?"scale(.7)":s.style.transform,Bu=setTimeout(()=>um((i+1)%3,t+1),n[i])}}function dm(i){PZ.more(fe("top"),[fe("brt"),fe("snd"),fe("rst")].concat(UX.btns("",{hand:!0,wear:!0}))),fe("snd").onclick=()=>{Qt.on=!Qt.on,Qt.ctx&&Qt.setOn(Qt.on),fe("snd").textContent="Sonido: "+(Qt.on?"s\xED":"no")},fe("rst").onclick=i,fe("brt").onclick=()=>{Pr=!Pr,fe("breath").hidden=!Pr,clearTimeout(Bu),Pr&&(fe("bcircle").style.transform="scale(.7)",um(0))}}function fm(){let i=fe("panel"),t=()=>document.documentElement.style.setProperty("--ph",i.offsetHeight+"px");t(),addEventListener("resize",t);try{new ResizeObserver(t).observe(i)}catch{}}var je,_i,Tc=0;function pm(){je=new Ut;{let i=Te("#e8d6c0"),t=new zt(new hn(.42,12,10),i);t.scale.set(1.3,.7,.9),t.position.y=.25,je.add(t);let e=new zt(new hn(.26,10,8),i);e.position.set(.5,.3,.05),je.add(e),[[.58,.54],[.42,.54]].forEach(([s,r],a)=>{let o=new zt(new sn(.08,.16,4),i);o.position.set(s,r,.05+(a?-.1:.1)),je.add(o)});let n=new zt(new di(.3,.06,6,12,4),Te("#d9b995"));n.position.set(-.35,.12,.2),n.rotation.x=1.5,je.add(n)}je.position.set(4.3,ft+.05,2.6),je.rotation.y=-.5,je.userData.itemId="gato",je.visible=!1,$t.add(je),_i=Ue(Ne,16752560,.5,0,!0),_i.visible=!1,$t.add(_i)}function mm(){_i.position.set(je.position.x+.4,je.position.y+1,je.position.z),_i.visible=!0,Tc=1.6,Qt.meow(),Qt.chime(.2,2),Fe("Ronronea\u2026"),UX.hap(25)}function gm(i,t){je.visible=Object.keys(lt.repaired).length>0,_i.visible&&(Tc-=i,_i.position.y+=i*.6,_i.material.opacity=pe(Tc,0,1),_i.scale.setScalar(.7+.2*Math.sin(t*8)),Tc<=0&&(_i.visible=!1)),je.scale.y=1+.03*Math.sin(t*1.6)}var Ge={on:!1,t:0,dur:1.25,p:new P,d:new P,next:0},xm=9,Rc=[],Ie={on:!1,shown:!1,armT:1/0,t:0,len:46,nextB:0,lan:[]},yb=12,wc=new Float32Array(120),_m=[],Ac,zu,os;function vm(){Ge.next=30+Math.random()*40;for(let i=0;i<xm;i++){let t=Ue(Ne,i?13623551:16777215,Math.max(1.6,5.2-i*.45),0,!0);t.material.fog=!1,t.visible=!1,$t.add(t),Rc.push(t)}Ac=new Se;for(let i=0;i<40;i++)_m.push([-4+Math.random()*13,ft+.6+Math.random()*3,2+Math.random()*3,Math.random()*6.28]);Ac.setAttribute("position",new Ve(wc,3)),zu=new ui({color:16771496,size:.5,map:Ne,transparent:!0,opacity:0,blending:Li,depthWrite:!1}),os=new Ci(Ac,zu),os.frustumCulled=!1,os.visible=!1,$t.add(os);for(let i=0;i<yb;i++){let t=new Ut,e=new Ee({color:i%3?16758891:16229304,transparent:!0,opacity:0});t.add(new zt(new Fn(.2,.15,.34,8),e));let n=Ue(Ne,16761466,2.2,0,!0);t.add(n),t.visible=!1,$t.add(t),Ie.lan.push({g:t,bm:e,gl:n,x0:-3+Math.random()*10,z0:3.2+Math.random()*1.6,del:i*1.1+Math.random()*.8,sp:.8+Math.random()*.5,ph:Math.random()*6.28})}}function ku(){if(Ge.on)return;let i=Math.random()<.5?-1:1;Ge.p.set(-110*i+(Math.random()-.5)*60,95+Math.random()*70,-340),Ge.d.set(i*150,-52-Math.random()*20,0),Ge.on=!0,Ge.t=0,Rc.forEach(t=>t.visible=!0),UX.cap("Estrella fugaz",25e3),Qt.sparkle()}function ym(i){if(!Ge.on)return;Ge.t+=i;let t=Math.sin(Math.PI*pe(Ge.t/Ge.dur));Rc.forEach((e,n)=>{let s=Ge.t-n*.03;e.position.copy(Ge.p).addScaledVector(Ge.d,s),e.material.opacity=t*(1-n/xm)*.95}),Ge.t>=Ge.dur&&(Ge.on=!1,Rc.forEach(e=>e.visible=!1))}function Vu(){Ie.on||Ie.shown||(Ie.shown=!0,Ie.on=!0,Ie.t=0,Ie.nextB=.3,os.visible=!0,Fe("Los farolillos suben al cielo"),UX.hap([20,80,20,80,40]))}function bm(i){if(!Ie.on)return;Ie.t+=i;let t=Ie.t;zu.opacity=.85*pe(t/4)*pe((Ie.len-t)/8);for(let e=0;e<40;e++){let n=_m[e],s=le.T*.35+n[3];wc[e*3]=n[0]+Math.sin(s*2+e)*1.6,wc[e*3+1]=n[1]+Math.sin(s*1.3+e)*.8+t*.04,wc[e*3+2]=n[2]+Math.cos(s*1.7+e)*1.4}Ac.attributes.position.needsUpdate=!0,Ie.lan.forEach(e=>{let n=t-e.del;if(n<0){e.g.visible=!1;return}e.g.visible=!0;let s=ft+1.2+n*e.sp+n*n*.012;e.g.position.set(e.x0+Math.sin(n*.5+e.ph)*1.2+n*.12,s,e.z0+Math.cos(n*.4+e.ph)*.6-n*.1);let r=pe(n/2)*pe((ft+24-s)/8);e.bm.opacity=r*.9,e.gl.material.opacity=r*.75*(.85+.15*Math.sin(le.T*3+e.ph)),r<=0&&n>3&&(e.g.visible=!1)}),t>Ie.nextB&&t<34&&(Ie.nextB=t+2.2+Math.random()*2,Qt.chime(Math.random()*1.6-.8,Math.random()*5|0),Math.random()<.5&&Qt.lantern(Math.random()-.5)),t>Ie.len&&(Ie.on=!1,os.visible=!1,Ie.lan.forEach(e=>e.g.visible=!1))}function bb(){!lt.done&&as()>=.995&&(lt.done=!0,Fe("Tu caba\xF1a est\xE1 lista. Buen trabajo."),UX.hap([20,80,20,80,40]),Vn())}function Ja(i){if(lt.repaired[i.id]){Fe(i.name+" ya est\xE1 reparado");return}if(qa(i).k!=="ready"){rs(i).length?Fe("Primero repara: "+rs(i).map(xc).join(", ")):(Is.items[i.id]||0)<Ga?Fe("Limpia m\xE1s esa zona antes de repararla"):Fe("Faltan "+(i.cost-As())+" tablas. Sigue limpiando.");return}lt.spent+=i.cost,lt.repaired[i.id]=!0,ke[i.id].blobs.forEach(e=>{e.userData.s=Math.min(e.userData.s,0)}),ke[i.id].blobs.forEach(Ni),Er(),Cs(i.focus),Qt.chime((i.focus[0]-1.5)/12,Ze.indexOf(i)%5),Qt.creak(),UX.hap([12,60,12]),Rs()===Ze.length&&(Ie.armT=le.T+2.5),Fe(i.name+" reparado. Ganaste: "+i.reward[0]),Oi(),Za(),bb(),Vn()}function Mm(){UX.ask("\xBFReiniciar la caba\xF1a desde cero?",()=>{Cp(),Oi(),Za(),Fe("Caba\xF1a reiniciada")})}var Cc=[["helecho","suelo","Helecho en maceta",2],["lavanda","suelo","Lavanda",2],["farolpapel","suelo","Farol de papel",3],["tetera","suelo","Tetera humeante",3],["banquito","suelo","Banquito con manta",4],["libros","suelo","Libros con vela",4],["campanilla","colgante","Campanilla de viento",3],["atrapa","colgante","Atrapasue\xF1os",3],["estrellas","colgante","M\xF3vil de estrellas",4],["farolillos","colgante","Farolillos de papel",3],["reloj","pared","Reloj de pared",3],["guitarra","pared","Guitarra",4],["estantito","pared","Estantito con frascos",3],["mapa","pared","Mapa de la monta\xF1a",2],["mojon","roca","Moj\xF3n de piedras",2],["farolpiedra","roca","Farol de piedra",3],["floresroca","roca","Flores de roca",2]].map(([i,t,e,n])=>({id:i,kind:t,name:e,cost:n})),Hu={gato:{name:"Un gato",gift:"banquito",notes:["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo."]},zorro:{name:"Un zorro",gift:"mojon",notes:["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","Deja una piedra pulida junto a la puerta. Parece un regalo."]},buho:{name:"Un b\xFAho",gift:"reloj",notes:["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","Ulula suave. Del otro lado de la monta\xF1a, otro le responde."]},mariposa:{name:"Una mariposa lunar",gift:"lavanda",notes:["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a."]}};function Gu(i){let t=[["Habitar","Settle in","\u66AE\u3089\u3059"],["Volver a reparar","Back to repairs","\u4FEE\u7406\u306B\u3082\u3069\u308B"],["Recuerdos","Keepsakes","\u601D\u3044\u51FA"],["Preparar t\xE9","Make tea","\u304A\u8336\u3092\u3044\u308C\u308B"],["Regar plantas","Water plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],["Diario de la caba\xF1a","Cabin journal","\u5C0F\u5C4B\u306E\u65E5\u8A18"],["Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.","Tap a circle in the cabin to decorate that spot.","\u5C0F\u5C4B\u306E\u4E38\u3092\u30BF\u30C3\u30D7\u3057\u3066\u3001\u305D\u306E\u5834\u6240\u3092\u98FE\u308A\u307E\u3057\u3087\u3046\u3002"],["Quitar","Remove","\u306F\u305A\u3059"],["Colocar","Place","\u7F6E\u304F"],["Comprar con recuerdos","Buy with keepsakes","\u601D\u3044\u51FA\u3067\u8CB7\u3046"],["Cerrar","Close","\u9589\u3058\u308B"],["A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.","Still empty. Visitors leave notes about whoever lived here.","\u307E\u3060\u7A7A\u3063\u307D\u3067\u3059\u3002\u8A2A\u308C\u305F\u751F\u304D\u7269\u304C\u3001\u3053\u3053\u306B\u4F4F\u3093\u3067\u3044\u305F\u4EBA\u306E\u8A71\u3092\u6B8B\u3057\u3066\u304F\u308C\u307E\u3059\u3002"],["Porche","Porch","\u30DD\u30FC\u30C1"],["Junto a la ventana","By the window","\u7A93\u306E\u305D\u3070"],["Porche, junto al barandal","Porch, by the railing","\u30DD\u30FC\u30C1\u306E\u624B\u3059\u308A\u306E\u305D\u3070"],["Alero","Eaves","\u8ED2\u4E0B"],["Pared","Wall","\u58C1"],["Mirador de roca","Rock lookout","\u5CA9\u306E\u5C55\u671B\u53F0"],["Helecho en maceta","Potted fern","\u9262\u690D\u3048\u306E\u30B7\u30C0"],["Lavanda","Lavender","\u30E9\u30D9\u30F3\u30C0\u30FC"],["Farol de papel","Paper lantern","\u7D19\u3061\u3087\u3046\u3061\u3093"],["Tetera humeante","Steaming teapot","\u6E6F\u6C17\u306E\u7ACB\u3064\u6025\u9808"],["Banquito con manta","Stool with blanket","\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8\u306E\u30B9\u30C4\u30FC\u30EB"],["Libros con vela","Books with a candle","\u308D\u3046\u305D\u304F\u3068\u672C"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Atrapasue\xF1os","Dreamcatcher","\u30C9\u30EA\u30FC\u30E0\u30AD\u30E3\u30C3\u30C1\u30E3\u30FC"],["M\xF3vil de estrellas","Star mobile","\u661F\u306E\u30E2\u30D3\u30FC\u30EB"],["Farolillos de papel","Paper lanterns","\u7D19\u306E\u30E9\u30F3\u30BF\u30F3"],["Reloj de pared","Wall clock","\u58C1\u639B\u3051\u6642\u8A08"],["Guitarra","Guitar","\u30AE\u30BF\u30FC"],["Estantito con frascos","Little shelf with jars","\u74F6\u3092\u4E26\u3079\u305F\u5C0F\u3055\u306A\u68DA"],["Mapa de la monta\xF1a","Mountain map","\u5C71\u306E\u5730\u56F3"],["Moj\xF3n de piedras","Stone cairn","\u77F3\u7A4D\u307F"],["Farol de piedra","Stone lantern","\u77F3\u706F\u7C60"],["Flores de roca","Rock flowers","\u5CA9\u306E\u82B1"],["Llega un visitante","A visitor arrives","\u8A2A\u554F\u8005\u304C\u6765\u307E\u3057\u305F"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Tetera","Teapot","\u6025\u9808"],["Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.","You make tea. The steam rises slowly. How calming.","\u304A\u8336\u3092\u3044\u308C\u307E\u3059\u3002\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u307E\u3059\u3002\u843D\u3061\u7740\u304D\u307E\u3059\u306D\u3002"],["Primero repara las plantas","Repair the plants first","\u5148\u306B\u690D\u7269\u3092\u76F4\u3057\u307E\u3057\u3087\u3046"],["Riegas las plantas. Huelen a campo.","You water the plants. They smell like the countryside.","\u690D\u7269\u306B\u6C34\u3092\u3084\u308A\u307E\u3059\u3002\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Te dej\xF3: ","He left you: ","\u8D08\u308A\u7269: "],["La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB","The cabin is ready to live in: tap \u201CSettle in\u201D","\u5C0F\u5C4B\u306B\u66AE\u3089\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u300C\u66AE\u3089\u3059\u300D\u3092\u30BF\u30C3\u30D7"],["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","This cat belongs to no one, but sits right where Mara used to leave her chair.","\u3053\u306E\u732B\u306F\u8AB0\u306E\u3082\u306E\u3067\u3082\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30DE\u30E9\u304C\u6905\u5B50\u3092\u7F6E\u3044\u3066\u3044\u305F\u5834\u6240\u306B\u3061\u3087\u3053\u3093\u3068\u5EA7\u308A\u307E\u3059\u3002"],["Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo.","It purrs when the lamp is on. They say Mara did the same.","\u30E9\u30F3\u30D7\u304C\u3068\u3082\u308B\u3068\u5589\u3092\u9CF4\u3089\u3057\u307E\u3059\u3002\u30DE\u30E9\u3082\u305D\u3046\u3060\u3063\u305F\u305D\u3046\u3067\u3059\u3002"],["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","A curious fox sniffs at your steps. Someone used to leave it bread here every evening.","\u597D\u5947\u5FC3\u65FA\u76DB\u306A\u30AD\u30C4\u30CD\u304C\u968E\u6BB5\u306E\u306B\u304A\u3044\u3092\u304B\u304E\u307E\u3059\u3002\u6BCE\u5915\u3001\u8AB0\u304B\u304C\u3053\u3053\u306B\u30D1\u30F3\u3092\u7F6E\u3044\u3066\u3044\u307E\u3057\u305F\u3002"],["Deja una piedra pulida junto a la puerta. Parece un regalo.","It leaves a polished stone by the door. It looks like a gift.","\u6238\u53E3\u306B\u307F\u304C\u304B\u308C\u305F\u77F3\u3092\u7F6E\u3044\u3066\u3044\u304D\u307E\u3057\u305F\u3002\u8D08\u308A\u7269\u306E\u3088\u3046\u3067\u3059\u3002"],["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","The owl watches over the railing. Mara called him \u201Cthe foreman\u201D.","\u30D5\u30AF\u30ED\u30A6\u304C\u624B\u3059\u308A\u3092\u898B\u5F35\u3063\u3066\u3044\u307E\u3059\u3002\u30DE\u30E9\u306F\u300C\u73FE\u5834\u76E3\u7763\u300D\u3068\u547C\u3093\u3067\u3044\u307E\u3057\u305F\u3002"],["Ulula suave. Del otro lado de la monta\xF1a, otro le responde.","It hoots softly. From the far side of the mountain, another answers.","\u3084\u3055\u3057\u304F\u9CF4\u304F\u3068\u3001\u5C71\u306E\u5411\u3053\u3046\u304B\u3089\u3082\u3046\u4E00\u7FBD\u304C\u7B54\u3048\u307E\u3059\u3002"],["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","A luna moth rests in your cabin. They only fly at night, like Mara\u2019s maps.","\u30AA\u30CA\u30AC\u30DF\u30BA\u30A2\u30AA\u304C\u5C0F\u5C4B\u3067\u4F11\u3093\u3067\u3044\u307E\u3059\u3002\u591C\u306B\u3057\u304B\u98DB\u3070\u306A\u3044\u3001\u30DE\u30E9\u306E\u5730\u56F3\u306E\u3088\u3046\u306A\u86FE\u3067\u3059\u3002"],["Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a.","Its wings trace lines like a map of the mountain.","\u305D\u306E\u7FBD\u306E\u6A21\u69D8\u306F\u3001\u5C71\u306E\u5730\u56F3\u306E\u3088\u3046\u3067\u3059\u3002"],["Te faltan ","You are short by ","\u8DB3\u308A\u307E\u305B\u3093: "],["Un visitante deja una nota: ","A visitor leaves a note: ","\u8A2A\u554F\u8005\u304C\u30E1\u30E2\u3092\u6B8B\u3057\u307E\u3057\u305F: "]];i.add(t),i.rx([[/^(.+) · (\d+)$/,(e,n,s)=>s(e[1])+" \xB7 "+e[2]],[/^Recuerdos: (\d+)$/,(e,n)=>(n===1?"Keepsakes: ":"\u601D\u3044\u51FA: ")+e[1]],[/^(.+) · (\d+) s$/,(e,n,s)=>s(e[1])+" \xB7 "+e[2]+" s"],[/^(.+) colocado$/,(e,n,s)=>n===1?s(e[1])+" placed":s(e[1])+"\u3092\u7F6E\u304D\u307E\u3057\u305F"],[/^Te faltan (\d+) recuerdos\. Prepara té o espera visitas\.$/,(e,n)=>n===1?"You need "+e[1]+" more keepsakes. Make tea or wait for visitors.":"\u601D\u3044\u51FA\u304C\u3042\u3068"+e[1]+"\u500B\u5FC5\u8981\u3067\u3059\u3002\u304A\u8336\u3092\u3044\u308C\u308B\u304B\u3001\u8A2A\u554F\u8005\u3092\u5F85\u3061\u307E\u3057\u3087\u3046\u3002"],[/^(.+) · Te dejó: (.+)$/,(e,n,s)=>s(e[1])+" \xB7 "+(n===1?"He left you: ":"\u8D08\u308A\u7269: ")+s(e[2])]])}var Mb="rio-found-types",Wu=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],Sb=Wu.map(i=>i[0]),Em=Wu.map(i=>i[1]),Tm=()=>{let i=new Set;for(let t of["rio3d-found",Mb])try{JSON.parse(localStorage.getItem(t)||"[]").forEach(e=>i.add(e))}catch{}return i};function Xu(i){i.add(Wu.map(t=>[t[1],t[2],t[3]])),i.add([["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Cartas de Mara","Mara\u2019s letters","\u30DE\u30E9\u306E\u624B\u7D19"],["Carta sin abrir","Unopened letter","\u672A\u958B\u5C01\u306E\u624B\u7D19"],["Desc\xFAbrelo en el r\xEDo para leerla","Discover it on the river to read it","\u5DDD\u3067\u898B\u3064\u3051\u308B\u3068\u8AAD\u3081\u307E\u3059"],["Abrir carta","Open letter","\u624B\u7D19\u3092\u958B\u304F"],["Notas de visitantes","Visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2"],["Mara te dej\xF3 una carta","Mara left you a letter","\u30DE\u30E9\u304C\u624B\u7D19\u3092\u6B8B\u3057\u307E\u3057\u305F"],["Carta de Mara","Letter from Mara","\u30DE\u30E9\u306E\u624B\u7D19"],["Una carta nueva te espera en el diario","A new letter waits in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u5C4A\u3044\u3066\u3044\u307E\u3059"]]),i.rx([[/^Carta sin abrir · (.+)$/,(t,e,n)=>n("Carta sin abrir")+" \xB7 "+n(t[1])]])}function wm(i,t,e,n,s){let r=Tm();t.ltr=t.ltr||{};let a=0,o=document.createElement("h3");return o.style.cssText="margin:12px 0 8px;font:600 .95rem system-ui",o.textContent=e("Cartas de Mara"),i.appendChild(o),Em.forEach((l,c)=>{let h=document.createElement("p");h.style.margin="0 0 10px";let d=u=>{let f=document.createElement("span");f.textContent=u,h.appendChild(f)};d("\u2709 "),r.has(c)?(t.ltr[c]||(t.ltr[c]=1,a++),d(e(l)),h.style.color="#ffe9b8"):(d(e("Carta sin abrir")),d(" \xB7 "),d(e(Sb[c])),h.style.opacity=".55"),i.appendChild(h)}),a&&(n(3*a),s()),a}var Am=i=>{let t=Tm(),e=0;return t.forEach(n=>{n>=0&&n<Em.length&&!(i.ltr||{})[n]&&e++}),e},Eb=["Primavera","Verano","Oto\xF1o","Invierno"],Rm="cab-season",Sm=["auto","0","1","2","3"],Ic=()=>{try{return localStorage.getItem(Rm)||"auto"}catch{return"auto"}},Cm=()=>{let i=Ic();if(i!=="auto")return+i;let t=new Date().getMonth();return t>=2&&t<=4?0:t>=5&&t<=7?1:t>=8&&t<=10?2:3},Im=()=>{let i=Sm[(Sm.indexOf(Ic())+1)%5];try{localStorage.setItem(Rm,i)}catch{}return i},Pm=()=>"Estaci\xF3n: "+(Ic()==="auto"?"Auto":Eb[+Ic()]),Lm=[[255,182,200],[255,222,140],[232,140,70],[240,246,255]];function qu(i){i.add([["Estaci\xF3n: Auto","Season: Auto","\u5B63\u7BC0: \u304A\u307E\u304B\u305B"],["Estaci\xF3n: Primavera","Season: Spring","\u5B63\u7BC0: \u6625"],["Estaci\xF3n: Verano","Season: Summer","\u5B63\u7BC0: \u590F"],["Estaci\xF3n: Oto\xF1o","Season: Autumn","\u5B63\u7BC0: \u79CB"],["Estaci\xF3n: Invierno","Season: Winter","\u5B63\u7BC0: \u51AC"]])}var Nr=[{id:"porcheI",kind:"suelo",p:[-3.6,ft,2.1],n:"Porche"},{id:"interior",kind:"suelo",p:[.9,ft,-1.7],n:"Junto a la ventana"},{id:"porcheD",kind:"suelo",p:[6,ft,2.2],n:"Porche, junto al barandal"},{id:"alero",kind:"colgante",p:[-2.4,6.3,3.35],n:"Alero"},{id:"pared",kind:"pared",p:[4.6,6.3,-2.7],n:"Pared"},{id:"roca",kind:"roca",p:[-7.4,ft-1.3,2.6],n:"Mirador de roca"}],Tb=i=>Nr.find(t=>t.id===i),En=(i,t,e)=>new zt(i,Te(t,e)),wb=(i,t)=>new zt(i,new Ee({color:t})),Oe=(i,t,e,n,s,r,a,o,l)=>{let c=En(new Fn(i,t,e,l||8),n);return c.position.set(s,r,a),o&&o.add(c),c},Be=(i,t,e,n,s,r,a,o,l)=>{let c=En(new hn(i,10,8),t);return c.position.set(e,n,s),c.scale.set(r||1,a||1,o||1),l&&l.add(c),c},We=(i,t,e,n,s,r,a,o)=>{let l=En(new An(i,t,e),n);return l.position.set(s,r,a),o&&o.add(l),l},Ls=(i,t,e,n,s,r,a)=>{let o=Ue(Ne,t,e,a||.5,!0);return o.position.set(n,s,r),o.userData.gl=a||.5,i.add(o),o},Dm={helecho(){let i=new Ut;Oe(.34,.26,.45,"#b06c52",0,.22,0,i);for(let t=0;t<8;t++){let e=t/8*6.283,n=En(new sn(.12,.8,4),"#6fae78");n.position.set(Math.cos(e)*.22,.8,Math.sin(e)*.22),n.rotation.set(Math.sin(e)*.7,0,-Math.cos(e)*.7),i.add(n)}return i.userData.anim=t=>{i.rotation.y=Math.sin(t*.4)*.05},i},lavanda(){let i=new Ut;Oe(.28,.22,.4,"#7d6a8f",0,.2,0,i);for(let t=0;t<7;t++){let e=t/7*6.283,n=Math.cos(e)*.14,s=Math.sin(e)*.14;Oe(.012,.012,.7,"#6a9a6e",n,.7,s,i,4);for(let r=0;r<3;r++)Be(.05,r%2?"#b79ae0":"#9e7fd0",n,.95+r*.1,s,1,1.4,1,i)}return i.userData.anim=t=>{i.rotation.z=Math.sin(t*.9)*.02},i},farolpapel(){let i=new Ut;Oe(.03,.03,1.05,"#5a4132",0,.52,0,i);let t=Be(.28,"#ffe2aa",0,1.35,0,1,1.35,1,i);return t.material=new Ee({color:16769706}),Oe(.2,.2,.07,"#5a4132",0,1.78,0,i),Ls(i,16760954,3.4,0,1.35,0,.55),i},tetera(){let i=new Ut;We(1,.08,.7,"#7b5742",0,.7,0,i);for(let n of[-1,1])for(let s of[-1,1])Oe(.04,.05,.7,"#6a4a38",n*.42,.35,s*.26,i,5);Be(.26,"#4f6f8a",0,.98,0,1.1,.9,1,i),Oe(.1,.1,.08,"#3f5a72",0,1.2,0,i);let t=Oe(.04,.06,.3,"#4f6f8a",.32,1.04,0,i,5);t.rotation.z=-.9;let e=[];for(let n=0;n<4;n++){let s=Ue(Ne,15657206,.5,0,!1);s.userData.ph=n/4,i.add(s),e.push(s)}return i.userData.anim=n=>{e.forEach(s=>{let r=(n*.3+s.userData.ph)%1;s.position.set(.38+Math.sin(n*2+s.userData.ph*6)*.08*r,1.1+r*1.1,0),s.material.opacity=.4*(1-r),s.scale.setScalar(.35+r*.6)})},i},banquito(){let i=new Ut;We(.9,.14,.7,"#8b6a50",0,.62,0,i);for(let t of[-1,1])for(let e of[-1,1])Oe(.04,.05,.62,"#6b4d3a",t*.35,.31,e*.25,i,5);return We(.78,.2,.6,"#c0746e",0,.79,0,i),i},libros(){let i=new Ut;We(.95,.2,.65,"#b0769c",0,.1,0,i),We(.85,.18,.6,"#6498b9",0,.29,0,i),We(.8,.17,.55,"#cfb67c",-.03,.47,0,i),Oe(.07,.07,.3,"#f0e6cf",.18,.7,0,i,6);let t=Be(.06,"#ffd27a",.18,.92,0,1,1.6,1,i);t.material=new Ee({color:16765562});let e=Ls(i,16757850,2.2,.18,.94,0,.5);return i.userData.anim=n=>{t.scale.y=1.6+Math.sin(n*11)*.15,e.material.opacity=.5+Math.sin(n*9)*.06},i},campanilla(){let i=new Ut;We(.8,.1,.12,"#7b5742",0,0,0,i);let t=[];for(let e=-2;e<=2;e++){let n=new Ut;n.position.set(e*.17,-.05,0);let s=.55+(e+2)%2*.25;Oe(.008,.008,s,"#eadfc4",0,-s/2,0,n,3),Oe(.04,.05,.3,"#e0cd8a",0,-s-.12,0,n,6),i.add(n),t.push([n,e])}return i.userData.anim=e=>{t.forEach(([n,s])=>{n.rotation.z=Math.sin(e*1.6+s*.8)*.14,n.rotation.x=Math.sin(e*1.3+s)*.08})},i},atrapa(){let i=new Ut,t=new Ut;i.add(t);let e=En(new di(.4,.04,6,18),"#d8c19a");e.position.y=-.55,t.add(e);let n=En(new di(.2,.012,4,14),"#f0e6d2");return n.position.y=-.55,t.add(n),[[-.2,"#c97d68"],[0,"#6498b9"],[.2,"#cfb67c"]].forEach(([s,r])=>{Oe(.008,.008,.4,"#e8dcc0",s,-1.15,0,t,3),We(.07,.34,.02,r,s,-1.45,0,t)}),Oe(.01,.01,.35,"#e8dcc0",0,-.17,0,t,3),i.userData.anim=s=>{t.rotation.z=Math.sin(s*.9)*.06},i},estrellas(){let i=new Ut;return[[-.45,-.5,0],[.4,-.8,1],[0,-1.2,2]].forEach(([t,e,n])=>{let s=wb(new Ma(.2),16771488);s.scale.set(1,1,.4),s.position.set(t,e,0),Oe(.006,.006,-e*.9,"#eadfc4",t,e/2+.1,0,i,3),i.add(s),i.userData["s"+n]=s,Ls(i,16769162,1.3,t,e,0,.35)}),i.userData.anim=t=>{for(let e=0;e<3;e++)i.userData["s"+e].rotation.y=t*.8+e},i},farolillos(){let i=new Ut;[[-.55,14706010],[0,15770191],[.55,14706010]].forEach(([e,n],s)=>{Oe(.008,.008,.35,"#4a3a32",e,-.17,0,i,3);let r=Be(.18,n,e,-.55,0,1,1.35,1,i);r.material=new Ee({color:n}),Ls(i,16751204,1.5,e,-.55,0,.4)});let t=We(1.4,.02,.02,"#3a2e28",0,0,0,i);return i.userData.anim=e=>{i.rotation.z=Math.sin(e*1.2)*.03},i},reloj(){let i=new Ut,t=En(new Fn(.42,.42,.08,20),"#6b4d3a");t.rotation.x=Math.PI/2,i.add(t);let e=En(new Fn(.35,.35,.02,20),"#f1e6cc");e.rotation.x=Math.PI/2,e.position.z=.05,i.add(e);let n=We(.03,.3,.015,"#3d2e26",0,.15,.075,null),s=We(.04,.2,.015,"#3d2e26",0,.1,.07,null),r=new Ut,a=new Ut;return r.position.z=0,a.position.z=0,r.add(n),a.add(s),i.add(r,a),i.userData.anim=o=>{let l=new Date;r.rotation.z=-l.getMinutes()/60*6.283,a.rotation.z=-(l.getHours()%12+l.getMinutes()/60)/12*6.283},i},guitarra(){let i=new Ut,t=new Ut;t.rotation.z=.35,i.add(t),Be(.34,"#b9793f",0,-.35,0,1,1.15,.3,t),Be(.24,"#b9793f",0,.05,0,1,1.1,.3,t);let e=Oe(.1,.1,.05,"#4a3326",0,-.25,.1,t);return e.rotation.x=Math.PI/2,We(.1,1.05,.06,"#6b4d3a",0,.65,0,t),We(.14,.2,.06,"#4a3326",0,1.25,0,t),i},estantito(){let i=new Ut;We(1.3,.1,.35,"#7b5742",0,0,.1,i),Oe(.12,.12,.35,"#bee1eb",-.4,.22,.1,i,8).material=new Ee({color:12509675,transparent:!0,opacity:.6}),Oe(.1,.1,.28,"#e6c896",-.1,.19,.1,i,8);for(let t=0;t<3;t++){let e=Be(.025,16773792,-.4+(t-1)*.04,.2+t*.03,.1,1,1,1,i);e.material=new Ee({color:16773792})}Oe(.08,.06,.12,"#9a5b44",.4,.11,.1,i);for(let t=0;t<4;t++){let e=En(new sn(.05,.3,4),"#6fae78");e.position.set(.4+(t-1.5)*.05,.34,.1),e.rotation.z=(t-1.5)*.25,i.add(e)}return Ls(i,16771222,1.8,-.4,.25,.2,.3),i},mapa(){let i=new Ut;We(.9,.7,.03,"#e6d3a6",0,0,0,i),We(.94,.06,.05,"#6b4d3a",0,.38,0,i),We(.94,.06,.05,"#6b4d3a",0,-.38,0,i);let t=[[-.3,-.2],[-.12,.08],[0,-.05],[.14,.2],[.32,-.2]];for(let e=0;e<4;e++){let n=t[e],s=t[e+1],r=Math.hypot(s[0]-n[0],s[1]-n[1]),a=We(r,.015,.01,"#8d6b44",(n[0]+s[0])/2,(n[1]+s[1])/2,.02,i);a.rotation.z=Math.atan2(s[1]-n[1],s[0]-n[0])}return Be(.04,"#c0463a",.1,-.26,.03,1,1,.5,i),i},mojon(){let i=new Ut;return[[0,.55,.2,"#7d7b86"],[.38,.42,.17,"#8d8b97"],[.7,.3,.14,"#9a98a4"],[.95,.2,.11,"#a8a6b2"]].forEach(([t,e,n,s])=>Be(e,s,0,t+.1,0,1,.5,1,i)),i},farolpiedra(){let i=new Ut,t="#8a8896";Oe(.4,.45,.18,t,0,.09,0,i,6),Oe(.1,.12,.9,t,0,.6,0,i,6),Oe(.35,.3,.14,t,0,1.1,0,i,6),We(.5,.5,.5,t,0,1.4,0,i),We(.26,.3,.52,"#ffe1a0",0,1.4,0,i).material=new Ee({color:16769440}),We(.52,.3,.26,"#ffe1a0",0,1.4,0,i).material=new Ee({color:16769440});let e=En(new sn(.5,.4,4),t);return e.position.y=1.85,e.rotation.y=Math.PI/4,i.add(e),Ls(i,16760430,3.4,0,1.4,0,.5),i},floresroca(){let i=new Ut,t=[];for(let e=-4;e<=4;e++){let n=new Ut;n.position.set(e*.17,0,Math.sin(e)*.15);let s=.4+Math.abs(e%3)*.18;Oe(.012,.012,s,"#6a9a6e",0,s/2,0,n,3),Be(.07,["#f2b6c8","#fff0a0","#a6c8ff"][(e+4)%3],0,s,0,1,1,1,n),i.add(n),t.push([n,e])}return i.userData.anim=e=>{t.forEach(([n,s])=>{n.rotation.z=Math.sin(e*1.1+s*.7)*.06})},i}},Ab={gato(){let i=new Ut;Be(.4,"#3a3548",0,.3,0,1.3,.75,.9,i),Be(.25,"#3a3548",.5,.52,0,1,1,1,i);for(let e of[-.12,.12]){let n=En(new sn(.07,.16,4),"#3a3548");n.position.set(.5,.78,e),i.add(n);let s=Be(.03,"#ffe27a",.72,.55,e*.8,1,1,1,i);s.material=new Ee({color:16769658})}let t=En(new di(.3,.06,6,12,4),"#3a3548");return t.position.set(-.42,.18,.2),t.rotation.x=1.5,i.add(t),i.userData.anim=e=>{t.rotation.z=Math.sin(e*2)*.3},i},zorro(){let i=new Ut;Be(.45,"#c7703a",0,.45,0,1.5,.8,.8,i),Be(.28,"#c7703a",.75,.75,0,1.2,.9,.9,i),Be(.12,"#fff2e0",1,.7,0,1.2,.7,1,i);for(let e of[-.14,.14]){let n=En(new sn(.09,.25,4),"#c7703a");n.position.set(.72,1.02,e),i.add(n)}let t=Be(.3,"#c7703a",-.75,.5,0,2,.8,.8,i);return Be(.14,"#fff2e0",-1.1,.55,0,1,1,1,i),i.userData.anim=e=>{t.rotation.z=Math.sin(e*1.5)*.15},i},buho(){let i=new Ut;Be(.34,"#8a7560",0,.5,0,1,1.4,1,i),Be(.22,"#e8dcc4",0,.46,.14,1,1.3,.6,i);for(let t of[-.14,.14]){let e=Be(.1,"#fff1b0",t,.78,.22,1,1,.6,i),n=Be(.04,"#2a2030",t,.78,.3,1,1,1,i),s=En(new sn(.06,.18,4),"#8a7560");s.position.set(t*1.5,1.05,0),i.add(s)}return i},mariposa(){let i=new Ut,t=[];for(let e of[-1,1]){let n=new Ut,s=new zt(new Ji(.3,8),new Ee({color:8382624,side:Mn,transparent:!0,opacity:.9}));s.position.x=e*.28,n.add(s),i.add(n),t.push([n,e])}return Be(.05,"#3a3a50",0,0,0,1,1,1,i),Ls(i,12512200,1.6,0,0,0,.35),i.userData.anim=e=>{let n=Math.sin(e*14)*.9;t.forEach(([s,r])=>{s.rotation.y=r*n})},i}},nt={on:!1,root:null,markers:{},models:{},vis:null,vcur:null,vnext:25,sel:null,rit:{te:0,riego:0},mem:0},Rb=i=>Cc.find(t=>t.id===i),Dr=()=>!!lt.repaired.techo,Nm=(i,t,e)=>{try{let n=new Ms(new P(i,30,t),new P(0,-1,0),0,60);n.camera=dn;let s=n.intersectObjects($t.children,!0).filter(r=>r.object.isMesh&&!r.object.userData.hab&&r.object.visible);return s.length?s[0].point.y:e}catch{return e}};function Zu(){let i=[];return nt.root&&(nt.on&&Object.values(nt.markers).forEach(t=>i.push(t)),nt.vcur&&i.push(nt.vcur.g)),i}var Lc=()=>{for(let i of Nr){let t=lt.decor[i.id],e=nt.models[i.id];if(e&&e.id!==t&&(nt.root.remove(e.g),delete nt.models[i.id]),t&&!nt.models[i.id]){let n=Dm[t]();n.userData.hab=!0,n.traverse(r=>{r.userData.hab=!0});let s=$a(i);n.position.set(s[0],s[1],s[2]),nt.root.add(n),nt.models[i.id]={id:t,g:n}}}},$a=i=>(i.kind==="roca"&&!i._y&&(i._y=Nm(i.p[0],i.p[2],i.p[1])),i.kind==="roca"?[i.p[0],i._y,i.p[2]]:i.p);function Um(){nt.root=new Ut,nt.root.userData.hab=!0,$t.add(nt.root);for(let i of Nr){let t=new Ut,e=new zt(new di(.62,.05,6,28),new Ee({color:16771512,transparent:!0,opacity:.7,depthTest:!1}));e.rotation.x=Math.PI/2,e.renderOrder=9,t.add(e);let n=new zt(new hn(.95,8,6),new Ee({visible:!1}));t.add(n),t.userData.itemId="slot:"+i.id,t.userData.hab=!0,e.userData.hab=!0,n.userData.hab=!0,t.visible=!1;let s=$a(i),r=i.kind==="colgante"?-.9:i.kind==="pared"?0:.9;t.position.set(s[0],s[1]+r,s[2]),i.kind==="pared"&&(e.rotation.x=0),nt.root.add(t),nt.markers[i.id]=t}Nb(),Lc(),vi(),window.__habd={H:nt,SLOTS:Nr,place:Vm,spawn:Fm,state:lt,DM:Cc,show:i=>{nt.on=i,km()}}}var Cb={gato:[2.6,ft+1.12,3.45,.2],zorro:[-5.6,0,.9,.6],buho:[6.7,ft+1.35,3.75,0],mariposa:[3.4,ft+2.4,3.4,0]};function Fm(i){if(nt.vcur)return;let t=Object.keys(Hu),e=i||t[Math.random()*t.length|0];if(e===nt.vlast&&!i)return;nt.vlast=e;let n=Ab[e]();n.userData.itemId="visitante",n.userData.hab=!0,n.traverse(r=>{r.userData.hab=!0,r.userData.itemId||(r.userData.itemId="visitante")});let s=Cb[e].slice();e==="zorro"&&(s[1]=Nm(s[0],s[2],ft-1.3)),n.position.set(s[0],s[1],s[2]),n.rotation.y=s[3],n.scale.setScalar(.01),nt.root.add(n),nt.vcur={k:e,g:n,t:0,life:50,done:!1,base:s};try{Qt.chime((s[0]-1.5)/12,2)}catch{}UX.cap("Llega un visitante",3e4)}function Ib(){let i=nt.vcur;if(!i||i.done)return;let t=Hu[i.k],e=lt.vis[i.k]||0;lt.vis[i.k]=e+1,i.done=!0,i.t=Math.max(i.t,i.life-3.5);let n=t.notes[e%t.notes.length];lt.notes.includes(n)||lt.notes.push(n),Dc(2);let s=n;e===0&&t.gift&&!lt.own[t.gift]&&(lt.own[t.gift]=!0,s+=" \xB7 Te dej\xF3: "+Rb(t.gift).name),Fe(s),Cs([i.g.position.x,i.g.position.y+.5,i.g.position.z]),UX.hap([10,50,10]);try{Qt.chime((i.g.position.x-1.5)/12,3)}catch{}vi(),Vn()}var Dc=i=>{lt.mem=(lt.mem||0)+i,vi()},Om=90;function Pb(){if(nt.rit.te>0)return;nt.rit.te=Om,nt.teaT=7,Dc(1),Fe("Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.");try{Qt.chime(-.4,1)}catch{}UX.hap([8,40,8]),UX.cap("Tetera",2e4),nt.tea||(nt.tea=Dm.tetera(),nt.tea.userData.hab=!0,nt.tea.traverse(t=>t.userData.hab=!0),nt.root.add(nt.tea));let i=$a(Nr[0]);nt.tea.position.set(i[0],i[1],i[2]),nt.tea.visible=!0,Vn()}function Lb(){if(!(nt.rit.riego>0)){if(!lt.repaired.plantas){Fe("Primero repara las plantas");return}nt.rit.riego=Om,Dc(1),Cs([6.9,ft+1.2,3]),Cs([-2.4,ft+1.2,3.3]),Fe("Riegas las plantas. Huelen a campo."),UX.hap([8,40,8]),Vn()}}var Pc=[];function Db(i,t){if(!le.started||!Dr()){Pc.forEach(r=>r.visible=!1);return}let e=Cm(),n=Lm[e];if(!Pc.length)for(let r=0;r<46;r++){let a=Ue(Ne,16777215,.32+Math.random()*.22,0,!1);a.userData.p={x:Math.random()*24-9,y:Math.random()*14,z:Math.random()*14-5,ph:Math.random()*6.3},a.userData.hab=!0,nt.root.add(a),Pc.push(a)}let s=n[0]<<16|n[1]<<8|n[2];for(let r of Pc){let a=r.userData.p,o=e===1?.5:e===3?.9:e===2?1.3:1.1;a.y+=(e===1?o:-o)*i,a.x+=Math.sin(t*.6+a.ph)*.5*i+.25*i,a.y<-1&&(a.y=14),a.y>14&&(a.y=-1),a.x>15&&(a.x=-9),r.position.set(a.x,a.y+ft-1,a.z),r.visible=!0,r.material.color.setHex(s),r.material.opacity=e===1?.4+.25*Math.sin(t*2+a.ph):.75}}var Yu=14;function Bm(i,t){if(!nt.root)return;nt.rit.te=Math.max(0,nt.rit.te-i),nt.rit.riego=Math.max(0,nt.rit.riego-i),nt.teaT>0&&(nt.teaT-=i,nt.teaT<=0&&nt.tea&&(nt.tea.visible=!1),nt.tea&&!nt.models.porcheI&&(nt.tea.visible=nt.teaT>0));let e=1;for(let n in nt.models){let s=nt.models[n].g;s.userData.anim&&s.userData.anim(t),s.traverse(r=>{r.isSprite&&r.userData.gl!=null&&r.material&&(r.material.opacity=r.userData.gl*(.85+.15*Math.sin(t*3+s.id)))})}if(nt.tea&&nt.tea.visible&&nt.tea.userData.anim(t),nt.vcur){let n=nt.vcur;n.t+=i;let s=Math.max(.01,Math.min(1,n.t/1.5,(n.life-n.t)/1.5));n.g.scale.setScalar(s*(n.k==="mariposa"?3:2)),n.g.userData.anim&&n.g.userData.anim(t),n.k==="mariposa"&&n.g.position.set(n.base[0]+Math.sin(t*.6)*1.6,n.base[1]+Math.sin(t*.9)*.5,n.base[2]+Math.cos(t*.5)*.8),n.t>=n.life&&(nt.root.remove(n.g),nt.vcur=null)}if(le.started&&Dr()&&!nt.vcur&&(nt.vnext-=i,nt.vnext<=0&&(nt.vnext=80+Math.random()*70,Fm())),Yu-=i,Yu<=0&&(Yu=24+Math.random()*20,Object.values(lt.decor).includes("campanilla"))){UX.cap("Campanilla de viento",2e4);try{Qt.chime(.5,4)}catch{}}if(nt.on){let n=.65+.3*Math.sin(t*2.6);for(let s in nt.markers){let r=nt.markers[s];r.children[0].material.opacity=nt.sel===s.replace("slot:","")?1:n}}if(Db(i,t),nt.btn){let n=Dr();nt.btn.hidden===n&&(nt.btn.hidden=!n)}}function zm(i){return i==="visitante"?(Ib(),!0):typeof i=="string"&&i.startsWith("slot:")?(nt.sel=i.slice(5),vi(),!0):!1}function Lr(i,t,e,n){let s=document.createElement("button");return s.type="button",s.className="chip "+(e||""),s.style.cssText="min-width:0;align-self:center;white-space:nowrap;flex-direction:row",s.textContent=i,n&&(s.disabled=!0),s.onclick=t,s}function Nb(){let i=fe("top");nt.btn=document.createElement("button"),nt.btn.id="habBtn",nt.btn.type="button",nt.btn.textContent="Habitar",nt.btn.hidden=!0,fe("mats").after(nt.btn),nt.btn.onclick=()=>{nt.on=!nt.on,nt.sel=null,km()},nt.panel=document.createElement("div"),nt.panel.id="hab",nt.panel.style.cssText="display:none;gap:14px;align-items:flex-start;min-width:max-content",fe("panel").appendChild(nt.panel),setTimeout(()=>{Dr()&&Am(lt)>0&&Fe("Una carta nueva te espera en el diario")},4e3);let t=Dr();setInterval(()=>{let e=Dr();e!==t&&(t=e,e&&Fe("La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB")),nt.on&&(nt.rit.te>0||nt.rit.riego>0)&&vi()},1e3)}function km(){if(nt.on)for(let i of Nr){let t=nt.markers[i.id],e=$a(i),n=i.kind==="colgante"?-.9:i.kind==="pared"?0:.9;t.position.set(e[0],e[1]+n,e[2])}fe("chips").style.display=nt.on?"none":"",nt.btn.textContent=nt.on?"Volver a reparar":"Habitar";for(let i in nt.markers)nt.markers[i].visible=nt.on;vi()}function vi(){if(!nt.panel)return;if(!nt.on){nt.panel.style.display="none";return}nt.panel.style.display="flex",nt.panel.textContent="";let i=document.createElement("div");i.className="grp";let t=document.createElement("span");t.className="lab",t.textContent="Recuerdos: "+(lt.mem||0),i.appendChild(t);let e=(r,a,o)=>i.appendChild(Lr(o>0?r+" \xB7 "+Math.ceil(o)+" s":r,a,"",o>0));e("Preparar t\xE9",Pb,nt.rit.te),e("Regar plantas",Lb,nt.rit.riego),i.appendChild(Lr("Diario de la caba\xF1a",Ub,"")),i.appendChild(Lr(Pm(),()=>{Im(),vi()},"")),nt.panel.appendChild(i);let n=nt.sel&&Tb(nt.sel),s=document.createElement("div");if(s.className="grp",n){let r=document.createElement("span");r.className="lab",r.textContent=n.n,s.appendChild(r),lt.decor[n.id]&&s.appendChild(Lr("Quitar",()=>{delete lt.decor[n.id],Lc(),vi(),Vn()},"")),Cc.filter(a=>a.kind===n.kind&&lt.decor[n.id]!==a.id).forEach(a=>{let o=!!lt.own[a.id];s.appendChild(Lr(o?a.name:a.name+" \xB7 "+a.cost,()=>Vm(n,a),o?"done":(lt.mem||0)>=a.cost?"ready":"locked"))})}else{let r=document.createElement("span");r.className="loot",r.style.alignSelf="center",r.textContent="Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.",s.appendChild(r)}nt.panel.appendChild(s)}function Vm(i,t){if(!lt.own[t.id]){if((lt.mem||0)<t.cost){Fe("Te faltan "+(t.cost-(lt.mem||0))+" recuerdos. Prepara t\xE9 o espera visitas.");return}lt.mem-=t.cost,lt.own[t.id]=!0}for(let n of Object.keys(lt.decor))lt.decor[n]===t.id&&delete lt.decor[n];lt.decor[i.id]=t.id,Lc();let e=$a(i);Cs([e[0],e[1]+1,e[2]]);try{Qt.chime((e[0]-1.5)/12,2)}catch{}UX.hap([10,40,10]),Fe(t.name+" colocado"),vi(),Vn()}function Ub(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(20,22,48,.6)";let t=document.createElement("div");t.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(88vw,420px);max-height:70vh;overflow:auto;font:15px/1.45 system-ui";let e=document.createElement("h2");if(e.style.cssText="margin:0 0 10px;font:600 1.1rem system-ui",e.textContent="Diario de la caba\xF1a",t.appendChild(e),!lt.notes.length){let s=document.createElement("p");s.textContent="A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.",t.appendChild(s)}lt.notes.forEach(s=>{let r=document.createElement("p");r.style.margin="0 0 10px",r.textContent="\xB7 "+s,t.appendChild(r)}),wm(t,lt,s=>s,Dc,Vn);let n=Lr("Cerrar",()=>i.remove(),"");t.appendChild(n),i.appendChild(t),i.onclick=s=>{s.target===i&&i.remove()},document.body.appendChild(i)}var Hm=()=>{nt.root&&(Lc(),vi())};var Ju=new Ms,Gm=new at,Fb=()=>Object.values(ke).map(i=>i.g).concat([je],Zu());function Nc(i){let t=kn.getBoundingClientRect();Gm.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),Ju.setFromCamera(Gm,dn);{let n=Zu();if(n.length){let s=Ju.intersectObjects(n,!0);for(let r of s){let a=r.object;for(;a&&!a.userData.itemId;)a=a.parent;if(a&&String(a.userData.itemId).startsWith("slot:"))return{id:a.userData.itemId,point:r.point}}}}let e=Ju.intersectObjects(Fb().concat(mc),!0);for(let n of e){if(!Fu(n.object))continue;let s=n.object;for(;s&&!s.userData.itemId;)s=s.parent;return s?{id:s.userData.itemId,point:n.point}:{id:null,point:n.point}}return{id:null}}var $u=0,Ku=[0,0],Ob=(i,t)=>Ya(i,t,Ps()*.8).length>0,Bi=new Map,Hn=null,Pn=null,ju=0,Ka=0,Wm=0,zi=null,Xm=0,qm=0,Gn;function Ym(){Gn=document.createElement("div"),Gn.style.cssText="position:fixed;pointer-events:none;z-index:4;width:70px;height:70px;margin:-35px 0 0 -35px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 0 14px rgba(255,255,255,.25);opacity:0;transition:opacity .2s",document.body.appendChild(Gn)}var Zm=()=>!Hn;function Jm(){kn.addEventListener("pointerdown",t=>{if(!le.started)return;if(kn.setPointerCapture(t.pointerId),Bi.set(t.pointerId,{x:t.clientX,y:t.clientY}),Qt.resume(),Bi.size===2){Hn="pinch";let[r,a]=[...Bi.values()];ju=Math.hypot(r.x-a.x,r.y-a.y);return}let e=Nc(t);Pn={x:t.clientX,y:t.clientY,t:performance.now(),moved:0,id:e.id};let n=performance.now();n-$u<320&&Math.hypot(t.clientX-Ku[0],t.clientY-Ku[1])<30?(Cr(),$u=0):($u=n,Ku=[t.clientX,t.clientY]);let s=Ob(t.clientX,t.clientY);t.button===2||t.shiftKey?Hn="pan":Hn=s||e.id&&rm(e.id)?"scrub":"orbit",t.pointerType==="mouse"&&t.button===1&&(Hn="pan")}),kn.addEventListener("contextmenu",t=>t.preventDefault()),kn.addEventListener("pointermove",t=>{Hn==="scrub"&&le.started&&(Gn.style.opacity=1,Gn.style.width=Gn.style.height=Ps()*1.6+"px",Gn.style.margin=-Ps()*.8+"px 0 0 "+-Ps()*.8+"px",Gn.style.left=t.clientX+"px",Gn.style.top=t.clientY+"px");let e=Bi.get(t.pointerId);if(!e)return;let n=t.clientX-e.x,s=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,Hn==="pinch"&&Bi.size===2){let[r,a]=[...Bi.values()],o=Math.hypot(r.x-a.x,r.y-a.y);dt.tr=pe(dt.tr*ju/o,9,34),ju=o,Xa(n/2,s/2);return}if(Gn.style.left=t.clientX+"px",Gn.style.top=t.clientY+"px",!!Pn){if(Pn.moved+=Math.hypot(n,s),Hn==="pan"){Xa(n,s);return}if(Hn==="orbit")dt.tth=pe(dt.tth-n*.006,-.95,.95),dt.tph=pe(dt.tph+s*.004,.03,.42);else if(Hn==="scrub"){let r=Math.hypot(n,s),a=Ya(t.clientX,t.clientY,Ps());if(a.length){let o=pe(r/16,0,1)*.08;a.forEach(c=>{c.m.userData.s=Math.max(0,c.m.userData.s-o*(1-.4*c.dd/Ps())),Ni(c.m)}),zi=Nc(t).point||a[0].m.getWorldPosition(new P),Wm=pe(r/20,0,1),Ka=performance.now(),!Pn.hapd&&Ka-qm>1200&&(Pn.hapd=!0,qm=Ka,UX.hap(6)),Math.random()<.5&&Pu(zi.x,zi.y+.1,zi.z+.1,1,16777215,1.2,1.2),Qt.scrub(Wm),clearTimeout(Xm),Xm=setTimeout(()=>{Oi(),Vn()},700)}else Qt.scrub(0)}}});let i=t=>{if(Bi.has(t.pointerId)){if(Bi.delete(t.pointerId),Qt.scrub(0),zi=null,Gn.style.opacity=0,Pn&&Pn.moved<8&&performance.now()-Pn.t<450&&Pn.id&&Hn!=="pinch"){zm(Pn.id)||Pn.id==="gato"&&mm();let e=Au(Pn.id);e&&Ja(e)}Bi.size===0&&(Pn=null,Hn=null)}};kn.addEventListener("pointerup",i),kn.addEventListener("pointercancel",i),kn.addEventListener("wheel",t=>{le.started&&(t.preventDefault(),dt.tr=pe(dt.tr*(1+t.deltaY*.001),9,34))},{passive:!1})}function $m(i){let t=zi&&lt.repaired.barandal&&performance.now()-Ka<400;t&&Ce.handL.position.set(zi.x,zi.y+1.2,zi.z+1.2),Ce.handL.intensity+=((t?2.4:0)-Ce.handL.intensity)*Math.min(1,i*6),performance.now()-Ka>200&&Qt.scrub(0)}Ip();Mp();Op();Gp();Qp();tm();em();te.traverse(i=>{i.isMesh&&!i.userData.item&&(i.castShadow=!0,i.receiveShadow=!0)});Object.values(ke).forEach(i=>i.blobs.forEach(t=>{t.castShadow=!1}));bp();Object.values(ke).forEach(i=>i.blobs.forEach(Ni));lm(i=>{Du(i),Ja(i)});Xp();Rp(Fe);Er();Oi();Za();nm();Ym();cm(Du);pm();Lp();Jm();PZ.ctx=()=>Qt.ctx;PZ.started=()=>le.started;dm(Mm);fe("go").onclick=()=>{try{Qt.init(),Qt.resume(),Qt.rain(le.rainOn),Qt.setMood(as(),1)}catch{}fe("start").hidden=!0,le.started=!0,Rs()===Ze.length&&(Ie.armT=le.T+3),setTimeout(()=>{fe("hint").style.opacity=0},12e3)};im();vm();Dp();Gu(UX);Xu(UX);qu(UX);Um();window.__habReset=Hm;var Qu=performance.now(),td=0,Uc=0,ed=0,Fc=0,Oc=Math.min(devicePixelRatio||1,1.5);function Km(i){if(requestAnimationFrame(Km),PZ.on){Qu=i;return}let t=Math.min(.05,(i-Qu)/1e3);if(Qu=i,le.T+=t,Uc+=t,ed++,Uc>3){let e=Uc/ed;Uc=0,ed=0,Fc=e>.027?Fc+1:0,Fc>=2&&Oc>1&&(Fc=0,Oc=Math.max(1,Oc-.25),zn.setPixelRatio(Oc),gc())}le.started&&(Ge.next-=t,Ge.next<=0&&(Ge.next=50+Math.random()*80,ku()),ym(t),!Ie.on&&!Ie.shown&&le.T>Ie.armT&&Rs()===Ze.length&&Vu(),bm(t)),sm(t,Zm()),Np(t),$m(t),Wp(t,as(),!!lt.repaired.nichos),Bp(t),qp(t),gm(t,le.T),Bm(t,le.T),td-=t,td<=0&&(td=.5,Oi(),hm(),Qt.setMood(as(),1)),Qt.update(-3,1,le.T),zn.render($t,dn)}fm();UX.init();requestAnimationFrame(Km);window.__cab={shoot:ku,celebrar:()=>{Ie.shown=!1,Vu()},star:Ge,fest:Ie,fl2:os,get T(){return le.T},cat:je,dirtyNear:Ya,resetCam:Cr,panBy:Xa,zoomBy:Rr,state:lt,IT:ke,ITEMS:Ze,C:dt,attempt:Ja,measure:Ec,cleanOf:Uu,applyVisuals:Er,updateUI:Oi,pick:Nc,cam:dn,toast:Fe,get started(){return le.started}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
