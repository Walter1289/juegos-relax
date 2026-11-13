// Exporta icons/*.png desde dev/tools/logo.html. Uso (con `python3 -m http.server 8765` en la raíz): node dev/tools/logo.js
const {chromium}=require(process.env.PW||'playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
for(const [f,s,m] of [['icon-512',512,0],['icon-192',192,0],['apple-touch-icon',180,0],['maskable-512',512,1]]){
  const p=await b.newPage({viewport:{width:s,height:s}});await p.goto('http://localhost:8765/dev/tools/logo.html?s='+s+'&m='+m);await p.waitForFunction(()=>document.title==='ok');
  await p.locator('#c').screenshot({path:__dirname+'/../../icons/'+f+'.png'});await p.close()}
await b.close()})();
