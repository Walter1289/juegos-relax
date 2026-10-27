(()=>{(function(){if(window.UX)return;let i=["es","en","ja"],t={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},e={get(p,y){try{let S=localStorage.getItem(p);return S===null?y:S}catch{return y}},set(p,y){try{localStorage.setItem(p,y)}catch{}}},n=e.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,o=[],a=window.UX={lang:n,onLang:null,add(p){p.forEach(y=>r.set(y[0],y))},rx(p){p.forEach(y=>o.push(y))},tr(p){if(n==="es"||typeof p!="string")return p;let y=p.trim();if(!y)return p;let S=r.get(y);if(S)return p.replace(y,S[s]);for(let[_,v]of o){let b=y.match(_);if(b)return p.replace(y,v(b,n==="en"?1:2,a.tr))}return p},init(){if(n==="es")return;document.documentElement.lang=n;let p=y=>{if(y.nodeType===3){let v=a.tr(y.nodeValue);v!==y.nodeValue&&(y.nodeValue=v);return}if(y.nodeType!==1||y.tagName==="SCRIPT"||y.tagName==="STYLE")return;let S=y.getAttribute&&y.getAttribute("aria-label");if(S){let v=a.tr(S);v!==S&&y.setAttribute("aria-label",v)}let _=y.getAttribute&&y.getAttribute("title");if(_){let v=a.tr(_);v!==_&&y.setAttribute("title",v)}y.childNodes.forEach(p)};p(document.body),new MutationObserver(y=>{for(let S of y)S.type==="characterData"?p(S.target):S.addedNodes.forEach(p)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(p){if(e.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(p);return}if(!a._sw){let y=document.createElement("label");y.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let S=document.createElement("input");S.type="checkbox",S.setAttribute("switch",""),y.appendChild(S),document.body.appendChild(y),a._sw=y}a._sw.click()}catch{}},subsOn:()=>e.get("rio3d-subs","0")==="1",cap(p,y){if(!a.subsOn())return;let S=performance.now(),_=a._cl||(a._cl={});if(_[p]&&S-_[p]<(y||9e3))return;_[p]=S;let v=document.getElementById("uxcap");v||(v=document.createElement("div"),v.id="uxcap",v.setAttribute("aria-live","polite"),v.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(v)),v.textContent="["+a.tr(p)+"]",v.style.opacity=1,clearTimeout(a._ct),a._ct=setTimeout(()=>v.style.opacity=0,2600)},btns(p,y){y=y||{};let S=(z,$)=>{let B=document.createElement("button");return B.type="button",B.id=z,B.className=p||"",B.onclick=$,B},_=[],v=S("uxLang",()=>{let z=i[(i.indexOf(n)+1)%3];e.set("rio3d-lang",z);try{a.onLang&&a.onLang()}catch{}location.reload()});v.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+t[n],_.push(v);let b=S("uxSubs",()=>{e.set("rio3d-subs",a.subsOn()?"0":"1"),b.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});b.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",_.push(b);let T=S("uxHap",()=>{let z=e.get("rio3d-hap","1")==="1";e.set("rio3d-hap",z?"0":"1"),T.textContent=z?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",z||a.hap(15)});if(T.textContent=e.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",_.push(T),y.hand){let z={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},$=["0","r","l"],B=ht=>{document.body.classList.remove("hand-r","hand-l"),ht!=="0"&&document.body.classList.add("hand-"+ht)},G=e.get("rio3d-hand","0");z[G]||(G="0"),B(G);let K=S("uxHand",()=>{G=$[($.indexOf(G)+1)%3],e.set("rio3d-hand",G),B(G),K.textContent=z[G]});K.textContent=z[G],_.push(K)}let M=S("uxVol",()=>{let z=["1",".7",".4"],$=z.indexOf(String(a.api.vol()).replace("0.","."));a.api.setVol(z[($+1)%3]),M.textContent=E()}),E=()=>l("Volumen de este juego: ","Volume (this game): ","\u3053\u306E\u30B2\u30FC\u30E0\u306E\u97F3\u91CF: ")+Math.round(a.api.vol()*100)+" %";M.textContent=E(),_.push(M);let R=S("uxSoft",()=>{a.api.setSoft(!a.api.soft()),R.textContent=I()}),I=()=>a.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");R.textContent=I(),_.push(R);let L=S("uxSleep",()=>{let z=[0,15,30,45];a.api.sleep(z[(z.indexOf(a.api.sleepMin())+1)%4]),L.textContent=P()}),P=()=>a.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+a.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(L.textContent=P(),a._sb=()=>{L.textContent=P()},_.push(L),y.wear){let z=S("uxWear",()=>{e.set("ux-wear",e.get("ux-wear","0")==="1"?"0":"1"),z.textContent=$()}),$=()=>e.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");z.textContent=$(),_.push(z)}let C=S("uxCalm",()=>{a.setCalm(!a.calm()),C.textContent=N()}),N=()=>a.calm()?l("Menos movimiento y destellos: s\xED","Less motion and flashes: on","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30F3"):l("Menos movimiento y destellos: no","Less motion and flashes: off","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30D5");C.textContent=N(),_.push(C);let O=S("uxAbout",()=>a.about());return O.textContent=l("Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"),_.push(O),_},ask(p,y){let S=document.createElement("div");S.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let _=document.createElement("div");_.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let v=document.createElement("p");v.style.margin="0 0 14px",v.textContent=a.tr(p),_.appendChild(v);let b=(T,M)=>{let E=document.createElement("button");return E.type="button",E.textContent=T,E.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",E.onclick=()=>{S.remove(),M&&M()},E};_.appendChild(b(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),_.appendChild(b(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),y)),S.appendChild(_),document.body.appendChild(S)}},l=(p,y,S)=>n==="en"?y:n==="ja"?S:p,c=(()=>{let p=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return p?p[1]:/caba/i.test(document.title)?"cabana":"rio"})(),u="ux-vol-"+c,h={vol:e.get(u,e.get("ux-vol","1")),soft:e.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};a.quiet=!1;let d=()=>{for(let p of h.nodes)try{let y=p.c.currentTime;p.lp.frequency.setTargetAtTime(h.soft?2800:22e3,y,.1),p.g.gain.setTargetAtTime(+h.vol*h.k,y,.1)}catch{}};a.out=(p,y)=>{let S=p.createBiquadFilter();S.type="lowpass",S.frequency.value=h.soft?2800:22e3,S.Q.value=.5;let _=p.createGain();return _.gain.value=+h.vol*h.k,y.connect(S),S.connect(_),_.connect(p.destination),h.nodes.push({c:p,lp:S,g:_}),_},a.pinkSrc=(p,y)=>{let S=p._pink;if(!S){let b=p.sampleRate,T=Math.floor(b*12),M=Math.floor(b*1.5),E=T+M,R=new Float32Array(E),I=0,L=0,P=0,C=0,N=0,O=0,z=0;for(let B=0;B<E;B++){let G=Math.random()*2-1;I=.99886*I+G*.0555179,L=.99332*L+G*.0750759,P=.969*P+G*.153852,C=.8665*C+G*.3104856,N=.55*N+G*.5329522,O=-.7616*O-G*.016898,R[B]=(I+L+P+C+N+O+z+G*.5362)*.2215*.5,z=G*.115926}S=p.createBuffer(1,T,b);let $=S.getChannelData(0);for(let B=0;B<T;B++)$[B]=R[B];for(let B=0;B<M;B++){let G=B/M*Math.PI/2;$[B]=R[B]*Math.sin(G)+R[T+B]*Math.cos(G)}p._pink=S}let _=p.createBufferSource();_.buffer=S,_.loop=!0;let v=p.createGain();return v.gain.value=y||1,_.connect(v),v.start=(b,T)=>_.start(b||0,T||0),v.stop=b=>_.stop(b),v},a.api={soft:()=>h.soft,setSoft(p){h.soft=!!p,e.set("ux-soft",p?"1":"0"),d()},vol:()=>+h.vol,setVol(p){h.vol=String(p),e.set(u,h.vol),d()},sleepMin:()=>h.min,sleep(p){h.min=p,h.end=p?Date.now()+p*6e4:0,h.k=1,a.quiet=!1,h.ov&&(h.ov.style.opacity=0),d()}},setInterval(()=>{if(!h.end)return;let p=(h.end-Date.now())/1e3;if(!h.ov){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(y),h.ov=y}if(p<=0){h.end=0,h.min=0,h.k=0,d(),h.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{h.k=1,a.quiet=!1,d(),h.ov.style.opacity=0,a._sb&&a._sb()},1500);return}p<300&&(a.quiet=!0,h.k=Math.pow(p/300,2),h.ov.style.opacity=(1-p/300)*.6,d())},1e3);{let p=0,y=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(p+=5,p>=y)){y+=1800;let S=document.getElementById("uxrest");S||(S=document.createElement("div"),S.id="uxrest",S.setAttribute("aria-live","polite"),S.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(S)),S.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),S.style.opacity=1,clearTimeout(a._rt),a._rt=setTimeout(()=>S.style.opacity=0,7e3)}},5e3)}a.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),a.add([["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function m(p){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let S=document.createElement("div");S.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let _=document.createElement("div"),v=document.createElement("div");v.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),v.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let b=document.createElement("button");b.type="button",b.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),b.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",y.append(v,S,_,b),document.body.appendChild(y);let T=0,M=!0,E,R=L=>{M&&(M=!1,clearTimeout(E),y.remove(),p&&p(L))};b.onclick=()=>R(!1);let I=()=>{if(M){if(T>=5)return R(!0);T++,_.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),S.style.transition="transform 4s ease-in-out",S.style.transform="scale(1)",a.hap(8),E=setTimeout(()=>{M&&(_.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),S.style.transition="transform 6s ease-in-out",S.style.transform="scale(.55)",E=setTimeout(I,6e3))},4e3)}};I()}a.calm=()=>{let p=e.get("ux-calm",null);if(p==="1")return!0;if(p==="0")return!1;try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}},a.setCalm=p=>{e.set("ux-calm",p?"1":"0")},a.about=()=>{let p=document.getElementById("uxAboutOv");if(p){p.remove();return}let y=document.createElement("div");y.id="uxAboutOv",y.setAttribute("role","dialog"),y.setAttribute("aria-modal","true"),y.style.cssText="position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let S=document.createElement("div");S.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,440px);max-height:84vh;overflow:auto;font:15px/1.5 system-ui,sans-serif";let _=document.createElement("h2");_.style.cssText="margin:0 0 6px;font:600 1.2rem system-ui",_.textContent="Tomoshibi";let v=document.createElement("div");v.style.cssText="margin:0 0 10px;opacity:.7;font-size:.85em",v.textContent=l("\u3068\u3082\u3057\u3073 \xB7 Luz de l\xE1mpara \xB7 Juegos Sin Prisa","\u3068\u3082\u3057\u3073 \xB7 Lamplight \xB7 No-Rush Games","\u3068\u3082\u3057\u3073 \xB7 \u306E\u3093\u3073\u308A\u904A\u3079\u308B\u30B2\u30FC\u30E0");let b=document.createElement("p");b.style.cssText="margin:0 0 10px;opacity:.85",b.textContent=l("Juegos tranquilos, sin puntaje ni tiempo. Nada que ganar ni perder.","Calm games with no score and no timer. Nothing to win or lose.","\u30B9\u30B3\u30A2\u3082\u6642\u9593\u3082\u306A\u3044\u3001\u304A\u3060\u3084\u304B\u306A\u30B2\u30FC\u30E0\u3002\u52DD\u3061\u8CA0\u3051\u306F\u3042\u308A\u307E\u305B\u3093\u3002");let T=document.createElement("p");T.style.cssText="margin:0 0 10px;opacity:.85;font-size:.9em",T.textContent=l("Es un juego de descanso: no es un producto m\xE9dico ni de terapia y no sustituye la ayuda de un profesional.","This is a game for rest: it is not a medical or therapy product and does not replace professional help.","\u3053\u308C\u306F\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3059\u3002\u533B\u7642\u3084\u30BB\u30E9\u30D4\u30FC\u306E\u88FD\u54C1\u3067\u306F\u306A\u304F\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002");let M=document.createElement("div");M.style.cssText="display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px",[["privacidad.html",l("Privacidad","Privacy","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC")],["datos.html",l("Mis datos","My data","\u30C7\u30FC\u30BF")],["creditos.html",l("Cr\xE9ditos y licencias","Credits and licenses","\u30AF\u30EC\u30B8\u30C3\u30C8\u3068\u30E9\u30A4\u30BB\u30F3\u30B9")]].forEach(R=>{let I=document.createElement("a");I.href="../"+R[0],I.textContent=R[1],I.style.cssText="color:#ffc77a;min-height:44px;display:inline-flex;align-items:center;padding:0 6px",M.appendChild(I)});let E=document.createElement("button");E.type="button",E.textContent=l("Cerrar","Close","\u9589\u3058\u308B"),E.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",E.onclick=()=>y.remove(),S.append(_,v,b,T,M,E),y.appendChild(S),y.onclick=R=>{R.target===y&&y.remove()},document.body.appendChild(y);try{E.focus()}catch{}},a.say=p=>{let y=document.getElementById("uxsay");y||(y=document.createElement("div"),y.id="uxsay",y.setAttribute("role","status"),y.setAttribute("aria-live","polite"),y.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(y)),y.textContent=p,y.style.opacity=1,clearTimeout(a._st),a._st=setTimeout(()=>y.style.opacity=0,4200)},a.breathe=m,a.mood=()=>x();function x(){let p=document.getElementById("go");if(!p||document.getElementById("uxmood"))return;let y=document.createElement("div");y.id="uxmood",y.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let S=document.createElement("div");S.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),S.style.cssText="font:600 .95rem system-ui;opacity:.9";let _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let v=document.createElement("div");v.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar. Es un juego de descanso, no sustituye ayuda profesional.","Optional. I only adjust the sound or offer a breath. This is a game for rest, not a substitute for professional help.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002"),v.style.cssText="font:400 .72rem system-ui;opacity:.6";let b=null,T={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([M,E,R,I])=>{let L=document.createElement("button");L.type="button",L.textContent=l(E,R,I),L.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",L.onclick=()=>{b=b===M?null:M;for(let P in T)T[P].style.borderColor=P===b?"#ffc77a":"#5a609a",T[P].style.background=P===b?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";a.hap(6)},T[M]=L,_.appendChild(L)}),y.append(S,_,v),p.parentNode.insertBefore(y,p),p.addEventListener("click",()=>{e.set("ux-mood",b||""),b==="tired"&&(a.api.setSoft(!0),+a.api.vol()>.7&&a.api.setVol(".7"),setTimeout(()=>{try{a.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),b==="rest"&&setTimeout(()=>m(),600),b==="think"&&setTimeout(()=>{try{a.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let g=a.init;a.init=function(){g.apply(this,arguments);try{x()}catch{}}})();var Hm=0,Xd=1,zm=2;var $a=1,km=2,Uo=3,rr=0,In=1,Zt=2,as=0,Pi=1,Wn=2,qd=3,Yd=4,Gm=5;var Rr=100,Vm=101,Wm=102,Xm=103,qm=104,Ym=200,Zm=201,Jm=202,$m=203,Zd=204,Jd=205,Km=206,jm=207,Qm=208,t0=209,e0=210,n0=211,i0=212,s0=213,r0=214,vc=0,_c=1,Mc=2,wo=3,bc=4,Sc=5,Ec=6,wc=7,ou=0,o0=1,a0=2,Wi=0,$d=1,Kd=2,jd=3,Qd=4,tf=5,ef=6,nf=7;var sf=300,or=301,Cr=302,au=303,lu=304,Ka=306,js=1e3,es=1001,Tc=1002,Sn=1003,l0=1004;var ja=1005;var Rn=1006,cu=1007;var ls=1008;var hi=1009,rf=1010,of=1011,Fo=1012,uu=1013,Xi=1014,Di=1015,Mi=1016,hu=1017,du=1018,Bo=1020,af=35902,lf=35899,cf=1021,uf=1022,di=1023,ns=1026,ar=1027,Oo=1028,fu=1029,lr=1030,pu=1031;var mu=1033,Qa=33776,tl=33777,el=33778,nl=33779,gu=35840,xu=35841,yu=35842,vu=35843,_u=36196,Mu=37492,bu=37496,Su=37488,Eu=37489,il=37490,wu=37491,Tu=37808,Au=37809,Ru=37810,Cu=37811,Iu=37812,Pu=37813,Du=37814,Lu=37815,Nu=37816,Uu=37817,Fu=37818,Bu=37819,Ou=37820,Hu=37821,zu=36492,ku=36494,Gu=36495,Vu=36283,Wu=36284,sl=36285,Xu=36286;var wa=2300,Ac=2301,xc=2302,Fd=2303,Bd=2400,Od=2401,Hd=2402;var c0=3200;var rl=0,u0=1,Ps="",An="srgb",Ta="srgb-linear",Aa="linear",He="srgb";var yc=7680;var h0=519,d0=512,f0=513,p0=514,qu=515,m0=516,g0=517,Yu=518,x0=519,hf=35044;var df="300 es",zi=2e3,To=2001;function cv(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function y0(){let i=Ra("canvas");return i.style.display="block",i}var rm={},Ao=null;function Ca(...i){let t="THREE."+i.shift();Ao?Ao("log",t,...i):console.log(t,...i)}function v0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=v0(i);let t="THREE."+i.shift();if(Ao)Ao("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=v0(i);let t="THREE."+i.shift();if(Ao)Ao("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Tr(...i){let t=i.join(" ");t in rm||(rm[t]=!0,Wt(...i))}function _0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var M0={[vc]:_c,[Mc]:Ec,[bc]:wc,[wo]:Sc,[_c]:vc,[Ec]:Mc,[wc]:bc,[Sc]:wo},is=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ld=Math.PI/180,Rc=180/Math.PI;function Ks(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function hv(i,t){return(i%t+t)%t}function cd(i,t,e){return(1-e)*i+e*t}function ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yf=class yf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yf.prototype.isVector2=!0;var Ct=yf,gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==d||c!==f||u!==m){let g=l*d+c*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S,l=l*p+d*a,c=c*p+f*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+d*a,c=c*p+f*a,u=u*p+m*a,h=h*p+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vf=class vf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(om.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(om.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ud.copy(this).projectOnVector(t),this.sub(ud)}reflect(t){return this.sub(ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vf.prototype.isVector3=!0;var D=vf,ud=new D,om=new gn,_f=class _f{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],S=s[4],_=s[7],v=s[2],b=s[5],T=s[8];return r[0]=o*x+a*y+l*v,r[3]=o*g+a*S+l*b,r[6]=o*p+a*_+l*T,r[1]=c*x+u*y+h*v,r[4]=c*g+u*S+h*b,r[7]=c*p+u*_+h*T,r[2]=d*x+f*y+m*v,r[5]=d*g+f*S+m*b,r[8]=d*p+f*_+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=e*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_f.prototype.isMatrix3=!0;var Qt=_f,hd=new Qt,am=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dv(){let i={enabled:!0,workingColorSpace:Ta,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===He&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===He&&(s.r=Eo(s.r),s.g=Eo(s.g),s.b=Eo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ps?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ta]:{primaries:t,whitePoint:n,transfer:Aa,toXYZ:am,fromXYZ:lm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:He,toXYZ:am,fromXYZ:lm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}var we=dv();function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ro,Cc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ro===void 0&&(ro=Ra("canvas")),ro.width=t.width,ro.height=t.height;let s=ro.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ro}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ra("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(As(e[n]/255)*255):e[n]=As(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fv=0,Ro=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dd(s[o].image)):r.push(dd(s[o]))}else r=dd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dd(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var pv=0,fd=new D,jn=class i extends is{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=es,s=es,r=Rn,o=ls,a=di,l=hi,c=i.DEFAULT_ANISOTROPY,u=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Ks(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=sf;jn.DEFAULT_ANISOTROPY=1;var Mf=class Mf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,_=(f+1)/2,v=(p+1)/2,b=(u+d)/4,T=(h+x)/4,M=(m+g)/4;return S>_&&S>v?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=T/n):_>v?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=M/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=M/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mf.prototype.isVector4=!0;var Je=Mf,Ic=class extends is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new jn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ro(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ia=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ru=class ru{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ru().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/oo.setFromMatrixColumn(t,0).length(),r=1/oo.setFromMatrixColumn(t,1).length(),o=1/oo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,x=c*h;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,x=c*h;e[0]=d-x*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,f=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=x-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-x*h}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mv,t,gv)}lookAt(t,e,n){let s=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),qs.crossVectors(n,gi),qs.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),qs.crossVectors(n,gi)),qs.normalize(),Wl.crossVectors(gi,qs),s[0]=qs.x,s[4]=Wl.x,s[8]=gi.x,s[1]=qs.y,s[5]=Wl.y,s[9]=gi.y,s[2]=qs.z,s[6]=Wl.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],S=n[7],_=n[11],v=n[15],b=s[0],T=s[4],M=s[8],E=s[12],R=s[1],I=s[5],L=s[9],P=s[13],C=s[2],N=s[6],O=s[10],z=s[14],$=s[3],B=s[7],G=s[11],K=s[15];return r[0]=o*b+a*R+l*C+c*$,r[4]=o*T+a*I+l*N+c*B,r[8]=o*M+a*L+l*O+c*G,r[12]=o*E+a*P+l*z+c*K,r[1]=u*b+h*R+d*C+f*$,r[5]=u*T+h*I+d*N+f*B,r[9]=u*M+h*L+d*O+f*G,r[13]=u*E+h*P+d*z+f*K,r[2]=m*b+x*R+g*C+p*$,r[6]=m*T+x*I+g*N+p*B,r[10]=m*M+x*L+g*O+p*G,r[14]=m*E+x*P+g*z+p*K,r[3]=y*b+S*R+_*C+v*$,r[7]=y*T+S*I+_*N+v*B,r[11]=y*M+S*L+_*O+v*G,r[15]=y*E+S*P+_*z+v*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=l*f-c*d,S=a*f-c*h,_=a*d-l*h,v=o*f-c*u,b=o*d-l*u,T=o*h-a*u;return e*(x*y-g*S+p*_)-n*(m*y-g*v+p*b)+s*(m*S-x*v+p*T)-r*(m*_-x*b+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*a-n*o,S=e*l-s*o,_=e*c-r*o,v=n*l-s*a,b=n*c-r*a,T=s*c-r*l,M=u*x-h*m,E=u*g-d*m,R=u*p-f*m,I=h*g-d*x,L=h*p-f*x,P=d*p-f*g,C=y*P-S*L+_*I+v*R-b*E+T*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return t[0]=(a*P-l*L+c*I)*N,t[1]=(s*L-n*P-r*I)*N,t[2]=(x*T-g*b+p*v)*N,t[3]=(d*b-h*T-f*v)*N,t[4]=(l*R-o*P-c*E)*N,t[5]=(e*P-s*R+r*E)*N,t[6]=(g*_-m*T-p*S)*N,t[7]=(u*T-d*_+f*S)*N,t[8]=(o*L-a*R+c*M)*N,t[9]=(n*R-e*L-r*M)*N,t[10]=(m*b-x*_+p*y)*N,t[11]=(h*_-u*b-f*y)*N,t[12]=(a*E-o*I-l*M)*N,t[13]=(e*I-n*E+s*M)*N,t[14]=(x*S-m*v-g*y)*N,t[15]=(u*v-h*S+d*y)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,x=o*u,g=o*h,p=a*h,y=l*c,S=l*u,_=l*h,v=n.x,b=n.y,T=n.z;return s[0]=(1-(x+p))*v,s[1]=(f+_)*v,s[2]=(m-S)*v,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(m+S)*T,s[9]=(g-y)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=oo.set(s[0],s[1],s[2]).length(),a=oo.set(s[4],s[5],s[6]).length(),l=oo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fi.copy(this);let c=1/o,u=1/a,h=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=u,Fi.elements[5]*=u,Fi.elements[6]*=u,Fi.elements[8]*=h,Fi.elements[9]*=h,Fi.elements[10]*=h,e.setFromRotationMatrix(Fi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=zi,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===zi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===To)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zi,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===zi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===To)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ru.prototype.isMatrix4=!0;var ve=ru,oo=new D,Fi=new ve,mv=new D(0,0,0),gv=new D(1,1,1),qs=new D,Wl=new D,gi=new D,cm=new ve,um=new gn,ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return um.setFromEuler(this),this.setFromQuaternion(um,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xv=0,hm=new D,ao=new gn,Ms=new ve,Xl=new D,fa=new D,yv=new D,vv=new gn,dm=new D(1,0,0),fm=new D(0,1,0),pm=new D(0,0,1),mm={type:"added"},_v={type:"removed"},lo={type:"childadded",child:null},pd={type:"childremoved",child:null},Cn=class i extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ki,n=new gn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Qt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(dm,t)}rotateY(t){return this.rotateOnAxis(fm,t)}rotateZ(t){return this.rotateOnAxis(pm,t)}translateOnAxis(t,e){return hm.copy(t).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dm,t)}translateY(t){return this.translateOnAxis(fm,t)}translateZ(t){return this.translateOnAxis(pm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xl.copy(t):Xl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(fa,Xl,this.up):Ms.lookAt(Xl,fa,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),ao.setFromRotationMatrix(Ms),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mm),lo.child=t,this.dispatchEvent(lo),lo.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_v),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mm),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,yv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,vv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new D(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mv={type:"move"},Co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},ql={h:0,s:0,l:0};function md(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=hv(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=md(o,r,t+1/3),this.g=md(o,r,t),this.b=md(o,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let n=b0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return we.workingToColorSpace(Vn.copy(this),t),Math.round(Se(Vn.r*255,0,255))*65536+Math.round(Se(Vn.g*255,0,255))*256+Math.round(Se(Vn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(Vn.copy(this),e);let n=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=An){we.workingToColorSpace(Vn.copy(this),t);let e=Vn.r,n=Vn.g,s=Vn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+e,Ys.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ys),t.getHSL(ql);let n=cd(Ys.h,ql.h,e),s=cd(Ys.s,ql.s,e),r=cd(Ys.l,ql.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new ct;ct.NAMES=b0;var Da=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ar=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bi=new D,bs=new D,gd=new D,Ss=new D,co=new D,uo=new D,gm=new D,xd=new D,yd=new D,vd=new D,_d=new Je,Md=new Je,bd=new Je,Ts=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bi.subVectors(t,e),s.cross(Bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bi.subVectors(s,e),bs.subVectors(n,e),gd.subVectors(t,e);let o=Bi.dot(Bi),a=Bi.dot(bs),l=Bi.dot(gd),c=bs.dot(bs),u=bs.dot(gd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ss.x),l.addScaledVector(o,Ss.y),l.addScaledVector(a,Ss.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return _d.setScalar(0),Md.setScalar(0),bd.setScalar(0),_d.fromBufferAttribute(t,e),Md.fromBufferAttribute(t,n),bd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_d,r.x),o.addScaledVector(Md,r.y),o.addScaledVector(bd,r.z),o}static isFrontFacing(t,e,n,s){return Bi.subVectors(n,e),bs.subVectors(t,e),Bi.cross(bs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Bi.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;co.subVectors(s,n),uo.subVectors(r,n),xd.subVectors(t,n);let l=co.dot(xd),c=uo.dot(xd);if(l<=0&&c<=0)return e.copy(n);yd.subVectors(t,s);let u=co.dot(yd),h=uo.dot(yd);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(co,o);vd.subVectors(t,r);let f=co.dot(vd),m=uo.dot(vd);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(uo,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return gm.subVectors(r,s),a=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(gm,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(co,o).addScaledVector(uo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ss=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oi):Oi.fromBufferAttribute(r,o),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yl.copy(n.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),Zl.subVectors(this.max,pa),ho.subVectors(t.a,pa),fo.subVectors(t.b,pa),po.subVectors(t.c,pa),Zs.subVectors(fo,ho),Js.subVectors(po,fo),br.subVectors(ho,po);let e=[0,-Zs.z,Zs.y,0,-Js.z,Js.y,0,-br.z,br.y,Zs.z,0,-Zs.x,Js.z,0,-Js.x,br.z,0,-br.x,-Zs.y,Zs.x,0,-Js.y,Js.x,0,-br.y,br.x,0];return!Sd(e,ho,fo,po,Zl)||(e=[1,0,0,0,1,0,0,0,1],!Sd(e,ho,fo,po,Zl))?!1:(Jl.crossVectors(Zs,Js),e=[Jl.x,Jl.y,Jl.z],Sd(e,ho,fo,po,Zl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Es=[new D,new D,new D,new D,new D,new D,new D,new D],Oi=new D,Yl=new ss,ho=new D,fo=new D,po=new D,Zs=new D,Js=new D,br=new D,pa=new D,Zl=new D,Jl=new D,Sr=new D;function Sd(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Sr.fromArray(i,r);let a=s.x*Math.abs(Sr.x)+s.y*Math.abs(Sr.y)+s.z*Math.abs(Sr.z),l=t.dot(Sr),c=e.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var bn=new D,$l=new Ct,bv=0,Gt=class extends is{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hf,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$l.fromBufferAttribute(this,e),$l.applyMatrix3(t),this.setXY(e,$l.x,$l.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix3(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var La=class extends Gt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Na=class extends Gt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Gt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sv=new ss,ma=new D,Ed=new D,rs=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);let e=ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ma,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(Ed)),this.expandByPoint(ma.copy(t.center).sub(Ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ev=0,Ri=new ve,wd=new Cn,mo=new D,xi=new ss,ga=new ss,Nn=new D,jt=class i extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cv(t)?Na:La)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,n){return Ri.makeTranslation(t,e,n),this.applyMatrix4(Ri),this}scale(t,e,n){return Ri.makeScale(t,e,n),this.applyMatrix4(Ri),this}lookAt(t){return wd.lookAt(t),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(xi.min,ga.min),xi.expandByPoint(Nn),Nn.addVectors(xi.max,ga.max),xi.expandByPoint(Nn)):(xi.expandByPoint(ga.min),xi.expandByPoint(ga.max))}xi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nn.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(t,c),Nn.add(mo)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new D,l[M]=new D;let c=new D,u=new D,h=new D,d=new Ct,f=new Ct,m=new Ct,x=new D,g=new D;function p(M,E,R){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(I),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(I),a[M].add(x),a[E].add(x),a[R].add(x),l[M].add(g),l[E].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let M=0,E=y.length;M<E;++M){let R=y[M],I=R.start,L=R.count;for(let P=I,C=I+L;P<C;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let S=new D,_=new D,v=new D,b=new D;function T(M){v.fromBufferAttribute(s,M),b.copy(v);let E=a[M];S.copy(E),S.sub(v.multiplyScalar(v.dot(E))).normalize(),_.crossVectors(b,E);let I=_.dot(l[M])<0?-1:1;o.setXYZW(M,S.x,S.y,S.z,I)}for(let M=0,E=y.length;M<E;++M){let R=y[M],I=R.start,L=R.count;for(let P=I,C=I+L;P<C;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Gt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Nn.fromBufferAttribute(t,e),Nn.normalize(),t.setXYZ(e,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Gt(d,u,h)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hf,this.updateRanges=[],this.version=0,this.uuid=Ks()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ks()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ks()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Kn=new D,Io=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyMatrix4(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyNormalMatrix(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.transformDirection(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ts(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ts(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ts(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ts(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Gt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Td=new D,wv=new D,Tv=new Qt,Hi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Td.subVectors(n,e).cross(wv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Td),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tv.getNormalMatrix(t),s=this.coplanarPoint(Td).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Av=0,ui=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Pi,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Jd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},os=class extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},go,xa=new D,xo=new D,yo=new D,vo=new Ct,ya=new Ct,S0=new ve,Kl=new D,va=new D,jl=new D,xm=new Ct,Ad=new Ct,ym=new Ct,Rs=class extends Cn{constructor(t=new os){if(super(),this.isSprite=!0,this.type="Sprite",go===void 0){go=new jt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ua(e,5);go.setIndex([0,1,2,0,2,3]),go.setAttribute("position",new Io(n,3,0,!1)),go.setAttribute("uv",new Io(n,2,3,!1))}this.geometry=go,this.material=t,this.center=new Ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xo.setFromMatrixScale(this.matrixWorld),S0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xo.multiplyScalar(-yo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ql(Kl.set(-.5,-.5,0),yo,o,xo,s,r),Ql(va.set(.5,-.5,0),yo,o,xo,s,r),Ql(jl.set(.5,.5,0),yo,o,xo,s,r),xm.set(0,0),Ad.set(1,0),ym.set(1,1);let a=t.ray.intersectTriangle(Kl,va,jl,!1,xa);if(a===null&&(Ql(va.set(-.5,.5,0),yo,o,xo,s,r),Ad.set(0,1),a=t.ray.intersectTriangle(Kl,jl,va,!1,xa),a===null))return;let l=t.ray.origin.distanceTo(xa);l<t.near||l>t.far||e.push({distance:l,point:xa.clone(),uv:Ts.getInterpolation(xa,Kl,va,jl,xm,Ad,ym,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ql(i,t,e,n,s,r){vo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ya.x=r*vo.x-s*vo.y,ya.y=s*vo.x+r*vo.y):ya.copy(vo),i.copy(t),i.x+=ya.x,i.y+=ya.y,i.applyMatrix4(S0)}var ws=new D,Rd=new D,tc=new D,ec=new D,Po=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ws)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ws.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ws.copy(this.origin).addScaledVector(this.direction,e),ws.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rd.copy(t).add(e).multiplyScalar(.5),tc.copy(e).sub(t).normalize(),ec.copy(this.origin).sub(Rd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(tc),a=ec.dot(this.direction),l=-ec.dot(tc),c=ec.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Rd).addScaledVector(tc,d),f}intersectSphere(t,e){if(t.radius<0)return null;ws.subVectors(t.center,this.origin);let n=ws.dot(this.direction),s=ws.dot(ws)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ws)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,S=n.z-o.z,_=Math.abs(l),v=Math.abs(c),b=Math.abs(u),T,M,E,R,I,L,P,C,N,O,z,$;if(_>=v&&_>=b?(E=l,L=h,N=m,$=p,l>=0?(T=c,M=u,R=d,I=f,P=x,C=g,O=y,z=S):(T=u,M=c,R=f,I=d,P=g,C=x,O=S,z=y)):v>=b?(E=c,L=d,N=x,$=y,c>=0?(T=u,M=l,R=f,I=h,P=g,C=m,O=S,z=p):(T=l,M=u,R=h,I=f,P=m,C=g,O=p,z=S)):(E=u,L=f,N=g,$=S,u>=0?(T=l,M=c,R=h,I=d,P=m,C=x,O=p,z=y):(T=c,M=l,R=d,I=h,P=x,C=m,O=y,z=p)),E===0)return null;let B=T/E,G=M/E,K=1/E,ht=R-B*L,It=I-G*L,he=P-B*N,te=C-G*N,Vt=O-B*$,nt=z-G*$,at=Vt*te-nt*he,At=ht*nt-It*Vt,Ht=he*It-te*ht;if(s){if(at<0||At<0||Ht<0)return null}else if((at<0||At<0||Ht<0)&&(at>0||At>0||Ht>0))return null;let St=at+At+Ht;if(St===0)return null;let ne=K*(at*L+At*N+Ht*$);return(St>0?ne<0:ne>0)?null:this.at(ne/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vm=new ve,Er=new Po,nc=new rs,_m=new D,ic=new D,sc=new D,rc=new D,Cd=new D,oc=new D,Mm=new D,ac=new D,W=class extends Cn{constructor(t=new jt,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Cd.fromBufferAttribute(h,t),o?oc.addScaledVector(Cd,u):oc.addScaledVector(Cd.sub(e),u))}e.add(oc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(r),Er.copy(t.ray).recast(t.near),!(nc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(nc,_m)===null||Er.origin.distanceToSquared(_m)>(t.far-t.near)**2))&&(vm.copy(r).invert(),Er.copy(t.ray).applyMatrix4(vm),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Er)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,v=S;_<v;_+=3){let b=a.getX(_),T=a.getX(_+1),M=a.getX(_+2);s=lc(this,p,t,n,c,u,h,b,T,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),S=a.getX(g+1),_=a.getX(g+2);s=lc(this,o,t,n,c,u,h,y,S,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,v=S;_<v;_+=3){let b=_,T=_+1,M=_+2;s=lc(this,p,t,n,c,u,h,b,T,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,S=g+1,_=g+2;s=lc(this,o,t,n,c,u,h,y,S,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Rv(i,t,e,n,s,r,o,a){let l;if(t.side===In?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===rr,a),l===null)return null;ac.copy(a),ac.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ac);return c<e.near||c>e.far?null:{distance:c,point:ac.clone(),object:i}}function lc(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ic),i.getVertexPosition(l,sc),i.getVertexPosition(c,rc);let u=Rv(i,t,e,n,ic,sc,rc,Mm);if(u){let h=new D;Ts.getBarycoord(Mm,ic,sc,rc,h),s&&(u.uv=Ts.getInterpolatedAttribute(s,a,l,c,h,new Ct)),r&&(u.uv1=Ts.getInterpolatedAttribute(r,a,l,c,h,new Ct)),o&&(u.normal=Ts.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Ts.getNormal(ic,sc,rc,d.normal),u.face=d,u.barycoord=h}return u}var Cs=class extends jn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Sn,u=Sn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=class extends Gt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_o=new ve,bm=new ve,cc=[],Sm=new ss,Cv=new ve,_a=new W,Ma=new rs,Un=class extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_o),Sm.copy(t.boundingBox).applyMatrix4(_o),this.boundingBox.union(Sm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_o),Ma.copy(t.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Ma)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),t.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_o),bm.multiplyMatrices(n,_o),_a.matrixWorld=bm,_a.raycast(t,cc);for(let o=0,a=cc.length;o<a;o++){let l=cc[o];l.instanceId=r,l.object=this,e.push(l)}cc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(s*this.count),s,this.count,Oo,Di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wr=new rs,Iv=new Ct(.5,.5),uc=new D,Do=class{constructor(t=new Hi,e=new Hi,n=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],S=r[13],_=r[14],v=r[15];if(s[0].setComponents(c-o,f-u,p-m,v-y).normalize(),s[1].setComponents(c+o,f+u,p+m,v+y).normalize(),s[2].setComponents(c+a,f+h,p+x,v+S).normalize(),s[3].setComponents(c-a,f-h,p-x,v-S).normalize(),n)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,p-g,v-_).normalize();else if(s[4].setComponents(c-l,f-d,p-g,v-_).normalize(),e===zi)s[5].setComponents(c+l,f+d,p+g,v+_).normalize();else if(e===To)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){wr.center.set(0,0,0);let e=Iv.distanceTo(t.center);return wr.radius=.7071067811865476+e,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(uc.x=s.normal.x>0?t.max.x:t.min.x,uc.y=s.normal.y>0?t.max.y:t.min.y,uc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lo=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dc=new D,Lc=new D,Em=new ve,ba=new Po,hc=new rs,Id=new D,wm=new D,Nc=class extends Cn{constructor(t=new jt,e=new Lo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dc.fromBufferAttribute(e,s-1),Lc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dc.distanceTo(Lc);t.setAttribute("lineDistance",new se(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(s),hc.radius+=r,t.ray.intersectsSphere(hc)===!1)return;Em.copy(s).invert(),ba.copy(t.ray).applyMatrix4(Em);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=u.getX(x),y=u.getX(x+1),S=dc(this,t,ba,l,p,y,x);S&&e.push(S)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=dc(this,t,ba,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=dc(this,t,ba,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=dc(this,t,ba,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dc(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Dc.fromBufferAttribute(a,s),Lc.fromBufferAttribute(a,r),e.distanceSqToSegment(Dc,Lc,Id,wm)>n)return;Id.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Id);if(!(c<t.near||c>t.far))return{distance:c,point:wm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Tm=new D,Am=new D,Fa=class extends Nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Tm.fromBufferAttribute(e,s),Am.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tm.distanceTo(Am);t.setAttribute("lineDistance",new se(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vi=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rm=new ve,zd=new Po,fc=new rs,pc=new D,Ci=class extends Cn{constructor(t=new jt,e=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(s),fc.radius+=r,t.ray.intersectsSphere(fc)===!1)return;Rm.copy(s).invert(),zd.copy(t.ray).applyMatrix4(Rm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);pc.fromBufferAttribute(h,g),Cm(pc,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)pc.fromBufferAttribute(h,m),Cm(pc,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cm(i,t,e,n,s,r,o){let a=zd.distanceSqToPoint(i);if(a<e){let l=new D;zd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ba=class extends jn{constructor(t=[],e=or,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yi=class extends jn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qs=class extends jn{constructor(t,e,n=Xi,s,r,o,a=Sn,l=Sn,c,u=ns,h=1){if(u!==ns&&u!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ro(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Uc=class extends Qs{constructor(t,e=Xi,n=or,s,r,o=Sn,a=Sn,l,c=ns){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Oa=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fn=class i extends jt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2));function m(x,g,p,y,S,_,v,b,T,M,E){let R=_/T,I=v/M,L=_/2,P=v/2,C=b/2,N=T+1,O=M+1,z=0,$=0,B=new D;for(let G=0;G<O;G++){let K=G*I-P;for(let ht=0;ht<N;ht++){let It=ht*R-L;B[x]=It*y,B[g]=K*S,B[p]=C,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=b>0?1:-1,u.push(B.x,B.y,B.z),h.push(ht/T),h.push(1-G/M),z+=1}}for(let G=0;G<M;G++)for(let K=0;K<T;K++){let ht=d+K+N*G,It=d+K+N*(G+1),he=d+(K+1)+N*(G+1),te=d+(K+1)+N*G;l.push(ht,It,te),l.push(It,he,te),$+=6}a.addGroup(f,$,E),f+=$,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vi=class i extends jt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,u=new Ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ce=class i extends jt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function y(){let _=new D,v=new D,b=0,T=(e-t)/n;for(let M=0;M<=r;M++){let E=[],R=M/r,I=R*(e-t)+t;for(let L=0;L<=s;L++){let P=L/s,C=P*l+a,N=Math.sin(C),O=Math.cos(C);v.x=I*N,v.y=-R*n+g,v.z=I*O,h.push(v.x,v.y,v.z),_.set(N,T,O).normalize(),d.push(_.x,_.y,_.z),f.push(P,1-R),E.push(m++)}x.push(E)}for(let M=0;M<s;M++)for(let E=0;E<r;E++){let R=x[E][M],I=x[E+1][M],L=x[E+1][M+1],P=x[E][M+1];(t>0||E!==0)&&(u.push(R,I,P),b+=3),(e>0||E!==r-1)&&(u.push(I,L,P),b+=3)}c.addGroup(p,b,0),p+=b}function S(_){let v=m,b=new Ct,T=new D,M=0,E=_===!0?t:e,R=_===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=s;L++){let C=L/s*l+a,N=Math.cos(C),O=Math.sin(C);T.x=E*O,T.y=g*R,T.z=E*N,h.push(T.x,T.y,T.z),d.push(0,R,0),b.x=N*.5+.5,b.y=O*.5*R+.5,f.push(b.x,b.y),m++}for(let L=0;L<s;L++){let P=v+L,C=I+L;_===!0?u.push(C,C+1,P):u.push(C+1,C,P),M+=3}c.addGroup(p,M,_===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Te=class i extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fc=class i extends jt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new D,_=new D,v=new D;for(let b=0;b<e.length;b+=3)f(e[b+0],S),f(e[b+1],_),f(e[b+2],v),l(S,_,v,y)}function l(y,S,_,v){let b=v+1,T=[];for(let M=0;M<=b;M++){T[M]=[];let E=y.clone().lerp(_,M/b),R=S.clone().lerp(_,M/b),I=b-M;for(let L=0;L<=I;L++)L===0&&M===b?T[M][L]=E:T[M][L]=E.clone().lerp(R,L/I)}for(let M=0;M<b;M++)for(let E=0;E<2*(b-M)-1;E++){let R=Math.floor(E/2);E%2===0?(d(T[M][R+1]),d(T[M+1][R]),d(T[M][R])):(d(T[M][R+1]),d(T[M+1][R+1]),d(T[M+1][R]))}}function c(y){let S=new D;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function u(){let y=new D;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let _=g(y)/2/Math.PI+.5,v=p(y)/Math.PI+.5;o.push(_,1-v)}m(),h()}function h(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],v=o[y+4],b=Math.max(S,_,v),T=Math.min(S,_,v);b>.9&&T<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){let _=y*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function m(){let y=new D,S=new D,_=new D,v=new D,b=new Ct,T=new Ct,M=new Ct;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),b.set(o[R+0],o[R+1]),T.set(o[R+2],o[R+3]),M.set(o[R+4],o[R+5]),v.copy(y).add(S).add(_).divideScalar(3);let I=g(v);x(b,R+0,y,I),x(T,R+2,S,I),x(M,R+4,_,I)}}function x(y,S,_,v){v<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=v/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ct:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new ve;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ha=class extends Ii{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bc=class extends Ha{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ff(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Im=new D,Pm=new D,Pd=new ff,Dd=new ff,Ld=new ff,tr=class extends Ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Pm.subVectors(s[0],s[1]).add(s[0]),c=Pm);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Im.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Im),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Pd.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,g),Dd.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,g),Ld.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Dd.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ld.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Pd.calc(l),Dd.calc(l),Ld.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dm(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Pv(i,t){let e=1-i;return e*e*t}function Dv(i,t){return 2*(1-i)*i*t}function Lv(i,t){return i*i*t}function Sa(i,t,e,n){return Pv(i,t)+Dv(i,e)+Lv(i,n)}function Nv(i,t){let e=1-i;return e*e*e*t}function Uv(i,t){let e=1-i;return 3*e*e*i*t}function Fv(i,t){return 3*(1-i)*i*i*t}function Bv(i,t){return i*i*i*t}function Ea(i,t,e,n,s){return Nv(i,t)+Uv(i,e)+Fv(i,n)+Bv(i,s)}var Oc=class extends Ii{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ea(t,s.x,r.x,o.x,a.x),Ea(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hc=class extends Ii{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ea(t,s.x,r.x,o.x,a.x),Ea(t,s.y,r.y,o.y,a.y),Ea(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zc=class extends Ii{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kc=class extends Ii{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends Ii{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Sa(t,s.x,r.x,o.x),Sa(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends Ii{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Sa(t,s.x,r.x,o.x),Sa(t,s.y,r.y,o.y),Sa(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vc=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Dm(a,l.x,c.x,u.x,h.x),Dm(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},Ov=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:tr,CubicBezierCurve:Oc,CubicBezierCurve3:Hc,EllipseCurve:Ha,LineCurve:zc,LineCurve3:kc,QuadraticBezierCurve:Gc,QuadraticBezierCurve3:za,SplineCurve:Vc});var hn=class i extends Fc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var rn=class i extends jt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let y=p*d-o;for(let S=0;S<c;S++){let _=S*h-r;m.push(_,-y,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let S=y+c*p,_=y+c*(p+1),v=y+1+c*(p+1),b=y+1+c*p;f.push(S,_,b),f.push(_,v,b)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Is=class i extends jt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/s,f=new D,m=new Ct;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,S=y,_=y+n+1,v=y+n+2,b=y+1;a.push(S,_,b),a.push(_,v,b)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Jt=class i extends jt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new D,d=new D,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],S=p/n,_=o+S*a,v=t*Math.cos(_),b=Math.sqrt(t*t-v*v),T=0;p===0&&o===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let M=0;M<=e;M++){let E=M/e,R=s+E*r;h.x=-b*Math.cos(R),h.y=v,h.z=b*Math.sin(R),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(E+T,1-S),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let S=u[p][y+1],_=u[p][y],v=u[p+1][y],b=u[p+1][y+1];(p!==0||o>0)&&f.push(S,_,b),(p!==n-1||l<Math.PI)&&f.push(_,v,b)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class i extends jt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new D,f=new D,m=new D;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,S=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(p,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ka=class i extends jt{constructor(t=new za(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new Ct,u=new D,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function x(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),y(),p()}function g(S){u=t.getPointAt(S/e,u);let _=o.normals[S],v=o.binormals[S];for(let b=0;b<=s;b++){let T=b/s*Math.PI*2,M=Math.sin(T),E=-Math.cos(T);l.x=E*_.x+M*v.x,l.y=E*_.y+M*v.y,l.z=E*_.z+M*v.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let _=1;_<=s;_++){let v=(s+1)*(S-1)+(_-1),b=(s+1)*S+(_-1),T=(s+1)*S+_,M=(s+1)*(S-1)+_;m.push(v,b,M),m.push(b,T,M)}}function y(){for(let S=0;S<=e;S++)for(let _=0;_<=s;_++)c.x=S/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ov[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ir(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Lm(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Lm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xn(i){let t={};for(let e=0;e<i.length;e++){let n=Ir(i[e]);for(let s in n)t[s]=n[s]}return t}function Lm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var E0={clone:Ir,merge:Xn},zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=Hv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wc=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var pe=class extends ui{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ga=class extends ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=ou,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xc=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qc=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var er=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yc=class extends er{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bd,endingEnd:Bd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Od:r=t,a=2*e-n;break;case Hd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Od:o=t,l=2*n-e;break;case Hd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let v=0;v!==a;++v)r[v]=p*o[u+v]+y*o[c+v]+S*o[l+v]+_*o[h+v];return r}},Zc=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Jc=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$c=class extends er{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*d+m*2,y=h[p],S=h[p+1],_=t*d+m*2,v=u[_],b=u[_+1],T=Vv(n,e,y,v,s);r[m]=w0(T,x,S,b,g)}return r}};function w0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vv(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=w0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Gv(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var _i=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mo(e,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mo(t.times,Array),values:Mo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Nd(t.settings)&&(n.settings={inTangents:Mo(t.settings.inTangents,Array),outTangents:Mo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $c(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case wa:e=this.InterpolantFactoryMethodDiscrete;break;case Ac:e=this.InterpolantFactoryMethodLinear;break;case xc:e=this.InterpolantFactoryMethodSmooth;break;case Fd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return xc;case this.InterpolantFactoryMethodBezier:return Fd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Nd(this.settings)&&(Nm(this.settings.inTangents,t),Nm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&uv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Nd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Ac;var nr=class extends _i{constructor(t,e,n){super(t,e,n)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=wa;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}};Kc.prototype.ValueTypeName="color";var jc=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}};jc.prototype.ValueTypeName="number";var Qc=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Va=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends _i{constructor(t,e,n){super(t,e,n)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=wa;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var tu=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}};tu.prototype.ValueTypeName="vector";var eu=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},T0=new eu,nu=class{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nu.DEFAULT_MATERIAL_NAME="__DEFAULT";var No=class extends Cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wa=class extends No{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ud=new ve,Um=new D,Fm=new D,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Um.setFromMatrixPosition(t.matrixWorld),e.position.copy(Um),Fm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ud,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===To||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ud)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mc=new D,gc=new gn,Qi=new D,qa=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mc,gc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(mc,gc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$s=new D,Bm=new Ct,Om=new Ct,vn=class extends qa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($s.x,$s.y).multiplyScalar(-t/$s.z),$s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($s.x,$s.y).multiplyScalar(-t/$s.z)}getViewSize(t,e){return this.getViewBounds(t,Bm,Om),e.subVectors(Om,Bm)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ld*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kd=class extends Xa{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}},Ya=class extends No{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},sr=class extends qa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gd=class extends Xa{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Za=class extends No{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Gd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ja=class extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var bo=-90,So=1,iu=class extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(bo,So,t,e);s.layers=this.layers,this.add(s);let r=new vn(bo,So,t,e);r.layers=this.layers,this.add(r);let o=new vn(bo,So,t,e);o.layers=this.layers,this.add(o);let a=new vn(bo,So,t,e);a.layers=this.layers,this.add(a);let l=new vn(bo,So,t,e);l.layers=this.layers,this.add(l);let c=new vn(bo,So,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},su=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mf="\\[\\]\\.:\\/",Wv=new RegExp("["+mf+"]","g"),gf="[^"+mf+"]",Xv="[^"+mf.replace("\\.","")+"]",qv=/((?:WC+[\/:])*)/.source.replace("WC",gf),Yv=/(WCOD+)?/.source.replace("WCOD",Xv),Zv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gf),Jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gf),$v=new RegExp("^"+qv+Yv+Zv+Jv+"$"),Kv=["material","materials","bones","map"],Vd=class{constructor(t,e,n){let s=n||sn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},sn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wv,"")}static parseTrackName(t){let e=$v.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Vd;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E2=new Float32Array(1);var bf=class bf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};bf.prototype.isMatrix2=!0;var Wd=bf;function xf(i,t,e,n){let s=jv(n);switch(e){case cf:return i*t;case Oo:return i*t/s.components*s.byteLength;case fu:return i*t/s.components*s.byteLength;case lr:return i*t*2/s.components*s.byteLength;case pu:return i*t*2/s.components*s.byteLength;case uf:return i*t*3/s.components*s.byteLength;case di:return i*t*4/s.components*s.byteLength;case mu:return i*t*4/s.components*s.byteLength;case Qa:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xu:case vu:return Math.max(i,16)*Math.max(t,8)/4;case gu:case yu:return Math.max(i,8)*Math.max(t,8)/2;case _u:case Mu:case Su:case Eu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bu:case il:case wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Au:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Du:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zu:case ku:case Gu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vu:case Wu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case Xu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jv(i){switch(i){case hi:case rf:return{byteLength:1,components:1};case Fo:case of:case Mi:return{byteLength:2,components:1};case hu:case du:return{byteLength:2,components:4};case Xi:case uu:case Di:return{byteLength:4,components:1};case af:case lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Z0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function i1(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
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
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u1=`#ifdef USE_AOMAP
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
#endif`,h1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d1=`#ifdef USE_BATCHING
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
#endif`,f1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x1=`#ifdef USE_IRIDESCENCE
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
#endif`,y1=`#ifdef USE_BUMPMAP
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
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,A1=`#define PI 3.141592653589793
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
} // validated`,R1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C1=`vec3 transformedNormal = objectNormal;
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
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N1="gl_FragColor = linearToOutputTexel( gl_FragColor );",U1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X1=`#ifdef USE_GRADIENTMAP
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
}`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$1=`#ifdef USE_ENVMAP
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
#endif`,K1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
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
#endif`,n_=`uniform sampler2D dfgLUT;
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
}`,i_=`
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p_=`#if defined( USE_POINTS_UV )
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
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
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
#endif`,R_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V_=`float getShadowMask() {
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
}`,W_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
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
}`,hM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,fM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,vM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,MM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,SM=`#define MATCAP
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
}`,EM=`#define NORMAL
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
}`,wM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,IM=`#define TOON
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
}`,PM=`#define TOON
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
}`,DM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,UM=`uniform vec3 color;
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
}`,FM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:s1,alphahash_pars_fragment:r1,alphamap_fragment:o1,alphamap_pars_fragment:a1,alphatest_fragment:l1,alphatest_pars_fragment:c1,aomap_fragment:u1,aomap_pars_fragment:h1,batching_pars_vertex:d1,batching_vertex:f1,begin_vertex:p1,beginnormal_vertex:m1,bsdfs:g1,iridescence_fragment:x1,bumpmap_pars_fragment:y1,clipping_planes_fragment:v1,clipping_planes_pars_fragment:_1,clipping_planes_pars_vertex:M1,clipping_planes_vertex:b1,color_fragment:S1,color_pars_fragment:E1,color_pars_vertex:w1,color_vertex:T1,common:A1,cube_uv_reflection_fragment:R1,defaultnormal_vertex:C1,displacementmap_pars_vertex:I1,displacementmap_vertex:P1,emissivemap_fragment:D1,emissivemap_pars_fragment:L1,colorspace_fragment:N1,colorspace_pars_fragment:U1,envmap_fragment:F1,envmap_common_pars_fragment:B1,envmap_pars_fragment:O1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:$1,envmap_vertex:z1,fog_vertex:k1,fog_pars_vertex:G1,fog_fragment:V1,fog_pars_fragment:W1,gradientmap_pars_fragment:X1,lightmap_pars_fragment:q1,lights_lambert_fragment:Y1,lights_lambert_pars_fragment:Z1,lights_pars_begin:J1,lights_toon_fragment:K1,lights_toon_pars_fragment:j1,lights_phong_fragment:Q1,lights_phong_pars_fragment:t_,lights_physical_fragment:e_,lights_physical_pars_fragment:n_,lights_fragment_begin:i_,lights_fragment_maps:s_,lights_fragment_end:r_,lightprobes_pars_fragment:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:u_,map_fragment:h_,map_pars_fragment:d_,map_particle_fragment:f_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphinstance_vertex:x_,morphcolor_vertex:y_,morphnormal_vertex:v_,morphtarget_pars_vertex:__,morphtarget_vertex:M_,normal_fragment_begin:b_,normal_fragment_maps:S_,normal_pars_fragment:E_,normal_pars_vertex:w_,normal_vertex:T_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:R_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:P_,opaque_fragment:D_,packing:L_,premultiplied_alpha_fragment:N_,project_vertex:U_,dithering_fragment:F_,dithering_pars_fragment:B_,roughnessmap_fragment:O_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:k_,shadowmap_vertex:G_,shadowmask_pars_fragment:V_,skinbase_vertex:W_,skinning_pars_vertex:X_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:$_,tonemapping_pars_fragment:K_,transmission_fragment:j_,transmission_pars_fragment:Q_,uv_pars_fragment:tM,uv_pars_vertex:eM,uv_vertex:nM,worldpos_vertex:iM,background_vert:sM,background_frag:rM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:lM,cube_frag:cM,depth_vert:uM,depth_frag:hM,distance_vert:dM,distance_frag:fM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:xM,meshbasic_vert:yM,meshbasic_frag:vM,meshlambert_vert:_M,meshlambert_frag:MM,meshmatcap_vert:bM,meshmatcap_frag:SM,meshnormal_vert:EM,meshnormal_frag:wM,meshphong_vert:TM,meshphong_frag:AM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:IM,meshtoon_frag:PM,points_vert:DM,points_frag:LM,shadow_vert:NM,shadow_frag:UM,sprite_vert:FM,sprite_frag:BM},Mt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},us={basic:{uniforms:Xn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Xn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Xn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Xn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Xn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Xn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Xn([Mt.points,Mt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Xn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Xn([Mt.common,Mt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Xn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Xn([Mt.sprite,Mt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Xn([Mt.common,Mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Xn([Mt.lights,Mt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};us.physical={uniforms:Xn([us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Zu={r:0,b:0,g:0},OM=new ve,J0=new Qt;J0.set(-1,0,0,0,1,0,0,0,1);function HM(i,t,e,n,s,r){let o=new ct(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=t.get(S,_)}return S}function m(y){let S=!1,_=f(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),S=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===Ka)?(c===void 0&&(c=new W(new Fn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Ir(us.backgroundCube.uniforms),vertexShader:us.backgroundCube.vertexShader,fragmentShader:us.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(J0),c.material.toneMapped=we.getTransfer(_.colorSpace)!==He,(u!==_||h!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new W(new rn(2,2),new $e({name:"BackgroundMaterial",uniforms:Ir(us.background.uniforms),vertexShader:us.background.vertexShader,fragmentShader:us.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=we.getTransfer(_.colorSpace)!==He,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(Zu,pf(i)),e.buffers.color.setClear(Zu.r,Zu.g,Zu.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function zM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,L,P,C,N){let O=!1,z=h(I,C,P,L);r!==z&&(r=z,c(r.object)),O=f(I,C,P,N),O&&m(I,C,P,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(I,L,P,C),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,L,P,C){let N=C.wireframe===!0,O=n[L.id];O===void 0&&(O={},n[L.id]=O);let z=I.isInstancedMesh===!0?I.id:0,$=O[z];$===void 0&&($={},O[z]=$);let B=$[P.id];B===void 0&&(B={},$[P.id]=B);let G=B[N];return G===void 0&&(G=d(l()),B[N]=G),G}function d(I){let L=[],P=[],C=[];for(let N=0;N<e;N++)L[N]=0,P[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:C,object:I,attributes:{},index:null}}function f(I,L,P,C){let N=r.attributes,O=L.attributes,z=0,$=P.getAttributes();for(let B in $)if($[B].location>=0){let K=N[B],ht=O[B];if(ht===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),K===void 0||K.attribute!==ht||ht&&K.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function m(I,L,P,C){let N={},O=L.attributes,z=0,$=P.getAttributes();for(let B in $)if($[B].location>=0){let K=O[B];K===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let ht={};ht.attribute=K,K&&K.data&&(ht.data=K.data),N[B]=ht,z++}r.attributes=N,r.attributesNum=z,r.index=C}function x(){let I=r.newAttributes;for(let L=0,P=I.length;L<P;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let P=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;P[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),N[I]!==L&&(i.vertexAttribDivisor(I,L),N[I]=L)}function y(){let I=r.newAttributes,L=r.enabledAttributes;for(let P=0,C=L.length;P<C;P++)L[P]!==I[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function S(I,L,P,C,N,O,z){z===!0?i.vertexAttribIPointer(I,L,P,N,O):i.vertexAttribPointer(I,L,P,C,N,O)}function _(I,L,P,C){x();let N=C.attributes,O=P.getAttributes(),z=L.defaultAttributeValues;for(let $ in O){let B=O[$];if(B.location>=0){let G=N[$];if(G===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let K=G.normalized,ht=G.itemSize,It=t.get(G);if(It===void 0)continue;let he=It.buffer,te=It.type,Vt=It.bytesPerElement,nt=te===i.INT||te===i.UNSIGNED_INT||G.gpuType===uu;if(G.isInterleavedBufferAttribute){let at=G.data,At=at.stride,Ht=G.offset;if(at.isInstancedInterleavedBuffer){for(let St=0;St<B.locationSize;St++)p(B.location+St,at.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let St=0;St<B.locationSize;St++)g(B.location+St);i.bindBuffer(i.ARRAY_BUFFER,he);for(let St=0;St<B.locationSize;St++)S(B.location+St,ht/B.locationSize,te,K,At*Vt,(Ht+ht/B.locationSize*St)*Vt,nt)}else{if(G.isInstancedBufferAttribute){for(let at=0;at<B.locationSize;at++)p(B.location+at,G.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let at=0;at<B.locationSize;at++)g(B.location+at);i.bindBuffer(i.ARRAY_BUFFER,he);for(let at=0;at<B.locationSize;at++)S(B.location+at,ht/B.locationSize,te,K,ht*Vt,ht/B.locationSize*at*Vt,nt)}}else if(z!==void 0){let K=z[$];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(B.location,K);break;case 3:i.vertexAttrib3fv(B.location,K);break;case 4:i.vertexAttrib4fv(B.location,K);break;default:i.vertexAttrib1fv(B.location,K)}}}}y()}function v(){E();for(let I in n){let L=n[I];for(let P in L){let C=L[P];for(let N in C){let O=C[N];for(let z in O)u(O[z].object),delete O[z];delete C[N]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let P in L){let C=L[P];for(let N in C){let O=C[N];for(let z in O)u(O[z].object),delete O[z];delete C[N]}}delete n[I.id]}function T(I){for(let L in n){let P=n[L];for(let C in P){let N=P[C];if(N[I.id]===void 0)continue;let O=N[I.id];for(let z in O)u(O[z].object),delete O[z];delete N[I.id]}}}function M(I){for(let L in n){let P=n[L],C=I.isInstancedMesh===!0?I.id:0,N=P[C];if(N!==void 0){for(let O in N){let z=N[O];for(let $ in z)u(z[$].object),delete z[$];delete N[O]}delete P[C],Object.keys(P).length===0&&delete n[L]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function kM(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function GM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==di&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let M=T===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==hi&&T!==Di&&!M&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Wt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:v,samples:b}}function VM(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Hi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,S=y*4,_=p.clippingState||null;l.value=_,_=u(m,d,S,f);for(let v=0;v!==S;++v)_[v]=e[v];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,_=f;S!==x;++S,_+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var zo=4,WM=6,XM=20,qM=256,ol=new sr,A0=new ct,Sf=null,Ef=0,wf=0,Tf=!1,YM=new D,Pr=new D,$u=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=YM}=r;Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sf,Ef,wf),this._renderer.xr.enabled=Tf,t.scissorTest=!1,Ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Mi,format:di,colorSpace:Ta,depthBuffer:!1},s=R0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ZM(r)),this._blurMaterial=$M(r,t,e),this._ggxMaterial=JM(r,t,e)}return s}_compileMaterial(t){let e=new W(new jt,t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,n,s,r){let l=new vn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(A0),h.toneMapping=Wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Fn,new fe({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(A0),p=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let v=this._cubeSize;Ho(s,_*v,S>2?v:0,v,v),h.setRenderTarget(s),p&&h.render(x,l),h.render(t,l)}h.toneMapping=f,h.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===or||t.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ho(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ol)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-zo?n-m+zo:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ho(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,ol),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ho(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,ol)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-zo?s-this._lodMax+zo:0),d=4*(this._cubeSize-u);Ho(e,h,d,3*u,2*u),o.setRenderTarget(e),o.render(l,ol)}};function ZM(i){let t=[],e=[],n=i,s=i-zo+1+WM;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,m=new Float32Array(f*d*h),x=new Float32Array(f*d*h);for(let p=0;p<h;p++){let y=p%3*2/3-1,S=p>2?0:-1,_=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];m.set(_,f*d*p);for(let v=0;v<d;v++){let b=u[v*2]*2-1,T=u[v*2+1]*2-1;p===0?Pr.set(1,T,b):p===1?Pr.set(-b,1,-T):p===2?Pr.set(-b,T,1):p===3?Pr.set(-1,T,-b):p===4?Pr.set(-b,-1,T):Pr.set(b,T,-1),Pr.toArray(x,(p*d+v)*f)}}let g=new jt;g.setAttribute("position",new Gt(m,f)),g.setAttribute("outputDirection",new Gt(x,f)),e.push(new W(g,null)),n>zo&&n--}return{lodMeshes:e,sizeLods:t}}function R0(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function JM(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function $M(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function C0(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function I0(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ku=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ba(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:as});r.uniforms.tEquirect.value=e;let o=new W(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=Rn),new iu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function KM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===au||f===lu)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new Ku(m.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===au||f===lu,x=f===or||f===Cr;if(m||x){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new $u(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new $u(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===au?d.mapping=or:f===lu&&(d.mapping=Cr),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function jM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function QM(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let S=0,_=y.length;S<_;S+=3){let v=y[S+0],b=y[S+1],T=y[S+2];d.push(v,b,b,T,T,v)}}else{let y=m.array;x=m.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let v=S+0,b=S+1,T=S+2;d.push(v,b,b,T,T,v)}}let g=new(m.count>=65535?Na:La)(d,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function tb(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function eb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nb(i,t,e){let n=new WeakMap,s=new Je;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,v=1;_>t.maxTextureSize&&(v=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*v*4*h),T=new Ia(b,_,v,h);T.type=Di,T.needsUpdate=!0;let M=S*4;for(let R=0;R<h;R++){let I=g[R],L=p[R],P=y[R],C=_*v*4*R;for(let N=0;N<I.count;N++){let O=N*M;f===!0&&(s.fromBufferAttribute(I,N),b[C+O+0]=s.x,b[C+O+1]=s.y,b[C+O+2]=s.z,b[C+O+3]=0),m===!0&&(s.fromBufferAttribute(L,N),b[C+O+4]=s.x,b[C+O+5]=s.y,b[C+O+6]=s.z,b[C+O+7]=0),x===!0&&(s.fromBufferAttribute(P,N),b[C+O+8]=s.x,b[C+O+9]=s.y,b[C+O+10]=s.z,b[C+O+11]=P.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Ct(_,v)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ib(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var sb={[$d]:"LINEAR_TONE_MAPPING",[Kd]:"REINHARD_TONE_MAPPING",[jd]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[ef]:"AGX_TONE_MAPPING",[nf]:"NEUTRAL_TONE_MAPPING",[tf]:"CUSTOM_TONE_MAPPING"};function rb(i,t,e,n,s,r){let o=new Bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new jt;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let u=new Wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new W(c,u),d=new sr(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,y=[],S=!1;this.setSize=function(_,v){o.setSize(_,v),a!==null&&a.setSize(_,v),l!==null&&l.setSize(_,v);for(let b=0;b<y.length;b++){let T=y[b];T.setSize&&T.setSize(_,v)}},this.setEffects=function(_){y=_,S=y.length>0&&y[0].isRenderPass===!0;let v=o.width,b=o.height;y.length>0&&a===null&&(a=new Bn(v,b,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(v,b,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let M=y[T];M.setSize&&M.setSize(v,b)}},this.begin=function(_,v){if(x||_.toneMapping===Wi&&y.length===0)return!1;if(p=v,v!==null){let b=v.width,T=v.height;(o.width!==b||o.height!==T)&&this.setSize(b,T)}return S===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Wi,!0},this.hasRenderPass=function(){return S},this.end=function(_,v){_.toneMapping=g,x=!0;let b=o,T=a;for(let M=0;M<y.length;M++){let E=y[M];E.enabled!==!1&&(E.render(_,T,b,v),E.needsSwap!==!1&&(b=T,T=T===a?l:a))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,u.defines={},we.getTransfer(f)===He&&(u.defines.SRGB_TRANSFER="");let M=sb[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(p),_.render(h,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var $0=new jn,Cf=new Qs(1,1),K0=new Ia,j0=new Pc,Q0=new Ba,P0=[],D0=[],L0=new Float32Array(16),N0=new Float32Array(9),U0=new Float32Array(4);function Go(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=P0[s];if(r===void 0&&(r=new Float32Array(s),P0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Dn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function th(i,t){let e=D0[t];e===void 0&&(e=new Int32Array(t),D0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ob(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ab(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),Dn(e,t)}}function lb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),Dn(e,t)}}function cb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),Dn(e,t)}}function ub(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Dn(e,t)}else{if(Pn(e,n))return;U0.set(n),i.uniformMatrix2fv(this.addr,!1,U0),Dn(e,n)}}function hb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Dn(e,t)}else{if(Pn(e,n))return;N0.set(n),i.uniformMatrix3fv(this.addr,!1,N0),Dn(e,n)}}function db(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Dn(e,t)}else{if(Pn(e,n))return;L0.set(n),i.uniformMatrix4fv(this.addr,!1,L0),Dn(e,n)}}function fb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),Dn(e,t)}}function mb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),Dn(e,t)}}function gb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),Dn(e,t)}}function xb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),Dn(e,t)}}function vb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),Dn(e,t)}}function _b(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),Dn(e,t)}}function Mb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cf.compareFunction=e.isReversedDepthBuffer()?Yu:qu,r=Cf):r=$0,e.setTexture2D(t||r,s)}function bb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||j0,s)}function Sb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Q0,s)}function Eb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||K0,s)}function wb(i){switch(i){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return hb;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return xb;case 36294:return yb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Tb(i,t){i.uniform1fv(this.addr,t)}function Ab(i,t){let e=Go(t,this.size,2);i.uniform2fv(this.addr,e)}function Rb(i,t){let e=Go(t,this.size,3);i.uniform3fv(this.addr,e)}function Cb(i,t){let e=Go(t,this.size,4);i.uniform4fv(this.addr,e)}function Ib(i,t){let e=Go(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pb(i,t){let e=Go(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Db(i,t){let e=Go(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lb(i,t){i.uniform1iv(this.addr,t)}function Nb(i,t){i.uniform2iv(this.addr,t)}function Ub(i,t){i.uniform3iv(this.addr,t)}function Fb(i,t){i.uniform4iv(this.addr,t)}function Bb(i,t){i.uniform1uiv(this.addr,t)}function Ob(i,t){i.uniform2uiv(this.addr,t)}function Hb(i,t){i.uniform3uiv(this.addr,t)}function zb(i,t){i.uniform4uiv(this.addr,t)}function kb(i,t,e){let n=this.cache,s=t.length,r=th(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cf:o=$0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Gb(i,t,e){let n=this.cache,s=t.length,r=th(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||j0,r[o])}function Vb(i,t,e){let n=this.cache,s=t.length,r=th(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Q0,r[o])}function Wb(i,t,e){let n=this.cache,s=t.length,r=th(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||K0,r[o])}function Xb(i){switch(i){case 5126:return Tb;case 35664:return Ab;case 35665:return Rb;case 35666:return Cb;case 35674:return Ib;case 35675:return Pb;case 35676:return Db;case 5124:case 35670:return Lb;case 35667:case 35671:return Nb;case 35668:case 35672:return Ub;case 35669:case 35673:return Fb;case 5125:return Bb;case 36294:return Ob;case 36295:return Hb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Wb}}var If=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wb(e.type)}},Pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xb(e.type)}},Df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Af=/(\w+)(\])?(\[|\.)?/g;function F0(i,t){i.seq.push(t),i.map[t.id]=t}function qb(i,t,e){let n=i.name,s=n.length;for(Af.lastIndex=0;;){let r=Af.exec(n),o=Af.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){F0(e,c===void 0?new If(a,i,t):new Pf(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Df(a),F0(e,h)),e=h}}}var ko=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);qb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function B0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yb=37297,Zb=0;function Jb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var O0=new Qt;function $b(i){we._getMatrix(O0,we.workingColorSpace,i);let t=`mat3( ${O0.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case Aa:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function H0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Jb(i.getShaderSource(t),a)}else return r}function Kb(i,t){let e=$b(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jb={[$d]:"Linear",[Kd]:"Reinhard",[jd]:"Cineon",[Qd]:"ACESFilmic",[ef]:"AgX",[nf]:"Neutral",[tf]:"Custom"};function Qb(i,t){let e=jb[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ju=new D;function tS(){we.getLuminanceCoefficients(Ju);let i=Ju.x.toFixed(4),t=Ju.y.toFixed(4),e=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function nS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ll(i){return i!==""}function z0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(i){return i.replace(sS,oS)}var rS=new Map;function oS(i,t){let e=oe[t];if(e===void 0){let n=rS.get(t);if(n!==void 0)e=oe[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lf(e)}var aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(i){return i.replace(aS,lS)}function lS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function V0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var cS={[$a]:"SHADOWMAP_TYPE_PCF",[Uo]:"SHADOWMAP_TYPE_VSM"};function uS(i){return cS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hS={[or]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function dS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fS={[Cr]:"ENVMAP_MODE_REFRACTION"};function pS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mS={[ou]:"ENVMAP_BLENDING_MULTIPLY",[o0]:"ENVMAP_BLENDING_MIX",[a0]:"ENVMAP_BLENDING_ADD"};function gS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mS[i.combine]||"ENVMAP_BLENDING_NONE"}function xS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yS(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=uS(e),c=dS(e),u=pS(e),h=gS(e),d=xS(e),f=eS(e),m=nS(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ll).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ll).join(`
`),p.length>0&&(p+=`
`)):(g=[V0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),p=[V0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?oe.tonemapping_pars_fragment:"",e.toneMapping!==Wi?Qb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Kb("linearToOutputTexel",e.outputColorSpace),tS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ll).join(`
`)),o=Lf(o),o=z0(o,e),o=k0(o,e),a=Lf(a),a=z0(a,e),a=k0(a,e),o=G0(o),a=G0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+g+o,_=y+p+a,v=B0(s,s.VERTEX_SHADER,S),b=B0(s,s.FRAGMENT_SHADER,_);s.attachShader(x,v),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",P=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(b)||"",N=L.trim(),O=P.trim(),z=C.trim(),$=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,b);else{let G=H0(s,v,"vertex"),K=H0(s,b,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+G+`
`+K)}else N!==""?Wt("WebGLProgram: Program Info Log:",N):(O===""||z==="")&&(B=!1);B&&(I.diagnostics={runnable:$,programLog:N,vertexShader:{log:O,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(v),s.deleteShader(b),M=new ko(s,x),E=iS(s,x)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Yb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=b,this}var vS=0,Nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uf(t),e.set(t,n)),n}},Uf=class{constructor(t){this.id=vS++,this.code=t,this.usedTimes=0}};function _S(i){return i===lr||i===il||i===sl}function MS(i,t,e,n,s,r){let o=new Pa,a=new Nf,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,E,R,I,L,P){let C=I.fog,N=L.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=t.get(M.envMap||O,z),B=$&&$.mapping===Ka?$.image.height:null,G=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&Wt("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ht=K!==void 0?K.length:0,It=0;N.morphAttributes.position!==void 0&&(It=1),N.morphAttributes.normal!==void 0&&(It=2),N.morphAttributes.color!==void 0&&(It=3);let he,te,Vt,nt;if(G){let Be=us[G];he=Be.vertexShader,te=Be.fragmentShader}else{he=M.vertexShader,te=M.fragmentShader;let Be=a.getVertexShaderStage(M),Pe=a.getFragmentShaderStage(M);a.update(M,Be,Pe),Vt=Be.id,nt=Pe.id}let at=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Ht=L.isInstancedMesh===!0,St=L.isBatchedMesh===!0,ne=!!M.map,un=!!M.matcap,re=!!$,_e=!!M.aoMap,Fe=!!M.lightMap,ie=!!M.bumpMap&&M.wireframe===!1,Le=!!M.normalMap,Ee=!!M.displacementMap,Tn=!!M.emissiveMap,ke=!!M.metalnessMap,en=!!M.roughnessMap,k=M.anisotropy>0,mn=M.clearcoat>0,Ne=M.dispersion>0,U=M.retroreflectivity>0,w=M.iridescence>0,q=M.sheen>0,J=M.transmission>0,et=k&&!!M.anisotropyMap,dt=mn&&!!M.clearcoatMap,gt=mn&&!!M.clearcoatNormalMap,it=mn&&!!M.clearcoatRoughnessMap,rt=w&&!!M.iridescenceMap,yt=w&&!!M.iridescenceThicknessMap,Rt=q&&!!M.sheenColorMap,pt=q&&!!M.sheenRoughnessMap,ft=!!M.specularMap,Nt=!!M.specularColorMap,kt=!!M.specularIntensityMap,ee=J&&!!M.transmissionMap,V=J&&!!M.thicknessMap,mt=!!M.gradientMap,st=!!M.alphaMap,vt=M.alphaTest>0,Et=!!M.alphaHash,lt=!!M.extensions,Bt=Wi;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Lt={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:te,defines:M.defines,customVertexShaderID:Vt,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:St,batchingColor:St&&L._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&L.instanceColor!==null,instancingMorph:Ht&&L.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ne,matcap:un,envMap:re,envMapMode:re&&$.mapping,envMapCubeUVHeight:B,aoMap:_e,lightMap:Fe,bumpMap:ie,normalMap:Le,displacementMap:Ee,emissiveMap:Tn,normalMapObjectSpace:Le&&M.normalMapType===u0,normalMapTangentSpace:Le&&M.normalMapType===rl,packedNormalMap:Le&&M.normalMapType===rl&&_S(M.normalMap.format),metalnessMap:ke,roughnessMap:en,anisotropy:k,anisotropyMap:et,clearcoat:mn,clearcoatMap:dt,clearcoatNormalMap:gt,clearcoatRoughnessMap:it,dispersion:Ne,retroreflection:U,iridescence:w,iridescenceMap:rt,iridescenceThicknessMap:yt,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:ft,specularColorMap:Nt,specularIntensityMap:kt,transmission:J,transmissionMap:ee,thicknessMap:V,gradientMap:mt,opaque:M.transparent===!1&&M.blending===Pi&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:vt,alphaHash:Et,combine:M.combine,mapUv:ne&&m(M.map.channel),aoMapUv:_e&&m(M.aoMap.channel),lightMapUv:Fe&&m(M.lightMap.channel),bumpMapUv:ie&&m(M.bumpMap.channel),normalMapUv:Le&&m(M.normalMap.channel),displacementMapUv:Ee&&m(M.displacementMap.channel),emissiveMapUv:Tn&&m(M.emissiveMap.channel),metalnessMapUv:ke&&m(M.metalnessMap.channel),roughnessMapUv:en&&m(M.roughnessMap.channel),anisotropyMapUv:et&&m(M.anisotropyMap.channel),clearcoatMapUv:dt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:pt&&m(M.sheenRoughnessMap.channel),specularMapUv:ft&&m(M.specularMap.channel),specularColorMapUv:Nt&&m(M.specularColorMap.channel),specularIntensityMapUv:kt&&m(M.specularIntensityMap.channel),transmissionMapUv:ee&&m(M.transmissionMap.channel),thicknessMapUv:V&&m(M.thicknessMap.channel),alphaMapUv:st&&m(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Le||k),vertexNormals:!!N.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(ne||st),fog:!!C,useFog:M.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||N.attributes.normal===void 0&&Le===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:At,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:It,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ne&&M.map.isVideoTexture===!0&&we.getTransfer(M.map.colorSpace)===He,decodeVideoTextureEmissive:Tn&&M.emissiveMap.isVideoTexture===!0&&we.getTransfer(M.emissiveMap.colorSpace)===He,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===In,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:lt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&M.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)E.push(R),E.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(p(E,M),y(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function p(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function S(M){let E=f[M.type],R;if(E){let I=us[E];R=E0.clone(I.uniforms)}else R=M.uniforms;return R}function _(M,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new yS(i,E,M,s),c.push(R),u.set(E,R)),R}function v(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function b(M){a.remove(M)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:T}}function bS(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function SS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function W0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function X0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,g,p){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=p),t++,y}function l(d,f,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let S=a(d,f,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):e.push(S)}function c(d,f,m,x,g,p){let y=a(d,f,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function u(d,f){e.length>1&&e.sort(d||SS),n.length>1&&n.sort(f||W0),s.length>1&&s.sort(f||W0)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function ES(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new X0,i.set(n,[o])):s>=r.length?(o=new X0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function wS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new ct};break;case"SpotLight":e={position:new D,direction:new D,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function TS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var AS=0;function RS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function CS(i){let t=new wS,e=TS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ve,o=new ve;function a(c){let u=0,h=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,S=0,_=0,v=0,b=0,T=0,M=0,E=0,R=0;c.sort(RS);for(let L=0,P=c.length;L<P;L++){let C=c[L],N=C.color,O=C.intensity,z=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===lr?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*O,h+=N.g*O,d+=N.b*O;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],O);R++}else if(C.isSunLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,K=e.get(C);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=$;let ht=G.getViewportCount();for(let It=0;It<ht;It++)n.sunShadowMatrix[x+It]=G.getMatrix(It),n.sunShadowCascade[x+It]=G._cascadeData[It];x+=ht,m++}n.sun[f]=B,f++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,K=e.get(C);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=C.shadow.matrix,v++}n.directional[g]=B,g++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(N).multiplyScalar(O),B.distance=z,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[y]=B;let G=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,G.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[y]=G.matrix,C.castShadow){let K=e.get(C);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=$,T++}y++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(N).multiplyScalar(O),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[S]=B,S++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let G=C.shadow,K=e.get(C);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=C.shadow.matrix,b++}n.point[p]=B,p++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(O),B.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[_]=B,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==S||I.hemiLength!==_||I.numSunShadows!==m||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==T||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=S,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=S,I.hemiLength=_,I.numSunShadows=m,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=T,I.numSpotMaps=M,I.numLightProbes=R,n.version=AS++)}function l(c,u){let h=0,d=0,f=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let _=c[y];if(_.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),h++}else if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(_.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function q0(i){let t=new CS(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function IS(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new q0(i),t.set(s,[a])):r>=o.length?(a=new q0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DS=`uniform sampler2D shadow_pass;
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
}`,LS=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],NS=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Y0=new ve,al=new D,Rf=new D;function US(i,t,e){let n=new Do,s=new Ct,r=new Ct,o=new Je,a=new Xc,l=new qc,c={},u=e.maxTextureSize,h={[rr]:In,[In]:rr,[Zt]:Zt},d=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:PS,fragmentShader:DS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new jt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new W(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let p=this.type;this.render=function(b,T,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===km&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$a);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(as),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=p!==this.type;P&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(N=>N.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,N=b.length;C<N;C++){let O=b[C],z=O.shadow;if(z===void 0){Wt("WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let $=z.getFrameExtents();s.multiply($),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,z.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=B,z.map===null||P===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Uo){if(O.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Bn(s.x,s.y,{format:lr,type:Mi,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),z.map.texture.name=O.name+".shadowMap",z.map.depthTexture=new Qs(s.x,s.y,Di),z.map.depthTexture.name=O.name+".shadowMapDepth",z.map.depthTexture.format=ns,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Sn,z.map.depthTexture.magFilter=Sn}else O.isPointLight?(z.map=new Ku(s.x),z.map.depthTexture=new Uc(s.x,Xi)):(z.map=new Bn(s.x,s.y),z.map.depthTexture=new Qs(s.x,s.y,Xi)),z.map.depthTexture.name=O.name+".shadowMap",z.map.depthTexture.format=ns,this.type===$a?(z.map.depthTexture.compareFunction=B?Yu:qu,z.map.depthTexture.minFilter=Rn,z.map.depthTexture.magFilter=Rn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Sn,z.map.depthTexture.magFilter=Sn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let G=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();O.isPointLight!==!0&&z.updateMatrices(O,M);for(let K=0;K<G;K++){let ht=z.getCamera(K);if(O.isPointLight){let It=z.camera,he=z.matrix,te=O.distance||It.far;te!==It.far&&(It.far=te,It.updateProjectionMatrix()),al.setFromMatrixPosition(O.matrixWorld),It.position.copy(al),Rf.copy(It.position),Rf.add(LS[K]),It.up.copy(NS[K]),It.lookAt(Rf),It.updateMatrixWorld(),he.makeTranslation(-al.x,-al.y,-al.z),Y0.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Y0,It.coordinateSystem,It.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,K),i.clear();else{K===0&&(i.setRenderTarget(z.map),i.clear());let It=z.getViewport(K);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),L.viewport(o)}n=z.getFrustum(K),_(T,M,ht,O,this.type)}z.isPointLightShadow!==!0&&this.type===Uo&&y(z,M),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,R,I)};function y(b,T){let M=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Bn(s.x,s.y,{format:lr,type:Mi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,M,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,M,f,x,null)}function S(b,T,M,E){let R=null,I=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,P=T.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let N=C[P];N===void 0&&(N=R.clone(),C[P]=N,T.addEventListener("dispose",v)),R=N}if(R.visible=T.visible,R.wireframe=T.wireframe,E===Uo?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=M}return R}function _(b,T,M,E,R){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Uo)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let P=t.update(b),C=b.material;if(Array.isArray(C)){let N=P.groups;for(let O=0,z=N.length;O<z;O++){let $=N[O],B=C[$.materialIndex];if(B&&B.visible){let G=S(b,B,E,R);b.onBeforeShadow(i,b,T,M,P,G,$),i.renderBufferDirect(M,null,P,G,b,$),b.onAfterShadow(i,b,T,M,P,G,$)}}}else if(C.visible){let N=S(b,C,E,R);b.onBeforeShadow(i,b,T,M,P,N,null),i.renderBufferDirect(M,null,P,N,b,null),b.onAfterShadow(i,b,T,M,P,N,null)}}let L=b.children;for(let P=0,C=L.length;P<C;P++)_(L[P],T,M,E,R)}function v(b){b.target.removeEventListener("dispose",v);for(let M in c){let E=c[M],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function FS(i,t){function e(){let V=!1,mt=new Je,st=null,vt=new Je(0,0,0,0);return{setMask:function(Et){st!==Et&&!V&&(i.colorMask(Et,Et,Et,Et),st=Et)},setLocked:function(Et){V=Et},setClear:function(Et,lt,Bt,Lt,Be){Be===!0&&(Et*=Lt,lt*=Lt,Bt*=Lt),mt.set(Et,lt,Bt,Lt),vt.equals(mt)===!1&&(i.clearColor(Et,lt,Bt,Lt),vt.copy(mt))},reset:function(){V=!1,st=null,vt.set(-1,0,0,0)}}}function n(){let V=!1,mt=!1,st=null,vt=null,Et=null;return{setReversed:function(lt){if(mt!==lt){let Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),mt=lt;let Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return mt},setTest:function(lt){lt?at(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(lt){st!==lt&&!V&&(i.depthMask(lt),st=lt)},setFunc:function(lt){if(mt&&(lt=M0[lt]),vt!==lt){switch(lt){case vc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case wo:i.depthFunc(i.LEQUAL);break;case bc:i.depthFunc(i.EQUAL);break;case Sc:i.depthFunc(i.GEQUAL);break;case Ec:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=lt}},setLocked:function(lt){V=lt},setClear:function(lt){Et!==lt&&(Et=lt,mt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){V=!1,st=null,vt=null,Et=null,mt=!1}}}function s(){let V=!1,mt=null,st=null,vt=null,Et=null,lt=null,Bt=null,Lt=null,Be=null;return{setTest:function(Pe){V||(Pe?at(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Pe){mt!==Pe&&!V&&(i.stencilMask(Pe),mt=Pe)},setFunc:function(Pe,Jn,mi){(st!==Pe||vt!==Jn||Et!==mi)&&(i.stencilFunc(Pe,Jn,mi),st=Pe,vt=Jn,Et=mi)},setOp:function(Pe,Jn,mi){(lt!==Pe||Bt!==Jn||Lt!==mi)&&(i.stencilOp(Pe,Jn,mi),lt=Pe,Bt=Jn,Lt=mi)},setLocked:function(Pe){V=Pe},setClear:function(Pe){Be!==Pe&&(i.clearStencil(Pe),Be=Pe)},reset:function(){V=!1,mt=null,st=null,vt=null,Et=null,lt=null,Bt=null,Lt=null,Be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,S=null,_=null,v=null,b=null,T=null,M=new ct(0,0,0),E=0,R=!1,I=null,L=null,P=null,C=null,N=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=$>=2);let G=null,K={},ht=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),he=new Je().fromArray(ht),te=new Je().fromArray(It);function Vt(V,mt,st,vt){let Et=new Uint8Array(4),lt=i.createTexture();i.bindTexture(V,lt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<st;Bt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(mt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return lt}let nt={};nt[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(wo),ie(!1),Le(Xd),at(i.CULL_FACE),_e(as);function at(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function At(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Ht(V,mt){return d[V]!==mt?(i.bindFramebuffer(V,mt),d[V]=mt,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function St(V,mt){let st=m,vt=!1;if(V){st=f.get(mt),st===void 0&&(st=[],f.set(mt,st));let Et=V.textures;if(st.length!==Et.length||st[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=Et.length;lt<Bt;lt++)st[lt]=i.COLOR_ATTACHMENT0+lt;st.length=Et.length,vt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,vt=!0);vt&&i.drawBuffers(st)}function ne(V){return x!==V?(i.useProgram(V),x=V,!0):!1}let un={[Rr]:i.FUNC_ADD,[Vm]:i.FUNC_SUBTRACT,[Wm]:i.FUNC_REVERSE_SUBTRACT};un[Xm]=i.MIN,un[qm]=i.MAX;let re={[Ym]:i.ZERO,[Zm]:i.ONE,[Jm]:i.SRC_COLOR,[Zd]:i.SRC_ALPHA,[e0]:i.SRC_ALPHA_SATURATE,[Qm]:i.DST_COLOR,[Km]:i.DST_ALPHA,[$m]:i.ONE_MINUS_SRC_COLOR,[Jd]:i.ONE_MINUS_SRC_ALPHA,[t0]:i.ONE_MINUS_DST_COLOR,[jm]:i.ONE_MINUS_DST_ALPHA,[n0]:i.CONSTANT_COLOR,[i0]:i.ONE_MINUS_CONSTANT_COLOR,[s0]:i.CONSTANT_ALPHA,[r0]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(V,mt,st,vt,Et,lt,Bt,Lt,Be,Pe){if(V===as){g===!0&&(At(i.BLEND),g=!1);return}if(g===!1&&(at(i.BLEND),g=!0),V!==Gm){if(V!==p||Pe!==R){if((y!==Rr||v!==Rr)&&(i.blendEquation(i.FUNC_ADD),y=Rr,v=Rr),Pe)switch(V){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.ONE,i.ONE);break;case qd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",V);break}else switch(V){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qd:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yd:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",V);break}S=null,_=null,b=null,T=null,M.set(0,0,0),E=0,p=V,R=Pe}return}Et=Et||mt,lt=lt||st,Bt=Bt||vt,(mt!==y||Et!==v)&&(i.blendEquationSeparate(un[mt],un[Et]),y=mt,v=Et),(st!==S||vt!==_||lt!==b||Bt!==T)&&(i.blendFuncSeparate(re[st],re[vt],re[lt],re[Bt]),S=st,_=vt,b=lt,T=Bt),(Lt.equals(M)===!1||Be!==E)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Be),M.copy(Lt),E=Be),p=V,R=!1}function Fe(V,mt){V.side===Zt?At(i.CULL_FACE):at(i.CULL_FACE);let st=V.side===In;mt&&(st=!st),ie(st),V.blending===Pi&&V.transparent===!1?_e(as):_e(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let vt=V.stencilWrite;a.setTest(vt),vt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Tn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(V){I!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),I=V)}function Le(V){V!==Hm?(at(i.CULL_FACE),V!==L&&(V===Xd?i.cullFace(i.BACK):V===zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),L=V}function Ee(V){V!==P&&(z&&i.lineWidth(V),P=V)}function Tn(V,mt,st){V?(at(i.POLYGON_OFFSET_FILL),(C!==mt||N!==st)&&(C=mt,N=st,o.getReversed()&&(mt=-mt),i.polygonOffset(mt,st))):At(i.POLYGON_OFFSET_FILL)}function ke(V){V?at(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function en(V){V===void 0&&(V=i.TEXTURE0+O-1),G!==V&&(i.activeTexture(V),G=V)}function k(V,mt,st){st===void 0&&(G===null?st=i.TEXTURE0+O-1:st=G);let vt=K[st];vt===void 0&&(vt={type:void 0,texture:void 0},K[st]=vt),(vt.type!==V||vt.texture!==mt)&&(G!==st&&(i.activeTexture(st),G=st),i.bindTexture(V,mt||nt[V]),vt.type=V,vt.texture=mt)}function mn(){let V=K[G];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ne(){try{i.compressedTexImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function w(){try{i.texSubImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function q(){try{i.texSubImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function dt(){try{i.texStorage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function gt(){try{i.texStorage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function it(){try{i.texImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function rt(){try{i.texImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function yt(V){return h[V]!==void 0?h[V]:i.getParameter(V)}function Rt(V,mt){h[V]!==mt&&(i.pixelStorei(V,mt),h[V]=mt)}function pt(V){he.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),he.copy(V))}function ft(V){te.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),te.copy(V))}function Nt(V,mt){let st=c.get(mt);st===void 0&&(st=new WeakMap,c.set(mt,st));let vt=st.get(V);vt===void 0&&(vt=i.getUniformBlockIndex(mt,V.name),st.set(V,vt))}function kt(V,mt){let vt=c.get(mt).get(V);l.get(mt)!==vt&&(i.uniformBlockBinding(mt,vt,V.__bindingPointIndex),l.set(mt,vt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},G=null,K={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,S=null,_=null,v=null,b=null,T=null,M=new ct(0,0,0),E=0,R=!1,I=null,L=null,P=null,C=null,N=null,he.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:At,bindFramebuffer:Ht,drawBuffers:St,useProgram:ne,setBlending:_e,setMaterial:Fe,setFlipSided:ie,setCullFace:Le,setLineWidth:Ee,setPolygonOffset:Tn,setScissorTest:ke,activeTexture:en,bindTexture:k,unbindTexture:mn,compressedTexImage2D:Ne,compressedTexImage3D:U,texImage2D:it,texImage3D:rt,pixelStorei:Rt,getParameter:yt,updateUBOMapping:Nt,uniformBlockBinding:kt,texStorage2D:dt,texStorage3D:gt,texSubImage2D:w,texSubImage3D:q,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:pt,viewport:ft,reset:ee}}function BS(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,w){return m?new OffscreenCanvas(U,w):Ra("canvas")}function g(U,w,q){let J=1,et=Ne(U);if((et.width>q||et.height>q)&&(J=q/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let dt=Math.floor(J*et.width),gt=Math.floor(J*et.height);d===void 0&&(d=x(dt,gt));let it=w?x(dt,gt):d;return it.width=dt,it.height=gt,it.getContext("2d").drawImage(U,0,0,dt,gt),Wt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+dt+"x"+gt+")."),it}else return"data"in U&&Wt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),U;return U}function p(U){return U.generateMipmaps}function y(U){i.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(U,w,q,J,et,dt=!1){if(U!==null){if(i[U]!==void 0)return i[U];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let gt;J&&(gt=t.get("EXT_texture_norm16"),gt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=w;if(w===i.RED&&(q===i.FLOAT&&(it=i.R32F),q===i.HALF_FLOAT&&(it=i.R16F),q===i.UNSIGNED_BYTE&&(it=i.R8),q===i.UNSIGNED_SHORT&&gt&&(it=gt.R16_EXT),q===i.SHORT&&gt&&(it=gt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.R8UI),q===i.UNSIGNED_SHORT&&(it=i.R16UI),q===i.UNSIGNED_INT&&(it=i.R32UI),q===i.BYTE&&(it=i.R8I),q===i.SHORT&&(it=i.R16I),q===i.INT&&(it=i.R32I)),w===i.RG&&(q===i.FLOAT&&(it=i.RG32F),q===i.HALF_FLOAT&&(it=i.RG16F),q===i.UNSIGNED_BYTE&&(it=i.RG8),q===i.UNSIGNED_SHORT&&gt&&(it=gt.RG16_EXT),q===i.SHORT&&gt&&(it=gt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RG8UI),q===i.UNSIGNED_SHORT&&(it=i.RG16UI),q===i.UNSIGNED_INT&&(it=i.RG32UI),q===i.BYTE&&(it=i.RG8I),q===i.SHORT&&(it=i.RG16I),q===i.INT&&(it=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGB8UI),q===i.UNSIGNED_SHORT&&(it=i.RGB16UI),q===i.UNSIGNED_INT&&(it=i.RGB32UI),q===i.BYTE&&(it=i.RGB8I),q===i.SHORT&&(it=i.RGB16I),q===i.INT&&(it=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),q===i.UNSIGNED_INT&&(it=i.RGBA32UI),q===i.BYTE&&(it=i.RGBA8I),q===i.SHORT&&(it=i.RGBA16I),q===i.INT&&(it=i.RGBA32I)),w===i.RGB&&(q===i.UNSIGNED_SHORT&&gt&&(it=gt.RGB16_EXT),q===i.SHORT&&gt&&(it=gt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),w===i.RGBA){let rt=dt?Aa:we.getTransfer(et);q===i.FLOAT&&(it=i.RGBA32F),q===i.HALF_FLOAT&&(it=i.RGBA16F),q===i.UNSIGNED_BYTE&&(it=rt===He?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&gt&&(it=gt.RGBA16_EXT),q===i.SHORT&&gt&&(it=gt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(U,w){let q;return U?w===null||w===Xi||w===Bo?q=i.DEPTH24_STENCIL8:w===Di?q=i.DEPTH32F_STENCIL8:w===Fo&&(q=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xi||w===Bo?q=i.DEPTH_COMPONENT24:w===Di?q=i.DEPTH_COMPONENT32F:w===Fo&&(q=i.DEPTH_COMPONENT16),q}function b(U,w){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Sn&&U.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function T(U){let w=U.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function M(U){let w=U.target;w.removeEventListener("dispose",M),I(w)}function E(U){let w=n.get(U);if(w.__webglInit===void 0)return;let q=U.source,J=f.get(q);if(J){let et=J[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(U),Object.keys(J).length===0&&f.delete(q)}n.remove(U)}function R(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let q=U.source,J=f.get(q);delete J[w.__cacheKey],o.memory.textures--}function I(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let et=0;et<w.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(w.__webglFramebuffer[J][et]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let q=U.textures;for(let J=0,et=q.length;J<et;J++){let dt=n.get(q[J]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(q[J])}n.remove(U)}let L=0;function P(){L=0}function C(){return L}function N(U){L=U}function O(){let U=L;return U>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,U}function z(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function $(U,w){let q=n.get(U);if(U.isVideoTexture&&k(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){let J=U.image;if(J===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(q,U,w);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function B(U,w){let q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){At(q,U,w);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function G(U,w){let q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){At(q,U,w);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function K(U,w){let q=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){Ht(q,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}let ht={[js]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Tc]:i.MIRRORED_REPEAT},It={[Sn]:i.NEAREST,[l0]:i.NEAREST_MIPMAP_NEAREST,[ja]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[cu]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},he={[d0]:i.NEVER,[x0]:i.ALWAYS,[f0]:i.LESS,[qu]:i.LEQUAL,[p0]:i.EQUAL,[Yu]:i.GEQUAL,[m0]:i.GREATER,[g0]:i.NOTEQUAL};function te(U,w){if(w.type===Di&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Rn||w.magFilter===cu||w.magFilter===ja||w.magFilter===ls||w.minFilter===Rn||w.minFilter===cu||w.minFilter===ja||w.minFilter===ls)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ht[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ht[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ht[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,It[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,It[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==ja&&w.minFilter!==ls||w.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Vt(U,w){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",T));let J=w.source,et=f.get(J);et===void 0&&(et={},f.set(J,et));let dt=z(w);if(dt!==U.__cacheKey){et[dt]===void 0&&(et[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),et[dt].usedTimes++;let gt=et[U.__cacheKey];gt!==void 0&&(et[U.__cacheKey].usedTimes--,gt.usedTimes===0&&R(w)),U.__cacheKey=dt,U.__webglTexture=et[dt].texture}return q}function nt(U,w,q){return Math.floor(Math.floor(U/q)/w)}function at(U,w,q,J){let dt=U.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,q,J,w.data);else{dt.sort((Rt,pt)=>Rt.start-pt.start);let gt=0;for(let Rt=1;Rt<dt.length;Rt++){let pt=dt[gt],ft=dt[Rt],Nt=pt.start+pt.count,kt=nt(ft.start,w.width,4),ee=nt(pt.start,w.width,4);ft.start<=Nt+1&&kt===ee&&nt(ft.start+ft.count-1,w.width,4)===kt?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++gt,dt[gt]=ft)}dt.length=gt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Rt=0,pt=dt.length;Rt<pt;Rt++){let ft=dt[Rt],Nt=Math.floor(ft.start/4),kt=Math.ceil(ft.count/4),ee=Nt%w.width,V=Math.floor(Nt/w.width),mt=kt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,ee,V,mt,st,q,J,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function At(U,w,q){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);let et=Vt(U,w),dt=w.source;e.bindTexture(J,U.__webglTexture,i.TEXTURE0+q);let gt=n.get(dt);if(dt.version!==gt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let st=we.getPrimaries(we.workingColorSpace),vt=w.colorSpace===Ps?null:we.getPrimaries(w.colorSpace),Et=w.colorSpace===Ps||st===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let rt=g(w.image,!1,s.maxTextureSize);rt=mn(w,rt);let yt=r.convert(w.format,w.colorSpace),Rt=r.convert(w.type),pt=_(w.internalFormat,yt,Rt,w.normalized,w.colorSpace,w.isVideoTexture);te(J,w);let ft,Nt=w.mipmaps,kt=w.isVideoTexture!==!0,ee=gt.__version===void 0||et===!0,V=dt.dataReady,mt=b(w,rt);if(w.isDepthTexture)pt=v(w.format===ar,w.type),ee&&(kt?e.texStorage2D(i.TEXTURE_2D,1,pt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,pt,rt.width,rt.height,0,yt,Rt,null));else if(w.isDataTexture)if(Nt.length>0){kt&&ee&&e.texStorage2D(i.TEXTURE_2D,mt,pt,Nt[0].width,Nt[0].height);for(let st=0,vt=Nt.length;st<vt;st++)ft=Nt[st],kt?V&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,yt,Rt,ft.data):e.texImage2D(i.TEXTURE_2D,st,pt,ft.width,ft.height,0,yt,Rt,ft.data);w.generateMipmaps=!1}else kt?(ee&&e.texStorage2D(i.TEXTURE_2D,mt,pt,rt.width,rt.height),V&&at(w,rt,yt,Rt)):e.texImage2D(i.TEXTURE_2D,0,pt,rt.width,rt.height,0,yt,Rt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){kt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,Nt[0].width,Nt[0].height,rt.depth);for(let st=0,vt=Nt.length;st<vt;st++)if(ft=Nt[st],w.format!==di)if(yt!==null)if(kt){if(V)if(w.layerUpdates.size>0){let Et=xf(ft.width,ft.height,w.format,w.type);for(let lt of w.layerUpdates){let Bt=ft.data.subarray(lt*Et/ft.data.BYTES_PER_ELEMENT,(lt+1)*Et/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,lt,ft.width,ft.height,1,yt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,rt.depth,yt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,pt,ft.width,ft.height,rt.depth,0,ft.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,rt.depth,yt,Rt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,pt,ft.width,ft.height,rt.depth,0,yt,Rt,ft.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{kt&&ee&&e.texStorage2D(i.TEXTURE_2D,mt,pt,Nt[0].width,Nt[0].height);for(let st=0,vt=Nt.length;st<vt;st++)ft=Nt[st],w.format!==di?yt!==null?kt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,yt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,pt,ft.width,ft.height,0,ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?V&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,yt,Rt,ft.data):e.texImage2D(i.TEXTURE_2D,st,pt,ft.width,ft.height,0,yt,Rt,ft.data)}else if(w.isDataArrayTexture)if(kt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,rt.width,rt.height,rt.depth),V)if(w.layerUpdates.size>0){let st=xf(rt.width,rt.height,w.format,w.type);for(let vt of w.layerUpdates){let Et=rt.data.subarray(vt*st/rt.data.BYTES_PER_ELEMENT,(vt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,rt.width,rt.height,1,yt,Rt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Rt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,rt.width,rt.height,rt.depth,0,yt,Rt,rt.data);else if(w.isData3DTexture)kt?(ee&&e.texStorage3D(i.TEXTURE_3D,mt,pt,rt.width,rt.height,rt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Rt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,pt,rt.width,rt.height,rt.depth,0,yt,Rt,rt.data);else if(w.isFramebufferTexture){if(ee)if(kt)e.texStorage2D(i.TEXTURE_2D,mt,pt,rt.width,rt.height);else{let st=rt.width,vt=rt.height;for(let Et=0;Et<mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,pt,st,vt,0,yt,Rt,null),st>>=1,vt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),h.add(w),st.onpaint=vt=>{let Et=vt.changedElements;for(let lt of h)Et.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let Et=i.RGBA,lt=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,lt,Bt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(kt&&ee){let st=Ne(Nt[0]);e.texStorage2D(i.TEXTURE_2D,mt,pt,st.width,st.height)}for(let st=0,vt=Nt.length;st<vt;st++)ft=Nt[st],kt?V&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt,Rt,ft):e.texImage2D(i.TEXTURE_2D,st,pt,yt,Rt,ft);w.generateMipmaps=!1}else if(kt){if(ee){let st=Ne(rt);e.texStorage2D(i.TEXTURE_2D,mt,pt,st.width,st.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Rt,rt)}else e.texImage2D(i.TEXTURE_2D,0,pt,yt,Rt,rt);p(w)&&y(J),gt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Ht(U,w,q){if(w.image.length!==6)return;let J=Vt(U,w),et=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);let dt=n.get(et);if(et.version!==dt.__version||J===!0){e.activeTexture(i.TEXTURE0+q);let gt=we.getPrimaries(we.workingColorSpace),it=w.colorSpace===Ps?null:we.getPrimaries(w.colorSpace),rt=w.colorSpace===Ps||gt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let yt=w.isCompressedTexture||w.image[0].isCompressedTexture,Rt=w.image[0]&&w.image[0].isDataTexture,pt=[];for(let lt=0;lt<6;lt++)!yt&&!Rt?pt[lt]=g(w.image[lt],!0,s.maxCubemapSize):pt[lt]=Rt?w.image[lt].image:w.image[lt],pt[lt]=mn(w,pt[lt]);let ft=pt[0],Nt=r.convert(w.format,w.colorSpace),kt=r.convert(w.type),ee=_(w.internalFormat,Nt,kt,w.normalized,w.colorSpace),V=w.isVideoTexture!==!0,mt=dt.__version===void 0||J===!0,st=et.dataReady,vt=b(w,ft);te(i.TEXTURE_CUBE_MAP,w);let Et;if(yt){V&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ee,ft.width,ft.height);for(let lt=0;lt<6;lt++){Et=pt[lt].mipmaps;for(let Bt=0;Bt<Et.length;Bt++){let Lt=Et[Bt];w.format!==di?Nt!==null?V?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,ee,Lt.width,Lt.height,0,Lt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Lt.width,Lt.height,Nt,kt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,ee,Lt.width,Lt.height,0,Nt,kt,Lt.data)}}}else{if(Et=w.mipmaps,V&&mt){Et.length>0&&vt++;let lt=Ne(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ee,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Rt){V?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,pt[lt].width,pt[lt].height,Nt,kt,pt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,pt[lt].width,pt[lt].height,0,Nt,kt,pt[lt].data);for(let Bt=0;Bt<Et.length;Bt++){let Be=Et[Bt].image[lt].image;V?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Be.width,Be.height,Nt,kt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,ee,Be.width,Be.height,0,Nt,kt,Be.data)}}else{V?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,kt,pt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,Nt,kt,pt[lt]);for(let Bt=0;Bt<Et.length;Bt++){let Lt=Et[Bt];V?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Nt,kt,Lt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,ee,Nt,kt,Lt.image[lt])}}}p(w)&&y(i.TEXTURE_CUBE_MAP),dt.__version=et.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function St(U,w,q,J,et,dt){let gt=r.convert(q.format,q.colorSpace),it=r.convert(q.type),rt=_(q.internalFormat,gt,it,q.normalized,q.colorSpace),yt=n.get(w),Rt=n.get(q);if(Rt.__renderTarget=w,!yt.__hasExternalTextures){let pt=Math.max(1,w.width>>dt),ft=Math.max(1,w.height>>dt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,dt,rt,pt,ft,w.depth,0,gt,it,null):e.texImage2D(et,dt,rt,pt,ft,0,gt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),en(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,Rt.__webglTexture,0,ke(w)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,Rt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(U,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let J=w.depthTexture,et=J&&J.isDepthTexture?J.type:null,dt=v(w.stencilBuffer,et),gt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;en(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(w),dt,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(w),dt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,U)}else{let J=w.textures;for(let et=0;et<J.length;et++){let dt=J[et],gt=r.convert(dt.format,dt.colorSpace),it=r.convert(dt.type),rt=_(dt.internalFormat,gt,it,dt.normalized,dt.colorSpace);en(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(w),rt,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(w),rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function un(U,w,q){let J=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(w.depthTexture);if(et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(et.__webglInit===void 0&&(et.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),te(i.TEXTURE_CUBE_MAP,w.depthTexture);let yt=r.convert(w.depthTexture.format),Rt=r.convert(w.depthTexture.type),pt;w.depthTexture.format===ns?pt=i.DEPTH_COMPONENT24:w.depthTexture.format===ar&&(pt=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,w.width,w.height,0,yt,Rt,null)}}else $(w.depthTexture,0);let dt=et.__webglTexture,gt=ke(w),it=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,rt=w.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ns)en(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,dt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,dt,0);else if(w.depthTexture.format===ar)en(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,dt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(U){let w=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let J=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=J}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let J=0;J<6;J++)un(w.__webglFramebuffer[J],U,J);else{let J=U.texture.mipmaps;J&&J.length>0?un(w.__webglFramebuffer[0],U,0):un(w.__webglFramebuffer,U,0)}else if(q){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),ne(w.__webglDepthbuffer[J],U,!1);else{let et=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}}else{let J=U.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ne(w.__webglDepthbuffer,U,!1);else{let et=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(U,w,q){let J=n.get(U);w!==void 0&&St(J.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&re(U)}function Fe(U){let w=U.texture,q=n.get(U),J=n.get(w);U.addEventListener("dispose",M);let et=U.textures,dt=U.isWebGLCubeRenderTarget===!0,gt=et.length>1;if(gt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),dt){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let rt=0;rt<w.mipmaps.length;rt++)q.__webglFramebuffer[it][rt]=i.createFramebuffer()}else q.__webglFramebuffer[it]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)q.__webglFramebuffer[it]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(gt)for(let it=0,rt=et.length;it<rt;it++){let yt=n.get(et[it]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&en(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let rt=et[it];q.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[it]);let yt=r.convert(rt.format,rt.colorSpace),Rt=r.convert(rt.type),pt=_(rt.internalFormat,yt,Rt,rt.normalized,rt.colorSpace,U.isXRRenderTarget===!0),ft=ke(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,pt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,q.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),te(i.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)St(q.__webglFramebuffer[it][rt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else St(q.__webglFramebuffer[it],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(w)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let it=0,rt=et.length;it<rt;it++){let yt=et[it],Rt=n.get(yt),pt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Rt.__webglTexture),te(pt,yt),St(q.__webglFramebuffer,U,yt,i.COLOR_ATTACHMENT0+it,pt,0),p(yt)&&y(pt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(it=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),te(it,w),w.mipmaps&&w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)St(q.__webglFramebuffer[rt],U,w,i.COLOR_ATTACHMENT0,it,rt);else St(q.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,it,0);p(w)&&y(it),e.unbindTexture()}U.depthBuffer&&re(U)}function ie(U){let w=U.textures;for(let q=0,J=w.length;q<J;q++){let et=w[q];if(p(et)){let dt=S(U),gt=n.get(et).__webglTexture;e.bindTexture(dt,gt),y(dt),e.unbindTexture()}}}let Le=[],Ee=[];function Tn(U){if(U.samples>0){if(en(U)===!1){let w=U.textures,q=U.width,J=U.height,et=i.COLOR_BUFFER_BIT,dt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(U),it=w.length>1;if(it)for(let yt=0;yt<w.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let rt=U.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<w.length;yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let Rt=n.get(w[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,q,J,0,0,q,J,et,i.NEAREST),l===!0&&(Le.length=0,Ee.length=0,Le.push(i.COLOR_ATTACHMENT0+yt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Le.push(dt),Ee.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let yt=0;yt<w.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let Rt=n.get(w[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ke(U){return Math.min(s.maxSamples,U.samples)}function en(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(U){let w=o.render.frame;u.get(U)!==w&&(u.set(U,w),U.update())}function mn(U,w){let q=U.colorSpace,J=U.format,et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Ta&&q!==Ps&&(we.getTransfer(q)===He?(J!==di||et!==hi)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",q)),w}function Ne(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.getTextureUnits=C,this.setTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=_e,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=St,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function OS(i,t){function e(n,s=Ps){let r,o=we.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===hu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===du)return i.UNSIGNED_SHORT_5_5_5_1;if(n===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rf)return i.BYTE;if(n===of)return i.SHORT;if(n===Fo)return i.UNSIGNED_SHORT;if(n===uu)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Di)return i.FLOAT;if(n===Mi)return i.HALF_FLOAT;if(n===cf)return i.ALPHA;if(n===uf)return i.RGB;if(n===di)return i.RGBA;if(n===ns)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===fu)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===pu)return i.RG_INTEGER;if(n===mu)return i.RGBA_INTEGER;if(n===Qa||n===tl||n===el||n===nl)if(o===He)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gu||n===xu||n===yu||n===vu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_u||n===Mu||n===bu||n===Su||n===Eu||n===il||n===wu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_u||n===Mu)return o===He?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Su)return r.COMPRESSED_R11_EAC;if(n===Eu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===il)return r.COMPRESSED_RG11_EAC;if(n===wu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tu||n===Au||n===Ru||n===Cu||n===Iu||n===Pu||n===Du||n===Lu||n===Nu||n===Uu||n===Fu||n===Bu||n===Ou||n===Hu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Au)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ru)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Iu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Du)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zu||n===ku||n===Gu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zu)return o===He?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===Wu||n===sl||n===Xu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
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

}`,Ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Oa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:HS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends is{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding!="undefined",g=new Ff,p={},y=e.getContextAttributes(),S=null,_=null,v=[],b=[],T=new Ct,M=null,E=null,R=new vn;R.viewport=new Je;let I=new vn;I.viewport=new Je;let L=[R,I],P=new su,C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let at=v[nt];return at===void 0&&(at=new Co,v[nt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(nt){let at=v[nt];return at===void 0&&(at=new Co,v[nt]=at),at.getGripSpace()},this.getHand=function(nt){let at=v[nt];return at===void 0&&(at=new Co,v[nt]=at),at.getHandSpace()};function O(nt){let at=b.indexOf(nt.inputSource);if(at===-1)return;let At=v[at];At!==void 0&&(At.update(nt.inputSource,nt.frame,c||o),At.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let nt=0;nt<v.length;nt++){let at=b[nt];at!==null&&(b[nt]=null,v[nt].disconnect(at))}C=null,N=null,g.reset();for(let nt in p)delete p[nt];if(t.setRenderTarget(S),f=null,d=null,h=null,s=null,_=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(T.width,T.height,!1),E!==null){let nt=E.camera;nt.fov=E.fov,nt.zoom=E.zoom,nt.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ht=null,St=null;y.depth&&(St=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=y.stencil?ar:ns,Ht=y.stencil?Bo:Xi);let ne={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ne),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Bn(d.textureWidth,d.textureHeight,{format:di,type:hi,depthTexture:new Qs(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Bn(f.framebufferWidth,f.framebufferHeight,{format:di,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(nt){for(let at=0;at<nt.removed.length;at++){let At=nt.removed[at],Ht=b.indexOf(At);Ht>=0&&(b[Ht]=null,v[Ht].disconnect(At))}for(let at=0;at<nt.added.length;at++){let At=nt.added[at],Ht=b.indexOf(At);if(Ht===-1){for(let ne=0;ne<v.length;ne++)if(ne>=b.length){b.push(At),Ht=ne;break}else if(b[ne]===null){b[ne]=At,Ht=ne;break}if(Ht===-1)break}let St=v[Ht];St&&St.connect(At)}}let B=new D,G=new D;function K(nt,at,At){B.setFromMatrixPosition(at.matrixWorld),G.setFromMatrixPosition(At.matrixWorld);let Ht=B.distanceTo(G),St=at.projectionMatrix.elements,ne=At.projectionMatrix.elements,un=St[14]/(St[10]-1),re=St[14]/(St[10]+1),_e=(St[9]+1)/St[5],Fe=(St[9]-1)/St[5],ie=(St[8]-1)/St[0],Le=(ne[8]+1)/ne[0],Ee=un*ie,Tn=un*Le,ke=Ht/(-ie+Le),en=ke*-ie;if(at.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(en),nt.translateZ(ke),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),St[10]===-1)nt.projectionMatrix.copy(at.projectionMatrix),nt.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let k=un+ke,mn=re+ke,Ne=Ee-en,U=Tn+(Ht-en),w=_e*re/mn*k,q=Fe*re/mn*k;nt.projectionMatrix.makePerspective(Ne,U,w,q,k,mn),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ht(nt,at){at===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(at.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let at=nt.near,At=nt.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(At=g.depthFar)),P.near=I.near=R.near=at,P.far=I.far=R.far=At,(C!==P.near||N!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),C=P.near,N=P.far),P.layers.mask=nt.layers.mask|6,R.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let Ht=nt.parent,St=P.cameras;ht(P,Ht);for(let ne=0;ne<St.length;ne++)ht(St[ne],Ht);St.length===2?K(P,R,I):P.projectionMatrix.copy(R.projectionMatrix),E===null&&nt.isPerspectiveCamera&&(E={camera:nt,fov:nt.fov,zoom:nt.zoom}),It(nt,P,Ht)};function It(nt,at,At){At===null?nt.matrix.copy(at.matrixWorld):(nt.matrix.copy(At.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(at.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(at.projectionMatrix),nt.projectionMatrixInverse.copy(at.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Rc*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(nt){return p[nt]};let he=null;function te(nt,at){if(u=at.getViewerPose(c||o),m=at,u!==null){let At=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Ht=!1;At.length!==P.cameras.length&&(P.cameras.length=0,Ht=!0);for(let re=0;re<At.length;re++){let _e=At[re],Fe=null;if(f!==null)Fe=f.getViewport(_e);else{let Le=h.getViewSubImage(d,_e);Fe=Le.viewport,re===0&&(t.setRenderTargetTextures(_,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(_))}let ie=L[re];ie===void 0&&(ie=new vn,ie.layers.enable(re),ie.viewport=new Je,L[re]=ie),ie.matrix.fromArray(_e.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(_e.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),re===0&&(P.matrix.copy(ie.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ht===!0&&P.cameras.push(ie)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let re=h.getDepthInformation(At[0]);re&&re.isValid&&re.texture&&g.init(re,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let re=0;re<At.length;re++){let _e=At[re].camera;if(_e){let Fe=p[_e];Fe||(Fe=new Oa,p[_e]=Fe);let ie=h.getCameraImage(_e);Fe.sourceTexture=ie}}}}for(let At=0;At<v.length;At++){let Ht=b[At],St=v[At];Ht!==null&&St!==void 0&&St.update(Ht,at,c||o)}he&&he(nt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let Vt=new Z0;Vt.setAnimationLoop(te),this.setAnimationLoop=function(nt){he=nt},this.dispose=function(){}}},kS=new ve,tg=new Qt;tg.set(-1,0,0,0,1,0,0,0,1);function GS(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,pf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,S,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===In&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===In&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),S=y.envMap,_=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tg),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function VS(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let b=v.program;n.uniformBlockBinding(_,b)}function c(_,v){let b=s[_.id];b===void 0&&(g(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",y));let T=v.program;n.updateUBOMapping(_,T);let M=t.render.frame;r[_.id]!==M&&(d(_),r[_.id]=M)}function u(_){let v=h();_.__bindingPointIndex=v;let b=i.createBuffer(),T=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],b=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,E=b.length;M<E;M++){let R=b[M];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],M,I,T);else f(R,M,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,b,T){if(x(_,v,b,T)===!0){let M=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){let L=E[I],P=p(L);m(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function m(_,v,b){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,b)}function x(_,v,b,T){let M=_.value,E=v+"_"+b;if(T[E]===void 0)return typeof M=="number"||typeof M=="boolean"?T[E]=M:ArrayBuffer.isView(M)?T[E]=M.slice():T[E]=M.clone(),!0;{let R=T[E];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return T[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function g(_){let v=_.uniforms,b=0,T=16;for(let E=0,R=v.length;E<R;E++){let I=Array.isArray(v[E])?v[E]:[v[E]];for(let L=0,P=I.length;L<P;L++){let C=I[L],N=Array.isArray(C.value)?C.value:[C.value];for(let O=0,z=N.length;O<z;O++){let $=N[O],B=p($),G=b%T,K=G%B.boundary,ht=G+K;b+=K,ht!==0&&T-ht<B.storage&&(b+=T-ht),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=B.storage}}}let M=b%T;return M>0&&(b+=T-M),_.__size=b,_.__cache={},this}function p(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",_),v}function y(_){let v=_.target;v.removeEventListener("dispose",y);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var WS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function XS(){return cs===null&&(cs=new Cs(WS,16,16,lr,Mi),cs.name="DFG_LUT",cs.minFilter=Rn,cs.magFilter=Rn,cs.wrapS=es,cs.wrapT=es,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var ju=class{constructor(t={}){let{canvas:e=y0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=hi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([mu,pu,fu]),p=new Set([hi,Xi,Fo,Bo,hu,du]),y=new Uint32Array(4),S=new Int32Array(4),_=new D,v=null,b=null,T=[],M=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,P=null,C=null,N=null;this._outputColorSpace=An;let O=0,z=0,$=null,B=-1,G=null,K=new Je,ht=new Je,It=null,he=new ct(0),te=0,Vt=e.width,nt=e.height,at=1,At=null,Ht=null,St=new Je(0,0,Vt,nt),ne=new Je(0,0,Vt,nt),un=!1,re=new Do,_e=!1,Fe=!1,ie=new ve,Le=new D,Ee=new Je,Tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function en(){return $===null?at:1}let k=n;function mn(A,H){return e.getContext(A,H)}let Ne,U,w,q,J,et,dt,gt,it,rt,yt,Rt,pt,ft,Nt,kt,ee,V,mt,st,vt,Et,lt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",Jn,!1),k===null){let H="webgl2";if(k=mn(H,A),k===null)throw mn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(A){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",Jn,!1),Yt("WebGLRenderer: "+A.message),A}function Bt(){Ne=new jM(k),Ne.init(),vt=new OS(k,Ne),U=new GM(k,Ne,t,vt),w=new FS(k,Ne),U.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),P=k.createFramebuffer(),C=k.createFramebuffer(),N=k.createFramebuffer(),q=new eb(k),J=new bS,et=new BS(k,Ne,w,J,U,vt,q),dt=new KM(R),gt=new i1(k),Et=new zM(k,gt),it=new QM(k,gt,q,Et),rt=new ib(k,it,gt,Et,q),V=new nb(k,U,et),Nt=new VM(J),yt=new MS(R,dt,Ne,U,Et,Nt),Rt=new GS(R,J),pt=new ES,ft=new IS(Ne),ee=new HM(R,dt,w,rt,m,l),kt=new US(R,rt,U),lt=new VS(k,q,U,w),mt=new kM(k,Ne,q),st=new tb(k,Ne,q),q.programs=yt.programs,R.capabilities=U,R.extensions=Ne,R.properties=J,R.renderLists=pt,R.shadowMap=kt,R.state=w,R.info=q}x!==hi&&(E=new rb(x,e.width,e.height,a,s,r));let Lt=new Bf(R,k);this.xr=Lt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(Vt,nt,!1))},this.getSize=function(A){return A.set(Vt,nt)},this.setSize=function(A,H,tt=!0){if(Lt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=A,nt=H,e.width=Math.floor(A*at),e.height=Math.floor(H*at),tt===!0&&(e.style.width=A+"px",e.style.height=H+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Vt*at,nt*at).floor()},this.setDrawingBufferSize=function(A,H,tt){Vt=A,nt=H,at=tt,e.width=Math.floor(A*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===hi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(St)},this.setViewport=function(A,H,tt,Y){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,H,tt,Y),w.viewport(K.copy(St).multiplyScalar(at).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,H,tt,Y){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,H,tt,Y),w.scissor(ht.copy(ne).multiplyScalar(at).round())},this.getScissorTest=function(){return un},this.setScissorTest=function(A){w.setScissorTest(un=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){Ht=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,tt=!0){let Y=0;if(A){let Z=!1;if($!==null){let wt=$.texture.format;Z=g.has(wt)}if(Z){let wt=$.texture.type,Dt=p.has(wt),bt=ee.getClearColor(),Ut=ee.getClearAlpha(),Ot=bt.r,de=bt.g,be=bt.b;Dt?(y[0]=Ot,y[1]=de,y[2]=be,y[3]=Ut,k.clearBufferuiv(k.COLOR,0,y)):(S[0]=Ot,S[1]=de,S[2]=be,S[3]=Ut,k.clearBufferiv(k.COLOR,0,S))}else Y|=k.COLOR_BUFFER_BIT}H&&(Y|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",Jn,!1),ee.dispose(),pt.dispose(),ft.dispose(),J.dispose(),dt.dispose(),rt.dispose(),Et.dispose(),lt.dispose(),yt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",eo),Lt.removeEventListener("sessionend",Ti),zn.stop()};function Be(A){A.preventDefault(),Ca("WebGLRenderer: Context Lost."),I=!0}function Pe(){Ca("WebGLRenderer: Context Restored."),I=!1;let A=q.autoReset,H=kt.enabled,tt=kt.autoUpdate,Y=kt.needsUpdate,Z=kt.type;Bt(),q.autoReset=A,kt.enabled=H,kt.autoUpdate=tt,kt.needsUpdate=Y,kt.type=Z}function Jn(A){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mi(A){let H=A.target;H.removeEventListener("dispose",mi),_s(H)}function _s(A){Qr(A),J.remove(A)}function Qr(A){let H=J.get(A).programs;H!==void 0&&(H.forEach(function(tt){yt.releaseProgram(tt)}),A.isShaderMaterial&&yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,tt,Y,Z,wt){H===null&&(H=Tn);let Dt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,bt=Re(A,H,tt,Y,Z);w.setMaterial(Y,Dt);let Ut=tt.index,Ot=1;if(Y.wireframe===!0){if(Ut=it.getWireframeAttribute(tt),Ut===void 0)return;Ot=2}let de=tt.drawRange,be=tt.attributes.position,Ft=de.start*Ot,Oe=(de.start+de.count)*Ot;wt!==null&&(Ft=Math.max(Ft,wt.start*Ot),Oe=Math.min(Oe,(wt.start+wt.count)*Ot)),Ut!==null?(Ft=Math.max(Ft,0),Oe=Math.min(Oe,Ut.count)):be!=null&&(Ft=Math.max(Ft,0),Oe=Math.min(Oe,be.count));let Mn=Oe-Ft;if(Mn<0||Mn===1/0)return;Et.setup(Z,Y,bt,tt,Ut);let nn,We=mt;if(Ut!==null&&(nn=gt.get(Ut),We=st,We.setIndex(nn)),Z.isMesh)Y.wireframe===!0?(w.setLineWidth(Y.wireframeLinewidth*en()),We.setMode(k.LINES)):We.setMode(k.TRIANGLES);else if(Z.isLine){let kn=Y.linewidth;kn===void 0&&(kn=1),w.setLineWidth(kn*en()),Z.isLineSegments?We.setMode(k.LINES):Z.isLineLoop?We.setMode(k.LINE_LOOP):We.setMode(k.LINE_STRIP)}else Z.isPoints?We.setMode(k.POINTS):Z.isSprite&&We.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))We.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let kn=Z._multiDrawStarts,Pt=Z._multiDrawCounts,$n=Z._multiDrawCount,De=Ut?gt.get(Ut).bytesPerElement:1,Ai=J.get(Y).currentProgram.getUniforms();for(let ji=0;ji<$n;ji++)Ai.setValue(k,"_gl_DrawID",ji),We.render(kn[ji]/De,Pt[ji])}else if(Z.isInstancedMesh)We.renderInstances(Ft,Mn,Z.count);else if(tt.isInstancedBufferGeometry){let kn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Pt=Math.min(tt.instanceCount,kn);We.renderInstances(Ft,Mn,Pt)}else We.render(Ft,Mn)};function da(A,H,tt,Y){L!==null&&A.isNodeMaterial&&L.setObject(Y,A),_e===!0&&Nt.setState(A,tt,!1),A.transparent===!0&&A.side===Zt&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,Ye(A,H,Y),A.side=rr,A.needsUpdate=!0,Ye(A,H,Y),A.side=Zt):Ye(A,H,Y)}this.compile=function(A,H,tt=null){tt===null&&(tt=A),L!==null&&L.renderStart(A,H,tt),b=ft.get(tt),b.init(H),M.push(b),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),A!==tt&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),Fe=this.localClippingEnabled,_e=Nt.init(this.clippingPlanes,Fe),_e===!0&&Nt.setGlobalState(this.clippingPlanes,H),L!==null&&kt.render(b.state.shadowsArray,tt,H);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let wt=Z.material;if(wt)if(Array.isArray(wt))for(let Dt=0;Dt<wt.length;Dt++){let bt=wt[Dt];da(bt,tt,H,Z),Y.add(bt)}else da(wt,tt,H,Z),Y.add(wt)}),b=M.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(A,H,tt=null){let Y=this.compile(A,H,tt);return new Promise(Z=>{function wt(){if(Y.forEach(function(Dt){let Ut=J.get(Dt).currentProgram;(Ut===void 0||Ut.isReady())&&Y.delete(Dt)}),Y.size===0){Z(A);return}setTimeout(wt,10)}Ne.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let to=null;function Gs(A){to&&to(A)}function eo(){zn.stop()}function Ti(){zn.start()}let zn=new Z0;zn.setAnimationLoop(Gs),typeof self!="undefined"&&zn.setContext(self),this.setAnimationLoop=function(A){to=A,Lt.setAnimationLoop(A),A===null?zn.stop():zn.start()},Lt.addEventListener("sessionstart",eo),Lt.addEventListener("sessionend",Ti),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,H);let tt=Lt.enabled===!0&&Lt.isPresenting===!0,Y=E!==null&&($===null||tt)&&E.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(H),H=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,H,$),b=ft.get(A,M.length),b.init(H),b.state.textureUnits=et.getTextureUnits(),M.push(b),ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),re.setFromProjectionMatrix(ie,zi,H.reversedDepth),Fe=this.localClippingEnabled,_e=Nt.init(this.clippingPlanes,Fe),v=pt.get(A,T.length),v.init(),T.push(v),Lt.enabled===!0&&Lt.isPresenting===!0){let Dt=R.xr.getDepthSensingMesh();Dt!==null&&Ki(Dt,H,-1/0,R.sortObjects)}Ki(A,H,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(b.state.lightsArray),R.sortObjects===!0&&v.sort(At,Ht),ke=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,ke&&ee.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Nt.beginShadows();let Z=b.state.shadowsArray;if(kt.render(Z,A,H),_e===!0&&Nt.endShadows(),(Y&&E.hasRenderPass())===!1){let Dt=v.opaque,bt=v.transmissive;if(b.setupLights(),H.isArrayCamera){let Ut=H.cameras;if(bt.length>0)for(let Ot=0,de=Ut.length;Ot<de;Ot++){let be=Ut[Ot];Q(Dt,bt,A,be)}ke&&ee.render(A);for(let Ot=0,de=Ut.length;Ot<de;Ot++){let be=Ut[Ot];Vl(v,A,be,be.viewport)}}else bt.length>0&&Q(Dt,bt,A,H),ke&&ee.render(A),Vl(v,A,H)}$!==null&&z===0&&(et.updateMultisampleRenderTarget($),et.updateRenderTargetMipmap($)),Y&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,H),Et.resetDefaultState(),B=-1,G=null,M.pop(),M.length>0?(b=M[M.length-1],et.setTextureUnits(b.state.textureUnits),_e===!0&&Nt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,L!==null&&L.renderEnd()};function Ki(A,H,tt,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(re)){Y&&Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);let Dt=rt.update(A),bt=A.material;bt.visible&&v.push(A,Dt,bt,tt,Ee.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(re))){let Dt=rt.update(A),bt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ee.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Ee.copy(Dt.boundingSphere.center)),Ee.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(bt)){let Ut=Dt.groups;for(let Ot=0,de=Ut.length;Ot<de;Ot++){let be=Ut[Ot],Ft=bt[be.materialIndex];Ft&&Ft.visible&&v.push(A,Dt,Ft,tt,Ee.z,be,H)}}else bt.visible&&v.push(A,Dt,bt,tt,Ee.z,null,H)}}let wt=A.children;for(let Dt=0,bt=wt.length;Dt<bt;Dt++)Ki(wt[Dt],H,tt,Y)}function Vl(A,H,tt,Y){let{opaque:Z,transmissive:wt,transparent:Dt}=A;b.setupLightsView(tt),_e===!0&&Nt.setGlobalState(R.clippingPlanes,tt),Y&&w.viewport(K.copy(Y)),Z.length>0&&_t(Z,H,tt),wt.length>0&&_t(wt,H,tt),Dt.length>0&&_t(Dt,H,tt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Q(A,H,tt,Y){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let Ft=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Bn(1,1,{generateMipmaps:!0,type:Ft?Mi:hi,minFilter:ls,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let wt=b.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||K;wt.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),Ut=R.getActiveCubeFace(),Ot=R.getActiveMipmapLevel();R.setRenderTarget(wt),R.getClearColor(he),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),ke&&ee.render(tt);let de=R.toneMapping;R.toneMapping=Wi;let be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),_e===!0&&Nt.setGlobalState(R.clippingPlanes,Y),_t(A,tt,Y),et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Oe=0,Mn=H.length;Oe<Mn;Oe++){let nn=H[Oe],{object:We,geometry:kn,material:Pt,group:$n}=nn;if(Pt.side===Zt&&We.layers.test(Y.layers)){let De=Pt.side;Pt.side=In,Pt.needsUpdate=!0,ae(We,tt,Y,kn,Pt,$n),Pt.side=De,Pt.needsUpdate=!0,Ft=!0}}Ft===!0&&(et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt))}R.setRenderTarget(bt,Ut,Ot),R.setClearColor(he,te),be!==void 0&&(Y.viewport=be),R.toneMapping=de}function _t(A,H,tt){let Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,wt=A.length;Z<wt;Z++){let Dt=A[Z],{object:bt,geometry:Ut,group:Ot}=Dt,de=Dt.material;de.allowOverride===!0&&Y!==null&&(de=Y),bt.layers.test(tt.layers)&&ae(bt,H,tt,Ut,de,Ot)}}function ae(A,H,tt,Y,Z,wt){L!==null&&Z.isNodeMaterial&&L.setObject(A,Z),A.onBeforeRender(R,H,tt,Y,Z,wt),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,H,tt,Y,A,wt),Z.transparent===!0&&Z.side===Zt&&Z.forceSinglePass===!1?(Z.side=In,Z.needsUpdate=!0,R.renderBufferDirect(tt,H,Y,Z,A,wt),Z.side=rr,Z.needsUpdate=!0,R.renderBufferDirect(tt,H,Y,Z,A,wt),Z.side=Zt):R.renderBufferDirect(tt,H,Y,Z,A,wt),A.onAfterRender(R,H,tt,Y,Z,wt)}function Ye(A,H,tt){H.isScene!==!0&&(H=Tn);let Y=J.get(A),Z=b.state.lights,wt=b.state.shadowsArray,Dt=Z.state.version,bt=yt.getParameters(A,Z.state,wt,H,tt,b.state.lightProbeGridArray),Ut=yt.getProgramCacheKey(bt),Ot=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let de=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=dt.get(A.envMap||Y.environment,de),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ot===void 0&&(A.addEventListener("dispose",mi),Ot=new Map,Y.programs=Ot);let be=Ot.get(Ut);if(be!==void 0){if(Y.currentProgram===be&&Y.lightsStateVersion===Dt)return ye(A,bt),be}else bt.uniforms=yt.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,tt,bt),A.onBeforeCompile(bt,R),be=yt.acquireProgram(bt,Ut),Ot.set(Ut,be),Y.uniforms=bt.uniforms;let Ft=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=Nt.uniform),ye(A,bt),Y.needsLights=Mr(A),Y.lightsStateVersion=Dt,Y.needsLights&&(Ft.ambientLightColor.value=Z.state.ambient,Ft.lightProbe.value=Z.state.probe,Ft.sunLights.value=Z.state.sun,Ft.sunLightShadows.value=Z.state.sunShadow,Ft.directionalLights.value=Z.state.directional,Ft.directionalLightShadows.value=Z.state.directionalShadow,Ft.spotLights.value=Z.state.spot,Ft.spotLightShadows.value=Z.state.spotShadow,Ft.rectAreaLights.value=Z.state.rectArea,Ft.ltc_1.value=Z.state.rectAreaLTC1,Ft.ltc_2.value=Z.state.rectAreaLTC2,Ft.pointLights.value=Z.state.point,Ft.pointLightShadows.value=Z.state.pointShadow,Ft.hemisphereLights.value=Z.state.hemi,Ft.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ft.sunShadowCascade.value=Z.state.sunShadowCascade,Ft.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ft.spotLightMatrix.value=Z.state.spotLightMatrix,Ft.spotLightMap.value=Z.state.spotLightMap,Ft.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=be,Y.uniformsList=null,be}function Xt(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=ko.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function ye(A,H){let tt=J.get(A);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function le(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let tt=0,Y=A.length;tt<Y;tt++){let Z=A[tt];if(Z.texture!==null&&Z.boundingBox.containsPoint(_))return Z}return null}function Re(A,H,tt,Y,Z){H.isScene!==!0&&(H=Tn),et.resetTextureUnits();let wt=H.fog,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,bt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:we.workingColorSpace,Ut=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ot=dt.get(Y.envMap||Dt,Ut),de=Y.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,be=!!tt.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!tt.morphAttributes.position,Oe=!!tt.morphAttributes.normal,Mn=!!tt.morphAttributes.color,nn=Wi;Y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(nn=R.toneMapping);let We=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,kn=We!==void 0?We.length:0,Pt=J.get(Y),$n=b.state.lights;if(_e===!0&&(Fe===!0||A!==G)){let Ze=A===G&&Y.id===B;Nt.setState(Y,A,Ze)}let De=!1;Y.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==$n.state.version||Pt.outputColorSpace!==bt||Z.isBatchedMesh&&Pt.batching===!1||!Z.isBatchedMesh&&Pt.batching===!0||Z.isBatchedMesh&&Pt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Pt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Pt.instancing===!1||!Z.isInstancedMesh&&Pt.instancing===!0||Z.isSkinnedMesh&&Pt.skinning===!1||!Z.isSkinnedMesh&&Pt.skinning===!0||Z.isInstancedMesh&&Pt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pt.instancingMorph===!1&&Z.morphTexture!==null||Pt.envMap!==Ot||Y.fog===!0&&Pt.fog!==wt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Nt.numPlanes||Pt.numIntersection!==Nt.numIntersection)||Pt.vertexAlphas!==de||Pt.vertexTangents!==be||Pt.morphTargets!==Ft||Pt.morphNormals!==Oe||Pt.morphColors!==Mn||Pt.toneMapping!==nn||Pt.morphTargetsCount!==kn||!!Pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(De=!0):(De=!0,Pt.__version=Y.version);let Ai=Pt.currentProgram;De===!0&&(Ai=Ye(Y,H,Z),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,Ai,Pt));let ji=!1,Vs=!1,io=!1,Ge=Ai.getUniforms(),yn=Pt.uniforms;if(w.useProgram(Ai.program)&&(ji=!0,Vs=!0,io=!0),Y.id!==B&&(B=Y.id,Vs=!0),Pt.needsLights){let Ze=le(b.state.lightProbeGridArray,Z);Pt.lightProbeGrid!==Ze&&(Pt.lightProbeGrid=Ze,Vs=!0)}if(ji||G!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ge.setValue(k,"projectionMatrix",A.projectionMatrix),Ge.setValue(k,"viewMatrix",A.matrixWorldInverse);let Xs=Ge.map.cameraPosition;Xs!==void 0&&Xs.setValue(k,Le.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Ge.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ge.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,Vs=!0,io=!0)}if(Pt.needsLights&&($n.state.sunShadowMap.length>0&&Ge.setValue(k,"sunShadowMap",$n.state.sunShadowMap,et),$n.state.directionalShadowMap.length>0&&Ge.setValue(k,"directionalShadowMap",$n.state.directionalShadowMap,et),$n.state.spotShadowMap.length>0&&Ge.setValue(k,"spotShadowMap",$n.state.spotShadowMap,et),$n.state.pointShadowMap.length>0&&Ge.setValue(k,"pointShadowMap",$n.state.pointShadowMap,et)),Z.isSkinnedMesh){Ge.setOptional(k,Z,"bindMatrix"),Ge.setOptional(k,Z,"bindMatrixInverse");let Ze=Z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ge.setValue(k,"boneTexture",Ze.boneTexture,et))}Z.isBatchedMesh&&(Ge.setOptional(k,Z,"batchingTexture"),Ge.setValue(k,"batchingTexture",Z._matricesTexture,et),Ge.setOptional(k,Z,"batchingIdTexture"),Ge.setValue(k,"batchingIdTexture",Z._indirectTexture,et),Ge.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ge.setValue(k,"batchingColorTexture",Z._colorsTexture,et));let Ws=tt.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&V.update(Z,tt,Ai),(Vs||Pt.receiveShadow!==Z.receiveShadow)&&(Pt.receiveShadow=Z.receiveShadow,Ge.setValue(k,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(yn.envMapIntensity.value=H.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=XS()),Vs){if(Ge.setValue(k,"toneMappingExposure",R.toneMappingExposure),Pt.needsLights&&Ui(yn,io),wt&&Y.fog===!0&&Rt.refreshFogUniforms(yn,wt),Rt.refreshMaterialUniforms(yn,Y,at,nt,b.state.transmissionRenderTarget[A.id]),Pt.needsLights&&Pt.lightProbeGrid){let Ze=Pt.lightProbeGrid;yn.probesSH.value=Ze.texture,yn.probesMin.value.copy(Ze.boundingBox.min),yn.probesMax.value.copy(Ze.boundingBox.max),yn.probesResolution.value.copy(Ze.resolution)}ko.upload(k,Xt(Pt),yn,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ko.upload(k,Xt(Pt),yn,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ge.setValue(k,"center",Z.center),Ge.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(k,"normalMatrix",Z.normalMatrix),Ge.setValue(k,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ze=Y.uniformsGroups;for(let Xs=0,so=Ze.length;Xs<so;Xs++){let sm=Ze[Xs];lt.update(sm,Ai),lt.bind(sm,Ai)}}return Ai}function Ui(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Mr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,H,tt){let Y=J.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(A.texture).__webglTexture=H,J.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:tt,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let tt=J.get(A);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,tt=0){$=A,O=H,z=tt;let Y=null,Z=!1,wt=!1;if(A){let bt=J.get(A);if(bt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,bt.__webglFramebuffer),K.copy(A.viewport),ht.copy(A.scissor),It=A.scissorTest,w.viewport(K),w.scissor(ht),w.setScissorTest(It),B=-1;return}else if(bt.__webglFramebuffer===void 0)et.setupRenderTarget(A);else if(bt.__hasExternalTextures)et.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let de=A.depthTexture;if(bt.__boundDepthTexture!==de){if(de!==null&&J.has(de)&&(A.width!==de.image.width||A.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(A)}}let Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(wt=!0);let Ot=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[H])?Y=Ot[H][tt]:Y=Ot[H],Z=!0):A.samples>0&&et.useMultisampledRTT(A)===!1?Y=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?Y=Ot[tt]:Y=Ot,K.copy(A.viewport),ht.copy(A.scissor),It=A.scissorTest}else K.copy(St).multiplyScalar(at).floor(),ht.copy(ne).multiplyScalar(at).floor(),It=un;if(tt!==0&&(Y=P),w.bindFramebuffer(k.FRAMEBUFFER,Y)&&w.drawBuffers(A,Y),w.viewport(K),w.scissor(ht),w.setScissorTest(It),Z){let bt=J.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,tt)}else if(wt){let bt=H;for(let Ut=0;Ut<A.textures.length;Ut++){let Ot=J.get(A.textures[Ut]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ut,Ot.__webglTexture,tt,bt)}}else if(A!==null&&tt!==0){let bt=J.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,tt)}B=-1};function no(A){let H=J.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=U.textureFormatReadable(A.format),H.__typeReadable=U.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,tt,Y,Z,wt,Dt,bt=0){if(!(A&&A.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){w.bindFramebuffer(k.FRAMEBUFFER,Ut);try{let Ot=A.textures[bt],de=Ot.format,be=Ot.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+bt);let Ft=no(Ot);if(Ft.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&tt>=0&&tt<=A.height-Z&&k.readPixels(H,tt,Y,Z,vt.convert(de),vt.convert(be),wt)}finally{let Ot=$!==null?J.get($).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,H,tt,Y,Z,wt,Dt,bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut)if(H>=0&&H<=A.width-Y&&tt>=0&&tt<=A.height-Z){w.bindFramebuffer(k.FRAMEBUFFER,Ut);let Ot=A.textures[bt],de=Ot.format,be=Ot.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+bt);let Ft=no(Ot);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Oe),k.bufferData(k.PIXEL_PACK_BUFFER,wt.byteLength,k.STREAM_READ),k.readPixels(H,tt,Y,Z,vt.convert(de),vt.convert(be),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Mn=$!==null?J.get($).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Mn);let nn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await _0(k,nn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Oe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,wt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Oe),k.deleteSync(nn),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,tt=0){let Y=Math.pow(2,-tt),Z=Math.floor(A.image.width*Y),wt=Math.floor(A.image.height*Y),Dt=H!==null?H.x:0,bt=H!==null?H.y:0;et.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,tt,0,0,Dt,bt,Z,wt),w.unbindTexture()},this.copyTextureToTexture=function(A,H,tt=null,Y=null,Z=0,wt=0){let Dt,bt,Ut,Ot,de,be,Ft,Oe,Mn,nn=A.isCompressedTexture?A.mipmaps[wt]:A.image;if(tt!==null)Dt=tt.max.x-tt.min.x,bt=tt.max.y-tt.min.y,Ut=tt.isBox3?tt.max.z-tt.min.z:1,Ot=tt.min.x,de=tt.min.y,be=tt.isBox3?tt.min.z:0;else{let yn=Math.pow(2,-Z);Dt=Math.floor(nn.width*yn),bt=Math.floor(nn.height*yn),A.isDataArrayTexture?Ut=nn.depth:A.isData3DTexture?Ut=Math.floor(nn.depth*yn):Ut=1,Ot=0,de=0,be=0}Y!==null?(Ft=Y.x,Oe=Y.y,Mn=Y.z):(Ft=0,Oe=0,Mn=0);let We=vt.convert(H.format),kn=vt.convert(H.type),Pt;H.isData3DTexture?(et.setTexture3D(H,0),Pt=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(et.setTexture2DArray(H,0),Pt=k.TEXTURE_2D_ARRAY):(et.setTexture2D(H,0),Pt=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);let $n=w.getParameter(k.UNPACK_ROW_LENGTH),De=w.getParameter(k.UNPACK_IMAGE_HEIGHT),Ai=w.getParameter(k.UNPACK_SKIP_PIXELS),ji=w.getParameter(k.UNPACK_SKIP_ROWS),Vs=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,nn.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,nn.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Ot),w.pixelStorei(k.UNPACK_SKIP_ROWS,de),w.pixelStorei(k.UNPACK_SKIP_IMAGES,be);let io=A.isDataArrayTexture||A.isData3DTexture,Ge=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let yn=J.get(A),Ws=J.get(H),Ze=J.get(yn.__renderTarget),Xs=J.get(Ws.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,Ze.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let so=0;so<Ut;so++)io&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(A).__webglTexture,Z,be+so),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(H).__webglTexture,wt,Mn+so)),k.blitFramebuffer(Ot,de,Dt,bt,Ft,Oe,Dt,bt,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||J.has(A)){let yn=J.get(A),Ws=J.get(H);w.bindFramebuffer(k.READ_FRAMEBUFFER,C),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,N);for(let Ze=0;Ze<Ut;Ze++)io?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yn.__webglTexture,Z,be+Ze):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yn.__webglTexture,Z),Ge?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ws.__webglTexture,wt,Mn+Ze):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ws.__webglTexture,wt),Z!==0?k.blitFramebuffer(Ot,de,Dt,bt,Ft,Oe,Dt,bt,k.COLOR_BUFFER_BIT,k.NEAREST):Ge?k.copyTexSubImage3D(Pt,wt,Ft,Oe,Mn+Ze,Ot,de,Dt,bt):k.copyTexSubImage2D(Pt,wt,Ft,Oe,Ot,de,Dt,bt);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ge?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Pt,wt,Ft,Oe,Mn,Dt,bt,Ut,We,kn,nn.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,wt,Ft,Oe,Mn,Dt,bt,Ut,We,nn.data):k.texSubImage3D(Pt,wt,Ft,Oe,Mn,Dt,bt,Ut,We,kn,nn):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,wt,Ft,Oe,Dt,bt,We,kn,nn.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,wt,Ft,Oe,nn.width,nn.height,We,nn.data):k.texSubImage2D(k.TEXTURE_2D,wt,Ft,Oe,Dt,bt,We,kn,nn);w.pixelStorei(k.UNPACK_ROW_LENGTH,$n),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,De),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Ai),w.pixelStorei(k.UNPACK_SKIP_ROWS,ji),w.pixelStorei(k.UNPACK_SKIP_IMAGES,Vs),wt===0&&H.generateMipmaps&&k.generateMipmap(Pt),w.unbindTexture()},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&et.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?et.setTextureCube(A,0):A.isData3DTexture?et.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?et.setTexture2DArray(A,0):et.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){O=0,z=0,$=null,w.reset(),Et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var Qn={sunDir:{value:new D(0,1,0)},sunCol:{value:new D(1,.85,.6)},misc:{value:new Je(0,.08,0,0)}},Vo="gl_FragColor.rgb+=(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5)/255.;",eh=oe;eh.fog_pars_vertex=`#ifdef USE_FOG
varying float vFogDepth;varying vec3 vFogWP;
#endif`;eh.fog_vertex=`#ifdef USE_FOG
vFogDepth=-mvPosition.z;vFogWP=transpose(mat3(viewMatrix))*mvPosition.xyz;
#endif`;eh.fog_pars_fragment=`#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;varying vec3 vFogWP;uniform vec3 fogSunDir;uniform vec3 fogSunCol;uniform vec4 fogMisc;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`;eh.fog_fragment=`#ifdef USE_FOG
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
${Vo}
#endif`;var eg=i=>{i.uniforms.fogSunDir=Qn.sunDir,i.uniforms.fogSunCol=Qn.sunCol,i.uniforms.fogMisc=Qn.misc};Object.defineProperty(ui.prototype,"onBeforeCompile",{configurable:!0,get(){return this._obc||eg},set(i){let t=(e,n)=>{eg(e),i(e,n)};t.toString=()=>i.toString()+"/*fogfx*/",this._obc=t}});var qS=()=>{try{return localStorage.getItem("rio3d-hap")!=="0"}catch{return!0}},Of=null;function Dr(i){if(qS())try{if(navigator.vibrate){navigator.vibrate(i);return}if(!Of){let t=document.createElement("label");t.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),t.appendChild(e),document.body.appendChild(t),Of=t}Of.click()}catch{}}var Hf=(i,t,e)=>Math.max(t,Math.min(e,i)),hs=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],on=(i,t)=>i+Math.random()*(t-i),$t={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(Dr(9),!this.ok())return;this.cap("Nota de linterna");let t=this.ctx.currentTime;this.pluck(hs[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(hs[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;this.cap("Salpicadura");let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},vol:1,ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6*this.vol,window.UX?UX.out(t,e):e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let E=0;E<r.length;E++)r[E]=Math.random()*2-1;this.nbuf=s;let o=Math.floor(t.sampleRate*2.8),a=t.createBuffer(2,o,t.sampleRate);for(let E=0;E<2;E++){let R=a.getChannelData(E);for(let I=0;I<o;I++)R[I]=(Math.random()*2-1)*Math.pow(1-I/o,2.6)}let l=t.createConvolver();l.buffer=a;let c=t.createGain();c.gain.value=.38,n.connect(l),l.connect(c),c.connect(e);let u=this.noise(0,.37),h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=650;let d=t.createGain();d.gain.value=.07;let f=t.createOscillator();f.frequency.value=.09;let m=t.createGain();m.gain.value=.04,f.connect(m),m.connect(d.gain),f.start(),u.connect(h),h.connect(d),d.connect(e);let x=this.noise(0,1.5),g=t.createBiquadFilter();g.type="bandpass",g.frequency.value=2200,g.Q.value=.7;let p=t.createGain();p.gain.value=.02,x.connect(g),g.connect(p),p.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(E=>{let R=this.panner(E*4,0,0,2,.6);R.connect(e),this.bk[E]=R,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([I,L,P,C],N)=>{let O=this.noise(Math.random()*1.8,I<800?.71:I<1900?1.07:1.52),z=t.createBiquadFilter();z.type="bandpass",z.frequency.value=I,z.Q.value=L;let $=t.createGain();$.gain.value=C;let B=t.createOscillator(),G=t.createGain();B.frequency.value=P*(E>0?1.13:.91),G.gain.value=C*.7,B.connect(G),G.connect($.gain),B.start(),O.connect(z),z.connect($),$.connect(R)})});let y=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let E=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,R=t.currentTime,I=t.createOscillator(),L=t.createGain(),P=on(450,1100),C=this.panner(this.bkx[E],0,on(-4,2),2,.6,!0);C.connect(e),I.frequency.setValueAtTime(P,R),I.frequency.exponentialRampToValueAtTime(P*on(1.4,2),R+.07),L.gain.setValueAtTime(0,R),L.gain.linearRampToValueAtTime(on(.01,.026),R+.012),L.gain.exponentialRampToValueAtTime(1e-4,R+.1),I.connect(L),L.connect(C),I.start(R),I.stop(R+.12)}setTimeout(y,on(90,260))}};y();let S=this.noise(Math.random()*1.5,1.21),_=t.createBiquadFilter();_.type="highpass",_.frequency.value=380;let v=t.createBiquadFilter();v.type="lowpass",v.frequency.value=4200;let b=t.createGain();b.gain.value=0;let T=this.panner(0,0,-30,2,.5);S.connect(_),_.connect(v),v.connect(b),b.connect(T),T.connect(e),this.wfG=b,this.wfP=T,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([E,R])=>{let I=t.createStereoPanner();I.pan.value=E,I.connect(e);let L=this.noise(Math.random()*1.8,2.94),P=t.createBiquadFilter();P.type="highpass",P.frequency.value=R;let C=t.createGain();C.gain.value=0,L.connect(P),P.connect(C),C.connect(I),this.rgs.push([C,.07]);let N=this.noise(Math.random()*1.8,1.29),O=t.createBiquadFilter();O.type="bandpass",O.frequency.value=1500,O.Q.value=.6;let z=t.createGain();z.gain.value=0,N.connect(O),O.connect(z),z.connect(I),this.rgs.push([z,.035])}),this.rainLvl=0;let M=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let E=t.currentTime,R=t.createOscillator(),I=t.createGain(),L=this.panner(on(-4,4),on(0,1),on(-4,1),1.5,.7,!0);L.connect(e),R.frequency.setValueAtTime(on(1800,3200),E),R.frequency.exponentialRampToValueAtTime(on(900,1400),E+.05),I.gain.setValueAtTime(0,E),I.gain.linearRampToValueAtTime(.02*this.rainLvl,E+.004),I.gain.exponentialRampToValueAtTime(1e-4,E+.07),R.connect(I),I.connect(L),R.start(E),R.stop(E+.09)}setTimeout(M,on(70,260))}};M(),this.music(),this.padInit()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;i>.5&&this.cap("Lluvia suave"),this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let o=e.createOscillator(),a=e.createGain();o.type="sine",o.frequency.setValueAtTime((i?196:262)*s,n),o.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r,n+t)):(a.gain.setValueAtTime(r,n),a.gain.linearRampToValueAtTime(0,n+t)),o.connect(a),a.connect(this.bus),o.start(n),o.stop(n+t+.1)})},noise(i,t){let e=this.ctx;if(window.UX&&UX.pinkSrc){let s=UX.pinkSrc(e,t);return s.start(0,(i||0)*3),s}let n=e.createBufferSource();return n.buffer=this.nbuf,n.loop=!0,n.start(0,i||0),n},panner(i,t,e,n,s,r){let o=this.ctx.createPanner();return o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=n||2,o.rolloffFactor=s==null?.6:s,o.positionX?(o.positionX.value=i,o.positionY.value=t,o.positionZ.value=e):o.setPosition(i,t,e),o},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));r>.45&&this.cap("Cascada cercana"),this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,o=e||r.currentTime,a=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([l,c],u)=>{let h=r.createOscillator(),d=r.createGain();h.type=u?"sine":"triangle",h.frequency.value=i*l,d.gain.setValueAtTime(0,o),d.gain.linearRampToValueAtTime(t*c,o+.01),d.gain.exponentialRampToValueAtTime(1e-4,o+(u?1.1:2)),h.connect(d),d.connect(a),h.start(o),h.stop(o+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r),l=o.createOscillator(),c=o.createOscillator(),u=o.createGain(),h=o.createGain();l.type="sine",c.type="triangle",l.frequency.setValueAtTime(i*.96,t),l.frequency.exponentialRampToValueAtTime(i,t+.18),c.frequency.setValueAtTime(i*2*.96,t),c.frequency.exponentialRampToValueAtTime(i*2,t+.18);let d=o.createOscillator(),f=o.createGain();d.frequency.value=4.8,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(i*.012,t+e*.6),d.connect(f),f.connect(l.frequency),d.start(t),d.stop(t+e+.5),h.gain.value=.1,c.connect(h),h.connect(u),l.connect(u),u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(n,t+.35),u.gain.setValueAtTime(n*.85,t+e*.7),u.gain.linearRampToValueAtTime(0,t+e);let m=o.createBufferSource();m.buffer=this.nbuf,m.loop=!0;let x=o.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let g=o.createGain();g.gain.setValueAtTime(0,t),g.gain.linearRampToValueAtTime(n*.5,t+.2),g.gain.linearRampToValueAtTime(0,t+e),m.connect(x),x.connect(g),g.connect(a),m.start(t),m.stop(t+e+.1),u.connect(a),l.start(t),c.start(t),l.stop(t+e+.1),c.stop(t+e+.1)},drum(i,t,e){if(!this.ok()||window.UX&&UX.quiet)return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",t*=.42,s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=700,r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(t,i+.04),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(o),o.connect(this.bus),s.start(i),s.stop(i+1);let a=n.createBufferSource();a.buffer=this.nbuf;let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=500;let c=n.createGain();c.gain.setValueAtTime(t*.5,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.1),a.connect(l),l.connect(c),c.connect(this.bus),a.start(i,Math.random()),a.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([l,c,u])=>{let h=o.createOscillator(),d=o.createGain();h.type="sine",h.frequency.value=i*l;let f=(n?7:3)*u;d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(e*c,t+.005),d.gain.exponentialRampToValueAtTime(1e-4,t+f),h.connect(d),d.connect(a),h.start(t),h.stop(t+f+.1)})},next(i,t,e){this.idx=Hf(this.idx+Math.floor(Math.random()*4)-1,3,hs.length-1),this.bell(hs[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),o=t.currentTime;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+.4),n.connect(s),s.connect(r),r.connect(e),n.start(o,Math.random()),n.stop(o+.45)},bump(i=.6,t=0){if(Dr(i>.5?22:12),!this.ok())return;this.cap("Golpe suave de la canoa");let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),o=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),o.gain.setValueAtTime(.16*i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(o),o.connect(s),r.start(n),r.stop(n+.35)},discover(){if(Dr([14,70,14]),!this.ok())return;this.cap("Nota de linterna");let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(hs[t],.12,i+e*.2)),this.bell(hs[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([l,c],u)=>{let h=i.createOscillator(),d=i.createGain(),f=i.createOscillator(),m=i.createGain();h.type="sine",h.frequency.value=l,d.gain.value=c,f.frequency.value=.05+u*.03,m.gain.value=c*.6,f.connect(m),m.connect(d.gain),h.connect(d),d.connect(this.bus),h.start(),f.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let l=i.currentTime+.05,c=t%8;(t>>3)%4===3?c===0&&this.drum(l,.12,.9):c===0?(this.drum(l,.34,1),this.cap("Tambor lejano")):c===3?this.drum(l,.12,1.35):c===5?this.drum(l,.16,1.15):c===6&&Math.random()<.4&&this.drum(l,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let l=i.currentTime+.2,c=0;if(this.ok()){this.cap("Flauta shakuhachi");let u=2+Math.floor(Math.random()*3),h=on(-3,3);for(let d=0;d<u;d++){n=Hf(n+Math.floor(Math.random()*5)-2,0,7);let f=on(1.8,3.4);this.flute(hs[n],l,f,.06,h+on(-.3,.3),-2.5),l+=f*.88,c+=f*.88}}setTimeout(s,(c+on(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){this.cap("Campanillas");let l=i.currentTime+.05,c=hs[5+Math.floor(Math.random()*5)];this.bell(c,l,.045,!1,on(-5,5),on(-5,-1)),Math.random()<.5&&this.bell(hs[5+Math.floor(Math.random()*5)],l+on(.18,.4),.035,!1,on(-5,5),on(-5,-1))}setTimeout(r,on(3500,8e3))}};setTimeout(r,2500);let o=()=>{if(this.ctx){if(this.ok()){this.cap("Koto");let l=i.currentTime+.05,c=Math.floor(Math.random()*6),u=on(-4,4);for(let h=0;h<3;h++)this.pluck(hs[Hf(c+[0,2,1][h],0,9)],.06,l+h*.28,u,-2)}setTimeout(o,on(14e3,24e3))}};setTimeout(o,9e3);let a=()=>{this.ctx&&(this.ok()&&(this.cap("Campana de templo"),this.bell(146.83,i.currentTime+.05,.08,!0,on(-6,6),-8)),setTimeout(a,on(35e3,55e3)))};setTimeout(a,16e3)},padInit(){let i=this.ctx,t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=800,t.Q.value=.4;let e=i.createGain();e.gain.value=0,t.connect(e),e.connect(this.bus);let n=[];for(let r=0;r<4;r++){let o=i.createOscillator(),a=i.createOscillator(),l=i.createGain(),c=i.createGain(),u=i.createOscillator(),h=i.createGain();o.type="sine",a.type="triangle",a.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,u.frequency.value=.04+r*.017,h.gain.value=.25,u.connect(h),h.connect(l.gain),o.connect(l),a.connect(c),l.connect(t),c.connect(t),o.start(),a.start(),u.start(),n.push([o,a])}this.pad={f:t,pg:e,vs:n,ch:0,t0:0},this.mood={el:.5,lm:-1,sn:0},this.padChord(!0);let s=()=>{this.ctx&&(this.ok()&&this.padChord(),setTimeout(s,15e3+Math.random()*4e3))};setTimeout(s,9e3)},setMood(i,t,e){this.mood={el:i,lm:t,sn:e},this.pad&&this.ok()&&this.padFilter()},padFilter(){let i=this.mood,t=this.pad.f,e=this.ctx.currentTime,n=Math.max(0,Math.min(1,i.el*1.6)),s=420+n*900,r=.045+(1-n)*.012;i.lm===6&&(s+=500),i.lm===5&&(s-=120,r*=1.2),i.lm===2&&(r*=1.1),t.frequency.setTargetAtTime(s,e,2.5),this.pad.pg.gain.setTargetAtTime(this.muted?0:r*this.vol,e,2)},padChord(i){let t=this.ctx,e=this.mood,n=this.pad,s=t.currentTime,r=146.83,o=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,14,15]],a=[[0,7,12,15],[-4,3,7,12],[0,3,7,12],[-4,0,7,15]],l=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],c=e.el>.35?o:e.el>-.05?a:l;n.ch=(n.ch+1+(Math.random()<.3?1:0))%c.length;let u=c[n.ch].slice();(e.lm===3||e.lm===7)&&(u[3]=u[3]+12),e.lm===8&&(u=[u[0],u[0]+7,u[0]+14,u[0]+19]),e.lm===5&&(u=[-12,-5,0,7]),e.lm===6&&(u=u.map((d,f)=>f>1?d+12:d));let h=e.sn===3?-2:e.sn===2?-1:0;n.vs.forEach(([d,f],m)=>{let x=r*Math.pow(2,(u[m]+h)/12);d.frequency.setTargetAtTime(x,s,i?.01:3.2),f.frequency.setTargetAtTime(x*1.002,s,i?.01:3.2)}),this.padFilter()},boom(i){if(!this.ok()||window.UX&&UX.quiet)return;this.cap("Fuegos artificiales");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*5,-9),s=t.createOscillator(),r=t.createGain();s.frequency.setValueAtTime(95,e),s.frequency.exponentialRampToValueAtTime(38,e+.5),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.07,e+.03),r.gain.exponentialRampToValueAtTime(1e-4,e+.7),s.connect(r),r.connect(n),s.start(e),s.stop(e+.8);let o=t.createBufferSource();o.buffer=this.nbuf;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let l=t.createGain();l.gain.setValueAtTime(0,e+.5),l.gain.linearRampToValueAtTime(.035,e+.55),l.gain.exponentialRampToValueAtTime(1e-4,e+1.6),o.connect(a),a.connect(l),l.connect(n),o.start(e+.5,Math.random()),o.stop(e+1.7),Dr(8)},roar(){if(!this.ok()||window.UX&&UX.quiet)return;Dr([30,60,30,90,40]),this.cap("Rugido del drag\xF3n");let i=this.ctx,t=i.currentTime,e=this.dest(0,-12),n=i.createOscillator(),s=i.createOscillator(),r=i.createGain(),o=i.createBiquadFilter();n.type="sawtooth",s.type="square",n.frequency.setValueAtTime(70,t),n.frequency.linearRampToValueAtTime(110,t+.5),n.frequency.exponentialRampToValueAtTime(48,t+2.2),s.frequency.setValueAtTime(35,t),s.frequency.exponentialRampToValueAtTime(24,t+2.2),o.type="lowpass",o.frequency.setValueAtTime(260,t),o.frequency.linearRampToValueAtTime(900,t+.5),o.frequency.exponentialRampToValueAtTime(140,t+2.2),o.Q.value=4,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.1,t+.3),r.gain.setValueAtTime(.1,t+.9),r.gain.exponentialRampToValueAtTime(1e-4,t+2.4),n.connect(o),s.connect(o),o.connect(r),r.connect(e),n.start(t),s.start(t),n.stop(t+2.5),s.stop(t+2.5);let a=i.createBufferSource();a.buffer=this.nbuf;let l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=420,l.Q.value=1.2;let c=i.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.05,t+.3),c.gain.exponentialRampToValueAtTime(1e-4,t+1.8),a.connect(l),l.connect(c),c.connect(e),a.start(t,Math.random()),a.stop(t+2)},onCap:null,cap(i){if(!this.onCap)return;let t=performance.now(),e=this._cl||(this._cl={}),n={"Golpe suave de la canoa":1500,"Fuegos artificiales":1500,Salpicadura:9e3,"Lluvia suave":4e4,"Cascada cercana":3e4}[i]||9e3;e[i]&&t-e[i]<n||(e[i]=t,this.onCap(i))},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6*this.vol,this.ctx.currentTime,.05),this.pad&&this.padFilter()},quack(i){if(!this.ok())return;this.cap("Cuac de pato");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3);[[0,420,300],[.14,360,250]].forEach(([s,r,o])=>{let a=t.createOscillator(),l=t.createBiquadFilter(),c=t.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,e+s),a.frequency.exponentialRampToValueAtTime(o,e+s+.1),l.type="bandpass",l.frequency.value=1e3,l.Q.value=2.5,c.gain.setValueAtTime(0,e+s),c.gain.linearRampToValueAtTime(.03,e+s+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+s+.12),a.connect(l),l.connect(c),c.connect(n),a.start(e+s),a.stop(e+s+.14)})},flap(i){if(Dr([6,40,6,40,6]),!this.ok())return;this.cap("Aleteo de garza");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3),s=t.createBufferSource();s.buffer=this.nbuf;let r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.8;let o=t.createGain();o.gain.setValueAtTime(0,e);for(let a=0;a<5;a++)o.gain.linearRampToValueAtTime(.05,e+a*.16+.04),o.gain.linearRampToValueAtTime(.006,e+a*.16+.13);o.gain.linearRampToValueAtTime(0,e+.95),s.connect(r),r.connect(o),o.connect(n),s.start(e,Math.random()),s.stop(e+1)},setVol(i){this.vol=i,this.master&&!this.muted&&this.master.gain.setTargetAtTime(.6*i,this.ctx.currentTime,.1),this.pad&&this.padFilter()}};function YS(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ng={};function ZS(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=YS(i.length*97+i.charCodeAt(0)),r=(a,l)=>`rgba(${a},${a},${a},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let a=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,u=40+s()*160,h=s()*256,d=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=d,n.beginPath(),a?(n.moveTo(c,h),n.bezierCurveTo(c+4,h+u*.3,c-4,h+u*.7,c+2,h+u)):(n.moveTo(h,c),n.bezierCurveTo(h+u*.3,c+4,h+u*.7,c-4,h+u,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,u=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let h=1;h<4;h++)n.beginPath(),n.ellipse(c,u,h*3.5,h*2.2,a?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),a?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let a=4;for(let l=0;l<a;l++){let c=-(s()*40),u=256/a;for(;c<256;){let h=38+s()*50,d=190+s()*55|0;n.fillStyle=`rgb(${d},${d-3},${d+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*u+3,h-6,u-6,10):n.rect(c+3,l*u+3,h-6,u-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*u+7,h-24,3);for(let f=0;f<14;f++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(h-12),l*u+6+s()*(u-12),2,2);c+=h}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let a=6,l=256/a;for(let c=0;c<a;c++){let u=c%2*22;for(let h=-22;h<278;h+=44){let d=196+s()*50|0;n.fillStyle=`rgb(${d},${d-6},${d-8})`,n.beginPath(),n.moveTo(h+u+2,c*l),n.lineTo(h+u+42,c*l),n.lineTo(h+u+42,c*l+l*.55),n.quadraticCurveTo(h+u+22,c*l+l*1.15,h+u+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(h+u+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let a=0;a<60;a++){let l=s()*256,c=s()*256,u=10+s()*40,h=170+s()*70|0;n.fillStyle=`rgba(${h},${h-4},${h+10},.35)`,n.beginPath(),n.ellipse(l,c,u,u*.6,s()*3,0,7),n.fill()}for(let a=0;a<30;a++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let u=0;u<4;u++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let a=0;a<900;a++){let l=s()*256,c=s()*256,u=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=u+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let a=0;a<20;a++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let a=0;a<70;a++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let a=0;a<640;a++){let l=s()*256,c=s()*256,u=3.5+s()*8,h=s()>.45?215+s()*40|0:120+s()*60|0;for(let d of[-256,0,256])for(let f of[-256,0,256])l+d<-30||l+d>286||c+f<-30||c+f>286||(n.fillStyle=`rgba(${h},${h},${h-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+d,c+f,u,u*.62,s()*3.14,0,7),n.fill())}for(let a=0;a<260;a++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.3)",n.beginPath(),n.ellipse(l,c+5,5,2.4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-2,3.6,1.5,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(a,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,a,256,1.6);for(let a=0;a<9;a++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let a=0;a<5;a++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let a=-256;a<256*2;a+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(a+3,0),n.lineTo(a+3-256,256),n.stroke();for(let a=0;a<256;a+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let a=5,l=256/a;for(let c=0;c<a;c++){let u=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,u,256,l);for(let h=0;h<22;h++){let d=u+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,d),n.bezierCurveTo(80,d+3,160,d-3,256,d+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,u,256,2.5);for(let h of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(h,u+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let a=0;a<8;a++){let l=a*256/8;for(let c=-10;c<266;c+=14){let u=c+a%2*7+s()*3,h=18+s()*10,d=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${d},${d},${d-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(u,l),n.lineTo(u+s()*8-4,l+h),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let o=new yi(e);return o.wrapS=o.wrapT=js,o.colorSpace=An,o.anisotropy=8,o}var Ce=i=>ng[i]||(ng[i]=ZS(i)),Ae=(()=>{let i=new Uint8Array([104,138,172,206,236,255]),t=new Cs(i,6,1,Oo);return t.minFilter=t.magFilter=Sn,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function ig(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function sg(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function cr(){let i=null;try{i=localStorage.getItem("rio3d-season")}catch{}if(i!==null&&i!==""&&i!=="auto"&&+i>=0&&+i<4)return+i;let t=new Date().getMonth();return t===11||t<=1?3:t<=4?0:t<=7?1:2}var nh=[{name:"Primavera",pine:["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],brd:["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],gnd:"#b6dca3",gk:0,pet:{c:16762578,size:.42,fall:1,base:.12,gain:.88}},{name:"Verano",pine:["#5fa383","#6fb593","#559a7e","#7cc09d"],blos:["#9aa8e6","#8c9ae0","#b3a2e8","#7f93d8"],bblos:["#9aa8e6","#b3a2e8","#8c9ae0","#a7b6ee"],brd:["#6fae74","#5f9f6a","#7cbc7a","#4f9468","#88c27f","#6aa878","#58a070"],gnd:"#9fd08a",gk:.18,pet:{c:16777215,size:.3,fall:1,base:0,gain:0}},{name:"Oto\xF1o",pine:["#6fa386","#80b496","#659a80","#8cc09d"],blos:["#d94a32","#e8702e","#f2a33a","#c43d2c"],bblos:["#d9573a","#e8803a","#f0b43a","#c9462f"],brd:["#d9533a","#e8802f","#f0b43a","#c9462f","#b8532f","#e39a4a","#cf6a3a"],gnd:"#d3a45f",gk:.32,pet:{c:15237178,size:.55,fall:1.35,base:.3,gain:.7}},{name:"Invierno",pine:["#a9c4b8","#b9d3c6","#9dbaae","#c4dccf"],blos:["#f6e3ea","#f2d3de","#fbeff3","#efc9d8"],bblos:["#f6e3ea","#fbeff3","#efc9d8","#f2d3de"],brd:["#cfd8d6","#b9c4c2","#a8b4b3","#dfe6e4","#9fa9a8","#c4cdcb","#b0bbb9"],gnd:"#eef3f8",gk:.62,pet:{c:16777215,size:.28,fall:1.1,base:.55,gain:.45}}],qi={c:15773373,c2:15044520,blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],pet:16762578};var rg="rio-day",Wo=[["Hoy no tienes que llegar a ning\xFAn sitio.","You do not have to get anywhere today.","\u4ECA\u65E5\u306F\u3069\u3053\u304B\u3078\u7740\u304B\u306A\u304F\u3066\u5927\u4E08\u592B\u3002"],["El agua tambi\xE9n descansa mientras avanza.","Water also rests while it moves.","\u6C34\u306F\u6D41\u308C\u306A\u304C\u3089\u3082\u4F11\u3093\u3067\u3044\u307E\u3059\u3002"],["Respira hondo. Lo dem\xE1s puede esperar a ma\xF1ana.","Breathe deep. The rest can wait until tomorrow.","\u6DF1\u547C\u5438\u3092\u3002\u3042\u3068\u306F\u660E\u65E5\u3067\u3044\u3044\u3002"],["Algo peque\xF1o hecho con calma ya es suficiente.","One small thing done calmly is enough.","\u5C0F\u3055\u306A\u3053\u3068\u3092\u3086\u3063\u304F\u308A\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes no se apuran y aun as\xED llegan.","Clouds never hurry and still they arrive.","\u96F2\u306F\u6025\u304C\u306A\u3044\u306E\u306B\u3001\u3061\u3083\u3093\u3068\u7740\u304D\u307E\u3059\u3002"],["Mara dejar\xEDa una nota: \xABmira hacia arriba un momento\xBB.","Mara would leave a note: \u201Clook up for a moment\u201D.","\u30DE\u30E9\u306A\u3089\u30E1\u30E2\u3092\u6B8B\u3059\u3067\u3057\u3087\u3046\u3002\u300C\u5C11\u3057\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u300D\u3002"],["No hace falta entenderlo todo esta noche.","You do not need to understand everything tonight.","\u4ECA\u591C\u3001\u3059\u3079\u3066\u3092\u5206\u304B\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],["Una taza caliente y un r\xEDo quieto: buen plan.","A warm cup and a quiet river: a good plan.","\u6E29\u304B\u3044\u304A\u8336\u3068\u9759\u304B\u306A\u5DDD\u3002\u3044\u3044\u8A08\u753B\u3067\u3059\u3002"],["Lo que pesa hoy flota un poco m\xE1s ligero en el agua.","What weighs on you today floats lighter on the water.","\u4ECA\u65E5\u306E\u91CD\u3055\u3082\u3001\u6C34\u306E\u4E0A\u3067\u306F\u5C11\u3057\u8EFD\u304F\u306A\u308A\u307E\u3059\u3002"],["Est\xE1 bien ir despacio. As\xED se ven m\xE1s cosas.","It is fine to go slowly. You see more that way.","\u3086\u3063\u304F\u308A\u3067\u5927\u4E08\u592B\u3002\u305D\u306E\u307B\u3046\u304C\u591A\u304F\u304C\u898B\u3048\u307E\u3059\u3002"],["Cada farolillo es un \xABgracias\xBB que nadie pidi\xF3.","Every lantern is a \u201Cthank you\u201D nobody asked for.","\u3061\u3087\u3046\u3061\u3093\u306F\u3072\u3068\u3064\u305A\u3064\u3001\u983C\u307E\u308C\u306A\u3044\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3002"],["El r\xEDo no compara tu ritmo con el de nadie.","The river does not compare your pace with anyone\u2019s.","\u5DDD\u306F\u3042\u306A\u305F\u306E\u901F\u3055\u3092\u8AB0\u3068\u3082\u6BD4\u3079\u307E\u305B\u3093\u3002"],["Escucha un rato: siempre hay algo suave sonando.","Listen a while: something gentle is always playing.","\u3057\u3070\u3089\u304F\u8033\u3092\u3059\u307E\u305B\u3066\u3002\u3044\u3064\u3082\u3084\u3055\u3057\u3044\u97F3\u304C\u3057\u3066\u3044\u307E\u3059\u3002"],["Hoy cuenta aunque solo hayas flotado un poco.","Today counts even if you only floated a little.","\u5C11\u3057\u6D6E\u304B\u3093\u3060\u3060\u3051\u3067\u3082\u3001\u4ECA\u65E5\u306F\u3061\u3083\u3093\u3068\u4E00\u65E5\u3067\u3059\u3002"]],ih=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},og=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),sh=()=>{try{return JSON.parse(localStorage.getItem(rg)||"{}")||{}}catch{return{}}},ag=()=>sh().k!==ih(),lg=()=>sh().n||0,cg=()=>sh().log||[];var zf=i=>{let t=Math.sin((og()*131+i)*12.9898)*43758.5453;return t-Math.floor(t)};function ug(){let i=sh();if(i.k===ih())return null;let t=og()%Wo.length;i.k=ih(),i.n=(i.n||0)+1,i.log=(i.log||[]).concat([[ih(),t]]).slice(-12);try{localStorage.setItem(rg,JSON.stringify(i))}catch{}try{window.UX&&UX.say&&UX.say(UX.tr(Wo[t][0]))}catch{}try{window.UX&&UX.hap&&UX.hap([12,40,12])}catch{}return Wo[t]}function hg(i){i.add(Wo.map(t=>[t[0],t[1],t[2]])),i.add([["Farolillos del d\xEDa","Lanterns of the day","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093"],["Hoy ya recogiste el farolillo. Ma\xF1ana habr\xE1 otro.","You already picked up today\u2019s lantern. There will be another tomorrow.","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093\u306F\u3082\u3046\u62FE\u3044\u307E\u3057\u305F\u3002\u660E\u65E5\u307E\u305F\u6D41\u308C\u3066\u304D\u307E\u3059\u3002"],["A\xFAn no recoges ninguno","You have not picked up any yet","\u307E\u3060\u62FE\u3063\u3066\u3044\u307E\u305B\u3093"]])}var dg="rio-album",cl=[["koi","Carpa koi","Koi carp","\u9326\u9BC9","Se acercan despacio y nadan junto a la canoa, como si te conocieran.","They drift close and swim beside the canoe as if they knew you.","\u3086\u3063\u304F\u308A\u8FD1\u3065\u3044\u3066\u3001\u30AB\u30CC\u30FC\u306E\u305D\u3070\u3092\u6CF3\u304E\u307E\u3059\u3002\u307E\u308B\u3067\u77E5\u308A\u5408\u3044\u306E\u3088\u3046\u306B\u3002"],["pato","Pato del r\xEDo","River duck","\u5DDD\u306E\u30AB\u30E2","Decide acompa\xF1arte un rato y luego sigue su camino.","Chooses to keep you company for a while, then goes its own way.","\u3057\u3070\u3089\u304F\u5BC4\u308A\u305D\u3063\u3066\u304F\u308C\u3066\u3001\u3084\u304C\u3066\u81EA\u5206\u306E\u9053\u3078\u3002"],["garza","Garza blanca","White heron","\u30B7\u30E9\u30B5\u30AE","Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.","Fishes without hurry. Takes flight only when you pass very close.","\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u3068\u3066\u3082\u8FD1\u304F\u3092\u901A\u308B\u3068\u98DB\u3073\u7ACB\u3061\u307E\u3059\u3002"],["libelula","Lib\xE9lula","Dragonfly","\u30C8\u30F3\u30DC","Se posa un instante en la proa y se va, ligera como un pensamiento.","Lands on the bow for an instant and leaves, light as a thought.","\u8239\u9996\u306B\u305D\u3063\u3068\u6B62\u307E\u3063\u3066\u3001\u8003\u3048\u3054\u3068\u306E\u3088\u3046\u306B\u8EFD\u304F\u53BB\u308A\u307E\u3059\u3002"],["loto","Flor de loto","Lotus flower","\u84EE\u306E\u82B1","Abre al anochecer en los estanques tranquilos.","Opens at dusk in the quiet ponds.","\u9759\u304B\u306A\u6C60\u3067\u5915\u66AE\u308C\u306B\u958B\u304D\u307E\u3059\u3002"],["festival","Festival de linternas","Lantern festival","\u3061\u3087\u3046\u3061\u3093\u796D\u308A","La aldea enciende farolillos para quien llega de noche.","The village lights lanterns for whoever arrives at night.","\u591C\u306B\u7740\u3044\u305F\u4EBA\u306E\u305F\u3081\u306B\u3001\u6751\u304C\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3059\u3002"]],Xo=null,fg=()=>{if(Xo)return Xo;try{Xo=JSON.parse(localStorage.getItem(dg)||"{}")||{}}catch{Xo={}}return Xo};function kf(i){try{hg(i)}catch{}i.add(cl.map(t=>[t[1],t[2],t[3]])),i.add(cl.map(t=>[t[4],t[5],t[6]])),i.add([["Cuaderno del r\xEDo","River notebook","\u5DDD\u306E\u30CE\u30FC\u30C8"],["A\xFAn no lo has visto","You have not seen this yet","\u307E\u3060\u898B\u3066\u3044\u307E\u305B\u3093"],["Nueva anotaci\xF3n en el cuaderno del r\xEDo","New entry in the river notebook","\u5DDD\u306E\u30CE\u30FC\u30C8\u306B\u65B0\u3057\u3044\u8A18\u9332"],["Se llena solo, a su ritmo. No hay prisa.","It fills by itself, at its own pace. No rush.","\u3086\u3063\u304F\u308A\u3001\u3072\u3068\u308A\u3067\u306B\u57CB\u307E\u3063\u3066\u3044\u304D\u307E\u3059\u3002"],["Cerrar","Close","\u9589\u3058\u308B"],["Anotado: ","Noted: ","\u8A18\u9332: "],["anotaciones","entries","\u4EF6"]])}function Lr(i){let t=fg();if(t[i])return;t[i]=Date.now(),Xo=t;try{localStorage.setItem(dg,JSON.stringify(t))}catch{}let e=cl.find(n=>n[0]===i);try{window.UX&&UX.say&&UX.say(UX.tr("Anotado: ")+UX.tr(e[1]))}catch{}}function Gf(i){i=i||(window.UX?UX.tr:(a=>a));let t=fg(),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let n=document.createElement("div");n.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui";let s=document.createElement("h2");s.style.cssText="margin:0 0 4px;font:600 1.15rem system-ui",s.textContent=i("Cuaderno del r\xEDo");let r=document.createElement("div");r.style.cssText="opacity:.65;font-size:.8rem;margin-bottom:12px",r.textContent=i("Se llena solo, a su ritmo. No hay prisa."),n.append(s,r),cl.forEach(a=>{let l=!!t[a[0]],c=document.createElement("div");c.style.cssText="margin:0 0 12px;padding:10px 12px;border-radius:12px;background:"+(l?"rgba(255,233,184,.10)":"rgba(255,255,255,.04)")+";"+(l?"":"opacity:.55");let u=document.createElement("div");u.style.cssText="font-weight:600",u.textContent=(l?"\u2726 ":"\xB7 ")+(l?i(a[1]):"?");let h=document.createElement("div");h.style.cssText="font-size:.88em;opacity:.85",h.textContent=i(l?a[4]:"A\xFAn no lo has visto"),c.append(u,h),n.appendChild(c)});{let a=document.createElement("div");a.style.cssText="font-weight:600;margin:14px 0 6px",a.textContent=i("Farolillos del d\xEDa")+" \xB7 "+lg(),n.appendChild(a);let l=cg().slice().reverse();if(!l.length){let c=document.createElement("div");c.style.cssText="opacity:.55;font-size:.88em;margin-bottom:12px",c.textContent=i("A\xFAn no recoges ninguno"),n.appendChild(c)}l.forEach(c=>{let u=document.createElement("div");u.style.cssText="margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em",u.textContent="\u{1F3EE} "+i(Wo[c[1]][0]),n.appendChild(u)})}let o=document.createElement("button");o.type="button",o.textContent=i("Cerrar"),o.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",o.onclick=()=>e.remove(),n.appendChild(o),e.appendChild(n),e.onclick=a=>{a.target===e&&e.remove()},document.body.appendChild(e)}var pg="ux-pad",mg=()=>{try{return localStorage.getItem(pg)==="1"}catch{return!1}},Vf=(i,t,e)=>{try{return UX.tr(i)}catch{return i}},gg=mg;function xg(i){i.add([["Girar a la izquierda","Turn left","\u5DE6\u3078\u66F2\u304C\u308B"],["Girar a la derecha","Turn right","\u53F3\u3078\u66F2\u304C\u308B"],["Remar","Paddle","\u3053\u3050"],["Direcci\xF3n","Steering","\u64CD\u4F5C"],["Botones de direcci\xF3n: s\xED","Steering buttons: on","\u64CD\u4F5C\u30DC\u30BF\u30F3: \u30AA\u30F3"],["Botones de direcci\xF3n: no","Steering buttons: off","\u64CD\u4F5C\u30DC\u30BF\u30F3: \u30AA\u30D5"],["Botones de direcci\xF3n","Steering buttons","\u64CD\u4F5C\u30DC\u30BF\u30F3"],["Alternativa a arrastrar","An alternative to dragging","\u30C9\u30E9\u30C3\u30B0\u306E\u4EE3\u308F\u308A"]])}var bi=null,Yi=null,JS=[];function $S(){let i=18;try{if(Yi.anchor){let t=Yi.anchor().getBoundingClientRect();i=Math.max(10,innerHeight-t.bottom+12)}else i=18+(Yi.lift||0)}catch{}bi.style.bottom="calc("+Math.round(i)+"px + env(safe-area-inset-bottom))"}function Wf(){bi&&(bi.style.display=mg()&&Yi.started()?"flex":"none",$S())}function yg(i){try{localStorage.setItem(pg,i?"1":"0")}catch{}Wf(),JS.forEach(t=>t())}function vg(i){if(Yi=i,bi)return;bi=document.createElement("div"),bi.id="padBox",bi.setAttribute("role","group"),bi.setAttribute("aria-label",Vf("Direcci\xF3n")),bi.style.cssText="position:fixed;right:max(16px,env(safe-area-inset-right));bottom:18px;display:none;gap:14px;z-index:30;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none";let t=new Set,e=(r,o,a,l)=>{let c=document.createElement("button");c.type="button",c.textContent=o,c.setAttribute("aria-label",Vf(a)),c.title=Vf(a),c.style.cssText="width:64px;height:64px;border-radius:50%;border:1px solid #5a609a;background:rgba(43,45,82,.72);color:#fbf1e0;font:600 26px system-ui,sans-serif;padding:0;touch-action:none;-webkit-tap-highlight-color:transparent;cursor:pointer";let u=h=>{[r].concat(l||[]).forEach(d=>Yi.set(d,h)),c.style.background=h?"rgba(255,199,122,.45)":"rgba(43,45,82,.72)",h?t.add(c):t.delete(c)};return c.addEventListener("pointerdown",h=>{h.preventDefault();try{c.setPointerCapture(h.pointerId)}catch{}Yi.onPress&&Yi.onPress(),u(!0)}),["pointerup","pointercancel","lostpointercapture"].forEach(h=>c.addEventListener(h,()=>u(!1))),c.addEventListener("contextmenu",h=>h.preventDefault()),c.addEventListener("keydown",h=>{(h.code==="Space"||h.code==="Enter")&&(h.preventDefault(),u(!0))}),c.addEventListener("keyup",h=>{(h.code==="Space"||h.code==="Enter")&&u(!1)}),c.addEventListener("blur",()=>u(!1)),c._rel=()=>u(!1),c},n=e("l","\u25C0","Girar a la izquierda",Yi.steerPaddles?["p"]:null),s=e("r","\u25B6","Girar a la derecha",Yi.steerPaddles?["p"]:null);if(Yi.paddle){let r=e("p","\u224B","Remar");bi.append(n,r,s)}else bi.append(n,s);addEventListener("blur",()=>bi.querySelectorAll("button").forEach(r=>r._rel&&r._rel())),document.body.appendChild(bi),setInterval(Wf,400),Wf()}var KS=["es","en","ja"],fi="es";try{let i=localStorage.getItem("rio3d-lang");fi=KS.includes(i)?i:"es"}catch{}var Ds=()=>fi,_g=i=>{try{localStorage.setItem("rio3d-lang",i)}catch{}},jS=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Menos movimiento y destellos","Less motion and flashes","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B"],["Sin c\xE1maras largas, destellos ni balanceo fuerte","No long camera moves, flashes or strong sway","\u9577\u3044\u30AB\u30E1\u30E9\u79FB\u52D5\u30FB\u5149\u30FB\u5F37\u3044\u63FA\u308C\u3092\u306A\u304F\u3057\u307E\u3059"],["Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"],["Privacidad, datos y cr\xE9ditos","Privacy, data and credits","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30FB\u30C7\u30FC\u30BF\u30FB\u30AF\u30EC\u30B8\u30C3\u30C8"],["Abrir","Open","\u958B\u304F"],["Botones de direcci\xF3n","Steering buttons","\u64CD\u4F5C\u30DC\u30BF\u30F3"],["Alternativa a arrastrar","An alternative to dragging","\u30C9\u30E9\u30C3\u30B0\u306E\u4EE3\u308F\u308A"],["Girar a la izquierda","Turn left","\u5DE6\u3078\u66F2\u304C\u308B"],["Girar a la derecha","Turn right","\u53F3\u3078\u66F2\u304C\u308B"],["Remar","Paddle","\u3053\u3050"],["Direcci\xF3n","Steering","\u64CD\u4F5C"]],QS=new Map(jS.map(i=>[i[0],i])),tE=fi==="en"?1:2;var eE=[[/^Siguiente: (.+) en (\d+) m$/,i=>fi==="en"?`Next: ${ti(i[1])} in ${i[2]} m`:`\u6B21: ${ti(i[1])}\uFF08\u3042\u3068${i[2]} m\uFF09`],[/^Descubriste: (.+)$/,i=>fi==="en"?`You discovered: ${ti(i[1])}`:`\u767A\u898B\uFF1A${ti(i[1])}`],[/^Continuar \((\d+) m\)$/,i=>fi==="en"?`Continue (${i[1]} m)`:`\u7D9A\u3051\u308B\uFF08${i[1]} m\uFF09`],[/^Soltar linterna \((\d+)\)$/,i=>fi==="en"?`Release lantern (${i[1]})`:`\u30E9\u30F3\u30BF\u30F3\u3092\u6D41\u3059\uFF08${i[1]}\uFF09`],[/^Auto \(ahora ([\d.]+)×\)$/,i=>fi==="en"?`Auto (now ${i[1]}\xD7)`:`\u81EA\u52D5\uFF08\u73FE\u5728 ${i[1]}\xD7\uFF09`],[/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,i=>fi==="en"?`${i[1]}/${i[2]} places \xB7 ${ti(i[3])} \xB7 you reached ${i[4]} m \xB7 lanterns released: ${i[5]}`:`${i[1]}/${i[2]}\u304B\u6240 \xB7 ${ti(i[3])} \xB7 \u5230\u9054 ${i[4]} m \xB7 \u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[5]}`],[/^Linternas dejadas: (\d+)$/,i=>fi==="en"?`Lanterns left here: ${i[1]}`:`\u3053\u3053\u306B\u6B8B\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[1]}`],[/^Tu linterna del (.+)$/,i=>fi==="en"?`Your lantern from ${i[1]}`:`${i[1]}\u306E\u30E9\u30F3\u30BF\u30F3`]];function ti(i){if(fi==="es"||typeof i!="string")return i;let t=i.trim();if(!t)return i;let e=QS.get(t);if(e)return i.replace(t,e[tE]);for(let[n,s]of eE){let r=t.match(n);if(r)return i.replace(t,s(r))}return i}function rh(i){if(i.nodeType===3){let e=ti(i.nodeValue);e!==i.nodeValue&&(i.nodeValue=e);return}if(i.nodeType!==1||i.tagName==="SCRIPT"||i.tagName==="STYLE")return;i.placeholder&&(i.placeholder=ti(i.placeholder));let t=i.getAttribute&&i.getAttribute("aria-label");if(t){let e=ti(t);e!==t&&i.setAttribute("aria-label",e)}for(let e of i.childNodes)rh(e)}function Mg(){fi!=="es"&&(document.documentElement.lang=fi,rh(document.body),new MutationObserver(i=>{for(let t of i)t.type==="characterData"?rh(t.target):t.addedNodes.forEach(rh)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0}))}function bg(i){let{R:t,scene:e,cam:n,canvas:s,el:r,toast:o,P:a,LM:l,lmFound:c,lmPos:u,LMS:h,mkLantern:d,cx:f,hw:m,A:x,SEAS:g,seasonIdx:p}=i,y={photo:!1,want:null},S={get(Q,_t){try{let ae=localStorage.getItem(Q);return ae===null?_t:ae}catch{return _t}},set(Q,_t){try{return localStorage.setItem(Q,_t),!0}catch{return!1}},del(Q){try{localStorage.removeItem(Q)}catch{}}},_=g[p()],v=document.createElement("style");v.textContent=`
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
  `,document.head.appendChild(v);let b=Math.min(devicePixelRatio||1,2),T=[.7,.85,1,1.25,1.5],M=0;T.forEach((Q,_t)=>{Q<=b+.001&&(M=_t)});let E=S.get("rio3d-q","auto"),R=Math.min(M,3),I=M,L=1/60,P=0,C=5,N=0,O=0,z=0,$=0,B={hi:1.5,mid:1,lo:.7},G=()=>y.photo?Math.min(b,1.75):Math.min(E==="auto"?T[R]:B[E]||1,b);function K(){let Q=G();Math.abs(Q-$)>.01&&($=Q,t.setPixelRatio(Q),t.setSize(innerWidth,innerHeight,!1),St())}y.tick=function(Q){if(!(document.hidden||!i.started()||y.photo)&&(Q=Math.min(Q,.1),L+=(Q-L)*.04,P+=Q,!(P<1))){if(P=0,E!=="auto"){K();return}if(C>0){C--,$||K();return}L>.027?(O++,N=0):L<.0185?(N++,O=0):(N=0,O=0),O>=2&&R>0?(R--,O=0,C=6,z&&performance.now()-z<3e4&&(I=Math.min(I,R)),K()):N>=12&&R<Math.min(I,M)&&(R++,N=0,C=10,z=performance.now(),K())}};let ht=()=>E==="auto"?"Auto (ahora "+Math.min(T[R],b).toFixed(2)+"\xD7)":"Fija",It={none:{n:"Sin filtro"},nat:{n:"Natural",t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},warm:{n:"C\xE1lido",t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},mist:{n:"Bruma",t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},ink:{n:"Tinta",t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},moon:{n:"Noche azul",t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}},he=S.get("rio3d-filter","nat");It[he]||(he="nat");let te=S.get("rio3d-frame","1")==="1",Vt=null,nt=new Ar,at=new sr(-1,1,1,-1,0,1),At=new $e({depthTest:!1,depthWrite:!1,uniforms:{tex:{value:null},px:{value:new Ct},tint:{value:new D(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
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
    }`});nt.add(new W(new rn(2,2),At));let Ht=new Ct;function St(){Vt&&(t.getDrawingBufferSize(Ht),(Vt.width!==Ht.x||Vt.height!==Ht.y)&&Vt.setSize(Ht.x,Ht.y))}function ne(){if(Vt){St();return}t.getDrawingBufferSize(Ht);try{Vt=new Bn(Ht.x,Ht.y,{samples:4,type:Mi,depthBuffer:!0})}catch{Vt=new Bn(Ht.x,Ht.y,{samples:4,depthBuffer:!0})}}y.render=function(){let Q=It[he];if(y.photo&&Q.t){ne(),t.setRenderTarget(Vt),t.render(e,n),t.setRenderTarget(null);let _t=At.uniforms;_t.tex.value=Vt.texture,_t.px.value.set(1/Vt.width,1/Vt.height),_t.tint.value.set(Q.t[0],Q.t[1],Q.t[2]),_t.sat.value=Q.sat,_t.con.value=Q.con,_t.lift.value=Q.lift,_t.vig.value=Q.vig,_t.glow.value=Q.glow,_t.grain.value=Q.grain,_t.time.value=a.t%10,t.render(nt,at)}else t.render(e,n);if(y.want){let _t=y.want;y.want=null;try{_t()}catch(ae){console.error("want",ae&&ae.message)}}};let un=new D(0,1,0),re=new D(1,0,0),_e=new gn,Fe=new gn,ie=0,Le=0,Ee=1,Tn=0,ke=0,en=1;y.camAdjust=function(){Tn+=(ie-Tn)*.25,ke+=(Le-ke)*.25,en+=(Ee-en)*.25,(Math.abs(Tn)>1e-4||Math.abs(ke)>1e-4)&&(_e.setFromAxisAngle(un,Tn),Fe.setFromAxisAngle(re,ke),n.quaternion.premultiply(_e).multiply(Fe)),Math.abs(en-1)>.001&&(n.fov=Math.max(18,Math.min(110,n.fov*en)),n.updateProjectionMatrix())};let k=new Map,mn=0;s.addEventListener("pointerdown",Q=>{if(y.photo&&(s.setPointerCapture(Q.pointerId),k.set(Q.pointerId,[Q.clientX,Q.clientY]),k.size===2)){let _t=[...k.values()];mn=Math.hypot(_t[0][0]-_t[1][0],_t[0][1]-_t[1][1])}}),s.addEventListener("pointermove",Q=>{if(!y.photo||!k.has(Q.pointerId))return;let _t=k.get(Q.pointerId),ae=Q.clientX-_t[0],Ye=Q.clientY-_t[1];if(_t[0]=Q.clientX,_t[1]=Q.clientY,k.size===1){let Xt=.0045*Ee;ie-=ae*Xt,Le=Math.max(-1.05,Math.min(1.05,Le-Ye*Xt))}else if(k.size===2){let Xt=[...k.values()],ye=Math.hypot(Xt[0][0]-Xt[1][0],Xt[0][1]-Xt[1][1]);mn>0&&(Ee=Math.max(.35,Math.min(1.35,Ee*mn/ye))),mn=ye,Nt.value=Ee}});let Ne=Q=>{k.delete(Q.pointerId),mn=0};s.addEventListener("pointerup",Ne),s.addEventListener("pointercancel",Ne),s.addEventListener("wheel",Q=>{y.photo&&(Ee=Math.max(.35,Math.min(1.35,Ee*(1+Math.sign(Q.deltaY)*.06))),Nt.value=Ee,Q.preventDefault())},{passive:!1});let U=r("hud"),w=r("hr"),q=r("menu"),J=r("more"),et=(Q,_t,ae,Ye)=>{let Xt=document.createElement("button");return Xt.id=Q,Xt.type="button",Xt.textContent=_t,ae?q.insertBefore(Xt,Ye||null):w.insertBefore(Xt,Ye||r("cam")),Xt};J.onclick=Q=>{Q.stopPropagation(),q.hidden=!q.hidden,J.setAttribute("aria-expanded",String(!q.hidden))},document.addEventListener("click",Q=>{(!q.hidden&&!w.contains(Q.target)||!q.hidden&&q.contains(Q.target)&&Q.target.tagName==="BUTTON"&&Q.target.id!=="snd")&&(q.hidden=!0,J.setAttribute("aria-expanded","false"))});let dt=et("pauseB","Pausa");dt.dataset.pz="1";let gt=et("photoB","Foto"),it=et("diaryB","Diario",!0,r("snd")),rt=et("setB","Ajustes",!0,r("snd")),yt=et("restB","Reiniciar",!0),Rt=document.createElement("div");Rt.id="xph",Rt.className="xp",Rt.hidden=!0,Rt.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`,document.body.appendChild(Rt);let pt=document.createElement("button");pt.id="xclose",pt.textContent="Salir de foto",pt.hidden=!0,document.body.appendChild(pt);let ft=document.createElement("div");ft.id="xflash",document.body.appendChild(ft);let Nt=Rt.querySelector("#xzm"),kt=Rt.querySelector("#xhr"),ee=Rt.querySelector("#xfl"),V=Rt.querySelector("#xfm"),mt={};Object.keys(It).forEach(Q=>{let _t=document.createElement("button");_t.className="chip2",_t.textContent=It[Q].n,_t.onclick=()=>{he=Q,S.set("rio3d-filter",Q),st()},ee.appendChild(_t),mt[Q]=_t});function st(){for(let Q in mt)mt[Q].classList.toggle("on",Q===he);V.classList.toggle("on",te)}V.onclick=()=>{te=!te,S.set("rio3d-frame",te?"1":"0"),st()},Rt.querySelector("#xvw").onclick=()=>i.setCam(1-i.getCam()),Nt.oninput=()=>{Ee=+Nt.value},kt.oninput=()=>i.setTod(+kt.value);let vt=["hud","next","hint","toast","lantB"],Et=()=>[...document.body.children].filter(Q=>Q.tagName==="DIV"&&/pointer-events:none/.test(Q.style.cssText)&&Q.id!=="xflash");function lt(Q){Q!==y.photo&&(Q&&!i.started()||(y.photo=Q,document.body.classList.toggle("photo",Q),vt.forEach(_t=>{let ae=r(_t)||document.getElementById(_t);ae&&(ae.style.visibility=Q?"hidden":"")}),Et().forEach(_t=>_t.style.visibility=Q?"hidden":""),Rt.hidden=!Q,pt.hidden=!Q,Q?(ie=Le=0,Ee=1,Nt.value=1,kt.value=i.getTod(),st(),K(),o("Arrastra para mirar \xB7 pellizca para acercar")):(ie=Le=0,Ee=1,k.clear(),K(),eo())))}gt.onclick=()=>lt(!0),pt.onclick=()=>lt(!1),addEventListener("keydown",Q=>{Q.code==="KeyP"&&lt(!y.photo),Q.code==="Escape"&&y.photo&&lt(!1),Q.code==="Enter"&&y.photo&&Bt()});function Bt(){y.want=()=>{let Q=performance.now();!UX.calm()&&Q-(y._fl||-9999)>1500&&(y._fl=Q,ft.style.transition="none",ft.style.opacity=.22,requestAnimationFrame(()=>{ft.style.transition="opacity .6s",ft.style.opacity=0}));let _t=s.width,ae=s.height,Ye=s;if(te){let Xt=Math.round(_t*.03),ye=Math.round(_t*.065),le=document.createElement("canvas");le.width=_t+2*Xt,le.height=ae+Xt+ye;let Re=le.getContext("2d");Re.fillStyle="#f3ead6",Re.fillRect(0,0,le.width,le.height),Re.drawImage(s,Xt,Xt,_t,ae);let Ui=i.nearLM(a.dist||0),Mr=Math.round(ye*.4);Re.fillStyle="#5a4a3c",Re.font=Mr+"px Georgia,serif",Re.textBaseline="middle",Re.fillText("R\xEDo 3D"+(Ui?"  \xB7  "+ti(Ui):""),Xt,ae+Xt+ye*.52),Re.textAlign="right",Re.fillStyle="#8a7a68",Re.fillText(Math.round(a.dist||0)+" m  \xB7  "+ti(_.name)+"  \xB7  "+ti(i.todName(i.getTod())),le.width-Xt,ae+Xt+ye*.52),Ye=le}Ye.toBlob(Xt=>{if(!Xt)return;let ye=new File([Xt],"rio3d-"+Date.now()+".jpg",{type:"image/jpeg"}),le=()=>{let Re=document.createElement("a");Re.href=URL.createObjectURL(Xt),Re.download=ye.name,document.body.appendChild(Re),Re.click(),setTimeout(()=>{URL.revokeObjectURL(Re.href),Re.remove()},4e3)};navigator.canShare&&navigator.canShare({files:[ye]})?navigator.share({files:[ye],title:"R\xEDo 3D"}).catch(Re=>{Re&&Re.name!=="AbortError"&&le()}):le()},"image/jpeg",.92)}}Rt.querySelector("#xshut").onclick=Bt;let Lt=Q=>"rio3d-snap-"+Q,Be=new Set;for(let Q=0;Q<l.length;Q++)S.get(Lt(Q),null)&&Be.add(Q);y.hasSnap=Q=>Be.has(Q),y.snap=function(Q){y.want=()=>{let ae=Math.round(420*s.height/s.width),Ye=document.createElement("canvas");Ye.width=420,Ye.height=ae,Ye.getContext("2d").drawImage(s,0,0,420,ae);let Xt=Ye.toDataURL("image/jpeg",.72);S.set(Lt(Q),Xt)&&(Be.add(Q),S.set("rio3d-snapd-"+Q,new Date().toISOString().slice(0,10)))}},y.found=Q=>{S.get("rio3d-snapd-"+Q,null)||S.set("rio3d-snapd-"+Q,new Date().toISOString().slice(0,10))};let Pe=Q=>Q?new Date(Q+"T12:00:00").toLocaleDateString(Ds(),{day:"numeric",month:"short"}):"",Jn=Q=>{let _t=document.createElement("div");return _t.className="xp xm",_t.innerHTML='<div><button class="close">Cerrar</button>'+Q+"</div>",_t.onclick=ae=>{(ae.target===_t||ae.target.classList.contains("close"))&&_t.remove()},document.body.appendChild(_t),_t};it.onclick=()=>{let Q=mi(),_t=new Array(l.length).fill(0);Q.forEach(Xt=>{let ye=Math.round((Xt.s-240)/h);_t[i.lmType(ye)]++});let ae=+S.get("rio3d-pos","0"),Ye='<h2>Diario del r\xEDo</h2><p style="margin:0 0 12px;color:var(--muted)">'+c.size+"/"+l.length+" lugares \xB7 "+_.name+" \xB7 llegaste hasta "+ae+" m \xB7 linternas soltadas: "+Q.length+'</p><div class="xgrid">';l.forEach((Xt,ye)=>{let le=c.has(ye),Re=le&&S.get(Lt(ye),null);Ye+='<div class="xcard'+(le?"":" no")+'"><div class="im"'+(Re?' style="background-image:url('+Re+')"':"")+">"+(Re?"":le?"?":"\xB7")+'</div><div class="tx"><b>'+(le?Xt:"A\xFAn por descubrir")+"</b>"+(le?Re?Pe(S.get("rio3d-snapd-"+ye,"")):"Vuelve a pasar para fotografiarlo":"Sigue r\xEDo abajo")+(_t[ye]?"<br>Linternas dejadas: "+_t[ye]:"")+"</div></div>"}),Jn(Ye+"</div>")};let mi=()=>{try{return JSON.parse(S.get("rio3d-left","[]"))||[]}catch{return[]}},_s=mi(),Qr=new Map,da=[],to=new Set,Gs=document.createElement("button");Gs.id="lantB",document.body.appendChild(Gs),Gs.hidden=!0;function eo(){let Q=i.getCount();Gs.hidden=!(i.started()&&Q>0&&!y.photo),Gs.textContent="Soltar linterna ("+Q+")"}Gs.onclick=()=>{if(i.getCount()<=0||y.photo)return;let Q=-a.pz+7,_t=Math.max(-m(Q)+4,Math.min(m(Q)-4,a.px+Math.sin(a.psi)*7-f(Q)));_s.push({s:Math.round(Q*10)/10,e:Math.round(_t*10)/10,t:Date.now()}),_s.length>80&&_s.shift(),S.set("rio3d-left",JSON.stringify(_s)),i.setCount(i.getCount()-1);try{x.plop(0)}catch{}i.spawnRipple(f(Q)+_t,-Q),eo(),_s.length===1&&o("Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.")},y.update=function(Q,_t){if(!i.started())return;Vl(Q),((y.update.n=(y.update.n||0)+1)&15)===0&&eo();let ae=a.t,Ye=i.glowK();for(let[Xt,ye]of Qr){let le=_s[Xt];(!le||le.s<_t-70||le.s>_t+280)&&(e.remove(ye),da.push(ye),Qr.delete(Xt))}_s.forEach((Xt,ye)=>{if(Xt.s<_t-70||Xt.s>_t+280)return;let le=Qr.get(ye);le||(le=da.pop()||d(),le.scale.setScalar(1.25),le.userData.body.material=le.userData.body.material.clone(),le.userData.body.material.color.set(16773328),e.add(le),Qr.set(ye,le)),le.position.set(f(Xt.s)+Xt.e+Math.sin(ae*.3+ye)*.5,Math.sin(ae*1.1+ye)*.04,-Xt.s),le.rotation.z=Math.sin(ae*.8+ye*2)*.08,le.userData.glow.material.opacity=(.6+.3*Ye)*(.85+.15*Math.sin(ae*3+ye)),le.userData.refl.material.opacity=(.3+.3*Ye)*(.9+.1*Math.sin(ae*2+ye));let Re=le.position.x-a.px,Ui=le.position.z-a.pz;Re*Re+Ui*Ui<196&&!to.has(ye)&&!y.photo&&(to.add(ye),o("Tu linterna del "+Pe(new Date(Xt.t).toISOString().slice(0,10))))})},yt.onclick=()=>{let Q=Jn('<h2>\xBFVolver al inicio del r\xEDo?</h2><p style="color:var(--muted);margin:0 0 14px">Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.</p><div class="row"><button class="q" id="xno">Cancelar</button><button class="q" id="xyes" style="background:#ffc77a;color:#3b2a1a">Reiniciar recorrido</button></div>');Q.querySelector("#xno").onclick=()=>Q.remove(),Q.querySelector("#xyes").onclick=()=>{Q.remove(),i.restart()}},rt.onclick=()=>{let Q=Jn(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Autom\xE1tica</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (m\xE1s fluida)</option></select></div>
    <div class="row"><span>Volumen</span><input type="range" id="xv" min="0" max="1" step=".05" style="width:55%;accent-color:#ffc77a"></div>
    <div class="row"><span>Estaci\xF3n<br><small style="color:var(--muted)">Cambiarla recarga el r\xEDo</small></span><select id="xs"><option value="auto">Seg\xFAn la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Oto\xF1o</option><option value="3">Invierno</option></select></div>
    <div class="row"><span>Idioma</span><select id="xl"><option value="es">Espa\xF1ol</option><option value="en">English</option><option value="ja">\u65E5\u672C\u8A9E</option></select></div>
    <div class="row"><span>Subt\xEDtulos de ambiente<br><small style="color:var(--muted)">Describe los sonidos con texto</small></span><select id="xsub"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Vibraci\xF3n suave<br><small style="color:var(--muted)">Si tu dispositivo la permite</small></span><select id="xhp"><option value="1">S\xED</option><option value="0">No</option></select></div>
    <div class="row"><span>Modo una mano<br><small style="color:var(--muted)">Botones al alcance del pulgar</small></span><select id="xh"><option value="0">No</option><option value="r">Derecha</option><option value="l">Izquierda</option></select></div>
    <div class="row"><span>Menos movimiento y destellos<br><small style="color:var(--muted)">Sin c\xE1maras largas, destellos ni balanceo fuerte</small></span><select id="xcalm"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Botones de direcci\xF3n<br><small style="color:var(--muted)">Alternativa a arrastrar</small></span><select id="xpad"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Acerca de<br><small style="color:var(--muted)">Privacidad, datos y cr\xE9ditos</small></span><button id="xabout" type="button">Abrir</button></div>
    <div class="row"><span>Cuaderno del r\xEDo<br><small style="color:var(--muted)">Lo que has visto en el camino</small></span><button id="xalb" type="button">Abrir</button></div>
    <div class="row"><span>Tono suave<br><small style="color:var(--muted)">Suaviza los sonidos agudos</small></span><select id="xsoft"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Dormir<br><small style="color:var(--muted)">Baja el sonido y la luz poco a poco</small></span><select id="xsl"><option value="0">No</option><option value="15">15 min</option><option value="30">30 min</option><option value="45">45 min</option></select></div>`),_t=Q.querySelector("#xq"),ae=Q.querySelector("#xs"),Ye=Q.querySelector("#xql"),Xt=Q.querySelector("#xv");Xt.value=x.vol,Xt.oninput=()=>{x.setVol(+Xt.value),S.set("rio3d-vol",Xt.value)},_t.value=E,ae.value=S.get("rio3d-season","auto"),Ye.textContent=ht(),_t.onchange=()=>{E=_t.value,S.set("rio3d-q",E),C=3,K(),Ye.textContent=ht()},ae.onchange=()=>{S.set("rio3d-season",ae.value);try{i.savePos()}catch{}location.reload()};let ye=Q.querySelector("#xl");ye.value=Ds(),ye.onchange=()=>{_g(ye.value);try{i.savePos()}catch{}location.reload()};let le=Q.querySelector("#xsub");le.value=S.get("rio3d-subs","0"),le.onchange=()=>S.set("rio3d-subs",le.value);let Re=Q.querySelector("#xhp");Re.value=S.get("rio3d-hap","1"),Re.onchange=()=>S.set("rio3d-hap",Re.value);let Ui=Q.querySelector("#xsoft");Ui.value=UX.api.soft()?"1":"0",Ui.onchange=()=>UX.api.setSoft(Ui.value==="1"),Q.querySelector("#xalb").onclick=()=>Gf(UX.tr),Q.querySelector("#xabout").onclick=()=>UX.about();let Mr=Q.querySelector("#xpad");Mr.value=gg()?"1":"0",Mr.onchange=()=>yg(Mr.value==="1");let no=Q.querySelector("#xcalm");no.value=UX.calm()?"1":"0",no.onchange=()=>UX.setCalm(no.value==="1");let A=Q.querySelector("#xsl");A.value=String(UX.api.sleepMin()),A.onchange=()=>UX.api.sleep(+A.value);let H=Q.querySelector("#xh");H.value=S.get("rio3d-hand","0"),H.onchange=()=>{S.set("rio3d-hand",H.value),document.body.classList.remove("hand-r","hand-l"),H.value!=="0"&&document.body.classList.add("hand-"+H.value)}};{let Q=parseFloat(S.get("rio3d-vol","1"));Q>=0&&Q<=1&&(x.vol=Q)}let Ti=S.get("rio3d-ob","0")==="1"?9:0,zn=0,Ki=r("hint");function Vl(Q){Ti>=9||!i.started()||(zn+=Q,Ti===0&&zn>1?(Ki.hidden=!1,Ki.style.opacity=1,Ki.textContent="Mant\xE9n presionado y desliza a los lados para dirigir la canoa",Ti=1,zn=0):Ti===1&&(Math.abs(a.steer)>.35||zn>40)?(Ti=2,zn=0,Ki.textContent="Las luces sobre el agua son linternas: pasa cerca para recogerlas"):Ti===2&&(i.getCount()>0||zn>60)?(Ti=3,zn=0,Ki.textContent="Con Foto puedes guardar un momento; con Diario ves tus lugares"):Ti===3&&zn>10&&(Ki.style.opacity=0,Ti=9,S.set("rio3d-ob","1")))}return At.uniforms.time.value=0,K(),st(),addEventListener("resize",()=>setTimeout(St,50)),y}(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},t=document.createElement("style");t.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(t);let e=document.createElement("div");e.id="pz",e.hidden=!0,e.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(e);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,e.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,o){if(r=r.filter(Boolean),!s||!r.length)return;let a=document.createElement("style");a.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(a);let l=document.createElement("button");l.type="button",l.textContent=o||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(u=>{u.removeAttribute("style"),c.appendChild(u)}),s.appendChild(l),document.body.appendChild(c),l.onclick=u=>{if(u.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let h=l.getBoundingClientRect();c.style.top=h.bottom+6+"px",c.style.right=Math.max(8,innerWidth-h.right)+"px"}},document.addEventListener("click",u=>{!c.hidden&&!c.contains(u.target)&&u.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},e.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();var j=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Ie=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),me=(i,t,e)=>{let n=Ie((e-i)/(t-i));return n*n*(3-2*n)},ur=(i,t,e)=>i+(t-i)*e;function je(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=j(e,n),c=j(e+1,n),u=j(e,n+1),h=j(e+1,n+1);return l+(c-l)*o+(u-l)*a+(l-c-u+h)*o*a}var ze=i=>document.getElementById(i),Xf=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Nr=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=6.2832;for(;e<-Math.PI;)e+=6.2832;return e};var ul=11,nE=[0,1,2,4,5,6,7,8,9,3,10],Xe=i=>nE[(i%ul+ul)%ul],iE=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if(Xe(n)===6){let s=240+n*260+j(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},qt=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+iE(i),ge=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),_n=i=>Math.atan((qt(i+1)-qt(i-1))/2);function ei(i,t){let e=Math.abs(i-qt(t))-ge(t);if(e<0)return-1.5+1.7*me(-5,0,e);let n=je(i*.018,t*.018)*12+je(i*.055,t*.055)*4;return sE(i,t,.2+.6*me(0,4,e)+n*me(5,60,e)+Math.min(e,160)*.1*me(30,100,e))}var Kt={PO:66,PH:7,X:66,ZF:44,ZB:-52,MZ0:50,MZ1:60},Sg=new Map;function qf(i){let t=Sg.get(i);if(!t){let e=Qe(i),n=_n(e);t={k:i,s0:e,a:n,x0:qt(e),hw0:ge(e),side:j(i,9)>.5?1:-1,ca:Math.cos(n),sa:Math.sin(n)},Sg.set(i,t)}return t}function hl(i,t,e){let n=t-i.x0,s=i.s0-e,r=n*i.ca+s*i.sa,o=-n*i.sa+s*i.ca;return[i.side*o,-i.side*r+i.hw0+Kt.PO]}function Ur(i){let t=Math.round((i-240)/260);for(let e=t-1;e<=t+1;e++)if(Xe(e)===10)return qf(e);return null}function sE(i,t,e){let n=Ur(t);if(!n||Math.abs(t-n.s0)>200)return e;let[s,r]=hl(n,i,t);if(r<-130||r>95||Math.abs(s)>150)return e;let o=Math.max(Math.abs(s)-Kt.X,r-Kt.ZF,Kt.ZB-r),a=1-me(4,70,o);a>0&&(e=e*(1-a)+Math.min(e,3.2)*a);let l=1-me(0,2,o+1.5);l>0&&(e=e*(1-l)+Kt.PH*l);let c=Math.min(Math.max(Math.abs(s)-62,Math.abs(r-53)-7),Math.max(Math.abs(s+50)-6,Math.abs(r-65)-10)),u=1-me(-.2,2.2,c);return u>0&&(e=e*(1-u)-1.6*u),e}function Eg(i,t){let e=Ur(t);if(!e||Math.abs(t-e.s0)>130)return 0;let[n,s]=hl(e,i,t);return 1-me(0,2,Math.max(Math.abs(n)-Kt.X,s-Kt.ZF,Kt.ZB-s)+1.5)}function Yf(i,t){let e=Ur(t);if(!e||Math.abs(t-e.s0)>130)return!1;let[n,s]=hl(e,i,t);return Math.abs(n)<80&&s>-66&&s<72}function qo(i){let t=Qe(i),e=Qe(i-1);return e-80>=t-360?e-80:e+80}var ni=150,ii=120,ds=2.6,si=3,dl=8,Hn=nh[cr()],Li=260,Qe=i=>240+i*Li+j(i,5)*50,Fr=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++){let s=Xe(n);s===3?t=Math.max(t,1-me(40,170,Math.abs(Qe(n)-i))):s===10&&(t=Math.max(t,.9*(1-me(55,230,Math.abs(Qe(n)-i)))))}return t},Yo=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)Xe(n)===8&&(t=Math.max(t,1-me(70,190,Math.abs(Qe(n)-i))));return t},Zf=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=Xe(n);if((s===5||s===7)&&Math.abs(Qe(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},Zo=i=>me(.4,.55,je(i*.0022+31,5)*.6+je(i*.0053+8,2)*.4),oh=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+j(n,7)*220,r=120+j(n,8)*70,o=(i-s)/r;t=Math.max(t,Math.exp(-o*o))}return t};var ot={tod:.5,glowK:.3,started:!1,camMode:0,camK:0,count:0,scareT:0,cine:null,cineW:0,savedS:0,X:null},F={px:qt(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};F.pz=-30;F.px=qt(30);F.psi=_n(30);function ah(i){F.pz=-i,F.px=qt(i),F.psi=_n(i),F.dist=i}function lh(){ot.cine&&ot.cine.t>1.5&&(ot.cine.t=Math.max(ot.cine.t,ot.cine.dur-2.4))}var Ls=document.getElementById("c"),qn=new ju({canvas:Ls,antialias:!0,powerPreference:"high-performance"});qn.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var xt=new Ar;xt.fog=new Da(13421772,22,250);var dn=new vn(68,1,.05,900);function Jf(){let i=innerWidth,t=innerHeight;qn.setSize(i,t,!1),dn.aspect=i/t,dn.fov=i/t<1?82:68,dn.updateProjectionMatrix()}addEventListener("resize",Jf);addEventListener("orientationchange",()=>setTimeout(Jf,250));Jf();document.addEventListener("visibilitychange",()=>{try{$t.ctx&&(document.hidden?$t.ctx.suspend():$t.on&&!PZ.on&&$t.ctx.resume())}catch{}});var Br=new Wa(16777215,9083528,1.2);xt.add(Br);var Ns=new Za(16777215,1);xt.add(Ns);var ri=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new yi(i)})(),oi=(i,t)=>{let e=new Rs(new os({map:ri,color:i,blending:Wn,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},Tt=(i,t)=>new pe(Object.assign({gradientMap:Ae,color:i},t||{}));function wg(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function rE(i,t,e){let n=new Float32Array(t*t);for(let r=0;r<n.length;r++)n[r]=e();let s=new Float32Array(i*i);for(let r=0;r<i;r++){let o=r/i*t,a=Math.floor(o),l=o-a,c=l*l*(3-2*l),u=a%t*t,h=(a+1)%t*t;for(let d=0;d<i;d++){let f=d/i*t,m=Math.floor(f),x=f-m,g=x*x*(3-2*x),p=m%t,y=(m+1)%t,S=n[u+p],_=n[u+y],v=n[h+p],b=n[h+y];s[r*i+d]=(S+(_-S)*g)*(1-c)+(v+(b-v)*g)*c}}return s}function $f(i,t,e,n){let s=wg(n),r=new Float32Array(i*i),o=1,a=0;for(let u=0;u<e;u++){let h=rE(i,t<<u,s);for(let d=0;d<r.length;d++)r[d]+=h[d]*o;a+=o,o*=.5}let l=1e9,c=-1e9;for(let u=0;u<r.length;u++)r[u]/=a,r[u]<l&&(l=r[u]),r[u]>c&&(c=r[u]);for(let u=0;u<r.length;u++)r[u]=(r[u]-l)/(c-l);return r}function oE(){let t=$f(256,4,5,11),e=$f(256,8,4,23),n=$f(256,6,4,37),s=new Uint8Array(256*256*4);for(let o=0;o<256*256;o++)s[o*4]=t[o]*255,s[o*4+1]=e[o]*255,s[o*4+2]=n[o]*255,s[o*4+3]=255;let r=new Cs(s,256,256,di);return r.wrapS=r.wrapT=js,r.magFilter=Rn,r.minFilter=ls,r.generateMipmaps=!0,r.needsUpdate=!0,r}var aE=(()=>{let i=Math.random;Math.random=wg(7);try{return oE()}finally{Math.random=i}})();var fl=()=>new ct,xn={top:{value:fl()},hor:{value:fl()},hz:{value:fl()},sunDir:{value:new D(0,1,0)},moonDir:{value:new D(0,1,0)},sunCol:{value:fl()},lightDir:{value:new D(0,1,0)},lightCol:{value:fl()},sunI:{value:1},moonI:{value:0},gI:{value:0},night:{value:0},cover:{value:.25},mist:{value:0},skyT:{value:0},cloudTex:{value:aE}},ch=`
uniform vec3 top,hor,hz,sunDir,moonDir,sunCol,lightDir,lightCol;
uniform float sunI,moonI,gI,night,cover,mist,skyT;
uniform sampler2D cloudTex;
float cdens(vec2 uv,float det){float d=texture2D(cloudTex,uv*.35).r*(1.-det);if(det>0.)d+=texture2D(cloudTex,uv*1.1+.37).g*det;return d;}
/* degradado + resplandor del crep\xFAsculo hacia el sol y cintur\xF3n rosado en el lado opuesto */
vec3 skyBase(vec3 d){
  float h=clamp(d.y,0.,1.);
  vec3 c=mix(hor,top,pow(h,.5));
  vec2 sa=normalize(sunDir.xz),da=normalize(d.xz+vec2(1e-5));
  float az=dot(sa,da);
  c+=hz*gI*(pow(max(az,0.),3.)*exp(-h*5.)*1.15+exp(-h*13.)*.22);
  c+=mix(hor,vec3(1.,.72,.86),.5)*gI*pow(max(-az,0.),2.)*exp(-h*8.)*.28;
  return c;
}
/* nubes: rgb = color, a = cobertura. Iluminadas por el sol (o la luna) con borde plateado hacia la luz.
   soft: bordes m\xE1s difusos \xB7 det: peso de la capa de detalle fino (el agua usa bordes suaves y sin detalle) */
vec4 cloudL(vec3 d,float soft,float det){
  float up=smoothstep(.03,.26,d.y);
  if(up<=0.)return vec4(0.);
  vec2 uv=d.xz/(d.y+.32)*.6+vec2(skyT*.0035,skyT*.0014);
  float dn=cdens(uv,det);
  float thr=mix(.60,.30,cover);
  float a=smoothstep(thr,thr+.17+soft,dn)*up;
  if(a<=.002)return vec4(0.);
  float dl=cdens(uv+normalize(lightDir.xz+vec2(1e-5))*.05,det);
  float lit=clamp(.62-(dl-dn)*7.,0.,1.);
  float core=smoothstep(thr+.1,thr+.42+soft,dn);
  vec3 amb=mix(top,hor,.5)*.6+vec3(.30,.30,.34)*(1.-night*.75);
  vec3 col=amb*(1.-core*.25)+lightCol*lit*(1.-core*.35)*.85;
  col+=lightCol*pow(max(dot(d,lightDir),0.),6.)*.38*(1.-core*.6);
  col=mix(col,hor*1.05,mist*.45);
  return vec4(col,a*(1.-mist*.35));
}
/* sol, luna y V\xEDa L\xE1ctea; cl = cobertura de nubes en ese punto (las nubes tapan los discos) */
vec3 celestial(vec3 d,float cl){
  vec3 c=vec3(0.);
  float sd=max(dot(d,sunDir),0.);
  c+=sunCol*(pow(sd,18.)*.40+pow(sd,200.)*.55)*sunI*(1.-cl*.5);
  c+=vec3(1.,.96,.86)*smoothstep(.9986,.9991,sd)*sunI*1.5*(1.-cl);
  float md=dot(d,moonDir);
  if(md>0.){
    vec3 mu=normalize(cross(moonDir,vec3(0.,1.,0.))),mv=cross(mu,moonDir);
    vec2 mp=vec2(dot(d,mu),dot(d,mv))/.052;float mr=length(mp);
    float maria=texture2D(cloudTex,mp*.22+.5).b;
    vec3 mc=mix(vec3(.90,.92,.99),vec3(.62,.68,.88),smoothstep(.42,.62,maria)*.6)*(1.-.22*mr*mr);
    c+=mc*smoothstep(1.,.86,mr)*moonI*(1.-cl)*.95;
    c+=vec3(.55,.62,.95)*(pow(md,40.)*.26+pow(md,400.)*.32)*moonI*(1.-cl*.6);
  }
  if(night>.02){
    vec3 mwN=normalize(vec3(.55,.35,.76));float bw=dot(d,mwN);
    float dust=texture2D(cloudTex,vec2(atan(d.z,d.x)*.4775,bw*1.7)).b;
    c+=vec3(.62,.60,.95)*exp(-bw*bw*14.)*(.35+.9*dust*dust)*.13*night*smoothstep(.04,.35,d.y)*(1.-cl);
  }
  return c;
}
/* lo que ve el agua al reflejar el cielo: degradado, nubes y un camino de luz amplio y suave (sin destellos) */
vec3 skyRefl(vec3 d){
  d.y=max(d.y,.02);
  vec3 c=skyBase(d);
  vec4 cl=cloudL(d,.2,0.);c=mix(c,cl.rgb,cl.a*.7);
  float sd=max(dot(d,sunDir),0.),md=max(dot(d,moonDir),0.);
  c+=sunCol*(pow(sd,60.)*.5+pow(sd,16.)*.18)*sunI*(1.-cl.a*.7);
  c+=vec3(.55,.62,.95)*(pow(md,90.)*.4+pow(md,20.)*.12)*moonI*(1.-cl.a*.6);
  return c;
}`;var hr=new W(new Jt(700,24,16),new $e({side:In,depthWrite:!1,fog:!1,uniforms:{...xn},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;${ch}
  void main(){vec3 d=normalize(vP);
   vec3 c=skyBase(d);
   vec4 cl=cloudL(d,0.,.3);
   c+=celestial(d,cl.a);
   c=mix(c,cl.rgb,cl.a);
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
   ${Vo}
}`}));hr.renderOrder=-10;xt.add(hr);var Qf=oi(16769712,140),tp=oi(14673663,70);xt.add(Qf,tp);var fh=new jt,Rg=new Float32Array(450*3),Cg=new Float32Array(450*2),Ig=new Float32Array(450*3),Kf=i=>{let t=Math.sin(i*12.9898+78.233)*43758.5453;return t-Math.floor(t)};for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);Rg.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3);let s=Kf(i+.5),r=s>.93?1:0;Cg.set([1.8+s*1.4+r*1.1,.35+.65*Kf(i+101.7)],i*2);let o=Kf(i+203.1);Ig.set([.86+.14*o,.9+.1*(1-o),1],i*3)}fh.setAttribute("position",new Gt(Rg,3));fh.setAttribute("ab",new Gt(Cg,2));fh.setAttribute("tc",new Gt(Ig,3));var dh={...xn,pr:{value:1},time:{value:0},calm:{value:0}},Pg=new Ci(fh,new $e({transparent:!0,depthWrite:!1,fog:!1,uniforms:dh,vertexShader:`attribute vec2 ab;attribute vec3 tc;uniform float pr,time,calm;varying vec3 vC;varying float vA;${ch}
  void main(){vec3 d=normalize(position);
   float h=smoothstep(0.,.22,d.y);
   float tw=1.-(1.-calm)*.18*(.5+.5*sin(time*(.35+ab.y*.5)+ab.x*40.));
   float occ=1.-cloudL(d,0.,.3).a;
   vA=clamp(night*1.1,0.,1.)*h*occ*(.8+.2*ab.y)*tw*(1.-moonI*pow(max(dot(d,moonDir),0.),30.));
   vC=tc;gl_PointSize=ab.x*pr;
   gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vC;varying float vA;
  void main(){float r=length(gl_PointCoord-.5)*2.;float a=smoothstep(1.,.15,r)*vA;if(a<.004)discard;gl_FragColor=vec4(vC,a);
#include <colorspace_fragment>
}`}));xt.add(Pg);var Zi=(i,t,e,n,s,r,o,a,l,c)=>({t:i,top:new ct(t),hor:new ct(e),fog:new ct(n),sun:new ct(s),hi:r,si:o,night:a,hg:new ct(l),hz:new ct(c)}),uh=[Zi(0,"#1d2358","#4f4a88","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70","#6a5aa8"),Zi(.06,"#2d3a7c","#9a7fb0","#8c80a8","#b9b8ff",.8,.3,.8,"#56627a","#b98ac0"),Zi(.115,"#8fa4d8","#f8c4b8","#efcfcf","#ffd2a8",1.35,.52,.3,"#c4ccc0","#ff9f7a"),Zi(.2,"#86b2e2","#e9dcd6","#e2dcdc","#ffe8c4",1.7,1,.04,"#c8d2c0","#ffcfa0"),Zi(.37,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0","#fff0d0"),Zi(.52,"#82b0dc","#e8e6d8","#dfe2d6","#fff0cc",1.8,1.15,0,"#c8d0b8","#ffe0b0"),Zi(.595,"#8e88c8","#fbc79e","#ecc3b6","#ffbf8a",1.5,.85,.06,"#c8c4c0","#ffb070"),Zi(.645,"#5f55a8","#f09a96","#c79aa8","#ff9b86",1.15,.5,.3,"#8a8aa0","#ff7f7a"),Zi(.7,"#2c3278","#8a66a6","#6f66a0","#a6b0ff",.85,.34,.7,"#58607e","#a874b8"),Zi(.77,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70","#5a56a0"),Zi(1,"#1d2358","#4f4a88","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70","#6a5aa8")],ue={top:new ct,hor:new ct,fog:new ct,sun:new ct,hg:new ct,hz:new ct,hi:1,si:1,night:0};function lE(i){let t=0;for(;t<uh.length-2&&i>uh[t+1].t;)t++;let e=uh[t],n=uh[t+1],s=Ie((i-e.t)/(n.t-e.t));s=s*s*(3-2*s),["top","hor","fog","sun","hg","hz"].forEach(r=>ue[r].copy(e[r]).lerp(n[r],s)),ue.hi=ur(e.hi,n.hi,s),ue.si=ur(e.si,n.si,s),ue.night=ur(e.night,n.night,s)}var Jo=new D,$o=new D,cE=new D,jf=new ct("#a9b8ff"),Tg=F.t,Ag=-9999,hh=!1;function Dg(i,t){let e=performance.now(),n=Math.min(.1,Math.max(0,F.t-Tg));if(Tg=F.t,e-Ag>1e3){Ag=e;try{hh=!!(window.UX&&UX.calm&&UX.calm())}catch{hh=!1}}lE(ot.tod);let s=Math.sin(Math.PI*2*(ot.tod-.12));Jo.set(.25,s,-.9).normalize(),$o.set(-.25,-s*.9+.05,-.9).normalize();let r=Jo.y,o=$o.y;xt.fog.color.copy(ue.fog),xn.skyT.value+=n*(hh?.2:1),xn.top.value.copy(ue.top),xn.hor.value.copy(ue.hor),xn.hz.value.copy(ue.hz),xn.sunDir.value.copy(Jo),xn.moonDir.value.copy($o),xn.sunCol.value.copy(ue.sun),xn.sunI.value=me(-.08,.04,r),xn.moonI.value=me(-.03,.1,o)*(1-.8*me(-.05,.15,r)),xn.gI.value=me(-.34,-.02,r)*(1-me(0,.42,r)),xn.night.value=ue.night;{let u=me(-.3,.1,r),h=.3*xn.moonI.value*(1-u);xn.lightDir.value.copy(Jo).multiplyScalar(u).addScaledVector($o,h+.001).normalize(),xn.lightCol.value.setRGB(ue.sun.r*u+jf.r*h,ue.sun.g*u+jf.g*h,ue.sun.b*u+jf.b*h)}dh.pr.value=qn.getPixelRatio(),dh.time.value=xn.skyT.value,dh.calm.value=hh?1:0;let a=s>0,l=a?Jo:$o;Br.color.copy(ue.hor).lerp(ue.top,.4),Br.groundColor.copy(ue.hg),Br.intensity=ue.hi,Ns.color.copy(ue.sun),Ns.intensity=ue.si,Ns.position.copy(l).multiplyScalar(100).add(cE.set(i,0,t)),Ns.target.position.set(i,0,t),Ns.target.updateMatrixWorld(),hr.position.set(i,0,t),Qf.position.set(i,0,t).addScaledVector(Jo,640),tp.position.set(i,0,t).addScaledVector($o,640),Qf.material.opacity=Ie(s*4+.2,0,1)*.6,tp.material.opacity=Ie(-s*4,0,1)*.55,Pg.position.set(i,0,t);let c=dr.material.uniforms;c.lDir.value.copy(l),c.lCol.value.copy(ue.sun).multiplyScalar(Ie(a?s*3:-s*1.5,0,1)),ot.glowK=Ie(ue.night*1.2+.25,0,1)}var ph=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",dr=new W(new rn(1e3,1e3),new $e({uniforms:{...xn,t:{value:0},deep:{value:new ct("#5a8f9c")},shallow:{value:new ct("#a3c8c4")},fog:{value:new ct},lDir:{value:new D(0,1,0)},lCol:{value:new ct},fogN:{value:22},fogF:{value:250},fogSunDir:Qn.sunDir,fogSunCol:Qn.sunCol,fogMisc:Qn.misc},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,fogN,fogF;uniform vec3 deep,shallow,fog,lDir,lCol,fogSunDir,fogSunCol;uniform vec4 fogMisc;
  ${ch}
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
    float lod=1.-smoothstep(8.,70.,dist);   /* detalle fino de superficie: baja amplitud, media cero y desvanecido con la distancia (sin parpadeo) */
    base*=1.+(sin(p.x*3.1+p.y*2.3+t*.9)*sin(p.y*2.7-p.x*1.9-t*.7)*.045+sin(p.x*7.3-p.y*5.1+t*.6)*sin(p.y*6.1+p.x*4.7-t*.5)*.02)*lod;
    vec3 refl=skyRefl(reflect(-v,normalize(vec3(n.x*.3,1.,n.z*.3))))*.86;   /* espejo de lago calmo: el reflejo del cielo sigue solo una fracci\xF3n de las ondas (evita parpadeo al avanzar) */
    float st=wn(vec2(p.x*.07+t*.02,p.y*1.5+t*.25)),st2=wn(vec2(p.x*.16-t*.03,p.y*3.1-t*.4));
    float streak=smoothstep(.62,.9,st)*.55+smoothstep(.66,.92,st2)*.4;
    float dk=smoothstep(.55,.2,wn(vec2(p.x*.05,p.y*.9+t*.15)));
    base=mix(base,base*.78,dk*.6);
    vec3 c=mix(base,refl,clamp(fr*.9+.26,0.,1.));
    c=mix(c,mix(hor,vec3(1.),.55),streak*(1.-night*.7)*.38);
    float sp=smoothstep(.9,1.,wn(p*2.6+vec2(t*.5,-t*.3)));c+=lCol*sp*.38;   /* destellos del agua suaves a prop\xF3sito (WCAG 2.3.1) */
    vec3 h=normalize(lDir+v);c+=lCol*pow(max(dot(n,h),0.),90.)*.6;
    float tF=clamp((dist-fogN)/(fogF-fogN),0.,1.);float cF=tF*tF*(3.-2.*tF);float ffF=mix(cF,1.,smoothstep(.82,1.,tF));
    {vec2 fwp=vW.xz;float ftt=fogMisc.w*.06;float fpn=.5+.3*sin(fwp.x*.021+sin(fwp.y*.017+ftt)*1.7+ftt*.7)+.2*sin(fwp.y*.037-fwp.x*.011-ftt*1.3);
     ffF=clamp(ffF*mix(1.,.5+1.*fpn,fogMisc.z*(1.-smoothstep(.82,1.,tF))),0.,1.);}
    float scF=pow(max(dot(normalize(vW-cameraPosition),fogSunDir),0.),5.)*fogMisc.x*ffF;
    c=mix(c,mix(fog,pow(fogSunCol,vec3(2.2)),clamp(scF,0.,.8)),ffF);
    gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
    ${Vo}
}`}));dr.rotation.x=-Math.PI/2;xt.add(dr);function Us(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new jt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Lg(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let m=Lg(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Lg(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Gt(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<e;m++){let x=u.getComponent(d,m);a.setComponent(d+h,m,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var ep=new Float32Array(ni*ii*3),np=new Float32Array(ni*ii*3),fr=new jt;fr.setAttribute("position",new Gt(ep,3));fr.setAttribute("color",new Gt(np,3));{let i=new Uint16Array((ni-1)*(ii-1)*6),t=0;for(let e=0;e<ii-1;e++)for(let n=0;n<ni-1;n++){let s=e*ni+n,r=s+1,o=s+ni,a=o+1;i.set([s,r,o,r,a,o],t),t+=6}fr.setIndex(new Gt(i,1))}var Ng=new W(fr,new pe({vertexColors:!0,gradientMap:Ae}));Ng.frustumCulled=!1;xt.add(Ng);var Ug=new ct("#eadcb9"),Fg=new ct("#b6dca3"),Bg=new ct("#8fc79b"),Og=new ct("#bdd6c8"),Hg=new ct("#d3cce9"),zg=new ct("#c8d6c0"),kg=new ct("#d9b45f"),Gg=new ct("#c8964a"),Vg=new ct("#f6c9d8"),Wg=new ct("#d9d2bf"),qe=new ct,pl=1900;function Xg(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let c=0;c<s.count;c++)s.setXY(c,s.getX(c)*t[0],s.getY(c)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,o=i.boundingBox.max.y,a=i.attributes.position,l=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){let u=e+(n-e)*((a.getY(c)-r)/(o-r||1));l[c*3]=l[c*3+1]=l[c*3+2]=u}return i.setAttribute("color",new Gt(l,3)),i}var qg=Us([[2.1,2.4,.7],[1.8,2.3,1.9],[1.45,2.2,3.1],[1.1,2,4.3],[.7,1.8,5.4]].map(([i,t,e])=>Xg(new Te(i,t,11,2).translate(0,e+t/2,0),[4,2],.64,1.26)).map(i=>(i.deleteAttribute("normal"),i)));qg.computeVertexNormals();var Yg=Us([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3],[1,-.6,5.2,1.2],[1.05,.9,4.2,-1.1],[.8,1.7,4.1,.9]].map(([i,t,e,n])=>{let s=new hn(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),Xg(s,[3,3],.7,1.3)}));Yg.computeVertexNormals();var uE=()=>new pe({gradientMap:Ae,color:16777215,vertexColors:!0,map:Ce("leaf")}),ml=new Un(qg,new pe({gradientMap:Ae,color:16777215,vertexColors:!0,map:Ce("needle")}),pl),Or=new Un(Yg,uE(),pl),gl=new Un(new ce(.19,.36,4.2,9,3).translate(0,2.1,0),new pe({gradientMap:Ae,color:9071196,map:Ce("bark")}),pl),xl=new Un(new vi(.7,10).rotateX(-Math.PI/2),new pe({gradientMap:Ae,color:16777215}),500),yl=new Un(new hn(.28,0).translate(0,.2,0),new pe({gradientMap:Ae,color:16777215}),160);[ml,Or,gl,xl,yl].forEach(i=>{i.frustumCulled=!1,xt.add(i)});var ip={value:0};function hE(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=ip,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var sp=(()=>{let i=[];for(let t=0;t<14;t++){let e=t/14*6.28+j(t,1),n=.8+j(t,2)*1.7,s=.05,r=Math.cos(e)*.25*j(t,3),o=Math.sin(e)*.25*j(t,3),a=(j(t,4)-.5)*.9,l=new jt,c=new Float32Array([-s,0,0,s,0,0,a*.5-s*.5,n*.6,0,a*.5+s*.5,n*.6,0,a,n,0]);l.setAttribute("position",new Gt(c,3)),l.setIndex([0,1,2,1,3,2,2,3,4]),l.computeVertexNormals();let u=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((d,f)=>u.set(d,f*3)),l.setAttribute("color",new Gt(u,3)),l.rotateY(e),l.translate(r,0,o),i.push(l)}return Us(i)})(),Fs=new Un(sp,hE(new pe({gradientMap:Ae,color:16777215,vertexColors:!0,side:Zt})),1400),dE=(()=>{let i=[],t=new ce(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new Gt(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,o])=>{let a=new Jt(1,9,5).toNonIndexed();a.scale(o,o*.28,o),a.translate(n,s,r);let l=a.attributes.position,c=new Float32Array(l.count*3);for(let u=0;u<l.count;u++){let h=.62+.4*Ie((l.getY(u)-s)/(o*.28)*.5+.5);c[u*3]=h*.9,c[u*3+1]=h,c[u*3+2]=h*.92}a.setAttribute("color",new Gt(c,3)),a.deleteAttribute("uv"),i.push(a)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),Us(i)})(),vl=new Un(dE,new pe({gradientMap:Ae,color:16777215,vertexColors:!0}),400);[Fs,vl].forEach(i=>{i.frustumCulled=!1,xt.add(i)});var Zg=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],mh=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],tn=new ve,En=new gn,wn=new D,fn=new D,Bs=new D(0,1,0),Jg=new ct(Hn.gnd),$g=Hn.pine,Kg=Hn.blos,jg=qi.blos,Qg=qi.bblos,Ko=new Un(new hn(1,2).scale(1,.72,1).translate(0,.45,0),new pe({gradientMap:Ae,color:16777215,map:Ce("leaf")}),1700);Ko.frustumCulled=!1;xt.add(Ko);var tx=["#6fa383","#7fb592","#5f957a","#8cc09a"],uA=Hn.bblos,fE=(()=>{let i=new ce(.11,.15,1,5,8,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=Math.round(s*8)%3===0?.68:1;e[n*3]=r,e[n*3+1]=r,e[n*3+2]=r*.95}return i.setAttribute("color",new Gt(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),_l=new Un(fE,new pe({gradientMap:Ae,color:16777215,vertexColors:!0}),2e3),Ml=new Un(new hn(1,0).scale(1,.5,1),new pe({gradientMap:Ae,color:16777215}),2e3);[_l,Ml].forEach(i=>{i.frustumCulled=!1,xt.add(i)});var ex=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],nx=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],rp=Hn.brd,ix=new ct("#9ccf8a");var bl={a:1e9,b:1e9},gh=new Float32Array(ni*ii*3),xh=new Float32Array(ni*ii*3),sx=new Map;function ap(i){let t=sx.get(i);if(!t){let e=i.instanceMatrix.array.length;t={m:new Float32Array(e),c:new Float32Array(e/16*3)},sx.set(i,t)}return t}var Ni=(i,t,e)=>{e.toArray(ap(i).m,t*16)},fs=(i,t,e)=>{let n=ap(i);n.hc=1;let s=n.c;s[t*3]=e.r,s[t*3+1]=e.g,s[t*3+2]=e.b};function pE(i,t){let e=ap(i);i.instanceMatrix.array.set(e.m.subarray(0,t*16)),i.instanceMatrix.needsUpdate=!0,e.hc&&(i.instanceColor||i.setColorAt(0,qe),i.instanceColor.array.set(e.c.subarray(0,t*3)),i.instanceColor.needsUpdate=!0),i.count=t}function*mE(i,t){let e=[],n=i-ni/2*ds,s=t-60,r=0,o=0,a=0,l=0,c=0,u=0,h=0,d=0;for(let x=0;x<ii;x++){x%5===0&&(yield);let g=s+x*si,p=Yo(g),y=Fr(g),S=Zo(g);for(let _=0;_<ni;_++){let v=n+_*ds,b=ei(v,g),T=(x*ni+_)*3;gh[T]=v,gh[T+1]=b,gh[T+2]=-g;let M=Math.abs(v-qt(g))-ge(g),E=je(v*.05,g*.05),R=(j(_+n,x)-.5)*.05;if(M<0)qe.copy(zg);else{if(qe.copy(Fg).lerp(Bg,E),qe.lerp(Ug,1-me(.5,3.5,M)),qe.lerp(Og,me(6,13,b)*.8),qe.lerp(Hg,me(13,24,b)),p>0&&qe.lerp(ix,p*me(0,5,M)*.65),Hn.gk&&qe.lerp(Jg,Hn.gk*me(.4,3,M)*(1-p*.6)),y>.05){let I=je(v*.11+3,g*.11+7);I>.5&&qe.lerp(Vg,y*me(.5,.8,I)*.42*me(.4,3,M))}{let I=Eg(v,g);I>0&&qe.lerp(Wg,I*.9)}{let I=je(v*.03+50,g*.03+20),L=me(.5,.72,I)*me(.4,2.5,M)*(1-me(9,26,M));L>0&&qe.lerp(je(v*.2,g*.2)>.5?kg:Gg,L*.85)}}if(xh[T]=qe.r+R,xh[T+1]=qe.g+R,xh[T+2]=qe.b+R,M>5&&b<17&&o<pl&&!Zf(g,M)&&!Yf(v,g)){let I=j(v*3.1,g*1.7),L=.05*(.5+je(v*.03+9,g*.03))*(M<34?.75:1)+(M<36?(.05+.09*S)*(1-M/44):0)*(.6+.8*je(v*.07,g*.07))+(M<60?y*.11*(1-M/70):0);if(I<L*(1-p*.92)){let P=(j(v,g)-.5)*ds*.9,C=(j(g,v)-.5)*si*.9,N=.8+j(v+4,g+1)*.9;wn.set(v+P,ei(v+P,g+C)-.1,-(g+C)),En.setFromAxisAngle(Bs,j(g,v)*6.28);let O=j(v*.7,g*.3);M<60&&O<.04+y*.95?(fn.set(N,N,N),tn.compose(wn,En,fn),Ni(Or,a,tn),Ni(gl,a,tn),fs(Or,a,qe.set((O<y*.95?jg:Kg)[j(v,g+3)*4|0])),a++):j(v*1.1,g*1.7)<.3?(fn.set(N*1.05,N*(.9+j(g,5)*.5),N*1.05),tn.compose(wn,En,fn),Ni(Or,a,tn),Ni(gl,a,tn),fs(Or,a,qe.set(rp[j(v,g+7)*rp.length|0])),a++):j(v*1.9,g*.8)>.55&&c<400?(fn.set(N*1.2,N*1.2,N*1.2),tn.compose(wn,En,fn),Ni(vl,c,tn),fs(vl,c,qe.set(Zg[j(v+5,g)*4|0])),c++):(fn.set(N,N*(.9+j(g,3)*1.1),N),tn.compose(wn,En,fn),Ni(ml,l,tn),fs(ml,l,qe.set($g[j(v+2,g)*4|0])),l++),o++}}}}for(let x=0;x<ii;x++){x%5===0&&(yield);let g=s+x*si,p=Fr(g),y=Yo(g);for(let S=0;S<ni;S+=1){let _=n+S*ds,v=Math.abs(_-qt(g))-ge(g);if(v<2.2||v>55||h>=1700||Zf(g,v)||Yf(_,g)||ei(_,g)>15||j(_*2.3+1,g*1.3)>(.05+p*.2)*(1-y*.8))continue;let M=(j(_,g+9)-.5)*ds,E=(j(g,_+9)-.5)*si,R=.7+j(_+8,g)*.9+p*.3;wn.set(_+M,ei(_+M,g+E)-.1,-(g+E)),En.setFromAxisAngle(Bs,j(g,_)*6.28),fn.set(R*1.2,R,R*1.1),tn.compose(wn,En,fn),Ni(Ko,h,tn),fs(Ko,h,qe.set(p>.25&&j(_,g+5)<.55?Qg[j(_,g)*4|0]:tx[j(g,_+2)*4|0])),h++}}for(let x=0;x<ii;x++){x%5===0&&(yield);let g=s+x*si,p=Yo(g);if(!(p<.02))for(let y=0;y<ni;y++){let S=n+y*ds,_=qt(g),v=Math.abs(S-_)-ge(g);if(!(v<.3||v>26||d>=1990))for(let b=0;b<2;b++){if(j(S*3.7+b*5,g*2.9+b)>p*(1.05-v*.012))continue;let T=(j(S+b,g+3)-.5)*ds,M=(j(g+b,S+3)-.5)*si,E=S+T,R=g+M,I=11+j(E,R)*12,L=.8+j(R,E)*.6,P=.05+j(E*2,R)*.14,C=E>_?1:-1,N=ei(E,R)-.3;wn.set(E,N,-R),En.setFromAxisAngle(new D(0,0,1),C*P),fn.set(L,I,L),tn.compose(wn,En,fn),Ni(_l,d,tn),fs(_l,d,qe.set(ex[j(E,R+1)*4|0]));let O=E-C*Math.sin(P)*I,z=N+Math.cos(P)*I;wn.set(O,z,-R),En.identity();let $=1.5+j(R,E+4)*1.6;fn.set($,$,$),tn.compose(wn,En,fn),Ni(Ml,d,tn),fs(Ml,d,qe.set(nx[j(E+2,R)*4|0])),d++}}}e.push([_l,d],[Ml,d]),e.push([Ko,h]);for(let x=0;x<ii;x++){x%5===0&&(yield);let g=s+x*si;for(let p=0;p<4;p++){let y=p%2?1:-1;if(j(g*.53,p+3)>.62||u>=1400)continue;let S=p>1&&j(g,p+9)>.6,_=ge(g)+y*0+(S?-(1.5+j(g,p+1)*4):-.3+j(g,p+2)*3.4),v=qt(g)+y*_,b=-(g+(j(g,p)-.5)*si);if(S&&Math.abs(v-qt(g))>ge(g)-1.5)continue;let T=.7+j(g+p,7)*.9;wn.set(v,Math.max(-.2,ei(v,g)-.15),b),En.setFromAxisAngle(Bs,j(g,p+5)*6.28),fn.set(T,T*(.8+j(g,p+6)*.7),T),tn.compose(wn,En,fn),Ni(Fs,u,tn),fs(Fs,u,qe.set(mh[j(g,p+4)*4|0])),u++}}e.push([Fs,u],[vl,c]),e.push([ml,l],[Or,a],[gl,a]);let f=0,m=0;for(let x=0;x<ii;x++){x%5===0&&(yield);let g=s+x*si;for(let p=0;p<3;p++){if(j(g*.37,p+7)>.5||f>=500)continue;let y=(j(g+p,5)*2-1)*(ge(g)-2.2),S=qt(g)+y;wn.set(S,.03,-(g+(j(g,p)-.5)*si)),En.setFromAxisAngle(Bs,j(g,p+2)*6.28);let _=.7+j(g+p,9)*.9;fn.set(_,1,_),tn.compose(wn,En,fn),Ni(xl,f,tn),fs(xl,f,qe.set(j(g,p)>.5?"#a8dba9":"#96cfa0")),f++,j(g,p+11)>.72&&m<160&&(tn.compose(wn.setY(.05),En,fn.set(1,1,1)),Ni(yl,m,tn),fs(yl,m,qe.set(j(g,p+1)>.4?"#f7b9cf":"#fbe39a")),m++)}}e.push([xl,f],[yl,m]);for(let[x,g]of e)pE(x,g);ep.set(gh),np.set(xh),fr.attributes.position.needsUpdate=!0,fr.attributes.color.needsUpdate=!0,fr.computeVertexNormals()}var Hr=null,rx=0,op=!1;function ox(i,t,e){let n=Math.floor(-t/(si*dl))*si*dl,s=Math.round(i/(ds*dl))*ds*dl;if(!Hr&&(n!==bl.b||s!==bl.a)){let r=!op||Math.abs(n-bl.b)>150||Math.abs(s-bl.a)>150;if(bl={a:s,b:n},Hr=mE(s,n),rx=n,r){for(;!Hr.next().done;);e(n),Hr=null,op=!0}}if(Hr){let r=performance.now(),o;do o=Hr.next();while(!o.done&&performance.now()-r<3);o.done&&(e(rx),Hr=null,op=!0)}}var cp=140,ax=[],up=new jt,yh=new Float32Array(cp*3);for(let i=0;i<cp;i++)ax.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);up.setAttribute("position",new Gt(yh,3));var lp=new Vi({color:16773792,size:.35,map:ri,transparent:!0,opacity:0,blending:Wn,depthWrite:!1}),vh=new Ci(up,lp);vh.frustumCulled=!1;xt.add(vh);function lx(i){if(lp.opacity=Ie(i*1.3-.2,0,.9),vh.visible=lp.opacity>.01,vh.visible){for(let t=0;t<cp;t++){let e=ax[t],n=F.t*.4+e[3],s=Math.sin(F.psi),r=-Math.cos(F.psi);yh[t*3]=F.px+e[0]+Math.sin(n*2.1+t)*1.5,yh[t*3+1]=e[1]+Math.sin(n*3+t)*.4,yh[t*3+2]=F.pz+e[2]+Math.cos(n*1.7+t)*1.5}up.attributes.position.needsUpdate=!0}}var an=Tt,Ue=new zt;xt.add(Ue);var Qo=1.4,dp=-3.4,px=26,bh=[[0,0],[.3,.03],[.62,.1],[.88,.3],[1,.62],[1.04,.9],[1.06,1]],cx=bh.length,wl=i=>.9*(i<.3?.62+.14*Math.sin(i/.3*Math.PI/2):Math.max(.03,.76*Math.pow(Math.max(0,1-Math.pow((i-.3)/.7,2.2)),.65))),kr=i=>.46+.14*Math.pow(1-i,3)+.64*Math.pow(Math.max(0,(i-.55)/.45),2.6),fp=i=>-.2+.34*Math.pow(Math.max(0,(i-.6)/.4),2)+.08*Math.pow(1-i,2),jo=i=>Qo+(dp-Qo)*i;function Sl(i,t){let e=wl(i),n=kr(i),s=fp(i),r=[],o=(a,l)=>t?[l*(a[0]*e*.94-(a[0]>0?.045:0)),s+.06+a[1]*(n-s-.06)]:[l*a[0]*e,s+a[1]*(n-s)];for(let a=cx-1;a>=1;a--)r.push(o(bh[a],-1));r.push(o(bh[0],1));for(let a=1;a<cx;a++)r.push(o(bh[a],1));return r}function _h(i,t){let e=i[0].pts.length,n=[],s=[],r=[],o=0;i.forEach((l,c)=>{c&&(o+=Math.abs(l.z-i[c-1].z));let u=0;l.pts.forEach((h,d)=>{if(d){let f=l.pts[d-1];u+=Math.hypot(h[0]-f[0],h[1]-f[1])}n.push(h[0],h[1],l.z),s.push(o*t,u*t)})});for(let l=0;l<i.length-1;l++)for(let c=0;c<e-1;c++){let u=l*e+c,h=u+1,d=u+e,f=d+1;r.push(u,d,h,h,d,f)}let a=new jt;return a.setAttribute("position",new se(n,3)),a.setAttribute("uv",new se(s,2)),a.setIndex(r),a.computeVertexNormals(),a}var El=[...Array(px+1).keys()],Os=i=>i/px,ux=new pe({gradientMap:Ae,color:10250824,emissive:2759184,map:Ce("plank"),side:Zt}),gE=new pe({gradientMap:Ae,color:12159586,emissive:2759184,map:Ce("plank"),side:Zt}),xE=an(7227956,{map:Ce("wood")}),hp=an(14268812,{map:Ce("woodV")}),hx=an(13146740,{map:Ce("plank"),side:Zt});{Ue.add(new W(_h(El.map(n=>({z:jo(Os(n)),pts:Sl(Os(n),!1)})),.8),ux)),Ue.add(new W(_h(El.map(n=>({z:jo(Os(n)),pts:Sl(Os(n),!0)})),.8),gE)),[-1,1].forEach(n=>{let s=El.map(r=>{let o=Sl(Os(r),!1),a=Sl(Os(r),!0),l=n<0?0:o.length-1;return{z:jo(Os(r)),pts:[o[l],a[l]]}});Ue.add(new W(_h(s,.8),hp))});{let n=Sl(0,!1),s=[0,(fp(0)+kr(0))/2,Qo],r=[];n.forEach(a=>s.push(a[0],a[1],Qo));for(let a=1;a<n.length;a++)r.push(0,a,a+1);let o=new jt;o.setAttribute("position",new se(s,3)),o.setIndex(r),o.computeVertexNormals(),Ue.add(new W(o,ux))}[-1,1].forEach(n=>{let s=new tr(El.map(r=>{let o=Os(r);return new D(n*wl(o)*1.06,kr(o)+.012,jo(o))}));Ue.add(new W(new ka(s,50,.034,6,!1),hp))});{let n=El.map(r=>{let o=Os(r),a=wl(o)*.7,l=fp(o)+.22;return{z:jo(o),pts:[[-a,l],[a,l]]}}),s=_h(n,.8);Ue.add(new W(s,hx))}[[-1.55,.3],[-2.25,.4],[.55,.34],[-.55,.3]].forEach(([n,s])=>{let r=(Qo-n)/(Qo-dp),o=wl(r)*1.72,a=new W(new Fn(o,.045,.14),n===.55?hx:hp);a.position.set(0,s+.1,n),Ue.add(a)});let i=new W(new On(.2,.04,6,14),an(14271378));i.rotation.x=Math.PI/2,i.scale.setScalar(.7),i.position.set(.3,.3,-2.2),Ue.add(i);let t=i.clone();t.scale.setScalar(.6),t.position.set(.3,.34,-2.2),Ue.add(t),[.55,.7,.85].forEach(n=>{let s=jo(n),r=wl(n)*1.06,o=kr(n),a=new W(new On(r*.55,.012,4,16,Math.PI),an(14271378));a.rotation.set(0,Math.PI/2,0),a.rotation.z=Math.PI,a.position.set(0,o-.2,s),a.scale.set(1,.5,1),Ue.add(a)});let e=new W(new Jt(.06,8,6),xE);e.position.set(0,kr(1)+.03,dp+.02),Ue.add(e)}var Sh=[];{let i=an(9075550,{map:Ce("cloth")}),t=an(11045468,{map:Ce("woodV")});[[-.35,.4,-1.55,.34],[-.05,.38,-1.35,.28],[-.3,.36,-1.1,.26]].forEach(([s,r,o,a])=>{let l=new W(new hn(a,1),i);l.scale.set(1.1,.65,1),l.position.set(s,r,o),Ue.add(l),Sh.push(l)});let e=new zt;e.position.set(-.52,.46,-1.9),e.rotation.set(Math.PI/2,0,0),Ue.add(e);let n=new W(new ce(.025,.035,4.6,8),t);e.add(n);for(let s=-4;s<=4;s++){let r=new W(new On(.036-s*7e-4,.007,4,8),an(7297588));r.rotation.x=Math.PI/2,r.position.y=s*.5,e.add(r)}}var pr=new zt;pr.position.set(0,1.46,-3.28);Ue.add(pr);var dx=an(6044970,{map:Ce("woodV")});{let i=new W(new ce(.028,.04,.95,6),dx);i.position.set(0,kr(.9)+.45,-2.95),Ue.add(i);let t=new W(new On(.2,.022,5,12,Math.PI*.55),dx);t.rotation.set(0,Math.PI/2,0),t.rotation.z=-.6,t.position.set(0,kr(.9)+.9,-3.05),Ue.add(t)}var Tl=new W(new Jt(.15,16,12),new fe({color:16769704}));Tl.scale.set(1,1.3,1);Tl.position.set(0,-.18,0);pr.add(Tl);{let i=an(8010276);[-.17,-.09,0,.09,.17].forEach(n=>{let s=.15*Math.sqrt(Math.max(0,1-Math.pow(n/.195,2)))+.004,r=new W(new On(s,.0055,4,18),i);r.rotation.x=Math.PI/2,r.position.y=-.18+n,pr.add(r)}),[.215,-.215].forEach(n=>{let s=new W(new ce(.075,.075,.035,10),i);s.position.y=-.18+n,pr.add(s)});let t=new W(new ce(.006,.006,.2,3),i);t.position.y=.02,pr.add(t);let e=new W(new Te(.02,.1,6),an(12075822));e.position.y=-.45,pr.add(e)}var Eh=oi(16762746,2.4);Eh.position.set(0,-.18,0);pr.add(Eh);var wh=new Ya(16763274,0,22,1.6);wh.position.set(0,1.5,-2.8);Ue.add(wh);function fx(){let i=new zt,t=new pe({gradientMap:Ae,color:15716516,emissive:3811866}),e=new W(new ce(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new W(new Fn(.2,.03,.62),new pe({gradientMap:Ae,color:15047302}));n.position.z=1.55,i.add(n);let s=new W(new Fn(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new zt;return r.add(i),Ue.add(r),r}var mx=[fx(),fx()],yE=[new D(-.7,.5,-.3),new D(.7,.5,-.3)],vE=[new D(-1.05,.55,-.9),new D(1.05,.55,-.9)],Ji=new zt;Ue.add(Ji);Ji.position.set(0,.42,.55);Ji.scale.setScalar(1.3);var Yn=new zt;Yn.position.y=.3;Ji.add(Yn);var ms=new zt;ms.position.y=1;Yn.add(ms);var ps=new zt;ps.position.y=.2;ms.add(ps);var gx=[];{let i=an(2837122,{map:Ce("cloth")}),t=an(7311300,{map:Ce("cloth")}),e=an(2765128,{map:Ce("cloth")}),n=an(14264706),s=an(14991998,{map:Ce("straw"),side:Zt}),r=an(11831882,{map:Ce("straw"),side:Zt}),o=an(2367786),a=an(12096591,{map:Ce("straw"),side:Zt}),l=an(9400122,{map:Ce("straw"),side:Zt}),c=an(11024940),u=an(14209212,{map:Ce("cloth")}),h=new W(new Jt(.5,16,12),e);h.scale.set(1.2,.42,.85),h.position.y=-.1,Ji.add(h),[-1,1].forEach(P=>{let C=new W(new Jt(.17,10,8),e);C.position.set(P*.5,-.02,-.3),Ji.add(C);let N=new W(new ce(.1,.12,.5,8),e);N.rotation.x=Math.PI/2,N.rotation.z=P*.15,N.position.set(P*.4,-.05,-.1),Ji.add(N);let O=new W(new Jt(.11,8,6),u);O.scale.set(.9,.6,1.4),O.position.set(P*.22,-.12,-.42),Ji.add(O)});let d=new W(new ce(.3,.4,.8,14),i);d.position.y=.42,Yn.add(d);let f=new W(new On(.37,.05,6,18),u);f.rotation.x=Math.PI/2,f.position.y=.1,Yn.add(f);let m=new W(new Jt(.06,6,5),u);m.position.set(.1,.1,-.37),Yn.add(m),[-1,1].forEach(P=>{let C=new W(new Fn(.1,.62,.04),t);C.position.set(P*.08,.5,-.33),C.rotation.z=P*.45,Yn.add(C)});let x=new W(new Jt(.44,14,10),i);x.scale.set(1,.45,.7),x.position.y=.78,Yn.add(x);let g=new W(new ce(.09,.1,.16,8),n);g.position.y=.95,Yn.add(g);let p=an(15921126,{side:Zt}),y=new W(new Is(.07,.15,24),p);y.position.set(0,.55,.352),Yn.add(y);let S=new W(new ce(.385,.405,.07,16,1,!0),p);S.position.y=.07,Yn.add(S);let _=new W(new On(.15,.04,6,14),p);_.rotation.x=Math.PI/2,_.position.y=.9,Yn.add(_);let v=new W(new Jt(.21,16,12),n);v.position.y=.2,ms.add(v);let b=new W(new Jt(.22,16,10,0,Math.PI*2,0,Math.PI*.55),o);b.position.set(0,.2,.03),b.rotation.x=.45,ms.add(b);let T=new W(new On(.205,.03,6,18),p);T.rotation.x=Math.PI/2,T.position.y=.3,ms.add(T);let M=new W(new Jt(.07,8,6),o);M.position.set(0,.43,0),ms.add(M),[-1,1].forEach(P=>{let C=new W(new Jt(.022,6,4),o);C.position.set(P*.07,.2,-.195),ms.add(C)});let E=new W(new Te(.7,.4,32,1,!0),s);E.position.y=.12,ps.add(E),[.2,.38,.56,.74].forEach(P=>{let C=new W(new On(.7*P+.02,.009,4,32),r);C.rotation.x=Math.PI/2,C.position.y=.12+.2-.4*P+.002,ps.add(C)});let R=new W(new Te(.07,.07,8),r);R.position.y=.34,ps.add(R);let I=new W(new On(.695,.02,6,32),r);I.rotation.x=Math.PI/2,I.position.y=-.08,ps.add(I),[-1,1].forEach(P=>{let C=new W(new ce(.009,.009,.34,4),c);C.position.set(P*.17,-.2,.05),C.rotation.z=P*.12,ps.add(C)});let L=new W(new Jt(.03,6,5),c);L.position.set(0,-.34,-.16),ps.add(L),[-1,1].forEach(P=>{let C=new zt;C.position.set(P*.42,.75,0),Yn.add(C);let N=new W(new ce(.1,.075,.6,10),i);N.position.y=-.3,C.add(N);let O=new W(new Jt(.085,10,8),n);O.position.y=-.63,C.add(O);let z=new W(new On(.082,.022,5,10),u);z.rotation.x=Math.PI/2,z.position.y=-.53,C.add(z),gx.push(C)})}var Hs=new zt;Ue.add(Hs);{let i=an(12159574,{map:Ce("woodV")}),t=an(13602164,{map:Ce("plank")}),e=new W(new ce(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,Hs.add(e);let n=new W(new Fn(.22,.04,.55),t);n.position.z=2,Hs.add(n);let s=new W(new Fn(.2,.04,.05),i);s.position.z=-.03,Hs.add(s)}var zr=1,Mh=0,xx=new D;function yx(){let i=Math.sin(F.t*.9)*.03+Math.sin(F.t*1.7)*.012;return Ue.position.set(F.px,i*.6,F.pz),Ue.rotation.set(0,-F.psi,-F.steer*.025+Math.sin(F.t*.7)*.008),Ue.updateMatrixWorld(!0),i}function vx(){mx.forEach((i,t)=>{let e=t?1:-1,n=Ie(F.steer*e,0,1),s=new D().copy(vE[t]);s.lerp(new D(e*1.25,-.1,-.9+Math.sin(F.t*1.3+t)*.08),n);let r=xx.copy(s).sub(yE[t]).normalize();i.quaternion.setFromUnitVectors(new D(0,0,1),r),i.position.copy(s).addScaledVector(r,-1.55)})}var _x=!1;function _E(){_x=!0;try{let i=[Ji,Hs,...Sh];i.forEach(t=>t.visible=!0),qn.compile(xt,dn),i.forEach(t=>t.traverse(e=>{if(e.isMesh){let n=e.material;n&&n.map&&qn.initTexture(n.map)}})),Ji.visible=Hs.visible=!1,Sh.forEach(t=>t.visible=!1)}catch{}}function Mx(i){_x||_E();{let t=ot.camK>.45||ot.cineW>.15;if(Ji.visible=t,Sh.forEach(e=>e.visible=t),Hs.visible=t,mx.forEach(e=>e.visible=!t),t){F.steer>.2?zr=Math.min(1,zr+i*3):F.steer<-.2&&(zr=Math.max(-1,zr-i*3)),Mh+=(F.steer-Mh)*Math.min(1,i*2.2);let e=Math.sin(F.t*1.4);Yn.rotation.z=-F.steer*.2+Math.sin(F.t*.6)*.02,Yn.rotation.y=-F.steer*.28,Yn.rotation.x=.05+e*.012+Math.abs(F.steer)*.06,ms.rotation.y=-F.steer*.38+Math.sin(F.t*.35)*.08,ms.rotation.x=.04+Math.sin(F.t*.5)*.03,ps.rotation.z=(F.steer-Mh)*.45,ps.rotation.x=-Math.abs(F.steer-Mh)*.12;let n=xx.set(zr*.5,.8,.5),s=Math.abs(F.steer)>.2?1:0,o=new D(zr*(.7+s*.55),-.2,1.35+Math.sin(F.t*1.2)*.12*(1-s)+s*.1).clone().sub(n).normalize();Hs.quaternion.setFromUnitVectors(new D(0,0,1),o),Hs.position.copy(n);let a=[n.clone().addScaledVector(o,.75),n.clone()];zr<0&&a.reverse(),gx.forEach((l,c)=>{let u=l.getWorldPosition(new D),h=Ue.localToWorld(a[c].clone()),d=h.sub(u),f=d.length();l.parent.worldToLocal(h.copy(u).add(d));let m=h.sub(l.position);l.quaternion.setFromUnitVectors(new D(0,-1,0),m.clone().normalize()),l.scale.y=Ie(m.length()/.66,.7,1.5)})}}}var Th=[];for(let i=0;i<28;i++){let t=new W(new Is(.35,.42,28).rotateX(-Math.PI/2),new fe({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,xt.add(t),Th.push(t)}var ME=0,Zn=(i,t)=>{let e=Th[ME++%Th.length];e.position.set(i,.04,t),e.userData.age=0};function bx(i){Th.forEach(t=>{if(t.userData.age<4){t.userData.age+=i;let e=t.userData.age/4;t.scale.setScalar(1+e*6),t.material.opacity=.35*(1-e)}else t.material.opacity=0})}var mr={steer:0,pitch:0};Ls.addEventListener("pointerdown",i=>{!ot.started||ot.X.photo||(lh(),Ls.setPointerCapture(i.pointerId),F.hold=!0,Ex(i),$t.resume())});Ls.addEventListener("pointermove",i=>{F.hold&&!ot.X.photo&&Ex(i)});var Sx=()=>{F.hold=!1,mr.steer=0,mr.pitch=0};Ls.addEventListener("pointerup",Sx);Ls.addEventListener("pointercancel",Sx);function Ex(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;mr.steer=Math.abs(t)<.1?0:Ie((t-Math.sign(t)*.1)*1.4,-1,1),mr.pitch=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!1)});var $i=["Puente de madera","Torii sobre el agua","Aldea de farolillos","Jard\xEDn de sakura","Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos","Castillo de la Garza Blanca"],Si=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>Si.add(i))}catch{}function wx(){try{localStorage.setItem("rio3d-found",JSON.stringify([...Si]))}catch{}}var Gr=[],pi=new Map,Tx=new Set,gs=[],pp=new Set;function ai(i){let t=ze("toast");t.textContent=i,t.style.opacity=1,clearTimeout(ai.h),ai.h=setTimeout(()=>t.style.opacity=0,4200)}var bE=$i.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,ze("chips").appendChild(t),t});function Ah(i){ze("places").textContent=Si.size+"/"+$i.length,bE.forEach((e,n)=>e.classList.toggle("on",Si.has(n)));let t=Math.max(0,Math.floor((i-240)/Li)-1);for(;Qe(t)<i+1;)t++;ze("next").textContent="Siguiente: "+$i[Xe(t)]+" en "+Math.max(0,Math.round((Qe(t)-i)/10)*10)+" m"}ze("snd").onclick=()=>{$t.on=!$t.on,$t.ctx&&$t.setOn($t.on),ze("snd").textContent="Sonido: "+($t.on?"s\xED":"no")};try{ot.savedS=+localStorage.getItem("rio3d-pos")||0}catch{}function Al(){try{ot.started&&F.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(F.dist)))}catch{}}setInterval(Al,2500);addEventListener("pagehide",Al);document.addEventListener("visibilitychange",Al);ot.savedS>150&&(ze("go").textContent="Continuar ("+ot.savedS+" m)",ze("go2").hidden=!1,ze("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}ot.savedS=0,ze("go").onclick()});ze("go").onclick=()=>{ot.savedS>150&&ah(ot.savedS);try{$t.init(),$t.resume()}catch{}ze("start").hidden=!0,ze("hud").hidden=!1,ze("places-row").hidden=!1,Ah(0),ze("hint").hidden=!1,ot.started=!0,setTimeout(()=>{try{localStorage.getItem("rio3d-ob")==="1"&&(ze("hint").style.opacity=0)}catch{ze("hint").style.opacity=0}},9e3)};var mp=0;function Ax(i,t){if(mp-=i,mp<=0){mp=.4,Ah(F.dist||t);{let e=F.dist||t,n=Math.round((e-240)/Li),s=-1;for(let r of[n-1,n,n+1])r>=0&&Math.abs(Qe(r)-e)<280&&(s=Xe(r));$t.setMood(Math.sin(Math.PI*2*(ot.tod-.12)),s,cr())}ze("m").textContent=Math.round(F.dist/1),ze("tod").textContent=ph(ot.tod)}}var Rx={es:["Cuando","el r\xEDo","te entregue","su luz,","la caba\xF1a","recordar\xE1","tu","nombre."],en:["When","the river","hands you","its light,","the cabin","will remember","your","name."],ja:["\u5DDD\u304C","\u706F\u3092","\u6388\u3051\u308B","\u3068\u304D\u3001","\u5C0F\u5C4B\u306F","\u3042\u306A\u305F\u306E","\u540D\u3092","\u601D\u3044\u51FA\u3059\u3002"]},Cx=()=>Rx[Ds()]||Rx.es;var xp=46,Vr=new Map,gp=[],Rh=new Set;try{JSON.parse(localStorage.getItem("rio3d-coll")||"[]").forEach(i=>Rh.add(i))}catch{}try{ot.count=+localStorage.getItem("rio3d-lant")||0}catch{}var Ih=i=>{let t=70+i*xp+j(i,1)*20,e=(j(i,2)*2-1)*.6*ge(t);return[qt(t)+e,-t]};function Ph(){let i=new zt,t=new W(new ce(.3,.3,.55,10),new fe({color:16767392}));t.position.y=.38;let e=new W(new ce(.34,.34,.06,10),new fe({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=oi(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new W(new rn(1,1).rotateX(-Math.PI/2),new fe({map:ri,color:16762746,transparent:!0,opacity:.4,blending:Wn,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function Ix(i,t){let e=Math.max(0,Math.floor((t-120)/xp)),n=Math.floor((t+320)/xp);for(let[s,r]of Vr)(s<e||s>n)&&(xt.remove(r),gp.push(r),Vr.delete(s));for(let s=e;s<=n;s++){if(Rh.has(s)||Vr.has(s))continue;let r=gp.pop()||Ph();r.userData.fade=1,r.scale.setScalar(1),xt.add(r),Vr.set(s,r)}for(let[s,r]of Vr){let[o,a]=Ih(s);r.position.set(o,Math.sin(i*1.1+s)*.04,a),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*ot.glowK)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*ot.glowK)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(xt.remove(r),Vr.delete(s),gp.push(r),r.userData.collecting=!1))}}function Px(){for(let[i,t]of Vr){if(t.userData.collecting)continue;let[e,n]=Ih(i),s=e-F.px,r=n-F.pz;if(s*s+r*r<17){Rh.add(i),ot.count++;try{localStorage.setItem("rio3d-lant",String(ot.count)),localStorage.setItem("rio3d-coll",JSON.stringify([...Rh]))}catch{}t.userData.collecting=!0;let o=Math.atan2(s,-r)-F.psi;if($t.lantern(Math.sin(o)),Zn(e,n),ze("n").textContent=ot.count,ot.count<=8){let a=Cx(),l=a[ot.count-1];ai(({es:"La linterna trae una frase: \xAB",en:"The lantern carries a phrase: \u201C",ja:"\u30E9\u30F3\u30BF\u30F3\u306E\u8A00\u8449\uFF1A\u300C"}[Ds()]||"")+l+({es:"\xBB",en:"\u201D",ja:"\u300D"}[Ds()]||"")+({es:" \xB7 ll\xE9vale tu luz a la caba\xF1a",en:" \xB7 bring your light to the cabin",ja:" \xB7 \u706F\u3092\u5C0F\u5C4B\u3078"}[Ds()]||""))}else ot.count===1&&ai("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}}var li,Rl=null,Dx=()=>Rl;function Ch(i,t){if(li===void 0||!li&&Rl===null&&!Ch.init)if(Ch.init=1,ag()){let a=t+55+zf(1)*55;Rl=[qt(a)+(zf(2)*2-1)*.25*ge(a),-a],li=Ph(),li.scale.setScalar(1.7),li.userData.glow.material.color.set(16765562),xt.add(li)}else li=null;if(!li)return;let[e,n]=Rl;li.position.set(e,Math.sin(i*1.1)*.06,n),li.rotation.z=Math.sin(i*.8)*.08;let s=li.userData;if(li.userData.fade===void 0&&(s.glow.material.opacity=.75+.2*Math.sin(i*2.2),s.refl.material.opacity=.5+.15*Math.sin(i*2)),s.taken){s.fade-=.012,li.scale.setScalar(1.7+(1-s.fade)*.9),s.glow.material.opacity*=Math.max(0,s.fade),s.refl.material.opacity*=Math.max(0,s.fade),s.fade<=0&&(xt.remove(li),li=null,Rl=null);return}let r=e-F.px,o=n-F.pz;if(r*r+o*o<26&&ug()){s.taken=1,s.fade=1;let a=Math.atan2(r,-o)-F.psi;$t.lantern(Math.sin(a)),Zn(e,n)}}var Cl=16,Lx=[];for(let i=0;i<Cl;i++){let t=new Rs(new os({map:ri,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,xt.add(t),Lx.push(t)}var yp=800,vp=new jt,Nx=new Float32Array(yp*6),Ux=[];for(let i=0;i<yp;i++)Ux.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);vp.setAttribute("position",new Gt(Nx,3));var Fx=new Lo({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),Il=new Fa(vp,Fx);Il.frustumCulled=!1;Il.visible=!1;xt.add(Il);var ln={rain:0,target:0,t:50,on:!1},SE=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),o=[];for(let c=0;c<=220;c++){let u=c/220*Math.PI*2,h=Math.cos(u),d=Math.sin(u),f=je(h*2.2+n,d*2.2+n),m=je(h*8+n*2,d*8+n),x=Math.pow(Math.max(0,m-.5)/.5,1.4),g=t*(.3+.55*Math.pow(f,1.5)+.9*x);if(r.set([h*i,-40,d*i,h*i,g,d*i],c*6),c<220){let p=c*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}}let a=new jt;a.setAttribute("position",new Gt(r,3)),a.setIndex(o);let l=new W(a,new $e({side:Zt,fog:!1,depthWrite:!1,uniforms:{col:{value:new ct},hor:{value:new ct},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
${Vo}
}`}));return l.renderOrder=-8,l.frustumCulled=!1,l.userData.t=e,xt.add(l),l}),xs=new ct,Dh=new ct;function Bx(i,t){ot.started&&(ln.t-=i,ln.t<=0&&(ln.target=ln.target?0:1,ln.t=ln.target?60+Math.random()*40:100+Math.random()*70,ln.target&&ai("Empieza una llovizna suave"))),ln.rain+=(ln.target-ln.rain)*Math.min(1,i*.25);let e=ln.rain>.15;e!==ln.on&&(ln.on=e,$t.rain(e));let n=1-me(.08,.3,ot.tod),s=Ie(Math.max(oh(t)*.95,ln.rain*.4,n*.4,.2));ln.fog=s,xt.fog.near=ur(22,5,s),xt.fog.far=ur(250,85,s),xs.set(15131886).multiplyScalar(1-ue.night*.7),xt.fog.color.copy(ue.fog).lerp(xs,s*.55);let r=dr.material.uniforms;r.fogN.value=xt.fog.near,r.fogF.value=xt.fog.far,r.fog.value.copy(xt.fog.color),hr.material.uniforms.hor.value.lerp(xt.fog.color,s*.8),hr.material.uniforms.top.value.lerp(xt.fog.color,s*.35),xn.mist.value=s,xn.cover.value=Ie(.24+.16*Math.sin(F.t*.012)+ln.rain*.55+s*.2),Br.intensity*=1-.22*ln.rain,Ns.intensity*=1-.45*ln.rain;{let a=hr.material.uniforms.sunDir.value;Qn.sunDir.value.copy(a).normalize(),xs.copy(ue.sun).convertLinearToSRGB(),Qn.sunCol.value.set(xs.r,xs.g,xs.b),Qn.misc.value.x=.55*(1-ue.night)*Ie(1.25-Math.abs(Qn.sunDir.value.y)*1.3,.25,1),Qn.misc.value.y=ur(.15,.07,s),Qn.misc.value.z=.5+.4*s,Qn.misc.value.w=F.t}SE.forEach(a=>{a.position.set(F.px,0,F.pz);let l=a.userData.t;xs.copy(ue.hor),Dh.copy(ue.top).multiplyScalar(.55).lerp(xs.set(8095400).multiplyScalar(1-ue.night*.75),.45),a.material.uniforms.col.value.copy(ue.hor).lerp(Dh,1-l).lerp(xt.fog.color,s*.75),a.material.uniforms.hor.value.copy(hr.material.uniforms.hor.value)});let o=Math.floor(t/25)-2;for(let a=0;a<Cl;a++){let l=o+a,c=Lx[(l%Cl+Cl)%Cl],u=l*25,h=qt(u)+(j(l,3)-.5)*ge(u)*1.5;c.position.set(h+Math.sin(F.t*.05+l)*3,1.2+j(l,4)*2.2,-u);let d=c.position.x-F.px,f=c.position.z-F.pz,m=Math.hypot(d,f);c.material.opacity=s*.38*me(6,22,m)*(1-me(300,380,m))*(.7+.3*j(l,5)),c.material.color.copy(xt.fog.color).multiplyScalar(1.05)}if(Il.visible=ln.rain>.03,Fx.opacity=.3*ln.rain,Il.visible){for(let a=0;a<yp;a++){let l=Ux[a];l[1]-=16*i,l[1]<0&&(l[1]=13+Math.random()*2,l[0]=Math.random()*40-20,l[2]=Math.random()*40-24);let c=F.px+l[0],u=F.pz+l[2];Nx.set([c,l[1],u,c-.05,l[1]+.65,u],a*6)}vp.attributes.position.needsUpdate=!0,Math.random()<i*9*ln.rain&&Zn(F.px+(Math.random()-.5)*28,F.pz-Math.random()*22+4)}}var Hx="rio-still",cn={on:!1,k:0,t:0,ev:0,menu:!1},EE='#pzMore:not([hidden]),#menu:not([hidden]),.xm,#pz:not([hidden]),body>div[style*="inset:0"]:not([style*="pointer-events:none"])',_p=0,wE=()=>{try{return!!document.querySelector(EE)}catch{return!1}},Mp=[["Un pez sube a respirar y deja c\xEDrculos en el agua.","A fish rises for air and leaves circles on the water.","\u9B5A\u304C\u606F\u3092\u3057\u306B\u4E0A\u304C\u308A\u3001\u6C34\u306B\u8F2A\u3092\u6B8B\u3057\u307E\u3059\u3002"],["El viento mueve las ca\xF1as, y luego vuelve el silencio.","The wind stirs the reeds, then silence returns.","\u98A8\u304C\u8466\u3092\u3086\u3089\u3057\u3001\u307E\u305F\u9759\u3051\u3055\u304C\u623B\u308A\u307E\u3059\u3002"],["Una hoja pasa despacio; t\xFA no.","A leaf drifts by, slowly; you do not.","\u8449\u304C\u3086\u3063\u304F\u308A\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002\u3042\u306A\u305F\u306F\u52D5\u304D\u307E\u305B\u3093\u3002"],["Se oye el agua rozando la canoa. Eso es todo, y alcanza.","You can hear water brushing the canoe. That is all, and it is enough.","\u6C34\u304C\u30AB\u30CC\u30FC\u3092\u306A\u3067\u308B\u97F3\u3060\u3051\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes se reflejan en el r\xEDo, tan quietas como t\xFA.","Clouds reflect in the river, as still as you are.","\u96F2\u304C\u5DDD\u306B\u6620\u308A\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u304F\u3089\u3044\u9759\u304B\u3067\u3059\u3002"]];function TE(i){i.add(Mp),i.add([["Quedarme quieto","Stay still","\u3058\u3063\u3068\u3059\u308B"],["Seguir el r\xEDo","Follow the river","\u5DDD\u3092\u9032\u3080"],["Una lib\xE9lula se posa en la proa.","A dragonfly lands on the bow.","\u30C8\u30F3\u30DC\u304C\u8239\u9996\u306B\u6B62\u307E\u308A\u307E\u3057\u305F\u3002"],["Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a.","Staying still counts too. A keepsake for the cabin.","\u3058\u3063\u3068\u3057\u3066\u3044\u308B\u306E\u3082\u5927\u5207\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u3002"]])}var Ox=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},AE=()=>{try{return JSON.parse(localStorage.getItem(Hx)||"{}")||{}}catch{return{}}};var Ei=null,bp=!1;function RE(){if(Ei||typeof document=="undefined")return;try{TE(window.UX)}catch{}Ei=document.createElement("button"),Ei.type="button",Ei.id="stillBtn",Ei.style.cssText="position:fixed;left:12px;bottom:max(96px,calc(env(safe-area-inset-bottom) + 88px));z-index:58;min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:rgba(32,34,70,.82);color:#fbf1e0;font:600 .85rem system-ui;cursor:pointer;display:none";let i=e=>{try{return UX.tr(e)}catch{return e}},t=()=>{Ei.textContent=i(cn.on?"Seguir el r\xEDo":"Quedarme quieto")};t(),Ei.onclick=()=>{cn.on=!cn.on,cn.t=0,cn.ev=0,bp=!1,t();try{UX.hap(8)}catch{}},document.body.appendChild(Ei)}var CE=i=>{Ei||RE(),Ei&&(Ei.style.display=i?"block":"none")};function zx(i,t,e){if(t&&(!Ei||Ei.style.display==="none")&&CE(!0),_p-=i,_p<=0&&(_p=.25,cn.menu=wE()),cn.k+=((cn.on||cn.menu?1:0)-cn.k)*Math.min(1,i*(cn.menu?3:1.2)),!!cn.on){if(cn.t+=i,cn.ev===0&&cn.t>=20){cn.ev=1,Lr("libelula");try{UX.say(UX.tr("Una lib\xE9lula se posa en la proa."))}catch{}try{e&&e()}catch{}}else if(cn.ev>=1&&cn.t>=20+cn.ev*50){let n=Mp[(cn.ev-1)%Mp.length];cn.ev++;try{UX.say(UX.tr(n[0]))}catch{}try{e&&e()}catch{}}if(!bp&&cn.t>=45){bp=!0;let n=AE();if(n.d!==Ox()){n.d=Ox(),n.n=(n.n||0)+1;try{localStorage.setItem(Hx,JSON.stringify(n))}catch{}try{UX.say(UX.tr("Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a."))}catch{}}}}}var Sp=0;function kx(i,t){if(ot.started){let e=F.hold||F.key.up,n=Ie(mr.steer+(F.key.r?1:0)-(F.key.l?1:0),-1,1);zx(i,!0,()=>Zn(F.px,F.pz));let s=1-cn.k,r=ot.X.photo?0:2.6*(1-.85*ot.cineW)*s;F.v+=(r-F.v)*(cn.menu?3:.5)*i;let o=_n(t),a=n*(.55+Math.min(F.v,6)/6*.45);F.psi+=a*i,Math.abs(n)<.1&&(F.psi+=(o-F.psi)*.32*i),F.psi=Ie(F.psi,o-1.35,o+1.35),window.__lock!=null&&(F.psi=window.__lock),F.steer+=(n-F.steer)*3*i,F.px+=Math.sin(F.psi)*F.v*i+Math.sin(o)*1.1*s*i,F.pz+=-Math.cos(F.psi)*F.v*i-Math.cos(o)*1.1*s*i;let l=-F.pz,c=qt(l),u=ge(l)-1.7,h=F.px-c;if(Math.abs(h)>u&&(F.px=c+Math.sign(h)*u,F.v>1.2&&F.t-F.bumpT>1.2&&($t.bump(),F.bumpT=F.t),F.v*=.6,F.psi+=(_n(l)-F.psi)*.4),F.dist=Math.max(F.dist,l),Sp-=i,Math.abs(n)>.25&&Sp<=0){Sp=.7;let d=n>0?1:-1,f=new D(d*1.2,0,.3);Ue.localToWorld(f),Zn(f.x,f.z)}}}var ut=(i,t,e,n,s,r,o,a,l)=>{let c=new W(new Fn(t,e,n),Tt(s,l));return c.position.set(r,o,a),i.add(c),c},xe=(i,t,e,n,s,r,o,a,l=7,c)=>{let u=new W(new ce(t,e,n,l),Tt(s,c));return u.position.set(r,o,a),i.add(u),u},Me=(i,t,e,n,s,r,o=.7)=>{let a=oi(t,e);return a.position.set(n,s,r),a.userData.base=o,i.add(a),Gr.push(a),a},Ep=new Map;function Tp(i,t,e,n=64,s=256){let r=i+t+n;if(Ep.has(r))return Ep.get(r);let o=document.createElement("canvas");o.width=n,o.height=s;let a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.fillRect(0,0,n,5),a.fillRect(0,s-5,n,5);let l=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);a.font="bold "+l+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',a.textAlign="center",a.textBaseline="middle";let c=[...i].length;[...i].forEach((h,d)=>a.fillText(h,n/2,s/(c*2)+d*s/c));let u=new yi(o);return u.colorSpace=An,Ep.set(r,u),u}function Gx(i,t,e,n,s,r){let o=t(e,n),a=new zt;a.position.set(e,o,n),i.add(a),xe(a,.07,.09,6.4,4864562,0,3.2,0,5),ut(a,1.3,.09,.09,4864562,.62,6,0);let l=new W(new rn(1.15,4.4),new pe({gradientMap:Ae,map:Tp(s,r,"#f6efe0"),side:Zt}));return l.userData.noMerge=!0,l.position.set(.62,3.75,0),a.add(l),a.userData.sw=1,gs.push({b:l,ph:e}),a}function Wr(i,t,e,n,s=1){let r=new zt;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let o=11052706;xe(r,.5,.62,.3,o,0,.15,0,8),xe(r,.17,.2,1.3,o,0,.95,0,6),xe(r,.45,.3,.2,o,0,1.7,0,8),ut(r,.62,.55,.62,o,0,2.05,0),ut(r,.34,.34,.66,16767392,0,2.05,0).material=new fe({color:16767392}),ut(r,.66,.34,.34,16767392,0,2.05,0).material=new fe({color:16767392});let a=new W(new Te(.62,.5,4),Tt(o));a.rotation.y=Math.PI/4,a.position.y=2.6,r.add(a);let l=new W(new Jt(.11,6,5),Tt(o));return l.position.y=2.92,r.add(l),Me(r,16762746,2.6,0,2.05,0,.8),r}function IE(i,t,e,n){for(let o of[-1,1])xe(i,.22,.3,10,6965818,o*(e+1.6),t(o*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=xe(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let o=0;o<12;o++){let a=(o+.5)/12,l=-s/2+a*s,c=new W(new rn(.42,1),new pe({gradientMap:Ae,color:16777215,side:Zt}));c.position.set(l,7.9,n),c.rotation.set(0,0,o%2?.18:-.18),i.add(c)}for(let o of[-1,1]){let a=new W(new Te(.3,1,6),Tt(15128736));a.position.set(o*(e*.5),7.8,n),a.rotation.x=Math.PI,i.add(a)}}function Xr(i,t,e,n,s,r){for(let o of[-1,1])Gx(i,t,o*(e+1.6),54,n,r),Gx(i,t,o*(e+3.6),49,n,r),Wr(i,t,o*(e+2.8),42);s&&IE(i,t,e,37)}function Nh(i,t,e,n,s,r=1){let o=new W(new Te(t,e,4),Tt(s));o.rotation.y=Math.PI/4,o.position.y=n,o.scale.z=r,i.add(o);let a=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([l,c])=>{let u=new W(new Te(.32,1.3,5),Tt(s));u.position.set(l*a,n-e/2+.55,c*a*r),u.rotation.set(c*.7,0,-l*.7),i.add(u)})}function Vx(i,t,e,n){let s=new zt;s.position.set(t,e,n),i.add(s),ut(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let o=0;o<4;o++){let a=4.3-o*.75;ut(s,a,2.3,a,o%2?15853267:15326664,0,r+1.15,0),ut(s,a+.12,.18,a+.12,11880250,0,r+.1,0);for(let[l,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])xe(s,.1,.1,2.3,11880250,l*a/2,r+1.15,c*a/2,6);Nh(s,(a/2+.95)/.707,1.5,r+2.9,5591134);for(let[l,c,u]of[[1,0,1],[-1,0,1],[0,1,0],[0,-1,0]]){let h=ut(s,u?.12:a*.42,1,u?a*.42:.12,3813164,l*(a/2+.02),r+1.3,c*(a/2+.02));ut(s,u?.16:a*.5,.1,u?a*.5:.16,11880250,l*(a/2+.03),r+1.88,c*(a/2+.03))}ut(s,a+.9,.1,a+.9,11880250,0,r+.32,0);for(let l of[-1,1])ut(s,a+.9,.07,.07,14264410,0,r+.75,l*(a+.9)/2),ut(s,.07,.07,a+.9,14264410,l*(a+.9)/2,r+.75,0);r+=3.1}xe(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let o=0;o<6;o++)xe(s,.55-o*.07,.55-o*.07,.12,14264410,0,r+.2+o*.62,0,8);return Me(s,16762746,5,0,3,3.4,.7),s}function Wx(i,t,e,n,s,r){let o=new zt;return o.position.set(t,e,n),o.scale.setScalar(s),i.add(o),[-2.2,2.2].forEach(a=>xe(o,.3,.36,6,r,a,3,0,8)),ut(o,6.4,.4,.55,2894382,0,6.4,0),[-1,1].forEach(a=>{let l=ut(o,1.1,.36,.55,2894382,a*3.55,6.55,0);l.rotation.z=a*.28}),[-2.2,2.2].forEach(a=>xe(o,.42,.46,.5,12170669,a,.25,0,8)),ut(o,5.6,.35,.4,r,0,5.4,0),ut(o,.5,.9,.4,r,0,5.85,0),o}function Uh(i,t){let e=new zt,n=16184302,s=15328474,r=new W(new Jt(.5,10,8),Tt(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let o=new W(new Te(.2,.7,5),Tt(s));o.rotation.x=-Math.PI/2-.3,o.position.set(0,1.35,-.85),e.add(o),xe(e,.045,.045,1.1,4012598,-.12,.55,.05,4),xe(e,.045,.045,1.1,4012598,.12,.55,.05,4);let a=new zt;a.userData.noMerge=!0,a.position.set(0,1.6,.55),e.add(a);let l=xe(a,.07,.09,1,n,0,.45,.05,5);l.rotation.x=-.35;let c=xe(a,.06,.07,.7,n,0,1.05,.3,5);c.rotation.x=.45;let u=new W(new Jt(.14,8,6),Tt(n));u.position.set(0,1.4,.55),a.add(u);let h=new W(new Te(.05,.5,4),Tt(14918218));return h.rotation.x=Math.PI/2,h.position.set(0,1.38,.9),a.add(h),e.scale.setScalar(i),gs.push({nk:a,ph:t}),e}var gr=new $e({transparent:!0,depthWrite:!1,side:Zt,uniforms:{t:{value:0},fogCol:{value:new ct(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`}),Fh=new $e({transparent:!0,depthWrite:!1,blending:Wn,uniforms:{map:{value:ri},k:{value:1}},vertexShader:"attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`}),wp=new ve,Lh=new D;function Bh(i){i.updateMatrixWorld(!0),wp.copy(i.matrixWorld).invert();let t=new Map,e=[],n=[];i.traverse(s=>{if(s.isSprite&&s.userData.base!=null){e.push(s);return}if(!s.isMesh||s.isInstancedMesh||s.material.isShaderMaterial||!s.material.isMaterial)return;for(let c=s;c&&c!==i;c=c.parent)if(c.userData.noMerge)return;let r=s.material,o=[r.type,r.color.getHex(),r.emissive?r.emissive.getHex():0,r.side,r.map?r.map.uuid:0,r.transparent,r.opacity,r.depthWrite].join("|"),a=s.geometry;a=a.index?a.toNonIndexed():a.clone();for(let c of Object.keys(a.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&a.deleteAttribute(c);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new Gt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(wp.clone().multiply(s.matrixWorld));let l=t.get(o);l||(l={mat:r,geos:[]},t.set(o,l)),l.geos.push(a),n.push(s)});for(let s of n)s.parent&&s.parent.remove(s),s.geometry.dispose(),s.material.dispose&&![...t.values()].some(r=>r.mat===s.material)&&s.material.dispose();for(let s of t.values()){let r=Us(s.geos);if(s.geos.forEach(a=>a.dispose()),!r)continue;let o=new W(r,s.mat);i.add(o)}if(e.length){let s=e.length,r=new rn(1,1),o=new Ja;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=new Float32Array(s*3),l=new Float32Array(s),c=new Float32Array(s*3),u=new Float32Array(s);e.forEach((d,f)=>{Lh.setFromMatrixPosition(d.matrixWorld).applyMatrix4(wp),a.set([Lh.x,Lh.y,Lh.z],f*3),l[f]=d.scale.x,c.set([d.material.color.r,d.material.color.g,d.material.color.b],f*3),u[f]=d.userData.base,d.parent&&d.parent.remove(d),d.material.dispose()}),o.setAttribute("iC",new Gi(a,3)),o.setAttribute("iS",new Gi(l,1)),o.setAttribute("iCol",new Gi(c,3)),o.setAttribute("iB",new Gi(u,1)),o.instanceCount=s;let h=new W(o,Fh);h.frustumCulled=!1,h.renderOrder=4,i.add(h)}return i}function Ap(i){let t=new Set([Fh,gr,Fs.material]);i.traverse(e=>{if(e.isInstancedMesh&&e.userData.keep){e.dispose();return}e.geometry&&e.geometry.dispose(),(e.material?Array.isArray(e.material)?e.material:[e.material]:[]).forEach(s=>{t.has(s)||s.dispose()})});for(let e=gs.length-1;e>=0;e--){let n=gs[e],r=n.b||n.nk;for(;r&&r!==i;)r=r.parent;r===i&&gs.splice(e,1)}for(let e=Gr.length-1;e>=0;e--){let n=Gr[e];for(;n&&n!==i;)n=n.parent;n===i&&Gr.splice(e,1)}}var Oh=new ct,Xx=new Map,qx=new ve,Yx=new gn,Zx=new ki,Jx=new D,$x=new D(1,1,1),qr=i=>{if(Array.isArray(i))return i;let t=Xx.get(i);return t||(Oh.set(i),t=[Oh.r,Oh.g,Oh.b],Xx.set(i,t)),t},Ln=(i,t)=>{let e=qr(i);return[Math.min(1.4,e[0]*t),Math.min(1.4,e[1]*t),Math.min(1.4,e[2]*t)]},Kx=new Map;function PE(i){let t=Kx.get(i);return t||(t=new hn(1,i),t=t.index?t.toNonIndexed():t,Kx.set(i,t)),t}var wi=class{constructor(){this.P=new Float32Array(1<<17),this.C=new Float32Array(1<<17),this.n=0,this.m=new ve,this.st=[],this.ref=null}_grow(){let t=new Float32Array(this.P.length*2),e=new Float32Array(this.C.length*2);t.set(this.P),e.set(this.C),this.P=t,this.C=e}save(){return this.st.push(this.m.clone()),this}restore(){return this.m=this.st.pop(),this}T(t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return Zx.set(r,s,o,"YXZ"),Yx.setFromEuler(Zx),Jx.set(t,e,n),$x.set(a,l,c),qx.compose(Jx,Yx,$x),this.m.multiply(qx),this}at(t,e,n,s,r,o,a,l){return this.save(),this.T(t,e,n,s||0,o||0,a||0,l||1),r(this),this.restore(),this}tri(t,e,n,s){s=qr(s);let r=this.m.elements,o=r[0],a=r[1],l=r[2],c=r[4],u=r[5],h=r[6],d=r[8],f=r[9],m=r[10],x=r[12],g=r[13],p=r[14],y=t[0],S=t[1],_=t[2],v=e[0],b=e[1],T=e[2],M=n[0],E=n[1],R=n[2],I=o*y+c*S+d*_+x,L=a*y+u*S+f*_+g,P=l*y+h*S+m*_+p,C=o*v+c*b+d*T+x,N=a*v+u*b+f*T+g,O=l*v+h*b+m*T+p,z=o*M+c*E+d*R+x,$=a*M+u*E+f*R+g,B=l*M+h*E+m*R+p;if(this.ref){let Vt=this.ref,nt=o*Vt[0]+c*Vt[1]+d*Vt[2]+x,at=a*Vt[0]+u*Vt[1]+f*Vt[2]+g,At=l*Vt[0]+h*Vt[1]+m*Vt[2]+p,Ht=C-I,St=N-L,ne=O-P,un=z-I,re=$-L,_e=B-P,Fe=St*_e-ne*re,ie=ne*un-Ht*_e,Le=Ht*re-St*un;if(Fe*((I+C+z)/3-nt)+ie*((L+N+$)/3-at)+Le*((P+O+B)/3-At)<0){let Ee=C;C=z,z=Ee,Ee=N,N=$,$=Ee,Ee=O,O=B,B=Ee}}this.n+9>this.P.length&&this._grow();let G=this.P,K=this.C,ht=this.n,It=s[0],he=s[1],te=s[2];return G[ht]=I,G[ht+1]=L,G[ht+2]=P,G[ht+3]=C,G[ht+4]=N,G[ht+5]=O,G[ht+6]=z,G[ht+7]=$,G[ht+8]=B,K[ht]=It,K[ht+1]=he,K[ht+2]=te,K[ht+3]=It,K[ht+4]=he,K[ht+5]=te,K[ht+6]=It,K[ht+7]=he,K[ht+8]=te,this.n=ht+9,this}orient(t){return this.ref=t,this.rw=null,this}free(){return this.ref=null,this.rw=null,this}quad(t,e,n,s,r){return this.tri(t,e,n,r),this.tri(t,n,s,r),this}box(t,e,n,s,r=0,o=0,a=0,l=!0){s=qr(s);let c=r-t/2,u=r+t/2,h=o-e/2,d=o+e/2,f=a-n/2,m=a+n/2,x=this.ref;return this.ref=null,this.quad([u,h,m],[u,h,f],[u,d,f],[u,d,m],s),this.quad([c,h,f],[c,h,m],[c,d,m],[c,d,f],s),this.quad([c,d,m],[u,d,m],[u,d,f],[c,d,f],s),l&&this.quad([c,h,f],[u,h,f],[u,h,m],[c,h,m],s),this.quad([c,h,m],[u,h,m],[u,d,m],[c,d,m],s),this.quad([u,h,f],[c,h,f],[c,d,f],[u,d,f],s),this.ref=x,this}boxB(t,e,n,s,r=0,o=0,a=0,l=!1){return this.box(t,e,n,s,r,o+e/2,a,l)}cyl(t,e,n,s,r,o=0,a=0,l=0,c=!1){r=qr(r);let u=this.ref;this.ref=null;let h=(m,x)=>{let g=[];for(let p=0;p<s;p++){let y=p/s*6.2832;g.push([o+m*Math.cos(y),a+x,l+m*Math.sin(y)])}return g},d=h(t,0),f=h(e,n);for(let m=0;m<s;m++){let x=(m+1)%s;e<1e-4?this.tri(d[m],[o,a+n,l],d[x],r):this.quad(d[m],f[m],f[x],d[x],r)}if(e>=1e-4)for(let m=0;m<s;m++)this.tri([o,a+n,l],f[(m+1)%s],f[m],r);if(c)for(let m=0;m<s;m++)this.tri([o,a,l],d[m],d[(m+1)%s],r);return this.ref=u,this}ball(t,e,n=0,s=0,r=0,o=1,a=1,l=1,c=1){e=qr(e);let u=PE(c),h=u.attributes.position,d=this.ref;this.ref=null;for(let f=0;f<h.count;f+=3){let m=[0,1,2].map(x=>[n+h.getX(f+x)*t*o,s+h.getY(f+x)*t*a,r+h.getZ(f+x)*t*l]);this.tri(m[0],m[1],m[2],e)}return this.ref=d,this}geo(t,e){e=qr(e);let n=t.attributes.position,s=t.index,r=s?s.count:n.count,o=this.ref;this.ref=null;let a=l=>{let c=s?s.getX(l):l;return[n.getX(c),n.getY(c),n.getZ(c)]};for(let l=0;l<r;l+=3)this.tri(a(l),a(l+1),a(l+2),e);return this.ref=o,this}loft(t,e,n=!0){let s=t.length,r=t[0].length;for(let o=0;o<s-1;o++)for(let a=0;a<(n?r:r-1);a++){let l=(a+1)%r;this.quad(t[o][a],t[o+1][a],t[o+1][l],t[o][l],qr(typeof e=="function"?e(a,o):e))}return this}count(){return this.n/9}mesh(t){let e=this.n,n=this.P.subarray(0,e),s=new jt;s.setAttribute("position",new Gt(n,3));let r=new Float32Array(e);for(let a=0;a<e;a+=9){let l=n[a+3]-n[a],c=n[a+4]-n[a+1],u=n[a+5]-n[a+2],h=n[a+6]-n[a],d=n[a+7]-n[a+1],f=n[a+8]-n[a+2],m=c*f-u*d,x=u*h-l*f,g=l*d-c*h,p=Math.sqrt(m*m+x*x+g*g)||1;m/=p,x/=p,g/=p;for(let y=0;y<9;y+=3)r[a+y]=m,r[a+y+1]=x,r[a+y+2]=g}s.setAttribute("normal",new Gt(r,3)),s.setAttribute("color",new Gt(this.C.subarray(0,e),3)),s.setAttribute("uv",new Gt(new Float32Array(e/3*2),2)),s.computeBoundingSphere();let o=new W(s,t);return o.userData.noMerge=!0,o}};var jx=[12731706,4022170,15253850,5214058,14256806,8014490,15790310,3095130,15043130],DE=[15781806,15253658,15980219],Hh=[];function ny(i,t,e,n,s,r,o,a){let{S:l,E:c,rnd:u}=i;l.at(t,e,n,s,h=>{h.cyl(.37,.2,1.28,7,r,0,0,0).cyl(.28,.27,.16,7,r===15790310?X.red:Ln(X.woodD,1.2),0,.62,0).ball(.17,DE[u()*3|0],0,1.42,0,1,1.1,1,0).ball(.185,X.black,0,1.48,-.03,1,.8,1,0),o&&h.cyl(.04,.04,.7,4,X.woodD,.38,.7,.28),a&&(h.box(.1,.1,.55,r,.3,1.1,.1),h.box(.1,.1,.55,r,-.3,1.1,.1))}),o&&(c.at(t,e,n,s,h=>h.cyl(.13,.13,.34,6,16767392,.38,.38,.28)),u()<.45&&Me(i.h,16762746,2.6,t+Math.sin(s)*.28+Math.cos(s)*.38,e+.55,n+Math.cos(s)*.28-Math.sin(s)*.38,.85))}function Pl(i,t,e,n,s,r){let{fr:o,rnd:a}=i;for(let l=0;l<n;l++){let c=t+(a()-.5)*s*2,u=e+(a()-.5)*s*.9,h=o.ground(c,u);h<.35||ny(i,c,h,u,r+(a()-.5)*1.2,jx[a()*jx.length|0],a()<.5,!1)}}function Qx(i,t,e,n){let{S:s,E:r,CL:o,fr:a,rnd:l}=i,c=Math.max(a.ground(t,e),.4),u=[[X.red,X.cream],[X.blue,X.cream],[X.orange,X.cream],[X.green,X.cream]][l()*4|0];s.at(t,c,e,n,f=>{for(let m of[-1,1])for(let x of[-1,1])f.cyl(.08,.1,2.7,5,X.woodD,m*1.65,0,x*.9);f.box(3.5,.95,1.3,X.woodM,0,.48,.5,!1).box(3.7,.12,1.5,Ln(X.woodM,1.25),0,.98,.5);for(let m=0;m<3;m++)f.ball(.17,[X.red,X.cream,15292282,X.orange][l()*4|0],-1.1+m*1.1,1.28,.45,1,1,1,0).cyl(.02,.02,.5,3,X.woodD,-1.1+m*1.1,1,.45);f.box(.7,.5,.5,9071178,1.2,1.3,.6).box(.6,.3,.5,13199183,-.2,1.2,.62)}),o.at(t,c,e,n,f=>{for(let x=0;x<7;x++){let g=-1.9+3.8*x/7,p=-1.9+3.8*(x+1)/7,y=x%2?u[1]:u[0];f.quad([g,3,-1.1],[p,3,-1.1],[p,2.55,1.35],[g,2.55,1.35],y),f.tri([g,2.55,1.35],[p,2.55,1.35],[(g+p)/2,2.15,1.4],y)}f.quad([-1.9,2.55,-1.1],[1.9,2.55,-1.1],[1.9,3,-1.1],[-1.9,3,-1.1],u[0])});let h=Math.cos(n),d=Math.sin(n);for(let f of[-1,1])r.at(t,c,e,n,m=>m.cyl(.28,.28,.55,6,X.red,f*1.7,1.85,1.2)),Me(i.h,16757610,3.3,t+f*1.7*h+1.2*d,c+2.1,e-f*1.7*d+1.2*h,.85)}function ty(i,t,e){let{S:n,fr:s}=i,r=Math.max(s.ground(t,e),.4),o=r+1.55;n.at(t,o,e,0,l=>{l.at(0,0,0,0,c=>c.cyl(1,1,1.5,14,8014382,0,-.75,0),0,0,Math.PI/2);for(let c of[-1,1])l.at(c*.6,0,0,0,u=>u.cyl(1.05,1.05,.16,14,X.red,0,-.08,0),0,0,Math.PI/2);for(let c of[-1,1])for(let u=0;u<14;u++){let h=u/14*6.283;l.ball(.06,X.gold,c*.78,Math.cos(h)*1,Math.sin(h)*1,1,1,1,0)}for(let c of[-1,1])l.box(.3,1.4,.3,X.woodD,c*.6,-1,.95),l.box(.3,1.4,.3,X.woodD,c*.6,-1,-.95);l.box(1.8,.25,2.4,X.woodD,0,-1.4,0)});let a=new pe({gradientMap:Ae,color:15324844,side:Zt,fog:!0});for(let l of[-1,1]){let c=new W(new vi(.97,20),a);c.userData.noMerge=!0,c.position.set(t+l*.7,o,e),c.rotation.y=Math.PI/2,i.h.add(c),i.drums.push(c)}for(let l of[-1,1]){let c=t+l*1.95;ny(i,c,Math.max(s.ground(c,e),.4),e,Math.atan2(-l,0),l>0?15790310:X.red,!1,!0)}}function ey(i,t,e){let{S:n,CL:s,fr:r}=i,o=Math.max(r.ground(t,e),.4),a=12;n.cyl(.1,.14,a,5,X.woodD,t,o,e),n.ball(.28,X.gold,t,o+a+.2,e,1,1,1,1),n.cyl(.12,0,1.3,4,X.gold,t,o+a+.4,e);let l=[X.black,X.red,X.blue,15292282,X.green];s.at(t,o,e,0,c=>{l.forEach((u,h)=>{let d=a-.8-h*1.7,f=3.6-h*.25;c.at(.1,d,0,.2*h,m=>{m.cyl(.62-h*.04,.14,f,8,u,0,0,0)},0,-Math.PI/2+.08*h),c.ball(.12,16777215,.5,d+.25,.45,1,1,1,0),c.ball(.12,16777215,.5,d+.25,-.45,1,1,1,0)}),[16234441,16773792,10146047,10937249,16756838].forEach((u,h)=>c.quad([0,a-.4,.25*h-.5],[0,a-.7,.25*h-.5],[2.8,a-2-h*.12,.25*h-.5],[2.8,a-1.7-h*.12,.25*h-.5],u))})}function LE(i,t){let{S:e,E:n,CL:s,fr:r}=i,o=r.river(t),a=o.zc-o.hw-1.8,l=o.zc+o.hw+1.8,c=12.8,u=3.9;for(let f of[a,l]){let m=Math.max(r.ground(t,f),.2);e.cyl(.14,.2,c-m+.8,6,X.woodM,t,m-.3,f),e.ball(.3,X.gold,t,c+.8,f,1,1,1,0)}let h=f=>[t,c-u*Math.sin(Math.PI*f),a+(l-a)*f],d=Math.max(12,Math.round((l-a)/1.8));for(let f=0;f<d;f++)zs(e,h(f/d),h((f+1)/d),.09,X.woodD);for(let f=1;f<d;f++){let m=h(f/d),x=Hh[(f+Math.abs(t|0))%4];e.box(.04,.35,.04,X.woodD,m[0],m[1]-.17,m[2],!1),n.cyl(.42,.34,.95,6,x,m[0],m[1]-1.3,m[2]),e.cyl(.44,0,.22,6,X.black,m[0],m[1]-.34,m[2]),f%3===0&&Me(i.h,16757610,3.6,m[0],m[1]-.85,m[2],.8)}for(let f=0;f<d;f++){let m=h((f+.1)/d),x=h((f+.9)/d);s.tri([m[0],m[1]-.05,m[2]],[x[0],x[1]-.05,x[2]],[(m[0]+x[0])/2,Math.min(m[1],x[1])-.7,(m[2]+x[2])/2],[X.red,X.cream,X.purple,X.orange][f%4])}}function*iy(i){Hh.length=0,Hh.push(X.red,X.cream,X.orange,15292282);let{S:t,E:e,CL:n,fr:s,rnd:r}=i;for(let l of[-86,-62,-38,38,62,86])LE(i,l),yield;for(let l=0;l<40;l++){let c=-62+l*3.15;Math.abs(c+10)<9||(e.cyl(.36,.3,.8,6,Hh[l%4],c,Kt.PH+1.6,Kt.ZF+.5),t.box(.04,.5,.04,X.woodD,c,Kt.PH+2.5,Kt.ZF+.5,!1),l%3===0&&Me(i.h,16757610,3.2,c,Kt.PH+2,Kt.ZF+.7,.8))}for(let l=0;l<14;l++){let c=-80+l*12+r()*3;if(Math.abs(c+10)<10)continue;let u=Kt.PO-.8,h=Math.max(s.ground(c,u),.3);Rp(i,c,h,u,[X.red,X.purple,X.blue,X.orange,X.green][l%5])}let o=[-76,-60,-36,16,28,40,52,64,76],a=[-52,-30,-12,6,24,44,62];for(let l of o)Qx(i,l,Kt.PO-2.8,0),yield;for(let l of a){let c=s.river(l);Qx(i,l,c.zc+c.hw+3.2,Math.PI),yield}for(let l of o)Pl(i,l,Kt.PO-.4,2,3,0),yield;for(let l of a){let c=s.river(l);Pl(i,l,c.zc+c.hw+1.2,2,3,Math.PI),yield}Pl(i,-10,Kt.PO+1,2,1.2,0),Pl(i,-16,Kt.PO-6,4,3,0),Pl(i,-4,Kt.PO-6,4,3,0),ty(i,-24,Kt.PO-4.5),ty(i,4,Kt.PO-4.5),ey(i,-17,Kt.PO-1.6),ey(i,-3,Kt.PO-1.6)}var X={plaster:16184300,plasterS:15131093,tile:5726575,tile2:6713727,ridge:15658214,black:2763827,woodD:3811876,woodM:7162426,red:11876396,redD:9251363,gold:14989394,stone:10395033,stoneD:6118490,gravel:14341056,win:16767120,pink:qi.c,pink2:qi.c2,pink3:16304598,trunk:7294787,purple:5913996,cream:16773590,orange:15766330,blue:3104666,green:5214047},{PH:pn}=Kt,NE=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Wh(i,t,e,n,s,r,o,a,l,c={}){var _;let u=c.n||5,h=(_=c.flare)!=null?_:.7,d=Math.max(4,Math.ceil(2*s/1.5)),f=Math.max(4,Math.ceil(2*r/1.5)),m=[],x=c.tile||X.tile,g=c.tile2||X.tile2,p=new Set([0,d,d+f,2*d+f]),y=2*d+2*f;for(let v=0;v<=u;v++){let b=v/u,T=s+(o-s)*b,M=r+(a-r)*b,E=e+l*Math.pow(b,1.55),R=[],I=(L,P)=>{let C=Math.pow(Math.abs(L)/Math.max(T,.01),6)*Math.pow(Math.abs(P)/Math.max(M,.01),6);R.push([t+L,E+h*Math.pow(1-b,2.2)*Math.min(1,C*1.1),n+P])};for(let L=0;L<d;L++)I(-T+2*T*L/d,-M);for(let L=0;L<f;L++)I(T,-M+2*M*L/f);for(let L=0;L<d;L++)I(T-2*T*L/d,M);for(let L=0;L<f;L++)I(-T,M-2*M*L/f);m.push(R)}i.orient([t,e-40,n]).loft(m,(v,b)=>p.has(v)||p.has((v+1)%y)?X.ridge:v%2?x:g);let S=m[0].map(v=>[v[0],v[1]-.55,v[2]]);return i.loft([m[0],S],X.plaster),i.free(),m}function Pp(i,t,e,n,s,r,o,a,l,c,u={}){var S;Wh(i,t,e,n,s,r,o,a,l,u);let h=e+l,d=(S=u.ov)!=null?S:.9,f=o+d,m=Math.max(4,Math.ceil(2*f/1.5)),x=5,g=u.tile||X.tile,p=u.tile2||X.tile2,y=[];for(let _=0;_<=x;_++){let v=-a+2*a*_/x,b=1-Math.abs(v)/a;y.push([v,c*Math.pow(b,1.35)])}i.orient([t,h-40,n]);for(let _=0;_<x;_++)for(let v=0;v<m;v++){let b=t-f+2*f*v/m,T=t-f+2*f*(v+1)/m,M=y[_],E=y[_+1];i.quad([b,h+M[1]+.15,n+M[0]],[T,h+M[1]+.15,n+M[0]],[T,h+E[1]+.15,n+E[0]],[b,h+E[1]+.15,n+E[0]],v%2?g:p)}for(let _ of[-1,1]){let v=t+_*o;i.orient([t,h,n]);for(let T=0;T<x;T++){let M=y[T],E=y[T+1];i.quad([v,h,n+M[0]],[v,h,n+E[0]],[v,h+E[1],n+E[0]],[v,h+M[1],n+M[0]],X.plaster)}let b=t+_*(o+d);i.orient([t,h,n]);for(let T=0;T<x;T++){let M=y[T],E=y[T+1];i.quad([b,h+M[1]-.1,n+M[0]],[b,h+E[1]-.1,n+E[0]],[b,h+E[1]+.3,n+E[0]],[b,h+M[1]+.3,n+M[0]],X.woodD)}i.free(),i.box(.3,.9,.9,X.gold,v+_*.1,h+c*.38,n)}i.free(),i.box(2*f,.5,.7,X.ridge,t,h+c+.35,n);for(let _ of[-1,1])i.box(1.1,1.2,1.2,X.black,t+_*f,h+c+.55,n);return h+c+.55}function Dp(i,t,e,n,s,r,o,a={}){let l=Math.max(2,Math.ceil(s/1.7)),c=4,u=a.tile||X.tile,h=a.tile2||X.tile2,d=[];for(let m=0;m<=c;m++){let x=-r/2+r*m/c,g=1-Math.abs(x)/(r/2);d.push([x,o*Math.pow(g,1.3)+(m===0||m===c?.18:0)])}i.orient([t,e-30,n]);for(let m=0;m<c;m++)for(let x=0;x<l;x++){let g=t-s/2+s*x/l,p=t-s/2+s*(x+1)/l,y=d[m],S=d[m+1];i.quad([g,e+y[1],n+y[0]],[p,e+y[1],n+y[0]],[p,e+S[1],n+S[0]],[g,e+S[1],n+S[0]],(m===c/2-.5||c/2+.5,x%2?u:h))}if(!a.noCap)for(let m of[-1,1]){let x=t+m*s/2;for(let g=0;g<c;g++){let p=d[g],y=d[g+1];i.quad([x,e,n+p[0]],[x,e,n+y[0]],[x,e+y[1],n+y[0]],[x,e+p[1],n+p[0]],X.plaster)}}i.free(),i.box(s,.38,.7,X.ridge,t,e+o+.2,n);let f=[[t-s/2,e-.5,n-r/2],[t+s/2,e-.5,n-r/2]];i.quad([t-s/2,e,n-r/2],[t+s/2,e,n-r/2],f[1],f[0],X.plaster),i.quad([t+s/2,e,n+r/2],[t-s/2,e,n+r/2],[t-s/2,e-.5,n+r/2],[t+s/2,e-.5,n+r/2],X.plaster)}function ay(i,t,e,n,s){let o=[];for(let a=0;a<=16;a++){let l=-t/2+t*a/16,c=1-Math.abs(l)/(t/2);o.push([l,e*(.5-.5*Math.cos(Math.PI*Math.pow(c,.9)))])}i.save().T(0,0,0,0,s),i.orient([0,-3,-n/2]);for(let a=0;a<16;a++){let l=o[a],c=o[a+1],u=a%2?X.tile:X.tile2;i.quad([l[0],l[1]+.2,.95],[c[0],c[1]+.2,.95],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],u),i.quad([l[0],l[1]-.1,.75],[c[0],c[1]-.1,.75],[c[0],c[1]+.2,.95],[l[0],l[1]+.2,.95],X.plaster),i.quad([l[0],-.7,.5],[c[0],-.7,.5],[c[0],c[1]-.1,.5],[l[0],l[1]-.1,.5],X.plaster),i.quad([l[0],l[1]-.55,.62],[c[0],c[1]-.55,.62],[c[0],c[1]+0,.62],[l[0],l[1]+0,.62],X.woodD),i.quad([l[0],-.7,-n],[c[0],-.7,-n],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],X.plaster)}i.box(.26,e*.5,n,X.ridge,0,e*.5+.3,-n/2+.45,!1),i.free(),i.ball(.5,X.gold,0,e*.55,.75,1,1,.8,1),i.restore()}function UE(i,t,e,n,s){i.save().T(0,0,0,0,s),i.orient([0,-2,-n/2]);for(let r of[-1,1])i.quad([0,e+.2,.5],[0,e+.2,-n],[r*(t/2+.45),-.1,-n],[r*(t/2+.45),-.1,.8],r>0?X.tile:X.tile2);i.tri([-t/2-.2,-.4,.5],[t/2+.2,-.4,.5],[0,e+.1,.5],X.plaster).tri([-t/2-.35,-.4,.58],[t/2+.35,-.4,.58],[0,e+.35,.58],X.woodD).tri([-t/2,-.4,.62],[t/2,-.4,.62],[0,e,.62],X.plaster),i.free().ball(.3,X.gold,0,e*.4,.7,1,1,.7,0),i.restore()}function ly(i,t=1){i.save().T(0,0,0,0,0,0,t);let e=[];for(let s=0;s<=9;s++){let r=s/9;e.push([-.4*Math.sin(r*2.4)*0+(-.1+r*.5-r*r*1.5)*1,.3+r*2.4-r*r*.2,0])}for(let s=0;s<=9;s++){let r=s/9,o=e[s],a=.52*(1-r*.8)+.08;i.ball(a,Ln(X.gold,.88+.2*(s%2)),o[0],o[1],o[2],1,1.05,.9,1),s>1&&s<9&&i.cyl(.13,0,.55,4,X.gold,o[0]-.05,o[1]+a*.85,0)}let n=e[9];i.ball(.3,X.gold,n[0]-.35,n[1]+.2,0,1.6,.5,.9,1).ball(.26,Ln(X.gold,1.1),n[0]-.7,n[1]+.55,0,1.3,.4,1.1,1),i.ball(.62,X.gold,.55,.35,0,1.35,.9,1,1).box(.9,.14,.6,X.gold,.95,.04,0).box(.9,.1,.55,X.gold,.95,.78,0).cyl(.07,0,.5,4,16777215,1.25,.15,.16).cyl(.07,0,.5,4,16777215,1.25,.15,-.16),i.ball(.1,X.black,.78,.62,.3,1,1,1,0).ball(.1,X.black,.78,.62,-.3,1,1,1,0);for(let s of[-1,1])i.cyl(.1,0,.9,4,X.red,.45,.95,s*.28);i.restore()}function sy(i,t,e,n,s,r,o,a,l){let c=[o];for(;c[c.length-1]>r+.05;){let f=c[c.length-1],m=(f-r)/(o-r);c.push(Math.max(r,f-(.85+.5*(1-m)+l()*.35)))}let u=f=>a*Math.pow((o-f)/(o-r),1.6),h=f=>{let m=u(f),x=n+m,g=s+m;return[[t-x,f,e-g],[t+x,f,e-g],[t+x,f,e+g],[t-x,f,e+g]]},d=[[0,0,-1],[1,0,0],[0,0,1],[-1,0,0]];i.orient([t,(r+o)/2,e]);for(let f=0;f<c.length-1;f++){let m=h(c[f]),x=h(c[f+1]),g=.78+.22*((c[f]-r)/(o-r));for(let p=0;p<4;p++){let y=m[p],S=m[(p+1)%4],_=x[p],v=x[(p+1)%4],b=Math.hypot(S[0]-y[0],S[2]-y[2]),T=(E,R)=>{let I=[y[0]+(S[0]-y[0])*E,y[1],y[2]+(S[2]-y[2])*E],L=[_[0]+(v[0]-_[0])*E,_[1],_[2]+(v[2]-_[2])*E];return[I[0]+(L[0]-I[0])*R,I[1]+(L[1]-I[1])*R,I[2]+(L[2]-I[2])*R]};i.quad(T(0,0),T(1,0),T(1,1),T(0,1),X.stoneD);let M=-l()*.5/b*3;for(;M<1;){let E=(1.5+l()*1.5)/b,R=M+E,I=Math.max(0,M)+.05/b*1.3,L=Math.min(1,R)-.05/b*1.3;if(L>I){let P=d[p],C=$=>$,N=.1,O=($,B)=>{let G=T($,B);return[G[0]+P[0]*N,G[1],G[2]+P[2]*N]},z=Ln(X.stone,g*(.8+l()*.34));i.quad(O(I,.06),O(L,.06),O(L,.94),O(I,.94),z)}M=R}}}i.free()}function Gh(i,t,e,n,s,r=1,o=1.4){i.S.at(t,e,n,s,a=>{a.box(r+.3,o+.3,.2,X.woodD,0,0,.1).box(r+.5,.14,.4,X.woodM,0,o/2+.28,.2);for(let l=-1;l<=1;l++)a.box(.07,o,.06,X.woodD,l*r*.3,0,.28);a.box(r,.06,.06,X.woodD,0,0,.28)}),i.E.at(t,e,n,s,a=>{a.box(r,o,.05,X.win,0,0,.2)})}function Lp(i,t,e,n,s,r,o,a,l,c={}){for(let u=0;u<a;u++){let h=(u+.5)/a-.5;for(let d of[1,-1])Gh(i,t+h*(s-3),n,e+d*(r/2),d>0?0:Math.PI,c.w,c.h)}for(let u=0;u<l;u++){let h=(u+.5)/l-.5;for(let d of[1,-1])Gh(i,t+d*(s/2),n,e+h*(r-3),d>0?Math.PI/2:-Math.PI/2,c.w,c.h)}}var FE=[0,Math.PI/2,Math.PI,-Math.PI/2];function ry(i,t,e,n,s,r,o,a,l,c){let u=n+(r-n)*c,h=s+(o-s)*c,d=e+a*Math.pow(c,1.55),f=a*1.55*Math.pow(c,.55),m=l%2?n-r:s-o,x=Math.atan2(f,Math.max(.3,m));return{px:i+(l===1?u:l===3?-u:0),py:d,pz:t+(l===0?h:l===2?-h:0),ry:FE[l],ang:x}}function zh(i,t,e,n,s){let{P:r,S:o,G:a}=i,l=n,c=0;return s.forEach((u,h)=>{let{w:d,d:f,h:m}=u;r.box(d,m,f,X.plaster,t,l+m/2,e,!1),o.box(d+.26,.7,f+.26,X.woodD,t,l+.35,e,!1),o.box(d+.22,.34,f+.22,X.woodD,t,l+m-.4,e,!1),u.wood&&o.box(d+.2,m*.36,f+.2,X.woodM,t,l+m*.2+.3,e,!1);for(let y of[-1,1])for(let S of[-1,1])o.box(.42,m,.42,X.woodD,t+y*d/2,l+m/2,e+S*f/2,!1);let x=u.nx||3,g=u.nz||2;for(let y=1;y<x;y++)for(let S of[1,-1])o.box(.2,m-1.1,.12,X.woodD,t-d/2+d*y/x,l+m/2,e+S*(f/2+.03),!1);Lp(i,t,e,l+m*.55,d,f,m,x,g,{});let p=s[h+1];if(u.ro){let y=u.ro,S=p?p.w/2:0,_=p?p.d/2:0,v=l+m-.25,b=d/2+y.o,T=f/2+y.o;if(y.irimoya){if(c=Pp(r,t,v,e,b,T,d/2-.4,f/2-.4,y.rise,y.gh,{}),y.shachi)for(let M of[-1,1])a.at(t+M*(d/2-.4+.9+.6),c-.3,e,M>0?0:Math.PI,E=>ly(E,y.shachi))}else Wh(r,t,v,e,b,T,S,_,y.rise,y);if(!y.irimoya){for(let M of y.k||[]){let E=ry(t,e,v,b,T,S,_,y.rise,M,.36);r.at(E.px,E.py,E.pz,E.ry,R=>ay(R,y.kw||8,y.kh||3.4,y.kd||5,E.ang))}for(let M of y.c||[]){let E=ry(t,e,v,b,T,S,_,y.rise,M,.42);r.at(E.px,E.py,E.pz,E.ry,R=>UE(R,y.cw||3.6,y.ch||1.6,y.cd||3,E.ang))}}l=v+y.rise}else l+=m}),{top:l,ridge:c}}function Dl(i,t,e,n,s,r,o={}){let a=o.h||5,l=o.wd||4.4;i.P.at(t,e,n,r,c=>{c.box(s,a,l,X.plaster,0,a/2,0,!1),Dp(c,0,a-.3,0,s,l+2.2,o.rise||2.4,{})}),i.S.at(t,e,n,r,c=>{c.box(s+.1,.55,l+.22,X.woodD,0,.28,0,!1),c.box(s+.1,.3,l+.2,X.woodD,0,a-.2,0,!1);let u=Math.max(1,Math.floor(s/2.6));for(let h=0;h<u;h++){let d=-s/2+s*(h+.5)/u;for(let f of[1,-1])c.at(d,a*.5,f*(l/2+.13),f>0?0:Math.PI,m=>{h%2?m.quad([-.3,-.3,0],[.3,-.3,0],[.3,.3,0],[-.3,.3,0],X.black):m.tri([-.38,-.32,0],[.38,-.32,0],[0,.4,0],X.black)})}})}function Ll(i,t,e,n,s,r,o={}){let a=n-t,l=s-e,c=Math.hypot(a,l),u=Math.atan2(-l,a),h=(t+n)/2,d=(e+s)/2,f=o.h||3,m=o.th||1.3;i.P.at(h,r,d,u,x=>{x.box(c,f,m,X.plaster,0,f/2,0,!1),Dp(x,0,f-.05,0,c,m+1.5,.95,{})}),i.S.at(h,r,d,u,x=>{x.box(c+.05,.3,m+.1,X.woodD,0,.15,0,!1);let g=Math.max(1,Math.floor(c/3));for(let p=0;p<g;p++){let y=-c/2+c*(p+.5)/g;x.at(y,f*.52,m/2+.13,0,S=>{if(p%3===0)S.tri([-.34,-.3,0],[.34,-.3,0],[0,.36,0],X.black);else if(p%3===1)S.quad([-.28,-.28,0],[.28,-.28,0],[.28,.28,0],[-.28,.28,0],X.black);else{let v=[];for(let b=0;b<8;b++)v.push([Math.cos(b/8*6.283)*.3,Math.sin(b/8*6.283)*.3,0]);for(let b=0;b<8;b++)S.tri([0,0,0],v[b],v[(b+1)%8],X.black)}})}})}function BE(i,t,e,n){let{P:s,S:r,G:o,E:a,CL:l}=i;s.box(13,4.8,7,X.plaster,t,n+2.4,e,!1),r.box(13.3,.8,7.3,X.woodD,t,n+.4,e,!1),r.box(13.2,.4,7.2,X.woodD,t,n+4.4,e,!1),r.box(4.2,3.7,.3,X.black,t,n+1.85,e+3.52,!1);for(let u of[-1,1])r.box(.55,4.2,.6,X.woodD,t+u*2.4,n+2.1,e+3.6,!1),r.box(.9,3.2,.15,X.red,t+u*3.2,n+1.7,e+3.75,!1);r.box(5.6,.55,.7,X.woodD,t,n+4.1,e+3.7,!1);for(let u of[-1,1])for(let h=0;h<2;h++)Gh(i,t+u*(4.4+h*1.5),n+2.6,e+3.5,0,.9,1.2);s.box(10,3.4,5,X.plaster,t,n+4.6+1.7,e,!1),r.box(10.26,.5,5.26,X.woodD,t,n+4.6+.25,e,!1),r.box(10.2,.3,5.2,X.woodD,t,n+4.6+3.2,e,!1),Lp(i,t,e,n+6.6,10,5,3.4,3,1,{}),Wh(s,t,n+4.55,e,6.5+1.1,3.5+1.1,5,2.5,2.2,{});let c=Pp(s,t,n+4.6+3.15,e,5+1.8,2.5+1.8,4.4,2.1,1.9,2.6,{});for(let u of[-1,1])o.at(t+u*(4.4+.9+.6),c-.3,e,u>0?0:Math.PI,h=>ly(h,.5));s.at(t,n+4.55+2.2*Math.pow(.45,1.55),e+3.5+1.1-(1.1+1.5)*.45,0,u=>ay(u,6,2.5,3,.5));for(let u=0;u<5;u++){let h=t-5+u*2.5,d=n+3.4;l.box(1.9,2,.05,X.purple,h,d,e+3.62,!1),l.at(h,d,e+3.66,0,f=>{let x=[];for(let g=0;g<10;g++)x.push([Math.cos(g/10*6.283)*.5,Math.sin(g/10*6.283)*.5,0]);for(let g=0;g<10;g++)f.tri([0,0,0],x[g],x[(g+1)%10],X.cream)})}for(let u of[-1,1,0])a.box(.9,1.3,.9,X.red,t+u*6.1,n+3.3,e+4.2),r.box(.12,.9,.12,X.woodD,t+u*6.1,n+4.4,e+4.2),Me(i.h,16757610,5,t+u*6.1,n+3.3,e+4.4,.85)}function OE(i,t,e,n){let{P:s,S:r,G:o,E:a}=i;s.box(8,4.6,6.4,X.plaster,t,n+2.3,e,!1),r.box(8.26,.6,6.66,X.woodD,t,n+.3,e,!1),r.box(8.2,.3,6.6,X.woodD,t,n+4.3,e,!1),r.box(3.2,3.5,.3,X.black,t,n+1.75,e+3.25,!1);for(let c of[-1,1])r.box(.5,3.9,.5,X.woodD,t+c*1.9,n+1.95,e+3.3,!1);r.box(4.6,.5,.6,X.woodD,t,n+3.9,e+3.4,!1),s.box(5.6,3,4.4,X.plaster,t,n+4.45+1.5-.15,e,!1),r.box(5.86,.4,4.66,X.woodD,t,n+4.45+.05,e,!1),Lp(i,t,e,n+6,5.6,4.4,3,2,1,{}),Wh(s,t,n+4.45,e,4+1.5,3.2+1.5,2.8,2.2,1.8,{});let l=Pp(s,t,n+4.45+3,e,2.8+1.6,2.2+1.6,2.4,1.9,1.5,2.2,{});for(let c of[-1,1])a.box(.7,1,.7,X.red,t+c*3,n+3.2,e+3.6)}function oy(i,t,e,n,s,r){let o=i.S;o.cyl(.3*s,.46*s,3.5*s,6,X.trunk,t,e,n);let a=(r()-.5)*.8;o.cyl(.16*s,.24*s,2.2*s,5,X.trunk,t+a*.8,e+2.8*s,n+a*.4);let l=[X.pink,X.pink2,X.pink3,Ln(X.pink,1.06)];for(let[c,u,h,d]of[[0,4.7,0,2.9],[1.9,4.1,.7,2],[-1.7,4.3,-.9,2.2],[.4,5.9,-.4,1.8]])o.ball(d*s*(.9+r()*.25),l[r()*4|0],t+c*s,e+u*s,n+h*s,1,.78,1,1);o.cyl(2.5*s,2.5*s,.04,9,X.pink3,t+(r()-.5)*1.4,e+.06,n+(r()-.5)*1.4,!0)}function Vh(i,t,e,n,s=1){let r=i.S,o=X.stone;r.cyl(.5*s,.62*s,.3*s,7,o,t,e,n),r.cyl(.17*s,.2*s,1.3*s,6,o,t,e+.3*s,n),r.cyl(.5*s,.32*s,.2*s,7,o,t,e+1.6*s,n),r.box(.7*s,.6*s,.7*s,o,t,e+2.1*s,n,!1),i.E.box(.46*s,.4*s,.74*s,X.win,t,e+2.1*s,n).box(.74*s,.4*s,.46*s,X.win,t,e+2.1*s,n),r.cyl(.7*s,0,.55*s,4,o,t,e+2.4*s,n),Me(i.h,16762746,2.8*s+.4,t,e+2.1*s,n,.8)}function HE(i){let{side:t,s:e,a:n,hwv:s}=i,r=Math.cos(n),o=Math.sin(n),a=qt(e),l=Kt.PO,c=(d,f)=>{let m=t*(s+l-f),x=t*d;return[a+m*r-x*o,e-(m*o+x*r)]};return{toW:c,ground:(d,f)=>{let[m,x]=c(d,f);return ei(m,x)},river:d=>{let f=t*d,m=0;for(let g=0;g<4;g++){let p=e-(m*o+f*r);m=(qt(p)-a+f*o)/r}let x=e-(m*o+f*r);return{zc:s+l-t*m,hw:ge(x)}},side:t,s0:e,a:n,hw0:s}}function zs(i,t,e,n,s,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=Math.hypot(o,a,l);c<1e-4||i.save().T((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,Math.atan2(o,l),-Math.atan2(a,Math.hypot(o,l)),0).box(n,r||n,c,s).restore()}function*cy(i,t,e){let n=performance.now(),{side:s,hwv:r}=e,o=NE(t*7919+11),a=new zt;a.position.set(s*(r+Kt.PO),0,0),a.rotation.y=-s*Math.PI/2,i.add(a);let l={P:new wi,S:new wi,G:new wi,E:new wi,CL:new wi,h:a,rnd:o,fr:HE(e),ctx:e,drums:[]},{P:c,S:u,G:h,E:d,CL:f}=l,m=pn+12,x=-10,g={},p=0,y=performance.now(),S=B=>{let G=c.count()+u.count()+h.count()+d.count()+f.count(),K=performance.now();g[B]=[G-p,Math.round(K-y)],p=G,y=K};u.box(2*Kt.X-1,.3,Kt.ZF-Kt.ZB-1,X.gravel,0,pn-.08,(Kt.ZF+Kt.ZB)/2,!1),sy(u,0,(Kt.ZF+Kt.ZB)/2,Kt.X,(Kt.ZF-Kt.ZB)/2,-1.8,pn,4.8,o),u.box(2*Kt.X+1.4,.5,1.2,X.stone,0,pn+0,Kt.ZF+.3,!1),sy(u,0,-12,30,22,pn-.4,m,6.4,o),u.box(61.6,.3,45.6,X.gravel,0,m-.1,-12,!1),S("piedra"),yield;let _=5.8,v=24;for(let B=0;B<v;B++){let G=m-.5*(B+1),K=10.5+B;u.box(_,G-pn,1,Ln(X.stone,.92+.1*(B*7%3)/2),x,(pn+G)/2,K+.5,!1);for(let ht of[-1,1])u.box(.6,G+.8-pn,1,X.stone,x+ht*(_/2+.3),(pn+G+.8)/2,K+.5,!1);if(B%4===1)for(let ht of[-1,1])Vh(l,x+ht*(_/2+1.5),G,K+.5,.8)}S("escalera"),yield;let b=12,T=-17,M=zh(l,b,T,m,[{w:26,d:22,h:5.4,nx:5,nz:4,wood:!0,ro:{o:2.6,rise:3.3,c:[0,2],cw:4.2,cd:3.2}},{w:23.4,d:19.4,h:4.8,nx:5,nz:4,ro:{o:2.4,rise:3,k:[0,2],kw:9,kh:3.6,kd:5.5}},{w:20.8,d:16.8,h:4.4,nx:4,nz:3,ro:{o:2.2,rise:2.8,c:[1,3],cw:4,cd:3.4}},{w:18.2,d:14.2,h:4,nx:4,nz:3,ro:{o:2,rise:2.6,k:[0,2],kw:7,kh:3,kd:4.5}},{w:15.6,d:11.8,h:3.8,nx:3,nz:2},{w:13.2,d:9.8,h:3.6,nx:3,nz:2,ro:{o:2.7,rise:3,gh:4.4,irimoya:!0,shachi:1}}]);S("keep"),yield;let E=zh(l,-22,-27,m,[{w:12,d:10,h:4.6,nx:3,nz:2,ro:{o:1.9,rise:2.2,k:[0],kw:5,kh:2.4,kd:3.4}},{w:9.2,d:7.4,h:3.8,nx:2,nz:2,ro:{o:2,rise:2.2,gh:3,irimoya:!0,shachi:.6}}]),R=zh(l,24,2,m,[{w:10.6,d:9,h:4.2,nx:3,nz:2,ro:{o:1.8,rise:2,k:[0],kw:5,kh:2.2,kd:3}},{w:8,d:6.6,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:2,gh:2.8,irimoya:!0,shachi:.55}}]),I=zh(l,-24,3,m,[{w:10,d:10,h:4.4,nx:3,nz:3,ro:{o:1.8,rise:2,c:[0],cw:3.4,cd:2.8}},{w:7.4,d:7.4,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:3.6}}]);h.cyl(.14,0,2.2,5,X.gold,-24,I.top+.2,3).ball(.32,X.gold,-24,I.top+.2,3);for(let[B,G,K]of[[M,b,T],[E,-22,-27],[R,24,2]])u.cyl(.07,.09,4.4,4,X.woodD,G,B.ridge+.1,K),l.CL.quad([G,B.ridge+4.2,K],[G+3.4,B.ridge+3.8,K],[G+3.4,B.ridge+2.4,K],[G,B.ridge+2.7,K],X.purple);Dl(l,-8.5,m,-22,15,0),Dl(l,-22,m,-12,20,Math.PI/2),Dl(l,-16.5,m,3,5,0),Dl(l,8.5,m,3,25,0),Dl(l,22,m,-4.1,3.6,Math.PI/2),OE(l,-10,3,m),S("torres"),yield;let L=Kt.ZF-1,P=Kt.X-1,C=Kt.ZB+1;Ll(l,-P,L,-16.5,L,pn),Ll(l,-3.5,L,P,L,pn),Ll(l,-P,C,-P,L,pn),Ll(l,P,L,P,C,pn),Ll(l,P,C,-P,C,pn),BE(l,-10,L-3,pn),S("muros+puerta"),yield;for(let[B,G]of[[-44,-30],[44,-34],[-46,14]]){c.box(16,5.2,8,X.plaster,B,pn+2.6,G,!1),u.box(16.2,.7,8.2,X.woodD,B,pn+.5,G,!1),Dp(c,B,pn+5.1,G,17.5,10.4,3.2);for(let K=0;K<3;K++)Gh(l,B-4.5+K*4.5,pn+3.4,G+4.05,0,.9,1.1)}zE(l),S("kura+puente"),yield;let N=0,O=[];for(let B=0;B<7;B++){let G=15+B*3.6;O.push([x-8.2,G],[x+8.2,G])}for(let B=0;B<13;B++)O.push([-62+o()*50,-46+o()*84],[40+o()*22,-46+o()*84]);for(let B=0;B<6;B++)O.push([-40+o()*80,-49+o()*7]);for(let[B,G]of O)G>12&&G<38&&Math.abs(B-x)<7&&Math.abs(B-x)>1||Math.abs(B)<39&&G>-42&&G<19&&!(G>12&&Math.abs(B-x)>7)||G>37&&Math.abs(B-x)<10||(oy(l,B,pn+.05,G,.8+o()*.5,o),++N%9===0&&(yield));for(let[B,G]of[[-15,-10],[-11,-16],[-16,-4],[-7,-8],[-3,-14]])oy(l,B,m+.05,G,.75+o()*.3,o);for(let B=0;B<12;B++){let G=-61+B*10.4+o()*2;Math.abs(G-x)<10||Vh(l,G,pn+.05,36,.9)}S("arboles"),yield,yield*iy(l),S("festival"),yield;let z=kE();a.add(c.mesh(z.plaster)),S("m-pl"),yield,a.add(u.mesh(z.solid)),S("m-s"),yield,a.add(h.mesh(z.gold),d.mesh(z.emis),f.mesh(z.cloth)),S("m-rest"),yield;for(let[B,G,K,ht]of[[b-13.5,m+4,T+11.5,26],[b+13.5,m+5,T+11.5,24],[b,m+13,T+11,26],[b,m+21,T+8,22],[b,m+28,T+6,18],[b,m+34,T+5,14],[-22,m+4,-21,14],[24,m+5,8,14],[-24,m+5,9,14],[-10,pn+5,Kt.ZF+3,18]])Me(a,16766354,ht,B,G,K,.2);S("focos"),i.updateMatrixWorld(!0);let $=new D(b,m+14,T);return a.localToWorld($),i.userData.cas={parts:g,ms:0,tris:c.count()+u.count()+h.count()+d.count()+f.count(),mats:z,keep:{x:b,z:T,top:M.top,ridge:M.ridge},drums:l.drums,h:a,fr:l.fr,cw:$},i.userData.cas.ms=performance.now()-n,i}function zE(i){let{S:t,E:e}=i,n=-10,s=61.5,r=44.4,o=1.2,a=pn+.2,l=16,c=5.4,u=x=>1.1*Math.sin(Math.PI*x)*(1-x),h=(x,g=0,p=0)=>{let y=x/l;return[n+g,o+(a-o)*y+u(y)+p,s+(r-s)*y]};for(let x=0;x<l;x++)zs(t,h(x),h(x+1),c,Ln(X.red,.9+.12*(x%2)),.3);for(let x of[-1,1]){let g=x*(c/2+.1);for(let p=0;p<=l;p++){let y=h(p,g);if(t.box(.22,1.5,.22,X.red,y[0],y[1]+.85,y[2],!1),p%5===0&&(t.ball(.2,X.gold,y[0],y[1]+1.75,y[2],1,1,1,0),e.box(.42,.6,.42,X.red,y[0],y[1]+2.2,y[2]),Me(i.h,16757610,3.4,y[0],y[1]+2.2,y[2],.85)),p<l){let S=h(p+1,g);for(let _ of[1.5,.8])zs(t,[y[0],y[1]+_,y[2]],[S[0],S[1]+_,S[2]],.12,X.red)}}}for(let x of[s-.4,(s+r)/2,r+.4])for(let g of[-1,1])t.cyl(.2,.26,o+2.6,6,X.woodD,n+g*(c/2-.2),-1.5,x);let d=Kt.PO-3,f=Kt.PO+5.2;for(let x=0;x<10;x++)t.box(3.6,.18,.62,Ln(X.woodM,.9+.2*(x%2)),n,.62,d+x*.9,!1);for(let x=0;x<6;x++)for(let g of[-1,1])t.cyl(.12,.15,2.4,5,X.woodD,n+g*1.7,-1.5,d+.6+x*1.6);for(let x of[-1,1])t.cyl(.14,.16,3.2,5,X.woodD,n+x*1.8,.6,f-.4),e.box(.4,.55,.4,X.red,n+x*1.8,3.95,f-.4),Me(i.h,16757610,3.6,n+x*1.8,3.95,f-.4,.9);let m=i.fr;for(let x=0;x<6;x++){let g=d-.8-x*.9,p=m.ground(n,g);t.box(4.6,.22,.82,Ln(X.stone,.9+.1*(x%3)),n,Math.max(p,.5),g,!1)}for(let x of[-1,1])for(let g=0;g<3;g++){let p=58.5-g*1.4,y=n+x*(4.6+g*.9),S=m.ground(y,p);Rp(i,y,Math.max(S,.3),p,[X.red,X.purple,X.blue][g%3])}}function Rp(i,t,e,n,s,r=6.2){i.S.cyl(.07,.09,r,5,X.woodD,t,e,n),i.S.box(1.3,.09,.09,X.woodD,t+.6,e+r-.2,n,!1),i.CL.box(1.1,r*.66,.04,s,t+.62,e+r*.62,n,!1),i.CL.box(1.14,.26,.05,X.cream,t+.62,e+r-.5,n,!1)}function kE(){let i=t=>new pe(Object.assign({gradientMap:Ae,color:16777215,vertexColors:!0,fog:!1},t||{}));return{plaster:i(),solid:i(),gold:i({emissive:0}),cloth:i({side:Zt}),emis:new fe({color:16777215,vertexColors:!0,fog:!0})}}var kh=(i,t,e)=>{i.r+=t.r*e,i.g+=t.g*e,i.b+=t.b*e},Cp=new ct,Ip=new ct(1,.8,.5),GE=new ct(1,.72,.3);function uy(i,t,e){let n=i.userData.cas;if(!n||!n.cw)return;let s=n.mats,r=n.cw.x-F.px,o=n.cw.z-F.pz,a=Math.hypot(r,o),l=me(70,640,a)*.8;Cp.copy(xt.fog.color);let c=1-l;for(let f of[s.plaster,s.solid,s.cloth])f.color.setScalar(1-l),f.emissive.copy(Cp).multiplyScalar(l);kh(s.plaster.emissive,Ip,t*.34*c),kh(s.solid.emissive,Ip,t*.1*c),kh(s.cloth.emissive,Ip,t*.22*c),s.gold.color.setScalar(1-l),s.gold.emissive.copy(Cp).multiplyScalar(l),kh(s.gold.emissive,GE,(.14+.35*t)*c);let u=.3+.7*t;s.emis.color.setRGB(u,u*.95,u*.9);let h=performance.now(),d=Math.exp(-Math.max(0,h-($t.hitT||0))/160);for(let f of n.drums){let m=1+.05*d;f.scale.set(m,m,1)}}function hy(i){let t=VE(i);return t.userData.job?t:Bh(t)}function VE(i){let t=Qe(i),e=_n(t),n=Xe(i),s=new zt,r=ge(t),o=n===6||j(i,9)>.5?1:-1;s.position.set(qt(t),0,-t),s.rotation.y=-e;let a=(f,m)=>{let x=-e;return ei(qt(t)+f*Math.cos(x)+m*Math.sin(x),t-(-f*Math.sin(x)+m*Math.cos(x)))},l=13199183,c=11569004,u=8018508,h=qi.c,d=8368266;if(n===0){let f=r*2+12,m=18,x=11880250,g=10329242,p=b=>3.4+1.7*(1-b*b);for(let b=0;b<m;b++){let T=(b+.5)/m*2-1,M=T*f/2,E=p(T),R=ut(s,f/m+.4,.34,4.2,c,M,E,0,{map:Ce("plank")});R.rotation.z=-T*.4,ut(s,.07,.34,4.3,u,M-f/m/2,E,0).rotation.z=-T*.4}for(let b of[-1.7,1.7])for(let T=0;T<m;T++){let M=(T+.5)/m*2-1,E=M*f/2,R=ut(s,f/m+.5,.4,.3,7293498,E,p(M)-.4,b);R.rotation.z=-M*.4}for(let b of[-2,2]){for(let T=0;T<=m;T++){let M=T/m*2-1,E=M*f/2,R=p(M);ut(s,.18,1.5,.18,x,E,R+.95,b);let I=new W(new Jt(.16,8,6),Tt(14264410));if(I.position.set(E,R+1.8,b),s.add(I),T%3===0){let L=new W(new ce(.22,.22,.45,8),new fe({color:16767392}));L.position.set(E,R+2.35,b),s.add(L);let P=new W(new Te(.3,.2,8),Tt(x));P.position.set(E,R+2.68,b),s.add(P),Me(s,16762746,3,E,R+2.35,b,.8)}}for(let T=0;T<m;T++){let M=(T+.5)/m*2-1,E=M*f/2,R=p(M),I=ut(s,f/m+.2,.14,.14,x,E,R+1.5,b);I.rotation.z=-M*.4;let L=ut(s,f/m+.2,.1,.1,x,E,R+.7,b);L.rotation.z=-M*.4}}let y=p(0);for(let[b,T]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])xe(s,.22,.26,4.2,x,b,y+2.1,T,8);let S=new W(new Te(4.6,2.4,4),Tt(5982799));S.rotation.y=Math.PI/4,S.position.y=y+5.4,S.scale.set(1,1,.8),s.add(S),ut(s,6.4,.3,.3,14264410,0,y+4.35,-1.8),ut(s,6.4,.3,.3,14264410,0,y+4.35,1.8);let _=new W(new Jt(.4,10,8),new fe({color:16764810}));_.position.set(0,y+3.6,0),s.add(_),Me(s,16762746,6,0,y+3.6,0,.9);let v=[15245466,15913098,10274736,10466268];for(let b=0;b<12;b++){let T=(b+.5)/12*2-1,M=T*(f/2-2),E=p(T)+2.7+Math.sin(b*1.7)*.06,R=new W(new rn(.5,.7),Tt(v[b%4],{side:Zt}));R.position.set(M,E,0),R.rotation.set(0,0,Math.PI),s.add(R)}ut(s,f-4,.04,.04,7293498,0,p(0)+3.1,0).scale.y=1,[-1,1].forEach(b=>{let T=b*(f/2+.6);ut(s,3.4,5.5,5,g,T,.3,0,{map:Ce("stone")}),ut(s,3.6,.35,5.3,8223610,T,3.2,0);for(let R=0;R<3;R++)ut(s,1.2,.3,4.2,g,b*(f/2+2.6+R*1.1),.2+R*0,0).position.y=2.2-R*.8;let M=new W(new Jt(.5,8,6),Tt(12039082));M.scale.set(.9,1.1,1),M.position.set(T,3.9,2.2),s.add(M);let E=M.clone();E.position.z=-2.2,s.add(E)}),[-.28,.28].forEach(b=>{ut(s,1.8,5.2,4,g,b*f,.4,0,{map:Ce("stone")})})}else if(n===1)[-1,1].forEach(f=>{xe(s,.32,.38,7,l,f*3.6,2,0,10)}),ut(s,10.5,.5,1,l,0,5.7,0),ut(s,11.8,.35,1.3,5982794,0,6.15,0),ut(s,8,.28,.5,l,0,4.8,0),Me(s,16762746,3,0,4.2,0,.6);else if(n===2){let f=(g,p,y,S,_,v,b,T)=>{let M=a(p,y);g.position.set(p,M-.2,y),g.rotation.y=T,s.add(g),ut(g,S,v,_,15258550,0,v/2,0,{map:Ce("plank")}),ut(g,S+.3,.35,_+.3,7293498,0,.1,0);let E=new W(new Te(Math.max(S,_)*.82,v*.7,4),Tt(b));E.rotation.y=Math.PI/4,E.position.y=v+v*.3,E.scale.set(S/Math.max(S,_),1,_/Math.max(S,_)),g.add(E);let R=new fe({color:16769184}),I=ut(g,.9,.9,.12,16769184,-S*.22,v*.55,_/2+.02);I.material=R;let L=ut(g,.9,.9,.12,16769184,S*.22,v*.55,_/2+.02);L.material=R,ut(g,.8,1.5,.14,8014394,0,.85,_/2+.04),Me(g,16762746,4.2,-S*.22,v*.55,_/2+.6,.85),Me(g,16762746,4.2,S*.22,v*.55,_/2+.6,.85);let P=ut(g,.7,1.6,.7,9075314,S*.25,v+1.1,-_*.2),C=oi(16777215,3);C.material.blending=Pi,C.material.opacity=.3,C.position.set(S*.25,v+2.8,-_*.2),g.add(C);let N=new W(new Jt(.22,8,6),Tt(14245962,{emissive:8006170}));N.position.set(S/2-.2,v*.78,_/2+.5),g.add(N),Me(g,16751210,2.4,S/2-.2,v*.78,_/2+.5,.8)},m=[11759722,9398879,11042906,8219250],x=0;for(let g of[-1,1])for(let p=0;p<7;p++){let y=-26+p*8.5+j(i,p+g*9)*3,S=r+7+j(i,p+30+g)*6+p%2*5,_=4+j(i,p+50)*2.5,v=3.6+j(i,p+60)*2,b=2.6+j(i,p+70)*1.6;f(new zt,g*S,y,_,v,b,m[(p+x)%4],g>0?-Math.PI/2:Math.PI/2),x++}for(let[g,p]of[[-1,-10],[1,6],[-1,18]]){let y=new zt;y.position.set(g*(r-3.2),.35,p),s.add(y),ut(y,8,.25,2.2,11569004,g*-0+0,0,0,{map:Ce("plank")}).position.x=g*4;for(let v of[0,3,6.4])for(let b of[-1,1])xe(y,.1,.12,1.8,7293498,g*v+0,.2,b,5);let S=new W(new Jt(.26,8,6),new fe({color:16766362}));S.position.set(g*6.4,1.5,1),y.add(S),Me(y,16762746,3.6,g*6.4,1.5,1,.9);let _=new W(new Jt(1,10,6),Tt(6965818));_.scale.set(.6,.3,1.9),_.position.set(g*-3.2,-.15,2.2),y.add(_)}for(let g=0;g<18;g++){let p=g/17,y=-24+p*48,S=g%2?1:-1,_=new W(new Jt(.25,8,6),new fe({color:g%3?16766362:16751226}));_.position.set(S*(r+4+Math.sin(g)*1.2),4.2+Math.sin(g*1.9)*.5,y),s.add(_),Me(s,g%3?16762746:16751210,3.2,_.position.x,_.position.y,y,.85)}Me(s,16756838,46,o*(r+11),6,0,.28);for(let g of[-1,1])xe(s,.25,.3,6.5,11880250,g*(r-.5),2.6,-34,8);ut(s,r*2,.4,.5,11880250,0,5.8,-34),Me(s,16762746,4,-r*.5,5.2,-34,.9),Me(s,16762746,4,r*.5,5.2,-34,.9),Me(s,16762746,4,0,5.2,-34,.9)}else if(n===3){Xr(s,a,r,"\u685C",!1,"#d98aa6");for(let m=0;m<14;m++){let x=o*(r+4.5+j(i,m)*15),g=(m-6.5)*4.1+j(i,m+20)*2.4,p=a(x,g),y=new zt,S=.9+j(i,m+60)*.5;y.position.set(x,p,g),s.add(y),xe(y,.26*S,.44*S,3.4*S,7294787,0,1.7*S,0,6);let _=xe(y,.14*S,.2*S,2.2*S,7294787,.7*S,3.6*S,0,5);_.rotation.z=-.7;for(let[b,T,M,E,R]of[[0,4.5,0,2.7,h],[1.7,4,.6,1.9,qi.c2],[-1.5,4.2,-.8,2.1,h],[.4,5.5,-.4,1.6,16304598]]){let I=new W(new hn(E*S*(.92+j(i,m+b*7)*.2),1),Tt(R));I.scale.y=.78,I.position.set(b*S,T*S,M*S),y.add(I)}let v=new W(new vi(2.6*S,9).rotateX(-Math.PI/2),Tt(16173528,{side:Zt}));v.position.set(j(i,m+9)*1.5-.7,.07,j(i,m+19)*1.5-.7),y.add(v),m%3===0&&Me(y,16758475,7,0,4.6*S,0,.22)}for(let m of[-1,1]){let x=Wr(s,a,o*(r+3.4),m*10+2,1.1);x.position.y=a(o*(r+3.4),m*10+2)}let f=ut(s,3.2,.28,.9,11880250,o*(r+7.5),a(o*(r+7.5),-3)+.55,-3);ut(s,3.2,.7,.12,11880250,o*(r+7.5),a(o*(r+7.5),-3)+1,-3.5)}else if(n===4){Xr(s,a,r,"\u9DFA",!1,"#5f8aa8");let f=900,m=new Un(sp,Fs.material,f);m.frustumCulled=!1;let x=0;for(let p=0;p<f;p++){let y=p%2?1:-1,S=y*(r-5.5+j(i,p)*13),_=(j(i,p+50)-.5)*84;if(Math.abs(S)<r-5.8)continue;let v=1.1+j(i,p+70)*1.5,b=Math.max(-.25,a(S,_)-.15);wn.set(S,b,_),En.setFromAxisAngle(Bs,j(i,p+90)*6.28),fn.set(v,v*(1+j(i,p+30)*.9),v),tn.compose(wn,En,fn),m.setMatrixAt(x,tn),m.setColorAt(x,qe.set(mh[j(i,p+4)*4|0])),x++}m.count=x,m.userData.keep=!0,s.add(m),s.userData.hp=[];for(let p=0;p<20;p++){let y=p%2?1:-1,S=p%3!==0,_=y*(r-(S?2.2+j(i,p)*3.5:-1.5+j(i,p)*2)),v=(j(i,p+10)-.5)*70,b=.95+j(i,p+5)*.5,T=j(i,p+3)*6.28,M=S?-.12:a(_,v)-.1;if(p>=12){s.userData.hp.push([_,M,v,T,b,{gone:0}]);continue}let E=Uh(b,j(i,p)*6.28);E.position.set(_,M,v),E.rotation.y=T,s.add(E)}let g=oi(16777215,10);g.material.blending=Pi,g.material.opacity=.25,g.position.set(0,1.2,0),s.add(g)}else if(n===5){Xr(s,a,r,"\u9418",!0,"#9a3a30");let f=o*(r+19),m=a(f,0),x=new zt;x.position.set(f,m,0),x.rotation.y=-o*Math.PI/2,s.add(x);let g=10131604;ut(x,17,3,15,g,0,-.5,0),ut(x,15,.5,13,11841964,0,1.25,0),ut(x,13,.5,11,12763064,0,1.75,0);for(let v=0;v<7;v++)ut(x,6,.4,1.1,g,0,1.5-v*.28,7.9+v*.95);for(let[v,b]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])xe(x,.34,.38,5,12730163,v,4.6,b,8);ut(x,9.4,.5,.7,12730163,0,7.3,3.4),ut(x,9.4,.5,.7,12730163,0,7.3,-3.4),ut(x,.7,.5,7.2,12730163,-4.2,7.3,0),ut(x,.7,.5,7.2,12730163,4.2,7.3,0),ut(x,9,.35,.6,14264410,0,6.7,3.4),ut(x,9,.2,7,8018508,0,2.15,0),Nh(x,9.6,2.7,9.1,4999770),ut(x,5.2,1.5,5.2,15721421,0,8.7,0),ut(x,5.5,.2,5.5,12730163,0,7.9,0),Nh(x,5.3,2,11.2,4144461),xe(x,.1,.1,1.6,14264410,0,13,0,6);let p=new W(new Jt(.34,8,6),Tt(14264410,{emissive:5913104}));p.position.y=12.3,x.add(p),ut(x,.5,.5,5,4864562,0,6.8,0),xe(x,.05,.05,1.1,3811874,0,6.1,0,4);let y=xe(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});xe(x,.8,.8,.12,14264410,0,5.6,0,12),Me(x,16762746,5,0,4.6,0,.6);let S=xe(x,.2,.2,4,6965818,0,3.3,2.6,6);S.rotation.x=Math.PI/2,S.position.set(0,3.5,2.6),xe(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let v of[-4,4])for(let b of[3.4,-3.4]){let T=new W(new Jt(.34,8,6),Tt(14245962,{emissive:9054746}));T.scale.y=1.3,T.position.set(v*1.12,6.2,b*1.05),x.add(T),Me(x,16751210,3,v*1.12,6.2,b*1.05,.85)}for(let v of[-3.4,3.4])for(let b of[10.4,14.5])Wr(x,()=>0,v,b,1.15).position.y=-.1;for(let v=0;v<5;v++)ut(x,2.6,.12,1.6,g,0,-.3,10+v*2.1);Wx(x,0,-.4,17.5,1.1,12730163);let _=Vx(x,0,1.5,-3.5);_.position.set(o>0?-11.5:11.5,1.5,-2.5),_.scale.setScalar(1.1)}else if(n===6){let f=o*(r+3.6),m=a(f,0),x=new zt;x.position.set(f,m,0),s.add(x),Xr(s,a,r,"\u6EDD",!1,"#3f7a8a");let g=v=>Tt(v);for(let v=0;v<22;v++){let b=3+j(i,v)*3.5,T=o*(7.8+j(i,v+5)*9),M=j(i,v+9)*15+(T*o<8?3:0),E=(j(i,v+13)-.5)*17,R=new W(new hn(b,1),g(v%3?8030846:7114616));R.position.set(T,M,E),R.scale.y=1.2,x.add(R);let I=new W(new hn(b*.75,1),g(8369002));I.position.set(T,M+b*.65,E),I.scale.set(1.05,.45,1.05),x.add(I)}for(let v=0;v<10;v++){let b=1+j(i,v+60)*1.2,T=new W(new hn(b,0),g(8030846));T.position.set(-o*(.5+j(i,v+70)*3),b*.4,(j(i,v+80)-.5)*12),x.add(T)}[[19,13.4,-.2,3.6],[13.4,7,-1.5,5.6],[7,0,-2.9,7.2]].forEach(([v,b,T,M],E)=>{let R=new W(new rn(M,v-b,1,1),gr);R.position.set(-o*(.5+E*1.35),(v+b)/2,0),R.rotation.y=Math.PI/2,x.add(R);let I=ut(x,2.6,.9,M+1.6,E%2?8030846:7114616,-o*(.5+E*1.35-1.1),b-.2,0);I.scale.y=1;let L=ut(x,2.4,.22,M+1.2,8369002,-o*(.5+E*1.35-1.1),b+.32,0)});for(let v=0;v<7;v++){let b=new W(new Te(.28,1.1+j(i,v+120)*.8,4),Tt(v%2?7317610:9224826));b.position.set(o*(5.5+j(i,v+130)*7),3+j(i,v+140)*12,(j(i,v+150)-.5)*14),b.rotation.z=(j(i,v)-.5)*.8,x.add(b)}{let v=new W(new hn(2.2,1),Tt(7832954));v.position.set(-o*7.2,1.4,3.6),v.scale.y=1.15,x.add(v);let b=new W(new On(2.3,.1,5,16),Tt(15128736));b.position.set(-o*7.2,1.9,3.6),b.rotation.x=Math.PI/2,x.add(b);for(let T=0;T<6;T++){let M=new W(new rn(.34,.8),new pe({gradientMap:Ae,color:16777215,side:Zt})),E=T/6*6.283;M.position.set(-o*7.2+Math.cos(E)*2.3,1.45,3.6+Math.sin(E)*2.3),x.add(M)}}for(let v=0;v<5;v++){let b=xe(x,.55+j(i,v+160)*.25,.6,.22,10329242,-o*(2+v*1.7),.12,-3.4+v*.4,8)}for(let v=0;v<4;v++){let b=oi(16777215,4);b.material.blending=Pi,b.material.opacity=.55,b.position.set(-o*(3+v*1.3),.5,(j(i,v+170)-.5)*6),x.add(b)}let p=new W(new rn(3,14,1,1),gr);p.position.set(-o*.7,7,-5.6),p.rotation.y=Math.PI/2,p.rotation.z=.04,x.add(p);let y=new W(new vi(6.5,24).rotateX(-Math.PI/2),new fe({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));y.position.set(-o*3.6,.1,0),x.add(y);let S=new W(new rn(3.4,4.6).rotateX(-Math.PI/2),gr);S.rotation.y=o>0?Math.PI/2:-Math.PI/2,S.position.set(-o*3.4,.12,0),x.add(S);for(let v=0;v<6;v++){let b=oi(16777215,5+j(i,v)*3);b.material.blending=Pi,b.material.opacity=.5,b.position.set(-o*(1+j(i,v+3)*4),.5+j(i,v)*.8,(j(i,v+9)-.5)*7),x.add(b)}let _=oi(16777215,26);_.material.blending=Pi,_.material.opacity=.5,_.position.set(-o*3,4,0),x.add(_)}else if(n===7){Xr(s,a,r,"\u8336",!0,"#a9453a");let f=o*(r-3),m=new zt;m.position.set(f,0,0),s.add(m),s.userData.lx=f;let x={map:Ce("plank")},g=4928554;ut(m,7.4,.6,6.4,10329242,0,.1,0);for(let _ of[-3.2,0,3.2])for(let v of[-2.7,2.7])xe(m,.14,.16,1.2,g,_,.4,v,6);ut(m,7.2,.26,6.2,c,0,1.15,0,x);for(let _ of[-1,1]){ut(m,.14,.12,6,11880250,_*3.5,1.95,0),ut(m,7,.12,.14,11880250,0,1.95,_*3);for(let v=-3;v<=3;v+=1.5)ut(m,.1,.8,.1,11880250,_*3.5,1.55,v)}for(let _=0;_<3;_++)ut(m,2.6-_*.1,.28,.7,11183773,0,.85-_*.38,3.9+_*.62);ut(m,5.2,2.5,4.2,15258550,0,2.65,-.3);for(let _ of[-2.6,-1.3,0,1.3,2.6])ut(m,.18,2.5,.18,g,_,2.65,1.85);ut(m,5.3,.2,.2,g,0,3.85,1.85),ut(m,5.3,.14,.2,g,0,1.5,1.85);for(let _ of[-1.95,1.95]){ut(m,1,1.5,.08,16773328,_,2.5,1.93).material=new fe({color:16771256});for(let v of[-.25,.25])ut(m,1,.05,.1,g,_,2.5+v*2,1.97),ut(m,.05,1.5,.1,g,_+v*2,2.5,1.97)}for(let _ of[-1.1,.5])for(let v of[-1,1])ut(m,.08,1.2,1,16773328,v*2.62,2.6,_).material=new fe({color:16771256});ut(m,6.1,.14,5.1,4930367,0,3.95,-.3);let p=new W(new Te(4.9,1.5,4),Tt(5982799));p.rotation.y=Math.PI/4,p.position.y=4.8,p.scale.z=.88,m.add(p);let y=new W(new Te(3.3,1.3,4),Tt(6706266));y.rotation.y=Math.PI/4,y.position.y=5.9,y.scale.z=.8,m.add(y),xe(m,.05,.12,.9,14264410,0,6.8,0,5);for(let _ of[-.55,.55]){let v=new W(new rn(1,1.4),new pe({gradientMap:Ae,map:Tp("\u8336","#2f3f6b","#ffffff",128,160),side:Zt}));v.position.set(_,2.9,1.93),m.add(v)}ut(m,1.2,1.1,.1,16769184,0,2.7,1.8).material=new fe({color:16769184}),Me(m,16762746,4,0,2.7,2.3,.9);for(let _ of[-2.4,2.4]){let v=new W(new Jt(.3,8,6),Tt(14245962,{emissive:8006170}));v.scale.y=1.3,v.position.set(_,3.3,2.6),m.add(v),Me(m,16751210,2.6,_,3.3,2.6,.8)}xe(m,.05,.05,2.6,c,3.9,2.2,4.2,5);let S=new W(new Te(1.7,.7,12),Tt(12730163));S.position.set(3.9,3.6,4.2),m.add(S),ut(m,1.8,.15,.6,c,3.9,1.5,4.2),ut(m,1.8,.05,.62,12730163,3.9,1.6,4.2),xe(m,.1,.14,.8,g,-4.4,.9,2.4,5);for(let[_,v]of[[1.5,.7],[1.9,.5]]){let b=new W(new hn(v,1),Tt(5206612));b.position.set(-4.4,_,2.4),b.scale.y=.6,m.add(b)}for(let _=0;_<7;_++){let v=new W(new hn(.7,1),Tt(_%2?7317610:6265442));v.position.set(-3.2+_*1.1,.7,-3.9),v.scale.set(1.2,.8,1),m.add(v)}for(let _=0;_<6;_++)xe(m,.5,.55,.14,11183773,-.6+Math.sin(_*1.1)*.6,.1,6.2+_*1.25,7);for(let _ of[-1,1]){let v=Wr(s,a,f+_*7.5,5,1);v.position.y=a(f+_*7.5,5)}{let _=o*10.5,v=new zt;v.position.set(_,0,-1),m.add(v),ut(v,5.4,.3,5.4,c,0,1.15,0,x);for(let N of[-2.4,2.4])for(let O of[-2.4,2.4])xe(v,.13,.16,1.3,g,N,.5,O,5);ut(v,5.4,.12,.12,11880250,0,1.95,2.6),ut(v,5.4,.12,.12,11880250,0,1.95,-2.6),ut(v,.12,.12,5.4,11880250,-o*2.6,1.95,0),ut(v,.12,.12,5.4,11880250,o*2.6,1.95,0),ut(v,2.2,.14,.7,c,0,1.75,-1.6),ut(v,2.2,.5,.1,c,0,2.1,-1.95),xe(v,.08,.08,.5,g,-.9,1.5,-1.6,4),xe(v,.08,.08,.5,g,.9,1.5,-1.6,4),Wr(v,a,2,2,.9).position.set(o*1.8,1.3,1.6);for(let N=0;N<3;N++)xe(m,.5,.55,.14,11183773,o*(5+N*1.15),.1,-.4,7);let T=o*66,M=-27,E=new zt;E.position.set(T,a(T,M)-1,M),m.add(E),E.scale.setScalar(2.9);let R=new W(new ce(5.2,9,12,7),Tt(9399904));R.position.y=4,E.add(R);let I=new W(new ce(5.6,5.2,1.4,7),Tt(10846831));I.position.y=7.4,I.rotation.y=.4,E.add(I);let L=new W(new ce(5.7,5.6,.7,7),Tt(8034914));L.position.y=8.4,E.add(L);for(let[N,O]of[[-2.6,-1.6],[2.6,-1.6],[-2.6,1.6],[2.6,1.6]])xe(E,.14,.18,3,4928554,N,10,O,5);ut(E,7.4,.3,4.6,12096620,0,11.5,0),ut(E,5.4,2.4,3.4,15258550,0,12.8,-.2);for(let N of[-2.7,2.7])ut(E,.2,2.4,.2,4928554,N,12.8,1.4);ut(E,2.2,1.4,.1,16767392,-.9,12.9,1.55).material=new fe({color:16767392}),ut(E,1.4,1.4,.1,16767392,1.6,12.9,1.55).material=new fe({color:16770744});let P=new W(new Te(4.8,1.8,4),Tt(5196376));P.rotation.y=Math.PI/4,P.position.set(0,14.8,-.2),P.scale.z=.8,E.add(P);for(let N of[-3.4,3.4]){let O=new W(new Jt(.22,6,5),Tt(14264410));O.position.set(N,15.5,-.2),E.add(O)}Me(E,16762746,12,0,12.8,2.4,.8);for(let N=0;N<5;N++){let O=new W(new Te(1.2,3.4,6),Tt(N%2?6060632:7177318));O.position.set(-3.6+N*.5+(N>2?5.6:0),10+j(i,N+210)*.6,-1.4+(j(i,N+220)-.5)*3),E.add(O)}let C=new W(new hn(1.5,1),Tt(15973579));C.position.set(-4.4,10.4,.8),C.scale.y=.9,E.add(C)}}else if(n===8){Xr(s,a,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let f of[-1,1])for(let m=0;m<6;m++)Wr(s,a,f*(r+3+j(i,m)*2.5),-45+m*18+j(i,m+3)*4);for(let f=0;f<12;f++){let m=f%2?1:-1,x=m*(r+4+j(i,f)*12),g=(j(i,f+20)-.5)*110,p=new W(new rn(3.6,22),new fe({map:ri,color:16773296,transparent:!0,opacity:.14,blending:Wn,depthWrite:!1,side:Zt}));p.position.set(x,a(x,g)+10,g),p.rotation.set(0,j(i,f+9)*3,m*.25),s.add(p)}}else if(n===10)s.userData.job=cy(s,i,{gy:a,hwv:r,side:o,s:t,a:e});else for(let f=0;f<46;f++){let m=(j(i,f)-.5)*r*1.5,x=(j(i,f+40)-.5)*34,g=new W(new vi(.8+j(i,f+7)*.5,10).rotateX(-Math.PI/2),Tt(8372106,{side:Zt}));if(g.position.set(m,.05,x),s.add(g),f%4===0){let p=new W(new hn(.34,0),Tt(16098493,{emissive:9058896}));p.scale.y=1.2,p.position.set(m,.3,x),s.add(p),Me(s,16752576,1.8,m,.5,x,.35)}}return s}var xr=new D,Np=new D,Up=new vn,WE=matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;function dy(i){if(ot.cine||WE||window.UX&&UX.calm&&UX.calm()||ot.X.photo)return;let t=pi.get(i);if(!t)return;let e=Qe(i),n=ge(e),s=Xe(i),r=s===6||j(i,9)>.5?1:-1,o=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0],[r*(n+80),36,r*12,1]][s],a=o[3]===1,l=a?Math.abs(o[0])+n*.3:[46,30,52,0,40,0,0,0,30,30,0][s];ot.cine={k:i,g:t,t:0,dur:s===10?17:11.5,fx:o[0],fy:o[1],fz:o[2],sd:r,sided:a,R:Math.max(30,l),h:[10,6,12,10,8,13,10,7,6,9,-26][s]}}function fy(i){if(!ot.cine){ot.cineW=0;return}ot.cine.t+=i,!ot.cine.snapped&&ot.cine.t>5.4&&(ot.cine.snapped=!0,ot.X.snap(Xe(ot.cine.k)));let t=ot.cine,e=Xf(0,2.6,t.t)*(1-Xf(t.dur-2.6,t.dur,t.t));if(ot.cineW=e,t.t>=t.dur){ot.cine=null,ot.cineW=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),o=t.sided?-t.sd:0,a=t.sided?0:1,l=o*s+a*r,c=-o*r+a*s;xr.set(t.fx+l*t.R,t.fy+t.h,t.fz+c*t.R),t.g.localToWorld(xr);let u=ei(xr.x,-xr.z);xr.y=Math.max(xr.y,u+3),Np.set(t.fx,t.fy,t.fz),t.g.localToWorld(Np),Up.position.copy(xr),Up.lookAt(Np),dn.position.lerp(xr,e),dn.quaternion.slerp(Up.quaternion,e)}var yr=0,py=new gn,my=new gn,Fp=new vn,Bp=new D,Xh=new D,qh=new D,gy=ze("cam");function Yr(i){ot.camMode=i,gy.textContent=i?"Vista 3\xAA":"Vista 1\xAA";try{localStorage.setItem("rio3d-cam",i)}catch{}}gy.onclick=()=>Yr(1-ot.camMode);addEventListener("keydown",i=>{i.code==="KeyC"&&Yr(1-ot.camMode)});try{Yr(+localStorage.getItem("rio3d-cam")||0)}catch{}function xy(i,t){let e=window.UX&&UX.calm&&UX.calm()?.25:1;t*=e;let n=Math.sin(F.t*.5)*.01*e;dn.position.set(F.px,1.18+t,F.pz).addScaledVector(new D(Math.sin(F.psi),0,-Math.cos(F.psi)),-.15),F.pitch+=(-mr.pitch*.22-F.pitch)*2*i,dn.rotation.set(F.pitch-.06,-F.psi+n,-F.steer*.02,"YXZ"),ot.camK+=((ot.camMode?1:0)-ot.camK)*Math.min(1,i*2.2),ot.camK<.01&&(yr=F.psi);{let s=innerWidth/innerHeight<1?82:68,r=s*(1-.3*ot.camK*ot.camK*(3-2*ot.camK));Math.abs(dn.fov-r)>.05&&(dn.fov=r,dn.updateProjectionMatrix())}if(ot.camK>.003){let s=ot.camK*ot.camK*(3-2*ot.camK);my.copy(dn.quaternion),yr+=(F.psi-yr)*Math.min(1,i*1.6);let r=yr+.3;qh.set(Math.sin(r),0,-Math.cos(r)),Bp.set(F.px,6.2+t,F.pz).addScaledVector(qh,-10.8),qh.set(Math.sin(yr),0,-Math.cos(yr)),Xh.set(F.px,.3,F.pz).addScaledVector(qh,6.5),Xh.x+=Math.cos(yr)*1.9,Xh.z+=Math.sin(yr)*1.9,Fp.position.copy(Bp),Fp.lookAt(Xh),py.copy(Fp.quaternion),dn.position.lerp(Bp,s),dn.quaternion.copy(my).slerp(py,s)}}var Yh=3120762,Op=4176271,vr=14989394,yy=12730163,Nl=15986400;function vy(i){let t=qo(i),e=_n(t),n=j(i,9)>.5?1:-1,s=ge(t),r=new zt;r.position.set(qt(t),0,-t),r.rotation.y=-e;let o=(P,C)=>{let N=-e;return ei(qt(t)+P*Math.cos(N)+C*Math.sin(N),t-(-P*Math.sin(N)+C*Math.cos(N)))},a=n*(s+14),l=Math.max(o(a,0),.4),c=new zt;c.position.set(a,l,0),c.scale.setScalar(1.5),r.add(c);let u=new wi,h=new wi,d=new wi,f=new wi,m={S:u,E:d,h:c};u.boxB(11,1.1,11,X.stone,0,-1,0).boxB(9,1.2,9,Ln(X.stone,1.08),0,.1,0).boxB(7,1.3,7,Ln(X.stone,.95),0,1.3,0).boxB(6.2,.3,6.2,X.gravel,0,2.6,0),h.boxB(7.4,.2,7.4,vr,0,2.55,0,!1);for(let[P,C]of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]])Vh(m,P,.2,C,1);for(let P of[-1,1])for(let C=0;C<4;C++)u.boxB(.5,.5,.5,Ln(X.stone,.9),P*5.7,.1+0,-3.5+C*2.3,!1);let x=2.9,g=new tr([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13,2.4],[0,12.5,4.2]].map(P=>new D(P[0],P[1]+x-.4,P[2]))),p=64,y=g.getPoints(p),S=[],_=new D(0,1,0),v=P=>.2+.98*Math.pow(Math.sin(Math.min(1,P*1.5)*Math.PI/2),.7)*(1-.32*P);for(let P=0;P<=p;P++){let C=P/p,N=y[P],O=g.getTangent(C),z=new D().crossVectors(_,O);z.lengthSq()<1e-4&&z.set(1,0,0),z.normalize();let $=new D().crossVectors(O,z).normalize(),B=v(C),G=[];for(let K=0;K<8;K++){let ht=K/8*6.2832,It=Math.cos(ht),he=Math.sin(ht);G.push([N.x+(z.x*It+$.x*he)*B,N.y+(z.y*It+$.y*he)*B,N.z+(z.z*It+$.z*he)*B])}S.push(G)}u.loft(S,(P,C)=>P>=5&&P<=7?Ln(vr,.95+.1*(C%2)):Ln(C%2?Op:Yh,.92+.12*((C>>1)%2)));for(let P=3;P<p-4;P+=2){let C=P/p,N=y[P],O=g.getTangent(C),z=v(C),$=.35+z*.9;u.at(N.x,N.y+z*.95,N.z,Math.atan2(O.x,O.z),B=>{B.cyl(.2*$,0,1.5*$,4,P%4?yy:vr,0,0,0)},-Math.atan2(O.y,Math.hypot(O.x,O.z))*.6)}for(let[P,C]of[[22,1],[22,-1],[40,1],[40,-1]]){let N=y[P],O=v(P/p),z=[N.x+C*(O+.6),N.y-O*.8,N.z+.2],$=[N.x+C*(O+1.6),Math.max(x,N.y-O*.8-2.2),N.z+.6];zs(u,[N.x+C*O*.7,N.y-O*.4,N.z],z,.38,Yh),zs(u,z,$,.3,Op);for(let B=-1;B<=1;B++)u.at($[0]+C*.15,$[1],$[2]+B*.22,0,G=>G.cyl(.09,0,.55,4,Nl,0,-.1,0),0,0,C*-1.1)}{let P=y[40],C=v(40/p);d.ball(.55,16762986,P.x+(C+1.7),Math.max(x+.9,P.y-C-1.5)+.6,P.z+.6,1,1,1,1),Me(c,16766354,6,P.x+C+1.7,Math.max(x+.9,P.y-C-1.5)+.6,P.z+.6,.9)}{let P=y[0];for(let C=0;C<5;C++)u.at(P.x,P.y,P.z-.2,(C-2)*.28,N=>N.cyl(.3,0,1.8,4,C%2?yy:vr,0,0,0),-1,0,0)}let b=y[p],T=g.getTangent(1);u.at(b.x,b.y,b.z,0,P=>{P.ball(1.15,Op,0,0,.3,1,.92,1.25,1).boxB(1.15,.62,1.9,Yh,0,-.5,1.1).box(1.3,.3,1.2,vr,0,.45,.9),P.at(0,-.88,1.05,0,C=>C.box(1,.32,1.8,Ln(Yh,.9),0,0,.5),.38);for(let C of[-1,1]){for(let N=0;N<3;N++)P.cyl(.09,0,.45,4,Nl,C*.44,-.45,1.4+N*.5),P.at(C*.44,-.8,1.4+N*.5,0,O=>O.cyl(.08,0,.38,4,Nl,0,0,0),Math.PI);P.ball(.16,X.black,C*.28,.05,2.12,1,1,1,0),P.at(C*.5,.85,-.1,0,N=>{N.cyl(.24,.06,1.5,5,vr,0,0,0)},-.95,0,C*.2),P.at(C*.62,1.65,-1.1,0,N=>{N.cyl(.07,0,1.1,5,vr,0,0,0)},-1.45,0,C*.25);for(let N=0;N<2;N++){let O=[C*.5,-.35,1.9];zs(u,O,[C*(1.5+N*.5),-.5-N*.35,2.8],.06,Nl),zs(u,[C*(1.5+N*.5),-.5-N*.35,2.8],[C*(2.6+N*.4),-1.6-N*.4,2],.05,Nl)}}d.box(.8,.16,1.45,16742954,0,-.62,1.5);for(let C of[-1,1])d.ball(.2,16769658,C*.58,.32,.95,1,1.1,.8,1)});for(let P=0;P<7;P++){let C=(P-3)*.28;f.at(b.x,b.y+.4,b.z-.6,0,N=>N.quad([-.35,0,0],[.35,0,0],[.5+C*.3,-1.2,-3.4-P*.1],[-.5+C*.3,-1.2,-3.4-P*.1],P%2?X.red:vr),0,0,C)}Me(c,16753226,5.5,b.x,b.y-.5,b.z+1.7,.85),Me(c,16769658,2.4,b.x-.6,b.y+.3,b.z+1.1,.8),Me(c,16769658,2.4,b.x+.6,b.y+.3,b.z+1.1,.8);let M=P=>new pe(Object.assign({gradientMap:Ae,color:16777215,vertexColors:!0,fog:!0},P||{})),E=M(),R=M({emissive:2759680}),I=M({side:Zt}),L=new fe({color:16777215,vertexColors:!0,fog:!0});return c.add(u.mesh(E),h.mesh(R),f.mesh(I),d.mesh(L)),r.userData.dragon={k:i,s:t,mouth:new D(a,l+(b.y-.5)*1.5,b.z*1.5+2.5),roared:!1},r.updateMatrixWorld(!0),r}var XE="rio-found-types",_y=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],BC=_y.map(i=>i[0]),OC=_y.map(i=>i[1]),My=()=>{let i=new Set;for(let t of["rio3d-found",XE])try{JSON.parse(localStorage.getItem(t)||"[]").forEach(e=>i.add(e))}catch{}return i};var Ty="rio-tasks",Jh=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]],zp=[["Escuchar el crujido del puente","Listen to the bridge creak","\u6A4B\u306E\u304D\u3057\u3080\u97F3\u3092\u805E\u304F","Volv\xED al puente: cruji\xF3 con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.","I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.","\u6A4B\u306B\u623B\u308B\u3068\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u6B69\u5E45\u3067\u304D\u3057\u307F\u307E\u3057\u305F\u3002\u3082\u3046\u6728\u306E\u97F3\u3067\u306F\u306A\u304F\u3001\u5BB6\u306E\u97F3\u3067\u3059\u3002"],["Mirar el reflejo del portal","Watch the gate\u2019s reflection","\u9CE5\u5C45\u306E\u6620\u308A\u3092\u773A\u3081\u308B","Esta vez mir\xE9 el reflejo en lugar del portal. Se ve igual de bien, pero m\xE1s tranquilo.","This time I looked at the reflection instead of the gate. It looks just as good, only calmer.","\u4ECA\u56DE\u306F\u9CE5\u5C45\u3067\u306F\u306A\u304F\u6C34\u9762\u306E\u6620\u308A\u3092\u898B\u307E\u3057\u305F\u3002\u540C\u3058\u304F\u3089\u3044\u304D\u308C\u3044\u3067\u3001\u3082\u3063\u3068\u9759\u304B\u3067\u3059\u3002"],["Saludar a quien pasa en la aldea","Greet someone passing in the village","\u6751\u3067\u3059\u308C\u3061\u304C\u3046\u4EBA\u306B\u3042\u3044\u3055\u3064\u3059\u308B","Una se\xF1ora de la aldea me salud\xF3 como si fuera vecina. Le dije que ten\xEDa una caba\xF1a lejos, y sonri\xF3.","A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.","\u6751\u306E\u5973\u6027\u304C\u96A3\u4EBA\u306E\u3088\u3046\u306B\u3042\u3044\u3055\u3064\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u9060\u304F\u306B\u5C0F\u5C4B\u304C\u3042\u308B\u3068\u8A71\u3059\u3068\u3001\u7B11\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002"],["Atrapar un p\xE9talo en el aire","Catch a petal in the air","\u821E\u3046\u82B1\u3073\u3089\u3092\u3064\u304B\u3080","Atrap\xE9 un p\xE9talo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.","I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.","\u4F55\u6C17\u306A\u304F\u7A7A\u4E2D\u3067\u82B1\u3073\u3089\u3092\u3064\u304B\u307F\u307E\u3057\u305F\u3002\u5E78\u904B\u306E\u3057\u308B\u3057\u3060\u305D\u3046\u3067\u3059\u3002\u3042\u306A\u305F\u306B\u8D08\u308A\u307E\u3059\u3002"],["Contar las garzas en silencio","Count the herons in silence","\u9759\u304B\u306B\u30B5\u30AE\u3092\u6570\u3048\u308B","Cont\xE9 las garzas sin mover un dedo: siempre salen una m\xE1s de las que cre\xEDa.","I counted the herons without moving a finger: there is always one more than I thought.","\u6307\u4E00\u672C\u52D5\u304B\u3055\u305A\u30B5\u30AE\u3092\u6570\u3048\u307E\u3057\u305F\u3002\u601D\u3063\u305F\u3088\u308A\u3001\u3044\u3064\u3082\u3072\u3068\u3064\u591A\u3044\u306E\u3067\u3059\u3002"],["Escuchar c\xF3mo se apaga el eco de la campana","Listen to the bell\u2019s echo fade","\u9418\u306E\u4F59\u97FB\u304C\u6D88\u3048\u308B\u306E\u3092\u805E\u304F","Esper\xE9 a que el eco se apagara del todo. Dura m\xE1s de lo que uno imagina, y es lo mejor de la campana.","I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.","\u4F59\u97FB\u304C\u5B8C\u5168\u306B\u6D88\u3048\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u601D\u3046\u3088\u308A\u9577\u304F\u3001\u305D\u308C\u304C\u9418\u306E\u3044\u3061\u3070\u3093\u597D\u304D\u306A\u3068\u3053\u308D\u3067\u3059\u3002"],["Mojar los dedos en la cascada","Dip your fingers in the waterfall","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3059","Moj\xE9 los dedos en la cascada: estaba fr\xEDa y clara. Te mando un poco de ese fr\xEDo para el verano.","I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3057\u307E\u3057\u305F\u3002\u51B7\u305F\u304F\u3066\u6F84\u3093\u3067\u3044\u307E\u3059\u3002\u590F\u306E\u305F\u3081\u306B\u3001\u5C11\u3057\u305D\u306E\u51B7\u305F\u3055\u3092\u9001\u308A\u307E\u3059\u3002"],["Mirar c\xF3mo suben el vapor y la tarde","Watch the steam and the afternoon rise","\u6E6F\u6C17\u3068\u5915\u65B9\u304C\u7ACB\u3061\u306E\u307C\u308B\u306E\u3092\u898B\u308B","El vapor del t\xE9 sub\xEDa despacio y la tarde con \xE9l. Anot\xE9 la hora: no se me va a olvidar.","The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.","\u304A\u8336\u306E\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u3001\u5915\u65B9\u3082\u3044\u3063\u3057\u3087\u306B\u6607\u308A\u307E\u3057\u305F\u3002\u6642\u523B\u3092\u66F8\u304D\u3068\u3081\u305F\u306E\u3067\u3001\u5FD8\u308C\u307E\u305B\u3093\u3002"],["Dejar que el viento mueva el bamb\xFA","Let the wind move the bamboo","\u98A8\u304C\u7AF9\u3092\u3086\u3089\u3059\u306E\u306B\u307E\u304B\u305B\u308B","No hice nada y el bamb\xFA hizo todo. Aprend\xED que a veces ayudar es apartarse.","I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.","\u4F55\u3082\u3057\u306A\u3044\u3068\u3001\u7AF9\u304C\u3059\u3079\u3066\u3092\u3084\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u8EAB\u3092\u5F15\u304F\u3053\u3068\u304C\u52A9\u3051\u306B\u306A\u308B\u3068\u77E5\u308A\u307E\u3057\u305F\u3002"],["Ver c\xF3mo se cierra un loto","Watch a lotus close","\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u308B","Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.","I watched a lotus close at dawn. It is not an ending: it is the same rest you take.","\u591C\u660E\u3051\u306B\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u307E\u3057\u305F\u3002\u7D42\u308F\u308A\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u4F11\u307F\u3068\u540C\u3058\u4F11\u307F\u3067\u3059\u3002"],["Mirar el castillo desde el agua","Look at the castle from the water","\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u308B","Mir\xE9 el castillo desde el agua, como la primera vez. Sigue pareci\xE9ndose a las luces de tu terraza.","I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.","\u6700\u521D\u306E\u3068\u304D\u306E\u3088\u3046\u306B\u3001\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u307E\u3057\u305F\u3002\u3084\u306F\u308A\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002"]];var Ay="rio-tasks2",Ey=2,kp=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},Vp=()=>{try{let i=JSON.parse(localStorage.getItem(Ay)||"{}")||{};return i.d=i.d||{},i}catch{return{d:{}}}},by=()=>Vp().d,qE=()=>{let i=Vp();return i.day===kp()?Math.max(0,Ey-(i.n||0)):Ey};var Ry=()=>{try{return JSON.parse(localStorage.getItem(Ty)||"{}")}catch{return{}}};var YE=()=>My().has(10);function Sy(i){i.add(Jh.map(t=>[t[0],t[1],t[2]])),i.add(Jh.map(t=>[t[3],t[4],t[5]])),i.add(zp.map(t=>[t[0],t[1],t[2]])),i.add(zp.map(t=>[t[3],t[4],t[5]])),i.add([["Carta de vuelta","Letter back","\u8FD4\u4E8B\u306E\u624B\u7D19"],["Hoy ya diste dos vueltas. Ma\xF1ana, m\xE1s.","You have already done two returns today. More tomorrow.","\u4ECA\u65E5\u306F\u3082\u3046\u4E8C\u56DE\u3075\u308A\u8FD4\u308A\u307E\u3057\u305F\u3002\u7D9A\u304D\u306F\u660E\u65E5\u3002"]]),i.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var ci,ta,Zh,ys=null,Ul=0,Fl=0,Hp=0,Cy=0,wy=!1,Gp=null;function ZE(){ci=document.createElement("button"),ci.type="button",ci.style.cssText="position:fixed;left:50%;bottom:max(150px,calc(env(safe-area-inset-bottom) + 144px));transform:translateX(-50%);z-index:60;display:none;min-height:50px;max-width:min(90vw,420px);padding:10px 20px;border-radius:99px;border:1px solid #ffc77a;background:rgba(40,40,80,.88);color:#fbf1e0;font:600 .9rem/1.25 system-ui;cursor:pointer;overflow:hidden;touch-action:none",ta=document.createElement("span"),ta.style.cssText="position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,199,122,.35);pointer-events:none",Zh=document.createElement("span"),Zh.style.cssText="position:relative",ci.append(ta,Zh),document.body.appendChild(ci);let i=e=>{ys!=null&&(e.preventDefault(),Fl=1,Cy=performance.now(),JE())},t=()=>{Fl=0,ta.style.width="0"};ci.addEventListener("pointerdown",i),ci.addEventListener("pointerup",t),ci.addEventListener("pointerleave",t),ci.addEventListener("pointercancel",t),ci.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Iy())})}function JE(){cancelAnimationFrame(Hp);let i=()=>{if(!Fl)return;let t=Math.min(1,(performance.now()-Cy)/2200);if(ta.style.width=t*100+"%",t>=1){Fl=0,Iy();return}Hp=requestAnimationFrame(i)};Hp=requestAnimationFrame(i)}function Iy(){if(ys==null)return;if(Ul){let t=Vp();t.d[ys]=1,t.n=(t.day===kp()&&t.n||0)+1,t.day=kp();try{localStorage.setItem(Ay,JSON.stringify(t))}catch{}}else{let t=Ry();t[ys]=1;try{localStorage.setItem(Ty,JSON.stringify(t))}catch{}}let i=ys;ys=null,Ul=0,ci.style.display="none",ta.style.width="0";try{Gp&&Gp(i)}catch{}try{UX.hap([10,50,10])}catch{}try{UX.say(UX.tr("Hecho. Un recuerdo m\xE1s para la caba\xF1a."))}catch{}}function Py(i,t){if(!wy){wy=!0;try{Sy(window.UX)}catch{}}Gp=t;let e=i!=null&&Jh[i]&&YE(),n=e&&!Ry()[i],s=e&&!n&&!by()[i]&&qE()>0;if(!(n||s)){ys!=null&&!Fl&&(ys=null,Ul=0,ci&&(ci.style.display="none"));return}ys===i&&Ul===(s?1:0)||(ci||ZE(),ys=i,Ul=s?1:0,Zh.textContent=UX.tr((s?zp:Jh)[i][0])+" \xB7 "+UX.tr("Mant\xE9n pulsado para hacerlo"),ci.style.display="block")}var ea=new Map;try{window.__dragons=ea}catch{}function $E(i,t,e){for(let[n,s]of ea){let r=s.userData.dragon.s;(r<i-140||r>i+380)&&(xt.remove(s),Ap(s),ea.delete(n))}for(let n=Math.max(0,t-1);n<=e+2;n++){if(Xe(n)!==10||ea.has(n))continue;let s=qo(n);if(s<i-140||s>i+380)continue;let r=vy(n);ea.set(n,r),xt.add(r)}for(let[,n]of ea){let s=n.userData.dragon;if(!s.roared&&i>s.s-60&&i<s.s+20){s.roared=!0;try{$t.roar()}catch{}ai("El drag\xF3n anuncia el Castillo de la Garza Blanca")}}}function Dy(i){let t=Math.max(0,Math.floor((i-140)/Li)),e=Math.floor((i+340)/Li);$E(i,t,e);for(let[n,s]of pi)(n<t||n>e)&&(s.parent&&xt.remove(s),Ap(s),pi.delete(n));for(let n=t;n<=e;n++){let s=pi.get(n);s||(s=hy(n),pi.set(n,s)),s.parent||xt.add(s);{let r=Xe(n);if(Qe(n)-i<(r===2?70:r===10?130:55)&&i-Qe(n)<25&&(!Si.has(r)||!ot.X.hasSnap(r)&&!pp.has(r))){let o=!Si.has(r);if(Si.add(r),pp.add(r),Tx.add(n),dy(n),r===4&&Lr("garza"),r===9&&Lr("loto"),o){ai("Descubriste: "+$i[r]);try{$t.chime(0,n%5)}catch{}wx(),Ah(i),ot.X.found(r)}}}}{let n=null;for(let s=t;s<=e;s++)if(Math.abs(Qe(s)-i)<60){n=Xe(s);break}Py(n,()=>{try{$t.chime(0,2)}catch{}})}for(let[,n]of pi)if(n.userData.job){let s=performance.now(),r;do r=n.userData.job.next();while(!r.done&&performance.now()-s<5);r.done&&(n.userData.job=null,Bh(n))}else n.userData.cas&&uy(n,ue.night,.016);for(let n of Gr)n.material.opacity=n.userData.base*(.3+.7*ot.glowK);Fh.uniforms.k.value=ot.glowK,gr.uniforms.t.value=F.t,gr.uniforms.fogCol.value.copy(xt.fog.color);for(let n of gs)n.nk?n.nk.rotation.x=Math.sin(F.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(F.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(F.t*1.1+n.ph)*.12}var Kh=new fe({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:Zt}),na=ii,Ly=new Float32Array(na*4*2*3),Ny=new Float32Array(na*4*2*4),ia=new jt;ia.setAttribute("position",new Gt(Ly,3));ia.setAttribute("color",new Gt(Ny,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<na-1;e++){let n=(t*na+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}ia.setIndex(i)}var Ol=new W(ia,Kh);Ol.frustumCulled=!1;Ol.renderOrder=1;xt.add(Ol);function Uy(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<na;s++){let r=t+s*si,o=ge(r)-1+(je(r*.08,e*9)-.5)*.9,a=.9+je(r*.2,e)*1.2,l=qt(r)+n*o,c=-r,u=Math.max(.06,Math.min(.85,.1+.85*(je(r*.11+e*30,5)*.6+je(r*.5,e*7+3)*.5)-.12)),h=(e*na+s)*4,d=[l-n*a*1.4,l-n*a*.4,l+n*a*.5,l+n*a*1.5],f=[0,u,u*.6,0];for(let m=0;m<4;m++)Ly.set([d[m],.05,c],(h+m)*3),Ny.set([1,1,1,f[m]],(h+m)*4)}}ia.attributes.position.needsUpdate=ia.attributes.color.needsUpdate=!0}var KE=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,.55)"),e.addColorStop(.55,"rgba(255,255,255,.4)"),e.addColorStop(.85,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new yi(i);return n.colorSpace=An,n})(),Fy=96,Xp=[];for(let i=0;i<Fy;i++){let t=new W(new vi(.5,20).rotateX(-Math.PI/2),new fe({color:16777215,map:KE,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},xt.add(t),Xp.push(t)}var jE=0,Wp=0;function Bl(i,t,e,n,s,r=3.2,o=.38){let a=Xp[jE++%Fy];a.position.set(i,.045,t),a.userData={age:0,vx:e,vz:n,sc:s,life:r,mx:o},a.scale.setScalar(.4)}var jh=60,qp=new jt,$h=new Float32Array(jh*3),Yp=[];for(let i=0;i<jh;i++)Yp.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});qp.setAttribute("position",new Gt($h,3));var QE=new Vi({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),By=new Ci(qp,QE);By.frustumCulled=!1;xt.add(By);var t2=0;function Qh(i,t,e,n){for(let s=0;s<n;s++){let r=Yp[t2++%jh];r.l=1,r.x=i,r.y=t,r.z=e;let o=Math.random()*6.28,a=.8+Math.random()*1.4;r.vx=Math.cos(o)*a,r.vz=Math.sin(o)*a,r.vy=2+Math.random()*2.2}Zn(i,e)}function Oy(i){Kh.opacity=.62+.08*Math.sin(F.t*.55);for(let t=0;t<jh;t++){let e=Yp[t];e.l>0&&(e.l-=i*1.4,e.vy-=9*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,e.y<0&&(e.l=0)),$h[t*3]=e.l>0?e.x:0,$h[t*3+1]=e.l>0?e.y:-50,$h[t*3+2]=e.z}if(qp.attributes.position.needsUpdate=!0,Wp-=i,Wp<=0&&ot.started){Wp=.11;let t=Math.min(F.v,5),e=Math.cos(F.psi),n=Math.sin(F.psi),s=F.px-Math.sin(F.psi)*1.5,r=F.pz+Math.cos(F.psi)*1.5;for(let o of[-1,1])Bl(s+e*.5*o,r+n*.5*o,e*o*.5,n*o*.5,.7+t*.12);if(t>.8){let o=F.px+Math.sin(F.psi)*2.9,a=F.pz-Math.cos(F.psi)*2.9,l=Math.min(t/4,1);for(let c of[-1,1])Bl(o+e*.25*c,a+n*.25*c,e*c*(.9+l*.5)-Math.sin(F.psi)*.4,n*c*(.9+l*.5)+Math.cos(F.psi)*.4,.3+l*.3,1.7,.2*l+.08)}}Xp.forEach(t=>{let e=t.userData,n=e.life||3.2;if(e.age>=n){t.material.opacity=0;return}e.age+=i;let s=e.age/n;t.position.x+=(e.vx||0)*i,t.position.z+=(e.vz||0)*i,t.scale.setScalar((.4+s*2.6)*(e.sc||1)),t.material.opacity=(e.mx||.38)*1.5*(1-s)*(1-s)})}var e2=5,Zr=[],Hy=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function n2(i){let t=new zt,e=Hy[i%Hy.length],n=new W(new Jt(.5,12,8),Tt(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new W(new Jt(.5,10,6),Tt(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new zt;r.position.z=.45,t.add(r);let o=new W(new Te(.22,.5,4),Tt(e[0],{side:Zt}));o.rotation.x=-Math.PI/2,o.scale.set(1.2,1,.18),o.position.z=.22,r.add(o);let a=new W(new Te(.08,.3,3),Tt(e[0]));return a.position.set(0,.2,.05),a.rotation.x=-.3,t.add(a),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},xt.add(t),t}for(let i=0;i<e2;i++)Zr.push(n2(i));function Wy(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(ge(e)-3);i.position.set(qt(e)+n,-.05,-e),i.userData.st=0,i.userData.rest=0,i.userData.fol=0,i.userData.fmax=0,i.userData.hd=_n(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}Zr.forEach(i=>Wy(i,30+Math.random()*60));function Xy(i,t){for(let e of Zr){let n=e.userData;n.t+=i;let s=e.position.z-F.pz,r=-e.position.z;if(r<t-12||r>t+120){Wy(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let o=e.position.x-qt(r),a=ge(r)-3;Math.abs(o)>a&&(n.hd+=(_n(r)+(o>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,Qh(e.position.x,.1,e.position.z,5),$t.plop((e.position.x-F.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&Bl(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let o=.95,a=n.j/o,l=Math.sin(Math.PI*a)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+l;let c=Math.cos(Math.PI*a)*1.25*Math.PI/o;e.rotation.set(0,-n.hd,0),e.rotateX(Math.atan2(c,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=o&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd,0),Qh(e.position.x,.1,e.position.z,9),$t.plop((e.position.x-F.px)/25))}}Oy(i)}var qy=[],Jr=[];function i2(i){let t=new zt,e=i%3!==2,n=e?16184302:9279656,s=e?15262424:7305868,r=new W(new Jt(.28,10,8),Tt(n));r.scale.set(.7,.7,1.8),t.add(r);let o=new W(new ce(.045,.06,.5,6),Tt(n));o.rotation.x=1.15,o.position.set(0,.1,-.5),t.add(o);let a=new W(new Jt(.09,8,6),Tt(n));a.position.set(0,.3,-.72),t.add(a);let l=new W(new Te(.035,.3,5),Tt(15245898));l.rotation.x=-Math.PI/2,l.position.set(0,.3,-.95),t.add(l);let c=[-1,1].map(h=>{let d=new zt;d.position.set(h*.12,.08,-.05),t.add(d);let f=new W(new Fn(1.35,.03,.62),Tt(s));f.position.x=h*.68,d.add(f);let m=new W(new Fn(.5,.03,.4),Tt(e?4934485:5857391));return m.position.set(h*1.5,0,.05),d.add(m),d}),u=new W(new Te(.12,.45,4),Tt(n));return u.rotation.x=Math.PI/2,u.position.z=.65,t.add(u),t.scale.setScalar(1.5),t.userData={wings:c,ph:Math.random()*6,fl:0,sp:5+Math.random()*2.5,hd:0,h:7+Math.random()*7,off:(Math.random()-.5)*20},xt.add(t),t}function s2(i){let t=new zt,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new W(new ce(.025,.018,.5,6),Tt(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new W(new Jt(.055,8,6),Tt(n));r.position.z=-.27,t.add(r);let o=new fe({color:15398655,transparent:!0,opacity:.5,side:Zt,depthWrite:!1}),a=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([l,c])=>{let u=new zt;u.position.set(0,.02,c),t.add(u);let h=new W(new rn(.38,.1).rotateX(-Math.PI/2),o);h.position.x=l*.2,u.add(h),a.push([u,l])}),t.scale.setScalar(1.8),t.userData={wings:a,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},xt.add(t),t}for(let i=0;i<8;i++)Jr.push(s2(i));var $r=[];function r2(i){let t=new zt,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new W(new Jt(.3,10,8),Tt(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new W(new Te(.12,.3,5),Tt(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let o=new zt;o.position.set(0,.3,-.25),t.add(o);let a=new W(new ce(.06,.08,.34,6),Tt(e));a.position.y=.15,o.add(a);let l=new W(new Jt(.1,8,6),Tt(i%2?3486766:e));l.position.set(0,.34,-.03),o.add(l);let c=new W(new Te(.04,.16,5),Tt(15245898));return c.rotation.x=-Math.PI/2,c.position.set(0,.33,-.15),o.add(c),t.scale.setScalar(1.15),t.userData={neck:o,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},xt.add(t),t}function Zp(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(ge(e)-6);i.position.set(qt(e)+n,0,-e),i.userData.hd=_n(e)+(Math.random()-.5)*2}for(let i=0;i<4;i++){let t=r2(i);i>=2&&t.scale.setScalar(.72),$r.push(t)}$r.forEach(i=>Zp(i,30));function Yy(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(ge(e)+2);i.position.set(qt(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}Jr.forEach(i=>Yy(i,30));function Zy(i,t){let e=1-Ie(ue.night*1.5,0,1)*1,n=e>.15&&ln.rain<.6;for(let s of $r){s.visible=e>.1;let r=s.userData;r.t+=i;let o=-s.position.z,a=o-t;if(!r.follow&&!(r.flee>0)&&(a<-14||a>110)){Zp(s,t);continue}if(r.follow&&a<-70){r.follow=0,Zp(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&!r.follow&&!(r.flee>0)&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let l=Math.sin(Math.PI*Ie(1-r.dip/1.3));r.neck.rotation.x=1.2*l,s.rotation.x=.9*l*.5,s.position.y=-.05*l,l>.9&&!r.rip&&(r.rip=!0,Zn(s.position.x,s.position.z-.4),$t.plop((s.position.x-F.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let l=s.position.x-qt(o);Math.abs(l)>ge(o)-5&&(r.hd+=(_n(o)+(l>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*(r.spd||.35)*i,s.position.z-=Math.cos(r.hd)*(r.spd||.35)*i}s.rotation.y=-r.hd}for(let s of Jr){if(s.visible=n,!n)continue;let r=s.userData;if(r.t-=i,l2(s,r,i))continue;let o=-s.position.z-t;if(o<-12||o>90){Yy(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let d=-s.position.z+(Math.random()-.5)*8,f=s.position.x-qt(d);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let m=r.tx-qt(-r.tz);Math.abs(m)>ge(-r.tz)+3&&(r.tx=qt(-r.tz)+Math.sign(m)*(ge(-r.tz)+1))}let a=Math.min(1,i*3.2),l=s.position.x,c=s.position.z;s.position.x+=(r.tx-s.position.x)*a,s.position.z+=(r.tz-s.position.z)*a,s.position.y+=(r.ty-s.position.y)*a+Math.sin(F.t*9+r.ph)*.004;let u=s.position.x-l,h=s.position.z-c;Math.hypot(u,h)>.002&&(s.rotation.y=Math.atan2(-u,-h)),s.rotation.x=-Math.min(.5,Math.hypot(u,h)*20)*.5,r.wings.forEach(([d,f],m)=>{d.rotation.z=f*Math.sin(F.t*70+m*1.7+r.ph)*.45})}}var Hl=(()=>{try{return JSON.parse(localStorage.getItem("rio3d-enc")||"{}")||{}}catch{return{}}})(),zy={heron:"garza",koi:"koi",duck:"pato",dragonfly:"libelula",festival:"festival"};function ra(i,t){try{zy[i]&&Lr(zy[i])}catch{}if(!Hl[i]){Hl[i]=Date.now();try{localStorage.setItem("rio3d-enc",JSON.stringify(Hl))}catch{}ai(t)}}var o2=(()=>{let i=Uh(1,0);gs.pop(),i.updateMatrixWorld(!0);let t=[];return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);n.deleteAttribute("uv");let s=e.material.color,r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;n.setAttribute("color",new Gt(o,3)),t.push(n.index?n.toNonIndexed():n)}),Us(t)})(),_r=new Un(o2,new pe({gradientMap:Ae,vertexColors:!0}),24);_r.frustumCulled=!1;_r.count=0;xt.add(_r);var sa=[],Jy=[];function a2(i,t,e,n){let s=Jy.pop()||i2(0);s.rotation.order="YXZ",s.scale.setScalar(2.1),s.visible=!0,s.position.set(i,t+1.2,e),s.userData.fl2={t:0,hd:n,vy:3.2,sp:2.2,ph:Math.random()*6},xt.add(s),sa.push(s);try{$t.flap((i-F.px)/25)}catch{}ra("heron","Las garzas alzan el vuelo a tu paso")}var vs=new D,ky=new gn,Gy=new D,Vy=new ve;function $y(i,t){if(!ot.started)return;let e=!window.__noScare&&(Math.abs(F.steer)>.8||F.t-F.bumpT<.8);ot.scareT=e?2.5:Math.max(0,ot.scareT-i);let n=Math.sin(F.psi),s=Math.cos(F.psi),r=ot.scareT<=0;for(let a of Zr){let l=a.userData;if(l.st!==0)continue;l.sp0==null&&(l.sp0=l.sp);let c=a.position.x-F.px,u=a.position.z-F.pz,h=Math.hypot(c,u);if(!r&&h<11){l.hd+=Nr(Math.atan2(c,-u),l.hd)*Math.min(1,i*6),l.sp=3.4,l.cur=0;continue}if(l.rest>0){l.rest-=i,l.sp=l.sp0,l.cur=0,l.aw>0&&(l.aw-=i,l.hd+=Nr(Math.atan2(c,-u),l.hd)*Math.min(1,i*1.1));continue}if(r&&h<26){if(l.fol=(l.fol||0)+i,l.fmax||(l.fmax=16+Math.random()*22),l.fol>l.fmax){l.rest=60+Math.random()*60,l.aw=4,l.fol=0,l.fmax=0,l.dir=0,l.cur=0;continue}l.dir||(l.dir=Math.random()<.5?-1:1);let d=-.4+Math.sin(F.t*.5+l.ph)*1.3,f=F.px+s*l.dir*2.7+n*d,m=F.pz+n*l.dir*2.7-s*d,x=f-a.position.x,g=m-a.position.z,p=Math.hypot(x,g);if(l.hd+=Nr(Math.atan2(x,-g),l.hd)*Math.min(1,i*3.2),l.sp=Math.max(.7,Math.min(4,F.v+p*.9)),l.cur=1,h<5.5&&(ra("koi","Los peces se acercan a nadar contigo"),Math.random()<i*.35)){Bl(a.position.x+Math.sin(l.hd)*.4,a.position.z-Math.cos(l.hd)*.4,0,0,.55);try{$t.plop((a.position.x-F.px)/25)}catch{}}if(h<6.5&&Math.random()<i*.06){l.st=1,l.j=0,l.vx=Math.sin(l.hd)*2.6,l.vz=-Math.cos(l.hd)*2.6,Qh(a.position.x,.1,a.position.z,6);try{$t.plop((a.position.x-F.px)/25)}catch{}}}else l.sp=l.sp0,l.cur=0}$r.forEach((a,l)=>{let c=a.userData;if(!a.visible)return;let u=a.position.x-F.px,h=a.position.z-F.pz,d=Math.hypot(u,h);if(c.flee>0){c.flee-=i,c.hd+=Nr(Math.atan2(u,-h),c.hd)*Math.min(1,i*4),c.spd=2.6;return}if(!r&&d<16){c.follow=0,c.flee=3;return}if(r&&(c.follow||d<17)){c.follow||(c.follow=1,c.qT=1+Math.random()*3,l<2&&ra("duck","Un pato decide acompa\xF1arte"));let f=3.8+l*1.7,m=Math.sin(F.t*.4+l*2)*1.1+(l%2?1:-1)*.9,x=F.px-n*f+s*m,g=F.pz+s*f+n*m,p=x-a.position.x,y=g-a.position.z,S=Math.hypot(p,y);if(c.hd+=Nr(Math.atan2(p,-y),c.hd)*Math.min(1,i*2.6),c.spd=Math.max(.1,Math.min(3.4,(S>.8?F.v*1.05:F.v*.9)+S*.5)),c.qT-=i,c.qT<=0&&d<12){c.qT=5+Math.random()*9;try{$t.quack((a.position.x-F.px)/25)}catch{}}}else c.spd=0});for(let[a,l]of pi){let c=l.userData.hp;if(!(!c||Xe(a)!==4))for(let u of c){let h=u[5];if(h.gone>0&&(h.gone-=i,h.gone>0))continue;vs.set(u[0],u[1],u[2]),l.localToWorld(vs);let d=vs.x-F.px,f=vs.z-F.pz;Math.hypot(d,f)<(ot.scareT>0?22:13)&&F.t>(h.cd||0)&&(h.gone=70,h.cd=F.t+4,a2(vs.x,vs.y,vs.z,Math.atan2(d,-f)+(Math.random()-.5)*.8))}}let o=0;for(let[a,l]of pi){let c=l.userData.hp;if(!(!c||Xe(a)!==4))for(let u of c)u[5].gone>0||o>=24||(vs.set(u[0],u[1],u[2]),l.localToWorld(vs),ky.setFromAxisAngle(Bs,l.rotation.y+u[3]),Gy.setScalar(u[4]),Vy.compose(vs,ky,Gy),_r.setMatrixAt(o++,Vy))}_r.count=o,_r.instanceMatrix.needsUpdate=!0;for(let a=sa.length-1;a>=0;a--){let l=sa[a],c=l.userData.fl2;c.t+=i,c.vy=Math.max(.6,c.vy-i*.35),l.position.y>11&&(c.vy=Math.min(c.vy,.2)),c.sp=Math.min(6.2,c.sp+i*1.6);let u=-l.position.z;c.hd+=Nr(_n(u)+Math.sin(c.ph)*.3,c.hd)*i*.6,l.position.x+=Math.sin(c.hd)*c.sp*i,l.position.z-=Math.cos(c.hd)*c.sp*i,l.position.y+=c.vy*i,l.rotation.y=-c.hd,l.rotation.x=Math.min(.5,c.vy*.12);let h=Math.sin(c.t*(c.t<4?10:6)+c.ph)*(c.t<8?.8:.3);l.userData.wings.forEach((d,f)=>{d.rotation.z=(f?1:-1)*h}),(c.t>16||Math.hypot(l.position.x-F.px,l.position.z-F.pz)>230)&&(xt.remove(l),Jy.push(l),sa.splice(a,1))}}var ks=new D;function l2(i,t,e){if(t.land>0)return t.land-=e,t.land<=0||ot.scareT>0||!i.visible?(t.land=0,t.app=0,t.t=.2,t.ty=2.4,t.tx=i.position.x+(Math.random()-.5)*5,t.tz=i.position.z-4,!1):(Ue.localToWorld(ks.set(t.lx,t.ly,t.lz)),i.position.copy(ks),i.quaternion.copy(Ue.quaternion),t.wings.forEach(([n,s])=>{n.rotation.z=s*.12}),!0);if(!ot.started||!i.visible||ot.scareT>0)return!1;if(t.app)return t.t=3,Ue.localToWorld(ks.set(t.lx,t.ly,t.lz)),t.tx=ks.x,t.ty=ks.y,t.tz=ks.z,!(t.app-=e>0?e:0)||t.app<=0?(t.app=0,!1):(i.position.distanceTo(ks)<.45&&(t.app=0,t.land=14+Math.random()*18,ra("dragonfly","Una lib\xE9lula se pos\xF3 en la proa de tu canoa")),!1);if(Math.random()<e*.18&&(Ue.localToWorld(ks.set(0,.5,-3)),i.position.distanceTo(ks)<7)){let n=0;for(let s of Jr)(s.userData.land>0||s.userData.app>0)&&n++;n<2&&(t.lx=(Math.random()-.5)*.3,t.ly=.62,t.lz=-3.05+Math.random()*.25,t.app=5)}return!1}var td=38,Jp=new Map,Ky=[0,1,2].map(i=>{let t=new hn(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getY(r),l=e.getZ(r),c=1+(j(Math.round(o*5)+i*9,Math.round(a*5)+Math.round(l*5))-.5)*.35;e.setXYZ(r,o*c*1.15,a*c*.72,l*c);let u=.7+.4*Ie((a+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=u}t.setAttribute("color",new Gt(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),c2=new pe({gradientMap:Ae,color:12039108,vertexColors:!0,map:Ce("rock")}),u2=new pe({gradientMap:Ae,color:8829066,map:Ce("leaf")}),h2=new fe({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:Zt});function d2(i){let t=j(i,41);if(i<2||t>.34)return null;let e=i*td+j(i,42)*td,n=(j(i,43)*2-1)*ge(e)*.4;return{s:e,x:qt(e)+n,z:-e,r:.9+j(i,44)*1.1,v:Math.floor(j(i,45)*3),a:j(i,46)*6.28}}function f2(i){let t=new zt,e=new W(Ky[i.v],c2);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new W(Ky[(i.v+1)%3],u2);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new W(new Is(1.05,1.55,24).rotateX(-Math.PI/2),h2);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function jy(i,t){let e=Math.floor((t-25)/td),n=Math.floor((t+280)/td);for(let[s,r]of Jp)(s<e||s>n)&&r&&xt.remove(r);for(let s=e;s<=n;s++){let r=Jp.get(s);if(r===void 0){let u=d2(s);r=u?f2(u):null,Jp.set(s,r)}if(!r)continue;r.parent||xt.add(r);let o=F.px-r.userData.x,a=F.pz-r.userData.z,l=r.userData.r*1.2+1.5,c=Math.hypot(o,a);c<l&&c>.01&&(F.px+=o/c*(l-c)*.6,F.pz+=a/c*(l-c)*.6,F.v*=.9,F.t-F.bumpT>1.2&&($t.bump(),F.bumpT=F.t,Zn(r.userData.x+o/c*-r.userData.r,r.userData.z+a/c*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(F.t*1.4+s)}}var oa=230,zl=new Map,p2=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let a=0;a<=16;a++){let l=a/16;for(let c=0;c<26;c++){let u=c/26*6.283,h=1+(je(Math.cos(u)*2.2+i*7,Math.sin(u)*2.2+l*3)-.5)*.5+(je(Math.cos(u)*7+i,l*9)-.5)*.14,d=Math.pow(Math.max(0,1-Math.pow(l,2.2)),.62)*(1+.38*(1-l)*(1-l)),f=l,m=(je(i*3,l*2)-.5)*.5*l;n.push(Math.cos(u)*d*h+m,f,Math.sin(u)*d*h);let x=je(Math.cos(u)*5+i,l*14),g=me(.18,.5,je(Math.cos(u)*9,l*20+i)),p=.45+.2*l+.12*x;s.push(p*(.75+.2*g),p*(.9+.12*g),p*(.82+.1*g))}}for(let a=0;a<16;a++)for(let l=0;l<26;l++){let c=(l+1)%26,u=a*26+l,h=a*26+c,d=(a+1)*26+l,f=(a+1)*26+c;r.push(u,d,h,h,d,f)}let o=new jt;return o.setAttribute("position",new se(n,3)),o.setAttribute("color",new se(s,3)),o.setIndex(r),o.computeVertexNormals(),o}),m2=new Ga({vertexColors:!0,color:12175040,fog:!1}),$p=new os({map:ri,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function g2(i,t){let e=j(i,60+t),n=44+e*46,s=95+j(i,61+t)*120,r=i*oa+j(i,62+t)*oa*.9,o=ge(r)+150+j(i,63+t)*170,a=new zt,l=new W(p2[(i*2+(t>0?1:0)+4)%4],m2.clone());l.scale.set(n,s,n*(.8+j(i,64)*.4)),l.position.y=-30,l.rotation.y=j(i,65)*6,a.add(l);for(let c=0;c<2;c++){let u=new Rs($p);u.scale.set(n*4.5,s*.7,1),u.position.set((c?.4:-.3)*n,s*(.18+.2*c),0),u.renderOrder=2,a.add(u)}return a.position.set(qt(r)+t*o,0,-r),a.userData={s:r},a}var x2=(i,t)=>{let e=i*oa+j(i,62+t)*oa*.9,n=Ur(e);return!!n&&t===n.side&&Math.abs(e-n.s0)<210};function Qy(i){let t=Math.floor((i-260)/oa),e=Math.floor((i+720)/oa);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),o=zl.get(r);if(o===void 0&&(o=j(n,70+s)>.18&&!x2(n,s)?g2(n,s):null,zl.set(r,o),o&&(o.userData.c=n)),o){o.userData.c=n,o.parent||xt.add(o);let a=Math.hypot(o.position.x-F.px,o.position.z-F.pz),l=Ie(me(60,520,a)*.88+.08);o.children[0].material.color.set(6130818).lerp(Dh.set(3099218),ue.night*.7).lerp(xs.copy(ue.hor).lerp(xt.fog.color,.5),l)}}for(let[n,s]of zl)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&xt.remove(s)}var Kp=[];function y2(i){let t=new zt,e=Tt(3091244),n=Tt(3102307),s=new W(new Jt(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new W(new ce(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let o=new W(new Jt(.12,8,6),Tt(14264706));if(o.position.set(0,1.38,.2),t.add(o),i%2){let l=new W(new Te(.75,.45,10,1,!0),Tt(3158063,{side:Zt}));l.position.set(0,1.95,.2),t.add(l);let c=new W(new ce(.015,.015,1,4),e);c.position.set(0,1.45,.2),t.add(c)}else{let l=new W(new Te(.34,.2,10,1,!0),Tt(14332522,{side:Zt}));l.position.set(0,1.55,.2),t.add(l)}let a=new W(new ce(.02,.02,4,4),Tt(8018502));return a.position.set(.35,1.2,-.9),a.rotation.set(1,0,-.3),t.add(a),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},xt.add(t),t}for(let i=0;i<3;i++)Kp.push(y2(i));function tv(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(ge(e)-9);i.position.set(qt(e)+n,0,-e),i.userData.hd=_n(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}Kp.forEach(i=>tv(i,40+Math.random()*100));function ev(i,t){for(let e of Kp){let n=e.userData;if(e.position.z>F.pz+30||-e.position.z>t+300){tv(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(F.t*.8+n.ph)*.03,e.rotation.set(Math.sin(F.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(F.t*.7+n.ph)*.02)}}var ad=8,ca=44,id=new Float32Array(ad*ca*3),sd=new Float32Array(ad*ca*3),kl=new jt;kl.setAttribute("position",new Gt(id,3));kl.setAttribute("color",new Gt(sd,3));var jr=new Ci(kl,new Vi({size:2.6,map:ri,vertexColors:!0,transparent:!0,blending:Wn,depthWrite:!1,depthTest:!1,fog:!1}));jr.renderOrder=9;jr.frustumCulled=!1;jr.visible=!1;xt.add(jr);var tm=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],Gl=[];for(let i=0;i<ad;i++)Gl.push({age:9,x:0,y:0,z:0,c:tm[0],v:new Float32Array(ca*3)});var jp=0,ed=!1;function v2(i){let t=Math.round((i-240)/Li);for(let e of[t-1,t,t+1])if(e>=0&&Xe(e)===2&&Math.abs(Qe(e)-i)<230)return!0;return!1}function nv(){let i=Gl.find(t=>t.age>=3);if(i){i.age=0,i.x=F.px+(Math.random()-.5)*40,i.y=4+Math.random()*5,i.z=F.pz-(55+Math.random()*40),i.c=tm[Math.random()*tm.length|0];for(let t=0;t<ca;t++){let e=Math.random()*6.283,n=Math.acos(2*Math.random()-1),s=5+Math.random()*4;i.v[t*3]=Math.sin(n)*Math.cos(e)*s,i.v[t*3+1]=Math.cos(n)*s,i.v[t*3+2]=Math.sin(n)*Math.sin(e)*s}try{$t.boom((i.x-F.px)/30)}catch{}}}function iv(i,t){let e=ed;ed=t>.55&&v2(F.dist||-F.pz),ed&&!e&&ra("festival","Festival de linternas: la aldea celebra esta noche"),ed&&(jp-=i,jp<=0&&(jp=1.4+Math.random()*2,nv(),Math.random()<.35&&setTimeout(nv,350)));let n=!1;for(let s=0;s<ad;s++){let r=Gl[s];r.age<3&&(r.age+=i);let o=r.age<3?Math.pow(Math.max(0,1-r.age/2.7),1.5):0;o>0&&(n=!0);for(let a=0;a<ca;a++){let l=(s*ca+a)*3,c=r.age;id[l]=r.x+r.v[a*3]*c*.8,id[l+1]=r.y+r.v[a*3+1]*c*.8-1.9*c*c,id[l+2]=r.z+r.v[a*3+2]*c*.8,sd[l]=r.c[0]*o,sd[l+1]=r.c[1]*o,sd[l+2]=r.c[2]*o}}jr.visible=n,n&&(kl.attributes.position.needsUpdate=!0,kl.attributes.color.needsUpdate=!0)}var em=new $e({transparent:!0,side:In,depthWrite:!1,blending:Wn,fog:!1,uniforms:{t:{value:0},k:{value:0}},vertexShader:"varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 u;uniform float t,k;void main(){float a=u.x*6.283;float w=sin(a*3.+t*.25+sin(a*7.+t*.4)*1.3)*.5+.5;float band=smoothstep(.15,.55,u.y)*smoothstep(1.,.55,u.y);float f=band*(.3+.7*w)*(.55+.45*sin(a*11.-t*.5));vec3 c=mix(vec3(.2,1.,.6),vec3(.55,.4,1.),smoothstep(.45,.95,u.y));gl_FragColor=vec4(c*f*k*.75,1.);}"}),Kr=new W(new ce(330,330,120,48,1,!0),em);Kr.frustumCulled=!1;Kr.visible=!1;Kr.renderOrder=-1;xt.add(Kr);function sv(i){let t=cr()===3?Ie(i*1.5-.7,0,1):0;Kr.visible=t>.01,Kr.visible&&(Kr.position.set(F.px,95,F.pz),em.uniforms.t.value=F.t,em.uniforms.k.value=t)}var aa=300,la=new jt,rd=new Float32Array(aa*3),rv=[];for(let i=0;i<aa;i++)rv.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);la.setAttribute("position",new Gt(rd,3));var _2=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new yi(i)})(),od=new Float32Array(aa*3),nm=new Vi({map:_2,alphaTest:.3,color:16777215,vertexColors:!0,size:Hn.pet.size,transparent:!0,opacity:.85,depthWrite:!1}),Qp=-1,M2=new ct(Hn.pet.c),b2=new ct(qi.pet),nd=new ct;la.setAttribute("color",new Gt(od,3));var ov=new Ci(la,nm);ov.frustumCulled=!1;xt.add(ov);function av(i){for(let t=0;t<aa;t++){let e=rv[t];e[1]-=i*Hn.pet.fall*(.45+.3*Math.sin(e[3]+F.t)),e[1]<.2&&(e[1]=10+Math.random()*3,e[0]=Math.random()*60-30,e[2]=-Math.random()*60),rd[t*3]=F.px+e[0]+Math.sin(F.t*.7+e[3])*1.5,rd[t*3+1]=e[1],rd[t*3+2]=F.pz+e[2]+10+Math.cos(F.t*.5+e[3])}{let t=Fr(F.dist||-F.pz),e=Math.max(.3*Zo(-F.pz),t);if(la.setDrawRange(0,Math.round(aa*Math.max(Hn.pet.base+Hn.pet.gain*e,t*.85))),Math.abs(t-Qp)>.02||Qp<0){Qp=t,nd.copy(M2).lerp(b2,Ie(t*1.6));for(let n=0;n<aa;n++)od[n*3]=nd.r,od[n*3+1]=nd.g,od[n*3+2]=nd.b;la.attributes.color.needsUpdate=!0,nm.size=Hn.pet.size+(.42-Hn.pet.size)*Ie(t*1.6)}}la.attributes.position.needsUpdate=!0,nm.opacity=.85*(1-Ie(ue.night,0,1)*.8)}function lv(i){window.__r3d={R:qn,dayLampAt:Dx,fc:(t,e)=>{window.__fc=t?()=>{dn.position.set(t[0],t[1],t[2]),dn.lookAt(e[0],e[1],e[2]),dn.updateMatrixWorld()}:null},LM:$i,lmType:Xe,NL:ul,lmFound:Si,lmMade:pi,castleNear:Ur,dragonS:qo,casInfo:qf,casLocal:hl,fwB:Gl,fw:jr,cam:dn,crit:{fish:Zr,wbirds:$r,dfs:Jr,fliers:sa,liveH:_r,ENC:Hl,get scare(){return ot.scareT}},sim:i,cnt:()=>{let t={};return xt.traverse(e=>{if((e.isMesh||e.isSprite||e.isPoints)&&e.visible){let n=e,s=!0;for(;n;){if(!n.visible){s=!1;break}n=n.parent}if(!s)return;let r=(e.isInstancedMesh?"inst":e.isSprite?"sprite":e.isPoints?"pts":"mesh")+":"+(e.material.type||"");t[r]=(t[r]||0)+1}}),t},info:()=>({g:qn.info.memory.geometries,t:qn.info.memory.textures,p:qn.info.programs.length,calls:qn.info.render.calls,tris:qn.info.render.triangles,lm:pi.size,ch:xt.children.length}),cineJump:t=>{ot.cine&&(ot.cine.t=t)},cineOn:()=>!!ot.cine,bambooAt:Yo,gardenAt:Fr,forestAt:Zo,lmPos:Qe,wbirds:$r,massifs:zl,birds:qy,dfs:Jr,fish:Zr,W:ln,mistAt:oh,setCam:Yr,P:F,lanternPos:Ih,setTod:t=>{ot.tod=t},scene:xt,tp:(t,e=0,n=0)=>{F.pz=-t,F.px=qt(t)+n,F.psi=_n(t)+e},sideOf:t=>j(t,9)>.5?1:-1,get tod(){return ot.tod}}}var ha=performance.now();ig();sg();function im(i,t){if(t||requestAnimationFrame(im),PZ.on&&!t){ha=i;return}let e=Math.max(0,Math.min(.05,(i-ha)/1e3));ua.tick(Math.max(0,(i-ha)/1e3)),ha=i,F.t+=e;let n=-F.pz;kx(e,n);let s=yx();av(e),vx(),Mx(e),xy(e,s),fy(e),window.__fc&&window.__fc(),ot.started&&!ua.photo&&(ot.tod=(ot.tod+e/900)%1),Dg(F.px,F.pz),Bx(e,n),ox(F.px,F.pz,Uy),ip.value=F.t,dr.position.set(F.px,0,F.pz),dr.material.uniforms.t.value=F.t;let r=ue.night;wh.intensity=ot.glowK*3.2,Eh.material.opacity=.3+.35*ot.glowK,Tl.material.color.set(16769704),jy(e,F.dist||n),ev(e,F.dist||n),Qy(F.dist||n),$p.color.copy(xt.fog.color).multiplyScalar(1.05),$y(e,F.dist||n),Xy(e,F.dist||n),Zy(e,F.dist||n),Kh.opacity=.55+.15*Math.sin(F.t*.8),Ol.position.y=Math.sin(F.t*.9)*.01,Ix(F.t,F.dist||n),Dy(F.dist||n),Px(),Ch(F.t,F.dist||n),bx(e),iv(e,r),sv(r),lx(r),$t.update(F.v+Math.abs(F.steer)*1.5,r,F.t),Ax(e,n),ua.camAdjust(),ua.update(e,F.dist||n),t||ua.render()}var ua=bg({R:qn,scene:xt,cam:dn,canvas:Ls,el:ze,toast:ai,P:F,LM:$i,lmFound:Si,lmPos:Qe,LMS:Li,mkLantern:Ph,cx:qt,hw:ge,lmType:Xe,A:$t,hash:j,spawnRipple:Zn,SEAS:nh,seasonIdx:cr,started:()=>ot.started,getTod:()=>ot.tod,setTod:i=>{ot.tod=i},todName:ph,getCount:()=>ot.count,setCount:i=>{ot.count=i;try{localStorage.setItem("rio3d-lant",String(i))}catch{}ze("n").textContent=i},glowK:()=>ot.glowK,restart:()=>{ot.cine=null,ot.cineW=0;try{localStorage.removeItem("rio3d-pos")}catch{}ah(0),F.v=2.6,F.dist=0,F.pitch=0,ot.savedS=0,ai("De vuelta al inicio del r\xEDo")},setCam:Yr,getCam:()=>ot.camMode,savePos:Al,nearLM:i=>{let t=Math.round((i-240)/Li);for(let e of[t,t-1,t+1])if(Math.abs(Qe(e)-i)<130&&e>=0)return $i[Xe(e)];return""}});ot.X=ua;ze("n").textContent=ot.count;PZ.ctx=()=>$t.ctx;PZ.started=()=>ot.started;requestAnimationFrame(im);{let i=ze("cap"),t=0,e=()=>{try{return localStorage.getItem("rio3d-subs")==="1"}catch{return!1}};$t.onCap=n=>{!e()||!i||(i.textContent="["+ti(n)+"]",i.style.opacity=1,clearTimeout(t),t=setTimeout(()=>i.style.opacity=0,2600))};try{let n=localStorage.getItem("rio3d-hand");(n==="r"||n==="l")&&document.body.classList.add("hand-"+n)}catch{}Mg()}var S2=(i,t,e)=>{window.__lastT=window.__lastT||ha;for(let n=0;n<i;n++)window.__lastT+=t*1e3,e&&e(n),im(window.__lastT,!0);ha=window.__lastT};lv(S2);vg({set:(i,t)=>{i==="p"?F.key.up=t:F.key[i]=t},started:()=>ot.started&&!ot.X.photo,paddle:!0,steerPaddles:!0,onPress:lh});try{xg(window.UX)}catch{}try{window.UX.mood()}catch{}try{kf(window.UX)}catch{}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
