(function(){if(window.UX)return;let i=["es","en","ja"],e={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},t={get(f,x){try{let S=localStorage.getItem(f);return S===null?x:S}catch{return x}},set(f,x){try{localStorage.setItem(f,x)}catch{}}},n=t.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,a=[],o=window.UX={lang:n,onLang:null,add(f){f.forEach(x=>r.set(x[0],x))},rx(f){f.forEach(x=>a.push(x))},tr(f){if(n==="es"||typeof f!="string")return f;let x=f.trim();if(!x)return f;let S=r.get(x);if(S)return f.replace(x,S[s]);for(let[_,M]of a){let T=x.match(_);if(T)return f.replace(x,M(T,n==="en"?1:2,o.tr))}return f},init(){if(n==="es")return;document.documentElement.lang=n;let f=x=>{if(x.nodeType===3){let M=o.tr(x.nodeValue);M!==x.nodeValue&&(x.nodeValue=M);return}if(x.nodeType!==1||x.tagName==="SCRIPT"||x.tagName==="STYLE")return;let S=x.getAttribute&&x.getAttribute("aria-label");if(S){let M=o.tr(S);M!==S&&x.setAttribute("aria-label",M)}let _=x.getAttribute&&x.getAttribute("title");if(_){let M=o.tr(_);M!==_&&x.setAttribute("title",M)}x.childNodes.forEach(f)};f(document.body),new MutationObserver(x=>{for(let S of x)S.type==="characterData"?f(S.target):S.addedNodes.forEach(f)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(f){if(t.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(f);return}if(!o._sw){let x=document.createElement("label");x.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let S=document.createElement("input");S.type="checkbox",S.setAttribute("switch",""),x.appendChild(S),document.body.appendChild(x),o._sw=x}o._sw.click()}catch{}},subsOn:()=>t.get("rio3d-subs","0")==="1",cap(f,x){if(!o.subsOn())return;let S=performance.now(),_=o._cl||(o._cl={});if(_[f]&&S-_[f]<(x||9e3))return;_[f]=S;let M=document.getElementById("uxcap");M||(M=document.createElement("div"),M.id="uxcap",M.setAttribute("aria-live","polite"),M.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(M)),M.textContent="["+o.tr(f)+"]",M.style.opacity=1,clearTimeout(o._ct),o._ct=setTimeout(()=>M.style.opacity=0,2600)},btns(f,x){x=x||{};let S=(B,K)=>{let G=document.createElement("button");return G.type="button",G.id=B,G.className=f||"",G.onclick=K,G},_=[],M=S("uxLang",()=>{let B=i[(i.indexOf(n)+1)%3];t.set("rio3d-lang",B);try{o.onLang&&o.onLang()}catch{}location.reload()});M.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+e[n],_.push(M);let T=S("uxSubs",()=>{t.set("rio3d-subs",o.subsOn()?"0":"1"),T.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});T.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",_.push(T);let A=S("uxHap",()=>{let B=t.get("rio3d-hap","1")==="1";t.set("rio3d-hap",B?"0":"1"),A.textContent=B?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",B||o.hap(15)});if(A.textContent=t.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",_.push(A),x.hand){let B={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},K=["0","r","l"],G=Te=>{document.body.classList.remove("hand-r","hand-l"),Te!=="0"&&document.body.classList.add("hand-"+Te)},Y=t.get("rio3d-hand","0");B[Y]||(Y="0"),G(Y);let j=S("uxHand",()=>{Y=K[(K.indexOf(Y)+1)%3],t.set("rio3d-hand",Y),G(Y),j.textContent=B[Y]});j.textContent=B[Y],_.push(j)}let y=S("uxVol",()=>{let B=["1",".7",".4"],K=B.indexOf(String(o.api.vol()).replace("0.","."));o.api.setVol(B[(K+1)%3]),y.textContent=E()}),E=()=>l("Volumen de este juego: ","Volume (this game): ","\u3053\u306E\u30B2\u30FC\u30E0\u306E\u97F3\u91CF: ")+Math.round(o.api.vol()*100)+" %";y.textContent=E(),_.push(y);let I=S("uxSoft",()=>{o.api.setSoft(!o.api.soft()),I.textContent=L()}),L=()=>o.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");I.textContent=L(),_.push(I);let U=S("uxSleep",()=>{let B=[0,15,30,45];o.api.sleep(B[(B.indexOf(o.api.sleepMin())+1)%4]),U.textContent=z()}),z=()=>o.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+o.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(U.textContent=z(),o._sb=()=>{U.textContent=z()},_.push(U),x.wear){let B=S("uxWear",()=>{t.set("ux-wear",t.get("ux-wear","0")==="1"?"0":"1"),B.textContent=K()}),K=()=>t.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");B.textContent=K(),_.push(B)}let R=S("uxCalm",()=>{o.setCalm(!o.calm()),R.textContent=D()}),D=()=>o.calm()?l("Menos movimiento y destellos: s\xED","Less motion and flashes: on","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30F3"):l("Menos movimiento y destellos: no","Less motion and flashes: off","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30D5");R.textContent=D(),_.push(R);let k=S("uxAbout",()=>o.about());return k.textContent=l("Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"),_.push(k),_},ask(f,x){let S=document.createElement("div");S.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let _=document.createElement("div");_.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let M=document.createElement("p");M.style.margin="0 0 14px",M.textContent=o.tr(f),_.appendChild(M);let T=(A,y)=>{let E=document.createElement("button");return E.type="button",E.textContent=A,E.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",E.onclick=()=>{S.remove(),y&&y()},E};_.appendChild(T(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),_.appendChild(T(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),x)),S.appendChild(_),document.body.appendChild(S)}},l=(f,x,S)=>n==="en"?x:n==="ja"?S:f,c=(()=>{let f=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return f?f[1]:/caba/i.test(document.title)?"cabana":"rio"})(),h="ux-vol-"+c,u={vol:t.get(h,t.get("ux-vol","1")),soft:t.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};o.quiet=!1;let d=()=>{for(let f of u.nodes)try{let x=f.c.currentTime;f.lp.frequency.setTargetAtTime(u.soft?2800:22e3,x,.1),f.g.gain.setTargetAtTime(+u.vol*u.k,x,.1)}catch{}};o.out=(f,x)=>{let S=f.createBiquadFilter();S.type="lowpass",S.frequency.value=u.soft?2800:22e3,S.Q.value=.5;let _=f.createGain();return _.gain.value=+u.vol*u.k,x.connect(S),S.connect(_),_.connect(f.destination),u.nodes.push({c:f,lp:S,g:_}),_},o.pinkSrc=(f,x)=>{let S=f._pink;if(!S){let T=f.sampleRate,A=Math.floor(T*12),y=Math.floor(T*1.5),E=A+y,I=new Float32Array(E),L=0,U=0,z=0,R=0,D=0,k=0,B=0;for(let G=0;G<E;G++){let Y=Math.random()*2-1;L=.99886*L+Y*.0555179,U=.99332*U+Y*.0750759,z=.969*z+Y*.153852,R=.8665*R+Y*.3104856,D=.55*D+Y*.5329522,k=-.7616*k-Y*.016898,I[G]=(L+U+z+R+D+k+B+Y*.5362)*.2215*.5,B=Y*.115926}S=f.createBuffer(1,A,T);let K=S.getChannelData(0);for(let G=0;G<A;G++)K[G]=I[G];for(let G=0;G<y;G++){let Y=G/y*Math.PI/2;K[G]=I[G]*Math.sin(Y)+I[A+G]*Math.cos(Y)}f._pink=S}let _=f.createBufferSource();_.buffer=S,_.loop=!0;let M=f.createGain();return M.gain.value=x||1,_.connect(M),M.start=(T,A)=>_.start(T||0,A||0),M.stop=T=>_.stop(T),M},o.api={soft:()=>u.soft,setSoft(f){u.soft=!!f,t.set("ux-soft",f?"1":"0"),d()},vol:()=>+u.vol,setVol(f){u.vol=String(f),t.set(h,u.vol),d()},sleepMin:()=>u.min,sleep(f){u.min=f,u.end=f?Date.now()+f*6e4:0,u.k=1,o.quiet=!1,u.ov&&(u.ov.style.opacity=0),d()}},setInterval(()=>{if(!u.end)return;let f=(u.end-Date.now())/1e3;if(!u.ov){let x=document.createElement("div");x.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(x),u.ov=x}if(f<=0){u.end=0,u.min=0,u.k=0,d(),u.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{u.k=1,o.quiet=!1,d(),u.ov.style.opacity=0,o._sb&&o._sb()},1500);return}f<300&&(o.quiet=!0,u.k=Math.pow(f/300,2),u.ov.style.opacity=(1-f/300)*.6,d())},1e3);{let f=0,x=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(f+=5,f>=x)){x+=1800;let S=document.getElementById("uxrest");S||(S=document.createElement("div"),S.id="uxrest",S.setAttribute("aria-live","polite"),S.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(S)),S.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),S.style.opacity=1,clearTimeout(o._rt),o._rt=setTimeout(()=>S.style.opacity=0,7e3)}},5e3)}o.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Croar de rana","Frog croak","\u30AB\u30A8\u30EB\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),o.add([["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function g(f){let x=document.createElement("div");x.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let S=document.createElement("div");S.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let _=document.createElement("div"),M=document.createElement("div");M.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),M.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let T=document.createElement("button");T.type="button",T.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),T.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",x.append(M,S,_,T),document.body.appendChild(x);let A=0,y=!0,E,I=U=>{y&&(y=!1,clearTimeout(E),x.remove(),f&&f(U))};T.onclick=()=>I(!1);let L=()=>{if(y){if(A>=5)return I(!0);A++,_.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),S.style.transition="transform 4s ease-in-out",S.style.transform="scale(1)",o.hap(8),E=setTimeout(()=>{y&&(_.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),S.style.transition="transform 6s ease-in-out",S.style.transform="scale(.55)",E=setTimeout(L,6e3))},4e3)}};L()}o.calm=()=>{let f=t.get("ux-calm",null);if(f==="1")return!0;if(f==="0")return!1;try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}},o.setCalm=f=>{t.set("ux-calm",f?"1":"0")},o.about=()=>{let f=document.getElementById("uxAboutOv");if(f){f.remove();return}let x=document.createElement("div");x.id="uxAboutOv",x.setAttribute("role","dialog"),x.setAttribute("aria-modal","true"),x.style.cssText="position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let S=document.createElement("div");S.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,440px);max-height:84vh;overflow:auto;font:15px/1.5 system-ui,sans-serif";let _=document.createElement("h2");_.style.cssText="margin:0 0 6px;font:600 1.2rem system-ui",_.textContent="Tomoshibi";let M=document.createElement("div");M.style.cssText="margin:0 0 10px;opacity:.7;font-size:.85em",M.textContent=l("\u3068\u3082\u3057\u3073 \xB7 Luz de l\xE1mpara \xB7 Juegos Sin Prisa","\u3068\u3082\u3057\u3073 \xB7 Lamplight \xB7 No-Rush Games","\u3068\u3082\u3057\u3073 \xB7 \u306E\u3093\u3073\u308A\u904A\u3079\u308B\u30B2\u30FC\u30E0");let T=document.createElement("p");T.style.cssText="margin:0 0 10px;opacity:.85",T.textContent=l("Juegos tranquilos, sin puntaje ni tiempo. Nada que ganar ni perder.","Calm games with no score and no timer. Nothing to win or lose.","\u30B9\u30B3\u30A2\u3082\u6642\u9593\u3082\u306A\u3044\u3001\u304A\u3060\u3084\u304B\u306A\u30B2\u30FC\u30E0\u3002\u52DD\u3061\u8CA0\u3051\u306F\u3042\u308A\u307E\u305B\u3093\u3002");let A=document.createElement("p");A.style.cssText="margin:0 0 10px;opacity:.85;font-size:.9em",A.textContent=l("Es un juego de descanso: no es un producto m\xE9dico ni de terapia y no sustituye la ayuda de un profesional.","This is a game for rest: it is not a medical or therapy product and does not replace professional help.","\u3053\u308C\u306F\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3059\u3002\u533B\u7642\u3084\u30BB\u30E9\u30D4\u30FC\u306E\u88FD\u54C1\u3067\u306F\u306A\u304F\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002");let y=document.createElement("div");y.style.cssText="display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px",[["privacidad.html",l("Privacidad","Privacy","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC")],["datos.html",l("Mis datos","My data","\u30C7\u30FC\u30BF")],["creditos.html",l("Cr\xE9ditos y licencias","Credits and licenses","\u30AF\u30EC\u30B8\u30C3\u30C8\u3068\u30E9\u30A4\u30BB\u30F3\u30B9")]].forEach(I=>{let L=document.createElement("a");L.href="../"+I[0],L.textContent=I[1],L.style.cssText="color:#ffc77a;min-height:44px;display:inline-flex;align-items:center;padding:0 6px",y.appendChild(L)});let E=document.createElement("button");E.type="button",E.textContent=l("Cerrar","Close","\u9589\u3058\u308B"),E.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",E.onclick=()=>x.remove(),S.append(_,M,T,A,y,E),x.appendChild(S),x.onclick=I=>{I.target===x&&x.remove()},document.body.appendChild(x);try{E.focus()}catch{}},o.say=f=>{let x=document.getElementById("uxsay");x||(x=document.createElement("div"),x.id="uxsay",x.setAttribute("role","status"),x.setAttribute("aria-live","polite"),x.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(x)),x.textContent=f,x.style.opacity=1,clearTimeout(o._st),o._st=setTimeout(()=>x.style.opacity=0,4200)},o.breathe=g,o.mood=()=>b();function b(){let f=document.getElementById("go");if(!f||document.getElementById("uxmood"))return;let x=document.createElement("div");x.id="uxmood",x.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let S=document.createElement("div");S.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),S.style.cssText="font:600 .95rem system-ui;opacity:.9";let _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let M=document.createElement("div");M.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar. Es un juego de descanso, no sustituye ayuda profesional.","Optional. I only adjust the sound or offer a breath. This is a game for rest, not a substitute for professional help.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002"),M.style.cssText="font:400 .72rem system-ui;opacity:.6";let T=null,A={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([y,E,I,L])=>{let U=document.createElement("button");U.type="button",U.textContent=l(E,I,L),U.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",U.onclick=()=>{T=T===y?null:y;for(let z in A)A[z].style.borderColor=z===T?"#ffc77a":"#5a609a",A[z].style.background=z===T?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";o.hap(6)},A[y]=U,_.appendChild(U)}),x.append(S,_,M),f.parentNode.insertBefore(x,f),f.addEventListener("click",()=>{t.set("ux-mood",T||""),T==="tired"&&(o.api.setSoft(!0),+o.api.vol()>.7&&o.api.setVol(".7"),setTimeout(()=>{try{o.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),T==="rest"&&setTimeout(()=>g(),600),T==="think"&&setTimeout(()=>{try{o.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let m=o.init;o.init=function(){m.apply(this,arguments);try{b()}catch{}}})();var pu=0,oc=1,mu=2;var nr=1,gu=2,Qi=3,$n=0,zt=1,bn=2,Mn=0,es=1,lc=2,cc=3,hc=4,xu=5;var di=100,_u=101,yu=102,vu=103,Su=104,bu=200,Mu=201,Tu=202,wu=203,uc=204,dc=205,Eu=206,Au=207,Cu=208,Ru=209,Iu=210,Pu=211,Lu=212,Du=213,Nu=214,Qr=0,ea=1,ta=2,Bi=3,na=4,ia=5,sa=6,ra=7,Va=0,Uu=1,Fu=2,cn=0,fc=1,pc=2,mc=3,gc=4,xc=5,_c=6,yc=7;var vc=300,Kn=301,fi=302,Ga=303,Ha=304,ir=306,zi=1e3,gn=1001,aa=1002,Mt=1003,Ou=1004;var sr=1005;var Ct=1006,Wa=1007;var jn=1008;var Ht=1009,Sc=1010,bc=1011,ts=1012,Xa=1013,hn=1014,en=1015,un=1016,qa=1017,Ya=1018,ns=1020,Mc=35902,Tc=35899,wc=1021,Ec=1022,tn=1023,_n=1026,Qn=1027,is=1028,Za=1029,ei=1030,Ja=1031;var $a=1033,rr=33776,ar=33777,or=33778,lr=33779,Ka=35840,ja=35841,Qa=35842,eo=35843,to=36196,no=37492,io=37496,so=37488,ro=37489,cr=37490,ao=37491,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,xo=37817,_o=37818,yo=37819,vo=37820,So=37821,bo=36492,Mo=36494,To=36495,wo=36283,Eo=36284,hr=36285,Ao=36286;var Es=2300,oa=2301,Kr=2302,wl=2303,El=2400,Al=2401,Cl=2402;var Bu=3200;var ur=0,zu=1,Fn="",Ft="srgb",As="srgb-linear",Cs="linear",at="srgb";var jr=7680;var ku=519,Vu=512,Gu=513,Hu=514,Co=515,Wu=516,Xu=517,Ro=518,qu=519,Ac=35044,Ef=35048;var Cc="300 es",ln=2e3,ki=2001;function Af(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=Rs("canvas");return i.style.display="block",i}var Rh={},Vi=null;function Is(...i){let e="THREE."+i.shift();Vi?Vi("log",e,...i):console.log(e,...i)}function Zu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=Zu(i);let e="THREE."+i.shift();if(Vi)Vi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=Zu(i);let e="THREE."+i.shift();if(Vi)Vi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function oi(...i){let e=i.join(" ");e in Rh||(Rh[e]=!0,Ne(...i))}function Ju(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $u={[Qr]:ea,[ta]:sa,[na]:ra,[Bi]:ia,[ea]:Qr,[sa]:ta,[ra]:na,[ia]:Bi},yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ko=Math.PI/180,la=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Rf(i,e){return(i%e+e)%e}function jo(i,e,t){return(1-t)*i+t*e}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nc=class Nc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nc.prototype.isVector2=!0;var re=Nc,Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(u!==b||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*b;m<0&&(d=-d,p=-p,g=-g,b=-b,m=-m);let f=1-o;if(m<.9995){let x=Math.acos(m),S=Math.sin(x);f=Math.sin(f*x)/S,o=Math.sin(o*x)/S,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+b*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+b*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uc=class Uc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uc.prototype.isVector3=!0;var P=Uc,Qo=new P,Ih=new Qt,Fc=class Fc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],b=s[0],m=s[3],f=s[6],x=s[1],S=s[4],_=s[7],M=s[2],T=s[5],A=s[8];return r[0]=a*b+o*x+l*M,r[3]=a*m+o*S+l*T,r[6]=a*f+o*_+l*A,r[1]=c*b+h*x+u*M,r[4]=c*m+h*S+u*T,r[7]=c*f+h*_+u*A,r[2]=d*b+p*x+g*M,r[5]=d*m+p*S+g*T,r[8]=d*f+p*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(e,t)),this}rotate(e){return oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-e)),this}translate(e,t){return oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fc.prototype.isMatrix3=!0;var Ge=Fc,el=new Ge,Ph=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var je=If();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yi,ca=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=Rs("canvas")),yi.width=e.width,yi.height=e.height;let s=yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Rs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pf=0,Gi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Lf=0,nl=new P,Bt=class i extends yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gn,s=gn,r=Ct,a=jn,o=tn,l=Ht,c=i.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Dn(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=vc;Bt.DEFAULT_ANISOTROPY=1;var Oc=class Oc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(p+1)/2,M=(f+1)/2,T=(h+d)/4,A=(u+b)/4,y=(g+m)/4;return S>_&&S>M?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oc.prototype.isVector4=!0;var pt=Oc,ha=class extends yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Bt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends ha{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ps=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ua=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ka=class ka{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ka().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d+b*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,b=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,Nf)}lookAt(e,t,n){let s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Vn.crossVectors(n,Xt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Vn.crossVectors(n,Xt)),Vn.normalize(),br.crossVectors(Xt,Vn),s[0]=Vn.x,s[4]=br.x,s[8]=Xt.x,s[1]=Vn.y,s[5]=br.y,s[9]=Xt.y,s[2]=Vn.z,s[6]=br.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],x=n[3],S=n[7],_=n[11],M=n[15],T=s[0],A=s[4],y=s[8],E=s[12],I=s[1],L=s[5],U=s[9],z=s[13],R=s[2],D=s[6],k=s[10],B=s[14],K=s[3],G=s[7],Y=s[11],j=s[15];return r[0]=a*T+o*I+l*R+c*K,r[4]=a*A+o*L+l*D+c*G,r[8]=a*y+o*U+l*k+c*Y,r[12]=a*E+o*z+l*B+c*j,r[1]=h*T+u*I+d*R+p*K,r[5]=h*A+u*L+d*D+p*G,r[9]=h*y+u*U+d*k+p*Y,r[13]=h*E+u*z+d*B+p*j,r[2]=g*T+b*I+m*R+f*K,r[6]=g*A+b*L+m*D+f*G,r[10]=g*y+b*U+m*k+f*Y,r[14]=g*E+b*z+m*B+f*j,r[3]=x*T+S*I+_*R+M*K,r[7]=x*A+S*L+_*D+M*G,r[11]=x*y+S*U+_*k+M*Y,r[15]=x*E+S*z+_*B+M*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15],x=l*p-c*d,S=o*p-c*u,_=o*d-l*u,M=a*p-c*h,T=a*d-l*h,A=a*u-o*h;return t*(b*x-m*S+f*_)-n*(g*x-m*M+f*T)+s*(g*S-b*M+f*A)-r*(g*_-b*T+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],x=t*o-n*a,S=t*l-s*a,_=t*c-r*a,M=n*l-s*o,T=n*c-r*o,A=s*c-r*l,y=h*b-u*g,E=h*m-d*g,I=h*f-p*g,L=u*m-d*b,U=u*f-p*b,z=d*f-p*m,R=x*z-S*U+_*L+M*I-T*E+A*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=(o*z-l*U+c*L)*D,e[1]=(s*U-n*z-r*L)*D,e[2]=(b*A-m*T+f*M)*D,e[3]=(d*T-u*A-p*M)*D,e[4]=(l*I-a*z-c*E)*D,e[5]=(t*z-s*I+r*E)*D,e[6]=(m*_-g*A-f*S)*D,e[7]=(h*A-d*_+p*S)*D,e[8]=(a*U-o*I+c*y)*D,e[9]=(n*I-t*U-r*y)*D,e[10]=(g*T-b*_+f*x)*D,e[11]=(u*_-h*T-p*x)*D,e[12]=(o*E-a*L-l*y)*D,e[13]=(t*L-n*E+s*y)*D,e[14]=(b*S-g*M-m*x)*D,e[15]=(h*M-u*S+d*x)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,b=a*h,m=a*u,f=o*u,x=l*c,S=l*h,_=l*u,M=n.x,T=n.y,A=n.z;return s[0]=(1-(b+f))*M,s[1]=(p+_)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(d+f))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-x)*A,s[10]=(1-(d+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vi.set(s[0],s[1],s[2]).length(),o=vi.set(s[4],s[5],s[6]).length(),l=vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),sn.copy(this);let c=1/a,h=1/o,u=1/l;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===ki)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===ln)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===ki)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ka.prototype.isMatrix4=!0;var nt=ka,vi=new P,sn=new nt,Df=new P(0,0,0),Nf=new P(1,1,1),Vn=new P,br=new P,Xt=new P,Dh=new nt,Nh=new Qt,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Hi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uf=0,Uh=new P,Si=new Qt,An=new nt,Mr=new P,fs=new P,Ff=new P,Of=new Qt,Fh=new P(1,0,0),Oh=new P(0,1,0),Bh=new P(0,0,1),zh={type:"added"},Bf={type:"removed"},bi={type:"childadded",child:null},il={type:"childremoved",child:null},Tt=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Un,n=new Qt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ge}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(fs,Mr,this.up):An.lookAt(Mr,fs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(An),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),bi.child=e,this.dispatchEvent(bi),bi.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function sl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Rf(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sl(a,r,e+1/3),this.g=sl(a,r,e),this.b=sl(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return je.workingToColorSpace(Pt.copy(this),e),Math.round(Ze(Pt.r*255,0,255))*65536+Math.round(Ze(Pt.g*255,0,255))*256+Math.round(Ze(Pt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Pt.copy(this),t);let n=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Ft){je.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,s=Pt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Tr);let n=jo(Gn.h,Tr.h,t),s=jo(Gn.s,Tr.s,t),r=jo(Gn.l,Tr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new We;We.NAMES=Ku;var Rl=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Il=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},rn=new P,Cn=new P,rl=new P,Rn=new P,Mi=new P,Ti=new P,kh=new P,al=new P,ol=new P,ll=new P,cl=new pt,hl=new pt,ul=new pt,Ln=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),Cn.subVectors(n,t),rl.subVectors(e,t);let a=rn.dot(rn),o=rn.dot(Cn),l=rn.dot(rl),c=Cn.dot(Cn),h=Cn.dot(rl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cl,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),Cn.subVectors(e,t),rn.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),rn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),Ti.subVectors(r,n),al.subVectors(e,n);let l=Mi.dot(al),c=Ti.dot(al);if(l<=0&&c<=0)return t.copy(n);ol.subVectors(e,s);let h=Mi.dot(ol),u=Ti.dot(ol);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Mi,a);ll.subVectors(e,r);let p=Mi.dot(ll),g=Ti.dot(ll);if(g>=0&&p<=g)return t.copy(r);let b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ti,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return kh.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(kh,o);let f=1/(m+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(Mi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Er.subVectors(this.max,ps),wi.subVectors(e.a,ps),Ei.subVectors(e.b,ps),Ai.subVectors(e.c,ps),Hn.subVectors(Ei,wi),Wn.subVectors(Ai,Ei),ni.subVectors(wi,Ai);let t=[0,-Hn.z,Hn.y,0,-Wn.z,Wn.y,0,-ni.z,ni.y,Hn.z,0,-Hn.x,Wn.z,0,-Wn.x,ni.z,0,-ni.x,-Hn.y,Hn.x,0,-Wn.y,Wn.x,0,-ni.y,ni.x,0];return!dl(t,wi,Ei,Ai,Er)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,wi,Ei,Ai,Er))?!1:(Ar.crossVectors(Hn,Wn),t=[Ar.x,Ar.y,Ar.z],dl(t,wi,Ei,Ai,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new P,new P,new P,new P,new P,new P,new P,new P],an=new P,wr=new vn,wi=new P,Ei=new P,Ai=new P,Hn=new P,Wn=new P,ni=new P,ps=new P,Er=new P,Ar=new P,ii=new P;function dl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);let o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var St=new P,Cr=new re,kf=0,bt=class extends yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ls=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ds=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Be=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vf=new vn,ms=new P,fl=new P,Sn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);let t=ms.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(fl)),this.expandByPoint(ms.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gf=0,jt=new nt,pl=new Tt,Ci=new P,qt=new vn,gs=new vn,At=new P,lt=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Af(e)?Ds:Ls)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(qt.min,gs.min),qt.expandByPoint(At),At.addVectors(qt.max,gs.max),qt.expandByPoint(At)):(qt.expandByPoint(gs.min),qt.expandByPoint(gs.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),At.add(Ci)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,u=new P,d=new re,p=new re,g=new re,b=new P,m=new P;function f(y,E,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,I),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[y].add(b),o[E].add(b),o[I].add(b),l[y].add(m),l[E].add(m),l[I].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,E=x.length;y<E;++y){let I=x[y],L=I.start,U=I.count;for(let z=L,R=L+U;z<R;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new P,_=new P,M=new P,T=new P;function A(y){M.fromBufferAttribute(s,y),T.copy(M);let E=o[y];S.copy(E),S.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(T,E);let L=_.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,L)}for(let y=0,E=x.length;y<E;++y){let I=x[y],L=I.start,U=I.count;for(let z=L,R=L+U;z<R;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new bt(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ut=new P,Xi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Is("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Is("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ml=new P,Hf=new P,Wf=new Ge,on=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ml.subVectors(n,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wf.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xf=0,Gt=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=es,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new on().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},da=class extends Gt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ri,xs=new P,Ii=new P,Pi=new P,Li=new re,_s=new re,ju=new nt,Rr=new P,ys=new P,Ir=new P,Vh=new re,gl=new re,Gh=new re,Pl=class extends Tt{constructor(e=new da){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ns(t,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new Xi(n,3,0,!1)),Ri.setAttribute("uv",new Xi(n,2,3,!1))}this.geometry=Ri,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Pi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pr(Rr.set(-.5,-.5,0),Pi,a,Ii,s,r),Pr(ys.set(.5,-.5,0),Pi,a,Ii,s,r),Pr(Ir.set(.5,.5,0),Pi,a,Ii,s,r),Vh.set(0,0),gl.set(1,0),Gh.set(1,1);let o=e.ray.intersectTriangle(Rr,ys,Ir,!1,xs);if(o===null&&(Pr(ys.set(-.5,.5,0),Pi,a,Ii,s,r),gl.set(0,1),o=e.ray.intersectTriangle(Rr,Ir,ys,!1,xs),o===null))return;let l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Ln.getInterpolation(xs,Rr,ys,Ir,Vh,gl,Gh,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Pr(i,e,t,n,s,r){Li.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(_s.x=r*Li.x-s*Li.y,_s.y=s*Li.x+r*Li.y):_s.copy(Li),i.copy(e),i.x+=_s.x,i.y+=_s.y,i.applyMatrix4(ju)}var Pn=new P,xl=new P,Lr=new P,Dr=new P,li=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xl.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(xl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Dr.dot(this.direction),l=-Dr.dot(Lr),c=Dr.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xl).addScaledVector(Lr,d),p}intersectSphere(e,t){if(e.radius<0)return null;Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,b=t.y-a.y,m=t.z-a.z,f=n.x-a.x,x=n.y-a.y,S=n.z-a.z,_=Math.abs(l),M=Math.abs(c),T=Math.abs(h),A,y,E,I,L,U,z,R,D,k,B,K;if(_>=M&&_>=T?(E=l,U=u,D=g,K=f,l>=0?(A=c,y=h,I=d,L=p,z=b,R=m,k=x,B=S):(A=h,y=c,I=p,L=d,z=m,R=b,k=S,B=x)):M>=T?(E=c,U=d,D=b,K=x,c>=0?(A=h,y=l,I=p,L=u,z=m,R=g,k=S,B=f):(A=l,y=h,I=u,L=p,z=g,R=m,k=f,B=S)):(E=h,U=p,D=m,K=S,h>=0?(A=l,y=c,I=u,L=d,z=g,R=b,k=f,B=x):(A=c,y=l,I=d,L=u,z=b,R=g,k=x,B=f)),E===0)return null;let G=A/E,Y=y/E,j=1/E,Te=I-G*U,Se=L-Y*U,tt=z-G*D,Je=R-Y*D,Qe=k-G*K,$=B-Y*K,te=Qe*Je-$*tt,xe=Te*$-Se*Qe,ze=tt*Se-Je*Te;if(s){if(te<0||xe<0||ze<0)return null}else if((te<0||xe<0||ze<0)&&(te>0||xe>0||ze>0))return null;let be=te+xe+ze;if(be===0)return null;let ke=j*(te*U+xe*D+ze*K);return(be>0?ke<0:ke>0)?null:this.at(ke/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Us=class extends Gt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hh=new nt,si=new li,Nr=new Sn,Wh=new P,Ur=new P,Fr=new P,Or=new P,_l=new P,Br=new P,Xh=new P,zr=new P,Lt=class extends Tt{constructor(e=new lt,t=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_l.fromBufferAttribute(u,e),a?Br.addScaledVector(_l,h):Br.addScaledVector(_l.sub(t),h))}t.add(Br)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(Nr.containsPoint(si.origin)===!1&&(si.intersectSphere(Nr,Wh)===null||si.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Hh.copy(r).invert(),si.copy(e.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,M=S;_<M;_+=3){let T=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=kr(this,f,e,n,c,h,u,T,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let x=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=kr(this,a,e,n,c,h,u,x,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,M=S;_<M;_+=3){let T=_,A=_+1,y=_+2;s=kr(this,f,e,n,c,h,u,T,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let x=m,S=m+1,_=m+2;s=kr(this,a,e,n,c,h,u,x,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function qf(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===$n,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:i}}function kr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);let h=qf(i,e,t,n,Ur,Fr,Or,Xh);if(h){let u=new P;Ln.getBarycoord(Xh,Ur,Fr,Or,u),s&&(h.uv=Ln.getInterpolatedAttribute(s,o,l,c,u,new re)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,o,l,c,u,new re)),a&&(h.normal=Ln.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Ln.getNormal(Ur,Fr,Or,d.normal),h.face=d,h.barycoord=u}return h}var ci=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Mt,h=Mt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Di=new nt,qh=new nt,Vr=[],Yh=new vn,Yf=new nt,vs=new Lt,Ss=new Sn,Ll=class extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Yh.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Yh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Ss.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),qh.multiplyMatrices(n,Di),vs.matrixWorld=qh,vs.raycast(e,Vr);for(let a=0,o=Vr.length;a<o;a++){let l=Vr[a];l.instanceId=r,l.object=this,t.push(l)}Vr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,is,en));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ri=new Sn,Zf=new re(.5,.5),Gr=new P,Yi=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],b=r[9],m=r[10],f=r[11],x=r[12],S=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-a,p-h,f-g,M-x).normalize(),s[1].setComponents(c+a,p+h,f+g,M+x).normalize(),s[2].setComponents(c+o,p+u,f+b,M+S).normalize(),s[3].setComponents(c-o,p-u,f-b,M-S).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,p-d,f-m,M-_).normalize();else if(s[4].setComponents(c-l,p-d,f-m,M-_).normalize(),t===ln)s[5].setComponents(c+l,p+d,f+m,M+_).normalize();else if(t===ki)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);let t=Zf.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fa=class extends Gt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pa=new P,ma=new P,Zh=new nt,bs=new li,Hr=new Sn,yl=new P,Jh=new P,ga=class extends Tt{constructor(e=new lt,t=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)pa.fromBufferAttribute(t,s-1),ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=pa.distanceTo(ma);e.setAttribute("lineDistance",new Be(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;Zh.copy(s).invert(),bs.copy(e.ray).applyMatrix4(Zh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){let f=h.getX(b),x=h.getX(b+1),S=Wr(this,e,bs,l,f,x,b);S&&t.push(S)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(p),f=Wr(this,e,bs,l,b,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){let f=Wr(this,e,bs,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){let b=Wr(this,e,bs,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(pa.fromBufferAttribute(o,s),ma.fromBufferAttribute(o,r),t.distanceSqToSegment(pa,ma,yl,Jh)>n)return;yl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yl);if(!(c<e.near||c>e.far))return{distance:c,point:Jh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $h=new P,Kh=new P,Dl=class extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$h.fromBufferAttribute(t,s),Kh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$h.distanceTo(Kh);e.setAttribute("lineDistance",new Be(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xa=class extends Gt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jh=new nt,Nl=new li,Xr=new Sn,qr=new P,Ul=class extends Tt{constructor(e=new lt,t=new xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;jh.copy(s).invert(),Nl.copy(e.ray).applyMatrix4(jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,b=p;g<b;g++){let m=c.getX(g);qr.fromBufferAttribute(u,m),Qh(qr,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,b=p;g<b;g++)qr.fromBufferAttribute(u,g),Qh(qr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qh(i,e,t,n,s,r,a){let o=Nl.distanceSqToPoint(i);if(o<t){let l=new P;Nl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fs=class extends Bt{constructor(e=[],t=Kn,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Os=class extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends Bt{constructor(e,t,n=hn,s,r,a,o=Mt,l=Mt,c,h=_n,u=1){if(h!==_n&&h!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_a=class extends qn{constructor(e,t=hn,n=Kn,s,r,a=Mt,o=Mt,l,c=_n){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bs=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zi=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function g(b,m,f,x,S,_,M,T,A,y,E){let I=_/A,L=M/y,U=_/2,z=M/2,R=T/2,D=A+1,k=y+1,B=0,K=0,G=new P;for(let Y=0;Y<k;Y++){let j=Y*L-z;for(let Te=0;Te<D;Te++){let Se=Te*I-U;G[b]=Se*x,G[m]=j*S,G[f]=R,c.push(G.x,G.y,G.z),G[b]=0,G[m]=0,G[f]=T>0?1:-1,h.push(G.x,G.y,G.z),u.push(Te/A),u.push(1-Y/y),B+=1}}for(let Y=0;Y<y;Y++)for(let j=0;j<A;j++){let Te=d+j+D*Y,Se=d+j+D*(Y+1),tt=d+(j+1)+D*(Y+1),Je=d+(j+1)+D*Y;l.push(Te,Se,Je),l.push(Se,tt,Je),K+=6}o.addGroup(p,K,E),p+=K,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Fl=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,g=n*2+r,b=s+1,m=new P,f=new P;for(let x=0;x<=g;x++){let S=0,_=0,M=0,T=0;if(x<=n){let E=x/n,I=E*Math.PI/2;_=-h-e*Math.cos(I),M=e*Math.sin(I),T=-e*Math.cos(I),S=E*u}else if(x<=n+r){let E=(x-n)/r;_=-h+E*t,M=e,T=0,S=u+E*d}else{let E=(x-n-r)/n,I=E*Math.PI/2;_=h+e*Math.sin(I),M=e*Math.cos(I),T=e*Math.sin(I),S=u+d+E*u}let A=Math.max(0,Math.min(1,S/p)),y=0;x===0?y=.5/s:x===g&&(y=-.5/s);for(let E=0;E<=s;E++){let I=E/s,L=I*Math.PI*2,U=Math.sin(L),z=Math.cos(L);f.x=-M*z,f.y=_,f.z=M*U,o.push(f.x,f.y,f.z),m.set(-M*z,T,M*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+y,A)}if(x>0){let E=(x-1)*b;for(let I=0;I<s;I++){let L=E+I,U=E+I+1,z=x*b+I,R=x*b+I+1;a.push(L,U,z),a.push(U,R,z)}}}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ol=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},hi=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,b=[],m=n/2,f=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(p,2));function x(){let _=new P,M=new P,T=0,A=(t-e)/n;for(let y=0;y<=r;y++){let E=[],I=y/r,L=I*(t-e)+e;for(let U=0;U<=s;U++){let z=U/s,R=z*l+o,D=Math.sin(R),k=Math.cos(R);M.x=L*D,M.y=-I*n+m,M.z=L*k,u.push(M.x,M.y,M.z),_.set(D,A,k).normalize(),d.push(_.x,_.y,_.z),p.push(z,1-I),E.push(g++)}b.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let I=b[E][y],L=b[E+1][y],U=b[E+1][y+1],z=b[E][y+1];(e>0||E!==0)&&(h.push(I,L,z),T+=3),(t>0||E!==r-1)&&(h.push(L,U,z),T+=3)}c.addGroup(f,T,0),f+=T}function S(_){let M=g,T=new re,A=new P,y=0,E=_===!0?e:t,I=_===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let R=U/s*l+o,D=Math.cos(R),k=Math.sin(R);A.x=E*k,A.y=m*I,A.z=E*D,u.push(A.x,A.y,A.z),d.push(0,I,0),T.x=D*.5+.5,T.y=k*.5*I+.5,p.push(T.x,T.y),g++}for(let U=0;U<s;U++){let z=M+U,R=L+U;_===!0?h.push(R,R+1,z):h.push(R+1,R,z),y+=3}c.addGroup(f,y,_===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zs=class i extends hi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ks=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let S=new P,_=new P,M=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],S),p(t[T+1],_),p(t[T+2],M),l(S,_,M,x)}function l(x,S,_,M){let T=M+1,A=[];for(let y=0;y<=T;y++){A[y]=[];let E=x.clone().lerp(_,y/T),I=S.clone().lerp(_,y/T),L=T-y;for(let U=0;U<=L;U++)U===0&&y===T?A[y][U]=E:A[y][U]=E.clone().lerp(I,U/L)}for(let y=0;y<T;y++)for(let E=0;E<2*(T-y)-1;E++){let I=Math.floor(E/2);E%2===0?(d(A[y][I+1]),d(A[y+1][I]),d(A[y][I])):(d(A[y][I+1]),d(A[y+1][I+1]),d(A[y+1][I]))}}function c(x){let S=new P;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(x),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let x=new P;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];let _=m(x)/2/Math.PI+.5,M=f(x)/Math.PI+.5;a.push(_,1-M)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let S=a[x+0],_=a[x+2],M=a[x+4],T=Math.max(S,_,M),A=Math.min(S,_,M);T>.9&&A<.1&&(S<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,S){let _=x*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){let x=new P,S=new P,_=new P,M=new P,T=new re,A=new re,y=new re;for(let E=0,I=0;E<r.length;E+=9,I+=6){x.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),T.set(a[I+0],a[I+1]),A.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),M.copy(x).add(S).add(_).divideScalar(3);let L=m(M);b(T,I+0,x,L),b(A,I+2,S,L),b(y,I+4,_,L)}}function b(x,S,_,M){M<0&&x.x===1&&(a[S]=x.x-1),_.x===0&&_.z===0&&(a[S]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Yt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new nt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ji=class extends Yt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ya=class extends Ji{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var eu=new P,tu=new P,vl=new Rc,Sl=new Rc,bl=new Rc,va=class extends Yt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(tu.subVectors(s[0],s[1]).add(s[0]),c=tu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(eu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),vl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,b,m),Sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,b,m),bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(vl.calc(l),Sl.calc(l),bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Jf(i,e){let t=1-i;return t*t*e}function $f(i,e){return 2*(1-i)*i*e}function Kf(i,e){return i*i*e}function Ts(i,e,t,n){return Jf(i,e)+$f(i,t)+Kf(i,n)}function jf(i,e){let t=1-i;return t*t*t*e}function Qf(i,e){let t=1-i;return 3*t*t*i*e}function ep(i,e){return 3*(1-i)*i*i*e}function tp(i,e){return i*i*i*e}function ws(i,e,t,n,s){return jf(i,e)+Qf(i,t)+ep(i,n)+tp(i,s)}var Vs=class extends Yt{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ws(e,s.x,r.x,a.x,o.x),ws(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sa=class extends Yt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ws(e,s.x,r.x,a.x,o.x),ws(e,s.y,r.y,a.y,o.y),ws(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gs=class extends Yt{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Yt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends Yt{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(e,s.x,r.x,a.x),Ts(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ws=class extends Yt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(e,s.x,r.x,a.x),Ts(e,s.y,r.y,a.y),Ts(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nu(o,l.x,c.x,h.x,u.x),nu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Ma=Object.freeze({__proto__:null,ArcCurve:ya,CatmullRomCurve3:va,CubicBezierCurve:Vs,CubicBezierCurve3:Sa,EllipseCurve:Ji,LineCurve:Gs,LineCurve3:ba,QuadraticBezierCurve:Hs,QuadraticBezierCurve3:Ws,SplineCurve:Xs}),Ta=class extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ma[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ma[s.type]().fromJSON(s))}return this}},qs=class extends Ta{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gs(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Hs(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Vs(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ji(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ys=class extends qs{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qs().fromJSON(s))}return this}};function np(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Qu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=op(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Zs(r,a,t,o,l,c,0),a}function Qu(i,e,t,n,s){let r;if(s===_p(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=iu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=iu(a/n|0,i[a],i[a+1],r);return r&&$i(r,r.next)&&($s(r),r=r.next),r}function ui(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($i(t,t.next)||xt(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sp(i,n,s,r):ip(i)){e.push(l.i,i.i,c.i),$s(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rp(ui(i),e),Zs(i,e,t,n,s,r,2)):a===2&&ap(i,e,t,n,s,r):Zs(ui(i),e,t,n,s,r,1);break}}}function ip(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ms(s,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),b=Math.max(o,l,c),m=Math.max(h,u,d),f=Bl(p,g,e,t,n),x=Bl(b,m,e,t,n),S=i.prevZ,_=i.nextZ;for(;S&&S.z>=f&&_&&_.z<=x;){if(S.x>=p&&S.x<=b&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ms(o,h,l,u,c,d,S.x,S.y)&&xt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=p&&_.x<=b&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ms(o,h,l,u,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=b&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ms(o,h,l,u,c,d,S.x,S.y)&&xt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=b&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ms(o,h,l,u,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!$i(n,s)&&td(n,t,t.next,s)&&Js(n,s)&&Js(s,n)&&(e.push(n.i,t.i,s.i),$s(t),$s(t.next),t=i=s),t=t.next}while(t!==i);return ui(t)}function ap(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mp(a,o)){let l=nd(a,o);a=ui(a,a.next),l=ui(l,l.next),Zs(a,e,t,n,s,r,0),Zs(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function op(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Qu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pp(c))}s.sort(lp);for(let r=0;r<s.length;r++)t=cp(s[r],t);return t}function lp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cp(i,e){let t=hp(i,e);if(!t)return e;let n=nd(t,i);return ui(n,n.next),ui(t,t.next)}function hp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if($i(i,t))return t;do{if($i(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ed(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Js(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&up(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function up(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function dp(i,e,t,n){let s=i;do s.z===0&&(s.z=Bl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fp(s)}function fp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Bl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ed(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ms(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ed(i,e,t,n,s,r,a,o)}function mp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gp(i,e)&&(Js(i,e)&&Js(e,i)&&xp(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||$i(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $i(i,e){return i.x===e.x&&i.y===e.y}function td(i,e,t,n){let s=Zr(xt(i,e,t)),r=Zr(xt(i,e,n)),a=Zr(xt(t,n,i)),o=Zr(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Yr(i,t,e)||r===0&&Yr(i,n,e)||a===0&&Yr(t,i,n)||o===0&&Yr(t,e,n))}function Yr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Zr(i){return i>0?1:i<0?-1:0}function gp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&td(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Js(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function xp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function nd(i,e){let t=zl(i.i,i.x,i.y),n=zl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function iu(i,e,t,n){let s=zl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var kl=class{static triangulate(e,t,n=2){return np(e,t,n)}},xn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];su(e),ru(n,e);let a=e.length;t.forEach(su);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ru(n,t[l]);let o=kl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function su(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ru(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Vl=class i extends lt{constructor(e=new Ys([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:yp,S,_=!1,M,T,A,y;if(f){S=f.getSpacedPoints(h),_=!0,d=!1;let ne=f.isCatmullRomCurve3?f.closed:!1;M=f.computeFrenetFrames(h,ne),T=new P,A=new P,y=new P}d||(m=0,p=0,g=0,b=0);let E=o.extractPoints(c),I=E.shape,L=E.holes;if(!xn.isClockWise(I)){I=I.reverse();for(let ne=0,se=L.length;ne<se;ne++){let ae=L[ne];xn.isClockWise(ae)&&(L[ne]=ae.reverse())}}function z(ne){let ae=10000000000000001e-36,oe=ne[0];for(let he=1;he<=ne.length;he++){let Ue=he%ne.length,De=ne[Ue],Ve=De.x-oe.x,He=De.y-oe.y,N=Ve*Ve+He*He,it=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(oe.x),Math.abs(oe.y)),$e=ae*it*it;if(N<=$e){ne.splice(Ue,1),he--;continue}oe=De}}z(I),L.forEach(z);let R=L.length,D=I;for(let ne=0;ne<R;ne++){let se=L[ne];I=I.concat(se)}function k(ne,se,ae){return se||Oe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(se,ae)}let B=I.length;function K(ne,se,ae){let oe,he,Ue,De=ne.x-se.x,Ve=ne.y-se.y,He=ae.x-ne.x,N=ae.y-ne.y,it=De*De+Ve*Ve,$e=De*N-Ve*He;if(Math.abs($e)>Number.EPSILON){let C=Math.sqrt(it),v=Math.sqrt(He*He+N*N),V=se.x-Ve/C,X=se.y+De/C,Z=ae.x-N/v,le=ae.y+He/v,ce=((Z-V)*N-(le-X)*He)/(De*N-Ve*He);oe=V+De*ce-ne.x,he=X+Ve*ce-ne.y;let J=oe*oe+he*he;if(J<=2)return new re(oe,he);Ue=Math.sqrt(J/2)}else{let C=!1;De>Number.EPSILON?He>Number.EPSILON&&(C=!0):De<-Number.EPSILON?He<-Number.EPSILON&&(C=!0):Math.sign(Ve)===Math.sign(N)&&(C=!0),C?(oe=-Ve,he=De,Ue=Math.sqrt(it)):(oe=De,he=Ve,Ue=Math.sqrt(it/2))}return new re(oe/Ue,he/Ue)}let G=[];for(let ne=0,se=D.length,ae=se-1,oe=ne+1;ne<se;ne++,ae++,oe++)ae===se&&(ae=0),oe===se&&(oe=0),G[ne]=K(D[ne],D[ae],D[oe]);let Y=[],j,Te=G.concat();for(let ne=0,se=R;ne<se;ne++){let ae=L[ne];j=[];for(let oe=0,he=ae.length,Ue=he-1,De=oe+1;oe<he;oe++,Ue++,De++)Ue===he&&(Ue=0),De===he&&(De=0),j[oe]=K(ae[oe],ae[Ue],ae[De]);Y.push(j),Te=Te.concat(j)}let Se;if(m===0)Se=xn.triangulateShape(D,L);else{let ne=[],se=[];for(let ae=0;ae<m;ae++){let oe=ae/m,he=p*Math.cos(oe*Math.PI/2),Ue=g*Math.sin(oe*Math.PI/2)+b;for(let De=0,Ve=D.length;De<Ve;De++){let He=k(D[De],G[De],Ue);xe(He.x,He.y,-he),oe===0&&ne.push(He)}for(let De=0,Ve=R;De<Ve;De++){let He=L[De];j=Y[De];let N=[];for(let it=0,$e=He.length;it<$e;it++){let C=k(He[it],j[it],Ue);xe(C.x,C.y,-he),oe===0&&N.push(C)}oe===0&&se.push(N)}}Se=xn.triangulateShape(ne,se)}let tt=Se.length,Je=g+b;for(let ne=0;ne<B;ne++){let se=d?k(I[ne],Te[ne],Je):I[ne];_?(A.copy(M.normals[0]).multiplyScalar(se.x),T.copy(M.binormals[0]).multiplyScalar(se.y),y.copy(S[0]).add(A).add(T),xe(y.x,y.y,y.z)):xe(se.x,se.y,0)}for(let ne=1;ne<=h;ne++)for(let se=0;se<B;se++){let ae=d?k(I[se],Te[se],Je):I[se];_?(A.copy(M.normals[ne]).multiplyScalar(ae.x),T.copy(M.binormals[ne]).multiplyScalar(ae.y),y.copy(S[ne]).add(A).add(T),xe(y.x,y.y,y.z)):xe(ae.x,ae.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let se=ne/m,ae=p*Math.cos(se*Math.PI/2),oe=g*Math.sin(se*Math.PI/2)+b;for(let he=0,Ue=D.length;he<Ue;he++){let De=k(D[he],G[he],oe);xe(De.x,De.y,u+ae)}for(let he=0,Ue=L.length;he<Ue;he++){let De=L[he];j=Y[he];for(let Ve=0,He=De.length;Ve<He;Ve++){let N=k(De[Ve],j[Ve],oe);_?xe(N.x,N.y+S[h-1].y,S[h-1].x+ae):xe(N.x,N.y,u+ae)}}}Qe(),$();function Qe(){let ne=s.length/3;if(d){let se=0,ae=B*se;for(let oe=0;oe<tt;oe++){let he=Se[oe];ze(he[2]+ae,he[1]+ae,he[0]+ae)}se=h+m*2,ae=B*se;for(let oe=0;oe<tt;oe++){let he=Se[oe];ze(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let se=0;se<tt;se++){let ae=Se[se];ze(ae[2],ae[1],ae[0])}for(let se=0;se<tt;se++){let ae=Se[se];ze(ae[0]+B*h,ae[1]+B*h,ae[2]+B*h)}}n.addGroup(ne,s.length/3-ne,0)}function $(){let ne=s.length/3,se=0;te(D,se),se+=D.length;for(let ae=0,oe=L.length;ae<oe;ae++){let he=L[ae];te(he,se),se+=he.length}n.addGroup(ne,s.length/3-ne,1)}function te(ne,se){let ae=ne.length;for(;--ae>=0;){let oe=ae,he=ae-1;he<0&&(he=ne.length-1);for(let Ue=0,De=h+m*2;Ue<De;Ue++){let Ve=B*Ue,He=B*(Ue+1),N=se+oe+Ve,it=se+he+Ve,$e=se+he+He,C=se+oe+He;be(N,it,$e,C)}}}function xe(ne,se,ae){l.push(ne),l.push(se),l.push(ae)}function ze(ne,se,ae){ke(ne),ke(se),ke(ae);let oe=s.length/3,he=x.generateTopUV(n,s,oe-3,oe-2,oe-1);ot(he[0]),ot(he[1]),ot(he[2])}function be(ne,se,ae,oe){ke(ne),ke(se),ke(oe),ke(se),ke(ae),ke(oe);let he=s.length/3,Ue=x.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);ot(Ue[0]),ot(Ue[1]),ot(Ue[3]),ot(Ue[1]),ot(Ue[2]),ot(Ue[3])}function ke(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function ot(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ma[s.type]().fromJSON(s)),new i(n,e.options)}},yp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],b=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-u),new re(d,1-g),new re(b,1-f)]:[new re(o,1-l),new re(h,1-u),new re(p,1-g),new re(m,1-f)]}};function vp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gl=class i extends ks{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Hl=class i extends lt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new re,p=new P,g=new P,b=new P,m=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-m,p.z=f*0,b.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:m=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),l.push(p.x,p.y,p.z),b.copy(g)}for(let x=0;x<=t;x++){let S=n+x*h*s,_=Math.sin(S),M=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*M,a.push(u.x,u.y,u.z),d.x=x/t,d.y=T/(e.length-1),o.push(d.x,d.y);let A=l[3*T+0]*_,y=l[3*T+1],E=l[3*T+0]*M;c.push(A,y,E)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){let _=S+x*e.length,M=_,T=_+e.length,A=_+e.length+1,y=_+1;r.push(M,T,y),r.push(A,y,T)}this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Wl=class i extends ks{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ks=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){let x=f*d-a;for(let S=0;S<c;S++){let _=S*u-r;g.push(_,-x,0),b.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){let S=x+c*f,_=x+c*(f+1),M=x+1+c*(f+1),T=x+1+c*f;p.push(S,_,T),p.push(_,M,T)}this.setIndex(p),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(b,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xl=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,p=new P,g=new re;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<s;b++){let m=b*(n+1);for(let f=0;f<n;f++){let x=f+m,S=x,_=x+n+1,M=x+n+2,T=x+1;o.push(S,_,T),o.push(_,M,T)}}this.setIndex(o),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ql=class i extends lt{constructor(e=new Ys([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;xn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let x=g[m];xn.isClockWise(x)===!0&&(g[m]=x.reverse())}let b=xn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let x=g[m];p=p.concat(x)}for(let m=0,f=p.length;m<f;m++){let x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,f=b.length;m<f;m++){let x=b[m],S=x[0]+u,_=x[1]+u,M=x[2]+u;n.push(S,_,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Sp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Sp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Yl=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){let x=[],S=f/n,_=a+S*o,M=e*Math.cos(_),T=Math.sqrt(e*e-M*M),A=0;f===0&&a===0?A=.5/t:f===n&&l===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let E=y/t,I=s+E*r;u.x=-T*Math.cos(I),u.y=M,u.z=T*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(E+A,1-S),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){let S=h[f][x+1],_=h[f][x],M=h[f+1][x],T=h[f+1][x+1];(f!==0||a>0)&&p.push(S,_,T),(f!==n-1||l<Math.PI)&&p.push(_,M,T)}this.setIndex(p),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(b,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zl=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,p=new P,g=new P;for(let b=0;b<=n;b++){let m=a+b/n*o;for(let f=0;f<=s;f++){let x=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),u.push(f/s),u.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=s;m++){let f=(s+1)*b+m-1,x=(s+1)*(b-1)+m-1,S=(s+1)*(b-1)+m,_=(s+1)*b+m;l.push(f,x,_),l.push(x,S,_)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Jl=class i extends lt{constructor(e=new Ws(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new re,h=new P,u=[],d=[],p=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(p,2));function b(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),x(),f()}function m(S){h=e.getPointAt(S/t,h);let _=a.normals[S],M=a.binormals[S];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,y=Math.sin(A),E=-Math.cos(A);l.x=E*_.x+y*M.x,l.y=E*_.y+y*M.y,l.z=E*_.z+y*M.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=t;S++)for(let _=1;_<=s;_++){let M=(s+1)*(S-1)+(_-1),T=(s+1)*S+(_-1),A=(s+1)*S+_,y=(s+1)*(S-1)+_;g.push(M,T,y),g.push(T,A,y)}}function x(){for(let S=0;S<=t;S++)for(let _=0;_<=s;_++)c.x=S/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ma[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(au(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Dt(i){let e={};for(let t=0;t<i.length;t++){let n=pi(i[t]);for(let s in n)e[s]=n[s]}return e}function au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var id={clone:pi,merge:Dt},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Gt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wa=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var js=class extends Gt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new We(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $l=class extends Gt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ea=class extends Gt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends Gt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ni(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ml(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ca=class extends Yn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=e,o=2*t-n;break;case Cl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=e,l=2*n-t;break;case Cl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,x=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*b+.5*g,_=p*m-p*b;for(let M=0;M!==o;++M)r[M]=f*a[h+M]+x*a[c+M]+S*a[l+M]+_*a[u+M];return r}},Ra=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ia=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pa=class extends Yn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),b=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*g;return r}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let b=a[c+g],m=a[l+g],f=p*d+g*2,x=u[f],S=u[f+1],_=e*d+g*2,M=h[_],T=h[_+1],A=Ep(n,t,x,M,s);r[g]=sd(A,b,S,T,m)}return r}};function sd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function wp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ep(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=sd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ni(t,this.TimeBufferType),this.values=Ni(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ni(e.times,Array),values:Ni(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ml(e.settings)&&(n.settings={inTangents:Ni(e.settings.inTangents,Array),outTangents:Ni(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case Kr:t=this.InterpolantFactoryMethodSmooth;break;case wl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Kr;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ml(this.settings)&&(ou(this.settings.inTangents,e),ou(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Cf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ml(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ou(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=oa;var Zn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Es;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="color";var Da=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};Da.prototype.ValueTypeName="number";var Na=class extends Yn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Qt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qs=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Es;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};Ua.prototype.ValueTypeName="vector";var Fa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rd=new Fa,Oa=class{constructor(e){this.manager=e!==void 0?e:rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Kl=class extends Ki{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Tl=new nt,lu=new P,cu=new P,er=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Ht,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Tl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ki||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jr=new P,$r=new Qt,pn=new P,tr=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jr,$r,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,$r,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jr,$r,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,$r,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xn=new P,hu=new re,uu=new re,Ot=class extends tr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,hu,uu),t.subVectors(uu,hu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var jl=class extends er{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},Ql=class extends Ki{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends tr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ec=class extends er{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tc=class extends Ki{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new ec}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var nc=class extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ui=-90,Fi=1,Ba=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Ui,Fi,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Ui,Fi,e,t);r.layers=this.layers,this.add(r);let a=new Ot(Ui,Fi,e,t);a.layers=this.layers,this.add(a);let o=new Ot(Ui,Fi,e,t);o.layers=this.layers,this.add(o);let l=new Ot(Ui,Fi,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Ui,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},za=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Pc="\\[\\]\\.:\\/",Ap=new RegExp("["+Pc+"]","g"),Lc="[^"+Pc+"]",Cp="[^"+Pc.replace("\\.","")+"]",Rp=/((?:WC+[\/:])*)/.source.replace("WC",Lc),Ip=/(WCOD+)?/.source.replace("WCOD",Cp),Pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),Lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),Dp=new RegExp("^"+Rp+Ip+Pp+Lp+"$"),Np=["material","materials","bones","map"],ic=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ap,"")}static parseTrackName(e){let t=Dp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Np.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=ic;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fy=new Float32Array(1);var du=new nt,sc=class{constructor(e,t,n=0,s=1/0){this.ray=new li(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Hi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(e,t=!0,n=[]){return rc(e,this,n,t),n.sort(fu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)rc(e[s],this,n,t);return n.sort(fu),n}};function fu(i,e){return i.distance-e.distance}function rc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)rc(r[a],e,t,!0)}}var Bc=class Bc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Bc.prototype.isMatrix2=!0;var ac=Bc;function Dc(i,e,t,n){let s=Up(n);switch(t){case wc:return i*e;case is:return i*e/s.components*s.byteLength;case Za:return i*e/s.components*s.byteLength;case ei:return i*e*2/s.components*s.byteLength;case Ja:return i*e*2/s.components*s.byteLength;case Ec:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:case eo:return Math.max(i,16)*Math.max(e,8)/4;case Ka:case Qa:return Math.max(i,8)*Math.max(e,8)/2;case to:case no:case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case cr:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bo:case Mo:case To:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wo:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hr:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Up(i){switch(i){case Ht:case Sc:return{byteLength:1,components:1};case ts:case bc:case un:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case hn:case Xa:case en:return{byteLength:4,components:1};case Mc:case Tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let b=u[p];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hm=`#define PI 3.141592653589793
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
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
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
#endif`,zm=`uniform sampler2D dfgLUT;
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
}`,km=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Km=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,o0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,h0=`#define PHONG
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
}`,u0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
}`,f0=`#define TOON
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
}`,p0=`#define TOON
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
}`,m0=`uniform float size;
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,_0=`uniform vec3 color;
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
}`,y0=`uniform float rotation;
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
}`,v0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Vp,alphahash_pars_fragment:Gp,alphamap_fragment:Hp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:$p,begin_vertex:Kp,beginnormal_vertex:jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:dm,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:xm,colorspace_pars_fragment:_m,envmap_fragment:ym,envmap_common_pars_fragment:vm,envmap_pars_fragment:Sm,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Dm,envmap_vertex:Mm,fog_vertex:Tm,fog_pars_vertex:wm,fog_fragment:Em,fog_pars_fragment:Am,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Rm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Pm,lights_pars_begin:Lm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Um,lights_phong_fragment:Fm,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:zm,lights_fragment_begin:km,lights_fragment_maps:Vm,lights_fragment_end:Gm,lightprobes_pars_fragment:Hm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:Zm,map_pars_fragment:Jm,map_particle_fragment:$m,map_particle_pars_fragment:Km,metalnessmap_fragment:jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:sg,normal_fragment_begin:rg,normal_fragment_maps:ag,normal_pars_fragment:og,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:xg,project_vertex:_g,dithering_fragment:yg,dithering_pars_fragment:vg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Tg,shadowmap_vertex:wg,shadowmask_pars_fragment:Eg,skinbase_vertex:Ag,skinning_pars_vertex:Cg,skinning_vertex:Rg,skinnormal_vertex:Ig,specularmap_fragment:Pg,specularmap_pars_fragment:Lg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Fg,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:zg,worldpos_vertex:kg,background_vert:Vg,background_frag:Gg,backgroundCube_vert:Hg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:Yg,depth_frag:Zg,distance_vert:Jg,distance_frag:$g,equirect_vert:Kg,equirect_frag:jg,linedashed_vert:Qg,linedashed_frag:e0,meshbasic_vert:t0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:a0,meshnormal_vert:o0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:x0,shadow_frag:_0,sprite_vert:y0,sprite_frag:v0},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wn={basic:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Dt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Dt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Dt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Dt([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Dt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Dt([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Dt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Dt([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Dt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Dt([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wn.physical={uniforms:Dt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Io={r:0,b:0,g:0},S0=new nt,Rd=new Ge;Rd.set(-1,0,0,0,1,0,0,0,1);function b0(i,e,t,n,s,r){let a=new We(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function p(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){let _=x.backgroundBlurriness>0;S=e.get(S,_)}return S}function g(x){let S=!1,_=p(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),S=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,S){let _=p(S);_&&(_.isCubeTexture||_.mapping===ir)?(c===void 0&&(c=new Lt(new Zi(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:pi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rd),c.material.toneMapped=je.getTransfer(_.colorSpace)!==at,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Lt(new Ks(2,2),new Zt({name:"BackgroundMaterial",uniforms:pi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(Io,Ic(i)),t.buffers.color.setClear(Io.r,Io.g,Io.b,S,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:b,dispose:f}}function M0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,U,z,R,D){let k=!1,B=u(L,R,z,U);r!==B&&(r=B,c(r.object)),k=p(L,R,z,D),k&&g(L,R,z,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,_(L,U,z,R),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,U,z,R){let D=R.wireframe===!0,k=n[U.id];k===void 0&&(k={},n[U.id]=k);let B=L.isInstancedMesh===!0?L.id:0,K=k[B];K===void 0&&(K={},k[B]=K);let G=K[z.id];G===void 0&&(G={},K[z.id]=G);let Y=G[D];return Y===void 0&&(Y=d(l()),G[D]=Y),Y}function d(L){let U=[],z=[],R=[];for(let D=0;D<t;D++)U[D]=0,z[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:R,object:L,attributes:{},index:null}}function p(L,U,z,R){let D=r.attributes,k=U.attributes,B=0,K=z.getAttributes();for(let G in K)if(K[G].location>=0){let j=D[G],Te=k[G];if(Te===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(Te=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(Te=L.instanceColor)),j===void 0||j.attribute!==Te||Te&&j.data!==Te.data)return!0;B++}return r.attributesNum!==B||r.index!==R}function g(L,U,z,R){let D={},k=U.attributes,B=0,K=z.getAttributes();for(let G in K)if(K[G].location>=0){let j=k[G];j===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let Te={};Te.attribute=j,j&&j.data&&(Te.data=j.data),D[G]=Te,B++}r.attributes=D,r.attributesNum=B,r.index=R}function b(){let L=r.newAttributes;for(let U=0,z=L.length;U<z;U++)L[U]=0}function m(L){f(L,0)}function f(L,U){let z=r.newAttributes,R=r.enabledAttributes,D=r.attributeDivisors;z[L]=1,R[L]===0&&(i.enableVertexAttribArray(L),R[L]=1),D[L]!==U&&(i.vertexAttribDivisor(L,U),D[L]=U)}function x(){let L=r.newAttributes,U=r.enabledAttributes;for(let z=0,R=U.length;z<R;z++)U[z]!==L[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function S(L,U,z,R,D,k,B){B===!0?i.vertexAttribIPointer(L,U,z,D,k):i.vertexAttribPointer(L,U,z,R,D,k)}function _(L,U,z,R){b();let D=R.attributes,k=z.getAttributes(),B=U.defaultAttributeValues;for(let K in k){let G=k[K];if(G.location>=0){let Y=D[K];if(Y===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let j=Y.normalized,Te=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;let tt=Se.buffer,Je=Se.type,Qe=Se.bytesPerElement,$=Je===i.INT||Je===i.UNSIGNED_INT||Y.gpuType===Xa;if(Y.isInterleavedBufferAttribute){let te=Y.data,xe=te.stride,ze=Y.offset;if(te.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)f(G.location+be,te.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<G.locationSize;be++)m(G.location+be);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let be=0;be<G.locationSize;be++)S(G.location+be,Te/G.locationSize,Je,j,xe*Qe,(ze+Te/G.locationSize*be)*Qe,$)}else{if(Y.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)f(G.location+te,Y.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let te=0;te<G.locationSize;te++)S(G.location+te,Te/G.locationSize,Je,j,Te*Qe,Te/G.locationSize*te*Qe,$)}}else if(B!==void 0){let j=B[K];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(G.location,j);break;case 3:i.vertexAttrib3fv(G.location,j);break;case 4:i.vertexAttrib4fv(G.location,j);break;default:i.vertexAttrib1fv(G.location,j)}}}}x()}function M(){E();for(let L in n){let U=n[L];for(let z in U){let R=U[z];for(let D in R){let k=R[D];for(let B in k)h(k[B].object),delete k[B];delete R[D]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let z in U){let R=U[z];for(let D in R){let k=R[D];for(let B in k)h(k[B].object),delete k[B];delete R[D]}}delete n[L.id]}function A(L){for(let U in n){let z=n[U];for(let R in z){let D=z[R];if(D[L.id]===void 0)continue;let k=D[L.id];for(let B in k)h(k[B].object),delete k[B];delete D[L.id]}}}function y(L){for(let U in n){let z=n[U],R=L.isInstancedMesh===!0?L.id:0,D=z[R];if(D!==void 0){for(let k in D){let B=D[k];for(let K in B)h(B[K].object),delete B[K];delete D[k]}delete z[R],Object.keys(z).length===0&&delete n[U]}}}function E(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function T0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function w0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ht&&A!==en&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,maxSamples:M,samples:T}}function E0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new on,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,S=x*4,_=f.clippingState||null;l.value=_,_=h(g,d,S,p);for(let M=0;M!==S;++M)_[M]=t[M];f.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let f=p+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=p;S!==b;++S,_+=4)a.copy(u[S]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var rs=4,A0=6,C0=20,R0=256,dr=new ji,ad=new We,zc=null,kc=0,Vc=0,Gc=!1,I0=new P,mi=new P,Lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=I0}=r;zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,kc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:un,format:tn,colorSpace:As,depthBuffer:!1},s=od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=P0(r)),this._blurMaterial=D0(r,e,t),this._ggxMaterial=L0(r,e,t)}return s}_compileMaterial(e){let t=new Lt(new lt,e);this._renderer.compile(t,dr)}_sceneToCubeUV(e,t,n,s,r){let l=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ad),u.toneMapping=cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new Zi,new Us({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,f=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(ad),f=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let M=this._cubeSize;ss(s,_*M,S>2?M:0,M,M),u.setRenderTarget(s),f&&u.render(b,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Kn||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,dr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,p=u*d,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-rs?n-g+rs:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ss(r,m,f,3*b,2*b),s.setRenderTarget(r),s.render(o,dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ss(e,m,f,3*b,2*b),s.setRenderTarget(e),s.render(o,dr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-rs?s-this._lodMax+rs:0),d=4*(this._cubeSize-h);ss(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,dr)}};function P0(i){let e=[],t=[],n=i,s=i-rs+1+A0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,g=new Float32Array(p*d*u),b=new Float32Array(p*d*u);for(let f=0;f<u;f++){let x=f%3*2/3-1,S=f>2?0:-1,_=[x,S,0,x+2/3,S,0,x+2/3,S+1,0,x,S,0,x+2/3,S+1,0,x,S+1,0];g.set(_,p*d*f);for(let M=0;M<d;M++){let T=h[M*2]*2-1,A=h[M*2+1]*2-1;f===0?mi.set(1,A,T):f===1?mi.set(-T,1,-A):f===2?mi.set(-T,A,1):f===3?mi.set(-1,A,-T):f===4?mi.set(-T,-1,A):mi.set(T,A,-1),mi.toArray(b,(f*d+M)*p)}}let m=new lt;m.setAttribute("position",new bt(g,p)),m.setAttribute("outputDirection",new bt(b,p)),t.push(new Lt(m,null)),n>rs&&n--}return{lodMeshes:t,sizeLods:e}}function od(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function L0(i,e,t){return new Zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function D0(i,e,t){return new Zt({name:"SphericalGaussianBlur",defines:{SAMPLES:C0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ld(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function cd(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Do=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zi(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Mn});r.uniforms.tEquirect.value=t;let a=new Lt(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Ct),new Ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function N0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Ga||p===Ha)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new Do(g.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,g=p===Ga||p===Ha,b=p===Kn||p===fi;if(g||b){let m=t.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Lo(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return g&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Lo(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===Ga?d.mapping=Kn:p===Ha&&(d.mapping=fi),d}function l(d){let p=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function U0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&oi("WebGLRenderer: "+n+" extension not supported."),s}}}function F0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,b=0;if(g===void 0)return;if(p!==null){let x=p.array;b=p.version;for(let S=0,_=x.length;S<_;S+=3){let M=x[S+0],T=x[S+1],A=x[S+2];d.push(M,T,T,A,A,M)}}else{let x=g.array;b=g.version;for(let S=0,_=x.length/3-1;S<_;S+=3){let M=S+0,T=S+1,A=S+2;d.push(M,T,T,A,A,M)}}let m=new(g.count>=65535?Ds:Ls)(d,1);m.version=b;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function O0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let b=0;for(let m=0;m<p;m++)b+=d[m];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function B0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,e,t){let n=new WeakMap,s=new pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),b===!0&&(S=3);let _=o.attributes.position.count*S,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*M*4*u),A=new Ps(T,_,M,u);A.type=en,A.needsUpdate=!0;let y=S*4;for(let I=0;I<u;I++){let L=m[I],U=f[I],z=x[I],R=_*M*4*I;for(let D=0;D<L.count;D++){let k=D*y;p===!0&&(s.fromBufferAttribute(L,D),T[R+k+0]=s.x,T[R+k+1]=s.y,T[R+k+2]=s.z,T[R+k+3]=0),g===!0&&(s.fromBufferAttribute(U,D),T[R+k+4]=s.x,T[R+k+5]=s.y,T[R+k+6]=s.z,T[R+k+7]=0),b===!0&&(s.fromBufferAttribute(z,D),T[R+k+8]=s.x,T[R+k+9]=s.y,T[R+k+10]=s.z,T[R+k+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new re(_,M)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function k0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var V0={[fc]:"LINEAR_TONE_MAPPING",[pc]:"REINHARD_TONE_MAPPING",[mc]:"CINEON_TONE_MAPPING",[gc]:"ACES_FILMIC_TONE_MAPPING",[_c]:"AGX_TONE_MAPPING",[yc]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function G0(i,e,t,n,s,r){let a=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new lt;c.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Be([0,2,0,0,2,0],2));let h=new wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Lt(c,h),d=new ji(-1,1,1,-1,0,1),p=null,g=null,b=!1,m,f=null,x=[],S=!1;this.setSize=function(_,M){a.setSize(_,M),o!==null&&o.setSize(_,M),l!==null&&l.setSize(_,M);for(let T=0;T<x.length;T++){let A=x[T];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){x=_,S=x.length>0&&x[0].isRenderPass===!0;let M=a.width,T=a.height;x.length>0&&o===null&&(o=new Vt(M,T,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(M,T,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let y=x[A];y.setSize&&y.setSize(M,T)}},this.begin=function(_,M){if(b||_.toneMapping===cn&&x.length===0)return!1;if(f=M,M!==null){let T=M.width,A=M.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return S===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=cn,!0},this.hasRenderPass=function(){return S},this.end=function(_,M){_.toneMapping=m,b=!0;let T=a,A=o;for(let y=0;y<x.length;y++){let E=x[y];E.enabled!==!1&&(E.render(_,A,T,M),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,h.defines={},je.getTransfer(p)===at&&(h.defines.SRGB_TRANSFER="");let y=V0[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(f),_.render(u,d),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Id=new Bt,Xc=new qn(1,1),Pd=new Ps,Ld=new ua,Dd=new Fs,hd=[],ud=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uo(i,e){let t=ud[e];t===void 0&&(t=new Int32Array(e),ud[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Y0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),Et(t,n)}}function Z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),Et(t,n)}}function J0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),Et(t,n)}}function $0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=t.isReversedDepthBuffer()?Ro:Co,r=Xc):r=Id,t.setTexture2D(e||r,s)}function rx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ld,s)}function ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dd,s)}function ox(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pd,s)}function lx(i){switch(i){case 5126:return H0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return $0;case 35667:case 35671:return K0;case 35668:case 35672:return j0;case 35669:case 35673:return Q0;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}function cx(i,e){i.uniform1fv(this.addr,e)}function hx(i,e){let t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function ux(i,e){let t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function dx(i,e){let t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function fx(i,e){let t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function px(i,e){let t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mx(i,e){let t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gx(i,e){i.uniform1iv(this.addr,e)}function xx(i,e){i.uniform2iv(this.addr,e)}function _x(i,e){i.uniform3iv(this.addr,e)}function yx(i,e){i.uniform4iv(this.addr,e)}function vx(i,e){i.uniform1uiv(this.addr,e)}function Sx(i,e){i.uniform2uiv(this.addr,e)}function bx(i,e){i.uniform3uiv(this.addr,e)}function Mx(i,e){i.uniform4uiv(this.addr,e)}function Tx(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xc:a=Id;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function wx(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ld,r[a])}function Ex(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dd,r[a])}function Ax(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pd,r[a])}function Cx(i){switch(i){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return _x;case 35669:case 35673:return yx;case 5125:return vx;case 36294:return Sx;case 36295:return bx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Ax}}var qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}},Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cx(t.type)}},Zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function md(i,e){i.seq.push(e),i.map[e.id]=e}function Rx(i,e,t){let n=i.name,s=n.length;for(Hc.lastIndex=0;;){let r=Hc.exec(n),a=Hc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){md(t,c===void 0?new qc(o,i,e):new Yc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Zc(o),md(t,u)),t=u}}}var as=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Rx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function gd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ix=37297,Px=0;function Lx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var xd=new Ge;function Dx(i){je._getMatrix(xd,je.workingColorSpace,i);let e=`mat3( ${xd.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Cs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _d(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Lx(i.getShaderSource(e),o)}else return r}function Nx(i,e){let t=Dx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ux={[fc]:"Linear",[pc]:"Reinhard",[mc]:"Cineon",[gc]:"ACESFilmic",[_c]:"AgX",[yc]:"Neutral",[xc]:"Custom"};function Fx(i,e){let t=Ux[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Po=new P;function Ox(){je.getLuminanceCoefficients(Po);let i=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function zx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pr(i){return i!==""}function yd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(Vx,Hx)}var Gx=new Map;function Hx(i,e){let t=qe[e];if(t===void 0){let n=Gx.get(e);if(n!==void 0)t=qe[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jc(t)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(Wx,Xx)}function Xx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qx={[nr]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function Yx(i){return qx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zx={[Kn]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE_UV"};function Jx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $x={[fi]:"ENVMAP_MODE_REFRACTION"};function Kx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$x[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jx={[Va]:"ENVMAP_BLENDING_MULTIPLY",[Uu]:"ENVMAP_BLENDING_MIX",[Fu]:"ENVMAP_BLENDING_ADD"};function Qx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jx[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Yx(t),c=Jx(t),h=Kx(t),u=Qx(t),d=e_(t),p=Bx(t),g=zx(r),b=s.createProgram(),m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),f.length>0&&(f+=`
`)):(m=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),f=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?qe.tonemapping_pars_fragment:"",t.toneMapping!==cn?Fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Nx("linearToOutputTexel",t.outputColorSpace),Ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),a=Jc(a),a=yd(a,t),a=vd(a,t),o=Jc(o),o=yd(o,t),o=vd(o,t),a=Sd(a),o=Sd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=x+m+a,_=x+f+o,M=gd(s,s.VERTEX_SHADER,S),T=gd(s,s.FRAGMENT_SHADER,_);s.attachShader(b,M),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(L){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(b)||"",z=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(T)||"",D=U.trim(),k=z.trim(),B=R.trim(),K=!0,G=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,M,T);else{let Y=_d(s,M,"vertex"),j=_d(s,T,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+Y+`
`+j)}else D!==""?Ne("WebGLProgram: Program Info Log:",D):(k===""||B==="")&&(G=!1);G&&(L.diagnostics={runnable:K,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(M),s.deleteShader(T),y=new as(s,b),E=kx(s,b)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(b,Ix)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=T,this}var n_=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kc(e),t.set(e,n)),n}},Kc=class{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}};function i_(i){return i===ei||i===cr||i===hr}function s_(i,e,t,n,s,r){let a=new Hi,o=new $c,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,E,I,L,U,z){let R=L.fog,D=U.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||k,B),G=K&&K.mapping===ir?K.image.height:null,Y=p[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Te=j!==void 0?j.length:0,Se=0;D.morphAttributes.position!==void 0&&(Se=1),D.morphAttributes.normal!==void 0&&(Se=2),D.morphAttributes.color!==void 0&&(Se=3);let tt,Je,Qe,$;if(Y){let dt=wn[Y];tt=dt.vertexShader,Je=dt.fragmentShader}else{tt=y.vertexShader,Je=y.fragmentShader;let dt=o.getVertexShaderStage(y),st=o.getFragmentShaderStage(y);o.update(y,dt,st),Qe=dt.id,$=st.id}let te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,be=U.isBatchedMesh===!0,ke=!!y.map,ot=!!y.matcap,ne=!!K,se=!!y.aoMap,ae=!!y.lightMap,oe=!!y.bumpMap&&y.wireframe===!1,he=!!y.normalMap,Ue=!!y.displacementMap,De=!!y.emissiveMap,Ve=!!y.metalnessMap,He=!!y.roughnessMap,N=y.anisotropy>0,it=y.clearcoat>0,$e=y.dispersion>0,C=y.retroreflectivity>0,v=y.iridescence>0,V=y.sheen>0,X=y.transmission>0,Z=N&&!!y.anisotropyMap,le=it&&!!y.clearcoatMap,ce=it&&!!y.clearcoatNormalMap,J=it&&!!y.clearcoatRoughnessMap,ee=v&&!!y.iridescenceMap,ue=v&&!!y.iridescenceThicknessMap,Ie=V&&!!y.sheenColorMap,me=V&&!!y.sheenRoughnessMap,de=!!y.specularMap,Pe=!!y.specularColorMap,Fe=!!y.specularIntensityMap,Xe=X&&!!y.transmissionMap,O=X&&!!y.thicknessMap,fe=!!y.gradientMap,Q=!!y.alphaMap,pe=y.alphaTest>0,ve=!!y.alphaHash,ie=!!y.extensions,Le=cn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Ce={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:Je,defines:y.defines,customVertexShaderID:Qe,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:be,batchingColor:be&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:ot,envMap:ne,envMapMode:ne&&K.mapping,envMapCubeUVHeight:G,aoMap:se,lightMap:ae,bumpMap:oe,normalMap:he,displacementMap:Ue,emissiveMap:De,normalMapObjectSpace:he&&y.normalMapType===zu,normalMapTangentSpace:he&&y.normalMapType===ur,packedNormalMap:he&&y.normalMapType===ur&&i_(y.normalMap.format),metalnessMap:Ve,roughnessMap:He,anisotropy:N,anisotropyMap:Z,clearcoat:it,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:J,dispersion:$e,retroreflection:C,iridescence:v,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:V,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:de,specularColorMap:Pe,specularIntensityMap:Fe,transmission:X,transmissionMap:Xe,thicknessMap:O,gradientMap:fe,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:ve,combine:y.combine,mapUv:ke&&g(y.map.channel),aoMapUv:se&&g(y.aoMap.channel),lightMapUv:ae&&g(y.lightMap.channel),bumpMapUv:oe&&g(y.bumpMap.channel),normalMapUv:he&&g(y.normalMap.channel),displacementMapUv:Ue&&g(y.displacementMap.channel),emissiveMapUv:De&&g(y.emissiveMap.channel),metalnessMapUv:Ve&&g(y.metalnessMap.channel),roughnessMapUv:He&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:le&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(y.sheenRoughnessMap.channel),specularMapUv:de&&g(y.specularMap.channel),specularColorMapUv:Pe&&g(y.specularColorMap.channel),specularIntensityMapUv:Fe&&g(y.specularIntensityMap.channel),transmissionMapUv:Xe&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:Q&&g(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(he||N),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(ke||Q),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&he===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Se,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:De&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(f(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function f(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){let E=p[y.type],I;if(E){let L=wn[E];I=id.clone(L.uniforms)}else I=y.uniforms;return I}function _(y,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new t_(i,E,y,s),c.push(I),h.set(E,I)),I}function M(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function r_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function a_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Td(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,b,m,f){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},i[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=g,x.materialVariant=a(d),x.groupOrder=b,x.renderOrder=d.renderOrder,x.z=m,x.group=f),e++,x}function l(d,p,g,b,m,f,x){x.reversedDepth===!0&&(m=-m);let S=o(d,p,g,b,m,f);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(d,p,g,b,m,f){let x=o(d,p,g,b,m,f);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,p){t.length>1&&t.sort(d||a_),n.length>1&&n.sort(p||Md),s.length>1&&s.sort(p||Md)}function u(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function o_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Td,i.set(n,[a])):s>=r.length?(a=new Td,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function l_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function c_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var h_=0;function u_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d_(i){let e=new l_,t=c_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new nt,a=new nt;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,x=0,S=0,_=0,M=0,T=0,A=0,y=0,E=0,I=0;c.sort(u_);for(let U=0,z=c.length;U<z;U++){let R=c[U],D=R.color,k=R.intensity,B=R.distance,K=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ei?K=R.shadow.map.texture:K=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=D.r*k,u+=D.g*k,d+=D.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],k);I++}else if(R.isSunLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,j=t.get(R);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=K;let Te=Y.getViewportCount();for(let Se=0;Se<Te;Se++)n.sunShadowMatrix[b+Se]=Y.getMatrix(Se),n.sunShadowCascade[b+Se]=Y._cascadeData[Se];b+=Te,g++}n.sun[p]=G,p++}else if(R.isDirectionalLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,j=t.get(R);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=G,m++}else if(R.isSpotLight){let G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(D).multiplyScalar(k),G.distance=B,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;let Y=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,Y.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=Y.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=K,A++}x++}else if(R.isRectAreaLight){let G=e.get(R);G.color.copy(D).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=G,S++}else if(R.isPointLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let Y=R.shadow,j=t.get(R);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[f]=j,n.pointShadowMap[f]=K,n.pointShadowMatrix[f]=R.shadow.matrix,T++}n.point[f]=G,f++}else if(R.isHemisphereLight){let G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[_]=G,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==x||L.rectAreaLength!==S||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==A||L.numSpotMaps!==y||L.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=m,n.spot.length=x,n.rectArea.length=S,n.point.length=f,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=x,L.rectAreaLength=S,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=A,L.numSpotMaps=y,L.numLightProbes=I,n.version=h_++)}function l(c,h){let u=0,d=0,p=0,g=0,b=0,m=0,f=h.matrixWorldInverse;for(let x=0,S=c.length;x<S;x++){let _=c[x];if(_.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),u++}else if(_.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(_.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(_.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(_.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),b++}else if(_.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function wd(i){let e=new d_(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function f_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new wd(i),e.set(s,[o])):r>=a.length?(o=new wd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`,g_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],x_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ed=new nt,fr=new P,Wc=new P;function __(i,e,t){let n=new Yi,s=new re,r=new re,a=new pt,o=new Ea,l=new Aa,c={},h=t.maxTextureSize,u={[$n]:zt,[zt]:$n,[bn]:bn},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let f=this.type;this.render=function(T,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===gu&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Mn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=f!==this.type;z&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(D=>D.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,D=T.length;R<D;R++){let k=T[R],B=k.shadow;if(B===void 0){Ne("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let K=B.getFrameExtents();s.multiply(K),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,B.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Qi){if(k.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Vt(s.x,s.y,{format:ei,type:un,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new qn(s.x,s.y,en),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=_n,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mt,B.map.depthTexture.magFilter=Mt}else k.isPointLight?(B.map=new Do(s.x),B.map.depthTexture=new _a(s.x,hn)):(B.map=new Vt(s.x,s.y),B.map.depthTexture=new qn(s.x,s.y,hn)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=_n,this.type===nr?(B.map.depthTexture.compareFunction=G?Ro:Co,B.map.depthTexture.minFilter=Ct,B.map.depthTexture.magFilter=Ct):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mt,B.map.depthTexture.magFilter=Mt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let Y=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();k.isPointLight!==!0&&B.updateMatrices(k,y);for(let j=0;j<Y;j++){let Te=B.getCamera(j);if(k.isPointLight){let Se=B.camera,tt=B.matrix,Je=k.distance||Se.far;Je!==Se.far&&(Se.far=Je,Se.updateProjectionMatrix()),fr.setFromMatrixPosition(k.matrixWorld),Se.position.copy(fr),Wc.copy(Se.position),Wc.add(g_[j]),Se.up.copy(x_[j]),Se.lookAt(Wc),Se.updateMatrixWorld(),tt.makeTranslation(-fr.x,-fr.y,-fr.z),Ed.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ed,Se.coordinateSystem,Se.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,j),i.clear();else{j===0&&(i.setRenderTarget(B.map),i.clear());let Se=B.getViewport(j);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),U.viewport(a)}n=B.getFrustum(j),_(A,y,Te,k,this.type)}B.isPointLightShadow!==!0&&this.type===Qi&&x(B,y),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,I,L)};function x(T,A){let y=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Vt(s.x,s.y,{format:ei,type:un}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,y,d,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,y,p,b,null)}function S(T,A,y,E){let I=null,L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)I=L;else if(I=y.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=I.uuid,z=A.uuid,R=c[U];R===void 0&&(R={},c[U]=R);let D=R[z];D===void 0&&(D=I.clone(),R[z]=D,A.addEventListener("dispose",M)),I=D}if(I.visible=A.visible,I.wireframe=A.wireframe,E===Qi?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:u[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let U=i.properties.get(I);U.light=y}return I}function _(T,A,y,E,I){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Qi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let z=e.update(T),R=T.material;if(Array.isArray(R)){let D=z.groups;for(let k=0,B=D.length;k<B;k++){let K=D[k],G=R[K.materialIndex];if(G&&G.visible){let Y=S(T,G,E,I);T.onBeforeShadow(i,T,A,y,z,Y,K),i.renderBufferDirect(y,null,z,Y,T,K),T.onAfterShadow(i,T,A,y,z,Y,K)}}}else if(R.visible){let D=S(T,R,E,I);T.onBeforeShadow(i,T,A,y,z,D,null),i.renderBufferDirect(y,null,z,D,T,null),T.onAfterShadow(i,T,A,y,z,D,null)}}let U=T.children;for(let z=0,R=U.length;z<R;z++)_(U[z],A,y,E,I)}function M(T){T.target.removeEventListener("dispose",M);for(let y in c){let E=c[y],I=T.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function y_(i,e){function t(){let O=!1,fe=new pt,Q=null,pe=new pt(0,0,0,0);return{setMask:function(ve){Q!==ve&&!O&&(i.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){O=ve},setClear:function(ve,ie,Le,Ce,dt){dt===!0&&(ve*=Ce,ie*=Ce,Le*=Ce),fe.set(ve,ie,Le,Ce),pe.equals(fe)===!1&&(i.clearColor(ve,ie,Le,Ce),pe.copy(fe))},reset:function(){O=!1,Q=null,pe.set(-1,0,0,0)}}}function n(){let O=!1,fe=!1,Q=null,pe=null,ve=null;return{setReversed:function(ie){if(fe!==ie){let Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;let Ce=ve;ve=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(ie){ie?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!O&&(i.depthMask(ie),Q=ie)},setFunc:function(ie){if(fe&&(ie=$u[ie]),pe!==ie){switch(ie){case Qr:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ie}},setLocked:function(ie){O=ie},setClear:function(ie){ve!==ie&&(ve=ie,fe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){O=!1,Q=null,pe=null,ve=null,fe=!1}}}function s(){let O=!1,fe=null,Q=null,pe=null,ve=null,ie=null,Le=null,Ce=null,dt=null;return{setTest:function(st){O||(st?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(st){fe!==st&&!O&&(i.stencilMask(st),fe=st)},setFunc:function(st,nn,dn){(Q!==st||pe!==nn||ve!==dn)&&(i.stencilFunc(st,nn,dn),Q=st,pe=nn,ve=dn)},setOp:function(st,nn,dn){(ie!==st||Le!==nn||Ce!==dn)&&(i.stencilOp(st,nn,dn),ie=st,Le=nn,Ce=dn)},setLocked:function(st){O=st},setClear:function(st){dt!==st&&(i.clearStencil(st),dt=st)},reset:function(){O=!1,fe=null,Q=null,pe=null,ve=null,ie=null,Le=null,Ce=null,dt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,x=null,S=null,_=null,M=null,T=null,A=null,y=new We(0,0,0),E=0,I=!1,L=null,U=null,z=null,R=null,D=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,K=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=K>=2);let Y=null,j={},Te=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),tt=new pt().fromArray(Te),Je=new pt().fromArray(Se);function Qe(O,fe,Q,pe){let ve=new Uint8Array(4),ie=i.createTexture();i.bindTexture(O,ie),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Q;Le++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(fe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ie}let $={};$[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Bi),oe(!1),he(oc),te(i.CULL_FACE),se(Mn);function te(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function xe(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function ze(O,fe){return d[O]!==fe?(i.bindFramebuffer(O,fe),d[O]=fe,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function be(O,fe){let Q=g,pe=!1;if(O){Q=p.get(fe),Q===void 0&&(Q=[],p.set(fe,Q));let ve=O.textures;if(Q.length!==ve.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Le=ve.length;ie<Le;ie++)Q[ie]=i.COLOR_ATTACHMENT0+ie;Q.length=ve.length,pe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,pe=!0);pe&&i.drawBuffers(Q)}function ke(O){return b!==O?(i.useProgram(O),b=O,!0):!1}let ot={[di]:i.FUNC_ADD,[_u]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};ot[vu]=i.MIN,ot[Su]=i.MAX;let ne={[bu]:i.ZERO,[Mu]:i.ONE,[Tu]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[Iu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Lu]:i.ONE_MINUS_CONSTANT_COLOR,[Du]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function se(O,fe,Q,pe,ve,ie,Le,Ce,dt,st){if(O===Mn){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),O!==xu){if(O!==f||st!==I){if((x!==di||M!==di)&&(i.blendEquation(i.FUNC_ADD),x=di,M=di),st)switch(O){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",O);break}else switch(O){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cc:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hc:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",O);break}S=null,_=null,T=null,A=null,y.set(0,0,0),E=0,f=O,I=st}return}ve=ve||fe,ie=ie||Q,Le=Le||pe,(fe!==x||ve!==M)&&(i.blendEquationSeparate(ot[fe],ot[ve]),x=fe,M=ve),(Q!==S||pe!==_||ie!==T||Le!==A)&&(i.blendFuncSeparate(ne[Q],ne[pe],ne[ie],ne[Le]),S=Q,_=pe,T=ie,A=Le),(Ce.equals(y)===!1||dt!==E)&&(i.blendColor(Ce.r,Ce.g,Ce.b,dt),y.copy(Ce),E=dt),f=O,I=!1}function ae(O,fe){O.side===bn?xe(i.CULL_FACE):te(i.CULL_FACE);let Q=O.side===zt;fe&&(Q=!Q),oe(Q),O.blending===es&&O.transparent===!1?se(Mn):se(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let pe=O.stencilWrite;o.setTest(pe),pe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(O){L!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),L=O)}function he(O){O!==pu?(te(i.CULL_FACE),O!==U&&(O===oc?i.cullFace(i.BACK):O===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),U=O}function Ue(O){O!==z&&(B&&i.lineWidth(O),z=O)}function De(O,fe,Q){O?(te(i.POLYGON_OFFSET_FILL),(R!==fe||D!==Q)&&(R=fe,D=Q,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,Q))):xe(i.POLYGON_OFFSET_FILL)}function Ve(O){O?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function He(O){O===void 0&&(O=i.TEXTURE0+k-1),Y!==O&&(i.activeTexture(O),Y=O)}function N(O,fe,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+k-1:Q=Y);let pe=j[Q];pe===void 0&&(pe={type:void 0,texture:void 0},j[Q]=pe),(pe.type!==O||pe.texture!==fe)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(O,fe||$[O]),pe.type=O,pe.texture=fe)}function it(){let O=j[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function V(){try{i.texSubImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function le(){try{i.texStorage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ce(){try{i.texStorage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ee(){try{i.texImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ue(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Ie(O,fe){u[O]!==fe&&(i.pixelStorei(O,fe),u[O]=fe)}function me(O){tt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function de(O){Je.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Je.copy(O))}function Pe(O,fe){let Q=c.get(fe);Q===void 0&&(Q=new WeakMap,c.set(fe,Q));let pe=Q.get(O);pe===void 0&&(pe=i.getUniformBlockIndex(fe,O.name),Q.set(O,pe))}function Fe(O,fe){let pe=c.get(fe).get(O);l.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,O.__bindingPointIndex),l.set(fe,pe))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,j={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,x=null,S=null,_=null,M=null,T=null,A=null,y=new We(0,0,0),E=0,I=!1,L=null,U=null,z=null,R=null,D=null,tt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:xe,bindFramebuffer:ze,drawBuffers:be,useProgram:ke,setBlending:se,setMaterial:ae,setFlipSided:oe,setCullFace:he,setLineWidth:Ue,setPolygonOffset:De,setScissorTest:Ve,activeTexture:He,bindTexture:N,unbindTexture:it,compressedTexImage2D:$e,compressedTexImage3D:C,texImage2D:J,texImage3D:ee,pixelStorei:Ie,getParameter:ue,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:le,texStorage3D:ce,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:me,viewport:de,reset:Xe}}function v_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,v){return g?new OffscreenCanvas(C,v):Rs("canvas")}function m(C,v,V){let X=1,Z=$e(C);if((Z.width>V||Z.height>V)&&(X=V/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let le=Math.floor(X*Z.width),ce=Math.floor(X*Z.height);d===void 0&&(d=b(le,ce));let J=v?b(le,ce):d;return J.width=le,J.height=ce,J.getContext("2d").drawImage(C,0,0,le,ce),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+le+"x"+ce+")."),J}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function f(C){return C.generateMipmaps}function x(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,V,X,Z,le=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;X&&(ce=e.get("EXT_texture_norm16"),ce||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8),V===i.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),V===i.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),v===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8),V===i.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),V===i.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),V===i.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let ee=le?Cs:je.getTransfer(Z);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=ee===at?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),V===i.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(C,v){let V;return C?v===null||v===hn||v===ns?V=i.DEPTH24_STENCIL8:v===en?V=i.DEPTH32F_STENCIL8:v===ts&&(V=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hn||v===ns?V=i.DEPTH_COMPONENT24:v===en?V=i.DEPTH_COMPONENT32F:v===ts&&(V=i.DEPTH_COMPONENT16),V}function T(C,v){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mt&&C.minFilter!==Ct?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),L(v)}function E(C){let v=n.get(C);if(v.__webglInit===void 0)return;let V=C.source,X=p.get(V);if(X){let Z=X[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(C),Object.keys(X).length===0&&p.delete(V)}n.remove(C)}function I(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let V=C.source,X=p.get(V);delete X[v.__cacheKey],a.memory.textures--}function L(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Z=0;Z<v.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=C.textures;for(let X=0,Z=V.length;X<Z;X++){let le=n.get(V[X]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(V[X])}n.remove(C)}let U=0;function z(){U=0}function R(){return U}function D(C){U=C}function k(){let C=U;return C>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function B(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function K(C,v){let V=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let X=C.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,C,v);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function G(C,v){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){xe(V,C,v);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function Y(C,v){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){xe(V,C,v);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function j(C,v){let V=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){ze(V,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let Te={[zi]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},Se={[Mt]:i.NEAREST,[Ou]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},tt={[Vu]:i.NEVER,[qu]:i.ALWAYS,[Gu]:i.LESS,[Co]:i.LEQUAL,[Hu]:i.EQUAL,[Ro]:i.GEQUAL,[Wu]:i.GREATER,[Xu]:i.NOTEQUAL};function Je(C,v){if(v.type===en&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ct||v.magFilter===Wa||v.magFilter===sr||v.magFilter===jn||v.minFilter===Ct||v.minFilter===Wa||v.minFilter===sr||v.minFilter===jn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Te[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Te[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Te[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Se[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,tt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mt||v.minFilter!==sr&&v.minFilter!==jn||v.type===en&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Qe(C,v){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let X=v.source,Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));let le=B(v);if(le!==C.__cacheKey){Z[le]===void 0&&(Z[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[le].usedTimes++;let ce=Z[C.__cacheKey];ce!==void 0&&(Z[C.__cacheKey].usedTimes--,ce.usedTimes===0&&I(v)),C.__cacheKey=le,C.__webglTexture=Z[le].texture}return V}function $(C,v,V){return Math.floor(Math.floor(C/V)/v)}function te(C,v,V,X){let le=C.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,X,v.data);else{le.sort((Ie,me)=>Ie.start-me.start);let ce=0;for(let Ie=1;Ie<le.length;Ie++){let me=le[ce],de=le[Ie],Pe=me.start+me.count,Fe=$(de.start,v.width,4),Xe=$(me.start,v.width,4);de.start<=Pe+1&&Fe===Xe&&$(de.start+de.count-1,v.width,4)===Fe?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ie=0,me=le.length;Ie<me;Ie++){let de=le[Ie],Pe=Math.floor(de.start/4),Fe=Math.ceil(de.count/4),Xe=Pe%v.width,O=Math.floor(Pe/v.width),fe=Fe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Xe,O,fe,Q,V,X,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function xe(C,v,V){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let Z=Qe(C,v),le=v.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+V);let ce=n.get(le);if(le.version!==ce.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let Q=je.getPrimaries(je.workingColorSpace),pe=v.colorSpace===Fn?null:je.getPrimaries(v.colorSpace),ve=v.colorSpace===Fn||Q===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=m(v.image,!1,s.maxTextureSize);ee=it(v,ee);let ue=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),me=_(v.internalFormat,ue,Ie,v.normalized,v.colorSpace,v.isVideoTexture);Je(X,v);let de,Pe=v.mipmaps,Fe=v.isVideoTexture!==!0,Xe=ce.__version===void 0||Z===!0,O=le.dataReady,fe=T(v,ee);if(v.isDepthTexture)me=M(v.format===Qn,v.type),Xe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,me,ee.width,ee.height,0,ue,Ie,null));else if(v.isDataTexture)if(Pe.length>0){Fe&&Xe&&t.texStorage2D(i.TEXTURE_2D,fe,me,Pe[0].width,Pe[0].height);for(let Q=0,pe=Pe.length;Q<pe;Q++)de=Pe[Q],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Ie,de.data):t.texImage2D(i.TEXTURE_2D,Q,me,de.width,de.height,0,ue,Ie,de.data);v.generateMipmaps=!1}else Fe?(Xe&&t.texStorage2D(i.TEXTURE_2D,fe,me,ee.width,ee.height),O&&te(v,ee,ue,Ie)):t.texImage2D(i.TEXTURE_2D,0,me,ee.width,ee.height,0,ue,Ie,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Pe[0].width,Pe[0].height,ee.depth);for(let Q=0,pe=Pe.length;Q<pe;Q++)if(de=Pe[Q],v.format!==tn)if(ue!==null)if(Fe){if(O)if(v.layerUpdates.size>0){let ve=Dc(de.width,de.height,v.format,v.type);for(let ie of v.layerUpdates){let Le=de.data.subarray(ie*ve/de.data.BYTES_PER_ELEMENT,(ie+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ie,de.width,de.height,1,ue,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,ee.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,ee.depth,0,de.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,ee.depth,ue,Ie,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,ee.depth,0,ue,Ie,de.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Fe&&Xe&&t.texStorage2D(i.TEXTURE_2D,fe,me,Pe[0].width,Pe[0].height);for(let Q=0,pe=Pe.length;Q<pe;Q++)de=Pe[Q],v.format!==tn?ue!==null?Fe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,me,de.width,de.height,0,de.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Ie,de.data):t.texImage2D(i.TEXTURE_2D,Q,me,de.width,de.height,0,ue,Ie,de.data)}else if(v.isDataArrayTexture)if(Fe){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,ee.width,ee.height,ee.depth),O)if(v.layerUpdates.size>0){let Q=Dc(ee.width,ee.height,v.format,v.type);for(let pe of v.layerUpdates){let ve=ee.data.subarray(pe*Q/ee.data.BYTES_PER_ELEMENT,(pe+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,ue,Ie,ve)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(v.isData3DTexture)Fe?(Xe&&t.texStorage3D(i.TEXTURE_3D,fe,me,ee.width,ee.height,ee.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)):t.texImage3D(i.TEXTURE_3D,0,me,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(v.isFramebufferTexture){if(Xe)if(Fe)t.texStorage2D(i.TEXTURE_2D,fe,me,ee.width,ee.height);else{let Q=ee.width,pe=ee.height;for(let ve=0;ve<fe;ve++)t.texImage2D(i.TEXTURE_2D,ve,me,Q,pe,0,ue,Ie,null),Q>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),u.add(v),Q.onpaint=pe=>{let ve=pe.changedElements;for(let ie of u)ve.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ve=i.RGBA,ie=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,ie,Le,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Fe&&Xe){let Q=$e(Pe[0]);t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height)}for(let Q=0,pe=Pe.length;Q<pe;Q++)de=Pe[Q],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue,Ie,de):t.texImage2D(i.TEXTURE_2D,Q,me,ue,Ie,de);v.generateMipmaps=!1}else if(Fe){if(Xe){let Q=$e(ee);t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ie,ee)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,Ie,ee);f(v)&&x(X),ce.__version=le.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ze(C,v,V){if(v.image.length!==6)return;let X=Qe(C,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let le=n.get(Z);if(Z.version!==le.__version||X===!0){t.activeTexture(i.TEXTURE0+V);let ce=je.getPrimaries(je.workingColorSpace),J=v.colorSpace===Fn?null:je.getPrimaries(v.colorSpace),ee=v.colorSpace===Fn||ce===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ue=v.isCompressedTexture||v.image[0].isCompressedTexture,Ie=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ue&&!Ie?me[ie]=m(v.image[ie],!0,s.maxCubemapSize):me[ie]=Ie?v.image[ie].image:v.image[ie],me[ie]=it(v,me[ie]);let de=me[0],Pe=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),Xe=_(v.internalFormat,Pe,Fe,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,fe=le.__version===void 0||X===!0,Q=Z.dataReady,pe=T(v,de);Je(i.TEXTURE_CUBE_MAP,v);let ve;if(ue){O&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Xe,de.width,de.height);for(let ie=0;ie<6;ie++){ve=me[ie].mipmaps;for(let Le=0;Le<ve.length;Le++){let Ce=ve[Le];v.format!==tn?Pe!==null?O?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Xe,Ce.width,Ce.height,0,Ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ce.width,Ce.height,Pe,Fe,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Xe,Ce.width,Ce.height,0,Pe,Fe,Ce.data)}}}else{if(ve=v.mipmaps,O&&fe){ve.length>0&&pe++;let ie=$e(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Xe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ie){O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Pe,Fe,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,me[ie].width,me[ie].height,0,Pe,Fe,me[ie].data);for(let Le=0;Le<ve.length;Le++){let dt=ve[Le].image[ie].image;O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,dt.width,dt.height,Pe,Fe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Xe,dt.width,dt.height,0,Pe,Fe,dt.data)}}else{O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,Fe,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,Pe,Fe,me[ie]);for(let Le=0;Le<ve.length;Le++){let Ce=ve[Le];O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Pe,Fe,Ce.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Xe,Pe,Fe,Ce.image[ie])}}}f(v)&&x(i.TEXTURE_CUBE_MAP),le.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function be(C,v,V,X,Z,le){let ce=r.convert(V.format,V.colorSpace),J=r.convert(V.type),ee=_(V.internalFormat,ce,J,V.normalized,V.colorSpace),ue=n.get(v),Ie=n.get(V);if(Ie.__renderTarget=v,!ue.__hasExternalTextures){let me=Math.max(1,v.width>>le),de=Math.max(1,v.height>>le);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,le,ee,me,de,v.depth,0,ce,J,null):t.texImage2D(Z,le,ee,me,de,0,ce,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),He(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,Ie.__webglTexture,0,Ve(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,Ie.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(C,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let X=v.depthTexture,Z=X&&X.isDepthTexture?X.type:null,le=M(v.stencilBuffer,Z),ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(v),le,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,C)}else{let X=v.textures;for(let Z=0;Z<X.length;Z++){let le=X[Z],ce=r.convert(le.format,le.colorSpace),J=r.convert(le.type),ee=_(le.internalFormat,ce,J,le.normalized,le.colorSpace);He(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(v),ee,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(C,v,V){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v.depthTexture);let ue=r.convert(v.depthTexture.format),Ie=r.convert(v.depthTexture.type),me;v.depthTexture.format===_n?me=i.DEPTH_COMPONENT24:v.depthTexture.format===Qn&&(me=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,v.width,v.height,0,ue,Ie,null)}}else K(v.depthTexture,0);let le=Z.__webglTexture,ce=Ve(v),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ee=v.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===_n)He(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,le,0);else if(v.depthTexture.format===Qn)He(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){let v=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)ot(v.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?ot(v.__webglFramebuffer[0],C,0):ot(v.__webglFramebuffer,C,0)}else if(V){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),ke(v.__webglDepthbuffer[X],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,le)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ke(v.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(C,v,V){let X=n.get(C);v!==void 0&&be(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ne(C)}function ae(C){let v=C.texture,V=n.get(C),X=n.get(v);C.addEventListener("dispose",y);let Z=C.textures,le=C.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),le){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let ee=0;ee<v.mipmaps.length;ee++)V.__webglFramebuffer[J][ee]=i.createFramebuffer()}else V.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)V.__webglFramebuffer[J]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ce)for(let J=0,ee=Z.length;J<ee;J++){let ue=n.get(Z[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&He(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ee=Z[J];V.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[J]);let ue=r.convert(ee.format,ee.colorSpace),Ie=r.convert(ee.type),me=_(ee.internalFormat,ue,Ie,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),de=Ve(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,V.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)be(V.__webglFramebuffer[J][ee],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else be(V.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(v)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,ee=Z.length;J<ee;J++){let ue=Z[J],Ie=n.get(ue),me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Ie.__webglTexture),Je(me,ue),be(V.__webglFramebuffer,C,ue,i.COLOR_ATTACHMENT0+J,me,0),f(ue)&&x(me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),Je(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)be(V.__webglFramebuffer[ee],C,v,i.COLOR_ATTACHMENT0,J,ee);else be(V.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);f(v)&&x(J),t.unbindTexture()}C.depthBuffer&&ne(C)}function oe(C){let v=C.textures;for(let V=0,X=v.length;V<X;V++){let Z=v[V];if(f(Z)){let le=S(C),ce=n.get(Z).__webglTexture;t.bindTexture(le,ce),x(le),t.unbindTexture()}}}let he=[],Ue=[];function De(C){if(C.samples>0){if(He(C)===!1){let v=C.textures,V=C.width,X=C.height,Z=i.COLOR_BUFFER_BIT,le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(C),J=v.length>1;if(J)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Ie=n.get(v[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,V,X,0,0,V,X,Z,i.NEAREST),l===!0&&(he.length=0,Ue.length=0,he.push(i.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(he.push(le),Ue.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Ie=n.get(v[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ve(C){return Math.min(s.maxSamples,C.samples)}function He(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function it(C,v){let V=C.colorSpace,X=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==As&&V!==Fn&&(je.getTransfer(V)===at?(X!==tn||Z!==Ht)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",V)),v}function $e(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.getTextureUnits=R,this.setTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=se,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=be,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function S_(i,e){function t(n,s=Fn){let r,a=je.getTransfer(s);if(n===Ht)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sc)return i.BYTE;if(n===bc)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===hn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===tn)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===is)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===ei)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===Qa||n===eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===no||n===io||n===so||n===ro||n===cr||n===ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===to||n===no)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===so)return r.COMPRESSED_R11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cr)return r.COMPRESSED_RG11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===_o||n===yo||n===vo||n===So)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===Mo||n===To)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wo||n===Eo||n===hr||n===Ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zt({vertexShader:b_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends yn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,b=typeof XRWebGLBinding!="undefined",m=new jc,f={},x=t.getContextAttributes(),S=null,_=null,M=[],T=[],A=new re,y=null,E=null,I=new Ot;I.viewport=new pt;let L=new Ot;L.viewport=new pt;let U=[I,L],z=new za,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=M[$];return te===void 0&&(te=new Wi,M[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=M[$];return te===void 0&&(te=new Wi,M[$]=te),te.getGripSpace()},this.getHand=function($){let te=M[$];return te===void 0&&(te=new Wi,M[$]=te),te.getHandSpace()};function k($){let te=T.indexOf($.inputSource);if(te===-1)return;let xe=M[te];xe!==void 0&&(xe.update($.inputSource,$.frame,c||a),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",K);for(let $=0;$<M.length;$++){let te=T[$];te!==null&&(T[$]=null,M[$].disconnect(te))}R=null,D=null,m.reset();for(let $ in f)delete f[$];if(e.setRenderTarget(S),p=null,d=null,u=null,s=null,_=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ze=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=x.stencil?Qn:_n,ze=x.stencil?ns:hn);let ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Vt(d.textureWidth,d.textureHeight,{format:tn,type:Ht,depthTexture:new qn(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Vt(p.framebufferWidth,p.framebufferHeight,{format:tn,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let te=0;te<$.removed.length;te++){let xe=$.removed[te],ze=T.indexOf(xe);ze>=0&&(T[ze]=null,M[ze].disconnect(xe))}for(let te=0;te<$.added.length;te++){let xe=$.added[te],ze=T.indexOf(xe);if(ze===-1){for(let ke=0;ke<M.length;ke++)if(ke>=T.length){T.push(xe),ze=ke;break}else if(T[ke]===null){T[ke]=xe,ze=ke;break}if(ze===-1)break}let be=M[ze];be&&be.connect(xe)}}let G=new P,Y=new P;function j($,te,xe){G.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);let ze=G.distanceTo(Y),be=te.projectionMatrix.elements,ke=xe.projectionMatrix.elements,ot=be[14]/(be[10]-1),ne=be[14]/(be[10]+1),se=(be[9]+1)/be[5],ae=(be[9]-1)/be[5],oe=(be[8]-1)/be[0],he=(ke[8]+1)/ke[0],Ue=ot*oe,De=ot*he,Ve=ze/(-oe+he),He=Ve*-oe;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(He),$.translateZ(Ve),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let N=ot+Ve,it=ne+Ve,$e=Ue-He,C=De+(ze-He),v=se*ne/it*N,V=ae*ne/it*N;$.projectionMatrix.makePerspective($e,C,v,V,N,it),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Te($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,xe=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),z.near=L.near=I.near=te,z.far=L.far=I.far=xe,(R!==z.near||D!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),R=z.near,D=z.far),z.layers.mask=$.layers.mask|6,I.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let ze=$.parent,be=z.cameras;Te(z,ze);for(let ke=0;ke<be.length;ke++)Te(be[ke],ze);be.length===2?j(z,I,L):z.projectionMatrix.copy(I.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),Se($,z,ze)};function Se($,te,xe){xe===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=la*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return f[$]};let tt=null;function Je($,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ze=!1;xe.length!==z.cameras.length&&(z.cameras.length=0,ze=!0);for(let ne=0;ne<xe.length;ne++){let se=xe[ne],ae=null;if(p!==null)ae=p.getViewport(se);else{let he=u.getViewSubImage(d,se);ae=he.viewport,ne===0&&(e.setRenderTargetTextures(_,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(_))}let oe=U[ne];oe===void 0&&(oe=new Ot,oe.layers.enable(ne),oe.viewport=new pt,U[ne]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),ne===0&&(z.matrix.copy(oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ze===!0&&z.cameras.push(oe)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ne=u.getDepthInformation(xe[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(be&&be.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let ne=0;ne<xe.length;ne++){let se=xe[ne].camera;if(se){let ae=f[se];ae||(ae=new Bs,f[se]=ae);let oe=u.getCameraImage(se);ae.sourceTexture=oe}}}}for(let xe=0;xe<M.length;xe++){let ze=T[xe],be=M[xe];ze!==null&&be!==void 0&&be.update(ze,te,c||a)}tt&&tt($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Qe=new Cd;Qe.setAnimationLoop(Je),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}},T_=new nt,Nd=new Ge;Nd.set(-1,0,0,0,1,0,0,0,1);function w_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ic(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,S,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x=e.get(f),S=x.envMap,_=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let T=M.program;n.uniformBlockBinding(_,T)}function c(_,M){let T=s[_.id];T===void 0&&(m(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",x));let A=M.program;n.updateUBOMapping(_,A);let y=e.render.frame;r[_.id]!==y&&(d(_),r[_.id]=y)}function h(_){let M=u();_.__bindingPointIndex=M;let T=i.createBuffer(),A=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let M=s[_.id],T=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,E=T.length;y<E;y++){let I=T[y];if(Array.isArray(I))for(let L=0,U=I.length;L<U;L++)p(I[L],y,L,A);else p(I,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,T,A){if(b(_,M,T,A)===!0){let y=_.__offset,E=_.value;if(Array.isArray(E)){let I=0;for(let L=0;L<E.length;L++){let U=E[L],z=f(U);g(U,_.__data,I),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,M,T){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,T)}function b(_,M,T,A){let y=_.value,E=M+"_"+T;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{let I=A[E];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(_){let M=_.uniforms,T=0,A=16;for(let E=0,I=M.length;E<I;E++){let L=Array.isArray(M[E])?M[E]:[M[E]];for(let U=0,z=L.length;U<z;U++){let R=L[U],D=Array.isArray(R.value)?R.value:[R.value];for(let k=0,B=D.length;k<B;k++){let K=D[k],G=f(K),Y=T%A,j=Y%G.boundary,Te=Y+j;T+=j,Te!==0&&A-Te<G.storage&&(T+=A-Te),R.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=T,T+=G.storage}}}let y=T%A;return y>0&&(T+=A-y),_.__size=T,_.__cache={},this}function f(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",_),M}function x(_){let M=_.target;M.removeEventListener("dispose",x);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tn=null;function C_(){return Tn===null&&(Tn=new ci(A_,16,16,ei,un),Tn.name="DFG_LUT",Tn.minFilter=Ct,Tn.magFilter=Ct,Tn.wrapS=gn,Tn.wrapT=gn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var Ad=class{constructor(e={}){let{canvas:t=Yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ht}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=p,m=new Set([$a,Ja,Za]),f=new Set([Ht,hn,ts,ns,qa,Ya]),x=new Uint32Array(4),S=new Int32Array(4),_=new P,M=null,T=null,A=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,U=null,z=null,R=null,D=null;this._outputColorSpace=Ft;let k=0,B=0,K=null,G=-1,Y=null,j=new pt,Te=new pt,Se=null,tt=new We(0),Je=0,Qe=t.width,$=t.height,te=1,xe=null,ze=null,be=new pt(0,0,Qe,$),ke=new pt(0,0,Qe,$),ot=!1,ne=new Yi,se=!1,ae=!1,oe=new nt,he=new P,Ue=new pt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function He(){return K===null?te:1}let N=n;function it(w,F){return t.getContext(w,F)}let $e,C,v,V,X,Z,le,ce,J,ee,ue,Ie,me,de,Pe,Fe,Xe,O,fe,Q,pe,ve,ie;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",nn,!1),N===null){let F="webgl2";if(N=it(F,w),N===null)throw it(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(w){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Oe("WebGLRenderer: "+w.message),w}function Le(){$e=new U0(N),$e.init(),pe=new S_(N,$e),C=new w0(N,$e,e,pe),v=new y_(N,$e),C.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),z=N.createFramebuffer(),R=N.createFramebuffer(),D=N.createFramebuffer(),V=new B0(N),X=new r_,Z=new v_(N,$e,v,X,C,pe,V),le=new N0(I),ce=new kp(N),ve=new M0(N,ce),J=new F0(N,ce,V,ve),ee=new k0(N,J,ce,ve,V),O=new z0(N,C,Z),Pe=new E0(X),ue=new s_(I,le,$e,C,ve,Pe),Ie=new w_(I,X),me=new o_,de=new f_($e),Xe=new b0(I,le,v,ee,g,l),Fe=new __(I,ee,C),ie=new E_(N,V,C,v),fe=new T0(N,$e,V),Q=new O0(N,$e,V),V.programs=ue.programs,I.capabilities=C,I.extensions=$e,I.properties=X,I.renderLists=me,I.shadowMap=Fe,I.state=v,I.info=V}b!==Ht&&(E=new G0(b,t.width,t.height,o,s,r));let Ce=new Qc(I,N);this.xr=Ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(Qe,$,!1))},this.getSize=function(w){return w.set(Qe,$)},this.setSize=function(w,F,q=!0){if(Ce.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=w,$=F,t.width=Math.floor(w*te),t.height=Math.floor(F*te),q===!0&&(t.style.width=w+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Qe*te,$*te).floor()},this.setDrawingBufferSize=function(w,F,q){Qe=w,$=F,te=q,t.width=Math.floor(w*q),t.height=Math.floor(F*q),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(b===Ht){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,F,q,H){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,F,q,H),v.viewport(j.copy(be).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(ke)},this.setScissor=function(w,F,q,H){w.isVector4?ke.set(w.x,w.y,w.z,w.w):ke.set(w,F,q,H),v.scissor(Te.copy(ke).multiplyScalar(te).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){v.setScissorTest(ot=w)},this.setOpaqueSort=function(w){xe=w},this.setTransparentSort=function(w){ze=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,q=!0){let H=0;if(w){let W=!1;if(K!==null){let ye=K.texture.format;W=m.has(ye)}if(W){let ye=K.texture.type,we=f.has(ye),_e=Xe.getClearColor(),Ee=Xe.getClearAlpha(),Re=_e.r,Ye=_e.g,Ke=_e.b;we?(x[0]=Re,x[1]=Ye,x[2]=Ke,x[3]=Ee,N.clearBufferuiv(N.COLOR,0,x)):(S[0]=Re,S[1]=Ye,S[2]=Ke,S[3]=Ee,N.clearBufferiv(N.COLOR,0,S))}else H|=N.COLOR_BUFFER_BIT}F&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Xe.dispose(),me.dispose(),de.dispose(),X.dispose(),le.dispose(),ee.dispose(),ve.dispose(),ie.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",vh),Ce.removeEventListener("sessionend",Sh),ti.stop()};function dt(w){w.preventDefault(),Is("WebGLRenderer: Context Lost."),L=!0}function st(){Is("WebGLRenderer: Context Restored."),L=!1;let w=V.autoReset,F=Fe.enabled,q=Fe.autoUpdate,H=Fe.needsUpdate,W=Fe.type;Le(),V.autoReset=w,Fe.enabled=F,Fe.autoUpdate=q,Fe.needsUpdate=H,Fe.type=W}function nn(w){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dn(w){let F=w.target;F.removeEventListener("dispose",dn),yf(F)}function yf(w){vf(w),X.remove(w)}function vf(w){let F=X.get(w).programs;F!==void 0&&(F.forEach(function(q){ue.releaseProgram(q)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,q,H,W,ye){F===null&&(F=De);let we=W.isMesh&&W.matrixWorld.determinantAffine()<0,_e=Mf(w,F,q,H,W);v.setMaterial(H,we);let Ee=q.index,Re=1;if(H.wireframe===!0){if(Ee=J.getWireframeAttribute(q),Ee===void 0)return;Re=2}let Ye=q.drawRange,Ke=q.attributes.position,Ae=Ye.start*Re,rt=(Ye.start+Ye.count)*Re;ye!==null&&(Ae=Math.max(Ae,ye.start*Re),rt=Math.min(rt,(ye.start+ye.count)*Re)),Ee!==null?(Ae=Math.max(Ae,0),rt=Math.min(rt,Ee.count)):Ke!=null&&(Ae=Math.max(Ae,0),rt=Math.min(rt,Ke.count));let vt=rt-Ae;if(vt<0||vt===1/0)return;ve.setup(W,H,_e,q,Ee);let mt,ut=fe;if(Ee!==null&&(mt=ce.get(Ee),ut=Q,ut.setIndex(mt)),W.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*He()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(W.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),v.setLineWidth(Rt*He()),W.isLineSegments?ut.setMode(N.LINES):W.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else W.isPoints?ut.setMode(N.POINTS):W.isSprite&&ut.setMode(N.TRIANGLES);if(W.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Rt=W._multiDrawStarts,Me=W._multiDrawCounts,Nt=W._multiDrawCount,et=Ee?ce.get(Ee).bytesPerElement:1,Kt=X.get(H).currentProgram.getUniforms();for(let fn=0;fn<Nt;fn++)Kt.setValue(N,"_gl_DrawID",fn),ut.render(Rt[fn]/et,Me[fn])}else if(W.isInstancedMesh)ut.renderInstances(Ae,vt,W.count);else if(q.isInstancedBufferGeometry){let Rt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,Rt);ut.renderInstances(Ae,vt,Me)}else ut.render(Ae,vt)};function yh(w,F,q,H){U!==null&&w.isNodeMaterial&&U.setObject(H,w),se===!0&&Pe.setState(w,q,!1),w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,Sr(w,F,H),w.side=$n,w.needsUpdate=!0,Sr(w,F,H),w.side=bn):Sr(w,F,H)}this.compile=function(w,F,q=null){q===null&&(q=w),U!==null&&U.renderStart(w,F,q),T=de.get(q),T.init(F),y.push(T),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),w!==q&&w.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,se=Pe.init(this.clippingPlanes,ae),se===!0&&Pe.setGlobalState(this.clippingPlanes,F),U!==null&&Fe.render(T.state.shadowsArray,q,F);let H=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ye=W.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){let _e=ye[we];yh(_e,q,F,W),H.add(_e)}else yh(ye,q,F,W),H.add(ye)}),T=y.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(w,F,q=null){let H=this.compile(w,F,q);return new Promise(W=>{function ye(){if(H.forEach(function(we){let Ee=X.get(we).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(we)}),H.size===0){W(w);return}setTimeout(ye,10)}$e.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Jo=null;function Sf(w){Jo&&Jo(w)}function vh(){ti.stop()}function Sh(){ti.start()}let ti=new Cd;ti.setAnimationLoop(Sf),typeof self!="undefined"&&ti.setContext(self),this.setAnimationLoop=function(w){Jo=w,Ce.setAnimationLoop(w),w===null?ti.stop():ti.start()},Ce.addEventListener("sessionstart",vh),Ce.addEventListener("sessionend",Sh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(w,F);let q=Ce.enabled===!0&&Ce.isPresenting===!0,H=E!==null&&(K===null||q)&&E.begin(I,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(F),F=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,F,K),T=de.get(w,y.length),T.init(F),T.state.textureUnits=Z.getTextureUnits(),y.push(T),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(oe,ln,F.reversedDepth),ae=this.localClippingEnabled,se=Pe.init(this.clippingPlanes,ae),M=me.get(w,A.length),M.init(),A.push(M),Ce.enabled===!0&&Ce.isPresenting===!0){let we=I.xr.getDepthSensingMesh();we!==null&&$o(we,F,-1/0,I.sortObjects)}$o(w,F,0,I.sortObjects),M.finish(),U!==null&&U.updateLights(T.state.lightsArray),I.sortObjects===!0&&M.sort(xe,ze),Ve=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ve&&Xe.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Pe.beginShadows();let W=T.state.shadowsArray;if(Fe.render(W,w,F),se===!0&&Pe.endShadows(),(H&&E.hasRenderPass())===!1){let we=M.opaque,_e=M.transmissive;if(T.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(_e.length>0)for(let Re=0,Ye=Ee.length;Re<Ye;Re++){let Ke=Ee[Re];Mh(we,_e,w,Ke)}Ve&&Xe.render(w);for(let Re=0,Ye=Ee.length;Re<Ye;Re++){let Ke=Ee[Re];bh(M,w,Ke,Ke.viewport)}}else _e.length>0&&Mh(we,_e,w,F),Ve&&Xe.render(w),bh(M,w,F)}K!==null&&B===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),H&&E.end(I),w.isScene===!0&&w.onAfterRender(I,w,F),ve.resetDefaultState(),G=-1,Y=null,y.pop(),y.length>0?(T=y[y.length-1],Z.setTextureUnits(T.state.textureUnits),se===!0&&Pe.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,U!==null&&U.renderEnd()};function $o(w,F,q,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ne)){H&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let we=ee.update(w),_e=w.material;_e.visible&&M.push(w,we,_e,q,Ue.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ne))){let we=ee.update(w),_e=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ue.copy(we.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(_e)){let Ee=we.groups;for(let Re=0,Ye=Ee.length;Re<Ye;Re++){let Ke=Ee[Re],Ae=_e[Ke.materialIndex];Ae&&Ae.visible&&M.push(w,we,Ae,q,Ue.z,Ke,F)}}else _e.visible&&M.push(w,we,_e,q,Ue.z,null,F)}}let ye=w.children;for(let we=0,_e=ye.length;we<_e;we++)$o(ye[we],F,q,H)}function bh(w,F,q,H){let{opaque:W,transmissive:ye,transparent:we}=w;T.setupLightsView(q),se===!0&&Pe.setGlobalState(I.clippingPlanes,q),H&&v.viewport(j.copy(H)),W.length>0&&vr(W,F,q),ye.length>0&&vr(ye,F,q),we.length>0&&vr(we,F,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Mh(w,F,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Ae=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Vt(1,1,{generateMipmaps:!0,type:Ae?un:Ht,minFilter:jn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ye=T.state.transmissionRenderTarget[H.id],we=H.viewport||j;ye.setSize(we.z*I.transmissionResolutionScale,we.w*I.transmissionResolutionScale);let _e=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Re=I.getActiveMipmapLevel();I.setRenderTarget(ye),I.getClearColor(tt),Je=I.getClearAlpha(),Je<1&&I.setClearColor(16777215,.5),I.clear(),Ve&&Xe.render(q);let Ye=I.toneMapping;I.toneMapping=cn;let Ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),se===!0&&Pe.setGlobalState(I.clippingPlanes,H),vr(w,q,H),Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let rt=0,vt=F.length;rt<vt;rt++){let mt=F[rt],{object:ut,geometry:Rt,material:Me,group:Nt}=mt;if(Me.side===bn&&ut.layers.test(H.layers)){let et=Me.side;Me.side=zt,Me.needsUpdate=!0,Th(ut,q,H,Rt,Me,Nt),Me.side=et,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(Z.updateMultisampleRenderTarget(ye),Z.updateRenderTargetMipmap(ye))}I.setRenderTarget(_e,Ee,Re),I.setClearColor(tt,Je),Ke!==void 0&&(H.viewport=Ke),I.toneMapping=Ye}function vr(w,F,q){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ye=w.length;W<ye;W++){let we=w[W],{object:_e,geometry:Ee,group:Re}=we,Ye=we.material;Ye.allowOverride===!0&&H!==null&&(Ye=H),_e.layers.test(q.layers)&&Th(_e,F,q,Ee,Ye,Re)}}function Th(w,F,q,H,W,ye){U!==null&&W.isNodeMaterial&&U.setObject(w,W),w.onBeforeRender(I,F,q,H,W,ye),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(I,F,q,H,w,ye),W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=zt,W.needsUpdate=!0,I.renderBufferDirect(q,F,H,W,w,ye),W.side=$n,W.needsUpdate=!0,I.renderBufferDirect(q,F,H,W,w,ye),W.side=bn):I.renderBufferDirect(q,F,H,W,w,ye),w.onAfterRender(I,F,q,H,W,ye)}function Sr(w,F,q){F.isScene!==!0&&(F=De);let H=X.get(w),W=T.state.lights,ye=T.state.shadowsArray,we=W.state.version,_e=ue.getParameters(w,W.state,ye,F,q,T.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(_e),Re=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let Ye=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=le.get(w.envMap||H.environment,Ye),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",dn),Re=new Map,H.programs=Re);let Ke=Re.get(Ee);if(Ke!==void 0){if(H.currentProgram===Ke&&H.lightsStateVersion===we)return Eh(w,_e),Ke}else _e.uniforms=ue.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,q,_e),w.onBeforeCompile(_e,I),Ke=ue.acquireProgram(_e,Ee),Re.set(Ee,Ke),H.uniforms=_e.uniforms;let Ae=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Pe.uniform),Eh(w,_e),H.needsLights=wf(w),H.lightsStateVersion=we,H.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=Ke,H.uniformsList=null,Ke}function wh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=as.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Eh(w,F){let q=X.get(w);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function bf(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let q=0,H=w.length;q<H;q++){let W=w[q];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function Mf(w,F,q,H,W){F.isScene!==!0&&(F=De),Z.resetTextureUnits();let ye=F.fog,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,_e=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:je.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=le.get(H.envMap||we,Ee),Ye=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,vt=!!q.morphAttributes.color,mt=cn;H.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(mt=I.toneMapping);let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Rt=ut!==void 0?ut.length:0,Me=X.get(H),Nt=T.state.lights;if(se===!0&&(ae===!0||w!==Y)){let ft=w===Y&&H.id===G;Pe.setState(H,w,ft)}let et=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Nt.state.version||Me.outputColorSpace!==_e||W.isBatchedMesh&&Me.batching===!1||!W.isBatchedMesh&&Me.batching===!0||W.isBatchedMesh&&Me.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Me.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Me.instancing===!1||!W.isInstancedMesh&&Me.instancing===!0||W.isSkinnedMesh&&Me.skinning===!1||!W.isSkinnedMesh&&Me.skinning===!0||W.isInstancedMesh&&Me.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Me.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Me.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Me.instancingMorph===!1&&W.morphTexture!==null||Me.envMap!==Re||H.fog===!0&&Me.fog!==ye||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Pe.numPlanes||Me.numIntersection!==Pe.numIntersection)||Me.vertexAlphas!==Ye||Me.vertexTangents!==Ke||Me.morphTargets!==Ae||Me.morphNormals!==rt||Me.morphColors!==vt||Me.toneMapping!==mt||Me.morphTargetsCount!==Rt||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Me.__version=H.version);let Kt=Me.currentProgram;et===!0&&(Kt=Sr(H,F,W),U&&H.isNodeMaterial&&U.onUpdateProgram(H,Kt,Me));let fn=!1,Bn=!1,xi=!1,ct=Kt.getUniforms(),yt=Me.uniforms;if(v.useProgram(Kt.program)&&(fn=!0,Bn=!0,xi=!0),H.id!==G&&(G=H.id,Bn=!0),Me.needsLights){let ft=bf(T.state.lightProbeGridArray,W);Me.lightProbeGrid!==ft&&(Me.lightProbeGrid=ft,Bn=!0)}if(fn||Y!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ct.setValue(N,"projectionMatrix",w.projectionMatrix),ct.setValue(N,"viewMatrix",w.matrixWorldInverse);let kn=ct.map.cameraPosition;kn!==void 0&&kn.setValue(N,he.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Bn=!0,xi=!0)}if(Me.needsLights&&(Nt.state.sunShadowMap.length>0&&ct.setValue(N,"sunShadowMap",Nt.state.sunShadowMap,Z),Nt.state.directionalShadowMap.length>0&&ct.setValue(N,"directionalShadowMap",Nt.state.directionalShadowMap,Z),Nt.state.spotShadowMap.length>0&&ct.setValue(N,"spotShadowMap",Nt.state.spotShadowMap,Z),Nt.state.pointShadowMap.length>0&&ct.setValue(N,"pointShadowMap",Nt.state.pointShadowMap,Z)),W.isSkinnedMesh){ct.setOptional(N,W,"bindMatrix"),ct.setOptional(N,W,"bindMatrixInverse");let ft=W.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(N,"boneTexture",ft.boneTexture,Z))}W.isBatchedMesh&&(ct.setOptional(N,W,"batchingTexture"),ct.setValue(N,"batchingTexture",W._matricesTexture,Z),ct.setOptional(N,W,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",W._indirectTexture,Z),ct.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",W._colorsTexture,Z));let zn=q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&O.update(W,q,Kt),(Bn||Me.receiveShadow!==W.receiveShadow)&&(Me.receiveShadow=W.receiveShadow,ct.setValue(N,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(yt.envMapIntensity.value=F.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=C_()),Bn){if(ct.setValue(N,"toneMappingExposure",I.toneMappingExposure),Me.needsLights&&Tf(yt,xi),ye&&H.fog===!0&&Ie.refreshFogUniforms(yt,ye),Ie.refreshMaterialUniforms(yt,H,te,$,T.state.transmissionRenderTarget[w.id]),Me.needsLights&&Me.lightProbeGrid){let ft=Me.lightProbeGrid;yt.probesSH.value=ft.texture,yt.probesMin.value.copy(ft.boundingBox.min),yt.probesMax.value.copy(ft.boundingBox.max),yt.probesResolution.value.copy(ft.resolution)}as.upload(N,wh(Me),yt,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(as.upload(N,wh(Me),yt,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(N,"center",W.center),ct.setValue(N,"modelViewMatrix",W.modelViewMatrix),ct.setValue(N,"normalMatrix",W.normalMatrix),ct.setValue(N,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let ft=H.uniformsGroups;for(let kn=0,_i=ft.length;kn<_i;kn++){let Ch=ft[kn];ie.update(Ch,Kt),ie.bind(Ch,Kt)}}return Kt}function Tf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function wf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,F,q){let H=X.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=F,X.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let q=X.get(w);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,q=0){K=w,k=F,B=q;let H=null,W=!1,ye=!1;if(w){let _e=X.get(w);if(_e.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,_e.__webglFramebuffer),j.copy(w.viewport),Te.copy(w.scissor),Se=w.scissorTest,v.viewport(j),v.scissor(Te),v.setScissorTest(Se),G=-1;return}else if(_e.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(_e.__hasExternalTextures)Z.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ye=w.depthTexture;if(_e.__boundDepthTexture!==Ye){if(Ye!==null&&X.has(Ye)&&(w.width!==Ye.image.width||w.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}let Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Re=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?H=Re[F][q]:H=Re[F],W=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?H=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[q]:H=Re,j.copy(w.viewport),Te.copy(w.scissor),Se=w.scissorTest}else j.copy(be).multiplyScalar(te).floor(),Te.copy(ke).multiplyScalar(te).floor(),Se=ot;if(q!==0&&(H=z),v.bindFramebuffer(N.FRAMEBUFFER,H)&&v.drawBuffers(w,H),v.viewport(j),v.scissor(Te),v.setScissorTest(Se),W){let _e=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,q)}else if(ye){let _e=F;for(let Ee=0;Ee<w.textures.length;Ee++){let Re=X.get(w.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,q,_e)}}else if(w!==null&&q!==0){let _e=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,q)}G=-1};function Ah(w){let F=X.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=C.textureFormatReadable(w.format),F.__typeReadable=C.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,q,H,W,ye,we,_e=0){if(!(w&&w.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){v.bindFramebuffer(N.FRAMEBUFFER,Ee);try{let Re=w.textures[_e],Ye=Re.format,Ke=Re.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e);let Ae=Ah(Re);if(Ae.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&q>=0&&q<=w.height-W&&N.readPixels(F,q,H,W,pe.convert(Ye),pe.convert(Ke),ye)}finally{let Re=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,F,q,H,W,ye,we,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(F>=0&&F<=w.width-H&&q>=0&&q<=w.height-W){v.bindFramebuffer(N.FRAMEBUFFER,Ee);let Re=w.textures[_e],Ye=Re.format,Ke=Re.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e);let Ae=Ah(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(F,q,H,W,pe.convert(Ye),pe.convert(Ke),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let vt=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,vt);let mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ju(N,mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(rt),N.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,q=0){let H=Math.pow(2,-q),W=Math.floor(w.image.width*H),ye=Math.floor(w.image.height*H),we=F!==null?F.x:0,_e=F!==null?F.y:0;Z.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,we,_e,W,ye),v.unbindTexture()},this.copyTextureToTexture=function(w,F,q=null,H=null,W=0,ye=0){let we,_e,Ee,Re,Ye,Ke,Ae,rt,vt,mt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(q!==null)we=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Ye=q.min.y,Ke=q.isBox3?q.min.z:0;else{let yt=Math.pow(2,-W);we=Math.floor(mt.width*yt),_e=Math.floor(mt.height*yt),w.isDataArrayTexture?Ee=mt.depth:w.isData3DTexture?Ee=Math.floor(mt.depth*yt):Ee=1,Re=0,Ye=0,Ke=0}H!==null?(Ae=H.x,rt=H.y,vt=H.z):(Ae=0,rt=0,vt=0);let ut=pe.convert(F.format),Rt=pe.convert(F.type),Me;F.isData3DTexture?(Z.setTexture3D(F,0),Me=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Me=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Me=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let Nt=v.getParameter(N.UNPACK_ROW_LENGTH),et=v.getParameter(N.UNPACK_IMAGE_HEIGHT),Kt=v.getParameter(N.UNPACK_SKIP_PIXELS),fn=v.getParameter(N.UNPACK_SKIP_ROWS),Bn=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),v.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);let xi=w.isDataArrayTexture||w.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let yt=X.get(w),zn=X.get(F),ft=X.get(yt.__renderTarget),kn=X.get(zn.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,ft.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let _i=0;_i<Ee;_i++)xi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(w).__webglTexture,W,Ke+_i),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(F).__webglTexture,ye,vt+_i)),N.blitFramebuffer(Re,Ye,we,_e,Ae,rt,we,_e,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||X.has(w)){let yt=X.get(w),zn=X.get(F);v.bindFramebuffer(N.READ_FRAMEBUFFER,R),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,D);for(let ft=0;ft<Ee;ft++)xi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,W,Ke+ft):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,W),ct?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zn.__webglTexture,ye,vt+ft):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zn.__webglTexture,ye),W!==0?N.blitFramebuffer(Re,Ye,we,_e,Ae,rt,we,_e,N.COLOR_BUFFER_BIT,N.NEAREST):ct?N.copyTexSubImage3D(Me,ye,Ae,rt,vt+ft,Re,Ye,we,_e):N.copyTexSubImage2D(Me,ye,Ae,rt,Re,Ye,we,_e);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Me,ye,Ae,rt,vt,we,_e,Ee,ut,Rt,mt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,ye,Ae,rt,vt,we,_e,Ee,ut,mt.data):N.texSubImage3D(Me,ye,Ae,rt,vt,we,_e,Ee,ut,Rt,mt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,Ae,rt,we,_e,ut,Rt,mt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,Ae,rt,mt.width,mt.height,ut,mt.data):N.texSubImage2D(N.TEXTURE_2D,ye,Ae,rt,we,_e,ut,Rt,mt);v.pixelStorei(N.UNPACK_ROW_LENGTH,Nt),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Kt),v.pixelStorei(N.UNPACK_SKIP_ROWS,fn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Bn),ye===0&&F.generateMipmaps&&N.generateMipmap(Me),v.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){k=0,B=0,K=null,v.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var eh={sunDir:{value:new P(0,1,0)},sunCol:{value:new P(1,.85,.6)},misc:{value:new pt(0,.08,0,0)}},R_="gl_FragColor.rgb+=(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5)/255.;",Fo=qe;Fo.fog_pars_vertex=`#ifdef USE_FOG
varying float vFogDepth;varying vec3 vFogWP;
#endif`;Fo.fog_vertex=`#ifdef USE_FOG
vFogDepth=-mvPosition.z;vFogWP=transpose(mat3(viewMatrix))*mvPosition.xyz;
#endif`;Fo.fog_pars_fragment=`#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;varying vec3 vFogWP;uniform vec3 fogSunDir;uniform vec3 fogSunCol;uniform vec4 fogMisc;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`;Fo.fog_fragment=`#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor=1.-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);
#else
float tF=clamp((vFogDepth-fogNear)/(fogFar-fogNear),0.,1.);
float cF=tF*tF*(3.-2.*tF);
float hF=exp(-max(cameraPosition.y+vFogWP.y,0.)*fogMisc.y);
float fogFactor=mix(cF*(.3+.7*hF),1.,smoothstep(.82,1.,tF));
vec2 fwp=cameraPosition.xz+vFogWP.xz;float ftt=fogMisc.w*.06;
float fpn=.5+.3*sin(fwp.x*.021+sin(fwp.y*.017+ftt)*1.7+ftt*.7)+.2*sin(fwp.y*.037-fwp.x*.011-ftt*1.3);
fogFactor=clamp(fogFactor*mix(1.,.5+1.*fpn,fogMisc.z*(1.-smoothstep(.82,1.,tF))),0.,1.);
#endif
float scF=pow(max(dot(normalize(vFogWP),fogSunDir),0.),5.)*fogMisc.x*fogFactor;
gl_FragColor.rgb=mix(gl_FragColor.rgb,mix(fogColor,fogSunCol,clamp(scF,0.,.8)),fogFactor);
${R_}
#endif`;var Fd=i=>{i.uniforms.fogSunDir=eh.sunDir,i.uniforms.fogSunCol=eh.sunCol,i.uniforms.fogMisc=eh.misc};Object.defineProperty(Gt.prototype,"onBeforeCompile",{configurable:!0,get(){return this._obc||Fd},set(i){let e=(t,n)=>{Fd(t),i(t,n)};e.toString=()=>i.toString()+"/*fogfx*/",this._obc=e}});function th(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][d]);let g=Od(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Od(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new bt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){let b=h.getComponent(d,g);o.setComponent(d+u,g,b)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function I_(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Bd={},ob={wood:.7,woodV:.7,stone:.55,shingle:.6,rock:.22,grass:.12,bark:.9,sand:.2,leaf:.25,needle:.3,cloth:1.2,straw:1,plank:.8};function P_(i){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=I_(i.length*97+i.charCodeAt(0)),r=(o,l)=>`rgba(${o},${o},${o},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let o=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,u=s()*256,d=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=d,n.beginPath(),o?(n.moveTo(c,u),n.bezierCurveTo(c+4,u+h*.3,c-4,u+h*.7,c+2,u+h)):(n.moveTo(u,c),n.bezierCurveTo(u+h*.3,c+4,u+h*.7,c-4,u+h,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let u=1;u<4;u++)n.beginPath(),n.ellipse(c,h,u*3.5,u*2.2,o?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),o?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let o=4;for(let l=0;l<o;l++){let c=-(s()*40),h=256/o;for(;c<256;){let u=38+s()*50,d=190+s()*55|0;n.fillStyle=`rgb(${d},${d-3},${d+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*h+3,u-6,h-6,10):n.rect(c+3,l*h+3,u-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*h+7,u-24,3);for(let p=0;p<14;p++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(u-12),l*h+6+s()*(h-12),2,2);c+=u}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let o=6,l=256/o;for(let c=0;c<o;c++){let h=c%2*22;for(let u=-22;u<278;u+=44){let d=196+s()*50|0;n.fillStyle=`rgb(${d},${d-6},${d-8})`,n.beginPath(),n.moveTo(u+h+2,c*l),n.lineTo(u+h+42,c*l),n.lineTo(u+h+42,c*l+l*.55),n.quadraticCurveTo(u+h+22,c*l+l*1.15,u+h+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(u+h+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let o=0;o<60;o++){let l=s()*256,c=s()*256,h=10+s()*40,u=170+s()*70|0;n.fillStyle=`rgba(${u},${u-4},${u+10},.35)`,n.beginPath(),n.ellipse(l,c,h,h*.6,s()*3,0,7),n.fill()}for(let o=0;o<30;o++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let o=0;o<900;o++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let o=0;o<20;o++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let o=0;o<70;o++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let o=0;o<640;o++){let l=s()*256,c=s()*256,h=3.5+s()*8,u=s()>.45?215+s()*40|0:120+s()*60|0;for(let d of[-256,0,256])for(let p of[-256,0,256])l+d<-30||l+d>286||c+p<-30||c+p>286||(n.fillStyle=`rgba(${u},${u},${u-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+d,c+p,h,h*.62,s()*3.14,0,7),n.fill())}for(let o=0;o<260;o++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.3)",n.beginPath(),n.ellipse(l,c+5,5,2.4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-2,3.6,1.5,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let o=0;o<256;o+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(o,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,o,256,1.6);for(let o=0;o<9;o++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let o=0;o<5;o++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let o=-256;o<256*2;o+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(o,0),n.lineTo(o+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(o+3,0),n.lineTo(o+3-256,256),n.stroke();for(let o=0;o<256;o+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(o,0),n.lineTo(o,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let o=5,l=256/o;for(let c=0;c<o;c++){let h=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,l);for(let u=0;u<22;u++){let d=h+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,d),n.bezierCurveTo(80,d+3,160,d-3,256,d+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let u of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(u,h+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let o=0;o<8;o++){let l=o*256/8;for(let c=-10;c<266;c+=14){let h=c+o%2*7+s()*3,u=18+s()*10,d=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${d},${d},${d-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,l),n.lineTo(h+s()*8-4,l+u),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}L_(n,256,s,i);let a=new Os(t);return a.wrapS=a.wrapT=zi,a.colorSpace=Ft,a.anisotropy=8,a}function L_(i,e,t,n){let s=(o,l,c,h)=>{for(let u of[-e,0,e])for(let d of[-e,0,e])o+u<-c||o+u>e+c||l+d<-c||l+d>e+c||h(o+u,l+d)},r=n==="woodV"||n==="bark"||n==="needle"?1.57:n==="straw"?.78:0,a=n==="cloth"||n==="straw"?.6:1;for(let o=0;o<16;o++){let l=t()*e,c=t()*e,h=34+t()*58,u=t()>.5,d=(.05+t()*.06)*a;s(l,c,h,(p,g)=>{let b=i.createRadialGradient(p,g,0,p,g,h);b.addColorStop(0,u?`rgba(58,50,70,${d})`:`rgba(255,250,236,${d*1.25})`),b.addColorStop(1,u?"rgba(58,50,70,0)":"rgba(255,250,236,0)"),i.fillStyle=b,i.fillRect(p-h,g-h,h*2,h*2)})}for(let o=0;o<7;o++){let l=t()*e,c=t()*e,h=50+t()*60,u=t()>.5;s(l,c,h,(d,p)=>{let g=i.createRadialGradient(d,p,0,d,p,h);g.addColorStop(0,u?"rgba(255,214,170,.07)":"rgba(170,196,255,.06)"),g.addColorStop(1,u?"rgba(255,214,170,0)":"rgba(170,196,255,0)"),i.fillStyle=g,i.fillRect(d-h,p-h,h*2,h*2)})}i.lineCap="round";for(let o=0;o<90;o++){let l=t()*e,c=t()*e,h=10+t()*26,u=r+(t()-.5)*.7,d=1.5+t()*3.5,p=t()>.55,g=(.035+t()*.05)*a,b=Math.cos(u)*h,m=Math.sin(u)*h,f=(t()-.5)*6,x=(t()-.5)*6;s(l,c,h+4,(S,_)=>{i.strokeStyle=p?`rgba(50,44,62,${g})`:`rgba(255,252,240,${g*1.3})`,i.lineWidth=d,i.beginPath(),i.moveTo(S,_),i.quadraticCurveTo(S+b*.5+f,_+m*.5+x,S+b,_+m),i.stroke()})}i.lineCap="butt"}var D_=i=>Bd[i]||(Bd[i]=P_(i)),N_=(()=>{let i=new Uint8Array([104,138,172,206,236,255]),e=new ci(i,6,1,is);return e.minFilter=e.magFilter=Mt,e.generateMipmaps=!1,e.needsUpdate=!0,e})();function lb(i,e,t,n,s){let r=i.attributes.uv,a=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]*s,r.getY(c)*a[o][1]*s)}r.needsUpdate=!0}function cb(i,e,t){let n=Object.assign({color:i,gradientMap:N_},t||{});e&&(n.map=D_(e));let s=new js(n);return s.userData.kind=e||null,s}function hb(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function ub(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;e.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,e.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){e.strokeStyle="rgba(120,110,100,.06)",e.lineWidth=1,e.beginPath();let s=Math.random()*256,r=Math.random()*256;e.moveTo(s,r),e.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),e.stroke()}let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(t)}var gi={t:{value:0},s:{value:1}};function db(i,e){let t=gi.t.value+=i,n=.62+.26*Math.sin(t*.071)+.18*Math.sin(t*.173+1.3)*Math.sin(t*.029);gi.s.value+=((e==null?1:e)*Math.max(.18,n)-gi.s.value)*Math.min(1,i*.8)}function fb(i,e){let t=gi.t.value,n=i*.8+e*.6,s=.5+.5*Math.sin(n*.05-t*.6+Math.sin(i*.03-e*.021+t*.11)*1.9);return s*s*(3-2*s)*gi.s.value}var U_=`uniform float uWT,uWS;
vec3 windOff(vec2 ip,float k,float amp){vec2 wd=vec2(.8,.6);
  float g=.5+.5*sin(dot(ip,wd)*.05-uWT*.6+sin(ip.x*.03-ip.y*.021+uWT*.11)*1.9);g=g*g*(3.-2.*g);
  float ph=ip.x*.37+ip.y*.43;
  float sw=sin(uWT*1.7+ph)*.6+sin(uWT*2.9+ph*1.31)*.4;
  vec2 d=wd*((.22+.78*g)+sw*.3*(.35+g))+vec2(-wd.y,wd.x)*sin(uWT*1.23+ph*.71)*.2*(.3+g);
  d*=amp*k*uWS;return vec3(d.x,-length(d)*.3*k,d.y);}
vec3 windFl(vec3 wp,float fl){float a=uWT*3.7+wp.x*2.9+wp.z*2.3+wp.y*1.7;return vec3(sin(a),cos(a*.83+1.),sin(a*1.21+2.))*fl*uWS;}
`,ls=i=>Number(i).toFixed(4);function pb(i,e){return e=Object.assign({H:1,amp:.2,pow:2,fl:0,base:0},e||{}),i.onBeforeCompile=t=>{t.uniforms.uWT=gi.t,t.uniforms.uWS=gi.s,t.vertexShader=U_+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
 mat4 wM=modelMatrix*instanceMatrix;
#else
 mat4 wM=modelMatrix;
#endif
 float wK=${ls(e.base)}+${ls(1-e.base)}*pow(clamp(position.y/${ls(e.H)},0.,1.),${ls(e.pow)});
 vec3 wOff=windOff(wM[3].xz,wK,${ls(e.amp)})+windFl((wM*vec4(position,1.)).xyz,${ls(e.fl)})*wK;`).replace("#include <project_vertex>",`#include <project_vertex>
 mvPosition.xyz+=(viewMatrix*vec4(wOff,0.)).xyz;gl_Position=projectionMatrix*mvPosition;`)},i.customProgramCacheKey=()=>"wind:"+[e.H,e.amp,e.pow,e.fl,e.base].join(","),i}function mb(i,e){e=e||{};let t=new Map;for(let n of[...i.children]){if(!n.isMesh||n.isInstancedMesh||n.userData.dyn||n.material.vertexColors||n.material.transparent)continue;n.updateMatrix();let s=n.geometry.clone().applyMatrix4(n.matrix);s.index&&(s=s.toNonIndexed());let r=n.material,a=s.attributes.position.count;for(let l of Object.keys(s.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&s.deleteAttribute(l);if(s.attributes.normal||s.computeVertexNormals(),e.vc){s.deleteAttribute("uv");let l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=r.color.r,l[c*3+1]=r.color.g,l[c*3+2]=r.color.b;s.setAttribute("color",new bt(l,3))}else s.attributes.uv||s.setAttribute("uv",new bt(new Float32Array(a*2),2));let o=e.vc?"vc":[r.type,r.color.getHex(),r.map?r.map.uuid:"",r.side,r.emissive?r.emissive.getHex():"",r.flatShading?1:0].join("|");t.has(o)||t.set(o,{mm:r,gs:[],cs:n.castShadow,rs:n.receiveShadow}),t.get(o).gs.push(s),i.remove(n)}for(let{mm:n,gs:s,cs:r,rs:a}of t.values()){let o=new Lt(s.length>1?th(s):s[0],e.vc?e.mat:n);o.castShadow=r,o.receiveShadow=a,i.add(o)}return i}var F_=(i,e,t,n=0)=>Math.sin(i*1.7+e*2.3+n)*Math.sin(e*1.9+t*2.1+n*1.3)*.6+Math.sin(t*3.3+i*2.9+n*.7)*Math.sin(i*1.3-e*1.1+n)*.4;function gb(i,e=.16,t=1.5,n=0,s=.8){let r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),l=r.getY(a),c=r.getZ(a),h=1+e*F_(o*t,l*t,c*t,n);r.setXYZ(a,o*h,l*h*(l<0?s:1),c*h)}return i.computeVertexNormals(),i}function xb(i,e,t,n=0,s={}){let r=s.hs||1,a=s.zig==null?.16:s.zig,o=s.droop==null?.13:s.droop,l=new zs(i,e,t,r,!!s.open),c=l.attributes.position,h=6.2832/t,u=Math.sin(n*3.1)*i*.1,d=Math.cos(n*2.3)*i*.1;for(let p=0;p<c.count;p++){let g=c.getX(p),b=c.getY(p),m=c.getZ(p),f=Math.hypot(g,m),x=(b+e/2)/e;if(f>1e-4){let S=Math.atan2(m,g),_=Math.round(S/h+t)%t,M=(_+Math.round(n))%2;if(x<.01){let T=1+a*(M?1:-.7)+.1*Math.sin(S*3+n*5);g*=T,m*=T,b-=o*e*(M?1:.15)*(1+.5*Math.sin(S*2+n))}else{let T=1+.1*Math.sin(S*2+n*2+x*4);g*=T,m*=T}}else x<.01&&(b+=e*.06);g+=u*x,m+=d*x,c.setXYZ(p,g,b+e/2,m)}return l.computeVertexNormals(),l}function _b(i,e,t,n,s,r={}){let a=r.bend==null?.14:r.bend,o=r.seed||0,l=m=>{let f=m/t;return[a*Math.sin(Math.PI*f)*(1-f*.3),a*.55*Math.sin(6.2832*f+o)*(1-f)]},c=new hi(i,e,t,n,s,!0).translate(0,t/2,0),h=c.attributes.position;for(let m=0;m<h.count;m++){let f=h.getX(m),x=h.getY(m),S=h.getZ(m),_=x/t,M=Math.atan2(S,f);if(_<.16){let A=1+(r.flare==null?.75:r.flare)*Math.pow(1-_/.16,2)*(1+.35*Math.sin(M*3+o));f*=A,S*=A}let T=l(x);h.setXYZ(m,f+T[0],x,S+T[1])}let u=[c],d=new P(0,1,0),p=new P,g=new Qt;for(let[m,f,x,S,_]of r.branches||[]){let M=l(m);p.set(f-M[0],x-m,S-M[1]);let T=p.length();p.normalize(),g.setFromUnitVectors(d,p);let A=new hi(_*.35,_,T,4,1,!0).translate(0,T/2,0);A.applyQuaternion(g),A.translate(M[0],m,M[1]),u.push(A)}let b=u.length>1?th(u):c;return b.computeVertexNormals(),b}var zd=(i,e,t,n,s,r,a,o,l,c,h,u,d)=>{let p=-o,g=r,b=Math.hypot(p,g)||1,m=t+r*l*.5,f=n+a*l*.5+l*.06,x=s+o*l*.5,S=t+r*l,_=n+a*l-h*l,M=s+o*l,T=p/b*c,A=g/b*c;i.push(t,n,s,m-T,f,x-A,m+T,f,x+A,m-T,f,x-A,S,_,M,m+T,f,x+A);let y=(u+d)/2;e.push(u,u,u,y,y,y,y,y,y,y,y,y,d,d,d,y,y,y)},kd=(i,e)=>{let t=new lt;return t.setAttribute("position",new Be(i,3)),t.setAttribute("color",new Be(e,3)),t.setAttribute("uv",new bt(new Float32Array(i.length/3*2),2)),t.computeVertexNormals(),t};function yb(i=10,e=1){let t=[],n=[];for(let s=0;s<i;s++){let r=s/i*6.2832+Math.sin(s*7.3+e)*.5,a=s%3===0?.75:s%3===1?.15:-.2,o=.85+.35*Math.sin(s*3.7+e*2),l=Math.cos(a);zd(t,n,0,0,0,Math.cos(r)*l,Math.sin(a),Math.sin(r)*l,o,.2+.05*Math.sin(s*5.1),.3+.2*Math.abs(Math.sin(s*2.3+e)),.72,1.12)}return kd(t,n)}function vb(i=5,e=1,t=.3,n=1){let s=[],r=[];for(let a=0;a<i;a++){let o=a/i*6.2832+Math.sin(a*4.1+n)*.6,l=.25+.3*Math.abs(Math.sin(a*2.9+n)),c=e*(.7+.3*Math.abs(Math.sin(a*5.3+n*3))),h=Math.cos(o),u=Math.sin(o),d=Math.hypot(l,1);zd(s,r,h*t*.25,0,u*t*.25,h*l/d,1/d,u*l/d,c*d,t*.3,.12+.1*Math.sin(a*3.3+n),.62,1.1)}return kd(s,r)}var Vd="rio-day",cs=[["Hoy no tienes que llegar a ning\xFAn sitio.","You do not have to get anywhere today.","\u4ECA\u65E5\u306F\u3069\u3053\u304B\u3078\u7740\u304B\u306A\u304F\u3066\u5927\u4E08\u592B\u3002"],["El agua tambi\xE9n descansa mientras avanza.","Water also rests while it moves.","\u6C34\u306F\u6D41\u308C\u306A\u304C\u3089\u3082\u4F11\u3093\u3067\u3044\u307E\u3059\u3002"],["Respira hondo. Lo dem\xE1s puede esperar a ma\xF1ana.","Breathe deep. The rest can wait until tomorrow.","\u6DF1\u547C\u5438\u3092\u3002\u3042\u3068\u306F\u660E\u65E5\u3067\u3044\u3044\u3002"],["Algo peque\xF1o hecho con calma ya es suficiente.","One small thing done calmly is enough.","\u5C0F\u3055\u306A\u3053\u3068\u3092\u3086\u3063\u304F\u308A\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes no se apuran y aun as\xED llegan.","Clouds never hurry and still they arrive.","\u96F2\u306F\u6025\u304C\u306A\u3044\u306E\u306B\u3001\u3061\u3083\u3093\u3068\u7740\u304D\u307E\u3059\u3002"],["Mara dejar\xEDa una nota: \xABmira hacia arriba un momento\xBB.","Mara would leave a note: \u201Clook up for a moment\u201D.","\u30DE\u30E9\u306A\u3089\u30E1\u30E2\u3092\u6B8B\u3059\u3067\u3057\u3087\u3046\u3002\u300C\u5C11\u3057\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u300D\u3002"],["No hace falta entenderlo todo esta noche.","You do not need to understand everything tonight.","\u4ECA\u591C\u3001\u3059\u3079\u3066\u3092\u5206\u304B\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],["Una taza caliente y un r\xEDo quieto: buen plan.","A warm cup and a quiet river: a good plan.","\u6E29\u304B\u3044\u304A\u8336\u3068\u9759\u304B\u306A\u5DDD\u3002\u3044\u3044\u8A08\u753B\u3067\u3059\u3002"],["Lo que pesa hoy flota un poco m\xE1s ligero en el agua.","What weighs on you today floats lighter on the water.","\u4ECA\u65E5\u306E\u91CD\u3055\u3082\u3001\u6C34\u306E\u4E0A\u3067\u306F\u5C11\u3057\u8EFD\u304F\u306A\u308A\u307E\u3059\u3002"],["Est\xE1 bien ir despacio. As\xED se ven m\xE1s cosas.","It is fine to go slowly. You see more that way.","\u3086\u3063\u304F\u308A\u3067\u5927\u4E08\u592B\u3002\u305D\u306E\u307B\u3046\u304C\u591A\u304F\u304C\u898B\u3048\u307E\u3059\u3002"],["Cada farolillo es un \xABgracias\xBB que nadie pidi\xF3.","Every lantern is a \u201Cthank you\u201D nobody asked for.","\u3061\u3087\u3046\u3061\u3093\u306F\u3072\u3068\u3064\u305A\u3064\u3001\u983C\u307E\u308C\u306A\u3044\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3002"],["El r\xEDo no compara tu ritmo con el de nadie.","The river does not compare your pace with anyone\u2019s.","\u5DDD\u306F\u3042\u306A\u305F\u306E\u901F\u3055\u3092\u8AB0\u3068\u3082\u6BD4\u3079\u307E\u305B\u3093\u3002"],["Escucha un rato: siempre hay algo suave sonando.","Listen a while: something gentle is always playing.","\u3057\u3070\u3089\u304F\u8033\u3092\u3059\u307E\u305B\u3066\u3002\u3044\u3064\u3082\u3084\u3055\u3057\u3044\u97F3\u304C\u3057\u3066\u3044\u307E\u3059\u3002"],["Hoy cuenta aunque solo hayas flotado un poco.","Today counts even if you only floated a little.","\u5C11\u3057\u6D6E\u304B\u3093\u3060\u3060\u3051\u3067\u3082\u3001\u4ECA\u65E5\u306F\u3061\u3083\u3093\u3068\u4E00\u65E5\u3067\u3059\u3002"]],Oo=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},Gd=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),zo=()=>{try{return JSON.parse(localStorage.getItem(Vd)||"{}")||{}}catch{return{}}},bb=()=>zo().k!==Oo(),Bo=()=>zo().n||0,Hd=()=>zo().log||[];var Mb=i=>{let e=Math.sin((Gd()*131+i)*12.9898)*43758.5453;return e-Math.floor(e)};function Tb(){let i=zo();if(i.k===Oo())return null;let e=Gd()%cs.length;i.k=Oo(),i.n=(i.n||0)+1,i.log=(i.log||[]).concat([[Oo(),e]]).slice(-12);try{localStorage.setItem(Vd,JSON.stringify(i))}catch{}try{window.UX&&UX.say&&UX.say(UX.tr(cs[e][0]))}catch{}try{window.UX&&UX.hap&&UX.hap([12,40,12])}catch{}return cs[e]}var Wd=i=>{i.cnt=i.cnt||{};let e=Math.max(0,Bo()-(i.cnt.dl||0));return e&&(i.cnt.dl=Bo()),e};function Xd(i){i.add(cs.map(e=>[e[0],e[1],e[2]])),i.add([["Farolillos del d\xEDa","Lanterns of the day","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093"],["Hoy ya recogiste el farolillo. Ma\xF1ana habr\xE1 otro.","You already picked up today\u2019s lantern. There will be another tomorrow.","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093\u306F\u3082\u3046\u62FE\u3044\u307E\u3057\u305F\u3002\u660E\u65E5\u307E\u305F\u6D41\u308C\u3066\u304D\u307E\u3059\u3002"],["A\xFAn no recoges ninguno","You have not picked up any yet","\u307E\u3060\u62FE\u3063\u3066\u3044\u307E\u305B\u3093"]])}var qd="rio-album",us=[["koi","Carpa koi","Koi carp","\u9326\u9BC9","Se acercan despacio y nadan junto a la canoa, como si te conocieran.","They drift close and swim beside the canoe as if they knew you.","\u3086\u3063\u304F\u308A\u8FD1\u3065\u3044\u3066\u3001\u30AB\u30CC\u30FC\u306E\u305D\u3070\u3092\u6CF3\u304E\u307E\u3059\u3002\u307E\u308B\u3067\u77E5\u308A\u5408\u3044\u306E\u3088\u3046\u306B\u3002"],["pato","Pato del r\xEDo","River duck","\u5DDD\u306E\u30AB\u30E2","Decide acompa\xF1arte un rato y luego sigue su camino.","Chooses to keep you company for a while, then goes its own way.","\u3057\u3070\u3089\u304F\u5BC4\u308A\u305D\u3063\u3066\u304F\u308C\u3066\u3001\u3084\u304C\u3066\u81EA\u5206\u306E\u9053\u3078\u3002"],["garza","Garza blanca","White heron","\u30B7\u30E9\u30B5\u30AE","Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.","Fishes without hurry. Takes flight only when you pass very close.","\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u3068\u3066\u3082\u8FD1\u304F\u3092\u901A\u308B\u3068\u98DB\u3073\u7ACB\u3061\u307E\u3059\u3002"],["libelula","Lib\xE9lula","Dragonfly","\u30C8\u30F3\u30DC","Se posa un instante en la proa y se va, ligera como un pensamiento.","Lands on the bow for an instant and leaves, light as a thought.","\u8239\u9996\u306B\u305D\u3063\u3068\u6B62\u307E\u3063\u3066\u3001\u8003\u3048\u3054\u3068\u306E\u3088\u3046\u306B\u8EFD\u304F\u53BB\u308A\u307E\u3059\u3002"],["loto","Flor de loto","Lotus flower","\u84EE\u306E\u82B1","Abre al anochecer en los estanques tranquilos.","Opens at dusk in the quiet ponds.","\u9759\u304B\u306A\u6C60\u3067\u5915\u66AE\u308C\u306B\u958B\u304D\u307E\u3059\u3002"],["festival","Festival de linternas","Lantern festival","\u3061\u3087\u3046\u3061\u3093\u796D\u308A","La aldea enciende farolillos para quien llega de noche.","The village lights lanterns for whoever arrives at night.","\u591C\u306B\u7740\u3044\u305F\u4EBA\u306E\u305F\u3081\u306B\u3001\u6751\u304C\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3059\u3002"]],hs=null,nh=()=>{if(hs)return hs;try{hs=JSON.parse(localStorage.getItem(qd)||"{}")||{}}catch{hs={}}return hs};function Yd(i){try{Xd(i)}catch{}i.add(us.map(e=>[e[1],e[2],e[3]])),i.add(us.map(e=>[e[4],e[5],e[6]])),i.add([["Cuaderno del r\xEDo","River notebook","\u5DDD\u306E\u30CE\u30FC\u30C8"],["A\xFAn no lo has visto","You have not seen this yet","\u307E\u3060\u898B\u3066\u3044\u307E\u305B\u3093"],["Nueva anotaci\xF3n en el cuaderno del r\xEDo","New entry in the river notebook","\u5DDD\u306E\u30CE\u30FC\u30C8\u306B\u65B0\u3057\u3044\u8A18\u9332"],["Se llena solo, a su ritmo. No hay prisa.","It fills by itself, at its own pace. No rush.","\u3086\u3063\u304F\u308A\u3001\u3072\u3068\u308A\u3067\u306B\u57CB\u307E\u3063\u3066\u3044\u304D\u307E\u3059\u3002"],["Cerrar","Close","\u9589\u3058\u308B"],["Anotado: ","Noted: ","\u8A18\u9332: "],["anotaciones","entries","\u4EF6"]])}function Zd(i){let e=nh();if(e[i])return;e[i]=Date.now(),hs=e;try{localStorage.setItem(qd,JSON.stringify(e))}catch{}let t=us.find(n=>n[0]===i);try{window.UX&&UX.say&&UX.say(UX.tr("Anotado: ")+UX.tr(t[1]))}catch{}}var ko=()=>Object.keys(nh()).length;function Jd(i){i.cnt=i.cnt||{};let e=Math.max(0,ko()-(i.cnt.alb||0));return e&&(i.cnt.alb=ko()),e}function $d(i){i=i||(window.UX?UX.tr:(o=>o));let e=nh(),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let n=document.createElement("div");n.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui";let s=document.createElement("h2");s.style.cssText="margin:0 0 4px;font:600 1.15rem system-ui",s.textContent=i("Cuaderno del r\xEDo");let r=document.createElement("div");r.style.cssText="opacity:.65;font-size:.8rem;margin-bottom:12px",r.textContent=i("Se llena solo, a su ritmo. No hay prisa."),n.append(s,r),us.forEach(o=>{let l=!!e[o[0]],c=document.createElement("div");c.style.cssText="margin:0 0 12px;padding:10px 12px;border-radius:12px;background:"+(l?"rgba(255,233,184,.10)":"rgba(255,255,255,.04)")+";"+(l?"":"opacity:.55");let h=document.createElement("div");h.style.cssText="font-weight:600",h.textContent=(l?"\u2726 ":"\xB7 ")+(l?i(o[1]):"?");let u=document.createElement("div");u.style.cssText="font-size:.88em;opacity:.85",u.textContent=i(l?o[4]:"A\xFAn no lo has visto"),c.append(h,u),n.appendChild(c)});{let o=document.createElement("div");o.style.cssText="font-weight:600;margin:14px 0 6px",o.textContent=i("Farolillos del d\xEDa")+" \xB7 "+Bo(),n.appendChild(o);let l=Hd().slice().reverse();if(!l.length){let c=document.createElement("div");c.style.cssText="opacity:.55;font-size:.88em;margin-bottom:12px",c.textContent=i("A\xFAn no recoges ninguno"),n.appendChild(c)}l.forEach(c=>{let h=document.createElement("div");h.style.cssText="margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em",h.textContent="\u{1F3EE} "+i(cs[c[1]][0]),n.appendChild(h)})}let a=document.createElement("button");a.type="button",a.textContent=i("Cerrar"),a.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",a.onclick=()=>t.remove(),n.appendChild(a),t.appendChild(n),t.onclick=o=>{o.target===t&&t.remove()},document.body.appendChild(t)}(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},e=document.createElement("style");e.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(e);let t=document.createElement("div");t.id="pz",t.hidden=!0,t.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(t);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,t.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,a){if(r=r.filter(Boolean),!s||!r.length)return;let o=document.createElement("style");o.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(o);let l=document.createElement("button");l.type="button",l.textContent=a||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),c.appendChild(h)}),s.appendChild(l),document.body.appendChild(c),l.onclick=h=>{if(h.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let u=l.getBoundingClientRect();c.style.top=u.bottom+6+"px",c.style.right=Math.max(8,innerWidth-u.right)+"px"}},document.addEventListener("click",h=>{!c.hidden&&!c.contains(h.target)&&h.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},t.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();var O_=["es","en","ja"],Wt="es";try{let i=localStorage.getItem("rio3d-lang");Wt=O_.includes(i)?i:"es"}catch{}var Go=()=>Wt,Cb=i=>{try{localStorage.setItem("rio3d-lang",i)}catch{}},B_=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Mirar","Look","\u898B\u56DE\u3059"],["Mirando","Looking","\u898B\u56DE\u3057\u4E2D"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Croar de rana","Frog croak","\u30AB\u30A8\u30EB\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Menos movimiento y destellos","Less motion and flashes","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B"],["Sin c\xE1maras largas, destellos ni balanceo fuerte","No long camera moves, flashes or strong sway","\u9577\u3044\u30AB\u30E1\u30E9\u79FB\u52D5\u30FB\u5149\u30FB\u5F37\u3044\u63FA\u308C\u3092\u306A\u304F\u3057\u307E\u3059"],["Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"],["Privacidad, datos y cr\xE9ditos","Privacy, data and credits","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30FB\u30C7\u30FC\u30BF\u30FB\u30AF\u30EC\u30B8\u30C3\u30C8"],["Abrir","Open","\u958B\u304F"],["Botones de direcci\xF3n","Steering buttons","\u64CD\u4F5C\u30DC\u30BF\u30F3"],["Alternativa a arrastrar","An alternative to dragging","\u30C9\u30E9\u30C3\u30B0\u306E\u4EE3\u308F\u308A"],["Girar a la izquierda","Turn left","\u5DE6\u3078\u66F2\u304C\u308B"],["Girar a la derecha","Turn right","\u53F3\u3078\u66F2\u304C\u308B"],["Remar","Paddle","\u3053\u3050"],["Direcci\xF3n","Steering","\u64CD\u4F5C"]],z_=new Map(B_.map(i=>[i[0],i])),k_=Wt==="en"?1:2;var V_=[[/^Siguiente: (.+) en (\d+) m$/,i=>Wt==="en"?`Next: ${On(i[1])} in ${i[2]} m`:`\u6B21: ${On(i[1])}\uFF08\u3042\u3068${i[2]} m\uFF09`],[/^Descubriste: (.+)$/,i=>Wt==="en"?`You discovered: ${On(i[1])}`:`\u767A\u898B\uFF1A${On(i[1])}`],[/^Continuar \((\d+) m\)$/,i=>Wt==="en"?`Continue (${i[1]} m)`:`\u7D9A\u3051\u308B\uFF08${i[1]} m\uFF09`],[/^Soltar linterna \((\d+)\)$/,i=>Wt==="en"?`Release lantern (${i[1]})`:`\u30E9\u30F3\u30BF\u30F3\u3092\u6D41\u3059\uFF08${i[1]}\uFF09`],[/^Auto \(ahora ([\d.]+)×\)$/,i=>Wt==="en"?`Auto (now ${i[1]}\xD7)`:`\u81EA\u52D5\uFF08\u73FE\u5728 ${i[1]}\xD7\uFF09`],[/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,i=>Wt==="en"?`${i[1]}/${i[2]} places \xB7 ${On(i[3])} \xB7 you reached ${i[4]} m \xB7 lanterns released: ${i[5]}`:`${i[1]}/${i[2]}\u304B\u6240 \xB7 ${On(i[3])} \xB7 \u5230\u9054 ${i[4]} m \xB7 \u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[5]}`],[/^Linternas dejadas: (\d+)$/,i=>Wt==="en"?`Lanterns left here: ${i[1]}`:`\u3053\u3053\u306B\u6B8B\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[1]}`],[/^Tu linterna del (.+)$/,i=>Wt==="en"?`Your lantern from ${i[1]}`:`${i[1]}\u306E\u30E9\u30F3\u30BF\u30F3`]];function On(i){if(Wt==="es"||typeof i!="string")return i;let e=i.trim();if(!e)return i;let t=z_.get(e);if(t)return i.replace(e,t[k_]);for(let[n,s]of V_){let r=e.match(n);if(r)return i.replace(e,s(r))}return i}function Vo(i){if(i.nodeType===3){let t=On(i.nodeValue);t!==i.nodeValue&&(i.nodeValue=t);return}if(i.nodeType!==1||i.tagName==="SCRIPT"||i.tagName==="STYLE")return;i.placeholder&&(i.placeholder=On(i.placeholder));let e=i.getAttribute&&i.getAttribute("aria-label");if(e){let t=On(e);t!==e&&i.setAttribute("aria-label",t)}for(let t of i.childNodes)Vo(t)}function Rb(){Wt!=="es"&&(document.documentElement.lang=Wt,Vo(document.body),new MutationObserver(i=>{for(let e of i)e.type==="characterData"?Vo(e.target):e.addedNodes.forEach(Vo)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0}))}var Kd={es:["Cuando","el r\xEDo","te entregue","su luz,","la caba\xF1a","recordar\xE1","tu","nombre."],en:["When","the river","hands you","its light,","the cabin","will remember","your","name."],ja:["\u5DDD\u304C","\u706F\u3092","\u6388\u3051\u308B","\u3068\u304D\u3001","\u5C0F\u5C4B\u306F","\u3042\u306A\u305F\u306E","\u540D\u3092","\u601D\u3044\u51FA\u3059\u3002"]},G_=()=>Kd[Go()]||Kd.es,H_=()=>{try{return Math.max(0,+localStorage.getItem("rio3d-lant")||0)}catch{return 0}},Lb=33,mr=()=>{try{return Math.max(0,+localStorage.getItem("rio3d-cer")||0)}catch{return 0}},Db=()=>{try{let i=localStorage.getItem("rio3d-lapk");return i==null?-1:+i}catch{return-1}},Nb=i=>{try{localStorage.setItem("rio3d-lapk",String(i))}catch{}},jd=()=>{try{return Math.max(0,+localStorage.getItem("rio3d-rel")||0)}catch{return 0}},Ub=()=>H_(),W_=()=>{try{return localStorage.getItem("rio3d-camino")==="1"}catch{return!1}},X_=108,q_=()=>{try{return Math.max(0,+localStorage.getItem("rio3d-gran")||0)}catch{return 0}},Fb=()=>mr()>=2,Ob=()=>mr()>=3?40:27;function Bb(i,e){try{i>=X_&&localStorage.setItem("rio3d-gran",String(q_()+1)),localStorage.setItem("rio3d-rel",String(jd()+i)),localStorage.setItem("rio3d-lant","0"),localStorage.setItem("rio3d-cer",String(mr()+1)),e&&localStorage.setItem("rio3d-camino","1")}catch{}}var Y_=()=>Math.min(8,mr()*2),Z_=()=>Go()==="ja"?"":" ";function zb(i=Y_()){let e=G_(),t=Z_(),n=[];for(let s=0;s<8;s+=2)n.push((s<i?e[s]:"\xB7\xB7\xB7")+t+(s+1<i?e[s+1]:"\xB7\xB7\xB7"));return n}var kb=()=>Math.min(8,Math.ceil(jd()/12)),Vb=()=>{try{return+localStorage.getItem("tomo-ofrenda")||0}catch{return 0}},Gb=i=>{try{localStorage.setItem("tomo-ofrenda",String(i))}catch{}},Hb=()=>W_();var Wb=()=>{try{return localStorage.getItem("tomo-secreto")==="1"}catch{return!1}},Xb=()=>{try{localStorage.setItem("tomo-secreto","1")}catch{}},qb=()=>{try{return JSON.parse(localStorage.getItem("rio3d-found")||"[]")}catch{return[]}},Yb=[{k:"\u8D77",es:"Salir",en:"Set out",ja:"\u51FA\u767A"},{k:"\u627F",es:"Seguir",en:"Go on",ja:"\u3064\u3065\u3051\u308B"},{k:"\u8EE2",es:"Reencontrar",en:"Meet again",ja:"\u3081\u3050\u308A\u3042\u3044"},{k:"\u7D50",es:"Soltar",en:"Let go",ja:"\u624B\u653E\u3059"}],Zb=()=>Math.min(4,mr()+1),Jb={prisa:{es:"prisa",en:"rush",ja:"\u6025\u304E"},ruido:{es:"ruido",en:"noise",ja:"\u9A12\u304C\u3057\u3055"},cansancio:{es:"cansancio",en:"weariness",ja:"\u75B2\u308C"},calma:{es:"calma",en:"calm",ja:"\u9759\u3051\u3055"},compania:{es:"compa\xF1\xEDa",en:"company",ja:"\u306C\u304F\u3082\u308A"},curiosidad:{es:"curiosidad",en:"curiosity",ja:"\u597D\u5947\u5FC3"},si:{es:"s\xED",en:"yes",ja:"\u306F\u3044"},cambio:{es:"cambi\xF3",en:"it changed",ja:"\u5909\u308F\u3063\u305F"},yano:{es:"ya no",en:"no longer",ja:"\u3082\u3046\u9055\u3046"}},J_=()=>{try{let i=JSON.parse(localStorage.getItem("rio3d-ofr")||"[]");return Array.isArray(i)?i:[]}catch{return[]}},$b=(i,e)=>{try{let t=J_().filter(n=>n[0]!==i);t.push([i,e]),localStorage.setItem("rio3d-ofr",JSON.stringify(t))}catch{}},Kb=()=>{try{return+localStorage.getItem("rio3d-ofr-pend")||0}catch{return 0}},jb=i=>{try{i?localStorage.setItem("rio3d-ofr-pend",String(i)):localStorage.removeItem("rio3d-ofr-pend")}catch{}},$_=[{es:"Cerr\xE9 mi primera vuelta y las luces subieron solas. Qu\xE9 torpe me sent\xED, y qu\xE9 bien. Si lees esto, la caba\xF1a ya te abri\xF3 la puerta.",en:"I closed my first lap and the lights rose on their own. How clumsy I felt, and how good. If you are reading this, the cabin has already opened its door to you.",ja:"\u6700\u521D\u306E\u4E00\u5468\u3092\u7D42\u3048\u308B\u3068\u3001\u706F\u304C\u3072\u3068\u308A\u3067\u306B\u6607\u3063\u3066\u3044\u304D\u307E\u3057\u305F\u3002\u4E0D\u5668\u7528\u306A\u81EA\u5206\u304C\u3001\u306A\u3093\u3060\u304B\u3046\u308C\u3057\u304B\u3063\u305F\u3002\u3053\u308C\u3092\u8AAD\u3093\u3067\u3044\u308B\u306A\u3089\u3001\u5C0F\u5C4B\u306F\u3082\u3046\u3042\u306A\u305F\u3092\u8FCE\u3048\u5165\u308C\u3066\u3044\u307E\u3059\u3002"},{es:"Ya conozco el puente por su crujido y a las garzas por su silencio. Dej\xE9 un gesto en cada lugar, como quien deja una nota sobre la mesa. Hazlo t\xFA tambi\xE9n.",en:"I know the bridge by its creak and the herons by their silence. I left a small gesture at every place, like a note on the table. You do it too.",ja:"\u6A4B\u306F\u304D\u3057\u3080\u97F3\u3067\u3001\u30B5\u30AE\u306F\u9759\u3051\u3055\u3067\u899A\u3048\u307E\u3057\u305F\u3002\u305D\u308C\u305E\u308C\u306E\u5834\u6240\u306B\u5C0F\u3055\u306A\u4ED5\u8349\u3092\u6B8B\u3057\u307E\u3057\u305F\u3002\u98DF\u5353\u306B\u7F6E\u304D\u624B\u7D19\u3092\u3059\u308B\u3088\u3046\u306B\u3002\u3042\u306A\u305F\u3082\u305D\u3046\u3057\u3066\u307F\u3066\u3002"},{es:"Esta vuelta dud\xE9. Quiz\xE1 no buscaba un lugar, sino reconocerme en lo que dej\xE9 atr\xE1s. Mira las luces que soltaste: \xBFsiguen siendo las mismas?",en:"I doubted myself this lap. Maybe I was not looking for a place, but for myself in what I left behind. Look at the lights you let go: are they still the same?",ja:"\u3053\u306E\u4E00\u5468\u3001\u8FF7\u3044\u307E\u3057\u305F\u3002\u63A2\u3057\u3066\u3044\u305F\u306E\u306F\u5834\u6240\u3067\u306F\u306A\u304F\u3001\u7F6E\u3044\u3066\u304D\u305F\u3082\u306E\u306E\u4E2D\u306E\u81EA\u5206\u3060\u3063\u305F\u306E\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u3042\u306A\u305F\u304C\u653E\u3063\u305F\u706F\u3092\u898B\u3066\u3002\u307E\u3060\u540C\u3058\u3067\u3059\u304B\u3002"},{es:"La \xFAltima luz subi\xF3 y la caba\xF1a qued\xF3 en silencio, como cuando todo est\xE1 en su sitio. Te dejo la llave bajo la l\xE1mpara del porche. Es tuya; yo sigo r\xEDo abajo.",en:"The last light rose and the cabin fell silent, the way it does when everything is in its place. I leave the key under the porch lamp. It is yours; I go on down the river.",ja:"\u6700\u5F8C\u306E\u706F\u304C\u6607\u308A\u3001\u5C0F\u5C4B\u306F\u3059\u3079\u3066\u304C\u53CE\u307E\u308B\u3079\u304D\u3068\u3053\u308D\u306B\u53CE\u307E\u3063\u305F\u3088\u3046\u306B\u9759\u307E\u308A\u307E\u3057\u305F\u3002\u9375\u306F\u7E01\u5074\u306E\u706F\u306E\u4E0B\u306B\u7F6E\u3044\u3066\u304A\u304D\u307E\u3059\u3002\u3053\u3053\u306F\u3042\u306A\u305F\u306E\u5C0F\u5C4B\u3002\u79C1\u306F\u5DDD\u3092\u4E0B\u3063\u3066\u3044\u304D\u307E\u3059\u3002"}],Qb=i=>{let e=$_[i-1];return e?e[Go()]||e.es:""},eM=i=>(i||"").split(/(?<=[.!?。])\s*/)[0];var Qd="zen-sand";var ef=[[170,150,34],[300,235,24],[470,120,30]];function tf(i){i.add([["Jard\xEDn zen","Zen garden","\u7985\u306E\u5EAD"],["Rastrillar la arena con calma","Rake the sand slowly","\u7802\u3092\u3086\u3063\u304F\u308A\u304B\u304D\u5206\u3051\u308B"],["Olas alrededor de las piedras","Ripples around the stones","\u77F3\u306E\u307E\u308F\u308A\u306B\u6CE2\u7D0B"],["Alisar","Smooth","\u306A\u3089\u3059"],["Cerrar","Close","\u9589\u3058\u308B"],["Se abri\xF3 el jard\xEDn zen: ya le\xEDste todas las cartas de Mara","The zen garden is open: you have read all of Mara\u2019s letters","\u7985\u306E\u5EAD\u304C\u958B\u304D\u307E\u3057\u305F\u3002\u30DE\u30E9\u306E\u624B\u7D19\u3092\u3059\u3079\u3066\u8AAD\u307F\u307E\u3057\u305F"],["Arrastra el dedo sobre la arena. No hay prisa ni forma correcta.","Drag your finger over the sand. No rush, no right way.","\u7802\u306E\u4E0A\u3092\u6307\u3067\u306A\u305E\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6025\u3050\u5FC5\u8981\u3082\u3001\u6B63\u3057\u3044\u5F62\u3082\u3042\u308A\u307E\u305B\u3093\u3002"],["Un momento de calma te dej\xF3 un recuerdo","A calm moment left you a keepsake","\u9759\u304B\u306A\u3072\u3068\u3068\u304D\u304C\u601D\u3044\u51FA\u3092\u3072\u3068\u3064\u6B8B\u3057\u307E\u3057\u305F"],["Mara dej\xF3 escrito: \xABel jard\xEDn no se termina, se acompa\xF1a\xBB","Mara wrote: \u201Ca garden is never finished, only kept company\u201D","\u30DE\u30E9\u306F\u3053\u3046\u66F8\u304D\u307E\u3057\u305F\u3002\u300C\u5EAD\u306F\u5B8C\u6210\u3055\u305B\u308B\u3082\u306E\u3067\u306F\u306A\u304F\u3001\u5BC4\u308A\u305D\u3046\u3082\u306E\u300D"]])}var nM=(i,e)=>{let t=i.ltr||{};for(let n=0;n<(e||11);n++)if(!t[n])return!1;return!0};function iM(i){let e=i.tr||(R=>R),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(14,16,36,.94);color:#fbf1e0;font:500 .9rem system-ui;padding:12px";let n=document.createElement("div");n.textContent=e("Jard\xEDn zen"),n.style.cssText="font:600 1.15rem system-ui";let s=document.createElement("canvas");s.width=640,s.height=380,s.style.cssText="position:relative;inset:auto;display:block;height:auto;z-index:auto;width:min(94vw,640px);max-height:58vh;aspect-ratio:640/380;border-radius:18px;border:1px solid #5a609a;touch-action:none;box-shadow:0 10px 40px rgba(0,0,0,.45);cursor:crosshair";let r=document.createElement("div");r.textContent=e("Arrastra el dedo sobre la arena. No hay prisa ni forma correcta."),r.style.cssText="opacity:.7;font-size:.8rem;text-align:center;max-width:90vw";let a=document.createElement("div");a.style.cssText="display:flex;gap:8px;flex-wrap:wrap;justify-content:center";let o=(R,D)=>{let k=document.createElement("button");return k.type="button",k.textContent=e(R),k.style.cssText="min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;cursor:pointer",k.onclick=D,a.appendChild(k),k};t.append(n,s,r,a),document.body.appendChild(t);let l=s.getContext("2d"),c=document.createElement("canvas");c.width=640,c.height=380;let h=c.getContext("2d"),u=()=>{h.fillStyle="#d9c9a3",h.fillRect(0,0,640,380);for(let R=0;R<2400;R++)h.fillStyle="rgba("+(R%2?"120,100,70":"255,245,215")+",.07)",h.fillRect(Math.random()*640,Math.random()*380,1.4,1.4)};u();let d=!1;try{let R=localStorage.getItem(Qd);if(R){let D=new Image;D.onload=()=>{h.drawImage(D,0,0),f()},D.src=R}}catch{}let p=()=>{if(d){d=!1;try{localStorage.setItem(Qd,c.toDataURL("image/png"))}catch{}}},g=(R,D,k)=>{l.fillStyle="rgba(0,0,0,.22)",l.beginPath(),l.ellipse(R+5,D+k*.7,k*1.05,k*.45,0,0,7),l.fill();let B=l.createRadialGradient(R-k*.35,D-k*.4,k*.1,R,D,k*1.1);B.addColorStop(0,"#9d9aa6"),B.addColorStop(1,"#4f4d5a"),l.fillStyle=B,l.beginPath(),l.ellipse(R,D,k,k*.78,0,0,7),l.fill(),l.fillStyle="rgba(110,150,100,.5)",l.beginPath(),l.ellipse(R-k*.2,D-k*.5,k*.4,k*.14,0,0,7),l.fill()},b=(R,D)=>{l.fillStyle="#6b4d3a",l.fillRect(R-4,D-34,8,34),l.fillStyle="#8b6a50",l.fillRect(R-28,D-6,56,10);for(let[k,B,K]of[[-14,-42,15],[10,-52,18],[22,-34,12]])l.fillStyle="#5d9a6c",l.beginPath(),l.arc(R+k,D+B,K,0,7),l.fill(),l.fillStyle="rgba(255,255,255,.12)",l.beginPath(),l.arc(R+k-4,D+B-5,K*.5,0,7),l.fill()},m=(R,D)=>{let k="#8a8896";l.fillStyle=k,l.fillRect(R-14,D-8,28,8),l.fillRect(R-5,D-34,10,28),l.fillRect(R-17,D-42,34,8),l.fillRect(R-11,D-62,22,20),l.fillStyle="rgba(255,225,160,.95)",l.fillRect(R-6,D-57,12,11),l.fillStyle=k,l.beginPath(),l.moveTo(R-19,D-62),l.lineTo(R,D-78),l.lineTo(R+19,D-62),l.fill();let B=l.createRadialGradient(R,D-52,2,R,D-52,60);B.addColorStop(0,"rgba(255,200,120,.35)"),B.addColorStop(1,"rgba(255,200,120,0)"),l.fillStyle=B,l.fillRect(R-60,D-112,120,120)};function f(){l.drawImage(c,0,0);for(let[D,k,B]of ef)g(D,k,B);b(560,330),m(70,340);let R=l.createRadialGradient(640/2,380/2,380*.35,640/2,380/2,380*.9);R.addColorStop(0,"rgba(20,20,40,0)"),R.addColorStop(1,"rgba(20,20,40,.35)"),l.fillStyle=R,l.fillRect(0,0,640,380)}f();let x=null,S=null,_=null,M=()=>{try{if(x=i.ctx&&i.ctx(),!x||S)return;let R=x.createBiquadFilter();if(R.type="bandpass",R.frequency.value=1100,R.Q.value=.6,S=x.createGain(),S.gain.value=0,_=window.UX&&UX.pinkSrc?UX.pinkSrc(x,1):null,!_)return;_.connect(R),R.connect(S),window.UX?UX.out(x,S):S.connect(x.destination),_.start(0)}catch{S=null}},T=R=>{try{S&&x&&S.gain.setTargetAtTime(R,x.currentTime,.05)}catch{}},A=null,y=0,E=0,I=0,L=0,U=R=>{let D=s.getBoundingClientRect();return[(R.clientX-D.left)/D.width*640,(R.clientY-D.top)/D.height*380]};s.addEventListener("pointerdown",R=>{s.setPointerCapture(R.pointerId),A=U(R),M(),T(.012)}),s.addEventListener("pointermove",R=>{if(!A)return;let D=U(R),k=D[0]-A[0],B=D[1]-A[1],K=Math.hypot(k,B);if(K<2)return;let G=-B/K,Y=k/K;for(let j=-2;j<=2;j++){let Te=G*j*8,Se=Y*j*8;h.lineCap="round",h.lineWidth=3.2,h.strokeStyle="rgba(95,78,52,.34)",h.beginPath(),h.moveTo(A[0]+Te+1,A[1]+Se+1),h.lineTo(D[0]+Te+1,D[1]+Se+1),h.stroke(),h.lineWidth=2,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.moveTo(A[0]+Te-1,A[1]+Se-1),h.lineTo(D[0]+Te-1,D[1]+Se-1),h.stroke()}if(A=D,y+=K,d=!0,f(),T(Math.min(.03,.006+K*.0012)),y>1100&&E<3){y=0,E++;try{i.addMem&&i.addMem(1),i.say&&i.say(e("Un momento de calma te dej\xF3 un recuerdo"))}catch{}}});let z=()=>{A=null,T(0),p()};s.addEventListener("pointerup",z),s.addEventListener("pointercancel",z),o("Olas alrededor de las piedras",()=>{for(let[R,D,k]of ef)for(let B=k+14;B<k+112;B+=11)h.lineWidth=3,h.strokeStyle="rgba(95,78,52,.32)",h.beginPath(),h.ellipse(R+1,D+1,B,B*.8,0,0,7),h.stroke(),h.lineWidth=1.8,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.ellipse(R-1,D-1,B,B*.8,0,0,7),h.stroke();d=!0,f(),p();try{i.chime&&i.chime()}catch{}}),o("Alisar",()=>{u(),d=!0,f(),p()}),o("Cerrar",()=>{z();try{_&&_.stop&&_.stop(),S&&S.disconnect()}catch{}t.remove()}),t.onclick=R=>{R.target===t&&a.lastChild.click()}}var rf="rio-still",_t={on:!1,k:0,t:0,ev:0,menu:!1},K_='#pzMore:not([hidden]),#menu:not([hidden]),.xm,#pz:not([hidden]),body>div[style*="inset:0"]:not([style*="pointer-events:none"])',ih=0,j_=()=>{try{return!!document.querySelector(K_)}catch{return!1}},sh=[["Un pez sube a respirar y deja c\xEDrculos en el agua.","A fish rises for air and leaves circles on the water.","\u9B5A\u304C\u606F\u3092\u3057\u306B\u4E0A\u304C\u308A\u3001\u6C34\u306B\u8F2A\u3092\u6B8B\u3057\u307E\u3059\u3002"],["El viento mueve las ca\xF1as, y luego vuelve el silencio.","The wind stirs the reeds, then silence returns.","\u98A8\u304C\u8466\u3092\u3086\u3089\u3057\u3001\u307E\u305F\u9759\u3051\u3055\u304C\u623B\u308A\u307E\u3059\u3002"],["Una hoja pasa despacio; t\xFA no.","A leaf drifts by, slowly; you do not.","\u8449\u304C\u3086\u3063\u304F\u308A\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002\u3042\u306A\u305F\u306F\u52D5\u304D\u307E\u305B\u3093\u3002"],["Se oye el agua rozando la canoa. Eso es todo, y alcanza.","You can hear water brushing the canoe. That is all, and it is enough.","\u6C34\u304C\u30AB\u30CC\u30FC\u3092\u306A\u3067\u308B\u97F3\u3060\u3051\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes se reflejan en el r\xEDo, tan quietas como t\xFA.","Clouds reflect in the river, as still as you are.","\u96F2\u304C\u5DDD\u306B\u6620\u308A\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u304F\u3089\u3044\u9759\u304B\u3067\u3059\u3002"]];function Q_(i){i.add(sh),i.add([["Quedarme quieto","Stay still","\u3058\u3063\u3068\u3059\u308B"],["Seguir el r\xEDo","Follow the river","\u5DDD\u3092\u9032\u3080"],["Una lib\xE9lula se posa en la proa.","A dragonfly lands on the bow.","\u30C8\u30F3\u30DC\u304C\u8239\u9996\u306B\u6B62\u307E\u308A\u307E\u3057\u305F\u3002"],["Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a.","Staying still counts too. A keepsake for the cabin.","\u3058\u3063\u3068\u3057\u3066\u3044\u308B\u306E\u3082\u5927\u5207\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u3002"]])}var nf=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},af=()=>{try{return JSON.parse(localStorage.getItem(rf)||"{}")||{}}catch{return{}}},sf=()=>af().n||0,of=i=>{i.cnt=i.cnt||{};let e=Math.max(0,sf()-(i.cnt.st||0));return e&&(i.cnt.st=sf()),e},$t=null,rh=!1;function ey(){if($t||typeof document=="undefined")return;try{Q_(window.UX)}catch{}$t=document.createElement("button"),$t.type="button",$t.id="stillBtn",$t.style.cssText="position:fixed;left:12px;bottom:max(96px,calc(env(safe-area-inset-bottom) + 88px));z-index:58;min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:rgba(32,34,70,.82);color:#fbf1e0;font:600 .85rem system-ui;cursor:pointer;display:none";let i=t=>{try{return UX.tr(t)}catch{return t}},e=()=>{$t.textContent=i(_t.on?"Seguir el r\xEDo":"Quedarme quieto")};e(),$t.onclick=()=>{_t.on=!_t.on,_t.t=0,_t.ev=0,rh=!1,e();try{UX.hap(8)}catch{}},document.body.appendChild($t)}var ty=i=>{$t||ey(),$t&&($t.style.display=i?"block":"none")};function aM(i,e,t){if(e&&(!$t||$t.style.display==="none")&&ty(!0),ih-=i,ih<=0&&(ih=.25,_t.menu=j_()),_t.k+=((_t.on||_t.menu?1:0)-_t.k)*Math.min(1,i*(_t.menu?3:1.2)),!!_t.on){if(_t.t+=i,_t.ev===0&&_t.t>=20){_t.ev=1,Zd("libelula");try{UX.say(UX.tr("Una lib\xE9lula se posa en la proa."))}catch{}try{t&&t()}catch{}}else if(_t.ev>=1&&_t.t>=20+_t.ev*50){let n=sh[(_t.ev-1)%sh.length];_t.ev++;try{UX.say(UX.tr(n[0]))}catch{}try{t&&t()}catch{}}if(!rh&&_t.t>=45){rh=!0;let n=af();if(n.d!==nf()){n.d=nf(),n.n=(n.n||0)+1;try{localStorage.setItem(rf,JSON.stringify(n))}catch{}try{UX.say(UX.tr("Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a."))}catch{}}}}}var hf="rio-tasks",xr=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]],Wo=[["Escuchar el crujido del puente","Listen to the bridge creak","\u6A4B\u306E\u304D\u3057\u3080\u97F3\u3092\u805E\u304F","Volv\xED al puente: cruji\xF3 con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.","I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.","\u6A4B\u306B\u623B\u308B\u3068\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u6B69\u5E45\u3067\u304D\u3057\u307F\u307E\u3057\u305F\u3002\u3082\u3046\u6728\u306E\u97F3\u3067\u306F\u306A\u304F\u3001\u5BB6\u306E\u97F3\u3067\u3059\u3002"],["Mirar el reflejo del portal","Watch the gate\u2019s reflection","\u9CE5\u5C45\u306E\u6620\u308A\u3092\u773A\u3081\u308B","Esta vez mir\xE9 el reflejo en lugar del portal. Se ve igual de bien, pero m\xE1s tranquilo.","This time I looked at the reflection instead of the gate. It looks just as good, only calmer.","\u4ECA\u56DE\u306F\u9CE5\u5C45\u3067\u306F\u306A\u304F\u6C34\u9762\u306E\u6620\u308A\u3092\u898B\u307E\u3057\u305F\u3002\u540C\u3058\u304F\u3089\u3044\u304D\u308C\u3044\u3067\u3001\u3082\u3063\u3068\u9759\u304B\u3067\u3059\u3002"],["Saludar a quien pasa en la aldea","Greet someone passing in the village","\u6751\u3067\u3059\u308C\u3061\u304C\u3046\u4EBA\u306B\u3042\u3044\u3055\u3064\u3059\u308B","Una se\xF1ora de la aldea me salud\xF3 como si fuera vecina. Le dije que ten\xEDa una caba\xF1a lejos, y sonri\xF3.","A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.","\u6751\u306E\u5973\u6027\u304C\u96A3\u4EBA\u306E\u3088\u3046\u306B\u3042\u3044\u3055\u3064\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u9060\u304F\u306B\u5C0F\u5C4B\u304C\u3042\u308B\u3068\u8A71\u3059\u3068\u3001\u7B11\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002"],["Atrapar un p\xE9talo en el aire","Catch a petal in the air","\u821E\u3046\u82B1\u3073\u3089\u3092\u3064\u304B\u3080","Atrap\xE9 un p\xE9talo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.","I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.","\u4F55\u6C17\u306A\u304F\u7A7A\u4E2D\u3067\u82B1\u3073\u3089\u3092\u3064\u304B\u307F\u307E\u3057\u305F\u3002\u5E78\u904B\u306E\u3057\u308B\u3057\u3060\u305D\u3046\u3067\u3059\u3002\u3042\u306A\u305F\u306B\u8D08\u308A\u307E\u3059\u3002"],["Contar las garzas en silencio","Count the herons in silence","\u9759\u304B\u306B\u30B5\u30AE\u3092\u6570\u3048\u308B","Cont\xE9 las garzas sin mover un dedo: siempre salen una m\xE1s de las que cre\xEDa.","I counted the herons without moving a finger: there is always one more than I thought.","\u6307\u4E00\u672C\u52D5\u304B\u3055\u305A\u30B5\u30AE\u3092\u6570\u3048\u307E\u3057\u305F\u3002\u601D\u3063\u305F\u3088\u308A\u3001\u3044\u3064\u3082\u3072\u3068\u3064\u591A\u3044\u306E\u3067\u3059\u3002"],["Escuchar c\xF3mo se apaga el eco de la campana","Listen to the bell\u2019s echo fade","\u9418\u306E\u4F59\u97FB\u304C\u6D88\u3048\u308B\u306E\u3092\u805E\u304F","Esper\xE9 a que el eco se apagara del todo. Dura m\xE1s de lo que uno imagina, y es lo mejor de la campana.","I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.","\u4F59\u97FB\u304C\u5B8C\u5168\u306B\u6D88\u3048\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u601D\u3046\u3088\u308A\u9577\u304F\u3001\u305D\u308C\u304C\u9418\u306E\u3044\u3061\u3070\u3093\u597D\u304D\u306A\u3068\u3053\u308D\u3067\u3059\u3002"],["Mojar los dedos en la cascada","Dip your fingers in the waterfall","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3059","Moj\xE9 los dedos en la cascada: estaba fr\xEDa y clara. Te mando un poco de ese fr\xEDo para el verano.","I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3057\u307E\u3057\u305F\u3002\u51B7\u305F\u304F\u3066\u6F84\u3093\u3067\u3044\u307E\u3059\u3002\u590F\u306E\u305F\u3081\u306B\u3001\u5C11\u3057\u305D\u306E\u51B7\u305F\u3055\u3092\u9001\u308A\u307E\u3059\u3002"],["Mirar c\xF3mo suben el vapor y la tarde","Watch the steam and the afternoon rise","\u6E6F\u6C17\u3068\u5915\u65B9\u304C\u7ACB\u3061\u306E\u307C\u308B\u306E\u3092\u898B\u308B","El vapor del t\xE9 sub\xEDa despacio y la tarde con \xE9l. Anot\xE9 la hora: no se me va a olvidar.","The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.","\u304A\u8336\u306E\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u3001\u5915\u65B9\u3082\u3044\u3063\u3057\u3087\u306B\u6607\u308A\u307E\u3057\u305F\u3002\u6642\u523B\u3092\u66F8\u304D\u3068\u3081\u305F\u306E\u3067\u3001\u5FD8\u308C\u307E\u305B\u3093\u3002"],["Dejar que el viento mueva el bamb\xFA","Let the wind move the bamboo","\u98A8\u304C\u7AF9\u3092\u3086\u3089\u3059\u306E\u306B\u307E\u304B\u305B\u308B","No hice nada y el bamb\xFA hizo todo. Aprend\xED que a veces ayudar es apartarse.","I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.","\u4F55\u3082\u3057\u306A\u3044\u3068\u3001\u7AF9\u304C\u3059\u3079\u3066\u3092\u3084\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u8EAB\u3092\u5F15\u304F\u3053\u3068\u304C\u52A9\u3051\u306B\u306A\u308B\u3068\u77E5\u308A\u307E\u3057\u305F\u3002"],["Ver c\xF3mo se cierra un loto","Watch a lotus close","\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u308B","Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.","I watched a lotus close at dawn. It is not an ending: it is the same rest you take.","\u591C\u660E\u3051\u306B\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u307E\u3057\u305F\u3002\u7D42\u308F\u308A\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u4F11\u307F\u3068\u540C\u3058\u4F11\u307F\u3067\u3059\u3002"],["Mirar el castillo desde el agua","Look at the castle from the water","\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u308B","Mir\xE9 el castillo desde el agua, como la primera vez. Sigue pareci\xE9ndose a las luces de tu terraza.","I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.","\u6700\u521D\u306E\u3068\u304D\u306E\u3088\u3046\u306B\u3001\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u307E\u3057\u305F\u3002\u3084\u306F\u308A\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002"]],ch=i=>Wo[i]||null,uf="rio-tasks2",lf=2,oh=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},hh=()=>{try{let i=JSON.parse(localStorage.getItem(uf)||"{}")||{};return i.d=i.d||{},i}catch{return{d:{}}}},Xo=()=>hh().d,ny=()=>{let i=hh();return i.day===oh()?Math.max(0,lf-(i.n||0)):lf},uh=i=>xr[i]||null,dh=()=>{try{return JSON.parse(localStorage.getItem(hf)||"{}")}catch{return{}}},fh=dh,iy=()=>{try{return+localStorage.getItem("rio3d-cer")||0}catch{return 0}},sy=()=>{try{return localStorage.getItem("rio3d-lapk")!=null}catch{return!1}},ry=()=>iy()>=1||!sy()&&yr().has(10);function ph(i){i.add(xr.map(e=>[e[0],e[1],e[2]])),i.add(xr.map(e=>[e[3],e[4],e[5]])),i.add(Wo.map(e=>[e[0],e[1],e[2]])),i.add(Wo.map(e=>[e[3],e[4],e[5]])),i.add([["Carta de vuelta","Letter back","\u8FD4\u4E8B\u306E\u624B\u7D19"],["Hoy ya diste dos vueltas. Ma\xF1ana, m\xE1s.","You have already done two returns today. More tomorrow.","\u4ECA\u65E5\u306F\u3082\u3046\u4E8C\u56DE\u3075\u308A\u8FD4\u308A\u307E\u3057\u305F\u3002\u7D9A\u304D\u306F\u660E\u65E5\u3002"]]),i.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var kt,ds,Ho,En=null,gr=0,_r=0,ah=0,df=0,cf=!1,lh=null;function ay(){kt=document.createElement("button"),kt.type="button",kt.style.cssText="position:fixed;left:50%;bottom:max(150px,calc(env(safe-area-inset-bottom) + 144px));transform:translateX(-50%);z-index:60;display:none;min-height:50px;max-width:min(90vw,420px);padding:10px 20px;border-radius:99px;border:1px solid #ffc77a;background:rgba(40,40,80,.88);color:#fbf1e0;font:600 .9rem/1.25 system-ui;cursor:pointer;overflow:hidden;touch-action:none",ds=document.createElement("span"),ds.style.cssText="position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,199,122,.35);pointer-events:none",Ho=document.createElement("span"),Ho.style.cssText="position:relative",kt.append(ds,Ho),document.body.appendChild(kt);let i=t=>{En!=null&&(t.preventDefault(),_r=1,df=performance.now(),oy())},e=()=>{_r=0,ds.style.width="0"};kt.addEventListener("pointerdown",i),kt.addEventListener("pointerup",e),kt.addEventListener("pointerleave",e),kt.addEventListener("pointercancel",e),kt.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),ff())})}function oy(){cancelAnimationFrame(ah);let i=()=>{if(!_r)return;let e=Math.min(1,(performance.now()-df)/2200);if(ds.style.width=e*100+"%",e>=1){_r=0,ff();return}ah=requestAnimationFrame(i)};ah=requestAnimationFrame(i)}function ff(){if(En==null)return;if(gr){let e=hh();e.d[En]=1,e.n=(e.day===oh()&&e.n||0)+1,e.day=oh();try{localStorage.setItem(uf,JSON.stringify(e))}catch{}}else{let e=dh();e[En]=1;try{localStorage.setItem(hf,JSON.stringify(e))}catch{}}let i=En;En=null,gr=0,kt.style.display="none",ds.style.width="0";try{lh&&lh(i)}catch{}try{UX.hap([10,50,10])}catch{}try{UX.say(UX.tr("Hecho. Un recuerdo m\xE1s para la caba\xF1a."))}catch{}}function cM(i,e){if(!cf){cf=!0;try{ph(window.UX)}catch{}}lh=e;let t=i!=null&&xr[i]&&ry(),n=t&&!dh()[i],s=t&&!n&&!Xo()[i]&&ny()>0;if(!(n||s)){En!=null&&!_r&&(En=null,gr=0,kt&&(kt.style.display="none"));return}En===i&&gr===(s?1:0)||(kt||ay(),En=i,gr=s?1:0,Ho.textContent=UX.tr((s?Wo:xr)[i][0])+" \xB7 "+UX.tr("Mant\xE9n pulsado para hacerlo"),kt.style.display="block")}var ly="rio-found-types",Zo=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],cy=Zo.map(i=>i[0]),xf=Zo.map(i=>i[1]),gM=Zo.map(i=>{let e=t=>(t||"").split(/(?<=[.!?。])\s*/)[0];return{es:e(i[1]),en:e(i[2]),ja:e(i[3])}}),yr=()=>{let i=new Set;for(let e of["rio3d-found",ly])try{JSON.parse(localStorage.getItem(e)||"[]").forEach(t=>i.add(t))}catch{}return i};function xM(i){Yd(i),ph(i),hy(i),tf(i),i.add(Zo.map(e=>[e[1],e[2],e[3]])),i.add([["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Cartas de Mara","Mara\u2019s letters","\u30DE\u30E9\u306E\u624B\u7D19"],["Carta sin abrir","Unopened letter","\u672A\u958B\u5C01\u306E\u624B\u7D19"],["Desc\xFAbrelo en el r\xEDo para leerla","Discover it on the river to read it","\u5DDD\u3067\u898B\u3064\u3051\u308B\u3068\u8AAD\u3081\u307E\u3059"],["Abrir carta","Open letter","\u624B\u7D19\u3092\u958B\u304F"],["Notas de visitantes","Visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2"],["Mara te dej\xF3 una carta","Mara left you a letter","\u30DE\u30E9\u304C\u624B\u7D19\u3092\u6B8B\u3057\u307E\u3057\u305F"],["Carta de Mara","Letter from Mara","\u30DE\u30E9\u306E\u624B\u7D19"],["Una carta nueva te espera en el diario","A new letter waits in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u5C4A\u3044\u3066\u3044\u307E\u3059"]]),i.rx([[/^Carta sin abrir · (.+)$/,(e,t,n)=>n("Carta sin abrir")+" \xB7 "+n(e[1])]])}var mh=i=>Object.values(i.decor||{}).filter(Boolean).length,pf=i=>Object.keys(i.own||{}).length,gh=i=>(i.notes||[]).length,mf=i=>i.cnt||{},_h=[[i=>!!(i.repaired&&i.repaired.techo),"Termina de reparar el techo","Finish repairing the roof","\u5C4B\u6839\u306E\u4FEE\u7406\u3092\u304A\u308F\u3089\u305B\u308B"],[i=>pf(i)>=1,"Coloca tu primer objeto","Place your first object","\u6700\u521D\u306E\u98FE\u308A\u3092\u7F6E\u304F"],[i=>gh(i)>=1,"Recibe a tu primer visitante","Welcome your first visitor","\u6700\u521D\u306E\u8A2A\u554F\u8005\u3092\u8FCE\u3048\u308B"],[i=>(mf(i).te||0)>=1,"Prepara un t\xE9","Make a cup of tea","\u304A\u8336\u3092\u3044\u308C\u308B"],[i=>mh(i)>=2,"Decora dos lugares de la caba\xF1a","Decorate two spots in the cabin","\u5C0F\u5C4B\u306E2\u304B\u6240\u3092\u98FE\u308B"],[i=>(mf(i).rg||0)>=1,"Riega las plantas","Water the plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],[i=>gh(i)>=3,"Escucha las historias de tres visitas","Hear the stories of three visits","3\u56DE\u306E\u8A2A\u554F\u8005\u306E\u8A71\u3092\u805E\u304F"],[i=>mh(i)>=4,"Decora cuatro lugares","Decorate four spots","4\u304B\u6240\u3092\u98FE\u308B"],[i=>pf(i)>=5,"Re\xFAne cinco objetos","Gather five objects","\u98FE\u308A\u30925\u3064\u96C6\u3081\u308B"],[i=>gh(i)>=6,"Lee seis notas de los visitantes","Read six visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2\u30926\u3064\u8AAD\u3080"],[i=>mh(i)>=6,"Deja decorados todos los lugares","Leave every spot decorated","\u3059\u3079\u3066\u306E\u5834\u6240\u3092\u98FE\u308B"]],xh=(i,e)=>!!(i.ltr||{})[e]||yr().has(e)&&_h[e][0](i);function hy(i){i.add(_h.map(e=>[e[1],e[2],e[3]])),i.add([["Desc\xFAbrelo en el r\xEDo","Discover it on the river","\u5DDD\u3067\u898B\u3064\u3051\u307E\u3057\u3087\u3046"],["Pista","Hint","\u30D2\u30F3\u30C8"],["Se abri\xF3 una carta nueva en el diario","A new letter opened in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u958B\u304D\u307E\u3057\u305F"]])}function _M(i,e,t,n,s){let r=yr(),a=fh(),o=Xo();e.ltr=e.ltr||{};let l=0,c=0,h=document.createElement("h3");h.style.cssText="margin:12px 0 8px;font:600 .95rem system-ui",h.textContent=t("Cartas de Mara"),i.appendChild(h),xf.forEach((b,m)=>{let f=document.createElement("p");f.style.margin="0 0 10px";let x=S=>{let _=document.createElement("span");_.textContent=S,f.appendChild(_)};if(x("\u2709 "),xh(e,m)){if(e.ltr[m]||(e.ltr[m]=1,l++),x(t(b)),f.style.color="#ffe9b8",a[m]&&uh(m)){let S=document.createElement("div");S.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#cfe8ff";let _=document.createElement("span");_.textContent="\u2726 ";let M=document.createElement("span");M.textContent=t(uh(m)[3]),S.append(_,M),f.appendChild(S),e.ltr[m]<2&&(e.ltr[m]=2,l++)}if(o[m]&&ch(m)){let S=document.createElement("div");S.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#e8d3ff";let _=document.createElement("span");_.textContent="\u21A9 ";let M=document.createElement("span");M.textContent=t(ch(m)[3]),S.append(_,M),f.appendChild(S),c++}}else{x(t("Carta sin abrir")),x(" \xB7 "),x(t(cy[m])),f.style.opacity=".6";let S=document.createElement("div");S.style.cssText="margin:4px 0 0 14px;font-size:.82em;color:#cfd6ff";let _=document.createElement("span");_.textContent="\u2727 ";let M=document.createElement("span");M.textContent=t(r.has(m)?_h[m][1]:"Desc\xFAbrelo en el r\xEDo"),S.append(_,M),f.appendChild(S)}i.appendChild(f)});let u=Jd(e)+0,d=Wd(e)+of(e);(u||d)&&(n(2*u+d),s());let p=document.createElement("button");p.type="button",p.textContent=t("Cuaderno del r\xEDo")+" \xB7 "+ko()+"/"+us.length,p.style.cssText="min-height:44px;margin:4px 8px 4px 0;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",p.onclick=()=>$d(t),i.appendChild(p),e.cnt=e.cnt||{};let g=Math.max(0,c-(e.cnt.tv||0));return g&&(e.cnt.tv=c,n(2*g),s()),l&&(n(3*l),s()),l}var uy=i=>{let e=yr(),t=fh(),n=0;for(let s=0;s<xf.length;s++)!(i.ltr||{})[s]&&xh(i,s)&&n++;return Object.keys(t).forEach(s=>{e.has(+s)&&((i.ltr||{})[s]||0)<2&&n++}),Object.keys(Xo()).filter(r=>xh(i,+r)).length>((i.cnt||{}).tv||0)&&n++,n},dy=["Primavera","Verano","Oto\xF1o","Invierno"],_f="rio3d-season",gf=["auto","0","1","2","3"],Yo=()=>{try{return localStorage.getItem(_f)||"auto"}catch{return"auto"}},yM=()=>{let i=Yo();if(i!=="auto")return+i;let e=new Date().getMonth();return e>=2&&e<=4?0:e>=5&&e<=7?1:e>=8&&e<=10?2:3},vM=()=>{let i=gf[(gf.indexOf(Yo())+1)%5];try{localStorage.setItem(_f,i)}catch{}return i},SM=()=>"Estaci\xF3n: "+(Yo()==="auto"?"Auto":dy[+Yo()]),bM=[[255,182,200],[255,222,140],[232,140,70],[240,246,255]];function MM(i){i.add([["Estaci\xF3n: Auto","Season: Auto","\u5B63\u7BC0: \u304A\u307E\u304B\u305B"],["Estaci\xF3n: Primavera","Season: Spring","\u5B63\u7BC0: \u6625"],["Estaci\xF3n: Verano","Season: Summer","\u5B63\u7BC0: \u590F"],["Estaci\xF3n: Oto\xF1o","Season: Autumn","\u5B63\u7BC0: \u79CB"],["Estaci\xF3n: Invierno","Season: Winter","\u5B63\u7BC0: \u51AC"]])}var qo=-1;function TM(i,e,t){let n=uy(i);if(qo<0){qo=n;return}n>qo&&e(t("Se abri\xF3 una carta nueva en el diario")),qo=n}export{gu as a,zt as b,bn as c,es as d,lc as e,zi as f,Ct as g,jn as h,un as i,tn as j,Ft as k,Ef as l,re as m,Qt as n,P as o,Vt as p,nt as q,Un as r,Tt as s,ai as t,We as u,Rl as v,Il as w,bt as x,Be as y,lt as z,da as A,Pl as B,Us as C,Lt as D,ci as E,qi as F,Ll as G,Yi as H,fa as I,Dl as J,xa as K,Ul as L,Os as M,Zi as N,Fl as O,Ol as P,hi as Q,zs as R,va as S,Ys as T,Vl as U,Gl as V,Hl as W,Wl as X,Ks as Y,Xl as Z,ql as _,Yl as $,Zl as aa,Jl as ba,Zt as ca,js as da,$l as ea,Kl as fa,Ot as ga,Ql as ha,ji as ia,tc as ja,nc as ka,sc as la,Ad as ma,eh as na,R_ as oa,th as pa,ob as qa,D_ as ra,N_ as sa,lb as ta,cb as ua,hb as va,ub as wa,db as xa,fb as ya,pb as za,mb as Aa,gb as Ba,xb as Ca,_b as Da,yb as Ea,vb as Fa,bb as Ga,Mb as Ha,Tb as Ia,Yd as Ja,Zd as Ka,$d as La,Go as Ma,Cb as Na,On as Oa,Rb as Pa,G_ as Qa,Lb as Ra,mr as Sa,Db as Ta,Nb as Ua,jd as Va,Ub as Wa,W_ as Xa,X_ as Ya,Fb as Za,Ob as _a,Bb as $a,Y_ as ab,Z_ as bb,zb as cb,kb as db,Vb as eb,Gb as fb,Hb as gb,Wb as hb,Xb as ib,qb as jb,Yb as kb,Zb as lb,Jb as mb,J_ as nb,$b as ob,Kb as pb,jb as qb,Qb as rb,eM as sb,_t as tb,aM as ub,nM as vb,iM as wb,gM as xb,xM as yb,_M as zb,uy as Ab,yM as Bb,vM as Cb,SM as Db,bM as Eb,MM as Fb,TM as Gb,fh as Hb,cM as Ib};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
