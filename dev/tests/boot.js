/* Prueba de arranque por juego: carga la página, entra al juego, avanza unos fotogramas y verifica
   (1) cero errores de consola/página, (2) lienzo con contenido (no en blanco), (3) estado del juego válido.
   Uso: node tests/boot.js [carpeta-del-sitio] [es|en|ja ...]   (por defecto: jr-clone, los 3 idiomas) */
const {chromium}=require('playwright');
const path=require('path');
const SITE=path.resolve(process.argv[2]||'/home/claude/jr-clone');
const LANGS=process.argv.slice(3).length?process.argv.slice(3):['es','en','ja'];
const IGN=/fonts\.(googleapis|gstatic)|net::ERR|Failed to load resource|favicon|serviceWorker|sw\.js/i;
const GAMES=[
  {name:'menú',path:'index.html',probe:async p=>({ok:(await p.locator('a.card').count())===4,info:'4 tarjetas'})},
  {name:'río 2D',path:'rio/index.html',go:'#go',settle:1500,probe:async p=>{const s=await p.evaluate(()=>window.__jr&&window.__jr.state());return {ok:!!s&&s.started&&s.dist>=0,info:JSON.stringify(s)}}},
  {name:'cabaña 2D',path:'cabana/index.html',go:'#go',settle:1500,probe:async p=>{const s=await p.evaluate(()=>window.__jr&&window.__jr.state());return {ok:!!s&&s.started,info:JSON.stringify(s)}}},
  {name:'río 3D',path:'rio3d/index.html',go:'#go',settle:1500,probe:async p=>{
    await p.evaluate(()=>__r3d.sim(60,.05));const d=await p.evaluate(()=>({dist:__r3d.P.dist,t:__r3d.P.t,fin:Number.isFinite(__r3d.P.px)&&Number.isFinite(__r3d.P.pz)}));return {ok:d.fin&&d.dist>0,info:JSON.stringify(d)}}},
  {name:'cabaña 3D',path:'cabana3d/index.html',go:'#go',settle:1500,probe:async p=>{const s=await p.evaluate(()=>window.__cab?({started:window.__cab.started,repaired:Object.keys(window.__cab.state.repaired||{}).length}):null);return {ok:!!s&&s.started===true,info:JSON.stringify(s)}}},
];
async function canvasVar(p){
  const png=await p.screenshot();const b64=png.toString('base64');
  return p.evaluate(async b=>{const im=new Image();im.src='data:image/png;base64,'+b;await im.decode();const c=document.createElement('canvas');c.width=im.width>>2;c.height=im.height>>2;const g=c.getContext('2d');g.drawImage(im,0,0,c.width,c.height);
    const d=g.getImageData(0,0,c.width,c.height).data;let m=0,n=d.length/4;for(let i=0;i<d.length;i+=4)m+=d[i]+d[i+1]+d[i+2];m/=n*3;let v=0;for(let i=0;i<d.length;i+=4){const x=(d[i]+d[i+1]+d[i+2])/3-m;v+=x*x}return Math.sqrt(v/n)},b64);
}
(async()=>{
  const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  let fail=0,total=0;
  for(const g of GAMES.filter(g=>!process.env.ONLY||process.env.ONLY.split(',').includes(g.name)))for(const lg of LANGS){
    total++;const errs=[];const p=await b.newPage({viewport:{width:900,height:560}});
    p.on('pageerror',e=>errs.push('pageerror: '+e.message));
    p.on('console',m=>{if(m.type()==='error'&&!IGN.test(m.text()))errs.push('console: '+m.text().slice(0,140))});
    await p.addInitScript(l=>{try{localStorage.clear();localStorage.setItem('rio3d-lang',l)}catch(e){}},lg);
    let res={ok:false,info:''};
    try{
      await p.goto('file://'+path.join(SITE,g.path));await p.waitForTimeout(600);
      if(g.go){await p.click(g.go,{timeout:5000});await p.waitForTimeout(g.settle||1000)}
      res=await g.probe(p);
      const sd=await canvasVar(p);if(sd<4){res.ok=false;res.info+=' · pantalla casi uniforme (σ='+sd.toFixed(1)+')'}
    }catch(e){res={ok:false,info:'excepción: '+e.message.split('\n')[0]}}
    const good=res.ok&&!errs.length;if(!good)fail++;
    console.log((good?'OK   ':'FALLA')+' '+g.name.padEnd(10)+' '+lg+(good?'':'  '+res.info+' '+errs.slice(0,3).join(' | ')));
    await p.close();
  }
  await b.close();
  console.log(fail?`\n${fail}/${total} pruebas fallaron`:`\nTodas las pruebas de arranque pasaron (${total})`);
  process.exit(fail?1:0);
})();
