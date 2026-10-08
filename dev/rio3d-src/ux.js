/* UX compartido (juegos 2D y Cabaña 3D): idioma es/en/ja, subtítulos de ambiente, háptica y modo una mano.
   Comparte las claves de almacenamiento con Río 3D: rio3d-lang, rio3d-subs, rio3d-hap, rio3d-hand. */
(function(){
  if(window.UX)return;
  const K=['es','en','ja'],NM={es:'Español',en:'English',ja:'日本語'};
  const ls={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
  let LG=ls.get('rio3d-lang','es');if(!K.includes(LG))LG='es';
  const ix=LG==='en'?1:2,MAP=new Map(),RX=[];
  const UX=window.UX={lang:LG,onLang:null,
    add(rows){rows.forEach(r=>MAP.set(r[0],r))},
    rx(list){list.forEach(r=>RX.push(r))},
    tr(s){
      if(LG==='es'||typeof s!=='string')return s;
      const t=s.trim();if(!t)return s;
      const r=MAP.get(t);if(r)return s.replace(t,r[ix]);
      for(const [re,f] of RX){const m=t.match(re);if(m)return s.replace(t,f(m,LG==='en'?1:2,UX.tr))}
      return s;
    },
    init(){
      if(LG==='es')return;
      document.documentElement.lang=LG;
      const walk=n=>{
        if(n.nodeType===3){const v=UX.tr(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v;return}
        if(n.nodeType!==1||n.tagName==='SCRIPT'||n.tagName==='STYLE')return;
        const al=n.getAttribute&&n.getAttribute('aria-label');if(al){const v=UX.tr(al);if(v!==al)n.setAttribute('aria-label',v)}
        const tt=n.getAttribute&&n.getAttribute('title');if(tt){const v=UX.tr(tt);if(v!==tt)n.setAttribute('title',v)}
        n.childNodes.forEach(walk);
      };
      walk(document.body);
      new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData')walk(m.target);else m.addedNodes.forEach(walk)}}).observe(document.body,{childList:true,subtree:true,characterData:true});
    },
    /* háptica suave: vibración del navegador donde exista (iPadOS no la expone a las webs) */
    hap(p){
      if(ls.get('rio3d-hap','1')==='0')return;
      try{
        if(navigator.vibrate){navigator.vibrate(p);return}
        if(!UX._sw){const l=document.createElement('label');l.style.cssText='position:fixed;left:-99px;top:0;opacity:0;pointer-events:none';const i=document.createElement('input');i.type='checkbox';i.setAttribute('switch','');l.appendChild(i);document.body.appendChild(l);UX._sw=l}
        UX._sw.click();
      }catch(e){}
    },
    subsOn:()=>ls.get('rio3d-subs','0')==='1',
    /* subtítulo de ambiente: UX.cap('Campanillas'); gap = ms mínimos entre repeticiones de la misma clave */
    cap(k,gap){
      if(!UX.subsOn())return;
      const n=performance.now(),l=UX._cl||(UX._cl={});if(l[k]&&n-l[k]<(gap||9000))return;l[k]=n;
      let e=document.getElementById('uxcap');
      if(!e){e=document.createElement('div');e.id='uxcap';e.setAttribute('aria-live','polite');e.style.cssText='position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center';document.body.appendChild(e)}
      e.textContent='['+UX.tr(k)+']';e.style.opacity=1;clearTimeout(UX._ct);UX._ct=setTimeout(()=>e.style.opacity=0,2600);
    },
    /* botones de ajustes para el menú «Más». opts.hand=true añade el modo una mano (clases hand-r / hand-l en body). */
    btns(cls,opts){
      opts=opts||{};const mk=(id,f)=>{const b=document.createElement('button');b.type='button';b.id=id;b.className=cls||'';b.onclick=f;return b};
      const out=[];
      const lb=mk('uxLang',()=>{const n=K[(K.indexOf(LG)+1)%3];ls.set('rio3d-lang',n);try{UX.onLang&&UX.onLang()}catch(e){}location.reload()});
      lb.textContent=(LG==='en'?'Language: ':LG==='ja'?'言語: ':'Idioma: ')+NM[LG];out.push(lb);
      const sb=mk('uxSubs',()=>{ls.set('rio3d-subs',UX.subsOn()?'0':'1');sb.textContent=UX.subsOn()?'Subtítulos: sí':'Subtítulos: no'});
      sb.textContent=UX.subsOn()?'Subtítulos: sí':'Subtítulos: no';out.push(sb);
      const hb=mk('uxHap',()=>{const on=ls.get('rio3d-hap','1')==='1';ls.set('rio3d-hap',on?'0':'1');hb.textContent=on?'Vibración: no':'Vibración: sí';if(!on)UX.hap(15)});
      hb.textContent=ls.get('rio3d-hap','1')==='1'?'Vibración: sí':'Vibración: no';out.push(hb);
      if(opts.hand){
        const names={'0':'Una mano: no',r:'Una mano: derecha',l:'Una mano: izquierda'},seq=['0','r','l'];
        const apply=v=>{document.body.classList.remove('hand-r','hand-l');if(v!=='0')document.body.classList.add('hand-'+v)};
        let cur=ls.get('rio3d-hand','0');if(!names[cur])cur='0';apply(cur);
        const hd=mk('uxHand',()=>{cur=seq[(seq.indexOf(cur)+1)%3];ls.set('rio3d-hand',cur);apply(cur);hd.textContent=names[cur]});
        hd.textContent=names[cur];out.push(hd);
      }
      const vb=mk('uxVol',()=>{const seq=['1','.7','.4'];const i=seq.indexOf(String(UX.api.vol()).replace('0.','.'));UX.api.setVol(seq[(i+1)%3]);vb.textContent=vt()});
      const vt=()=>T('Volumen de este juego: ','Volume (this game): ','このゲームの音量: ')+Math.round(UX.api.vol()*100)+' %';vb.textContent=vt();out.push(vb);
      const tb=mk('uxSoft',()=>{UX.api.setSoft(!UX.api.soft());tb.textContent=tt()});
      const tt=()=>UX.api.soft()?T('Tono suave: sí','Soft tone: on','やわらかい音: オン'):T('Tono suave: no','Soft tone: off','やわらかい音: オフ');tb.textContent=tt();out.push(tb);
      const sl=mk('uxSleep',()=>{const seq=[0,15,30,45];UX.api.sleep(seq[(seq.indexOf(UX.api.sleepMin())+1)%4]);sl.textContent=st()});
      const st=()=>UX.api.sleepMin()?T('Dormir: ','Sleep: ','おやすみ: ')+UX.api.sleepMin()+' min':T('Dormir: no','Sleep: off','おやすみ: オフ');sl.textContent=st();UX._sb=()=>{sl.textContent=st()};out.push(sl);
      if(opts.wear){const wb=mk('uxWear',()=>{ls.set('ux-wear',ls.get('ux-wear','0')==='1'?'0':'1');wb.textContent=wt()});
        const wt=()=>ls.get('ux-wear','0')==='1'?T('Desgaste por ausencia: sí','Wear while away: on','不在中の汚れ: オン'):T('Desgaste por ausencia: no','Wear while away: off','不在中の汚れ: オフ');wb.textContent=wt();out.push(wb)}
      const cb=mk('uxCalm',()=>{UX.setCalm(!UX.calm());cb.textContent=ct()});
      const ct=()=>UX.calm()?T('Menos movimiento y destellos: sí','Less motion and flashes: on','動きと光を控える: オン'):T('Menos movimiento y destellos: no','Less motion and flashes: off','動きと光を控える: オフ');cb.textContent=ct();out.push(cb);
      const ab=mk('uxAbout',()=>UX.about());ab.textContent=T('Acerca de','About','このゲームについて');out.push(ab);
      return out;
    },
    /* confirmación dentro del juego (en lugar de confirm() nativo) */
    ask(msg,ok){
      const d=document.createElement('div');d.style.cssText='position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif';
      const b=document.createElement('div');b.style.cssText='background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center';
      const p=document.createElement('p');p.style.margin='0 0 14px';p.textContent=UX.tr(msg);b.appendChild(p);
      const mk=(t,f)=>{const x=document.createElement('button');x.type='button';x.textContent=t;x.style.cssText='margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer';x.onclick=()=>{d.remove();f&&f()};return x};
      b.appendChild(mk(T('Cancelar','Cancel','キャンセル')));b.appendChild(mk(T('Sí, reiniciar','Yes, restart','はい、最初から'),ok));d.appendChild(b);document.body.appendChild(d)
    }
  };

  /* ---------- bienestar: salida de audio común (volumen, tono suave, temporizador de sueño) y recordatorio de descanso ---------- */
  const T=(es,en,ja)=>LG==='en'?en:LG==='ja'?ja:es;
  /* volumen propio de cada juego (clave por juego; si no existe, hereda el valor general anterior) */
  const GM=(()=>{const m=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return m?m[1]:/caba/i.test(document.title)?'cabana':'rio'})(),VK='ux-vol-'+GM;
  const W={vol:ls.get(VK,ls.get('ux-vol','1')),soft:ls.get('ux-soft','0')==='1',k:1,nodes:[],end:0,min:0,ov:null};
  UX.quiet=false;
  const apply=()=>{for(const n of W.nodes){try{const t=n.c.currentTime;n.lp.frequency.setTargetAtTime(W.soft?2800:22000,t,.1);n.g.gain.setTargetAtTime(+W.vol*W.k,t,.1)}catch(e){}}};
  /* UX.out(ctx,nodo): intercala pasa-bajos y ganancia entre el master del juego y destination */
  UX.out=(c,node)=>{const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=W.soft?2800:22000;lp.Q.value=.5;const g=c.createGain();g.gain.value=+W.vol*W.k;node.connect(lp);lp.connect(g);g.connect(c.destination);W.nodes.push({c,lp,g});return g};
  /* ruido rosa (Kellet) de 12 s con bucle sin costura (cola de 1,5 s mezclada con potencia constante); k = compensación de nivel de la capa */
  UX.pinkSrc=(c,k)=>{
    let b=c._pink;
    if(!b){const sr=c.sampleRate,L=Math.floor(sr*12),tl=Math.floor(sr*1.5),n=L+tl,d=new Float32Array(n);
      let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
      for(let i=0;i<n;i++){const w=Math.random()*2-1;b0=.99886*b0+w*.0555179;b1=.99332*b1+w*.0750759;b2=.969*b2+w*.153852;b3=.8665*b3+w*.3104856;b4=.55*b4+w*.5329522;b5=-.7616*b5-w*.016898;d[i]=(b0+b1+b2+b3+b4+b5+b6+w*.5362)*.2215*.5;b6=w*.115926}
      b=c.createBuffer(1,L,sr);const o=b.getChannelData(0);
      for(let i=0;i<L;i++)o[i]=d[i];
      for(let i=0;i<tl;i++){const a=i/tl*Math.PI/2;o[i]=d[i]*Math.sin(a)+d[L+i]*Math.cos(a)}
      c._pink=b}
    const s=c.createBufferSource();s.buffer=b;s.loop=true;const g=c.createGain();g.gain.value=k||1;s.connect(g);
    g.start=(w,o)=>s.start(w||0,o||0);g.stop=w=>s.stop(w);return g};
  UX.api={
    soft:()=>W.soft,setSoft(v){W.soft=!!v;ls.set('ux-soft',v?'1':'0');apply()},
    vol:()=>+W.vol,setVol(v){W.vol=String(v);ls.set(VK,W.vol);apply()},
    sleepMin:()=>W.min,
    sleep(m){W.min=m;W.end=m?Date.now()+m*60000:0;W.k=1;UX.quiet=false;if(W.ov)W.ov.style.opacity=0;apply()}
  };
  const sleepTick=()=>{
    if(!W.end)return;const rem=(W.end-Date.now())/1000;
    if(!W.ov){const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s';document.body.appendChild(o);W.ov=o}
    if(rem<=0){W.end=0;W.min=0;W.k=0;apply();W.ov.style.opacity=.6;try{window.PZ&&PZ.set(true)}catch(e){}
      setTimeout(()=>{W.k=1;UX.quiet=false;apply();W.ov.style.opacity=0;UX._sb&&UX._sb()},1500);return}
    if(rem<300){UX.quiet=true;W.k=Math.pow(rem/300,2);W.ov.style.opacity=(1-rem/300)*.6;apply()}
  };
  setInterval(sleepTick,1000);
  /* recordatorio de descanso único para los cinco juegos: a los 20 min y luego cada 30, solo con la pestaña visible y sin pausa */
  {let played=0,next=20*60;
   setInterval(()=>{
    if(document.hidden||(window.PZ&&(PZ.on||!PZ.started())))return;
    played+=5;
    if(played>=next){next+=30*60;
      let e=document.getElementById('uxrest');
      if(!e){e=document.createElement('div');e.id='uxrest';e.setAttribute('aria-live','polite');e.style.cssText='position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0';document.body.appendChild(e)}
      e.textContent=T('Buen momento para soltar los hombros y tomar un poco de agua.','A good moment to relax your shoulders and have some water.','肩の力を抜いて、水を一口飲むのによい頃合いです。');e.style.opacity=1;clearTimeout(UX._rt);UX._rt=setTimeout(()=>e.style.opacity=0,7000)}
   },5000)}
  UX.add([
    ['Pausa','Pause','一時停止'],['Continuar','Resume','再開'],['Más','More','その他'],['Respirar','Breathe','呼吸'],['Sonido: sí','Sound: on','音: オン'],['Sonido: no','Sound: off','音: オフ'],['Reiniciar','Restart','最初から'],
    ['En pausa','Paused','一時停止中'],['Respira con calma.','Breathe calmly.','ゆっくり呼吸しましょう。'],['Todo seguirá aquí cuando vuelvas.','Everything will be here when you return.','戻ってくるまで、すべてそのままです。'],
    ['Subtítulos: sí','Captions: on','字幕: オン'],['Subtítulos: no','Captions: off','字幕: オフ'],['Vibración: sí','Vibration: on','振動: オン'],['Vibración: no','Vibration: off','振動: オフ'],
    ['Una mano: no','One hand: off','片手: オフ'],['Una mano: derecha','One hand: right','片手: 右'],['Una mano: izquierda','One hand: left','片手: 左'],
    ['Flauta shakuhachi','Shakuhachi flute','尺八'],['Campanillas','Wind chimes','鈴の音'],['Koto','Koto','琴'],['Campana de templo','Temple bell','寺の鐘'],['Tambor lejano','Distant drum','遠くの太鼓'],
    ['Cuac de pato','Duck quack','カモの鳴き声'],['Aleteo de garza','Heron wingbeats','サギの羽ばたき'],['Golpe suave de la canoa','Soft knock on the canoe','カヌーが軽くぶつかる音'],['Salpicadura','Splash','水しぶき'],['Fuegos artificiales','Fireworks','花火'],['Nota de linterna','Lantern note','ランタンの音'],['Cascada cercana','Waterfall nearby','近くの滝の音'],['Lluvia suave','Soft rain','やさしい雨音'],
    ['Viento','Wind','風'],['Grillos','Crickets','コオロギ'],['Fregado','Scrubbing','こする音'],['Madera que cruje','Creaking wood','きしむ木の音'],['Estrella fugaz','Shooting star','流れ星'],
  ]);

  /* ---- chequeo de ánimo: una pregunta suave en la pantalla de inicio; se puede saltar; solo guarda la última elección en este dispositivo ---- */
  UX.add([['← Menú','← Menu','← メニュー'],['¿Cómo llegas hoy?','How are you arriving today?','今日はどんな気分ですか？'],['Tranquilo','Calm','おだやか'],['Cansado','Tired','つかれた'],['Inquieto','Restless','そわそわ'],['Con ganas de pensar','In a thoughtful mood','考えごとをしたい'],['Es opcional. Solo ajusto el sonido o te ofrezco respirar.','Optional. I only adjust the sound or offer you a breath.','任意です。音の調整や深呼吸の提案だけをします。'],
    ['Bajé el sonido y suavicé los agudos. Cuando quieras, cambia esto en «Más».','I lowered the sound and softened the highs. Change it any time in “More”.','音を小さく、高音をやわらげました。「その他」でいつでも変えられます。'],['Un minuto para respirar','One minute to breathe','1分だけ深呼吸'],['Inhala','Breathe in','吸って'],['Exhala','Breathe out','吐いて'],['Saltar','Skip','スキップ'],['Gracias por respirar. Entremos con calma.','Thank you for breathing. Let us go in gently.','深呼吸ありがとう。ゆっくり入りましょう。'],['Sin prisa. Aquí no hay nada que ganar ni perder.','No hurry. There is nothing to win or lose here.','急がなくて大丈夫。勝ちも負けもありません。']]);
  function breathe(done){
    const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center';
    const orb=document.createElement('div');orb.style.cssText='width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out';
    const lb=document.createElement('div'),t=document.createElement('div');t.textContent=T('Un minuto para respirar','One minute to breathe','1分だけ深呼吸');t.style.cssText='font-weight:400;opacity:.75;font-size:.9rem';
    const sk=document.createElement('button');sk.type='button';sk.textContent=T('Saltar','Skip','スキップ');sk.style.cssText='min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer';
    o.append(t,orb,lb,sk);document.body.appendChild(o);let n=0,alive=true,tm;
    const end=(ok)=>{if(!alive)return;alive=false;clearTimeout(tm);o.remove();done&&done(ok)};sk.onclick=()=>end(false);
    const step=()=>{if(!alive)return;if(n>=5)return end(true);n++;lb.textContent=T('Inhala','Breathe in','吸って');orb.style.transition='transform 4s ease-in-out';orb.style.transform='scale(1)';UX.hap(8);
      tm=setTimeout(()=>{if(!alive)return;lb.textContent=T('Exhala','Breathe out','吐いて');orb.style.transition='transform 6s ease-in-out';orb.style.transform='scale(.55)';tm=setTimeout(step,6000)},4000)};
    step();
  }
  UX.calm=()=>{const v=ls.get('ux-calm',null);if(v==='1')return true;if(v==='0')return false;try{return !!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)}catch(e){return false}};
  UX.setCalm=on=>{ls.set('ux-calm',on?'1':'0')};
  UX.about=()=>{
    const old=document.getElementById('uxAboutOv');if(old){old.remove();return}
    const o=document.createElement('div');o.id='uxAboutOv';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');
    o.style.cssText='position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px';
    const b=document.createElement('div');b.style.cssText='background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,440px);max-height:84vh;overflow:auto;font:15px/1.5 system-ui,sans-serif';
    const h=document.createElement('h2');h.style.cssText='margin:0 0 6px;font:600 1.2rem system-ui';h.textContent='Sin Prisa';
    const p1=document.createElement('p');p1.style.cssText='margin:0 0 10px;opacity:.85';p1.textContent=T('Juegos tranquilos, sin puntaje ni tiempo. Nada que ganar ni perder.','Calm games with no score and no timer. Nothing to win or lose.','スコアも時間もない、おだやかなゲーム。勝ち負けはありません。');
    const p2=document.createElement('p');p2.style.cssText='margin:0 0 10px;opacity:.85;font-size:.9em';p2.textContent=T('Es un juego de descanso: no es un producto médico ni de terapia y no sustituye la ayuda de un profesional.','This is a game for rest: it is not a medical or therapy product and does not replace professional help.','これは休息のためのゲームです。医療やセラピーの製品ではなく、専門家の助けの代わりにはなりません。');
    const nav=document.createElement('div');nav.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px';
    [['privacidad.html',T('Privacidad','Privacy','プライバシー')],['datos.html',T('Mis datos','My data','データ')],['creditos.html',T('Créditos y licencias','Credits and licenses','クレジットとライセンス')]].forEach(x=>{const a=document.createElement('a');a.href='../'+x[0];a.textContent=x[1];a.style.cssText='color:#ffc77a;min-height:44px;display:inline-flex;align-items:center;padding:0 6px';nav.appendChild(a)});
    const c=document.createElement('button');c.type='button';c.textContent=T('Cerrar','Close','閉じる');c.style.cssText='min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer';c.onclick=()=>o.remove();
    b.append(h,p1,p2,nav,c);o.appendChild(b);o.onclick=e=>{if(e.target===o)o.remove()};document.body.appendChild(o);try{c.focus()}catch(e){}
  };
  UX.say=m=>{let e=document.getElementById('uxsay');if(!e){e=document.createElement('div');e.id='uxsay';e.setAttribute('role','status');e.setAttribute('aria-live','polite');e.style.cssText='position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0';document.body.appendChild(e)}e.textContent=m;e.style.opacity=1;clearTimeout(UX._st);UX._st=setTimeout(()=>e.style.opacity=0,4200)};
  UX.breathe=breathe;UX.mood=()=>moodUI();
  function moodUI(){
    const go=document.getElementById('go');if(!go||document.getElementById('uxmood'))return;
    const box=document.createElement('div');box.id='uxmood';box.style.cssText='display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px';
    const q=document.createElement('div');q.textContent=T('¿Cómo llegas hoy?','How are you arriving today?','今日はどんな気分ですか？');q.style.cssText='font:600 .95rem system-ui;opacity:.9';
    const row=document.createElement('div');row.style.cssText='display:flex;flex-wrap:wrap;gap:8px;justify-content:center';
    const sub=document.createElement('div');sub.textContent=T('Es opcional. Solo ajusto el sonido o te ofrezco respirar. Es un juego de descanso, no sustituye ayuda profesional.','Optional. I only adjust the sound or offer a breath. This is a game for rest, not a substitute for professional help.','任意です。音の調整や深呼吸の提案だけをします。休息のためのゲームで、専門家の助けの代わりにはなりません。');sub.style.cssText='font:400 .72rem system-ui;opacity:.6';
    let pick=null;const bs={};
    [['calm','Tranquilo','Calm','おだやか'],['tired','Cansado','Tired','つかれた'],['rest','Inquieto','Restless','そわそわ'],['think','Con ganas de pensar','In a thoughtful mood','考えごとをしたい']].forEach(([k,es,en,ja])=>{
      const b=document.createElement('button');b.type='button';b.textContent=T(es,en,ja);b.style.cssText='min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer';
      b.onclick=()=>{pick=pick===k?null:k;for(const j in bs){bs[j].style.borderColor=j===pick?'#ffc77a':'#5a609a';bs[j].style.background=j===pick?'rgba(255,199,122,.22)':'rgba(54,58,102,.7)'}UX.hap(6)};bs[k]=b;row.appendChild(b)});
    box.append(q,row,sub);go.parentNode.insertBefore(box,go);
    go.addEventListener('click',()=>{
      ls.set('ux-mood',pick||'');
      if(pick==='tired'){UX.api.setSoft(true);if(+UX.api.vol()>.7)UX.api.setVol('.7');setTimeout(()=>{try{UX.say(T('Bajé el sonido y suavicé los agudos. Cuando quieras, cambia esto en «Más».','I lowered the sound and softened the highs. Change it any time in “More”.','音を小さく、高音をやわらげました。「その他」でいつでも変えられます。'))}catch(e){}},900)}
      if(pick==='rest')setTimeout(()=>breathe(),600);
      if(pick==='think')setTimeout(()=>{try{UX.say(T('Sin prisa. Aquí no hay nada que ganar ni perder.','No hurry. There is nothing to win or lose here.','急がなくて大丈夫。勝ちも負けもありません。'))}catch(e){}},900);
    },true);
  }
  const i0=UX.init;UX.init=function(){i0.apply(this,arguments);try{moodUI()}catch(e){}};
})();
