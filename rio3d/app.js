(()=>{(function(){if(window.UX)return;let i=["es","en","ja"],t={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},e={get(x,d){try{let m=localStorage.getItem(x);return m===null?d:m}catch{return d}},set(x,d){try{localStorage.setItem(x,d)}catch{}}},n=e.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,o=[],a=window.UX={lang:n,onLang:null,add(x){x.forEach(d=>r.set(d[0],d))},rx(x){x.forEach(d=>o.push(d))},tr(x){if(n==="es"||typeof x!="string")return x;let d=x.trim();if(!d)return x;let m=r.get(d);if(m)return x.replace(d,m[s]);for(let[_,b]of o){let y=d.match(_);if(y)return x.replace(d,b(y,n==="en"?1:2,a.tr))}return x},init(){if(n==="es")return;document.documentElement.lang=n;let x=d=>{if(d.nodeType===3){let b=a.tr(d.nodeValue);b!==d.nodeValue&&(d.nodeValue=b);return}if(d.nodeType!==1||d.tagName==="SCRIPT"||d.tagName==="STYLE")return;let m=d.getAttribute&&d.getAttribute("aria-label");if(m){let b=a.tr(m);b!==m&&d.setAttribute("aria-label",b)}let _=d.getAttribute&&d.getAttribute("title");if(_){let b=a.tr(_);b!==_&&d.setAttribute("title",b)}d.childNodes.forEach(x)};x(document.body),new MutationObserver(d=>{for(let m of d)m.type==="characterData"?x(m.target):m.addedNodes.forEach(x)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(x){if(e.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(x);return}if(!a._sw){let d=document.createElement("label");d.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let m=document.createElement("input");m.type="checkbox",m.setAttribute("switch",""),d.appendChild(m),document.body.appendChild(d),a._sw=d}a._sw.click()}catch{}},subsOn:()=>e.get("rio3d-subs","0")==="1",cap(x,d){if(!a.subsOn())return;let m=performance.now(),_=a._cl||(a._cl={});if(_[x]&&m-_[x]<(d||9e3))return;_[x]=m;let b=document.getElementById("uxcap");b||(b=document.createElement("div"),b.id="uxcap",b.setAttribute("aria-live","polite"),b.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(b)),b.textContent="["+a.tr(x)+"]",b.style.opacity=1,clearTimeout(a._ct),a._ct=setTimeout(()=>b.style.opacity=0,2600)},btns(x,d){d=d||{};let m=(I,D)=>{let C=document.createElement("button");return C.type="button",C.id=I,C.className=x||"",C.onclick=D,C},_=[],b=m("uxLang",()=>{let I=i[(i.indexOf(n)+1)%3];e.set("rio3d-lang",I);try{a.onLang&&a.onLang()}catch{}location.reload()});b.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+t[n],_.push(b);let y=m("uxSubs",()=>{e.set("rio3d-subs",a.subsOn()?"0":"1"),y.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});y.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",_.push(y);let S=m("uxHap",()=>{let I=e.get("rio3d-hap","1")==="1";e.set("rio3d-hap",I?"0":"1"),S.textContent=I?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",I||a.hap(15)});if(S.textContent=e.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",_.push(S),d.hand){let I={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},D=["0","r","l"],C=O=>{document.body.classList.remove("hand-r","hand-l"),O!=="0"&&document.body.classList.add("hand-"+O)},U=e.get("rio3d-hand","0");I[U]||(U="0"),C(U);let G=m("uxHand",()=>{U=D[(D.indexOf(U)+1)%3],e.set("rio3d-hand",U),C(U),G.textContent=I[U]});G.textContent=I[U],_.push(G)}let M=m("uxVol",()=>{let I=["1",".7",".4"],D=I.indexOf(String(a.api.vol()).replace("0.","."));a.api.setVol(I[(D+1)%3]),M.textContent=w()}),w=()=>c("Volumen: ","Volume: ","\u97F3\u91CF: ")+Math.round(a.api.vol()*100)+" %";M.textContent=w(),_.push(M);let v=m("uxSoft",()=>{a.api.setSoft(!a.api.soft()),v.textContent=T()}),T=()=>a.api.soft()?c("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):c("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");v.textContent=T(),_.push(v);let R=m("uxSleep",()=>{let I=[0,15,30,45];a.api.sleep(I[(I.indexOf(a.api.sleepMin())+1)%4]),R.textContent=P()}),P=()=>a.api.sleepMin()?c("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+a.api.sleepMin()+" min":c("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(R.textContent=P(),a._sb=()=>{R.textContent=P()},_.push(R),d.wear){let I=m("uxWear",()=>{e.set("ux-wear",e.get("ux-wear","0")==="1"?"0":"1"),I.textContent=D()}),D=()=>e.get("ux-wear","0")==="1"?c("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):c("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");I.textContent=D(),_.push(I)}return _},ask(x,d){let m=document.createElement("div");m.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let _=document.createElement("div");_.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let b=document.createElement("p");b.style.margin="0 0 14px",b.textContent=a.tr(x),_.appendChild(b);let y=(S,M)=>{let w=document.createElement("button");return w.type="button",w.textContent=S,w.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",w.onclick=()=>{m.remove(),M&&M()},w};_.appendChild(y(c("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),_.appendChild(y(c("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),d)),m.appendChild(_),document.body.appendChild(m)}},c=(x,d,m)=>n==="en"?d:n==="ja"?m:x,l={vol:e.get("ux-vol","1"),soft:e.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};a.quiet=!1;let h=()=>{for(let x of l.nodes)try{let d=x.c.currentTime;x.lp.frequency.setTargetAtTime(l.soft?2800:22e3,d,.1),x.g.gain.setTargetAtTime(+l.vol*l.k,d,.1)}catch{}};a.out=(x,d)=>{let m=x.createBiquadFilter();m.type="lowpass",m.frequency.value=l.soft?2800:22e3,m.Q.value=.5;let _=x.createGain();return _.gain.value=+l.vol*l.k,d.connect(m),m.connect(_),_.connect(x.destination),l.nodes.push({c:x,lp:m,g:_}),_},a.pinkSrc=(x,d)=>{let m=x._pink;if(!m){let y=x.sampleRate,S=Math.floor(y*12),M=Math.floor(y*1.5),w=S+M,v=new Float32Array(w),T=0,R=0,P=0,I=0,D=0,C=0,U=0;for(let O=0;O<w;O++){let $=Math.random()*2-1;T=.99886*T+$*.0555179,R=.99332*R+$*.0750759,P=.969*P+$*.153852,I=.8665*I+$*.3104856,D=.55*D+$*.5329522,C=-.7616*C-$*.016898,v[O]=(T+R+P+I+D+C+U+$*.5362)*.2215*.5,U=$*.115926}m=x.createBuffer(1,S,y);let G=m.getChannelData(0);for(let O=0;O<S;O++)G[O]=v[O];for(let O=0;O<M;O++){let $=O/M*Math.PI/2;G[O]=v[O]*Math.sin($)+v[S+O]*Math.cos($)}x._pink=m}let _=x.createBufferSource();_.buffer=m,_.loop=!0;let b=x.createGain();return b.gain.value=d||1,_.connect(b),b.start=(y,S)=>_.start(y||0,S||0),b.stop=y=>_.stop(y),b},a.api={soft:()=>l.soft,setSoft(x){l.soft=!!x,e.set("ux-soft",x?"1":"0"),h()},vol:()=>+l.vol,setVol(x){l.vol=String(x),e.set("ux-vol",l.vol),h()},sleepMin:()=>l.min,sleep(x){l.min=x,l.end=x?Date.now()+x*6e4:0,l.k=1,a.quiet=!1,l.ov&&(l.ov.style.opacity=0),h()}},setInterval(()=>{if(!l.end)return;let x=(l.end-Date.now())/1e3;if(!l.ov){let d=document.createElement("div");d.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(d),l.ov=d}if(x<=0){l.end=0,l.min=0,l.k=0,h(),l.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{l.k=1,a.quiet=!1,h(),l.ov.style.opacity=0,a._sb&&a._sb()},1500);return}x<300&&(a.quiet=!0,l.k=Math.pow(x/300,2),l.ov.style.opacity=(1-x/300)*.6,h())},1e3);{let x=0,d=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(x+=5,x>=d)){d+=1800;let m=document.getElementById("uxrest");m||(m=document.createElement("div"),m.id="uxrest",m.setAttribute("aria-live","polite"),m.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(m)),m.textContent=c("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),m.style.opacity=1,clearTimeout(a._rt),a._rt=setTimeout(()=>m.style.opacity=0,7e3)}},5e3)}a.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),a.add([["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function f(x){let d=document.createElement("div");d.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let m=document.createElement("div");m.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let _=document.createElement("div"),b=document.createElement("div");b.textContent=c("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),b.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let y=document.createElement("button");y.type="button",y.textContent=c("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),y.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",d.append(b,m,_,y),document.body.appendChild(d);let S=0,M=!0,w,v=R=>{M&&(M=!1,clearTimeout(w),d.remove(),x&&x(R))};y.onclick=()=>v(!1);let T=()=>{if(M){if(S>=5)return v(!0);S++,_.textContent=c("Inhala","Breathe in","\u5438\u3063\u3066"),m.style.transition="transform 4s ease-in-out",m.style.transform="scale(1)",a.hap(8),w=setTimeout(()=>{M&&(_.textContent=c("Exhala","Breathe out","\u5410\u3044\u3066"),m.style.transition="transform 6s ease-in-out",m.style.transform="scale(.55)",w=setTimeout(T,6e3))},4e3)}};T()}a.say=x=>{let d=document.getElementById("uxsay");d||(d=document.createElement("div"),d.id="uxsay",d.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(d)),d.textContent=x,d.style.opacity=1,clearTimeout(a._st),a._st=setTimeout(()=>d.style.opacity=0,4200)},a.breathe=f,a.mood=()=>p();function p(){let x=document.getElementById("go");if(!x||document.getElementById("uxmood"))return;let d=document.createElement("div");d.id="uxmood",d.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let m=document.createElement("div");m.textContent=c("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),m.style.cssText="font:600 .95rem system-ui;opacity:.9";let _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let b=document.createElement("div");b.textContent=c("Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"),b.style.cssText="font:400 .72rem system-ui;opacity:.6";let y=null,S={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([M,w,v,T])=>{let R=document.createElement("button");R.type="button",R.textContent=c(w,v,T),R.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",R.onclick=()=>{y=y===M?null:M;for(let P in S)S[P].style.borderColor=P===y?"#ffc77a":"#5a609a",S[P].style.background=P===y?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";a.hap(6)},S[M]=R,_.appendChild(R)}),d.append(m,_,b),x.parentNode.insertBefore(d,x),x.addEventListener("click",()=>{e.set("ux-mood",y||""),y==="tired"&&(a.api.setSoft(!0),+a.api.vol()>.7&&a.api.setVol(".7"),setTimeout(()=>{try{a.say(c("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),y==="rest"&&setTimeout(()=>f(),600),y==="think"&&setTimeout(()=>{try{a.say(c("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let g=a.init;a.init=function(){g.apply(this,arguments);try{p()}catch{}}})();var Vx=()=>{try{return localStorage.getItem("rio3d-hap")!=="0"}catch{return!0}},Lu=null;function sr(i){if(Vx())try{if(navigator.vibrate){navigator.vibrate(i);return}if(!Lu){let t=document.createElement("label");t.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),t.appendChild(e),document.body.appendChild(t),Lu=t}Lu.click()}catch{}}var Du=(i,t,e)=>Math.max(t,Math.min(e,i)),Wi=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],tn=(i,t)=>i+Math.random()*(t-i),ce={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(sr(9),!this.ok())return;this.cap("Nota de linterna");let t=this.ctx.currentTime;this.pluck(Wi[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(Wi[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;this.cap("Salpicadura");let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},vol:1,ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6*this.vol,window.UX?UX.out(t,e):e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let T=0;T<r.length;T++)r[T]=Math.random()*2-1;this.nbuf=s;let o=Math.floor(t.sampleRate*2.8),a=t.createBuffer(2,o,t.sampleRate);for(let T=0;T<2;T++){let R=a.getChannelData(T);for(let P=0;P<o;P++)R[P]=(Math.random()*2-1)*Math.pow(1-P/o,2.6)}let c=t.createConvolver();c.buffer=a;let l=t.createGain();l.gain.value=.38,n.connect(c),c.connect(l),l.connect(e);let h=this.noise(0,.37),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=650;let f=t.createGain();f.gain.value=.07;let p=t.createOscillator();p.frequency.value=.09;let g=t.createGain();g.gain.value=.04,p.connect(g),g.connect(f.gain),p.start(),h.connect(u),u.connect(f),f.connect(e);let x=this.noise(0,1.5),d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=2200,d.Q.value=.7;let m=t.createGain();m.gain.value=.02,x.connect(d),d.connect(m),m.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(T=>{let R=this.panner(T*4,0,0,2,.6);R.connect(e),this.bk[T]=R,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([P,I,D,C],U)=>{let G=this.noise(Math.random()*1.8,P<800?.71:P<1900?1.07:1.52),O=t.createBiquadFilter();O.type="bandpass",O.frequency.value=P,O.Q.value=I;let $=t.createGain();$.gain.value=C;let H=t.createOscillator(),X=t.createGain();H.frequency.value=D*(T>0?1.13:.91),X.gain.value=C*.7,H.connect(X),X.connect($.gain),H.start(),G.connect(O),O.connect($),$.connect(R)})});let _=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let T=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,R=t.currentTime,P=t.createOscillator(),I=t.createGain(),D=tn(450,1100),C=this.panner(this.bkx[T],0,tn(-4,2),2,.6,!0);C.connect(e),P.frequency.setValueAtTime(D,R),P.frequency.exponentialRampToValueAtTime(D*tn(1.4,2),R+.07),I.gain.setValueAtTime(0,R),I.gain.linearRampToValueAtTime(tn(.01,.026),R+.012),I.gain.exponentialRampToValueAtTime(1e-4,R+.1),P.connect(I),I.connect(C),P.start(R),P.stop(R+.12)}setTimeout(_,tn(90,260))}};_();let b=this.noise(Math.random()*1.5,1.21),y=t.createBiquadFilter();y.type="highpass",y.frequency.value=380;let S=t.createBiquadFilter();S.type="lowpass",S.frequency.value=4200;let M=t.createGain();M.gain.value=0;let w=this.panner(0,0,-30,2,.5);b.connect(y),y.connect(S),S.connect(M),M.connect(w),w.connect(e),this.wfG=M,this.wfP=w,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([T,R])=>{let P=t.createStereoPanner();P.pan.value=T,P.connect(e);let I=this.noise(Math.random()*1.8,2.94),D=t.createBiquadFilter();D.type="highpass",D.frequency.value=R;let C=t.createGain();C.gain.value=0,I.connect(D),D.connect(C),C.connect(P),this.rgs.push([C,.07]);let U=this.noise(Math.random()*1.8,1.29),G=t.createBiquadFilter();G.type="bandpass",G.frequency.value=1500,G.Q.value=.6;let O=t.createGain();O.gain.value=0,U.connect(G),G.connect(O),O.connect(P),this.rgs.push([O,.035])}),this.rainLvl=0;let v=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let T=t.currentTime,R=t.createOscillator(),P=t.createGain(),I=this.panner(tn(-4,4),tn(0,1),tn(-4,1),1.5,.7,!0);I.connect(e),R.frequency.setValueAtTime(tn(1800,3200),T),R.frequency.exponentialRampToValueAtTime(tn(900,1400),T+.05),P.gain.setValueAtTime(0,T),P.gain.linearRampToValueAtTime(.02*this.rainLvl,T+.004),P.gain.exponentialRampToValueAtTime(1e-4,T+.07),R.connect(P),P.connect(I),R.start(T),R.stop(T+.09)}setTimeout(v,tn(70,260))}};v(),this.music(),this.padInit()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;i>.5&&this.cap("Lluvia suave"),this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let o=e.createOscillator(),a=e.createGain();o.type="sine",o.frequency.setValueAtTime((i?196:262)*s,n),o.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r,n+t)):(a.gain.setValueAtTime(r,n),a.gain.linearRampToValueAtTime(0,n+t)),o.connect(a),a.connect(this.bus),o.start(n),o.stop(n+t+.1)})},noise(i,t){let e=this.ctx;if(window.UX&&UX.pinkSrc){let s=UX.pinkSrc(e,t);return s.start(0,(i||0)*3),s}let n=e.createBufferSource();return n.buffer=this.nbuf,n.loop=!0,n.start(0,i||0),n},panner(i,t,e,n,s,r){let o=this.ctx.createPanner();return o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=n||2,o.rolloffFactor=s==null?.6:s,o.positionX?(o.positionX.value=i,o.positionY.value=t,o.positionZ.value=e):o.setPosition(i,t,e),o},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));r>.45&&this.cap("Cascada cercana"),this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,o=e||r.currentTime,a=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([c,l],h)=>{let u=r.createOscillator(),f=r.createGain();u.type=h?"sine":"triangle",u.frequency.value=i*c,f.gain.setValueAtTime(0,o),f.gain.linearRampToValueAtTime(t*l,o+.01),f.gain.exponentialRampToValueAtTime(1e-4,o+(h?1.1:2)),u.connect(f),f.connect(a),u.start(o),u.stop(o+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r),c=o.createOscillator(),l=o.createOscillator(),h=o.createGain(),u=o.createGain();c.type="sine",l.type="triangle",c.frequency.setValueAtTime(i*.96,t),c.frequency.exponentialRampToValueAtTime(i,t+.18),l.frequency.setValueAtTime(i*2*.96,t),l.frequency.exponentialRampToValueAtTime(i*2,t+.18);let f=o.createOscillator(),p=o.createGain();f.frequency.value=4.8,p.gain.setValueAtTime(0,t),p.gain.linearRampToValueAtTime(i*.012,t+e*.6),f.connect(p),p.connect(c.frequency),f.start(t),f.stop(t+e+.5),u.gain.value=.1,l.connect(u),u.connect(h),c.connect(h),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(n,t+.35),h.gain.setValueAtTime(n*.85,t+e*.7),h.gain.linearRampToValueAtTime(0,t+e);let g=o.createBufferSource();g.buffer=this.nbuf,g.loop=!0;let x=o.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let d=o.createGain();d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(n*.5,t+.2),d.gain.linearRampToValueAtTime(0,t+e),g.connect(x),x.connect(d),d.connect(a),g.start(t),g.stop(t+e+.1),h.connect(a),c.start(t),l.start(t),c.stop(t+e+.1),l.stop(t+e+.1)},drum(i,t,e){if(!this.ok()||window.UX&&UX.quiet)return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",t*=.42,s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=700,r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(t,i+.04),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(o),o.connect(this.bus),s.start(i),s.stop(i+1);let a=n.createBufferSource();a.buffer=this.nbuf;let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=500;let l=n.createGain();l.gain.setValueAtTime(t*.5,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.1),a.connect(c),c.connect(l),l.connect(this.bus),a.start(i,Math.random()),a.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([c,l,h])=>{let u=o.createOscillator(),f=o.createGain();u.type="sine",u.frequency.value=i*c;let p=(n?7:3)*h;f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(e*l,t+.005),f.gain.exponentialRampToValueAtTime(1e-4,t+p),u.connect(f),f.connect(a),u.start(t),u.stop(t+p+.1)})},next(i,t,e){this.idx=Du(this.idx+Math.floor(Math.random()*4)-1,3,Wi.length-1),this.bell(Wi[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),o=t.currentTime;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+.4),n.connect(s),s.connect(r),r.connect(e),n.start(o,Math.random()),n.stop(o+.45)},bump(i=.6,t=0){if(sr(i>.5?22:12),!this.ok())return;this.cap("Golpe suave de la canoa");let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),o=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),o.gain.setValueAtTime(.16*i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(o),o.connect(s),r.start(n),r.stop(n+.35)},discover(){if(sr([14,70,14]),!this.ok())return;this.cap("Nota de linterna");let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(Wi[t],.12,i+e*.2)),this.bell(Wi[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([c,l],h)=>{let u=i.createOscillator(),f=i.createGain(),p=i.createOscillator(),g=i.createGain();u.type="sine",u.frequency.value=c,f.gain.value=l,p.frequency.value=.05+h*.03,g.gain.value=l*.6,p.connect(g),g.connect(f.gain),u.connect(f),f.connect(this.bus),u.start(),p.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let c=i.currentTime+.05,l=t%8;(t>>3)%4===3?l===0&&this.drum(c,.12,.9):l===0?(this.drum(c,.34,1),this.cap("Tambor lejano")):l===3?this.drum(c,.12,1.35):l===5?this.drum(c,.16,1.15):l===6&&Math.random()<.4&&this.drum(c,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let c=i.currentTime+.2,l=0;if(this.ok()){this.cap("Flauta shakuhachi");let h=2+Math.floor(Math.random()*3),u=tn(-3,3);for(let f=0;f<h;f++){n=Du(n+Math.floor(Math.random()*5)-2,0,7);let p=tn(1.8,3.4);this.flute(Wi[n],c,p,.06,u+tn(-.3,.3),-2.5),c+=p*.88,l+=p*.88}}setTimeout(s,(l+tn(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){this.cap("Campanillas");let c=i.currentTime+.05,l=Wi[5+Math.floor(Math.random()*5)];this.bell(l,c,.045,!1,tn(-5,5),tn(-5,-1)),Math.random()<.5&&this.bell(Wi[5+Math.floor(Math.random()*5)],c+tn(.18,.4),.035,!1,tn(-5,5),tn(-5,-1))}setTimeout(r,tn(3500,8e3))}};setTimeout(r,2500);let o=()=>{if(this.ctx){if(this.ok()){this.cap("Koto");let c=i.currentTime+.05,l=Math.floor(Math.random()*6),h=tn(-4,4);for(let u=0;u<3;u++)this.pluck(Wi[Du(l+[0,2,1][u],0,9)],.06,c+u*.28,h,-2)}setTimeout(o,tn(14e3,24e3))}};setTimeout(o,9e3);let a=()=>{this.ctx&&(this.ok()&&(this.cap("Campana de templo"),this.bell(146.83,i.currentTime+.05,.08,!0,tn(-6,6),-8)),setTimeout(a,tn(35e3,55e3)))};setTimeout(a,16e3)},padInit(){let i=this.ctx,t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=800,t.Q.value=.4;let e=i.createGain();e.gain.value=0,t.connect(e),e.connect(this.bus);let n=[];for(let r=0;r<4;r++){let o=i.createOscillator(),a=i.createOscillator(),c=i.createGain(),l=i.createGain(),h=i.createOscillator(),u=i.createGain();o.type="sine",a.type="triangle",a.detune.value=r%2?7:-7,c.gain.value=.5,l.gain.value=.18,h.frequency.value=.04+r*.017,u.gain.value=.25,h.connect(u),u.connect(c.gain),o.connect(c),a.connect(l),c.connect(t),l.connect(t),o.start(),a.start(),h.start(),n.push([o,a])}this.pad={f:t,pg:e,vs:n,ch:0,t0:0},this.mood={el:.5,lm:-1,sn:0},this.padChord(!0);let s=()=>{this.ctx&&(this.ok()&&this.padChord(),setTimeout(s,15e3+Math.random()*4e3))};setTimeout(s,9e3)},setMood(i,t,e){this.mood={el:i,lm:t,sn:e},this.pad&&this.ok()&&this.padFilter()},padFilter(){let i=this.mood,t=this.pad.f,e=this.ctx.currentTime,n=Math.max(0,Math.min(1,i.el*1.6)),s=420+n*900,r=.045+(1-n)*.012;i.lm===6&&(s+=500),i.lm===5&&(s-=120,r*=1.2),i.lm===2&&(r*=1.1),t.frequency.setTargetAtTime(s,e,2.5),this.pad.pg.gain.setTargetAtTime(this.muted?0:r*this.vol,e,2)},padChord(i){let t=this.ctx,e=this.mood,n=this.pad,s=t.currentTime,r=146.83,o=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,14,15]],a=[[0,7,12,15],[-4,3,7,12],[0,3,7,12],[-4,0,7,15]],c=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],l=e.el>.35?o:e.el>-.05?a:c;n.ch=(n.ch+1+(Math.random()<.3?1:0))%l.length;let h=l[n.ch].slice();(e.lm===3||e.lm===7)&&(h[3]=h[3]+12),e.lm===8&&(h=[h[0],h[0]+7,h[0]+14,h[0]+19]),e.lm===5&&(h=[-12,-5,0,7]),e.lm===6&&(h=h.map((f,p)=>p>1?f+12:f));let u=e.sn===3?-2:e.sn===2?-1:0;n.vs.forEach(([f,p],g)=>{let x=r*Math.pow(2,(h[g]+u)/12);f.frequency.setTargetAtTime(x,s,i?.01:3.2),p.frequency.setTargetAtTime(x*1.002,s,i?.01:3.2)}),this.padFilter()},boom(i){if(!this.ok()||window.UX&&UX.quiet)return;this.cap("Fuegos artificiales");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*5,-9),s=t.createOscillator(),r=t.createGain();s.frequency.setValueAtTime(95,e),s.frequency.exponentialRampToValueAtTime(38,e+.5),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.07,e+.03),r.gain.exponentialRampToValueAtTime(1e-4,e+.7),s.connect(r),r.connect(n),s.start(e),s.stop(e+.8);let o=t.createBufferSource();o.buffer=this.nbuf;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let c=t.createGain();c.gain.setValueAtTime(0,e+.5),c.gain.linearRampToValueAtTime(.035,e+.55),c.gain.exponentialRampToValueAtTime(1e-4,e+1.6),o.connect(a),a.connect(c),c.connect(n),o.start(e+.5,Math.random()),o.stop(e+1.7),sr(8)},roar(){if(!this.ok()||window.UX&&UX.quiet)return;sr([30,60,30,90,40]),this.cap("Rugido del drag\xF3n");let i=this.ctx,t=i.currentTime,e=this.dest(0,-12),n=i.createOscillator(),s=i.createOscillator(),r=i.createGain(),o=i.createBiquadFilter();n.type="sawtooth",s.type="square",n.frequency.setValueAtTime(70,t),n.frequency.linearRampToValueAtTime(110,t+.5),n.frequency.exponentialRampToValueAtTime(48,t+2.2),s.frequency.setValueAtTime(35,t),s.frequency.exponentialRampToValueAtTime(24,t+2.2),o.type="lowpass",o.frequency.setValueAtTime(260,t),o.frequency.linearRampToValueAtTime(900,t+.5),o.frequency.exponentialRampToValueAtTime(140,t+2.2),o.Q.value=4,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.1,t+.3),r.gain.setValueAtTime(.1,t+.9),r.gain.exponentialRampToValueAtTime(1e-4,t+2.4),n.connect(o),s.connect(o),o.connect(r),r.connect(e),n.start(t),s.start(t),n.stop(t+2.5),s.stop(t+2.5);let a=i.createBufferSource();a.buffer=this.nbuf;let c=i.createBiquadFilter();c.type="bandpass",c.frequency.value=420,c.Q.value=1.2;let l=i.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(.05,t+.3),l.gain.exponentialRampToValueAtTime(1e-4,t+1.8),a.connect(c),c.connect(l),l.connect(e),a.start(t,Math.random()),a.stop(t+2)},onCap:null,cap(i){if(!this.onCap)return;let t=performance.now(),e=this._cl||(this._cl={}),n={"Golpe suave de la canoa":1500,"Fuegos artificiales":1500,Salpicadura:9e3,"Lluvia suave":4e4,"Cascada cercana":3e4}[i]||9e3;e[i]&&t-e[i]<n||(e[i]=t,this.onCap(i))},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6*this.vol,this.ctx.currentTime,.05),this.pad&&this.padFilter()},quack(i){if(!this.ok())return;this.cap("Cuac de pato");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3);[[0,420,300],[.14,360,250]].forEach(([s,r,o])=>{let a=t.createOscillator(),c=t.createBiquadFilter(),l=t.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,e+s),a.frequency.exponentialRampToValueAtTime(o,e+s+.1),c.type="bandpass",c.frequency.value=1e3,c.Q.value=2.5,l.gain.setValueAtTime(0,e+s),l.gain.linearRampToValueAtTime(.03,e+s+.015),l.gain.exponentialRampToValueAtTime(1e-4,e+s+.12),a.connect(c),c.connect(l),l.connect(n),a.start(e+s),a.stop(e+s+.14)})},flap(i){if(sr([6,40,6,40,6]),!this.ok())return;this.cap("Aleteo de garza");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3),s=t.createBufferSource();s.buffer=this.nbuf;let r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.8;let o=t.createGain();o.gain.setValueAtTime(0,e);for(let a=0;a<5;a++)o.gain.linearRampToValueAtTime(.05,e+a*.16+.04),o.gain.linearRampToValueAtTime(.006,e+a*.16+.13);o.gain.linearRampToValueAtTime(0,e+.95),s.connect(r),r.connect(o),o.connect(n),s.start(e,Math.random()),s.stop(e+1)},setVol(i){this.vol=i,this.master&&!this.muted&&this.master.gain.setTargetAtTime(.6*i,this.ctx.currentTime,.1),this.pad&&this.padFilter()}};var sm=0,Md=1,rm=2;var Va=1,om=2,Eo=3,Ws=0,Tn=1,me=2,ts=0,Fi=1,kn=2,bd=3,Sd=4,am=5;var mr=100,cm=101,lm=102,hm=103,um=104,dm=200,fm=201,pm=202,mm=203,Ed=204,Td=205,gm=206,xm=207,_m=208,ym=209,vm=210,Mm=211,bm=212,Sm=213,Em=214,ol=0,al=1,cl=2,co=3,ll=4,hl=5,ul=6,dl=7,Xl=0,Tm=1,wm=2,Bi=0,wd=1,Ad=2,Rd=3,Cd=4,Pd=5,Id=6,Ld=7;var Dd=300,Xs=301,gr=302,ql=303,Yl=304,Wa=306,lo=1e3,Yi=1001,fl=1002,vn=1003,Am=1004;var Xa=1005;var Dn=1006,Zl=1007;var qs=1008;var ti=1009,Nd=1010,Ud=1011,To=1012,Jl=1013,Oi=1014,bi=1015,fi=1016,$l=1017,Kl=1018,wo=1020,Fd=35902,Bd=35899,Od=1021,Hd=1022,Si=1023,Ji=1026,Ys=1027,Ao=1028,jl=1029,Zs=1030,Ql=1031;var th=1033,qa=33776,Ya=33777,Za=33778,Ja=33779,eh=35840,nh=35841,ih=35842,sh=35843,rh=36196,oh=37492,ah=37496,ch=37488,lh=37489,$a=37490,hh=37491,uh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,xh=37814,_h=37815,yh=37816,vh=37817,Mh=37818,bh=37819,Sh=37820,Eh=37821,Th=36492,wh=36494,Ah=36495,Rh=36283,Ch=36284,Ka=36285,Ph=36286;var fa=2300,pl=2301,sl=2302,cd=2303,ld=2400,hd=2401,ud=2402;var Rm=3200;var ja=0,Cm=1,ys="",Ln="srgb",pa="srgb-linear",ma="linear",ke="srgb";var rl=7680;var Pm=519,Im=512,Lm=513,Dm=514,Ih=515,Nm=516,Um=517,Lh=518,Fm=519,zd=35044;var kd="300 es",Li=2e3,ho=2001;function Wx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bm(){let i=ga("canvas");return i.style.display="block",i}var Mp={},uo=null;function xa(...i){let t="THREE."+i.shift();uo?uo("log",t,...i):console.log(t,...i)}function Om(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Om(i);let t="THREE."+i.shift();if(uo)uo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Om(i);let t="THREE."+i.shift();if(uo)uo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function lr(...i){let t=i.join(" ");t in Mp||(Mp[t]=!0,jt(...i))}function Hm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zm={[ol]:al,[cl]:ul,[ll]:dl,[co]:hl,[al]:ol,[ul]:cl,[dl]:ll,[hl]:co},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nu=Math.PI/180,ml=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function qx(i,t){return(i%t+t)%t}function Uu(i,t,e){return(1-e)*i+e*t}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yd=class Yd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yd.prototype.isVector2=!0;var ut=Yd,fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==p||h!==g){let d=c*f+l*p+h*g+u*x;d<0&&(f=-f,p=-p,g=-g,x=-x,d=-d);let m=1-a;if(d<.9995){let _=Math.acos(d),b=Math.sin(_);m=Math.sin(m*_)/b,a=Math.sin(a*_)/b,c=c*m+f*a,l=l*m+p*a,h=h*m+g*a,u=u*m+x*a}else{c=c*m+f*a,l=l*m+p*a,h=h*m+g*a,u=u*m+x*a;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zd=class Zd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fu.copy(this).projectOnVector(t),this.sub(Fu)}reflect(t){return this.sub(Fu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zd.prototype.isVector3=!0;var N=Zd,Fu=new N,bp=new fn,Jd=class Jd{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],d=s[3],m=s[6],_=s[1],b=s[4],y=s[7],S=s[2],M=s[5],w=s[8];return r[0]=o*x+a*_+c*S,r[3]=o*d+a*b+c*M,r[6]=o*m+a*y+c*w,r[1]=l*x+h*_+u*S,r[4]=l*d+h*b+u*M,r[7]=l*m+h*y+u*w,r[2]=f*x+p*_+g*S,r[5]=f*d+p*b+g*M,r[8]=f*m+p*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(t,e)),this}rotate(t){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-t)),this}translate(t,e){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jd.prototype.isMatrix3=!0;var le=Jd,Bu=new le,Sp=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ep=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){let i={enabled:!0,workingColorSpace:pa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ke&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ys?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pa]:{primaries:t,whitePoint:n,transfer:ma,toXYZ:Sp,fromXYZ:Ep,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Sp,fromXYZ:Ep,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}var Ce=Yx();function gs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vr,gl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vr===void 0&&(Vr=ga("canvas")),Vr.width=t.width,Vr.height=t.height;let s=Vr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ga("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gs(e[n]/255)*255):e[n]=gs(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zx=0,fo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ou(s[o].image)):r.push(Ou(s[o]))}else r=Ou(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ou(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Jx=0,Hu=new N,qn=class i extends $i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=Dn,o=qs,a=Si,c=ti,l=i.DEFAULT_ANISOTROPY,h=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=ms(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lo:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lo:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Dd;qn.DEFAULT_ANISOTROPY=1;var $d=class $d{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],d=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,y=(p+1)/2,S=(m+1)/2,M=(h+f)/4,w=(u+x)/4,v=(g+d)/4;return b>y&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=w/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=v/r),this.set(n,s,r,e),this}let _=Math.sqrt((d-g)*(d-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(d-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;var on=$d,xl=class extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new qn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_a=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wl=class Wl{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,d)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,d){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Wr.setFromMatrixColumn(t,0).length(),r=1/Wr.setFromMatrixColumn(t,1).length(),o=1/Wr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($x,t,Kx)}lookAt(t,e,n){let s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ds.crossVectors(n,ai),Ds.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ds.crossVectors(n,ai)),Ds.normalize(),Cc.crossVectors(ai,Ds),s[0]=Ds.x,s[4]=Cc.x,s[8]=ai.x,s[1]=Ds.y,s[5]=Cc.y,s[9]=ai.y,s[2]=Ds.z,s[6]=Cc.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],d=n[10],m=n[14],_=n[3],b=n[7],y=n[11],S=n[15],M=s[0],w=s[4],v=s[8],T=s[12],R=s[1],P=s[5],I=s[9],D=s[13],C=s[2],U=s[6],G=s[10],O=s[14],$=s[3],H=s[7],X=s[11],J=s[15];return r[0]=o*M+a*R+c*C+l*$,r[4]=o*w+a*P+c*U+l*H,r[8]=o*v+a*I+c*G+l*X,r[12]=o*T+a*D+c*O+l*J,r[1]=h*M+u*R+f*C+p*$,r[5]=h*w+u*P+f*U+p*H,r[9]=h*v+u*I+f*G+p*X,r[13]=h*T+u*D+f*O+p*J,r[2]=g*M+x*R+d*C+m*$,r[6]=g*w+x*P+d*U+m*H,r[10]=g*v+x*I+d*G+m*X,r[14]=g*T+x*D+d*O+m*J,r[3]=_*M+b*R+y*C+S*$,r[7]=_*w+b*P+y*U+S*H,r[11]=_*v+b*I+y*G+S*X,r[15]=_*T+b*D+y*O+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],d=t[11],m=t[15],_=c*p-l*f,b=a*p-l*u,y=a*f-c*u,S=o*p-l*h,M=o*f-c*h,w=o*u-a*h;return e*(x*_-d*b+m*y)-n*(g*_-d*S+m*M)+s*(g*b-x*S+m*w)-r*(g*y-x*M+d*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],d=t[14],m=t[15],_=e*a-n*o,b=e*c-s*o,y=e*l-r*o,S=n*c-s*a,M=n*l-r*a,w=s*l-r*c,v=h*x-u*g,T=h*d-f*g,R=h*m-p*g,P=u*d-f*x,I=u*m-p*x,D=f*m-p*d,C=_*D-b*I+y*P+S*R-M*T+w*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=(a*D-c*I+l*P)*U,t[1]=(s*I-n*D-r*P)*U,t[2]=(x*w-d*M+m*S)*U,t[3]=(f*M-u*w-p*S)*U,t[4]=(c*R-o*D-l*T)*U,t[5]=(e*D-s*R+r*T)*U,t[6]=(d*y-g*w-m*b)*U,t[7]=(h*w-f*y+p*b)*U,t[8]=(o*I-a*R+l*v)*U,t[9]=(n*R-e*I-r*v)*U,t[10]=(g*M-x*y+m*_)*U,t[11]=(u*y-h*M-p*_)*U,t[12]=(a*T-o*P-c*v)*U,t[13]=(e*P-n*T+s*v)*U,t[14]=(x*b-g*S-d*_)*U,t[15]=(h*S-u*b+f*_)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,d=o*u,m=a*u,_=c*l,b=c*h,y=c*u,S=n.x,M=n.y,w=n.z;return s[0]=(1-(x+m))*S,s[1]=(p+y)*S,s[2]=(g-b)*S,s[3]=0,s[4]=(p-y)*M,s[5]=(1-(f+m))*M,s[6]=(d+_)*M,s[7]=0,s[8]=(g+b)*w,s[9]=(d-_)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Wr.set(s[0],s[1],s[2]).length(),a=Wr.set(s[4],s[5],s[6]).length(),c=Wr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ri.copy(this);let l=1/o,h=1/a,u=1/c;return Ri.elements[0]*=l,Ri.elements[1]*=l,Ri.elements[2]*=l,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=u,Ri.elements[9]*=u,Ri.elements[10]*=u,e.setFromRotationMatrix(Ri),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Li,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Li)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ho)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Li,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Li)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ho)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Wl.prototype.isMatrix4=!0;var Me=Wl,Wr=new N,Ri=new Me,$x=new N(0,0,0),Kx=new N(1,1,1),Ds=new N,Cc=new N,ai=new N,Tp=new Me,wp=new fn,Di=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wp.setFromEuler(this),this.setFromQuaternion(wp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jx=0,Ap=new N,Xr=new fn,ls=new Me,Pc=new N,ta=new N,Qx=new N,t_=new fn,Rp=new N(1,0,0),Cp=new N(0,1,0),Pp=new N(0,0,1),Ip={type:"added"},e_={type:"removed"},qr={type:"childadded",child:null},zu={type:"childremoved",child:null},En=class i extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Di,n=new fn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new le}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(Rp,t)}rotateY(t){return this.rotateOnAxis(Cp,t)}rotateZ(t){return this.rotateOnAxis(Pp,t)}translateOnAxis(t,e){return Ap.copy(t).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rp,t)}translateY(t){return this.translateOnAxis(Cp,t)}translateZ(t){return this.translateOnAxis(Pp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pc.copy(t):Pc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(ta,Pc,this.up):ls.lookAt(Pc,ta,this.up),this.quaternion.setFromRotationMatrix(ls),s&&(ls.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(ls),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ip),qr.child=t,this.dispatchEvent(qr),qr.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e_),zu.child=t,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ip),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,Qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new N(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},n_={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let d=e.getJointPose(x,n),m=this._getHandJoint(l,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function ku(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=qx(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ku(o,r,t+1/3),this.g=ku(o,r,t),this.b=ku(o,r,t-1/3)}return Ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){let n=km[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Ce.workingToColorSpace(zn.copy(this),t),Math.round(Te(zn.r*255,0,255))*65536+Math.round(Te(zn.g*255,0,255))*256+Math.round(Te(zn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.workingToColorSpace(zn.copy(this),e);let n=zn.r,s=zn.g,r=zn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.workingToColorSpace(zn.copy(this),e),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Ln){Ce.workingToColorSpace(zn.copy(this),t);let e=zn.r,n=zn.g,s=zn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ns),this.setHSL(Ns.h+t,Ns.s+e,Ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ns),t.getHSL(Ic);let n=Uu(Ns.h,Ic.h,e),s=Uu(Ns.s,Ic.s,e),r=Uu(Ns.l,Ic.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new pt;pt.NAMES=km;var va=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hr=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ci=new N,hs=new N,Gu=new N,us=new N,Yr=new N,Zr=new N,Lp=new N,Vu=new N,Wu=new N,Xu=new N,qu=new on,Yu=new on,Zu=new on,ps=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ci.subVectors(t,e),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ci.subVectors(s,e),hs.subVectors(n,e),Gu.subVectors(t,e);let o=Ci.dot(Ci),a=Ci.dot(hs),c=Ci.dot(Gu),l=hs.dot(hs),h=hs.dot(Gu),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,us)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,us.x),c.addScaledVector(o,us.y),c.addScaledVector(a,us.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qu.setScalar(0),Yu.setScalar(0),Zu.setScalar(0),qu.fromBufferAttribute(t,e),Yu.fromBufferAttribute(t,n),Zu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qu,r.x),o.addScaledVector(Yu,r.y),o.addScaledVector(Zu,r.z),o}static isFrontFacing(t,e,n,s){return Ci.subVectors(n,e),hs.subVectors(t,e),Ci.cross(hs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Ci.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Yr.subVectors(s,n),Zr.subVectors(r,n),Vu.subVectors(t,n);let c=Yr.dot(Vu),l=Zr.dot(Vu);if(c<=0&&l<=0)return e.copy(n);Wu.subVectors(t,s);let h=Yr.dot(Wu),u=Zr.dot(Wu);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Yr,o);Xu.subVectors(t,r);let p=Yr.dot(Xu),g=Zr.dot(Xu);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Zr,a);let d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return Lp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Lp,a);let m=1/(d+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Yr,o).addScaledVector(Zr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ki=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pi):Pi.fromBufferAttribute(r,o),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lc.copy(n.boundingBox)),Lc.applyMatrix4(t.matrixWorld),this.union(Lc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),Dc.subVectors(this.max,ea),Jr.subVectors(t.a,ea),$r.subVectors(t.b,ea),Kr.subVectors(t.c,ea),Us.subVectors($r,Jr),Fs.subVectors(Kr,$r),rr.subVectors(Jr,Kr);let e=[0,-Us.z,Us.y,0,-Fs.z,Fs.y,0,-rr.z,rr.y,Us.z,0,-Us.x,Fs.z,0,-Fs.x,rr.z,0,-rr.x,-Us.y,Us.x,0,-Fs.y,Fs.x,0,-rr.y,rr.x,0];return!Ju(e,Jr,$r,Kr,Dc)||(e=[1,0,0,0,1,0,0,0,1],!Ju(e,Jr,$r,Kr,Dc))?!1:(Nc.crossVectors(Us,Fs),e=[Nc.x,Nc.y,Nc.z],Ju(e,Jr,$r,Kr,Dc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new N,new N,new N,new N,new N,new N,new N,new N],Pi=new N,Lc=new Ki,Jr=new N,$r=new N,Kr=new N,Us=new N,Fs=new N,rr=new N,ea=new N,Dc=new N,Nc=new N,or=new N;function Ju(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){or.fromArray(i,r);let a=s.x*Math.abs(or.x)+s.y*Math.abs(or.y)+s.z*Math.abs(or.z),c=t.dot(or),l=e.dot(or),h=n.dot(or);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var yn=new N,Uc=new ut,i_=0,Kt=class extends $i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uc.fromBufferAttribute(this,e),Uc.applyMatrix3(t),this.setXY(e,Uc.x,Uc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix3(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ma=class extends Kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends Kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Kt{constructor(t,e,n){super(new Float32Array(t),e,n)}},s_=new Ki,na=new N,$u=new N,ji=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):s_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);let e=na.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add($u)),this.expandByPoint(na.copy(t.center).sub($u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},r_=0,yi=new Me,Ku=new En,jr=new N,ci=new Ki,ia=new Ki,Cn=new N,ue=class i extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wx(t)?ba:Ma)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return Ku.lookAt(t),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(ci.min,ia.min),ci.expandByPoint(Cn),Cn.addVectors(ci.max,ia.max),ci.expandByPoint(Cn)):(ci.expandByPoint(ia.min),ci.expandByPoint(ia.max))}ci.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Cn.fromBufferAttribute(a,l),c&&(jr.fromBufferAttribute(t,l),Cn.add(jr)),s=Math.max(s,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new N,c[v]=new N;let l=new N,h=new N,u=new N,f=new ut,p=new ut,g=new ut,x=new N,d=new N;function m(v,T,R){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),d.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[v].add(x),a[T].add(x),a[R].add(x),c[v].add(d),c[T].add(d),c[R].add(d))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let v=0,T=_.length;v<T;++v){let R=_[v],P=R.start,I=R.count;for(let D=P,C=P+I;D<C;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let b=new N,y=new N,S=new N,M=new N;function w(v){S.fromBufferAttribute(s,v),M.copy(S);let T=a[v];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(M,T);let P=y.dot(c[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,P)}for(let v=0,T=_.length;v<T;++v){let R=_[v],P=R.start,I=R.count;for(let D=P,C=P+I;D<C;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,d=c.length;x<d;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let m=0;m<h;m++)f[g++]=l[p++]}return new Kt(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Xn=new N,mo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix4(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyNormalMatrix(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.transformDirection(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ju=new N,o_=new N,a_=new le,Ii=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ju.subVectors(n,e).cross(o_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ju),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||a_.getNormalMatrix(t),s=this.coplanarPoint(ju).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},c_=0,vi=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Fi,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qi=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qr,sa=new N,to=new N,eo=new N,no=new ut,ra=new ut,Gm=new Me,Fc=new N,oa=new N,Bc=new N,Dp=new ut,Qu=new ut,Np=new ut,xs=class extends En{constructor(t=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sa(e,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new mo(n,3,0,!1)),Qr.setAttribute("uv",new mo(n,2,3,!1))}this.geometry=Qr,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),Gm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-eo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Oc(Fc.set(-.5,-.5,0),eo,o,to,s,r),Oc(oa.set(.5,-.5,0),eo,o,to,s,r),Oc(Bc.set(.5,.5,0),eo,o,to,s,r),Dp.set(0,0),Qu.set(1,0),Np.set(1,1);let a=t.ray.intersectTriangle(Fc,oa,Bc,!1,sa);if(a===null&&(Oc(oa.set(-.5,.5,0),eo,o,to,s,r),Qu.set(0,1),a=t.ray.intersectTriangle(Fc,Bc,oa,!1,sa),a===null))return;let c=t.ray.origin.distanceTo(sa);c<t.near||c>t.far||e.push({distance:c,point:sa.clone(),uv:ps.getInterpolation(sa,Fc,oa,Bc,Dp,Qu,Np,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Oc(i,t,e,n,s,r){no.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ra.x=r*no.x-s*no.y,ra.y=s*no.x+r*no.y):ra.copy(no),i.copy(t),i.x+=ra.x,i.y+=ra.y,i.applyMatrix4(Gm)}var fs=new N,td=new N,Hc=new N,zc=new N,go=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fs.copy(this.origin).addScaledVector(this.direction,e),fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){td.copy(t).add(e).multiplyScalar(.5),Hc.copy(e).sub(t).normalize(),zc.copy(this.origin).sub(td);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hc),a=zc.dot(this.direction),c=-zc.dot(Hc),l=zc.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(td).addScaledVector(Hc,f),p}intersectSphere(t,e){if(t.radius<0)return null;fs.subVectors(t.center,this.origin);let n=fs.dot(this.direction),s=fs.dot(fs)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fs)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,p=t.z-o.z,g=e.x-o.x,x=e.y-o.y,d=e.z-o.z,m=n.x-o.x,_=n.y-o.y,b=n.z-o.z,y=Math.abs(c),S=Math.abs(l),M=Math.abs(h),w,v,T,R,P,I,D,C,U,G,O,$;if(y>=S&&y>=M?(T=c,I=u,U=g,$=m,c>=0?(w=l,v=h,R=f,P=p,D=x,C=d,G=_,O=b):(w=h,v=l,R=p,P=f,D=d,C=x,G=b,O=_)):S>=M?(T=l,I=f,U=x,$=_,l>=0?(w=h,v=c,R=p,P=u,D=d,C=g,G=b,O=m):(w=c,v=h,R=u,P=p,D=g,C=d,G=m,O=b)):(T=h,I=p,U=d,$=b,h>=0?(w=c,v=l,R=u,P=f,D=g,C=x,G=m,O=_):(w=l,v=c,R=f,P=u,D=x,C=g,G=_,O=m)),T===0)return null;let H=w/T,X=v/T,J=1/T,mt=R-H*I,wt=P-X*I,ae=D-H*U,se=C-X*U,Yt=G-H*$,nt=O-X*$,ot=Yt*se-nt*ae,bt=mt*nt-wt*Yt,Ot=ae*wt-se*mt;if(s){if(ot<0||bt<0||Ot<0)return null}else if((ot<0||bt<0||Ot<0)&&(ot>0||bt>0||Ot>0))return null;let Rt=ot+bt+Ot;if(Rt===0)return null;let Jt=J*(ot*I+bt*U+Ot*$);return(Rt>0?Jt<0:Jt>0)?null:this.at(Jt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Up=new Me,ar=new go,kc=new ji,Fp=new N,Gc=new N,Vc=new N,Wc=new N,ed=new N,Xc=new N,Bp=new N,qc=new N,K=class extends En{constructor(t=new ue,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ed.fromBufferAttribute(u,t),o?Xc.addScaledVector(ed,h):Xc.addScaledVector(ed.sub(e),h))}e.add(Xc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kc.copy(n.boundingSphere),kc.applyMatrix4(r),ar.copy(t.ray).recast(t.near),!(kc.containsPoint(ar.origin)===!1&&(ar.intersectSphere(kc,Fp)===null||ar.origin.distanceToSquared(Fp)>(t.far-t.near)**2))&&(Up.copy(r).invert(),ar.copy(t.ray).applyMatrix4(Up),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let d=f[g],m=o[d.materialIndex],_=Math.max(d.start,p.start),b=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let y=_,S=b;y<S;y+=3){let M=a.getX(y),w=a.getX(y+1),v=a.getX(y+2);s=Yc(this,m,t,n,l,h,u,M,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){let _=a.getX(d),b=a.getX(d+1),y=a.getX(d+2);s=Yc(this,o,t,n,l,h,u,_,b,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let d=f[g],m=o[d.materialIndex],_=Math.max(d.start,p.start),b=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let y=_,S=b;y<S;y+=3){let M=y,w=y+1,v=y+2;s=Yc(this,m,t,n,l,h,u,M,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){let _=d,b=d+1,y=d+2;s=Yc(this,o,t,n,l,h,u,_,b,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function l_(i,t,e,n,s,r,o,a){let c;if(t.side===Tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ws,a),c===null)return null;qc.copy(a),qc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(qc);return l<e.near||l>e.far?null:{distance:l,point:qc.clone(),object:i}}function Yc(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Gc),i.getVertexPosition(c,Vc),i.getVertexPosition(l,Wc);let h=l_(i,t,e,n,Gc,Vc,Wc,Bp);if(h){let u=new N;ps.getBarycoord(Bp,Gc,Vc,Wc,u),s&&(h.uv=ps.getInterpolatedAttribute(s,a,c,l,u,new ut)),r&&(h.uv1=ps.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=ps.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};ps.getNormal(Gc,Vc,Wc,f.normal),h.face=f,h.barycoord=u}return h}var ur=class extends qn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=vn,h=vn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=class extends Kt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},io=new Me,Op=new Me,Zc=[],Hp=new Ki,h_=new Me,aa=new K,ca=new ji,Pn=class extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),Hp.copy(t.boundingBox).applyMatrix4(io),this.boundingBox.union(Hp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),ca.copy(t.boundingSphere).applyMatrix4(io),this.boundingSphere.union(ca)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),t.ray.intersectsSphere(ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,io),Op.multiplyMatrices(n,io),aa.matrixWorld=Op,aa.raycast(t,Zc);for(let o=0,a=Zc.length;o<a;o++){let c=Zc[o];c.instanceId=r,c.object=this,e.push(c)}Zc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(s*this.count),s,this.count,Ao,bi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cr=new ji,u_=new ut(.5,.5),Jc=new N,xo=class{constructor(t=new Ii,e=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],x=r[9],d=r[10],m=r[11],_=r[12],b=r[13],y=r[14],S=r[15];if(s[0].setComponents(l-o,p-h,m-g,S-_).normalize(),s[1].setComponents(l+o,p+h,m+g,S+_).normalize(),s[2].setComponents(l+a,p+u,m+x,S+b).normalize(),s[3].setComponents(l-a,p-u,m-x,S-b).normalize(),n)s[4].setComponents(c,f,d,y).normalize(),s[5].setComponents(l-c,p-f,m-d,S-y).normalize();else if(s[4].setComponents(l-c,p-f,m-d,S-y).normalize(),e===Li)s[5].setComponents(l+c,p+f,m+d,S+y).normalize();else if(e===ho)s[5].setComponents(c,f,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);let e=u_.distanceTo(t.center);return cr.radius=.7071067811865476+e,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jc.x=s.normal.x>0?t.max.x:t.min.x,Jc.y=s.normal.y>0?t.max.y:t.min.y,Jc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _o=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yl=new N,vl=new N,zp=new Me,la=new go,$c=new ji,nd=new N,kp=new N,Ml=class extends En{constructor(t=new ue,e=new _o){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)yl.fromBufferAttribute(e,s-1),vl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=yl.distanceTo(vl);t.setAttribute("lineDistance",new fe(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$c.copy(n.boundingSphere),$c.applyMatrix4(s),$c.radius+=r,t.ray.intersectsSphere($c)===!1)return;zp.copy(s).invert(),la.copy(t.ray).applyMatrix4(zp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,d=g-1;x<d;x+=l){let m=h.getX(x),_=h.getX(x+1),b=Kc(this,t,la,c,m,_,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(g-1),d=h.getX(p),m=Kc(this,t,la,c,x,d,g-1);m&&e.push(m)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,d=g-1;x<d;x+=l){let m=Kc(this,t,la,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Kc(this,t,la,c,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kc(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(yl.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),e.distanceSqToSegment(yl,vl,nd,kp)>n)return;nd.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(nd);if(!(l<t.near||l>t.far))return{distance:l,point:kp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Gp=new N,Vp=new N,Ea=class extends Ml{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Gp.fromBufferAttribute(e,s),Vp.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gp.distanceTo(Vp);t.setAttribute("lineDistance",new fe(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var li=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wp=new Me,dd=new go,jc=new ji,Qc=new N,Mi=class extends En{constructor(t=new ue,e=new li){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jc.copy(n.boundingSphere),jc.applyMatrix4(s),jc.radius+=r,t.ray.intersectsSphere(jc)===!1)return;Wp.copy(s).invert(),dd.copy(t.ray).applyMatrix4(Wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let d=l.getX(g);Qc.fromBufferAttribute(u,d),Xp(Qc,d,c,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Qc.fromBufferAttribute(u,g),Xp(Qc,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xp(i,t,e,n,s,r,o){let a=dd.distanceSqToPoint(i);if(a<e){let c=new N;dd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ta=class extends qn{constructor(t=[],e=Xs,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ui=class extends qn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Os=class extends qn{constructor(t,e,n=Oi,s,r,o,a=vn,c=vn,l,h=Ji,u=1){if(h!==Ji&&h!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bl=class extends Os{constructor(t,e=Oi,n=Xs,s,r,o=vn,a=vn,c,l=Ji){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wa=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},In=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(x,d,m,_,b,y,S,M,w,v,T){let R=y/w,P=S/v,I=y/2,D=S/2,C=M/2,U=w+1,G=v+1,O=0,$=0,H=new N;for(let X=0;X<G;X++){let J=X*P-D;for(let mt=0;mt<U;mt++){let wt=mt*R-I;H[x]=wt*_,H[d]=J*b,H[m]=C,l.push(H.x,H.y,H.z),H[x]=0,H[d]=0,H[m]=M>0?1:-1,h.push(H.x,H.y,H.z),u.push(mt/w),u.push(1-X/v),O+=1}}for(let X=0;X<v;X++)for(let J=0;J<w;J++){let mt=f+J+U*X,wt=f+J+U*(X+1),ae=f+(J+1)+U*(X+1),se=f+(J+1)+U*X;c.push(mt,wt,se),c.push(wt,ae,se),$+=6}a.addGroup(p,$,T),p+=$,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hi=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new N,h=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Le=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],d=n/2,m=0;_(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(p,2));function _(){let y=new N,S=new N,M=0,w=(e-t)/n;for(let v=0;v<=r;v++){let T=[],R=v/r,P=R*(e-t)+t;for(let I=0;I<=s;I++){let D=I/s,C=D*c+a,U=Math.sin(C),G=Math.cos(C);S.x=P*U,S.y=-R*n+d,S.z=P*G,u.push(S.x,S.y,S.z),y.set(U,w,G).normalize(),f.push(y.x,y.y,y.z),p.push(D,1-R),T.push(g++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let R=x[T][v],P=x[T+1][v],I=x[T+1][v+1],D=x[T][v+1];(t>0||T!==0)&&(h.push(R,P,D),M+=3),(e>0||T!==r-1)&&(h.push(P,I,D),M+=3)}l.addGroup(m,M,0),m+=M}function b(y){let S=g,M=new ut,w=new N,v=0,T=y===!0?t:e,R=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,d*R,0),f.push(0,R,0),p.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let C=I/s*c+a,U=Math.cos(C),G=Math.sin(C);w.x=T*G,w.y=d*R,w.z=T*U,u.push(w.x,w.y,w.z),f.push(0,R,0),M.x=U*.5+.5,M.y=G*.5*R+.5,p.push(M.x,M.y),g++}for(let I=0;I<s;I++){let D=S+I,C=P+I;y===!0?h.push(C,C+1,D):h.push(C+1,C,D),v+=3}l.addGroup(m,v,y===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oe=class i extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sl=class i extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let b=new N,y=new N,S=new N;for(let M=0;M<e.length;M+=3)p(e[M+0],b),p(e[M+1],y),p(e[M+2],S),c(b,y,S,_)}function c(_,b,y,S){let M=S+1,w=[];for(let v=0;v<=M;v++){w[v]=[];let T=_.clone().lerp(y,v/M),R=b.clone().lerp(y,v/M),P=M-v;for(let I=0;I<=P;I++)I===0&&v===M?w[v][I]=T:w[v][I]=T.clone().lerp(R,I/P)}for(let v=0;v<M;v++)for(let T=0;T<2*(M-v)-1;T++){let R=Math.floor(T/2);T%2===0?(f(w[v][R+1]),f(w[v+1][R]),f(w[v][R])):(f(w[v][R+1]),f(w[v+1][R+1]),f(w[v+1][R]))}}function l(_){let b=new N;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new N;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=d(_)/2/Math.PI+.5,S=m(_)/Math.PI+.5;o.push(y,1-S)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let b=o[_+0],y=o[_+2],S=o[_+4],M=Math.max(b,y,S),w=Math.min(b,y,S);M>.9&&w<.1&&(b<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,b){let y=_*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){let _=new N,b=new N,y=new N,S=new N,M=new ut,w=new ut,v=new ut;for(let T=0,R=0;T<r.length;T+=9,R+=6){_.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),M.set(o[R+0],o[R+1]),w.set(o[R+2],o[R+3]),v.set(o[R+4],o[R+5]),S.copy(_).add(b).add(y).divideScalar(3);let P=d(S);x(M,R+0,_,P),x(w,R+2,b,P),x(v,R+4,y,P)}}function x(_,b,y,S){S<0&&_.x===1&&(o[b]=_.x-1),y.x===0&&y.z===0&&(o[b]=S/2/Math.PI+.5)}function d(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new Me;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yo=class extends ui{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},El=class extends yo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gd(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var qp=new N,Yp=new N,id=new Gd,sd=new Gd,rd=new Gd,vo=class extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Yp.subVectors(s[0],s[1]).add(s[0]),l=Yp);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),id.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,d),sd.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,d),rd.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,d)}else this.curveType==="catmullrom"&&(id.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),sd.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),rd.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(id.calc(c),sd.calc(c),rd.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zp(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function d_(i,t){let e=1-i;return e*e*t}function f_(i,t){return 2*(1-i)*i*t}function p_(i,t){return i*i*t}function ua(i,t,e,n){return d_(i,t)+f_(i,e)+p_(i,n)}function m_(i,t){let e=1-i;return e*e*e*t}function g_(i,t){let e=1-i;return 3*e*e*i*t}function x_(i,t){return 3*(1-i)*i*i*t}function __(i,t){return i*i*i*t}function da(i,t,e,n,s){return m_(i,t)+g_(i,e)+x_(i,n)+__(i,s)}var Aa=class extends ui{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(da(t,s.x,r.x,o.x,a.x),da(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tl=class extends ui{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(da(t,s.x,r.x,o.x,a.x),da(t,s.y,r.y,o.y,a.y),da(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends ui{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends ui{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends ui{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ua(t,s.x,r.x,o.x),ua(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Al=class extends ui{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ua(t,s.x,r.x,o.x),ua(t,s.y,r.y,o.y),ua(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zp(a,c.x,l.x,h.x,u.x),Zp(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},fd=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:vo,CubicBezierCurve:Aa,CubicBezierCurve3:Tl,EllipseCurve:yo,LineCurve:Ra,LineCurve3:wl,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Al,SplineCurve:Pa}),Rl=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fd[s.type]().fromJSON(s))}return this}},dr=class extends Rl{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ra(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ca(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Aa(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new yo(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hs=class extends dr{constructor(t){super(t),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new dr().fromJSON(s))}return this}};function y_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Vm(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=E_(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,u=c;for(let f=e;f<s;f+=e){let p=i[f],g=i[f+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Ia(r,o,e,a,c,l,0),o}function Vm(i,t,e,n,s){let r;if(s===U_(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Jp(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Jp(o/n|0,i[o],i[o+1],r);return r&&Mo(r,r.next)&&(Da(r),r=r.next),r}function fr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||hn(e.prev,e,e.next)===0)){if(Da(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ia(i,t,e,n,s,r,o){if(!i)return;!o&&r&&C_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?M_(i,n,s,r):v_(i)){t.push(c.i,i.i,l.i),Da(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=b_(fr(i),t),Ia(i,t,e,n,s,r,2)):o===2&&S_(i,t,e,n,s,r):Ia(fr(i),t,e,n,s,r,1);break}}}function v_(i){let t=i.prev,e=i,n=i.next;if(hn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),p=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ha(s,a,r,c,o,l,g.x,g.y)&&hn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function M_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(hn(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,p=Math.min(a,c,l),g=Math.min(h,u,f),x=Math.max(a,c,l),d=Math.max(h,u,f),m=pd(p,g,t,e,n),_=pd(x,d,t,e,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=d&&b!==s&&b!==o&&ha(a,h,c,u,l,f,b.x,b.y)&&hn(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&ha(a,h,c,u,l,f,y.x,y.y)&&hn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=d&&b!==s&&b!==o&&ha(a,h,c,u,l,f,b.x,b.y)&&hn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&ha(a,h,c,u,l,f,y.x,y.y)&&hn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function b_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Mo(n,s)&&Xm(n,e,e.next,s)&&La(n,s)&&La(s,n)&&(t.push(n.i,e.i,s.i),Da(e),Da(e.next),e=i=s),e=e.next}while(e!==i);return fr(e)}function S_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L_(o,a)){let c=qm(o,a);o=fr(o,o.next),c=fr(c,c.next),Ia(o,t,e,n,s,r,0),Ia(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function E_(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Vm(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(I_(l))}s.sort(T_);for(let r=0;r<s.length;r++)e=w_(s[r],e);return e}function T_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function w_(i,t){let e=A_(i,t);if(!e)return t;let n=qm(e,i);return fr(n,n.next),fr(e,e.next)}function A_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Mo(i,e))return e;do{if(Mo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Wm(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);La(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&R_(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function R_(i,t){return hn(i.prev,i,t.prev)<0&&hn(t.next,i,i.next)<0}function C_(i,t,e,n){let s=i;do s.z===0&&(s.z=pd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,P_(s)}function P_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function pd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function I_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wm(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ha(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Wm(i,t,e,n,s,r,o,a)}function L_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!D_(i,t)&&(La(i,t)&&La(t,i)&&N_(i,t)&&(hn(i.prev,i,t.prev)||hn(i,t.prev,t))||Mo(i,t)&&hn(i.prev,i,i.next)>0&&hn(t.prev,t,t.next)>0)}function hn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function Xm(i,t,e,n){let s=el(hn(i,t,e)),r=el(hn(i,t,n)),o=el(hn(e,n,i)),a=el(hn(e,n,t));return!!(s!==r&&o!==a||s===0&&tl(i,e,t)||r===0&&tl(i,n,t)||o===0&&tl(e,i,n)||a===0&&tl(e,t,n))}function tl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function el(i){return i>0?1:i<0?-1:0}function D_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function La(i,t){return hn(i.prev,i,i.next)<0?hn(i,t,i.next)>=0&&hn(i,i.prev,t)>=0:hn(i,t,i.prev)<0||hn(i,i.next,t)<0}function N_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qm(i,t){let e=md(i.i,i.x,i.y),n=md(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jp(i,t,e,n){let s=md(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function md(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function U_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gd=class{static triangulate(t,e,n=2){return y_(t,e,n)}},Zi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$p(t),Kp(n,t);let o=t.length;e.forEach($p);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Kp(n,e[c]);let a=gd.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function $p(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var bo=class i extends ue{constructor(t=new Hs([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:F_,b,y=!1,S,M,w,v;if(m){b=m.getSpacedPoints(h),y=!0,f=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,rt),M=new N,w=new N,v=new N}f||(d=0,p=0,g=0,x=0);let T=a.extractPoints(l),R=T.shape,P=T.holes;if(!Zi.isClockWise(R)){R=R.reverse();for(let rt=0,ht=P.length;rt<ht;rt++){let ft=P[rt];Zi.isClockWise(ft)&&(P[rt]=ft.reverse())}}function D(rt){let ft=10000000000000001e-36,dt=rt[0];for(let xt=1;xt<=rt.length;xt++){let Nt=xt%rt.length,Gt=rt[Nt],$t=Gt.x-dt.x,ne=Gt.y-dt.y,B=$t*$t+ne*ne,Ae=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(dt.x),Math.abs(dt.y)),ge=ft*Ae*Ae;if(B<=ge){rt.splice(Nt,1),xt--;continue}dt=Gt}}D(R),P.forEach(D);let C=P.length,U=R;for(let rt=0;rt<C;rt++){let ht=P[rt];R=R.concat(ht)}function G(rt,ht,ft){return ht||ee("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ht,ft)}let O=R.length;function $(rt,ht,ft){let dt,xt,Nt,Gt=rt.x-ht.x,$t=rt.y-ht.y,ne=ft.x-rt.x,B=ft.y-rt.y,Ae=Gt*Gt+$t*$t,ge=Gt*B-$t*ne;if(Math.abs(ge)>Number.EPSILON){let L=Math.sqrt(Ae),E=Math.sqrt(ne*ne+B*B),W=ht.x-$t/L,q=ht.y+Gt/L,et=ft.x-B/E,gt=ft.y+ne/E,yt=((et-W)*B-(gt-q)*ne)/(Gt*B-$t*ne);dt=W+Gt*yt-rt.x,xt=q+$t*yt-rt.y;let it=dt*dt+xt*xt;if(it<=2)return new ut(dt,xt);Nt=Math.sqrt(it/2)}else{let L=!1;Gt>Number.EPSILON?ne>Number.EPSILON&&(L=!0):Gt<-Number.EPSILON?ne<-Number.EPSILON&&(L=!0):Math.sign($t)===Math.sign(B)&&(L=!0),L?(dt=-$t,xt=Gt,Nt=Math.sqrt(Ae)):(dt=Gt,xt=$t,Nt=Math.sqrt(Ae/2))}return new ut(dt/Nt,xt/Nt)}let H=[];for(let rt=0,ht=U.length,ft=ht-1,dt=rt+1;rt<ht;rt++,ft++,dt++)ft===ht&&(ft=0),dt===ht&&(dt=0),H[rt]=$(U[rt],U[ft],U[dt]);let X=[],J,mt=H.concat();for(let rt=0,ht=C;rt<ht;rt++){let ft=P[rt];J=[];for(let dt=0,xt=ft.length,Nt=xt-1,Gt=dt+1;dt<xt;dt++,Nt++,Gt++)Nt===xt&&(Nt=0),Gt===xt&&(Gt=0),J[dt]=$(ft[dt],ft[Nt],ft[Gt]);X.push(J),mt=mt.concat(J)}let wt;if(d===0)wt=Zi.triangulateShape(U,P);else{let rt=[],ht=[];for(let ft=0;ft<d;ft++){let dt=ft/d,xt=p*Math.cos(dt*Math.PI/2),Nt=g*Math.sin(dt*Math.PI/2)+x;for(let Gt=0,$t=U.length;Gt<$t;Gt++){let ne=G(U[Gt],H[Gt],Nt);bt(ne.x,ne.y,-xt),dt===0&&rt.push(ne)}for(let Gt=0,$t=C;Gt<$t;Gt++){let ne=P[Gt];J=X[Gt];let B=[];for(let Ae=0,ge=ne.length;Ae<ge;Ae++){let L=G(ne[Ae],J[Ae],Nt);bt(L.x,L.y,-xt),dt===0&&B.push(L)}dt===0&&ht.push(B)}}wt=Zi.triangulateShape(rt,ht)}let ae=wt.length,se=g+x;for(let rt=0;rt<O;rt++){let ht=f?G(R[rt],mt[rt],se):R[rt];y?(w.copy(S.normals[0]).multiplyScalar(ht.x),M.copy(S.binormals[0]).multiplyScalar(ht.y),v.copy(b[0]).add(w).add(M),bt(v.x,v.y,v.z)):bt(ht.x,ht.y,0)}for(let rt=1;rt<=h;rt++)for(let ht=0;ht<O;ht++){let ft=f?G(R[ht],mt[ht],se):R[ht];y?(w.copy(S.normals[rt]).multiplyScalar(ft.x),M.copy(S.binormals[rt]).multiplyScalar(ft.y),v.copy(b[rt]).add(w).add(M),bt(v.x,v.y,v.z)):bt(ft.x,ft.y,u/h*rt)}for(let rt=d-1;rt>=0;rt--){let ht=rt/d,ft=p*Math.cos(ht*Math.PI/2),dt=g*Math.sin(ht*Math.PI/2)+x;for(let xt=0,Nt=U.length;xt<Nt;xt++){let Gt=G(U[xt],H[xt],dt);bt(Gt.x,Gt.y,u+ft)}for(let xt=0,Nt=P.length;xt<Nt;xt++){let Gt=P[xt];J=X[xt];for(let $t=0,ne=Gt.length;$t<ne;$t++){let B=G(Gt[$t],J[$t],dt);y?bt(B.x,B.y+b[h-1].y,b[h-1].x+ft):bt(B.x,B.y,u+ft)}}}Yt(),nt();function Yt(){let rt=s.length/3;if(f){let ht=0,ft=O*ht;for(let dt=0;dt<ae;dt++){let xt=wt[dt];Ot(xt[2]+ft,xt[1]+ft,xt[0]+ft)}ht=h+d*2,ft=O*ht;for(let dt=0;dt<ae;dt++){let xt=wt[dt];Ot(xt[0]+ft,xt[1]+ft,xt[2]+ft)}}else{for(let ht=0;ht<ae;ht++){let ft=wt[ht];Ot(ft[2],ft[1],ft[0])}for(let ht=0;ht<ae;ht++){let ft=wt[ht];Ot(ft[0]+O*h,ft[1]+O*h,ft[2]+O*h)}}n.addGroup(rt,s.length/3-rt,0)}function nt(){let rt=s.length/3,ht=0;ot(U,ht),ht+=U.length;for(let ft=0,dt=P.length;ft<dt;ft++){let xt=P[ft];ot(xt,ht),ht+=xt.length}n.addGroup(rt,s.length/3-rt,1)}function ot(rt,ht){let ft=rt.length;for(;--ft>=0;){let dt=ft,xt=ft-1;xt<0&&(xt=rt.length-1);for(let Nt=0,Gt=h+d*2;Nt<Gt;Nt++){let $t=O*Nt,ne=O*(Nt+1),B=ht+dt+$t,Ae=ht+xt+$t,ge=ht+xt+ne,L=ht+dt+ne;Rt(B,Ae,ge,L)}}}function bt(rt,ht,ft){c.push(rt),c.push(ht),c.push(ft)}function Ot(rt,ht,ft){Jt(rt),Jt(ht),Jt(ft);let dt=s.length/3,xt=_.generateTopUV(n,s,dt-3,dt-2,dt-1);De(xt[0]),De(xt[1]),De(xt[2])}function Rt(rt,ht,ft,dt){Jt(rt),Jt(ht),Jt(dt),Jt(ht),Jt(ft),Jt(dt);let xt=s.length/3,Nt=_.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);De(Nt[0]),De(Nt[1]),De(Nt[3]),De(Nt[1]),De(Nt[2]),De(Nt[3])}function Jt(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function De(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return B_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fd[s.type]().fromJSON(s)),new i(n,t.options)}},F_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],d=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-u),new ut(f,1-g),new ut(x,1-m)]:[new ut(a,1-c),new ut(h,1-u),new ut(p,1-g),new ut(d,1-m)]}};function B_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class i extends Sl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var an=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],x=[],d=[];for(let m=0;m<h;m++){let _=m*f-o;for(let b=0;b<l;b++){let y=b*u-r;g.push(y,-_,0),x.push(0,0,1),d.push(b/a),d.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let b=_+l*m,y=_+l*(m+1),S=_+1+l*(m+1),M=_+1+l*m;p.push(b,y,M),p.push(y,S,M)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pr=class i extends ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,p=new N,g=new ut;for(let x=0;x<=s;x++){for(let d=0;d<=n;d++){let m=r+d/n*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let d=x*(n+1);for(let m=0;m<n;m++){let _=m+d,b=_,y=_+n+1,S=_+n+2,M=_+1;a.push(b,y,M),a.push(y,S,M)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Na=class i extends ue{constructor(t=new Hs([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function l(h){let u=s.length/3,f=h.extractPoints(e),p=f.shape,g=f.holes;Zi.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=g.length;d<m;d++){let _=g[d];Zi.isClockWise(_)===!0&&(g[d]=_.reverse())}let x=Zi.triangulateShape(p,g);for(let d=0,m=g.length;d<m;d++){let _=g[d];p=p.concat(_)}for(let d=0,m=p.length;d<m;d++){let _=p[d];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let d=0,m=x.length;d<m;d++){let _=x[d],b=_[0]+u,y=_[1]+u,S=_[2]+u;n.push(b,y,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return O_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function O_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pe=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,f=new N,p=[],g=[],x=[],d=[];for(let m=0;m<=n;m++){let _=[],b=m/n,y=o+b*a,S=t*Math.cos(y),M=Math.sqrt(t*t-S*S),w=0;m===0&&o===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let v=0;v<=e;v++){let T=v/e,R=s+T*r;u.x=-M*Math.cos(R),u.y=S,u.z=M*Math.sin(R),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(T+w,1-b),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let b=h[m][_+1],y=h[m][_],S=h[m+1][_],M=h[m+1][_+1];(m!==0||o>0)&&p.push(b,y,M),(m!==n-1||c<Math.PI)&&p.push(y,S,M)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new N,p=new N,g=new N;for(let x=0;x<=n;x++){let d=o+x/n*a;for(let m=0;m<=s;m++){let _=m/s*r;p.x=(t+e*Math.cos(d))*Math.cos(_),p.y=(t+e*Math.cos(d))*Math.sin(_),p.z=e*Math.sin(d),l.push(p.x,p.y,p.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),g.subVectors(p,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let d=1;d<=s;d++){let m=(s+1)*x+d-1,_=(s+1)*(x-1)+d-1,b=(s+1)*(x-1)+d,y=(s+1)*x+d;c.push(m,_,y),c.push(_,b,y)}this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function xr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jp(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Gn(i){let t={};for(let e=0;e<i.length;e++){let n=xr(i[e]);for(let s in n)t[s]=n[s]}return t}function jp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function H_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var Ym={clone:xr,merge:Gn},z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=k_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=H_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Cl=class extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var _e=class extends vi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ua=class extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pl=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function so(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function od(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ld,endingEnd:ld}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hd:r=t,a=2*e-n;break;case ud:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hd:o=t,c=2*n-e;break;case ud:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,d=x*g,m=-f*d+2*f*x-f*g,_=(1+f)*d+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-p)*d+(1.5+p)*x+.5*g,y=p*d-p*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+_*o[l+S]+b*o[c+S]+y*o[u+S];return r}},Dl=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Nl=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ul=class extends zs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),x=1-g;for(let d=0;d!==a;++d)r[d]=o[l+d]*x+o[c+d]*g;return r}let f=a*2,p=t-1;for(let g=0;g!==a;++g){let x=o[l+g],d=o[c+g],m=p*f+g*2,_=u[m],b=u[m+1],y=t*f+g*2,S=h[y],M=h[y+1],w=V_(n,e,_,S,s);r[g]=Zm(w,x,b,M,d)}return r}};function Zm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function G_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function V_(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Zm(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=G_(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var di=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=so(e,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:so(t.times,Array),values:so(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),od(t.settings)&&(n.settings={inTangents:so(t.settings.inTangents,Array),outTangents:so(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ul(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fa:e=this.InterpolantFactoryMethodDiscrete;break;case pl:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break;case cd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return cd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;od(this.settings)&&(Qp(this.settings.inTangents,t),Qp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ee("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ee("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Xx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ee("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,od(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=pl;var ks=class extends di{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=fa;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Fl.prototype.ValueTypeName="color";var Bl=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Bl.prototype.ValueTypeName="number";var Ol=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Fa=class extends di{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends di{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=fa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Hl.prototype.ValueTypeName="vector";var zl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jm=new zl,kl=class{constructor(t){this.manager=t!==void 0?t:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends En{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ba=class extends So{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ad=new Me,tm=new N,em=new N,Oa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tm.setFromMatrixPosition(t.matrixWorld),e.position.copy(tm),em.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(em),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ad,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ho||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(ad)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nl=new N,il=new fn,Xi=new N,Ha=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nl,il,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(nl,il,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bs=new N,nm=new ut,im=new ut,gn=class extends Ha{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z)}getViewSize(t,e){return this.getViewBounds(t,nm,im),e.subVectors(im,nm)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nu*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xd=class extends Oa{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},za=class extends So{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Vs=class extends Ha{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_d=class extends Oa{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ka=class extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new _d}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ga=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ro=-90,oo=1,Gl=class extends En{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(ro,oo,t,e);s.layers=this.layers,this.add(s);let r=new gn(ro,oo,t,e);r.layers=this.layers,this.add(r);let o=new gn(ro,oo,t,e);o.layers=this.layers,this.add(o);let a=new gn(ro,oo,t,e);a.layers=this.layers,this.add(a);let c=new gn(ro,oo,t,e);c.layers=this.layers,this.add(c);let l=new gn(ro,oo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wd="\\[\\]\\.:\\/",W_=new RegExp("["+Wd+"]","g"),Xd="[^"+Wd+"]",X_="[^"+Wd.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",Xd),Y_=/(WCOD+)?/.source.replace("WCOD",X_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xd),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xd),$_=new RegExp("^"+q_+Y_+Z_+J_+"$"),K_=["material","materials","bones","map"],yd=class{constructor(t,e,n){let s=n||en.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},en=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(t){let e=$_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=yd;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rE=new Float32Array(1);var Kd=class Kd{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Kd.prototype.isMatrix2=!0;var vd=Kd;function qd(i,t,e,n){let s=j_(n);switch(e){case Od:return i*t;case Ao:return i*t/s.components*s.byteLength;case jl:return i*t/s.components*s.byteLength;case Zs:return i*t*2/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case Hd:return i*t*3/s.components*s.byteLength;case Si:return i*t*4/s.components*s.byteLength;case th:return i*t*4/s.components*s.byteLength;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nh:case sh:return Math.max(i,16)*Math.max(t,8)/4;case eh:case ih:return Math.max(i,8)*Math.max(t,8)/2;case rh:case oh:case ch:case lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ah:case $a:case hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Th:case wh:case Ah:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rh:case Ch:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case Ph:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j_(i){switch(i){case ti:case Nd:return{byteLength:1,components:1};case To:case Ud:case fi:return{byteLength:2,components:1};case $l:case Kl:return{byteLength:2,components:4};case Oi:case Jl:case bi:return{byteLength:4,components:1};case Fd:case Bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function x0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function iy(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sy=`#ifdef USE_ALPHAHASH
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
}`,ye={alphahash_fragment:sy,alphahash_pars_fragment:ry,alphamap_fragment:oy,alphamap_pars_fragment:ay,alphatest_fragment:cy,alphatest_pars_fragment:ly,aomap_fragment:hy,aomap_pars_fragment:uy,batching_pars_vertex:dy,batching_vertex:fy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:xy,bumpmap_pars_fragment:_y,clipping_planes_fragment:yy,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:My,clipping_planes_vertex:by,color_fragment:Sy,color_pars_fragment:Ey,color_pars_vertex:Ty,color_vertex:wy,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Py,displacementmap_vertex:Iy,emissivemap_fragment:Ly,emissivemap_pars_fragment:Dy,colorspace_fragment:Ny,colorspace_pars_fragment:Uy,envmap_fragment:Fy,envmap_common_pars_fragment:By,envmap_pars_fragment:Oy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:$y,envmap_vertex:zy,fog_vertex:ky,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:Zy,lights_pars_begin:Jy,lights_toon_fragment:Ky,lights_toon_pars_fragment:jy,lights_phong_fragment:Qy,lights_phong_pars_fragment:tv,lights_physical_fragment:ev,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,lightprobes_pars_fragment:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:hv,map_fragment:uv,map_pars_fragment:dv,map_particle_fragment:fv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:xv,morphcolor_vertex:_v,morphnormal_vertex:yv,morphtarget_pars_vertex:vv,morphtarget_vertex:Mv,normal_fragment_begin:bv,normal_fragment_maps:Sv,normal_pars_fragment:Ev,normal_pars_vertex:Tv,normal_vertex:wv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Iv,opaque_fragment:Lv,packing:Dv,premultiplied_alpha_fragment:Nv,project_vertex:Uv,dithering_fragment:Fv,dithering_pars_fragment:Bv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:kv,shadowmap_vertex:Gv,shadowmask_pars_fragment:Vv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:Zv,specularmap_pars_fragment:Jv,tonemapping_fragment:$v,tonemapping_pars_fragment:Kv,transmission_fragment:jv,transmission_pars_fragment:Qv,uv_pars_fragment:t1,uv_pars_vertex:e1,uv_vertex:n1,worldpos_vertex:i1,background_vert:s1,background_frag:r1,backgroundCube_vert:o1,backgroundCube_frag:a1,cube_vert:c1,cube_frag:l1,depth_vert:h1,depth_frag:u1,distance_vert:d1,distance_frag:f1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:x1,meshbasic_vert:_1,meshbasic_frag:y1,meshlambert_vert:v1,meshlambert_frag:M1,meshmatcap_vert:b1,meshmatcap_frag:S1,meshnormal_vert:E1,meshnormal_frag:T1,meshphong_vert:w1,meshphong_frag:A1,meshphysical_vert:R1,meshphysical_frag:C1,meshtoon_vert:P1,meshtoon_frag:I1,points_vert:L1,points_frag:D1,shadow_vert:N1,shadow_frag:U1,sprite_vert:F1,sprite_frag:B1},Ct={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ns={basic:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Gn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Gn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Gn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Gn([Ct.points,Ct.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Gn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Gn([Ct.common,Ct.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Gn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Gn([Ct.sprite,Ct.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Gn([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Gn([Ct.lights,Ct.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};ns.physical={uniforms:Gn([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Dh={r:0,b:0,g:0},O1=new Me,_0=new le;_0.set(-1,0,0,0,1,0,0,0,1);function H1(i,t,e,n,s,r){let o=new pt(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function p(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=t.get(b,y)}return b}function g(_){let b=!1,y=p(_);y===null?d(o,a):y&&y.isColor&&(d(y,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,b){let y=p(b);y&&(y.isCubeTexture||y.mapping===Wa)?(l===void 0&&(l=new K(new In(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:xr(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_0),l.material.toneMapped=Ce.getTransfer(y.colorSpace)!==ke,(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new K(new an(2,2),new nn({name:"BackgroundMaterial",uniforms:xr(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ce.getTransfer(y.colorSpace)!==ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,b){_.getRGB(Dh,Vd(i)),e.buffers.color.setClear(Dh.r,Dh.g,Dh.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,d(o,a)},render:g,addToRenderList:x,dispose:m}}function z1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,I,D,C,U){let G=!1,O=u(P,C,D,I);r!==O&&(r=O,l(r.object)),G=p(P,C,D,U),G&&g(P,C,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(P,I,D,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,I,D,C){let U=C.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let O=P.isInstancedMesh===!0?P.id:0,$=G[O];$===void 0&&($={},G[O]=$);let H=$[D.id];H===void 0&&(H={},$[D.id]=H);let X=H[U];return X===void 0&&(X=f(c()),H[U]=X),X}function f(P){let I=[],D=[],C=[];for(let U=0;U<e;U++)I[U]=0,D[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:C,object:P,attributes:{},index:null}}function p(P,I,D,C){let U=r.attributes,G=I.attributes,O=0,$=D.getAttributes();for(let H in $)if($[H].location>=0){let J=U[H],mt=G[H];if(mt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),J===void 0||J.attribute!==mt||mt&&J.data!==mt.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function g(P,I,D,C){let U={},G=I.attributes,O=0,$=D.getAttributes();for(let H in $)if($[H].location>=0){let J=G[H];J===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let mt={};mt.attribute=J,J&&J.data&&(mt.data=J.data),U[H]=mt,O++}r.attributes=U,r.attributesNum=O,r.index=C}function x(){let P=r.newAttributes;for(let I=0,D=P.length;I<D;I++)P[I]=0}function d(P){m(P,0)}function m(P,I){let D=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;D[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),U[P]!==I&&(i.vertexAttribDivisor(P,I),U[P]=I)}function _(){let P=r.newAttributes,I=r.enabledAttributes;for(let D=0,C=I.length;D<C;D++)I[D]!==P[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function b(P,I,D,C,U,G,O){O===!0?i.vertexAttribIPointer(P,I,D,U,G):i.vertexAttribPointer(P,I,D,C,U,G)}function y(P,I,D,C){x();let U=C.attributes,G=D.getAttributes(),O=I.defaultAttributeValues;for(let $ in G){let H=G[$];if(H.location>=0){let X=U[$];if(X===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let J=X.normalized,mt=X.itemSize,wt=t.get(X);if(wt===void 0)continue;let ae=wt.buffer,se=wt.type,Yt=wt.bytesPerElement,nt=se===i.INT||se===i.UNSIGNED_INT||X.gpuType===Jl;if(X.isInterleavedBufferAttribute){let ot=X.data,bt=ot.stride,Ot=X.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<H.locationSize;Rt++)m(H.location+Rt,ot.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Rt=0;Rt<H.locationSize;Rt++)d(H.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Rt=0;Rt<H.locationSize;Rt++)b(H.location+Rt,mt/H.locationSize,se,J,bt*Yt,(Ot+mt/H.locationSize*Rt)*Yt,nt)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot,X.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ot=0;ot<H.locationSize;ot++)b(H.location+ot,mt/H.locationSize,se,J,mt*Yt,mt/H.locationSize*ot*Yt,nt)}}else if(O!==void 0){let J=O[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(H.location,J);break;case 3:i.vertexAttrib3fv(H.location,J);break;case 4:i.vertexAttrib4fv(H.location,J);break;default:i.vertexAttrib1fv(H.location,J)}}}}_()}function S(){T();for(let P in n){let I=n[P];for(let D in I){let C=I[D];for(let U in C){let G=C[U];for(let O in G)h(G[O].object),delete G[O];delete C[U]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let D in I){let C=I[D];for(let U in C){let G=C[U];for(let O in G)h(G[O].object),delete G[O];delete C[U]}}delete n[P.id]}function w(P){for(let I in n){let D=n[I];for(let C in D){let U=D[C];if(U[P.id]===void 0)continue;let G=U[P.id];for(let O in G)h(G[O].object),delete G[O];delete U[P.id]}}}function v(P){for(let I in n){let D=n[I],C=P.isInstancedMesh===!0?P.id:0,U=D[C];if(U!==void 0){for(let G in U){let O=U[G];for(let $ in O)h(O[$].object),delete O[$];delete U[G]}delete D[C],Object.keys(D).length===0&&delete n[I]}}}function T(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:d,disableUnusedAttributes:_}}function k1(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let p=0;p<h;p++)f+=l[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function G1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Si&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let v=w===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ti&&w!==bi&&!v&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(jt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:S,samples:M}}function V1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ii,a=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):l();else{let _=r?0:n,b=_*4,y=m.clippingState||null;c.value=y,y=h(g,f,b,p);for(let S=0;S!==b;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,d=null;if(x!==0){if(d=c.value,g!==!0||d===null){let m=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(d===null||d.length<m)&&(d=new Float32Array(m));for(let b=0,y=p;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(_,a),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}var Co=4,W1=6,X1=20,q1=256,Qa=new Vs,$m=new pt,jd=null,Qd=0,tf=0,ef=!1,Y1=new N,_r=new N,Uh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Y1}=r;jd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jd,Qd,tf),this._renderer.xr.enabled=ef,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:fi,format:Si,colorSpace:pa,depthBuffer:!1},s=Km(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z1(r)),this._blurMaterial=$1(r,t,e),this._ggxMaterial=J1(r,t,e)}return s}_compileMaterial(t){let e=new K(new ue,t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,s,r){let c=new gn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor($m),u.toneMapping=Bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new In,new Pe({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,d=x.material,m=!1,_=t.background;_?_.isColor&&(d.color.copy(_),t.background=null,m=!0):(d.color.copy($m),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;Ro(s,y*S,b>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(x,c),u.render(t,c)}u.toneMapping=p,u.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xs||t.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ro(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,p=u*f,{_lodMax:g}=this,x=this._sizeLods[n],d=3*x*(n>g-Co?n-g+Co:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,Ro(r,d,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Qa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ro(t,d,m,3*x,2*x),s.setRenderTarget(t),s.render(a,Qa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Co?s-this._lodMax+Co:0),f=4*(this._cubeSize-h);Ro(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(c,Qa)}};function Z1(i){let t=[],e=[],n=i,s=i-Co+1+W1;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,p=3,g=new Float32Array(p*f*u),x=new Float32Array(p*f*u);for(let m=0;m<u;m++){let _=m%3*2/3-1,b=m>2?0:-1,y=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];g.set(y,p*f*m);for(let S=0;S<f;S++){let M=h[S*2]*2-1,w=h[S*2+1]*2-1;m===0?_r.set(1,w,M):m===1?_r.set(-M,1,-w):m===2?_r.set(-M,w,1):m===3?_r.set(-1,w,-M):m===4?_r.set(-M,-1,w):_r.set(M,w,-1),_r.toArray(x,(m*f+S)*p)}}let d=new ue;d.setAttribute("position",new Kt(g,p)),d.setAttribute("outputDirection",new Kt(x,p)),e.push(new K(d,null)),n>Co&&n--}return{lodMeshes:e,sizeLods:t}}function Km(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function J1(i,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function $1(i,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:X1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function jm(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Qm(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fh=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ta(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ts});r.uniforms.tEquirect.value=e;let o=new K(s,r),a=e.minFilter;return e.minFilter===qs&&(e.minFilter=Dn),new Gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function K1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===ql||p===Yl)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Fh(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let p=f.mapping,g=p===ql||p===Yl,x=p===Xs||p===gr;if(g||x){let d=e.get(f),m=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Uh(i)),d=g?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),d.texture;if(d!==void 0)return d.texture;{let _=f.image;return g&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Uh(i)),d=g?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),f.addEventListener("dispose",h),d.texture):null}}}return f}function a(f,p){return p===ql?f.mapping=Xs:p===Yl&&(f.mapping=gr),f}function c(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function l(f){let p=f.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function j1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function Q1(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(p!==null){let _=p.array;x=p.version;for(let b=0,y=_.length;b<y;b+=3){let S=_[b+0],M=_[b+1],w=_[b+2];f.push(S,M,M,w,w,S)}}else{let _=g.array;x=g.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let S=b+0,M=b+1,w=b+2;f.push(S,M,M,w,w,S)}}let d=new(g.count>=65535?ba:Ma)(f,1);d.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,d)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tM(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*o,p),e.update(f,n,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let x=0;for(let d=0;d<p;d++)x+=f[d];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function eM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nM(i,t,e){let n=new WeakMap,s=new on;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*S*4*u),w=new _a(M,y,S,u);w.type=bi,w.needsUpdate=!0;let v=b*4;for(let R=0;R<u;R++){let P=d[R],I=m[R],D=_[R],C=y*S*4*R;for(let U=0;U<P.count;U++){let G=U*v;p===!0&&(s.fromBufferAttribute(P,U),M[C+G+0]=s.x,M[C+G+1]=s.y,M[C+G+2]=s.z,M[C+G+3]=0),g===!0&&(s.fromBufferAttribute(I,U),M[C+G+4]=s.x,M[C+G+5]=s.y,M[C+G+6]=s.z,M[C+G+7]=0),x===!0&&(s.fromBufferAttribute(D,U),M[C+G+8]=s.x,M[C+G+9]=s.y,M[C+G+10]=s.z,M[C+G+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new ut(y,S)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function iM(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var sM={[wd]:"LINEAR_TONE_MAPPING",[Ad]:"REINHARD_TONE_MAPPING",[Rd]:"CINEON_TONE_MAPPING",[Cd]:"ACES_FILMIC_TONE_MAPPING",[Id]:"AGX_TONE_MAPPING",[Ld]:"NEUTRAL_TONE_MAPPING",[Pd]:"CUSTOM_TONE_MAPPING"};function rM(i,t,e,n,s,r){let o=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ue;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new K(l,h),f=new Vs(-1,1,1,-1,0,1),p=null,g=null,x=!1,d,m=null,_=[],b=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),c!==null&&c.setSize(y,S);for(let M=0;M<_.length;M++){let w=_[M];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){_=y,b=_.length>0&&_[0].isRenderPass===!0;let S=o.width,M=o.height;_.length>0&&a===null&&(a=new Nn(S,M,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(S,M,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let v=_[w];v.setSize&&v.setSize(S,M)}},this.begin=function(y,S){if(x||y.toneMapping===Bi&&_.length===0)return!1;if(m=S,S!==null){let M=S.width,w=S.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return b===!1&&y.setRenderTarget(o),d=y.toneMapping,y.toneMapping=Bi,!0},this.hasRenderPass=function(){return b},this.end=function(y,S){y.toneMapping=d,x=!0;let M=o,w=a;for(let v=0;v<_.length;v++){let T=_[v];T.enabled!==!1&&(T.render(y,w,M,S),T.needsSwap!==!1&&(M=w,w=w===a?c:a))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},Ce.getTransfer(p)===ke&&(h.defines.SRGB_TRANSFER="");let v=sM[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var y0=new qn,rf=new Os(1,1),v0=new _a,M0=new _l,b0=new Ta,t0=[],e0=[],n0=new Float32Array(16),i0=new Float32Array(9),s0=new Float32Array(4);function Io(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=t0[s];if(r===void 0&&(r=new Float32Array(s),t0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function wn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function An(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hh(i,t){let e=e0[t];e===void 0&&(e=new Int32Array(t),e0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function oM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function aM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2fv(this.addr,t),An(e,t)}}function cM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(wn(e,t))return;i.uniform3fv(this.addr,t),An(e,t)}}function lM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4fv(this.addr,t),An(e,t)}}function hM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;s0.set(n),i.uniformMatrix2fv(this.addr,!1,s0),An(e,n)}}function uM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;i0.set(n),i.uniformMatrix3fv(this.addr,!1,i0),An(e,n)}}function dM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;n0.set(n),i.uniformMatrix4fv(this.addr,!1,n0),An(e,n)}}function fM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2iv(this.addr,t),An(e,t)}}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3iv(this.addr,t),An(e,t)}}function gM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4iv(this.addr,t),An(e,t)}}function xM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _M(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2uiv(this.addr,t),An(e,t)}}function yM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3uiv(this.addr,t),An(e,t)}}function vM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4uiv(this.addr,t),An(e,t)}}function MM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rf.compareFunction=e.isReversedDepthBuffer()?Lh:Ih,r=rf):r=y0,e.setTexture2D(t||r,s)}function bM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||M0,s)}function SM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||b0,s)}function EM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||v0,s)}function TM(i){switch(i){case 5126:return oM;case 35664:return aM;case 35665:return cM;case 35666:return lM;case 35674:return hM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return _M;case 36295:return yM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return EM}}function wM(i,t){i.uniform1fv(this.addr,t)}function AM(i,t){let e=Io(t,this.size,2);i.uniform2fv(this.addr,e)}function RM(i,t){let e=Io(t,this.size,3);i.uniform3fv(this.addr,e)}function CM(i,t){let e=Io(t,this.size,4);i.uniform4fv(this.addr,e)}function PM(i,t){let e=Io(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function IM(i,t){let e=Io(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function LM(i,t){let e=Io(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function DM(i,t){i.uniform1iv(this.addr,t)}function NM(i,t){i.uniform2iv(this.addr,t)}function UM(i,t){i.uniform3iv(this.addr,t)}function FM(i,t){i.uniform4iv(this.addr,t)}function BM(i,t){i.uniform1uiv(this.addr,t)}function OM(i,t){i.uniform2uiv(this.addr,t)}function HM(i,t){i.uniform3uiv(this.addr,t)}function zM(i,t){i.uniform4uiv(this.addr,t)}function kM(i,t,e){let n=this.cache,s=t.length,r=Hh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=rf:o=y0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function GM(i,t,e){let n=this.cache,s=t.length,r=Hh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||M0,r[o])}function VM(i,t,e){let n=this.cache,s=t.length,r=Hh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||b0,r[o])}function WM(i,t,e){let n=this.cache,s=t.length,r=Hh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||v0,r[o])}function XM(i){switch(i){case 5126:return wM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return IM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return BM;case 36294:return OM;case 36295:return HM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return WM}}var of=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=TM(e.type)}},af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=XM(e.type)}},cf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},nf=/(\w+)(\])?(\[|\.)?/g;function r0(i,t){i.seq.push(t),i.map[t.id]=t}function qM(i,t,e){let n=i.name,s=n.length;for(nf.lastIndex=0;;){let r=nf.exec(n),o=nf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){r0(e,l===void 0?new of(a,i,t):new af(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new cf(a),r0(e,u)),e=u}}}var Po=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);qM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function o0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var YM=37297,ZM=0;function JM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var a0=new le;function $M(i){Ce._getMatrix(a0,Ce.workingColorSpace,i);let t=`mat3( ${a0.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case ma:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function c0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+JM(i.getShaderSource(t),a)}else return r}function KM(i,t){let e=$M(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jM={[wd]:"Linear",[Ad]:"Reinhard",[Rd]:"Cineon",[Cd]:"ACESFilmic",[Id]:"AgX",[Ld]:"Neutral",[Pd]:"Custom"};function QM(i,t){let e=jM[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nh=new N;function tb(){Ce.getLuminanceCoefficients(Nh);let i=Nh.x.toFixed(4),t=Nh.y.toFixed(4),e=Nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ec).join(`
`)}function nb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ib(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ec(i){return i!==""}function l0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(i){return i.replace(sb,ob)}var rb=new Map;function ob(i,t){let e=ye[t];if(e===void 0){let n=rb.get(t);if(n!==void 0)e=ye[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lf(e)}var ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(i){return i.replace(ab,cb)}function cb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function d0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var lb={[Va]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function hb(i){return lb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ub={[Xs]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function db(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ub[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fb={[gr]:"ENVMAP_MODE_REFRACTION"};function pb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mb={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[Tm]:"ENVMAP_BLENDING_MIX",[wm]:"ENVMAP_BLENDING_ADD"};function gb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mb[i.combine]||"ENVMAP_BLENDING_NONE"}function xb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _b(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=hb(e),l=db(e),h=pb(e),u=gb(e),f=xb(e),p=eb(e),g=nb(r),x=s.createProgram(),d,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ec).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ec).join(`
`),m.length>0&&(m+=`
`)):(d=[d0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ec).join(`
`),m=[d0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?ye.tonemapping_pars_fragment:"",e.toneMapping!==Bi?QM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,KM("linearToOutputTexel",e.outputColorSpace),tb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ec).join(`
`)),o=lf(o),o=l0(o,e),o=h0(o,e),a=lf(a),a=l0(a,e),a=h0(a,e),o=u0(o),a=u0(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+d+o,y=_+m+a,S=o0(s,s.VERTEX_SHADER,b),M=o0(s,s.FRAGMENT_SHADER,y);s.attachShader(x,S),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(M)||"",U=I.trim(),G=D.trim(),O=C.trim(),$=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,M);else{let X=c0(s,S,"vertex"),J=c0(s,M,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+X+`
`+J)}else U!==""?jt("WebGLProgram: Program Info Log:",U):(G===""||O==="")&&(H=!1);H&&(P.diagnostics={runnable:$,programLog:U,vertexShader:{log:G,prefix:d},fragmentShader:{log:O,prefix:m}})}s.deleteShader(S),s.deleteShader(M),v=new Po(s,x),T=ib(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,YM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ZM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var yb=0,hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uf(t),e.set(t,n)),n}},uf=class{constructor(t){this.id=yb++,this.code=t,this.usedTimes=0}};function vb(i){return i===Zs||i===$a||i===Ka}function Mb(i,t,e,n,s,r){let o=new ya,a=new hf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,T,R,P,I,D){let C=P.fog,U=I.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=t.get(v.envMap||G,O),H=$&&$.mapping===Wa?$.image.height:null,X=p[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&jt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=J!==void 0?J.length:0,wt=0;U.morphAttributes.position!==void 0&&(wt=1),U.morphAttributes.normal!==void 0&&(wt=2),U.morphAttributes.color!==void 0&&(wt=3);let ae,se,Yt,nt;if(X){let He=ns[X];ae=He.vertexShader,se=He.fragmentShader}else{ae=v.vertexShader,se=v.fragmentShader;let He=a.getVertexShaderStage(v),Ne=a.getFragmentShaderStage(v);a.update(v,He,Ne),Yt=He.id,nt=Ne.id}let ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,Rt=I.isBatchedMesh===!0,Jt=!!v.map,De=!!v.matcap,rt=!!$,ht=!!v.aoMap,ft=!!v.lightMap,dt=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,Nt=!!v.displacementMap,Gt=!!v.emissiveMap,$t=!!v.metalnessMap,ne=!!v.roughnessMap,B=v.anisotropy>0,Ae=v.clearcoat>0,ge=v.dispersion>0,L=v.retroreflectivity>0,E=v.iridescence>0,W=v.sheen>0,q=v.transmission>0,et=B&&!!v.anisotropyMap,gt=Ae&&!!v.clearcoatMap,yt=Ae&&!!v.clearcoatNormalMap,it=Ae&&!!v.clearcoatRoughnessMap,at=E&&!!v.iridescenceMap,St=E&&!!v.iridescenceThicknessMap,Dt=W&&!!v.sheenColorMap,vt=W&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Ht=!!v.specularColorMap,Zt=!!v.specularIntensityMap,he=q&&!!v.transmissionMap,k=q&&!!v.thicknessMap,Mt=!!v.gradientMap,st=!!v.alphaMap,Et=v.alphaTest>0,It=!!v.alphaHash,lt=!!v.extensions,Vt=Bi;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Bt={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:ae,fragmentShader:se,defines:v.defines,customVertexShaderID:Yt,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Jt,matcap:De,envMap:rt,envMapMode:rt&&$.mapping,envMapCubeUVHeight:H,aoMap:ht,lightMap:ft,bumpMap:dt,normalMap:xt,displacementMap:Nt,emissiveMap:Gt,normalMapObjectSpace:xt&&v.normalMapType===Cm,normalMapTangentSpace:xt&&v.normalMapType===ja,packedNormalMap:xt&&v.normalMapType===ja&&vb(v.normalMap.format),metalnessMap:$t,roughnessMap:ne,anisotropy:B,anisotropyMap:et,clearcoat:Ae,clearcoatMap:gt,clearcoatNormalMap:yt,clearcoatRoughnessMap:it,dispersion:ge,retroreflection:L,iridescence:E,iridescenceMap:at,iridescenceThicknessMap:St,sheen:W,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:_t,specularColorMap:Ht,specularIntensityMap:Zt,transmission:q,transmissionMap:he,thicknessMap:k,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===Fi&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:Et,alphaHash:It,combine:v.combine,mapUv:Jt&&g(v.map.channel),aoMapUv:ht&&g(v.aoMap.channel),lightMapUv:ft&&g(v.lightMap.channel),bumpMapUv:dt&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:Nt&&g(v.displacementMap.channel),emissiveMapUv:Gt&&g(v.emissiveMap.channel),metalnessMapUv:$t&&g(v.metalnessMap.channel),roughnessMapUv:ne&&g(v.roughnessMap.channel),anisotropyMapUv:et&&g(v.anisotropyMap.channel),clearcoatMapUv:gt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(v.sheenRoughnessMap.channel),specularMapUv:_t&&g(v.specularMap.channel),specularColorMapUv:Ht&&g(v.specularColorMap.channel),specularIntensityMapUv:Zt&&g(v.specularIntensityMap.channel),transmissionMapUv:he&&g(v.transmissionMap.channel),thicknessMapUv:k&&g(v.thicknessMap.channel),alphaMapUv:st&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||B),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(Jt||st),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:bt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Jt&&v.map.isVideoTexture===!0&&Ce.getTransfer(v.map.colorSpace)===ke,decodeVideoTextureEmissive:Gt&&v.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(v.emissiveMap.colorSpace)===ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===me,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function d(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(T,v),_(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function _(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let T=p[v.type],R;if(T){let P=ns[T];R=Ym.clone(P.uniforms)}else R=v.uniforms;return R}function y(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new _b(i,T,v,s),l.push(R),h.set(T,R)),R}function S(v){if(--v.usedTimes===0){let T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:l,dispose:w}}function bb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function f0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function p0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,x,d,m){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:d,group:m},i[t]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=g,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=d,_.group=m),t++,_}function c(f,p,g,x,d,m,_){_.reversedDepth===!0&&(d=-d);let b=a(f,p,g,x,d,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):e.push(b)}function l(f,p,g,x,d,m){let _=a(f,p,g,x,d,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,p){e.length>1&&e.sort(f||Sb),n.length>1&&n.sort(p||f0),s.length>1&&s.sort(p||f0)}function u(){for(let f=t,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Eb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new p0,i.set(n,[o])):s>=r.length?(o=new p0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new pt};break;case"SpotLight":e={position:new N,direction:new N,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function wb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ab=0;function Rb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cb(i){let t=new Tb,e=wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new Me,o=new Me;function a(l){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,g=0,x=0,d=0,m=0,_=0,b=0,y=0,S=0,M=0,w=0,v=0,T=0,R=0;l.sort(Rb);for(let I=0,D=l.length;I<D;I++){let C=l[I],U=C.color,G=C.intensity,O=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Zs?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*G,u+=U.g*G,f+=U.b*G;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],G);R++}else if(C.isSunLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=$;let mt=X.getViewportCount();for(let wt=0;wt<mt;wt++)n.sunShadowMatrix[x+wt]=X.getMatrix(wt),n.sunShadowCascade[x+wt]=X._cascadeData[wt];x+=mt,g++}n.sun[p]=H,p++}else if(C.isDirectionalLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=H,d++}else if(C.isSpotLight){let H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(G),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;let X=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=X.matrix,C.castShadow){let J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=$,w++}_++}else if(C.isRectAreaLight){let H=t.get(C);H.color.copy(U).multiplyScalar(G),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=H,b++}else if(C.isPointLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let X=C.shadow,J=e.get(C);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=C.shadow.matrix,M++}n.point[m]=H,m++}else if(C.isHemisphereLight){let H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(G),H.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[y]=H,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==v||P.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=d,n.spot.length=_,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.sunLength=p,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=v,P.numLightProbes=R,n.version=Ab++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0,d=0,m=h.matrixWorldInverse;for(let _=0,b=l.length;_<b;_++){let y=l[_];if(y.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let S=n.hemi[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}}}return{setup:a,setupView:c,state:n}}function m0(i){let t=new Cb(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Pb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new m0(i),t.set(s,[a])):r>=o.length?(a=new m0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ib=`void main() {
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
}`,Db=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Nb=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],g0=new Me,tc=new N,sf=new N;function Ub(i,t,e){let n=new xo,s=new ut,r=new ut,o=new on,a=new Pl,c=new Il,l={},h=e.maxTextureSize,u={[Ws]:Tn,[Tn]:Ws,[me]:me},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Ib,fragmentShader:Lb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new K(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let m=this.type;this.render=function(M,w,v){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;this.type===om&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Va);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ts),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=m!==this.type;D&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=M.length;C<U;C++){let G=M[C],O=G.shadow;if(O===void 0){jt("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let $=O.getFrameExtents();s.multiply($),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,O.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||D===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Eo){if(G.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nn(s.x,s.y,{format:Zs,type:fi,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Os(s.x,s.y,bi),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=Ji,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn}else G.isPointLight?(O.map=new Fh(s.x),O.map.depthTexture=new bl(s.x,Oi)):(O.map=new Nn(s.x,s.y),O.map.depthTexture=new Os(s.x,s.y,Oi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=Ji,this.type===Va?(O.map.depthTexture.compareFunction=H?Lh:Ih,O.map.depthTexture.minFilter=Dn,O.map.depthTexture.magFilter=Dn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let X=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,v);for(let J=0;J<X;J++){let mt=O.getCamera(J);if(G.isPointLight){let wt=O.camera,ae=O.matrix,se=G.distance||wt.far;se!==wt.far&&(wt.far=se,wt.updateProjectionMatrix()),tc.setFromMatrixPosition(G.matrixWorld),wt.position.copy(tc),sf.copy(wt.position),sf.add(Db[J]),wt.up.copy(Nb[J]),wt.lookAt(sf),wt.updateMatrixWorld(),ae.makeTranslation(-tc.x,-tc.y,-tc.z),g0.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(g0,wt.coordinateSystem,wt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,J),i.clear();else{J===0&&(i.setRenderTarget(O.map),i.clear());let wt=O.getViewport(J);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),I.viewport(o)}n=O.getFrustum(J),y(w,v,mt,G,this.type)}O.isPointLightShadow!==!0&&this.type===Eo&&_(O,v),O.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(T,R,P)};function _(M,w){let v=t.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Nn(s.x,s.y,{format:Zs,type:fi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,v,f,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,v,p,x,null)}function b(M,w,v,T){let R=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=R.uuid,D=w.uuid,C=l[I];C===void 0&&(C={},l[I]=C);let U=C[D];U===void 0&&(U=R.clone(),C[D]=U,w.addEventListener("dispose",S)),R=U}if(R.visible=w.visible,R.wireframe=w.wireframe,T===Eo?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=v}return R}function y(M,w,v,T,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Eo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let D=t.update(M),C=M.material;if(Array.isArray(C)){let U=D.groups;for(let G=0,O=U.length;G<O;G++){let $=U[G],H=C[$.materialIndex];if(H&&H.visible){let X=b(M,H,T,R);M.onBeforeShadow(i,M,w,v,D,X,$),i.renderBufferDirect(v,null,D,X,M,$),M.onAfterShadow(i,M,w,v,D,X,$)}}}else if(C.visible){let U=b(M,C,T,R);M.onBeforeShadow(i,M,w,v,D,U,null),i.renderBufferDirect(v,null,D,U,M,null),M.onAfterShadow(i,M,w,v,D,U,null)}}let I=M.children;for(let D=0,C=I.length;D<C;D++)y(I[D],w,v,T,R)}function S(M){M.target.removeEventListener("dispose",S);for(let v in l){let T=l[v],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Fb(i,t){function e(){let k=!1,Mt=new on,st=null,Et=new on(0,0,0,0);return{setMask:function(It){st!==It&&!k&&(i.colorMask(It,It,It,It),st=It)},setLocked:function(It){k=It},setClear:function(It,lt,Vt,Bt,He){He===!0&&(It*=Bt,lt*=Bt,Vt*=Bt),Mt.set(It,lt,Vt,Bt),Et.equals(Mt)===!1&&(i.clearColor(It,lt,Vt,Bt),Et.copy(Mt))},reset:function(){k=!1,st=null,Et.set(-1,0,0,0)}}}function n(){let k=!1,Mt=!1,st=null,Et=null,It=null;return{setReversed:function(lt){if(Mt!==lt){let Vt=t.get("EXT_clip_control");lt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Mt=lt;let Bt=It;It=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(lt){lt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(lt){st!==lt&&!k&&(i.depthMask(lt),st=lt)},setFunc:function(lt){if(Mt&&(lt=zm[lt]),Et!==lt){switch(lt){case ol:i.depthFunc(i.NEVER);break;case al:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case co:i.depthFunc(i.LEQUAL);break;case ll:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=lt}},setLocked:function(lt){k=lt},setClear:function(lt){It!==lt&&(It=lt,Mt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){k=!1,st=null,Et=null,It=null,Mt=!1}}}function s(){let k=!1,Mt=null,st=null,Et=null,It=null,lt=null,Vt=null,Bt=null,He=null;return{setTest:function(Ne){k||(Ne?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Ne){Mt!==Ne&&!k&&(i.stencilMask(Ne),Mt=Ne)},setFunc:function(Ne,Vn,oi){(st!==Ne||Et!==Vn||It!==oi)&&(i.stencilFunc(Ne,Vn,oi),st=Ne,Et=Vn,It=oi)},setOp:function(Ne,Vn,oi){(lt!==Ne||Vt!==Vn||Bt!==oi)&&(i.stencilOp(Ne,Vn,oi),lt=Ne,Vt=Vn,Bt=oi)},setLocked:function(Ne){k=Ne},setClear:function(Ne){He!==Ne&&(i.clearStencil(Ne),He=Ne)},reset:function(){k=!1,Mt=null,st=null,Et=null,It=null,lt=null,Vt=null,Bt=null,He=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},p=new WeakMap,g=[],x=null,d=!1,m=null,_=null,b=null,y=null,S=null,M=null,w=null,v=new pt(0,0,0),T=0,R=!1,P=null,I=null,D=null,C=null,U=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=$>=2);let X=null,J={},mt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),ae=new on().fromArray(mt),se=new on().fromArray(wt);function Yt(k,Mt,st,Et){let It=new Uint8Array(4),lt=i.createTexture();i.bindTexture(k,lt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<st;Vt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return lt}let nt={};nt[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(co),dt(!1),xt(Md),ot(i.CULL_FACE),ht(ts);function ot(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function bt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ot(k,Mt){return f[k]!==Mt?(i.bindFramebuffer(k,Mt),f[k]=Mt,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Mt),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Rt(k,Mt){let st=g,Et=!1;if(k){st=p.get(Mt),st===void 0&&(st=[],p.set(Mt,st));let It=k.textures;if(st.length!==It.length||st[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Vt=It.length;lt<Vt;lt++)st[lt]=i.COLOR_ATTACHMENT0+lt;st.length=It.length,Et=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Et=!0);Et&&i.drawBuffers(st)}function Jt(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let De={[mr]:i.FUNC_ADD,[cm]:i.FUNC_SUBTRACT,[lm]:i.FUNC_REVERSE_SUBTRACT};De[hm]=i.MIN,De[um]=i.MAX;let rt={[dm]:i.ZERO,[fm]:i.ONE,[pm]:i.SRC_COLOR,[Ed]:i.SRC_ALPHA,[vm]:i.SRC_ALPHA_SATURATE,[_m]:i.DST_COLOR,[gm]:i.DST_ALPHA,[mm]:i.ONE_MINUS_SRC_COLOR,[Td]:i.ONE_MINUS_SRC_ALPHA,[ym]:i.ONE_MINUS_DST_COLOR,[xm]:i.ONE_MINUS_DST_ALPHA,[Mm]:i.CONSTANT_COLOR,[bm]:i.ONE_MINUS_CONSTANT_COLOR,[Sm]:i.CONSTANT_ALPHA,[Em]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(k,Mt,st,Et,It,lt,Vt,Bt,He,Ne){if(k===ts){d===!0&&(bt(i.BLEND),d=!1);return}if(d===!1&&(ot(i.BLEND),d=!0),k!==am){if(k!==m||Ne!==R){if((_!==mr||S!==mr)&&(i.blendEquation(i.FUNC_ADD),_=mr,S=mr),Ne)switch(k){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kn:i.blendFunc(i.ONE,i.ONE);break;case bd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",k);break}else switch(k){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bd:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sd:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",k);break}b=null,y=null,M=null,w=null,v.set(0,0,0),T=0,m=k,R=Ne}return}It=It||Mt,lt=lt||st,Vt=Vt||Et,(Mt!==_||It!==S)&&(i.blendEquationSeparate(De[Mt],De[It]),_=Mt,S=It),(st!==b||Et!==y||lt!==M||Vt!==w)&&(i.blendFuncSeparate(rt[st],rt[Et],rt[lt],rt[Vt]),b=st,y=Et,M=lt,w=Vt),(Bt.equals(v)===!1||He!==T)&&(i.blendColor(Bt.r,Bt.g,Bt.b,He),v.copy(Bt),T=He),m=k,R=!1}function ft(k,Mt){k.side===me?bt(i.CULL_FACE):ot(i.CULL_FACE);let st=k.side===Tn;Mt&&(st=!st),dt(st),k.blending===Fi&&k.transparent===!1?ht(ts):ht(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Et=k.stencilWrite;a.setTest(Et),Et&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function xt(k){k!==sm?(ot(i.CULL_FACE),k!==I&&(k===Md?i.cullFace(i.BACK):k===rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),I=k}function Nt(k){k!==D&&(O&&i.lineWidth(k),D=k)}function Gt(k,Mt,st){k?(ot(i.POLYGON_OFFSET_FILL),(C!==Mt||U!==st)&&(C=Mt,U=st,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,st))):bt(i.POLYGON_OFFSET_FILL)}function $t(k){k?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ne(k){k===void 0&&(k=i.TEXTURE0+G-1),X!==k&&(i.activeTexture(k),X=k)}function B(k,Mt,st){st===void 0&&(X===null?st=i.TEXTURE0+G-1:st=X);let Et=J[st];Et===void 0&&(Et={type:void 0,texture:void 0},J[st]=Et),(Et.type!==k||Et.texture!==Mt)&&(X!==st&&(i.activeTexture(st),X=st),i.bindTexture(k,Mt||nt[k]),Et.type=k,Et.texture=Mt)}function Ae(){let k=J[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function gt(){try{i.texStorage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function yt(){try{i.texStorage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function it(){try{i.texImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function at(){try{i.texImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function St(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Dt(k,Mt){u[k]!==Mt&&(i.pixelStorei(k,Mt),u[k]=Mt)}function vt(k){ae.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ae.copy(k))}function _t(k){se.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),se.copy(k))}function Ht(k,Mt){let st=l.get(Mt);st===void 0&&(st=new WeakMap,l.set(Mt,st));let Et=st.get(k);Et===void 0&&(Et=i.getUniformBlockIndex(Mt,k.name),st.set(k,Et))}function Zt(k,Mt){let Et=l.get(Mt).get(k);c.get(Mt)!==Et&&(i.uniformBlockBinding(Mt,Et,k.__bindingPointIndex),c.set(Mt,Et))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,J={},f={},p=new WeakMap,g=[],x=null,d=!1,m=null,_=null,b=null,y=null,S=null,M=null,w=null,v=new pt(0,0,0),T=0,R=!1,P=null,I=null,D=null,C=null,U=null,ae.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:Ot,drawBuffers:Rt,useProgram:Jt,setBlending:ht,setMaterial:ft,setFlipSided:dt,setCullFace:xt,setLineWidth:Nt,setPolygonOffset:Gt,setScissorTest:$t,activeTexture:ne,bindTexture:B,unbindTexture:Ae,compressedTexImage2D:ge,compressedTexImage3D:L,texImage2D:it,texImage3D:at,pixelStorei:Dt,getParameter:St,updateUBOMapping:Ht,uniformBlockBinding:Zt,texStorage2D:gt,texStorage3D:yt,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:et,scissor:vt,viewport:_t,reset:he}}function Bb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return g?new OffscreenCanvas(L,E):ga("canvas")}function d(L,E,W){let q=1,et=ge(L);if((et.width>W||et.height>W)&&(q=W/Math.max(et.width,et.height)),q<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let gt=Math.floor(q*et.width),yt=Math.floor(q*et.height);f===void 0&&(f=x(gt,yt));let it=E?x(gt,yt):f;return it.width=gt,it.height=yt,it.getContext("2d").drawImage(L,0,0,gt,yt),jt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+gt+"x"+yt+")."),it}else return"data"in L&&jt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function m(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,E,W,q,et,gt=!1){if(L!==null){if(i[L]!==void 0)return i[L];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let yt;q&&(yt=t.get("EXT_texture_norm16"),yt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=E;if(E===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8),W===i.UNSIGNED_SHORT&&yt&&(it=yt.R16_EXT),W===i.SHORT&&yt&&(it=yt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),E===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8),W===i.UNSIGNED_SHORT&&yt&&(it=yt.RG16_EXT),W===i.SHORT&&yt&&(it=yt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&yt&&(it=yt.RGB16_EXT),W===i.SHORT&&yt&&(it=yt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),E===i.RGBA){let at=gt?ma:Ce.getTransfer(et);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=at===ke?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&yt&&(it=yt.RGBA16_EXT),W===i.SHORT&&yt&&(it=yt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(L,E){let W;return L?E===null||E===Oi||E===wo?W=i.DEPTH24_STENCIL8:E===bi?W=i.DEPTH32F_STENCIL8:E===To&&(W=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===wo?W=i.DEPTH_COMPONENT24:E===bi?W=i.DEPTH_COMPONENT32F:E===To&&(W=i.DEPTH_COMPONENT16),W}function M(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==vn&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){let E=L.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function v(L){let E=L.target;E.removeEventListener("dispose",v),P(E)}function T(L){let E=n.get(L);if(E.__webglInit===void 0)return;let W=L.source,q=p.get(W);if(q){let et=q[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(L),Object.keys(q).length===0&&p.delete(W)}n.remove(L)}function R(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let W=L.source,q=p.get(W);delete q[E.__cacheKey],o.memory.textures--}function P(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let et=0;et<E.__webglFramebuffer[q].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[q][et]);else i.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)i.deleteFramebuffer(E.__webglFramebuffer[q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=L.textures;for(let q=0,et=W.length;q<et;q++){let gt=n.get(W[q]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(W[q])}n.remove(L)}let I=0;function D(){I=0}function C(){return I}function U(L){I=L}function G(){let L=I;return L>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function O(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){let W=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let q=L.image;if(q===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function H(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){bt(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function X(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){bt(W,L,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function J(L,E){let W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){Ot(W,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let mt={[lo]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},wt={[vn]:i.NEAREST,[Am]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Zl]:i.LINEAR_MIPMAP_NEAREST,[qs]:i.LINEAR_MIPMAP_LINEAR},ae={[Im]:i.NEVER,[Fm]:i.ALWAYS,[Lm]:i.LESS,[Ih]:i.LEQUAL,[Dm]:i.EQUAL,[Lh]:i.GEQUAL,[Nm]:i.GREATER,[Um]:i.NOTEQUAL};function se(L,E){if(E.type===bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===Zl||E.magFilter===Xa||E.magFilter===qs||E.minFilter===Dn||E.minFilter===Zl||E.minFilter===Xa||E.minFilter===qs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,mt[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,mt[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,mt[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,wt[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,wt[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==Xa&&E.minFilter!==qs||E.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Yt(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));let q=E.source,et=p.get(q);et===void 0&&(et={},p.set(q,et));let gt=O(E);if(gt!==L.__cacheKey){et[gt]===void 0&&(et[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),et[gt].usedTimes++;let yt=et[L.__cacheKey];yt!==void 0&&(et[L.__cacheKey].usedTimes--,yt.usedTimes===0&&R(E)),L.__cacheKey=gt,L.__webglTexture=et[gt].texture}return W}function nt(L,E,W){return Math.floor(Math.floor(L/W)/E)}function ot(L,E,W,q){let gt=L.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,q,E.data);else{gt.sort((Dt,vt)=>Dt.start-vt.start);let yt=0;for(let Dt=1;Dt<gt.length;Dt++){let vt=gt[yt],_t=gt[Dt],Ht=vt.start+vt.count,Zt=nt(_t.start,E.width,4),he=nt(vt.start,E.width,4);_t.start<=Ht+1&&Zt===he&&nt(_t.start+_t.count-1,E.width,4)===Zt?vt.count=Math.max(vt.count,_t.start+_t.count-vt.start):(++yt,gt[yt]=_t)}gt.length=yt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Dt=0,vt=gt.length;Dt<vt;Dt++){let _t=gt[Dt],Ht=Math.floor(_t.start/4),Zt=Math.ceil(_t.count/4),he=Ht%E.width,k=Math.floor(Ht/E.width),Mt=Zt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,he),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,he,k,Mt,st,W,q,E.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function bt(L,E,W){let q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=i.TEXTURE_3D);let et=Yt(L,E),gt=E.source;e.bindTexture(q,L.__webglTexture,i.TEXTURE0+W);let yt=n.get(gt);if(gt.version!==yt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let st=Ce.getPrimaries(Ce.workingColorSpace),Et=E.colorSpace===ys?null:Ce.getPrimaries(E.colorSpace),It=E.colorSpace===ys||st===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let at=d(E.image,!1,s.maxTextureSize);at=Ae(E,at);let St=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),vt=y(E.internalFormat,St,Dt,E.normalized,E.colorSpace,E.isVideoTexture);se(q,E);let _t,Ht=E.mipmaps,Zt=E.isVideoTexture!==!0,he=yt.__version===void 0||et===!0,k=gt.dataReady,Mt=M(E,at);if(E.isDepthTexture)vt=S(E.format===Ys,E.type),he&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,vt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,St,Dt,null));else if(E.isDataTexture)if(Ht.length>0){Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,Ht[0].width,Ht[0].height);for(let st=0,Et=Ht.length;st<Et;st++)_t=Ht[st],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,St,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,st,vt,_t.width,_t.height,0,St,Dt,_t.data);E.generateMipmaps=!1}else Zt?(he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,at.width,at.height),k&&ot(E,at,St,Dt)):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,St,Dt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,Ht[0].width,Ht[0].height,at.depth);for(let st=0,Et=Ht.length;st<Et;st++)if(_t=Ht[st],E.format!==Si)if(St!==null)if(Zt){if(k)if(E.layerUpdates.size>0){let It=qd(_t.width,_t.height,E.format,E.type);for(let lt of E.layerUpdates){let Vt=_t.data.subarray(lt*It/_t.data.BYTES_PER_ELEMENT,(lt+1)*It/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,lt,_t.width,_t.height,1,St,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,at.depth,St,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,at.depth,0,_t.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,at.depth,St,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,at.depth,0,St,Dt,_t.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,Ht[0].width,Ht[0].height);for(let st=0,Et=Ht.length;st<Et;st++)_t=Ht[st],E.format!==Si?St!==null?Zt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,st,vt,_t.width,_t.height,0,_t.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,St,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,st,vt,_t.width,_t.height,0,St,Dt,_t.data)}else if(E.isDataArrayTexture)if(Zt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,at.width,at.height,at.depth),k)if(E.layerUpdates.size>0){let st=qd(at.width,at.height,E.format,E.type);for(let Et of E.layerUpdates){let It=at.data.subarray(Et*st/at.data.BYTES_PER_ELEMENT,(Et+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,at.width,at.height,1,St,Dt,It)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,at.width,at.height,at.depth,0,St,Dt,at.data);else if(E.isData3DTexture)Zt?(he&&e.texStorage3D(i.TEXTURE_3D,Mt,vt,at.width,at.height,at.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,vt,at.width,at.height,at.depth,0,St,Dt,at.data);else if(E.isFramebufferTexture){if(he)if(Zt)e.texStorage2D(i.TEXTURE_2D,Mt,vt,at.width,at.height);else{let st=at.width,Et=at.height;for(let It=0;It<Mt;It++)e.texImage2D(i.TEXTURE_2D,It,vt,st,Et,0,St,Dt,null),st>>=1,Et>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),at.parentNode!==st){st.appendChild(at),u.add(E),st.onpaint=Et=>{let It=Et.changedElements;for(let lt of u)It.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let It=i.RGBA,lt=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,lt,Vt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Zt&&he){let st=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Mt,vt,st.width,st.height)}for(let st=0,Et=Ht.length;st<Et;st++)_t=Ht[st],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,St,Dt,_t):e.texImage2D(i.TEXTURE_2D,st,vt,St,Dt,_t);E.generateMipmaps=!1}else if(Zt){if(he){let st=ge(at);e.texStorage2D(i.TEXTURE_2D,Mt,vt,st.width,st.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,vt,St,Dt,at);m(E)&&_(q),yt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ot(L,E,W){if(E.image.length!==6)return;let q=Yt(L,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);let gt=n.get(et);if(et.version!==gt.__version||q===!0){e.activeTexture(i.TEXTURE0+W);let yt=Ce.getPrimaries(Ce.workingColorSpace),it=E.colorSpace===ys?null:Ce.getPrimaries(E.colorSpace),at=E.colorSpace===ys||yt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let St=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let lt=0;lt<6;lt++)!St&&!Dt?vt[lt]=d(E.image[lt],!0,s.maxCubemapSize):vt[lt]=Dt?E.image[lt].image:E.image[lt],vt[lt]=Ae(E,vt[lt]);let _t=vt[0],Ht=r.convert(E.format,E.colorSpace),Zt=r.convert(E.type),he=y(E.internalFormat,Ht,Zt,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Mt=gt.__version===void 0||q===!0,st=et.dataReady,Et=M(E,_t);se(i.TEXTURE_CUBE_MAP,E);let It;if(St){k&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,_t.width,_t.height);for(let lt=0;lt<6;lt++){It=vt[lt].mipmaps;for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];E.format!==Si?Ht!==null?k?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Bt.width,Bt.height,Ht,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,he,Bt.width,Bt.height,0,Bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Bt.width,Bt.height,Ht,Zt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,he,Bt.width,Bt.height,0,Ht,Zt,Bt.data)}}}else{if(It=E.mipmaps,k&&Mt){It.length>0&&Et++;let lt=ge(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Dt){k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,vt[lt].width,vt[lt].height,Ht,Zt,vt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,he,vt[lt].width,vt[lt].height,0,Ht,Zt,vt[lt].data);for(let Vt=0;Vt<It.length;Vt++){let He=It[Vt].image[lt].image;k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,He.width,He.height,Ht,Zt,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,he,He.width,He.height,0,Ht,Zt,He.data)}}else{k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ht,Zt,vt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,he,Ht,Zt,vt[lt]);for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Ht,Zt,Bt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,he,Ht,Zt,Bt.image[lt])}}}m(E)&&_(i.TEXTURE_CUBE_MAP),gt.__version=et.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Rt(L,E,W,q,et,gt){let yt=r.convert(W.format,W.colorSpace),it=r.convert(W.type),at=y(W.internalFormat,yt,it,W.normalized,W.colorSpace),St=n.get(E),Dt=n.get(W);if(Dt.__renderTarget=E,!St.__hasExternalTextures){let vt=Math.max(1,E.width>>gt),_t=Math.max(1,E.height>>gt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,gt,at,vt,_t,E.depth,0,yt,it,null):e.texImage2D(et,gt,at,vt,_t,0,yt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ne(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,et,Dt.__webglTexture,0,$t(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,et,Dt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(L,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let q=E.depthTexture,et=q&&q.isDepthTexture?q.type:null,gt=S(E.stencilBuffer,et),yt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(E),gt,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(E),gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,L)}else{let q=E.textures;for(let et=0;et<q.length;et++){let gt=q[et],yt=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),at=y(gt.internalFormat,yt,it,gt.normalized,gt.colorSpace);ne(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(E),at,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(E),at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(L,E,W){let q=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(E.depthTexture);if(et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q){if(et.__webglInit===void 0&&(et.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),se(i.TEXTURE_CUBE_MAP,E.depthTexture);let St=r.convert(E.depthTexture.format),Dt=r.convert(E.depthTexture.type),vt;E.depthTexture.format===Ji?vt=i.DEPTH_COMPONENT24:E.depthTexture.format===Ys&&(vt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,vt,E.width,E.height,0,St,Dt,null)}}else $(E.depthTexture,0);let gt=et.__webglTexture,yt=$t(E),it=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,at=E.depthTexture.format===Ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ji)ne(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else if(E.depthTexture.format===Ys)ne(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(L){let E=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){let et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",et)};q.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=q}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)De(E.__webglFramebuffer[q],L,q);else{let q=L.texture.mipmaps;q&&q.length>0?De(E.__webglFramebuffer[0],L,0):De(E.__webglFramebuffer,L,0)}else if(W){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=i.createRenderbuffer(),Jt(E.__webglDepthbuffer[q],L,!1);else{let et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}else{let q=L.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Jt(E.__webglDepthbuffer,L,!1);else{let et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(L,E,W){let q=n.get(L);E!==void 0&&Rt(q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&rt(L)}function ft(L){let E=L.texture,W=n.get(L),q=n.get(E);L.addEventListener("dispose",v);let et=L.textures,gt=L.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=E.version,o.memory.textures++),gt){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let at=0;at<E.mipmaps.length;at++)W.__webglFramebuffer[it][at]=i.createFramebuffer()}else W.__webglFramebuffer[it]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)W.__webglFramebuffer[it]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(yt)for(let it=0,at=et.length;it<at;it++){let St=n.get(et[it]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ne(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let at=et[it];W.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let St=r.convert(at.format,at.colorSpace),Dt=r.convert(at.type),vt=y(at.internalFormat,St,Dt,at.normalized,at.colorSpace,L.isXRRenderTarget===!0),_t=$t(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,W.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),se(i.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Rt(W.__webglFramebuffer[it][at],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else Rt(W.__webglFramebuffer[it],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(E)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,at=et.length;it<at;it++){let St=et[it],Dt=n.get(St),vt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Dt.__webglTexture),se(vt,St),Rt(W.__webglFramebuffer,L,St,i.COLOR_ATTACHMENT0+it,vt,0),m(St)&&_(vt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(it=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),se(it,E),E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Rt(W.__webglFramebuffer[at],L,E,i.COLOR_ATTACHMENT0,it,at);else Rt(W.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,it,0);m(E)&&_(it),e.unbindTexture()}L.depthBuffer&&rt(L)}function dt(L){let E=L.textures;for(let W=0,q=E.length;W<q;W++){let et=E[W];if(m(et)){let gt=b(L),yt=n.get(et).__webglTexture;e.bindTexture(gt,yt),_(gt),e.unbindTexture()}}}let xt=[],Nt=[];function Gt(L){if(L.samples>0){if(ne(L)===!1){let E=L.textures,W=L.width,q=L.height,et=i.COLOR_BUFFER_BIT,gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(L),it=E.length>1;if(it)for(let St=0;St<E.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let at=L.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<E.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Dt=n.get(E[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,W,q,0,0,W,q,et,i.NEAREST),c===!0&&(xt.length=0,Nt.length=0,xt.push(i.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(xt.push(gt),Nt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<E.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Dt=n.get(E[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function $t(L){return Math.min(s.maxSamples,L.samples)}function ne(L){let E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(L){let E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Ae(L,E){let W=L.colorSpace,q=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==pa&&W!==ys&&(Ce.getTransfer(W)===ke?(q!==Si||et!==ti)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",W)),E}function ge(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=ht,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ob(i,t){function e(n,s=ys){let r,o=Ce.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===$l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nd)return i.BYTE;if(n===Ud)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===Od)return i.ALPHA;if(n===Hd)return i.RGB;if(n===Si)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===Ao)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===th)return i.RGBA_INTEGER;if(n===qa||n===Ya||n===Za||n===Ja)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eh||n===nh||n===ih||n===sh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===oh||n===ah||n===ch||n===lh||n===$a||n===hh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rh||n===oh)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ah)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ch)return r.COMPRESSED_R11_EAC;if(n===lh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$a)return r.COMPRESSED_RG11_EAC;if(n===hh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===xh||n===_h||n===yh||n===vh||n===Mh||n===bh||n===Sh||n===Eh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_h)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Th||n===wh||n===Ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Th)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Ch||n===Ka||n===Ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hb=`
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

}`,df=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:Hb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ff=class extends $i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,x=typeof XRWebGLBinding!="undefined",d=new df,m={},_=e.getContextAttributes(),b=null,y=null,S=[],M=[],w=new ut,v=null,T=null,R=new gn;R.viewport=new on;let P=new gn;P.viewport=new on;let I=[R,P],D=new Vl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=S[nt];return ot===void 0&&(ot=new po,S[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=S[nt];return ot===void 0&&(ot=new po,S[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=S[nt];return ot===void 0&&(ot=new po,S[nt]=ot),ot.getHandSpace()};function G(nt){let ot=M.indexOf(nt.inputSource);if(ot===-1)return;let bt=S[ot];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,l||o),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let nt=0;nt<S.length;nt++){let ot=M[nt];ot!==null&&(M[nt]=null,S[nt].disconnect(ot))}C=null,U=null,d.reset();for(let nt in m)delete m[nt];if(t.setRenderTarget(b),p=null,f=null,u=null,s=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),T!==null){let nt=T.camera;nt.fov=T.fov,nt.zoom=T.zoom,nt.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ot=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=_.stencil?Ys:Ji,Ot=_.stencil?wo:Oi);let Jt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Nn(f.textureWidth,f.textureHeight,{format:Si,type:ti,depthTexture:new Os(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let bt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Nn(p.framebufferWidth,p.framebufferHeight,{format:Si,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function $(nt){for(let ot=0;ot<nt.removed.length;ot++){let bt=nt.removed[ot],Ot=M.indexOf(bt);Ot>=0&&(M[Ot]=null,S[Ot].disconnect(bt))}for(let ot=0;ot<nt.added.length;ot++){let bt=nt.added[ot],Ot=M.indexOf(bt);if(Ot===-1){for(let Jt=0;Jt<S.length;Jt++)if(Jt>=M.length){M.push(bt),Ot=Jt;break}else if(M[Jt]===null){M[Jt]=bt,Ot=Jt;break}if(Ot===-1)break}let Rt=S[Ot];Rt&&Rt.connect(bt)}}let H=new N,X=new N;function J(nt,ot,bt){H.setFromMatrixPosition(ot.matrixWorld),X.setFromMatrixPosition(bt.matrixWorld);let Ot=H.distanceTo(X),Rt=ot.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,De=Rt[14]/(Rt[10]-1),rt=Rt[14]/(Rt[10]+1),ht=(Rt[9]+1)/Rt[5],ft=(Rt[9]-1)/Rt[5],dt=(Rt[8]-1)/Rt[0],xt=(Jt[8]+1)/Jt[0],Nt=De*dt,Gt=De*xt,$t=Ot/(-dt+xt),ne=$t*-dt;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ne),nt.translateZ($t),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Rt[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let B=De+$t,Ae=rt+$t,ge=Nt-ne,L=Gt+(Ot-ne),E=ht*rt/Ae*B,W=ft*rt/Ae*B;nt.projectionMatrix.makePerspective(ge,L,E,W,B,Ae),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function mt(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ot=nt.near,bt=nt.far;d.texture!==null&&(d.depthNear>0&&(ot=d.depthNear),d.depthFar>0&&(bt=d.depthFar)),D.near=P.near=R.near=ot,D.far=P.far=R.far=bt,(C!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,U=D.far),D.layers.mask=nt.layers.mask|6,R.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ot=nt.parent,Rt=D.cameras;mt(D,Ot);for(let Jt=0;Jt<Rt.length;Jt++)mt(Rt[Jt],Ot);Rt.length===2?J(D,R,P):D.projectionMatrix.copy(R.projectionMatrix),T===null&&nt.isPerspectiveCamera&&(T={camera:nt,fov:nt.fov,zoom:nt.zoom}),wt(nt,D,Ot)};function wt(nt,ot,bt){bt===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=ml*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(nt){c=nt,f!==null&&(f.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(D)},this.getCameraTexture=function(nt){return m[nt]};let ae=null;function se(nt,ot){if(h=ot.getViewerPose(l||o),g=ot,h!==null){let bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ot=!1;bt.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let rt=0;rt<bt.length;rt++){let ht=bt[rt],ft=null;if(p!==null)ft=p.getViewport(ht);else{let xt=u.getViewSubImage(f,ht);ft=xt.viewport,rt===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let dt=I[rt];dt===void 0&&(dt=new gn,dt.layers.enable(rt),dt.viewport=new on,I[rt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ft.x,ft.y,ft.width,ft.height),rt===0&&(D.matrix.copy(dt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(dt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let rt=u.getDepthInformation(bt[0]);rt&&rt.isValid&&rt.texture&&d.init(rt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<bt.length;rt++){let ht=bt[rt].camera;if(ht){let ft=m[ht];ft||(ft=new wa,m[ht]=ft);let dt=u.getCameraImage(ht);ft.sourceTexture=dt}}}}for(let bt=0;bt<S.length;bt++){let Ot=M[bt],Rt=S[bt];Ot!==null&&Rt!==void 0&&Rt.update(Ot,ot,l||o)}ae&&ae(nt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let Yt=new x0;Yt.setAnimationLoop(se),this.setAnimationLoop=function(nt){ae=nt},this.dispose=function(){}}},kb=new Me,S0=new le;S0.set(-1,0,0,0,1,0,0,0,1);function Gb(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Vd(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,_,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),h(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,y)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),x(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?c(d,m,_,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Tn&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Tn&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _=t.get(m),b=_.envMap,y=_.envMapRotation;b&&(d.envMap.value=b,d.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(S0),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function c(d,m,_,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=b*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){let _=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(_.matrixWorld),d.nearDistance.value=_.shadow.camera.near,d.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vb(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let M=S.program;n.uniformBlockBinding(y,M)}function l(y,S){let M=s[y.id];M===void 0&&(d(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",_));let w=S.program;n.updateUBOMapping(y,w);let v=t.render.frame;r[y.id]!==v&&(f(y),r[y.id]=v)}function h(y){let S=u();y.__bindingPointIndex=S;let M=i.createBuffer(),w=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,T=M.length;v<T;v++){let R=M[v];if(Array.isArray(R))for(let P=0,I=R.length;P<I;P++)p(R[P],v,P,w);else p(R,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,M,w){if(x(y,S,M,w)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let I=T[P],D=m(I);g(I,y.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function x(y,S,M,w){let v=y.value,T=S+"_"+M;if(w[T]===void 0)return typeof v=="number"||typeof v=="boolean"?w[T]=v:ArrayBuffer.isView(v)?w[T]=v.slice():w[T]=v.clone(),!0;{let R=w[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return w[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function d(y){let S=y.uniforms,M=0,w=16;for(let T=0,R=S.length;T<R;T++){let P=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,D=P.length;I<D;I++){let C=P[I],U=Array.isArray(C.value)?C.value:[C.value];for(let G=0,O=U.length;G<O;G++){let $=U[G],H=m($),X=M%w,J=X%H.boundary,mt=X+J;M+=J,mt!==0&&w-mt<H.storage&&(M+=w-mt),C.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=H.storage}}}let v=M%w;return v>0&&(M+=w-v),y.__size=M,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",y),S}function _(y){let S=y.target;S.removeEventListener("dispose",_);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}var Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),es=null;function Xb(){return es===null&&(es=new ur(Wb,16,16,Zs,fi),es.name="DFG_LUT",es.minFilter=Dn,es.magFilter=Dn,es.wrapS=Yi,es.wrapT=Yi,es.generateMipmaps=!1,es.needsUpdate=!0),es}var Bh=class{constructor(t={}){let{canvas:e=Bm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ti}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=p,d=new Set([th,Ql,jl]),m=new Set([ti,Oi,To,wo,$l,Kl]),_=new Uint32Array(4),b=new Int32Array(4),y=new N,S=null,M=null,w=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,I=null,D=null,C=null,U=null;this._outputColorSpace=Ln;let G=0,O=0,$=null,H=-1,X=null,J=new on,mt=new on,wt=null,ae=new pt(0),se=0,Yt=e.width,nt=e.height,ot=1,bt=null,Ot=null,Rt=new on(0,0,Yt,nt),Jt=new on(0,0,Yt,nt),De=!1,rt=new xo,ht=!1,ft=!1,dt=new Me,xt=new N,Nt=new on,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ne(){return $===null?ot:1}let B=n;function Ae(A,z){return e.getContext(A,z)}let ge,L,E,W,q,et,gt,yt,it,at,St,Dt,vt,_t,Ht,Zt,he,k,Mt,st,Et,It,lt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",He,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),B===null){let z="webgl2";if(B=Ae(z,A),B===null)throw Ae(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(A){throw e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),ee("WebGLRenderer: "+A.message),A}function Vt(){ge=new j1(B),ge.init(),Et=new Ob(B,ge),L=new G1(B,ge,t,Et),E=new Fb(B,ge),L.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),D=B.createFramebuffer(),C=B.createFramebuffer(),U=B.createFramebuffer(),W=new eM(B),q=new bb,et=new Bb(B,ge,E,q,L,Et,W),gt=new K1(R),yt=new iy(B),It=new z1(B,yt),it=new Q1(B,yt,W,It),at=new iM(B,it,yt,It,W),k=new nM(B,L,et),Ht=new V1(q),St=new Mb(R,gt,ge,L,It,Ht),Dt=new Gb(R,q),vt=new Eb,_t=new Pb(ge),he=new H1(R,gt,E,at,g,c),Zt=new Ub(R,at,L),lt=new Vb(B,W,L,E),Mt=new k1(B,ge,W),st=new tM(B,ge,W),W.programs=St.programs,R.capabilities=L,R.extensions=ge,R.properties=q,R.renderLists=vt,R.shadowMap=Zt,R.state=E,R.info=W}x!==ti&&(T=new rM(x,e.width,e.height,a,s,r));let Bt=new ff(R,B);this.xr=Bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(A){A!==void 0&&(ot=A,this.setSize(Yt,nt,!1))},this.getSize=function(A){return A.set(Yt,nt)},this.setSize=function(A,z,Q=!0){if(Bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=A,nt=z,e.width=Math.floor(A*ot),e.height=Math.floor(z*ot),Q===!0&&(e.style.width=A+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Yt*ot,nt*ot).floor()},this.setDrawingBufferSize=function(A,z,Q){Yt=A,nt=z,ot=Q,e.width=Math.floor(A*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===ti){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,z,Q,Y){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,z,Q,Y),E.viewport(J.copy(Rt).multiplyScalar(ot).round())},this.getScissor=function(A){return A.copy(Jt)},this.setScissor=function(A,z,Q,Y){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,z,Q,Y),E.scissor(mt.copy(Jt).multiplyScalar(ot).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){E.setScissorTest(De=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Ot=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Q=!0){let Y=0;if(A){let Z=!1;if($!==null){let Lt=$.texture.format;Z=d.has(Lt)}if(Z){let Lt=$.texture.type,Ft=m.has(Lt),Pt=he.getClearColor(),zt=he.getClearAlpha(),Wt=Pt.r,xe=Pt.g,Ee=Pt.b;Ft?(_[0]=Wt,_[1]=xe,_[2]=Ee,_[3]=zt,B.clearBufferuiv(B.COLOR,0,_)):(b[0]=Wt,b[1]=xe,b[2]=Ee,b[3]=zt,B.clearBufferiv(B.COLOR,0,b))}else Y|=B.COLOR_BUFFER_BIT}z&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),he.dispose(),vt.dispose(),_t.dispose(),q.dispose(),gt.dispose(),at.dispose(),It.dispose(),lt.dispose(),St.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",zr),Bt.removeEventListener("sessionend",xi),Fn.stop()};function He(A){A.preventDefault(),xa("WebGLRenderer: Context Lost."),P=!0}function Ne(){xa("WebGLRenderer: Context Restored."),P=!1;let A=W.autoReset,z=Zt.enabled,Q=Zt.autoUpdate,Y=Zt.needsUpdate,Z=Zt.type;Vt(),W.autoReset=A,Zt.enabled=z,Zt.autoUpdate=Q,Zt.needsUpdate=Y,Zt.type=Z}function Vn(A){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oi(A){let z=A.target;z.removeEventListener("dispose",oi),cs(z)}function cs(A){Or(A),q.remove(A)}function Or(A){let z=q.get(A).programs;z!==void 0&&(z.forEach(function(Q){St.releaseProgram(Q)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Q,Y,Z,Lt){z===null&&(z=Gt);let Ft=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pt=Bn(A,z,Q,Y,Z);E.setMaterial(Y,Ft);let zt=Q.index,Wt=1;if(Y.wireframe===!0){if(zt=it.getWireframeAttribute(Q),zt===void 0)return;Wt=2}let xe=Q.drawRange,Ee=Q.attributes.position,kt=xe.start*Wt,ze=(xe.start+xe.count)*Wt;Lt!==null&&(kt=Math.max(kt,Lt.start*Wt),ze=Math.min(ze,(Lt.start+Lt.count)*Wt)),zt!==null?(kt=Math.max(kt,0),ze=Math.min(ze,zt.count)):Ee!=null&&(kt=Math.max(kt,0),ze=Math.min(ze,Ee.count));let _n=ze-kt;if(_n<0||_n===1/0)return;It.setup(Z,Y,Pt,Q,zt);let Qe,Ze=Mt;if(zt!==null&&(Qe=yt.get(zt),Ze=st,Ze.setIndex(Qe)),Z.isMesh)Y.wireframe===!0?(E.setLineWidth(Y.wireframeLinewidth*ne()),Ze.setMode(B.LINES)):Ze.setMode(B.TRIANGLES);else if(Z.isLine){let On=Y.linewidth;On===void 0&&(On=1),E.setLineWidth(On*ne()),Z.isLineSegments?Ze.setMode(B.LINES):Z.isLineLoop?Ze.setMode(B.LINE_LOOP):Ze.setMode(B.LINE_STRIP)}else Z.isPoints?Ze.setMode(B.POINTS):Z.isSprite&&Ze.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let On=Z._multiDrawStarts,Ut=Z._multiDrawCounts,Wn=Z._multiDrawCount,Ue=zt?yt.get(zt).bytesPerElement:1,_i=q.get(Y).currentProgram.getUniforms();for(let Vi=0;Vi<Wn;Vi++)_i.setValue(B,"_gl_DrawID",Vi),Ze.render(On[Vi]/Ue,Ut[Vi])}else if(Z.isInstancedMesh)Ze.renderInstances(kt,_n,Z.count);else if(Q.isInstancedBufferGeometry){let On=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,On);Ze.renderInstances(kt,_n,Ut)}else Ze.render(kt,_n)};function jo(A,z,Q,Y){I!==null&&A.isNodeMaterial&&I.setObject(Y,A),ht===!0&&Ht.setState(A,Q,!1),A.transparent===!0&&A.side===me&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,Re(A,z,Y),A.side=Ws,A.needsUpdate=!0,Re(A,z,Y),A.side=me):Re(A,z,Y)}this.compile=function(A,z,Q=null){Q===null&&(Q=A),I!==null&&I.renderStart(A,z,Q),M=_t.get(Q),M.init(z),v.push(M),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),ft=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ft),ht===!0&&Ht.setGlobalState(this.clippingPlanes,z),I!==null&&Zt.render(M.state.shadowsArray,Q,z);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Lt=Z.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){let Pt=Lt[Ft];jo(Pt,Q,z,Z),Y.add(Pt)}else jo(Lt,Q,z,Z),Y.add(Lt)}),M=v.pop(),I!==null&&I.renderEnd(),Y},this.compileAsync=function(A,z,Q=null){let Y=this.compile(A,z,Q);return new Promise(Z=>{function Lt(){if(Y.forEach(function(Ft){let zt=q.get(Ft).currentProgram;(zt===void 0||zt.isReady())&&Y.delete(Ft)}),Y.size===0){Z(A);return}setTimeout(Lt,10)}ge.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Hr=null;function Rs(A){Hr&&Hr(A)}function zr(){Fn.stop()}function xi(){Fn.start()}let Fn=new x0;Fn.setAnimationLoop(Rs),typeof self!="undefined"&&Fn.setContext(self),this.setAnimationLoop=function(A){Hr=A,Bt.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},Bt.addEventListener("sessionstart",zr),Bt.addEventListener("sessionend",xi),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(A,z);let Q=Bt.enabled===!0&&Bt.isPresenting===!0,Y=T!==null&&($===null||Q)&&T.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(z),z=Bt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,$),M=_t.get(A,v.length),M.init(z),M.state.textureUnits=et.getTextureUnits(),v.push(M),dt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),rt.setFromProjectionMatrix(dt,Li,z.reversedDepth),ft=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ft),S=vt.get(A,w.length),S.init(),w.push(S),Bt.enabled===!0&&Bt.isPresenting===!0){let Ft=R.xr.getDepthSensingMesh();Ft!==null&&ki(Ft,z,-1/0,R.sortObjects)}ki(A,z,0,R.sortObjects),S.finish(),I!==null&&I.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(bt,Ot),$t=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,$t&&he.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ht.beginShadows();let Z=M.state.shadowsArray;if(Zt.render(Z,A,z),ht===!0&&Ht.endShadows(),(Y&&T.hasRenderPass())===!1){let Ft=S.opaque,Pt=S.transmissive;if(M.setupLights(),z.isArrayCamera){let zt=z.cameras;if(Pt.length>0)for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt];j(Ft,Pt,A,Ee)}$t&&he.render(A);for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt];Rc(S,A,Ee,Ee.viewport)}}else Pt.length>0&&j(Ft,Pt,A,z),$t&&he.render(A),Rc(S,A,z)}$!==null&&O===0&&(et.updateMultisampleRenderTarget($),et.updateRenderTargetMipmap($)),Y&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),It.resetDefaultState(),H=-1,X=null,v.pop(),v.length>0?(M=v[v.length-1],et.setTextureUnits(M.state.textureUnits),ht===!0&&Ht.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,I!==null&&I.renderEnd()};function ki(A,z,Q,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(rt)){Y&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);let Ft=at.update(A),Pt=A.material;Pt.visible&&S.push(A,Ft,Pt,Q,Nt.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(rt))){let Ft=at.update(A),Pt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Nt.copy(Ft.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(Pt)){let zt=Ft.groups;for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt],kt=Pt[Ee.materialIndex];kt&&kt.visible&&S.push(A,Ft,kt,Q,Nt.z,Ee,z)}}else Pt.visible&&S.push(A,Ft,Pt,Q,Nt.z,null,z)}}let Lt=A.children;for(let Ft=0,Pt=Lt.length;Ft<Pt;Ft++)ki(Lt[Ft],z,Q,Y)}function Rc(A,z,Q,Y){let{opaque:Z,transmissive:Lt,transparent:Ft}=A;M.setupLightsView(Q),ht===!0&&Ht.setGlobalState(R.clippingPlanes,Q),Y&&E.viewport(J.copy(Y)),Z.length>0&&Tt(Z,z,Q),Lt.length>0&&Tt(Lt,z,Q),Ft.length>0&&Tt(Ft,z,Q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function j(A,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let kt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Nn(1,1,{generateMipmaps:!0,type:kt?fi:ti,minFilter:qs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let Lt=M.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||J;Lt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);let Pt=R.getRenderTarget(),zt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(ae),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),$t&&he.render(Q);let xe=R.toneMapping;R.toneMapping=Bi;let Ee=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),ht===!0&&Ht.setGlobalState(R.clippingPlanes,Y),Tt(A,Q,Y),et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ze=0,_n=z.length;ze<_n;ze++){let Qe=z[ze],{object:Ze,geometry:On,material:Ut,group:Wn}=Qe;if(Ut.side===me&&Ze.layers.test(Y.layers)){let Ue=Ut.side;Ut.side=Tn,Ut.needsUpdate=!0,ve(Ze,Q,Y,On,Ut,Wn),Ut.side=Ue,Ut.needsUpdate=!0,kt=!0}}kt===!0&&(et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt))}R.setRenderTarget(Pt,zt,Wt),R.setClearColor(ae,se),Ee!==void 0&&(Y.viewport=Ee),R.toneMapping=xe}function Tt(A,z,Q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Lt=A.length;Z<Lt;Z++){let Ft=A[Z],{object:Pt,geometry:zt,group:Wt}=Ft,xe=Ft.material;xe.allowOverride===!0&&Y!==null&&(xe=Y),Pt.layers.test(Q.layers)&&ve(Pt,z,Q,zt,xe,Wt)}}function ve(A,z,Q,Y,Z,Lt){I!==null&&Z.isNodeMaterial&&I.setObject(A,Z),A.onBeforeRender(R,z,Q,Y,Z,Lt),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,z,Q,Y,A,Lt),Z.transparent===!0&&Z.side===me&&Z.forceSinglePass===!1?(Z.side=Tn,Z.needsUpdate=!0,R.renderBufferDirect(Q,z,Y,Z,A,Lt),Z.side=Ws,Z.needsUpdate=!0,R.renderBufferDirect(Q,z,Y,Z,A,Lt),Z.side=me):R.renderBufferDirect(Q,z,Y,Z,A,Lt),A.onAfterRender(R,z,Q,Y,Z,Lt)}function Re(A,z,Q){z.isScene!==!0&&(z=Gt);let Y=q.get(A),Z=M.state.lights,Lt=M.state.shadowsArray,Ft=Z.state.version,Pt=St.getParameters(A,Z.state,Lt,z,Q,M.state.lightProbeGridArray),zt=St.getProgramCacheKey(Pt),Wt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let xe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=gt.get(A.envMap||Y.environment,xe),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",oi),Wt=new Map,Y.programs=Wt);let Ee=Wt.get(zt);if(Ee!==void 0){if(Y.currentProgram===Ee&&Y.lightsStateVersion===Ft)return de(A,Pt),Ee}else Pt.uniforms=St.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,Q,Pt),A.onBeforeCompile(Pt,R),Ee=St.acquireProgram(Pt,zt),Wt.set(zt,Ee),Y.uniforms=Pt.uniforms;let kt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),de(A,Pt),Y.needsLights=Qo(A),Y.lightsStateVersion=Ft,Y.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.sunLights.value=Z.state.sun,kt.sunLightShadows.value=Z.state.sunShadow,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.sunShadowMatrix.value=Z.state.sunShadowMatrix,kt.sunShadowCascade.value=Z.state.sunShadowCascade,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=Ee,Y.uniformsList=null,Ee}function re(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Po.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function de(A,z){let Q=q.get(A);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function te(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){let Z=A[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function Bn(A,z,Q,Y,Z){z.isScene!==!0&&(z=Gt),et.resetTextureUnits();let Lt=z.fog,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Pt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ce.workingColorSpace,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=gt.get(Y.envMap||Ft,zt),xe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ee=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!Q.morphAttributes.position,ze=!!Q.morphAttributes.normal,_n=!!Q.morphAttributes.color,Qe=Bi;Y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qe=R.toneMapping);let Ze=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,On=Ze!==void 0?Ze.length:0,Ut=q.get(Y),Wn=M.state.lights;if(ht===!0&&(ft===!0||A!==X)){let $e=A===X&&Y.id===H;Ht.setState(Y,A,$e)}let Ue=!1;Y.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Wn.state.version||Ut.outputColorSpace!==Pt||Z.isBatchedMesh&&Ut.batching===!1||!Z.isBatchedMesh&&Ut.batching===!0||Z.isBatchedMesh&&Ut.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ut.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ut.instancing===!1||!Z.isInstancedMesh&&Ut.instancing===!0||Z.isSkinnedMesh&&Ut.skinning===!1||!Z.isSkinnedMesh&&Ut.skinning===!0||Z.isInstancedMesh&&Ut.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ut.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ut.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ut.instancingMorph===!1&&Z.morphTexture!==null||Ut.envMap!==Wt||Y.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Ht.numPlanes||Ut.numIntersection!==Ht.numIntersection)||Ut.vertexAlphas!==xe||Ut.vertexTangents!==Ee||Ut.morphTargets!==kt||Ut.morphNormals!==ze||Ut.morphColors!==_n||Ut.toneMapping!==Qe||Ut.morphTargetsCount!==On||!!Ut.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Ut.__version=Y.version);let _i=Ut.currentProgram;Ue===!0&&(_i=Re(Y,z,Z),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,_i,Ut));let Vi=!1,Ps=!1,kr=!1,Xe=_i.getUniforms(),mn=Ut.uniforms;if(E.useProgram(_i.program)&&(Vi=!0,Ps=!0,kr=!0),Y.id!==H&&(H=Y.id,Ps=!0),Ut.needsLights){let $e=te(M.state.lightProbeGridArray,Z);Ut.lightProbeGrid!==$e&&(Ut.lightProbeGrid=$e,Ps=!0)}if(Vi||X!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xe.setValue(B,"projectionMatrix",A.projectionMatrix),Xe.setValue(B,"viewMatrix",A.matrixWorldInverse);let Ls=Xe.map.cameraPosition;Ls!==void 0&&Ls.setValue(B,xt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Xe.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Xe.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,Ps=!0,kr=!0)}if(Ut.needsLights&&(Wn.state.sunShadowMap.length>0&&Xe.setValue(B,"sunShadowMap",Wn.state.sunShadowMap,et),Wn.state.directionalShadowMap.length>0&&Xe.setValue(B,"directionalShadowMap",Wn.state.directionalShadowMap,et),Wn.state.spotShadowMap.length>0&&Xe.setValue(B,"spotShadowMap",Wn.state.spotShadowMap,et),Wn.state.pointShadowMap.length>0&&Xe.setValue(B,"pointShadowMap",Wn.state.pointShadowMap,et)),Z.isSkinnedMesh){Xe.setOptional(B,Z,"bindMatrix"),Xe.setOptional(B,Z,"bindMatrixInverse");let $e=Z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Xe.setValue(B,"boneTexture",$e.boneTexture,et))}Z.isBatchedMesh&&(Xe.setOptional(B,Z,"batchingTexture"),Xe.setValue(B,"batchingTexture",Z._matricesTexture,et),Xe.setOptional(B,Z,"batchingIdTexture"),Xe.setValue(B,"batchingIdTexture",Z._indirectTexture,et),Xe.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Xe.setValue(B,"batchingColorTexture",Z._colorsTexture,et));let Is=Q.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&k.update(Z,Q,_i),(Ps||Ut.receiveShadow!==Z.receiveShadow)&&(Ut.receiveShadow=Z.receiveShadow,Xe.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(mn.envMapIntensity.value=z.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Xb()),Ps){if(Xe.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&Gi(mn,kr),Lt&&Y.fog===!0&&Dt.refreshFogUniforms(mn,Lt),Dt.refreshMaterialUniforms(mn,Y,ot,nt,M.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.lightProbeGrid){let $e=Ut.lightProbeGrid;mn.probesSH.value=$e.texture,mn.probesMin.value.copy($e.boundingBox.min),mn.probesMax.value.copy($e.boundingBox.max),mn.probesResolution.value.copy($e.resolution)}Po.upload(B,re(Ut),mn,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Po.upload(B,re(Ut),mn,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Xe.setValue(B,"center",Z.center),Xe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Xe.setValue(B,"normalMatrix",Z.normalMatrix),Xe.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let $e=Y.uniformsGroups;for(let Ls=0,Gr=$e.length;Ls<Gr;Ls++){let vp=$e[Ls];lt.update(vp,_i),lt.bind(vp,_i)}}return _i}function Gi(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Qo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,z,Q){let Y=q.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=z,q.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let Q=q.get(A);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Q=0){$=A,G=z,O=Q;let Y=null,Z=!1,Lt=!1;if(A){let Pt=q.get(A);if(Pt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(B.FRAMEBUFFER,Pt.__webglFramebuffer),J.copy(A.viewport),mt.copy(A.scissor),wt=A.scissorTest,E.viewport(J),E.scissor(mt),E.setScissorTest(wt),H=-1;return}else if(Pt.__webglFramebuffer===void 0)et.setupRenderTarget(A);else if(Pt.__hasExternalTextures)et.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let xe=A.depthTexture;if(Pt.__boundDepthTexture!==xe){if(xe!==null&&q.has(xe)&&(A.width!==xe.image.width||A.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(A)}}let zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Lt=!0);let Wt=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?Y=Wt[z][Q]:Y=Wt[z],Z=!0):A.samples>0&&et.useMultisampledRTT(A)===!1?Y=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[Q]:Y=Wt,J.copy(A.viewport),mt.copy(A.scissor),wt=A.scissorTest}else J.copy(Rt).multiplyScalar(ot).floor(),mt.copy(Jt).multiplyScalar(ot).floor(),wt=De;if(Q!==0&&(Y=D),E.bindFramebuffer(B.FRAMEBUFFER,Y)&&E.drawBuffers(A,Y),E.viewport(J),E.scissor(mt),E.setScissorTest(wt),Z){let Pt=q.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,Q)}else if(Lt){let Pt=z;for(let zt=0;zt<A.textures.length;zt++){let Wt=q.get(A.textures[zt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+zt,Wt.__webglTexture,Q,Pt)}}else if(A!==null&&Q!==0){let Pt=q.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,Q)}H=-1};function Cs(A){let z=q.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=L.textureFormatReadable(A.format),z.__typeReadable=L.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,Q,Y,Z,Lt,Ft,Pt=0){if(!(A&&A.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt){E.bindFramebuffer(B.FRAMEBUFFER,zt);try{let Wt=A.textures[Pt],xe=Wt.format,Ee=Wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=Cs(Wt);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-Z&&B.readPixels(z,Q,Y,Z,Et.convert(xe),Et.convert(Ee),Lt)}finally{let Wt=$!==null?q.get($).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,z,Q,Y,Z,Lt,Ft,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt)if(z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-Z){E.bindFramebuffer(B.FRAMEBUFFER,zt);let Wt=A.textures[Pt],xe=Wt.format,Ee=Wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=Cs(Wt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.bufferData(B.PIXEL_PACK_BUFFER,Lt.byteLength,B.STREAM_READ),B.readPixels(z,Q,Y,Z,Et.convert(xe),Et.convert(Ee),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let _n=$!==null?q.get($).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,_n);let Qe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Hm(B,Qe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Lt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ze),B.deleteSync(Qe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),Lt=Math.floor(A.image.height*Y),Ft=z!==null?z.x:0,Pt=z!==null?z.y:0;et.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ft,Pt,Z,Lt),E.unbindTexture()},this.copyTextureToTexture=function(A,z,Q=null,Y=null,Z=0,Lt=0){let Ft,Pt,zt,Wt,xe,Ee,kt,ze,_n,Qe=A.isCompressedTexture?A.mipmaps[Lt]:A.image;if(Q!==null)Ft=Q.max.x-Q.min.x,Pt=Q.max.y-Q.min.y,zt=Q.isBox3?Q.max.z-Q.min.z:1,Wt=Q.min.x,xe=Q.min.y,Ee=Q.isBox3?Q.min.z:0;else{let mn=Math.pow(2,-Z);Ft=Math.floor(Qe.width*mn),Pt=Math.floor(Qe.height*mn),A.isDataArrayTexture?zt=Qe.depth:A.isData3DTexture?zt=Math.floor(Qe.depth*mn):zt=1,Wt=0,xe=0,Ee=0}Y!==null?(kt=Y.x,ze=Y.y,_n=Y.z):(kt=0,ze=0,_n=0);let Ze=Et.convert(z.format),On=Et.convert(z.type),Ut;z.isData3DTexture?(et.setTexture3D(z,0),Ut=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(et.setTexture2DArray(z,0),Ut=B.TEXTURE_2D_ARRAY):(et.setTexture2D(z,0),Ut=B.TEXTURE_2D),E.activeTexture(B.TEXTURE0),E.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Wn=E.getParameter(B.UNPACK_ROW_LENGTH),Ue=E.getParameter(B.UNPACK_IMAGE_HEIGHT),_i=E.getParameter(B.UNPACK_SKIP_PIXELS),Vi=E.getParameter(B.UNPACK_SKIP_ROWS),Ps=E.getParameter(B.UNPACK_SKIP_IMAGES);E.pixelStorei(B.UNPACK_ROW_LENGTH,Qe.width),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe.height),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(B.UNPACK_SKIP_ROWS,xe),E.pixelStorei(B.UNPACK_SKIP_IMAGES,Ee);let kr=A.isDataArrayTexture||A.isData3DTexture,Xe=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let mn=q.get(A),Is=q.get(z),$e=q.get(mn.__renderTarget),Ls=q.get(Is.__renderTarget);E.bindFramebuffer(B.READ_FRAMEBUFFER,$e.__webglFramebuffer),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Gr=0;Gr<zt;Gr++)kr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(A).__webglTexture,Z,Ee+Gr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(z).__webglTexture,Lt,_n+Gr)),B.blitFramebuffer(Wt,xe,Ft,Pt,kt,ze,Ft,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||q.has(A)){let mn=q.get(A),Is=q.get(z);E.bindFramebuffer(B.READ_FRAMEBUFFER,C),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let $e=0;$e<zt;$e++)kr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Z,Ee+$e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Z),Xe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Is.__webglTexture,Lt,_n+$e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Is.__webglTexture,Lt),Z!==0?B.blitFramebuffer(Wt,xe,Ft,Pt,kt,ze,Ft,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):Xe?B.copyTexSubImage3D(Ut,Lt,kt,ze,_n+$e,Wt,xe,Ft,Pt):B.copyTexSubImage2D(Ut,Lt,kt,ze,Wt,xe,Ft,Pt);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Xe?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ut,Lt,kt,ze,_n,Ft,Pt,zt,Ze,On,Qe.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,Lt,kt,ze,_n,Ft,Pt,zt,Ze,Qe.data):B.texSubImage3D(Ut,Lt,kt,ze,_n,Ft,Pt,zt,Ze,On,Qe):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Ft,Pt,Ze,On,Qe.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Qe.width,Qe.height,Ze,Qe.data):B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Ft,Pt,Ze,On,Qe);E.pixelStorei(B.UNPACK_ROW_LENGTH,Wn),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue),E.pixelStorei(B.UNPACK_SKIP_PIXELS,_i),E.pixelStorei(B.UNPACK_SKIP_ROWS,Vi),E.pixelStorei(B.UNPACK_SKIP_IMAGES,Ps),Lt===0&&z.generateMipmaps&&B.generateMipmap(Ut),E.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&et.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?et.setTextureCube(A,0):A.isData3DTexture?et.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?et.setTexture2DArray(A,0):et.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){G=0,O=0,$=null,E.reset(),It.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}};function qb(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var E0={};function Yb(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=qb(i.length*97+i.charCodeAt(0)),r=(a,c)=>`rgba(${a},${a},${a},${c})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let a=i==="woodV";for(let c=0;c<150;c++){let l=s()*256,h=40+s()*160,u=s()*256,f=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=f,n.beginPath(),a?(n.moveTo(l,u),n.bezierCurveTo(l+4,u+h*.3,l-4,u+h*.7,l+2,u+h)):(n.moveTo(u,l),n.bezierCurveTo(u+h*.3,l+4,u+h*.7,l-4,u+h,l+2)),n.stroke()}for(let c=0;c<3;c++){let l=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let u=1;u<4;u++)n.beginPath(),n.ellipse(l,h,u*3.5,u*2.2,a?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),a?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let a=4;for(let c=0;c<a;c++){let l=-(s()*40),h=256/a;for(;l<256;){let u=38+s()*50,f=190+s()*55|0;n.fillStyle=`rgb(${f},${f-3},${f+8})`,n.beginPath(),n.roundRect?n.roundRect(l+3,c*h+3,u-6,h-6,10):n.rect(l+3,c*h+3,u-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(l+9,c*h+7,u-24,3);for(let p=0;p<14;p++)n.fillStyle=r(120,.08),n.fillRect(l+6+s()*(u-12),c*h+6+s()*(h-12),2,2);l+=u}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let a=6,c=256/a;for(let l=0;l<a;l++){let h=l%2*22;for(let u=-22;u<278;u+=44){let f=196+s()*50|0;n.fillStyle=`rgb(${f},${f-6},${f-8})`,n.beginPath(),n.moveTo(u+h+2,l*c),n.lineTo(u+h+42,l*c),n.lineTo(u+h+42,l*c+c*.55),n.quadraticCurveTo(u+h+22,l*c+c*1.15,u+h+2,l*c+c*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(u+h+8,l*c+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let a=0;a<60;a++){let c=s()*256,l=s()*256,h=10+s()*40,u=170+s()*70|0;n.fillStyle=`rgba(${u},${u-4},${u+10},.35)`,n.beginPath(),n.ellipse(c,l,h,h*.6,s()*3,0,7),n.fill()}for(let a=0;a<30;a++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let c=s()*256,l=s()*256;n.moveTo(c,l);for(let h=0;h<4;h++)c+=s()*40-20,l+=s()*30,n.lineTo(c,l);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let a=0;a<900;a++){let c=s()*256,l=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(c,l),n.lineTo(c+s()*4-2,l-3-s()*7),n.stroke()}for(let a=0;a<20;a++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let a=0;a<70;a++){let c=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(c,0),n.bezierCurveTo(c+8,256*.3,c-8,256*.6,c+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let a=0;a<260;a++){let c=s()*256,l=s()*256,h=6+s()*14,u=s()>.45?215+s()*40|0:120+s()*60|0;for(let f of[-256,0,256])for(let p of[-256,0,256])c+f<-30||c+f>286||l+p<-30||l+p>286||(n.fillStyle=`rgba(${u},${u},${u-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(c+f,l+p,h,h*.62,s()*3.14,0,7),n.fill())}for(let a=0;a<120;a++){let c=s()*256,l=s()*256;n.fillStyle="rgba(70,80,60,.28)",n.beginPath(),n.ellipse(c,l+9,9,4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(c-1,l-3,6,2.4,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(a,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,a,256,1.6);for(let a=0;a<9;a++){let c=s()*256,l=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(c,l),n.bezierCurveTo(c+20,l+30,c-18,l+60,c+6,l+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(c+4,l),n.bezierCurveTo(c+24,l+30,c-14,l+60,c+10,l+95),n.stroke()}for(let a=0;a<5;a++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let a=-256;a<256*2;a+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(a+3,0),n.lineTo(a+3-256,256),n.stroke();for(let a=0;a<256;a+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let a=5,c=256/a;for(let l=0;l<a;l++){let h=l*c;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,c);for(let u=0;u<22;u++){let f=h+3+s()*(c-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,f),n.bezierCurveTo(80,f+3,160,f-3,256,f+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let u of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(u,h+c/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let a=0;a<8;a++){let c=a*256/8;for(let l=-10;l<266;l+=14){let h=l+a%2*7+s()*3,u=18+s()*10,f=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${f},${f},${f-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,c),n.lineTo(h+s()*8-4,c+u),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,c+256/8-2),n.lineTo(256,c+256/8-2),n.stroke()}}let o=new Ui(e);return o.wrapS=o.wrapT=lo,o.colorSpace=Ln,o.anisotropy=4,o}var Ye=i=>E0[i]||(E0[i]=Yb(i)),Ie=(()=>{let i=new Uint8Array([112,160,208,255]),t=new ur(i,4,1,Ao);return t.minFilter=t.magFilter=vn,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function T0(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function w0(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function Js(){let i=null;try{i=localStorage.getItem("rio3d-season")}catch{}if(i!==null&&i!==""&&i!=="auto"&&+i>=0&&+i<4)return+i;let t=new Date().getMonth();return t===11||t<=1?3:t<=4?0:t<=7?1:2}var zh=[{name:"Primavera",pine:["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],brd:["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],gnd:"#b6dca3",gk:0,pet:{c:16762578,size:.42,fall:1,base:.12,gain:.88}},{name:"Verano",pine:["#5fa383","#6fb593","#559a7e","#7cc09d"],blos:["#9aa8e6","#8c9ae0","#b3a2e8","#7f93d8"],bblos:["#9aa8e6","#b3a2e8","#8c9ae0","#a7b6ee"],brd:["#6fae74","#5f9f6a","#7cbc7a","#4f9468","#88c27f","#6aa878","#58a070"],gnd:"#9fd08a",gk:.18,pet:{c:16777215,size:.3,fall:1,base:0,gain:0}},{name:"Oto\xF1o",pine:["#6fa386","#80b496","#659a80","#8cc09d"],blos:["#d94a32","#e8702e","#f2a33a","#c43d2c"],bblos:["#d9573a","#e8803a","#f0b43a","#c9462f"],brd:["#d9533a","#e8802f","#f0b43a","#c9462f","#b8532f","#e39a4a","#cf6a3a"],gnd:"#d3a45f",gk:.32,pet:{c:15237178,size:.55,fall:1.35,base:.3,gain:.7}},{name:"Invierno",pine:["#a9c4b8","#b9d3c6","#9dbaae","#c4dccf"],blos:["#f6e3ea","#f2d3de","#fbeff3","#efc9d8"],bblos:["#f6e3ea","#fbeff3","#efc9d8","#f2d3de"],brd:["#cfd8d6","#b9c4c2","#a8b4b3","#dfe6e4","#9fa9a8","#c4cdcb","#b0bbb9"],gnd:"#eef3f8",gk:.62,pet:{c:16777215,size:.28,fall:1.1,base:.55,gain:.45}}],Hi={c:15773373,c2:15044520,blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],pet:16762578};var Zb=["es","en","ja"],ei="es";try{let i=localStorage.getItem("rio3d-lang");ei=Zb.includes(i)?i:"es"}catch{}var pf=()=>ei,A0=i=>{try{localStorage.setItem("rio3d-lang",i)}catch{}},Jb=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"]],$b=new Map(Jb.map(i=>[i[0],i])),Kb=ei==="en"?1:2;var jb=[[/^Siguiente: (.+) en (\d+) m$/,i=>ei==="en"?`Next: ${Yn(i[1])} in ${i[2]} m`:`\u6B21: ${Yn(i[1])}\uFF08\u3042\u3068${i[2]} m\uFF09`],[/^Descubriste: (.+)$/,i=>ei==="en"?`You discovered: ${Yn(i[1])}`:`\u767A\u898B\uFF1A${Yn(i[1])}`],[/^Continuar \((\d+) m\)$/,i=>ei==="en"?`Continue (${i[1]} m)`:`\u7D9A\u3051\u308B\uFF08${i[1]} m\uFF09`],[/^Soltar linterna \((\d+)\)$/,i=>ei==="en"?`Release lantern (${i[1]})`:`\u30E9\u30F3\u30BF\u30F3\u3092\u6D41\u3059\uFF08${i[1]}\uFF09`],[/^Auto \(ahora ([\d.]+)×\)$/,i=>ei==="en"?`Auto (now ${i[1]}\xD7)`:`\u81EA\u52D5\uFF08\u73FE\u5728 ${i[1]}\xD7\uFF09`],[/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,i=>ei==="en"?`${i[1]}/${i[2]} places \xB7 ${Yn(i[3])} \xB7 you reached ${i[4]} m \xB7 lanterns released: ${i[5]}`:`${i[1]}/${i[2]}\u304B\u6240 \xB7 ${Yn(i[3])} \xB7 \u5230\u9054 ${i[4]} m \xB7 \u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[5]}`],[/^Linternas dejadas: (\d+)$/,i=>ei==="en"?`Lanterns left here: ${i[1]}`:`\u3053\u3053\u306B\u6B8B\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[1]}`],[/^Tu linterna del (.+)$/,i=>ei==="en"?`Your lantern from ${i[1]}`:`${i[1]}\u306E\u30E9\u30F3\u30BF\u30F3`]];function Yn(i){if(ei==="es"||typeof i!="string")return i;let t=i.trim();if(!t)return i;let e=$b.get(t);if(e)return i.replace(t,e[Kb]);for(let[n,s]of jb){let r=t.match(n);if(r)return i.replace(t,s(r))}return i}function kh(i){if(i.nodeType===3){let e=Yn(i.nodeValue);e!==i.nodeValue&&(i.nodeValue=e);return}if(i.nodeType!==1||i.tagName==="SCRIPT"||i.tagName==="STYLE")return;i.placeholder&&(i.placeholder=Yn(i.placeholder));let t=i.getAttribute&&i.getAttribute("aria-label");if(t){let e=Yn(t);e!==t&&i.setAttribute("aria-label",e)}for(let e of i.childNodes)kh(e)}function R0(){ei!=="es"&&(document.documentElement.lang=ei,kh(document.body),new MutationObserver(i=>{for(let t of i)t.type==="characterData"?kh(t.target):t.addedNodes.forEach(kh)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0}))}function C0(i){let{R:t,scene:e,cam:n,canvas:s,el:r,toast:o,P:a,LM:c,lmFound:l,lmPos:h,LMS:u,mkLantern:f,cx:p,hw:g,A:x,SEAS:d,seasonIdx:m}=i,_={photo:!1,want:null},b={get(j,Tt){try{let ve=localStorage.getItem(j);return ve===null?Tt:ve}catch{return Tt}},set(j,Tt){try{return localStorage.setItem(j,Tt),!0}catch{return!1}},del(j){try{localStorage.removeItem(j)}catch{}}},y=d[m()],S=document.createElement("style");S.textContent=`
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
  `,document.head.appendChild(S);let M=Math.min(devicePixelRatio||1,2),w=[.7,.85,1,1.25,1.5],v=0;w.forEach((j,Tt)=>{j<=M+.001&&(v=Tt)});let T=b.get("rio3d-q","auto"),R=Math.min(v,3),P=v,I=1/60,D=0,C=5,U=0,G=0,O=0,$=0,H={hi:1.5,mid:1,lo:.7},X=()=>_.photo?Math.min(M,1.75):Math.min(T==="auto"?w[R]:H[T]||1,M);function J(){let j=X();Math.abs(j-$)>.01&&($=j,t.setPixelRatio(j),t.setSize(innerWidth,innerHeight,!1),Rt())}_.tick=function(j){if(!(document.hidden||!i.started()||_.photo)&&(j=Math.min(j,.1),I+=(j-I)*.04,D+=j,!(D<1))){if(D=0,T!=="auto"){J();return}if(C>0){C--,$||J();return}I>.027?(G++,U=0):I<.0185?(U++,G=0):(U=0,G=0),G>=2&&R>0?(R--,G=0,C=6,O&&performance.now()-O<3e4&&(P=Math.min(P,R)),J()):U>=12&&R<Math.min(P,v)&&(R++,U=0,C=10,O=performance.now(),J())}};let mt=()=>T==="auto"?"Auto (ahora "+Math.min(w[R],M).toFixed(2)+"\xD7)":"Fija",wt={none:{n:"Sin filtro"},nat:{n:"Natural",t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},warm:{n:"C\xE1lido",t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},mist:{n:"Bruma",t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},ink:{n:"Tinta",t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},moon:{n:"Noche azul",t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}},ae=b.get("rio3d-filter","nat");wt[ae]||(ae="nat");let se=b.get("rio3d-frame","1")==="1",Yt=null,nt=new hr,ot=new Vs(-1,1,1,-1,0,1),bt=new nn({depthTest:!1,depthWrite:!1,uniforms:{tex:{value:null},px:{value:new ut},tint:{value:new N(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
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
    }`});nt.add(new K(new an(2,2),bt));let Ot=new ut;function Rt(){Yt&&(t.getDrawingBufferSize(Ot),(Yt.width!==Ot.x||Yt.height!==Ot.y)&&Yt.setSize(Ot.x,Ot.y))}function Jt(){if(Yt){Rt();return}t.getDrawingBufferSize(Ot);try{Yt=new Nn(Ot.x,Ot.y,{samples:4,type:fi,depthBuffer:!0})}catch{Yt=new Nn(Ot.x,Ot.y,{samples:4,depthBuffer:!0})}}_.render=function(){let j=wt[ae];if(_.photo&&j.t){Jt(),t.setRenderTarget(Yt),t.render(e,n),t.setRenderTarget(null);let Tt=bt.uniforms;Tt.tex.value=Yt.texture,Tt.px.value.set(1/Yt.width,1/Yt.height),Tt.tint.value.set(j.t[0],j.t[1],j.t[2]),Tt.sat.value=j.sat,Tt.con.value=j.con,Tt.lift.value=j.lift,Tt.vig.value=j.vig,Tt.glow.value=j.glow,Tt.grain.value=j.grain,Tt.time.value=a.t%10,t.render(nt,ot)}else t.render(e,n);if(_.want){let Tt=_.want;_.want=null;try{Tt()}catch(ve){console.error("want",ve&&ve.message)}}};let De=new N(0,1,0),rt=new N(1,0,0),ht=new fn,ft=new fn,dt=0,xt=0,Nt=1,Gt=0,$t=0,ne=1;_.camAdjust=function(){Gt+=(dt-Gt)*.25,$t+=(xt-$t)*.25,ne+=(Nt-ne)*.25,(Math.abs(Gt)>1e-4||Math.abs($t)>1e-4)&&(ht.setFromAxisAngle(De,Gt),ft.setFromAxisAngle(rt,$t),n.quaternion.premultiply(ht).multiply(ft)),Math.abs(ne-1)>.001&&(n.fov=Math.max(18,Math.min(110,n.fov*ne)),n.updateProjectionMatrix())};let B=new Map,Ae=0;s.addEventListener("pointerdown",j=>{if(_.photo&&(s.setPointerCapture(j.pointerId),B.set(j.pointerId,[j.clientX,j.clientY]),B.size===2)){let Tt=[...B.values()];Ae=Math.hypot(Tt[0][0]-Tt[1][0],Tt[0][1]-Tt[1][1])}}),s.addEventListener("pointermove",j=>{if(!_.photo||!B.has(j.pointerId))return;let Tt=B.get(j.pointerId),ve=j.clientX-Tt[0],Re=j.clientY-Tt[1];if(Tt[0]=j.clientX,Tt[1]=j.clientY,B.size===1){let re=.0045*Nt;dt-=ve*re,xt=Math.max(-1.05,Math.min(1.05,xt-Re*re))}else if(B.size===2){let re=[...B.values()],de=Math.hypot(re[0][0]-re[1][0],re[0][1]-re[1][1]);Ae>0&&(Nt=Math.max(.35,Math.min(1.35,Nt*Ae/de))),Ae=de,Ht.value=Nt}});let ge=j=>{B.delete(j.pointerId),Ae=0};s.addEventListener("pointerup",ge),s.addEventListener("pointercancel",ge),s.addEventListener("wheel",j=>{_.photo&&(Nt=Math.max(.35,Math.min(1.35,Nt*(1+Math.sign(j.deltaY)*.06))),Ht.value=Nt,j.preventDefault())},{passive:!1});let L=r("hud"),E=r("hr"),W=r("menu"),q=r("more"),et=(j,Tt,ve,Re)=>{let re=document.createElement("button");return re.id=j,re.type="button",re.textContent=Tt,ve?W.insertBefore(re,Re||null):E.insertBefore(re,Re||r("cam")),re};q.onclick=j=>{j.stopPropagation(),W.hidden=!W.hidden,q.setAttribute("aria-expanded",String(!W.hidden))},document.addEventListener("click",j=>{(!W.hidden&&!E.contains(j.target)||!W.hidden&&W.contains(j.target)&&j.target.tagName==="BUTTON"&&j.target.id!=="snd")&&(W.hidden=!0,q.setAttribute("aria-expanded","false"))});let gt=et("pauseB","Pausa");gt.dataset.pz="1";let yt=et("photoB","Foto"),it=et("diaryB","Diario",!0,r("snd")),at=et("setB","Ajustes",!0,r("snd")),St=et("restB","Reiniciar",!0),Dt=document.createElement("div");Dt.id="xph",Dt.className="xp",Dt.hidden=!0,Dt.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`,document.body.appendChild(Dt);let vt=document.createElement("button");vt.id="xclose",vt.textContent="Salir de foto",vt.hidden=!0,document.body.appendChild(vt);let _t=document.createElement("div");_t.id="xflash",document.body.appendChild(_t);let Ht=Dt.querySelector("#xzm"),Zt=Dt.querySelector("#xhr"),he=Dt.querySelector("#xfl"),k=Dt.querySelector("#xfm"),Mt={};Object.keys(wt).forEach(j=>{let Tt=document.createElement("button");Tt.className="chip2",Tt.textContent=wt[j].n,Tt.onclick=()=>{ae=j,b.set("rio3d-filter",j),st()},he.appendChild(Tt),Mt[j]=Tt});function st(){for(let j in Mt)Mt[j].classList.toggle("on",j===ae);k.classList.toggle("on",se)}k.onclick=()=>{se=!se,b.set("rio3d-frame",se?"1":"0"),st()},Dt.querySelector("#xvw").onclick=()=>i.setCam(1-i.getCam()),Ht.oninput=()=>{Nt=+Ht.value},Zt.oninput=()=>i.setTod(+Zt.value);let Et=["hud","next","hint","toast","lantB"],It=()=>[...document.body.children].filter(j=>j.tagName==="DIV"&&/pointer-events:none/.test(j.style.cssText)&&j.id!=="xflash");function lt(j){j!==_.photo&&(j&&!i.started()||(_.photo=j,document.body.classList.toggle("photo",j),Et.forEach(Tt=>{let ve=r(Tt)||document.getElementById(Tt);ve&&(ve.style.visibility=j?"hidden":"")}),It().forEach(Tt=>Tt.style.visibility=j?"hidden":""),Dt.hidden=!j,vt.hidden=!j,j?(dt=xt=0,Nt=1,Ht.value=1,Zt.value=i.getTod(),st(),J(),o("Arrastra para mirar \xB7 pellizca para acercar")):(dt=xt=0,Nt=1,B.clear(),J(),zr())))}yt.onclick=()=>lt(!0),vt.onclick=()=>lt(!1),addEventListener("keydown",j=>{j.code==="KeyP"&&lt(!_.photo),j.code==="Escape"&&_.photo&&lt(!1),j.code==="Enter"&&_.photo&&Vt()});function Vt(){_.want=()=>{_t.style.transition="none",_t.style.opacity=.35,requestAnimationFrame(()=>{_t.style.transition="opacity .5s",_t.style.opacity=0});let j=s.width,Tt=s.height,ve=s;if(se){let Re=Math.round(j*.03),re=Math.round(j*.065),de=document.createElement("canvas");de.width=j+2*Re,de.height=Tt+Re+re;let te=de.getContext("2d");te.fillStyle="#f3ead6",te.fillRect(0,0,de.width,de.height),te.drawImage(s,Re,Re,j,Tt);let Bn=i.nearLM(a.dist||0),Gi=Math.round(re*.4);te.fillStyle="#5a4a3c",te.font=Gi+"px Georgia,serif",te.textBaseline="middle",te.fillText("R\xEDo 3D"+(Bn?"  \xB7  "+Yn(Bn):""),Re,Tt+Re+re*.52),te.textAlign="right",te.fillStyle="#8a7a68",te.fillText(Math.round(a.dist||0)+" m  \xB7  "+Yn(y.name)+"  \xB7  "+Yn(i.todName(i.getTod())),de.width-Re,Tt+Re+re*.52),ve=de}ve.toBlob(Re=>{if(!Re)return;let re=new File([Re],"rio3d-"+Date.now()+".jpg",{type:"image/jpeg"}),de=()=>{let te=document.createElement("a");te.href=URL.createObjectURL(Re),te.download=re.name,document.body.appendChild(te),te.click(),setTimeout(()=>{URL.revokeObjectURL(te.href),te.remove()},4e3)};navigator.canShare&&navigator.canShare({files:[re]})?navigator.share({files:[re],title:"R\xEDo 3D"}).catch(te=>{te&&te.name!=="AbortError"&&de()}):de()},"image/jpeg",.92)}}Dt.querySelector("#xshut").onclick=Vt;let Bt=j=>"rio3d-snap-"+j,He=new Set;for(let j=0;j<c.length;j++)b.get(Bt(j),null)&&He.add(j);_.hasSnap=j=>He.has(j),_.snap=function(j){_.want=()=>{let ve=Math.round(420*s.height/s.width),Re=document.createElement("canvas");Re.width=420,Re.height=ve,Re.getContext("2d").drawImage(s,0,0,420,ve);let re=Re.toDataURL("image/jpeg",.72);b.set(Bt(j),re)&&(He.add(j),b.set("rio3d-snapd-"+j,new Date().toISOString().slice(0,10)))}},_.found=j=>{b.get("rio3d-snapd-"+j,null)||b.set("rio3d-snapd-"+j,new Date().toISOString().slice(0,10))};let Ne=j=>j?new Date(j+"T12:00:00").toLocaleDateString(pf(),{day:"numeric",month:"short"}):"",Vn=j=>{let Tt=document.createElement("div");return Tt.className="xp xm",Tt.innerHTML='<div><button class="close">Cerrar</button>'+j+"</div>",Tt.onclick=ve=>{(ve.target===Tt||ve.target.classList.contains("close"))&&Tt.remove()},document.body.appendChild(Tt),Tt};it.onclick=()=>{let j=oi(),Tt=new Array(c.length).fill(0);j.forEach(re=>{let de=Math.round((re.s-240)/u);Tt[i.lmType(de)]++});let ve=+b.get("rio3d-pos","0"),Re='<h2>Diario del r\xEDo</h2><p style="margin:0 0 12px;color:var(--muted)">'+l.size+"/"+c.length+" lugares \xB7 "+y.name+" \xB7 llegaste hasta "+ve+" m \xB7 linternas soltadas: "+j.length+'</p><div class="xgrid">';c.forEach((re,de)=>{let te=l.has(de),Bn=te&&b.get(Bt(de),null);Re+='<div class="xcard'+(te?"":" no")+'"><div class="im"'+(Bn?' style="background-image:url('+Bn+')"':"")+">"+(Bn?"":te?"?":"\xB7")+'</div><div class="tx"><b>'+(te?re:"A\xFAn por descubrir")+"</b>"+(te?Bn?Ne(b.get("rio3d-snapd-"+de,"")):"Vuelve a pasar para fotografiarlo":"Sigue r\xEDo abajo")+(Tt[de]?"<br>Linternas dejadas: "+Tt[de]:"")+"</div></div>"}),Vn(Re+"</div>")};let oi=()=>{try{return JSON.parse(b.get("rio3d-left","[]"))||[]}catch{return[]}},cs=oi(),Or=new Map,jo=[],Hr=new Set,Rs=document.createElement("button");Rs.id="lantB",document.body.appendChild(Rs),Rs.hidden=!0;function zr(){let j=i.getCount();Rs.hidden=!(i.started()&&j>0&&!_.photo),Rs.textContent="Soltar linterna ("+j+")"}Rs.onclick=()=>{if(i.getCount()<=0||_.photo)return;let j=-a.pz+7,Tt=Math.max(-g(j)+4,Math.min(g(j)-4,a.px+Math.sin(a.psi)*7-p(j)));cs.push({s:Math.round(j*10)/10,e:Math.round(Tt*10)/10,t:Date.now()}),cs.length>80&&cs.shift(),b.set("rio3d-left",JSON.stringify(cs)),i.setCount(i.getCount()-1);try{x.plop(0)}catch{}i.spawnRipple(p(j)+Tt,-j),zr(),cs.length===1&&o("Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.")},_.update=function(j,Tt){if(!i.started())return;Rc(j),((_.update.n=(_.update.n||0)+1)&15)===0&&zr();let ve=a.t,Re=i.glowK();for(let[re,de]of Or){let te=cs[re];(!te||te.s<Tt-70||te.s>Tt+280)&&(e.remove(de),jo.push(de),Or.delete(re))}cs.forEach((re,de)=>{if(re.s<Tt-70||re.s>Tt+280)return;let te=Or.get(de);te||(te=jo.pop()||f(),te.scale.setScalar(1.25),te.userData.body.material=te.userData.body.material.clone(),te.userData.body.material.color.set(16773328),e.add(te),Or.set(de,te)),te.position.set(p(re.s)+re.e+Math.sin(ve*.3+de)*.5,Math.sin(ve*1.1+de)*.04,-re.s),te.rotation.z=Math.sin(ve*.8+de*2)*.08,te.userData.glow.material.opacity=(.6+.3*Re)*(.85+.15*Math.sin(ve*3+de)),te.userData.refl.material.opacity=(.3+.3*Re)*(.9+.1*Math.sin(ve*2+de));let Bn=te.position.x-a.px,Gi=te.position.z-a.pz;Bn*Bn+Gi*Gi<196&&!Hr.has(de)&&!_.photo&&(Hr.add(de),o("Tu linterna del "+Ne(new Date(re.t).toISOString().slice(0,10))))})},St.onclick=()=>{let j=Vn('<h2>\xBFVolver al inicio del r\xEDo?</h2><p style="color:var(--muted);margin:0 0 14px">Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.</p><div class="row"><button class="q" id="xno">Cancelar</button><button class="q" id="xyes" style="background:#ffc77a;color:#3b2a1a">Reiniciar recorrido</button></div>');j.querySelector("#xno").onclick=()=>j.remove(),j.querySelector("#xyes").onclick=()=>{j.remove(),i.restart()}},at.onclick=()=>{let j=Vn(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Autom\xE1tica</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (m\xE1s fluida)</option></select></div>
    <div class="row"><span>Volumen</span><input type="range" id="xv" min="0" max="1" step=".05" style="width:55%;accent-color:#ffc77a"></div>
    <div class="row"><span>Estaci\xF3n<br><small style="color:var(--muted)">Cambiarla recarga el r\xEDo</small></span><select id="xs"><option value="auto">Seg\xFAn la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Oto\xF1o</option><option value="3">Invierno</option></select></div>
    <div class="row"><span>Idioma</span><select id="xl"><option value="es">Espa\xF1ol</option><option value="en">English</option><option value="ja">\u65E5\u672C\u8A9E</option></select></div>
    <div class="row"><span>Subt\xEDtulos de ambiente<br><small style="color:var(--muted)">Describe los sonidos con texto</small></span><select id="xsub"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Vibraci\xF3n suave<br><small style="color:var(--muted)">Si tu dispositivo la permite</small></span><select id="xhp"><option value="1">S\xED</option><option value="0">No</option></select></div>
    <div class="row"><span>Modo una mano<br><small style="color:var(--muted)">Botones al alcance del pulgar</small></span><select id="xh"><option value="0">No</option><option value="r">Derecha</option><option value="l">Izquierda</option></select></div>
    <div class="row"><span>Tono suave<br><small style="color:var(--muted)">Suaviza los sonidos agudos</small></span><select id="xsoft"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Dormir<br><small style="color:var(--muted)">Baja el sonido y la luz poco a poco</small></span><select id="xsl"><option value="0">No</option><option value="15">15 min</option><option value="30">30 min</option><option value="45">45 min</option></select></div>`),Tt=j.querySelector("#xq"),ve=j.querySelector("#xs"),Re=j.querySelector("#xql"),re=j.querySelector("#xv");re.value=x.vol,re.oninput=()=>{x.setVol(+re.value),b.set("rio3d-vol",re.value)},Tt.value=T,ve.value=b.get("rio3d-season","auto"),Re.textContent=mt(),Tt.onchange=()=>{T=Tt.value,b.set("rio3d-q",T),C=3,J(),Re.textContent=mt()},ve.onchange=()=>{b.set("rio3d-season",ve.value);try{i.savePos()}catch{}location.reload()};let de=j.querySelector("#xl");de.value=pf(),de.onchange=()=>{A0(de.value);try{i.savePos()}catch{}location.reload()};let te=j.querySelector("#xsub");te.value=b.get("rio3d-subs","0"),te.onchange=()=>b.set("rio3d-subs",te.value);let Bn=j.querySelector("#xhp");Bn.value=b.get("rio3d-hap","1"),Bn.onchange=()=>b.set("rio3d-hap",Bn.value);let Gi=j.querySelector("#xsoft");Gi.value=UX.api.soft()?"1":"0",Gi.onchange=()=>UX.api.setSoft(Gi.value==="1");let Qo=j.querySelector("#xsl");Qo.value=String(UX.api.sleepMin()),Qo.onchange=()=>UX.api.sleep(+Qo.value);let Cs=j.querySelector("#xh");Cs.value=b.get("rio3d-hand","0"),Cs.onchange=()=>{b.set("rio3d-hand",Cs.value),document.body.classList.remove("hand-r","hand-l"),Cs.value!=="0"&&document.body.classList.add("hand-"+Cs.value)}};{let j=parseFloat(b.get("rio3d-vol","1"));j>=0&&j<=1&&(x.vol=j)}let xi=b.get("rio3d-ob","0")==="1"?9:0,Fn=0,ki=r("hint");function Rc(j){xi>=9||!i.started()||(Fn+=j,xi===0&&Fn>1?(ki.hidden=!1,ki.style.opacity=1,ki.textContent="Mant\xE9n presionado y desliza a los lados para dirigir la canoa",xi=1,Fn=0):xi===1&&(Math.abs(a.steer)>.35||Fn>40)?(xi=2,Fn=0,ki.textContent="Las luces sobre el agua son linternas: pasa cerca para recogerlas"):xi===2&&(i.getCount()>0||Fn>60)?(xi=3,Fn=0,ki.textContent="Con Foto puedes guardar un momento; con Diario ves tus lugares"):xi===3&&Fn>10&&(ki.style.opacity=0,xi=9,b.set("rio3d-ob","1")))}return bt.uniforms.time.value=0,J(),st(),addEventListener("resize",()=>setTimeout(Rt,50)),_}(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},t=document.createElement("style");t.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(t);let e=document.createElement("div");e.id="pz",e.hidden=!0,e.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(e);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,e.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,o){if(r=r.filter(Boolean),!s||!r.length)return;let a=document.createElement("style");a.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(a);let c=document.createElement("button");c.type="button",c.textContent=o||"M\xE1s",c.className=r[0].className||"",c.id="pzMoreB";let l=document.createElement("div");return l.id="pzMore",l.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),l.appendChild(h)}),s.appendChild(c),document.body.appendChild(l),c.onclick=h=>{if(h.stopPropagation(),l.hidden=!l.hidden,!l.hidden){let u=c.getBoundingClientRect();l.style.top=u.bottom+6+"px",l.style.right=Math.max(8,innerWidth-u.right)+"px"}},document.addEventListener("click",h=>{!l.hidden&&!l.contains(h.target)&&h.target!==c&&(l.hidden=!0)}),addEventListener("resize",()=>{l.hidden=!0}),c},e.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();var tt=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Fe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Be=(i,t,e)=>{let n=Fe((e-i)/(t-i));return n*n*(3-2*n)},yr=(i,t,e)=>i+(t-i)*e;function sn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=tt(e,n),l=tt(e+1,n),h=tt(e,n+1),u=tt(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}var We=i=>document.getElementById(i),mf=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Lo=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=6.2832;for(;e<-Math.PI;)e+=6.2832;return e};var nc=11,Qb=[0,1,2,4,5,6,7,8,9,3,10],Ke=i=>Qb[(i%nc+nc)%nc],tS=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if(Ke(n)===6){let s=240+n*260+tt(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},ie=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+tS(i),be=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),xn=i=>Math.atan((ie(i+1)-ie(i-1))/2);function Zn(i,t){let e=Math.abs(i-ie(t))-be(t);if(e<0)return-1.5+1.7*Be(-5,0,e);let n=sn(i*.018,t*.018)*12+sn(i*.055,t*.055)*4;return eS(i,t,.2+.6*Be(0,4,e)+n*Be(5,60,e)+Math.min(e,160)*.1*Be(30,100,e))}var oe={PO:66,PH:7,X:66,ZF:44,ZB:-52,MZ0:50,MZ1:60},P0=new Map;function gf(i){let t=P0.get(i);if(!t){let e=rn(i),n=xn(e);t={k:i,s0:e,a:n,x0:ie(e),hw0:be(e),side:tt(i,9)>.5?1:-1,ca:Math.cos(n),sa:Math.sin(n)},P0.set(i,t)}return t}function ic(i,t,e){let n=t-i.x0,s=i.s0-e,r=n*i.ca+s*i.sa,o=-n*i.sa+s*i.ca;return[i.side*o,-i.side*r+i.hw0+oe.PO]}function vr(i){let t=Math.round((i-240)/260);for(let e=t-1;e<=t+1;e++)if(Ke(e)===10)return gf(e);return null}function eS(i,t,e){let n=vr(t);if(!n||Math.abs(t-n.s0)>200)return e;let[s,r]=ic(n,i,t);if(r<-130||r>95||Math.abs(s)>150)return e;let o=Math.max(Math.abs(s)-oe.X,r-oe.ZF,oe.ZB-r),a=1-Be(4,70,o);a>0&&(e=e*(1-a)+Math.min(e,3.2)*a);let c=1-Be(0,2,o+1.5);c>0&&(e=e*(1-c)+oe.PH*c);let l=Math.min(Math.max(Math.abs(s)-62,Math.abs(r-53)-7),Math.max(Math.abs(s+50)-6,Math.abs(r-65)-10)),h=1-Be(-.2,2.2,l);return h>0&&(e=e*(1-h)-1.6*h),e}function I0(i,t){let e=vr(t);if(!e||Math.abs(t-e.s0)>130)return 0;let[n,s]=ic(e,i,t);return 1-Be(0,2,Math.max(Math.abs(n)-oe.X,s-oe.ZF,oe.ZB-s)+1.5)}function xf(i,t){let e=vr(t);if(!e||Math.abs(t-e.s0)>130)return!1;let[n,s]=ic(e,i,t);return Math.abs(n)<80&&s>-66&&s<72}function Do(i){let t=rn(i),e=rn(i-1);return e-80>=t-360?e-80:e+80}var Jn=150,$n=120,is=2.6,Kn=3,sc=8,Un=zh[Js()],Ei=260,rn=i=>240+i*Ei+tt(i,5)*50,Mr=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++){let s=Ke(n);s===3?t=Math.max(t,1-Be(40,170,Math.abs(rn(n)-i))):s===10&&(t=Math.max(t,.9*(1-Be(55,230,Math.abs(rn(n)-i)))))}return t},No=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)Ke(n)===8&&(t=Math.max(t,1-Be(70,190,Math.abs(rn(n)-i))));return t},_f=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=Ke(n);if((s===5||s===7)&&Math.abs(rn(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},Uo=i=>Be(.4,.55,sn(i*.0022+31,5)*.6+sn(i*.0053+8,2)*.4),Gh=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+tt(n,7)*220,r=120+tt(n,8)*70,o=(i-s)/r;t=Math.max(t,Math.exp(-o*o))}return t};var ct={tod:.5,glowK:.3,started:!1,camMode:0,camK:0,count:0,scareT:0,cine:null,cineW:0,savedS:0,X:null},F={px:ie(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};F.pz=-30;F.px=ie(30);F.psi=xn(30);function Vh(i){F.pz=-i,F.px=ie(i),F.psi=xn(i),F.dist=i}function L0(){ct.cine&&ct.cine.t>1.5&&(ct.cine.t=Math.max(ct.cine.t,ct.cine.dur-2.4))}var vs=document.getElementById("c"),ss=new Bh({canvas:vs,antialias:!0,powerPreference:"high-performance"});ss.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var At=new hr;At.fog=new va(13421772,22,250);var pn=new gn(68,1,.05,900);function yf(){let i=innerWidth,t=innerHeight;ss.setSize(i,t,!1),pn.aspect=i/t,pn.fov=i/t<1?82:68,pn.updateProjectionMatrix()}addEventListener("resize",yf);addEventListener("orientationchange",()=>setTimeout(yf,250));yf();document.addEventListener("visibilitychange",()=>{try{ce.ctx&&(document.hidden?ce.ctx.suspend():ce.on&&!PZ.on&&ce.ctx.resume())}catch{}});var br=new Ba(16777215,9083528,1.2);At.add(br);var Ms=new ka(16777215,1);At.add(Ms);var jn=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Ui(i)})(),ni=(i,t)=>{let e=new xs(new Qi({map:jn,color:i,blending:kn,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},Xt=(i,t)=>new _e(Object.assign({gradientMap:Ie,color:i},t||{}));var Ti=new K(new pe(700,24,16),new nn({side:Tn,depthWrite:!1,fog:!1,uniforms:{top:{value:new pt},hor:{value:new pt},sunDir:{value:new N(0,1,0)},sunCol:{value:new pt},glow:{value:1}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,hor,sunDir,sunCol;uniform float glow;
  void main(){vec3 d=normalize(vP);float h=d.y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5));
   float s=max(dot(d,normalize(sunDir)),0.);c+=sunCol*(pow(s,18.)*.45+pow(s,200.)*.6)*glow;
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));Ti.renderOrder=-10;At.add(Ti);var bf=ni(16769712,140),Sf=ni(14673663,70);At.add(bf,Sf);var D0=new ue,N0=new Float32Array(450*3);for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);N0.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3)}D0.setAttribute("position",new Kt(N0,3));var Ef=new Mi(D0,new li({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));At.add(Ef);var Fo=(i,t,e,n,s,r,o,a,c)=>({t:i,top:new pt(t),hor:new pt(e),fog:new pt(n),sun:new pt(s),hi:r,si:o,night:a,hg:new pt(c)}),Wh=[Fo(0,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70"),Fo(.12,"#8fa4d8","#f6c7c0","#efcfcf","#ffd2a8",1.4,.5,.2,"#c4ccc0"),Fo(.35,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0"),Fo(.6,"#7e79c2","#f9bd9c","#e8b9b3","#ffb98a",1.5,.8,.1,"#c8c4c0"),Fo(.75,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70"),Fo(1,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70")],Se={top:new pt,hor:new pt,fog:new pt,sun:new pt,hg:new pt,hi:1,si:1,night:0};function nS(i){let t=0;for(;t<Wh.length-2&&i>Wh[t+1].t;)t++;let e=Wh[t],n=Wh[t+1],s=Fe((i-e.t)/(n.t-e.t));["top","hor","fog","sun","hg"].forEach(r=>Se[r].copy(e[r]).lerp(n[r],s)),Se.hi=yr(e.hi,n.hi,s),Se.si=yr(e.si,n.si,s),Se.night=yr(e.night,n.night,s)}var vf=new N,Mf=new N;function U0(i,t){nS(ct.tod);let e=Math.sin(Math.PI*2*(ct.tod-.12));vf.set(.25,e,-.9).normalize(),Mf.set(-.25,-e*.9+.05,-.9).normalize(),At.fog.color.copy(Se.fog),Ti.material.uniforms.top.value.copy(Se.top),Ti.material.uniforms.hor.value.copy(Se.hor);let n=e>0,s=n?vf:Mf;Ti.material.uniforms.sunDir.value.copy(s),Ti.material.uniforms.sunCol.value.copy(Se.sun),Ti.material.uniforms.glow.value=n?1:.5,br.color.copy(Se.hor).lerp(Se.top,.4),br.groundColor.copy(Se.hg),br.intensity=Se.hi,Ms.color.copy(Se.sun),Ms.intensity=Se.si,Ms.position.copy(s).multiplyScalar(100).add(new N(i,0,t)),Ms.target.position.set(i,0,t),Ms.target.updateMatrixWorld(),Ti.position.set(i,0,t),bf.position.set(i,0,t).addScaledVector(vf,640),Sf.position.set(i,0,t).addScaledVector(Mf,640),bf.material.opacity=Fe(e*4+.2,0,1),Sf.material.opacity=Fe(-e*4,0,1)*.9,Ef.position.set(i,0,t),Ef.material.opacity=Fe(Se.night*1.1,0,1),pi.material.uniforms.sunDir.value.copy(s),pi.material.uniforms.sunCol.value.copy(Se.sun).multiplyScalar(Fe(n?e*3:-e*1.5,0,1)),pi.material.uniforms.hor.value.copy(Se.hor),pi.material.uniforms.top.value.copy(Se.top),pi.material.uniforms.fog.value.copy(Se.fog),pi.material.uniforms.night.value=Se.night,ct.glowK=Fe(Se.night*1.2+.25,0,1)}var Xh=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",pi=new K(new an(1e3,1e3),new nn({uniforms:{t:{value:0},deep:{value:new pt("#5a8f9c")},shallow:{value:new pt("#a3c8c4")},hor:{value:new pt},top:{value:new pt},fog:{value:new pt},sunDir:{value:new N(0,1,0)},sunCol:{value:new pt},night:{value:0},fogN:{value:22},fogF:{value:250}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,night,fogN,fogF;uniform vec3 deep,shallow,hor,top,fog,sunDir,sunCol;
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
}`}));pi.rotation.x=-Math.PI/2;At.add(pi);function bs(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ue,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=F0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=F0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function F0(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Kt(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Tf=new Float32Array(Jn*$n*3),wf=new Float32Array(Jn*$n*3),$s=new ue;$s.setAttribute("position",new Kt(Tf,3));$s.setAttribute("color",new Kt(wf,3));{let i=new Uint16Array((Jn-1)*($n-1)*6),t=0;for(let e=0;e<$n-1;e++)for(let n=0;n<Jn-1;n++){let s=e*Jn+n,r=s+1,o=s+Jn,a=o+1;i.set([s,r,o,r,a,o],t),t+=6}$s.setIndex(new Kt(i,1))}var B0=new K($s,new _e({vertexColors:!0,gradientMap:Ie}));B0.frustumCulled=!1;At.add(B0);var O0=new pt("#eadcb9"),H0=new pt("#b6dca3"),z0=new pt("#8fc79b"),k0=new pt("#bdd6c8"),G0=new pt("#d3cce9"),V0=new pt("#c8d6c0"),W0=new pt("#d9b45f"),X0=new pt("#c8964a"),q0=new pt("#f6c9d8"),Y0=new pt("#d9d2bf"),Je=new pt,rc=1900;function Z0(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let l=0;l<s.count;l++)s.setXY(l,s.getX(l)*t[0],s.getY(l)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,o=i.boundingBox.max.y,a=i.attributes.position,c=new Float32Array(a.count*3);for(let l=0;l<a.count;l++){let h=e+(n-e)*((a.getY(l)-r)/(o-r||1));c[l*3]=c[l*3+1]=c[l*3+2]=h}return i.setAttribute("color",new Kt(c,3)),i}var J0=bs([[2,2.6,.8],[1.6,2.5,2.4],[1.2,2.3,3.9],[.75,2,5.3]].map(([i,t,e])=>Z0(new Oe(i,t,8,1).translate(0,e+t/2,0),[4,2],.72,1.18)).map(i=>(i.deleteAttribute("normal"),i)));J0.computeVertexNormals();var $0=bs([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3]].map(([i,t,e,n])=>{let s=new Mn(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),Z0(s,[3,3],.82,1.22)}));$0.computeVertexNormals();var iS=()=>new _e({gradientMap:Ie,color:16777215,vertexColors:!0,map:Ye("leaf")}),oc=new Pn(J0,new _e({gradientMap:Ie,color:16777215,vertexColors:!0,map:Ye("needle")}),rc),Sr=new Pn($0,iS(),rc),ac=new Pn(new Le(.2,.34,4.2,6).translate(0,2.1,0),new _e({gradientMap:Ie,color:9071196,map:Ye("bark")}),rc),cc=new Pn(new hi(.7,10).rotateX(-Math.PI/2),new _e({gradientMap:Ie,color:16777215}),500),lc=new Pn(new Mn(.28,0).translate(0,.2,0),new _e({gradientMap:Ie,color:16777215}),160);[oc,Sr,ac,cc,lc].forEach(i=>{i.frustumCulled=!1,At.add(i)});var Af={value:0};function sS(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=Af,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var Rf=(()=>{let i=[];for(let t=0;t<9;t++){let e=t/9*6.28+tt(t,1),n=.9+tt(t,2)*1.3,s=.07,r=Math.cos(e)*.25*tt(t,3),o=Math.sin(e)*.25*tt(t,3),a=(tt(t,4)-.5)*.9,c=new ue,l=new Float32Array([-s,0,0,s,0,0,a*.5-s*.5,n*.6,0,a*.5+s*.5,n*.6,0,a,n,0]);c.setAttribute("position",new Kt(l,3)),c.setIndex([0,1,2,1,3,2,2,3,4]),c.computeVertexNormals();let h=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((f,p)=>h.set(f,p*3)),c.setAttribute("color",new Kt(h,3)),c.rotateY(e),c.translate(r,0,o),i.push(c)}return bs(i)})(),Ss=new Pn(Rf,sS(new _e({gradientMap:Ie,color:16777215,vertexColors:!0,side:me})),1400),rS=(()=>{let i=[],t=new Le(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new Kt(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,o])=>{let a=new pe(1,9,5).toNonIndexed();a.scale(o,o*.28,o),a.translate(n,s,r);let c=a.attributes.position,l=new Float32Array(c.count*3);for(let h=0;h<c.count;h++){let u=.62+.4*Fe((c.getY(h)-s)/(o*.28)*.5+.5);l[h*3]=u*.9,l[h*3+1]=u,l[h*3+2]=u*.92}a.setAttribute("color",new Kt(l,3)),a.deleteAttribute("uv"),i.push(a)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),bs(i)})(),hc=new Pn(rS,new _e({gradientMap:Ie,color:16777215,vertexColors:!0}),400);[Ss,hc].forEach(i=>{i.frustumCulled=!1,At.add(i)});var K0=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],qh=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],je=new Me,bn=new fn,Sn=new N,un=new N,Es=new N(0,1,0),j0=new pt(Un.gnd),Q0=Un.pine,tg=Un.blos,eg=Hi.blos,ng=Hi.bblos,Bo=new Pn(new Mn(1,1).scale(1,.72,1).translate(0,.45,0),new _e({gradientMap:Ie,color:16777215,map:Ye("leaf")}),1700);Bo.frustumCulled=!1;At.add(Bo);var ig=["#6fa383","#7fb592","#5f957a","#8cc09a"],A2=Un.bblos,oS=(()=>{let i=new Le(.11,.15,1,5,8,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=Math.round(s*8)%3===0?.68:1;e[n*3]=r,e[n*3+1]=r,e[n*3+2]=r*.95}return i.setAttribute("color",new Kt(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),uc=new Pn(oS,new _e({gradientMap:Ie,color:16777215,vertexColors:!0}),2e3),dc=new Pn(new Mn(1,0).scale(1,.5,1),new _e({gradientMap:Ie,color:16777215}),2e3);[uc,dc].forEach(i=>{i.frustumCulled=!1,At.add(i)});var sg=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],rg=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],Cf=Un.brd,og=new pt("#9ccf8a");var fc={a:1e9,b:1e9},Yh=new Float32Array(Jn*$n*3),Zh=new Float32Array(Jn*$n*3),ag=new Map;function If(i){let t=ag.get(i);if(!t){let e=i.instanceMatrix.array.length;t={m:new Float32Array(e),c:new Float32Array(e/16*3)},ag.set(i,t)}return t}var wi=(i,t,e)=>{e.toArray(If(i).m,t*16)},rs=(i,t,e)=>{let n=If(i);n.hc=1;let s=n.c;s[t*3]=e.r,s[t*3+1]=e.g,s[t*3+2]=e.b};function aS(i,t){let e=If(i);i.instanceMatrix.array.set(e.m.subarray(0,t*16)),i.instanceMatrix.needsUpdate=!0,e.hc&&(i.instanceColor||i.setColorAt(0,Je),i.instanceColor.array.set(e.c.subarray(0,t*3)),i.instanceColor.needsUpdate=!0),i.count=t}function*cS(i,t){let e=[],n=i-Jn/2*is,s=t-60,r=0,o=0,a=0,c=0,l=0,h=0,u=0,f=0;for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn,m=No(d),_=Mr(d),b=Uo(d);for(let y=0;y<Jn;y++){let S=n+y*is,M=Zn(S,d),w=(x*Jn+y)*3;Yh[w]=S,Yh[w+1]=M,Yh[w+2]=-d;let v=Math.abs(S-ie(d))-be(d),T=sn(S*.05,d*.05),R=(tt(y+n,x)-.5)*.05;if(v<0)Je.copy(V0);else{if(Je.copy(H0).lerp(z0,T),Je.lerp(O0,1-Be(.5,3.5,v)),Je.lerp(k0,Be(6,13,M)*.8),Je.lerp(G0,Be(13,24,M)),m>0&&Je.lerp(og,m*Be(0,5,v)*.65),Un.gk&&Je.lerp(j0,Un.gk*Be(.4,3,v)*(1-m*.6)),_>.05){let P=sn(S*.11+3,d*.11+7);P>.5&&Je.lerp(q0,_*Be(.5,.8,P)*.42*Be(.4,3,v))}{let P=I0(S,d);P>0&&Je.lerp(Y0,P*.9)}{let P=sn(S*.03+50,d*.03+20),I=Be(.5,.72,P)*Be(.4,2.5,v)*(1-Be(9,26,v));I>0&&Je.lerp(sn(S*.2,d*.2)>.5?W0:X0,I*.85)}}if(Zh[w]=Je.r+R,Zh[w+1]=Je.g+R,Zh[w+2]=Je.b+R,v>5&&M<17&&o<rc&&!_f(d,v)&&!xf(S,d)){let P=tt(S*3.1,d*1.7),I=.05*(.5+sn(S*.03+9,d*.03))*(v<34?.75:1)+(v<36?(.05+.09*b)*(1-v/44):0)*(.6+.8*sn(S*.07,d*.07))+(v<60?_*.11*(1-v/70):0);if(P<I*(1-m*.92)){let D=(tt(S,d)-.5)*is*.9,C=(tt(d,S)-.5)*Kn*.9,U=.8+tt(S+4,d+1)*.9;Sn.set(S+D,Zn(S+D,d+C)-.1,-(d+C)),bn.setFromAxisAngle(Es,tt(d,S)*6.28);let G=tt(S*.7,d*.3);v<60&&G<.04+_*.95?(un.set(U,U,U),je.compose(Sn,bn,un),wi(Sr,a,je),wi(ac,a,je),rs(Sr,a,Je.set((G<_*.95?eg:tg)[tt(S,d+3)*4|0])),a++):tt(S*1.1,d*1.7)<.3?(un.set(U*1.05,U*(.9+tt(d,5)*.5),U*1.05),je.compose(Sn,bn,un),wi(Sr,a,je),wi(ac,a,je),rs(Sr,a,Je.set(Cf[tt(S,d+7)*Cf.length|0])),a++):tt(S*1.9,d*.8)>.55&&l<400?(un.set(U*1.2,U*1.2,U*1.2),je.compose(Sn,bn,un),wi(hc,l,je),rs(hc,l,Je.set(K0[tt(S+5,d)*4|0])),l++):(un.set(U,U*(.9+tt(d,3)*1.1),U),je.compose(Sn,bn,un),wi(oc,c,je),rs(oc,c,Je.set(Q0[tt(S+2,d)*4|0])),c++),o++}}}}for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn,m=Mr(d),_=No(d);for(let b=0;b<Jn;b+=1){let y=n+b*is,S=Math.abs(y-ie(d))-be(d);if(S<2.2||S>55||u>=1700||_f(d,S)||xf(y,d)||Zn(y,d)>15||tt(y*2.3+1,d*1.3)>(.05+m*.2)*(1-_*.8))continue;let v=(tt(y,d+9)-.5)*is,T=(tt(d,y+9)-.5)*Kn,R=.7+tt(y+8,d)*.9+m*.3;Sn.set(y+v,Zn(y+v,d+T)-.1,-(d+T)),bn.setFromAxisAngle(Es,tt(d,y)*6.28),un.set(R*1.2,R,R*1.1),je.compose(Sn,bn,un),wi(Bo,u,je),rs(Bo,u,Je.set(m>.25&&tt(y,d+5)<.55?ng[tt(y,d)*4|0]:ig[tt(d,y+2)*4|0])),u++}}for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn,m=No(d);if(!(m<.02))for(let _=0;_<Jn;_++){let b=n+_*is,y=ie(d),S=Math.abs(b-y)-be(d);if(!(S<.3||S>26||f>=1990))for(let M=0;M<2;M++){if(tt(b*3.7+M*5,d*2.9+M)>m*(1.05-S*.012))continue;let w=(tt(b+M,d+3)-.5)*is,v=(tt(d+M,b+3)-.5)*Kn,T=b+w,R=d+v,P=11+tt(T,R)*12,I=.8+tt(R,T)*.6,D=.05+tt(T*2,R)*.14,C=T>y?1:-1,U=Zn(T,R)-.3;Sn.set(T,U,-R),bn.setFromAxisAngle(new N(0,0,1),C*D),un.set(I,P,I),je.compose(Sn,bn,un),wi(uc,f,je),rs(uc,f,Je.set(sg[tt(T,R+1)*4|0]));let G=T-C*Math.sin(D)*P,O=U+Math.cos(D)*P;Sn.set(G,O,-R),bn.identity();let $=1.5+tt(R,T+4)*1.6;un.set($,$,$),je.compose(Sn,bn,un),wi(dc,f,je),rs(dc,f,Je.set(rg[tt(T+2,R)*4|0])),f++}}}e.push([uc,f],[dc,f]),e.push([Bo,u]);for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn;for(let m=0;m<4;m++){let _=m%2?1:-1;if(tt(d*.53,m+3)>.62||h>=1400)continue;let b=m>1&&tt(d,m+9)>.6,y=be(d)+_*0+(b?-(1.5+tt(d,m+1)*4):-.3+tt(d,m+2)*3.4),S=ie(d)+_*y,M=-(d+(tt(d,m)-.5)*Kn);if(b&&Math.abs(S-ie(d))>be(d)-1.5)continue;let w=.7+tt(d+m,7)*.9;Sn.set(S,Math.max(-.2,Zn(S,d)-.15),M),bn.setFromAxisAngle(Es,tt(d,m+5)*6.28),un.set(w,w*(.8+tt(d,m+6)*.7),w),je.compose(Sn,bn,un),wi(Ss,h,je),rs(Ss,h,Je.set(qh[tt(d,m+4)*4|0])),h++}}e.push([Ss,h],[hc,l]),e.push([oc,c],[Sr,a],[ac,a]);let p=0,g=0;for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn;for(let m=0;m<3;m++){if(tt(d*.37,m+7)>.5||p>=500)continue;let _=(tt(d+m,5)*2-1)*(be(d)-2.2),b=ie(d)+_;Sn.set(b,.03,-(d+(tt(d,m)-.5)*Kn)),bn.setFromAxisAngle(Es,tt(d,m+2)*6.28);let y=.7+tt(d+m,9)*.9;un.set(y,1,y),je.compose(Sn,bn,un),wi(cc,p,je),rs(cc,p,Je.set(tt(d,m)>.5?"#a8dba9":"#96cfa0")),p++,tt(d,m+11)>.72&&g<160&&(je.compose(Sn.setY(.05),bn,un.set(1,1,1)),wi(lc,g,je),rs(lc,g,Je.set(tt(d,m+1)>.4?"#f7b9cf":"#fbe39a")),g++)}}e.push([cc,p],[lc,g]);for(let[x,d]of e)aS(x,d);Tf.set(Yh),wf.set(Zh),$s.attributes.position.needsUpdate=!0,$s.attributes.color.needsUpdate=!0,$s.computeVertexNormals()}var Er=null,cg=0,Pf=!1;function lg(i,t,e){let n=Math.floor(-t/(Kn*sc))*Kn*sc,s=Math.round(i/(is*sc))*is*sc;if(!Er&&(n!==fc.b||s!==fc.a)){let r=!Pf||Math.abs(n-fc.b)>150||Math.abs(s-fc.a)>150;if(fc={a:s,b:n},Er=cS(s,n),cg=n,r){for(;!Er.next().done;);e(n),Er=null,Pf=!0}}if(Er){let r=performance.now(),o;do o=Er.next();while(!o.done&&performance.now()-r<3);o.done&&(e(cg),Er=null,Pf=!0)}}var Df=140,hg=[],Nf=new ue,Jh=new Float32Array(Df*3);for(let i=0;i<Df;i++)hg.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);Nf.setAttribute("position",new Kt(Jh,3));var Lf=new li({color:16773792,size:.35,map:jn,transparent:!0,opacity:0,blending:kn,depthWrite:!1}),$h=new Mi(Nf,Lf);$h.frustumCulled=!1;At.add($h);function ug(i){if(Lf.opacity=Fe(i*1.3-.2,0,.9),$h.visible=Lf.opacity>.01,$h.visible){for(let t=0;t<Df;t++){let e=hg[t],n=F.t*.4+e[3],s=Math.sin(F.psi),r=-Math.cos(F.psi);Jh[t*3]=F.px+e[0]+Math.sin(n*2.1+t)*1.5,Jh[t*3+1]=e[1]+Math.sin(n*3+t)*.4,Jh[t*3+2]=F.pz+e[2]+Math.cos(n*1.7+t)*1.5}Nf.attributes.position.needsUpdate=!0}}var Qn=Xt,Ge=new Qt;At.add(Ge);var Ts=new Hs;Ts.moveTo(0,3.4);Ts.quadraticCurveTo(.5,2.4,.7,1);Ts.lineTo(.7,-1.3);Ts.lineTo(-.7,-1.3);Ts.lineTo(-.7,1);Ts.quadraticCurveTo(-.5,2.4,0,3.4);var Uf=new K(new bo(Ts,{depth:.24,bevelEnabled:!1}),new _e({gradientMap:Ie,color:14722684,emissive:4204570,map:Ye("wood")}));Uf.rotation.x=-Math.PI/2;Uf.position.y=-.04;Ge.add(Uf);var pc=new K(new Na(Ts),new _e({gradientMap:Ie,color:11568232,emissive:2759186,map:Ye("plank")}));pc.geometry.scale(.8,.86,1);pc.geometry.translate(0,.2,0);pc.rotation.x=-Math.PI/2;pc.position.y=.21;Ge.add(pc);{let i=Qn(9068357,{map:Ye("wood")}),t=Qn(13146740,{map:Ye("plank")}),e=Ts,n=new Hs(e.getPoints(24)),s=new dr(n.getPoints(24).map(u=>new ut(u.x*.86,u.y*.9+.1)).reverse());n.holes.push(s);let r=new bo(n,{depth:.07,bevelEnabled:!1}),o=new K(r,i);o.rotation.x=-Math.PI/2,o.position.y=.2,Ge.add(o);for(let u=0;u<6;u++){let f=-2.3+u*.72,p=u<2?1-u*.1:1.28,g=new K(new In(p,.07,.08),i);g.position.set(0,.23,f),Ge.add(g)}let a=new K(new In(1.35,.07,.34),t);a.position.set(0,.5,.55),Ge.add(a);let c=new K(new _s(.2,.045,6,14),Qn(14271378));c.rotation.x=Math.PI/2,c.position.set(.25,.27,-1.7),Ge.add(c);let l=c.clone();l.scale.setScalar(.8),l.position.set(.25,.32,-1.7),Ge.add(l);let h=new K(new pe(.13,8,6),i);h.position.set(0,.22,-3.35),Ge.add(h)}var fg=[];{let i=Qn(9075550,{map:Ye("cloth")}),t=Qn(11045468,{map:Ye("woodV")});[[-.35,.34,-1.55,.34],[-.05,.32,-1.35,.28],[-.3,.3,-1.1,.26]].forEach(([s,r,o,a])=>{let c=new K(new Mn(a,1),i);c.scale.set(1.1,.65,1),c.position.set(s,r,o),Ge.add(c),fg.push(c)});let e=new K(new Le(.025,.035,4.6,6),t);e.position.set(-.55,.9,-2.6),e.rotation.set(1.28,0,.14),Ge.add(e);let n=new K(new Le(.006,.006,2.3,3),Qn(14209216));n.position.set(-.95,.35,-4.7),Ge.add(n)}var pg=new K(new Le(.03,.04,.9,6),new _e({gradientMap:Ie,color:8018508}));pg.position.set(0,.55,-3.05);Ge.add(pg);var mc=new K(new pe(.12,10,8),new Pe({color:16769704}));mc.position.set(0,1.05,-3.05);Ge.add(mc);var jh=ni(16762746,2.4);jh.position.copy(mc.position);Ge.add(jh);var Qh=new za(16763274,0,22,1.6);Qh.position.set(0,1.5,-2.8);Ge.add(Qh);function dg(){let i=new Qt,t=new _e({gradientMap:Ie,color:15716516,emissive:3811866}),e=new K(new Le(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new K(new In(.2,.03,.62),new _e({gradientMap:Ie,color:15047302}));n.position.z=1.55,i.add(n);let s=new K(new In(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new Qt;return r.add(i),Ge.add(r),r}var mg=[dg(),dg()],lS=[new N(-.7,.5,-.3),new N(.7,.5,-.3)],hS=[new N(-1.05,.55,-.9),new N(1.05,.55,-.9)],Ar=new Qt;Ge.add(Ar);Ar.position.set(0,.42,.55);Ar.scale.setScalar(1.3);var Ai=new Qt;Ai.position.y=.3;Ar.add(Ai);var Oo=new Qt;Oo.position.y=1;Ai.add(Oo);var Ks=new Qt;Ks.position.y=.2;Oo.add(Ks);var gg=[];{let i=Qn(9279656,{map:Ye("cloth")}),t=Qn(7305868,{map:Ye("cloth")}),e=Qn(4540762,{map:Ye("cloth")}),n=Qn(14264706),s=Qn(14727535,{map:Ye("straw"),side:me}),r=Qn(12159562,{map:Ye("straw")}),o=Qn(2959918),a=new K(new pe(.5,14,10),e);a.scale.set(1.2,.42,.85),a.position.y=-.1,Ar.add(a),[-1,1].forEach(m=>{let _=new K(new pe(.17,8,6),e);_.position.set(m*.5,-.02,-.3),Ar.add(_)});let c=new K(new Le(.3,.4,.8,12),i);c.position.y=.42,Ai.add(c);let l=new K(new _s(.35,.03,6,14),t);l.rotation.x=Math.PI/2,l.position.y=.12,Ai.add(l);let h=new K(new pe(.44,12,8),i);h.scale.set(1,.45,.7),h.position.y=.78,Ai.add(h);let u=new K(new _s(.14,.045,6,10),t);u.rotation.x=Math.PI/2,u.position.y=.9,Ai.add(u);let f=new K(new Le(.09,.1,.16,6),n);f.position.y=.95,Ai.add(f);let p=new K(new pe(.21,14,10),o);p.position.y=.2,Oo.add(p);let g=new K(new Oe(.66,.36,24,1,!0),s);g.position.y=.1,Ks.add(g);let x=new K(new Oe(.1,.08,8),r);x.position.y=.22,Ks.add(x);let d=new K(new _s(.655,.018,6,28),r);d.rotation.x=Math.PI/2,d.position.y=-.075,Ks.add(d),[-1,1].forEach(m=>{let _=new K(new Le(.008,.008,.3,4),o);_.position.set(m*.18,-.12,.05),Ks.add(_)}),[-1,1].forEach(m=>{let _=new Qt;_.position.set(m*.42,.75,0),Ai.add(_);let b=new K(new Le(.095,.08,.6,8),i);b.position.y=-.3,_.add(b);let y=new K(new pe(.085,8,6),n);y.position.y=-.62,_.add(y);let S=new K(new _s(.085,.025,5,8),t);S.rotation.x=Math.PI/2,S.position.y=-.52,_.add(S),gg.push(_)})}var wr=new Qt;Ge.add(wr);{let i=Qn(12159574,{map:Ye("woodV")}),t=Qn(13602164,{map:Ye("plank")}),e=new K(new Le(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,wr.add(e);let n=new K(new In(.22,.04,.55),t);n.position.z=2,wr.add(n);let s=new K(new In(.2,.04,.05),i);s.position.z=-.03,wr.add(s)}var Tr=1,Kh=0,xg=new N;function _g(){let i=Math.sin(F.t*.9)*.03+Math.sin(F.t*1.7)*.012;return Ge.position.set(F.px,i*.6,F.pz),Ge.rotation.set(0,-F.psi,-F.steer*.025+Math.sin(F.t*.7)*.008),Ge.updateMatrixWorld(!0),i}function yg(){mg.forEach((i,t)=>{let e=t?1:-1,n=Fe(F.steer*e,0,1),s=new N().copy(hS[t]);s.lerp(new N(e*1.25,-.1,-.9+Math.sin(F.t*1.3+t)*.08),n);let r=xg.copy(s).sub(lS[t]).normalize();i.quaternion.setFromUnitVectors(new N(0,0,1),r),i.position.copy(s).addScaledVector(r,-1.55)})}function vg(i){{let t=ct.camK>.45||ct.cineW>.15;if(Ar.visible=t,fg.forEach(e=>e.visible=t),wr.visible=t,mg.forEach(e=>e.visible=!t),t){F.steer>.2?Tr=Math.min(1,Tr+i*3):F.steer<-.2&&(Tr=Math.max(-1,Tr-i*3)),Kh+=(F.steer-Kh)*Math.min(1,i*2.2);let e=Math.sin(F.t*1.4);Ai.rotation.z=-F.steer*.2+Math.sin(F.t*.6)*.02,Ai.rotation.y=-F.steer*.28,Ai.rotation.x=.05+e*.012+Math.abs(F.steer)*.06,Oo.rotation.y=-F.steer*.38+Math.sin(F.t*.35)*.08,Oo.rotation.x=.04+Math.sin(F.t*.5)*.03,Ks.rotation.z=(F.steer-Kh)*.45,Ks.rotation.x=-Math.abs(F.steer-Kh)*.12;let n=xg.set(Tr*.5,.8,.5),s=Math.abs(F.steer)>.2?1:0,o=new N(Tr*(.7+s*.55),-.2,1.35+Math.sin(F.t*1.2)*.12*(1-s)+s*.1).clone().sub(n).normalize();wr.quaternion.setFromUnitVectors(new N(0,0,1),o),wr.position.copy(n);let a=[n.clone().addScaledVector(o,.75),n.clone()];Tr<0&&a.reverse(),gg.forEach((c,l)=>{let h=c.getWorldPosition(new N),u=Ge.localToWorld(a[l].clone()),f=u.sub(h),p=f.length();c.parent.worldToLocal(u.copy(h).add(f));let g=u.sub(c.position);c.quaternion.setFromUnitVectors(new N(0,-1,0),g.clone().normalize()),c.scale.y=Fe(g.length()/.66,.7,1.5)})}}}var tu=[];for(let i=0;i<28;i++){let t=new K(new pr(.35,.42,28).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,At.add(t),tu.push(t)}var uS=0,ii=(i,t)=>{let e=tu[uS++%tu.length];e.position.set(i,.04,t),e.userData.age=0};function Mg(i){tu.forEach(t=>{if(t.userData.age<4){t.userData.age+=i;let e=t.userData.age/4;t.scale.setScalar(1+e*6),t.material.opacity=.35*(1-e)}else t.material.opacity=0})}var js={steer:0,pitch:0};vs.addEventListener("pointerdown",i=>{!ct.started||ct.X.photo||(L0(),vs.setPointerCapture(i.pointerId),F.hold=!0,Sg(i),ce.resume())});vs.addEventListener("pointermove",i=>{F.hold&&!ct.X.photo&&Sg(i)});var bg=()=>{F.hold=!1,js.steer=0,js.pitch=0};vs.addEventListener("pointerup",bg);vs.addEventListener("pointercancel",bg);function Sg(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;js.steer=Math.abs(t)<.1?0:Fe((t-Math.sign(t)*.1)*1.4,-1,1),js.pitch=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!1)});var zi=["Puente de madera","Torii sobre el agua","Aldea de farolillos","Jard\xEDn de sakura","Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos","Castillo de la Garza Blanca"],mi=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>mi.add(i))}catch{}function Eg(){try{localStorage.setItem("rio3d-found",JSON.stringify([...mi]))}catch{}}var Rr=[],si=new Map,Tg=new Set,os=[],Ff=new Set;function ri(i){let t=We("toast");t.textContent=i,t.style.opacity=1,clearTimeout(ri.h),ri.h=setTimeout(()=>t.style.opacity=0,4200)}var dS=zi.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,We("chips").appendChild(t),t});function eu(i){We("places").textContent=mi.size+"/"+zi.length,dS.forEach((e,n)=>e.classList.toggle("on",mi.has(n)));let t=Math.max(0,Math.floor((i-240)/Ei)-1);for(;rn(t)<i+1;)t++;We("next").textContent="Siguiente: "+zi[Ke(t)]+" en "+Math.max(0,Math.round((rn(t)-i)/10)*10)+" m"}We("snd").onclick=()=>{ce.on=!ce.on,ce.ctx&&ce.setOn(ce.on),We("snd").textContent="Sonido: "+(ce.on?"s\xED":"no")};try{ct.savedS=+localStorage.getItem("rio3d-pos")||0}catch{}function gc(){try{ct.started&&F.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(F.dist)))}catch{}}setInterval(gc,2500);addEventListener("pagehide",gc);document.addEventListener("visibilitychange",gc);ct.savedS>150&&(We("go").textContent="Continuar ("+ct.savedS+" m)",We("go2").hidden=!1,We("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}ct.savedS=0,We("go").onclick()});We("go").onclick=()=>{ct.savedS>150&&Vh(ct.savedS);try{ce.init(),ce.resume()}catch{}We("start").hidden=!0,We("hud").hidden=!1,We("places-row").hidden=!1,eu(0),We("hint").hidden=!1,ct.started=!0,setTimeout(()=>{try{localStorage.getItem("rio3d-ob")==="1"&&(We("hint").style.opacity=0)}catch{We("hint").style.opacity=0}},9e3)};var Bf=0;function wg(i,t){if(Bf-=i,Bf<=0){Bf=.4,eu(F.dist||t);{let e=F.dist||t,n=Math.round((e-240)/Ei),s=-1;for(let r of[n-1,n,n+1])r>=0&&Math.abs(rn(r)-e)<280&&(s=Ke(r));ce.setMood(Math.sin(Math.PI*2*(ct.tod-.12)),s,Js())}We("m").textContent=Math.round(F.dist/1),We("tod").textContent=Xh(ct.tod)}}var Hf=46,Cr=new Map,Of=[],nu=new Set;try{JSON.parse(localStorage.getItem("rio3d-coll")||"[]").forEach(i=>nu.add(i))}catch{}try{ct.count=+localStorage.getItem("rio3d-lant")||0}catch{}var iu=i=>{let t=70+i*Hf+tt(i,1)*20,e=(tt(i,2)*2-1)*.6*be(t);return[ie(t)+e,-t]};function zf(){let i=new Qt,t=new K(new Le(.3,.3,.55,10),new Pe({color:16767392}));t.position.y=.38;let e=new K(new Le(.34,.34,.06,10),new Pe({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=ni(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new K(new an(1,1).rotateX(-Math.PI/2),new Pe({map:jn,color:16762746,transparent:!0,opacity:.4,blending:kn,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function Ag(i,t){let e=Math.max(0,Math.floor((t-120)/Hf)),n=Math.floor((t+320)/Hf);for(let[s,r]of Cr)(s<e||s>n)&&(At.remove(r),Of.push(r),Cr.delete(s));for(let s=e;s<=n;s++){if(nu.has(s)||Cr.has(s))continue;let r=Of.pop()||zf();r.userData.fade=1,r.scale.setScalar(1),At.add(r),Cr.set(s,r)}for(let[s,r]of Cr){let[o,a]=iu(s);r.position.set(o,Math.sin(i*1.1+s)*.04,a),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*ct.glowK)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*ct.glowK)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(At.remove(r),Cr.delete(s),Of.push(r),r.userData.collecting=!1))}}function Rg(){for(let[i,t]of Cr){if(t.userData.collecting)continue;let[e,n]=iu(i),s=e-F.px,r=n-F.pz;if(s*s+r*r<17){nu.add(i),ct.count++;try{localStorage.setItem("rio3d-lant",String(ct.count)),localStorage.setItem("rio3d-coll",JSON.stringify([...nu]))}catch{}t.userData.collecting=!0;let o=Math.atan2(s,-r)-F.psi;ce.lantern(Math.sin(o)),ii(e,n),We("n").textContent=ct.count,ct.count===1&&ri("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}}var xc=16,Cg=[];for(let i=0;i<xc;i++){let t=new xs(new Qi({map:jn,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,At.add(t),Cg.push(t)}var kf=800,Gf=new ue,Pg=new Float32Array(kf*6),Ig=[];for(let i=0;i<kf;i++)Ig.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);Gf.setAttribute("position",new Kt(Pg,3));var Lg=new _o({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),_c=new Ea(Gf,Lg);_c.frustumCulled=!1;_c.visible=!1;At.add(_c);var ln={rain:0,target:0,t:50,on:!1},fS=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),o=[];for(let l=0;l<=220;l++){let h=l/220*Math.PI*2,u=Math.cos(h),f=Math.sin(h),p=sn(u*2.2+n,f*2.2+n),g=sn(u*8+n*2,f*8+n),x=Math.pow(Math.max(0,g-.5)/.5,1.4),d=t*(.3+.55*Math.pow(p,1.5)+.9*x);if(r.set([u*i,-40,f*i,u*i,d,f*i],l*6),l<220){let m=l*2;o.push(m,m+1,m+2,m+1,m+3,m+2)}}let a=new ue;a.setAttribute("position",new Kt(r,3)),a.setIndex(o);let c=new K(a,new nn({side:me,fog:!1,depthWrite:!1,uniforms:{col:{value:new pt},hor:{value:new pt},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));return c.renderOrder=-8,c.frustumCulled=!1,c.userData.t=e,At.add(c),c}),Ho=new pt,su=new pt;function Dg(i,t){ct.started&&(ln.t-=i,ln.t<=0&&(ln.target=ln.target?0:1,ln.t=ln.target?60+Math.random()*40:100+Math.random()*70,ln.target&&ri("Empieza una llovizna suave"))),ln.rain+=(ln.target-ln.rain)*Math.min(1,i*.25);let e=ln.rain>.15;e!==ln.on&&(ln.on=e,ce.rain(e));let n=1-Be(.08,.3,ct.tod),s=Fe(Math.max(Gh(t)*.95,ln.rain*.4,n*.4,.2));ln.fog=s,At.fog.near=yr(22,5,s),At.fog.far=yr(250,85,s),Ho.set(15131886).multiplyScalar(1-Se.night*.7),At.fog.color.copy(Se.fog).lerp(Ho,s*.55);let r=pi.material.uniforms;r.fogN.value=At.fog.near,r.fogF.value=At.fog.far,r.fog.value.copy(At.fog.color),Ti.material.uniforms.hor.value.lerp(At.fog.color,s*.8),Ti.material.uniforms.top.value.lerp(At.fog.color,s*.35),br.intensity*=1-.22*ln.rain,Ms.intensity*=1-.45*ln.rain,fS.forEach(a=>{a.position.set(F.px,0,F.pz);let c=a.userData.t;Ho.copy(Se.hor),su.copy(Se.top).multiplyScalar(.55).lerp(Ho.set(8095400).multiplyScalar(1-Se.night*.75),.45),a.material.uniforms.col.value.copy(Se.hor).lerp(su,1-c).lerp(At.fog.color,s*.75),a.material.uniforms.hor.value.copy(Ti.material.uniforms.hor.value)});let o=Math.floor(t/25)-2;for(let a=0;a<xc;a++){let c=o+a,l=Cg[(c%xc+xc)%xc],h=c*25,u=ie(h)+(tt(c,3)-.5)*be(h)*1.5;l.position.set(u+Math.sin(F.t*.05+c)*3,1.2+tt(c,4)*2.2,-h);let f=l.position.x-F.px,p=l.position.z-F.pz,g=Math.hypot(f,p);l.material.opacity=s*.5*Be(6,22,g)*(1-Be(300,380,g))*(.7+.3*tt(c,5)),l.material.color.copy(At.fog.color).multiplyScalar(1.05)}if(_c.visible=ln.rain>.03,Lg.opacity=.42*ln.rain,_c.visible){for(let a=0;a<kf;a++){let c=Ig[a];c[1]-=16*i,c[1]<0&&(c[1]=13+Math.random()*2,c[0]=Math.random()*40-20,c[2]=Math.random()*40-24);let l=F.px+c[0],h=F.pz+c[2];Pg.set([l,c[1],h,l-.05,c[1]+.65,h],a*6)}Gf.attributes.position.needsUpdate=!0,Math.random()<i*9*ln.rain&&ii(F.px+(Math.random()-.5)*28,F.pz-Math.random()*22+4)}}var Vf=0;function Ng(i,t){if(ct.started){let e=F.hold||F.key.up,n=Fe(js.steer+(F.key.r?1:0)-(F.key.l?1:0),-1,1),s=ct.X.photo?0:2.6*(1-.85*ct.cineW);F.v+=(s-F.v)*.5*i;let r=xn(t),o=n*(.55+Math.min(F.v,6)/6*.45);F.psi+=o*i,Math.abs(n)<.1&&(F.psi+=(r-F.psi)*.32*i),F.psi=Fe(F.psi,r-1.35,r+1.35),window.__lock!=null&&(F.psi=window.__lock),F.steer+=(n-F.steer)*3*i,F.px+=Math.sin(F.psi)*F.v*i+Math.sin(r)*1.1*i,F.pz+=-Math.cos(F.psi)*F.v*i-Math.cos(r)*1.1*i;let a=-F.pz,c=ie(a),l=be(a)-1.7,h=F.px-c;if(Math.abs(h)>l&&(F.px=c+Math.sign(h)*l,F.v>1.2&&F.t-F.bumpT>1.2&&(ce.bump(),F.bumpT=F.t),F.v*=.6,F.psi+=(xn(a)-F.psi)*.4),F.dist=Math.max(F.dist,a),Vf-=i,Math.abs(n)>.25&&Vf<=0){Vf=.7;let u=n>0?1:-1,f=new N(u*1.2,0,.3);Ge.localToWorld(f),ii(f.x,f.z)}}}var qt=(i,t,e,n,s,r,o,a,c)=>{let l=new K(new In(t,e,n),Xt(s,c));return l.position.set(r,o,a),i.add(l),l},Ve=(i,t,e,n,s,r,o,a,c=7,l)=>{let h=new K(new Le(t,e,n,c),Xt(s,l));return h.position.set(r,o,a),i.add(h),h},we=(i,t,e,n,s,r,o=.7)=>{let a=ni(t,e);return a.position.set(n,s,r),a.userData.base=o,i.add(a),Rr.push(a),a},Wf=new Map;function qf(i,t,e,n=64,s=256){let r=i+t+n;if(Wf.has(r))return Wf.get(r);let o=document.createElement("canvas");o.width=n,o.height=s;let a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.fillRect(0,0,n,5),a.fillRect(0,s-5,n,5);let c=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);a.font="bold "+c+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',a.textAlign="center",a.textBaseline="middle";let l=[...i].length;[...i].forEach((u,f)=>a.fillText(u,n/2,s/(l*2)+f*s/l));let h=new Ui(o);return h.colorSpace=Ln,Wf.set(r,h),h}function Ug(i,t,e,n,s,r){let o=t(e,n),a=new Qt;a.position.set(e,o,n),i.add(a),Ve(a,.07,.09,6.4,4864562,0,3.2,0,5),qt(a,1.3,.09,.09,4864562,.62,6,0);let c=new K(new an(1.15,4.4),new _e({gradientMap:Ie,map:qf(s,r,"#f6efe0"),side:me}));return c.userData.noMerge=!0,c.position.set(.62,3.75,0),a.add(c),a.userData.sw=1,os.push({b:c,ph:e}),a}function zo(i,t,e,n,s=1){let r=new Qt;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let o=11052706;Ve(r,.5,.62,.3,o,0,.15,0,8),Ve(r,.17,.2,1.3,o,0,.95,0,6),Ve(r,.45,.3,.2,o,0,1.7,0,8),qt(r,.62,.55,.62,o,0,2.05,0),qt(r,.34,.34,.66,16767392,0,2.05,0).material=new Pe({color:16767392}),qt(r,.66,.34,.34,16767392,0,2.05,0).material=new Pe({color:16767392});let a=new K(new Oe(.62,.5,4),Xt(o));a.rotation.y=Math.PI/4,a.position.y=2.6,r.add(a);let c=new K(new pe(.11,6,5),Xt(o));return c.position.y=2.92,r.add(c),we(r,16762746,2.6,0,2.05,0,.8),r}function pS(i,t,e,n){for(let o of[-1,1])Ve(i,.22,.3,10,6965818,o*(e+1.6),t(o*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=Ve(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let o=0;o<12;o++){let a=(o+.5)/12,c=-s/2+a*s,l=new K(new an(.42,1),new _e({gradientMap:Ie,color:16777215,side:me}));l.position.set(c,7.9,n),l.rotation.set(0,0,o%2?.18:-.18),i.add(l)}for(let o of[-1,1]){let a=new K(new Oe(.3,1,6),Xt(15128736));a.position.set(o*(e*.5),7.8,n),a.rotation.x=Math.PI,i.add(a)}}function Pr(i,t,e,n,s,r){for(let o of[-1,1])Ug(i,t,o*(e+1.6),54,n,r),Ug(i,t,o*(e+3.6),49,n,r),zo(i,t,o*(e+2.8),42);s&&pS(i,t,e,37)}function ou(i,t,e,n,s,r=1){let o=new K(new Oe(t,e,4),Xt(s));o.rotation.y=Math.PI/4,o.position.y=n,o.scale.z=r,i.add(o);let a=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([c,l])=>{let h=new K(new Oe(.32,1.3,5),Xt(s));h.position.set(c*a,n-e/2+.55,l*a*r),h.rotation.set(l*.7,0,-c*.7),i.add(h)})}function Fg(i,t,e,n){let s=new Qt;s.position.set(t,e,n),i.add(s),qt(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let o=0;o<4;o++){let a=4.3-o*.75;qt(s,a,2.3,a,o%2?15853267:15326664,0,r+1.15,0),qt(s,a+.12,.18,a+.12,11880250,0,r+.1,0);for(let[c,l]of[[1,1],[-1,1],[1,-1],[-1,-1]])Ve(s,.1,.1,2.3,11880250,c*a/2,r+1.15,l*a/2,6);ou(s,(a/2+.95)/.707,1.5,r+2.9,5591134),r+=3.1}Ve(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let o=0;o<6;o++)Ve(s,.55-o*.07,.55-o*.07,.12,14264410,0,r+.2+o*.62,0,8);return we(s,16762746,5,0,3,3.4,.7),s}function Bg(i,t,e,n,s,r){let o=new Qt;return o.position.set(t,e,n),o.scale.setScalar(s),i.add(o),[-2.2,2.2].forEach(a=>Ve(o,.3,.36,6,r,a,3,0,8)),qt(o,6.8,.4,.55,2894382,0,6.4,0),qt(o,5.6,.35,.4,r,0,5.4,0),qt(o,.5,.9,.4,r,0,5.85,0),o}function au(i,t){let e=new Qt,n=16184302,s=15328474,r=new K(new pe(.5,10,8),Xt(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let o=new K(new Oe(.2,.7,5),Xt(s));o.rotation.x=-Math.PI/2-.3,o.position.set(0,1.35,-.85),e.add(o),Ve(e,.045,.045,1.1,4012598,-.12,.55,.05,4),Ve(e,.045,.045,1.1,4012598,.12,.55,.05,4);let a=new Qt;a.userData.noMerge=!0,a.position.set(0,1.6,.55),e.add(a);let c=Ve(a,.07,.09,1,n,0,.45,.05,5);c.rotation.x=-.35;let l=Ve(a,.06,.07,.7,n,0,1.05,.3,5);l.rotation.x=.45;let h=new K(new pe(.14,8,6),Xt(n));h.position.set(0,1.4,.55),a.add(h);let u=new K(new Oe(.05,.5,4),Xt(14918218));return u.rotation.x=Math.PI/2,u.position.set(0,1.38,.9),a.add(u),e.scale.setScalar(i),os.push({nk:a,ph:t}),e}var Qs=new nn({transparent:!0,depthWrite:!1,side:me,uniforms:{t:{value:0},fogCol:{value:new pt(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`}),cu=new nn({transparent:!0,depthWrite:!1,blending:kn,uniforms:{map:{value:jn},k:{value:1}},vertexShader:"attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`}),Xf=new Me,ru=new N;function lu(i){i.updateMatrixWorld(!0),Xf.copy(i.matrixWorld).invert();let t=new Map,e=[],n=[];i.traverse(s=>{if(s.isSprite&&s.userData.base!=null){e.push(s);return}if(!s.isMesh||s.isInstancedMesh||s.material.isShaderMaterial||!s.material.isMaterial)return;for(let l=s;l&&l!==i;l=l.parent)if(l.userData.noMerge)return;let r=s.material,o=[r.type,r.color.getHex(),r.emissive?r.emissive.getHex():0,r.side,r.map?r.map.uuid:0,r.transparent,r.opacity,r.depthWrite].join("|"),a=s.geometry;a=a.index?a.toNonIndexed():a.clone();for(let l of Object.keys(a.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&a.deleteAttribute(l);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new Kt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(Xf.clone().multiply(s.matrixWorld));let c=t.get(o);c||(c={mat:r,geos:[]},t.set(o,c)),c.geos.push(a),n.push(s)});for(let s of n)s.parent&&s.parent.remove(s),s.geometry.dispose(),s.material.dispose&&![...t.values()].some(r=>r.mat===s.material)&&s.material.dispose();for(let s of t.values()){let r=bs(s.geos);if(s.geos.forEach(a=>a.dispose()),!r)continue;let o=new K(r,s.mat);i.add(o)}if(e.length){let s=e.length,r=new an(1,1),o=new Ga;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=new Float32Array(s*3),c=new Float32Array(s),l=new Float32Array(s*3),h=new Float32Array(s);e.forEach((f,p)=>{ru.setFromMatrixPosition(f.matrixWorld).applyMatrix4(Xf),a.set([ru.x,ru.y,ru.z],p*3),c[p]=f.scale.x,l.set([f.material.color.r,f.material.color.g,f.material.color.b],p*3),h[p]=f.userData.base,f.parent&&f.parent.remove(f),f.material.dispose()}),o.setAttribute("iC",new Ni(a,3)),o.setAttribute("iS",new Ni(c,1)),o.setAttribute("iCol",new Ni(l,3)),o.setAttribute("iB",new Ni(h,1)),o.instanceCount=s;let u=new K(o,cu);u.frustumCulled=!1,u.renderOrder=4,i.add(u)}return i}function Yf(i){let t=new Set([cu,Qs,Ss.material]);i.traverse(e=>{if(e.isInstancedMesh&&e.userData.keep){e.dispose();return}e.geometry&&e.geometry.dispose(),(e.material?Array.isArray(e.material)?e.material:[e.material]:[]).forEach(s=>{t.has(s)||s.dispose()})});for(let e=os.length-1;e>=0;e--){let n=os[e],r=n.b||n.nk;for(;r&&r!==i;)r=r.parent;r===i&&os.splice(e,1)}for(let e=Rr.length-1;e>=0;e--){let n=Rr[e];for(;n&&n!==i;)n=n.parent;n===i&&Rr.splice(e,1)}}var hu=new pt,Og=new Map,Hg=new Me,zg=new fn,kg=new Di,Gg=new N,Vg=new N(1,1,1),Ir=i=>{if(Array.isArray(i))return i;let t=Og.get(i);return t||(hu.set(i),t=[hu.r,hu.g,hu.b],Og.set(i,t)),t},Rn=(i,t)=>{let e=Ir(i);return[Math.min(1.4,e[0]*t),Math.min(1.4,e[1]*t),Math.min(1.4,e[2]*t)]},Wg=new Map;function mS(i){let t=Wg.get(i);return t||(t=new Mn(1,i),t=t.index?t.toNonIndexed():t,Wg.set(i,t)),t}var gi=class{constructor(){this.P=new Float32Array(1<<17),this.C=new Float32Array(1<<17),this.n=0,this.m=new Me,this.st=[],this.ref=null}_grow(){let t=new Float32Array(this.P.length*2),e=new Float32Array(this.C.length*2);t.set(this.P),e.set(this.C),this.P=t,this.C=e}save(){return this.st.push(this.m.clone()),this}restore(){return this.m=this.st.pop(),this}T(t=0,e=0,n=0,s=0,r=0,o=0,a=1,c=a,l=a){return kg.set(r,s,o,"YXZ"),zg.setFromEuler(kg),Gg.set(t,e,n),Vg.set(a,c,l),Hg.compose(Gg,zg,Vg),this.m.multiply(Hg),this}at(t,e,n,s,r,o,a,c){return this.save(),this.T(t,e,n,s||0,o||0,a||0,c||1),r(this),this.restore(),this}tri(t,e,n,s){s=Ir(s);let r=this.m.elements,o=r[0],a=r[1],c=r[2],l=r[4],h=r[5],u=r[6],f=r[8],p=r[9],g=r[10],x=r[12],d=r[13],m=r[14],_=t[0],b=t[1],y=t[2],S=e[0],M=e[1],w=e[2],v=n[0],T=n[1],R=n[2],P=o*_+l*b+f*y+x,I=a*_+h*b+p*y+d,D=c*_+u*b+g*y+m,C=o*S+l*M+f*w+x,U=a*S+h*M+p*w+d,G=c*S+u*M+g*w+m,O=o*v+l*T+f*R+x,$=a*v+h*T+p*R+d,H=c*v+u*T+g*R+m;if(this.ref){let Yt=this.ref,nt=o*Yt[0]+l*Yt[1]+f*Yt[2]+x,ot=a*Yt[0]+h*Yt[1]+p*Yt[2]+d,bt=c*Yt[0]+u*Yt[1]+g*Yt[2]+m,Ot=C-P,Rt=U-I,Jt=G-D,De=O-P,rt=$-I,ht=H-D,ft=Rt*ht-Jt*rt,dt=Jt*De-Ot*ht,xt=Ot*rt-Rt*De;if(ft*((P+C+O)/3-nt)+dt*((I+U+$)/3-ot)+xt*((D+G+H)/3-bt)<0){let Nt=C;C=O,O=Nt,Nt=U,U=$,$=Nt,Nt=G,G=H,H=Nt}}this.n+9>this.P.length&&this._grow();let X=this.P,J=this.C,mt=this.n,wt=s[0],ae=s[1],se=s[2];return X[mt]=P,X[mt+1]=I,X[mt+2]=D,X[mt+3]=C,X[mt+4]=U,X[mt+5]=G,X[mt+6]=O,X[mt+7]=$,X[mt+8]=H,J[mt]=wt,J[mt+1]=ae,J[mt+2]=se,J[mt+3]=wt,J[mt+4]=ae,J[mt+5]=se,J[mt+6]=wt,J[mt+7]=ae,J[mt+8]=se,this.n=mt+9,this}orient(t){return this.ref=t,this.rw=null,this}free(){return this.ref=null,this.rw=null,this}quad(t,e,n,s,r){return this.tri(t,e,n,r),this.tri(t,n,s,r),this}box(t,e,n,s,r=0,o=0,a=0,c=!0){s=Ir(s);let l=r-t/2,h=r+t/2,u=o-e/2,f=o+e/2,p=a-n/2,g=a+n/2,x=this.ref;return this.ref=null,this.quad([h,u,g],[h,u,p],[h,f,p],[h,f,g],s),this.quad([l,u,p],[l,u,g],[l,f,g],[l,f,p],s),this.quad([l,f,g],[h,f,g],[h,f,p],[l,f,p],s),c&&this.quad([l,u,p],[h,u,p],[h,u,g],[l,u,g],s),this.quad([l,u,g],[h,u,g],[h,f,g],[l,f,g],s),this.quad([h,u,p],[l,u,p],[l,f,p],[h,f,p],s),this.ref=x,this}boxB(t,e,n,s,r=0,o=0,a=0,c=!1){return this.box(t,e,n,s,r,o+e/2,a,c)}cyl(t,e,n,s,r,o=0,a=0,c=0,l=!1){r=Ir(r);let h=this.ref;this.ref=null;let u=(g,x)=>{let d=[];for(let m=0;m<s;m++){let _=m/s*6.2832;d.push([o+g*Math.cos(_),a+x,c+g*Math.sin(_)])}return d},f=u(t,0),p=u(e,n);for(let g=0;g<s;g++){let x=(g+1)%s;e<1e-4?this.tri(f[g],[o,a+n,c],f[x],r):this.quad(f[g],p[g],p[x],f[x],r)}if(e>=1e-4)for(let g=0;g<s;g++)this.tri([o,a+n,c],p[(g+1)%s],p[g],r);if(l)for(let g=0;g<s;g++)this.tri([o,a,c],f[g],f[(g+1)%s],r);return this.ref=h,this}ball(t,e,n=0,s=0,r=0,o=1,a=1,c=1,l=1){e=Ir(e);let h=mS(l),u=h.attributes.position,f=this.ref;this.ref=null;for(let p=0;p<u.count;p+=3){let g=[0,1,2].map(x=>[n+u.getX(p+x)*t*o,s+u.getY(p+x)*t*a,r+u.getZ(p+x)*t*c]);this.tri(g[0],g[1],g[2],e)}return this.ref=f,this}geo(t,e){e=Ir(e);let n=t.attributes.position,s=t.index,r=s?s.count:n.count,o=this.ref;this.ref=null;let a=c=>{let l=s?s.getX(c):c;return[n.getX(l),n.getY(l),n.getZ(l)]};for(let c=0;c<r;c+=3)this.tri(a(c),a(c+1),a(c+2),e);return this.ref=o,this}loft(t,e,n=!0){let s=t.length,r=t[0].length;for(let o=0;o<s-1;o++)for(let a=0;a<(n?r:r-1);a++){let c=(a+1)%r;this.quad(t[o][a],t[o+1][a],t[o+1][c],t[o][c],Ir(typeof e=="function"?e(a,o):e))}return this}count(){return this.n/9}mesh(t){let e=this.n,n=this.P.subarray(0,e),s=new ue;s.setAttribute("position",new Kt(n,3));let r=new Float32Array(e);for(let a=0;a<e;a+=9){let c=n[a+3]-n[a],l=n[a+4]-n[a+1],h=n[a+5]-n[a+2],u=n[a+6]-n[a],f=n[a+7]-n[a+1],p=n[a+8]-n[a+2],g=l*p-h*f,x=h*u-c*p,d=c*f-l*u,m=Math.sqrt(g*g+x*x+d*d)||1;g/=m,x/=m,d/=m;for(let _=0;_<9;_+=3)r[a+_]=g,r[a+_+1]=x,r[a+_+2]=d}s.setAttribute("normal",new Kt(r,3)),s.setAttribute("color",new Kt(this.C.subarray(0,e),3)),s.setAttribute("uv",new Kt(new Float32Array(e/3*2),2)),s.computeBoundingSphere();let o=new K(s,t);return o.userData.noMerge=!0,o}};var Xg=[12731706,4022170,15253850,5214058,14256806,8014490,15790310,3095130,15043130],gS=[15781806,15253658,15980219],uu=[];function Jg(i,t,e,n,s,r,o,a){let{S:c,E:l,rnd:h}=i;c.at(t,e,n,s,u=>{u.cyl(.37,.2,1.28,7,r,0,0,0).cyl(.28,.27,.16,7,r===15790310?V.red:Rn(V.woodD,1.2),0,.62,0).ball(.17,gS[h()*3|0],0,1.42,0,1,1.1,1,0).ball(.185,V.black,0,1.48,-.03,1,.8,1,0),o&&u.cyl(.04,.04,.7,4,V.woodD,.38,.7,.28),a&&(u.box(.1,.1,.55,r,.3,1.1,.1),u.box(.1,.1,.55,r,-.3,1.1,.1))}),o&&(l.at(t,e,n,s,u=>u.cyl(.13,.13,.34,6,16767392,.38,.38,.28)),h()<.45&&we(i.h,16762746,2.6,t+Math.sin(s)*.28+Math.cos(s)*.38,e+.55,n+Math.cos(s)*.28-Math.sin(s)*.38,.85))}function yc(i,t,e,n,s,r){let{fr:o,rnd:a}=i;for(let c=0;c<n;c++){let l=t+(a()-.5)*s*2,h=e+(a()-.5)*s*.9,u=o.ground(l,h);u<.35||Jg(i,l,u,h,r+(a()-.5)*1.2,Xg[a()*Xg.length|0],a()<.5,!1)}}function qg(i,t,e,n){let{S:s,E:r,CL:o,fr:a,rnd:c}=i,l=Math.max(a.ground(t,e),.4),h=[[V.red,V.cream],[V.blue,V.cream],[V.orange,V.cream],[V.green,V.cream]][c()*4|0];s.at(t,l,e,n,p=>{for(let g of[-1,1])for(let x of[-1,1])p.cyl(.08,.1,2.7,5,V.woodD,g*1.65,0,x*.9);p.box(3.5,.95,1.3,V.woodM,0,.48,.5,!1).box(3.7,.12,1.5,Rn(V.woodM,1.25),0,.98,.5);for(let g=0;g<3;g++)p.ball(.17,[V.red,V.cream,15292282,V.orange][c()*4|0],-1.1+g*1.1,1.28,.45,1,1,1,0).cyl(.02,.02,.5,3,V.woodD,-1.1+g*1.1,1,.45);p.box(.7,.5,.5,9071178,1.2,1.3,.6).box(.6,.3,.5,13199183,-.2,1.2,.62)}),o.at(t,l,e,n,p=>{for(let x=0;x<7;x++){let d=-1.9+3.8*x/7,m=-1.9+3.8*(x+1)/7,_=x%2?h[1]:h[0];p.quad([d,3,-1.1],[m,3,-1.1],[m,2.55,1.35],[d,2.55,1.35],_),p.tri([d,2.55,1.35],[m,2.55,1.35],[(d+m)/2,2.15,1.4],_)}p.quad([-1.9,2.55,-1.1],[1.9,2.55,-1.1],[1.9,3,-1.1],[-1.9,3,-1.1],h[0])});let u=Math.cos(n),f=Math.sin(n);for(let p of[-1,1])r.at(t,l,e,n,g=>g.cyl(.28,.28,.55,6,V.red,p*1.7,1.85,1.2)),we(i.h,16757610,3.3,t+p*1.7*u+1.2*f,l+2.1,e-p*1.7*f+1.2*u,.85)}function Yg(i,t,e){let{S:n,fr:s}=i,r=Math.max(s.ground(t,e),.4),o=r+1.55;n.at(t,o,e,0,c=>{c.at(0,0,0,0,l=>l.cyl(1,1,1.5,14,8014382,0,-.75,0),0,0,Math.PI/2);for(let l of[-1,1])c.at(l*.6,0,0,0,h=>h.cyl(1.05,1.05,.16,14,V.red,0,-.08,0),0,0,Math.PI/2);for(let l of[-1,1])for(let h=0;h<14;h++){let u=h/14*6.283;c.ball(.06,V.gold,l*.78,Math.cos(u)*1,Math.sin(u)*1,1,1,1,0)}for(let l of[-1,1])c.box(.3,1.4,.3,V.woodD,l*.6,-1,.95),c.box(.3,1.4,.3,V.woodD,l*.6,-1,-.95);c.box(1.8,.25,2.4,V.woodD,0,-1.4,0)});let a=new _e({gradientMap:Ie,color:15324844,side:me,fog:!0});for(let c of[-1,1]){let l=new K(new hi(.97,20),a);l.userData.noMerge=!0,l.position.set(t+c*.7,o,e),l.rotation.y=Math.PI/2,i.h.add(l),i.drums.push(l)}for(let c of[-1,1]){let l=t+c*1.95;Jg(i,l,Math.max(s.ground(l,e),.4),e,Math.atan2(-c,0),c>0?15790310:V.red,!1,!0)}}function Zg(i,t,e){let{S:n,CL:s,fr:r}=i,o=Math.max(r.ground(t,e),.4),a=12;n.cyl(.1,.14,a,5,V.woodD,t,o,e),n.ball(.28,V.gold,t,o+a+.2,e,1,1,1,1),n.cyl(.12,0,1.3,4,V.gold,t,o+a+.4,e);let c=[V.black,V.red,V.blue,15292282,V.green];s.at(t,o,e,0,l=>{c.forEach((h,u)=>{let f=a-.8-u*1.7,p=3.6-u*.25;l.at(.1,f,0,.2*u,g=>{g.cyl(.62-u*.04,.14,p,8,h,0,0,0)},0,-Math.PI/2+.08*u),l.ball(.12,16777215,.5,f+.25,.45,1,1,1,0),l.ball(.12,16777215,.5,f+.25,-.45,1,1,1,0)}),[16234441,16773792,10146047,10937249,16756838].forEach((h,u)=>l.quad([0,a-.4,.25*u-.5],[0,a-.7,.25*u-.5],[2.8,a-2-u*.12,.25*u-.5],[2.8,a-1.7-u*.12,.25*u-.5],h))})}function xS(i,t){let{S:e,E:n,CL:s,fr:r}=i,o=r.river(t),a=o.zc-o.hw-1.8,c=o.zc+o.hw+1.8,l=12.8,h=3.9;for(let p of[a,c]){let g=Math.max(r.ground(t,p),.2);e.cyl(.14,.2,l-g+.8,6,V.woodM,t,g-.3,p),e.ball(.3,V.gold,t,l+.8,p,1,1,1,0)}let u=p=>[t,l-h*Math.sin(Math.PI*p),a+(c-a)*p],f=Math.max(12,Math.round((c-a)/1.8));for(let p=0;p<f;p++)ws(e,u(p/f),u((p+1)/f),.09,V.woodD);for(let p=1;p<f;p++){let g=u(p/f),x=uu[(p+Math.abs(t|0))%4];e.box(.04,.35,.04,V.woodD,g[0],g[1]-.17,g[2],!1),n.cyl(.42,.34,.95,6,x,g[0],g[1]-1.3,g[2]),e.cyl(.44,0,.22,6,V.black,g[0],g[1]-.34,g[2]),p%3===0&&we(i.h,16757610,3.6,g[0],g[1]-.85,g[2],.8)}for(let p=0;p<f;p++){let g=u((p+.1)/f),x=u((p+.9)/f);s.tri([g[0],g[1]-.05,g[2]],[x[0],x[1]-.05,x[2]],[(g[0]+x[0])/2,Math.min(g[1],x[1])-.7,(g[2]+x[2])/2],[V.red,V.cream,V.purple,V.orange][p%4])}}function*$g(i){uu.length=0,uu.push(V.red,V.cream,V.orange,15292282);let{S:t,E:e,CL:n,fr:s,rnd:r}=i;for(let c of[-86,-62,-38,38,62,86])xS(i,c),yield;for(let c=0;c<40;c++){let l=-62+c*3.15;Math.abs(l+10)<9||(e.cyl(.36,.3,.8,6,uu[c%4],l,oe.PH+1.6,oe.ZF+.5),t.box(.04,.5,.04,V.woodD,l,oe.PH+2.5,oe.ZF+.5,!1),c%3===0&&we(i.h,16757610,3.2,l,oe.PH+2,oe.ZF+.7,.8))}for(let c=0;c<14;c++){let l=-80+c*12+r()*3;if(Math.abs(l+10)<10)continue;let h=oe.PO-.8,u=Math.max(s.ground(l,h),.3);Zf(i,l,u,h,[V.red,V.purple,V.blue,V.orange,V.green][c%5])}let o=[-76,-60,-36,16,28,40,52,64,76],a=[-52,-30,-12,6,24,44,62];for(let c of o)qg(i,c,oe.PO-2.8,0),yield;for(let c of a){let l=s.river(c);qg(i,c,l.zc+l.hw+3.2,Math.PI),yield}for(let c of o)yc(i,c,oe.PO-.4,2,3,0),yield;for(let c of a){let l=s.river(c);yc(i,c,l.zc+l.hw+1.2,2,3,Math.PI),yield}yc(i,-10,oe.PO+1,2,1.2,0),yc(i,-16,oe.PO-6,4,3,0),yc(i,-4,oe.PO-6,4,3,0),Yg(i,-24,oe.PO-4.5),Yg(i,4,oe.PO-4.5),Zg(i,-17,oe.PO-1.6),Zg(i,-3,oe.PO-1.6)}var V={plaster:16184300,plasterS:15131093,tile:5726575,tile2:6713727,ridge:15658214,black:2763827,woodD:3811876,woodM:7162426,red:11876396,redD:9251363,gold:14989394,stone:10395033,stoneD:6118490,gravel:14341056,win:16767120,pink:Hi.c,pink2:Hi.c2,pink3:16304598,trunk:7294787,purple:5913996,cream:16773590,orange:15766330,blue:3104666,green:5214047},{PH:dn}=oe,_S=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function gu(i,t,e,n,s,r,o,a,c,l={}){var y;let h=l.n||5,u=(y=l.flare)!=null?y:.7,f=Math.max(4,Math.ceil(2*s/1.5)),p=Math.max(4,Math.ceil(2*r/1.5)),g=[],x=l.tile||V.tile,d=l.tile2||V.tile2,m=new Set([0,f,f+p,2*f+p]),_=2*f+2*p;for(let S=0;S<=h;S++){let M=S/h,w=s+(o-s)*M,v=r+(a-r)*M,T=e+c*Math.pow(M,1.55),R=[],P=(I,D)=>{let C=Math.pow(Math.abs(I)/Math.max(w,.01),6)*Math.pow(Math.abs(D)/Math.max(v,.01),6);R.push([t+I,T+u*Math.pow(1-M,2.2)*Math.min(1,C*1.1),n+D])};for(let I=0;I<f;I++)P(-w+2*w*I/f,-v);for(let I=0;I<p;I++)P(w,-v+2*v*I/p);for(let I=0;I<f;I++)P(w-2*w*I/f,v);for(let I=0;I<p;I++)P(-w,v-2*v*I/p);g.push(R)}i.orient([t,e-40,n]).loft(g,(S,M)=>m.has(S)||m.has((S+1)%_)?V.ridge:S%2?x:d);let b=g[0].map(S=>[S[0],S[1]-.55,S[2]]);return i.loft([g[0],b],V.plaster),i.free(),g}function Kf(i,t,e,n,s,r,o,a,c,l,h={}){var b;gu(i,t,e,n,s,r,o,a,c,h);let u=e+c,f=(b=h.ov)!=null?b:.9,p=o+f,g=Math.max(4,Math.ceil(2*p/1.5)),x=5,d=h.tile||V.tile,m=h.tile2||V.tile2,_=[];for(let y=0;y<=x;y++){let S=-a+2*a*y/x,M=1-Math.abs(S)/a;_.push([S,l*Math.pow(M,1.35)])}i.orient([t,u-40,n]);for(let y=0;y<x;y++)for(let S=0;S<g;S++){let M=t-p+2*p*S/g,w=t-p+2*p*(S+1)/g,v=_[y],T=_[y+1];i.quad([M,u+v[1]+.15,n+v[0]],[w,u+v[1]+.15,n+v[0]],[w,u+T[1]+.15,n+T[0]],[M,u+T[1]+.15,n+T[0]],S%2?d:m)}for(let y of[-1,1]){let S=t+y*o;i.orient([t,u,n]);for(let w=0;w<x;w++){let v=_[w],T=_[w+1];i.quad([S,u,n+v[0]],[S,u,n+T[0]],[S,u+T[1],n+T[0]],[S,u+v[1],n+v[0]],V.plaster)}let M=t+y*(o+f);i.orient([t,u,n]);for(let w=0;w<x;w++){let v=_[w],T=_[w+1];i.quad([M,u+v[1]-.1,n+v[0]],[M,u+T[1]-.1,n+T[0]],[M,u+T[1]+.3,n+T[0]],[M,u+v[1]+.3,n+v[0]],V.woodD)}i.free(),i.box(.3,.9,.9,V.gold,S+y*.1,u+l*.38,n)}i.free(),i.box(2*p,.5,.7,V.ridge,t,u+l+.35,n);for(let y of[-1,1])i.box(1.1,1.2,1.2,V.black,t+y*p,u+l+.55,n);return u+l+.55}function jf(i,t,e,n,s,r,o,a={}){let c=Math.max(2,Math.ceil(s/1.7)),l=4,h=a.tile||V.tile,u=a.tile2||V.tile2,f=[];for(let g=0;g<=l;g++){let x=-r/2+r*g/l,d=1-Math.abs(x)/(r/2);f.push([x,o*Math.pow(d,1.3)+(g===0||g===l?.18:0)])}i.orient([t,e-30,n]);for(let g=0;g<l;g++)for(let x=0;x<c;x++){let d=t-s/2+s*x/c,m=t-s/2+s*(x+1)/c,_=f[g],b=f[g+1];i.quad([d,e+_[1],n+_[0]],[m,e+_[1],n+_[0]],[m,e+b[1],n+b[0]],[d,e+b[1],n+b[0]],(g===l/2-.5||l/2+.5,x%2?h:u))}if(!a.noCap)for(let g of[-1,1]){let x=t+g*s/2;for(let d=0;d<l;d++){let m=f[d],_=f[d+1];i.quad([x,e,n+m[0]],[x,e,n+_[0]],[x,e+_[1],n+_[0]],[x,e+m[1],n+m[0]],V.plaster)}}i.free(),i.box(s,.38,.7,V.ridge,t,e+o+.2,n);let p=[[t-s/2,e-.5,n-r/2],[t+s/2,e-.5,n-r/2]];i.quad([t-s/2,e,n-r/2],[t+s/2,e,n-r/2],p[1],p[0],V.plaster),i.quad([t+s/2,e,n+r/2],[t-s/2,e,n+r/2],[t-s/2,e-.5,n+r/2],[t+s/2,e-.5,n+r/2],V.plaster)}function tx(i,t,e,n,s){let o=[];for(let a=0;a<=16;a++){let c=-t/2+t*a/16,l=1-Math.abs(c)/(t/2);o.push([c,e*(.5-.5*Math.cos(Math.PI*Math.pow(l,.9)))])}i.save().T(0,0,0,0,s),i.orient([0,-3,-n/2]);for(let a=0;a<16;a++){let c=o[a],l=o[a+1],h=a%2?V.tile:V.tile2;i.quad([c[0],c[1]+.2,.95],[l[0],l[1]+.2,.95],[l[0],l[1]+.2,-n],[c[0],c[1]+.2,-n],h),i.quad([c[0],c[1]-.1,.75],[l[0],l[1]-.1,.75],[l[0],l[1]+.2,.95],[c[0],c[1]+.2,.95],V.plaster),i.quad([c[0],-.7,.5],[l[0],-.7,.5],[l[0],l[1]-.1,.5],[c[0],c[1]-.1,.5],V.plaster),i.quad([c[0],c[1]-.55,.62],[l[0],l[1]-.55,.62],[l[0],l[1]+0,.62],[c[0],c[1]+0,.62],V.woodD),i.quad([c[0],-.7,-n],[l[0],-.7,-n],[l[0],l[1]+.2,-n],[c[0],c[1]+.2,-n],V.plaster)}i.box(.26,e*.5,n,V.ridge,0,e*.5+.3,-n/2+.45,!1),i.free(),i.ball(.5,V.gold,0,e*.55,.75,1,1,.8,1),i.restore()}function yS(i,t,e,n,s){i.save().T(0,0,0,0,s),i.orient([0,-2,-n/2]);for(let r of[-1,1])i.quad([0,e+.2,.5],[0,e+.2,-n],[r*(t/2+.45),-.1,-n],[r*(t/2+.45),-.1,.8],r>0?V.tile:V.tile2);i.tri([-t/2-.2,-.4,.5],[t/2+.2,-.4,.5],[0,e+.1,.5],V.plaster).tri([-t/2-.35,-.4,.58],[t/2+.35,-.4,.58],[0,e+.35,.58],V.woodD).tri([-t/2,-.4,.62],[t/2,-.4,.62],[0,e,.62],V.plaster),i.free().ball(.3,V.gold,0,e*.4,.7,1,1,.7,0),i.restore()}function ex(i,t=1){i.save().T(0,0,0,0,0,0,t);let e=[];for(let s=0;s<=9;s++){let r=s/9;e.push([-.4*Math.sin(r*2.4)*0+(-.1+r*.5-r*r*1.5)*1,.3+r*2.4-r*r*.2,0])}for(let s=0;s<=9;s++){let r=s/9,o=e[s],a=.52*(1-r*.8)+.08;i.ball(a,Rn(V.gold,.88+.2*(s%2)),o[0],o[1],o[2],1,1.05,.9,1),s>1&&s<9&&i.cyl(.13,0,.55,4,V.gold,o[0]-.05,o[1]+a*.85,0)}let n=e[9];i.ball(.3,V.gold,n[0]-.35,n[1]+.2,0,1.6,.5,.9,1).ball(.26,Rn(V.gold,1.1),n[0]-.7,n[1]+.55,0,1.3,.4,1.1,1),i.ball(.62,V.gold,.55,.35,0,1.35,.9,1,1).box(.9,.14,.6,V.gold,.95,.04,0).box(.9,.1,.55,V.gold,.95,.78,0).cyl(.07,0,.5,4,16777215,1.25,.15,.16).cyl(.07,0,.5,4,16777215,1.25,.15,-.16),i.ball(.1,V.black,.78,.62,.3,1,1,1,0).ball(.1,V.black,.78,.62,-.3,1,1,1,0);for(let s of[-1,1])i.cyl(.1,0,.9,4,V.red,.45,.95,s*.28);i.restore()}function Kg(i,t,e,n,s,r,o,a,c){let l=[o];for(;l[l.length-1]>r+.05;){let p=l[l.length-1],g=(p-r)/(o-r);l.push(Math.max(r,p-(.85+.5*(1-g)+c()*.35)))}let h=p=>a*Math.pow((o-p)/(o-r),1.6),u=p=>{let g=h(p),x=n+g,d=s+g;return[[t-x,p,e-d],[t+x,p,e-d],[t+x,p,e+d],[t-x,p,e+d]]},f=[[0,0,-1],[1,0,0],[0,0,1],[-1,0,0]];i.orient([t,(r+o)/2,e]);for(let p=0;p<l.length-1;p++){let g=u(l[p]),x=u(l[p+1]),d=.78+.22*((l[p]-r)/(o-r));for(let m=0;m<4;m++){let _=g[m],b=g[(m+1)%4],y=x[m],S=x[(m+1)%4],M=Math.hypot(b[0]-_[0],b[2]-_[2]),w=(T,R)=>{let P=[_[0]+(b[0]-_[0])*T,_[1],_[2]+(b[2]-_[2])*T],I=[y[0]+(S[0]-y[0])*T,y[1],y[2]+(S[2]-y[2])*T];return[P[0]+(I[0]-P[0])*R,P[1]+(I[1]-P[1])*R,P[2]+(I[2]-P[2])*R]};i.quad(w(0,0),w(1,0),w(1,1),w(0,1),V.stoneD);let v=-c()*.5/M*3;for(;v<1;){let T=(1.5+c()*1.5)/M,R=v+T,P=Math.max(0,v)+.05/M*1.3,I=Math.min(1,R)-.05/M*1.3;if(I>P){let D=f[m],C=$=>$,U=.1,G=($,H)=>{let X=w($,H);return[X[0]+D[0]*U,X[1],X[2]+D[2]*U]},O=Rn(V.stone,d*(.8+c()*.34));i.quad(G(P,.06),G(I,.06),G(I,.94),G(P,.94),O)}v=R}}}i.free()}function pu(i,t,e,n,s,r=1,o=1.4){i.S.at(t,e,n,s,a=>{a.box(r+.3,o+.3,.2,V.woodD,0,0,.1).box(r+.5,.14,.4,V.woodM,0,o/2+.28,.2);for(let c=-1;c<=1;c++)a.box(.07,o,.06,V.woodD,c*r*.3,0,.28);a.box(r,.06,.06,V.woodD,0,0,.28)}),i.E.at(t,e,n,s,a=>{a.box(r,o,.05,V.win,0,0,.2)})}function Qf(i,t,e,n,s,r,o,a,c,l={}){for(let h=0;h<a;h++){let u=(h+.5)/a-.5;for(let f of[1,-1])pu(i,t+u*(s-3),n,e+f*(r/2),f>0?0:Math.PI,l.w,l.h)}for(let h=0;h<c;h++){let u=(h+.5)/c-.5;for(let f of[1,-1])pu(i,t+f*(s/2),n,e+u*(r-3),f>0?Math.PI/2:-Math.PI/2,l.w,l.h)}}var vS=[0,Math.PI/2,Math.PI,-Math.PI/2];function jg(i,t,e,n,s,r,o,a,c,l){let h=n+(r-n)*l,u=s+(o-s)*l,f=e+a*Math.pow(l,1.55),p=a*1.55*Math.pow(l,.55),g=c%2?n-r:s-o,x=Math.atan2(p,Math.max(.3,g));return{px:i+(c===1?h:c===3?-h:0),py:f,pz:t+(c===0?u:c===2?-u:0),ry:vS[c],ang:x}}function du(i,t,e,n,s){let{P:r,S:o,G:a}=i,c=n,l=0;return s.forEach((h,u)=>{let{w:f,d:p,h:g}=h;r.box(f,g,p,V.plaster,t,c+g/2,e,!1),o.box(f+.26,.7,p+.26,V.woodD,t,c+.35,e,!1),o.box(f+.22,.34,p+.22,V.woodD,t,c+g-.4,e,!1),h.wood&&o.box(f+.2,g*.36,p+.2,V.woodM,t,c+g*.2+.3,e,!1);for(let _ of[-1,1])for(let b of[-1,1])o.box(.42,g,.42,V.woodD,t+_*f/2,c+g/2,e+b*p/2,!1);let x=h.nx||3,d=h.nz||2;for(let _=1;_<x;_++)for(let b of[1,-1])o.box(.2,g-1.1,.12,V.woodD,t-f/2+f*_/x,c+g/2,e+b*(p/2+.03),!1);Qf(i,t,e,c+g*.55,f,p,g,x,d,{});let m=s[u+1];if(h.ro){let _=h.ro,b=m?m.w/2:0,y=m?m.d/2:0,S=c+g-.25,M=f/2+_.o,w=p/2+_.o;if(_.irimoya){if(l=Kf(r,t,S,e,M,w,f/2-.4,p/2-.4,_.rise,_.gh,{}),_.shachi)for(let v of[-1,1])a.at(t+v*(f/2-.4+.9+.6),l-.3,e,v>0?0:Math.PI,T=>ex(T,_.shachi))}else gu(r,t,S,e,M,w,b,y,_.rise,_);if(!_.irimoya){for(let v of _.k||[]){let T=jg(t,e,S,M,w,b,y,_.rise,v,.36);r.at(T.px,T.py,T.pz,T.ry,R=>tx(R,_.kw||8,_.kh||3.4,_.kd||5,T.ang))}for(let v of _.c||[]){let T=jg(t,e,S,M,w,b,y,_.rise,v,.42);r.at(T.px,T.py,T.pz,T.ry,R=>yS(R,_.cw||3.6,_.ch||1.6,_.cd||3,T.ang))}}c=S+_.rise}else c+=g}),{top:c,ridge:l}}function vc(i,t,e,n,s,r,o={}){let a=o.h||5,c=o.wd||4.4;i.P.at(t,e,n,r,l=>{l.box(s,a,c,V.plaster,0,a/2,0,!1),jf(l,0,a-.3,0,s,c+2.2,o.rise||2.4,{})}),i.S.at(t,e,n,r,l=>{l.box(s+.1,.55,c+.22,V.woodD,0,.28,0,!1),l.box(s+.1,.3,c+.2,V.woodD,0,a-.2,0,!1);let h=Math.max(1,Math.floor(s/2.6));for(let u=0;u<h;u++){let f=-s/2+s*(u+.5)/h;for(let p of[1,-1])l.at(f,a*.5,p*(c/2+.13),p>0?0:Math.PI,g=>{u%2?g.quad([-.3,-.3,0],[.3,-.3,0],[.3,.3,0],[-.3,.3,0],V.black):g.tri([-.38,-.32,0],[.38,-.32,0],[0,.4,0],V.black)})}})}function Mc(i,t,e,n,s,r,o={}){let a=n-t,c=s-e,l=Math.hypot(a,c),h=Math.atan2(-c,a),u=(t+n)/2,f=(e+s)/2,p=o.h||3,g=o.th||1.3;i.P.at(u,r,f,h,x=>{x.box(l,p,g,V.plaster,0,p/2,0,!1),jf(x,0,p-.05,0,l,g+1.5,.95,{})}),i.S.at(u,r,f,h,x=>{x.box(l+.05,.3,g+.1,V.woodD,0,.15,0,!1);let d=Math.max(1,Math.floor(l/3));for(let m=0;m<d;m++){let _=-l/2+l*(m+.5)/d;x.at(_,p*.52,g/2+.13,0,b=>{if(m%3===0)b.tri([-.34,-.3,0],[.34,-.3,0],[0,.36,0],V.black);else if(m%3===1)b.quad([-.28,-.28,0],[.28,-.28,0],[.28,.28,0],[-.28,.28,0],V.black);else{let S=[];for(let M=0;M<8;M++)S.push([Math.cos(M/8*6.283)*.3,Math.sin(M/8*6.283)*.3,0]);for(let M=0;M<8;M++)b.tri([0,0,0],S[M],S[(M+1)%8],V.black)}})}})}function MS(i,t,e,n){let{P:s,S:r,G:o,E:a,CL:c}=i;s.box(13,4.8,7,V.plaster,t,n+2.4,e,!1),r.box(13.3,.8,7.3,V.woodD,t,n+.4,e,!1),r.box(13.2,.4,7.2,V.woodD,t,n+4.4,e,!1),r.box(4.2,3.7,.3,V.black,t,n+1.85,e+3.52,!1);for(let h of[-1,1])r.box(.55,4.2,.6,V.woodD,t+h*2.4,n+2.1,e+3.6,!1),r.box(.9,3.2,.15,V.red,t+h*3.2,n+1.7,e+3.75,!1);r.box(5.6,.55,.7,V.woodD,t,n+4.1,e+3.7,!1);for(let h of[-1,1])for(let u=0;u<2;u++)pu(i,t+h*(4.4+u*1.5),n+2.6,e+3.5,0,.9,1.2);s.box(10,3.4,5,V.plaster,t,n+4.6+1.7,e,!1),r.box(10.26,.5,5.26,V.woodD,t,n+4.6+.25,e,!1),r.box(10.2,.3,5.2,V.woodD,t,n+4.6+3.2,e,!1),Qf(i,t,e,n+6.6,10,5,3.4,3,1,{}),gu(s,t,n+4.55,e,6.5+1.1,3.5+1.1,5,2.5,2.2,{});let l=Kf(s,t,n+4.6+3.15,e,5+1.8,2.5+1.8,4.4,2.1,1.9,2.6,{});for(let h of[-1,1])o.at(t+h*(4.4+.9+.6),l-.3,e,h>0?0:Math.PI,u=>ex(u,.5));s.at(t,n+4.55+2.2*Math.pow(.45,1.55),e+3.5+1.1-(1.1+1.5)*.45,0,h=>tx(h,6,2.5,3,.5));for(let h=0;h<5;h++){let u=t-5+h*2.5,f=n+3.4;c.box(1.9,2,.05,V.purple,u,f,e+3.62,!1),c.at(u,f,e+3.66,0,p=>{let x=[];for(let d=0;d<10;d++)x.push([Math.cos(d/10*6.283)*.5,Math.sin(d/10*6.283)*.5,0]);for(let d=0;d<10;d++)p.tri([0,0,0],x[d],x[(d+1)%10],V.cream)})}for(let h of[-1,1,0])a.box(.9,1.3,.9,V.red,t+h*6.1,n+3.3,e+4.2),r.box(.12,.9,.12,V.woodD,t+h*6.1,n+4.4,e+4.2),we(i.h,16757610,5,t+h*6.1,n+3.3,e+4.4,.85)}function bS(i,t,e,n){let{P:s,S:r,G:o,E:a}=i;s.box(8,4.6,6.4,V.plaster,t,n+2.3,e,!1),r.box(8.26,.6,6.66,V.woodD,t,n+.3,e,!1),r.box(8.2,.3,6.6,V.woodD,t,n+4.3,e,!1),r.box(3.2,3.5,.3,V.black,t,n+1.75,e+3.25,!1);for(let l of[-1,1])r.box(.5,3.9,.5,V.woodD,t+l*1.9,n+1.95,e+3.3,!1);r.box(4.6,.5,.6,V.woodD,t,n+3.9,e+3.4,!1),s.box(5.6,3,4.4,V.plaster,t,n+4.45+1.5-.15,e,!1),r.box(5.86,.4,4.66,V.woodD,t,n+4.45+.05,e,!1),Qf(i,t,e,n+6,5.6,4.4,3,2,1,{}),gu(s,t,n+4.45,e,4+1.5,3.2+1.5,2.8,2.2,1.8,{});let c=Kf(s,t,n+4.45+3,e,2.8+1.6,2.2+1.6,2.4,1.9,1.5,2.2,{});for(let l of[-1,1])a.box(.7,1,.7,V.red,t+l*3,n+3.2,e+3.6)}function Qg(i,t,e,n,s,r){let o=i.S;o.cyl(.3*s,.46*s,3.5*s,6,V.trunk,t,e,n);let a=(r()-.5)*.8;o.cyl(.16*s,.24*s,2.2*s,5,V.trunk,t+a*.8,e+2.8*s,n+a*.4);let c=[V.pink,V.pink2,V.pink3,Rn(V.pink,1.06)];for(let[l,h,u,f]of[[0,4.7,0,2.9],[1.9,4.1,.7,2],[-1.7,4.3,-.9,2.2],[.4,5.9,-.4,1.8]])o.ball(f*s*(.9+r()*.25),c[r()*4|0],t+l*s,e+h*s,n+u*s,1,.78,1,1);o.cyl(2.5*s,2.5*s,.04,9,V.pink3,t+(r()-.5)*1.4,e+.06,n+(r()-.5)*1.4,!0)}function mu(i,t,e,n,s=1){let r=i.S,o=V.stone;r.cyl(.5*s,.62*s,.3*s,7,o,t,e,n),r.cyl(.17*s,.2*s,1.3*s,6,o,t,e+.3*s,n),r.cyl(.5*s,.32*s,.2*s,7,o,t,e+1.6*s,n),r.box(.7*s,.6*s,.7*s,o,t,e+2.1*s,n,!1),i.E.box(.46*s,.4*s,.74*s,V.win,t,e+2.1*s,n).box(.74*s,.4*s,.46*s,V.win,t,e+2.1*s,n),r.cyl(.7*s,0,.55*s,4,o,t,e+2.4*s,n),we(i.h,16762746,2.8*s+.4,t,e+2.1*s,n,.8)}function SS(i){let{side:t,s:e,a:n,hwv:s}=i,r=Math.cos(n),o=Math.sin(n),a=ie(e),c=oe.PO,l=(f,p)=>{let g=t*(s+c-p),x=t*f;return[a+g*r-x*o,e-(g*o+x*r)]};return{toW:l,ground:(f,p)=>{let[g,x]=l(f,p);return Zn(g,x)},river:f=>{let p=t*f,g=0;for(let d=0;d<4;d++){let m=e-(g*o+p*r);g=(ie(m)-a+p*o)/r}let x=e-(g*o+p*r);return{zc:s+c-t*g,hw:be(x)}},side:t,s0:e,a:n,hw0:s}}function ws(i,t,e,n,s,r){let o=e[0]-t[0],a=e[1]-t[1],c=e[2]-t[2],l=Math.hypot(o,a,c);l<1e-4||i.save().T((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,Math.atan2(o,c),-Math.atan2(a,Math.hypot(o,c)),0).box(n,r||n,l,s).restore()}function*nx(i,t,e){let n=performance.now(),{side:s,hwv:r}=e,o=_S(t*7919+11),a=new Qt;a.position.set(s*(r+oe.PO),0,0),a.rotation.y=-s*Math.PI/2,i.add(a);let c={P:new gi,S:new gi,G:new gi,E:new gi,CL:new gi,h:a,rnd:o,fr:SS(e),ctx:e,drums:[]},{P:l,S:h,G:u,E:f,CL:p}=c,g=dn+12,x=-10,d={},m=0,_=performance.now(),b=H=>{let X=l.count()+h.count()+u.count()+f.count()+p.count(),J=performance.now();d[H]=[X-m,Math.round(J-_)],m=X,_=J};h.box(2*oe.X-1,.3,oe.ZF-oe.ZB-1,V.gravel,0,dn-.08,(oe.ZF+oe.ZB)/2,!1),Kg(h,0,(oe.ZF+oe.ZB)/2,oe.X,(oe.ZF-oe.ZB)/2,-1.8,dn,4.8,o),h.box(2*oe.X+1.4,.5,1.2,V.stone,0,dn+0,oe.ZF+.3,!1),Kg(h,0,-12,30,22,dn-.4,g,6.4,o),h.box(61.6,.3,45.6,V.gravel,0,g-.1,-12,!1),b("piedra"),yield;let y=5.8,S=24;for(let H=0;H<S;H++){let X=g-.5*(H+1),J=10.5+H;h.box(y,X-dn,1,Rn(V.stone,.92+.1*(H*7%3)/2),x,(dn+X)/2,J+.5,!1);for(let mt of[-1,1])h.box(.6,X+.8-dn,1,V.stone,x+mt*(y/2+.3),(dn+X+.8)/2,J+.5,!1);if(H%4===1)for(let mt of[-1,1])mu(c,x+mt*(y/2+1.5),X,J+.5,.8)}b("escalera"),yield;let M=12,w=-17,v=du(c,M,w,g,[{w:26,d:22,h:5.4,nx:5,nz:4,wood:!0,ro:{o:2.6,rise:3.3,c:[0,2],cw:4.2,cd:3.2}},{w:23.4,d:19.4,h:4.8,nx:5,nz:4,ro:{o:2.4,rise:3,k:[0,2],kw:9,kh:3.6,kd:5.5}},{w:20.8,d:16.8,h:4.4,nx:4,nz:3,ro:{o:2.2,rise:2.8,c:[1,3],cw:4,cd:3.4}},{w:18.2,d:14.2,h:4,nx:4,nz:3,ro:{o:2,rise:2.6,k:[0,2],kw:7,kh:3,kd:4.5}},{w:15.6,d:11.8,h:3.8,nx:3,nz:2},{w:13.2,d:9.8,h:3.6,nx:3,nz:2,ro:{o:2.7,rise:3,gh:4.4,irimoya:!0,shachi:1}}]);b("keep"),yield;let T=du(c,-22,-27,g,[{w:12,d:10,h:4.6,nx:3,nz:2,ro:{o:1.9,rise:2.2,k:[0],kw:5,kh:2.4,kd:3.4}},{w:9.2,d:7.4,h:3.8,nx:2,nz:2,ro:{o:2,rise:2.2,gh:3,irimoya:!0,shachi:.6}}]),R=du(c,24,2,g,[{w:10.6,d:9,h:4.2,nx:3,nz:2,ro:{o:1.8,rise:2,k:[0],kw:5,kh:2.2,kd:3}},{w:8,d:6.6,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:2,gh:2.8,irimoya:!0,shachi:.55}}]),P=du(c,-24,3,g,[{w:10,d:10,h:4.4,nx:3,nz:3,ro:{o:1.8,rise:2,c:[0],cw:3.4,cd:2.8}},{w:7.4,d:7.4,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:3.6}}]);u.cyl(.14,0,2.2,5,V.gold,-24,P.top+.2,3).ball(.32,V.gold,-24,P.top+.2,3);for(let[H,X,J]of[[v,M,w],[T,-22,-27],[R,24,2]])h.cyl(.07,.09,4.4,4,V.woodD,X,H.ridge+.1,J),c.CL.quad([X,H.ridge+4.2,J],[X+3.4,H.ridge+3.8,J],[X+3.4,H.ridge+2.4,J],[X,H.ridge+2.7,J],V.purple);vc(c,-8.5,g,-22,15,0),vc(c,-22,g,-12,20,Math.PI/2),vc(c,-16.5,g,3,5,0),vc(c,8.5,g,3,25,0),vc(c,22,g,-4.1,3.6,Math.PI/2),bS(c,-10,3,g),b("torres"),yield;let I=oe.ZF-1,D=oe.X-1,C=oe.ZB+1;Mc(c,-D,I,-16.5,I,dn),Mc(c,-3.5,I,D,I,dn),Mc(c,-D,C,-D,I,dn),Mc(c,D,I,D,C,dn),Mc(c,D,C,-D,C,dn),MS(c,-10,I-3,dn),b("muros+puerta"),yield;for(let[H,X]of[[-44,-30],[44,-34],[-46,14]]){l.box(16,5.2,8,V.plaster,H,dn+2.6,X,!1),h.box(16.2,.7,8.2,V.woodD,H,dn+.5,X,!1),jf(l,H,dn+5.1,X,17.5,10.4,3.2);for(let J=0;J<3;J++)pu(c,H-4.5+J*4.5,dn+3.4,X+4.05,0,.9,1.1)}ES(c),b("kura+puente"),yield;let U=0,G=[];for(let H=0;H<7;H++){let X=15+H*3.6;G.push([x-8.2,X],[x+8.2,X])}for(let H=0;H<13;H++)G.push([-62+o()*50,-46+o()*84],[40+o()*22,-46+o()*84]);for(let H=0;H<6;H++)G.push([-40+o()*80,-49+o()*7]);for(let[H,X]of G)X>12&&X<38&&Math.abs(H-x)<7&&Math.abs(H-x)>1||Math.abs(H)<39&&X>-42&&X<19&&!(X>12&&Math.abs(H-x)>7)||X>37&&Math.abs(H-x)<10||(Qg(c,H,dn+.05,X,.8+o()*.5,o),++U%9===0&&(yield));for(let[H,X]of[[-15,-10],[-11,-16],[-16,-4],[-7,-8],[-3,-14]])Qg(c,H,g+.05,X,.75+o()*.3,o);for(let H=0;H<12;H++){let X=-61+H*10.4+o()*2;Math.abs(X-x)<10||mu(c,X,dn+.05,36,.9)}b("arboles"),yield,yield*$g(c),b("festival"),yield;let O=TS();a.add(l.mesh(O.plaster)),b("m-pl"),yield,a.add(h.mesh(O.solid)),b("m-s"),yield,a.add(u.mesh(O.gold),f.mesh(O.emis),p.mesh(O.cloth)),b("m-rest"),yield;for(let[H,X,J,mt]of[[M-13.5,g+4,w+11.5,26],[M+13.5,g+5,w+11.5,24],[M,g+13,w+11,26],[M,g+21,w+8,22],[M,g+28,w+6,18],[M,g+34,w+5,14],[-22,g+4,-21,14],[24,g+5,8,14],[-24,g+5,9,14],[-10,dn+5,oe.ZF+3,18]])we(a,16766354,mt,H,X,J,.2);b("focos"),i.updateMatrixWorld(!0);let $=new N(M,g+14,w);return a.localToWorld($),i.userData.cas={parts:d,ms:0,tris:l.count()+h.count()+u.count()+f.count()+p.count(),mats:O,keep:{x:M,z:w,top:v.top,ridge:v.ridge},drums:c.drums,h:a,fr:c.fr,cw:$},i.userData.cas.ms=performance.now()-n,i}function ES(i){let{S:t,E:e}=i,n=-10,s=61.5,r=44.4,o=1.2,a=dn+.2,c=16,l=5.4,h=x=>1.1*Math.sin(Math.PI*x)*(1-x),u=(x,d=0,m=0)=>{let _=x/c;return[n+d,o+(a-o)*_+h(_)+m,s+(r-s)*_]};for(let x=0;x<c;x++)ws(t,u(x),u(x+1),l,Rn(V.red,.9+.12*(x%2)),.3);for(let x of[-1,1]){let d=x*(l/2+.1);for(let m=0;m<=c;m++){let _=u(m,d);if(t.box(.22,1.5,.22,V.red,_[0],_[1]+.85,_[2],!1),m%5===0&&(t.ball(.2,V.gold,_[0],_[1]+1.75,_[2],1,1,1,0),e.box(.42,.6,.42,V.red,_[0],_[1]+2.2,_[2]),we(i.h,16757610,3.4,_[0],_[1]+2.2,_[2],.85)),m<c){let b=u(m+1,d);for(let y of[1.5,.8])ws(t,[_[0],_[1]+y,_[2]],[b[0],b[1]+y,b[2]],.12,V.red)}}}for(let x of[s-.4,(s+r)/2,r+.4])for(let d of[-1,1])t.cyl(.2,.26,o+2.6,6,V.woodD,n+d*(l/2-.2),-1.5,x);let f=oe.PO-3,p=oe.PO+5.2;for(let x=0;x<10;x++)t.box(3.6,.18,.62,Rn(V.woodM,.9+.2*(x%2)),n,.62,f+x*.9,!1);for(let x=0;x<6;x++)for(let d of[-1,1])t.cyl(.12,.15,2.4,5,V.woodD,n+d*1.7,-1.5,f+.6+x*1.6);for(let x of[-1,1])t.cyl(.14,.16,3.2,5,V.woodD,n+x*1.8,.6,p-.4),e.box(.4,.55,.4,V.red,n+x*1.8,3.95,p-.4),we(i.h,16757610,3.6,n+x*1.8,3.95,p-.4,.9);let g=i.fr;for(let x=0;x<6;x++){let d=f-.8-x*.9,m=g.ground(n,d);t.box(4.6,.22,.82,Rn(V.stone,.9+.1*(x%3)),n,Math.max(m,.5),d,!1)}for(let x of[-1,1])for(let d=0;d<3;d++){let m=58.5-d*1.4,_=n+x*(4.6+d*.9),b=g.ground(_,m);Zf(i,_,Math.max(b,.3),m,[V.red,V.purple,V.blue][d%3])}}function Zf(i,t,e,n,s,r=6.2){i.S.cyl(.07,.09,r,5,V.woodD,t,e,n),i.S.box(1.3,.09,.09,V.woodD,t+.6,e+r-.2,n,!1),i.CL.box(1.1,r*.66,.04,s,t+.62,e+r*.62,n,!1),i.CL.box(1.14,.26,.05,V.cream,t+.62,e+r-.5,n,!1)}function TS(){let i=t=>new _e(Object.assign({gradientMap:Ie,color:16777215,vertexColors:!0,fog:!1},t||{}));return{plaster:i(),solid:i(),gold:i({emissive:0}),cloth:i({side:me}),emis:new Pe({color:16777215,vertexColors:!0,fog:!0})}}var fu=(i,t,e)=>{i.r+=t.r*e,i.g+=t.g*e,i.b+=t.b*e},Jf=new pt,$f=new pt(1,.8,.5),wS=new pt(1,.72,.3);function ix(i,t,e){let n=i.userData.cas;if(!n||!n.cw)return;let s=n.mats,r=n.cw.x-F.px,o=n.cw.z-F.pz,a=Math.hypot(r,o),c=Be(70,640,a)*.8;Jf.copy(At.fog.color);let l=1-c;for(let p of[s.plaster,s.solid,s.cloth])p.color.setScalar(1-c),p.emissive.copy(Jf).multiplyScalar(c);fu(s.plaster.emissive,$f,t*.34*l),fu(s.solid.emissive,$f,t*.1*l),fu(s.cloth.emissive,$f,t*.22*l),s.gold.color.setScalar(1-c),s.gold.emissive.copy(Jf).multiplyScalar(c),fu(s.gold.emissive,wS,(.14+.35*t)*l);let h=.3+.7*t;s.emis.color.setRGB(h,h*.95,h*.9);let u=performance.now(),f=Math.exp(-Math.max(0,u-(ce.hitT||0))/160);for(let p of n.drums){let g=1+.05*f;p.scale.set(g,g,1)}}function sx(i){let t=AS(i);return t.userData.job?t:lu(t)}function AS(i){let t=rn(i),e=xn(t),n=Ke(i),s=new Qt,r=be(t),o=n===6||tt(i,9)>.5?1:-1;s.position.set(ie(t),0,-t),s.rotation.y=-e;let a=(p,g)=>{let x=-e;return Zn(ie(t)+p*Math.cos(x)+g*Math.sin(x),t-(-p*Math.sin(x)+g*Math.cos(x)))},c=13199183,l=11569004,h=8018508,u=Hi.c,f=8368266;if(n===0){let p=r*2+12,g=18,x=11880250,d=10329242,m=M=>3.4+1.7*(1-M*M);for(let M=0;M<g;M++){let w=(M+.5)/g*2-1,v=w*p/2,T=m(w),R=qt(s,p/g+.4,.34,4.2,l,v,T,0,{map:Ye("plank")});R.rotation.z=-w*.4,qt(s,.07,.34,4.3,h,v-p/g/2,T,0).rotation.z=-w*.4}for(let M of[-1.7,1.7])for(let w=0;w<g;w++){let v=(w+.5)/g*2-1,T=v*p/2,R=qt(s,p/g+.5,.4,.3,7293498,T,m(v)-.4,M);R.rotation.z=-v*.4}for(let M of[-2,2]){for(let w=0;w<=g;w++){let v=w/g*2-1,T=v*p/2,R=m(v);qt(s,.18,1.5,.18,x,T,R+.95,M);let P=new K(new pe(.16,8,6),Xt(14264410));if(P.position.set(T,R+1.8,M),s.add(P),w%3===0){let I=new K(new Le(.22,.22,.45,8),new Pe({color:16767392}));I.position.set(T,R+2.35,M),s.add(I);let D=new K(new Oe(.3,.2,8),Xt(x));D.position.set(T,R+2.68,M),s.add(D),we(s,16762746,3,T,R+2.35,M,.8)}}for(let w=0;w<g;w++){let v=(w+.5)/g*2-1,T=v*p/2,R=m(v),P=qt(s,p/g+.2,.14,.14,x,T,R+1.5,M);P.rotation.z=-v*.4;let I=qt(s,p/g+.2,.1,.1,x,T,R+.7,M);I.rotation.z=-v*.4}}let _=m(0);for(let[M,w]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])Ve(s,.22,.26,4.2,x,M,_+2.1,w,8);let b=new K(new Oe(4.6,2.4,4),Xt(5982799));b.rotation.y=Math.PI/4,b.position.y=_+5.4,b.scale.set(1,1,.8),s.add(b),qt(s,6.4,.3,.3,14264410,0,_+4.35,-1.8),qt(s,6.4,.3,.3,14264410,0,_+4.35,1.8);let y=new K(new pe(.4,10,8),new Pe({color:16764810}));y.position.set(0,_+3.6,0),s.add(y),we(s,16762746,6,0,_+3.6,0,.9);let S=[15245466,15913098,10274736,10466268];for(let M=0;M<12;M++){let w=(M+.5)/12*2-1,v=w*(p/2-2),T=m(w)+2.7+Math.sin(M*1.7)*.06,R=new K(new an(.5,.7),Xt(S[M%4],{side:me}));R.position.set(v,T,0),R.rotation.set(0,0,Math.PI),s.add(R)}qt(s,p-4,.04,.04,7293498,0,m(0)+3.1,0).scale.y=1,[-1,1].forEach(M=>{let w=M*(p/2+.6);qt(s,3.4,5.5,5,d,w,.3,0,{map:Ye("stone")}),qt(s,3.6,.35,5.3,8223610,w,3.2,0);for(let R=0;R<3;R++)qt(s,1.2,.3,4.2,d,M*(p/2+2.6+R*1.1),.2+R*0,0).position.y=2.2-R*.8;let v=new K(new pe(.5,8,6),Xt(12039082));v.scale.set(.9,1.1,1),v.position.set(w,3.9,2.2),s.add(v);let T=v.clone();T.position.z=-2.2,s.add(T)}),[-.28,.28].forEach(M=>{qt(s,1.8,5.2,4,d,M*p,.4,0,{map:Ye("stone")})})}else if(n===1)[-1,1].forEach(p=>{Ve(s,.32,.38,7,c,p*3.6,2,0,10)}),qt(s,10.5,.5,1,c,0,5.7,0),qt(s,11.8,.35,1.3,5982794,0,6.15,0),qt(s,8,.28,.5,c,0,4.8,0),we(s,16762746,3,0,4.2,0,.6);else if(n===2){let p=(d,m,_,b,y,S,M,w)=>{let v=a(m,_);d.position.set(m,v-.2,_),d.rotation.y=w,s.add(d),qt(d,b,S,y,15258550,0,S/2,0,{map:Ye("plank")}),qt(d,b+.3,.35,y+.3,7293498,0,.1,0);let T=new K(new Oe(Math.max(b,y)*.82,S*.7,4),Xt(M));T.rotation.y=Math.PI/4,T.position.y=S+S*.3,T.scale.set(b/Math.max(b,y),1,y/Math.max(b,y)),d.add(T);let R=new Pe({color:16769184}),P=qt(d,.9,.9,.12,16769184,-b*.22,S*.55,y/2+.02);P.material=R;let I=qt(d,.9,.9,.12,16769184,b*.22,S*.55,y/2+.02);I.material=R,qt(d,.8,1.5,.14,8014394,0,.85,y/2+.04),we(d,16762746,4.2,-b*.22,S*.55,y/2+.6,.85),we(d,16762746,4.2,b*.22,S*.55,y/2+.6,.85);let D=qt(d,.7,1.6,.7,9075314,b*.25,S+1.1,-y*.2),C=ni(16777215,3);C.material.blending=Fi,C.material.opacity=.3,C.position.set(b*.25,S+2.8,-y*.2),d.add(C);let U=new K(new pe(.22,8,6),Xt(14245962,{emissive:8006170}));U.position.set(b/2-.2,S*.78,y/2+.5),d.add(U),we(d,16751210,2.4,b/2-.2,S*.78,y/2+.5,.8)},g=[11759722,9398879,11042906,8219250],x=0;for(let d of[-1,1])for(let m=0;m<7;m++){let _=-26+m*8.5+tt(i,m+d*9)*3,b=r+7+tt(i,m+30+d)*6+m%2*5,y=4+tt(i,m+50)*2.5,S=3.6+tt(i,m+60)*2,M=2.6+tt(i,m+70)*1.6;p(new Qt,d*b,_,y,S,M,g[(m+x)%4],d>0?-Math.PI/2:Math.PI/2),x++}for(let[d,m]of[[-1,-10],[1,6],[-1,18]]){let _=new Qt;_.position.set(d*(r-3.2),.35,m),s.add(_),qt(_,8,.25,2.2,11569004,d*-0+0,0,0,{map:Ye("plank")}).position.x=d*4;for(let S of[0,3,6.4])for(let M of[-1,1])Ve(_,.1,.12,1.8,7293498,d*S+0,.2,M,5);let b=new K(new pe(.26,8,6),new Pe({color:16766362}));b.position.set(d*6.4,1.5,1),_.add(b),we(_,16762746,3.6,d*6.4,1.5,1,.9);let y=new K(new pe(1,10,6),Xt(6965818));y.scale.set(.6,.3,1.9),y.position.set(d*-3.2,-.15,2.2),_.add(y)}for(let d=0;d<18;d++){let m=d/17,_=-24+m*48,b=d%2?1:-1,y=new K(new pe(.25,8,6),new Pe({color:d%3?16766362:16751226}));y.position.set(b*(r+4+Math.sin(d)*1.2),4.2+Math.sin(d*1.9)*.5,_),s.add(y),we(s,d%3?16762746:16751210,3.2,y.position.x,y.position.y,_,.85)}we(s,16756838,46,o*(r+11),6,0,.28);for(let d of[-1,1])Ve(s,.25,.3,6.5,11880250,d*(r-.5),2.6,-34,8);qt(s,r*2,.4,.5,11880250,0,5.8,-34),we(s,16762746,4,-r*.5,5.2,-34,.9),we(s,16762746,4,r*.5,5.2,-34,.9),we(s,16762746,4,0,5.2,-34,.9)}else if(n===3){Pr(s,a,r,"\u685C",!1,"#d98aa6");for(let g=0;g<14;g++){let x=o*(r+4.5+tt(i,g)*15),d=(g-6.5)*4.1+tt(i,g+20)*2.4,m=a(x,d),_=new Qt,b=.9+tt(i,g+60)*.5;_.position.set(x,m,d),s.add(_),Ve(_,.26*b,.44*b,3.4*b,7294787,0,1.7*b,0,6);let y=Ve(_,.14*b,.2*b,2.2*b,7294787,.7*b,3.6*b,0,5);y.rotation.z=-.7;for(let[M,w,v,T,R]of[[0,4.5,0,2.7,u],[1.7,4,.6,1.9,Hi.c2],[-1.5,4.2,-.8,2.1,u],[.4,5.5,-.4,1.6,16304598]]){let P=new K(new Mn(T*b*(.92+tt(i,g+M*7)*.2),1),Xt(R));P.scale.y=.78,P.position.set(M*b,w*b,v*b),_.add(P)}let S=new K(new hi(2.6*b,9).rotateX(-Math.PI/2),Xt(16173528,{side:me}));S.position.set(tt(i,g+9)*1.5-.7,.07,tt(i,g+19)*1.5-.7),_.add(S),g%3===0&&we(_,16758475,7,0,4.6*b,0,.22)}for(let g of[-1,1]){let x=zo(s,a,o*(r+3.4),g*10+2,1.1);x.position.y=a(o*(r+3.4),g*10+2)}let p=qt(s,3.2,.28,.9,11880250,o*(r+7.5),a(o*(r+7.5),-3)+.55,-3);qt(s,3.2,.7,.12,11880250,o*(r+7.5),a(o*(r+7.5),-3)+1,-3.5)}else if(n===4){Pr(s,a,r,"\u9DFA",!1,"#5f8aa8");let p=900,g=new Pn(Rf,Ss.material,p);g.frustumCulled=!1;let x=0;for(let m=0;m<p;m++){let _=m%2?1:-1,b=_*(r-5.5+tt(i,m)*13),y=(tt(i,m+50)-.5)*84;if(Math.abs(b)<r-5.8)continue;let S=1.1+tt(i,m+70)*1.5,M=Math.max(-.25,a(b,y)-.15);Sn.set(b,M,y),bn.setFromAxisAngle(Es,tt(i,m+90)*6.28),un.set(S,S*(1+tt(i,m+30)*.9),S),je.compose(Sn,bn,un),g.setMatrixAt(x,je),g.setColorAt(x,Je.set(qh[tt(i,m+4)*4|0])),x++}g.count=x,g.userData.keep=!0,s.add(g),s.userData.hp=[];for(let m=0;m<20;m++){let _=m%2?1:-1,b=m%3!==0,y=_*(r-(b?2.2+tt(i,m)*3.5:-1.5+tt(i,m)*2)),S=(tt(i,m+10)-.5)*70,M=.95+tt(i,m+5)*.5,w=tt(i,m+3)*6.28,v=b?-.12:a(y,S)-.1;if(m>=12){s.userData.hp.push([y,v,S,w,M,{gone:0}]);continue}let T=au(M,tt(i,m)*6.28);T.position.set(y,v,S),T.rotation.y=w,s.add(T)}let d=ni(16777215,10);d.material.blending=Fi,d.material.opacity=.25,d.position.set(0,1.2,0),s.add(d)}else if(n===5){Pr(s,a,r,"\u9418",!0,"#9a3a30");let p=o*(r+19),g=a(p,0),x=new Qt;x.position.set(p,g,0),x.rotation.y=-o*Math.PI/2,s.add(x);let d=10131604;qt(x,17,3,15,d,0,-.5,0),qt(x,15,.5,13,11841964,0,1.25,0),qt(x,13,.5,11,12763064,0,1.75,0);for(let S=0;S<7;S++)qt(x,6,.4,1.1,d,0,1.5-S*.28,7.9+S*.95);for(let[S,M]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])Ve(x,.34,.38,5,12730163,S,4.6,M,8);qt(x,9.4,.5,.7,12730163,0,7.3,3.4),qt(x,9.4,.5,.7,12730163,0,7.3,-3.4),qt(x,.7,.5,7.2,12730163,-4.2,7.3,0),qt(x,.7,.5,7.2,12730163,4.2,7.3,0),qt(x,9,.35,.6,14264410,0,6.7,3.4),qt(x,9,.2,7,8018508,0,2.15,0),ou(x,9.6,2.7,9.1,4999770),qt(x,5.2,1.5,5.2,15721421,0,8.7,0),qt(x,5.5,.2,5.5,12730163,0,7.9,0),ou(x,5.3,2,11.2,4144461),Ve(x,.1,.1,1.6,14264410,0,13,0,6);let m=new K(new pe(.34,8,6),Xt(14264410,{emissive:5913104}));m.position.y=12.3,x.add(m),qt(x,.5,.5,5,4864562,0,6.8,0),Ve(x,.05,.05,1.1,3811874,0,6.1,0,4);let _=Ve(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});Ve(x,.8,.8,.12,14264410,0,5.6,0,12),we(x,16762746,5,0,4.6,0,.6);let b=Ve(x,.2,.2,4,6965818,0,3.3,2.6,6);b.rotation.x=Math.PI/2,b.position.set(0,3.5,2.6),Ve(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let S of[-4,4])for(let M of[3.4,-3.4]){let w=new K(new pe(.34,8,6),Xt(14245962,{emissive:9054746}));w.scale.y=1.3,w.position.set(S*1.12,6.2,M*1.05),x.add(w),we(x,16751210,3,S*1.12,6.2,M*1.05,.85)}for(let S of[-3.4,3.4])for(let M of[10.4,14.5])zo(x,()=>0,S,M,1.15).position.y=-.1;for(let S=0;S<5;S++)qt(x,2.6,.12,1.6,d,0,-.3,10+S*2.1);Bg(x,0,-.4,17.5,1.1,12730163);let y=Fg(x,0,1.5,-3.5);y.position.set(o>0?-11.5:11.5,1.5,-2.5),y.scale.setScalar(1.1)}else if(n===6){let p=o*(r+3.6),g=a(p,0),x=new Qt;x.position.set(p,g,0),s.add(x),Pr(s,a,r,"\u6EDD",!1,"#3f7a8a");let d=M=>Xt(M);for(let M=0;M<22;M++){let w=3+tt(i,M)*3.5,v=o*(7.8+tt(i,M+5)*9),T=tt(i,M+9)*15+(v*o<8?3:0),R=(tt(i,M+13)-.5)*17,P=new K(new Mn(w,1),d(M%3?8030846:7114616));P.position.set(v,T,R),P.scale.y=1.2,x.add(P);let I=new K(new Mn(w*.75,1),d(8369002));I.position.set(v,T+w*.65,R),I.scale.set(1.05,.45,1.05),x.add(I)}for(let M=0;M<10;M++){let w=1+tt(i,M+60)*1.2,v=new K(new Mn(w,0),d(8030846));v.position.set(-o*(.5+tt(i,M+70)*3),w*.4,(tt(i,M+80)-.5)*12),x.add(v)}let m=new K(new an(7,19,1,1),Qs);m.position.set(-o*.5,9.6,0),m.rotation.y=Math.PI/2,x.add(m);let _=new K(new an(3,14,1,1),Qs);_.position.set(-o*.7,7,-5.6),_.rotation.y=Math.PI/2,_.rotation.z=.04,x.add(_);let b=new K(new hi(6.5,24).rotateX(-Math.PI/2),new Pe({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));b.position.set(-o*3.6,.1,0),x.add(b);let y=new K(new an(3.4,4.6).rotateX(-Math.PI/2),Qs);y.rotation.y=o>0?Math.PI/2:-Math.PI/2,y.position.set(-o*3.4,.12,0),x.add(y);for(let M=0;M<6;M++){let w=ni(16777215,5+tt(i,M)*3);w.material.blending=Fi,w.material.opacity=.5,w.position.set(-o*(1+tt(i,M+3)*4),.5+tt(i,M)*.8,(tt(i,M+9)-.5)*7),x.add(w)}let S=ni(16777215,26);S.material.blending=Fi,S.material.opacity=.5,S.position.set(-o*3,4,0),x.add(S)}else if(n===7){Pr(s,a,r,"\u8336",!0,"#a9453a");let p=o*(r-3),g=new Qt;g.position.set(p,0,0),s.add(g);for(let m of[-2.4,2.4])for(let _ of[-2,2])Ve(g,.12,.12,3,h,m,-.2,_,5);qt(g,6,.3,5,l,0,1.3,0),qt(g,4.6,2.4,3.6,15258550,0,2.6,0),qt(g,4.8,.2,3.8,5982794,0,3.9,0),qt(g,4.7,.15,3.7,5982794,0,1.45,0);let x=new K(new Oe(4.6,2,4),Xt(9398879));x.rotation.y=Math.PI/4,x.position.y=4.8,g.add(x),qt(g,1.2,1.1,.1,16769184,0,2.7,1.85).material=new Pe({color:16769184}),we(g,16762746,4,0,2.7,2.1,.9);for(let m of[-.55,.55]){let _=new K(new an(1,1.4),new _e({gradientMap:Ie,map:qf("\u8336","#2f3f6b","#ffffff",128,160),side:me}));_.position.set(m,2.9,1.93),g.add(_)}for(let m of[-2.4,2.4]){let _=new K(new pe(.3,8,6),Xt(14245962,{emissive:8006170}));_.scale.y=1.3,_.position.set(m,3.2,2.3),g.add(_),we(g,16751210,2.6,m,3.2,2.3,.8)}Ve(g,.05,.05,2.6,l,3.4,2.2,3.2,5);let d=new K(new Oe(1.7,.7,12),Xt(12730163));d.position.set(3.4,3.6,3.2),g.add(d),qt(g,1.8,.15,.6,l,3.4,1.5,3.2),qt(g,1.8,.05,.62,12730163,3.4,1.6,3.2);for(let m of[-1,1]){let _=zo(s,a,p+m*6,5,1);_.position.y=a(p+m*6,5)}}else if(n===8){Pr(s,a,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let p of[-1,1])for(let g=0;g<6;g++)zo(s,a,p*(r+3+tt(i,g)*2.5),-45+g*18+tt(i,g+3)*4);for(let p=0;p<12;p++){let g=p%2?1:-1,x=g*(r+4+tt(i,p)*12),d=(tt(i,p+20)-.5)*110,m=new K(new an(3.6,22),new Pe({map:jn,color:16773296,transparent:!0,opacity:.14,blending:kn,depthWrite:!1,side:me}));m.position.set(x,a(x,d)+10,d),m.rotation.set(0,tt(i,p+9)*3,g*.25),s.add(m)}}else if(n===10)s.userData.job=nx(s,i,{gy:a,hwv:r,side:o,s:t,a:e});else for(let p=0;p<46;p++){let g=(tt(i,p)-.5)*r*1.5,x=(tt(i,p+40)-.5)*34,d=new K(new hi(.8+tt(i,p+7)*.5,10).rotateX(-Math.PI/2),Xt(8372106,{side:me}));if(d.position.set(g,.05,x),s.add(d),p%4===0){let m=new K(new Mn(.34,0),Xt(16098493,{emissive:9058896}));m.scale.y=1.2,m.position.set(g,.3,x),s.add(m),we(s,16752576,1.8,g,.5,x,.35)}}return s}var tr=new N,tp=new N,ep=new gn,RS=matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;function rx(i){if(ct.cine||RS||ct.X.photo)return;let t=si.get(i);if(!t)return;let e=rn(i),n=be(e),s=Ke(i),r=s===6||tt(i,9)>.5?1:-1,o=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0],[r*(n+80),36,r*12,1]][s],a=o[3]===1,c=a?Math.abs(o[0])+n*.3:[46,30,52,0,40,0,0,0,30,30,0][s];ct.cine={k:i,g:t,t:0,dur:s===10?17:11.5,fx:o[0],fy:o[1],fz:o[2],sd:r,sided:a,R:Math.max(30,c),h:[10,6,12,10,8,13,10,7,6,9,-26][s]}}function ox(i){if(!ct.cine){ct.cineW=0;return}ct.cine.t+=i,!ct.cine.snapped&&ct.cine.t>5.4&&(ct.cine.snapped=!0,ct.X.snap(Ke(ct.cine.k)));let t=ct.cine,e=mf(0,2.6,t.t)*(1-mf(t.dur-2.6,t.dur,t.t));if(ct.cineW=e,t.t>=t.dur){ct.cine=null,ct.cineW=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),o=t.sided?-t.sd:0,a=t.sided?0:1,c=o*s+a*r,l=-o*r+a*s;tr.set(t.fx+c*t.R,t.fy+t.h,t.fz+l*t.R),t.g.localToWorld(tr);let h=Zn(tr.x,-tr.z);tr.y=Math.max(tr.y,h+3),tp.set(t.fx,t.fy,t.fz),t.g.localToWorld(tp),ep.position.copy(tr),ep.lookAt(tp),pn.position.lerp(tr,e),pn.quaternion.slerp(ep.quaternion,e)}var er=0,ax=new fn,cx=new fn,np=new gn,ip=new N,xu=new N,_u=new N,lx=We("cam");function Lr(i){ct.camMode=i,lx.textContent=i?"Vista 3\xAA":"Vista 1\xAA";try{localStorage.setItem("rio3d-cam",i)}catch{}}lx.onclick=()=>Lr(1-ct.camMode);addEventListener("keydown",i=>{i.code==="KeyC"&&Lr(1-ct.camMode)});try{Lr(+localStorage.getItem("rio3d-cam")||0)}catch{}function hx(i,t){let e=Math.sin(F.t*.5)*.01;pn.position.set(F.px,1.18+t,F.pz).addScaledVector(new N(Math.sin(F.psi),0,-Math.cos(F.psi)),-.15),F.pitch+=(-js.pitch*.22-F.pitch)*2*i,pn.rotation.set(F.pitch-.06,-F.psi+e,-F.steer*.02,"YXZ"),ct.camK+=((ct.camMode?1:0)-ct.camK)*Math.min(1,i*2.2),ct.camK<.01&&(er=F.psi);{let n=innerWidth/innerHeight<1?82:68,s=n*(1-.3*ct.camK*ct.camK*(3-2*ct.camK));Math.abs(pn.fov-s)>.05&&(pn.fov=s,pn.updateProjectionMatrix())}if(ct.camK>.003){let n=ct.camK*ct.camK*(3-2*ct.camK);cx.copy(pn.quaternion),er+=(F.psi-er)*Math.min(1,i*1.6);let s=er+.3;_u.set(Math.sin(s),0,-Math.cos(s)),ip.set(F.px,6.2+t,F.pz).addScaledVector(_u,-10.8),_u.set(Math.sin(er),0,-Math.cos(er)),xu.set(F.px,.3,F.pz).addScaledVector(_u,6.5),xu.x+=Math.cos(er)*1.9,xu.z+=Math.sin(er)*1.9,np.position.copy(ip),np.lookAt(xu),ax.copy(np.quaternion),pn.position.lerp(ip,n),pn.quaternion.copy(cx).slerp(ax,n)}}var yu=3120762,sp=4176271,nr=14989394,ux=12730163,bc=15986400;function dx(i){let t=Do(i),e=xn(t),n=tt(i,9)>.5?1:-1,s=be(t),r=new Qt;r.position.set(ie(t),0,-t),r.rotation.y=-e;let o=(D,C)=>{let U=-e;return Zn(ie(t)+D*Math.cos(U)+C*Math.sin(U),t-(-D*Math.sin(U)+C*Math.cos(U)))},a=n*(s+14),c=Math.max(o(a,0),.4),l=new Qt;l.position.set(a,c,0),l.scale.setScalar(1.5),r.add(l);let h=new gi,u=new gi,f=new gi,p=new gi,g={S:h,E:f,h:l};h.boxB(11,1.1,11,V.stone,0,-1,0).boxB(9,1.2,9,Rn(V.stone,1.08),0,.1,0).boxB(7,1.3,7,Rn(V.stone,.95),0,1.3,0).boxB(6.2,.3,6.2,V.gravel,0,2.6,0),u.boxB(7.4,.2,7.4,nr,0,2.55,0,!1);for(let[D,C]of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]])mu(g,D,.2,C,1);for(let D of[-1,1])for(let C=0;C<4;C++)h.boxB(.5,.5,.5,Rn(V.stone,.9),D*5.7,.1+0,-3.5+C*2.3,!1);let x=2.9,d=new vo([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13,2.4],[0,12.5,4.2]].map(D=>new N(D[0],D[1]+x-.4,D[2]))),m=64,_=d.getPoints(m),b=[],y=new N(0,1,0),S=D=>.2+.98*Math.pow(Math.sin(Math.min(1,D*1.5)*Math.PI/2),.7)*(1-.32*D);for(let D=0;D<=m;D++){let C=D/m,U=_[D],G=d.getTangent(C),O=new N().crossVectors(y,G);O.lengthSq()<1e-4&&O.set(1,0,0),O.normalize();let $=new N().crossVectors(G,O).normalize(),H=S(C),X=[];for(let J=0;J<8;J++){let mt=J/8*6.2832,wt=Math.cos(mt),ae=Math.sin(mt);X.push([U.x+(O.x*wt+$.x*ae)*H,U.y+(O.y*wt+$.y*ae)*H,U.z+(O.z*wt+$.z*ae)*H])}b.push(X)}h.loft(b,(D,C)=>D>=5&&D<=7?Rn(nr,.95+.1*(C%2)):Rn(C%2?sp:yu,.92+.12*((C>>1)%2)));for(let D=3;D<m-4;D+=2){let C=D/m,U=_[D],G=d.getTangent(C),O=S(C),$=.35+O*.9;h.at(U.x,U.y+O*.95,U.z,Math.atan2(G.x,G.z),H=>{H.cyl(.2*$,0,1.5*$,4,D%4?ux:nr,0,0,0)},-Math.atan2(G.y,Math.hypot(G.x,G.z))*.6)}for(let[D,C]of[[22,1],[22,-1],[40,1],[40,-1]]){let U=_[D],G=S(D/m),O=[U.x+C*(G+.6),U.y-G*.8,U.z+.2],$=[U.x+C*(G+1.6),Math.max(x,U.y-G*.8-2.2),U.z+.6];ws(h,[U.x+C*G*.7,U.y-G*.4,U.z],O,.38,yu),ws(h,O,$,.3,sp);for(let H=-1;H<=1;H++)h.at($[0]+C*.15,$[1],$[2]+H*.22,0,X=>X.cyl(.09,0,.55,4,bc,0,-.1,0),0,0,C*-1.1)}{let D=_[40],C=S(40/m);f.ball(.55,16762986,D.x+(C+1.7),Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,1,1,1,1),we(l,16766354,6,D.x+C+1.7,Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,.9)}{let D=_[0];for(let C=0;C<5;C++)h.at(D.x,D.y,D.z-.2,(C-2)*.28,U=>U.cyl(.3,0,1.8,4,C%2?ux:nr,0,0,0),-1,0,0)}let M=_[m],w=d.getTangent(1);h.at(M.x,M.y,M.z,0,D=>{D.ball(1.15,sp,0,0,.3,1,.92,1.25,1).boxB(1.15,.62,1.9,yu,0,-.5,1.1).box(1.3,.3,1.2,nr,0,.45,.9),D.at(0,-.88,1.05,0,C=>C.box(1,.32,1.8,Rn(yu,.9),0,0,.5),.38);for(let C of[-1,1]){for(let U=0;U<3;U++)D.cyl(.09,0,.45,4,bc,C*.44,-.45,1.4+U*.5),D.at(C*.44,-.8,1.4+U*.5,0,G=>G.cyl(.08,0,.38,4,bc,0,0,0),Math.PI);D.ball(.16,V.black,C*.28,.05,2.12,1,1,1,0),D.at(C*.5,.85,-.1,0,U=>{U.cyl(.24,.06,1.5,5,nr,0,0,0)},-.95,0,C*.2),D.at(C*.62,1.65,-1.1,0,U=>{U.cyl(.07,0,1.1,5,nr,0,0,0)},-1.45,0,C*.25);for(let U=0;U<2;U++){let G=[C*.5,-.35,1.9];ws(h,G,[C*(1.5+U*.5),-.5-U*.35,2.8],.06,bc),ws(h,[C*(1.5+U*.5),-.5-U*.35,2.8],[C*(2.6+U*.4),-1.6-U*.4,2],.05,bc)}}f.box(.8,.16,1.45,16742954,0,-.62,1.5);for(let C of[-1,1])f.ball(.2,16769658,C*.58,.32,.95,1,1.1,.8,1)});for(let D=0;D<7;D++){let C=(D-3)*.28;p.at(M.x,M.y+.4,M.z-.6,0,U=>U.quad([-.35,0,0],[.35,0,0],[.5+C*.3,-1.2,-3.4-D*.1],[-.5+C*.3,-1.2,-3.4-D*.1],D%2?V.red:nr),0,0,C)}we(l,16753226,5.5,M.x,M.y-.5,M.z+1.7,.85),we(l,16769658,2.4,M.x-.6,M.y+.3,M.z+1.1,.8),we(l,16769658,2.4,M.x+.6,M.y+.3,M.z+1.1,.8);let v=D=>new _e(Object.assign({gradientMap:Ie,color:16777215,vertexColors:!0,fog:!0},D||{})),T=v(),R=v({emissive:2759680}),P=v({side:me}),I=new Pe({color:16777215,vertexColors:!0,fog:!0});return l.add(h.mesh(T),u.mesh(R),p.mesh(P),f.mesh(I)),r.userData.dragon={k:i,s:t,mouth:new N(a,c+(M.y-.5)*1.5,M.z*1.5+2.5),roared:!1},r.updateMatrixWorld(!0),r}var ko=new Map;try{window.__dragons=ko}catch{}function CS(i,t,e){for(let[n,s]of ko){let r=s.userData.dragon.s;(r<i-140||r>i+380)&&(At.remove(s),Yf(s),ko.delete(n))}for(let n=Math.max(0,t-1);n<=e+2;n++){if(Ke(n)!==10||ko.has(n))continue;let s=Do(n);if(s<i-140||s>i+380)continue;let r=dx(n);ko.set(n,r),At.add(r)}for(let[,n]of ko){let s=n.userData.dragon;if(!s.roared&&i>s.s-60&&i<s.s+20){s.roared=!0;try{ce.roar()}catch{}ri("El drag\xF3n anuncia el Castillo de la Garza Blanca")}}}function fx(i){let t=Math.max(0,Math.floor((i-140)/Ei)),e=Math.floor((i+340)/Ei);CS(i,t,e);for(let[n,s]of si)(n<t||n>e)&&(s.parent&&At.remove(s),Yf(s),si.delete(n));for(let n=t;n<=e;n++){let s=si.get(n);s||(s=sx(n),si.set(n,s)),s.parent||At.add(s);{let r=Ke(n);if(rn(n)-i<(r===2?70:r===10?130:55)&&i-rn(n)<25&&(!mi.has(r)||!ct.X.hasSnap(r)&&!Ff.has(r))){let o=!mi.has(r);if(mi.add(r),Ff.add(r),Tg.add(n),rx(n),o){ri("Descubriste: "+zi[r]);try{ce.chime(0,n%5)}catch{}Eg(),eu(i),ct.X.found(r)}}}}for(let[,n]of si)if(n.userData.job){let s=performance.now(),r;do r=n.userData.job.next();while(!r.done&&performance.now()-s<5);r.done&&(n.userData.job=null,lu(n))}else n.userData.cas&&ix(n,Se.night,.016);for(let n of Rr)n.material.opacity=n.userData.base*(.3+.7*ct.glowK);cu.uniforms.k.value=ct.glowK,Qs.uniforms.t.value=F.t,Qs.uniforms.fogCol.value.copy(At.fog.color);for(let n of os)n.nk?n.nk.rotation.x=Math.sin(F.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(F.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(F.t*1.1+n.ph)*.12}var op=new Pe({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:me}),Go=$n,px=new Float32Array(Go*4*2*3),mx=new Float32Array(Go*4*2*4),Vo=new ue;Vo.setAttribute("position",new Kt(px,3));Vo.setAttribute("color",new Kt(mx,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<Go-1;e++){let n=(t*Go+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}Vo.setIndex(i)}var Sc=new K(Vo,op);Sc.frustumCulled=!1;Sc.renderOrder=1;At.add(Sc);function gx(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<Go;s++){let r=t+s*Kn,o=be(r)-1+(sn(r*.08,e*9)-.5)*.9,a=.9+sn(r*.2,e)*.9,c=ie(r)+n*o,l=-r,h=.25+.55*sn(r*.11+e*30,5),u=(e*Go+s)*4,f=[c-n*a*1.4,c-n*a*.4,c+n*a*.5,c+n*a*1.5],p=[0,h,h*.6,0];for(let g=0;g<4;g++)px.set([f[g],.05,l],(u+g)*3),mx.set([1,1,1,p[g]],(u+g)*4)}}Vo.attributes.position.needsUpdate=Vo.attributes.color.needsUpdate=!0}var xx=36,ap=[];for(let i=0;i<xx;i++){let t=new K(new hi(.5,20).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},At.add(t),ap.push(t)}var PS=0,rp=0;function Mu(i,t,e,n,s){let r=ap[PS++%xx];r.position.set(i,.045,t),r.userData={age:0,vx:e,vz:n,sc:s},r.scale.setScalar(.4)}var bu=60,cp=new ue,vu=new Float32Array(bu*3),lp=[];for(let i=0;i<bu;i++)lp.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});cp.setAttribute("position",new Kt(vu,3));var IS=new li({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),_x=new Mi(cp,IS);_x.frustumCulled=!1;At.add(_x);var LS=0;function Su(i,t,e,n){for(let s=0;s<n;s++){let r=lp[LS++%bu];r.l=1,r.x=i,r.y=t,r.z=e;let o=Math.random()*6.28,a=.8+Math.random()*1.4;r.vx=Math.cos(o)*a,r.vz=Math.sin(o)*a,r.vy=2+Math.random()*2.2}ii(i,e)}function yx(i){for(let t=0;t<bu;t++){let e=lp[t];e.l>0&&(e.l-=i*1.4,e.vy-=9*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,e.y<0&&(e.l=0)),vu[t*3]=e.l>0?e.x:0,vu[t*3+1]=e.l>0?e.y:-50,vu[t*3+2]=e.z}if(cp.attributes.position.needsUpdate=!0,rp-=i,rp<=0&&ct.started){rp=.11;let t=Math.min(F.v,5),e=Math.cos(F.psi),n=Math.sin(F.psi),s=F.px-Math.sin(F.psi)*1.5,r=F.pz+Math.cos(F.psi)*1.5;for(let o of[-1,1])Mu(s+e*.5*o,r+n*.5*o,e*o*.5,n*o*.5,1)}ap.forEach(t=>{let e=t.userData;if(e.age>=3.2){t.material.opacity=0;return}e.age+=i;let n=e.age/3.2;t.position.x+=(e.vx||0)*i,t.position.z+=(e.vz||0)*i,t.scale.setScalar((.4+n*2.6)*(e.sc||1)),t.material.opacity=.38*(1-n)*(1-n)})}var DS=5,Dr=[],vx=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function NS(i){let t=new Qt,e=vx[i%vx.length],n=new K(new pe(.5,12,8),Xt(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new K(new pe(.5,10,6),Xt(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new Qt;r.position.z=.45,t.add(r);let o=new K(new Oe(.22,.5,4),Xt(e[0],{side:me}));o.rotation.x=-Math.PI/2,o.scale.set(1.2,1,.18),o.position.z=.22,r.add(o);let a=new K(new Oe(.08,.3,3),Xt(e[0]));return a.position.set(0,.2,.05),a.rotation.x=-.3,t.add(a),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},At.add(t),t}for(let i=0;i<DS;i++)Dr.push(NS(i));function Ex(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(be(e)-3);i.position.set(ie(e)+n,-.05,-e),i.userData.st=0,i.userData.hd=xn(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}Dr.forEach(i=>Ex(i,30+Math.random()*60));function Tx(i,t){for(let e of Dr){let n=e.userData;n.t+=i;let s=e.position.z-F.pz,r=-e.position.z;if(r<t-12||r>t+120){Ex(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let o=e.position.x-ie(r),a=be(r)-3;Math.abs(o)>a&&(n.hd+=(xn(r)+(o>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd+Math.PI,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,Su(e.position.x,.1,e.position.z,5),ce.plop((e.position.x-F.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&Mu(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let o=.95,a=n.j/o,c=Math.sin(Math.PI*a)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+c;let l=Math.cos(Math.PI*a)*1.25*Math.PI/o;e.rotation.set(0,-n.hd+Math.PI,0),e.rotateX(Math.atan2(l,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=o&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd+Math.PI,0),Su(e.position.x,.1,e.position.z,9),ce.plop((e.position.x-F.px)/25))}}yx(i)}var wx=[],Nr=[];function US(i){let t=new Qt,e=i%3!==2,n=e?16184302:9279656,s=e?15262424:7305868,r=new K(new pe(.28,10,8),Xt(n));r.scale.set(.7,.7,1.8),t.add(r);let o=new K(new Le(.045,.06,.5,6),Xt(n));o.rotation.x=1.15,o.position.set(0,.1,-.5),t.add(o);let a=new K(new pe(.09,8,6),Xt(n));a.position.set(0,.3,-.72),t.add(a);let c=new K(new Oe(.035,.3,5),Xt(15245898));c.rotation.x=-Math.PI/2,c.position.set(0,.3,-.95),t.add(c);let l=[-1,1].map(u=>{let f=new Qt;f.position.set(u*.12,.08,-.05),t.add(f);let p=new K(new In(1.35,.03,.62),Xt(s));p.position.x=u*.68,f.add(p);let g=new K(new In(.5,.03,.4),Xt(e?4934485:5857391));return g.position.set(u*1.5,0,.05),f.add(g),f}),h=new K(new Oe(.12,.45,4),Xt(n));return h.rotation.x=Math.PI/2,h.position.z=.65,t.add(h),t.scale.setScalar(1.5),t.userData={wings:l,ph:Math.random()*6,fl:0,sp:5+Math.random()*2.5,hd:0,h:7+Math.random()*7,off:(Math.random()-.5)*20},At.add(t),t}function FS(i){let t=new Qt,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new K(new Le(.025,.018,.5,6),Xt(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new K(new pe(.055,8,6),Xt(n));r.position.z=-.27,t.add(r);let o=new Pe({color:15398655,transparent:!0,opacity:.5,side:me,depthWrite:!1}),a=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([c,l])=>{let h=new Qt;h.position.set(0,.02,l),t.add(h);let u=new K(new an(.38,.1).rotateX(-Math.PI/2),o);u.position.x=c*.2,h.add(u),a.push([h,c])}),t.scale.setScalar(1.8),t.userData={wings:a,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},At.add(t),t}for(let i=0;i<8;i++)Nr.push(FS(i));var Ur=[];function BS(i){let t=new Qt,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new K(new pe(.3,10,8),Xt(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new K(new Oe(.12,.3,5),Xt(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let o=new Qt;o.position.set(0,.3,-.25),t.add(o);let a=new K(new Le(.06,.08,.34,6),Xt(e));a.position.y=.15,o.add(a);let c=new K(new pe(.1,8,6),Xt(i%2?3486766:e));c.position.set(0,.34,-.03),o.add(c);let l=new K(new Oe(.04,.16,5),Xt(15245898));return l.rotation.x=-Math.PI/2,l.position.set(0,.33,-.15),o.add(l),t.scale.setScalar(1.15),t.userData={neck:o,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},At.add(t),t}function hp(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(be(e)-6);i.position.set(ie(e)+n,0,-e),i.userData.hd=xn(e)+(Math.random()-.5)*2}for(let i=0;i<4;i++){let t=BS(i);i>=2&&t.scale.setScalar(.72),Ur.push(t)}Ur.forEach(i=>hp(i,30));function Ax(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(be(e)+2);i.position.set(ie(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}Nr.forEach(i=>Ax(i,30));function Rx(i,t){let e=1-Fe(Se.night*1.5,0,1)*1,n=e>.15&&ln.rain<.6;for(let s of Ur){s.visible=e>.1;let r=s.userData;r.t+=i;let o=-s.position.z,a=o-t;if(!r.follow&&!(r.flee>0)&&(a<-14||a>110)){hp(s,t);continue}if(r.follow&&a<-70){r.follow=0,hp(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&!r.follow&&!(r.flee>0)&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let c=Math.sin(Math.PI*Fe(1-r.dip/1.3));r.neck.rotation.x=1.2*c,s.rotation.x=.9*c*.5,s.position.y=-.05*c,c>.9&&!r.rip&&(r.rip=!0,ii(s.position.x,s.position.z-.4),ce.plop((s.position.x-F.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let c=s.position.x-ie(o);Math.abs(c)>be(o)-5&&(r.hd+=(xn(o)+(c>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*(r.spd||.35)*i,s.position.z-=Math.cos(r.hd)*(r.spd||.35)*i}s.rotation.y=-r.hd+Math.PI}for(let s of Nr){if(s.visible=n,!n)continue;let r=s.userData;if(r.t-=i,zS(s,r,i))continue;let o=-s.position.z-t;if(o<-12||o>90){Ax(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let f=-s.position.z+(Math.random()-.5)*8,p=s.position.x-ie(f);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let g=r.tx-ie(-r.tz);Math.abs(g)>be(-r.tz)+3&&(r.tx=ie(-r.tz)+Math.sign(g)*(be(-r.tz)+1))}let a=Math.min(1,i*3.2),c=s.position.x,l=s.position.z;s.position.x+=(r.tx-s.position.x)*a,s.position.z+=(r.tz-s.position.z)*a,s.position.y+=(r.ty-s.position.y)*a+Math.sin(F.t*9+r.ph)*.004;let h=s.position.x-c,u=s.position.z-l;Math.hypot(h,u)>.002&&(s.rotation.y=Math.atan2(-h,-u)),s.rotation.x=-Math.min(.5,Math.hypot(h,u)*20)*.5,r.wings.forEach(([f,p],g)=>{f.rotation.z=p*Math.sin(F.t*70+g*1.7+r.ph)*.45})}}var Ec=(()=>{try{return JSON.parse(localStorage.getItem("rio3d-enc")||"{}")||{}}catch{return{}}})();function Xo(i,t){if(!Ec[i]){Ec[i]=Date.now();try{localStorage.setItem("rio3d-enc",JSON.stringify(Ec))}catch{}ri(t)}}var OS=(()=>{let i=au(1,0);os.pop(),i.updateMatrixWorld(!0);let t=[];return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);n.deleteAttribute("uv");let s=e.material.color,r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;n.setAttribute("color",new Kt(o,3)),t.push(n.index?n.toNonIndexed():n)}),bs(t)})(),ir=new Pn(OS,new _e({gradientMap:Ie,vertexColors:!0}),24);ir.frustumCulled=!1;ir.count=0;At.add(ir);var Wo=[],Cx=[];function HS(i,t,e,n){let s=Cx.pop()||US(0);s.rotation.order="YXZ",s.scale.setScalar(2.1),s.visible=!0,s.position.set(i,t+1.2,e),s.userData.fl2={t:0,hd:n,vy:3.2,sp:2.2,ph:Math.random()*6},At.add(s),Wo.push(s);try{ce.flap((i-F.px)/25)}catch{}Xo("heron","Las garzas alzan el vuelo a tu paso")}var as=new N,Mx=new fn,bx=new N,Sx=new Me;function Px(i,t){if(!ct.started)return;let e=!window.__noScare&&(Math.abs(F.steer)>.8||F.t-F.bumpT<.8);ct.scareT=e?2.5:Math.max(0,ct.scareT-i);let n=Math.sin(F.psi),s=Math.cos(F.psi),r=ct.scareT<=0;for(let a of Dr){let c=a.userData;if(c.st!==0)continue;c.sp0==null&&(c.sp0=c.sp);let l=a.position.x-F.px,h=a.position.z-F.pz,u=Math.hypot(l,h);if(!r&&u<11){c.hd+=Lo(Math.atan2(l,-h),c.hd)*Math.min(1,i*6),c.sp=3.4,c.cur=0;continue}if(r&&u<26){c.dir||(c.dir=Math.random()<.5?-1:1);let f=-.4+Math.sin(F.t*.5+c.ph)*1.3,p=F.px+s*c.dir*2.7+n*f,g=F.pz+n*c.dir*2.7-s*f,x=p-a.position.x,d=g-a.position.z,m=Math.hypot(x,d);if(c.hd+=Lo(Math.atan2(x,-d),c.hd)*Math.min(1,i*3.2),c.sp=Math.max(.7,Math.min(4,F.v+m*.9)),c.cur=1,u<5.5&&(Xo("koi","Los peces se acercan a nadar contigo"),Math.random()<i*.35)){Mu(a.position.x+Math.sin(c.hd)*.4,a.position.z-Math.cos(c.hd)*.4,0,0,.55);try{ce.plop((a.position.x-F.px)/25)}catch{}}if(u<6.5&&Math.random()<i*.06){c.st=1,c.j=0,c.vx=Math.sin(c.hd)*2.6,c.vz=-Math.cos(c.hd)*2.6,Su(a.position.x,.1,a.position.z,6);try{ce.plop((a.position.x-F.px)/25)}catch{}}}else c.sp=c.sp0,c.cur=0}Ur.forEach((a,c)=>{let l=a.userData;if(!a.visible)return;let h=a.position.x-F.px,u=a.position.z-F.pz,f=Math.hypot(h,u);if(l.flee>0){l.flee-=i,l.hd+=Lo(Math.atan2(h,-u),l.hd)*Math.min(1,i*4),l.spd=2.6;return}if(!r&&f<16){l.follow=0,l.flee=3;return}if(r&&(l.follow||f<17)){l.follow||(l.follow=1,l.qT=1+Math.random()*3,c<2&&Xo("duck","Un pato decide acompa\xF1arte"));let p=3.8+c*1.7,g=Math.sin(F.t*.4+c*2)*1.1+(c%2?1:-1)*.9,x=F.px-n*p+s*g,d=F.pz+s*p+n*g,m=x-a.position.x,_=d-a.position.z,b=Math.hypot(m,_);if(l.hd+=Lo(Math.atan2(m,-_),l.hd)*Math.min(1,i*2.6),l.spd=Math.max(.1,Math.min(3.4,(b>.8?F.v*1.05:F.v*.9)+b*.5)),l.qT-=i,l.qT<=0&&f<12){l.qT=5+Math.random()*9;try{ce.quack((a.position.x-F.px)/25)}catch{}}}else l.spd=0});for(let[a,c]of si){let l=c.userData.hp;if(!(!l||Ke(a)!==4))for(let h of l){let u=h[5];if(u.gone>0&&(u.gone-=i,u.gone>0))continue;as.set(h[0],h[1],h[2]),c.localToWorld(as);let f=as.x-F.px,p=as.z-F.pz;Math.hypot(f,p)<(ct.scareT>0?22:13)&&F.t>(u.cd||0)&&(u.gone=70,u.cd=F.t+4,HS(as.x,as.y,as.z,Math.atan2(f,-p)+(Math.random()-.5)*.8))}}let o=0;for(let[a,c]of si){let l=c.userData.hp;if(!(!l||Ke(a)!==4))for(let h of l)h[5].gone>0||o>=24||(as.set(h[0],h[1],h[2]),c.localToWorld(as),Mx.setFromAxisAngle(Es,c.rotation.y+h[3]),bx.setScalar(h[4]),Sx.compose(as,Mx,bx),ir.setMatrixAt(o++,Sx))}ir.count=o,ir.instanceMatrix.needsUpdate=!0;for(let a=Wo.length-1;a>=0;a--){let c=Wo[a],l=c.userData.fl2;l.t+=i,l.vy=Math.max(.6,l.vy-i*.35),c.position.y>11&&(l.vy=Math.min(l.vy,.2)),l.sp=Math.min(6.2,l.sp+i*1.6);let h=-c.position.z;l.hd+=Lo(xn(h)+Math.sin(l.ph)*.3,l.hd)*i*.6,c.position.x+=Math.sin(l.hd)*l.sp*i,c.position.z-=Math.cos(l.hd)*l.sp*i,c.position.y+=l.vy*i,c.rotation.y=-l.hd,c.rotation.x=Math.min(.5,l.vy*.12);let u=Math.sin(l.t*(l.t<4?10:6)+l.ph)*(l.t<8?.8:.3);c.userData.wings.forEach((f,p)=>{f.rotation.z=(p?1:-1)*u}),(l.t>16||Math.hypot(c.position.x-F.px,c.position.z-F.pz)>230)&&(At.remove(c),Cx.push(c),Wo.splice(a,1))}}var As=new N;function zS(i,t,e){if(t.land>0)return t.land-=e,t.land<=0||ct.scareT>0||!i.visible?(t.land=0,t.app=0,t.t=.2,t.ty=2.4,t.tx=i.position.x+(Math.random()-.5)*5,t.tz=i.position.z-4,!1):(Ge.localToWorld(As.set(t.lx,t.ly,t.lz)),i.position.copy(As),i.quaternion.copy(Ge.quaternion),t.wings.forEach(([n,s])=>{n.rotation.z=s*.12}),!0);if(!ct.started||!i.visible||ct.scareT>0)return!1;if(t.app)return t.t=3,Ge.localToWorld(As.set(t.lx,t.ly,t.lz)),t.tx=As.x,t.ty=As.y,t.tz=As.z,!(t.app-=e>0?e:0)||t.app<=0?(t.app=0,!1):(i.position.distanceTo(As)<.45&&(t.app=0,t.land=14+Math.random()*18,Xo("dragonfly","Una lib\xE9lula se pos\xF3 en la proa de tu canoa")),!1);if(Math.random()<e*.18&&(Ge.localToWorld(As.set(0,.5,-3)),i.position.distanceTo(As)<7)){let n=0;for(let s of Nr)(s.userData.land>0||s.userData.app>0)&&n++;n<2&&(t.lx=(Math.random()-.5)*.3,t.ly=.62,t.lz=-3.05+Math.random()*.25,t.app=5)}return!1}var Eu=38,up=new Map,Ix=[0,1,2].map(i=>{let t=new Mn(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getY(r),c=e.getZ(r),l=1+(tt(Math.round(o*5)+i*9,Math.round(a*5)+Math.round(c*5))-.5)*.35;e.setXYZ(r,o*l*1.15,a*l*.72,c*l);let h=.7+.4*Fe((a+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=h}t.setAttribute("color",new Kt(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),kS=new _e({gradientMap:Ie,color:12039108,vertexColors:!0,map:Ye("rock")}),GS=new _e({gradientMap:Ie,color:8829066,map:Ye("leaf")}),VS=new Pe({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:me});function WS(i){let t=tt(i,41);if(i<2||t>.34)return null;let e=i*Eu+tt(i,42)*Eu,n=(tt(i,43)*2-1)*be(e)*.4;return{s:e,x:ie(e)+n,z:-e,r:.9+tt(i,44)*1.1,v:Math.floor(tt(i,45)*3),a:tt(i,46)*6.28}}function XS(i){let t=new Qt,e=new K(Ix[i.v],kS);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new K(Ix[(i.v+1)%3],GS);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new K(new pr(1.05,1.55,24).rotateX(-Math.PI/2),VS);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function Lx(i,t){let e=Math.floor((t-25)/Eu),n=Math.floor((t+280)/Eu);for(let[s,r]of up)(s<e||s>n)&&r&&At.remove(r);for(let s=e;s<=n;s++){let r=up.get(s);if(r===void 0){let h=WS(s);r=h?XS(h):null,up.set(s,r)}if(!r)continue;r.parent||At.add(r);let o=F.px-r.userData.x,a=F.pz-r.userData.z,c=r.userData.r*1.2+1.5,l=Math.hypot(o,a);l<c&&l>.01&&(F.px+=o/l*(c-l)*.6,F.pz+=a/l*(c-l)*.6,F.v*=.9,F.t-F.bumpT>1.2&&(ce.bump(),F.bumpT=F.t,ii(r.userData.x+o/l*-r.userData.r,r.userData.z+a/l*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(F.t*1.4+s)}}var qo=230,Tc=new Map,qS=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let a=0;a<=16;a++){let c=a/16;for(let l=0;l<26;l++){let h=l/26*6.283,u=1+(sn(Math.cos(h)*2.2+i*7,Math.sin(h)*2.2+c*3)-.5)*.5+(sn(Math.cos(h)*7+i,c*9)-.5)*.14,f=Math.pow(Math.max(0,1-Math.pow(c,2.2)),.62)*(1+.38*(1-c)*(1-c)),p=c,g=(sn(i*3,c*2)-.5)*.5*c;n.push(Math.cos(h)*f*u+g,p,Math.sin(h)*f*u);let x=sn(Math.cos(h)*5+i,c*14),d=Be(.18,.5,sn(Math.cos(h)*9,c*20+i)),m=.45+.2*c+.12*x;s.push(m*(.75+.2*d),m*(.9+.12*d),m*(.82+.1*d))}}for(let a=0;a<16;a++)for(let c=0;c<26;c++){let l=(c+1)%26,h=a*26+c,u=a*26+l,f=(a+1)*26+c,p=(a+1)*26+l;r.push(h,f,u,u,f,p)}let o=new ue;return o.setAttribute("position",new fe(n,3)),o.setAttribute("color",new fe(s,3)),o.setIndex(r),o.computeVertexNormals(),o}),YS=new Ua({vertexColors:!0,color:12175040,fog:!1}),dp=new Qi({map:jn,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function ZS(i,t){let e=tt(i,60+t),n=44+e*46,s=95+tt(i,61+t)*120,r=i*qo+tt(i,62+t)*qo*.9,o=be(r)+150+tt(i,63+t)*170,a=new Qt,c=new K(qS[(i*2+(t>0?1:0)+4)%4],YS.clone());c.scale.set(n,s,n*(.8+tt(i,64)*.4)),c.position.y=-30,c.rotation.y=tt(i,65)*6,a.add(c);for(let l=0;l<2;l++){let h=new xs(dp);h.scale.set(n*4.5,s*.7,1),h.position.set((l?.4:-.3)*n,s*(.18+.2*l),0),h.renderOrder=2,a.add(h)}return a.position.set(ie(r)+t*o,0,-r),a.userData={s:r},a}var JS=(i,t)=>{let e=i*qo+tt(i,62+t)*qo*.9,n=vr(e);return!!n&&t===n.side&&Math.abs(e-n.s0)<210};function Dx(i){let t=Math.floor((i-260)/qo),e=Math.floor((i+720)/qo);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),o=Tc.get(r);if(o===void 0&&(o=tt(n,70+s)>.18&&!JS(n,s)?ZS(n,s):null,Tc.set(r,o),o&&(o.userData.c=n)),o){o.userData.c=n,o.parent||At.add(o);let a=Math.hypot(o.position.x-F.px,o.position.z-F.pz),c=Fe(Be(60,520,a)*.88+.08);o.children[0].material.color.set(6130818).lerp(su.set(3099218),Se.night*.7).lerp(Ho.copy(Se.hor).lerp(At.fog.color,.5),c)}}for(let[n,s]of Tc)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&At.remove(s)}var fp=[];function $S(i){let t=new Qt,e=Xt(3091244),n=Xt(3102307),s=new K(new pe(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new K(new Le(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let o=new K(new pe(.12,8,6),Xt(14264706));if(o.position.set(0,1.38,.2),t.add(o),i%2){let c=new K(new Oe(.75,.45,10,1,!0),Xt(3158063,{side:me}));c.position.set(0,1.95,.2),t.add(c);let l=new K(new Le(.015,.015,1,4),e);l.position.set(0,1.45,.2),t.add(l)}else{let c=new K(new Oe(.34,.2,10,1,!0),Xt(14332522,{side:me}));c.position.set(0,1.55,.2),t.add(c)}let a=new K(new Le(.02,.02,4,4),Xt(8018502));return a.position.set(.35,1.2,-.9),a.rotation.set(1,0,-.3),t.add(a),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},At.add(t),t}for(let i=0;i<3;i++)fp.push($S(i));function Nx(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(be(e)-9);i.position.set(ie(e)+n,0,-e),i.userData.hd=xn(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}fp.forEach(i=>Nx(i,40+Math.random()*100));function Ux(i,t){for(let e of fp){let n=e.userData;if(e.position.z>F.pz+30||-e.position.z>t+300){Nx(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(F.t*.8+n.ph)*.03,e.rotation.set(Math.sin(F.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(F.t*.7+n.ph)*.02)}}var Iu=8,Jo=44,Au=new Float32Array(Iu*Jo*3),Ru=new Float32Array(Iu*Jo*3),wc=new ue;wc.setAttribute("position",new Kt(Au,3));wc.setAttribute("color",new Kt(Ru,3));var Br=new Mi(wc,new li({size:2.6,map:jn,vertexColors:!0,transparent:!0,blending:kn,depthWrite:!1,depthTest:!1,fog:!1}));Br.renderOrder=9;Br.frustumCulled=!1;Br.visible=!1;At.add(Br);var gp=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],Ac=[];for(let i=0;i<Iu;i++)Ac.push({age:9,x:0,y:0,z:0,c:gp[0],v:new Float32Array(Jo*3)});var pp=0,Tu=!1;function KS(i){let t=Math.round((i-240)/Ei);for(let e of[t-1,t,t+1])if(e>=0&&Ke(e)===2&&Math.abs(rn(e)-i)<230)return!0;return!1}function Fx(){let i=Ac.find(t=>t.age>=3);if(i){i.age=0,i.x=F.px+(Math.random()-.5)*40,i.y=4+Math.random()*5,i.z=F.pz-(55+Math.random()*40),i.c=gp[Math.random()*gp.length|0];for(let t=0;t<Jo;t++){let e=Math.random()*6.283,n=Math.acos(2*Math.random()-1),s=5+Math.random()*4;i.v[t*3]=Math.sin(n)*Math.cos(e)*s,i.v[t*3+1]=Math.cos(n)*s,i.v[t*3+2]=Math.sin(n)*Math.sin(e)*s}try{ce.boom((i.x-F.px)/30)}catch{}}}function Bx(i,t){let e=Tu;Tu=t>.55&&KS(F.dist||-F.pz),Tu&&!e&&Xo("festival","Festival de linternas: la aldea celebra esta noche"),Tu&&(pp-=i,pp<=0&&(pp=1.4+Math.random()*2,Fx(),Math.random()<.35&&setTimeout(Fx,350)));let n=!1;for(let s=0;s<Iu;s++){let r=Ac[s];r.age<3&&(r.age+=i);let o=r.age<3?Math.pow(Math.max(0,1-r.age/2.7),1.5):0;o>0&&(n=!0);for(let a=0;a<Jo;a++){let c=(s*Jo+a)*3,l=r.age;Au[c]=r.x+r.v[a*3]*l*.8,Au[c+1]=r.y+r.v[a*3+1]*l*.8-1.9*l*l,Au[c+2]=r.z+r.v[a*3+2]*l*.8,Ru[c]=r.c[0]*o,Ru[c+1]=r.c[1]*o,Ru[c+2]=r.c[2]*o}}Br.visible=n,n&&(wc.attributes.position.needsUpdate=!0,wc.attributes.color.needsUpdate=!0)}var xp=new nn({transparent:!0,side:Tn,depthWrite:!1,blending:kn,fog:!1,uniforms:{t:{value:0},k:{value:0}},vertexShader:"varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 u;uniform float t,k;void main(){float a=u.x*6.283;float w=sin(a*3.+t*.25+sin(a*7.+t*.4)*1.3)*.5+.5;float band=smoothstep(.15,.55,u.y)*smoothstep(1.,.55,u.y);float f=band*(.3+.7*w)*(.55+.45*sin(a*11.-t*.5));vec3 c=mix(vec3(.2,1.,.6),vec3(.55,.4,1.),smoothstep(.45,.95,u.y));gl_FragColor=vec4(c*f*k*.75,1.);}"}),Fr=new K(new Le(330,330,120,48,1,!0),xp);Fr.frustumCulled=!1;Fr.visible=!1;Fr.renderOrder=-1;At.add(Fr);function Ox(i){let t=Js()===3?Fe(i*1.5-.7,0,1):0;Fr.visible=t>.01,Fr.visible&&(Fr.position.set(F.px,95,F.pz),xp.uniforms.t.value=F.t,xp.uniforms.k.value=t)}var Yo=300,Zo=new ue,Cu=new Float32Array(Yo*3),Hx=[];for(let i=0;i<Yo;i++)Hx.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);Zo.setAttribute("position",new Kt(Cu,3));var jS=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new Ui(i)})(),Pu=new Float32Array(Yo*3),_p=new li({map:jS,alphaTest:.3,color:16777215,vertexColors:!0,size:Un.pet.size,transparent:!0,opacity:.85,depthWrite:!1}),mp=-1,QS=new pt(Un.pet.c),tE=new pt(Hi.pet),wu=new pt;Zo.setAttribute("color",new Kt(Pu,3));var zx=new Mi(Zo,_p);zx.frustumCulled=!1;At.add(zx);function kx(i){for(let t=0;t<Yo;t++){let e=Hx[t];e[1]-=i*Un.pet.fall*(.45+.3*Math.sin(e[3]+F.t)),e[1]<.2&&(e[1]=10+Math.random()*3,e[0]=Math.random()*60-30,e[2]=-Math.random()*60),Cu[t*3]=F.px+e[0]+Math.sin(F.t*.7+e[3])*1.5,Cu[t*3+1]=e[1],Cu[t*3+2]=F.pz+e[2]+10+Math.cos(F.t*.5+e[3])}{let t=Mr(F.dist||-F.pz),e=Math.max(.3*Uo(-F.pz),t);if(Zo.setDrawRange(0,Math.round(Yo*Math.max(Un.pet.base+Un.pet.gain*e,t*.85))),Math.abs(t-mp)>.02||mp<0){mp=t,wu.copy(QS).lerp(tE,Fe(t*1.6));for(let n=0;n<Yo;n++)Pu[n*3]=wu.r,Pu[n*3+1]=wu.g,Pu[n*3+2]=wu.b;Zo.attributes.color.needsUpdate=!0,_p.size=Un.pet.size+(.42-Un.pet.size)*Fe(t*1.6)}}Zo.attributes.position.needsUpdate=!0,_p.opacity=.85*(1-Fe(Se.night,0,1)*.8)}function Gx(i){window.__r3d={fc:(t,e)=>{window.__fc=t?()=>{pn.position.set(t[0],t[1],t[2]),pn.lookAt(e[0],e[1],e[2]),pn.updateMatrixWorld()}:null},LM:zi,lmType:Ke,NL:nc,lmFound:mi,lmMade:si,castleNear:vr,dragonS:Do,casInfo:gf,casLocal:ic,fwB:Ac,fw:Br,cam:pn,crit:{fish:Dr,wbirds:Ur,dfs:Nr,fliers:Wo,liveH:ir,ENC:Ec,get scare(){return ct.scareT}},sim:i,cnt:()=>{let t={};return At.traverse(e=>{if((e.isMesh||e.isSprite||e.isPoints)&&e.visible){let n=e,s=!0;for(;n;){if(!n.visible){s=!1;break}n=n.parent}if(!s)return;let r=(e.isInstancedMesh?"inst":e.isSprite?"sprite":e.isPoints?"pts":"mesh")+":"+(e.material.type||"");t[r]=(t[r]||0)+1}}),t},info:()=>({g:ss.info.memory.geometries,t:ss.info.memory.textures,p:ss.info.programs.length,calls:ss.info.render.calls,tris:ss.info.render.triangles,lm:si.size,ch:At.children.length}),cineJump:t=>{ct.cine&&(ct.cine.t=t)},cineOn:()=>!!ct.cine,bambooAt:No,gardenAt:Mr,forestAt:Uo,lmPos:rn,wbirds:Ur,massifs:Tc,birds:wx,dfs:Nr,fish:Dr,W:ln,mistAt:Gh,setCam:Lr,P:F,lanternPos:iu,setTod:t=>{ct.tod=t},scene:At,tp:(t,e=0,n=0)=>{F.pz=-t,F.px=ie(t)+n,F.psi=xn(t)+e},sideOf:t=>tt(t,9)>.5?1:-1,get tod(){return ct.tod}}}var Ko=performance.now();T0();w0();function yp(i,t){if(t||requestAnimationFrame(yp),PZ.on&&!t){Ko=i;return}let e=Math.max(0,Math.min(.05,(i-Ko)/1e3));$o.tick(Math.max(0,(i-Ko)/1e3)),Ko=i,F.t+=e;let n=-F.pz;Ng(e,n);let s=_g();kx(e),yg(),vg(e),hx(e,s),ox(e),window.__fc&&window.__fc(),ct.started&&!$o.photo&&(ct.tod=(ct.tod+e/900)%1),U0(F.px,F.pz),Dg(e,n),lg(F.px,F.pz,gx),Af.value=F.t,pi.position.set(F.px,0,F.pz),pi.material.uniforms.t.value=F.t;let r=Se.night;Qh.intensity=ct.glowK*3.2,jh.material.opacity=.3+.35*ct.glowK,mc.material.color.set(16769704),Lx(e,F.dist||n),Ux(e,F.dist||n),Dx(F.dist||n),dp.color.copy(At.fog.color).multiplyScalar(1.05),Px(e,F.dist||n),Tx(e,F.dist||n),Rx(e,F.dist||n),op.opacity=.55+.15*Math.sin(F.t*.8),Sc.position.y=Math.sin(F.t*.9)*.01,Ag(F.t,F.dist||n),fx(F.dist||n),Rg(),Mg(e),Bx(e,r),Ox(r),ug(r),ce.update(F.v+Math.abs(F.steer)*1.5,r,F.t),wg(e,n),$o.camAdjust(),$o.update(e,F.dist||n),t||$o.render()}var $o=C0({R:ss,scene:At,cam:pn,canvas:vs,el:We,toast:ri,P:F,LM:zi,lmFound:mi,lmPos:rn,LMS:Ei,mkLantern:zf,cx:ie,hw:be,lmType:Ke,A:ce,hash:tt,spawnRipple:ii,SEAS:zh,seasonIdx:Js,started:()=>ct.started,getTod:()=>ct.tod,setTod:i=>{ct.tod=i},todName:Xh,getCount:()=>ct.count,setCount:i=>{ct.count=i;try{localStorage.setItem("rio3d-lant",String(i))}catch{}We("n").textContent=i},glowK:()=>ct.glowK,restart:()=>{ct.cine=null,ct.cineW=0;try{localStorage.removeItem("rio3d-pos")}catch{}Vh(0),F.v=2.6,F.dist=0,F.pitch=0,ct.savedS=0,ri("De vuelta al inicio del r\xEDo")},setCam:Lr,getCam:()=>ct.camMode,savePos:gc,nearLM:i=>{let t=Math.round((i-240)/Ei);for(let e of[t,t-1,t+1])if(Math.abs(rn(e)-i)<130&&e>=0)return zi[Ke(e)];return""}});ct.X=$o;We("n").textContent=ct.count;PZ.ctx=()=>ce.ctx;PZ.started=()=>ct.started;requestAnimationFrame(yp);{let i=We("cap"),t=0,e=()=>{try{return localStorage.getItem("rio3d-subs")==="1"}catch{return!1}};ce.onCap=n=>{!e()||!i||(i.textContent="["+Yn(n)+"]",i.style.opacity=1,clearTimeout(t),t=setTimeout(()=>i.style.opacity=0,2600))};try{let n=localStorage.getItem("rio3d-hand");(n==="r"||n==="l")&&document.body.classList.add("hand-"+n)}catch{}R0()}var eE=(i,t,e)=>{window.__lastT=window.__lastT||Ko;for(let n=0;n<i;n++)window.__lastT+=t*1e3,e&&e(n),yp(window.__lastT,!0);Ko=window.__lastT};Gx(eE);try{window.UX.mood()}catch{}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
