const {chromium}=require('playwright');
const GW=96,GH=54;
exports.GW=GW;exports.GH=GH;
exports.launch=async(vw,vh,url,seed,init)=>{
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--disable-accelerated-2d-canvas','--disable-gpu-rasterization']});
  const ctx=await b.newContext({viewport:{width:vw,height:vh}});const p=await ctx.newPage();const errs=[];
  p.on('pageerror',e=>errs.push(e.message));
  await p.addInitScript(([s,ini])=>{
    let a=s>>>0;Math.random=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
    try{(new Function(ini||''))()}catch(e){}
    window.__GRAB=(cv)=>{const W=96,H=54;let c=window.__gc;if(!c){c=window.__gc=document.createElement('canvas');c.width=W;c.height=H;window.__gx=c.getContext('2d',{willReadFrequently:true})}
      const g=window.__gx;g.drawImage(cv,0,0,W,H);const d=g.getImageData(0,0,W,H).data,o=new Uint16Array(W*H);
      const lin=v=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)};
      for(let i=0;i<W*H;i++){o[i]=Math.round((0.2126*lin(d[i*4])+0.7152*lin(d[i*4+1])+0.0722*lin(d[i*4+2]))*65535)}
      return o};
    window.__FR=[];
  },[seed,init]);
  await p.goto(url);return {b,p,errs};
};
/* frames: array of Uint16Array(GW*GH) at fps */
exports.analyze=(frames,fps,label,GW=96,GH=54)=>{
  const N=frames.length,C=GW*GH,tr=[];for(let c=0;c<C;c++)tr.push([]);
  for(let c=0;c<C;c++){
    let prevExt=frames[0][c]/65535,dir=0,cur=prevExt,curT=0;
    for(let t=1;t<N;t++){
      const v=frames[t][c]/65535;
      if(dir===0){if(v>cur+1e-4)dir=1;else if(v<cur-1e-4)dir=-1;cur=v;curT=t;continue}
      if((dir===1&&v>=cur)||(dir===-1&&v<=cur)){cur=v;curT=t;continue}
      // reversal: cur was extremum
      const mag=Math.abs(cur-prevExt);
      if(mag>=0.1&&Math.min(cur,prevExt)<0.8){tr[c].push(curT);prevExt=cur}
      else if((dir===1&&cur<prevExt)||(dir===-1&&cur>prevExt)){/* retorno por debajo del último extremo: reiniciar referencia */ prevExt=cur}
      dir=-dir;cur=v;curT=t;
    }
  }
  const win=Math.round(fps);let maxT=0,maxArea=0,maxArea5=0,maxAt=0,anyTr=0,maxFlashFrac=0;
  const evCount=new Int32Array(C);
  for(let s=0;s+win<=N||s===0;s+=Math.max(1,Math.round(fps/30))){
    let a7=0,a5=0,mt=0,anyc=0;
    for(let c=0;c<C;c++){let n=0;for(const x of tr[c]){if(x>=s&&x<s+win)n++}
      if(n>mt)mt=n;if(n>=7)a7++;if(n>=5)a5++;if(n>0)anyc++}
    if(mt>maxT)maxT=mt;if(a7/C>maxArea){maxArea=a7/C;maxAt=s/fps;const m=[];for(let y=0;y<GH;y+=2){let r='';for(let x=0;x<GW;x+=2){let n=0;for(const c of [y*GW+x,y*GW+x+1,(y+1)*GW+x,(y+1)*GW+x+1])for(const q of tr[c])if(q>=s&&q<s+win)n++;r+=n>=28?'#':n>=14?'+':n>=4?'.':' '}m.push(r)}exports.map=m}if(a5/C>maxArea5)maxArea5=a5/C;if(anyc/C>maxFlashFrac)maxFlashFrac=anyc/C;
    if(s+win>=N)break;
  }
  return {label,seconds:+(N/fps).toFixed(1),maxTransitionsPerCellIn1s:maxT,maxFlashesPerSecCell:+(maxT/2).toFixed(1),areaOver3fps:+(maxArea*100).toFixed(2),areaAtLeast2_5fps:+(maxArea5*100).toFixed(2),areaAnyFlashingIn1s:+(maxFlashFrac*100).toFixed(2),at:+maxAt.toFixed(1)};
};

exports.down=(frames,fx,fy)=>frames.map(f=>{const w=GW/fx,h=GH/fy,o=new Uint16Array(w*h);for(let y=0;y<h;y++)for(let x=0;x<w;x++){let a=0;for(let j=0;j<fy;j++)for(let i=0;i<fx;i++)a+=f[(y*fy+j)*GW+x*fx+i];o[y*w+x]=Math.round(a/(fx*fy))}return o});
exports.both=(fr,fps,label)=>{const a=exports.analyze(fr,fps,label+' [fino 6px]');const c=exports.analyze(exports.down(fr,4,3),fps,label+' [bloque 4x3 ≈24x11px]',24,18);const r=exports.analyze(exports.down(fr,12,9),fps,label+' [REGIÓN 12x9 ≈1% pantalla]',8,6);return [a,c,r]};
