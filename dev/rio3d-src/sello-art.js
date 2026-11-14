/* Estampas de tinta de los 11 lugares (estilo sumi-e: trazo negro de pincel, sol rojo, papel con grano).
   Todo se pinta con Canvas 2D, sin imágenes: un «pincel» que engorda y afina el trazo, árboles recursivos y aguadas.
   pintaSello(canvas,t,nivel): t = tipo de lugar (0..10); nivel = vueltas selladas (1..3). Cada vuelta añade detalle:
   1 tinta y sol · 2 acentos rojos y pájaros · 3 aguadas, reflejos y el sello rojo de firma. Lienzo lógico 300×400. */
export const GL=['橋','鳥','里','桜','葦','鐘','滝','茶','竹','蓮','城'];
const INK='#1a1612',RED='#c5463b',PINK='#e08a80';
const rnd=s=>{let a=(s>>>0)||1;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};
let c,r;
/* curva suave (Catmull-Rom) por los puntos P */
function spline(P,n){if(P.length<3){const o=[];for(let i=0;i<=n;i++){const u=i/n;o.push([P[0][0]+(P[1][0]-P[0][0])*u,P[0][1]+(P[1][1]-P[0][1])*u])}return o}
  const o=[],m=P.length-1;for(let i=0;i<=n;i++){const f=i/n*m,k=Math.min(m-1,f|0),u=f-k,p0=P[Math.max(0,k-1)],p1=P[k],p2=P[k+1],p3=P[Math.min(m,k+2)],u2=u*u,u3=u2*u;
    o.push([.5*(2*p1[0]+(p2[0]-p0[0])*u+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*u2+(3*p1[0]-p0[0]-3*p2[0]+p3[0])*u3),.5*(2*p1[1]+(p2[1]-p0[1])*u+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*u2+(3*p1[1]-p0[1]-3*p2[1]+p3[1])*u3)])}return o}
/* trazo de pincel: ancho w0→w1, entra con presión y tiembla un poco */
function st(P,w0,w1,col,al){const n=Math.max(10,P.length*9),p=spline(P,n),L=[],Rr=[],f1=r()*6,f2=r()*6;if(w1==null)w1=w0;
  for(let i=0;i<=n;i++){const u=i/n,a=p[Math.max(0,i-1)],b=p[Math.min(n,i+1)];let dx=b[0]-a[0],dy=b[1]-a[1];const d=Math.hypot(dx,dy)||1;dx/=d;dy/=d;
    const w=(w0+(w1-w0)*u)*.5*(.5+.5*Math.min(1,u*9))*(1+.13*Math.sin(u*11+f1)+.07*Math.sin(u*29+f2));L.push([p[i][0]-dy*w,p[i][1]+dx*w]);Rr.push([p[i][0]+dy*w,p[i][1]-dx*w])}
  c.globalAlpha=al==null?1:al;c.fillStyle=col||INK;c.beginPath();c.moveTo(L[0][0],L[0][1]);for(let i=1;i<=n;i++)c.lineTo(L[i][0],L[i][1]);for(let i=n;i>=0;i--)c.lineTo(Rr[i][0],Rr[i][1]);c.closePath();c.fill();
  c.beginPath();c.arc(p[0][0],p[0][1],w0*.27,0,7);c.fill();c.globalAlpha=1}
const ln=(x0,y0,x1,y1,w0,w1,col,al)=>st([[x0,y0],[(x0+x1)/2+(r()-.5)*1.2,(y0+y1)/2+(r()-.5)*1.2],[x1,y1]],w0,w1==null?w0:w1,col,al);
/* mancha rellena (aguada o tinta) por puntos suavizados */
function blob(P,col,al){const p=spline(P.concat([P[0]]),P.length*8);c.globalAlpha=al==null?1:al;c.fillStyle=col||INK;c.beginPath();c.moveTo(p[0][0],p[0][1]);for(const q of p)c.lineTo(q[0],q[1]);c.closePath();c.fill();c.globalAlpha=1}
function poly(P,col,al){c.globalAlpha=al==null?1:al;c.fillStyle=col||INK;c.beginPath();c.moveTo(P[0][0],P[0][1]);for(const q of P)c.lineTo(q[0],q[1]);c.closePath();c.fill();c.globalAlpha=1}
function sun(x,y,R){c.fillStyle=RED;c.beginPath();for(let i=0;i<=40;i++){const a=i/40*6.2832,q=R*(1+.012*Math.sin(a*5+1)+.01*Math.sin(a*9));c.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}c.fill();
  c.save();c.clip();for(let i=0;i<R*R*.5;i++){c.fillStyle=r()<.6?'rgba(255,222,208,.2)':'rgba(120,20,16,.16)';c.fillRect(x+(r()*2-1)*R,y+(r()*2-1)*R,.9+r(),.9+r())}c.restore()}
function bird(x,y,s){const k=.7+r()*.5;st([[x,y],[x-s*.45,y-s*.5*k],[x-s,y-s*.12]],s*.2,.3);st([[x,y],[x+s*.5,y-s*.42*k],[x+s*1.05,y-s*.2]],s*.2,.3)}
function water(x0,x1,y0,y1,n,col){for(let i=0;i<n;i++){const y=y0+(y1-y0)*(i+r()*.6)/n,w=(x1-x0)*(.12+r()*.3),x=x0+r()*(x1-x0-w);ln(x,y,x+w,y+(r()-.5),1.5,.5,col,.9)}}
function ground(x0,x1,y,w){st([[x0,y],[x0+(x1-x0)*.35,y+1],[x0+(x1-x0)*.7,y-.6],[x1,y]],w||2.4,.7)}
/* árbol: ramas que se bifurcan y adelgazan; devuelve las puntas (para las flores) */
function tree(x,y,a,len,w,d,tips,sp){const b=(r()-.5)*.8,xm=x+Math.cos(a+b*.3)*len*.5,ym=y+Math.sin(a+b*.3)*len*.5,x2=xm+Math.cos(a+b)*len*.5,y2=ym+Math.sin(a+b)*len*.5;
  st([[x,y],[xm,ym],[x2,y2]],w,w*.64);if(tips&&d<3)tips.push([xm,ym]);
  if(d<=0||w<.55){tips&&tips.push([x2,y2]);return}
  const k=r()<.28&&d<4?3:2;for(let i=0;i<k;i++){const s=(i-(k-1)/2)*(sp||.72)+(r()-.5)*.35;tree(x2,y2,a+b*.6+s-(a+Math.PI/2)*.1,len*(.6+r()*.2),w*.62,d-1,tips,sp)}}
function flowers(tips,p,R0){for(const t of tips){if(r()>p)continue;const n=1+(r()*3|0);for(let i=0;i<n;i++){c.fillStyle=r()<.72?RED:PINK;c.globalAlpha=.92;c.beginPath();c.arc(t[0]+(r()-.5)*7,t[1]+(r()-.5)*7,(R0||1.5)+r()*1.1,0,7);c.fill()}}c.globalAlpha=1}
/* tejado de aleros curvos */
function roof(cx,y,wd,h,rg){c.fillStyle=INK;c.beginPath();c.moveTo(cx-wd/2-5,y-4);c.quadraticCurveTo(cx-wd*.3,y-1,cx-wd*(rg||.15),y-h);c.lineTo(cx+wd*(rg||.15),y-h);c.quadraticCurveTo(cx+wd*.3,y-1,cx+wd/2+5,y-4);c.quadraticCurveTo(cx,y+4.5,cx-wd/2-5,y-4);c.fill();
  c.strokeStyle='rgba(245,238,224,.5)';c.lineWidth=.5;for(let i=-3;i<=3;i++){if(!i)continue;c.beginPath();c.moveTo(cx+i*wd*.035,y-h+1.5);c.quadraticCurveTo(cx+i*wd*.07,y-h*.4,cx+i*wd*.13,y-.5);c.stroke()}}
function pine(x,y,h,lean){const P=[[x,y],[x+lean*.3,y-h*.35],[x-lean*.2,y-h*.7],[x+lean,y-h]];st(P,h*.075,h*.03);
  for(let i=0;i<4;i++){const u=.42+i*.19,px=x+lean*(u*u)+(i%2?1:-1)*h*.2,py=y-h*u,w=h*(.34-i*.04);st([[x+lean*u*.6,py+4],[px,py]],1.6,.6);for(let k=0;k<13;k++){const q=px+(r()-.5)*w;ln(q,py+1,q+(r()-.5)*3,py-3-r()*4,1.3,.3)}blob([[px-w*.55,py+1],[px,py-4],[px+w*.55,py+1],[px,py+2.2]],INK,.85)}}
function reed(x,y,h,b,w){st([[x,y],[x+b*.25,y-h*.5],[x+b,y-h]],w||1.5,.35)}
function seal(x,y,t){c.save();c.translate(x,y);c.rotate(-.05);c.fillStyle=RED;c.beginPath();const s=12.5;c.moveTo(-s+3,-s);c.lineTo(s-3,-s);c.quadraticCurveTo(s,-s,s,-s+3);c.lineTo(s,s-3);c.quadraticCurveTo(s,s,s-3,s);c.lineTo(-s+3,s);c.quadraticCurveTo(-s,s,-s,s-3);c.lineTo(-s,-s+3);c.quadraticCurveTo(-s,-s,-s+3,-s);c.fill();
  c.fillStyle='#f6efe1';c.font='700 18px "Hiragino Mincho ProN","Yu Mincho","Noto Serif CJK JP","Noto Serif JP",serif';c.textAlign='center';c.textBaseline='middle';c.fillText(GL[t],0,1);c.restore()}
function lantern(x,y,s,red){ln(x,y-s*1.2,x,y-s*.55,.9,.7);if(red){c.fillStyle=RED;c.beginPath();c.ellipse(x,y,s*.42,s*.55,0,0,7);c.fill()}else{c.strokeStyle=INK;c.lineWidth=1;c.beginPath();c.ellipse(x,y,s*.42,s*.55,0,0,7);c.stroke()}ln(x-s*.25,y-s*.55,x+s*.25,y-s*.55,1.6,1.4);ln(x-s*.25,y+s*.55,x+s*.25,y+s*.55,1.6,1.4);if(red)ln(x,y+s*.6,x,y+s*1.15,1,.3,RED)}
const hill=(P,w,al)=>{st(P,w||2,.8);if(al)blob(P.concat([[P[P.length-1][0],P[0][1]+2]]),INK,al)};

const ART=[
/* 0 · Puente de madera */
L=>{sun(198,132,31);hill([[40,262],[58,246],[78,258],[96,262]],2,L>2?.14:0);
  const tp=[];tree(60,258,-1.35,34,5.5,4,tp,.8);
  const A=x=>214+((x-150)*(x-150))/163;for(const x of[86,214]){ln(x,A(x)+2,x-3,300,3.4,2.6);ln(x+9,A(x)+2,x+8,300,3.4,2.6)}
  st([[60,264],[105,226],[150,213],[195,226],[240,264]],6.5,6);st([[60,251],[105,213],[150,200],[195,213],[240,251]],1.8,1.6);
  for(let i=0;i<=10;i++){const x=64+i*17.2;ln(x,A(x)+1,x,A(x)-15-(i%5?0:5),i%5?1.5:2.8,i%5?1.2:2.2)}
  ground(214,266,264,2.4);st([[232,264],[246,256],[262,263]],1.6,.6);water(52,250,294,330,7);
  if(L>1){bird(150,112,11);bird(128,96,8);bird(170,88,7);flowers(tp,.75);for(let i=0;i<3;i++)ln(184+i*4,286+i*6,214-i*4,286+i*6,1.5,.5,RED,.85)}
  if(L>2){st([[112,312],[124,317],[140,312]],2.6,1);poly([[118,312],[126,300],[130,312]],INK);water(100,160,320,326,2);seal(246,332,0)}},
/* 1 · Torii sobre el agua */
L=>{sun(116,146,37);hill([[36,282],[70,262],[96,270],[124,256],[150,284]],1.8,L>2?.13:.06);
  ln(144,198,140,304,6,5.2);ln(198,198,202,304,6,5.2);st([[112,188],[142,192],[171,193],[200,192],[230,188]],8.5,8);st([[108,180],[140,186],[171,187],[202,186],[234,180]],3,2.6);
  ln(126,214,216,214,4.4,4);ln(171,194,171,213,4,3.6);
  ground(40,132,304,2);ground(212,264,304,2);for(const x of[141,201])for(let i=0;i<5;i++)ln(x-7+r()*4,311+i*6,x+5+r()*4,311+i*6,2.4-i*.35,.6,INK,.8-i*.12);
  water(60,250,312,336,5);
  if(L>1){bird(196,120,11);bird(220,104,8);bird(180,98,7);for(let i=0;i<6;i++)reed(238+i*5,304,22+r()*22,6+r()*8,1.6);for(let i=0;i<4;i++)reed(52+i*5,304,16+r()*14,-4-r()*6,1.4)}
  if(L>2){for(let i=0;i<3;i++)ln(98+i*4,312+i*6,134-i*4,312+i*6,1.5,.5,RED,.85);st([[70,324],[84,329],[100,324]],2.6,1);ln(86,325,86,311,1,.8);seal(246,344,1)}},
/* 2 · Aldea de farolillos */
L=>{sun(210,118,28);
  const casa=(cx,y,w,h)=>{blob([[cx-w/2-6,y-h*.42],[cx-w*.2,y-h*.8],[cx,y-h],[cx+w*.2,y-h*.8],[cx+w/2+6,y-h*.42],[cx,y-h*.36]],INK);ln(cx-w*.14,y-h-3,cx+w*.14,y-h-3,3,2.6);
    for(const k of[-.42,-.14,.14,.42])ln(cx+w*k,y-h*.4,cx+w*k,y,1.8,1.5);ln(cx-w*.46,y-h*.2,cx+w*.46,y-h*.2,1.1,1);ln(cx-w*.46,y,cx+w*.46,y,1.6,1.3)};
  casa(98,296,78,86);casa(186,288,56,62);
  blob([[232,300],[230,262],[238,238],[250,244],[254,270],[252,300]],INK,L>2?.2:.08);st([[232,300],[230,262],[238,238],[250,244],[254,270],[252,300]],2.2,1.4);st([[229,268],[242,272],[255,266]],2.6,2);
  for(const x of[236,243,250])st([[x,271],[x-2,277],[x+2,281],[x,286]],1.2,.5);
  ground(40,264,300,2.4);for(let i=0;i<3;i++)ln(118+i*22,308+i*5,150+i*22,308+i*5,1.3,.5);
  const S=u=>[52+u*172,196+Math.sin(u*Math.PI)*22+u*30];const sp=[];for(let i=0;i<=8;i++)sp.push(S(i/8));st(sp,1,.8);ln(52,198,52,300,2.2,1.8);
  for(let i=1;i<8;i++){const q=S(i/8);lantern(q[0],q[1]+8,L>1?9:7,L>1)}
  if(L>1){bird(150,104,10);bird(126,90,7)}
  if(L>2){st([[110,208],[104,190],[114,174],[106,156]],2.4,.4,INK,.35);for(let i=0;i<9;i++){c.fillStyle=RED;c.globalAlpha=.55;c.beginPath();c.arc(60+r()*180,150+r()*90,1+r(),0,7);c.fill()}c.globalAlpha=1;seal(64,338,2)}},
/* 3 · Jardín de sakura */
L=>{sun(214,112,30);const tp=[];
  st([[104,322],[112,286],[100,250],[122,214]],11,6);tree(122,214,-1.9,44,5.4,4,tp,.78);tree(122,214,-.75,50,5.6,4,tp,.78);tree(104,258,-2.6,30,3,3,tp,.8);tree(116,236,-.25,38,3.2,3,tp,.8);
  blob([[70,324],[92,314],[124,316],[146,324]],INK);ground(40,262,324,2.4);
  roof(222,296,62,20);ln(202,297,202,323,1.6,1.4);ln(242,297,242,323,1.6,1.4);ln(222,297,222,323,1.1,1);ln(200,310,244,310,1,.9);
  flowers(tp,L>2?1:L>1?.8:.3,L>2?1.9:1.6);
  if(L>1){bird(168,86,9);bird(150,74,7);for(let i=0;i<14;i++){c.fillStyle=r()<.6?RED:PINK;c.globalAlpha=.8;c.beginPath();c.ellipse(60+r()*190,150+r()*170,1.7,1,r()*3,0,7);c.fill()}c.globalAlpha=1}
  if(L>2){flowers(tp,.8,1.4);for(let i=0;i<16;i++){c.fillStyle=PINK;c.globalAlpha=.75;c.beginPath();c.ellipse(60+r()*190,328+r()*10,1.8,.9,0,0,7);c.fill()}c.globalAlpha=1;seal(246,348,3)}},
/* 4 · Cañaveral de las garzas */
L=>{sun(196,236,35);ground(40,264,300,2.2);
  for(let i=0;i<16;i++){const x=46+i*5.4+r()*3,h=50+r()*70,b=(r()-.3)*26;reed(x,302,h,b,1.9);if(i%2){const q=[x+b,302-h];st([[q[0],q[1]+2],[q[0]+b*.12+2,q[1]-7],[q[0]+b*.22+4,q[1]-13]],3,.5)}st([[x,302],[x-6-r()*8,302-h*.4],[x-14-r()*10,302-h*.5]],1.6,.3)}
  for(let i=0;i<7;i++){const x=232+i*4.5,h=30+r()*50,b=(r()-.6)*20;reed(x,302,h,b,1.7);if(i%2)st([[x+b,304-h],[x+b+1,294-h]],2.8,.5)}
  const garza=(x,y,s,f)=>{ln(x-2*s,y-30*s,x-3*s,y,1.1,.9);ln(x+3*s,y-30*s,x+5*s*f,y,1.1,.9);
    blob([[x-13*s*f,y-31*s],[x-4*s*f,y-45*s],[x+9*s*f,y-46*s],[x+13*s*f,y-36*s],[x+3*s*f,y-28*s]],'#f6efe1');st([[x-17*s*f,y-27*s],[x-6*s*f,y-45*s],[x+9*s*f,y-47*s],[x+13*s*f,y-37*s],[x+2*s*f,y-28*s],[x-17*s*f,y-27*s]],1.5,1.1);
    st([[x+10*s*f,y-45*s],[x+17*s*f,y-56*s],[x+10*s*f,y-66*s],[x+15*s*f,y-76*s]],2.4,1.6);st([[x+15*s*f,y-76*s],[x+22*s*f,y-76*s],[x+31*s*f,y-73*s]],2.6,.4);st([[x+14*s*f,y-78*s],[x+6*s*f,y-80*s]],1.2,.3)};
  garza(160,318,1,1);water(60,250,310,338,6);ln(150,319,172,319,1.2,.5);
  if(L>1){bird(120,150,12);bird(96,132,8);bird(144,128,7);for(let i=0;i<3;i++)ln(178+i*4,308+i*6,214-i*4,308+i*6,1.5,.5,RED,.85)}
  if(L>2){garza(214,326,.62,-1);hill([[40,262],[84,244],[130,258]],1.2,.08);seal(64,350,4)}},
/* 5 · Templo de la campana */
L=>{sun(90,120,30);
  poly([[96,324],[106,300],[204,300],[214,324]],INK,L>2?.16:.07);st([[96,324],[106,300]],2,1.6);st([[214,324],[204,300]],2,1.6);ln(104,300,206,300,2.2,2);
  for(let i=0;i<3;i++)ln(132-i*5,306+i*6,178+i*5,306+i*6,1.3,1);
  ln(116,300,122,236,4.4,3.8);ln(194,300,188,236,4.4,3.8);ln(140,300,142,236,2.4,2);ln(170,300,168,236,2.4,2);ln(118,282,192,282,2,1.8);ln(120,246,190,246,2.6,2.4);
  roof(155,238,156,42,.12);ln(140,193,170,193,3.4,3);
  ln(155,246,155,252,1.4,1.2);blob([[146,278],[147,262],[150,253],[155,251],[160,253],[163,262],[164,278],[155,280]],INK);ln(143,279,167,279,2.6,2.4);
  ln(172,268,206,266,3.4,3);ln(180,246,182,266,.9,.8);ln(200,246,200,265,.9,.8);
  pine(238,324,92,-10);ground(40,264,324,2.4);
  if(L>1){bird(196,150,10);bird(216,136,7);bird(60,176,7);c.strokeStyle=RED;c.lineWidth=1.6;c.beginPath();c.moveTo(150,262);c.lineTo(160,262);c.stroke();st([[66,324],[64,306],[70,292],[64,276]],2,.3,INK,.3)}
  if(L>2){c.strokeStyle=INK;for(let i=0;i<3;i++){c.globalAlpha=.3-i*.08;c.lineWidth=1.1;c.beginPath();c.arc(155,266,26+i*12,Math.PI*.85,Math.PI*1.15);c.stroke();c.beginPath();c.arc(155,266,26+i*12,-Math.PI*.15,Math.PI*.15);c.stroke()}c.globalAlpha=1;water(60,150,336,346,2);seal(64,350,5)}},
/* 6 · Cascadita de musgo */
L=>{sun(210,112,27);
  blob([[56,318],[62,250],[82,196],[112,150],[134,140],[130,200],[122,318]],INK,L>2?.12:.05);blob([[176,318],[172,220],[178,150],[202,160],[232,208],[250,318]],INK,L>2?.1:.04);
  st([[52,320],[60,282],[56,252],[72,226],[76,196],[98,176],[104,152],[134,140]],3,1.6);st([[104,152],[112,176],[104,214],[112,250]],1.4,.4);st([[226,196],[214,222],[222,258],[212,290]],1.4,.4);st([[134,140],[130,200],[126,262],[122,300]],2,1);st([[178,150],[200,156],[210,180],[230,200],[234,236],[246,262],[244,292],[254,320]],2.6,1.4);st([[178,150],[172,220],[176,300]],1.8,.9);
  for(let i=0;i<6;i++){const y=180+i*22;ln(70+i*3,y,84+i*5+r()*8,y+10,1.6,.4);ln(214+r()*10,y+6,226+r()*12,y+16,1.5,.4)}
  for(let i=0;i<7;i++){const x=137+i*5.4;st([[x,146+r()*8],[x+(r()-.5)*2,220],[x+(r()-.5)*3,292+r()*8]],1.5,.5,INK,.75)}
  blob([[104,322],[112,306],[130,304],[138,320]],INK);blob([[168,324],[174,310],[192,308],[202,322]],INK);blob([[214,326],[220,317],[234,318],[238,326]],INK,.85);
  for(let i=0;i<3;i++){c.strokeStyle=INK;c.globalAlpha=.7-i*.18;c.lineWidth=1.1;c.beginPath();c.ellipse(154,316+i*7,20+i*16,3+i*1.6,0,.15,Math.PI-.15);c.stroke()}c.globalAlpha=1;water(60,250,336,348,3);
  const tp=[];tree(250,150,-2.75,40,3.6,3,tp,.7);
  if(L>1){flowers(tp,1,2);flowers(tp,.7,1.5);bird(90,112,10);bird(112,98,7)}
  if(L>2){for(let i=0;i<70;i++){c.fillStyle=INK;c.globalAlpha=.3;const s=r()<.5;c.beginPath();c.arc(s?64+r()*56:182+r()*56,s?200+r()*110:200+r()*110,.6+r()*.8,0,7);c.fill()}c.globalAlpha=1;c.fillStyle='#f6efe1';c.globalAlpha=.75;c.beginPath();c.ellipse(154,304,26,8,0,0,7);c.fill();c.globalAlpha=1;seal(64,352,6)}},
/* 7 · Casa de té */
L=>{sun(88,124,29);
  for(const x of[100,136,172,208])ln(x,280,x+(x<150?-2:2),312,2.6,2.2);ln(84,280,224,280,3.6,3.2);ln(88,268,220,268,1.2,1.1);for(let i=0;i<=8;i++)ln(88+i*16.5,268,88+i*16.5,280,1,.9);
  ln(106,280,106,236,2.6,2.2);ln(204,280,204,236,2.6,2.2);ln(140,268,140,236,1.6,1.4);ln(172,268,172,236,1.6,1.4);
  c.strokeStyle=INK;c.lineWidth=.6;c.globalAlpha=.8;for(let i=1;i<4;i++){c.beginPath();c.moveTo(108,236+i*8);c.lineTo(138,236+i*8);c.moveTo(174,236+i*8);c.lineTo(202,236+i*8);c.stroke()}for(let i=1;i<3;i++){c.beginPath();c.moveTo(108+i*10,238);c.lineTo(108+i*10,266);c.moveTo(174+i*9.5,238);c.lineTo(174+i*9.5,266);c.stroke()}c.globalAlpha=1;
  roof(155,238,172,46,.13);ln(138,189,172,189,3.4,3);
  lantern(228,252,10,L>1);
  for(let i=0;i<3;i++){const x=240+i*9,h=170+r()*40;for(let k=0;k<6;k++){const y0=322-k*h/6,y1=322-(k+1)*h/6+2;ln(x+k*.5,y0,x+(k+1)*.5,y1,2.6-k*.25,2.4-k*.25)}for(let k=0;k<5;k++){const q=[x+3,322-h*(.55+r()*.45)];st([q,[q[0]+8+r()*8,q[1]+2+r()*6],[q[0]+18+r()*8,q[1]+10+r()*6]],2.4,.3)}}
  ground(40,96,312,2);ground(212,264,322,2.2);water(56,236,322,344,5);
  if(L>1){bird(150,118,10);bird(174,104,7);st([[156,262],[152,254],[158,248],[154,240]],1.6,.3,INK,.4);ln(150,264,162,264,2.4,2)}
  if(L>2){for(let i=0;i<4;i++)blob([[56+i*13,326+i*4],[62+i*13,322+i*4],[70+i*13,326+i*4],[62+i*13,329+i*4]],INK,.8);for(let i=0;i<3;i++)ln(76+i*4,300+i*6,104-i*4,300+i*6,1.4,.5,RED,.8);seal(64,356,7)}},
/* 8 · Bosque de bambú */
L=>{sun(176,150,35);
  const cana=(x,top,w,b)=>{const n=7+(r()*3|0);for(let k=0;k<n;k++){const u0=k/n,u1=(k+1)/n,y0=332-(332-top)*u0,y1=332-(332-top)*u1+2.2,x0=x+b*u0*u0,x1=x+b*u1*u1;ln(x0,y0,x1,y1,w*(1-u0*.45),w*(1-u1*.45));ln(x0-w*.7,y0,x0+w*.7,y0,1,.8)}return[x+b,top]};
  const hoja=(q,n)=>{for(let i=0;i<n;i++){const a=.2+r()*1.3,s=r()<.5?-1:1,l=14+r()*14,o=[q[0]+(r()-.5)*18,q[1]+(r()-.2)*40];st([o,[o[0]+s*Math.cos(a)*l*.5,o[1]+Math.sin(a)*l*.4],[o[0]+s*Math.cos(a)*l,o[1]+Math.sin(a)*l]],3,.3)}};
  const T=[cana(64,70,6,8),cana(96,96,3.6,-6),cana(132,58,7,5),cana(204,80,5,-9),cana(236,62,6.5,7),cana(168,116,2.6,4)];
  T.forEach((q,i)=>hoja(q,L>1?9:5));
  for(let i=0;i<5;i++)blob([[104+i*9,346-i*9],[116+i*8,341-i*9],[134+i*7,345-i*9],[118+i*8,350-i*9]],INK,.75-i*.1);
  ground(40,104,334,2.2);ground(196,264,334,2.2);
  if(L>1){bird(150,96,9);bird(170,84,6);for(let i=0;i<8;i++){const x=48+r()*200;st([[x,334],[x+(r()-.5)*8,326],[x+(r()-.5)*14,318-r()*6]],1.5,.3)}}
  if(L>2){ln(198,334,198,304,2,1.8);ln(216,334,216,304,2,1.8);ln(196,312,218,312,1.6,1.4);st([[188,318],[207,310],[230,301]],3.6,3);blob([[222,334],[228,326],[240,326],[246,334]],INK,.85);
    c.fillStyle='#f6efe1';c.globalAlpha=.55;c.beginPath();c.ellipse(150,250,120,13,0,0,7);c.fill();c.globalAlpha=1;seal(62,362,8)}},
/* 9 · Estanque de lotos */
L=>{sun(206,120,29);
  const hojaL=(x,y,a,b,rot)=>{c.save();c.translate(x,y);c.rotate(rot||0);c.fillStyle=INK;c.globalAlpha=L>2?.2:.1;c.beginPath();c.ellipse(0,0,a,b,0,0,7);c.fill();c.globalAlpha=1;c.restore();
    const P=[];for(let i=0;i<=12;i++){const t=i/12*6.2832;P.push([x+Math.cos(t)*a*(1+.04*Math.sin(t*5)),y+Math.sin(t)*b])}st(P,2,1.2);for(let i=0;i<7;i++){const t=i/7*6.2832+.3;ln(x,y,x+Math.cos(t)*a*.85,y+Math.sin(t)*b*.85,.9,.3,INK,.7)}};
  hojaL(92,306,40,12);hojaL(204,316,46,13);hojaL(150,330,30,8);hojaL(238,290,22,6.5);
  st([[150,318],[146,270],[152,224]],2.6,1.8);st([[112,304],[106,270],[100,244]],2,1.4);
  const petalo=(x,y,a,l,w,fill)=>{const tx=x+Math.cos(a)*l,ty=y+Math.sin(a)*l,nx=-Math.sin(a)*w,ny=Math.cos(a)*w,mx=x+Math.cos(a)*l*.5,my=y+Math.sin(a)*l*.5;
    if(fill)blob([[x,y],[mx+nx,my+ny],[tx,ty],[mx-nx,my-ny]],fill,.85);else blob([[x,y],[mx+nx,my+ny],[tx,ty],[mx-nx,my-ny]],'#f6efe1');st([[x,y],[mx+nx,my+ny],[tx,ty]],1.5,.6);st([[x,y],[mx-nx,my-ny],[tx,ty]],1.5,.6)};
  for(const a of[-2.75,-.4,-2.3,-.85,-1.95,-1.2,-1.57])petalo(152,226,a,a<-2.5||a>-.6?24:32,7,L>1?(Math.abs(a+1.57)<.5?PINK:RED):0);
  petalo(100,246,-1.45,20,6,L>1?RED:0);petalo(100,246,-1.8,17,5,L>1?PINK:0);
  for(let i=0;i<5;i++)reed(48+i*6,324,60+r()*60,-6+r()*14,1.7);
  for(let i=0;i<3;i++){c.strokeStyle=INK;c.globalAlpha=.6-i*.15;c.lineWidth=1;c.beginPath();c.ellipse(190,342+i*5,24+i*14,2.6+i,0,.2,Math.PI-.2);c.stroke()}c.globalAlpha=1;water(56,150,344,356,3);
  if(L>1){bird(120,128,10);bird(98,114,7);bird(142,108,6)}
  if(L>2){const x=214,y=214;st([[x-12,y+5],[x,y],[x+13,y-5]],2.2,.6);for(const s of[-1,1]){st([[x-2,y],[x-8,y-12*s],[x-16,y-16*s]],3.2,.4,INK,.55);st([[x+1,y-1],[x+2,y-13*s],[x-2,y-19*s]],3,.4,INK,.55)}c.fillStyle=RED;c.beginPath();c.arc(x+14,y-5.5,1.8,0,7);c.fill();seal(250,362,9)}},
/* 10 · Castillo de la Garza Blanca */
L=>{sun(96,130,35);
  hill([[38,316],[70,304],[104,302],[158,300],[214,302],[262,316]],2.2,L>2?.12:.05);
  poly([[98,302],[112,262],[204,262],[218,302]],'#f6efe1');poly([[98,302],[112,262],[204,262],[218,302]],INK,.12);st([[98,302],[105,280],[112,262]],2.4,2);st([[218,302],[211,280],[204,262]],2.4,2);
  for(let j=0;j<4;j++)for(let i=0;i<7;i++){const y=268+j*9,x=110-j*3+i*(14+j)+(j%2)*6;if(x<214+j*2)ln(x,y,x+7+r()*4,y+(r()-.5),1,.5,INK,.75)}
  const piso=(y,w,h)=>{poly([[158-w/2,y],[158-w/2,y-h],[158+w/2,y-h],[158+w/2,y]],'#f6efe1');ln(158-w/2,y,158-w/2,y-h,1.8,1.6);ln(158+w/2,y,158+w/2,y-h,1.8,1.6);for(let i=-1;i<=1;i++)ln(158+i*w*.27,y-h*.3,158+i*w*.27,y-h*.75,2.2,2)};
  piso(262,84,20);roof(158,246,108,20,.2);piso(228,62,18);roof(158,213,82,19,.2);piso(196,42,16);roof(158,183,60,24,.06);
  poly([[158,186],[146,200],[170,200]],'#f6efe1',.0);ln(150,160,153,154,1.6,.5);ln(166,160,163,154,1.6,.5);
  pine(232,304,62,8);pine(74,306,46,-6);water(60,250,330,348,4);
  if(L>1){const x=206,y=140;st([[x-20,y-10],[x-9,y-8],[x,y]],2.2,.8);st([[x,y],[x+10,y-11],[x+24,y-13]],2.2,.8);st([[x-3,y+1],[x+6,y+3],[x+15,y+1]],2.6,.5);st([[x-2,y],[x-10,y+5],[x-17,y+6]],1.6,.3);bird(238,116,8);bird(180,104,6)}
  if(L>2){c.fillStyle='#f6efe1';c.globalAlpha=.6;c.beginPath();c.ellipse(120,286,70,7,0,0,7);c.fill();c.beginPath();c.ellipse(214,250,46,5,0,0,7);c.fill();c.globalAlpha=1;for(let i=0;i<3;i++)ln(78+i*4,330+i*6,114-i*4,330+i*6,1.4,.5,RED,.8);seal(250,362,10)}}
];
/** Pinta la estampa del lugar t en el lienzo (se ajusta a su tamaño en píxeles). */
export function pintaSello(cv,t,nivel){
  c=cv.getContext('2d');r=rnd(977+t*131);const k=cv.width/300;c.setTransform(k,0,0,k,0,0);c.clearRect(0,0,300,cv.height/k);c.lineCap='round';c.lineJoin='round';
  c.save();c.translate(0,(cv.height/k-420)/2);ART[t](Math.max(1,Math.min(3,nivel|0)));c.restore();
  /* grano del papel: la tinta no cubre del todo, como pincel seco */
  c.globalCompositeOperation='destination-out';const g=rnd(31+t),n=300*(cv.height/k)*.11;for(let i=0;i<n;i++){c.globalAlpha=.1+g()*.3;c.fillRect(g()*300,g()*cv.height/k,.7+g()*.9,.7+g()*.9)}
  c.globalCompositeOperation='source-over';c.globalAlpha=1}
/** Mosaico de papel con fibra (dataURL) para el fondo del pergamino. */
export function papel(){const s=160,cv=document.createElement('canvas');cv.width=cv.height=s;const x=cv.getContext('2d'),g=rnd(5);x.fillStyle='#e7dcc4';x.fillRect(0,0,s,s);
  for(let i=0;i<2600;i++){x.fillStyle=g()<.5?'rgba(255,250,236,.32)':'rgba(120,96,60,.07)';x.fillRect(g()*s,g()*s,1+g()*1.6,1+g()*1.6)}
  x.strokeStyle='rgba(130,104,66,.1)';x.lineWidth=.6;for(let i=0;i<46;i++){const a=g()*s,b=g()*s,t=g()*6.28,l=5+g()*14;x.beginPath();x.moveTo(a,b);x.quadraticCurveTo(a+Math.cos(t)*l*.5+2,b+Math.sin(t)*l*.5,a+Math.cos(t)*l,b+Math.sin(t)*l);x.stroke()}
  return cv.toDataURL('image/png')}

/** Logotipo (lienzo lógico 300×300): la canoa con su farol sobre el río, sol rojo y una rama en flor. sello=false lo omite (icono enmascarable). */
export function pintaLogo(cv,sello){
  c=cv.getContext('2d');r=rnd(4242);const k=cv.width/300;c.setTransform(k,0,0,k,0,0);c.clearRect(0,0,300,300);c.lineCap='round';c.lineJoin='round';
  sun(190,98,37);const tp=[];
  st([[14,128],[44,112],[70,104],[104,84]],7.5,4);tree(104,84,-.5,40,3.8,3,tp,.7);tree(70,104,-1.25,34,3.2,3,tp,.75);tree(44,112,.25,26,2.4,2,tp,.7);flowers(tp,.95,2.3);flowers(tp,.5,1.7);
  bird(246,62,11);bird(264,82,7.5);bird(228,44,7);
  /* canoa: casco de media luna, remero con sombrero y farol colgado en la proa */
  blob([[70,190],[92,205],[150,212],[206,205],[236,184],[228,186],[204,198],[150,201],[98,198],[78,188]],INK);
  blob([[117,199],[119,180],[126,172],[134,180],[138,199]],INK);poly([[112,174],[126,159],[141,174]],INK);st([[111,174],[126,173],[142,174]],2.6,2.2);
  st([[134,182],[146,190],[160,216],[166,228]],2.4,1.6);blob([[162,222],[170,224],[172,238],[164,238]],INK,.9);
  st([[206,203],[205,170],[208,150],[220,146]],2.8,1.8);ln(220,146,220,153,1,.9);
  c.fillStyle=RED;c.beginPath();c.ellipse(220,165,7.5,10,0,0,7);c.fill();ln(215,155,225,155,2.4,2.2);ln(215,175,225,175,2.4,2.2);ln(220,176,220,188,1.6,.4,RED);
  /* río */
  st([[40,226],[86,222],[118,226],[150,223]],3,.8);st([[176,226],[214,222],[262,226]],3,.8);
  st([[62,243],[110,240],[160,244],[200,241]],2.6,.7);st([[98,259],[140,256],[190,260],[236,257]],2.2,.6);st([[130,274],[166,272],[200,275]],1.8,.5);
  for(let i=0;i<3;i++)ln(206+i*5,234+i*8,246-i*5,234+i*8,2,.6,RED,.9);
  if(sello!==false){c.save();c.translate(52,262);c.rotate(-.05);c.fillStyle=RED;c.beginPath();c.rect(-13,-13,26,26);c.fill();c.fillStyle='#f6efe1';c.font='700 19px "Hiragino Mincho ProN","Yu Mincho","Noto Serif CJK JP","Noto Serif JP",serif';c.textAlign='center';c.textBaseline='middle';c.fillText('灯',0,1);c.restore()}
  c.globalCompositeOperation='destination-out';const g=rnd(77);for(let i=0;i<9000;i++){c.globalAlpha=.1+g()*.28;c.fillRect(g()*300,g()*300,.7+g()*.9,.7+g()*.9)}c.globalCompositeOperation='source-over';c.globalAlpha=1}
