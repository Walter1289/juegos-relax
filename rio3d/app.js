(()=>{(function(){if(window.UX)return;let i=["es","en","ja"],t={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},e={get(x,d){try{let m=localStorage.getItem(x);return m===null?d:m}catch{return d}},set(x,d){try{localStorage.setItem(x,d)}catch{}}},n=e.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,o=[],a=window.UX={lang:n,onLang:null,add(x){x.forEach(d=>r.set(d[0],d))},rx(x){x.forEach(d=>o.push(d))},tr(x){if(n==="es"||typeof x!="string")return x;let d=x.trim();if(!d)return x;let m=r.get(d);if(m)return x.replace(d,m[s]);for(let[y,b]of o){let _=d.match(y);if(_)return x.replace(d,b(_,n==="en"?1:2,a.tr))}return x},init(){if(n==="es")return;document.documentElement.lang=n;let x=d=>{if(d.nodeType===3){let b=a.tr(d.nodeValue);b!==d.nodeValue&&(d.nodeValue=b);return}if(d.nodeType!==1||d.tagName==="SCRIPT"||d.tagName==="STYLE")return;let m=d.getAttribute&&d.getAttribute("aria-label");if(m){let b=a.tr(m);b!==m&&d.setAttribute("aria-label",b)}let y=d.getAttribute&&d.getAttribute("title");if(y){let b=a.tr(y);b!==y&&d.setAttribute("title",b)}d.childNodes.forEach(x)};x(document.body),new MutationObserver(d=>{for(let m of d)m.type==="characterData"?x(m.target):m.addedNodes.forEach(x)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(x){if(e.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(x);return}if(!a._sw){let d=document.createElement("label");d.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let m=document.createElement("input");m.type="checkbox",m.setAttribute("switch",""),d.appendChild(m),document.body.appendChild(d),a._sw=d}a._sw.click()}catch{}},subsOn:()=>e.get("rio3d-subs","0")==="1",cap(x,d){if(!a.subsOn())return;let m=performance.now(),y=a._cl||(a._cl={});if(y[x]&&m-y[x]<(d||9e3))return;y[x]=m;let b=document.getElementById("uxcap");b||(b=document.createElement("div"),b.id="uxcap",b.setAttribute("aria-live","polite"),b.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(b)),b.textContent="["+a.tr(x)+"]",b.style.opacity=1,clearTimeout(a._ct),a._ct=setTimeout(()=>b.style.opacity=0,2600)},btns(x,d){d=d||{};let m=(I,D)=>{let C=document.createElement("button");return C.type="button",C.id=I,C.className=x||"",C.onclick=D,C},y=[],b=m("uxLang",()=>{let I=i[(i.indexOf(n)+1)%3];e.set("rio3d-lang",I);try{a.onLang&&a.onLang()}catch{}location.reload()});b.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+t[n],y.push(b);let _=m("uxSubs",()=>{e.set("rio3d-subs",a.subsOn()?"0":"1"),_.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});_.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",y.push(_);let S=m("uxHap",()=>{let I=e.get("rio3d-hap","1")==="1";e.set("rio3d-hap",I?"0":"1"),S.textContent=I?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",I||a.hap(15)});if(S.textContent=e.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",y.push(S),d.hand){let I={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},D=["0","r","l"],C=O=>{document.body.classList.remove("hand-r","hand-l"),O!=="0"&&document.body.classList.add("hand-"+O)},U=e.get("rio3d-hand","0");I[U]||(U="0"),C(U);let G=m("uxHand",()=>{U=D[(D.indexOf(U)+1)%3],e.set("rio3d-hand",U),C(U),G.textContent=I[U]});G.textContent=I[U],y.push(G)}let M=m("uxVol",()=>{let I=["1",".7",".4"],D=I.indexOf(String(a.api.vol()).replace("0.","."));a.api.setVol(I[(D+1)%3]),M.textContent=w()}),w=()=>l("Volumen: ","Volume: ","\u97F3\u91CF: ")+Math.round(a.api.vol()*100)+" %";M.textContent=w(),y.push(M);let v=m("uxSoft",()=>{a.api.setSoft(!a.api.soft()),v.textContent=T()}),T=()=>a.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");v.textContent=T(),y.push(v);let R=m("uxSleep",()=>{let I=[0,15,30,45];a.api.sleep(I[(I.indexOf(a.api.sleepMin())+1)%4]),R.textContent=P()}),P=()=>a.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+a.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(R.textContent=P(),a._sb=()=>{R.textContent=P()},y.push(R),d.wear){let I=m("uxWear",()=>{e.set("ux-wear",e.get("ux-wear","0")==="1"?"0":"1"),I.textContent=D()}),D=()=>e.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");I.textContent=D(),y.push(I)}return y},ask(x,d){let m=document.createElement("div");m.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let y=document.createElement("div");y.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let b=document.createElement("p");b.style.margin="0 0 14px",b.textContent=a.tr(x),y.appendChild(b);let _=(S,M)=>{let w=document.createElement("button");return w.type="button",w.textContent=S,w.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",w.onclick=()=>{m.remove(),M&&M()},w};y.appendChild(_(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),y.appendChild(_(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),d)),m.appendChild(y),document.body.appendChild(m)}},l=(x,d,m)=>n==="en"?d:n==="ja"?m:x,c={vol:e.get("ux-vol","1"),soft:e.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};a.quiet=!1;let h=()=>{for(let x of c.nodes)try{let d=x.c.currentTime;x.lp.frequency.setTargetAtTime(c.soft?2800:22e3,d,.1),x.g.gain.setTargetAtTime(+c.vol*c.k,d,.1)}catch{}};a.out=(x,d)=>{let m=x.createBiquadFilter();m.type="lowpass",m.frequency.value=c.soft?2800:22e3,m.Q.value=.5;let y=x.createGain();return y.gain.value=+c.vol*c.k,d.connect(m),m.connect(y),y.connect(x.destination),c.nodes.push({c:x,lp:m,g:y}),y},a.pinkSrc=(x,d)=>{let m=x._pink;if(!m){let _=x.sampleRate,S=Math.floor(_*12),M=Math.floor(_*1.5),w=S+M,v=new Float32Array(w),T=0,R=0,P=0,I=0,D=0,C=0,U=0;for(let O=0;O<w;O++){let $=Math.random()*2-1;T=.99886*T+$*.0555179,R=.99332*R+$*.0750759,P=.969*P+$*.153852,I=.8665*I+$*.3104856,D=.55*D+$*.5329522,C=-.7616*C-$*.016898,v[O]=(T+R+P+I+D+C+U+$*.5362)*.2215*.5,U=$*.115926}m=x.createBuffer(1,S,_);let G=m.getChannelData(0);for(let O=0;O<S;O++)G[O]=v[O];for(let O=0;O<M;O++){let $=O/M*Math.PI/2;G[O]=v[O]*Math.sin($)+v[S+O]*Math.cos($)}x._pink=m}let y=x.createBufferSource();y.buffer=m,y.loop=!0;let b=x.createGain();return b.gain.value=d||1,y.connect(b),b.start=(_,S)=>y.start(_||0,S||0),b.stop=_=>y.stop(_),b},a.api={soft:()=>c.soft,setSoft(x){c.soft=!!x,e.set("ux-soft",x?"1":"0"),h()},vol:()=>+c.vol,setVol(x){c.vol=String(x),e.set("ux-vol",c.vol),h()},sleepMin:()=>c.min,sleep(x){c.min=x,c.end=x?Date.now()+x*6e4:0,c.k=1,a.quiet=!1,c.ov&&(c.ov.style.opacity=0),h()}},setInterval(()=>{if(!c.end)return;let x=(c.end-Date.now())/1e3;if(!c.ov){let d=document.createElement("div");d.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(d),c.ov=d}if(x<=0){c.end=0,c.min=0,c.k=0,h(),c.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{c.k=1,a.quiet=!1,h(),c.ov.style.opacity=0,a._sb&&a._sb()},1500);return}x<300&&(a.quiet=!0,c.k=Math.pow(x/300,2),c.ov.style.opacity=(1-x/300)*.6,h())},1e3);{let x=0,d=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(x+=5,x>=d)){d+=1800;let m=document.getElementById("uxrest");m||(m=document.createElement("div"),m.id="uxrest",m.setAttribute("aria-live","polite"),m.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(m)),m.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),m.style.opacity=1,clearTimeout(a._rt),a._rt=setTimeout(()=>m.style.opacity=0,7e3)}},5e3)}a.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),a.add([["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function f(x){let d=document.createElement("div");d.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let m=document.createElement("div");m.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let y=document.createElement("div"),b=document.createElement("div");b.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),b.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let _=document.createElement("button");_.type="button",_.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),_.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",d.append(b,m,y,_),document.body.appendChild(d);let S=0,M=!0,w,v=R=>{M&&(M=!1,clearTimeout(w),d.remove(),x&&x(R))};_.onclick=()=>v(!1);let T=()=>{if(M){if(S>=5)return v(!0);S++,y.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),m.style.transition="transform 4s ease-in-out",m.style.transform="scale(1)",a.hap(8),w=setTimeout(()=>{M&&(y.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),m.style.transition="transform 6s ease-in-out",m.style.transform="scale(.55)",w=setTimeout(T,6e3))},4e3)}};T()}a.say=x=>{let d=document.getElementById("uxsay");d||(d=document.createElement("div"),d.id="uxsay",d.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(d)),d.textContent=x,d.style.opacity=1,clearTimeout(a._st),a._st=setTimeout(()=>d.style.opacity=0,4200)},a.breathe=f,a.mood=()=>p();function p(){let x=document.getElementById("go");if(!x||document.getElementById("uxmood"))return;let d=document.createElement("div");d.id="uxmood",d.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let m=document.createElement("div");m.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),m.style.cssText="font:600 .95rem system-ui;opacity:.9";let y=document.createElement("div");y.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let b=document.createElement("div");b.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"),b.style.cssText="font:400 .72rem system-ui;opacity:.6";let _=null,S={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([M,w,v,T])=>{let R=document.createElement("button");R.type="button",R.textContent=l(w,v,T),R.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",R.onclick=()=>{_=_===M?null:M;for(let P in S)S[P].style.borderColor=P===_?"#ffc77a":"#5a609a",S[P].style.background=P===_?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";a.hap(6)},S[M]=R,y.appendChild(R)}),d.append(m,y,b),x.parentNode.insertBefore(d,x),x.addEventListener("click",()=>{e.set("ux-mood",_||""),_==="tired"&&(a.api.setSoft(!0),+a.api.vol()>.7&&a.api.setVol(".7"),setTimeout(()=>{try{a.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),_==="rest"&&setTimeout(()=>f(),600),_==="think"&&setTimeout(()=>{try{a.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let g=a.init;a.init=function(){g.apply(this,arguments);try{p()}catch{}}})();var oy=()=>{try{return localStorage.getItem("rio3d-hap")!=="0"}catch{return!0}},Ou=null;function or(i){if(oy())try{if(navigator.vibrate){navigator.vibrate(i);return}if(!Ou){let t=document.createElement("label");t.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),t.appendChild(e),document.body.appendChild(t),Ou=t}Ou.click()}catch{}}var Hu=(i,t,e)=>Math.max(t,Math.min(e,i)),qi=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],en=(i,t)=>i+Math.random()*(t-i),ae={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(or(9),!this.ok())return;this.cap("Nota de linterna");let t=this.ctx.currentTime;this.pluck(qi[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(qi[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;this.cap("Salpicadura");let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},vol:1,ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6*this.vol,window.UX?UX.out(t,e):e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let T=0;T<r.length;T++)r[T]=Math.random()*2-1;this.nbuf=s;let o=Math.floor(t.sampleRate*2.8),a=t.createBuffer(2,o,t.sampleRate);for(let T=0;T<2;T++){let R=a.getChannelData(T);for(let P=0;P<o;P++)R[P]=(Math.random()*2-1)*Math.pow(1-P/o,2.6)}let l=t.createConvolver();l.buffer=a;let c=t.createGain();c.gain.value=.38,n.connect(l),l.connect(c),c.connect(e);let h=this.noise(0,.37),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=650;let f=t.createGain();f.gain.value=.07;let p=t.createOscillator();p.frequency.value=.09;let g=t.createGain();g.gain.value=.04,p.connect(g),g.connect(f.gain),p.start(),h.connect(u),u.connect(f),f.connect(e);let x=this.noise(0,1.5),d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=2200,d.Q.value=.7;let m=t.createGain();m.gain.value=.02,x.connect(d),d.connect(m),m.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(T=>{let R=this.panner(T*4,0,0,2,.6);R.connect(e),this.bk[T]=R,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([P,I,D,C],U)=>{let G=this.noise(Math.random()*1.8,P<800?.71:P<1900?1.07:1.52),O=t.createBiquadFilter();O.type="bandpass",O.frequency.value=P,O.Q.value=I;let $=t.createGain();$.gain.value=C;let H=t.createOscillator(),q=t.createGain();H.frequency.value=D*(T>0?1.13:.91),q.gain.value=C*.7,H.connect(q),q.connect($.gain),H.start(),G.connect(O),O.connect($),$.connect(R)})});let y=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let T=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,R=t.currentTime,P=t.createOscillator(),I=t.createGain(),D=en(450,1100),C=this.panner(this.bkx[T],0,en(-4,2),2,.6,!0);C.connect(e),P.frequency.setValueAtTime(D,R),P.frequency.exponentialRampToValueAtTime(D*en(1.4,2),R+.07),I.gain.setValueAtTime(0,R),I.gain.linearRampToValueAtTime(en(.01,.026),R+.012),I.gain.exponentialRampToValueAtTime(1e-4,R+.1),P.connect(I),I.connect(C),P.start(R),P.stop(R+.12)}setTimeout(y,en(90,260))}};y();let b=this.noise(Math.random()*1.5,1.21),_=t.createBiquadFilter();_.type="highpass",_.frequency.value=380;let S=t.createBiquadFilter();S.type="lowpass",S.frequency.value=4200;let M=t.createGain();M.gain.value=0;let w=this.panner(0,0,-30,2,.5);b.connect(_),_.connect(S),S.connect(M),M.connect(w),w.connect(e),this.wfG=M,this.wfP=w,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([T,R])=>{let P=t.createStereoPanner();P.pan.value=T,P.connect(e);let I=this.noise(Math.random()*1.8,2.94),D=t.createBiquadFilter();D.type="highpass",D.frequency.value=R;let C=t.createGain();C.gain.value=0,I.connect(D),D.connect(C),C.connect(P),this.rgs.push([C,.07]);let U=this.noise(Math.random()*1.8,1.29),G=t.createBiquadFilter();G.type="bandpass",G.frequency.value=1500,G.Q.value=.6;let O=t.createGain();O.gain.value=0,U.connect(G),G.connect(O),O.connect(P),this.rgs.push([O,.035])}),this.rainLvl=0;let v=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let T=t.currentTime,R=t.createOscillator(),P=t.createGain(),I=this.panner(en(-4,4),en(0,1),en(-4,1),1.5,.7,!0);I.connect(e),R.frequency.setValueAtTime(en(1800,3200),T),R.frequency.exponentialRampToValueAtTime(en(900,1400),T+.05),P.gain.setValueAtTime(0,T),P.gain.linearRampToValueAtTime(.02*this.rainLvl,T+.004),P.gain.exponentialRampToValueAtTime(1e-4,T+.07),R.connect(P),P.connect(I),R.start(T),R.stop(T+.09)}setTimeout(v,en(70,260))}};v(),this.music(),this.padInit()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;i>.5&&this.cap("Lluvia suave"),this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let o=e.createOscillator(),a=e.createGain();o.type="sine",o.frequency.setValueAtTime((i?196:262)*s,n),o.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r,n+t)):(a.gain.setValueAtTime(r,n),a.gain.linearRampToValueAtTime(0,n+t)),o.connect(a),a.connect(this.bus),o.start(n),o.stop(n+t+.1)})},noise(i,t){let e=this.ctx;if(window.UX&&UX.pinkSrc){let s=UX.pinkSrc(e,t);return s.start(0,(i||0)*3),s}let n=e.createBufferSource();return n.buffer=this.nbuf,n.loop=!0,n.start(0,i||0),n},panner(i,t,e,n,s,r){let o=this.ctx.createPanner();return o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=n||2,o.rolloffFactor=s==null?.6:s,o.positionX?(o.positionX.value=i,o.positionY.value=t,o.positionZ.value=e):o.setPosition(i,t,e),o},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));r>.45&&this.cap("Cascada cercana"),this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,o=e||r.currentTime,a=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([l,c],h)=>{let u=r.createOscillator(),f=r.createGain();u.type=h?"sine":"triangle",u.frequency.value=i*l,f.gain.setValueAtTime(0,o),f.gain.linearRampToValueAtTime(t*c,o+.01),f.gain.exponentialRampToValueAtTime(1e-4,o+(h?1.1:2)),u.connect(f),f.connect(a),u.start(o),u.stop(o+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r),l=o.createOscillator(),c=o.createOscillator(),h=o.createGain(),u=o.createGain();l.type="sine",c.type="triangle",l.frequency.setValueAtTime(i*.96,t),l.frequency.exponentialRampToValueAtTime(i,t+.18),c.frequency.setValueAtTime(i*2*.96,t),c.frequency.exponentialRampToValueAtTime(i*2,t+.18);let f=o.createOscillator(),p=o.createGain();f.frequency.value=4.8,p.gain.setValueAtTime(0,t),p.gain.linearRampToValueAtTime(i*.012,t+e*.6),f.connect(p),p.connect(l.frequency),f.start(t),f.stop(t+e+.5),u.gain.value=.1,c.connect(u),u.connect(h),l.connect(h),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(n,t+.35),h.gain.setValueAtTime(n*.85,t+e*.7),h.gain.linearRampToValueAtTime(0,t+e);let g=o.createBufferSource();g.buffer=this.nbuf,g.loop=!0;let x=o.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let d=o.createGain();d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(n*.5,t+.2),d.gain.linearRampToValueAtTime(0,t+e),g.connect(x),x.connect(d),d.connect(a),g.start(t),g.stop(t+e+.1),h.connect(a),l.start(t),c.start(t),l.stop(t+e+.1),c.stop(t+e+.1)},drum(i,t,e){if(!this.ok()||window.UX&&UX.quiet)return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",t*=.42,s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=700,r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(t,i+.04),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(o),o.connect(this.bus),s.start(i),s.stop(i+1);let a=n.createBufferSource();a.buffer=this.nbuf;let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=500;let c=n.createGain();c.gain.setValueAtTime(t*.5,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.1),a.connect(l),l.connect(c),c.connect(this.bus),a.start(i,Math.random()),a.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([l,c,h])=>{let u=o.createOscillator(),f=o.createGain();u.type="sine",u.frequency.value=i*l;let p=(n?7:3)*h;f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(e*c,t+.005),f.gain.exponentialRampToValueAtTime(1e-4,t+p),u.connect(f),f.connect(a),u.start(t),u.stop(t+p+.1)})},next(i,t,e){this.idx=Hu(this.idx+Math.floor(Math.random()*4)-1,3,qi.length-1),this.bell(qi[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),o=t.currentTime;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+.4),n.connect(s),s.connect(r),r.connect(e),n.start(o,Math.random()),n.stop(o+.45)},bump(i=.6,t=0){if(or(i>.5?22:12),!this.ok())return;this.cap("Golpe suave de la canoa");let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),o=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),o.gain.setValueAtTime(.16*i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(o),o.connect(s),r.start(n),r.stop(n+.35)},discover(){if(or([14,70,14]),!this.ok())return;this.cap("Nota de linterna");let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(qi[t],.12,i+e*.2)),this.bell(qi[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([l,c],h)=>{let u=i.createOscillator(),f=i.createGain(),p=i.createOscillator(),g=i.createGain();u.type="sine",u.frequency.value=l,f.gain.value=c,p.frequency.value=.05+h*.03,g.gain.value=c*.6,p.connect(g),g.connect(f.gain),u.connect(f),f.connect(this.bus),u.start(),p.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let l=i.currentTime+.05,c=t%8;(t>>3)%4===3?c===0&&this.drum(l,.12,.9):c===0?(this.drum(l,.34,1),this.cap("Tambor lejano")):c===3?this.drum(l,.12,1.35):c===5?this.drum(l,.16,1.15):c===6&&Math.random()<.4&&this.drum(l,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let l=i.currentTime+.2,c=0;if(this.ok()){this.cap("Flauta shakuhachi");let h=2+Math.floor(Math.random()*3),u=en(-3,3);for(let f=0;f<h;f++){n=Hu(n+Math.floor(Math.random()*5)-2,0,7);let p=en(1.8,3.4);this.flute(qi[n],l,p,.06,u+en(-.3,.3),-2.5),l+=p*.88,c+=p*.88}}setTimeout(s,(c+en(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){this.cap("Campanillas");let l=i.currentTime+.05,c=qi[5+Math.floor(Math.random()*5)];this.bell(c,l,.045,!1,en(-5,5),en(-5,-1)),Math.random()<.5&&this.bell(qi[5+Math.floor(Math.random()*5)],l+en(.18,.4),.035,!1,en(-5,5),en(-5,-1))}setTimeout(r,en(3500,8e3))}};setTimeout(r,2500);let o=()=>{if(this.ctx){if(this.ok()){this.cap("Koto");let l=i.currentTime+.05,c=Math.floor(Math.random()*6),h=en(-4,4);for(let u=0;u<3;u++)this.pluck(qi[Hu(c+[0,2,1][u],0,9)],.06,l+u*.28,h,-2)}setTimeout(o,en(14e3,24e3))}};setTimeout(o,9e3);let a=()=>{this.ctx&&(this.ok()&&(this.cap("Campana de templo"),this.bell(146.83,i.currentTime+.05,.08,!0,en(-6,6),-8)),setTimeout(a,en(35e3,55e3)))};setTimeout(a,16e3)},padInit(){let i=this.ctx,t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=800,t.Q.value=.4;let e=i.createGain();e.gain.value=0,t.connect(e),e.connect(this.bus);let n=[];for(let r=0;r<4;r++){let o=i.createOscillator(),a=i.createOscillator(),l=i.createGain(),c=i.createGain(),h=i.createOscillator(),u=i.createGain();o.type="sine",a.type="triangle",a.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,h.frequency.value=.04+r*.017,u.gain.value=.25,h.connect(u),u.connect(l.gain),o.connect(l),a.connect(c),l.connect(t),c.connect(t),o.start(),a.start(),h.start(),n.push([o,a])}this.pad={f:t,pg:e,vs:n,ch:0,t0:0},this.mood={el:.5,lm:-1,sn:0},this.padChord(!0);let s=()=>{this.ctx&&(this.ok()&&this.padChord(),setTimeout(s,15e3+Math.random()*4e3))};setTimeout(s,9e3)},setMood(i,t,e){this.mood={el:i,lm:t,sn:e},this.pad&&this.ok()&&this.padFilter()},padFilter(){let i=this.mood,t=this.pad.f,e=this.ctx.currentTime,n=Math.max(0,Math.min(1,i.el*1.6)),s=420+n*900,r=.045+(1-n)*.012;i.lm===6&&(s+=500),i.lm===5&&(s-=120,r*=1.2),i.lm===2&&(r*=1.1),t.frequency.setTargetAtTime(s,e,2.5),this.pad.pg.gain.setTargetAtTime(this.muted?0:r*this.vol,e,2)},padChord(i){let t=this.ctx,e=this.mood,n=this.pad,s=t.currentTime,r=146.83,o=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,14,15]],a=[[0,7,12,15],[-4,3,7,12],[0,3,7,12],[-4,0,7,15]],l=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],c=e.el>.35?o:e.el>-.05?a:l;n.ch=(n.ch+1+(Math.random()<.3?1:0))%c.length;let h=c[n.ch].slice();(e.lm===3||e.lm===7)&&(h[3]=h[3]+12),e.lm===8&&(h=[h[0],h[0]+7,h[0]+14,h[0]+19]),e.lm===5&&(h=[-12,-5,0,7]),e.lm===6&&(h=h.map((f,p)=>p>1?f+12:f));let u=e.sn===3?-2:e.sn===2?-1:0;n.vs.forEach(([f,p],g)=>{let x=r*Math.pow(2,(h[g]+u)/12);f.frequency.setTargetAtTime(x,s,i?.01:3.2),p.frequency.setTargetAtTime(x*1.002,s,i?.01:3.2)}),this.padFilter()},boom(i){if(!this.ok()||window.UX&&UX.quiet)return;this.cap("Fuegos artificiales");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*5,-9),s=t.createOscillator(),r=t.createGain();s.frequency.setValueAtTime(95,e),s.frequency.exponentialRampToValueAtTime(38,e+.5),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.07,e+.03),r.gain.exponentialRampToValueAtTime(1e-4,e+.7),s.connect(r),r.connect(n),s.start(e),s.stop(e+.8);let o=t.createBufferSource();o.buffer=this.nbuf;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let l=t.createGain();l.gain.setValueAtTime(0,e+.5),l.gain.linearRampToValueAtTime(.035,e+.55),l.gain.exponentialRampToValueAtTime(1e-4,e+1.6),o.connect(a),a.connect(l),l.connect(n),o.start(e+.5,Math.random()),o.stop(e+1.7),or(8)},roar(){if(!this.ok()||window.UX&&UX.quiet)return;or([30,60,30,90,40]),this.cap("Rugido del drag\xF3n");let i=this.ctx,t=i.currentTime,e=this.dest(0,-12),n=i.createOscillator(),s=i.createOscillator(),r=i.createGain(),o=i.createBiquadFilter();n.type="sawtooth",s.type="square",n.frequency.setValueAtTime(70,t),n.frequency.linearRampToValueAtTime(110,t+.5),n.frequency.exponentialRampToValueAtTime(48,t+2.2),s.frequency.setValueAtTime(35,t),s.frequency.exponentialRampToValueAtTime(24,t+2.2),o.type="lowpass",o.frequency.setValueAtTime(260,t),o.frequency.linearRampToValueAtTime(900,t+.5),o.frequency.exponentialRampToValueAtTime(140,t+2.2),o.Q.value=4,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.1,t+.3),r.gain.setValueAtTime(.1,t+.9),r.gain.exponentialRampToValueAtTime(1e-4,t+2.4),n.connect(o),s.connect(o),o.connect(r),r.connect(e),n.start(t),s.start(t),n.stop(t+2.5),s.stop(t+2.5);let a=i.createBufferSource();a.buffer=this.nbuf;let l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=420,l.Q.value=1.2;let c=i.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.05,t+.3),c.gain.exponentialRampToValueAtTime(1e-4,t+1.8),a.connect(l),l.connect(c),c.connect(e),a.start(t,Math.random()),a.stop(t+2)},onCap:null,cap(i){if(!this.onCap)return;let t=performance.now(),e=this._cl||(this._cl={}),n={"Golpe suave de la canoa":1500,"Fuegos artificiales":1500,Salpicadura:9e3,"Lluvia suave":4e4,"Cascada cercana":3e4}[i]||9e3;e[i]&&t-e[i]<n||(e[i]=t,this.onCap(i))},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6*this.vol,this.ctx.currentTime,.05),this.pad&&this.padFilter()},quack(i){if(!this.ok())return;this.cap("Cuac de pato");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3);[[0,420,300],[.14,360,250]].forEach(([s,r,o])=>{let a=t.createOscillator(),l=t.createBiquadFilter(),c=t.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,e+s),a.frequency.exponentialRampToValueAtTime(o,e+s+.1),l.type="bandpass",l.frequency.value=1e3,l.Q.value=2.5,c.gain.setValueAtTime(0,e+s),c.gain.linearRampToValueAtTime(.03,e+s+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+s+.12),a.connect(l),l.connect(c),c.connect(n),a.start(e+s),a.stop(e+s+.14)})},flap(i){if(or([6,40,6,40,6]),!this.ok())return;this.cap("Aleteo de garza");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3),s=t.createBufferSource();s.buffer=this.nbuf;let r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.8;let o=t.createGain();o.gain.setValueAtTime(0,e);for(let a=0;a<5;a++)o.gain.linearRampToValueAtTime(.05,e+a*.16+.04),o.gain.linearRampToValueAtTime(.006,e+a*.16+.13);o.gain.linearRampToValueAtTime(0,e+.95),s.connect(r),r.connect(o),o.connect(n),s.start(e,Math.random()),s.stop(e+1)},setVol(i){this.vol=i,this.master&&!this.muted&&this.master.gain.setTargetAtTime(.6*i,this.ctx.currentTime,.1),this.pad&&this.padFilter()}};var dm=0,Ad=1,fm=2;var Xa=1,pm=2,wo=3,Xs=0,Tn=1,me=2,es=0,Bi=1,kn=2,Rd=3,Cd=4,mm=5;var xr=100,gm=101,xm=102,ym=103,_m=104,vm=200,Mm=201,bm=202,Sm=203,Pd=204,Id=205,Em=206,Tm=207,wm=208,Am=209,Rm=210,Cm=211,Pm=212,Im=213,Lm=214,hc=0,uc=1,dc=2,ho=3,fc=4,pc=5,mc=6,gc=7,Jc=0,Dm=1,Nm=2,Oi=0,Ld=1,Dd=2,Nd=3,Ud=4,Fd=5,Bd=6,Od=7;var Hd=300,Ys=301,yr=302,$c=303,Kc=304,Ya=306,uo=1e3,Zi=1001,xc=1002,vn=1003,Um=1004;var Za=1005;var Dn=1006,jc=1007;var Zs=1008;var ei=1009,zd=1010,kd=1011,Ao=1012,Qc=1013,Hi=1014,Si=1015,pi=1016,th=1017,eh=1018,Ro=1020,Gd=35902,Vd=35899,Wd=1021,qd=1022,Ei=1023,$i=1026,Js=1027,Co=1028,nh=1029,$s=1030,ih=1031;var sh=1033,Ja=33776,$a=33777,Ka=33778,ja=33779,rh=35840,oh=35841,ah=35842,lh=35843,ch=36196,hh=37492,uh=37496,dh=37488,fh=37489,Qa=37490,ph=37491,mh=37808,gh=37809,xh=37810,yh=37811,_h=37812,vh=37813,Mh=37814,bh=37815,Sh=37816,Eh=37817,Th=37818,wh=37819,Ah=37820,Rh=37821,Ch=36492,Ph=36494,Ih=36495,Lh=36283,Dh=36284,tl=36285,Nh=36286;var ga=2300,yc=2301,lc=2302,pd=2303,md=2400,gd=2401,xd=2402;var Fm=3200;var el=0,Bm=1,vs="",Ln="srgb",xa="srgb-linear",ya="linear",ke="srgb";var cc=7680;var Om=519,Hm=512,zm=513,km=514,Uh=515,Gm=516,Vm=517,Fh=518,Wm=519,Xd=35044;var Yd="300 es",Di=2e3,fo=2001;function ay(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ly(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qm(){let i=_a("canvas");return i.style.display="block",i}var Cp={},po=null;function va(...i){let t="THREE."+i.shift();po?po("log",t,...i):console.log(t,...i)}function Xm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Xm(i);let t="THREE."+i.shift();if(po)po("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Xm(i);let t="THREE."+i.shift();if(po)po("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ur(...i){let t=i.join(" ");t in Cp||(Cp[t]=!0,jt(...i))}function Ym(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zm={[hc]:uc,[dc]:mc,[fc]:gc,[ho]:pc,[uc]:hc,[mc]:dc,[gc]:fc,[pc]:ho},Ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zu=Math.PI/180,_c=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function cy(i,t){return(i%t+t)%t}function ku(i,t,e){return(1-e)*i+e*t}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qd=class Qd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qd.prototype.isVector2=!0;var ut=Qd,fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==p||h!==g){let d=l*f+c*p+h*g+u*x;d<0&&(f=-f,p=-p,g=-g,x=-x,d=-d);let m=1-a;if(d<.9995){let y=Math.acos(d),b=Math.sin(y);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b,l=l*m+f*a,c=c*m+p*a,h=h*m+g*a,u=u*m+x*a}else{l=l*m+f*a,c=c*m+p*a,h=h*m+g*a,u=u*m+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tf=class tf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gu.copy(this).projectOnVector(t),this.sub(Gu)}reflect(t){return this.sub(Gu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tf.prototype.isVector3=!0;var N=tf,Gu=new N,Pp=new fn,ef=class ef{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],d=s[3],m=s[6],y=s[1],b=s[4],_=s[7],S=s[2],M=s[5],w=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*d+a*b+l*M,r[6]=o*m+a*_+l*w,r[1]=c*x+h*y+u*S,r[4]=c*d+h*b+u*M,r[7]=c*m+h*_+u*w,r[2]=f*x+p*y+g*S,r[5]=f*d+p*b+g*M,r[8]=f*m+p*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vu.makeScale(t,e)),this}rotate(t){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vu.makeRotation(-t)),this}translate(t,e){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ef.prototype.isMatrix3=!0;var ce=ef,Vu=new ce,Ip=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lp=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){let i={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ke&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(s.r=co(s.r),s.g=co(s.g),s.b=co(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xa]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:Ip,fromXYZ:Lp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Ip,fromXYZ:Lp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}var Ce=hy();function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qr,vc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qr===void 0&&(qr=_a("canvas")),qr.width=t.width,qr.height=t.height;let s=qr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=_a("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xs(e[n]/255)*255):e[n]=xs(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uy=0,mo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wu(s[o].image)):r.push(Wu(s[o]))}else r=Wu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var dy=0,qu=new N,Xn=class i extends Ki{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zi,s=Zi,r=Dn,o=Zs,a=Ei,l=ei,c=i.DEFAULT_ANISOTROPY,h=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=gs(),this.name="",this.source=new mo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uo:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uo:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Hd;Xn.DEFAULT_ANISOTROPY=1;var nf=class nf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],d=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,_=(p+1)/2,S=(m+1)/2,M=(h+f)/4,w=(u+x)/4,v=(g+d)/4;return b>_&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=w/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nf.prototype.isVector4=!0;var on=nf,Mc=class extends Ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Xn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ma=class extends Xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bc=class extends Xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Zc=class Zc{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,d)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,d){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),o=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fy,t,py)}lookAt(t,e,n){let s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),Us.crossVectors(n,li),Us.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Us.crossVectors(n,li)),Us.normalize(),Dl.crossVectors(li,Us),s[0]=Us.x,s[4]=Dl.x,s[8]=li.x,s[1]=Us.y,s[5]=Dl.y,s[9]=li.y,s[2]=Us.z,s[6]=Dl.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],d=n[10],m=n[14],y=n[3],b=n[7],_=n[11],S=n[15],M=s[0],w=s[4],v=s[8],T=s[12],R=s[1],P=s[5],I=s[9],D=s[13],C=s[2],U=s[6],G=s[10],O=s[14],$=s[3],H=s[7],q=s[11],J=s[15];return r[0]=o*M+a*R+l*C+c*$,r[4]=o*w+a*P+l*U+c*H,r[8]=o*v+a*I+l*G+c*q,r[12]=o*T+a*D+l*O+c*J,r[1]=h*M+u*R+f*C+p*$,r[5]=h*w+u*P+f*U+p*H,r[9]=h*v+u*I+f*G+p*q,r[13]=h*T+u*D+f*O+p*J,r[2]=g*M+x*R+d*C+m*$,r[6]=g*w+x*P+d*U+m*H,r[10]=g*v+x*I+d*G+m*q,r[14]=g*T+x*D+d*O+m*J,r[3]=y*M+b*R+_*C+S*$,r[7]=y*w+b*P+_*U+S*H,r[11]=y*v+b*I+_*G+S*q,r[15]=y*T+b*D+_*O+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],d=t[11],m=t[15],y=l*p-c*f,b=a*p-c*u,_=a*f-l*u,S=o*p-c*h,M=o*f-l*h,w=o*u-a*h;return e*(x*y-d*b+m*_)-n*(g*y-d*S+m*M)+s*(g*b-x*S+m*w)-r*(g*_-x*M+d*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],d=t[14],m=t[15],y=e*a-n*o,b=e*l-s*o,_=e*c-r*o,S=n*l-s*a,M=n*c-r*a,w=s*c-r*l,v=h*x-u*g,T=h*d-f*g,R=h*m-p*g,P=u*d-f*x,I=u*m-p*x,D=f*m-p*d,C=y*D-b*I+_*P+S*R-M*T+w*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=(a*D-l*I+c*P)*U,t[1]=(s*I-n*D-r*P)*U,t[2]=(x*w-d*M+m*S)*U,t[3]=(f*M-u*w-p*S)*U,t[4]=(l*R-o*D-c*T)*U,t[5]=(e*D-s*R+r*T)*U,t[6]=(d*_-g*w-m*b)*U,t[7]=(h*w-f*_+p*b)*U,t[8]=(o*I-a*R+c*v)*U,t[9]=(n*R-e*I-r*v)*U,t[10]=(g*M-x*_+m*y)*U,t[11]=(u*_-h*M-p*y)*U,t[12]=(a*T-o*P-l*v)*U,t[13]=(e*P-n*T+s*v)*U,t[14]=(x*b-g*S-d*y)*U,t[15]=(h*S-u*b+f*y)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,x=o*h,d=o*u,m=a*u,y=l*c,b=l*h,_=l*u,S=n.x,M=n.y,w=n.z;return s[0]=(1-(x+m))*S,s[1]=(p+_)*S,s[2]=(g-b)*S,s[3]=0,s[4]=(p-_)*M,s[5]=(1-(f+m))*M,s[6]=(d+y)*M,s[7]=0,s[8]=(g+b)*w,s[9]=(d-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Xr.set(s[0],s[1],s[2]).length(),a=Xr.set(s[4],s[5],s[6]).length(),l=Xr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ci.copy(this);let c=1/o,h=1/a,u=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Di,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Di)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Di,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Di)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===fo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Zc.prototype.isMatrix4=!0;var Me=Zc,Xr=new N,Ci=new Me,fy=new N(0,0,0),py=new N(1,1,1),Us=new N,Dl=new N,li=new N,Dp=new Me,Np=new fn,Ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Np.setFromEuler(this),this.setFromQuaternion(Np,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},my=0,Up=new N,Yr=new fn,hs=new Me,Nl=new N,ia=new N,gy=new N,xy=new fn,Fp=new N(1,0,0),Bp=new N(0,1,0),Op=new N(0,0,1),Hp={type:"added"},yy={type:"removed"},Zr={type:"childadded",child:null},Xu={type:"childremoved",child:null},En=class i extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Ni,n=new fn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ce}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(Fp,t)}rotateY(t){return this.rotateOnAxis(Bp,t)}rotateZ(t){return this.rotateOnAxis(Op,t)}translateOnAxis(t,e){return Up.copy(t).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fp,t)}translateY(t){return this.translateOnAxis(Bp,t)}translateZ(t){return this.translateOnAxis(Op,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nl.copy(t):Nl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(ia,Nl,this.up):hs.lookAt(Nl,ia,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(hs),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hp),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yy),Xu.child=t,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hp),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,xy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new N(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},_y={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let d=e.getJointPose(x,n),m=this._getHandJoint(c,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Yu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=cy(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yu(o,r,t+1/3),this.g=Yu(o,r,t),this.b=Yu(o,r,t-1/3)}return Ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){let n=Jm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Ce.workingToColorSpace(zn.copy(this),t),Math.round(Te(zn.r*255,0,255))*65536+Math.round(Te(zn.g*255,0,255))*256+Math.round(Te(zn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.workingToColorSpace(zn.copy(this),e);let n=zn.r,s=zn.g,r=zn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.workingToColorSpace(zn.copy(this),e),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Ln){Ce.workingToColorSpace(zn.copy(this),t);let e=zn.r,n=zn.g,s=zn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fs),this.setHSL(Fs.h+t,Fs.s+e,Fs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fs),t.getHSL(Ul);let n=ku(Fs.h,Ul.h,e),s=ku(Fs.s,Ul.s,e),r=ku(Fs.l,Ul.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new pt;pt.NAMES=Jm;var Sa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new N,us=new N,Zu=new N,ds=new N,Jr=new N,$r=new N,zp=new N,Ju=new N,$u=new N,Ku=new N,ju=new on,Qu=new on,td=new on,ms=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pi.subVectors(t,e),s.cross(Pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pi.subVectors(s,e),us.subVectors(n,e),Zu.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(us),l=Pi.dot(Zu),c=us.dot(us),h=us.dot(Zu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ds.x),l.addScaledVector(o,ds.y),l.addScaledVector(a,ds.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ju.setScalar(0),Qu.setScalar(0),td.setScalar(0),ju.fromBufferAttribute(t,e),Qu.fromBufferAttribute(t,n),td.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ju,r.x),o.addScaledVector(Qu,r.y),o.addScaledVector(td,r.z),o}static isFrontFacing(t,e,n,s){return Pi.subVectors(n,e),us.subVectors(t,e),Pi.cross(us).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Pi.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Jr.subVectors(s,n),$r.subVectors(r,n),Ju.subVectors(t,n);let l=Jr.dot(Ju),c=$r.dot(Ju);if(l<=0&&c<=0)return e.copy(n);$u.subVectors(t,s);let h=Jr.dot($u),u=$r.dot($u);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Jr,o);Ku.subVectors(t,r);let p=Jr.dot(Ku),g=$r.dot(Ku);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($r,a);let d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return zp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(zp,a);let m=1/(d+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Jr,o).addScaledVector($r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ji=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(r,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fl.copy(n.boundingBox)),Fl.applyMatrix4(t.matrixWorld),this.union(Fl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sa),Bl.subVectors(this.max,sa),Kr.subVectors(t.a,sa),jr.subVectors(t.b,sa),Qr.subVectors(t.c,sa),Bs.subVectors(jr,Kr),Os.subVectors(Qr,jr),ar.subVectors(Kr,Qr);let e=[0,-Bs.z,Bs.y,0,-Os.z,Os.y,0,-ar.z,ar.y,Bs.z,0,-Bs.x,Os.z,0,-Os.x,ar.z,0,-ar.x,-Bs.y,Bs.x,0,-Os.y,Os.x,0,-ar.y,ar.x,0];return!ed(e,Kr,jr,Qr,Bl)||(e=[1,0,0,0,1,0,0,0,1],!ed(e,Kr,jr,Qr,Bl))?!1:(Ol.crossVectors(Bs,Os),e=[Ol.x,Ol.y,Ol.z],ed(e,Kr,jr,Qr,Bl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fs=[new N,new N,new N,new N,new N,new N,new N,new N],Ii=new N,Fl=new ji,Kr=new N,jr=new N,Qr=new N,Bs=new N,Os=new N,ar=new N,sa=new N,Bl=new N,Ol=new N,lr=new N;function ed(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){lr.fromArray(i,r);let a=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),l=t.dot(lr),c=e.dot(lr),h=n.dot(lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var _n=new N,Hl=new ut,vy=0,Kt=class extends Ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xd,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hl.fromBufferAttribute(this,e),Hl.applyMatrix3(t),this.setXY(e,Hl.x,Hl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix3(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ea=class extends Kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ta=class extends Kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Kt{constructor(t,e,n){super(new Float32Array(t),e,n)}},My=new ji,ra=new N,nd=new N,Qi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):My.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ra.subVectors(t,this.center);let e=ra.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ra,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ra.copy(t.center).add(nd)),this.expandByPoint(ra.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},by=0,vi=new Me,id=new En,to=new N,ci=new ji,oa=new ji,Cn=new N,ue=class i extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ay(t)?Ta:Ea)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,n){return vi.makeTranslation(t,e,n),this.applyMatrix4(vi),this}scale(t,e,n){return vi.makeScale(t,e,n),this.applyMatrix4(vi),this}lookAt(t){return id.lookAt(t),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(ci.min,oa.min),ci.expandByPoint(Cn),Cn.addVectors(ci.max,oa.max),ci.expandByPoint(Cn)):(ci.expandByPoint(oa.min),ci.expandByPoint(oa.max))}ci.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Cn.fromBufferAttribute(a,c),l&&(to.fromBufferAttribute(t,c),Cn.add(to)),s=Math.max(s,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new N,l[v]=new N;let c=new N,h=new N,u=new N,f=new ut,p=new ut,g=new ut,x=new N,d=new N;function m(v,T,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),d.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[v].add(x),a[T].add(x),a[R].add(x),l[v].add(d),l[T].add(d),l[R].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,T=y.length;v<T;++v){let R=y[v],P=R.start,I=R.count;for(let D=P,C=P+I;D<C;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let b=new N,_=new N,S=new N,M=new N;function w(v){S.fromBufferAttribute(s,v),M.copy(S);let T=a[v];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(M,T);let P=_.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,P)}for(let v=0,T=y.length;v<T;++v){let R=y[v],P=R.start,I=R.count;for(let D=P,C=P+I;D<C;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new Kt(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xd,this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},qn=new N,xo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix4(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyNormalMatrix(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.transformDirection(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sd=new N,Sy=new N,Ey=new ce,Li=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sd.subVectors(n,e).cross(Sy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(sd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ey.getNormalMatrix(t),s=this.coplanarPoint(sd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ty=0,Mi=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Bi,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Id,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cc,this.stencilZFail=cc,this.stencilZPass=cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ts=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eo,aa=new N,no=new N,io=new N,so=new ut,la=new ut,$m=new Me,zl=new N,ca=new N,kl=new N,kp=new ut,rd=new ut,Gp=new ut,ys=class extends En{constructor(t=new ts){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wa(e,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new xo(n,3,0,!1)),eo.setAttribute("uv",new xo(n,2,3,!1))}this.geometry=eo,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),no.setFromMatrixScale(this.matrixWorld),$m.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),io.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&no.multiplyScalar(-io.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Gl(zl.set(-.5,-.5,0),io,o,no,s,r),Gl(ca.set(.5,-.5,0),io,o,no,s,r),Gl(kl.set(.5,.5,0),io,o,no,s,r),kp.set(0,0),rd.set(1,0),Gp.set(1,1);let a=t.ray.intersectTriangle(zl,ca,kl,!1,aa);if(a===null&&(Gl(ca.set(-.5,.5,0),io,o,no,s,r),rd.set(0,1),a=t.ray.intersectTriangle(zl,kl,ca,!1,aa),a===null))return;let l=t.ray.origin.distanceTo(aa);l<t.near||l>t.far||e.push({distance:l,point:aa.clone(),uv:ms.getInterpolation(aa,zl,ca,kl,kp,rd,Gp,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Gl(i,t,e,n,s,r){so.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(la.x=r*so.x-s*so.y,la.y=s*so.x+r*so.y):la.copy(so),i.copy(t),i.x+=la.x,i.y+=la.y,i.applyMatrix4($m)}var ps=new N,od=new N,Vl=new N,Wl=new N,yo=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,e),ps.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){od.copy(t).add(e).multiplyScalar(.5),Vl.copy(e).sub(t).normalize(),Wl.copy(this.origin).sub(od);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vl),a=Wl.dot(this.direction),l=-Wl.dot(Vl),c=Wl.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(od).addScaledVector(Vl,f),p}intersectSphere(t,e){if(t.radius<0)return null;ps.subVectors(t.center,this.origin);let n=ps.dot(this.direction),s=ps.dot(ps)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,p=t.z-o.z,g=e.x-o.x,x=e.y-o.y,d=e.z-o.z,m=n.x-o.x,y=n.y-o.y,b=n.z-o.z,_=Math.abs(l),S=Math.abs(c),M=Math.abs(h),w,v,T,R,P,I,D,C,U,G,O,$;if(_>=S&&_>=M?(T=l,I=u,U=g,$=m,l>=0?(w=c,v=h,R=f,P=p,D=x,C=d,G=y,O=b):(w=h,v=c,R=p,P=f,D=d,C=x,G=b,O=y)):S>=M?(T=c,I=f,U=x,$=y,c>=0?(w=h,v=l,R=p,P=u,D=d,C=g,G=b,O=m):(w=l,v=h,R=u,P=p,D=g,C=d,G=m,O=b)):(T=h,I=p,U=d,$=b,h>=0?(w=l,v=c,R=u,P=f,D=g,C=x,G=m,O=y):(w=c,v=l,R=f,P=u,D=x,C=g,G=y,O=m)),T===0)return null;let H=w/T,q=v/T,J=1/T,mt=R-H*I,wt=P-q*I,le=D-H*U,se=C-q*U,Yt=G-H*$,nt=O-q*$,ot=Yt*se-nt*le,bt=mt*nt-wt*Yt,Ot=le*wt-se*mt;if(s){if(ot<0||bt<0||Ot<0)return null}else if((ot<0||bt<0||Ot<0)&&(ot>0||bt>0||Ot>0))return null;let Rt=ot+bt+Ot;if(Rt===0)return null;let Jt=J*(ot*I+bt*U+Ot*$);return(Rt>0?Jt<0:Jt>0)?null:this.at(Jt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vp=new Me,cr=new yo,ql=new Qi,Wp=new N,Xl=new N,Yl=new N,Zl=new N,ad=new N,Jl=new N,qp=new N,$l=new N,K=class extends En{constructor(t=new ue,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Jl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ad.fromBufferAttribute(u,t),o?Jl.addScaledVector(ad,h):Jl.addScaledVector(ad.sub(e),h))}e.add(Jl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(r),cr.copy(t.ray).recast(t.near),!(ql.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ql,Wp)===null||cr.origin.distanceToSquared(Wp)>(t.far-t.near)**2))&&(Vp.copy(r).invert(),cr.copy(t.ray).applyMatrix4(Vp),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let d=f[g],m=o[d.materialIndex],y=Math.max(d.start,p.start),b=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let _=y,S=b;_<S;_+=3){let M=a.getX(_),w=a.getX(_+1),v=a.getX(_+2);s=Kl(this,m,t,n,c,h,u,M,w,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){let y=a.getX(d),b=a.getX(d+1),_=a.getX(d+2);s=Kl(this,o,t,n,c,h,u,y,b,_),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let d=f[g],m=o[d.materialIndex],y=Math.max(d.start,p.start),b=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let _=y,S=b;_<S;_+=3){let M=_,w=_+1,v=_+2;s=Kl(this,m,t,n,c,h,u,M,w,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){let y=d,b=d+1,_=d+2;s=Kl(this,o,t,n,c,h,u,y,b,_),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function wy(i,t,e,n,s,r,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Xs,a),l===null)return null;$l.copy(a),$l.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($l);return c<e.near||c>e.far?null:{distance:c,point:$l.clone(),object:i}}function Kl(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Xl),i.getVertexPosition(l,Yl),i.getVertexPosition(c,Zl);let h=wy(i,t,e,n,Xl,Yl,Zl,qp);if(h){let u=new N;ms.getBarycoord(qp,Xl,Yl,Zl,u),s&&(h.uv=ms.getInterpolatedAttribute(s,a,l,c,u,new ut)),r&&(h.uv1=ms.getInterpolatedAttribute(r,a,l,c,u,new ut)),o&&(h.normal=ms.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};ms.getNormal(Xl,Yl,Zl,f.normal),h.face=f,h.barycoord=u}return h}var fr=class extends Xn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=vn,h=vn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=class extends Kt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ro=new Me,Xp=new Me,jl=[],Yp=new ji,Ay=new Me,ha=new K,ua=new Qi,Pn=class extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ay)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ro),Yp.copy(t.boundingBox).applyMatrix4(ro),this.boundingBox.union(Yp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ro),ua.copy(t.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(ua)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),t.ray.intersectsSphere(ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ro),Xp.multiplyMatrices(n,ro),ha.matrixWorld=Xp,ha.raycast(t,jl);for(let o=0,a=jl.length;o<a;o++){let l=jl[o];l.instanceId=r,l.object=this,e.push(l)}jl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(s*this.count),s,this.count,Co,Si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hr=new Qi,Ry=new ut(.5,.5),Ql=new N,_o=class{constructor(t=new Li,e=new Li,n=new Li,s=new Li,r=new Li,o=new Li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],x=r[9],d=r[10],m=r[11],y=r[12],b=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-o,p-h,m-g,S-y).normalize(),s[1].setComponents(c+o,p+h,m+g,S+y).normalize(),s[2].setComponents(c+a,p+u,m+x,S+b).normalize(),s[3].setComponents(c-a,p-u,m-x,S-b).normalize(),n)s[4].setComponents(l,f,d,_).normalize(),s[5].setComponents(c-l,p-f,m-d,S-_).normalize();else if(s[4].setComponents(c-l,p-f,m-d,S-_).normalize(),e===Di)s[5].setComponents(c+l,p+f,m+d,S+_).normalize();else if(e===fo)s[5].setComponents(l,f,d,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);let e=Ry.distanceTo(t.center);return hr.radius=.7071067811865476+e,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ql.x=s.normal.x>0?t.max.x:t.min.x,Ql.y=s.normal.y>0?t.max.y:t.min.y,Ql.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vo=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sc=new N,Ec=new N,Zp=new Me,da=new yo,tc=new Qi,ld=new N,Jp=new N,Tc=class extends En{constructor(t=new ue,e=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sc.fromBufferAttribute(e,s-1),Ec.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sc.distanceTo(Ec);t.setAttribute("lineDistance",new fe(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),tc.radius+=r,t.ray.intersectsSphere(tc)===!1)return;Zp.copy(s).invert(),da.copy(t.ray).applyMatrix4(Zp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,d=g-1;x<d;x+=c){let m=h.getX(x),y=h.getX(x+1),b=ec(this,t,da,l,m,y,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(g-1),d=h.getX(p),m=ec(this,t,da,l,x,d,g-1);m&&e.push(m)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,d=g-1;x<d;x+=c){let m=ec(this,t,da,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=ec(this,t,da,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ec(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Sc.fromBufferAttribute(a,s),Ec.fromBufferAttribute(a,r),e.distanceSqToSegment(Sc,Ec,ld,Jp)>n)return;ld.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ld);if(!(c<t.near||c>t.far))return{distance:c,point:Jp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var $p=new N,Kp=new N,Aa=class extends Tc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)$p.fromBufferAttribute(e,s),Kp.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$p.distanceTo(Kp);t.setAttribute("lineDistance",new fe(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hi=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jp=new Me,yd=new yo,nc=new Qi,ic=new N,bi=class extends En{constructor(t=new ue,e=new hi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(s),nc.radius+=r,t.ray.intersectsSphere(nc)===!1)return;jp.copy(s).invert(),yd.copy(t.ray).applyMatrix4(jp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let d=c.getX(g);ic.fromBufferAttribute(u,d),Qp(ic,d,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)ic.fromBufferAttribute(u,g),Qp(ic,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qp(i,t,e,n,s,r,o){let a=yd.distanceSqToPoint(i);if(a<e){let l=new N;yd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends Xn{constructor(t=[],e=Ys,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fi=class extends Xn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zs=class extends Xn{constructor(t,e,n=Hi,s,r,o,a=vn,l=vn,c,h=$i,u=1){if(h!==$i&&h!==Js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},wc=class extends zs{constructor(t,e=Hi,n=Ys,s,r,o=vn,a=vn,l,c=$i){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ca=class extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},In=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(x,d,m,y,b,_,S,M,w,v,T){let R=_/w,P=S/v,I=_/2,D=S/2,C=M/2,U=w+1,G=v+1,O=0,$=0,H=new N;for(let q=0;q<G;q++){let J=q*P-D;for(let mt=0;mt<U;mt++){let wt=mt*R-I;H[x]=wt*y,H[d]=J*b,H[m]=C,c.push(H.x,H.y,H.z),H[x]=0,H[d]=0,H[m]=M>0?1:-1,h.push(H.x,H.y,H.z),u.push(mt/w),u.push(1-q/v),O+=1}}for(let q=0;q<v;q++)for(let J=0;J<w;J++){let mt=f+J+U*q,wt=f+J+U*(q+1),le=f+(J+1)+U*(q+1),se=f+(J+1)+U*q;l.push(mt,wt,se),l.push(wt,le,se),$+=6}a.addGroup(p,$,T),p+=$,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ui=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Le=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],d=n/2,m=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(p,2));function y(){let _=new N,S=new N,M=0,w=(e-t)/n;for(let v=0;v<=r;v++){let T=[],R=v/r,P=R*(e-t)+t;for(let I=0;I<=s;I++){let D=I/s,C=D*l+a,U=Math.sin(C),G=Math.cos(C);S.x=P*U,S.y=-R*n+d,S.z=P*G,u.push(S.x,S.y,S.z),_.set(U,w,G).normalize(),f.push(_.x,_.y,_.z),p.push(D,1-R),T.push(g++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let R=x[T][v],P=x[T+1][v],I=x[T+1][v+1],D=x[T][v+1];(t>0||T!==0)&&(h.push(R,P,D),M+=3),(e>0||T!==r-1)&&(h.push(P,I,D),M+=3)}c.addGroup(m,M,0),m+=M}function b(_){let S=g,M=new ut,w=new N,v=0,T=_===!0?t:e,R=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,d*R,0),f.push(0,R,0),p.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let C=I/s*l+a,U=Math.cos(C),G=Math.sin(C);w.x=T*G,w.y=d*R,w.z=T*U,u.push(w.x,w.y,w.z),f.push(0,R,0),M.x=U*.5+.5,M.y=G*.5*R+.5,p.push(M.x,M.y),g++}for(let I=0;I<s;I++){let D=S+I,C=P+I;_===!0?h.push(C,C+1,D):h.push(C+1,C,D),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oe=class i extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ac=class i extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new N,_=new N,S=new N;for(let M=0;M<e.length;M+=3)p(e[M+0],b),p(e[M+1],_),p(e[M+2],S),l(b,_,S,y)}function l(y,b,_,S){let M=S+1,w=[];for(let v=0;v<=M;v++){w[v]=[];let T=y.clone().lerp(_,v/M),R=b.clone().lerp(_,v/M),P=M-v;for(let I=0;I<=P;I++)I===0&&v===M?w[v][I]=T:w[v][I]=T.clone().lerp(R,I/P)}for(let v=0;v<M;v++)for(let T=0;T<2*(M-v)-1;T++){let R=Math.floor(T/2);T%2===0?(f(w[v][R+1]),f(w[v+1][R]),f(w[v][R])):(f(w[v][R+1]),f(w[v+1][R+1]),f(w[v+1][R]))}}function c(y){let b=new N;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(y),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let y=new N;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let _=d(y)/2/Math.PI+.5,S=m(y)/Math.PI+.5;o.push(_,1-S)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],_=o[y+2],S=o[y+4],M=Math.max(b,_,S),w=Math.min(b,_,S);M>.9&&w<.1&&(b<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,b){let _=y*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){let y=new N,b=new N,_=new N,S=new N,M=new ut,w=new ut,v=new ut;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),M.set(o[R+0],o[R+1]),w.set(o[R+2],o[R+3]),v.set(o[R+4],o[R+5]),S.copy(y).add(b).add(_).divideScalar(3);let P=d(S);x(M,R+0,y,P),x(w,R+2,b,P),x(v,R+4,_,P)}}function x(y,b,_,S){S<0&&y.x===1&&(o[b]=y.x-1),_.x===0&&_.z===0&&(o[b]=S/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new Me;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mo=class extends di{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rc=class extends Mo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zd(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var tm=new N,em=new N,cd=new Zd,hd=new Zd,ud=new Zd,bo=class extends di{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(em.subVectors(s[0],s[1]).add(s[0]),c=em);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(tm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tm),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),cd.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,d),hd.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,d),ud.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,d)}else this.curveType==="catmullrom"&&(cd.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),hd.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ud.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(cd.calc(l),hd.calc(l),ud.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nm(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Cy(i,t){let e=1-i;return e*e*t}function Py(i,t){return 2*(1-i)*i*t}function Iy(i,t){return i*i*t}function pa(i,t,e,n){return Cy(i,t)+Py(i,e)+Iy(i,n)}function Ly(i,t){let e=1-i;return e*e*e*t}function Dy(i,t){let e=1-i;return 3*e*e*i*t}function Ny(i,t){return 3*(1-i)*i*i*t}function Uy(i,t){return i*i*i*t}function ma(i,t,e,n,s){return Ly(i,t)+Dy(i,e)+Ny(i,n)+Uy(i,s)}var Pa=class extends di{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ma(t,s.x,r.x,o.x,a.x),ma(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cc=class extends di{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ma(t,s.x,r.x,o.x,a.x),ma(t,s.y,r.y,o.y,a.y),ma(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ia=class extends di{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pc=class extends di{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends di{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pa(t,s.x,r.x,o.x),pa(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends di{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pa(t,s.x,r.x,o.x),pa(t,s.y,r.y,o.y),pa(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(nm(a,l.x,c.x,h.x,u.x),nm(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},_d=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:bo,CubicBezierCurve:Pa,CubicBezierCurve3:Cc,EllipseCurve:Mo,LineCurve:Ia,LineCurve3:Pc,QuadraticBezierCurve:La,QuadraticBezierCurve3:Ic,SplineCurve:Da}),Lc=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _d[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new _d[s.type]().fromJSON(s))}return this}},pr=class extends Lc{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ia(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new La(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Pa(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Mo(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ks=class extends pr{constructor(t){super(t),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new pr().fromJSON(s))}return this}};function Fy(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Km(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ky(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let p=i[f],g=i[f+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Na(r,o,e,a,l,c,0),o}function Km(i,t,e,n,s){let r;if(s===jy(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=im(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=im(o/n|0,i[o],i[o+1],r);return r&&So(r,r.next)&&(Fa(r),r=r.next),r}function mr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(So(e,e.next)||hn(e.prev,e,e.next)===0)){if(Fa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Na(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xy(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Oy(i,n,s,r):By(i)){t.push(l.i,i.i,c.i),Fa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Hy(mr(i),t),Na(i,t,e,n,s,r,2)):o===2&&zy(i,t,e,n,s,r):Na(mr(i),t,e,n,s,r,1);break}}}function By(i){let t=i.prev,e=i,n=i.next;if(hn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),p=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&fa(s,a,r,l,o,c,g.x,g.y)&&hn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Oy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(hn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),d=Math.max(h,u,f),m=vd(p,g,t,e,n),y=vd(x,d,t,e,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=m&&_&&_.z<=y;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=d&&b!==s&&b!==o&&fa(a,h,l,u,c,f,b.x,b.y)&&hn(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=d&&_!==s&&_!==o&&fa(a,h,l,u,c,f,_.x,_.y)&&hn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=d&&b!==s&&b!==o&&fa(a,h,l,u,c,f,b.x,b.y)&&hn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=d&&_!==s&&_!==o&&fa(a,h,l,u,c,f,_.x,_.y)&&hn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Hy(i,t){let e=i;do{let n=e.prev,s=e.next.next;!So(n,s)&&Qm(n,e,e.next,s)&&Ua(n,s)&&Ua(s,n)&&(t.push(n.i,e.i,s.i),Fa(e),Fa(e.next),e=i=s),e=e.next}while(e!==i);return mr(e)}function zy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jy(o,a)){let l=t0(o,a);o=mr(o,o.next),l=mr(l,l.next),Na(o,t,e,n,s,r,0),Na(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ky(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Km(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Zy(c))}s.sort(Gy);for(let r=0;r<s.length;r++)e=Vy(s[r],e);return e}function Gy(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vy(i,t){let e=Wy(i,t);if(!e)return t;let n=t0(e,i);return mr(n,n.next),mr(e,e.next)}function Wy(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(So(i,e))return e;do{if(So(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&jm(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Ua(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&qy(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function qy(i,t){return hn(i.prev,i,t.prev)<0&&hn(t.next,i,i.next)<0}function Xy(i,t,e,n){let s=i;do s.z===0&&(s.z=vd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yy(s)}function Yy(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function vd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jm(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fa(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&jm(i,t,e,n,s,r,o,a)}function Jy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$y(i,t)&&(Ua(i,t)&&Ua(t,i)&&Ky(i,t)&&(hn(i.prev,i,t.prev)||hn(i,t.prev,t))||So(i,t)&&hn(i.prev,i,i.next)>0&&hn(t.prev,t,t.next)>0)}function hn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function So(i,t){return i.x===t.x&&i.y===t.y}function Qm(i,t,e,n){let s=rc(hn(i,t,e)),r=rc(hn(i,t,n)),o=rc(hn(e,n,i)),a=rc(hn(e,n,t));return!!(s!==r&&o!==a||s===0&&sc(i,e,t)||r===0&&sc(i,n,t)||o===0&&sc(e,i,n)||a===0&&sc(e,t,n))}function sc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rc(i){return i>0?1:i<0?-1:0}function $y(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ua(i,t){return hn(i.prev,i,i.next)<0?hn(i,t,i.next)>=0&&hn(i,i.prev,t)>=0:hn(i,t,i.prev)<0||hn(i,i.next,t)<0}function Ky(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function t0(i,t){let e=Md(i.i,i.x,i.y),n=Md(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function im(i,t,e,n){let s=Md(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Md(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var bd=class{static triangulate(t,e,n=2){return Fy(t,e,n)}},Ji=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];sm(t),rm(n,t);let o=t.length;e.forEach(sm);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,rm(n,e[l]);let a=bd.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Eo=class i extends ue{constructor(t=new ks([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Qy,b,_=!1,S,M,w,v;if(m){b=m.getSpacedPoints(h),_=!0,f=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,rt),M=new N,w=new N,v=new N}f||(d=0,p=0,g=0,x=0);let T=a.extractPoints(c),R=T.shape,P=T.holes;if(!Ji.isClockWise(R)){R=R.reverse();for(let rt=0,ht=P.length;rt<ht;rt++){let ft=P[rt];Ji.isClockWise(ft)&&(P[rt]=ft.reverse())}}function D(rt){let ft=10000000000000001e-36,dt=rt[0];for(let xt=1;xt<=rt.length;xt++){let Nt=xt%rt.length,Gt=rt[Nt],$t=Gt.x-dt.x,ne=Gt.y-dt.y,B=$t*$t+ne*ne,Ae=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(dt.x),Math.abs(dt.y)),ge=ft*Ae*Ae;if(B<=ge){rt.splice(Nt,1),xt--;continue}dt=Gt}}D(R),P.forEach(D);let C=P.length,U=R;for(let rt=0;rt<C;rt++){let ht=P[rt];R=R.concat(ht)}function G(rt,ht,ft){return ht||ee("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ht,ft)}let O=R.length;function $(rt,ht,ft){let dt,xt,Nt,Gt=rt.x-ht.x,$t=rt.y-ht.y,ne=ft.x-rt.x,B=ft.y-rt.y,Ae=Gt*Gt+$t*$t,ge=Gt*B-$t*ne;if(Math.abs(ge)>Number.EPSILON){let L=Math.sqrt(Ae),E=Math.sqrt(ne*ne+B*B),W=ht.x-$t/L,X=ht.y+Gt/L,et=ft.x-B/E,gt=ft.y+ne/E,_t=((et-W)*B-(gt-X)*ne)/(Gt*B-$t*ne);dt=W+Gt*_t-rt.x,xt=X+$t*_t-rt.y;let it=dt*dt+xt*xt;if(it<=2)return new ut(dt,xt);Nt=Math.sqrt(it/2)}else{let L=!1;Gt>Number.EPSILON?ne>Number.EPSILON&&(L=!0):Gt<-Number.EPSILON?ne<-Number.EPSILON&&(L=!0):Math.sign($t)===Math.sign(B)&&(L=!0),L?(dt=-$t,xt=Gt,Nt=Math.sqrt(Ae)):(dt=Gt,xt=$t,Nt=Math.sqrt(Ae/2))}return new ut(dt/Nt,xt/Nt)}let H=[];for(let rt=0,ht=U.length,ft=ht-1,dt=rt+1;rt<ht;rt++,ft++,dt++)ft===ht&&(ft=0),dt===ht&&(dt=0),H[rt]=$(U[rt],U[ft],U[dt]);let q=[],J,mt=H.concat();for(let rt=0,ht=C;rt<ht;rt++){let ft=P[rt];J=[];for(let dt=0,xt=ft.length,Nt=xt-1,Gt=dt+1;dt<xt;dt++,Nt++,Gt++)Nt===xt&&(Nt=0),Gt===xt&&(Gt=0),J[dt]=$(ft[dt],ft[Nt],ft[Gt]);q.push(J),mt=mt.concat(J)}let wt;if(d===0)wt=Ji.triangulateShape(U,P);else{let rt=[],ht=[];for(let ft=0;ft<d;ft++){let dt=ft/d,xt=p*Math.cos(dt*Math.PI/2),Nt=g*Math.sin(dt*Math.PI/2)+x;for(let Gt=0,$t=U.length;Gt<$t;Gt++){let ne=G(U[Gt],H[Gt],Nt);bt(ne.x,ne.y,-xt),dt===0&&rt.push(ne)}for(let Gt=0,$t=C;Gt<$t;Gt++){let ne=P[Gt];J=q[Gt];let B=[];for(let Ae=0,ge=ne.length;Ae<ge;Ae++){let L=G(ne[Ae],J[Ae],Nt);bt(L.x,L.y,-xt),dt===0&&B.push(L)}dt===0&&ht.push(B)}}wt=Ji.triangulateShape(rt,ht)}let le=wt.length,se=g+x;for(let rt=0;rt<O;rt++){let ht=f?G(R[rt],mt[rt],se):R[rt];_?(w.copy(S.normals[0]).multiplyScalar(ht.x),M.copy(S.binormals[0]).multiplyScalar(ht.y),v.copy(b[0]).add(w).add(M),bt(v.x,v.y,v.z)):bt(ht.x,ht.y,0)}for(let rt=1;rt<=h;rt++)for(let ht=0;ht<O;ht++){let ft=f?G(R[ht],mt[ht],se):R[ht];_?(w.copy(S.normals[rt]).multiplyScalar(ft.x),M.copy(S.binormals[rt]).multiplyScalar(ft.y),v.copy(b[rt]).add(w).add(M),bt(v.x,v.y,v.z)):bt(ft.x,ft.y,u/h*rt)}for(let rt=d-1;rt>=0;rt--){let ht=rt/d,ft=p*Math.cos(ht*Math.PI/2),dt=g*Math.sin(ht*Math.PI/2)+x;for(let xt=0,Nt=U.length;xt<Nt;xt++){let Gt=G(U[xt],H[xt],dt);bt(Gt.x,Gt.y,u+ft)}for(let xt=0,Nt=P.length;xt<Nt;xt++){let Gt=P[xt];J=q[xt];for(let $t=0,ne=Gt.length;$t<ne;$t++){let B=G(Gt[$t],J[$t],dt);_?bt(B.x,B.y+b[h-1].y,b[h-1].x+ft):bt(B.x,B.y,u+ft)}}}Yt(),nt();function Yt(){let rt=s.length/3;if(f){let ht=0,ft=O*ht;for(let dt=0;dt<le;dt++){let xt=wt[dt];Ot(xt[2]+ft,xt[1]+ft,xt[0]+ft)}ht=h+d*2,ft=O*ht;for(let dt=0;dt<le;dt++){let xt=wt[dt];Ot(xt[0]+ft,xt[1]+ft,xt[2]+ft)}}else{for(let ht=0;ht<le;ht++){let ft=wt[ht];Ot(ft[2],ft[1],ft[0])}for(let ht=0;ht<le;ht++){let ft=wt[ht];Ot(ft[0]+O*h,ft[1]+O*h,ft[2]+O*h)}}n.addGroup(rt,s.length/3-rt,0)}function nt(){let rt=s.length/3,ht=0;ot(U,ht),ht+=U.length;for(let ft=0,dt=P.length;ft<dt;ft++){let xt=P[ft];ot(xt,ht),ht+=xt.length}n.addGroup(rt,s.length/3-rt,1)}function ot(rt,ht){let ft=rt.length;for(;--ft>=0;){let dt=ft,xt=ft-1;xt<0&&(xt=rt.length-1);for(let Nt=0,Gt=h+d*2;Nt<Gt;Nt++){let $t=O*Nt,ne=O*(Nt+1),B=ht+dt+$t,Ae=ht+xt+$t,ge=ht+xt+ne,L=ht+dt+ne;Rt(B,Ae,ge,L)}}}function bt(rt,ht,ft){l.push(rt),l.push(ht),l.push(ft)}function Ot(rt,ht,ft){Jt(rt),Jt(ht),Jt(ft);let dt=s.length/3,xt=y.generateTopUV(n,s,dt-3,dt-2,dt-1);De(xt[0]),De(xt[1]),De(xt[2])}function Rt(rt,ht,ft,dt){Jt(rt),Jt(ht),Jt(dt),Jt(ht),Jt(ft),Jt(dt);let xt=s.length/3,Nt=y.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);De(Nt[0]),De(Nt[1]),De(Nt[3]),De(Nt[1]),De(Nt[2]),De(Nt[3])}function Jt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function De(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return t_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _d[s.type]().fromJSON(s)),new i(n,t.options)}},Qy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],d=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-u),new ut(f,1-g),new ut(x,1-m)]:[new ut(a,1-l),new ut(h,1-u),new ut(p,1-g),new ut(d,1-m)]}};function t_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class i extends Ac{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var an=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],x=[],d=[];for(let m=0;m<h;m++){let y=m*f-o;for(let b=0;b<c;b++){let _=b*u-r;g.push(_,-y,0),x.push(0,0,1),d.push(b/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let b=y+c*m,_=y+c*(m+1),S=y+1+c*(m+1),M=y+1+c*m;p.push(b,_,M),p.push(_,S,M)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},gr=class i extends ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,p=new N,g=new ut;for(let x=0;x<=s;x++){for(let d=0;d<=n;d++){let m=r+d/n*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let d=x*(n+1);for(let m=0;m<n;m++){let y=m+d,b=y,_=y+n+1,S=y+n+2,M=y+1;a.push(b,_,M),a.push(_,S,M)}}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ba=class i extends ue{constructor(t=new ks([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),p=f.shape,g=f.holes;Ji.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=g.length;d<m;d++){let y=g[d];Ji.isClockWise(y)===!0&&(g[d]=y.reverse())}let x=Ji.triangulateShape(p,g);for(let d=0,m=g.length;d<m;d++){let y=g[d];p=p.concat(y)}for(let d=0,m=p.length;d<m;d++){let y=p[d];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let d=0,m=x.length;d<m;d++){let y=x[d],b=y[0]+u,_=y[1]+u,S=y[2]+u;n.push(b,_,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return e_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function e_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pe=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,p=[],g=[],x=[],d=[];for(let m=0;m<=n;m++){let y=[],b=m/n,_=o+b*a,S=t*Math.cos(_),M=Math.sqrt(t*t-S*S),w=0;m===0&&o===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let v=0;v<=e;v++){let T=v/e,R=s+T*r;u.x=-M*Math.cos(R),u.y=S,u.z=M*Math.sin(R),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(T+w,1-b),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let b=h[m][y+1],_=h[m][y],S=h[m+1][y],M=h[m+1][y+1];(m!==0||o>0)&&p.push(b,_,M),(m!==n-1||l<Math.PI)&&p.push(_,S,M)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new N,p=new N,g=new N;for(let x=0;x<=n;x++){let d=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;p.x=(t+e*Math.cos(d))*Math.cos(y),p.y=(t+e*Math.cos(d))*Math.sin(y),p.z=e*Math.sin(d),c.push(p.x,p.y,p.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),g.subVectors(p,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let d=1;d<=s;d++){let m=(s+1)*x+d-1,y=(s+1)*(x-1)+d-1,b=(s+1)*(x-1)+d,_=(s+1)*x+d;l.push(m,y,_),l.push(y,b,_)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function _r(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(om(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(om(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Gn(i){let t={};for(let e=0;e<i.length;e++){let n=_r(i[e]);for(let s in n)t[s]=n[s]}return t}function om(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function n_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var e0={clone:_r,merge:Gn},i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=n_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Dc=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ye=class extends Mi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oa=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Jc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nc=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function oo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:md,endingEnd:md}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gd:r=t,a=2*e-n;break;case xd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gd:o=t,l=2*n-e;break;case xd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,d=x*g,m=-f*d+2*f*x-f*g,y=(1+f)*d+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-p)*d+(1.5+p)*x+.5*g,_=p*d-p*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+y*o[c+S]+b*o[l+S]+_*o[u+S];return r}},Bc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Oc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hc=class extends Gs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),x=1-g;for(let d=0;d!==a;++d)r[d]=o[c+d]*x+o[l+d]*g;return r}let f=a*2,p=t-1;for(let g=0;g!==a;++g){let x=o[c+g],d=o[l+g],m=p*f+g*2,y=u[m],b=u[m+1],_=t*f+g*2,S=h[_],M=h[_+1],w=o_(n,e,y,S,s);r[g]=n0(w,x,b,M,d)}return r}};function n0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function r_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function o_(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=n0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=r_(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oo(e,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oo(t.times,Array),values:oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dd(t.settings)&&(n.settings={inTangents:oo(t.settings.inTangents,Array),outTangents:oo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case lc:e=this.InterpolantFactoryMethodSmooth;break;case pd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return lc;case this.InterpolantFactoryMethodBezier:return pd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dd(this.settings)&&(am(this.settings.inTangents,t),am(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ly(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function am(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=yc;var Vs=class extends fi{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=ga;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};zc.prototype.ValueTypeName="color";var kc=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};kc.prototype.ValueTypeName="number";var Gc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ha=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Gc(this.times,this.values,this.getValueSize(),t)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends fi{constructor(t,e,n){super(t,e,n)}};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=ga;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Vc.prototype.ValueTypeName="vector";var Wc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i0=new Wc,qc=class{constructor(t){this.manager=t!==void 0?t:i0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends En{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},za=class extends To{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fd=new Me,lm=new N,cm=new N,ka=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lm.setFromMatrixPosition(t.matrixWorld),e.position.copy(lm),cm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oc=new N,ac=new fn,Xi=new N,Ga=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oc,ac,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oc,ac,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hs=new N,hm=new ut,um=new ut,gn=class extends Ga{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_c*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hs.x,Hs.y).multiplyScalar(-t/Hs.z),Hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hs.x,Hs.y).multiplyScalar(-t/Hs.z)}getViewSize(t,e){return this.getViewBounds(t,hm,um),e.subVectors(um,hm)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zu*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sd=class extends ka{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Va=class extends To{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qs=class extends Ga{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ed=class extends ka{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wa=class extends To{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Ed}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qa=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ao=-90,lo=1,Xc=class extends En{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(ao,lo,t,e);s.layers=this.layers,this.add(s);let r=new gn(ao,lo,t,e);r.layers=this.layers,this.add(r);let o=new gn(ao,lo,t,e);o.layers=this.layers,this.add(o);let a=new gn(ao,lo,t,e);a.layers=this.layers,this.add(a);let l=new gn(ao,lo,t,e);l.layers=this.layers,this.add(l);let c=new gn(ao,lo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yc=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var $d="\\[\\]\\.:\\/",a_=new RegExp("["+$d+"]","g"),Kd="[^"+$d+"]",l_="[^"+$d.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",Kd),h_=/(WCOD+)?/.source.replace("WCOD",l_),u_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kd),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kd),f_=new RegExp("^"+c_+h_+u_+d_+"$"),p_=["material","materials","bones","map"],Td=class{constructor(t,e,n){let s=n||nn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},nn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a_,"")}static parseTrackName(t){let e=f_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Td;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wE=new Float32Array(1);var sf=class sf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};sf.prototype.isMatrix2=!0;var wd=sf;function jd(i,t,e,n){let s=m_(n);switch(e){case Wd:return i*t;case Co:return i*t/s.components*s.byteLength;case nh:return i*t/s.components*s.byteLength;case $s:return i*t*2/s.components*s.byteLength;case ih:return i*t*2/s.components*s.byteLength;case qd:return i*t*3/s.components*s.byteLength;case Ei:return i*t*4/s.components*s.byteLength;case sh:return i*t*4/s.components*s.byteLength;case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oh:case lh:return Math.max(i,16)*Math.max(t,8)/4;case rh:case ah:return Math.max(i,8)*Math.max(t,8)/2;case ch:case hh:case dh:case fh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uh:case Qa:case ph:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Th:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ch:case Ph:case Ih:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lh:case Dh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tl:case Nh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(i){switch(i){case ei:case zd:return{byteLength:1,components:1};case Ao:case kd:case pi:return{byteLength:2,components:1};case th:case eh:return{byteLength:2,components:4};case Hi:case Qc:case Si:return{byteLength:4,components:1};case Gd:case Vd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function T0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function v_(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b_=`#ifdef USE_ALPHAHASH
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
#endif`,S_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
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
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`#ifdef USE_BATCHING
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
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,U_=`#ifdef USE_BUMPMAP
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W_=`#define PI 3.141592653589793
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
} // validated`,q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
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
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fv=`#ifdef USE_ENVMAP
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
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,_v=`uniform sampler2D dfgLUT;
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
}`,vv=`
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iv=`#if defined( USE_POINTS_UV )
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
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
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
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
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
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
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
}`,R1=`#if DEPTH_PACKING == 3200
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
}`,C1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,O1=`#define LAMBERT
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
}`,H1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,k1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,X1=`#define STANDARD
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
}`,Y1=`#define TOON
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
}`,Z1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,$1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,j1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:M_,alphahash_pars_fragment:b_,alphamap_fragment:S_,alphamap_pars_fragment:E_,alphatest_fragment:T_,alphatest_pars_fragment:w_,aomap_fragment:A_,aomap_pars_fragment:R_,batching_pars_vertex:C_,batching_vertex:P_,begin_vertex:I_,beginnormal_vertex:L_,bsdfs:D_,iridescence_fragment:N_,bumpmap_pars_fragment:U_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:O_,clipping_planes_vertex:H_,color_fragment:z_,color_pars_fragment:k_,color_pars_vertex:G_,color_vertex:V_,common:W_,cube_uv_reflection_fragment:q_,defaultnormal_vertex:X_,displacementmap_pars_vertex:Y_,displacementmap_vertex:Z_,emissivemap_fragment:J_,emissivemap_pars_fragment:$_,colorspace_fragment:K_,colorspace_pars_fragment:j_,envmap_fragment:Q_,envmap_common_pars_fragment:tv,envmap_pars_fragment:ev,envmap_pars_vertex:nv,envmap_physical_pars_fragment:fv,envmap_vertex:iv,fog_vertex:sv,fog_pars_vertex:rv,fog_fragment:ov,fog_pars_fragment:av,gradientmap_pars_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:uv,lights_pars_begin:dv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:xv,lights_physical_fragment:yv,lights_physical_pars_fragment:_v,lights_fragment_begin:vv,lights_fragment_maps:Mv,lights_fragment_end:bv,lightprobes_pars_fragment:Sv,logdepthbuf_fragment:Ev,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Av,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Pv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Nv,morphcolor_vertex:Uv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Bv,morphtarget_vertex:Ov,normal_fragment_begin:Hv,normal_fragment_maps:zv,normal_pars_fragment:kv,normal_pars_vertex:Gv,normal_vertex:Vv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:Yv,iridescence_pars_fragment:Zv,opaque_fragment:Jv,packing:$v,premultiplied_alpha_fragment:Kv,project_vertex:jv,dithering_fragment:Qv,dithering_pars_fragment:t1,roughnessmap_fragment:e1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:l1,skinning_vertex:c1,skinnormal_vertex:h1,specularmap_fragment:u1,specularmap_pars_fragment:d1,tonemapping_fragment:f1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:x1,uv_pars_vertex:y1,uv_vertex:_1,worldpos_vertex:v1,background_vert:M1,background_frag:b1,backgroundCube_vert:S1,backgroundCube_frag:E1,cube_vert:T1,cube_frag:w1,depth_vert:A1,depth_frag:R1,distance_vert:C1,distance_frag:P1,equirect_vert:I1,equirect_frag:L1,linedashed_vert:D1,linedashed_frag:N1,meshbasic_vert:U1,meshbasic_frag:F1,meshlambert_vert:B1,meshlambert_frag:O1,meshmatcap_vert:H1,meshmatcap_frag:z1,meshnormal_vert:k1,meshnormal_frag:G1,meshphong_vert:V1,meshphong_frag:W1,meshphysical_vert:q1,meshphysical_frag:X1,meshtoon_vert:Y1,meshtoon_frag:Z1,points_vert:J1,points_frag:$1,shadow_vert:K1,shadow_frag:j1,sprite_vert:Q1,sprite_frag:tM},Ct={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},is={basic:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Gn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Gn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Gn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Gn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Gn([Ct.points,Ct.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Gn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Gn([Ct.common,Ct.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Gn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Gn([Ct.sprite,Ct.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Gn([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Gn([Ct.lights,Ct.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};is.physical={uniforms:Gn([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var Bh={r:0,b:0,g:0},eM=new Me,w0=new ce;w0.set(-1,0,0,0,1,0,0,0,1);function nM(i,t,e,n,s,r){let o=new pt(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let _=y.backgroundBlurriness>0;b=t.get(b,_)}return b}function g(y){let b=!1,_=p(y);_===null?d(o,a):_&&_.isColor&&(d(_,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===Ya)?(c===void 0&&(c=new K(new In(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:_r(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(w0),c.material.toneMapped=Ce.getTransfer(_.colorSpace)!==ke,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new K(new an(2,2),new sn({name:"BackgroundMaterial",uniforms:_r(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ce.getTransfer(_.colorSpace)!==ke,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,b){y.getRGB(Bh,Jd(i)),e.buffers.color.setClear(Bh.r,Bh.g,Bh.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,d(o,a)},render:g,addToRenderList:x,dispose:m}}function iM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,I,D,C,U){let G=!1,O=u(P,C,D,I);r!==O&&(r=O,c(r.object)),G=p(P,C,D,U),G&&g(P,C,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(P,I,D,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,I,D,C){let U=C.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let O=P.isInstancedMesh===!0?P.id:0,$=G[O];$===void 0&&($={},G[O]=$);let H=$[D.id];H===void 0&&(H={},$[D.id]=H);let q=H[U];return q===void 0&&(q=f(l()),H[U]=q),q}function f(P){let I=[],D=[],C=[];for(let U=0;U<e;U++)I[U]=0,D[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:C,object:P,attributes:{},index:null}}function p(P,I,D,C){let U=r.attributes,G=I.attributes,O=0,$=D.getAttributes();for(let H in $)if($[H].location>=0){let J=U[H],mt=G[H];if(mt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),J===void 0||J.attribute!==mt||mt&&J.data!==mt.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function g(P,I,D,C){let U={},G=I.attributes,O=0,$=D.getAttributes();for(let H in $)if($[H].location>=0){let J=G[H];J===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let mt={};mt.attribute=J,J&&J.data&&(mt.data=J.data),U[H]=mt,O++}r.attributes=U,r.attributesNum=O,r.index=C}function x(){let P=r.newAttributes;for(let I=0,D=P.length;I<D;I++)P[I]=0}function d(P){m(P,0)}function m(P,I){let D=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;D[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),U[P]!==I&&(i.vertexAttribDivisor(P,I),U[P]=I)}function y(){let P=r.newAttributes,I=r.enabledAttributes;for(let D=0,C=I.length;D<C;D++)I[D]!==P[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function b(P,I,D,C,U,G,O){O===!0?i.vertexAttribIPointer(P,I,D,U,G):i.vertexAttribPointer(P,I,D,C,U,G)}function _(P,I,D,C){x();let U=C.attributes,G=D.getAttributes(),O=I.defaultAttributeValues;for(let $ in G){let H=G[$];if(H.location>=0){let q=U[$];if(q===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){let J=q.normalized,mt=q.itemSize,wt=t.get(q);if(wt===void 0)continue;let le=wt.buffer,se=wt.type,Yt=wt.bytesPerElement,nt=se===i.INT||se===i.UNSIGNED_INT||q.gpuType===Qc;if(q.isInterleavedBufferAttribute){let ot=q.data,bt=ot.stride,Ot=q.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<H.locationSize;Rt++)m(H.location+Rt,ot.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Rt=0;Rt<H.locationSize;Rt++)d(H.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Rt=0;Rt<H.locationSize;Rt++)b(H.location+Rt,mt/H.locationSize,se,J,bt*Yt,(Ot+mt/H.locationSize*Rt)*Yt,nt)}else{if(q.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot,q.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ot=0;ot<H.locationSize;ot++)b(H.location+ot,mt/H.locationSize,se,J,mt*Yt,mt/H.locationSize*ot*Yt,nt)}}else if(O!==void 0){let J=O[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(H.location,J);break;case 3:i.vertexAttrib3fv(H.location,J);break;case 4:i.vertexAttrib4fv(H.location,J);break;default:i.vertexAttrib1fv(H.location,J)}}}}y()}function S(){T();for(let P in n){let I=n[P];for(let D in I){let C=I[D];for(let U in C){let G=C[U];for(let O in G)h(G[O].object),delete G[O];delete C[U]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let D in I){let C=I[D];for(let U in C){let G=C[U];for(let O in G)h(G[O].object),delete G[O];delete C[U]}}delete n[P.id]}function w(P){for(let I in n){let D=n[I];for(let C in D){let U=D[C];if(U[P.id]===void 0)continue;let G=U[P.id];for(let O in G)h(G[O].object),delete G[O];delete U[P.id]}}}function v(P){for(let I in n){let D=n[I],C=P.isInstancedMesh===!0?P.id:0,U=D[C];if(U!==void 0){for(let G in U){let O=U[G];for(let $ in O)h(O[$].object),delete O[$];delete U[G]}delete D[C],Object.keys(D).length===0&&delete n[I]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:d,disableUnusedAttributes:y}}function sM(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Ei&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let v=w===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ei&&w!==Si&&!v&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:S,samples:M}}function oM(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Li,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let y=r?0:n,b=y*4,_=m.clippingState||null;l.value=_,_=h(g,f,b,p);for(let S=0;S!==b;++S)_[S]=e[S];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,d=null;if(x!==0){if(d=l.value,g!==!0||d===null){let m=p+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let b=0,_=p;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}var Io=4,aM=6,lM=20,cM=256,nl=new qs,s0=new pt,rf=null,of=0,af=0,lf=!1,hM=new N,vr=new N,Hh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=hM}=r;rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rf,of,af),this._renderer.xr.enabled=lf,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:pi,format:Ei,colorSpace:xa,depthBuffer:!1},s=r0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=uM(r)),this._blurMaterial=fM(r,t,e),this._ggxMaterial=dM(r,t,e)}return s}_compileMaterial(t){let e=new K(new ue,t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,n,s,r){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(s0),u.toneMapping=Oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new In,new Pe({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,d=x.material,m=!1,y=t.background;y?y.isColor&&(d.color.copy(y),t.background=null,m=!0):(d.color.copy(s0),m=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;Po(s,_*S,b>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(x,l),u.render(t,l)}u.toneMapping=p,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ys||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Po(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,nl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,p=u*f,{_lodMax:g}=this,x=this._sizeLods[n],d=3*x*(n>g-Io?n-g+Io:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Po(r,d,m,3*x,2*x),s.setRenderTarget(r),s.render(a,nl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Po(t,d,m,3*x,2*x),s.setRenderTarget(t),s.render(a,nl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Io?s-this._lodMax+Io:0),f=4*(this._cubeSize-h);Po(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,nl)}};function uM(i){let t=[],e=[],n=i,s=i-Io+1+aM;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,p=3,g=new Float32Array(p*f*u),x=new Float32Array(p*f*u);for(let m=0;m<u;m++){let y=m%3*2/3-1,b=m>2?0:-1,_=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];g.set(_,p*f*m);for(let S=0;S<f;S++){let M=h[S*2]*2-1,w=h[S*2+1]*2-1;m===0?vr.set(1,w,M):m===1?vr.set(-M,1,-w):m===2?vr.set(-M,w,1):m===3?vr.set(-1,w,-M):m===4?vr.set(-M,-1,w):vr.set(M,w,-1),vr.toArray(x,(m*f+S)*p)}}let d=new ue;d.setAttribute("position",new Kt(g,p)),d.setAttribute("outputDirection",new Kt(x,p)),e.push(new K(d,null)),n>Io&&n--}return{lodMeshes:e,sizeLods:t}}function r0(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dM(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function fM(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:lM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function o0(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function a0(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Gh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zh=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ra(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:es});r.uniforms.tEquirect.value=e;let o=new K(s,r),a=e.minFilter;return e.minFilter===Zs&&(e.minFilter=Dn),new Xc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function pM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===$c||p===Kc)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new zh(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let p=f.mapping,g=p===$c||p===Kc,x=p===Ys||p===yr;if(g||x){let d=e.get(f),m=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Hh(i)),d=g?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),d.texture;if(d!==void 0)return d.texture;{let y=f.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Hh(i)),d=g?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),f.addEventListener("dispose",h),d.texture):null}}}return f}function a(f,p){return p===$c?f.mapping=Ys:p===Kc&&(f.mapping=yr),f}function l(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function mM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ur("WebGLRenderer: "+n+" extension not supported."),s}}}function gM(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(p!==null){let y=p.array;x=p.version;for(let b=0,_=y.length;b<_;b+=3){let S=y[b+0],M=y[b+1],w=y[b+2];f.push(S,M,M,w,w,S)}}else{let y=g.array;x=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let S=b+0,M=b+1,w=b+2;f.push(S,M,M,w,w,S)}}let d=new(g.count>=65535?Ta:Ea)(f,1);d.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,d)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xM(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*o,p),e.update(f,n,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let x=0;for(let d=0;d<p;d++)x+=f[d];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _M(i,t,e){let n=new WeakMap,s=new on;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*S*4*u),w=new Ma(M,_,S,u);w.type=Si,w.needsUpdate=!0;let v=b*4;for(let R=0;R<u;R++){let P=d[R],I=m[R],D=y[R],C=_*S*4*R;for(let U=0;U<P.count;U++){let G=U*v;p===!0&&(s.fromBufferAttribute(P,U),M[C+G+0]=s.x,M[C+G+1]=s.y,M[C+G+2]=s.z,M[C+G+3]=0),g===!0&&(s.fromBufferAttribute(I,U),M[C+G+4]=s.x,M[C+G+5]=s.y,M[C+G+6]=s.z,M[C+G+7]=0),x===!0&&(s.fromBufferAttribute(D,U),M[C+G+8]=s.x,M[C+G+9]=s.y,M[C+G+10]=s.z,M[C+G+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new ut(_,S)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vM(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var MM={[Ld]:"LINEAR_TONE_MAPPING",[Dd]:"REINHARD_TONE_MAPPING",[Nd]:"CINEON_TONE_MAPPING",[Ud]:"ACES_FILMIC_TONE_MAPPING",[Bd]:"AGX_TONE_MAPPING",[Od]:"NEUTRAL_TONE_MAPPING",[Fd]:"CUSTOM_TONE_MAPPING"};function bM(i,t,e,n,s,r){let o=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ue;c.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new K(c,h),f=new qs(-1,1,1,-1,0,1),p=null,g=null,x=!1,d,m=null,y=[],b=!1;this.setSize=function(_,S){o.setSize(_,S),a!==null&&a.setSize(_,S),l!==null&&l.setSize(_,S);for(let M=0;M<y.length;M++){let w=y[M];w.setSize&&w.setSize(_,S)}},this.setEffects=function(_){y=_,b=y.length>0&&y[0].isRenderPass===!0;let S=o.width,M=o.height;y.length>0&&a===null&&(a=new Nn(S,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(S,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<y.length;w++){let v=y[w];v.setSize&&v.setSize(S,M)}},this.begin=function(_,S){if(x||_.toneMapping===Oi&&y.length===0)return!1;if(m=S,S!==null){let M=S.width,w=S.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return b===!1&&_.setRenderTarget(o),d=_.toneMapping,_.toneMapping=Oi,!0},this.hasRenderPass=function(){return b},this.end=function(_,S){_.toneMapping=d,x=!0;let M=o,w=a;for(let v=0;v<y.length;v++){let T=y[v];T.enabled!==!1&&(T.render(_,w,M,S),T.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,h.defines={},Ce.getTransfer(p)===ke&&(h.defines.SRGB_TRANSFER="");let v=MM[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(m),_.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var A0=new Xn,uf=new zs(1,1),R0=new Ma,C0=new bc,P0=new Ra,l0=[],c0=[],h0=new Float32Array(16),u0=new Float32Array(9),d0=new Float32Array(4);function Do(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=l0[s];if(r===void 0&&(r=new Float32Array(s),l0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function wn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function An(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vh(i,t){let e=c0[t];e===void 0&&(e=new Int32Array(t),c0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function SM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function EM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2fv(this.addr,t),An(e,t)}}function TM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(wn(e,t))return;i.uniform3fv(this.addr,t),An(e,t)}}function wM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4fv(this.addr,t),An(e,t)}}function AM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;d0.set(n),i.uniformMatrix2fv(this.addr,!1,d0),An(e,n)}}function RM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;u0.set(n),i.uniformMatrix3fv(this.addr,!1,u0),An(e,n)}}function CM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;h0.set(n),i.uniformMatrix4fv(this.addr,!1,h0),An(e,n)}}function PM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function IM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2iv(this.addr,t),An(e,t)}}function LM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3iv(this.addr,t),An(e,t)}}function DM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4iv(this.addr,t),An(e,t)}}function NM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function UM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2uiv(this.addr,t),An(e,t)}}function FM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3uiv(this.addr,t),An(e,t)}}function BM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4uiv(this.addr,t),An(e,t)}}function OM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uf.compareFunction=e.isReversedDepthBuffer()?Fh:Uh,r=uf):r=A0,e.setTexture2D(t||r,s)}function HM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||C0,s)}function zM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||P0,s)}function kM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||R0,s)}function GM(i){switch(i){case 5126:return SM;case 35664:return EM;case 35665:return TM;case 35666:return wM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return IM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return UM;case 36295:return FM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return kM}}function VM(i,t){i.uniform1fv(this.addr,t)}function WM(i,t){let e=Do(t,this.size,2);i.uniform2fv(this.addr,e)}function qM(i,t){let e=Do(t,this.size,3);i.uniform3fv(this.addr,e)}function XM(i,t){let e=Do(t,this.size,4);i.uniform4fv(this.addr,e)}function YM(i,t){let e=Do(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ZM(i,t){let e=Do(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function JM(i,t){let e=Do(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $M(i,t){i.uniform1iv(this.addr,t)}function KM(i,t){i.uniform2iv(this.addr,t)}function jM(i,t){i.uniform3iv(this.addr,t)}function QM(i,t){i.uniform4iv(this.addr,t)}function tb(i,t){i.uniform1uiv(this.addr,t)}function eb(i,t){i.uniform2uiv(this.addr,t)}function nb(i,t){i.uniform3uiv(this.addr,t)}function ib(i,t){i.uniform4uiv(this.addr,t)}function sb(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uf:o=A0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function rb(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||C0,r[o])}function ob(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||P0,r[o])}function ab(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||R0,r[o])}function lb(i){switch(i){case 5126:return VM;case 35664:return WM;case 35665:return qM;case 35666:return XM;case 35674:return YM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return $M;case 35667:case 35671:return KM;case 35668:case 35672:return jM;case 35669:case 35673:return QM;case 5125:return tb;case 36294:return eb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}var df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=GM(e.type)}},ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lb(e.type)}},pf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function f0(i,t){i.seq.push(t),i.map[t.id]=t}function cb(i,t,e){let n=i.name,s=n.length;for(cf.lastIndex=0;;){let r=cf.exec(n),o=cf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){f0(e,c===void 0?new df(a,i,t):new ff(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new pf(a),f0(e,u)),e=u}}}var Lo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);cb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function p0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hb=37297,ub=0;function db(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var m0=new ce;function fb(i){Ce._getMatrix(m0,Ce.workingColorSpace,i);let t=`mat3( ${m0.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case ya:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function g0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+db(i.getShaderSource(t),a)}else return r}function pb(i,t){let e=fb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var mb={[Ld]:"Linear",[Dd]:"Reinhard",[Nd]:"Cineon",[Ud]:"ACESFilmic",[Bd]:"AgX",[Od]:"Neutral",[Fd]:"Custom"};function gb(i,t){let e=mb[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oh=new N;function xb(){Ce.getLuminanceCoefficients(Oh);let i=Oh.x.toFixed(4),t=Oh.y.toFixed(4),e=Oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function _b(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function sl(i){return i!==""}function x0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function y0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(i){return i.replace(Mb,Sb)}var bb=new Map;function Sb(i,t){let e=_e[t];if(e===void 0){let n=bb.get(t);if(n!==void 0)e=_e[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mf(e)}var Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(i){return i.replace(Eb,Tb)}function Tb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function v0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var wb={[Xa]:"SHADOWMAP_TYPE_PCF",[wo]:"SHADOWMAP_TYPE_VSM"};function Ab(i){return wb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rb={[Ys]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE_UV"};function Cb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pb={[yr]:"ENVMAP_MODE_REFRACTION"};function Ib(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Pb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lb={[Jc]:"ENVMAP_BLENDING_MULTIPLY",[Dm]:"ENVMAP_BLENDING_MIX",[Nm]:"ENVMAP_BLENDING_ADD"};function Db(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lb[i.combine]||"ENVMAP_BLENDING_NONE"}function Nb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ub(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ab(e),c=Cb(e),h=Ib(e),u=Db(e),f=Nb(e),p=yb(e),g=_b(r),x=s.createProgram(),d,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sl).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sl).join(`
`),m.length>0&&(m+=`
`)):(d=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),m=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?_e.tonemapping_pars_fragment:"",e.toneMapping!==Oi?gb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,pb("linearToOutputTexel",e.outputColorSpace),xb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sl).join(`
`)),o=mf(o),o=x0(o,e),o=y0(o,e),a=mf(a),a=x0(a,e),a=y0(a,e),o=_0(o),a=_0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===Yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=y+d+o,_=y+m+a,S=p0(s,s.VERTEX_SHADER,b),M=p0(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(M)||"",U=I.trim(),G=D.trim(),O=C.trim(),$=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,M);else{let q=g0(s,S,"vertex"),J=g0(s,M,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+q+`
`+J)}else U!==""?jt("WebGLProgram: Program Info Log:",U):(G===""||O==="")&&(H=!1);H&&(P.diagnostics={runnable:$,programLog:U,vertexShader:{log:G,prefix:d},fragmentShader:{log:O,prefix:m}})}s.deleteShader(S),s.deleteShader(M),v=new Lo(s,x),T=vb(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,hb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ub++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var Fb=0,gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xf(t),e.set(t,n)),n}},xf=class{constructor(t){this.id=Fb++,this.code=t,this.usedTimes=0}};function Bb(i){return i===$s||i===Qa||i===tl}function Ob(i,t,e,n,s,r){let o=new ba,a=new gf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,R,P,I,D){let C=P.fog,U=I.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=t.get(v.envMap||G,O),H=$&&$.mapping===Ya?$.image.height:null,q=p[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&jt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=J!==void 0?J.length:0,wt=0;U.morphAttributes.position!==void 0&&(wt=1),U.morphAttributes.normal!==void 0&&(wt=2),U.morphAttributes.color!==void 0&&(wt=3);let le,se,Yt,nt;if(q){let He=is[q];le=He.vertexShader,se=He.fragmentShader}else{le=v.vertexShader,se=v.fragmentShader;let He=a.getVertexShaderStage(v),Ne=a.getFragmentShaderStage(v);a.update(v,He,Ne),Yt=He.id,nt=Ne.id}let ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,Rt=I.isBatchedMesh===!0,Jt=!!v.map,De=!!v.matcap,rt=!!$,ht=!!v.aoMap,ft=!!v.lightMap,dt=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,Nt=!!v.displacementMap,Gt=!!v.emissiveMap,$t=!!v.metalnessMap,ne=!!v.roughnessMap,B=v.anisotropy>0,Ae=v.clearcoat>0,ge=v.dispersion>0,L=v.retroreflectivity>0,E=v.iridescence>0,W=v.sheen>0,X=v.transmission>0,et=B&&!!v.anisotropyMap,gt=Ae&&!!v.clearcoatMap,_t=Ae&&!!v.clearcoatNormalMap,it=Ae&&!!v.clearcoatRoughnessMap,at=E&&!!v.iridescenceMap,St=E&&!!v.iridescenceThicknessMap,Dt=W&&!!v.sheenColorMap,vt=W&&!!v.sheenRoughnessMap,yt=!!v.specularMap,Ht=!!v.specularColorMap,Zt=!!v.specularIntensityMap,he=X&&!!v.transmissionMap,k=X&&!!v.thicknessMap,Mt=!!v.gradientMap,st=!!v.alphaMap,Et=v.alphaTest>0,It=!!v.alphaHash,ct=!!v.extensions,Vt=Oi;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Bt={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:le,fragmentShader:se,defines:v.defines,customVertexShaderID:Yt,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Jt,matcap:De,envMap:rt,envMapMode:rt&&$.mapping,envMapCubeUVHeight:H,aoMap:ht,lightMap:ft,bumpMap:dt,normalMap:xt,displacementMap:Nt,emissiveMap:Gt,normalMapObjectSpace:xt&&v.normalMapType===Bm,normalMapTangentSpace:xt&&v.normalMapType===el,packedNormalMap:xt&&v.normalMapType===el&&Bb(v.normalMap.format),metalnessMap:$t,roughnessMap:ne,anisotropy:B,anisotropyMap:et,clearcoat:Ae,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:it,dispersion:ge,retroreflection:L,iridescence:E,iridescenceMap:at,iridescenceThicknessMap:St,sheen:W,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:yt,specularColorMap:Ht,specularIntensityMap:Zt,transmission:X,transmissionMap:he,thicknessMap:k,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===Bi&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:Et,alphaHash:It,combine:v.combine,mapUv:Jt&&g(v.map.channel),aoMapUv:ht&&g(v.aoMap.channel),lightMapUv:ft&&g(v.lightMap.channel),bumpMapUv:dt&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:Nt&&g(v.displacementMap.channel),emissiveMapUv:Gt&&g(v.emissiveMap.channel),metalnessMapUv:$t&&g(v.metalnessMap.channel),roughnessMapUv:ne&&g(v.roughnessMap.channel),anisotropyMapUv:et&&g(v.anisotropyMap.channel),clearcoatMapUv:gt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(v.sheenRoughnessMap.channel),specularMapUv:yt&&g(v.specularMap.channel),specularColorMapUv:Ht&&g(v.specularColorMap.channel),specularIntensityMapUv:Zt&&g(v.specularIntensityMap.channel),transmissionMapUv:he&&g(v.transmissionMap.channel),thicknessMapUv:k&&g(v.thicknessMap.channel),alphaMapUv:st&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||B),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(Jt||st),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:bt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Jt&&v.map.isVideoTexture===!0&&Ce.getTransfer(v.map.colorSpace)===ke,decodeVideoTextureEmissive:Gt&&v.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(v.emissiveMap.colorSpace)===ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===me,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function d(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(T,v),y(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let T=p[v.type],R;if(T){let P=is[T];R=e0.clone(P.uniforms)}else R=v.uniforms;return R}function _(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new Ub(i,T,v,s),c.push(R),h.set(T,R)),R}function S(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:b,acquireProgram:_,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function Hb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function M0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function b0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,x,d,m){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:d,group:m},i[t]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=g,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=d,y.group=m),t++,y}function l(f,p,g,x,d,m,y){y.reversedDepth===!0&&(d=-d);let b=a(f,p,g,x,d,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(f,p,g,x,d,m){let y=a(f,p,g,x,d,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,p){e.length>1&&e.sort(f||zb),n.length>1&&n.sort(p||M0),s.length>1&&s.sort(p||M0)}function u(){for(let f=t,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function kb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new b0,i.set(n,[o])):s>=r.length?(o=new b0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new pt};break;case"SpotLight":e={position:new N,direction:new N,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Vb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wb=0;function qb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xb(i){let t=new Gb,e=Vb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Me,o=new Me;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,g=0,x=0,d=0,m=0,y=0,b=0,_=0,S=0,M=0,w=0,v=0,T=0,R=0;c.sort(qb);for(let I=0,D=c.length;I<D;I++){let C=c[I],U=C.color,G=C.intensity,O=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===$s?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*G,u+=U.g*G,f+=U.b*G;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],G);R++}else if(C.isSunLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,J=e.get(C);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=$;let mt=q.getViewportCount();for(let wt=0;wt<mt;wt++)n.sunShadowMatrix[x+wt]=q.getMatrix(wt),n.sunShadowCascade[x+wt]=q._cascadeData[wt];x+=mt,g++}n.sun[p]=H,p++}else if(C.isDirectionalLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,J=e.get(C);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=H,d++}else if(C.isSpotLight){let H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(G),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[y]=H;let q=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,q.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[y]=q.matrix,C.castShadow){let J=e.get(C);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=$,w++}y++}else if(C.isRectAreaLight){let H=t.get(C);H.color.copy(U).multiplyScalar(G),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=H,b++}else if(C.isPointLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let q=C.shadow,J=e.get(C);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=C.shadow.matrix,M++}n.point[m]=H,m++}else if(C.isHemisphereLight){let H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(G),H.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[_]=H,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==d||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==b||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==v||P.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=d,n.spot.length=y,n.rectArea.length=b,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.sunLength=p,P.directionalLength=d,P.pointLength=m,P.spotLength=y,P.rectAreaLength=b,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=v,P.numLightProbes=R,n.version=Wb++)}function l(c,h){let u=0,f=0,p=0,g=0,x=0,d=0,m=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let _=c[y];if(_.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(_.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){let S=n.hemi[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),d++}}}return{setup:a,setupView:l,state:n}}function S0(i){let t=new Xb(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Yb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new S0(i),t.set(s,[a])):r>=o.length?(a=new S0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
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
}`,$b=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Kb=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],E0=new Me,il=new N,hf=new N;function jb(i,t,e){let n=new _o,s=new ut,r=new ut,o=new on,a=new Nc,l=new Uc,c={},h=e.maxTextureSize,u={[Xs]:Tn,[Tn]:Xs,[me]:me},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Zb,fragmentShader:Jb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new K(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let m=this.type;this.render=function(M,w,v){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;this.type===pm&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xa);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(es),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=m!==this.type;D&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=M.length;C<U;C++){let G=M[C],O=G.shadow;if(O===void 0){jt("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let $=O.getFrameExtents();s.multiply($),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,O.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||D===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===wo){if(G.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nn(s.x,s.y,{format:$s,type:pi,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new zs(s.x,s.y,Si),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=$i,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn}else G.isPointLight?(O.map=new zh(s.x),O.map.depthTexture=new wc(s.x,Hi)):(O.map=new Nn(s.x,s.y),O.map.depthTexture=new zs(s.x,s.y,Hi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=$i,this.type===Xa?(O.map.depthTexture.compareFunction=H?Fh:Uh,O.map.depthTexture.minFilter=Dn,O.map.depthTexture.magFilter=Dn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,v);for(let J=0;J<q;J++){let mt=O.getCamera(J);if(G.isPointLight){let wt=O.camera,le=O.matrix,se=G.distance||wt.far;se!==wt.far&&(wt.far=se,wt.updateProjectionMatrix()),il.setFromMatrixPosition(G.matrixWorld),wt.position.copy(il),hf.copy(wt.position),hf.add($b[J]),wt.up.copy(Kb[J]),wt.lookAt(hf),wt.updateMatrixWorld(),le.makeTranslation(-il.x,-il.y,-il.z),E0.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(E0,wt.coordinateSystem,wt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,J),i.clear();else{J===0&&(i.setRenderTarget(O.map),i.clear());let wt=O.getViewport(J);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),I.viewport(o)}n=O.getFrustum(J),_(w,v,mt,G,this.type)}O.isPointLightShadow!==!0&&this.type===wo&&y(O,v),O.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(T,R,P)};function y(M,w){let v=t.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Nn(s.x,s.y,{format:$s,type:pi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,v,f,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,v,p,x,null)}function b(M,w,v,T){let R=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=R.uuid,D=w.uuid,C=c[I];C===void 0&&(C={},c[I]=C);let U=C[D];U===void 0&&(U=R.clone(),C[D]=U,w.addEventListener("dispose",S)),R=U}if(R.visible=w.visible,R.wireframe=w.wireframe,T===wo?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=v}return R}function _(M,w,v,T,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===wo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let D=t.update(M),C=M.material;if(Array.isArray(C)){let U=D.groups;for(let G=0,O=U.length;G<O;G++){let $=U[G],H=C[$.materialIndex];if(H&&H.visible){let q=b(M,H,T,R);M.onBeforeShadow(i,M,w,v,D,q,$),i.renderBufferDirect(v,null,D,q,M,$),M.onAfterShadow(i,M,w,v,D,q,$)}}}else if(C.visible){let U=b(M,C,T,R);M.onBeforeShadow(i,M,w,v,D,U,null),i.renderBufferDirect(v,null,D,U,M,null),M.onAfterShadow(i,M,w,v,D,U,null)}}let I=M.children;for(let D=0,C=I.length;D<C;D++)_(I[D],w,v,T,R)}function S(M){M.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Qb(i,t){function e(){let k=!1,Mt=new on,st=null,Et=new on(0,0,0,0);return{setMask:function(It){st!==It&&!k&&(i.colorMask(It,It,It,It),st=It)},setLocked:function(It){k=It},setClear:function(It,ct,Vt,Bt,He){He===!0&&(It*=Bt,ct*=Bt,Vt*=Bt),Mt.set(It,ct,Vt,Bt),Et.equals(Mt)===!1&&(i.clearColor(It,ct,Vt,Bt),Et.copy(Mt))},reset:function(){k=!1,st=null,Et.set(-1,0,0,0)}}}function n(){let k=!1,Mt=!1,st=null,Et=null,It=null;return{setReversed:function(ct){if(Mt!==ct){let Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;let Bt=It;It=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(ct){ct?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ct){st!==ct&&!k&&(i.depthMask(ct),st=ct)},setFunc:function(ct){if(Mt&&(ct=Zm[ct]),Et!==ct){switch(ct){case hc:i.depthFunc(i.NEVER);break;case uc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=ct}},setLocked:function(ct){k=ct},setClear:function(ct){It!==ct&&(It=ct,Mt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){k=!1,st=null,Et=null,It=null,Mt=!1}}}function s(){let k=!1,Mt=null,st=null,Et=null,It=null,ct=null,Vt=null,Bt=null,He=null;return{setTest:function(Ne){k||(Ne?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Ne){Mt!==Ne&&!k&&(i.stencilMask(Ne),Mt=Ne)},setFunc:function(Ne,Vn,ai){(st!==Ne||Et!==Vn||It!==ai)&&(i.stencilFunc(Ne,Vn,ai),st=Ne,Et=Vn,It=ai)},setOp:function(Ne,Vn,ai){(ct!==Ne||Vt!==Vn||Bt!==ai)&&(i.stencilOp(Ne,Vn,ai),ct=Ne,Vt=Vn,Bt=ai)},setLocked:function(Ne){k=Ne},setClear:function(Ne){He!==Ne&&(i.clearStencil(Ne),He=Ne)},reset:function(){k=!1,Mt=null,st=null,Et=null,It=null,ct=null,Vt=null,Bt=null,He=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},p=new WeakMap,g=[],x=null,d=!1,m=null,y=null,b=null,_=null,S=null,M=null,w=null,v=new pt(0,0,0),T=0,R=!1,P=null,I=null,D=null,C=null,U=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=$>=2);let q=null,J={},mt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),le=new on().fromArray(mt),se=new on().fromArray(wt);function Yt(k,Mt,st,Et){let It=new Uint8Array(4),ct=i.createTexture();i.bindTexture(k,ct),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<st;Vt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return ct}let nt={};nt[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(ho),dt(!1),xt(Ad),ot(i.CULL_FACE),ht(es);function ot(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function bt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ot(k,Mt){return f[k]!==Mt?(i.bindFramebuffer(k,Mt),f[k]=Mt,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Mt),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Rt(k,Mt){let st=g,Et=!1;if(k){st=p.get(Mt),st===void 0&&(st=[],p.set(Mt,st));let It=k.textures;if(st.length!==It.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Vt=It.length;ct<Vt;ct++)st[ct]=i.COLOR_ATTACHMENT0+ct;st.length=It.length,Et=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Et=!0);Et&&i.drawBuffers(st)}function Jt(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let De={[xr]:i.FUNC_ADD,[gm]:i.FUNC_SUBTRACT,[xm]:i.FUNC_REVERSE_SUBTRACT};De[ym]=i.MIN,De[_m]=i.MAX;let rt={[vm]:i.ZERO,[Mm]:i.ONE,[bm]:i.SRC_COLOR,[Pd]:i.SRC_ALPHA,[Rm]:i.SRC_ALPHA_SATURATE,[wm]:i.DST_COLOR,[Em]:i.DST_ALPHA,[Sm]:i.ONE_MINUS_SRC_COLOR,[Id]:i.ONE_MINUS_SRC_ALPHA,[Am]:i.ONE_MINUS_DST_COLOR,[Tm]:i.ONE_MINUS_DST_ALPHA,[Cm]:i.CONSTANT_COLOR,[Pm]:i.ONE_MINUS_CONSTANT_COLOR,[Im]:i.CONSTANT_ALPHA,[Lm]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(k,Mt,st,Et,It,ct,Vt,Bt,He,Ne){if(k===es){d===!0&&(bt(i.BLEND),d=!1);return}if(d===!1&&(ot(i.BLEND),d=!0),k!==mm){if(k!==m||Ne!==R){if((y!==xr||S!==xr)&&(i.blendEquation(i.FUNC_ADD),y=xr,S=xr),Ne)switch(k){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kn:i.blendFunc(i.ONE,i.ONE);break;case Rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",k);break}else switch(k){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rd:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cd:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",k);break}b=null,_=null,M=null,w=null,v.set(0,0,0),T=0,m=k,R=Ne}return}It=It||Mt,ct=ct||st,Vt=Vt||Et,(Mt!==y||It!==S)&&(i.blendEquationSeparate(De[Mt],De[It]),y=Mt,S=It),(st!==b||Et!==_||ct!==M||Vt!==w)&&(i.blendFuncSeparate(rt[st],rt[Et],rt[ct],rt[Vt]),b=st,_=Et,M=ct,w=Vt),(Bt.equals(v)===!1||He!==T)&&(i.blendColor(Bt.r,Bt.g,Bt.b,He),v.copy(Bt),T=He),m=k,R=!1}function ft(k,Mt){k.side===me?bt(i.CULL_FACE):ot(i.CULL_FACE);let st=k.side===Tn;Mt&&(st=!st),dt(st),k.blending===Bi&&k.transparent===!1?ht(es):ht(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Et=k.stencilWrite;a.setTest(Et),Et&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function xt(k){k!==dm?(ot(i.CULL_FACE),k!==I&&(k===Ad?i.cullFace(i.BACK):k===fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),I=k}function Nt(k){k!==D&&(O&&i.lineWidth(k),D=k)}function Gt(k,Mt,st){k?(ot(i.POLYGON_OFFSET_FILL),(C!==Mt||U!==st)&&(C=Mt,U=st,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,st))):bt(i.POLYGON_OFFSET_FILL)}function $t(k){k?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ne(k){k===void 0&&(k=i.TEXTURE0+G-1),q!==k&&(i.activeTexture(k),q=k)}function B(k,Mt,st){st===void 0&&(q===null?st=i.TEXTURE0+G-1:st=q);let Et=J[st];Et===void 0&&(Et={type:void 0,texture:void 0},J[st]=Et),(Et.type!==k||Et.texture!==Mt)&&(q!==st&&(i.activeTexture(st),q=st),i.bindTexture(k,Mt||nt[k]),Et.type=k,Et.texture=Mt)}function Ae(){let k=J[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function gt(){try{i.texStorage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function _t(){try{i.texStorage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function it(){try{i.texImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function at(){try{i.texImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function St(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Dt(k,Mt){u[k]!==Mt&&(i.pixelStorei(k,Mt),u[k]=Mt)}function vt(k){le.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),le.copy(k))}function yt(k){se.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),se.copy(k))}function Ht(k,Mt){let st=c.get(Mt);st===void 0&&(st=new WeakMap,c.set(Mt,st));let Et=st.get(k);Et===void 0&&(Et=i.getUniformBlockIndex(Mt,k.name),st.set(k,Et))}function Zt(k,Mt){let Et=c.get(Mt).get(k);l.get(Mt)!==Et&&(i.uniformBlockBinding(Mt,Et,k.__bindingPointIndex),l.set(Mt,Et))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,J={},f={},p=new WeakMap,g=[],x=null,d=!1,m=null,y=null,b=null,_=null,S=null,M=null,w=null,v=new pt(0,0,0),T=0,R=!1,P=null,I=null,D=null,C=null,U=null,le.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:Ot,drawBuffers:Rt,useProgram:Jt,setBlending:ht,setMaterial:ft,setFlipSided:dt,setCullFace:xt,setLineWidth:Nt,setPolygonOffset:Gt,setScissorTest:$t,activeTexture:ne,bindTexture:B,unbindTexture:Ae,compressedTexImage2D:ge,compressedTexImage3D:L,texImage2D:it,texImage3D:at,pixelStorei:Dt,getParameter:St,updateUBOMapping:Ht,uniformBlockBinding:Zt,texStorage2D:gt,texStorage3D:_t,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:et,scissor:vt,viewport:yt,reset:he}}function tS(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,u=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return g?new OffscreenCanvas(L,E):_a("canvas")}function d(L,E,W){let X=1,et=ge(L);if((et.width>W||et.height>W)&&(X=W/Math.max(et.width,et.height)),X<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let gt=Math.floor(X*et.width),_t=Math.floor(X*et.height);f===void 0&&(f=x(gt,_t));let it=E?x(gt,_t):f;return it.width=gt,it.height=_t,it.getContext("2d").drawImage(L,0,0,gt,_t),jt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+gt+"x"+_t+")."),it}else return"data"in L&&jt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function m(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,E,W,X,et,gt=!1){if(L!==null){if(i[L]!==void 0)return i[L];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t;X&&(_t=t.get("EXT_texture_norm16"),_t||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=E;if(E===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.R16_EXT),W===i.SHORT&&_t&&(it=_t.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),E===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.RG16_EXT),W===i.SHORT&&_t&&(it=_t.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&_t&&(it=_t.RGB16_EXT),W===i.SHORT&&_t&&(it=_t.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),E===i.RGBA){let at=gt?ya:Ce.getTransfer(et);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=at===ke?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.RGBA16_EXT),W===i.SHORT&&_t&&(it=_t.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(L,E){let W;return L?E===null||E===Hi||E===Ro?W=i.DEPTH24_STENCIL8:E===Si?W=i.DEPTH32F_STENCIL8:E===Ao&&(W=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===Ro?W=i.DEPTH_COMPONENT24:E===Si?W=i.DEPTH_COMPONENT32F:E===Ao&&(W=i.DEPTH_COMPONENT16),W}function M(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==vn&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){let E=L.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function v(L){let E=L.target;E.removeEventListener("dispose",v),P(E)}function T(L){let E=n.get(L);if(E.__webglInit===void 0)return;let W=L.source,X=p.get(W);if(X){let et=X[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(L),Object.keys(X).length===0&&p.delete(W)}n.remove(L)}function R(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let W=L.source,X=p.get(W);delete X[E.__cacheKey],o.memory.textures--}function P(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(E.__webglFramebuffer[X]))for(let et=0;et<E.__webglFramebuffer[X].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[X][et]);else i.deleteFramebuffer(E.__webglFramebuffer[X]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[X])}else{if(Array.isArray(E.__webglFramebuffer))for(let X=0;X<E.__webglFramebuffer.length;X++)i.deleteFramebuffer(E.__webglFramebuffer[X]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let X=0;X<E.__webglColorRenderbuffer.length;X++)E.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[X]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=L.textures;for(let X=0,et=W.length;X<et;X++){let gt=n.get(W[X]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(W[X])}n.remove(L)}let I=0;function D(){I=0}function C(){return I}function U(L){I=L}function G(){let L=I;return L>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function O(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){let W=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let X=L.image;if(X===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function H(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){bt(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function q(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){bt(W,L,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function J(L,E){let W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){Ot(W,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let mt={[uo]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[xc]:i.MIRRORED_REPEAT},wt={[vn]:i.NEAREST,[Um]:i.NEAREST_MIPMAP_NEAREST,[Za]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[jc]:i.LINEAR_MIPMAP_NEAREST,[Zs]:i.LINEAR_MIPMAP_LINEAR},le={[Hm]:i.NEVER,[Wm]:i.ALWAYS,[zm]:i.LESS,[Uh]:i.LEQUAL,[km]:i.EQUAL,[Fh]:i.GEQUAL,[Gm]:i.GREATER,[Vm]:i.NOTEQUAL};function se(L,E){if(E.type===Si&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===jc||E.magFilter===Za||E.magFilter===Zs||E.minFilter===Dn||E.minFilter===jc||E.minFilter===Za||E.minFilter===Zs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,mt[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,mt[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,mt[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,wt[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,wt[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==Za&&E.minFilter!==Zs||E.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Yt(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));let X=E.source,et=p.get(X);et===void 0&&(et={},p.set(X,et));let gt=O(E);if(gt!==L.__cacheKey){et[gt]===void 0&&(et[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),et[gt].usedTimes++;let _t=et[L.__cacheKey];_t!==void 0&&(et[L.__cacheKey].usedTimes--,_t.usedTimes===0&&R(E)),L.__cacheKey=gt,L.__webglTexture=et[gt].texture}return W}function nt(L,E,W){return Math.floor(Math.floor(L/W)/E)}function ot(L,E,W,X){let gt=L.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,X,E.data);else{gt.sort((Dt,vt)=>Dt.start-vt.start);let _t=0;for(let Dt=1;Dt<gt.length;Dt++){let vt=gt[_t],yt=gt[Dt],Ht=vt.start+vt.count,Zt=nt(yt.start,E.width,4),he=nt(vt.start,E.width,4);yt.start<=Ht+1&&Zt===he&&nt(yt.start+yt.count-1,E.width,4)===Zt?vt.count=Math.max(vt.count,yt.start+yt.count-vt.start):(++_t,gt[_t]=yt)}gt.length=_t+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Dt=0,vt=gt.length;Dt<vt;Dt++){let yt=gt[Dt],Ht=Math.floor(yt.start/4),Zt=Math.ceil(yt.count/4),he=Ht%E.width,k=Math.floor(Ht/E.width),Mt=Zt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,he),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,he,k,Mt,st,W,X,E.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function bt(L,E,W){let X=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=i.TEXTURE_3D);let et=Yt(L,E),gt=E.source;e.bindTexture(X,L.__webglTexture,i.TEXTURE0+W);let _t=n.get(gt);if(gt.version!==_t.__version||et===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let st=Ce.getPrimaries(Ce.workingColorSpace),Et=E.colorSpace===vs?null:Ce.getPrimaries(E.colorSpace),It=E.colorSpace===vs||st===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let at=d(E.image,!1,s.maxTextureSize);at=Ae(E,at);let St=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),vt=_(E.internalFormat,St,Dt,E.normalized,E.colorSpace,E.isVideoTexture);se(X,E);let yt,Ht=E.mipmaps,Zt=E.isVideoTexture!==!0,he=_t.__version===void 0||et===!0,k=gt.dataReady,Mt=M(E,at);if(E.isDepthTexture)vt=S(E.format===Js,E.type),he&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,vt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,St,Dt,null));else if(E.isDataTexture)if(Ht.length>0){Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,Ht[0].width,Ht[0].height);for(let st=0,Et=Ht.length;st<Et;st++)yt=Ht[st],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,st,vt,yt.width,yt.height,0,St,Dt,yt.data);E.generateMipmaps=!1}else Zt?(he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,at.width,at.height),k&&ot(E,at,St,Dt)):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,St,Dt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,Ht[0].width,Ht[0].height,at.depth);for(let st=0,Et=Ht.length;st<Et;st++)if(yt=Ht[st],E.format!==Ei)if(St!==null)if(Zt){if(k)if(E.layerUpdates.size>0){let It=jd(yt.width,yt.height,E.format,E.type);for(let ct of E.layerUpdates){let Vt=yt.data.subarray(ct*It/yt.data.BYTES_PER_ELEMENT,(ct+1)*It/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ct,yt.width,yt.height,1,St,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,at.depth,St,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,vt,yt.width,yt.height,at.depth,0,yt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,at.depth,St,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,vt,yt.width,yt.height,at.depth,0,St,Dt,yt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,vt,Ht[0].width,Ht[0].height);for(let st=0,Et=Ht.length;st<Et;st++)yt=Ht[st],E.format!==Ei?St!==null?Zt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,vt,yt.width,yt.height,0,yt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,st,vt,yt.width,yt.height,0,St,Dt,yt.data)}else if(E.isDataArrayTexture)if(Zt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,vt,at.width,at.height,at.depth),k)if(E.layerUpdates.size>0){let st=jd(at.width,at.height,E.format,E.type);for(let Et of E.layerUpdates){let It=at.data.subarray(Et*st/at.data.BYTES_PER_ELEMENT,(Et+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,at.width,at.height,1,St,Dt,It)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,at.width,at.height,at.depth,0,St,Dt,at.data);else if(E.isData3DTexture)Zt?(he&&e.texStorage3D(i.TEXTURE_3D,Mt,vt,at.width,at.height,at.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,vt,at.width,at.height,at.depth,0,St,Dt,at.data);else if(E.isFramebufferTexture){if(he)if(Zt)e.texStorage2D(i.TEXTURE_2D,Mt,vt,at.width,at.height);else{let st=at.width,Et=at.height;for(let It=0;It<Mt;It++)e.texImage2D(i.TEXTURE_2D,It,vt,st,Et,0,St,Dt,null),st>>=1,Et>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),at.parentNode!==st){st.appendChild(at),u.add(E),st.onpaint=Et=>{let It=Et.changedElements;for(let ct of u)It.includes(ct.image)&&(ct.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let It=i.RGBA,ct=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,ct,Vt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Zt&&he){let st=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Mt,vt,st.width,st.height)}for(let st=0,Et=Ht.length;st<Et;st++)yt=Ht[st],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,St,Dt,yt):e.texImage2D(i.TEXTURE_2D,st,vt,St,Dt,yt);E.generateMipmaps=!1}else if(Zt){if(he){let st=ge(at);e.texStorage2D(i.TEXTURE_2D,Mt,vt,st.width,st.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,vt,St,Dt,at);m(E)&&y(X),_t.__version=gt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ot(L,E,W){if(E.image.length!==6)return;let X=Yt(L,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);let gt=n.get(et);if(et.version!==gt.__version||X===!0){e.activeTexture(i.TEXTURE0+W);let _t=Ce.getPrimaries(Ce.workingColorSpace),it=E.colorSpace===vs?null:Ce.getPrimaries(E.colorSpace),at=E.colorSpace===vs||_t===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let St=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let ct=0;ct<6;ct++)!St&&!Dt?vt[ct]=d(E.image[ct],!0,s.maxCubemapSize):vt[ct]=Dt?E.image[ct].image:E.image[ct],vt[ct]=Ae(E,vt[ct]);let yt=vt[0],Ht=r.convert(E.format,E.colorSpace),Zt=r.convert(E.type),he=_(E.internalFormat,Ht,Zt,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Mt=gt.__version===void 0||X===!0,st=et.dataReady,Et=M(E,yt);se(i.TEXTURE_CUBE_MAP,E);let It;if(St){k&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,yt.width,yt.height);for(let ct=0;ct<6;ct++){It=vt[ct].mipmaps;for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];E.format!==Ei?Ht!==null?k?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Bt.width,Bt.height,Ht,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,he,Bt.width,Bt.height,0,Bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Bt.width,Bt.height,Ht,Zt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,he,Bt.width,Bt.height,0,Ht,Zt,Bt.data)}}}else{if(It=E.mipmaps,k&&Mt){It.length>0&&Et++;let ct=ge(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Dt){k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,vt[ct].width,vt[ct].height,Ht,Zt,vt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,he,vt[ct].width,vt[ct].height,0,Ht,Zt,vt[ct].data);for(let Vt=0;Vt<It.length;Vt++){let He=It[Vt].image[ct].image;k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,He.width,He.height,Ht,Zt,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,he,He.width,He.height,0,Ht,Zt,He.data)}}else{k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ht,Zt,vt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,he,Ht,Zt,vt[ct]);for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];k?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Ht,Zt,Bt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,he,Ht,Zt,Bt.image[ct])}}}m(E)&&y(i.TEXTURE_CUBE_MAP),gt.__version=et.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Rt(L,E,W,X,et,gt){let _t=r.convert(W.format,W.colorSpace),it=r.convert(W.type),at=_(W.internalFormat,_t,it,W.normalized,W.colorSpace),St=n.get(E),Dt=n.get(W);if(Dt.__renderTarget=E,!St.__hasExternalTextures){let vt=Math.max(1,E.width>>gt),yt=Math.max(1,E.height>>gt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,gt,at,vt,yt,E.depth,0,_t,it,null):e.texImage2D(et,gt,at,vt,yt,0,_t,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ne(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,et,Dt.__webglTexture,0,$t(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,et,Dt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(L,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let X=E.depthTexture,et=X&&X.isDepthTexture?X.type:null,gt=S(E.stencilBuffer,et),_t=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(E),gt,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(E),gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,L)}else{let X=E.textures;for(let et=0;et<X.length;et++){let gt=X[et],_t=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),at=_(gt.internalFormat,_t,it,gt.normalized,gt.colorSpace);ne(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(E),at,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(E),at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(L,E,W){let X=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(E.depthTexture);if(et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X){if(et.__webglInit===void 0&&(et.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),se(i.TEXTURE_CUBE_MAP,E.depthTexture);let St=r.convert(E.depthTexture.format),Dt=r.convert(E.depthTexture.type),vt;E.depthTexture.format===$i?vt=i.DEPTH_COMPONENT24:E.depthTexture.format===Js&&(vt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,vt,E.width,E.height,0,St,Dt,null)}}else $(E.depthTexture,0);let gt=et.__webglTexture,_t=$t(E),it=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,at=E.depthTexture.format===Js?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===$i)ne(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else if(E.depthTexture.format===Js)ne(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(L){let E=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let X=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),X){let et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,X.removeEventListener("dispose",et)};X.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=X}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let X=0;X<6;X++)De(E.__webglFramebuffer[X],L,X);else{let X=L.texture.mipmaps;X&&X.length>0?De(E.__webglFramebuffer[0],L,0):De(E.__webglFramebuffer,L,0)}else if(W){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]===void 0)E.__webglDepthbuffer[X]=i.createRenderbuffer(),Jt(E.__webglDepthbuffer[X],L,!1);else{let et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}else{let X=L.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Jt(E.__webglDepthbuffer,L,!1);else{let et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(L,E,W){let X=n.get(L);E!==void 0&&Rt(X.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&rt(L)}function ft(L){let E=L.texture,W=n.get(L),X=n.get(E);L.addEventListener("dispose",v);let et=L.textures,gt=L.isWebGLCubeRenderTarget===!0,_t=et.length>1;if(_t||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=E.version,o.memory.textures++),gt){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let at=0;at<E.mipmaps.length;at++)W.__webglFramebuffer[it][at]=i.createFramebuffer()}else W.__webglFramebuffer[it]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)W.__webglFramebuffer[it]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_t)for(let it=0,at=et.length;it<at;it++){let St=n.get(et[it]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ne(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let at=et[it];W.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let St=r.convert(at.format,at.colorSpace),Dt=r.convert(at.type),vt=_(at.internalFormat,St,Dt,at.normalized,at.colorSpace,L.isXRRenderTarget===!0),yt=$t(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,W.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),se(i.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Rt(W.__webglFramebuffer[it][at],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else Rt(W.__webglFramebuffer[it],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(E)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let it=0,at=et.length;it<at;it++){let St=et[it],Dt=n.get(St),vt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Dt.__webglTexture),se(vt,St),Rt(W.__webglFramebuffer,L,St,i.COLOR_ATTACHMENT0+it,vt,0),m(St)&&y(vt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(it=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,X.__webglTexture),se(it,E),E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Rt(W.__webglFramebuffer[at],L,E,i.COLOR_ATTACHMENT0,it,at);else Rt(W.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,it,0);m(E)&&y(it),e.unbindTexture()}L.depthBuffer&&rt(L)}function dt(L){let E=L.textures;for(let W=0,X=E.length;W<X;W++){let et=E[W];if(m(et)){let gt=b(L),_t=n.get(et).__webglTexture;e.bindTexture(gt,_t),y(gt),e.unbindTexture()}}}let xt=[],Nt=[];function Gt(L){if(L.samples>0){if(ne(L)===!1){let E=L.textures,W=L.width,X=L.height,et=i.COLOR_BUFFER_BIT,gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(L),it=E.length>1;if(it)for(let St=0;St<E.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let at=L.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let St=0;St<E.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);let Dt=n.get(E[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,W,X,0,0,W,X,et,i.NEAREST),l===!0&&(xt.length=0,Nt.length=0,xt.push(i.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(xt.push(gt),Nt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<E.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);let Dt=n.get(E[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function $t(L){return Math.min(s.maxSamples,L.samples)}function ne(L){let E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(L){let E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Ae(L,E){let W=L.colorSpace,X=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==xa&&W!==vs&&(Ce.getTransfer(W)===ke?(X!==Ei||et!==ei)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",W)),E}function ge(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=ht,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function eS(i,t){function e(n,s=vs){let r,o=Ce.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===th)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zd)return i.BYTE;if(n===kd)return i.SHORT;if(n===Ao)return i.UNSIGNED_SHORT;if(n===Qc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Wd)return i.ALPHA;if(n===qd)return i.RGB;if(n===Ei)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===nh)return i.RED_INTEGER;if(n===$s)return i.RG;if(n===ih)return i.RG_INTEGER;if(n===sh)return i.RGBA_INTEGER;if(n===Ja||n===$a||n===Ka||n===ja)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rh||n===oh||n===ah||n===lh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ch||n===hh||n===uh||n===dh||n===fh||n===Qa||n===ph)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ch||n===hh)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dh)return r.COMPRESSED_R11_EAC;if(n===fh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qa)return r.COMPRESSED_RG11_EAC;if(n===ph)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mh||n===gh||n===xh||n===yh||n===_h||n===vh||n===Mh||n===bh||n===Sh||n===Eh||n===Th||n===wh||n===Ah||n===Rh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Th)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ah)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ch||n===Ph||n===Ih)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ch)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ih)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===Dh||n===tl||n===Nh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ro?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iS=`
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

}`,yf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:nS,fragmentShader:iS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_f=class extends Ki{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=typeof XRWebGLBinding!="undefined",d=new yf,m={},y=e.getContextAttributes(),b=null,_=null,S=[],M=[],w=new ut,v=null,T=null,R=new gn;R.viewport=new on;let P=new gn;P.viewport=new on;let I=[R,P],D=new Yc,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=S[nt];return ot===void 0&&(ot=new go,S[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=S[nt];return ot===void 0&&(ot=new go,S[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=S[nt];return ot===void 0&&(ot=new go,S[nt]=ot),ot.getHandSpace()};function G(nt){let ot=M.indexOf(nt.inputSource);if(ot===-1)return;let bt=S[ot];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,c||o),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let nt=0;nt<S.length;nt++){let ot=M[nt];ot!==null&&(M[nt]=null,S[nt].disconnect(ot))}C=null,U=null,d.reset();for(let nt in m)delete m[nt];if(t.setRenderTarget(b),p=null,f=null,u=null,s=null,_=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),T!==null){let nt=T.camera;nt.fov=T.fov,nt.zoom=T.zoom,nt.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ot=null,Rt=null;y.depth&&(Rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=y.stencil?Js:$i,Ot=y.stencil?Ro:Hi);let Jt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Nn(f.textureWidth,f.textureHeight,{format:Ei,type:ei,depthTexture:new zs(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Nn(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function $(nt){for(let ot=0;ot<nt.removed.length;ot++){let bt=nt.removed[ot],Ot=M.indexOf(bt);Ot>=0&&(M[Ot]=null,S[Ot].disconnect(bt))}for(let ot=0;ot<nt.added.length;ot++){let bt=nt.added[ot],Ot=M.indexOf(bt);if(Ot===-1){for(let Jt=0;Jt<S.length;Jt++)if(Jt>=M.length){M.push(bt),Ot=Jt;break}else if(M[Jt]===null){M[Jt]=bt,Ot=Jt;break}if(Ot===-1)break}let Rt=S[Ot];Rt&&Rt.connect(bt)}}let H=new N,q=new N;function J(nt,ot,bt){H.setFromMatrixPosition(ot.matrixWorld),q.setFromMatrixPosition(bt.matrixWorld);let Ot=H.distanceTo(q),Rt=ot.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,De=Rt[14]/(Rt[10]-1),rt=Rt[14]/(Rt[10]+1),ht=(Rt[9]+1)/Rt[5],ft=(Rt[9]-1)/Rt[5],dt=(Rt[8]-1)/Rt[0],xt=(Jt[8]+1)/Jt[0],Nt=De*dt,Gt=De*xt,$t=Ot/(-dt+xt),ne=$t*-dt;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ne),nt.translateZ($t),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Rt[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let B=De+$t,Ae=rt+$t,ge=Nt-ne,L=Gt+(Ot-ne),E=ht*rt/Ae*B,W=ft*rt/Ae*B;nt.projectionMatrix.makePerspective(ge,L,E,W,B,Ae),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function mt(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ot=nt.near,bt=nt.far;d.texture!==null&&(d.depthNear>0&&(ot=d.depthNear),d.depthFar>0&&(bt=d.depthFar)),D.near=P.near=R.near=ot,D.far=P.far=R.far=bt,(C!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,U=D.far),D.layers.mask=nt.layers.mask|6,R.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ot=nt.parent,Rt=D.cameras;mt(D,Ot);for(let Jt=0;Jt<Rt.length;Jt++)mt(Rt[Jt],Ot);Rt.length===2?J(D,R,P):D.projectionMatrix.copy(R.projectionMatrix),T===null&&nt.isPerspectiveCamera&&(T={camera:nt,fov:nt.fov,zoom:nt.zoom}),wt(nt,D,Ot)};function wt(nt,ot,bt){bt===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=_c*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(D)},this.getCameraTexture=function(nt){return m[nt]};let le=null;function se(nt,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){let bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ot=!1;bt.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let rt=0;rt<bt.length;rt++){let ht=bt[rt],ft=null;if(p!==null)ft=p.getViewport(ht);else{let xt=u.getViewSubImage(f,ht);ft=xt.viewport,rt===0&&(t.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(_))}let dt=I[rt];dt===void 0&&(dt=new gn,dt.layers.enable(rt),dt.viewport=new on,I[rt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ft.x,ft.y,ft.width,ft.height),rt===0&&(D.matrix.copy(dt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(dt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let rt=u.getDepthInformation(bt[0]);rt&&rt.isValid&&rt.texture&&d.init(rt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<bt.length;rt++){let ht=bt[rt].camera;if(ht){let ft=m[ht];ft||(ft=new Ca,m[ht]=ft);let dt=u.getCameraImage(ht);ft.sourceTexture=dt}}}}for(let bt=0;bt<S.length;bt++){let Ot=M[bt],Rt=S[bt];Ot!==null&&Rt!==void 0&&Rt.update(Ot,ot,c||o)}le&&le(nt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let Yt=new T0;Yt.setAnimationLoop(se),this.setAnimationLoop=function(nt){le=nt},this.dispose=function(){}}},sS=new Me,I0=new ce;I0.set(-1,0,0,0,1,0,0,0,1);function rS(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Jd(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,y,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),h(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,_)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),x(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?l(d,m,y,b):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Tn&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Tn&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let y=t.get(m),b=y.envMap,_=y.envMapRotation;b&&(d.envMap.value=b,d.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(I0),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,y,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=b*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){let y=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oS(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let M=S.program;n.uniformBlockBinding(_,M)}function c(_,S){let M=s[_.id];M===void 0&&(d(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",y));let w=S.program;n.updateUBOMapping(_,w);let v=t.render.frame;r[_.id]!==v&&(f(_),r[_.id]=v)}function h(_){let S=u();_.__bindingPointIndex=S;let M=i.createBuffer(),w=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let S=s[_.id],M=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,T=M.length;v<T;v++){let R=M[v];if(Array.isArray(R))for(let P=0,I=R.length;P<I;P++)p(R[P],v,P,w);else p(R,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,S,M,w){if(x(_,S,M,w)===!0){let v=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let I=T[P],D=m(I);g(I,_.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function g(_,S,M){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,M)}function x(_,S,M,w){let v=_.value,T=S+"_"+M;if(w[T]===void 0)return typeof v=="number"||typeof v=="boolean"?w[T]=v:ArrayBuffer.isView(v)?w[T]=v.slice():w[T]=v.clone(),!0;{let R=w[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return w[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function d(_){let S=_.uniforms,M=0,w=16;for(let T=0,R=S.length;T<R;T++){let P=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,D=P.length;I<D;I++){let C=P[I],U=Array.isArray(C.value)?C.value:[C.value];for(let G=0,O=U.length;G<O;G++){let $=U[G],H=m($),q=M%w,J=q%H.boundary,mt=q+J;M+=J,mt!==0&&w-mt<H.storage&&(M+=w-mt),C.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=H.storage}}}let v=M%w;return v>0&&(M+=w-v),_.__size=M,_.__cache={},this}function m(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",_),S}function y(_){let S=_.target;S.removeEventListener("dispose",y);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}var aS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function lS(){return ns===null&&(ns=new fr(aS,16,16,$s,pi),ns.name="DFG_LUT",ns.minFilter=Dn,ns.magFilter=Dn,ns.wrapS=Zi,ns.wrapT=Zi,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var kh=class{constructor(t={}){let{canvas:e=qm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ei}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=p,d=new Set([sh,ih,nh]),m=new Set([ei,Hi,Ao,Ro,th,eh]),y=new Uint32Array(4),b=new Int32Array(4),_=new N,S=null,M=null,w=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,I=null,D=null,C=null,U=null;this._outputColorSpace=Ln;let G=0,O=0,$=null,H=-1,q=null,J=new on,mt=new on,wt=null,le=new pt(0),se=0,Yt=e.width,nt=e.height,ot=1,bt=null,Ot=null,Rt=new on(0,0,Yt,nt),Jt=new on(0,0,Yt,nt),De=!1,rt=new _o,ht=!1,ft=!1,dt=new Me,xt=new N,Nt=new on,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ne(){return $===null?ot:1}let B=n;function Ae(A,z){return e.getContext(A,z)}let ge,L,E,W,X,et,gt,_t,it,at,St,Dt,vt,yt,Ht,Zt,he,k,Mt,st,Et,It,ct;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",He,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),B===null){let z="webgl2";if(B=Ae(z,A),B===null)throw Ae(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(A){throw e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),ee("WebGLRenderer: "+A.message),A}function Vt(){ge=new mM(B),ge.init(),Et=new eS(B,ge),L=new rM(B,ge,t,Et),E=new Qb(B,ge),L.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),D=B.createFramebuffer(),C=B.createFramebuffer(),U=B.createFramebuffer(),W=new yM(B),X=new Hb,et=new tS(B,ge,E,X,L,Et,W),gt=new pM(R),_t=new v_(B),It=new iM(B,_t),it=new gM(B,_t,W,It),at=new vM(B,it,_t,It,W),k=new _M(B,L,et),Ht=new oM(X),St=new Ob(R,gt,ge,L,It,Ht),Dt=new rS(R,X),vt=new kb,yt=new Yb(ge),he=new nM(R,gt,E,at,g,l),Zt=new jb(R,at,L),ct=new oS(B,W,L,E),Mt=new sM(B,ge,W),st=new xM(B,ge,W),W.programs=St.programs,R.capabilities=L,R.extensions=ge,R.properties=X,R.renderLists=vt,R.shadowMap=Zt,R.state=E,R.info=W}x!==ei&&(T=new bM(x,e.width,e.height,a,s,r));let Bt=new _f(R,B);this.xr=Bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(A){A!==void 0&&(ot=A,this.setSize(Yt,nt,!1))},this.getSize=function(A){return A.set(Yt,nt)},this.setSize=function(A,z,Q=!0){if(Bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=A,nt=z,e.width=Math.floor(A*ot),e.height=Math.floor(z*ot),Q===!0&&(e.style.width=A+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Yt*ot,nt*ot).floor()},this.setDrawingBufferSize=function(A,z,Q){Yt=A,nt=z,ot=Q,e.width=Math.floor(A*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===ei){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,z,Q,Y){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,z,Q,Y),E.viewport(J.copy(Rt).multiplyScalar(ot).round())},this.getScissor=function(A){return A.copy(Jt)},this.setScissor=function(A,z,Q,Y){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,z,Q,Y),E.scissor(mt.copy(Jt).multiplyScalar(ot).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){E.setScissorTest(De=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Ot=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Q=!0){let Y=0;if(A){let Z=!1;if($!==null){let Lt=$.texture.format;Z=d.has(Lt)}if(Z){let Lt=$.texture.type,Ft=m.has(Lt),Pt=he.getClearColor(),zt=he.getClearAlpha(),Wt=Pt.r,xe=Pt.g,Ee=Pt.b;Ft?(y[0]=Wt,y[1]=xe,y[2]=Ee,y[3]=zt,B.clearBufferuiv(B.COLOR,0,y)):(b[0]=Wt,b[1]=xe,b[2]=Ee,b[3]=zt,B.clearBufferiv(B.COLOR,0,b))}else Y|=B.COLOR_BUFFER_BIT}z&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),he.dispose(),vt.dispose(),yt.dispose(),X.dispose(),gt.dispose(),at.dispose(),It.dispose(),ct.dispose(),St.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Gr),Bt.removeEventListener("sessionend",yi),Fn.stop()};function He(A){A.preventDefault(),va("WebGLRenderer: Context Lost."),P=!0}function Ne(){va("WebGLRenderer: Context Restored."),P=!1;let A=W.autoReset,z=Zt.enabled,Q=Zt.autoUpdate,Y=Zt.needsUpdate,Z=Zt.type;Vt(),W.autoReset=A,Zt.enabled=z,Zt.autoUpdate=Q,Zt.needsUpdate=Y,Zt.type=Z}function Vn(A){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ai(A){let z=A.target;z.removeEventListener("dispose",ai),cs(z)}function cs(A){zr(A),X.remove(A)}function zr(A){let z=X.get(A).programs;z!==void 0&&(z.forEach(function(Q){St.releaseProgram(Q)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Q,Y,Z,Lt){z===null&&(z=Gt);let Ft=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pt=Bn(A,z,Q,Y,Z);E.setMaterial(Y,Ft);let zt=Q.index,Wt=1;if(Y.wireframe===!0){if(zt=it.getWireframeAttribute(Q),zt===void 0)return;Wt=2}let xe=Q.drawRange,Ee=Q.attributes.position,kt=xe.start*Wt,ze=(xe.start+xe.count)*Wt;Lt!==null&&(kt=Math.max(kt,Lt.start*Wt),ze=Math.min(ze,(Lt.start+Lt.count)*Wt)),zt!==null?(kt=Math.max(kt,0),ze=Math.min(ze,zt.count)):Ee!=null&&(kt=Math.max(kt,0),ze=Math.min(ze,Ee.count));let yn=ze-kt;if(yn<0||yn===1/0)return;It.setup(Z,Y,Pt,Q,zt);let tn,Ze=Mt;if(zt!==null&&(tn=_t.get(zt),Ze=st,Ze.setIndex(tn)),Z.isMesh)Y.wireframe===!0?(E.setLineWidth(Y.wireframeLinewidth*ne()),Ze.setMode(B.LINES)):Ze.setMode(B.TRIANGLES);else if(Z.isLine){let On=Y.linewidth;On===void 0&&(On=1),E.setLineWidth(On*ne()),Z.isLineSegments?Ze.setMode(B.LINES):Z.isLineLoop?Ze.setMode(B.LINE_LOOP):Ze.setMode(B.LINE_STRIP)}else Z.isPoints?Ze.setMode(B.POINTS):Z.isSprite&&Ze.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let On=Z._multiDrawStarts,Ut=Z._multiDrawCounts,Wn=Z._multiDrawCount,Ue=zt?_t.get(zt).bytesPerElement:1,_i=X.get(Y).currentProgram.getUniforms();for(let Wi=0;Wi<Wn;Wi++)_i.setValue(B,"_gl_DrawID",Wi),Ze.render(On[Wi]/Ue,Ut[Wi])}else if(Z.isInstancedMesh)Ze.renderInstances(kt,yn,Z.count);else if(Q.isInstancedBufferGeometry){let On=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,On);Ze.renderInstances(kt,yn,Ut)}else Ze.render(kt,yn)};function ea(A,z,Q,Y){I!==null&&A.isNodeMaterial&&I.setObject(Y,A),ht===!0&&Ht.setState(A,Q,!1),A.transparent===!0&&A.side===me&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,Re(A,z,Y),A.side=Xs,A.needsUpdate=!0,Re(A,z,Y),A.side=me):Re(A,z,Y)}this.compile=function(A,z,Q=null){Q===null&&(Q=A),I!==null&&I.renderStart(A,z,Q),M=yt.get(Q),M.init(z),v.push(M),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),ft=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ft),ht===!0&&Ht.setGlobalState(this.clippingPlanes,z),I!==null&&Zt.render(M.state.shadowsArray,Q,z);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Lt=Z.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){let Pt=Lt[Ft];ea(Pt,Q,z,Z),Y.add(Pt)}else ea(Lt,Q,z,Z),Y.add(Lt)}),M=v.pop(),I!==null&&I.renderEnd(),Y},this.compileAsync=function(A,z,Q=null){let Y=this.compile(A,z,Q);return new Promise(Z=>{function Lt(){if(Y.forEach(function(Ft){let zt=X.get(Ft).currentProgram;(zt===void 0||zt.isReady())&&Y.delete(Ft)}),Y.size===0){Z(A);return}setTimeout(Lt,10)}ge.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let kr=null;function Ps(A){kr&&kr(A)}function Gr(){Fn.stop()}function yi(){Fn.start()}let Fn=new T0;Fn.setAnimationLoop(Ps),typeof self!="undefined"&&Fn.setContext(self),this.setAnimationLoop=function(A){kr=A,Bt.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},Bt.addEventListener("sessionstart",Gr),Bt.addEventListener("sessionend",yi),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(A,z);let Q=Bt.enabled===!0&&Bt.isPresenting===!0,Y=T!==null&&($===null||Q)&&T.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(z),z=Bt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,$),M=yt.get(A,v.length),M.init(z),M.state.textureUnits=et.getTextureUnits(),v.push(M),dt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),rt.setFromProjectionMatrix(dt,Di,z.reversedDepth),ft=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ft),S=vt.get(A,w.length),S.init(),w.push(S),Bt.enabled===!0&&Bt.isPresenting===!0){let Ft=R.xr.getDepthSensingMesh();Ft!==null&&Gi(Ft,z,-1/0,R.sortObjects)}Gi(A,z,0,R.sortObjects),S.finish(),I!==null&&I.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(bt,Ot),$t=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,$t&&he.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ht.beginShadows();let Z=M.state.shadowsArray;if(Zt.render(Z,A,z),ht===!0&&Ht.endShadows(),(Y&&T.hasRenderPass())===!1){let Ft=S.opaque,Pt=S.transmissive;if(M.setupLights(),z.isArrayCamera){let zt=z.cameras;if(Pt.length>0)for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt];j(Ft,Pt,A,Ee)}$t&&he.render(A);for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt];Ll(S,A,Ee,Ee.viewport)}}else Pt.length>0&&j(Ft,Pt,A,z),$t&&he.render(A),Ll(S,A,z)}$!==null&&O===0&&(et.updateMultisampleRenderTarget($),et.updateRenderTargetMipmap($)),Y&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),It.resetDefaultState(),H=-1,q=null,v.pop(),v.length>0?(M=v[v.length-1],et.setTextureUnits(M.state.textureUnits),ht===!0&&Ht.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,I!==null&&I.renderEnd()};function Gi(A,z,Q,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(rt)){Y&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);let Ft=at.update(A),Pt=A.material;Pt.visible&&S.push(A,Ft,Pt,Q,Nt.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(rt))){let Ft=at.update(A),Pt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Nt.copy(Ft.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(Pt)){let zt=Ft.groups;for(let Wt=0,xe=zt.length;Wt<xe;Wt++){let Ee=zt[Wt],kt=Pt[Ee.materialIndex];kt&&kt.visible&&S.push(A,Ft,kt,Q,Nt.z,Ee,z)}}else Pt.visible&&S.push(A,Ft,Pt,Q,Nt.z,null,z)}}let Lt=A.children;for(let Ft=0,Pt=Lt.length;Ft<Pt;Ft++)Gi(Lt[Ft],z,Q,Y)}function Ll(A,z,Q,Y){let{opaque:Z,transmissive:Lt,transparent:Ft}=A;M.setupLightsView(Q),ht===!0&&Ht.setGlobalState(R.clippingPlanes,Q),Y&&E.viewport(J.copy(Y)),Z.length>0&&Tt(Z,z,Q),Lt.length>0&&Tt(Lt,z,Q),Ft.length>0&&Tt(Ft,z,Q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function j(A,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let kt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Nn(1,1,{generateMipmaps:!0,type:kt?pi:ei,minFilter:Zs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let Lt=M.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||J;Lt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);let Pt=R.getRenderTarget(),zt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(le),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),$t&&he.render(Q);let xe=R.toneMapping;R.toneMapping=Oi;let Ee=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),ht===!0&&Ht.setGlobalState(R.clippingPlanes,Y),Tt(A,Q,Y),et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ze=0,yn=z.length;ze<yn;ze++){let tn=z[ze],{object:Ze,geometry:On,material:Ut,group:Wn}=tn;if(Ut.side===me&&Ze.layers.test(Y.layers)){let Ue=Ut.side;Ut.side=Tn,Ut.needsUpdate=!0,ve(Ze,Q,Y,On,Ut,Wn),Ut.side=Ue,Ut.needsUpdate=!0,kt=!0}}kt===!0&&(et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt))}R.setRenderTarget(Pt,zt,Wt),R.setClearColor(le,se),Ee!==void 0&&(Y.viewport=Ee),R.toneMapping=xe}function Tt(A,z,Q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Lt=A.length;Z<Lt;Z++){let Ft=A[Z],{object:Pt,geometry:zt,group:Wt}=Ft,xe=Ft.material;xe.allowOverride===!0&&Y!==null&&(xe=Y),Pt.layers.test(Q.layers)&&ve(Pt,z,Q,zt,xe,Wt)}}function ve(A,z,Q,Y,Z,Lt){I!==null&&Z.isNodeMaterial&&I.setObject(A,Z),A.onBeforeRender(R,z,Q,Y,Z,Lt),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,z,Q,Y,A,Lt),Z.transparent===!0&&Z.side===me&&Z.forceSinglePass===!1?(Z.side=Tn,Z.needsUpdate=!0,R.renderBufferDirect(Q,z,Y,Z,A,Lt),Z.side=Xs,Z.needsUpdate=!0,R.renderBufferDirect(Q,z,Y,Z,A,Lt),Z.side=me):R.renderBufferDirect(Q,z,Y,Z,A,Lt),A.onAfterRender(R,z,Q,Y,Z,Lt)}function Re(A,z,Q){z.isScene!==!0&&(z=Gt);let Y=X.get(A),Z=M.state.lights,Lt=M.state.shadowsArray,Ft=Z.state.version,Pt=St.getParameters(A,Z.state,Lt,z,Q,M.state.lightProbeGridArray),zt=St.getProgramCacheKey(Pt),Wt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let xe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=gt.get(A.envMap||Y.environment,xe),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",ai),Wt=new Map,Y.programs=Wt);let Ee=Wt.get(zt);if(Ee!==void 0){if(Y.currentProgram===Ee&&Y.lightsStateVersion===Ft)return de(A,Pt),Ee}else Pt.uniforms=St.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,Q,Pt),A.onBeforeCompile(Pt,R),Ee=St.acquireProgram(Pt,zt),Wt.set(zt,Ee),Y.uniforms=Pt.uniforms;let kt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),de(A,Pt),Y.needsLights=na(A),Y.lightsStateVersion=Ft,Y.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.sunLights.value=Z.state.sun,kt.sunLightShadows.value=Z.state.sunShadow,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.sunShadowMatrix.value=Z.state.sunShadowMatrix,kt.sunShadowCascade.value=Z.state.sunShadowCascade,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=Ee,Y.uniformsList=null,Ee}function re(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Lo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function de(A,z){let Q=X.get(A);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function te(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){let Z=A[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(_))return Z}return null}function Bn(A,z,Q,Y,Z){z.isScene!==!0&&(z=Gt),et.resetTextureUnits();let Lt=z.fog,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Pt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ce.workingColorSpace,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=gt.get(Y.envMap||Ft,zt),xe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ee=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!Q.morphAttributes.position,ze=!!Q.morphAttributes.normal,yn=!!Q.morphAttributes.color,tn=Oi;Y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(tn=R.toneMapping);let Ze=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,On=Ze!==void 0?Ze.length:0,Ut=X.get(Y),Wn=M.state.lights;if(ht===!0&&(ft===!0||A!==q)){let Ke=A===q&&Y.id===H;Ht.setState(Y,A,Ke)}let Ue=!1;Y.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Wn.state.version||Ut.outputColorSpace!==Pt||Z.isBatchedMesh&&Ut.batching===!1||!Z.isBatchedMesh&&Ut.batching===!0||Z.isBatchedMesh&&Ut.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ut.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ut.instancing===!1||!Z.isInstancedMesh&&Ut.instancing===!0||Z.isSkinnedMesh&&Ut.skinning===!1||!Z.isSkinnedMesh&&Ut.skinning===!0||Z.isInstancedMesh&&Ut.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ut.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ut.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ut.instancingMorph===!1&&Z.morphTexture!==null||Ut.envMap!==Wt||Y.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Ht.numPlanes||Ut.numIntersection!==Ht.numIntersection)||Ut.vertexAlphas!==xe||Ut.vertexTangents!==Ee||Ut.morphTargets!==kt||Ut.morphNormals!==ze||Ut.morphColors!==yn||Ut.toneMapping!==tn||Ut.morphTargetsCount!==On||!!Ut.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Ut.__version=Y.version);let _i=Ut.currentProgram;Ue===!0&&(_i=Re(Y,z,Z),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,_i,Ut));let Wi=!1,Ls=!1,Vr=!1,qe=_i.getUniforms(),mn=Ut.uniforms;if(E.useProgram(_i.program)&&(Wi=!0,Ls=!0,Vr=!0),Y.id!==H&&(H=Y.id,Ls=!0),Ut.needsLights){let Ke=te(M.state.lightProbeGridArray,Z);Ut.lightProbeGrid!==Ke&&(Ut.lightProbeGrid=Ke,Ls=!0)}if(Wi||q!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),qe.setValue(B,"projectionMatrix",A.projectionMatrix),qe.setValue(B,"viewMatrix",A.matrixWorldInverse);let Ns=qe.map.cameraPosition;Ns!==void 0&&Ns.setValue(B,xt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&qe.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&qe.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,Ls=!0,Vr=!0)}if(Ut.needsLights&&(Wn.state.sunShadowMap.length>0&&qe.setValue(B,"sunShadowMap",Wn.state.sunShadowMap,et),Wn.state.directionalShadowMap.length>0&&qe.setValue(B,"directionalShadowMap",Wn.state.directionalShadowMap,et),Wn.state.spotShadowMap.length>0&&qe.setValue(B,"spotShadowMap",Wn.state.spotShadowMap,et),Wn.state.pointShadowMap.length>0&&qe.setValue(B,"pointShadowMap",Wn.state.pointShadowMap,et)),Z.isSkinnedMesh){qe.setOptional(B,Z,"bindMatrix"),qe.setOptional(B,Z,"bindMatrixInverse");let Ke=Z.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),qe.setValue(B,"boneTexture",Ke.boneTexture,et))}Z.isBatchedMesh&&(qe.setOptional(B,Z,"batchingTexture"),qe.setValue(B,"batchingTexture",Z._matricesTexture,et),qe.setOptional(B,Z,"batchingIdTexture"),qe.setValue(B,"batchingIdTexture",Z._indirectTexture,et),qe.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&qe.setValue(B,"batchingColorTexture",Z._colorsTexture,et));let Ds=Q.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&k.update(Z,Q,_i),(Ls||Ut.receiveShadow!==Z.receiveShadow)&&(Ut.receiveShadow=Z.receiveShadow,qe.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(mn.envMapIntensity.value=z.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=lS()),Ls){if(qe.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&Vi(mn,Vr),Lt&&Y.fog===!0&&Dt.refreshFogUniforms(mn,Lt),Dt.refreshMaterialUniforms(mn,Y,ot,nt,M.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.lightProbeGrid){let Ke=Ut.lightProbeGrid;mn.probesSH.value=Ke.texture,mn.probesMin.value.copy(Ke.boundingBox.min),mn.probesMax.value.copy(Ke.boundingBox.max),mn.probesResolution.value.copy(Ke.resolution)}Lo.upload(B,re(Ut),mn,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Lo.upload(B,re(Ut),mn,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&qe.setValue(B,"center",Z.center),qe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),qe.setValue(B,"normalMatrix",Z.normalMatrix),qe.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ke=Y.uniformsGroups;for(let Ns=0,Wr=Ke.length;Ns<Wr;Ns++){let Rp=Ke[Ns];ct.update(Rp,_i),ct.bind(Rp,_i)}}return _i}function Vi(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function na(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,z,Q){let Y=X.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=z,X.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let Q=X.get(A);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Q=0){$=A,G=z,O=Q;let Y=null,Z=!1,Lt=!1;if(A){let Pt=X.get(A);if(Pt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(B.FRAMEBUFFER,Pt.__webglFramebuffer),J.copy(A.viewport),mt.copy(A.scissor),wt=A.scissorTest,E.viewport(J),E.scissor(mt),E.setScissorTest(wt),H=-1;return}else if(Pt.__webglFramebuffer===void 0)et.setupRenderTarget(A);else if(Pt.__hasExternalTextures)et.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let xe=A.depthTexture;if(Pt.__boundDepthTexture!==xe){if(xe!==null&&X.has(xe)&&(A.width!==xe.image.width||A.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(A)}}let zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Lt=!0);let Wt=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?Y=Wt[z][Q]:Y=Wt[z],Z=!0):A.samples>0&&et.useMultisampledRTT(A)===!1?Y=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[Q]:Y=Wt,J.copy(A.viewport),mt.copy(A.scissor),wt=A.scissorTest}else J.copy(Rt).multiplyScalar(ot).floor(),mt.copy(Jt).multiplyScalar(ot).floor(),wt=De;if(Q!==0&&(Y=D),E.bindFramebuffer(B.FRAMEBUFFER,Y)&&E.drawBuffers(A,Y),E.viewport(J),E.scissor(mt),E.setScissorTest(wt),Z){let Pt=X.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,Q)}else if(Lt){let Pt=z;for(let zt=0;zt<A.textures.length;zt++){let Wt=X.get(A.textures[zt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+zt,Wt.__webglTexture,Q,Pt)}}else if(A!==null&&Q!==0){let Pt=X.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,Q)}H=-1};function Is(A){let z=X.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=L.textureFormatReadable(A.format),z.__typeReadable=L.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,Q,Y,Z,Lt,Ft,Pt=0){if(!(A&&A.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt){E.bindFramebuffer(B.FRAMEBUFFER,zt);try{let Wt=A.textures[Pt],xe=Wt.format,Ee=Wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=Is(Wt);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-Z&&B.readPixels(z,Q,Y,Z,Et.convert(xe),Et.convert(Ee),Lt)}finally{let Wt=$!==null?X.get($).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,z,Q,Y,Z,Lt,Ft,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt)if(z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-Z){E.bindFramebuffer(B.FRAMEBUFFER,zt);let Wt=A.textures[Pt],xe=Wt.format,Ee=Wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt);let kt=Is(Wt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.bufferData(B.PIXEL_PACK_BUFFER,Lt.byteLength,B.STREAM_READ),B.readPixels(z,Q,Y,Z,Et.convert(xe),Et.convert(Ee),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let yn=$!==null?X.get($).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,yn);let tn=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ym(B,tn,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Lt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ze),B.deleteSync(tn),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),Lt=Math.floor(A.image.height*Y),Ft=z!==null?z.x:0,Pt=z!==null?z.y:0;et.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ft,Pt,Z,Lt),E.unbindTexture()},this.copyTextureToTexture=function(A,z,Q=null,Y=null,Z=0,Lt=0){let Ft,Pt,zt,Wt,xe,Ee,kt,ze,yn,tn=A.isCompressedTexture?A.mipmaps[Lt]:A.image;if(Q!==null)Ft=Q.max.x-Q.min.x,Pt=Q.max.y-Q.min.y,zt=Q.isBox3?Q.max.z-Q.min.z:1,Wt=Q.min.x,xe=Q.min.y,Ee=Q.isBox3?Q.min.z:0;else{let mn=Math.pow(2,-Z);Ft=Math.floor(tn.width*mn),Pt=Math.floor(tn.height*mn),A.isDataArrayTexture?zt=tn.depth:A.isData3DTexture?zt=Math.floor(tn.depth*mn):zt=1,Wt=0,xe=0,Ee=0}Y!==null?(kt=Y.x,ze=Y.y,yn=Y.z):(kt=0,ze=0,yn=0);let Ze=Et.convert(z.format),On=Et.convert(z.type),Ut;z.isData3DTexture?(et.setTexture3D(z,0),Ut=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(et.setTexture2DArray(z,0),Ut=B.TEXTURE_2D_ARRAY):(et.setTexture2D(z,0),Ut=B.TEXTURE_2D),E.activeTexture(B.TEXTURE0),E.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Wn=E.getParameter(B.UNPACK_ROW_LENGTH),Ue=E.getParameter(B.UNPACK_IMAGE_HEIGHT),_i=E.getParameter(B.UNPACK_SKIP_PIXELS),Wi=E.getParameter(B.UNPACK_SKIP_ROWS),Ls=E.getParameter(B.UNPACK_SKIP_IMAGES);E.pixelStorei(B.UNPACK_ROW_LENGTH,tn.width),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tn.height),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(B.UNPACK_SKIP_ROWS,xe),E.pixelStorei(B.UNPACK_SKIP_IMAGES,Ee);let Vr=A.isDataArrayTexture||A.isData3DTexture,qe=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let mn=X.get(A),Ds=X.get(z),Ke=X.get(mn.__renderTarget),Ns=X.get(Ds.__renderTarget);E.bindFramebuffer(B.READ_FRAMEBUFFER,Ke.__webglFramebuffer),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Wr=0;Wr<zt;Wr++)Vr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(A).__webglTexture,Z,Ee+Wr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(z).__webglTexture,Lt,yn+Wr)),B.blitFramebuffer(Wt,xe,Ft,Pt,kt,ze,Ft,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||X.has(A)){let mn=X.get(A),Ds=X.get(z);E.bindFramebuffer(B.READ_FRAMEBUFFER,C),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Ke=0;Ke<zt;Ke++)Vr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Z,Ee+Ke):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Z),qe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ds.__webglTexture,Lt,yn+Ke):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ds.__webglTexture,Lt),Z!==0?B.blitFramebuffer(Wt,xe,Ft,Pt,kt,ze,Ft,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):qe?B.copyTexSubImage3D(Ut,Lt,kt,ze,yn+Ke,Wt,xe,Ft,Pt):B.copyTexSubImage2D(Ut,Lt,kt,ze,Wt,xe,Ft,Pt);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else qe?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ut,Lt,kt,ze,yn,Ft,Pt,zt,Ze,On,tn.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,Lt,kt,ze,yn,Ft,Pt,zt,Ze,tn.data):B.texSubImage3D(Ut,Lt,kt,ze,yn,Ft,Pt,zt,Ze,On,tn):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Ft,Pt,Ze,On,tn.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Lt,kt,ze,tn.width,tn.height,Ze,tn.data):B.texSubImage2D(B.TEXTURE_2D,Lt,kt,ze,Ft,Pt,Ze,On,tn);E.pixelStorei(B.UNPACK_ROW_LENGTH,Wn),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue),E.pixelStorei(B.UNPACK_SKIP_PIXELS,_i),E.pixelStorei(B.UNPACK_SKIP_ROWS,Wi),E.pixelStorei(B.UNPACK_SKIP_IMAGES,Ls),Lt===0&&z.generateMipmaps&&B.generateMipmap(Ut),E.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&et.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?et.setTextureCube(A,0):A.isData3DTexture?et.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?et.setTexture2DArray(A,0):et.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){G=0,O=0,$=null,E.reset(),It.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}};function cS(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var L0={};function hS(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=cS(i.length*97+i.charCodeAt(0)),r=(a,l)=>`rgba(${a},${a},${a},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let a=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,u=s()*256,f=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=f,n.beginPath(),a?(n.moveTo(c,u),n.bezierCurveTo(c+4,u+h*.3,c-4,u+h*.7,c+2,u+h)):(n.moveTo(u,c),n.bezierCurveTo(u+h*.3,c+4,u+h*.7,c-4,u+h,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let u=1;u<4;u++)n.beginPath(),n.ellipse(c,h,u*3.5,u*2.2,a?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),a?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let a=4;for(let l=0;l<a;l++){let c=-(s()*40),h=256/a;for(;c<256;){let u=38+s()*50,f=190+s()*55|0;n.fillStyle=`rgb(${f},${f-3},${f+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*h+3,u-6,h-6,10):n.rect(c+3,l*h+3,u-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*h+7,u-24,3);for(let p=0;p<14;p++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(u-12),l*h+6+s()*(h-12),2,2);c+=u}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let a=6,l=256/a;for(let c=0;c<a;c++){let h=c%2*22;for(let u=-22;u<278;u+=44){let f=196+s()*50|0;n.fillStyle=`rgb(${f},${f-6},${f-8})`,n.beginPath(),n.moveTo(u+h+2,c*l),n.lineTo(u+h+42,c*l),n.lineTo(u+h+42,c*l+l*.55),n.quadraticCurveTo(u+h+22,c*l+l*1.15,u+h+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(u+h+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let a=0;a<60;a++){let l=s()*256,c=s()*256,h=10+s()*40,u=170+s()*70|0;n.fillStyle=`rgba(${u},${u-4},${u+10},.35)`,n.beginPath(),n.ellipse(l,c,h,h*.6,s()*3,0,7),n.fill()}for(let a=0;a<30;a++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let a=0;a<900;a++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let a=0;a<20;a++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let a=0;a<70;a++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let a=0;a<260;a++){let l=s()*256,c=s()*256,h=6+s()*14,u=s()>.45?215+s()*40|0:120+s()*60|0;for(let f of[-256,0,256])for(let p of[-256,0,256])l+f<-30||l+f>286||c+p<-30||c+p>286||(n.fillStyle=`rgba(${u},${u},${u-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+f,c+p,h,h*.62,s()*3.14,0,7),n.fill())}for(let a=0;a<120;a++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.28)",n.beginPath(),n.ellipse(l,c+9,9,4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-3,6,2.4,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(a,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,a,256,1.6);for(let a=0;a<9;a++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let a=0;a<5;a++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let a=-256;a<256*2;a+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(a+3,0),n.lineTo(a+3-256,256),n.stroke();for(let a=0;a<256;a+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let a=5,l=256/a;for(let c=0;c<a;c++){let h=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,l);for(let u=0;u<22;u++){let f=h+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,f),n.bezierCurveTo(80,f+3,160,f-3,256,f+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let u of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(u,h+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let a=0;a<8;a++){let l=a*256/8;for(let c=-10;c<266;c+=14){let h=c+a%2*7+s()*3,u=18+s()*10,f=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${f},${f},${f-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,l),n.lineTo(h+s()*8-4,l+u),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let o=new Fi(e);return o.wrapS=o.wrapT=uo,o.colorSpace=Ln,o.anisotropy=4,o}var Ye=i=>L0[i]||(L0[i]=hS(i)),Ie=(()=>{let i=new Uint8Array([112,160,208,255]),t=new fr(i,4,1,Co);return t.minFilter=t.magFilter=vn,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function D0(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function N0(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function Ks(){let i=null;try{i=localStorage.getItem("rio3d-season")}catch{}if(i!==null&&i!==""&&i!=="auto"&&+i>=0&&+i<4)return+i;let t=new Date().getMonth();return t===11||t<=1?3:t<=4?0:t<=7?1:2}var Wh=[{name:"Primavera",pine:["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],brd:["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],gnd:"#b6dca3",gk:0,pet:{c:16762578,size:.42,fall:1,base:.12,gain:.88}},{name:"Verano",pine:["#5fa383","#6fb593","#559a7e","#7cc09d"],blos:["#9aa8e6","#8c9ae0","#b3a2e8","#7f93d8"],bblos:["#9aa8e6","#b3a2e8","#8c9ae0","#a7b6ee"],brd:["#6fae74","#5f9f6a","#7cbc7a","#4f9468","#88c27f","#6aa878","#58a070"],gnd:"#9fd08a",gk:.18,pet:{c:16777215,size:.3,fall:1,base:0,gain:0}},{name:"Oto\xF1o",pine:["#6fa386","#80b496","#659a80","#8cc09d"],blos:["#d94a32","#e8702e","#f2a33a","#c43d2c"],bblos:["#d9573a","#e8803a","#f0b43a","#c9462f"],brd:["#d9533a","#e8802f","#f0b43a","#c9462f","#b8532f","#e39a4a","#cf6a3a"],gnd:"#d3a45f",gk:.32,pet:{c:15237178,size:.55,fall:1.35,base:.3,gain:.7}},{name:"Invierno",pine:["#a9c4b8","#b9d3c6","#9dbaae","#c4dccf"],blos:["#f6e3ea","#f2d3de","#fbeff3","#efc9d8"],bblos:["#f6e3ea","#fbeff3","#efc9d8","#f2d3de"],brd:["#cfd8d6","#b9c4c2","#a8b4b3","#dfe6e4","#9fa9a8","#c4cdcb","#b0bbb9"],gnd:"#eef3f8",gk:.62,pet:{c:16777215,size:.28,fall:1.1,base:.55,gain:.45}}],zi={c:15773373,c2:15044520,blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],pet:16762578};var uS=["es","en","ja"],ni="es";try{let i=localStorage.getItem("rio3d-lang");ni=uS.includes(i)?i:"es"}catch{}var vf=()=>ni,U0=i=>{try{localStorage.setItem("rio3d-lang",i)}catch{}},dS=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"]],fS=new Map(dS.map(i=>[i[0],i])),pS=ni==="en"?1:2;var mS=[[/^Siguiente: (.+) en (\d+) m$/,i=>ni==="en"?`Next: ${Yn(i[1])} in ${i[2]} m`:`\u6B21: ${Yn(i[1])}\uFF08\u3042\u3068${i[2]} m\uFF09`],[/^Descubriste: (.+)$/,i=>ni==="en"?`You discovered: ${Yn(i[1])}`:`\u767A\u898B\uFF1A${Yn(i[1])}`],[/^Continuar \((\d+) m\)$/,i=>ni==="en"?`Continue (${i[1]} m)`:`\u7D9A\u3051\u308B\uFF08${i[1]} m\uFF09`],[/^Soltar linterna \((\d+)\)$/,i=>ni==="en"?`Release lantern (${i[1]})`:`\u30E9\u30F3\u30BF\u30F3\u3092\u6D41\u3059\uFF08${i[1]}\uFF09`],[/^Auto \(ahora ([\d.]+)×\)$/,i=>ni==="en"?`Auto (now ${i[1]}\xD7)`:`\u81EA\u52D5\uFF08\u73FE\u5728 ${i[1]}\xD7\uFF09`],[/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,i=>ni==="en"?`${i[1]}/${i[2]} places \xB7 ${Yn(i[3])} \xB7 you reached ${i[4]} m \xB7 lanterns released: ${i[5]}`:`${i[1]}/${i[2]}\u304B\u6240 \xB7 ${Yn(i[3])} \xB7 \u5230\u9054 ${i[4]} m \xB7 \u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[5]}`],[/^Linternas dejadas: (\d+)$/,i=>ni==="en"?`Lanterns left here: ${i[1]}`:`\u3053\u3053\u306B\u6B8B\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[1]}`],[/^Tu linterna del (.+)$/,i=>ni==="en"?`Your lantern from ${i[1]}`:`${i[1]}\u306E\u30E9\u30F3\u30BF\u30F3`]];function Yn(i){if(ni==="es"||typeof i!="string")return i;let t=i.trim();if(!t)return i;let e=fS.get(t);if(e)return i.replace(t,e[pS]);for(let[n,s]of mS){let r=t.match(n);if(r)return i.replace(t,s(r))}return i}function qh(i){if(i.nodeType===3){let e=Yn(i.nodeValue);e!==i.nodeValue&&(i.nodeValue=e);return}if(i.nodeType!==1||i.tagName==="SCRIPT"||i.tagName==="STYLE")return;i.placeholder&&(i.placeholder=Yn(i.placeholder));let t=i.getAttribute&&i.getAttribute("aria-label");if(t){let e=Yn(t);e!==t&&i.setAttribute("aria-label",e)}for(let e of i.childNodes)qh(e)}function F0(){ni!=="es"&&(document.documentElement.lang=ni,qh(document.body),new MutationObserver(i=>{for(let t of i)t.type==="characterData"?qh(t.target):t.addedNodes.forEach(qh)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0}))}function B0(i){let{R:t,scene:e,cam:n,canvas:s,el:r,toast:o,P:a,LM:l,lmFound:c,lmPos:h,LMS:u,mkLantern:f,cx:p,hw:g,A:x,SEAS:d,seasonIdx:m}=i,y={photo:!1,want:null},b={get(j,Tt){try{let ve=localStorage.getItem(j);return ve===null?Tt:ve}catch{return Tt}},set(j,Tt){try{return localStorage.setItem(j,Tt),!0}catch{return!1}},del(j){try{localStorage.removeItem(j)}catch{}}},_=d[m()],S=document.createElement("style");S.textContent=`
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
  `,document.head.appendChild(S);let M=Math.min(devicePixelRatio||1,2),w=[.7,.85,1,1.25,1.5],v=0;w.forEach((j,Tt)=>{j<=M+.001&&(v=Tt)});let T=b.get("rio3d-q","auto"),R=Math.min(v,3),P=v,I=1/60,D=0,C=5,U=0,G=0,O=0,$=0,H={hi:1.5,mid:1,lo:.7},q=()=>y.photo?Math.min(M,1.75):Math.min(T==="auto"?w[R]:H[T]||1,M);function J(){let j=q();Math.abs(j-$)>.01&&($=j,t.setPixelRatio(j),t.setSize(innerWidth,innerHeight,!1),Rt())}y.tick=function(j){if(!(document.hidden||!i.started()||y.photo)&&(j=Math.min(j,.1),I+=(j-I)*.04,D+=j,!(D<1))){if(D=0,T!=="auto"){J();return}if(C>0){C--,$||J();return}I>.027?(G++,U=0):I<.0185?(U++,G=0):(U=0,G=0),G>=2&&R>0?(R--,G=0,C=6,O&&performance.now()-O<3e4&&(P=Math.min(P,R)),J()):U>=12&&R<Math.min(P,v)&&(R++,U=0,C=10,O=performance.now(),J())}};let mt=()=>T==="auto"?"Auto (ahora "+Math.min(w[R],M).toFixed(2)+"\xD7)":"Fija",wt={none:{n:"Sin filtro"},nat:{n:"Natural",t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},warm:{n:"C\xE1lido",t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},mist:{n:"Bruma",t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},ink:{n:"Tinta",t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},moon:{n:"Noche azul",t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}},le=b.get("rio3d-filter","nat");wt[le]||(le="nat");let se=b.get("rio3d-frame","1")==="1",Yt=null,nt=new dr,ot=new qs(-1,1,1,-1,0,1),bt=new sn({depthTest:!1,depthWrite:!1,uniforms:{tex:{value:null},px:{value:new ut},tint:{value:new N(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
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
    }`});nt.add(new K(new an(2,2),bt));let Ot=new ut;function Rt(){Yt&&(t.getDrawingBufferSize(Ot),(Yt.width!==Ot.x||Yt.height!==Ot.y)&&Yt.setSize(Ot.x,Ot.y))}function Jt(){if(Yt){Rt();return}t.getDrawingBufferSize(Ot);try{Yt=new Nn(Ot.x,Ot.y,{samples:4,type:pi,depthBuffer:!0})}catch{Yt=new Nn(Ot.x,Ot.y,{samples:4,depthBuffer:!0})}}y.render=function(){let j=wt[le];if(y.photo&&j.t){Jt(),t.setRenderTarget(Yt),t.render(e,n),t.setRenderTarget(null);let Tt=bt.uniforms;Tt.tex.value=Yt.texture,Tt.px.value.set(1/Yt.width,1/Yt.height),Tt.tint.value.set(j.t[0],j.t[1],j.t[2]),Tt.sat.value=j.sat,Tt.con.value=j.con,Tt.lift.value=j.lift,Tt.vig.value=j.vig,Tt.glow.value=j.glow,Tt.grain.value=j.grain,Tt.time.value=a.t%10,t.render(nt,ot)}else t.render(e,n);if(y.want){let Tt=y.want;y.want=null;try{Tt()}catch(ve){console.error("want",ve&&ve.message)}}};let De=new N(0,1,0),rt=new N(1,0,0),ht=new fn,ft=new fn,dt=0,xt=0,Nt=1,Gt=0,$t=0,ne=1;y.camAdjust=function(){Gt+=(dt-Gt)*.25,$t+=(xt-$t)*.25,ne+=(Nt-ne)*.25,(Math.abs(Gt)>1e-4||Math.abs($t)>1e-4)&&(ht.setFromAxisAngle(De,Gt),ft.setFromAxisAngle(rt,$t),n.quaternion.premultiply(ht).multiply(ft)),Math.abs(ne-1)>.001&&(n.fov=Math.max(18,Math.min(110,n.fov*ne)),n.updateProjectionMatrix())};let B=new Map,Ae=0;s.addEventListener("pointerdown",j=>{if(y.photo&&(s.setPointerCapture(j.pointerId),B.set(j.pointerId,[j.clientX,j.clientY]),B.size===2)){let Tt=[...B.values()];Ae=Math.hypot(Tt[0][0]-Tt[1][0],Tt[0][1]-Tt[1][1])}}),s.addEventListener("pointermove",j=>{if(!y.photo||!B.has(j.pointerId))return;let Tt=B.get(j.pointerId),ve=j.clientX-Tt[0],Re=j.clientY-Tt[1];if(Tt[0]=j.clientX,Tt[1]=j.clientY,B.size===1){let re=.0045*Nt;dt-=ve*re,xt=Math.max(-1.05,Math.min(1.05,xt-Re*re))}else if(B.size===2){let re=[...B.values()],de=Math.hypot(re[0][0]-re[1][0],re[0][1]-re[1][1]);Ae>0&&(Nt=Math.max(.35,Math.min(1.35,Nt*Ae/de))),Ae=de,Ht.value=Nt}});let ge=j=>{B.delete(j.pointerId),Ae=0};s.addEventListener("pointerup",ge),s.addEventListener("pointercancel",ge),s.addEventListener("wheel",j=>{y.photo&&(Nt=Math.max(.35,Math.min(1.35,Nt*(1+Math.sign(j.deltaY)*.06))),Ht.value=Nt,j.preventDefault())},{passive:!1});let L=r("hud"),E=r("hr"),W=r("menu"),X=r("more"),et=(j,Tt,ve,Re)=>{let re=document.createElement("button");return re.id=j,re.type="button",re.textContent=Tt,ve?W.insertBefore(re,Re||null):E.insertBefore(re,Re||r("cam")),re};X.onclick=j=>{j.stopPropagation(),W.hidden=!W.hidden,X.setAttribute("aria-expanded",String(!W.hidden))},document.addEventListener("click",j=>{(!W.hidden&&!E.contains(j.target)||!W.hidden&&W.contains(j.target)&&j.target.tagName==="BUTTON"&&j.target.id!=="snd")&&(W.hidden=!0,X.setAttribute("aria-expanded","false"))});let gt=et("pauseB","Pausa");gt.dataset.pz="1";let _t=et("photoB","Foto"),it=et("diaryB","Diario",!0,r("snd")),at=et("setB","Ajustes",!0,r("snd")),St=et("restB","Reiniciar",!0),Dt=document.createElement("div");Dt.id="xph",Dt.className="xp",Dt.hidden=!0,Dt.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`,document.body.appendChild(Dt);let vt=document.createElement("button");vt.id="xclose",vt.textContent="Salir de foto",vt.hidden=!0,document.body.appendChild(vt);let yt=document.createElement("div");yt.id="xflash",document.body.appendChild(yt);let Ht=Dt.querySelector("#xzm"),Zt=Dt.querySelector("#xhr"),he=Dt.querySelector("#xfl"),k=Dt.querySelector("#xfm"),Mt={};Object.keys(wt).forEach(j=>{let Tt=document.createElement("button");Tt.className="chip2",Tt.textContent=wt[j].n,Tt.onclick=()=>{le=j,b.set("rio3d-filter",j),st()},he.appendChild(Tt),Mt[j]=Tt});function st(){for(let j in Mt)Mt[j].classList.toggle("on",j===le);k.classList.toggle("on",se)}k.onclick=()=>{se=!se,b.set("rio3d-frame",se?"1":"0"),st()},Dt.querySelector("#xvw").onclick=()=>i.setCam(1-i.getCam()),Ht.oninput=()=>{Nt=+Ht.value},Zt.oninput=()=>i.setTod(+Zt.value);let Et=["hud","next","hint","toast","lantB"],It=()=>[...document.body.children].filter(j=>j.tagName==="DIV"&&/pointer-events:none/.test(j.style.cssText)&&j.id!=="xflash");function ct(j){j!==y.photo&&(j&&!i.started()||(y.photo=j,document.body.classList.toggle("photo",j),Et.forEach(Tt=>{let ve=r(Tt)||document.getElementById(Tt);ve&&(ve.style.visibility=j?"hidden":"")}),It().forEach(Tt=>Tt.style.visibility=j?"hidden":""),Dt.hidden=!j,vt.hidden=!j,j?(dt=xt=0,Nt=1,Ht.value=1,Zt.value=i.getTod(),st(),J(),o("Arrastra para mirar \xB7 pellizca para acercar")):(dt=xt=0,Nt=1,B.clear(),J(),Gr())))}_t.onclick=()=>ct(!0),vt.onclick=()=>ct(!1),addEventListener("keydown",j=>{j.code==="KeyP"&&ct(!y.photo),j.code==="Escape"&&y.photo&&ct(!1),j.code==="Enter"&&y.photo&&Vt()});function Vt(){y.want=()=>{yt.style.transition="none",yt.style.opacity=.35,requestAnimationFrame(()=>{yt.style.transition="opacity .5s",yt.style.opacity=0});let j=s.width,Tt=s.height,ve=s;if(se){let Re=Math.round(j*.03),re=Math.round(j*.065),de=document.createElement("canvas");de.width=j+2*Re,de.height=Tt+Re+re;let te=de.getContext("2d");te.fillStyle="#f3ead6",te.fillRect(0,0,de.width,de.height),te.drawImage(s,Re,Re,j,Tt);let Bn=i.nearLM(a.dist||0),Vi=Math.round(re*.4);te.fillStyle="#5a4a3c",te.font=Vi+"px Georgia,serif",te.textBaseline="middle",te.fillText("R\xEDo 3D"+(Bn?"  \xB7  "+Yn(Bn):""),Re,Tt+Re+re*.52),te.textAlign="right",te.fillStyle="#8a7a68",te.fillText(Math.round(a.dist||0)+" m  \xB7  "+Yn(_.name)+"  \xB7  "+Yn(i.todName(i.getTod())),de.width-Re,Tt+Re+re*.52),ve=de}ve.toBlob(Re=>{if(!Re)return;let re=new File([Re],"rio3d-"+Date.now()+".jpg",{type:"image/jpeg"}),de=()=>{let te=document.createElement("a");te.href=URL.createObjectURL(Re),te.download=re.name,document.body.appendChild(te),te.click(),setTimeout(()=>{URL.revokeObjectURL(te.href),te.remove()},4e3)};navigator.canShare&&navigator.canShare({files:[re]})?navigator.share({files:[re],title:"R\xEDo 3D"}).catch(te=>{te&&te.name!=="AbortError"&&de()}):de()},"image/jpeg",.92)}}Dt.querySelector("#xshut").onclick=Vt;let Bt=j=>"rio3d-snap-"+j,He=new Set;for(let j=0;j<l.length;j++)b.get(Bt(j),null)&&He.add(j);y.hasSnap=j=>He.has(j),y.snap=function(j){y.want=()=>{let ve=Math.round(420*s.height/s.width),Re=document.createElement("canvas");Re.width=420,Re.height=ve,Re.getContext("2d").drawImage(s,0,0,420,ve);let re=Re.toDataURL("image/jpeg",.72);b.set(Bt(j),re)&&(He.add(j),b.set("rio3d-snapd-"+j,new Date().toISOString().slice(0,10)))}},y.found=j=>{b.get("rio3d-snapd-"+j,null)||b.set("rio3d-snapd-"+j,new Date().toISOString().slice(0,10))};let Ne=j=>j?new Date(j+"T12:00:00").toLocaleDateString(vf(),{day:"numeric",month:"short"}):"",Vn=j=>{let Tt=document.createElement("div");return Tt.className="xp xm",Tt.innerHTML='<div><button class="close">Cerrar</button>'+j+"</div>",Tt.onclick=ve=>{(ve.target===Tt||ve.target.classList.contains("close"))&&Tt.remove()},document.body.appendChild(Tt),Tt};it.onclick=()=>{let j=ai(),Tt=new Array(l.length).fill(0);j.forEach(re=>{let de=Math.round((re.s-240)/u);Tt[i.lmType(de)]++});let ve=+b.get("rio3d-pos","0"),Re='<h2>Diario del r\xEDo</h2><p style="margin:0 0 12px;color:var(--muted)">'+c.size+"/"+l.length+" lugares \xB7 "+_.name+" \xB7 llegaste hasta "+ve+" m \xB7 linternas soltadas: "+j.length+'</p><div class="xgrid">';l.forEach((re,de)=>{let te=c.has(de),Bn=te&&b.get(Bt(de),null);Re+='<div class="xcard'+(te?"":" no")+'"><div class="im"'+(Bn?' style="background-image:url('+Bn+')"':"")+">"+(Bn?"":te?"?":"\xB7")+'</div><div class="tx"><b>'+(te?re:"A\xFAn por descubrir")+"</b>"+(te?Bn?Ne(b.get("rio3d-snapd-"+de,"")):"Vuelve a pasar para fotografiarlo":"Sigue r\xEDo abajo")+(Tt[de]?"<br>Linternas dejadas: "+Tt[de]:"")+"</div></div>"}),Vn(Re+"</div>")};let ai=()=>{try{return JSON.parse(b.get("rio3d-left","[]"))||[]}catch{return[]}},cs=ai(),zr=new Map,ea=[],kr=new Set,Ps=document.createElement("button");Ps.id="lantB",document.body.appendChild(Ps),Ps.hidden=!0;function Gr(){let j=i.getCount();Ps.hidden=!(i.started()&&j>0&&!y.photo),Ps.textContent="Soltar linterna ("+j+")"}Ps.onclick=()=>{if(i.getCount()<=0||y.photo)return;let j=-a.pz+7,Tt=Math.max(-g(j)+4,Math.min(g(j)-4,a.px+Math.sin(a.psi)*7-p(j)));cs.push({s:Math.round(j*10)/10,e:Math.round(Tt*10)/10,t:Date.now()}),cs.length>80&&cs.shift(),b.set("rio3d-left",JSON.stringify(cs)),i.setCount(i.getCount()-1);try{x.plop(0)}catch{}i.spawnRipple(p(j)+Tt,-j),Gr(),cs.length===1&&o("Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.")},y.update=function(j,Tt){if(!i.started())return;Ll(j),((y.update.n=(y.update.n||0)+1)&15)===0&&Gr();let ve=a.t,Re=i.glowK();for(let[re,de]of zr){let te=cs[re];(!te||te.s<Tt-70||te.s>Tt+280)&&(e.remove(de),ea.push(de),zr.delete(re))}cs.forEach((re,de)=>{if(re.s<Tt-70||re.s>Tt+280)return;let te=zr.get(de);te||(te=ea.pop()||f(),te.scale.setScalar(1.25),te.userData.body.material=te.userData.body.material.clone(),te.userData.body.material.color.set(16773328),e.add(te),zr.set(de,te)),te.position.set(p(re.s)+re.e+Math.sin(ve*.3+de)*.5,Math.sin(ve*1.1+de)*.04,-re.s),te.rotation.z=Math.sin(ve*.8+de*2)*.08,te.userData.glow.material.opacity=(.6+.3*Re)*(.85+.15*Math.sin(ve*3+de)),te.userData.refl.material.opacity=(.3+.3*Re)*(.9+.1*Math.sin(ve*2+de));let Bn=te.position.x-a.px,Vi=te.position.z-a.pz;Bn*Bn+Vi*Vi<196&&!kr.has(de)&&!y.photo&&(kr.add(de),o("Tu linterna del "+Ne(new Date(re.t).toISOString().slice(0,10))))})},St.onclick=()=>{let j=Vn('<h2>\xBFVolver al inicio del r\xEDo?</h2><p style="color:var(--muted);margin:0 0 14px">Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.</p><div class="row"><button class="q" id="xno">Cancelar</button><button class="q" id="xyes" style="background:#ffc77a;color:#3b2a1a">Reiniciar recorrido</button></div>');j.querySelector("#xno").onclick=()=>j.remove(),j.querySelector("#xyes").onclick=()=>{j.remove(),i.restart()}},at.onclick=()=>{let j=Vn(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Autom\xE1tica</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (m\xE1s fluida)</option></select></div>
    <div class="row"><span>Volumen</span><input type="range" id="xv" min="0" max="1" step=".05" style="width:55%;accent-color:#ffc77a"></div>
    <div class="row"><span>Estaci\xF3n<br><small style="color:var(--muted)">Cambiarla recarga el r\xEDo</small></span><select id="xs"><option value="auto">Seg\xFAn la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Oto\xF1o</option><option value="3">Invierno</option></select></div>
    <div class="row"><span>Idioma</span><select id="xl"><option value="es">Espa\xF1ol</option><option value="en">English</option><option value="ja">\u65E5\u672C\u8A9E</option></select></div>
    <div class="row"><span>Subt\xEDtulos de ambiente<br><small style="color:var(--muted)">Describe los sonidos con texto</small></span><select id="xsub"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Vibraci\xF3n suave<br><small style="color:var(--muted)">Si tu dispositivo la permite</small></span><select id="xhp"><option value="1">S\xED</option><option value="0">No</option></select></div>
    <div class="row"><span>Modo una mano<br><small style="color:var(--muted)">Botones al alcance del pulgar</small></span><select id="xh"><option value="0">No</option><option value="r">Derecha</option><option value="l">Izquierda</option></select></div>
    <div class="row"><span>Tono suave<br><small style="color:var(--muted)">Suaviza los sonidos agudos</small></span><select id="xsoft"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Dormir<br><small style="color:var(--muted)">Baja el sonido y la luz poco a poco</small></span><select id="xsl"><option value="0">No</option><option value="15">15 min</option><option value="30">30 min</option><option value="45">45 min</option></select></div>`),Tt=j.querySelector("#xq"),ve=j.querySelector("#xs"),Re=j.querySelector("#xql"),re=j.querySelector("#xv");re.value=x.vol,re.oninput=()=>{x.setVol(+re.value),b.set("rio3d-vol",re.value)},Tt.value=T,ve.value=b.get("rio3d-season","auto"),Re.textContent=mt(),Tt.onchange=()=>{T=Tt.value,b.set("rio3d-q",T),C=3,J(),Re.textContent=mt()},ve.onchange=()=>{b.set("rio3d-season",ve.value);try{i.savePos()}catch{}location.reload()};let de=j.querySelector("#xl");de.value=vf(),de.onchange=()=>{U0(de.value);try{i.savePos()}catch{}location.reload()};let te=j.querySelector("#xsub");te.value=b.get("rio3d-subs","0"),te.onchange=()=>b.set("rio3d-subs",te.value);let Bn=j.querySelector("#xhp");Bn.value=b.get("rio3d-hap","1"),Bn.onchange=()=>b.set("rio3d-hap",Bn.value);let Vi=j.querySelector("#xsoft");Vi.value=UX.api.soft()?"1":"0",Vi.onchange=()=>UX.api.setSoft(Vi.value==="1");let na=j.querySelector("#xsl");na.value=String(UX.api.sleepMin()),na.onchange=()=>UX.api.sleep(+na.value);let Is=j.querySelector("#xh");Is.value=b.get("rio3d-hand","0"),Is.onchange=()=>{b.set("rio3d-hand",Is.value),document.body.classList.remove("hand-r","hand-l"),Is.value!=="0"&&document.body.classList.add("hand-"+Is.value)}};{let j=parseFloat(b.get("rio3d-vol","1"));j>=0&&j<=1&&(x.vol=j)}let yi=b.get("rio3d-ob","0")==="1"?9:0,Fn=0,Gi=r("hint");function Ll(j){yi>=9||!i.started()||(Fn+=j,yi===0&&Fn>1?(Gi.hidden=!1,Gi.style.opacity=1,Gi.textContent="Mant\xE9n presionado y desliza a los lados para dirigir la canoa",yi=1,Fn=0):yi===1&&(Math.abs(a.steer)>.35||Fn>40)?(yi=2,Fn=0,Gi.textContent="Las luces sobre el agua son linternas: pasa cerca para recogerlas"):yi===2&&(i.getCount()>0||Fn>60)?(yi=3,Fn=0,Gi.textContent="Con Foto puedes guardar un momento; con Diario ves tus lugares"):yi===3&&Fn>10&&(Gi.style.opacity=0,yi=9,b.set("rio3d-ob","1")))}return bt.uniforms.time.value=0,J(),st(),addEventListener("resize",()=>setTimeout(Rt,50)),y}(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},t=document.createElement("style");t.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(t);let e=document.createElement("div");e.id="pz",e.hidden=!0,e.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(e);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,e.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,o){if(r=r.filter(Boolean),!s||!r.length)return;let a=document.createElement("style");a.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(a);let l=document.createElement("button");l.type="button",l.textContent=o||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),c.appendChild(h)}),s.appendChild(l),document.body.appendChild(c),l.onclick=h=>{if(h.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let u=l.getBoundingClientRect();c.style.top=u.bottom+6+"px",c.style.right=Math.max(8,innerWidth-u.right)+"px"}},document.addEventListener("click",h=>{!c.hidden&&!c.contains(h.target)&&h.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},e.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();var tt=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Fe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Be=(i,t,e)=>{let n=Fe((e-i)/(t-i));return n*n*(3-2*n)},Mr=(i,t,e)=>i+(t-i)*e;function rn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=tt(e,n),c=tt(e+1,n),h=tt(e,n+1),u=tt(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}var We=i=>document.getElementById(i),Mf=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},No=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=6.2832;for(;e<-Math.PI;)e+=6.2832;return e};var rl=11,gS=[0,1,2,4,5,6,7,8,9,3,10],Je=i=>gS[(i%rl+rl)%rl],xS=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if(Je(n)===6){let s=240+n*260+tt(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},ie=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+xS(i),be=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),xn=i=>Math.atan((ie(i+1)-ie(i-1))/2);function Zn(i,t){let e=Math.abs(i-ie(t))-be(t);if(e<0)return-1.5+1.7*Be(-5,0,e);let n=rn(i*.018,t*.018)*12+rn(i*.055,t*.055)*4;return yS(i,t,.2+.6*Be(0,4,e)+n*Be(5,60,e)+Math.min(e,160)*.1*Be(30,100,e))}var oe={PO:66,PH:7,X:66,ZF:44,ZB:-52,MZ0:50,MZ1:60},O0=new Map;function bf(i){let t=O0.get(i);if(!t){let e=je(i),n=xn(e);t={k:i,s0:e,a:n,x0:ie(e),hw0:be(e),side:tt(i,9)>.5?1:-1,ca:Math.cos(n),sa:Math.sin(n)},O0.set(i,t)}return t}function ol(i,t,e){let n=t-i.x0,s=i.s0-e,r=n*i.ca+s*i.sa,o=-n*i.sa+s*i.ca;return[i.side*o,-i.side*r+i.hw0+oe.PO]}function br(i){let t=Math.round((i-240)/260);for(let e=t-1;e<=t+1;e++)if(Je(e)===10)return bf(e);return null}function yS(i,t,e){let n=br(t);if(!n||Math.abs(t-n.s0)>200)return e;let[s,r]=ol(n,i,t);if(r<-130||r>95||Math.abs(s)>150)return e;let o=Math.max(Math.abs(s)-oe.X,r-oe.ZF,oe.ZB-r),a=1-Be(4,70,o);a>0&&(e=e*(1-a)+Math.min(e,3.2)*a);let l=1-Be(0,2,o+1.5);l>0&&(e=e*(1-l)+oe.PH*l);let c=Math.min(Math.max(Math.abs(s)-62,Math.abs(r-53)-7),Math.max(Math.abs(s+50)-6,Math.abs(r-65)-10)),h=1-Be(-.2,2.2,c);return h>0&&(e=e*(1-h)-1.6*h),e}function H0(i,t){let e=br(t);if(!e||Math.abs(t-e.s0)>130)return 0;let[n,s]=ol(e,i,t);return 1-Be(0,2,Math.max(Math.abs(n)-oe.X,s-oe.ZF,oe.ZB-s)+1.5)}function Sf(i,t){let e=br(t);if(!e||Math.abs(t-e.s0)>130)return!1;let[n,s]=ol(e,i,t);return Math.abs(n)<80&&s>-66&&s<72}function Uo(i){let t=je(i),e=je(i-1);return e-80>=t-360?e-80:e+80}var Jn=150,$n=120,ss=2.6,Kn=3,al=8,Un=Wh[Ks()],Ti=260,je=i=>240+i*Ti+tt(i,5)*50,Sr=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++){let s=Je(n);s===3?t=Math.max(t,1-Be(40,170,Math.abs(je(n)-i))):s===10&&(t=Math.max(t,.9*(1-Be(55,230,Math.abs(je(n)-i)))))}return t},Fo=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)Je(n)===8&&(t=Math.max(t,1-Be(70,190,Math.abs(je(n)-i))));return t},Ef=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=Je(n);if((s===5||s===7)&&Math.abs(je(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},Bo=i=>Be(.4,.55,rn(i*.0022+31,5)*.6+rn(i*.0053+8,2)*.4),Xh=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+tt(n,7)*220,r=120+tt(n,8)*70,o=(i-s)/r;t=Math.max(t,Math.exp(-o*o))}return t};var lt={tod:.5,glowK:.3,started:!1,camMode:0,camK:0,count:0,scareT:0,cine:null,cineW:0,savedS:0,X:null},F={px:ie(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};F.pz=-30;F.px=ie(30);F.psi=xn(30);function Yh(i){F.pz=-i,F.px=ie(i),F.psi=xn(i),F.dist=i}function z0(){lt.cine&&lt.cine.t>1.5&&(lt.cine.t=Math.max(lt.cine.t,lt.cine.dur-2.4))}var Ms=document.getElementById("c"),rs=new kh({canvas:Ms,antialias:!0,powerPreference:"high-performance"});rs.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var At=new dr;At.fog=new Sa(13421772,22,250);var pn=new gn(68,1,.05,900);function Tf(){let i=innerWidth,t=innerHeight;rs.setSize(i,t,!1),pn.aspect=i/t,pn.fov=i/t<1?82:68,pn.updateProjectionMatrix()}addEventListener("resize",Tf);addEventListener("orientationchange",()=>setTimeout(Tf,250));Tf();document.addEventListener("visibilitychange",()=>{try{ae.ctx&&(document.hidden?ae.ctx.suspend():ae.on&&!PZ.on&&ae.ctx.resume())}catch{}});var Er=new za(16777215,9083528,1.2);At.add(Er);var bs=new Wa(16777215,1);At.add(bs);var jn=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Fi(i)})(),ii=(i,t)=>{let e=new ys(new ts({map:jn,color:i,blending:kn,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},qt=(i,t)=>new ye(Object.assign({gradientMap:Ie,color:i},t||{}));var wi=new K(new pe(700,24,16),new sn({side:Tn,depthWrite:!1,fog:!1,uniforms:{top:{value:new pt},hor:{value:new pt},sunDir:{value:new N(0,1,0)},sunCol:{value:new pt},glow:{value:1}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,hor,sunDir,sunCol;uniform float glow;
  void main(){vec3 d=normalize(vP);float h=d.y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5));
   float s=max(dot(d,normalize(sunDir)),0.);c+=sunCol*(pow(s,18.)*.45+pow(s,200.)*.6)*glow;
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));wi.renderOrder=-10;At.add(wi);var Rf=ii(16769712,140),Cf=ii(14673663,70);At.add(Rf,Cf);var k0=new ue,G0=new Float32Array(450*3);for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);G0.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3)}k0.setAttribute("position",new Kt(G0,3));var Pf=new bi(k0,new hi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));At.add(Pf);var Oo=(i,t,e,n,s,r,o,a,l)=>({t:i,top:new pt(t),hor:new pt(e),fog:new pt(n),sun:new pt(s),hi:r,si:o,night:a,hg:new pt(l)}),Zh=[Oo(0,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70"),Oo(.12,"#8fa4d8","#f6c7c0","#efcfcf","#ffd2a8",1.4,.5,.2,"#c4ccc0"),Oo(.35,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0"),Oo(.6,"#7e79c2","#f9bd9c","#e8b9b3","#ffb98a",1.5,.8,.1,"#c8c4c0"),Oo(.75,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70"),Oo(1,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70")],Se={top:new pt,hor:new pt,fog:new pt,sun:new pt,hg:new pt,hi:1,si:1,night:0};function _S(i){let t=0;for(;t<Zh.length-2&&i>Zh[t+1].t;)t++;let e=Zh[t],n=Zh[t+1],s=Fe((i-e.t)/(n.t-e.t));["top","hor","fog","sun","hg"].forEach(r=>Se[r].copy(e[r]).lerp(n[r],s)),Se.hi=Mr(e.hi,n.hi,s),Se.si=Mr(e.si,n.si,s),Se.night=Mr(e.night,n.night,s)}var wf=new N,Af=new N;function V0(i,t){_S(lt.tod);let e=Math.sin(Math.PI*2*(lt.tod-.12));wf.set(.25,e,-.9).normalize(),Af.set(-.25,-e*.9+.05,-.9).normalize(),At.fog.color.copy(Se.fog),wi.material.uniforms.top.value.copy(Se.top),wi.material.uniforms.hor.value.copy(Se.hor);let n=e>0,s=n?wf:Af;wi.material.uniforms.sunDir.value.copy(s),wi.material.uniforms.sunCol.value.copy(Se.sun),wi.material.uniforms.glow.value=n?1:.5,Er.color.copy(Se.hor).lerp(Se.top,.4),Er.groundColor.copy(Se.hg),Er.intensity=Se.hi,bs.color.copy(Se.sun),bs.intensity=Se.si,bs.position.copy(s).multiplyScalar(100).add(new N(i,0,t)),bs.target.position.set(i,0,t),bs.target.updateMatrixWorld(),wi.position.set(i,0,t),Rf.position.set(i,0,t).addScaledVector(wf,640),Cf.position.set(i,0,t).addScaledVector(Af,640),Rf.material.opacity=Fe(e*4+.2,0,1),Cf.material.opacity=Fe(-e*4,0,1)*.9,Pf.position.set(i,0,t),Pf.material.opacity=Fe(Se.night*1.1,0,1),mi.material.uniforms.sunDir.value.copy(s),mi.material.uniforms.sunCol.value.copy(Se.sun).multiplyScalar(Fe(n?e*3:-e*1.5,0,1)),mi.material.uniforms.hor.value.copy(Se.hor),mi.material.uniforms.top.value.copy(Se.top),mi.material.uniforms.fog.value.copy(Se.fog),mi.material.uniforms.night.value=Se.night,lt.glowK=Fe(Se.night*1.2+.25,0,1)}var Jh=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",mi=new K(new an(1e3,1e3),new sn({uniforms:{t:{value:0},deep:{value:new pt("#5a8f9c")},shallow:{value:new pt("#a3c8c4")},hor:{value:new pt},top:{value:new pt},fog:{value:new pt},sunDir:{value:new N(0,1,0)},sunCol:{value:new pt},night:{value:0},fogN:{value:22},fogF:{value:250}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,night,fogN,fogF;uniform vec3 deep,shallow,hor,top,fog,sunDir,sunCol;
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
}`}));mi.rotation.x=-Math.PI/2;At.add(mi);function Ss(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=W0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=W0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function W0(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Kt(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var If=new Float32Array(Jn*$n*3),Lf=new Float32Array(Jn*$n*3),js=new ue;js.setAttribute("position",new Kt(If,3));js.setAttribute("color",new Kt(Lf,3));{let i=new Uint16Array((Jn-1)*($n-1)*6),t=0;for(let e=0;e<$n-1;e++)for(let n=0;n<Jn-1;n++){let s=e*Jn+n,r=s+1,o=s+Jn,a=o+1;i.set([s,r,o,r,a,o],t),t+=6}js.setIndex(new Kt(i,1))}var q0=new K(js,new ye({vertexColors:!0,gradientMap:Ie}));q0.frustumCulled=!1;At.add(q0);var X0=new pt("#eadcb9"),Y0=new pt("#b6dca3"),Z0=new pt("#8fc79b"),J0=new pt("#bdd6c8"),$0=new pt("#d3cce9"),K0=new pt("#c8d6c0"),j0=new pt("#d9b45f"),Q0=new pt("#c8964a"),tg=new pt("#f6c9d8"),eg=new pt("#d9d2bf"),$e=new pt,ll=1900;function ng(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let c=0;c<s.count;c++)s.setXY(c,s.getX(c)*t[0],s.getY(c)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,o=i.boundingBox.max.y,a=i.attributes.position,l=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){let h=e+(n-e)*((a.getY(c)-r)/(o-r||1));l[c*3]=l[c*3+1]=l[c*3+2]=h}return i.setAttribute("color",new Kt(l,3)),i}var ig=Ss([[2,2.6,.8],[1.6,2.5,2.4],[1.2,2.3,3.9],[.75,2,5.3]].map(([i,t,e])=>ng(new Oe(i,t,8,1).translate(0,e+t/2,0),[4,2],.72,1.18)).map(i=>(i.deleteAttribute("normal"),i)));ig.computeVertexNormals();var sg=Ss([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3]].map(([i,t,e,n])=>{let s=new Mn(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),ng(s,[3,3],.82,1.22)}));sg.computeVertexNormals();var vS=()=>new ye({gradientMap:Ie,color:16777215,vertexColors:!0,map:Ye("leaf")}),cl=new Pn(ig,new ye({gradientMap:Ie,color:16777215,vertexColors:!0,map:Ye("needle")}),ll),Tr=new Pn(sg,vS(),ll),hl=new Pn(new Le(.2,.34,4.2,6).translate(0,2.1,0),new ye({gradientMap:Ie,color:9071196,map:Ye("bark")}),ll),ul=new Pn(new ui(.7,10).rotateX(-Math.PI/2),new ye({gradientMap:Ie,color:16777215}),500),dl=new Pn(new Mn(.28,0).translate(0,.2,0),new ye({gradientMap:Ie,color:16777215}),160);[cl,Tr,hl,ul,dl].forEach(i=>{i.frustumCulled=!1,At.add(i)});var Df={value:0};function MS(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=Df,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var Nf=(()=>{let i=[];for(let t=0;t<9;t++){let e=t/9*6.28+tt(t,1),n=.9+tt(t,2)*1.3,s=.07,r=Math.cos(e)*.25*tt(t,3),o=Math.sin(e)*.25*tt(t,3),a=(tt(t,4)-.5)*.9,l=new ue,c=new Float32Array([-s,0,0,s,0,0,a*.5-s*.5,n*.6,0,a*.5+s*.5,n*.6,0,a,n,0]);l.setAttribute("position",new Kt(c,3)),l.setIndex([0,1,2,1,3,2,2,3,4]),l.computeVertexNormals();let h=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((f,p)=>h.set(f,p*3)),l.setAttribute("color",new Kt(h,3)),l.rotateY(e),l.translate(r,0,o),i.push(l)}return Ss(i)})(),Es=new Pn(Nf,MS(new ye({gradientMap:Ie,color:16777215,vertexColors:!0,side:me})),1400),bS=(()=>{let i=[],t=new Le(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new Kt(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,o])=>{let a=new pe(1,9,5).toNonIndexed();a.scale(o,o*.28,o),a.translate(n,s,r);let l=a.attributes.position,c=new Float32Array(l.count*3);for(let h=0;h<l.count;h++){let u=.62+.4*Fe((l.getY(h)-s)/(o*.28)*.5+.5);c[h*3]=u*.9,c[h*3+1]=u,c[h*3+2]=u*.92}a.setAttribute("color",new Kt(c,3)),a.deleteAttribute("uv"),i.push(a)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),Ss(i)})(),fl=new Pn(bS,new ye({gradientMap:Ie,color:16777215,vertexColors:!0}),400);[Es,fl].forEach(i=>{i.frustumCulled=!1,At.add(i)});var rg=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],$h=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],Qe=new Me,bn=new fn,Sn=new N,un=new N,Ts=new N(0,1,0),og=new pt(Un.gnd),ag=Un.pine,lg=Un.blos,cg=zi.blos,hg=zi.bblos,Ho=new Pn(new Mn(1,1).scale(1,.72,1).translate(0,.45,0),new ye({gradientMap:Ie,color:16777215,map:Ye("leaf")}),1700);Ho.frustumCulled=!1;At.add(Ho);var ug=["#6fa383","#7fb592","#5f957a","#8cc09a"],Z2=Un.bblos,SS=(()=>{let i=new Le(.11,.15,1,5,8,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=Math.round(s*8)%3===0?.68:1;e[n*3]=r,e[n*3+1]=r,e[n*3+2]=r*.95}return i.setAttribute("color",new Kt(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),pl=new Pn(SS,new ye({gradientMap:Ie,color:16777215,vertexColors:!0}),2e3),ml=new Pn(new Mn(1,0).scale(1,.5,1),new ye({gradientMap:Ie,color:16777215}),2e3);[pl,ml].forEach(i=>{i.frustumCulled=!1,At.add(i)});var dg=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],fg=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],Uf=Un.brd,pg=new pt("#9ccf8a");var gl={a:1e9,b:1e9},Kh=new Float32Array(Jn*$n*3),jh=new Float32Array(Jn*$n*3),mg=new Map;function Bf(i){let t=mg.get(i);if(!t){let e=i.instanceMatrix.array.length;t={m:new Float32Array(e),c:new Float32Array(e/16*3)},mg.set(i,t)}return t}var Ai=(i,t,e)=>{e.toArray(Bf(i).m,t*16)},os=(i,t,e)=>{let n=Bf(i);n.hc=1;let s=n.c;s[t*3]=e.r,s[t*3+1]=e.g,s[t*3+2]=e.b};function ES(i,t){let e=Bf(i);i.instanceMatrix.array.set(e.m.subarray(0,t*16)),i.instanceMatrix.needsUpdate=!0,e.hc&&(i.instanceColor||i.setColorAt(0,$e),i.instanceColor.array.set(e.c.subarray(0,t*3)),i.instanceColor.needsUpdate=!0),i.count=t}function*TS(i,t){let e=[],n=i-Jn/2*ss,s=t-60,r=0,o=0,a=0,l=0,c=0,h=0,u=0,f=0;for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn,m=Fo(d),y=Sr(d),b=Bo(d);for(let _=0;_<Jn;_++){let S=n+_*ss,M=Zn(S,d),w=(x*Jn+_)*3;Kh[w]=S,Kh[w+1]=M,Kh[w+2]=-d;let v=Math.abs(S-ie(d))-be(d),T=rn(S*.05,d*.05),R=(tt(_+n,x)-.5)*.05;if(v<0)$e.copy(K0);else{if($e.copy(Y0).lerp(Z0,T),$e.lerp(X0,1-Be(.5,3.5,v)),$e.lerp(J0,Be(6,13,M)*.8),$e.lerp($0,Be(13,24,M)),m>0&&$e.lerp(pg,m*Be(0,5,v)*.65),Un.gk&&$e.lerp(og,Un.gk*Be(.4,3,v)*(1-m*.6)),y>.05){let P=rn(S*.11+3,d*.11+7);P>.5&&$e.lerp(tg,y*Be(.5,.8,P)*.42*Be(.4,3,v))}{let P=H0(S,d);P>0&&$e.lerp(eg,P*.9)}{let P=rn(S*.03+50,d*.03+20),I=Be(.5,.72,P)*Be(.4,2.5,v)*(1-Be(9,26,v));I>0&&$e.lerp(rn(S*.2,d*.2)>.5?j0:Q0,I*.85)}}if(jh[w]=$e.r+R,jh[w+1]=$e.g+R,jh[w+2]=$e.b+R,v>5&&M<17&&o<ll&&!Ef(d,v)&&!Sf(S,d)){let P=tt(S*3.1,d*1.7),I=.05*(.5+rn(S*.03+9,d*.03))*(v<34?.75:1)+(v<36?(.05+.09*b)*(1-v/44):0)*(.6+.8*rn(S*.07,d*.07))+(v<60?y*.11*(1-v/70):0);if(P<I*(1-m*.92)){let D=(tt(S,d)-.5)*ss*.9,C=(tt(d,S)-.5)*Kn*.9,U=.8+tt(S+4,d+1)*.9;Sn.set(S+D,Zn(S+D,d+C)-.1,-(d+C)),bn.setFromAxisAngle(Ts,tt(d,S)*6.28);let G=tt(S*.7,d*.3);v<60&&G<.04+y*.95?(un.set(U,U,U),Qe.compose(Sn,bn,un),Ai(Tr,a,Qe),Ai(hl,a,Qe),os(Tr,a,$e.set((G<y*.95?cg:lg)[tt(S,d+3)*4|0])),a++):tt(S*1.1,d*1.7)<.3?(un.set(U*1.05,U*(.9+tt(d,5)*.5),U*1.05),Qe.compose(Sn,bn,un),Ai(Tr,a,Qe),Ai(hl,a,Qe),os(Tr,a,$e.set(Uf[tt(S,d+7)*Uf.length|0])),a++):tt(S*1.9,d*.8)>.55&&c<400?(un.set(U*1.2,U*1.2,U*1.2),Qe.compose(Sn,bn,un),Ai(fl,c,Qe),os(fl,c,$e.set(rg[tt(S+5,d)*4|0])),c++):(un.set(U,U*(.9+tt(d,3)*1.1),U),Qe.compose(Sn,bn,un),Ai(cl,l,Qe),os(cl,l,$e.set(ag[tt(S+2,d)*4|0])),l++),o++}}}}for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn,m=Sr(d),y=Fo(d);for(let b=0;b<Jn;b+=1){let _=n+b*ss,S=Math.abs(_-ie(d))-be(d);if(S<2.2||S>55||u>=1700||Ef(d,S)||Sf(_,d)||Zn(_,d)>15||tt(_*2.3+1,d*1.3)>(.05+m*.2)*(1-y*.8))continue;let v=(tt(_,d+9)-.5)*ss,T=(tt(d,_+9)-.5)*Kn,R=.7+tt(_+8,d)*.9+m*.3;Sn.set(_+v,Zn(_+v,d+T)-.1,-(d+T)),bn.setFromAxisAngle(Ts,tt(d,_)*6.28),un.set(R*1.2,R,R*1.1),Qe.compose(Sn,bn,un),Ai(Ho,u,Qe),os(Ho,u,$e.set(m>.25&&tt(_,d+5)<.55?hg[tt(_,d)*4|0]:ug[tt(d,_+2)*4|0])),u++}}for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn,m=Fo(d);if(!(m<.02))for(let y=0;y<Jn;y++){let b=n+y*ss,_=ie(d),S=Math.abs(b-_)-be(d);if(!(S<.3||S>26||f>=1990))for(let M=0;M<2;M++){if(tt(b*3.7+M*5,d*2.9+M)>m*(1.05-S*.012))continue;let w=(tt(b+M,d+3)-.5)*ss,v=(tt(d+M,b+3)-.5)*Kn,T=b+w,R=d+v,P=11+tt(T,R)*12,I=.8+tt(R,T)*.6,D=.05+tt(T*2,R)*.14,C=T>_?1:-1,U=Zn(T,R)-.3;Sn.set(T,U,-R),bn.setFromAxisAngle(new N(0,0,1),C*D),un.set(I,P,I),Qe.compose(Sn,bn,un),Ai(pl,f,Qe),os(pl,f,$e.set(dg[tt(T,R+1)*4|0]));let G=T-C*Math.sin(D)*P,O=U+Math.cos(D)*P;Sn.set(G,O,-R),bn.identity();let $=1.5+tt(R,T+4)*1.6;un.set($,$,$),Qe.compose(Sn,bn,un),Ai(ml,f,Qe),os(ml,f,$e.set(fg[tt(T+2,R)*4|0])),f++}}}e.push([pl,f],[ml,f]),e.push([Ho,u]);for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn;for(let m=0;m<4;m++){let y=m%2?1:-1;if(tt(d*.53,m+3)>.62||h>=1400)continue;let b=m>1&&tt(d,m+9)>.6,_=be(d)+y*0+(b?-(1.5+tt(d,m+1)*4):-.3+tt(d,m+2)*3.4),S=ie(d)+y*_,M=-(d+(tt(d,m)-.5)*Kn);if(b&&Math.abs(S-ie(d))>be(d)-1.5)continue;let w=.7+tt(d+m,7)*.9;Sn.set(S,Math.max(-.2,Zn(S,d)-.15),M),bn.setFromAxisAngle(Ts,tt(d,m+5)*6.28),un.set(w,w*(.8+tt(d,m+6)*.7),w),Qe.compose(Sn,bn,un),Ai(Es,h,Qe),os(Es,h,$e.set($h[tt(d,m+4)*4|0])),h++}}e.push([Es,h],[fl,c]),e.push([cl,l],[Tr,a],[hl,a]);let p=0,g=0;for(let x=0;x<$n;x++){x%5===0&&(yield);let d=s+x*Kn;for(let m=0;m<3;m++){if(tt(d*.37,m+7)>.5||p>=500)continue;let y=(tt(d+m,5)*2-1)*(be(d)-2.2),b=ie(d)+y;Sn.set(b,.03,-(d+(tt(d,m)-.5)*Kn)),bn.setFromAxisAngle(Ts,tt(d,m+2)*6.28);let _=.7+tt(d+m,9)*.9;un.set(_,1,_),Qe.compose(Sn,bn,un),Ai(ul,p,Qe),os(ul,p,$e.set(tt(d,m)>.5?"#a8dba9":"#96cfa0")),p++,tt(d,m+11)>.72&&g<160&&(Qe.compose(Sn.setY(.05),bn,un.set(1,1,1)),Ai(dl,g,Qe),os(dl,g,$e.set(tt(d,m+1)>.4?"#f7b9cf":"#fbe39a")),g++)}}e.push([ul,p],[dl,g]);for(let[x,d]of e)ES(x,d);If.set(Kh),Lf.set(jh),js.attributes.position.needsUpdate=!0,js.attributes.color.needsUpdate=!0,js.computeVertexNormals()}var wr=null,gg=0,Ff=!1;function xg(i,t,e){let n=Math.floor(-t/(Kn*al))*Kn*al,s=Math.round(i/(ss*al))*ss*al;if(!wr&&(n!==gl.b||s!==gl.a)){let r=!Ff||Math.abs(n-gl.b)>150||Math.abs(s-gl.a)>150;if(gl={a:s,b:n},wr=TS(s,n),gg=n,r){for(;!wr.next().done;);e(n),wr=null,Ff=!0}}if(wr){let r=performance.now(),o;do o=wr.next();while(!o.done&&performance.now()-r<3);o.done&&(e(gg),wr=null,Ff=!0)}}var Hf=140,yg=[],zf=new ue,Qh=new Float32Array(Hf*3);for(let i=0;i<Hf;i++)yg.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);zf.setAttribute("position",new Kt(Qh,3));var Of=new hi({color:16773792,size:.35,map:jn,transparent:!0,opacity:0,blending:kn,depthWrite:!1}),tu=new bi(zf,Of);tu.frustumCulled=!1;At.add(tu);function _g(i){if(Of.opacity=Fe(i*1.3-.2,0,.9),tu.visible=Of.opacity>.01,tu.visible){for(let t=0;t<Hf;t++){let e=yg[t],n=F.t*.4+e[3],s=Math.sin(F.psi),r=-Math.cos(F.psi);Qh[t*3]=F.px+e[0]+Math.sin(n*2.1+t)*1.5,Qh[t*3+1]=e[1]+Math.sin(n*3+t)*.4,Qh[t*3+2]=F.pz+e[2]+Math.cos(n*1.7+t)*1.5}zf.attributes.position.needsUpdate=!0}}var Qn=qt,Ge=new Qt;At.add(Ge);var ws=new ks;ws.moveTo(0,3.4);ws.quadraticCurveTo(.5,2.4,.7,1);ws.lineTo(.7,-1.3);ws.lineTo(-.7,-1.3);ws.lineTo(-.7,1);ws.quadraticCurveTo(-.5,2.4,0,3.4);var kf=new K(new Eo(ws,{depth:.24,bevelEnabled:!1}),new ye({gradientMap:Ie,color:14722684,emissive:4204570,map:Ye("wood")}));kf.rotation.x=-Math.PI/2;kf.position.y=-.04;Ge.add(kf);var xl=new K(new Ba(ws),new ye({gradientMap:Ie,color:11568232,emissive:2759186,map:Ye("plank")}));xl.geometry.scale(.8,.86,1);xl.geometry.translate(0,.2,0);xl.rotation.x=-Math.PI/2;xl.position.y=.21;Ge.add(xl);{let i=Qn(9068357,{map:Ye("wood")}),t=Qn(13146740,{map:Ye("plank")}),e=ws,n=new ks(e.getPoints(24)),s=new pr(n.getPoints(24).map(u=>new ut(u.x*.86,u.y*.9+.1)).reverse());n.holes.push(s);let r=new Eo(n,{depth:.07,bevelEnabled:!1}),o=new K(r,i);o.rotation.x=-Math.PI/2,o.position.y=.2,Ge.add(o);for(let u=0;u<6;u++){let f=-2.3+u*.72,p=u<2?1-u*.1:1.28,g=new K(new In(p,.07,.08),i);g.position.set(0,.23,f),Ge.add(g)}let a=new K(new In(1.35,.07,.34),t);a.position.set(0,.5,.55),Ge.add(a);let l=new K(new _s(.2,.045,6,14),Qn(14271378));l.rotation.x=Math.PI/2,l.position.set(.25,.27,-1.7),Ge.add(l);let c=l.clone();c.scale.setScalar(.8),c.position.set(.25,.32,-1.7),Ge.add(c);let h=new K(new pe(.13,8,6),i);h.position.set(0,.22,-3.35),Ge.add(h)}var Mg=[];{let i=Qn(9075550,{map:Ye("cloth")}),t=Qn(11045468,{map:Ye("woodV")});[[-.35,.34,-1.55,.34],[-.05,.32,-1.35,.28],[-.3,.3,-1.1,.26]].forEach(([s,r,o,a])=>{let l=new K(new Mn(a,1),i);l.scale.set(1.1,.65,1),l.position.set(s,r,o),Ge.add(l),Mg.push(l)});let e=new K(new Le(.025,.035,4.6,6),t);e.position.set(-.55,.9,-2.6),e.rotation.set(1.28,0,.14),Ge.add(e);let n=new K(new Le(.006,.006,2.3,3),Qn(14209216));n.position.set(-.95,.35,-4.7),Ge.add(n)}var bg=new K(new Le(.03,.04,.9,6),new ye({gradientMap:Ie,color:8018508}));bg.position.set(0,.55,-3.05);Ge.add(bg);var yl=new K(new pe(.12,10,8),new Pe({color:16769704}));yl.position.set(0,1.05,-3.05);Ge.add(yl);var nu=ii(16762746,2.4);nu.position.copy(yl.position);Ge.add(nu);var iu=new Va(16763274,0,22,1.6);iu.position.set(0,1.5,-2.8);Ge.add(iu);function vg(){let i=new Qt,t=new ye({gradientMap:Ie,color:15716516,emissive:3811866}),e=new K(new Le(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new K(new In(.2,.03,.62),new ye({gradientMap:Ie,color:15047302}));n.position.z=1.55,i.add(n);let s=new K(new In(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new Qt;return r.add(i),Ge.add(r),r}var Sg=[vg(),vg()],wS=[new N(-.7,.5,-.3),new N(.7,.5,-.3)],AS=[new N(-1.05,.55,-.9),new N(1.05,.55,-.9)],Cr=new Qt;Ge.add(Cr);Cr.position.set(0,.42,.55);Cr.scale.setScalar(1.3);var Ri=new Qt;Ri.position.y=.3;Cr.add(Ri);var zo=new Qt;zo.position.y=1;Ri.add(zo);var Qs=new Qt;Qs.position.y=.2;zo.add(Qs);var Eg=[];{let i=Qn(9279656,{map:Ye("cloth")}),t=Qn(7305868,{map:Ye("cloth")}),e=Qn(4540762,{map:Ye("cloth")}),n=Qn(14264706),s=Qn(14727535,{map:Ye("straw"),side:me}),r=Qn(12159562,{map:Ye("straw")}),o=Qn(2959918),a=new K(new pe(.5,14,10),e);a.scale.set(1.2,.42,.85),a.position.y=-.1,Cr.add(a),[-1,1].forEach(m=>{let y=new K(new pe(.17,8,6),e);y.position.set(m*.5,-.02,-.3),Cr.add(y)});let l=new K(new Le(.3,.4,.8,12),i);l.position.y=.42,Ri.add(l);let c=new K(new _s(.35,.03,6,14),t);c.rotation.x=Math.PI/2,c.position.y=.12,Ri.add(c);let h=new K(new pe(.44,12,8),i);h.scale.set(1,.45,.7),h.position.y=.78,Ri.add(h);let u=new K(new _s(.14,.045,6,10),t);u.rotation.x=Math.PI/2,u.position.y=.9,Ri.add(u);let f=new K(new Le(.09,.1,.16,6),n);f.position.y=.95,Ri.add(f);let p=new K(new pe(.21,14,10),o);p.position.y=.2,zo.add(p);let g=new K(new Oe(.66,.36,24,1,!0),s);g.position.y=.1,Qs.add(g);let x=new K(new Oe(.1,.08,8),r);x.position.y=.22,Qs.add(x);let d=new K(new _s(.655,.018,6,28),r);d.rotation.x=Math.PI/2,d.position.y=-.075,Qs.add(d),[-1,1].forEach(m=>{let y=new K(new Le(.008,.008,.3,4),o);y.position.set(m*.18,-.12,.05),Qs.add(y)}),[-1,1].forEach(m=>{let y=new Qt;y.position.set(m*.42,.75,0),Ri.add(y);let b=new K(new Le(.095,.08,.6,8),i);b.position.y=-.3,y.add(b);let _=new K(new pe(.085,8,6),n);_.position.y=-.62,y.add(_);let S=new K(new _s(.085,.025,5,8),t);S.rotation.x=Math.PI/2,S.position.y=-.52,y.add(S),Eg.push(y)})}var Rr=new Qt;Ge.add(Rr);{let i=Qn(12159574,{map:Ye("woodV")}),t=Qn(13602164,{map:Ye("plank")}),e=new K(new Le(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,Rr.add(e);let n=new K(new In(.22,.04,.55),t);n.position.z=2,Rr.add(n);let s=new K(new In(.2,.04,.05),i);s.position.z=-.03,Rr.add(s)}var Ar=1,eu=0,Tg=new N;function wg(){let i=Math.sin(F.t*.9)*.03+Math.sin(F.t*1.7)*.012;return Ge.position.set(F.px,i*.6,F.pz),Ge.rotation.set(0,-F.psi,-F.steer*.025+Math.sin(F.t*.7)*.008),Ge.updateMatrixWorld(!0),i}function Ag(){Sg.forEach((i,t)=>{let e=t?1:-1,n=Fe(F.steer*e,0,1),s=new N().copy(AS[t]);s.lerp(new N(e*1.25,-.1,-.9+Math.sin(F.t*1.3+t)*.08),n);let r=Tg.copy(s).sub(wS[t]).normalize();i.quaternion.setFromUnitVectors(new N(0,0,1),r),i.position.copy(s).addScaledVector(r,-1.55)})}function Rg(i){{let t=lt.camK>.45||lt.cineW>.15;if(Cr.visible=t,Mg.forEach(e=>e.visible=t),Rr.visible=t,Sg.forEach(e=>e.visible=!t),t){F.steer>.2?Ar=Math.min(1,Ar+i*3):F.steer<-.2&&(Ar=Math.max(-1,Ar-i*3)),eu+=(F.steer-eu)*Math.min(1,i*2.2);let e=Math.sin(F.t*1.4);Ri.rotation.z=-F.steer*.2+Math.sin(F.t*.6)*.02,Ri.rotation.y=-F.steer*.28,Ri.rotation.x=.05+e*.012+Math.abs(F.steer)*.06,zo.rotation.y=-F.steer*.38+Math.sin(F.t*.35)*.08,zo.rotation.x=.04+Math.sin(F.t*.5)*.03,Qs.rotation.z=(F.steer-eu)*.45,Qs.rotation.x=-Math.abs(F.steer-eu)*.12;let n=Tg.set(Ar*.5,.8,.5),s=Math.abs(F.steer)>.2?1:0,o=new N(Ar*(.7+s*.55),-.2,1.35+Math.sin(F.t*1.2)*.12*(1-s)+s*.1).clone().sub(n).normalize();Rr.quaternion.setFromUnitVectors(new N(0,0,1),o),Rr.position.copy(n);let a=[n.clone().addScaledVector(o,.75),n.clone()];Ar<0&&a.reverse(),Eg.forEach((l,c)=>{let h=l.getWorldPosition(new N),u=Ge.localToWorld(a[c].clone()),f=u.sub(h),p=f.length();l.parent.worldToLocal(u.copy(h).add(f));let g=u.sub(l.position);l.quaternion.setFromUnitVectors(new N(0,-1,0),g.clone().normalize()),l.scale.y=Fe(g.length()/.66,.7,1.5)})}}}var su=[];for(let i=0;i<28;i++){let t=new K(new gr(.35,.42,28).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,At.add(t),su.push(t)}var RS=0,si=(i,t)=>{let e=su[RS++%su.length];e.position.set(i,.04,t),e.userData.age=0};function Cg(i){su.forEach(t=>{if(t.userData.age<4){t.userData.age+=i;let e=t.userData.age/4;t.scale.setScalar(1+e*6),t.material.opacity=.35*(1-e)}else t.material.opacity=0})}var tr={steer:0,pitch:0};Ms.addEventListener("pointerdown",i=>{!lt.started||lt.X.photo||(z0(),Ms.setPointerCapture(i.pointerId),F.hold=!0,Ig(i),ae.resume())});Ms.addEventListener("pointermove",i=>{F.hold&&!lt.X.photo&&Ig(i)});var Pg=()=>{F.hold=!1,tr.steer=0,tr.pitch=0};Ms.addEventListener("pointerup",Pg);Ms.addEventListener("pointercancel",Pg);function Ig(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;tr.steer=Math.abs(t)<.1?0:Fe((t-Math.sign(t)*.1)*1.4,-1,1),tr.pitch=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!1)});var ki=["Puente de madera","Torii sobre el agua","Aldea de farolillos","Jard\xEDn de sakura","Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos","Castillo de la Garza Blanca"],gi=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>gi.add(i))}catch{}function Lg(){try{localStorage.setItem("rio3d-found",JSON.stringify([...gi]))}catch{}}var Pr=[],ri=new Map,Dg=new Set,as=[],Gf=new Set;function oi(i){let t=We("toast");t.textContent=i,t.style.opacity=1,clearTimeout(oi.h),oi.h=setTimeout(()=>t.style.opacity=0,4200)}var CS=ki.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,We("chips").appendChild(t),t});function ru(i){We("places").textContent=gi.size+"/"+ki.length,CS.forEach((e,n)=>e.classList.toggle("on",gi.has(n)));let t=Math.max(0,Math.floor((i-240)/Ti)-1);for(;je(t)<i+1;)t++;We("next").textContent="Siguiente: "+ki[Je(t)]+" en "+Math.max(0,Math.round((je(t)-i)/10)*10)+" m"}We("snd").onclick=()=>{ae.on=!ae.on,ae.ctx&&ae.setOn(ae.on),We("snd").textContent="Sonido: "+(ae.on?"s\xED":"no")};try{lt.savedS=+localStorage.getItem("rio3d-pos")||0}catch{}function _l(){try{lt.started&&F.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(F.dist)))}catch{}}setInterval(_l,2500);addEventListener("pagehide",_l);document.addEventListener("visibilitychange",_l);lt.savedS>150&&(We("go").textContent="Continuar ("+lt.savedS+" m)",We("go2").hidden=!1,We("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}lt.savedS=0,We("go").onclick()});We("go").onclick=()=>{lt.savedS>150&&Yh(lt.savedS);try{ae.init(),ae.resume()}catch{}We("start").hidden=!0,We("hud").hidden=!1,We("places-row").hidden=!1,ru(0),We("hint").hidden=!1,lt.started=!0,setTimeout(()=>{try{localStorage.getItem("rio3d-ob")==="1"&&(We("hint").style.opacity=0)}catch{We("hint").style.opacity=0}},9e3)};var Vf=0;function Ng(i,t){if(Vf-=i,Vf<=0){Vf=.4,ru(F.dist||t);{let e=F.dist||t,n=Math.round((e-240)/Ti),s=-1;for(let r of[n-1,n,n+1])r>=0&&Math.abs(je(r)-e)<280&&(s=Je(r));ae.setMood(Math.sin(Math.PI*2*(lt.tod-.12)),s,Ks())}We("m").textContent=Math.round(F.dist/1),We("tod").textContent=Jh(lt.tod)}}var qf=46,Ir=new Map,Wf=[],ou=new Set;try{JSON.parse(localStorage.getItem("rio3d-coll")||"[]").forEach(i=>ou.add(i))}catch{}try{lt.count=+localStorage.getItem("rio3d-lant")||0}catch{}var au=i=>{let t=70+i*qf+tt(i,1)*20,e=(tt(i,2)*2-1)*.6*be(t);return[ie(t)+e,-t]};function Xf(){let i=new Qt,t=new K(new Le(.3,.3,.55,10),new Pe({color:16767392}));t.position.y=.38;let e=new K(new Le(.34,.34,.06,10),new Pe({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=ii(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new K(new an(1,1).rotateX(-Math.PI/2),new Pe({map:jn,color:16762746,transparent:!0,opacity:.4,blending:kn,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function Ug(i,t){let e=Math.max(0,Math.floor((t-120)/qf)),n=Math.floor((t+320)/qf);for(let[s,r]of Ir)(s<e||s>n)&&(At.remove(r),Wf.push(r),Ir.delete(s));for(let s=e;s<=n;s++){if(ou.has(s)||Ir.has(s))continue;let r=Wf.pop()||Xf();r.userData.fade=1,r.scale.setScalar(1),At.add(r),Ir.set(s,r)}for(let[s,r]of Ir){let[o,a]=au(s);r.position.set(o,Math.sin(i*1.1+s)*.04,a),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*lt.glowK)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*lt.glowK)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(At.remove(r),Ir.delete(s),Wf.push(r),r.userData.collecting=!1))}}function Fg(){for(let[i,t]of Ir){if(t.userData.collecting)continue;let[e,n]=au(i),s=e-F.px,r=n-F.pz;if(s*s+r*r<17){ou.add(i),lt.count++;try{localStorage.setItem("rio3d-lant",String(lt.count)),localStorage.setItem("rio3d-coll",JSON.stringify([...ou]))}catch{}t.userData.collecting=!0;let o=Math.atan2(s,-r)-F.psi;ae.lantern(Math.sin(o)),si(e,n),We("n").textContent=lt.count,lt.count===1&&oi("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}}var vl=16,Bg=[];for(let i=0;i<vl;i++){let t=new ys(new ts({map:jn,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,At.add(t),Bg.push(t)}var Yf=800,Zf=new ue,Og=new Float32Array(Yf*6),Hg=[];for(let i=0;i<Yf;i++)Hg.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);Zf.setAttribute("position",new Kt(Og,3));var zg=new vo({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),Ml=new Aa(Zf,zg);Ml.frustumCulled=!1;Ml.visible=!1;At.add(Ml);var cn={rain:0,target:0,t:50,on:!1},PS=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),o=[];for(let c=0;c<=220;c++){let h=c/220*Math.PI*2,u=Math.cos(h),f=Math.sin(h),p=rn(u*2.2+n,f*2.2+n),g=rn(u*8+n*2,f*8+n),x=Math.pow(Math.max(0,g-.5)/.5,1.4),d=t*(.3+.55*Math.pow(p,1.5)+.9*x);if(r.set([u*i,-40,f*i,u*i,d,f*i],c*6),c<220){let m=c*2;o.push(m,m+1,m+2,m+1,m+3,m+2)}}let a=new ue;a.setAttribute("position",new Kt(r,3)),a.setIndex(o);let l=new K(a,new sn({side:me,fog:!1,depthWrite:!1,uniforms:{col:{value:new pt},hor:{value:new pt},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));return l.renderOrder=-8,l.frustumCulled=!1,l.userData.t=e,At.add(l),l}),ko=new pt,lu=new pt;function kg(i,t){lt.started&&(cn.t-=i,cn.t<=0&&(cn.target=cn.target?0:1,cn.t=cn.target?60+Math.random()*40:100+Math.random()*70,cn.target&&oi("Empieza una llovizna suave"))),cn.rain+=(cn.target-cn.rain)*Math.min(1,i*.25);let e=cn.rain>.15;e!==cn.on&&(cn.on=e,ae.rain(e));let n=1-Be(.08,.3,lt.tod),s=Fe(Math.max(Xh(t)*.95,cn.rain*.4,n*.4,.2));cn.fog=s,At.fog.near=Mr(22,5,s),At.fog.far=Mr(250,85,s),ko.set(15131886).multiplyScalar(1-Se.night*.7),At.fog.color.copy(Se.fog).lerp(ko,s*.55);let r=mi.material.uniforms;r.fogN.value=At.fog.near,r.fogF.value=At.fog.far,r.fog.value.copy(At.fog.color),wi.material.uniforms.hor.value.lerp(At.fog.color,s*.8),wi.material.uniforms.top.value.lerp(At.fog.color,s*.35),Er.intensity*=1-.22*cn.rain,bs.intensity*=1-.45*cn.rain,PS.forEach(a=>{a.position.set(F.px,0,F.pz);let l=a.userData.t;ko.copy(Se.hor),lu.copy(Se.top).multiplyScalar(.55).lerp(ko.set(8095400).multiplyScalar(1-Se.night*.75),.45),a.material.uniforms.col.value.copy(Se.hor).lerp(lu,1-l).lerp(At.fog.color,s*.75),a.material.uniforms.hor.value.copy(wi.material.uniforms.hor.value)});let o=Math.floor(t/25)-2;for(let a=0;a<vl;a++){let l=o+a,c=Bg[(l%vl+vl)%vl],h=l*25,u=ie(h)+(tt(l,3)-.5)*be(h)*1.5;c.position.set(u+Math.sin(F.t*.05+l)*3,1.2+tt(l,4)*2.2,-h);let f=c.position.x-F.px,p=c.position.z-F.pz,g=Math.hypot(f,p);c.material.opacity=s*.5*Be(6,22,g)*(1-Be(300,380,g))*(.7+.3*tt(l,5)),c.material.color.copy(At.fog.color).multiplyScalar(1.05)}if(Ml.visible=cn.rain>.03,zg.opacity=.42*cn.rain,Ml.visible){for(let a=0;a<Yf;a++){let l=Hg[a];l[1]-=16*i,l[1]<0&&(l[1]=13+Math.random()*2,l[0]=Math.random()*40-20,l[2]=Math.random()*40-24);let c=F.px+l[0],h=F.pz+l[2];Og.set([c,l[1],h,c-.05,l[1]+.65,h],a*6)}Zf.attributes.position.needsUpdate=!0,Math.random()<i*9*cn.rain&&si(F.px+(Math.random()-.5)*28,F.pz-Math.random()*22+4)}}var Jf=0;function Gg(i,t){if(lt.started){let e=F.hold||F.key.up,n=Fe(tr.steer+(F.key.r?1:0)-(F.key.l?1:0),-1,1),s=lt.X.photo?0:2.6*(1-.85*lt.cineW);F.v+=(s-F.v)*.5*i;let r=xn(t),o=n*(.55+Math.min(F.v,6)/6*.45);F.psi+=o*i,Math.abs(n)<.1&&(F.psi+=(r-F.psi)*.32*i),F.psi=Fe(F.psi,r-1.35,r+1.35),window.__lock!=null&&(F.psi=window.__lock),F.steer+=(n-F.steer)*3*i,F.px+=Math.sin(F.psi)*F.v*i+Math.sin(r)*1.1*i,F.pz+=-Math.cos(F.psi)*F.v*i-Math.cos(r)*1.1*i;let a=-F.pz,l=ie(a),c=be(a)-1.7,h=F.px-l;if(Math.abs(h)>c&&(F.px=l+Math.sign(h)*c,F.v>1.2&&F.t-F.bumpT>1.2&&(ae.bump(),F.bumpT=F.t),F.v*=.6,F.psi+=(xn(a)-F.psi)*.4),F.dist=Math.max(F.dist,a),Jf-=i,Math.abs(n)>.25&&Jf<=0){Jf=.7;let u=n>0?1:-1,f=new N(u*1.2,0,.3);Ge.localToWorld(f),si(f.x,f.z)}}}var Xt=(i,t,e,n,s,r,o,a,l)=>{let c=new K(new In(t,e,n),qt(s,l));return c.position.set(r,o,a),i.add(c),c},Ve=(i,t,e,n,s,r,o,a,l=7,c)=>{let h=new K(new Le(t,e,n,l),qt(s,c));return h.position.set(r,o,a),i.add(h),h},we=(i,t,e,n,s,r,o=.7)=>{let a=ii(t,e);return a.position.set(n,s,r),a.userData.base=o,i.add(a),Pr.push(a),a},$f=new Map;function jf(i,t,e,n=64,s=256){let r=i+t+n;if($f.has(r))return $f.get(r);let o=document.createElement("canvas");o.width=n,o.height=s;let a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.fillRect(0,0,n,5),a.fillRect(0,s-5,n,5);let l=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);a.font="bold "+l+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',a.textAlign="center",a.textBaseline="middle";let c=[...i].length;[...i].forEach((u,f)=>a.fillText(u,n/2,s/(c*2)+f*s/c));let h=new Fi(o);return h.colorSpace=Ln,$f.set(r,h),h}function Vg(i,t,e,n,s,r){let o=t(e,n),a=new Qt;a.position.set(e,o,n),i.add(a),Ve(a,.07,.09,6.4,4864562,0,3.2,0,5),Xt(a,1.3,.09,.09,4864562,.62,6,0);let l=new K(new an(1.15,4.4),new ye({gradientMap:Ie,map:jf(s,r,"#f6efe0"),side:me}));return l.userData.noMerge=!0,l.position.set(.62,3.75,0),a.add(l),a.userData.sw=1,as.push({b:l,ph:e}),a}function Go(i,t,e,n,s=1){let r=new Qt;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let o=11052706;Ve(r,.5,.62,.3,o,0,.15,0,8),Ve(r,.17,.2,1.3,o,0,.95,0,6),Ve(r,.45,.3,.2,o,0,1.7,0,8),Xt(r,.62,.55,.62,o,0,2.05,0),Xt(r,.34,.34,.66,16767392,0,2.05,0).material=new Pe({color:16767392}),Xt(r,.66,.34,.34,16767392,0,2.05,0).material=new Pe({color:16767392});let a=new K(new Oe(.62,.5,4),qt(o));a.rotation.y=Math.PI/4,a.position.y=2.6,r.add(a);let l=new K(new pe(.11,6,5),qt(o));return l.position.y=2.92,r.add(l),we(r,16762746,2.6,0,2.05,0,.8),r}function IS(i,t,e,n){for(let o of[-1,1])Ve(i,.22,.3,10,6965818,o*(e+1.6),t(o*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=Ve(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let o=0;o<12;o++){let a=(o+.5)/12,l=-s/2+a*s,c=new K(new an(.42,1),new ye({gradientMap:Ie,color:16777215,side:me}));c.position.set(l,7.9,n),c.rotation.set(0,0,o%2?.18:-.18),i.add(c)}for(let o of[-1,1]){let a=new K(new Oe(.3,1,6),qt(15128736));a.position.set(o*(e*.5),7.8,n),a.rotation.x=Math.PI,i.add(a)}}function Lr(i,t,e,n,s,r){for(let o of[-1,1])Vg(i,t,o*(e+1.6),54,n,r),Vg(i,t,o*(e+3.6),49,n,r),Go(i,t,o*(e+2.8),42);s&&IS(i,t,e,37)}function hu(i,t,e,n,s,r=1){let o=new K(new Oe(t,e,4),qt(s));o.rotation.y=Math.PI/4,o.position.y=n,o.scale.z=r,i.add(o);let a=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([l,c])=>{let h=new K(new Oe(.32,1.3,5),qt(s));h.position.set(l*a,n-e/2+.55,c*a*r),h.rotation.set(c*.7,0,-l*.7),i.add(h)})}function Wg(i,t,e,n){let s=new Qt;s.position.set(t,e,n),i.add(s),Xt(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let o=0;o<4;o++){let a=4.3-o*.75;Xt(s,a,2.3,a,o%2?15853267:15326664,0,r+1.15,0),Xt(s,a+.12,.18,a+.12,11880250,0,r+.1,0);for(let[l,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])Ve(s,.1,.1,2.3,11880250,l*a/2,r+1.15,c*a/2,6);hu(s,(a/2+.95)/.707,1.5,r+2.9,5591134),r+=3.1}Ve(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let o=0;o<6;o++)Ve(s,.55-o*.07,.55-o*.07,.12,14264410,0,r+.2+o*.62,0,8);return we(s,16762746,5,0,3,3.4,.7),s}function qg(i,t,e,n,s,r){let o=new Qt;return o.position.set(t,e,n),o.scale.setScalar(s),i.add(o),[-2.2,2.2].forEach(a=>Ve(o,.3,.36,6,r,a,3,0,8)),Xt(o,6.8,.4,.55,2894382,0,6.4,0),Xt(o,5.6,.35,.4,r,0,5.4,0),Xt(o,.5,.9,.4,r,0,5.85,0),o}function uu(i,t){let e=new Qt,n=16184302,s=15328474,r=new K(new pe(.5,10,8),qt(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let o=new K(new Oe(.2,.7,5),qt(s));o.rotation.x=-Math.PI/2-.3,o.position.set(0,1.35,-.85),e.add(o),Ve(e,.045,.045,1.1,4012598,-.12,.55,.05,4),Ve(e,.045,.045,1.1,4012598,.12,.55,.05,4);let a=new Qt;a.userData.noMerge=!0,a.position.set(0,1.6,.55),e.add(a);let l=Ve(a,.07,.09,1,n,0,.45,.05,5);l.rotation.x=-.35;let c=Ve(a,.06,.07,.7,n,0,1.05,.3,5);c.rotation.x=.45;let h=new K(new pe(.14,8,6),qt(n));h.position.set(0,1.4,.55),a.add(h);let u=new K(new Oe(.05,.5,4),qt(14918218));return u.rotation.x=Math.PI/2,u.position.set(0,1.38,.9),a.add(u),e.scale.setScalar(i),as.push({nk:a,ph:t}),e}var er=new sn({transparent:!0,depthWrite:!1,side:me,uniforms:{t:{value:0},fogCol:{value:new pt(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`}),du=new sn({transparent:!0,depthWrite:!1,blending:kn,uniforms:{map:{value:jn},k:{value:1}},vertexShader:"attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`}),Kf=new Me,cu=new N;function fu(i){i.updateMatrixWorld(!0),Kf.copy(i.matrixWorld).invert();let t=new Map,e=[],n=[];i.traverse(s=>{if(s.isSprite&&s.userData.base!=null){e.push(s);return}if(!s.isMesh||s.isInstancedMesh||s.material.isShaderMaterial||!s.material.isMaterial)return;for(let c=s;c&&c!==i;c=c.parent)if(c.userData.noMerge)return;let r=s.material,o=[r.type,r.color.getHex(),r.emissive?r.emissive.getHex():0,r.side,r.map?r.map.uuid:0,r.transparent,r.opacity,r.depthWrite].join("|"),a=s.geometry;a=a.index?a.toNonIndexed():a.clone();for(let c of Object.keys(a.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&a.deleteAttribute(c);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new Kt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(Kf.clone().multiply(s.matrixWorld));let l=t.get(o);l||(l={mat:r,geos:[]},t.set(o,l)),l.geos.push(a),n.push(s)});for(let s of n)s.parent&&s.parent.remove(s),s.geometry.dispose(),s.material.dispose&&![...t.values()].some(r=>r.mat===s.material)&&s.material.dispose();for(let s of t.values()){let r=Ss(s.geos);if(s.geos.forEach(a=>a.dispose()),!r)continue;let o=new K(r,s.mat);i.add(o)}if(e.length){let s=e.length,r=new an(1,1),o=new qa;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=new Float32Array(s*3),l=new Float32Array(s),c=new Float32Array(s*3),h=new Float32Array(s);e.forEach((f,p)=>{cu.setFromMatrixPosition(f.matrixWorld).applyMatrix4(Kf),a.set([cu.x,cu.y,cu.z],p*3),l[p]=f.scale.x,c.set([f.material.color.r,f.material.color.g,f.material.color.b],p*3),h[p]=f.userData.base,f.parent&&f.parent.remove(f),f.material.dispose()}),o.setAttribute("iC",new Ui(a,3)),o.setAttribute("iS",new Ui(l,1)),o.setAttribute("iCol",new Ui(c,3)),o.setAttribute("iB",new Ui(h,1)),o.instanceCount=s;let u=new K(o,du);u.frustumCulled=!1,u.renderOrder=4,i.add(u)}return i}function Qf(i){let t=new Set([du,er,Es.material]);i.traverse(e=>{if(e.isInstancedMesh&&e.userData.keep){e.dispose();return}e.geometry&&e.geometry.dispose(),(e.material?Array.isArray(e.material)?e.material:[e.material]:[]).forEach(s=>{t.has(s)||s.dispose()})});for(let e=as.length-1;e>=0;e--){let n=as[e],r=n.b||n.nk;for(;r&&r!==i;)r=r.parent;r===i&&as.splice(e,1)}for(let e=Pr.length-1;e>=0;e--){let n=Pr[e];for(;n&&n!==i;)n=n.parent;n===i&&Pr.splice(e,1)}}var pu=new pt,Xg=new Map,Yg=new Me,Zg=new fn,Jg=new Ni,$g=new N,Kg=new N(1,1,1),Dr=i=>{if(Array.isArray(i))return i;let t=Xg.get(i);return t||(pu.set(i),t=[pu.r,pu.g,pu.b],Xg.set(i,t)),t},Rn=(i,t)=>{let e=Dr(i);return[Math.min(1.4,e[0]*t),Math.min(1.4,e[1]*t),Math.min(1.4,e[2]*t)]},jg=new Map;function LS(i){let t=jg.get(i);return t||(t=new Mn(1,i),t=t.index?t.toNonIndexed():t,jg.set(i,t)),t}var xi=class{constructor(){this.P=new Float32Array(1<<17),this.C=new Float32Array(1<<17),this.n=0,this.m=new Me,this.st=[],this.ref=null}_grow(){let t=new Float32Array(this.P.length*2),e=new Float32Array(this.C.length*2);t.set(this.P),e.set(this.C),this.P=t,this.C=e}save(){return this.st.push(this.m.clone()),this}restore(){return this.m=this.st.pop(),this}T(t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return Jg.set(r,s,o,"YXZ"),Zg.setFromEuler(Jg),$g.set(t,e,n),Kg.set(a,l,c),Yg.compose($g,Zg,Kg),this.m.multiply(Yg),this}at(t,e,n,s,r,o,a,l){return this.save(),this.T(t,e,n,s||0,o||0,a||0,l||1),r(this),this.restore(),this}tri(t,e,n,s){s=Dr(s);let r=this.m.elements,o=r[0],a=r[1],l=r[2],c=r[4],h=r[5],u=r[6],f=r[8],p=r[9],g=r[10],x=r[12],d=r[13],m=r[14],y=t[0],b=t[1],_=t[2],S=e[0],M=e[1],w=e[2],v=n[0],T=n[1],R=n[2],P=o*y+c*b+f*_+x,I=a*y+h*b+p*_+d,D=l*y+u*b+g*_+m,C=o*S+c*M+f*w+x,U=a*S+h*M+p*w+d,G=l*S+u*M+g*w+m,O=o*v+c*T+f*R+x,$=a*v+h*T+p*R+d,H=l*v+u*T+g*R+m;if(this.ref){let Yt=this.ref,nt=o*Yt[0]+c*Yt[1]+f*Yt[2]+x,ot=a*Yt[0]+h*Yt[1]+p*Yt[2]+d,bt=l*Yt[0]+u*Yt[1]+g*Yt[2]+m,Ot=C-P,Rt=U-I,Jt=G-D,De=O-P,rt=$-I,ht=H-D,ft=Rt*ht-Jt*rt,dt=Jt*De-Ot*ht,xt=Ot*rt-Rt*De;if(ft*((P+C+O)/3-nt)+dt*((I+U+$)/3-ot)+xt*((D+G+H)/3-bt)<0){let Nt=C;C=O,O=Nt,Nt=U,U=$,$=Nt,Nt=G,G=H,H=Nt}}this.n+9>this.P.length&&this._grow();let q=this.P,J=this.C,mt=this.n,wt=s[0],le=s[1],se=s[2];return q[mt]=P,q[mt+1]=I,q[mt+2]=D,q[mt+3]=C,q[mt+4]=U,q[mt+5]=G,q[mt+6]=O,q[mt+7]=$,q[mt+8]=H,J[mt]=wt,J[mt+1]=le,J[mt+2]=se,J[mt+3]=wt,J[mt+4]=le,J[mt+5]=se,J[mt+6]=wt,J[mt+7]=le,J[mt+8]=se,this.n=mt+9,this}orient(t){return this.ref=t,this.rw=null,this}free(){return this.ref=null,this.rw=null,this}quad(t,e,n,s,r){return this.tri(t,e,n,r),this.tri(t,n,s,r),this}box(t,e,n,s,r=0,o=0,a=0,l=!0){s=Dr(s);let c=r-t/2,h=r+t/2,u=o-e/2,f=o+e/2,p=a-n/2,g=a+n/2,x=this.ref;return this.ref=null,this.quad([h,u,g],[h,u,p],[h,f,p],[h,f,g],s),this.quad([c,u,p],[c,u,g],[c,f,g],[c,f,p],s),this.quad([c,f,g],[h,f,g],[h,f,p],[c,f,p],s),l&&this.quad([c,u,p],[h,u,p],[h,u,g],[c,u,g],s),this.quad([c,u,g],[h,u,g],[h,f,g],[c,f,g],s),this.quad([h,u,p],[c,u,p],[c,f,p],[h,f,p],s),this.ref=x,this}boxB(t,e,n,s,r=0,o=0,a=0,l=!1){return this.box(t,e,n,s,r,o+e/2,a,l)}cyl(t,e,n,s,r,o=0,a=0,l=0,c=!1){r=Dr(r);let h=this.ref;this.ref=null;let u=(g,x)=>{let d=[];for(let m=0;m<s;m++){let y=m/s*6.2832;d.push([o+g*Math.cos(y),a+x,l+g*Math.sin(y)])}return d},f=u(t,0),p=u(e,n);for(let g=0;g<s;g++){let x=(g+1)%s;e<1e-4?this.tri(f[g],[o,a+n,l],f[x],r):this.quad(f[g],p[g],p[x],f[x],r)}if(e>=1e-4)for(let g=0;g<s;g++)this.tri([o,a+n,l],p[(g+1)%s],p[g],r);if(c)for(let g=0;g<s;g++)this.tri([o,a,l],f[g],f[(g+1)%s],r);return this.ref=h,this}ball(t,e,n=0,s=0,r=0,o=1,a=1,l=1,c=1){e=Dr(e);let h=LS(c),u=h.attributes.position,f=this.ref;this.ref=null;for(let p=0;p<u.count;p+=3){let g=[0,1,2].map(x=>[n+u.getX(p+x)*t*o,s+u.getY(p+x)*t*a,r+u.getZ(p+x)*t*l]);this.tri(g[0],g[1],g[2],e)}return this.ref=f,this}geo(t,e){e=Dr(e);let n=t.attributes.position,s=t.index,r=s?s.count:n.count,o=this.ref;this.ref=null;let a=l=>{let c=s?s.getX(l):l;return[n.getX(c),n.getY(c),n.getZ(c)]};for(let l=0;l<r;l+=3)this.tri(a(l),a(l+1),a(l+2),e);return this.ref=o,this}loft(t,e,n=!0){let s=t.length,r=t[0].length;for(let o=0;o<s-1;o++)for(let a=0;a<(n?r:r-1);a++){let l=(a+1)%r;this.quad(t[o][a],t[o+1][a],t[o+1][l],t[o][l],Dr(typeof e=="function"?e(a,o):e))}return this}count(){return this.n/9}mesh(t){let e=this.n,n=this.P.subarray(0,e),s=new ue;s.setAttribute("position",new Kt(n,3));let r=new Float32Array(e);for(let a=0;a<e;a+=9){let l=n[a+3]-n[a],c=n[a+4]-n[a+1],h=n[a+5]-n[a+2],u=n[a+6]-n[a],f=n[a+7]-n[a+1],p=n[a+8]-n[a+2],g=c*p-h*f,x=h*u-l*p,d=l*f-c*u,m=Math.sqrt(g*g+x*x+d*d)||1;g/=m,x/=m,d/=m;for(let y=0;y<9;y+=3)r[a+y]=g,r[a+y+1]=x,r[a+y+2]=d}s.setAttribute("normal",new Kt(r,3)),s.setAttribute("color",new Kt(this.C.subarray(0,e),3)),s.setAttribute("uv",new Kt(new Float32Array(e/3*2),2)),s.computeBoundingSphere();let o=new K(s,t);return o.userData.noMerge=!0,o}};var Qg=[12731706,4022170,15253850,5214058,14256806,8014490,15790310,3095130,15043130],DS=[15781806,15253658,15980219],mu=[];function ix(i,t,e,n,s,r,o,a){let{S:l,E:c,rnd:h}=i;l.at(t,e,n,s,u=>{u.cyl(.37,.2,1.28,7,r,0,0,0).cyl(.28,.27,.16,7,r===15790310?V.red:Rn(V.woodD,1.2),0,.62,0).ball(.17,DS[h()*3|0],0,1.42,0,1,1.1,1,0).ball(.185,V.black,0,1.48,-.03,1,.8,1,0),o&&u.cyl(.04,.04,.7,4,V.woodD,.38,.7,.28),a&&(u.box(.1,.1,.55,r,.3,1.1,.1),u.box(.1,.1,.55,r,-.3,1.1,.1))}),o&&(c.at(t,e,n,s,u=>u.cyl(.13,.13,.34,6,16767392,.38,.38,.28)),h()<.45&&we(i.h,16762746,2.6,t+Math.sin(s)*.28+Math.cos(s)*.38,e+.55,n+Math.cos(s)*.28-Math.sin(s)*.38,.85))}function bl(i,t,e,n,s,r){let{fr:o,rnd:a}=i;for(let l=0;l<n;l++){let c=t+(a()-.5)*s*2,h=e+(a()-.5)*s*.9,u=o.ground(c,h);u<.35||ix(i,c,u,h,r+(a()-.5)*1.2,Qg[a()*Qg.length|0],a()<.5,!1)}}function tx(i,t,e,n){let{S:s,E:r,CL:o,fr:a,rnd:l}=i,c=Math.max(a.ground(t,e),.4),h=[[V.red,V.cream],[V.blue,V.cream],[V.orange,V.cream],[V.green,V.cream]][l()*4|0];s.at(t,c,e,n,p=>{for(let g of[-1,1])for(let x of[-1,1])p.cyl(.08,.1,2.7,5,V.woodD,g*1.65,0,x*.9);p.box(3.5,.95,1.3,V.woodM,0,.48,.5,!1).box(3.7,.12,1.5,Rn(V.woodM,1.25),0,.98,.5);for(let g=0;g<3;g++)p.ball(.17,[V.red,V.cream,15292282,V.orange][l()*4|0],-1.1+g*1.1,1.28,.45,1,1,1,0).cyl(.02,.02,.5,3,V.woodD,-1.1+g*1.1,1,.45);p.box(.7,.5,.5,9071178,1.2,1.3,.6).box(.6,.3,.5,13199183,-.2,1.2,.62)}),o.at(t,c,e,n,p=>{for(let x=0;x<7;x++){let d=-1.9+3.8*x/7,m=-1.9+3.8*(x+1)/7,y=x%2?h[1]:h[0];p.quad([d,3,-1.1],[m,3,-1.1],[m,2.55,1.35],[d,2.55,1.35],y),p.tri([d,2.55,1.35],[m,2.55,1.35],[(d+m)/2,2.15,1.4],y)}p.quad([-1.9,2.55,-1.1],[1.9,2.55,-1.1],[1.9,3,-1.1],[-1.9,3,-1.1],h[0])});let u=Math.cos(n),f=Math.sin(n);for(let p of[-1,1])r.at(t,c,e,n,g=>g.cyl(.28,.28,.55,6,V.red,p*1.7,1.85,1.2)),we(i.h,16757610,3.3,t+p*1.7*u+1.2*f,c+2.1,e-p*1.7*f+1.2*u,.85)}function ex(i,t,e){let{S:n,fr:s}=i,r=Math.max(s.ground(t,e),.4),o=r+1.55;n.at(t,o,e,0,l=>{l.at(0,0,0,0,c=>c.cyl(1,1,1.5,14,8014382,0,-.75,0),0,0,Math.PI/2);for(let c of[-1,1])l.at(c*.6,0,0,0,h=>h.cyl(1.05,1.05,.16,14,V.red,0,-.08,0),0,0,Math.PI/2);for(let c of[-1,1])for(let h=0;h<14;h++){let u=h/14*6.283;l.ball(.06,V.gold,c*.78,Math.cos(u)*1,Math.sin(u)*1,1,1,1,0)}for(let c of[-1,1])l.box(.3,1.4,.3,V.woodD,c*.6,-1,.95),l.box(.3,1.4,.3,V.woodD,c*.6,-1,-.95);l.box(1.8,.25,2.4,V.woodD,0,-1.4,0)});let a=new ye({gradientMap:Ie,color:15324844,side:me,fog:!0});for(let l of[-1,1]){let c=new K(new ui(.97,20),a);c.userData.noMerge=!0,c.position.set(t+l*.7,o,e),c.rotation.y=Math.PI/2,i.h.add(c),i.drums.push(c)}for(let l of[-1,1]){let c=t+l*1.95;ix(i,c,Math.max(s.ground(c,e),.4),e,Math.atan2(-l,0),l>0?15790310:V.red,!1,!0)}}function nx(i,t,e){let{S:n,CL:s,fr:r}=i,o=Math.max(r.ground(t,e),.4),a=12;n.cyl(.1,.14,a,5,V.woodD,t,o,e),n.ball(.28,V.gold,t,o+a+.2,e,1,1,1,1),n.cyl(.12,0,1.3,4,V.gold,t,o+a+.4,e);let l=[V.black,V.red,V.blue,15292282,V.green];s.at(t,o,e,0,c=>{l.forEach((h,u)=>{let f=a-.8-u*1.7,p=3.6-u*.25;c.at(.1,f,0,.2*u,g=>{g.cyl(.62-u*.04,.14,p,8,h,0,0,0)},0,-Math.PI/2+.08*u),c.ball(.12,16777215,.5,f+.25,.45,1,1,1,0),c.ball(.12,16777215,.5,f+.25,-.45,1,1,1,0)}),[16234441,16773792,10146047,10937249,16756838].forEach((h,u)=>c.quad([0,a-.4,.25*u-.5],[0,a-.7,.25*u-.5],[2.8,a-2-u*.12,.25*u-.5],[2.8,a-1.7-u*.12,.25*u-.5],h))})}function NS(i,t){let{S:e,E:n,CL:s,fr:r}=i,o=r.river(t),a=o.zc-o.hw-1.8,l=o.zc+o.hw+1.8,c=12.8,h=3.9;for(let p of[a,l]){let g=Math.max(r.ground(t,p),.2);e.cyl(.14,.2,c-g+.8,6,V.woodM,t,g-.3,p),e.ball(.3,V.gold,t,c+.8,p,1,1,1,0)}let u=p=>[t,c-h*Math.sin(Math.PI*p),a+(l-a)*p],f=Math.max(12,Math.round((l-a)/1.8));for(let p=0;p<f;p++)As(e,u(p/f),u((p+1)/f),.09,V.woodD);for(let p=1;p<f;p++){let g=u(p/f),x=mu[(p+Math.abs(t|0))%4];e.box(.04,.35,.04,V.woodD,g[0],g[1]-.17,g[2],!1),n.cyl(.42,.34,.95,6,x,g[0],g[1]-1.3,g[2]),e.cyl(.44,0,.22,6,V.black,g[0],g[1]-.34,g[2]),p%3===0&&we(i.h,16757610,3.6,g[0],g[1]-.85,g[2],.8)}for(let p=0;p<f;p++){let g=u((p+.1)/f),x=u((p+.9)/f);s.tri([g[0],g[1]-.05,g[2]],[x[0],x[1]-.05,x[2]],[(g[0]+x[0])/2,Math.min(g[1],x[1])-.7,(g[2]+x[2])/2],[V.red,V.cream,V.purple,V.orange][p%4])}}function*sx(i){mu.length=0,mu.push(V.red,V.cream,V.orange,15292282);let{S:t,E:e,CL:n,fr:s,rnd:r}=i;for(let l of[-86,-62,-38,38,62,86])NS(i,l),yield;for(let l=0;l<40;l++){let c=-62+l*3.15;Math.abs(c+10)<9||(e.cyl(.36,.3,.8,6,mu[l%4],c,oe.PH+1.6,oe.ZF+.5),t.box(.04,.5,.04,V.woodD,c,oe.PH+2.5,oe.ZF+.5,!1),l%3===0&&we(i.h,16757610,3.2,c,oe.PH+2,oe.ZF+.7,.8))}for(let l=0;l<14;l++){let c=-80+l*12+r()*3;if(Math.abs(c+10)<10)continue;let h=oe.PO-.8,u=Math.max(s.ground(c,h),.3);tp(i,c,u,h,[V.red,V.purple,V.blue,V.orange,V.green][l%5])}let o=[-76,-60,-36,16,28,40,52,64,76],a=[-52,-30,-12,6,24,44,62];for(let l of o)tx(i,l,oe.PO-2.8,0),yield;for(let l of a){let c=s.river(l);tx(i,l,c.zc+c.hw+3.2,Math.PI),yield}for(let l of o)bl(i,l,oe.PO-.4,2,3,0),yield;for(let l of a){let c=s.river(l);bl(i,l,c.zc+c.hw+1.2,2,3,Math.PI),yield}bl(i,-10,oe.PO+1,2,1.2,0),bl(i,-16,oe.PO-6,4,3,0),bl(i,-4,oe.PO-6,4,3,0),ex(i,-24,oe.PO-4.5),ex(i,4,oe.PO-4.5),nx(i,-17,oe.PO-1.6),nx(i,-3,oe.PO-1.6)}var V={plaster:16184300,plasterS:15131093,tile:5726575,tile2:6713727,ridge:15658214,black:2763827,woodD:3811876,woodM:7162426,red:11876396,redD:9251363,gold:14989394,stone:10395033,stoneD:6118490,gravel:14341056,win:16767120,pink:zi.c,pink2:zi.c2,pink3:16304598,trunk:7294787,purple:5913996,cream:16773590,orange:15766330,blue:3104666,green:5214047},{PH:dn}=oe,US=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function vu(i,t,e,n,s,r,o,a,l,c={}){var _;let h=c.n||5,u=(_=c.flare)!=null?_:.7,f=Math.max(4,Math.ceil(2*s/1.5)),p=Math.max(4,Math.ceil(2*r/1.5)),g=[],x=c.tile||V.tile,d=c.tile2||V.tile2,m=new Set([0,f,f+p,2*f+p]),y=2*f+2*p;for(let S=0;S<=h;S++){let M=S/h,w=s+(o-s)*M,v=r+(a-r)*M,T=e+l*Math.pow(M,1.55),R=[],P=(I,D)=>{let C=Math.pow(Math.abs(I)/Math.max(w,.01),6)*Math.pow(Math.abs(D)/Math.max(v,.01),6);R.push([t+I,T+u*Math.pow(1-M,2.2)*Math.min(1,C*1.1),n+D])};for(let I=0;I<f;I++)P(-w+2*w*I/f,-v);for(let I=0;I<p;I++)P(w,-v+2*v*I/p);for(let I=0;I<f;I++)P(w-2*w*I/f,v);for(let I=0;I<p;I++)P(-w,v-2*v*I/p);g.push(R)}i.orient([t,e-40,n]).loft(g,(S,M)=>m.has(S)||m.has((S+1)%y)?V.ridge:S%2?x:d);let b=g[0].map(S=>[S[0],S[1]-.55,S[2]]);return i.loft([g[0],b],V.plaster),i.free(),g}function ip(i,t,e,n,s,r,o,a,l,c,h={}){var b;vu(i,t,e,n,s,r,o,a,l,h);let u=e+l,f=(b=h.ov)!=null?b:.9,p=o+f,g=Math.max(4,Math.ceil(2*p/1.5)),x=5,d=h.tile||V.tile,m=h.tile2||V.tile2,y=[];for(let _=0;_<=x;_++){let S=-a+2*a*_/x,M=1-Math.abs(S)/a;y.push([S,c*Math.pow(M,1.35)])}i.orient([t,u-40,n]);for(let _=0;_<x;_++)for(let S=0;S<g;S++){let M=t-p+2*p*S/g,w=t-p+2*p*(S+1)/g,v=y[_],T=y[_+1];i.quad([M,u+v[1]+.15,n+v[0]],[w,u+v[1]+.15,n+v[0]],[w,u+T[1]+.15,n+T[0]],[M,u+T[1]+.15,n+T[0]],S%2?d:m)}for(let _ of[-1,1]){let S=t+_*o;i.orient([t,u,n]);for(let w=0;w<x;w++){let v=y[w],T=y[w+1];i.quad([S,u,n+v[0]],[S,u,n+T[0]],[S,u+T[1],n+T[0]],[S,u+v[1],n+v[0]],V.plaster)}let M=t+_*(o+f);i.orient([t,u,n]);for(let w=0;w<x;w++){let v=y[w],T=y[w+1];i.quad([M,u+v[1]-.1,n+v[0]],[M,u+T[1]-.1,n+T[0]],[M,u+T[1]+.3,n+T[0]],[M,u+v[1]+.3,n+v[0]],V.woodD)}i.free(),i.box(.3,.9,.9,V.gold,S+_*.1,u+c*.38,n)}i.free(),i.box(2*p,.5,.7,V.ridge,t,u+c+.35,n);for(let _ of[-1,1])i.box(1.1,1.2,1.2,V.black,t+_*p,u+c+.55,n);return u+c+.55}function sp(i,t,e,n,s,r,o,a={}){let l=Math.max(2,Math.ceil(s/1.7)),c=4,h=a.tile||V.tile,u=a.tile2||V.tile2,f=[];for(let g=0;g<=c;g++){let x=-r/2+r*g/c,d=1-Math.abs(x)/(r/2);f.push([x,o*Math.pow(d,1.3)+(g===0||g===c?.18:0)])}i.orient([t,e-30,n]);for(let g=0;g<c;g++)for(let x=0;x<l;x++){let d=t-s/2+s*x/l,m=t-s/2+s*(x+1)/l,y=f[g],b=f[g+1];i.quad([d,e+y[1],n+y[0]],[m,e+y[1],n+y[0]],[m,e+b[1],n+b[0]],[d,e+b[1],n+b[0]],(g===c/2-.5||c/2+.5,x%2?h:u))}if(!a.noCap)for(let g of[-1,1]){let x=t+g*s/2;for(let d=0;d<c;d++){let m=f[d],y=f[d+1];i.quad([x,e,n+m[0]],[x,e,n+y[0]],[x,e+y[1],n+y[0]],[x,e+m[1],n+m[0]],V.plaster)}}i.free(),i.box(s,.38,.7,V.ridge,t,e+o+.2,n);let p=[[t-s/2,e-.5,n-r/2],[t+s/2,e-.5,n-r/2]];i.quad([t-s/2,e,n-r/2],[t+s/2,e,n-r/2],p[1],p[0],V.plaster),i.quad([t+s/2,e,n+r/2],[t-s/2,e,n+r/2],[t-s/2,e-.5,n+r/2],[t+s/2,e-.5,n+r/2],V.plaster)}function lx(i,t,e,n,s){let o=[];for(let a=0;a<=16;a++){let l=-t/2+t*a/16,c=1-Math.abs(l)/(t/2);o.push([l,e*(.5-.5*Math.cos(Math.PI*Math.pow(c,.9)))])}i.save().T(0,0,0,0,s),i.orient([0,-3,-n/2]);for(let a=0;a<16;a++){let l=o[a],c=o[a+1],h=a%2?V.tile:V.tile2;i.quad([l[0],l[1]+.2,.95],[c[0],c[1]+.2,.95],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],h),i.quad([l[0],l[1]-.1,.75],[c[0],c[1]-.1,.75],[c[0],c[1]+.2,.95],[l[0],l[1]+.2,.95],V.plaster),i.quad([l[0],-.7,.5],[c[0],-.7,.5],[c[0],c[1]-.1,.5],[l[0],l[1]-.1,.5],V.plaster),i.quad([l[0],l[1]-.55,.62],[c[0],c[1]-.55,.62],[c[0],c[1]+0,.62],[l[0],l[1]+0,.62],V.woodD),i.quad([l[0],-.7,-n],[c[0],-.7,-n],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],V.plaster)}i.box(.26,e*.5,n,V.ridge,0,e*.5+.3,-n/2+.45,!1),i.free(),i.ball(.5,V.gold,0,e*.55,.75,1,1,.8,1),i.restore()}function FS(i,t,e,n,s){i.save().T(0,0,0,0,s),i.orient([0,-2,-n/2]);for(let r of[-1,1])i.quad([0,e+.2,.5],[0,e+.2,-n],[r*(t/2+.45),-.1,-n],[r*(t/2+.45),-.1,.8],r>0?V.tile:V.tile2);i.tri([-t/2-.2,-.4,.5],[t/2+.2,-.4,.5],[0,e+.1,.5],V.plaster).tri([-t/2-.35,-.4,.58],[t/2+.35,-.4,.58],[0,e+.35,.58],V.woodD).tri([-t/2,-.4,.62],[t/2,-.4,.62],[0,e,.62],V.plaster),i.free().ball(.3,V.gold,0,e*.4,.7,1,1,.7,0),i.restore()}function cx(i,t=1){i.save().T(0,0,0,0,0,0,t);let e=[];for(let s=0;s<=9;s++){let r=s/9;e.push([-.4*Math.sin(r*2.4)*0+(-.1+r*.5-r*r*1.5)*1,.3+r*2.4-r*r*.2,0])}for(let s=0;s<=9;s++){let r=s/9,o=e[s],a=.52*(1-r*.8)+.08;i.ball(a,Rn(V.gold,.88+.2*(s%2)),o[0],o[1],o[2],1,1.05,.9,1),s>1&&s<9&&i.cyl(.13,0,.55,4,V.gold,o[0]-.05,o[1]+a*.85,0)}let n=e[9];i.ball(.3,V.gold,n[0]-.35,n[1]+.2,0,1.6,.5,.9,1).ball(.26,Rn(V.gold,1.1),n[0]-.7,n[1]+.55,0,1.3,.4,1.1,1),i.ball(.62,V.gold,.55,.35,0,1.35,.9,1,1).box(.9,.14,.6,V.gold,.95,.04,0).box(.9,.1,.55,V.gold,.95,.78,0).cyl(.07,0,.5,4,16777215,1.25,.15,.16).cyl(.07,0,.5,4,16777215,1.25,.15,-.16),i.ball(.1,V.black,.78,.62,.3,1,1,1,0).ball(.1,V.black,.78,.62,-.3,1,1,1,0);for(let s of[-1,1])i.cyl(.1,0,.9,4,V.red,.45,.95,s*.28);i.restore()}function rx(i,t,e,n,s,r,o,a,l){let c=[o];for(;c[c.length-1]>r+.05;){let p=c[c.length-1],g=(p-r)/(o-r);c.push(Math.max(r,p-(.85+.5*(1-g)+l()*.35)))}let h=p=>a*Math.pow((o-p)/(o-r),1.6),u=p=>{let g=h(p),x=n+g,d=s+g;return[[t-x,p,e-d],[t+x,p,e-d],[t+x,p,e+d],[t-x,p,e+d]]},f=[[0,0,-1],[1,0,0],[0,0,1],[-1,0,0]];i.orient([t,(r+o)/2,e]);for(let p=0;p<c.length-1;p++){let g=u(c[p]),x=u(c[p+1]),d=.78+.22*((c[p]-r)/(o-r));for(let m=0;m<4;m++){let y=g[m],b=g[(m+1)%4],_=x[m],S=x[(m+1)%4],M=Math.hypot(b[0]-y[0],b[2]-y[2]),w=(T,R)=>{let P=[y[0]+(b[0]-y[0])*T,y[1],y[2]+(b[2]-y[2])*T],I=[_[0]+(S[0]-_[0])*T,_[1],_[2]+(S[2]-_[2])*T];return[P[0]+(I[0]-P[0])*R,P[1]+(I[1]-P[1])*R,P[2]+(I[2]-P[2])*R]};i.quad(w(0,0),w(1,0),w(1,1),w(0,1),V.stoneD);let v=-l()*.5/M*3;for(;v<1;){let T=(1.5+l()*1.5)/M,R=v+T,P=Math.max(0,v)+.05/M*1.3,I=Math.min(1,R)-.05/M*1.3;if(I>P){let D=f[m],C=$=>$,U=.1,G=($,H)=>{let q=w($,H);return[q[0]+D[0]*U,q[1],q[2]+D[2]*U]},O=Rn(V.stone,d*(.8+l()*.34));i.quad(G(P,.06),G(I,.06),G(I,.94),G(P,.94),O)}v=R}}}i.free()}function yu(i,t,e,n,s,r=1,o=1.4){i.S.at(t,e,n,s,a=>{a.box(r+.3,o+.3,.2,V.woodD,0,0,.1).box(r+.5,.14,.4,V.woodM,0,o/2+.28,.2);for(let l=-1;l<=1;l++)a.box(.07,o,.06,V.woodD,l*r*.3,0,.28);a.box(r,.06,.06,V.woodD,0,0,.28)}),i.E.at(t,e,n,s,a=>{a.box(r,o,.05,V.win,0,0,.2)})}function rp(i,t,e,n,s,r,o,a,l,c={}){for(let h=0;h<a;h++){let u=(h+.5)/a-.5;for(let f of[1,-1])yu(i,t+u*(s-3),n,e+f*(r/2),f>0?0:Math.PI,c.w,c.h)}for(let h=0;h<l;h++){let u=(h+.5)/l-.5;for(let f of[1,-1])yu(i,t+f*(s/2),n,e+u*(r-3),f>0?Math.PI/2:-Math.PI/2,c.w,c.h)}}var BS=[0,Math.PI/2,Math.PI,-Math.PI/2];function ox(i,t,e,n,s,r,o,a,l,c){let h=n+(r-n)*c,u=s+(o-s)*c,f=e+a*Math.pow(c,1.55),p=a*1.55*Math.pow(c,.55),g=l%2?n-r:s-o,x=Math.atan2(p,Math.max(.3,g));return{px:i+(l===1?h:l===3?-h:0),py:f,pz:t+(l===0?u:l===2?-u:0),ry:BS[l],ang:x}}function gu(i,t,e,n,s){let{P:r,S:o,G:a}=i,l=n,c=0;return s.forEach((h,u)=>{let{w:f,d:p,h:g}=h;r.box(f,g,p,V.plaster,t,l+g/2,e,!1),o.box(f+.26,.7,p+.26,V.woodD,t,l+.35,e,!1),o.box(f+.22,.34,p+.22,V.woodD,t,l+g-.4,e,!1),h.wood&&o.box(f+.2,g*.36,p+.2,V.woodM,t,l+g*.2+.3,e,!1);for(let y of[-1,1])for(let b of[-1,1])o.box(.42,g,.42,V.woodD,t+y*f/2,l+g/2,e+b*p/2,!1);let x=h.nx||3,d=h.nz||2;for(let y=1;y<x;y++)for(let b of[1,-1])o.box(.2,g-1.1,.12,V.woodD,t-f/2+f*y/x,l+g/2,e+b*(p/2+.03),!1);rp(i,t,e,l+g*.55,f,p,g,x,d,{});let m=s[u+1];if(h.ro){let y=h.ro,b=m?m.w/2:0,_=m?m.d/2:0,S=l+g-.25,M=f/2+y.o,w=p/2+y.o;if(y.irimoya){if(c=ip(r,t,S,e,M,w,f/2-.4,p/2-.4,y.rise,y.gh,{}),y.shachi)for(let v of[-1,1])a.at(t+v*(f/2-.4+.9+.6),c-.3,e,v>0?0:Math.PI,T=>cx(T,y.shachi))}else vu(r,t,S,e,M,w,b,_,y.rise,y);if(!y.irimoya){for(let v of y.k||[]){let T=ox(t,e,S,M,w,b,_,y.rise,v,.36);r.at(T.px,T.py,T.pz,T.ry,R=>lx(R,y.kw||8,y.kh||3.4,y.kd||5,T.ang))}for(let v of y.c||[]){let T=ox(t,e,S,M,w,b,_,y.rise,v,.42);r.at(T.px,T.py,T.pz,T.ry,R=>FS(R,y.cw||3.6,y.ch||1.6,y.cd||3,T.ang))}}l=S+y.rise}else l+=g}),{top:l,ridge:c}}function Sl(i,t,e,n,s,r,o={}){let a=o.h||5,l=o.wd||4.4;i.P.at(t,e,n,r,c=>{c.box(s,a,l,V.plaster,0,a/2,0,!1),sp(c,0,a-.3,0,s,l+2.2,o.rise||2.4,{})}),i.S.at(t,e,n,r,c=>{c.box(s+.1,.55,l+.22,V.woodD,0,.28,0,!1),c.box(s+.1,.3,l+.2,V.woodD,0,a-.2,0,!1);let h=Math.max(1,Math.floor(s/2.6));for(let u=0;u<h;u++){let f=-s/2+s*(u+.5)/h;for(let p of[1,-1])c.at(f,a*.5,p*(l/2+.13),p>0?0:Math.PI,g=>{u%2?g.quad([-.3,-.3,0],[.3,-.3,0],[.3,.3,0],[-.3,.3,0],V.black):g.tri([-.38,-.32,0],[.38,-.32,0],[0,.4,0],V.black)})}})}function El(i,t,e,n,s,r,o={}){let a=n-t,l=s-e,c=Math.hypot(a,l),h=Math.atan2(-l,a),u=(t+n)/2,f=(e+s)/2,p=o.h||3,g=o.th||1.3;i.P.at(u,r,f,h,x=>{x.box(c,p,g,V.plaster,0,p/2,0,!1),sp(x,0,p-.05,0,c,g+1.5,.95,{})}),i.S.at(u,r,f,h,x=>{x.box(c+.05,.3,g+.1,V.woodD,0,.15,0,!1);let d=Math.max(1,Math.floor(c/3));for(let m=0;m<d;m++){let y=-c/2+c*(m+.5)/d;x.at(y,p*.52,g/2+.13,0,b=>{if(m%3===0)b.tri([-.34,-.3,0],[.34,-.3,0],[0,.36,0],V.black);else if(m%3===1)b.quad([-.28,-.28,0],[.28,-.28,0],[.28,.28,0],[-.28,.28,0],V.black);else{let S=[];for(let M=0;M<8;M++)S.push([Math.cos(M/8*6.283)*.3,Math.sin(M/8*6.283)*.3,0]);for(let M=0;M<8;M++)b.tri([0,0,0],S[M],S[(M+1)%8],V.black)}})}})}function OS(i,t,e,n){let{P:s,S:r,G:o,E:a,CL:l}=i;s.box(13,4.8,7,V.plaster,t,n+2.4,e,!1),r.box(13.3,.8,7.3,V.woodD,t,n+.4,e,!1),r.box(13.2,.4,7.2,V.woodD,t,n+4.4,e,!1),r.box(4.2,3.7,.3,V.black,t,n+1.85,e+3.52,!1);for(let h of[-1,1])r.box(.55,4.2,.6,V.woodD,t+h*2.4,n+2.1,e+3.6,!1),r.box(.9,3.2,.15,V.red,t+h*3.2,n+1.7,e+3.75,!1);r.box(5.6,.55,.7,V.woodD,t,n+4.1,e+3.7,!1);for(let h of[-1,1])for(let u=0;u<2;u++)yu(i,t+h*(4.4+u*1.5),n+2.6,e+3.5,0,.9,1.2);s.box(10,3.4,5,V.plaster,t,n+4.6+1.7,e,!1),r.box(10.26,.5,5.26,V.woodD,t,n+4.6+.25,e,!1),r.box(10.2,.3,5.2,V.woodD,t,n+4.6+3.2,e,!1),rp(i,t,e,n+6.6,10,5,3.4,3,1,{}),vu(s,t,n+4.55,e,6.5+1.1,3.5+1.1,5,2.5,2.2,{});let c=ip(s,t,n+4.6+3.15,e,5+1.8,2.5+1.8,4.4,2.1,1.9,2.6,{});for(let h of[-1,1])o.at(t+h*(4.4+.9+.6),c-.3,e,h>0?0:Math.PI,u=>cx(u,.5));s.at(t,n+4.55+2.2*Math.pow(.45,1.55),e+3.5+1.1-(1.1+1.5)*.45,0,h=>lx(h,6,2.5,3,.5));for(let h=0;h<5;h++){let u=t-5+h*2.5,f=n+3.4;l.box(1.9,2,.05,V.purple,u,f,e+3.62,!1),l.at(u,f,e+3.66,0,p=>{let x=[];for(let d=0;d<10;d++)x.push([Math.cos(d/10*6.283)*.5,Math.sin(d/10*6.283)*.5,0]);for(let d=0;d<10;d++)p.tri([0,0,0],x[d],x[(d+1)%10],V.cream)})}for(let h of[-1,1,0])a.box(.9,1.3,.9,V.red,t+h*6.1,n+3.3,e+4.2),r.box(.12,.9,.12,V.woodD,t+h*6.1,n+4.4,e+4.2),we(i.h,16757610,5,t+h*6.1,n+3.3,e+4.4,.85)}function HS(i,t,e,n){let{P:s,S:r,G:o,E:a}=i;s.box(8,4.6,6.4,V.plaster,t,n+2.3,e,!1),r.box(8.26,.6,6.66,V.woodD,t,n+.3,e,!1),r.box(8.2,.3,6.6,V.woodD,t,n+4.3,e,!1),r.box(3.2,3.5,.3,V.black,t,n+1.75,e+3.25,!1);for(let c of[-1,1])r.box(.5,3.9,.5,V.woodD,t+c*1.9,n+1.95,e+3.3,!1);r.box(4.6,.5,.6,V.woodD,t,n+3.9,e+3.4,!1),s.box(5.6,3,4.4,V.plaster,t,n+4.45+1.5-.15,e,!1),r.box(5.86,.4,4.66,V.woodD,t,n+4.45+.05,e,!1),rp(i,t,e,n+6,5.6,4.4,3,2,1,{}),vu(s,t,n+4.45,e,4+1.5,3.2+1.5,2.8,2.2,1.8,{});let l=ip(s,t,n+4.45+3,e,2.8+1.6,2.2+1.6,2.4,1.9,1.5,2.2,{});for(let c of[-1,1])a.box(.7,1,.7,V.red,t+c*3,n+3.2,e+3.6)}function ax(i,t,e,n,s,r){let o=i.S;o.cyl(.3*s,.46*s,3.5*s,6,V.trunk,t,e,n);let a=(r()-.5)*.8;o.cyl(.16*s,.24*s,2.2*s,5,V.trunk,t+a*.8,e+2.8*s,n+a*.4);let l=[V.pink,V.pink2,V.pink3,Rn(V.pink,1.06)];for(let[c,h,u,f]of[[0,4.7,0,2.9],[1.9,4.1,.7,2],[-1.7,4.3,-.9,2.2],[.4,5.9,-.4,1.8]])o.ball(f*s*(.9+r()*.25),l[r()*4|0],t+c*s,e+h*s,n+u*s,1,.78,1,1);o.cyl(2.5*s,2.5*s,.04,9,V.pink3,t+(r()-.5)*1.4,e+.06,n+(r()-.5)*1.4,!0)}function _u(i,t,e,n,s=1){let r=i.S,o=V.stone;r.cyl(.5*s,.62*s,.3*s,7,o,t,e,n),r.cyl(.17*s,.2*s,1.3*s,6,o,t,e+.3*s,n),r.cyl(.5*s,.32*s,.2*s,7,o,t,e+1.6*s,n),r.box(.7*s,.6*s,.7*s,o,t,e+2.1*s,n,!1),i.E.box(.46*s,.4*s,.74*s,V.win,t,e+2.1*s,n).box(.74*s,.4*s,.46*s,V.win,t,e+2.1*s,n),r.cyl(.7*s,0,.55*s,4,o,t,e+2.4*s,n),we(i.h,16762746,2.8*s+.4,t,e+2.1*s,n,.8)}function zS(i){let{side:t,s:e,a:n,hwv:s}=i,r=Math.cos(n),o=Math.sin(n),a=ie(e),l=oe.PO,c=(f,p)=>{let g=t*(s+l-p),x=t*f;return[a+g*r-x*o,e-(g*o+x*r)]};return{toW:c,ground:(f,p)=>{let[g,x]=c(f,p);return Zn(g,x)},river:f=>{let p=t*f,g=0;for(let d=0;d<4;d++){let m=e-(g*o+p*r);g=(ie(m)-a+p*o)/r}let x=e-(g*o+p*r);return{zc:s+l-t*g,hw:be(x)}},side:t,s0:e,a:n,hw0:s}}function As(i,t,e,n,s,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=Math.hypot(o,a,l);c<1e-4||i.save().T((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,Math.atan2(o,l),-Math.atan2(a,Math.hypot(o,l)),0).box(n,r||n,c,s).restore()}function*hx(i,t,e){let n=performance.now(),{side:s,hwv:r}=e,o=US(t*7919+11),a=new Qt;a.position.set(s*(r+oe.PO),0,0),a.rotation.y=-s*Math.PI/2,i.add(a);let l={P:new xi,S:new xi,G:new xi,E:new xi,CL:new xi,h:a,rnd:o,fr:zS(e),ctx:e,drums:[]},{P:c,S:h,G:u,E:f,CL:p}=l,g=dn+12,x=-10,d={},m=0,y=performance.now(),b=H=>{let q=c.count()+h.count()+u.count()+f.count()+p.count(),J=performance.now();d[H]=[q-m,Math.round(J-y)],m=q,y=J};h.box(2*oe.X-1,.3,oe.ZF-oe.ZB-1,V.gravel,0,dn-.08,(oe.ZF+oe.ZB)/2,!1),rx(h,0,(oe.ZF+oe.ZB)/2,oe.X,(oe.ZF-oe.ZB)/2,-1.8,dn,4.8,o),h.box(2*oe.X+1.4,.5,1.2,V.stone,0,dn+0,oe.ZF+.3,!1),rx(h,0,-12,30,22,dn-.4,g,6.4,o),h.box(61.6,.3,45.6,V.gravel,0,g-.1,-12,!1),b("piedra"),yield;let _=5.8,S=24;for(let H=0;H<S;H++){let q=g-.5*(H+1),J=10.5+H;h.box(_,q-dn,1,Rn(V.stone,.92+.1*(H*7%3)/2),x,(dn+q)/2,J+.5,!1);for(let mt of[-1,1])h.box(.6,q+.8-dn,1,V.stone,x+mt*(_/2+.3),(dn+q+.8)/2,J+.5,!1);if(H%4===1)for(let mt of[-1,1])_u(l,x+mt*(_/2+1.5),q,J+.5,.8)}b("escalera"),yield;let M=12,w=-17,v=gu(l,M,w,g,[{w:26,d:22,h:5.4,nx:5,nz:4,wood:!0,ro:{o:2.6,rise:3.3,c:[0,2],cw:4.2,cd:3.2}},{w:23.4,d:19.4,h:4.8,nx:5,nz:4,ro:{o:2.4,rise:3,k:[0,2],kw:9,kh:3.6,kd:5.5}},{w:20.8,d:16.8,h:4.4,nx:4,nz:3,ro:{o:2.2,rise:2.8,c:[1,3],cw:4,cd:3.4}},{w:18.2,d:14.2,h:4,nx:4,nz:3,ro:{o:2,rise:2.6,k:[0,2],kw:7,kh:3,kd:4.5}},{w:15.6,d:11.8,h:3.8,nx:3,nz:2},{w:13.2,d:9.8,h:3.6,nx:3,nz:2,ro:{o:2.7,rise:3,gh:4.4,irimoya:!0,shachi:1}}]);b("keep"),yield;let T=gu(l,-22,-27,g,[{w:12,d:10,h:4.6,nx:3,nz:2,ro:{o:1.9,rise:2.2,k:[0],kw:5,kh:2.4,kd:3.4}},{w:9.2,d:7.4,h:3.8,nx:2,nz:2,ro:{o:2,rise:2.2,gh:3,irimoya:!0,shachi:.6}}]),R=gu(l,24,2,g,[{w:10.6,d:9,h:4.2,nx:3,nz:2,ro:{o:1.8,rise:2,k:[0],kw:5,kh:2.2,kd:3}},{w:8,d:6.6,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:2,gh:2.8,irimoya:!0,shachi:.55}}]),P=gu(l,-24,3,g,[{w:10,d:10,h:4.4,nx:3,nz:3,ro:{o:1.8,rise:2,c:[0],cw:3.4,cd:2.8}},{w:7.4,d:7.4,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:3.6}}]);u.cyl(.14,0,2.2,5,V.gold,-24,P.top+.2,3).ball(.32,V.gold,-24,P.top+.2,3);for(let[H,q,J]of[[v,M,w],[T,-22,-27],[R,24,2]])h.cyl(.07,.09,4.4,4,V.woodD,q,H.ridge+.1,J),l.CL.quad([q,H.ridge+4.2,J],[q+3.4,H.ridge+3.8,J],[q+3.4,H.ridge+2.4,J],[q,H.ridge+2.7,J],V.purple);Sl(l,-8.5,g,-22,15,0),Sl(l,-22,g,-12,20,Math.PI/2),Sl(l,-16.5,g,3,5,0),Sl(l,8.5,g,3,25,0),Sl(l,22,g,-4.1,3.6,Math.PI/2),HS(l,-10,3,g),b("torres"),yield;let I=oe.ZF-1,D=oe.X-1,C=oe.ZB+1;El(l,-D,I,-16.5,I,dn),El(l,-3.5,I,D,I,dn),El(l,-D,C,-D,I,dn),El(l,D,I,D,C,dn),El(l,D,C,-D,C,dn),OS(l,-10,I-3,dn),b("muros+puerta"),yield;for(let[H,q]of[[-44,-30],[44,-34],[-46,14]]){c.box(16,5.2,8,V.plaster,H,dn+2.6,q,!1),h.box(16.2,.7,8.2,V.woodD,H,dn+.5,q,!1),sp(c,H,dn+5.1,q,17.5,10.4,3.2);for(let J=0;J<3;J++)yu(l,H-4.5+J*4.5,dn+3.4,q+4.05,0,.9,1.1)}kS(l),b("kura+puente"),yield;let U=0,G=[];for(let H=0;H<7;H++){let q=15+H*3.6;G.push([x-8.2,q],[x+8.2,q])}for(let H=0;H<13;H++)G.push([-62+o()*50,-46+o()*84],[40+o()*22,-46+o()*84]);for(let H=0;H<6;H++)G.push([-40+o()*80,-49+o()*7]);for(let[H,q]of G)q>12&&q<38&&Math.abs(H-x)<7&&Math.abs(H-x)>1||Math.abs(H)<39&&q>-42&&q<19&&!(q>12&&Math.abs(H-x)>7)||q>37&&Math.abs(H-x)<10||(ax(l,H,dn+.05,q,.8+o()*.5,o),++U%9===0&&(yield));for(let[H,q]of[[-15,-10],[-11,-16],[-16,-4],[-7,-8],[-3,-14]])ax(l,H,g+.05,q,.75+o()*.3,o);for(let H=0;H<12;H++){let q=-61+H*10.4+o()*2;Math.abs(q-x)<10||_u(l,q,dn+.05,36,.9)}b("arboles"),yield,yield*sx(l),b("festival"),yield;let O=GS();a.add(c.mesh(O.plaster)),b("m-pl"),yield,a.add(h.mesh(O.solid)),b("m-s"),yield,a.add(u.mesh(O.gold),f.mesh(O.emis),p.mesh(O.cloth)),b("m-rest"),yield;for(let[H,q,J,mt]of[[M-13.5,g+4,w+11.5,26],[M+13.5,g+5,w+11.5,24],[M,g+13,w+11,26],[M,g+21,w+8,22],[M,g+28,w+6,18],[M,g+34,w+5,14],[-22,g+4,-21,14],[24,g+5,8,14],[-24,g+5,9,14],[-10,dn+5,oe.ZF+3,18]])we(a,16766354,mt,H,q,J,.2);b("focos"),i.updateMatrixWorld(!0);let $=new N(M,g+14,w);return a.localToWorld($),i.userData.cas={parts:d,ms:0,tris:c.count()+h.count()+u.count()+f.count()+p.count(),mats:O,keep:{x:M,z:w,top:v.top,ridge:v.ridge},drums:l.drums,h:a,fr:l.fr,cw:$},i.userData.cas.ms=performance.now()-n,i}function kS(i){let{S:t,E:e}=i,n=-10,s=61.5,r=44.4,o=1.2,a=dn+.2,l=16,c=5.4,h=x=>1.1*Math.sin(Math.PI*x)*(1-x),u=(x,d=0,m=0)=>{let y=x/l;return[n+d,o+(a-o)*y+h(y)+m,s+(r-s)*y]};for(let x=0;x<l;x++)As(t,u(x),u(x+1),c,Rn(V.red,.9+.12*(x%2)),.3);for(let x of[-1,1]){let d=x*(c/2+.1);for(let m=0;m<=l;m++){let y=u(m,d);if(t.box(.22,1.5,.22,V.red,y[0],y[1]+.85,y[2],!1),m%5===0&&(t.ball(.2,V.gold,y[0],y[1]+1.75,y[2],1,1,1,0),e.box(.42,.6,.42,V.red,y[0],y[1]+2.2,y[2]),we(i.h,16757610,3.4,y[0],y[1]+2.2,y[2],.85)),m<l){let b=u(m+1,d);for(let _ of[1.5,.8])As(t,[y[0],y[1]+_,y[2]],[b[0],b[1]+_,b[2]],.12,V.red)}}}for(let x of[s-.4,(s+r)/2,r+.4])for(let d of[-1,1])t.cyl(.2,.26,o+2.6,6,V.woodD,n+d*(c/2-.2),-1.5,x);let f=oe.PO-3,p=oe.PO+5.2;for(let x=0;x<10;x++)t.box(3.6,.18,.62,Rn(V.woodM,.9+.2*(x%2)),n,.62,f+x*.9,!1);for(let x=0;x<6;x++)for(let d of[-1,1])t.cyl(.12,.15,2.4,5,V.woodD,n+d*1.7,-1.5,f+.6+x*1.6);for(let x of[-1,1])t.cyl(.14,.16,3.2,5,V.woodD,n+x*1.8,.6,p-.4),e.box(.4,.55,.4,V.red,n+x*1.8,3.95,p-.4),we(i.h,16757610,3.6,n+x*1.8,3.95,p-.4,.9);let g=i.fr;for(let x=0;x<6;x++){let d=f-.8-x*.9,m=g.ground(n,d);t.box(4.6,.22,.82,Rn(V.stone,.9+.1*(x%3)),n,Math.max(m,.5),d,!1)}for(let x of[-1,1])for(let d=0;d<3;d++){let m=58.5-d*1.4,y=n+x*(4.6+d*.9),b=g.ground(y,m);tp(i,y,Math.max(b,.3),m,[V.red,V.purple,V.blue][d%3])}}function tp(i,t,e,n,s,r=6.2){i.S.cyl(.07,.09,r,5,V.woodD,t,e,n),i.S.box(1.3,.09,.09,V.woodD,t+.6,e+r-.2,n,!1),i.CL.box(1.1,r*.66,.04,s,t+.62,e+r*.62,n,!1),i.CL.box(1.14,.26,.05,V.cream,t+.62,e+r-.5,n,!1)}function GS(){let i=t=>new ye(Object.assign({gradientMap:Ie,color:16777215,vertexColors:!0,fog:!1},t||{}));return{plaster:i(),solid:i(),gold:i({emissive:0}),cloth:i({side:me}),emis:new Pe({color:16777215,vertexColors:!0,fog:!0})}}var xu=(i,t,e)=>{i.r+=t.r*e,i.g+=t.g*e,i.b+=t.b*e},ep=new pt,np=new pt(1,.8,.5),VS=new pt(1,.72,.3);function ux(i,t,e){let n=i.userData.cas;if(!n||!n.cw)return;let s=n.mats,r=n.cw.x-F.px,o=n.cw.z-F.pz,a=Math.hypot(r,o),l=Be(70,640,a)*.8;ep.copy(At.fog.color);let c=1-l;for(let p of[s.plaster,s.solid,s.cloth])p.color.setScalar(1-l),p.emissive.copy(ep).multiplyScalar(l);xu(s.plaster.emissive,np,t*.34*c),xu(s.solid.emissive,np,t*.1*c),xu(s.cloth.emissive,np,t*.22*c),s.gold.color.setScalar(1-l),s.gold.emissive.copy(ep).multiplyScalar(l),xu(s.gold.emissive,VS,(.14+.35*t)*c);let h=.3+.7*t;s.emis.color.setRGB(h,h*.95,h*.9);let u=performance.now(),f=Math.exp(-Math.max(0,u-(ae.hitT||0))/160);for(let p of n.drums){let g=1+.05*f;p.scale.set(g,g,1)}}function dx(i){let t=WS(i);return t.userData.job?t:fu(t)}function WS(i){let t=je(i),e=xn(t),n=Je(i),s=new Qt,r=be(t),o=n===6||tt(i,9)>.5?1:-1;s.position.set(ie(t),0,-t),s.rotation.y=-e;let a=(p,g)=>{let x=-e;return Zn(ie(t)+p*Math.cos(x)+g*Math.sin(x),t-(-p*Math.sin(x)+g*Math.cos(x)))},l=13199183,c=11569004,h=8018508,u=zi.c,f=8368266;if(n===0){let p=r*2+12,g=18,x=11880250,d=10329242,m=M=>3.4+1.7*(1-M*M);for(let M=0;M<g;M++){let w=(M+.5)/g*2-1,v=w*p/2,T=m(w),R=Xt(s,p/g+.4,.34,4.2,c,v,T,0,{map:Ye("plank")});R.rotation.z=-w*.4,Xt(s,.07,.34,4.3,h,v-p/g/2,T,0).rotation.z=-w*.4}for(let M of[-1.7,1.7])for(let w=0;w<g;w++){let v=(w+.5)/g*2-1,T=v*p/2,R=Xt(s,p/g+.5,.4,.3,7293498,T,m(v)-.4,M);R.rotation.z=-v*.4}for(let M of[-2,2]){for(let w=0;w<=g;w++){let v=w/g*2-1,T=v*p/2,R=m(v);Xt(s,.18,1.5,.18,x,T,R+.95,M);let P=new K(new pe(.16,8,6),qt(14264410));if(P.position.set(T,R+1.8,M),s.add(P),w%3===0){let I=new K(new Le(.22,.22,.45,8),new Pe({color:16767392}));I.position.set(T,R+2.35,M),s.add(I);let D=new K(new Oe(.3,.2,8),qt(x));D.position.set(T,R+2.68,M),s.add(D),we(s,16762746,3,T,R+2.35,M,.8)}}for(let w=0;w<g;w++){let v=(w+.5)/g*2-1,T=v*p/2,R=m(v),P=Xt(s,p/g+.2,.14,.14,x,T,R+1.5,M);P.rotation.z=-v*.4;let I=Xt(s,p/g+.2,.1,.1,x,T,R+.7,M);I.rotation.z=-v*.4}}let y=m(0);for(let[M,w]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])Ve(s,.22,.26,4.2,x,M,y+2.1,w,8);let b=new K(new Oe(4.6,2.4,4),qt(5982799));b.rotation.y=Math.PI/4,b.position.y=y+5.4,b.scale.set(1,1,.8),s.add(b),Xt(s,6.4,.3,.3,14264410,0,y+4.35,-1.8),Xt(s,6.4,.3,.3,14264410,0,y+4.35,1.8);let _=new K(new pe(.4,10,8),new Pe({color:16764810}));_.position.set(0,y+3.6,0),s.add(_),we(s,16762746,6,0,y+3.6,0,.9);let S=[15245466,15913098,10274736,10466268];for(let M=0;M<12;M++){let w=(M+.5)/12*2-1,v=w*(p/2-2),T=m(w)+2.7+Math.sin(M*1.7)*.06,R=new K(new an(.5,.7),qt(S[M%4],{side:me}));R.position.set(v,T,0),R.rotation.set(0,0,Math.PI),s.add(R)}Xt(s,p-4,.04,.04,7293498,0,m(0)+3.1,0).scale.y=1,[-1,1].forEach(M=>{let w=M*(p/2+.6);Xt(s,3.4,5.5,5,d,w,.3,0,{map:Ye("stone")}),Xt(s,3.6,.35,5.3,8223610,w,3.2,0);for(let R=0;R<3;R++)Xt(s,1.2,.3,4.2,d,M*(p/2+2.6+R*1.1),.2+R*0,0).position.y=2.2-R*.8;let v=new K(new pe(.5,8,6),qt(12039082));v.scale.set(.9,1.1,1),v.position.set(w,3.9,2.2),s.add(v);let T=v.clone();T.position.z=-2.2,s.add(T)}),[-.28,.28].forEach(M=>{Xt(s,1.8,5.2,4,d,M*p,.4,0,{map:Ye("stone")})})}else if(n===1)[-1,1].forEach(p=>{Ve(s,.32,.38,7,l,p*3.6,2,0,10)}),Xt(s,10.5,.5,1,l,0,5.7,0),Xt(s,11.8,.35,1.3,5982794,0,6.15,0),Xt(s,8,.28,.5,l,0,4.8,0),we(s,16762746,3,0,4.2,0,.6);else if(n===2){let p=(d,m,y,b,_,S,M,w)=>{let v=a(m,y);d.position.set(m,v-.2,y),d.rotation.y=w,s.add(d),Xt(d,b,S,_,15258550,0,S/2,0,{map:Ye("plank")}),Xt(d,b+.3,.35,_+.3,7293498,0,.1,0);let T=new K(new Oe(Math.max(b,_)*.82,S*.7,4),qt(M));T.rotation.y=Math.PI/4,T.position.y=S+S*.3,T.scale.set(b/Math.max(b,_),1,_/Math.max(b,_)),d.add(T);let R=new Pe({color:16769184}),P=Xt(d,.9,.9,.12,16769184,-b*.22,S*.55,_/2+.02);P.material=R;let I=Xt(d,.9,.9,.12,16769184,b*.22,S*.55,_/2+.02);I.material=R,Xt(d,.8,1.5,.14,8014394,0,.85,_/2+.04),we(d,16762746,4.2,-b*.22,S*.55,_/2+.6,.85),we(d,16762746,4.2,b*.22,S*.55,_/2+.6,.85);let D=Xt(d,.7,1.6,.7,9075314,b*.25,S+1.1,-_*.2),C=ii(16777215,3);C.material.blending=Bi,C.material.opacity=.3,C.position.set(b*.25,S+2.8,-_*.2),d.add(C);let U=new K(new pe(.22,8,6),qt(14245962,{emissive:8006170}));U.position.set(b/2-.2,S*.78,_/2+.5),d.add(U),we(d,16751210,2.4,b/2-.2,S*.78,_/2+.5,.8)},g=[11759722,9398879,11042906,8219250],x=0;for(let d of[-1,1])for(let m=0;m<7;m++){let y=-26+m*8.5+tt(i,m+d*9)*3,b=r+7+tt(i,m+30+d)*6+m%2*5,_=4+tt(i,m+50)*2.5,S=3.6+tt(i,m+60)*2,M=2.6+tt(i,m+70)*1.6;p(new Qt,d*b,y,_,S,M,g[(m+x)%4],d>0?-Math.PI/2:Math.PI/2),x++}for(let[d,m]of[[-1,-10],[1,6],[-1,18]]){let y=new Qt;y.position.set(d*(r-3.2),.35,m),s.add(y),Xt(y,8,.25,2.2,11569004,d*-0+0,0,0,{map:Ye("plank")}).position.x=d*4;for(let S of[0,3,6.4])for(let M of[-1,1])Ve(y,.1,.12,1.8,7293498,d*S+0,.2,M,5);let b=new K(new pe(.26,8,6),new Pe({color:16766362}));b.position.set(d*6.4,1.5,1),y.add(b),we(y,16762746,3.6,d*6.4,1.5,1,.9);let _=new K(new pe(1,10,6),qt(6965818));_.scale.set(.6,.3,1.9),_.position.set(d*-3.2,-.15,2.2),y.add(_)}for(let d=0;d<18;d++){let m=d/17,y=-24+m*48,b=d%2?1:-1,_=new K(new pe(.25,8,6),new Pe({color:d%3?16766362:16751226}));_.position.set(b*(r+4+Math.sin(d)*1.2),4.2+Math.sin(d*1.9)*.5,y),s.add(_),we(s,d%3?16762746:16751210,3.2,_.position.x,_.position.y,y,.85)}we(s,16756838,46,o*(r+11),6,0,.28);for(let d of[-1,1])Ve(s,.25,.3,6.5,11880250,d*(r-.5),2.6,-34,8);Xt(s,r*2,.4,.5,11880250,0,5.8,-34),we(s,16762746,4,-r*.5,5.2,-34,.9),we(s,16762746,4,r*.5,5.2,-34,.9),we(s,16762746,4,0,5.2,-34,.9)}else if(n===3){Lr(s,a,r,"\u685C",!1,"#d98aa6");for(let g=0;g<14;g++){let x=o*(r+4.5+tt(i,g)*15),d=(g-6.5)*4.1+tt(i,g+20)*2.4,m=a(x,d),y=new Qt,b=.9+tt(i,g+60)*.5;y.position.set(x,m,d),s.add(y),Ve(y,.26*b,.44*b,3.4*b,7294787,0,1.7*b,0,6);let _=Ve(y,.14*b,.2*b,2.2*b,7294787,.7*b,3.6*b,0,5);_.rotation.z=-.7;for(let[M,w,v,T,R]of[[0,4.5,0,2.7,u],[1.7,4,.6,1.9,zi.c2],[-1.5,4.2,-.8,2.1,u],[.4,5.5,-.4,1.6,16304598]]){let P=new K(new Mn(T*b*(.92+tt(i,g+M*7)*.2),1),qt(R));P.scale.y=.78,P.position.set(M*b,w*b,v*b),y.add(P)}let S=new K(new ui(2.6*b,9).rotateX(-Math.PI/2),qt(16173528,{side:me}));S.position.set(tt(i,g+9)*1.5-.7,.07,tt(i,g+19)*1.5-.7),y.add(S),g%3===0&&we(y,16758475,7,0,4.6*b,0,.22)}for(let g of[-1,1]){let x=Go(s,a,o*(r+3.4),g*10+2,1.1);x.position.y=a(o*(r+3.4),g*10+2)}let p=Xt(s,3.2,.28,.9,11880250,o*(r+7.5),a(o*(r+7.5),-3)+.55,-3);Xt(s,3.2,.7,.12,11880250,o*(r+7.5),a(o*(r+7.5),-3)+1,-3.5)}else if(n===4){Lr(s,a,r,"\u9DFA",!1,"#5f8aa8");let p=900,g=new Pn(Nf,Es.material,p);g.frustumCulled=!1;let x=0;for(let m=0;m<p;m++){let y=m%2?1:-1,b=y*(r-5.5+tt(i,m)*13),_=(tt(i,m+50)-.5)*84;if(Math.abs(b)<r-5.8)continue;let S=1.1+tt(i,m+70)*1.5,M=Math.max(-.25,a(b,_)-.15);Sn.set(b,M,_),bn.setFromAxisAngle(Ts,tt(i,m+90)*6.28),un.set(S,S*(1+tt(i,m+30)*.9),S),Qe.compose(Sn,bn,un),g.setMatrixAt(x,Qe),g.setColorAt(x,$e.set($h[tt(i,m+4)*4|0])),x++}g.count=x,g.userData.keep=!0,s.add(g),s.userData.hp=[];for(let m=0;m<20;m++){let y=m%2?1:-1,b=m%3!==0,_=y*(r-(b?2.2+tt(i,m)*3.5:-1.5+tt(i,m)*2)),S=(tt(i,m+10)-.5)*70,M=.95+tt(i,m+5)*.5,w=tt(i,m+3)*6.28,v=b?-.12:a(_,S)-.1;if(m>=12){s.userData.hp.push([_,v,S,w,M,{gone:0}]);continue}let T=uu(M,tt(i,m)*6.28);T.position.set(_,v,S),T.rotation.y=w,s.add(T)}let d=ii(16777215,10);d.material.blending=Bi,d.material.opacity=.25,d.position.set(0,1.2,0),s.add(d)}else if(n===5){Lr(s,a,r,"\u9418",!0,"#9a3a30");let p=o*(r+19),g=a(p,0),x=new Qt;x.position.set(p,g,0),x.rotation.y=-o*Math.PI/2,s.add(x);let d=10131604;Xt(x,17,3,15,d,0,-.5,0),Xt(x,15,.5,13,11841964,0,1.25,0),Xt(x,13,.5,11,12763064,0,1.75,0);for(let S=0;S<7;S++)Xt(x,6,.4,1.1,d,0,1.5-S*.28,7.9+S*.95);for(let[S,M]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])Ve(x,.34,.38,5,12730163,S,4.6,M,8);Xt(x,9.4,.5,.7,12730163,0,7.3,3.4),Xt(x,9.4,.5,.7,12730163,0,7.3,-3.4),Xt(x,.7,.5,7.2,12730163,-4.2,7.3,0),Xt(x,.7,.5,7.2,12730163,4.2,7.3,0),Xt(x,9,.35,.6,14264410,0,6.7,3.4),Xt(x,9,.2,7,8018508,0,2.15,0),hu(x,9.6,2.7,9.1,4999770),Xt(x,5.2,1.5,5.2,15721421,0,8.7,0),Xt(x,5.5,.2,5.5,12730163,0,7.9,0),hu(x,5.3,2,11.2,4144461),Ve(x,.1,.1,1.6,14264410,0,13,0,6);let m=new K(new pe(.34,8,6),qt(14264410,{emissive:5913104}));m.position.y=12.3,x.add(m),Xt(x,.5,.5,5,4864562,0,6.8,0),Ve(x,.05,.05,1.1,3811874,0,6.1,0,4);let y=Ve(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});Ve(x,.8,.8,.12,14264410,0,5.6,0,12),we(x,16762746,5,0,4.6,0,.6);let b=Ve(x,.2,.2,4,6965818,0,3.3,2.6,6);b.rotation.x=Math.PI/2,b.position.set(0,3.5,2.6),Ve(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let S of[-4,4])for(let M of[3.4,-3.4]){let w=new K(new pe(.34,8,6),qt(14245962,{emissive:9054746}));w.scale.y=1.3,w.position.set(S*1.12,6.2,M*1.05),x.add(w),we(x,16751210,3,S*1.12,6.2,M*1.05,.85)}for(let S of[-3.4,3.4])for(let M of[10.4,14.5])Go(x,()=>0,S,M,1.15).position.y=-.1;for(let S=0;S<5;S++)Xt(x,2.6,.12,1.6,d,0,-.3,10+S*2.1);qg(x,0,-.4,17.5,1.1,12730163);let _=Wg(x,0,1.5,-3.5);_.position.set(o>0?-11.5:11.5,1.5,-2.5),_.scale.setScalar(1.1)}else if(n===6){let p=o*(r+3.6),g=a(p,0),x=new Qt;x.position.set(p,g,0),s.add(x),Lr(s,a,r,"\u6EDD",!1,"#3f7a8a");let d=M=>qt(M);for(let M=0;M<22;M++){let w=3+tt(i,M)*3.5,v=o*(7.8+tt(i,M+5)*9),T=tt(i,M+9)*15+(v*o<8?3:0),R=(tt(i,M+13)-.5)*17,P=new K(new Mn(w,1),d(M%3?8030846:7114616));P.position.set(v,T,R),P.scale.y=1.2,x.add(P);let I=new K(new Mn(w*.75,1),d(8369002));I.position.set(v,T+w*.65,R),I.scale.set(1.05,.45,1.05),x.add(I)}for(let M=0;M<10;M++){let w=1+tt(i,M+60)*1.2,v=new K(new Mn(w,0),d(8030846));v.position.set(-o*(.5+tt(i,M+70)*3),w*.4,(tt(i,M+80)-.5)*12),x.add(v)}let m=new K(new an(7,19,1,1),er);m.position.set(-o*.5,9.6,0),m.rotation.y=Math.PI/2,x.add(m);let y=new K(new an(3,14,1,1),er);y.position.set(-o*.7,7,-5.6),y.rotation.y=Math.PI/2,y.rotation.z=.04,x.add(y);let b=new K(new ui(6.5,24).rotateX(-Math.PI/2),new Pe({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));b.position.set(-o*3.6,.1,0),x.add(b);let _=new K(new an(3.4,4.6).rotateX(-Math.PI/2),er);_.rotation.y=o>0?Math.PI/2:-Math.PI/2,_.position.set(-o*3.4,.12,0),x.add(_);for(let M=0;M<6;M++){let w=ii(16777215,5+tt(i,M)*3);w.material.blending=Bi,w.material.opacity=.5,w.position.set(-o*(1+tt(i,M+3)*4),.5+tt(i,M)*.8,(tt(i,M+9)-.5)*7),x.add(w)}let S=ii(16777215,26);S.material.blending=Bi,S.material.opacity=.5,S.position.set(-o*3,4,0),x.add(S)}else if(n===7){Lr(s,a,r,"\u8336",!0,"#a9453a");let p=o*(r-3),g=new Qt;g.position.set(p,0,0),s.add(g);for(let m of[-2.4,2.4])for(let y of[-2,2])Ve(g,.12,.12,3,h,m,-.2,y,5);Xt(g,6,.3,5,c,0,1.3,0),Xt(g,4.6,2.4,3.6,15258550,0,2.6,0),Xt(g,4.8,.2,3.8,5982794,0,3.9,0),Xt(g,4.7,.15,3.7,5982794,0,1.45,0);let x=new K(new Oe(4.6,2,4),qt(9398879));x.rotation.y=Math.PI/4,x.position.y=4.8,g.add(x),Xt(g,1.2,1.1,.1,16769184,0,2.7,1.85).material=new Pe({color:16769184}),we(g,16762746,4,0,2.7,2.1,.9);for(let m of[-.55,.55]){let y=new K(new an(1,1.4),new ye({gradientMap:Ie,map:jf("\u8336","#2f3f6b","#ffffff",128,160),side:me}));y.position.set(m,2.9,1.93),g.add(y)}for(let m of[-2.4,2.4]){let y=new K(new pe(.3,8,6),qt(14245962,{emissive:8006170}));y.scale.y=1.3,y.position.set(m,3.2,2.3),g.add(y),we(g,16751210,2.6,m,3.2,2.3,.8)}Ve(g,.05,.05,2.6,c,3.4,2.2,3.2,5);let d=new K(new Oe(1.7,.7,12),qt(12730163));d.position.set(3.4,3.6,3.2),g.add(d),Xt(g,1.8,.15,.6,c,3.4,1.5,3.2),Xt(g,1.8,.05,.62,12730163,3.4,1.6,3.2);for(let m of[-1,1]){let y=Go(s,a,p+m*6,5,1);y.position.y=a(p+m*6,5)}}else if(n===8){Lr(s,a,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let p of[-1,1])for(let g=0;g<6;g++)Go(s,a,p*(r+3+tt(i,g)*2.5),-45+g*18+tt(i,g+3)*4);for(let p=0;p<12;p++){let g=p%2?1:-1,x=g*(r+4+tt(i,p)*12),d=(tt(i,p+20)-.5)*110,m=new K(new an(3.6,22),new Pe({map:jn,color:16773296,transparent:!0,opacity:.14,blending:kn,depthWrite:!1,side:me}));m.position.set(x,a(x,d)+10,d),m.rotation.set(0,tt(i,p+9)*3,g*.25),s.add(m)}}else if(n===10)s.userData.job=hx(s,i,{gy:a,hwv:r,side:o,s:t,a:e});else for(let p=0;p<46;p++){let g=(tt(i,p)-.5)*r*1.5,x=(tt(i,p+40)-.5)*34,d=new K(new ui(.8+tt(i,p+7)*.5,10).rotateX(-Math.PI/2),qt(8372106,{side:me}));if(d.position.set(g,.05,x),s.add(d),p%4===0){let m=new K(new Mn(.34,0),qt(16098493,{emissive:9058896}));m.scale.y=1.2,m.position.set(g,.3,x),s.add(m),we(s,16752576,1.8,g,.5,x,.35)}}return s}var nr=new N,op=new N,ap=new gn,qS=matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;function fx(i){if(lt.cine||qS||lt.X.photo)return;let t=ri.get(i);if(!t)return;let e=je(i),n=be(e),s=Je(i),r=s===6||tt(i,9)>.5?1:-1,o=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0],[r*(n+80),36,r*12,1]][s],a=o[3]===1,l=a?Math.abs(o[0])+n*.3:[46,30,52,0,40,0,0,0,30,30,0][s];lt.cine={k:i,g:t,t:0,dur:s===10?17:11.5,fx:o[0],fy:o[1],fz:o[2],sd:r,sided:a,R:Math.max(30,l),h:[10,6,12,10,8,13,10,7,6,9,-26][s]}}function px(i){if(!lt.cine){lt.cineW=0;return}lt.cine.t+=i,!lt.cine.snapped&&lt.cine.t>5.4&&(lt.cine.snapped=!0,lt.X.snap(Je(lt.cine.k)));let t=lt.cine,e=Mf(0,2.6,t.t)*(1-Mf(t.dur-2.6,t.dur,t.t));if(lt.cineW=e,t.t>=t.dur){lt.cine=null,lt.cineW=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),o=t.sided?-t.sd:0,a=t.sided?0:1,l=o*s+a*r,c=-o*r+a*s;nr.set(t.fx+l*t.R,t.fy+t.h,t.fz+c*t.R),t.g.localToWorld(nr);let h=Zn(nr.x,-nr.z);nr.y=Math.max(nr.y,h+3),op.set(t.fx,t.fy,t.fz),t.g.localToWorld(op),ap.position.copy(nr),ap.lookAt(op),pn.position.lerp(nr,e),pn.quaternion.slerp(ap.quaternion,e)}var ir=0,mx=new fn,gx=new fn,lp=new gn,cp=new N,Mu=new N,bu=new N,xx=We("cam");function Nr(i){lt.camMode=i,xx.textContent=i?"Vista 3\xAA":"Vista 1\xAA";try{localStorage.setItem("rio3d-cam",i)}catch{}}xx.onclick=()=>Nr(1-lt.camMode);addEventListener("keydown",i=>{i.code==="KeyC"&&Nr(1-lt.camMode)});try{Nr(+localStorage.getItem("rio3d-cam")||0)}catch{}function yx(i,t){let e=Math.sin(F.t*.5)*.01;pn.position.set(F.px,1.18+t,F.pz).addScaledVector(new N(Math.sin(F.psi),0,-Math.cos(F.psi)),-.15),F.pitch+=(-tr.pitch*.22-F.pitch)*2*i,pn.rotation.set(F.pitch-.06,-F.psi+e,-F.steer*.02,"YXZ"),lt.camK+=((lt.camMode?1:0)-lt.camK)*Math.min(1,i*2.2),lt.camK<.01&&(ir=F.psi);{let n=innerWidth/innerHeight<1?82:68,s=n*(1-.3*lt.camK*lt.camK*(3-2*lt.camK));Math.abs(pn.fov-s)>.05&&(pn.fov=s,pn.updateProjectionMatrix())}if(lt.camK>.003){let n=lt.camK*lt.camK*(3-2*lt.camK);gx.copy(pn.quaternion),ir+=(F.psi-ir)*Math.min(1,i*1.6);let s=ir+.3;bu.set(Math.sin(s),0,-Math.cos(s)),cp.set(F.px,6.2+t,F.pz).addScaledVector(bu,-10.8),bu.set(Math.sin(ir),0,-Math.cos(ir)),Mu.set(F.px,.3,F.pz).addScaledVector(bu,6.5),Mu.x+=Math.cos(ir)*1.9,Mu.z+=Math.sin(ir)*1.9,lp.position.copy(cp),lp.lookAt(Mu),mx.copy(lp.quaternion),pn.position.lerp(cp,n),pn.quaternion.copy(gx).slerp(mx,n)}}var Su=3120762,hp=4176271,sr=14989394,_x=12730163,Tl=15986400;function vx(i){let t=Uo(i),e=xn(t),n=tt(i,9)>.5?1:-1,s=be(t),r=new Qt;r.position.set(ie(t),0,-t),r.rotation.y=-e;let o=(D,C)=>{let U=-e;return Zn(ie(t)+D*Math.cos(U)+C*Math.sin(U),t-(-D*Math.sin(U)+C*Math.cos(U)))},a=n*(s+14),l=Math.max(o(a,0),.4),c=new Qt;c.position.set(a,l,0),c.scale.setScalar(1.5),r.add(c);let h=new xi,u=new xi,f=new xi,p=new xi,g={S:h,E:f,h:c};h.boxB(11,1.1,11,V.stone,0,-1,0).boxB(9,1.2,9,Rn(V.stone,1.08),0,.1,0).boxB(7,1.3,7,Rn(V.stone,.95),0,1.3,0).boxB(6.2,.3,6.2,V.gravel,0,2.6,0),u.boxB(7.4,.2,7.4,sr,0,2.55,0,!1);for(let[D,C]of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]])_u(g,D,.2,C,1);for(let D of[-1,1])for(let C=0;C<4;C++)h.boxB(.5,.5,.5,Rn(V.stone,.9),D*5.7,.1+0,-3.5+C*2.3,!1);let x=2.9,d=new bo([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13,2.4],[0,12.5,4.2]].map(D=>new N(D[0],D[1]+x-.4,D[2]))),m=64,y=d.getPoints(m),b=[],_=new N(0,1,0),S=D=>.2+.98*Math.pow(Math.sin(Math.min(1,D*1.5)*Math.PI/2),.7)*(1-.32*D);for(let D=0;D<=m;D++){let C=D/m,U=y[D],G=d.getTangent(C),O=new N().crossVectors(_,G);O.lengthSq()<1e-4&&O.set(1,0,0),O.normalize();let $=new N().crossVectors(G,O).normalize(),H=S(C),q=[];for(let J=0;J<8;J++){let mt=J/8*6.2832,wt=Math.cos(mt),le=Math.sin(mt);q.push([U.x+(O.x*wt+$.x*le)*H,U.y+(O.y*wt+$.y*le)*H,U.z+(O.z*wt+$.z*le)*H])}b.push(q)}h.loft(b,(D,C)=>D>=5&&D<=7?Rn(sr,.95+.1*(C%2)):Rn(C%2?hp:Su,.92+.12*((C>>1)%2)));for(let D=3;D<m-4;D+=2){let C=D/m,U=y[D],G=d.getTangent(C),O=S(C),$=.35+O*.9;h.at(U.x,U.y+O*.95,U.z,Math.atan2(G.x,G.z),H=>{H.cyl(.2*$,0,1.5*$,4,D%4?_x:sr,0,0,0)},-Math.atan2(G.y,Math.hypot(G.x,G.z))*.6)}for(let[D,C]of[[22,1],[22,-1],[40,1],[40,-1]]){let U=y[D],G=S(D/m),O=[U.x+C*(G+.6),U.y-G*.8,U.z+.2],$=[U.x+C*(G+1.6),Math.max(x,U.y-G*.8-2.2),U.z+.6];As(h,[U.x+C*G*.7,U.y-G*.4,U.z],O,.38,Su),As(h,O,$,.3,hp);for(let H=-1;H<=1;H++)h.at($[0]+C*.15,$[1],$[2]+H*.22,0,q=>q.cyl(.09,0,.55,4,Tl,0,-.1,0),0,0,C*-1.1)}{let D=y[40],C=S(40/m);f.ball(.55,16762986,D.x+(C+1.7),Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,1,1,1,1),we(c,16766354,6,D.x+C+1.7,Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,.9)}{let D=y[0];for(let C=0;C<5;C++)h.at(D.x,D.y,D.z-.2,(C-2)*.28,U=>U.cyl(.3,0,1.8,4,C%2?_x:sr,0,0,0),-1,0,0)}let M=y[m],w=d.getTangent(1);h.at(M.x,M.y,M.z,0,D=>{D.ball(1.15,hp,0,0,.3,1,.92,1.25,1).boxB(1.15,.62,1.9,Su,0,-.5,1.1).box(1.3,.3,1.2,sr,0,.45,.9),D.at(0,-.88,1.05,0,C=>C.box(1,.32,1.8,Rn(Su,.9),0,0,.5),.38);for(let C of[-1,1]){for(let U=0;U<3;U++)D.cyl(.09,0,.45,4,Tl,C*.44,-.45,1.4+U*.5),D.at(C*.44,-.8,1.4+U*.5,0,G=>G.cyl(.08,0,.38,4,Tl,0,0,0),Math.PI);D.ball(.16,V.black,C*.28,.05,2.12,1,1,1,0),D.at(C*.5,.85,-.1,0,U=>{U.cyl(.24,.06,1.5,5,sr,0,0,0)},-.95,0,C*.2),D.at(C*.62,1.65,-1.1,0,U=>{U.cyl(.07,0,1.1,5,sr,0,0,0)},-1.45,0,C*.25);for(let U=0;U<2;U++){let G=[C*.5,-.35,1.9];As(h,G,[C*(1.5+U*.5),-.5-U*.35,2.8],.06,Tl),As(h,[C*(1.5+U*.5),-.5-U*.35,2.8],[C*(2.6+U*.4),-1.6-U*.4,2],.05,Tl)}}f.box(.8,.16,1.45,16742954,0,-.62,1.5);for(let C of[-1,1])f.ball(.2,16769658,C*.58,.32,.95,1,1.1,.8,1)});for(let D=0;D<7;D++){let C=(D-3)*.28;p.at(M.x,M.y+.4,M.z-.6,0,U=>U.quad([-.35,0,0],[.35,0,0],[.5+C*.3,-1.2,-3.4-D*.1],[-.5+C*.3,-1.2,-3.4-D*.1],D%2?V.red:sr),0,0,C)}we(c,16753226,5.5,M.x,M.y-.5,M.z+1.7,.85),we(c,16769658,2.4,M.x-.6,M.y+.3,M.z+1.1,.8),we(c,16769658,2.4,M.x+.6,M.y+.3,M.z+1.1,.8);let v=D=>new ye(Object.assign({gradientMap:Ie,color:16777215,vertexColors:!0,fog:!0},D||{})),T=v(),R=v({emissive:2759680}),P=v({side:me}),I=new Pe({color:16777215,vertexColors:!0,fog:!0});return c.add(h.mesh(T),u.mesh(R),p.mesh(P),f.mesh(I)),r.userData.dragon={k:i,s:t,mouth:new N(a,l+(M.y-.5)*1.5,M.z*1.5+2.5),roared:!1},r.updateMatrixWorld(!0),r}var XS="rio-found-types",Mx=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],tR=Mx.map(i=>i[0]),eR=Mx.map(i=>i[1]),bx=()=>{let i=new Set;for(let t of["rio3d-found",XS])try{JSON.parse(localStorage.getItem(t)||"[]").forEach(e=>i.add(e))}catch{}return i};var Tx="rio-tasks",Tu=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]];var wx=()=>{try{return JSON.parse(localStorage.getItem(Tx)||"{}")}catch{return{}}};var YS=()=>bx().has(10);function Sx(i){i.add(Tu.map(t=>[t[0],t[1],t[2]])),i.add(Tu.map(t=>[t[3],t[4],t[5]])),i.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var ti,Vo,Eu,Rs=null,wl=0,up=0,Ax=0,Ex=!1,dp=null;function ZS(){ti=document.createElement("button"),ti.type="button",ti.style.cssText="position:fixed;left:50%;bottom:max(150px,calc(env(safe-area-inset-bottom) + 144px));transform:translateX(-50%);z-index:60;display:none;min-height:50px;max-width:min(90vw,420px);padding:10px 20px;border-radius:99px;border:1px solid #ffc77a;background:rgba(40,40,80,.88);color:#fbf1e0;font:600 .9rem/1.25 system-ui;cursor:pointer;overflow:hidden;touch-action:none",Vo=document.createElement("span"),Vo.style.cssText="position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,199,122,.35);pointer-events:none",Eu=document.createElement("span"),Eu.style.cssText="position:relative",ti.append(Vo,Eu),document.body.appendChild(ti);let i=e=>{Rs!=null&&(e.preventDefault(),wl=1,Ax=performance.now(),JS())},t=()=>{wl=0,Vo.style.width="0"};ti.addEventListener("pointerdown",i),ti.addEventListener("pointerup",t),ti.addEventListener("pointerleave",t),ti.addEventListener("pointercancel",t),ti.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Rx())})}function JS(){cancelAnimationFrame(up);let i=()=>{if(!wl)return;let t=Math.min(1,(performance.now()-Ax)/2200);if(Vo.style.width=t*100+"%",t>=1){wl=0,Rx();return}up=requestAnimationFrame(i)};up=requestAnimationFrame(i)}function Rx(){if(Rs==null)return;let i=wx();i[Rs]=1;try{localStorage.setItem(Tx,JSON.stringify(i))}catch{}let t=Rs;Rs=null,ti.style.display="none",Vo.style.width="0";try{dp&&dp(t)}catch{}try{UX.hap([10,50,10])}catch{}try{UX.say(UX.tr("Hecho. Un recuerdo m\xE1s para la caba\xF1a."))}catch{}}function Cx(i,t){if(!Ex){Ex=!0;try{Sx(window.UX)}catch{}}if(dp=t,!(i!=null&&Tu[i]&&YS()&&!wx()[i])){Rs!=null&&!wl&&(Rs=null,ti&&(ti.style.display="none"));return}Rs!==i&&(ti||ZS(),Rs=i,Eu.textContent=UX.tr(Tu[i][0])+" \xB7 "+UX.tr("Mant\xE9n pulsado para hacerlo"),ti.style.display="block")}var Wo=new Map;try{window.__dragons=Wo}catch{}function $S(i,t,e){for(let[n,s]of Wo){let r=s.userData.dragon.s;(r<i-140||r>i+380)&&(At.remove(s),Qf(s),Wo.delete(n))}for(let n=Math.max(0,t-1);n<=e+2;n++){if(Je(n)!==10||Wo.has(n))continue;let s=Uo(n);if(s<i-140||s>i+380)continue;let r=vx(n);Wo.set(n,r),At.add(r)}for(let[,n]of Wo){let s=n.userData.dragon;if(!s.roared&&i>s.s-60&&i<s.s+20){s.roared=!0;try{ae.roar()}catch{}oi("El drag\xF3n anuncia el Castillo de la Garza Blanca")}}}function Px(i){let t=Math.max(0,Math.floor((i-140)/Ti)),e=Math.floor((i+340)/Ti);$S(i,t,e);for(let[n,s]of ri)(n<t||n>e)&&(s.parent&&At.remove(s),Qf(s),ri.delete(n));for(let n=t;n<=e;n++){let s=ri.get(n);s||(s=dx(n),ri.set(n,s)),s.parent||At.add(s);{let r=Je(n);if(je(n)-i<(r===2?70:r===10?130:55)&&i-je(n)<25&&(!gi.has(r)||!lt.X.hasSnap(r)&&!Gf.has(r))){let o=!gi.has(r);if(gi.add(r),Gf.add(r),Dg.add(n),fx(n),o){oi("Descubriste: "+ki[r]);try{ae.chime(0,n%5)}catch{}Lg(),ru(i),lt.X.found(r)}}}}{let n=null;for(let s=t;s<=e;s++)if(Math.abs(je(s)-i)<60){n=Je(s);break}Cx(n,()=>{try{ae.chime(0,2)}catch{}})}for(let[,n]of ri)if(n.userData.job){let s=performance.now(),r;do r=n.userData.job.next();while(!r.done&&performance.now()-s<5);r.done&&(n.userData.job=null,fu(n))}else n.userData.cas&&ux(n,Se.night,.016);for(let n of Pr)n.material.opacity=n.userData.base*(.3+.7*lt.glowK);du.uniforms.k.value=lt.glowK,er.uniforms.t.value=F.t,er.uniforms.fogCol.value.copy(At.fog.color);for(let n of as)n.nk?n.nk.rotation.x=Math.sin(F.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(F.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(F.t*1.1+n.ph)*.12}var pp=new Pe({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:me}),qo=$n,Ix=new Float32Array(qo*4*2*3),Lx=new Float32Array(qo*4*2*4),Xo=new ue;Xo.setAttribute("position",new Kt(Ix,3));Xo.setAttribute("color",new Kt(Lx,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<qo-1;e++){let n=(t*qo+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}Xo.setIndex(i)}var Al=new K(Xo,pp);Al.frustumCulled=!1;Al.renderOrder=1;At.add(Al);function Dx(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<qo;s++){let r=t+s*Kn,o=be(r)-1+(rn(r*.08,e*9)-.5)*.9,a=.9+rn(r*.2,e)*.9,l=ie(r)+n*o,c=-r,h=.25+.55*rn(r*.11+e*30,5),u=(e*qo+s)*4,f=[l-n*a*1.4,l-n*a*.4,l+n*a*.5,l+n*a*1.5],p=[0,h,h*.6,0];for(let g=0;g<4;g++)Ix.set([f[g],.05,c],(u+g)*3),Lx.set([1,1,1,p[g]],(u+g)*4)}}Xo.attributes.position.needsUpdate=Xo.attributes.color.needsUpdate=!0}var Nx=36,mp=[];for(let i=0;i<Nx;i++){let t=new K(new ui(.5,20).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},At.add(t),mp.push(t)}var KS=0,fp=0;function Au(i,t,e,n,s){let r=mp[KS++%Nx];r.position.set(i,.045,t),r.userData={age:0,vx:e,vz:n,sc:s},r.scale.setScalar(.4)}var Ru=60,gp=new ue,wu=new Float32Array(Ru*3),xp=[];for(let i=0;i<Ru;i++)xp.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});gp.setAttribute("position",new Kt(wu,3));var jS=new hi({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),Ux=new bi(gp,jS);Ux.frustumCulled=!1;At.add(Ux);var QS=0;function Cu(i,t,e,n){for(let s=0;s<n;s++){let r=xp[QS++%Ru];r.l=1,r.x=i,r.y=t,r.z=e;let o=Math.random()*6.28,a=.8+Math.random()*1.4;r.vx=Math.cos(o)*a,r.vz=Math.sin(o)*a,r.vy=2+Math.random()*2.2}si(i,e)}function Fx(i){for(let t=0;t<Ru;t++){let e=xp[t];e.l>0&&(e.l-=i*1.4,e.vy-=9*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,e.y<0&&(e.l=0)),wu[t*3]=e.l>0?e.x:0,wu[t*3+1]=e.l>0?e.y:-50,wu[t*3+2]=e.z}if(gp.attributes.position.needsUpdate=!0,fp-=i,fp<=0&&lt.started){fp=.11;let t=Math.min(F.v,5),e=Math.cos(F.psi),n=Math.sin(F.psi),s=F.px-Math.sin(F.psi)*1.5,r=F.pz+Math.cos(F.psi)*1.5;for(let o of[-1,1])Au(s+e*.5*o,r+n*.5*o,e*o*.5,n*o*.5,1)}mp.forEach(t=>{let e=t.userData;if(e.age>=3.2){t.material.opacity=0;return}e.age+=i;let n=e.age/3.2;t.position.x+=(e.vx||0)*i,t.position.z+=(e.vz||0)*i,t.scale.setScalar((.4+n*2.6)*(e.sc||1)),t.material.opacity=.38*(1-n)*(1-n)})}var tE=5,Ur=[],Bx=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function eE(i){let t=new Qt,e=Bx[i%Bx.length],n=new K(new pe(.5,12,8),qt(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new K(new pe(.5,10,6),qt(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new Qt;r.position.z=.45,t.add(r);let o=new K(new Oe(.22,.5,4),qt(e[0],{side:me}));o.rotation.x=-Math.PI/2,o.scale.set(1.2,1,.18),o.position.z=.22,r.add(o);let a=new K(new Oe(.08,.3,3),qt(e[0]));return a.position.set(0,.2,.05),a.rotation.x=-.3,t.add(a),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},At.add(t),t}for(let i=0;i<tE;i++)Ur.push(eE(i));function kx(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(be(e)-3);i.position.set(ie(e)+n,-.05,-e),i.userData.st=0,i.userData.hd=xn(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}Ur.forEach(i=>kx(i,30+Math.random()*60));function Gx(i,t){for(let e of Ur){let n=e.userData;n.t+=i;let s=e.position.z-F.pz,r=-e.position.z;if(r<t-12||r>t+120){kx(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let o=e.position.x-ie(r),a=be(r)-3;Math.abs(o)>a&&(n.hd+=(xn(r)+(o>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd+Math.PI,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,Cu(e.position.x,.1,e.position.z,5),ae.plop((e.position.x-F.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&Au(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let o=.95,a=n.j/o,l=Math.sin(Math.PI*a)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+l;let c=Math.cos(Math.PI*a)*1.25*Math.PI/o;e.rotation.set(0,-n.hd+Math.PI,0),e.rotateX(Math.atan2(c,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=o&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd+Math.PI,0),Cu(e.position.x,.1,e.position.z,9),ae.plop((e.position.x-F.px)/25))}}Fx(i)}var Vx=[],Fr=[];function nE(i){let t=new Qt,e=i%3!==2,n=e?16184302:9279656,s=e?15262424:7305868,r=new K(new pe(.28,10,8),qt(n));r.scale.set(.7,.7,1.8),t.add(r);let o=new K(new Le(.045,.06,.5,6),qt(n));o.rotation.x=1.15,o.position.set(0,.1,-.5),t.add(o);let a=new K(new pe(.09,8,6),qt(n));a.position.set(0,.3,-.72),t.add(a);let l=new K(new Oe(.035,.3,5),qt(15245898));l.rotation.x=-Math.PI/2,l.position.set(0,.3,-.95),t.add(l);let c=[-1,1].map(u=>{let f=new Qt;f.position.set(u*.12,.08,-.05),t.add(f);let p=new K(new In(1.35,.03,.62),qt(s));p.position.x=u*.68,f.add(p);let g=new K(new In(.5,.03,.4),qt(e?4934485:5857391));return g.position.set(u*1.5,0,.05),f.add(g),f}),h=new K(new Oe(.12,.45,4),qt(n));return h.rotation.x=Math.PI/2,h.position.z=.65,t.add(h),t.scale.setScalar(1.5),t.userData={wings:c,ph:Math.random()*6,fl:0,sp:5+Math.random()*2.5,hd:0,h:7+Math.random()*7,off:(Math.random()-.5)*20},At.add(t),t}function iE(i){let t=new Qt,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new K(new Le(.025,.018,.5,6),qt(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new K(new pe(.055,8,6),qt(n));r.position.z=-.27,t.add(r);let o=new Pe({color:15398655,transparent:!0,opacity:.5,side:me,depthWrite:!1}),a=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([l,c])=>{let h=new Qt;h.position.set(0,.02,c),t.add(h);let u=new K(new an(.38,.1).rotateX(-Math.PI/2),o);u.position.x=l*.2,h.add(u),a.push([h,l])}),t.scale.setScalar(1.8),t.userData={wings:a,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},At.add(t),t}for(let i=0;i<8;i++)Fr.push(iE(i));var Br=[];function sE(i){let t=new Qt,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new K(new pe(.3,10,8),qt(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new K(new Oe(.12,.3,5),qt(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let o=new Qt;o.position.set(0,.3,-.25),t.add(o);let a=new K(new Le(.06,.08,.34,6),qt(e));a.position.y=.15,o.add(a);let l=new K(new pe(.1,8,6),qt(i%2?3486766:e));l.position.set(0,.34,-.03),o.add(l);let c=new K(new Oe(.04,.16,5),qt(15245898));return c.rotation.x=-Math.PI/2,c.position.set(0,.33,-.15),o.add(c),t.scale.setScalar(1.15),t.userData={neck:o,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},At.add(t),t}function yp(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(be(e)-6);i.position.set(ie(e)+n,0,-e),i.userData.hd=xn(e)+(Math.random()-.5)*2}for(let i=0;i<4;i++){let t=sE(i);i>=2&&t.scale.setScalar(.72),Br.push(t)}Br.forEach(i=>yp(i,30));function Wx(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(be(e)+2);i.position.set(ie(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}Fr.forEach(i=>Wx(i,30));function qx(i,t){let e=1-Fe(Se.night*1.5,0,1)*1,n=e>.15&&cn.rain<.6;for(let s of Br){s.visible=e>.1;let r=s.userData;r.t+=i;let o=-s.position.z,a=o-t;if(!r.follow&&!(r.flee>0)&&(a<-14||a>110)){yp(s,t);continue}if(r.follow&&a<-70){r.follow=0,yp(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&!r.follow&&!(r.flee>0)&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let l=Math.sin(Math.PI*Fe(1-r.dip/1.3));r.neck.rotation.x=1.2*l,s.rotation.x=.9*l*.5,s.position.y=-.05*l,l>.9&&!r.rip&&(r.rip=!0,si(s.position.x,s.position.z-.4),ae.plop((s.position.x-F.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let l=s.position.x-ie(o);Math.abs(l)>be(o)-5&&(r.hd+=(xn(o)+(l>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*(r.spd||.35)*i,s.position.z-=Math.cos(r.hd)*(r.spd||.35)*i}s.rotation.y=-r.hd+Math.PI}for(let s of Fr){if(s.visible=n,!n)continue;let r=s.userData;if(r.t-=i,aE(s,r,i))continue;let o=-s.position.z-t;if(o<-12||o>90){Wx(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let f=-s.position.z+(Math.random()-.5)*8,p=s.position.x-ie(f);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let g=r.tx-ie(-r.tz);Math.abs(g)>be(-r.tz)+3&&(r.tx=ie(-r.tz)+Math.sign(g)*(be(-r.tz)+1))}let a=Math.min(1,i*3.2),l=s.position.x,c=s.position.z;s.position.x+=(r.tx-s.position.x)*a,s.position.z+=(r.tz-s.position.z)*a,s.position.y+=(r.ty-s.position.y)*a+Math.sin(F.t*9+r.ph)*.004;let h=s.position.x-l,u=s.position.z-c;Math.hypot(h,u)>.002&&(s.rotation.y=Math.atan2(-h,-u)),s.rotation.x=-Math.min(.5,Math.hypot(h,u)*20)*.5,r.wings.forEach(([f,p],g)=>{f.rotation.z=p*Math.sin(F.t*70+g*1.7+r.ph)*.45})}}var Rl=(()=>{try{return JSON.parse(localStorage.getItem("rio3d-enc")||"{}")||{}}catch{return{}}})();function Zo(i,t){if(!Rl[i]){Rl[i]=Date.now();try{localStorage.setItem("rio3d-enc",JSON.stringify(Rl))}catch{}oi(t)}}var rE=(()=>{let i=uu(1,0);as.pop(),i.updateMatrixWorld(!0);let t=[];return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);n.deleteAttribute("uv");let s=e.material.color,r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;n.setAttribute("color",new Kt(o,3)),t.push(n.index?n.toNonIndexed():n)}),Ss(t)})(),rr=new Pn(rE,new ye({gradientMap:Ie,vertexColors:!0}),24);rr.frustumCulled=!1;rr.count=0;At.add(rr);var Yo=[],Xx=[];function oE(i,t,e,n){let s=Xx.pop()||nE(0);s.rotation.order="YXZ",s.scale.setScalar(2.1),s.visible=!0,s.position.set(i,t+1.2,e),s.userData.fl2={t:0,hd:n,vy:3.2,sp:2.2,ph:Math.random()*6},At.add(s),Yo.push(s);try{ae.flap((i-F.px)/25)}catch{}Zo("heron","Las garzas alzan el vuelo a tu paso")}var ls=new N,Ox=new fn,Hx=new N,zx=new Me;function Yx(i,t){if(!lt.started)return;let e=!window.__noScare&&(Math.abs(F.steer)>.8||F.t-F.bumpT<.8);lt.scareT=e?2.5:Math.max(0,lt.scareT-i);let n=Math.sin(F.psi),s=Math.cos(F.psi),r=lt.scareT<=0;for(let a of Ur){let l=a.userData;if(l.st!==0)continue;l.sp0==null&&(l.sp0=l.sp);let c=a.position.x-F.px,h=a.position.z-F.pz,u=Math.hypot(c,h);if(!r&&u<11){l.hd+=No(Math.atan2(c,-h),l.hd)*Math.min(1,i*6),l.sp=3.4,l.cur=0;continue}if(r&&u<26){l.dir||(l.dir=Math.random()<.5?-1:1);let f=-.4+Math.sin(F.t*.5+l.ph)*1.3,p=F.px+s*l.dir*2.7+n*f,g=F.pz+n*l.dir*2.7-s*f,x=p-a.position.x,d=g-a.position.z,m=Math.hypot(x,d);if(l.hd+=No(Math.atan2(x,-d),l.hd)*Math.min(1,i*3.2),l.sp=Math.max(.7,Math.min(4,F.v+m*.9)),l.cur=1,u<5.5&&(Zo("koi","Los peces se acercan a nadar contigo"),Math.random()<i*.35)){Au(a.position.x+Math.sin(l.hd)*.4,a.position.z-Math.cos(l.hd)*.4,0,0,.55);try{ae.plop((a.position.x-F.px)/25)}catch{}}if(u<6.5&&Math.random()<i*.06){l.st=1,l.j=0,l.vx=Math.sin(l.hd)*2.6,l.vz=-Math.cos(l.hd)*2.6,Cu(a.position.x,.1,a.position.z,6);try{ae.plop((a.position.x-F.px)/25)}catch{}}}else l.sp=l.sp0,l.cur=0}Br.forEach((a,l)=>{let c=a.userData;if(!a.visible)return;let h=a.position.x-F.px,u=a.position.z-F.pz,f=Math.hypot(h,u);if(c.flee>0){c.flee-=i,c.hd+=No(Math.atan2(h,-u),c.hd)*Math.min(1,i*4),c.spd=2.6;return}if(!r&&f<16){c.follow=0,c.flee=3;return}if(r&&(c.follow||f<17)){c.follow||(c.follow=1,c.qT=1+Math.random()*3,l<2&&Zo("duck","Un pato decide acompa\xF1arte"));let p=3.8+l*1.7,g=Math.sin(F.t*.4+l*2)*1.1+(l%2?1:-1)*.9,x=F.px-n*p+s*g,d=F.pz+s*p+n*g,m=x-a.position.x,y=d-a.position.z,b=Math.hypot(m,y);if(c.hd+=No(Math.atan2(m,-y),c.hd)*Math.min(1,i*2.6),c.spd=Math.max(.1,Math.min(3.4,(b>.8?F.v*1.05:F.v*.9)+b*.5)),c.qT-=i,c.qT<=0&&f<12){c.qT=5+Math.random()*9;try{ae.quack((a.position.x-F.px)/25)}catch{}}}else c.spd=0});for(let[a,l]of ri){let c=l.userData.hp;if(!(!c||Je(a)!==4))for(let h of c){let u=h[5];if(u.gone>0&&(u.gone-=i,u.gone>0))continue;ls.set(h[0],h[1],h[2]),l.localToWorld(ls);let f=ls.x-F.px,p=ls.z-F.pz;Math.hypot(f,p)<(lt.scareT>0?22:13)&&F.t>(u.cd||0)&&(u.gone=70,u.cd=F.t+4,oE(ls.x,ls.y,ls.z,Math.atan2(f,-p)+(Math.random()-.5)*.8))}}let o=0;for(let[a,l]of ri){let c=l.userData.hp;if(!(!c||Je(a)!==4))for(let h of c)h[5].gone>0||o>=24||(ls.set(h[0],h[1],h[2]),l.localToWorld(ls),Ox.setFromAxisAngle(Ts,l.rotation.y+h[3]),Hx.setScalar(h[4]),zx.compose(ls,Ox,Hx),rr.setMatrixAt(o++,zx))}rr.count=o,rr.instanceMatrix.needsUpdate=!0;for(let a=Yo.length-1;a>=0;a--){let l=Yo[a],c=l.userData.fl2;c.t+=i,c.vy=Math.max(.6,c.vy-i*.35),l.position.y>11&&(c.vy=Math.min(c.vy,.2)),c.sp=Math.min(6.2,c.sp+i*1.6);let h=-l.position.z;c.hd+=No(xn(h)+Math.sin(c.ph)*.3,c.hd)*i*.6,l.position.x+=Math.sin(c.hd)*c.sp*i,l.position.z-=Math.cos(c.hd)*c.sp*i,l.position.y+=c.vy*i,l.rotation.y=-c.hd,l.rotation.x=Math.min(.5,c.vy*.12);let u=Math.sin(c.t*(c.t<4?10:6)+c.ph)*(c.t<8?.8:.3);l.userData.wings.forEach((f,p)=>{f.rotation.z=(p?1:-1)*u}),(c.t>16||Math.hypot(l.position.x-F.px,l.position.z-F.pz)>230)&&(At.remove(l),Xx.push(l),Yo.splice(a,1))}}var Cs=new N;function aE(i,t,e){if(t.land>0)return t.land-=e,t.land<=0||lt.scareT>0||!i.visible?(t.land=0,t.app=0,t.t=.2,t.ty=2.4,t.tx=i.position.x+(Math.random()-.5)*5,t.tz=i.position.z-4,!1):(Ge.localToWorld(Cs.set(t.lx,t.ly,t.lz)),i.position.copy(Cs),i.quaternion.copy(Ge.quaternion),t.wings.forEach(([n,s])=>{n.rotation.z=s*.12}),!0);if(!lt.started||!i.visible||lt.scareT>0)return!1;if(t.app)return t.t=3,Ge.localToWorld(Cs.set(t.lx,t.ly,t.lz)),t.tx=Cs.x,t.ty=Cs.y,t.tz=Cs.z,!(t.app-=e>0?e:0)||t.app<=0?(t.app=0,!1):(i.position.distanceTo(Cs)<.45&&(t.app=0,t.land=14+Math.random()*18,Zo("dragonfly","Una lib\xE9lula se pos\xF3 en la proa de tu canoa")),!1);if(Math.random()<e*.18&&(Ge.localToWorld(Cs.set(0,.5,-3)),i.position.distanceTo(Cs)<7)){let n=0;for(let s of Fr)(s.userData.land>0||s.userData.app>0)&&n++;n<2&&(t.lx=(Math.random()-.5)*.3,t.ly=.62,t.lz=-3.05+Math.random()*.25,t.app=5)}return!1}var Pu=38,_p=new Map,Zx=[0,1,2].map(i=>{let t=new Mn(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getY(r),l=e.getZ(r),c=1+(tt(Math.round(o*5)+i*9,Math.round(a*5)+Math.round(l*5))-.5)*.35;e.setXYZ(r,o*c*1.15,a*c*.72,l*c);let h=.7+.4*Fe((a+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=h}t.setAttribute("color",new Kt(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),lE=new ye({gradientMap:Ie,color:12039108,vertexColors:!0,map:Ye("rock")}),cE=new ye({gradientMap:Ie,color:8829066,map:Ye("leaf")}),hE=new Pe({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:me});function uE(i){let t=tt(i,41);if(i<2||t>.34)return null;let e=i*Pu+tt(i,42)*Pu,n=(tt(i,43)*2-1)*be(e)*.4;return{s:e,x:ie(e)+n,z:-e,r:.9+tt(i,44)*1.1,v:Math.floor(tt(i,45)*3),a:tt(i,46)*6.28}}function dE(i){let t=new Qt,e=new K(Zx[i.v],lE);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new K(Zx[(i.v+1)%3],cE);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new K(new gr(1.05,1.55,24).rotateX(-Math.PI/2),hE);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function Jx(i,t){let e=Math.floor((t-25)/Pu),n=Math.floor((t+280)/Pu);for(let[s,r]of _p)(s<e||s>n)&&r&&At.remove(r);for(let s=e;s<=n;s++){let r=_p.get(s);if(r===void 0){let h=uE(s);r=h?dE(h):null,_p.set(s,r)}if(!r)continue;r.parent||At.add(r);let o=F.px-r.userData.x,a=F.pz-r.userData.z,l=r.userData.r*1.2+1.5,c=Math.hypot(o,a);c<l&&c>.01&&(F.px+=o/c*(l-c)*.6,F.pz+=a/c*(l-c)*.6,F.v*=.9,F.t-F.bumpT>1.2&&(ae.bump(),F.bumpT=F.t,si(r.userData.x+o/c*-r.userData.r,r.userData.z+a/c*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(F.t*1.4+s)}}var Jo=230,Cl=new Map,fE=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let a=0;a<=16;a++){let l=a/16;for(let c=0;c<26;c++){let h=c/26*6.283,u=1+(rn(Math.cos(h)*2.2+i*7,Math.sin(h)*2.2+l*3)-.5)*.5+(rn(Math.cos(h)*7+i,l*9)-.5)*.14,f=Math.pow(Math.max(0,1-Math.pow(l,2.2)),.62)*(1+.38*(1-l)*(1-l)),p=l,g=(rn(i*3,l*2)-.5)*.5*l;n.push(Math.cos(h)*f*u+g,p,Math.sin(h)*f*u);let x=rn(Math.cos(h)*5+i,l*14),d=Be(.18,.5,rn(Math.cos(h)*9,l*20+i)),m=.45+.2*l+.12*x;s.push(m*(.75+.2*d),m*(.9+.12*d),m*(.82+.1*d))}}for(let a=0;a<16;a++)for(let l=0;l<26;l++){let c=(l+1)%26,h=a*26+l,u=a*26+c,f=(a+1)*26+l,p=(a+1)*26+c;r.push(h,f,u,u,f,p)}let o=new ue;return o.setAttribute("position",new fe(n,3)),o.setAttribute("color",new fe(s,3)),o.setIndex(r),o.computeVertexNormals(),o}),pE=new Oa({vertexColors:!0,color:12175040,fog:!1}),vp=new ts({map:jn,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function mE(i,t){let e=tt(i,60+t),n=44+e*46,s=95+tt(i,61+t)*120,r=i*Jo+tt(i,62+t)*Jo*.9,o=be(r)+150+tt(i,63+t)*170,a=new Qt,l=new K(fE[(i*2+(t>0?1:0)+4)%4],pE.clone());l.scale.set(n,s,n*(.8+tt(i,64)*.4)),l.position.y=-30,l.rotation.y=tt(i,65)*6,a.add(l);for(let c=0;c<2;c++){let h=new ys(vp);h.scale.set(n*4.5,s*.7,1),h.position.set((c?.4:-.3)*n,s*(.18+.2*c),0),h.renderOrder=2,a.add(h)}return a.position.set(ie(r)+t*o,0,-r),a.userData={s:r},a}var gE=(i,t)=>{let e=i*Jo+tt(i,62+t)*Jo*.9,n=br(e);return!!n&&t===n.side&&Math.abs(e-n.s0)<210};function $x(i){let t=Math.floor((i-260)/Jo),e=Math.floor((i+720)/Jo);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),o=Cl.get(r);if(o===void 0&&(o=tt(n,70+s)>.18&&!gE(n,s)?mE(n,s):null,Cl.set(r,o),o&&(o.userData.c=n)),o){o.userData.c=n,o.parent||At.add(o);let a=Math.hypot(o.position.x-F.px,o.position.z-F.pz),l=Fe(Be(60,520,a)*.88+.08);o.children[0].material.color.set(6130818).lerp(lu.set(3099218),Se.night*.7).lerp(ko.copy(Se.hor).lerp(At.fog.color,.5),l)}}for(let[n,s]of Cl)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&At.remove(s)}var Mp=[];function xE(i){let t=new Qt,e=qt(3091244),n=qt(3102307),s=new K(new pe(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new K(new Le(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let o=new K(new pe(.12,8,6),qt(14264706));if(o.position.set(0,1.38,.2),t.add(o),i%2){let l=new K(new Oe(.75,.45,10,1,!0),qt(3158063,{side:me}));l.position.set(0,1.95,.2),t.add(l);let c=new K(new Le(.015,.015,1,4),e);c.position.set(0,1.45,.2),t.add(c)}else{let l=new K(new Oe(.34,.2,10,1,!0),qt(14332522,{side:me}));l.position.set(0,1.55,.2),t.add(l)}let a=new K(new Le(.02,.02,4,4),qt(8018502));return a.position.set(.35,1.2,-.9),a.rotation.set(1,0,-.3),t.add(a),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},At.add(t),t}for(let i=0;i<3;i++)Mp.push(xE(i));function Kx(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(be(e)-9);i.position.set(ie(e)+n,0,-e),i.userData.hd=xn(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}Mp.forEach(i=>Kx(i,40+Math.random()*100));function jx(i,t){for(let e of Mp){let n=e.userData;if(e.position.z>F.pz+30||-e.position.z>t+300){Kx(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(F.t*.8+n.ph)*.03,e.rotation.set(Math.sin(F.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(F.t*.7+n.ph)*.02)}}var Bu=8,jo=44,Du=new Float32Array(Bu*jo*3),Nu=new Float32Array(Bu*jo*3),Pl=new ue;Pl.setAttribute("position",new Kt(Du,3));Pl.setAttribute("color",new Kt(Nu,3));var Hr=new bi(Pl,new hi({size:2.6,map:jn,vertexColors:!0,transparent:!0,blending:kn,depthWrite:!1,depthTest:!1,fog:!1}));Hr.renderOrder=9;Hr.frustumCulled=!1;Hr.visible=!1;At.add(Hr);var Ep=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],Il=[];for(let i=0;i<Bu;i++)Il.push({age:9,x:0,y:0,z:0,c:Ep[0],v:new Float32Array(jo*3)});var bp=0,Iu=!1;function yE(i){let t=Math.round((i-240)/Ti);for(let e of[t-1,t,t+1])if(e>=0&&Je(e)===2&&Math.abs(je(e)-i)<230)return!0;return!1}function Qx(){let i=Il.find(t=>t.age>=3);if(i){i.age=0,i.x=F.px+(Math.random()-.5)*40,i.y=4+Math.random()*5,i.z=F.pz-(55+Math.random()*40),i.c=Ep[Math.random()*Ep.length|0];for(let t=0;t<jo;t++){let e=Math.random()*6.283,n=Math.acos(2*Math.random()-1),s=5+Math.random()*4;i.v[t*3]=Math.sin(n)*Math.cos(e)*s,i.v[t*3+1]=Math.cos(n)*s,i.v[t*3+2]=Math.sin(n)*Math.sin(e)*s}try{ae.boom((i.x-F.px)/30)}catch{}}}function ty(i,t){let e=Iu;Iu=t>.55&&yE(F.dist||-F.pz),Iu&&!e&&Zo("festival","Festival de linternas: la aldea celebra esta noche"),Iu&&(bp-=i,bp<=0&&(bp=1.4+Math.random()*2,Qx(),Math.random()<.35&&setTimeout(Qx,350)));let n=!1;for(let s=0;s<Bu;s++){let r=Il[s];r.age<3&&(r.age+=i);let o=r.age<3?Math.pow(Math.max(0,1-r.age/2.7),1.5):0;o>0&&(n=!0);for(let a=0;a<jo;a++){let l=(s*jo+a)*3,c=r.age;Du[l]=r.x+r.v[a*3]*c*.8,Du[l+1]=r.y+r.v[a*3+1]*c*.8-1.9*c*c,Du[l+2]=r.z+r.v[a*3+2]*c*.8,Nu[l]=r.c[0]*o,Nu[l+1]=r.c[1]*o,Nu[l+2]=r.c[2]*o}}Hr.visible=n,n&&(Pl.attributes.position.needsUpdate=!0,Pl.attributes.color.needsUpdate=!0)}var Tp=new sn({transparent:!0,side:Tn,depthWrite:!1,blending:kn,fog:!1,uniforms:{t:{value:0},k:{value:0}},vertexShader:"varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 u;uniform float t,k;void main(){float a=u.x*6.283;float w=sin(a*3.+t*.25+sin(a*7.+t*.4)*1.3)*.5+.5;float band=smoothstep(.15,.55,u.y)*smoothstep(1.,.55,u.y);float f=band*(.3+.7*w)*(.55+.45*sin(a*11.-t*.5));vec3 c=mix(vec3(.2,1.,.6),vec3(.55,.4,1.),smoothstep(.45,.95,u.y));gl_FragColor=vec4(c*f*k*.75,1.);}"}),Or=new K(new Le(330,330,120,48,1,!0),Tp);Or.frustumCulled=!1;Or.visible=!1;Or.renderOrder=-1;At.add(Or);function ey(i){let t=Ks()===3?Fe(i*1.5-.7,0,1):0;Or.visible=t>.01,Or.visible&&(Or.position.set(F.px,95,F.pz),Tp.uniforms.t.value=F.t,Tp.uniforms.k.value=t)}var $o=300,Ko=new ue,Uu=new Float32Array($o*3),ny=[];for(let i=0;i<$o;i++)ny.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);Ko.setAttribute("position",new Kt(Uu,3));var _E=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new Fi(i)})(),Fu=new Float32Array($o*3),wp=new hi({map:_E,alphaTest:.3,color:16777215,vertexColors:!0,size:Un.pet.size,transparent:!0,opacity:.85,depthWrite:!1}),Sp=-1,vE=new pt(Un.pet.c),ME=new pt(zi.pet),Lu=new pt;Ko.setAttribute("color",new Kt(Fu,3));var iy=new bi(Ko,wp);iy.frustumCulled=!1;At.add(iy);function sy(i){for(let t=0;t<$o;t++){let e=ny[t];e[1]-=i*Un.pet.fall*(.45+.3*Math.sin(e[3]+F.t)),e[1]<.2&&(e[1]=10+Math.random()*3,e[0]=Math.random()*60-30,e[2]=-Math.random()*60),Uu[t*3]=F.px+e[0]+Math.sin(F.t*.7+e[3])*1.5,Uu[t*3+1]=e[1],Uu[t*3+2]=F.pz+e[2]+10+Math.cos(F.t*.5+e[3])}{let t=Sr(F.dist||-F.pz),e=Math.max(.3*Bo(-F.pz),t);if(Ko.setDrawRange(0,Math.round($o*Math.max(Un.pet.base+Un.pet.gain*e,t*.85))),Math.abs(t-Sp)>.02||Sp<0){Sp=t,Lu.copy(vE).lerp(ME,Fe(t*1.6));for(let n=0;n<$o;n++)Fu[n*3]=Lu.r,Fu[n*3+1]=Lu.g,Fu[n*3+2]=Lu.b;Ko.attributes.color.needsUpdate=!0,wp.size=Un.pet.size+(.42-Un.pet.size)*Fe(t*1.6)}}Ko.attributes.position.needsUpdate=!0,wp.opacity=.85*(1-Fe(Se.night,0,1)*.8)}function ry(i){window.__r3d={fc:(t,e)=>{window.__fc=t?()=>{pn.position.set(t[0],t[1],t[2]),pn.lookAt(e[0],e[1],e[2]),pn.updateMatrixWorld()}:null},LM:ki,lmType:Je,NL:rl,lmFound:gi,lmMade:ri,castleNear:br,dragonS:Uo,casInfo:bf,casLocal:ol,fwB:Il,fw:Hr,cam:pn,crit:{fish:Ur,wbirds:Br,dfs:Fr,fliers:Yo,liveH:rr,ENC:Rl,get scare(){return lt.scareT}},sim:i,cnt:()=>{let t={};return At.traverse(e=>{if((e.isMesh||e.isSprite||e.isPoints)&&e.visible){let n=e,s=!0;for(;n;){if(!n.visible){s=!1;break}n=n.parent}if(!s)return;let r=(e.isInstancedMesh?"inst":e.isSprite?"sprite":e.isPoints?"pts":"mesh")+":"+(e.material.type||"");t[r]=(t[r]||0)+1}}),t},info:()=>({g:rs.info.memory.geometries,t:rs.info.memory.textures,p:rs.info.programs.length,calls:rs.info.render.calls,tris:rs.info.render.triangles,lm:ri.size,ch:At.children.length}),cineJump:t=>{lt.cine&&(lt.cine.t=t)},cineOn:()=>!!lt.cine,bambooAt:Fo,gardenAt:Sr,forestAt:Bo,lmPos:je,wbirds:Br,massifs:Cl,birds:Vx,dfs:Fr,fish:Ur,W:cn,mistAt:Xh,setCam:Nr,P:F,lanternPos:au,setTod:t=>{lt.tod=t},scene:At,tp:(t,e=0,n=0)=>{F.pz=-t,F.px=ie(t)+n,F.psi=xn(t)+e},sideOf:t=>tt(t,9)>.5?1:-1,get tod(){return lt.tod}}}var ta=performance.now();D0();N0();function Ap(i,t){if(t||requestAnimationFrame(Ap),PZ.on&&!t){ta=i;return}let e=Math.max(0,Math.min(.05,(i-ta)/1e3));Qo.tick(Math.max(0,(i-ta)/1e3)),ta=i,F.t+=e;let n=-F.pz;Gg(e,n);let s=wg();sy(e),Ag(),Rg(e),yx(e,s),px(e),window.__fc&&window.__fc(),lt.started&&!Qo.photo&&(lt.tod=(lt.tod+e/900)%1),V0(F.px,F.pz),kg(e,n),xg(F.px,F.pz,Dx),Df.value=F.t,mi.position.set(F.px,0,F.pz),mi.material.uniforms.t.value=F.t;let r=Se.night;iu.intensity=lt.glowK*3.2,nu.material.opacity=.3+.35*lt.glowK,yl.material.color.set(16769704),Jx(e,F.dist||n),jx(e,F.dist||n),$x(F.dist||n),vp.color.copy(At.fog.color).multiplyScalar(1.05),Yx(e,F.dist||n),Gx(e,F.dist||n),qx(e,F.dist||n),pp.opacity=.55+.15*Math.sin(F.t*.8),Al.position.y=Math.sin(F.t*.9)*.01,Ug(F.t,F.dist||n),Px(F.dist||n),Fg(),Cg(e),ty(e,r),ey(r),_g(r),ae.update(F.v+Math.abs(F.steer)*1.5,r,F.t),Ng(e,n),Qo.camAdjust(),Qo.update(e,F.dist||n),t||Qo.render()}var Qo=B0({R:rs,scene:At,cam:pn,canvas:Ms,el:We,toast:oi,P:F,LM:ki,lmFound:gi,lmPos:je,LMS:Ti,mkLantern:Xf,cx:ie,hw:be,lmType:Je,A:ae,hash:tt,spawnRipple:si,SEAS:Wh,seasonIdx:Ks,started:()=>lt.started,getTod:()=>lt.tod,setTod:i=>{lt.tod=i},todName:Jh,getCount:()=>lt.count,setCount:i=>{lt.count=i;try{localStorage.setItem("rio3d-lant",String(i))}catch{}We("n").textContent=i},glowK:()=>lt.glowK,restart:()=>{lt.cine=null,lt.cineW=0;try{localStorage.removeItem("rio3d-pos")}catch{}Yh(0),F.v=2.6,F.dist=0,F.pitch=0,lt.savedS=0,oi("De vuelta al inicio del r\xEDo")},setCam:Nr,getCam:()=>lt.camMode,savePos:_l,nearLM:i=>{let t=Math.round((i-240)/Ti);for(let e of[t,t-1,t+1])if(Math.abs(je(e)-i)<130&&e>=0)return ki[Je(e)];return""}});lt.X=Qo;We("n").textContent=lt.count;PZ.ctx=()=>ae.ctx;PZ.started=()=>lt.started;requestAnimationFrame(Ap);{let i=We("cap"),t=0,e=()=>{try{return localStorage.getItem("rio3d-subs")==="1"}catch{return!1}};ae.onCap=n=>{!e()||!i||(i.textContent="["+Yn(n)+"]",i.style.opacity=1,clearTimeout(t),t=setTimeout(()=>i.style.opacity=0,2600))};try{let n=localStorage.getItem("rio3d-hand");(n==="r"||n==="l")&&document.body.classList.add("hand-"+n)}catch{}F0()}var bE=(i,t,e)=>{window.__lastT=window.__lastT||ta;for(let n=0;n<i;n++)window.__lastT+=t*1e3,e&&e(n),Ap(window.__lastT,!0);ta=window.__lastT};ry(bE);try{window.UX.mood()}catch{}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
