(()=>{var cf=0,Uh=1,lf=2;var Co=1,hf=2,vr=3,$i=0,dn=1,Te=2,ui=0,qn=1,Ki=2,Fh=3,Bh=4,uf=5;var ys=100,df=101,ff=102,pf=103,mf=104,gf=200,xf=201,_f=202,yf=203,Oh=204,zh=205,vf=206,Mf=207,Sf=208,bf=209,Ef=210,Tf=211,wf=212,Af=213,Rf=214,Da=0,Na=1,Ua=2,ir=3,Fa=4,Ba=5,Oa=6,za=7,yc=0,Cf=1,If=2,Yn=0,Hh=1,Gh=2,Vh=3,kh=4,Wh=5,Xh=6,qh=7;var Yh=300,Qi=301,vs=302,vc=303,Mc=304,Io=306,sr=1e3,ri=1001,Ha=1002,Ye=1003,Pf=1004;var Po=1005;var hn=1006,Sc=1007;var ji=1008;var wn=1009,Zh=1010,Jh=1011,Mr=1012,bc=1013,Zn=1014,Bn=1015,Jn=1016,Ec=1017,Tc=1018,Sr=1020,$h=35902,Kh=35899,Qh=1021,jh=1022,On=1023,ai=1026,ts=1027,br=1028,wc=1029,es=1030,Ac=1031;var Rc=1033,Lo=33776,Do=33777,No=33778,Uo=33779,Cc=35840,Ic=35841,Pc=35842,Lc=35843,Dc=36196,Nc=37492,Uc=37496,Fc=37488,Bc=37489,Fo=37490,Oc=37491,zc=37808,Hc=37809,Gc=37810,Vc=37811,kc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,Zc=37817,Jc=37818,$c=37819,Kc=37820,Qc=37821,jc=36492,tl=36494,el=36495,nl=36283,il=36284,Bo=36285,sl=36286;var Qr=2300,Ga=2301,Pa=2302,Sh=2303,bh=2400,Eh=2401,Th=2402;var Lf=3200;var Oo=0,Df=1,Ci="",ln="srgb",jr="srgb-linear",to="linear",xe="srgb";var La=7680;var Nf=519,Uf=512,Ff=513,Bf=514,rl=515,Of=516,zf=517,ol=518,Hf=519,tu=35044;var eu="300 es",Xn=2e3,rr=2001;function Bm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Om(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){let i=eo("canvas");return i.style.display="block",i}var Ed={},or=null;function no(...i){let t="THREE."+i.shift();or?or("log",t,...i):console.log(t,...i)}function Vf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Vf(i);let t="THREE."+i.shift();if(or)or("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=Vf(i);let t="THREE."+i.shift();if(or)or("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ps(...i){let t=i.join(" ");t in Ed||(Ed[t]=!0,zt(...i))}function kf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wf={[Da]:Na,[Ua]:Oa,[Fa]:za,[ir]:Ba,[Na]:Da,[Oa]:Ua,[za]:Fa,[Ba]:ir},ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zl=Math.PI/180,Va=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function zm(i,t){return(i%t+t)%t}function Jl(i,t,e){return(1-e)*i+e*t}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var au=class au{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};au.prototype.isVector2=!0;var ct=au,bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cu=class cu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cu.prototype.isVector3=!0;var P=cu,$l=new P,Td=new bn,lu=class lu{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],w=s[4],_=s[7],b=s[2],S=s[5],A=s[8];return r[0]=o*x+a*M+c*b,r[3]=o*m+a*w+c*S,r[6]=o*p+a*_+c*A,r[1]=l*x+h*M+u*b,r[4]=l*m+h*w+u*S,r[7]=l*p+h*_+u*A,r[2]=d*x+f*M+g*b,r[5]=d*m+f*w+g*S,r[8]=d*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lu.prototype.isMatrix3=!0;var Yt=lu,Kl=new Yt,wd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){let i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?to:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:t,whitePoint:n,transfer:to,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var re=Hm();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=eo("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gm=0,ar=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ql(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Vm=0,jl=new P,yn=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=hn,o=ji,a=On,c=wn,l=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=bi(),this.name="",this.source=new ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Yh;yn.DEFAULT_ANISOTROPY=1;var hu=class hu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,_=(f+1)/2,b=(p+1)/2,S=(h+d)/4,A=(u+x)/4,y=(g+m)/4;return w>_&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;var De=hu,Wa=class extends ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new yn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ar(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xa=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _c=class _c{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _c().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,Wm)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Bi.crossVectors(n,Cn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Bi.crossVectors(n,Cn)),Bi.normalize(),na.crossVectors(Cn,Bi),s[0]=Bi.x,s[4]=na.x,s[8]=Cn.x,s[1]=Bi.y,s[5]=na.y,s[9]=Cn.y,s[2]=Bi.z,s[6]=na.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],w=n[7],_=n[11],b=n[15],S=s[0],A=s[4],y=s[8],T=s[12],R=s[1],I=s[5],N=s[9],O=s[13],L=s[2],H=s[6],q=s[10],W=s[14],rt=s[3],Y=s[7],tt=s[11],st=s[15];return r[0]=o*S+a*R+c*L+l*rt,r[4]=o*A+a*I+c*H+l*Y,r[8]=o*y+a*N+c*q+l*tt,r[12]=o*T+a*O+c*W+l*st,r[1]=h*S+u*R+d*L+f*rt,r[5]=h*A+u*I+d*H+f*Y,r[9]=h*y+u*N+d*q+f*tt,r[13]=h*T+u*O+d*W+f*st,r[2]=g*S+x*R+m*L+p*rt,r[6]=g*A+x*I+m*H+p*Y,r[10]=g*y+x*N+m*q+p*tt,r[14]=g*T+x*O+m*W+p*st,r[3]=M*S+w*R+_*L+b*rt,r[7]=M*A+w*I+_*H+b*Y,r[11]=M*y+w*N+_*q+b*tt,r[15]=M*T+w*O+_*W+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=c*f-l*d,w=a*f-l*u,_=a*d-c*u,b=o*f-l*h,S=o*d-c*h,A=o*u-a*h;return e*(x*M-m*w+p*_)-n*(g*M-m*b+p*S)+s*(g*w-x*b+p*A)-r*(g*_-x*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*a-n*o,w=e*c-s*o,_=e*l-r*o,b=n*c-s*a,S=n*l-r*a,A=s*l-r*c,y=h*x-u*g,T=h*m-d*g,R=h*p-f*g,I=u*m-d*x,N=u*p-f*x,O=d*p-f*m,L=M*O-w*N+_*I+b*R-S*T+A*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(a*O-c*N+l*I)*H,t[1]=(s*N-n*O-r*I)*H,t[2]=(x*A-m*S+p*b)*H,t[3]=(d*S-u*A-f*b)*H,t[4]=(c*R-o*O-l*T)*H,t[5]=(e*O-s*R+r*T)*H,t[6]=(m*_-g*A-p*w)*H,t[7]=(h*A-d*_+f*w)*H,t[8]=(o*N-a*R+l*y)*H,t[9]=(n*R-e*N-r*y)*H,t[10]=(g*S-x*_+p*M)*H,t[11]=(u*_-h*S-f*M)*H,t[12]=(a*T-o*I-c*y)*H,t[13]=(e*I-n*T+s*y)*H,t[14]=(x*w-g*b-m*M)*H,t[15]=(h*b-u*w+d*M)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=c*l,w=c*h,_=c*u,b=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+_)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(d+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+w)*A,s[9]=(m-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=zs.set(s[0],s[1],s[2]).length(),a=zs.set(s[4],s[5],s[6]).length(),c=zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let l=1/o,h=1/a,u=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Xn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Xn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===rr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Xn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===rr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};_c.prototype.isMatrix4=!0;var ue=_c,zs=new P,Gn=new ue,km=new P(0,0,0),Wm=new P(1,1,1),Bi=new P,na=new P,Cn=new P,Rd=new ue,Cd=new bn,Ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xm=0,Id=new P,Hs=new bn,xi=new ue,ia=new P,zr=new P,qm=new P,Ym=new bn,Pd=new P(1,0,0),Ld=new P(0,1,0),Dd=new P(0,0,1),Nd={type:"added"},Zm={type:"removed"},Gs={type:"childadded",child:null},th={type:"childremoved",child:null},Ke=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Ti,n=new bn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Yt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Pd,t)}rotateY(t){return this.rotateOnAxis(Ld,t)}rotateZ(t){return this.rotateOnAxis(Dd,t)}translateOnAxis(t,e){return Id.copy(t).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pd,t)}translateY(t){return this.translateOnAxis(Ld,t)}translateZ(t){return this.translateOnAxis(Dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(zr,ia,this.up):xi.lookAt(ia,zr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(xi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zm),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,qm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Ym,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new P(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function eh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=zm(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=eh(o,r,t+1/3),this.g=eh(o,r,t),this.b=eh(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return re.workingToColorSpace(mn.copy(this),t),Math.round(se(mn.r*255,0,255))*65536+Math.round(se(mn.g*255,0,255))*256+Math.round(se(mn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=ln){re.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(sa);let n=Jl(Oi.h,sa.h,e),s=Jl(Oi.s,sa.s,e),r=Jl(Oi.l,sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new pt;pt.NAMES=Xf;var ro=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oo=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new P,_i=new P,nh=new P,yi=new P,Vs=new P,ks=new P,Ud=new P,ih=new P,sh=new P,rh=new P,oh=new De,ah=new De,ch=new De,Si=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),_i.subVectors(n,e),nh.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(_i),c=Vn.dot(nh),l=_i.dot(_i),h=_i.dot(nh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return oh.setScalar(0),ah.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(t,e),ah.fromBufferAttribute(t,n),ch.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oh,r.x),o.addScaledVector(ah,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),_i.subVectors(t,e),Vn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),ks.subVectors(r,n),ih.subVectors(t,n);let c=Vs.dot(ih),l=ks.dot(ih);if(c<=0&&l<=0)return e.copy(n);sh.subVectors(t,s);let h=Vs.dot(sh),u=ks.dot(sh);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Vs,o);rh.subVectors(t,r);let f=Vs.dot(rh),g=ks.dot(rh);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ks,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ud.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Ud,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Vs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),oa.subVectors(this.max,Hr),Ws.subVectors(t.a,Hr),Xs.subVectors(t.b,Hr),qs.subVectors(t.c,Hr),zi.subVectors(Xs,Ws),Hi.subVectors(qs,Xs),hs.subVectors(Ws,qs);let e=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-hs.z,hs.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,hs.z,0,-hs.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-hs.y,hs.x,0];return!lh(e,Ws,Xs,qs,oa)||(e=[1,0,0,0,1,0,0,0,1],!lh(e,Ws,Xs,qs,oa))?!1:(aa.crossVectors(zi,Hi),e=[aa.x,aa.y,aa.z],lh(e,Ws,Xs,qs,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new P,new P,new P,new P,new P,new P,new P,new P],kn=new P,ra=new li,Ws=new P,Xs=new P,qs=new P,zi=new P,Hi=new P,hs=new P,Hr=new P,oa=new P,aa=new P,us=new P;function lh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=t.dot(us),l=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qe=new P,ca=new ct,$m=0,oe=class extends ci{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=class extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var co=class extends oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Km=new li,Gr=new P,hh=new P,hi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Km.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(hh)),this.expandByPoint(Gr.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qm=0,Un=new ue,uh=new Ke,Ys=new P,In=new li,Vr=new li,rn=new P,ae=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bm(t)?co:ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(In.min,Vr.min),In.expandByPoint(rn),rn.addVectors(In.max,Vr.max),In.expandByPoint(rn)):(In.expandByPoint(Vr.min),In.expandByPoint(Vr.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(t,l),rn.add(Ys)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new P,c[y]=new P;let l=new P,h=new P,u=new P,d=new ct,f=new ct,g=new ct,x=new P,m=new P;function p(y,T,R){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[y].add(x),a[T].add(x),a[R].add(x),c[y].add(m),c[T].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,T=M.length;y<T;++y){let R=M[y],I=R.start,N=R.count;for(let O=I,L=I+N;O<L;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new P,_=new P,b=new P,S=new P;function A(y){b.fromBufferAttribute(s,y),S.copy(b);let T=a[y];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(S,T);let I=_.dot(c[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,I)}for(let y=0,T=M.length;y<T;++y){let R=M[y],I=R.start,N=R.count;for(let O=I,L=I+N;O<L;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new oe(d,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},lo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},_n=new P,lr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dh=new P,jm=new P,t0=new Yt,Wn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dh.subVectors(n,e).cross(jm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||t0.getNormalMatrix(t),s=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},e0=0,Fn=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=qn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=zh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Vi=class extends Fn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,kr=new P,Js=new P,$s=new P,Ks=new ct,Wr=new ct,qf=new ue,la=new P,Xr=new P,ha=new P,Fd=new ct,fh=new ct,Bd=new ct,ms=class extends Ke{constructor(t=new Vi){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lo(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new lr(n,3,0,!1)),Zs.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),qf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ua(la.set(-.5,-.5,0),$s,o,Js,s,r),ua(Xr.set(.5,-.5,0),$s,o,Js,s,r),ua(ha.set(.5,.5,0),$s,o,Js,s,r),Fd.set(0,0),fh.set(1,0),Bd.set(1,1);let a=t.ray.intersectTriangle(la,Xr,ha,!1,kr);if(a===null&&(ua(Xr.set(-.5,.5,0),$s,o,Js,s,r),fh.set(0,1),a=t.ray.intersectTriangle(la,ha,Xr,!1,kr),a===null))return;let c=t.ray.origin.distanceTo(kr);c<t.near||c>t.far||e.push({distance:c,point:kr.clone(),uv:Si.getInterpolation(kr,la,Xr,ha,Fd,fh,Bd,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(i,t,e,n,s,r){Ks.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Wr.x=r*Ks.x-s*Ks.y,Wr.y=s*Ks.x+r*Ks.y):Wr.copy(Ks),i.copy(t),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(qf)}var Mi=new P,ph=new P,da=new P,fa=new P,hr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ph.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),fa.copy(this.origin).sub(ph);let r=t.distanceTo(e)*.5,o=-this.direction.dot(da),a=fa.dot(this.direction),c=-fa.dot(da),l=fa.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ph).addScaledVector(da,d),f}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,M=n.y-o.y,w=n.z-o.z,_=Math.abs(c),b=Math.abs(l),S=Math.abs(h),A,y,T,R,I,N,O,L,H,q,W,rt;if(_>=b&&_>=S?(T=c,N=u,H=g,rt=p,c>=0?(A=l,y=h,R=d,I=f,O=x,L=m,q=M,W=w):(A=h,y=l,R=f,I=d,O=m,L=x,q=w,W=M)):b>=S?(T=l,N=d,H=x,rt=M,l>=0?(A=h,y=c,R=f,I=u,O=m,L=g,q=w,W=p):(A=c,y=h,R=u,I=f,O=g,L=m,q=p,W=w)):(T=h,N=f,H=m,rt=w,h>=0?(A=c,y=l,R=u,I=d,O=g,L=x,q=p,W=M):(A=l,y=c,R=d,I=u,O=x,L=g,q=M,W=p)),T===0)return null;let Y=A/T,tt=y/T,st=1/T,Dt=R-Y*N,Rt=I-tt*N,fe=O-Y*H,ee=L-tt*H,ce=q-Y*rt,$=W-tt*rt,nt=ce*ee-$*fe,Mt=Dt*$-Rt*ce,Wt=fe*Rt-ee*Dt;if(s){if(nt<0||Mt<0||Wt<0)return null}else if((nt<0||Mt<0||Wt<0)&&(nt>0||Mt>0||Wt>0))return null;let Tt=nt+Mt+Wt;if(Tt===0)return null;let Xt=st*(nt*N+Mt*H+Wt*rt);return(Tt>0?Xt<0:Xt>0)?null:this.at(Xt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class extends Fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Od=new ue,ds=new hr,pa=new hi,zd=new P,ma=new P,ga=new P,xa=new P,mh=new P,_a=new P,Hd=new P,ya=new P,K=class extends Ke{constructor(t=new ae,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(mh.fromBufferAttribute(u,t),o?_a.addScaledVector(mh,h):_a.addScaledVector(mh.sub(e),h))}e.add(_a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(pa.containsPoint(ds.origin)===!1&&(ds.intersectSphere(pa,zd)===null||ds.origin.distanceToSquared(zd)>(t.far-t.near)**2))&&(Od.copy(r).invert(),ds.copy(t.ray).applyMatrix4(Od),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,b=w;_<b;_+=3){let S=a.getX(_),A=a.getX(_+1),y=a.getX(_+2);s=va(this,p,t,n,l,h,u,S,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=va(this,o,t,n,l,h,u,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,b=w;_<b;_+=3){let S=_,A=_+1,y=_+2;s=va(this,p,t,n,l,h,u,S,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,w=m+1,_=m+2;s=va(this,o,t,n,l,h,u,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function n0(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===$i,a),c===null)return null;ya.copy(a),ya.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ya);return l<e.near||l>e.far?null:{distance:l,point:ya.clone(),object:i}}function va(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ma),i.getVertexPosition(c,ga),i.getVertexPosition(l,xa);let h=n0(i,t,e,n,ma,ga,xa,Hd);if(h){let u=new P;Si.getBarycoord(Hd,ma,ga,xa,u),s&&(h.uv=Si.getInterpolatedAttribute(s,a,c,l,u,new ct)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,c,l,u,new ct)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};Si.getNormal(ma,ga,xa,d.normal),h.face=d,h.barycoord=u}return h}var gs=class extends yn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ye,h=Ye,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new ue,Gd=new ue,Ma=[],Vd=new li,i0=new ue,qr=new K,Yr=new hi,vn=class extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Vd.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Vd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Yr.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Gd.multiplyMatrices(n,Qs),qr.matrixWorld=Gd,qr.raycast(t,Ma);for(let o=0,a=Ma.length;o<a;o++){let c=Ma[o];c.instanceId=r,c.object=this,e.push(c)}Ma.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gs(new Float32Array(s*this.count),s,this.count,br,Bn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new hi,s0=new ct(.5,.5),Sa=new P,dr=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],w=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-o,f-h,p-g,b-M).normalize(),s[1].setComponents(l+o,f+h,p+g,b+M).normalize(),s[2].setComponents(l+a,f+u,p+x,b+w).normalize(),s[3].setComponents(l-a,f-u,p-x,b-w).normalize(),n)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,f-d,p-m,b-_).normalize();else if(s[4].setComponents(l-c,f-d,p-m,b-_).normalize(),e===Xn)s[5].setComponents(l+c,f+d,p+m,b+_).normalize();else if(e===rr)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);let e=s0.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fr=class extends Fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qa=new P,Ya=new P,kd=new ue,Zr=new hr,ba=new hi,gh=new P,Wd=new P,Za=class extends Ke{constructor(t=new ae,e=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qa.fromBufferAttribute(e,s-1),Ya.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new Kt(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;kd.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),M=h.getX(x+1),w=Ea(this,t,Zr,c,p,M,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Ea(this,t,Zr,c,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=Ea(this,t,Zr,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ea(this,t,Zr,c,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ea(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(qa.fromBufferAttribute(a,s),Ya.fromBufferAttribute(a,r),e.distanceSqToSegment(qa,Ya,gh,Wd)>n)return;gh.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(gh);if(!(l<t.near||l>t.far))return{distance:l,point:Wd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Xd=new P,qd=new P,ho=class extends Za{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xd.distanceTo(qd);t.setAttribute("lineDistance",new Kt(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wi=class extends Fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yd=new ue,wh=new hr,Ta=new hi,wa=new P,ki=class extends Ke{constructor(t=new ae,e=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Yd.copy(s).invert(),wh.copy(t.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);wa.fromBufferAttribute(u,m),Zd(wa,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)wa.fromBufferAttribute(u,g),Zd(wa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zd(i,t,e,n,s,r,o){let a=wh.distanceSqToPoint(i);if(a<e){let c=new P;wh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends yn{constructor(t=[],e=Qi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ai=class extends yn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends yn{constructor(t,e,n=Zn,s,r,o,a=Ye,c=Ye,l,h=ai,u=1){if(h!==ai&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends Wi{constructor(t,e=Zn,n=Qi,s,r,o=Ye,a=Ye,c,l=ai){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fo=class extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Tn=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(x,m,p,M,w,_,b,S,A,y,T){let R=_/A,I=b/y,N=_/2,O=b/2,L=S/2,H=A+1,q=y+1,W=0,rt=0,Y=new P;for(let tt=0;tt<q;tt++){let st=tt*I-O;for(let Dt=0;Dt<H;Dt++){let Rt=Dt*R-N;Y[x]=Rt*M,Y[m]=st*w,Y[p]=L,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Dt/A),u.push(1-tt/y),W+=1}}for(let tt=0;tt<y;tt++)for(let st=0;st<A;st++){let Dt=d+st+H*tt,Rt=d+st+H*(tt+1),fe=d+(st+1)+H*(tt+1),ee=d+(st+1)+H*tt;c.push(Dt,Rt,ee),c.push(Rt,fe,ee),rt+=6}a.addGroup(f,rt,T),f+=rt,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xi=class i extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new P,h=new ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Re=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function M(){let _=new P,b=new P,S=0,A=(e-t)/n;for(let y=0;y<=r;y++){let T=[],R=y/r,I=R*(e-t)+t;for(let N=0;N<=s;N++){let O=N/s,L=O*c+a,H=Math.sin(L),q=Math.cos(L);b.x=I*H,b.y=-R*n+m,b.z=I*q,u.push(b.x,b.y,b.z),_.set(H,A,q).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-R),T.push(g++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let R=x[T][y],I=x[T+1][y],N=x[T+1][y+1],O=x[T][y+1];(t>0||T!==0)&&(h.push(R,I,O),S+=3),(e>0||T!==r-1)&&(h.push(I,N,O),S+=3)}l.addGroup(p,S,0),p+=S}function w(_){let b=g,S=new ct,A=new P,y=0,T=_===!0?t:e,R=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let L=N/s*c+a,H=Math.cos(L),q=Math.sin(L);A.x=T*q,A.y=m*R,A.z=T*H,u.push(A.x,A.y,A.z),d.push(0,R,0),S.x=H*.5+.5,S.y=q*.5*R+.5,f.push(S.x,S.y),g++}for(let N=0;N<s;N++){let O=b+N,L=I+N;_===!0?h.push(L,L+1,O):h.push(L+1,L,O),y+=3}l.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ne=class i extends Re{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$a=class i extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new P,_=new P,b=new P;for(let S=0;S<e.length;S+=3)f(e[S+0],w),f(e[S+1],_),f(e[S+2],b),c(w,_,b,M)}function c(M,w,_,b){let S=b+1,A=[];for(let y=0;y<=S;y++){A[y]=[];let T=M.clone().lerp(_,y/S),R=w.clone().lerp(_,y/S),I=S-y;for(let N=0;N<=I;N++)N===0&&y===S?A[y][N]=T:A[y][N]=T.clone().lerp(R,N/I)}for(let y=0;y<S;y++)for(let T=0;T<2*(S-y)-1;T++){let R=Math.floor(T/2);T%2===0?(d(A[y][R+1]),d(A[y+1][R]),d(A[y][R])):(d(A[y][R+1]),d(A[y+1][R+1]),d(A[y+1][R]))}}function l(M){let w=new P;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(M),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let _=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(_,1-b)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let w=o[M+0],_=o[M+2],b=o[M+4],S=Math.max(w,_,b),A=Math.min(w,_,b);S>.9&&A<.1&&(w<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,w){let _=M*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){let M=new P,w=new P,_=new P,b=new P,S=new ct,A=new ct,y=new ct;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),b.copy(M).add(w).add(_).divideScalar(3);let I=m(b);x(S,R+0,M,I),x(A,R+2,w,I),x(y,R+4,_,I)}}function x(M,w,_,b){b<0&&M.x===1&&(o[w]=M.x-1),_.x===0&&_.z===0&&(o[w]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],o=[],a=new P,c=new ue;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},pr=class extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ka=class extends pr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jd=new P,$d=new P,xh=new nu,_h=new nu,yh=new nu,Qa=class extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:($d.subVectors(s[0],s[1]).add(s[0]),l=$d);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),xh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),_h.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),yh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),_h.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xh.calc(c),_h.calc(c),yh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function r0(i,t){let e=1-i;return e*e*t}function o0(i,t){return 2*(1-i)*i*t}function a0(i,t){return i*i*t}function $r(i,t,e,n){return r0(i,t)+o0(i,e)+a0(i,n)}function c0(i,t){let e=1-i;return e*e*e*t}function l0(i,t){let e=1-i;return 3*e*e*i*t}function h0(i,t){return 3*(1-i)*i*i*t}function u0(i,t){return i*i*i*t}function Kr(i,t,e,n,s){return c0(i,t)+l0(i,e)+h0(i,n)+u0(i,s)}var po=class extends Pn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends Pn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y),Kr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mo=class extends Pn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tc=class extends Pn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends Pn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ec=class extends Pn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y),$r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Kd(a,c.x,l.x,h.x,u.x),Kd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:Qa,CubicBezierCurve:po,CubicBezierCurve3:ja,EllipseCurve:pr,LineCurve:mo,LineCurve3:tc,QuadraticBezierCurve:go,QuadraticBezierCurve3:ec,SplineCurve:xo}),nc=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ah[s.type]().fromJSON(s))}return this}},xs=class extends nc{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new go(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new po(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new pr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qi=class extends xs{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xs().fromJSON(s))}return this}};function d0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=x0(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,u=c;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return _o(r,o,e,a,c,l,0),o}function Yf(i,t,e,n,s){let r;if(s===R0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Qd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Qd(o/n|0,i[o],i[o+1],r);return r&&mr(r,r.next)&&(vo(r),r=r.next),r}function _s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||ze(e.prev,e,e.next)===0)){if(vo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _o(i,t,e,n,s,r,o){if(!i)return;!o&&r&&S0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?p0(i,n,s,r):f0(i)){t.push(c.i,i.i,l.i),vo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=m0(_s(i),t),_o(i,t,e,n,s,r,2)):o===2&&g0(i,t,e,n,s,r):_o(_s(i),t,e,n,s,r,1);break}}}function f0(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Jr(s,a,r,c,o,l,g.x,g.y)&&ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function p0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ze(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),p=Rh(f,g,t,e,n),M=Rh(x,m,t,e,n),w=i.prevZ,_=i.nextZ;for(;w&&w.z>=p&&_&&_.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Jr(a,h,c,u,l,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Jr(a,h,c,u,l,d,_.x,_.y)&&ze(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Jr(a,h,c,u,l,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Jr(a,h,c,u,l,d,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function m0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!mr(n,s)&&Jf(n,e,e.next,s)&&yo(n,s)&&yo(s,n)&&(t.push(n.i,e.i,s.i),vo(e),vo(e.next),e=i=s),e=e.next}while(e!==i);return _s(e)}function g0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T0(o,a)){let c=$f(o,a);o=_s(o,o.next),c=_s(c,c.next),_o(o,t,e,n,s,r,0),_o(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function x0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Yf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(E0(l))}s.sort(_0);for(let r=0;r<s.length;r++)e=y0(s[r],e);return e}function _0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function y0(i,t){let e=v0(i,t);if(!e)return t;let n=$f(e,i);return _s(n,n.next),_s(e,e.next)}function v0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(mr(i,e))return e;do{if(mr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Zf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);yo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&M0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function M0(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function S0(i,t,e,n){let s=i;do s.z===0&&(s.z=Rh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b0(s)}function b0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Rh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function E0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Jr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Zf(i,t,e,n,s,r,o,a)}function T0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!w0(i,t)&&(yo(i,t)&&yo(t,i)&&A0(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||mr(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function Jf(i,t,e,n){let s=Ra(ze(i,t,e)),r=Ra(ze(i,t,n)),o=Ra(ze(e,n,i)),a=Ra(ze(e,n,t));return!!(s!==r&&o!==a||s===0&&Aa(i,e,t)||r===0&&Aa(i,n,t)||o===0&&Aa(e,i,n)||a===0&&Aa(e,t,n))}function Aa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ra(i){return i>0?1:i<0?-1:0}function w0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yo(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function A0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $f(i,t){let e=Ch(i.i,i.x,i.y),n=Ch(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qd(i,t,e,n){let s=Ch(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ch(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ih=class{static triangulate(t,e,n=2){return d0(t,e,n)}},oi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jd(t),tf(n,t);let o=t.length;e.forEach(jd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,tf(n,e[c]);let a=Ih.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function jd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gr=class i extends ae{constructor(t=new qi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:C0,w,_=!1,b,S,A,y;if(p){w=p.getSpacedPoints(h),_=!0,d=!1;let it=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,it),S=new P,A=new P,y=new P}d||(m=0,f=0,g=0,x=0);let T=a.extractPoints(l),R=T.shape,I=T.holes;if(!oi.isClockWise(R)){R=R.reverse();for(let it=0,at=I.length;it<at;it++){let lt=I[it];oi.isClockWise(lt)&&(I[it]=lt.reverse())}}function O(it){let lt=10000000000000001e-36,ht=it[0];for(let ft=1;ft<=it.length;ft++){let Ht=ft%it.length,Ot=it[Ht],qt=Ot.x-ht.x,Jt=Ot.y-ht.y,D=qt*qt+Jt*Jt,pe=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ht.x),Math.abs(ht.y)),ne=lt*pe*pe;if(D<=ne){it.splice(Ht,1),ft--;continue}ht=Ot}}O(R),I.forEach(O);let L=I.length,H=R;for(let it=0;it<L;it++){let at=I[it];R=R.concat(at)}function q(it,at,lt){return at||kt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(at,lt)}let W=R.length;function rt(it,at,lt){let ht,ft,Ht,Ot=it.x-at.x,qt=it.y-at.y,Jt=lt.x-it.x,D=lt.y-it.y,pe=Ot*Ot+qt*qt,ne=Ot*D-qt*Jt;if(Math.abs(ne)>Number.EPSILON){let C=Math.sqrt(pe),v=Math.sqrt(Jt*Jt+D*D),z=at.x-qt/C,k=at.y+Ot/C,Z=lt.x-D/v,ut=lt.y+Jt/v,dt=((Z-z)*D-(ut-k)*Jt)/(Ot*D-qt*Jt);ht=z+Ot*dt-it.x,ft=k+qt*dt-it.y;let J=ht*ht+ft*ft;if(J<=2)return new ct(ht,ft);Ht=Math.sqrt(J/2)}else{let C=!1;Ot>Number.EPSILON?Jt>Number.EPSILON&&(C=!0):Ot<-Number.EPSILON?Jt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(D)&&(C=!0),C?(ht=-qt,ft=Ot,Ht=Math.sqrt(pe)):(ht=Ot,ft=qt,Ht=Math.sqrt(pe/2))}return new ct(ht/Ht,ft/Ht)}let Y=[];for(let it=0,at=H.length,lt=at-1,ht=it+1;it<at;it++,lt++,ht++)lt===at&&(lt=0),ht===at&&(ht=0),Y[it]=rt(H[it],H[lt],H[ht]);let tt=[],st,Dt=Y.concat();for(let it=0,at=L;it<at;it++){let lt=I[it];st=[];for(let ht=0,ft=lt.length,Ht=ft-1,Ot=ht+1;ht<ft;ht++,Ht++,Ot++)Ht===ft&&(Ht=0),Ot===ft&&(Ot=0),st[ht]=rt(lt[ht],lt[Ht],lt[Ot]);tt.push(st),Dt=Dt.concat(st)}let Rt;if(m===0)Rt=oi.triangulateShape(H,I);else{let it=[],at=[];for(let lt=0;lt<m;lt++){let ht=lt/m,ft=f*Math.cos(ht*Math.PI/2),Ht=g*Math.sin(ht*Math.PI/2)+x;for(let Ot=0,qt=H.length;Ot<qt;Ot++){let Jt=q(H[Ot],Y[Ot],Ht);Mt(Jt.x,Jt.y,-ft),ht===0&&it.push(Jt)}for(let Ot=0,qt=L;Ot<qt;Ot++){let Jt=I[Ot];st=tt[Ot];let D=[];for(let pe=0,ne=Jt.length;pe<ne;pe++){let C=q(Jt[pe],st[pe],Ht);Mt(C.x,C.y,-ft),ht===0&&D.push(C)}ht===0&&at.push(D)}}Rt=oi.triangulateShape(it,at)}let fe=Rt.length,ee=g+x;for(let it=0;it<W;it++){let at=d?q(R[it],Dt[it],ee):R[it];_?(A.copy(b.normals[0]).multiplyScalar(at.x),S.copy(b.binormals[0]).multiplyScalar(at.y),y.copy(w[0]).add(A).add(S),Mt(y.x,y.y,y.z)):Mt(at.x,at.y,0)}for(let it=1;it<=h;it++)for(let at=0;at<W;at++){let lt=d?q(R[at],Dt[at],ee):R[at];_?(A.copy(b.normals[it]).multiplyScalar(lt.x),S.copy(b.binormals[it]).multiplyScalar(lt.y),y.copy(w[it]).add(A).add(S),Mt(y.x,y.y,y.z)):Mt(lt.x,lt.y,u/h*it)}for(let it=m-1;it>=0;it--){let at=it/m,lt=f*Math.cos(at*Math.PI/2),ht=g*Math.sin(at*Math.PI/2)+x;for(let ft=0,Ht=H.length;ft<Ht;ft++){let Ot=q(H[ft],Y[ft],ht);Mt(Ot.x,Ot.y,u+lt)}for(let ft=0,Ht=I.length;ft<Ht;ft++){let Ot=I[ft];st=tt[ft];for(let qt=0,Jt=Ot.length;qt<Jt;qt++){let D=q(Ot[qt],st[qt],ht);_?Mt(D.x,D.y+w[h-1].y,w[h-1].x+lt):Mt(D.x,D.y,u+lt)}}}ce(),$();function ce(){let it=s.length/3;if(d){let at=0,lt=W*at;for(let ht=0;ht<fe;ht++){let ft=Rt[ht];Wt(ft[2]+lt,ft[1]+lt,ft[0]+lt)}at=h+m*2,lt=W*at;for(let ht=0;ht<fe;ht++){let ft=Rt[ht];Wt(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let at=0;at<fe;at++){let lt=Rt[at];Wt(lt[2],lt[1],lt[0])}for(let at=0;at<fe;at++){let lt=Rt[at];Wt(lt[0]+W*h,lt[1]+W*h,lt[2]+W*h)}}n.addGroup(it,s.length/3-it,0)}function $(){let it=s.length/3,at=0;nt(H,at),at+=H.length;for(let lt=0,ht=I.length;lt<ht;lt++){let ft=I[lt];nt(ft,at),at+=ft.length}n.addGroup(it,s.length/3-it,1)}function nt(it,at){let lt=it.length;for(;--lt>=0;){let ht=lt,ft=lt-1;ft<0&&(ft=it.length-1);for(let Ht=0,Ot=h+m*2;Ht<Ot;Ht++){let qt=W*Ht,Jt=W*(Ht+1),D=at+ht+qt,pe=at+ft+qt,ne=at+ft+Jt,C=at+ht+Jt;Tt(D,pe,ne,C)}}}function Mt(it,at,lt){c.push(it),c.push(at),c.push(lt)}function Wt(it,at,lt){Xt(it),Xt(at),Xt(lt);let ht=s.length/3,ft=M.generateTopUV(n,s,ht-3,ht-2,ht-1);ye(ft[0]),ye(ft[1]),ye(ft[2])}function Tt(it,at,lt,ht){Xt(it),Xt(at),Xt(ht),Xt(at),Xt(lt),Xt(ht);let ft=s.length/3,Ht=M.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);ye(Ht[0]),ye(Ht[1]),ye(Ht[3]),ye(Ht[1]),ye(Ht[2]),ye(Ht[3])}function Xt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function ye(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return I0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ah[s.type]().fromJSON(s)),new i(n,t.options)}},C0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-u),new ct(d,1-g),new ct(x,1-p)]:[new ct(a,1-c),new ct(h,1-u),new ct(f,1-g),new ct(m,1-p)]}};function I0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class i extends $a{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var un=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let w=0;w<l;w++){let _=w*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let w=M+l*p,_=M+l*(p+1),b=M+1+l*(p+1),S=M+1+l*p;f.push(w,_,S),f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xr=class i extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new P,g=new ct;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,w=M,_=M+n+1,b=M+n+2,S=M+1;a.push(w,_,S),a.push(_,b,S)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Mo=class i extends ae{constructor(t=new qi([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;oi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];oi.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=oi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],w=M[0]+u,_=M[1]+u,b=M[2]+u;n.push(w,_,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return P0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function P0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var he=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],w=p/n,_=o+w*a,b=t*Math.cos(_),S=Math.sqrt(t*t-b*b),A=0;p===0&&o===0?A=.5/e:p===n&&c===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=s+T*r;u.x=-S*Math.cos(R),u.y=b,u.z=S*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+A,1-w),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let w=h[p][M+1],_=h[p][M],b=h[p+1][M],S=h[p+1][M+1];(p!==0||o>0)&&f.push(w,_,S),(p!==n-1||c<Math.PI)&&f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ri=class i extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new P,f=new P,g=new P;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,_=(s+1)*x+m;c.push(p,M,_),c.push(M,w,_)}this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ef(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ef(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function L0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Kf={clone:Ms,merge:gn},D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=L0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ic=class extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Se=class extends Fn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var So=class extends Fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=yc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sc=class extends Fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends Fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oc=class extends Yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:r=t,a=2*e-n;break;case Th:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eh:o=t,c=2*n-e;break;case Th:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+M*o[l+b]+w*o[c+b]+_*o[u+b];return r}},ac=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},cc=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},lc=class extends Yi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let d=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=f*d+g*2,M=u[p],w=u[p+1],_=t*d+g*2,b=h[_],S=h[_+1],A=F0(n,e,M,b,s);r[g]=Qf(A,x,w,S,m)}return r}};function Qf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function U0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function F0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Qf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=U0(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),vh(t.settings)&&(n.settings={inTangents:js(t.settings.inTangents,Array),outTangents:js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new lc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case Ga:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break;case Sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;vh(this.settings)&&(nf(this.settings.inTangents,t),nf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){kt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Om(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,vh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ga;var Zi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Qr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};hc.prototype.ValueTypeName="color";var uc=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};uc.prototype.ValueTypeName="number";var dc=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)bn.slerpFlat(r,0,o,l-a,o,l,c);return r}},bo=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new dc(this.times,this.values,this.getValueSize(),t)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Ln{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Qr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};fc.prototype.ValueTypeName="vector";var pc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jf=new pc,mc=class{constructor(t){this.manager=t!==void 0?t:jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Eo=class extends _r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mh=new ue,sf=new P,rf=new P,To=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(sf),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===rr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ca=new P,Ia=new bn,ii=new P,wo=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ca,Ia,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Ia,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ca,Ia,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Ia,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new P,of=new ct,af=new ct,$e=class extends wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,of,af),e.subVectors(af,of)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ph=class extends To{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},Ao=class extends _r{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},yr=class extends wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Lh=class extends To{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Lh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var tr=-90,er=1,gc=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(tr,er,t,e);s.layers=this.layers,this.add(s);let r=new $e(tr,er,t,e);r.layers=this.layers,this.add(r);let o=new $e(tr,er,t,e);o.layers=this.layers,this.add(o);let a=new $e(tr,er,t,e);a.layers=this.layers,this.add(a);let c=new $e(tr,er,t,e);c.layers=this.layers,this.add(c);let l=new $e(tr,er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xc=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var su="\\[\\]\\.:\\/",B0=new RegExp("["+su+"]","g"),ru="[^"+su+"]",O0="[^"+su.replace("\\.","")+"]",z0=/((?:WC+[\/:])*)/.source.replace("WC",ru),H0=/(WCOD+)?/.source.replace("WCOD",O0),G0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),V0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),k0=new RegExp("^"+z0+H0+G0+V0+"$"),W0=["material","materials","bones","map"],Dh=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(B0,"")}static parseTrackName(t){let e=k0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);W0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Dh;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sS=new Float32Array(1);var uu=class uu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};uu.prototype.isMatrix2=!0;var Nh=uu;function ou(i,t,e,n){let s=X0(n);switch(e){case Qh:return i*t;case br:return i*t/s.components*s.byteLength;case wc:return i*t/s.components*s.byteLength;case es:return i*t*2/s.components*s.byteLength;case Ac:return i*t*2/s.components*s.byteLength;case jh:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case Rc:return i*t*4/s.components*s.byteLength;case Lo:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:case Lc:return Math.max(i,16)*Math.max(t,8)/4;case Cc:case Pc:return Math.max(i,8)*Math.max(t,8)/2;case Dc:case Nc:case Fc:case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Fo:case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jc:case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bo:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function X0(i){switch(i){case wn:case Zh:return{byteLength:1,components:1};case Mr:case Jh:case Jn:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case Zn:case bc:case Bn:return{byteLength:4,components:1};case $h:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $0(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
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
#endif`,Jg=`uniform sampler2D dfgLUT;
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
}`,$g=`
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
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
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fx=`float getShadowMask() {
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
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,s_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,o_=`#define DISTANCE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,y_=`#define PHONG
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
}`,v_=`#define PHONG
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
}`,M_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,b_=`#define TOON
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
}`,E_=`#define TOON
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
}`,T_=`uniform float size;
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
}`,w_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,C_=`uniform float rotation;
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
}`,I_=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:K0,alphahash_pars_fragment:Q0,alphamap_fragment:j0,alphamap_pars_fragment:tg,alphatest_fragment:eg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:sg,batching_pars_vertex:rg,batching_vertex:og,begin_vertex:ag,beginnormal_vertex:cg,bsdfs:lg,iridescence_fragment:hg,bumpmap_pars_fragment:ug,clipping_planes_fragment:dg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:xg,color_pars_vertex:_g,color_vertex:yg,common:vg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:bg,displacementmap_vertex:Eg,emissivemap_fragment:Tg,emissivemap_pars_fragment:wg,colorspace_fragment:Ag,colorspace_pars_fragment:Rg,envmap_fragment:Cg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:kg,envmap_vertex:Dg,fog_vertex:Ng,fog_pars_vertex:Ug,fog_fragment:Fg,fog_pars_fragment:Bg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:zg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:Zg,lights_physical_pars_fragment:Jg,lights_fragment_begin:$g,lights_fragment_maps:Kg,lights_fragment_end:Qg,lightprobes_pars_fragment:jg,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:sx,map_pars_fragment:rx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:cx,metalnessmap_pars_fragment:lx,morphinstance_vertex:hx,morphcolor_vertex:ux,morphnormal_vertex:dx,morphtarget_pars_vertex:fx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:_x,normal_vertex:yx,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Ex,opaque_fragment:Tx,packing:wx,premultiplied_alpha_fragment:Ax,project_vertex:Rx,dithering_fragment:Cx,dithering_pars_fragment:Ix,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Nx,shadowmap_vertex:Ux,shadowmask_pars_fragment:Fx,skinbase_vertex:Bx,skinning_pars_vertex:Ox,skinning_vertex:zx,skinnormal_vertex:Hx,specularmap_fragment:Gx,specularmap_pars_fragment:Vx,tonemapping_fragment:kx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:qx,uv_pars_fragment:Yx,uv_pars_vertex:Zx,uv_vertex:Jx,worldpos_vertex:$x,background_vert:Kx,background_frag:Qx,backgroundCube_vert:jx,backgroundCube_frag:t_,cube_vert:e_,cube_frag:n_,depth_vert:i_,depth_frag:s_,distance_vert:r_,distance_frag:o_,equirect_vert:a_,equirect_frag:c_,linedashed_vert:l_,linedashed_frag:h_,meshbasic_vert:u_,meshbasic_frag:d_,meshlambert_vert:f_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:x_,meshnormal_frag:__,meshphong_vert:y_,meshphong_frag:v_,meshphysical_vert:M_,meshphysical_frag:S_,meshtoon_vert:b_,meshtoon_frag:E_,points_vert:T_,points_frag:w_,shadow_vert:A_,shadow_frag:R_,sprite_vert:C_,sprite_frag:I_},vt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},fi={basic:{uniforms:gn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:gn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:gn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:gn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:gn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new pt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:gn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:gn([vt.points,vt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:gn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:gn([vt.common,vt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:gn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:gn([vt.sprite,vt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:gn([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:gn([vt.lights,vt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};fi.physical={uniforms:gn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var al={r:0,b:0,g:0},P_=new ue,Sp=new Yt;Sp.set(-1,0,0,0,1,0,0,0,1);function L_(i,t,e,n,s,r){let o=new pt(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let _=M.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(M){let w=!1,_=f(M);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===Io)?(l===void 0&&(l=new K(new Tn(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ms(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sp),l.material.toneMapped=re.getTransfer(_.colorSpace)!==xe,(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new K(new un(2,2),new on({name:"BackgroundMaterial",uniforms:Ms(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=re.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(al,iu(i)),e.buffers.color.setClear(al.r,al.g,al.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function D_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,N,O,L,H){let q=!1,W=u(I,L,O,N);r!==W&&(r=W,l(r.object)),q=f(I,L,O,H),q&&g(I,L,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(I,N,O,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,N,O,L){let H=L.wireframe===!0,q=n[N.id];q===void 0&&(q={},n[N.id]=q);let W=I.isInstancedMesh===!0?I.id:0,rt=q[W];rt===void 0&&(rt={},q[W]=rt);let Y=rt[O.id];Y===void 0&&(Y={},rt[O.id]=Y);let tt=Y[H];return tt===void 0&&(tt=d(c()),Y[H]=tt),tt}function d(I){let N=[],O=[],L=[];for(let H=0;H<e;H++)N[H]=0,O[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,O,L){let H=r.attributes,q=N.attributes,W=0,rt=O.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let st=H[Y],Dt=q[Y];if(Dt===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Dt=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Dt=I.instanceColor)),st===void 0||st.attribute!==Dt||Dt&&st.data!==Dt.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function g(I,N,O,L){let H={},q=N.attributes,W=0,rt=O.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let st=q[Y];st===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(st=I.instanceColor));let Dt={};Dt.attribute=st,st&&st.data&&(Dt.data=st.data),H[Y]=Dt,W++}r.attributes=H,r.attributesNum=W,r.index=L}function x(){let I=r.newAttributes;for(let N=0,O=I.length;N<O;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){let O=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;O[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),H[I]!==N&&(i.vertexAttribDivisor(I,N),H[I]=N)}function M(){let I=r.newAttributes,N=r.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==I[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function w(I,N,O,L,H,q,W){W===!0?i.vertexAttribIPointer(I,N,O,H,q):i.vertexAttribPointer(I,N,O,L,H,q)}function _(I,N,O,L){x();let H=L.attributes,q=O.getAttributes(),W=N.defaultAttributeValues;for(let rt in q){let Y=q[rt];if(Y.location>=0){let tt=H[rt];if(tt===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor)),tt!==void 0){let st=tt.normalized,Dt=tt.itemSize,Rt=t.get(tt);if(Rt===void 0)continue;let fe=Rt.buffer,ee=Rt.type,ce=Rt.bytesPerElement,$=ee===i.INT||ee===i.UNSIGNED_INT||tt.gpuType===bc;if(tt.isInterleavedBufferAttribute){let nt=tt.data,Mt=nt.stride,Wt=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Y.locationSize;Tt++)p(Y.location+Tt,nt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)m(Y.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Tt=0;Tt<Y.locationSize;Tt++)w(Y.location+Tt,Dt/Y.locationSize,ee,st,Mt*ce,(Wt+Dt/Y.locationSize*Tt)*ce,$)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)p(Y.location+nt,tt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let nt=0;nt<Y.locationSize;nt++)w(Y.location+nt,Dt/Y.locationSize,ee,st,Dt*ce,Dt/Y.locationSize*nt*ce,$)}}else if(W!==void 0){let st=W[rt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(Y.location,st);break;case 3:i.vertexAttrib3fv(Y.location,st);break;case 4:i.vertexAttrib4fv(Y.location,st);break;default:i.vertexAttrib1fv(Y.location,st)}}}}M()}function b(){T();for(let I in n){let N=n[I];for(let O in N){let L=N[O];for(let H in L){let q=L[H];for(let W in q)h(q[W].object),delete q[W];delete L[H]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let O in N){let L=N[O];for(let H in L){let q=L[H];for(let W in q)h(q[W].object),delete q[W];delete L[H]}}delete n[I.id]}function A(I){for(let N in n){let O=n[N];for(let L in O){let H=O[L];if(H[I.id]===void 0)continue;let q=H[I.id];for(let W in q)h(q[W].object),delete q[W];delete H[I.id]}}}function y(I){for(let N in n){let O=n[N],L=I.isInstancedMesh===!0?I.id:0,H=O[L];if(H!==void 0){for(let q in H){let W=H[q];for(let rt in W)h(W[rt].object),delete W[rt];delete H[q]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function T(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function N_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function U_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wn&&A!==Bn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,maxSamples:b,samples:S}}function F_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Wn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,w=M*4,_=p.clippingState||null;c.value=_,_=h(g,d,w,f);for(let b=0;b!==w;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==x;++w,_+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Tr=4,B_=6,O_=20,z_=256,zo=new yr,tp=new pt,du=null,fu=0,pu=0,mu=!1,H_=new P,Ss=new P,ll=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=H_}=r;du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(du,fu,pu),this._renderer.xr.enabled=mu,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Jn,format:On,colorSpace:jr,depthBuffer:!1},s=ep(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=G_(r)),this._blurMaterial=k_(r,t,e),this._ggxMaterial=V_(r,t,e)}return s}_compileMaterial(t){let e=new K(new ae,t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,s,r){let c=new $e(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tp),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new Tn,new Pe({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(tp),p=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):_===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let b=this._cubeSize;Er(s,_*b,w>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(x,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Er(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Tr?n-g+Tr:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Er(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,zo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Er(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,zo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Tr?s-this._lodMax+Tr:0),d=4*(this._cubeSize-h);Er(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(c,zo)}};function G_(i){let t=[],e=[],n=i,s=i-Tr+1+B_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,w=p>2?0:-1,_=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(_,f*d*p);for(let b=0;b<d;b++){let S=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?Ss.set(1,A,S):p===1?Ss.set(-S,1,-A):p===2?Ss.set(-S,A,1):p===3?Ss.set(-1,A,-S):p===4?Ss.set(-S,-1,A):Ss.set(S,A,-1),Ss.toArray(x,(p*d+b)*f)}}let m=new ae;m.setAttribute("position",new oe(g,f)),m.setAttribute("outputDirection",new oe(x,f)),e.push(new K(m,null)),n>Tr&&n--}return{lodMeshes:e,sizeLods:t}}function ep(i,t,e){let n=new En(i,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function V_(i,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function k_(i,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:O_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function np(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ip(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hl=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ui});r.uniforms.tEquirect.value=e;let o=new K(s,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=hn),new gc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function W_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===vc||f===Mc)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new hl(g.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===vc||f===Mc,x=f===Qi||f===vs;if(g||x){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===vc?d.mapping=Qi:f===Mc&&(d.mapping=vs),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function X_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("WebGLRenderer: "+n+" extension not supported."),s}}}function q_(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let w=0,_=M.length;w<_;w+=3){let b=M[w+0],S=M[w+1],A=M[w+2];d.push(b,S,S,A,A,b)}}else{let M=g.array;x=g.version;for(let w=0,_=M.length/3-1;w<_;w+=3){let b=w+0,S=w+1,A=w+2;d.push(b,S,S,A,A,b)}}let m=new(g.count>=65535?co:ao)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Y_(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Z_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J_(i,t,e){let n=new WeakMap,s=new De;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let _=a.attributes.position.count*w,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*b*4*u),A=new io(S,_,b,u);A.type=Bn,A.needsUpdate=!0;let y=w*4;for(let R=0;R<u;R++){let I=m[R],N=p[R],O=M[R],L=_*b*4*R;for(let H=0;H<I.count;H++){let q=H*y;f===!0&&(s.fromBufferAttribute(I,H),S[L+q+0]=s.x,S[L+q+1]=s.y,S[L+q+2]=s.z,S[L+q+3]=0),g===!0&&(s.fromBufferAttribute(N,H),S[L+q+4]=s.x,S[L+q+5]=s.y,S[L+q+6]=s.z,S[L+q+7]=0),x===!0&&(s.fromBufferAttribute(O,H),S[L+q+8]=s.x,S[L+q+9]=s.y,S[L+q+10]=s.z,S[L+q+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ct(_,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $_(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var K_={[Hh]:"LINEAR_TONE_MAPPING",[Gh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[kh]:"ACES_FILMIC_TONE_MAPPING",[Xh]:"AGX_TONE_MAPPING",[qh]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function Q_(i,t,e,n,s,r){let o=new En(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ae;l.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Kt([0,2,0,0,2,0],2));let h=new ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new K(l,h),d=new yr(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,M=[],w=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),c!==null&&c.setSize(_,b);for(let S=0;S<M.length;S++){let A=M[S];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){M=_,w=M.length>0&&M[0].isRenderPass===!0;let b=o.width,S=o.height;M.length>0&&a===null&&(a=new En(b,S,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),c=new En(b,S,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let y=M[A];y.setSize&&y.setSize(b,S)}},this.begin=function(_,b){if(x||_.toneMapping===Yn&&M.length===0)return!1;if(p=b,b!==null){let S=b.width,A=b.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return w===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Yn,!0},this.hasRenderPass=function(){return w},this.end=function(_,b){_.toneMapping=m,x=!0;let S=o,A=a;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(_,A,S,b),T.needsSwap!==!1&&(S=A,A=A===a?c:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},re.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let y=K_[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var bp=new yn,_u=new Wi(1,1),Ep=new io,Tp=new Xa,wp=new uo,sp=[],rp=[],op=new Float32Array(16),ap=new Float32Array(9),cp=new Float32Array(4);function Ar(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=rp[t];e===void 0&&(e=new Int32Array(t),rp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function iy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),je(e,n)}}function sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;ap.set(n),i.uniformMatrix3fv(this.addr,!1,ap),je(e,n)}}function ry(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;op.set(n),i.uniformMatrix4fv(this.addr,!1,op),je(e,n)}}function oy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function hy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function py(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_u.compareFunction=e.isReversedDepthBuffer()?ol:rl,r=_u):r=bp,e.setTexture2D(t||r,s)}function my(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tp,s)}function gy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wp,s)}function xy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ep,s)}function _y(i){switch(i){case 5126:return j_;case 35664:return ty;case 35665:return ey;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return oy;case 35667:case 35671:return ay;case 35668:case 35672:return cy;case 35669:case 35673:return ly;case 5125:return hy;case 36294:return uy;case 36295:return dy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return xy}}function yy(i,t){i.uniform1fv(this.addr,t)}function vy(i,t){let e=Ar(t,this.size,2);i.uniform2fv(this.addr,e)}function My(i,t){let e=Ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Sy(i,t){let e=Ar(t,this.size,4);i.uniform4fv(this.addr,e)}function by(i,t){let e=Ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ey(i,t){let e=Ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ty(i,t){let e=Ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wy(i,t){i.uniform1iv(this.addr,t)}function Ay(i,t){i.uniform2iv(this.addr,t)}function Ry(i,t){i.uniform3iv(this.addr,t)}function Cy(i,t){i.uniform4iv(this.addr,t)}function Iy(i,t){i.uniform1uiv(this.addr,t)}function Py(i,t){i.uniform2uiv(this.addr,t)}function Ly(i,t){i.uniform3uiv(this.addr,t)}function Dy(i,t){i.uniform4uiv(this.addr,t)}function Ny(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_u:o=bp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Uy(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tp,r[o])}function Fy(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wp,r[o])}function By(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ep,r[o])}function Oy(i){switch(i){case 5126:return yy;case 35664:return vy;case 35665:return My;case 35666:return Sy;case 35674:return by;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return wy;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Iy;case 36294:return Py;case 36295:return Ly;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}var yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_y(e.type)}},vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Oy(e.type)}},Mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;function lp(i,t){i.seq.push(t),i.map[t.id]=t}function zy(i,t,e){let n=i.name,s=n.length;for(gu.lastIndex=0;;){let r=gu.exec(n),o=gu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lp(e,l===void 0?new yu(a,i,t):new vu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mu(a),lp(e,u)),e=u}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);zy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hy=37297,Gy=0;function Vy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var up=new Yt;function ky(i){re._getMatrix(up,re.workingColorSpace,i);let t=`mat3( ${up.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case to:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Vy(i.getShaderSource(t),a)}else return r}function Wy(i,t){let e=ky(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Xy={[Hh]:"Linear",[Gh]:"Reinhard",[Vh]:"Cineon",[kh]:"ACESFilmic",[Xh]:"AgX",[qh]:"Neutral",[Wh]:"Custom"};function qy(i,t){let e=Xy[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cl=new P;function Yy(){re.getLuminanceCoefficients(cl);let i=cl.x.toFixed(4),t=cl.y.toFixed(4),e=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function Jy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $y(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Go(i){return i!==""}function fp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(i){return i.replace(Ky,jy)}var Qy=new Map;function jy(i,t){let e=te[t];if(e===void 0){let n=Qy.get(t);if(n!==void 0)e=te[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Su(e)}var tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(i){return i.replace(tv,ev)}function ev(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var nv={[Co]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function iv(i){return nv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sv={[Qi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function rv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ov={[vs]:"ENVMAP_MODE_REFRACTION"};function av(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ov[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cv={[yc]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[If]:"ENVMAP_BLENDING_ADD"};function lv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cv[i.combine]||"ENVMAP_BLENDING_NONE"}function hv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function uv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=iv(e),l=rv(e),h=av(e),u=lv(e),d=hv(e),f=Zy(e),g=Jy(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),p.length>0&&(p+=`
`)):(m=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),p=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?te.tonemapping_pars_fragment:"",e.toneMapping!==Yn?qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Wy("linearToOutputTexel",e.outputColorSpace),Yy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Go).join(`
`)),o=Su(o),o=fp(o,e),o=pp(o,e),a=Su(a),a=fp(a,e),a=pp(a,e),o=mp(o),a=mp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+o,_=M+p+a,b=hp(s,s.VERTEX_SHADER,w),S=hp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(S)||"",H=N.trim(),q=O.trim(),W=L.trim(),rt=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let tt=dp(s,b,"vertex"),st=dp(s,S,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+tt+`
`+st)}else H!==""?zt("WebGLProgram: Program Info Log:",H):(q===""||W==="")&&(Y=!1);Y&&(I.diagnostics={runnable:rt,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(b),s.deleteShader(S),y=new wr(s,x),T=$y(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Hy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var dv=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Eu(t),e.set(t,n)),n}},Eu=class{constructor(t){this.id=dv++,this.code=t,this.usedTimes=0}};function fv(i){return i===es||i===Fo||i===Bo}function pv(i,t,e,n,s,r){let o=new so,a=new bu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,T,R,I,N,O){let L=I.fog,H=N.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,rt=t.get(y.envMap||q,W),Y=rt&&rt.mapping===Io?rt.image.height:null,tt=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&zt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=st!==void 0?st.length:0,Rt=0;H.morphAttributes.position!==void 0&&(Rt=1),H.morphAttributes.normal!==void 0&&(Rt=2),H.morphAttributes.color!==void 0&&(Rt=3);let fe,ee,ce,$;if(tt){let we=fi[tt];fe=we.vertexShader,ee=we.fragmentShader}else{fe=y.vertexShader,ee=y.fragmentShader;let we=a.getVertexShaderStage(y),me=a.getFragmentShaderStage(y);a.update(y,we,me),ce=we.id,$=me.id}let nt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Wt=N.isInstancedMesh===!0,Tt=N.isBatchedMesh===!0,Xt=!!y.map,ye=!!y.matcap,it=!!rt,at=!!y.aoMap,lt=!!y.lightMap,ht=!!y.bumpMap&&y.wireframe===!1,ft=!!y.normalMap,Ht=!!y.displacementMap,Ot=!!y.emissiveMap,qt=!!y.metalnessMap,Jt=!!y.roughnessMap,D=y.anisotropy>0,pe=y.clearcoat>0,ne=y.dispersion>0,C=y.retroreflectivity>0,v=y.iridescence>0,z=y.sheen>0,k=y.transmission>0,Z=D&&!!y.anisotropyMap,ut=pe&&!!y.clearcoatMap,dt=pe&&!!y.clearcoatNormalMap,J=pe&&!!y.clearcoatRoughnessMap,et=v&&!!y.iridescenceMap,mt=v&&!!y.iridescenceThicknessMap,Nt=z&&!!y.sheenColorMap,yt=z&&!!y.sheenRoughnessMap,gt=!!y.specularMap,Ut=!!y.specularColorMap,Gt=!!y.specularIntensityMap,$t=k&&!!y.transmissionMap,F=k&&!!y.thicknessMap,xt=!!y.gradientMap,j=!!y.alphaMap,_t=y.alphaTest>0,Et=!!y.alphaHash,ot=!!y.extensions,Ft=Yn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let Pt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:fe,fragmentShader:ee,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&N._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&N.instanceColor!==null,instancingMorph:Wt&&N.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:ye,envMap:it,envMapMode:it&&rt.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:lt,bumpMap:ht,normalMap:ft,displacementMap:Ht,emissiveMap:Ot,normalMapObjectSpace:ft&&y.normalMapType===Df,normalMapTangentSpace:ft&&y.normalMapType===Oo,packedNormalMap:ft&&y.normalMapType===Oo&&fv(y.normalMap.format),metalnessMap:qt,roughnessMap:Jt,anisotropy:D,anisotropyMap:Z,clearcoat:pe,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:J,dispersion:ne,retroreflection:C,iridescence:v,iridescenceMap:et,iridescenceThicknessMap:mt,sheen:z,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:gt,specularColorMap:Ut,specularIntensityMap:Gt,transmission:k,transmissionMap:$t,thicknessMap:F,gradientMap:xt,opaque:y.transparent===!1&&y.blending===qn&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:Et,combine:y.combine,mapUv:Xt&&g(y.map.channel),aoMapUv:at&&g(y.aoMap.channel),lightMapUv:lt&&g(y.lightMap.channel),bumpMapUv:ht&&g(y.bumpMap.channel),normalMapUv:ft&&g(y.normalMap.channel),displacementMapUv:Ht&&g(y.displacementMap.channel),emissiveMapUv:Ot&&g(y.emissiveMap.channel),metalnessMapUv:qt&&g(y.metalnessMap.channel),roughnessMapUv:Jt&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:ut&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(y.sheenRoughnessMap.channel),specularMapUv:gt&&g(y.specularMap.channel),specularColorMapUv:Ut&&g(y.specularColorMap.channel),specularIntensityMapUv:Gt&&g(y.specularIntensityMap.channel),transmissionMapUv:$t&&g(y.transmissionMap.channel),thicknessMapUv:F&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ft||D),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Xt||j),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Rt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:Ot&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Te,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let T=f[y.type],R;if(T){let I=fi[T];R=Kf.clone(I.uniforms)}else R=y.uniforms;return R}function _(y,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new uv(i,T,y,s),l.push(R),h.set(T,R)),R}function b(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:A}}function mv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _p(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=p),t++,M}function c(d,f,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let w=a(d,f,g,x,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function l(d,f,g,x,m,p){let M=a(d,f,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||gv),n.length>1&&n.sort(f||xp),s.length>1&&s.sort(f||xp)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function xv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _p,i.set(n,[o])):s>=r.length?(o=new _p,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _v(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new pt};break;case"SpotLight":e={position:new P,direction:new P,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function yv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vv=0;function Mv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sv(i){let t=new _v,e=yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new ue,o=new ue;function a(l){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,w=0,_=0,b=0,S=0,A=0,y=0,T=0,R=0;l.sort(Mv);for(let N=0,O=l.length;N<O;N++){let L=l[N],H=L.color,q=L.intensity,W=L.distance,rt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===es?rt=L.shadow.map.texture:rt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*q,u+=H.g*q,d+=H.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);R++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,st=e.get(L);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=st,n.sunShadowMap[g]=rt;let Dt=tt.getViewportCount();for(let Rt=0;Rt<Dt;Rt++)n.sunShadowMatrix[x+Rt]=tt.getMatrix(Rt),n.sunShadowCascade[x+Rt]=tt._cascadeData[Rt];x+=Dt,g++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,st=e.get(L);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,n.directionalShadow[m]=st,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=Y,m++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(q),Y.distance=W,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[M]=Y;let tt=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,tt.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[M]=tt.matrix,L.castShadow){let st=e.get(L);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,n.spotShadow[M]=st,n.spotShadowMap[M]=rt,A++}M++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(H).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Y,w++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let tt=L.shadow,st=e.get(L);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,st.shadowCameraNear=tt.camera.near,st.shadowCameraFar=tt.camera.far,n.pointShadow[p]=st,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=L.shadow.matrix,S++}n.point[p]=Y,p++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[_]=Y,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==y||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=y,I.numLightProbes=R,n.version=vv++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){let _=l[M];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(_.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function yp(i){let t=new Sv(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function bv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yp(i),t.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
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
}`,wv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Av=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],vp=new ue,Ho=new P,xu=new P;function Rv(i,t,e){let n=new dr,s=new ct,r=new ct,o=new De,a=new sc,c=new rc,l={},h=e.maxTextureSize,u={[$i]:dn,[dn]:$i,[Te]:Te},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Ev,fragmentShader:Tv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new K(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let p=this.type;this.render=function(S,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===hf&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Co);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ui),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==this.type;O&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=S.length;L<H;L++){let q=S[L],W=q.shadow;if(W===void 0){zt("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let rt=W.getFrameExtents();s.multiply(rt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,W.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===vr){if(q.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new En(s.x,s.y,{format:es,type:Jn,minFilter:hn,magFilter:hn,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Wi(s.x,s.y,Bn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=ai,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye}else q.isPointLight?(W.map=new hl(s.x),W.map.depthTexture=new Ja(s.x,Zn)):(W.map=new En(s.x,s.y),W.map.depthTexture=new Wi(s.x,s.y,Zn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=ai,this.type===Co?(W.map.depthTexture.compareFunction=Y?ol:rl,W.map.depthTexture.minFilter=hn,W.map.depthTexture.magFilter=hn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let tt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,y);for(let st=0;st<tt;st++){let Dt=W.getCamera(st);if(q.isPointLight){let Rt=W.camera,fe=W.matrix,ee=q.distance||Rt.far;ee!==Rt.far&&(Rt.far=ee,Rt.updateProjectionMatrix()),Ho.setFromMatrixPosition(q.matrixWorld),Rt.position.copy(Ho),xu.copy(Rt.position),xu.add(wv[st]),Rt.up.copy(Av[st]),Rt.lookAt(xu),Rt.updateMatrixWorld(),fe.makeTranslation(-Ho.x,-Ho.y,-Ho.z),vp.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(vp,Rt.coordinateSystem,Rt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,st),i.clear();else{st===0&&(i.setRenderTarget(W.map),i.clear());let Rt=W.getViewport(st);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),N.viewport(o)}n=W.getFrustum(st),_(A,y,Dt,q,this.type)}W.isPointLightShadow!==!0&&this.type===vr&&M(W,y),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,I)};function M(S,A){let y=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new En(s.x,s.y,{format:es,type:Jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,f,x,null)}function w(S,A,y,T){let R=null,I=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,O=A.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let H=L[O];H===void 0&&(H=R.clone(),L[O]=H,A.addEventListener("dispose",b)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,T===vr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=y}return R}function _(S,A,y,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===vr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let O=t.update(S),L=S.material;if(Array.isArray(L)){let H=O.groups;for(let q=0,W=H.length;q<W;q++){let rt=H[q],Y=L[rt.materialIndex];if(Y&&Y.visible){let tt=w(S,Y,T,R);S.onBeforeShadow(i,S,A,y,O,tt,rt),i.renderBufferDirect(y,null,O,tt,S,rt),S.onAfterShadow(i,S,A,y,O,tt,rt)}}}else if(L.visible){let H=w(S,L,T,R);S.onBeforeShadow(i,S,A,y,O,H,null),i.renderBufferDirect(y,null,O,H,S,null),S.onAfterShadow(i,S,A,y,O,H,null)}}let N=S.children;for(let O=0,L=N.length;O<L;O++)_(N[O],A,y,T,R)}function b(S){S.target.removeEventListener("dispose",b);for(let y in l){let T=l[y],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Cv(i,t){function e(){let F=!1,xt=new De,j=null,_t=new De(0,0,0,0);return{setMask:function(Et){j!==Et&&!F&&(i.colorMask(Et,Et,Et,Et),j=Et)},setLocked:function(Et){F=Et},setClear:function(Et,ot,Ft,Pt,we){we===!0&&(Et*=Pt,ot*=Pt,Ft*=Pt),xt.set(Et,ot,Ft,Pt),_t.equals(xt)===!1&&(i.clearColor(Et,ot,Ft,Pt),_t.copy(xt))},reset:function(){F=!1,j=null,_t.set(-1,0,0,0)}}}function n(){let F=!1,xt=!1,j=null,_t=null,Et=null;return{setReversed:function(ot){if(xt!==ot){let Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;let Pt=Et;Et=null,this.setClear(Pt)}},getReversed:function(){return xt},setTest:function(ot){ot?nt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ot){j!==ot&&!F&&(i.depthMask(ot),j=ot)},setFunc:function(ot){if(xt&&(ot=Wf[ot]),_t!==ot){switch(ot){case Da:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ot}},setLocked:function(ot){F=ot},setClear:function(ot){Et!==ot&&(Et=ot,xt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){F=!1,j=null,_t=null,Et=null,xt=!1}}}function s(){let F=!1,xt=null,j=null,_t=null,Et=null,ot=null,Ft=null,Pt=null,we=null;return{setTest:function(me){F||(me?nt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(me){xt!==me&&!F&&(i.stencilMask(me),xt=me)},setFunc:function(me,Hn,ei){(j!==me||_t!==Hn||Et!==ei)&&(i.stencilFunc(me,Hn,ei),j=me,_t=Hn,Et=ei)},setOp:function(me,Hn,ei){(ot!==me||Ft!==Hn||Pt!==ei)&&(i.stencilOp(me,Hn,ei),ot=me,Ft=Hn,Pt=ei)},setLocked:function(me){F=me},setClear:function(me){we!==me&&(i.clearStencil(me),we=me)},reset:function(){F=!1,xt=null,j=null,_t=null,Et=null,ot=null,Ft=null,Pt=null,we=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,w=null,_=null,b=null,S=null,A=null,y=new pt(0,0,0),T=0,R=!1,I=null,N=null,O=null,L=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,rt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=rt>=2);let tt=null,st={},Dt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),fe=new De().fromArray(Dt),ee=new De().fromArray(Rt);function ce(F,xt,j,_t){let Et=new Uint8Array(4),ot=i.createTexture();i.bindTexture(F,ot),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<j;Ft++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(xt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ot}let $={};$[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(ir),ht(!1),ft(Uh),nt(i.CULL_FACE),at(ui);function nt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Wt(F,xt){return d[F]!==xt?(i.bindFramebuffer(F,xt),d[F]=xt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Tt(F,xt){let j=g,_t=!1;if(F){j=f.get(xt),j===void 0&&(j=[],f.set(xt,j));let Et=F.textures;if(j.length!==Et.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ft=Et.length;ot<Ft;ot++)j[ot]=i.COLOR_ATTACHMENT0+ot;j.length=Et.length,_t=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,_t=!0);_t&&i.drawBuffers(j)}function Xt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let ye={[ys]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};ye[pf]=i.MIN,ye[mf]=i.MAX;let it={[gf]:i.ZERO,[xf]:i.ONE,[_f]:i.SRC_COLOR,[Oh]:i.SRC_ALPHA,[Ef]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[zh]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[Mf]:i.ONE_MINUS_DST_ALPHA,[Tf]:i.CONSTANT_COLOR,[wf]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function at(F,xt,j,_t,Et,ot,Ft,Pt,we,me){if(F===ui){m===!0&&(Mt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),F!==uf){if(F!==p||me!==R){if((M!==ys||b!==ys)&&(i.blendEquation(i.FUNC_ADD),M=ys,b=ys),me)switch(F){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ki:i.blendFunc(i.ONE,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",F);break}else switch(F){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fh:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",F);break}w=null,_=null,S=null,A=null,y.set(0,0,0),T=0,p=F,R=me}return}Et=Et||xt,ot=ot||j,Ft=Ft||_t,(xt!==M||Et!==b)&&(i.blendEquationSeparate(ye[xt],ye[Et]),M=xt,b=Et),(j!==w||_t!==_||ot!==S||Ft!==A)&&(i.blendFuncSeparate(it[j],it[_t],it[ot],it[Ft]),w=j,_=_t,S=ot,A=Ft),(Pt.equals(y)===!1||we!==T)&&(i.blendColor(Pt.r,Pt.g,Pt.b,we),y.copy(Pt),T=we),p=F,R=!1}function lt(F,xt){F.side===Te?Mt(i.CULL_FACE):nt(i.CULL_FACE);let j=F.side===dn;xt&&(j=!j),ht(j),F.blending===qn&&F.transparent===!1?at(ui):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let _t=F.stencilWrite;a.setTest(_t),_t&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function ft(F){F!==cf?(nt(i.CULL_FACE),F!==N&&(F===Uh?i.cullFace(i.BACK):F===lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),N=F}function Ht(F){F!==O&&(W&&i.lineWidth(F),O=F)}function Ot(F,xt,j){F?(nt(i.POLYGON_OFFSET_FILL),(L!==xt||H!==j)&&(L=xt,H=j,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,j))):Mt(i.POLYGON_OFFSET_FILL)}function qt(F){F?nt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Jt(F){F===void 0&&(F=i.TEXTURE0+q-1),tt!==F&&(i.activeTexture(F),tt=F)}function D(F,xt,j){j===void 0&&(tt===null?j=i.TEXTURE0+q-1:j=tt);let _t=st[j];_t===void 0&&(_t={type:void 0,texture:void 0},st[j]=_t),(_t.type!==F||_t.texture!==xt)&&(tt!==j&&(i.activeTexture(j),tt=j),i.bindTexture(F,xt||$[F]),_t.type=F,_t.texture=xt)}function pe(){let F=st[tt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(F){kt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){kt("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){kt("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){kt("WebGLState:",F)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(F){kt("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){kt("WebGLState:",F)}}function ut(){try{i.texStorage2D(...arguments)}catch(F){kt("WebGLState:",F)}}function dt(){try{i.texStorage3D(...arguments)}catch(F){kt("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){kt("WebGLState:",F)}}function et(){try{i.texImage3D(...arguments)}catch(F){kt("WebGLState:",F)}}function mt(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Nt(F,xt){u[F]!==xt&&(i.pixelStorei(F,xt),u[F]=xt)}function yt(F){fe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),fe.copy(F))}function gt(F){ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ut(F,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let _t=j.get(F);_t===void 0&&(_t=i.getUniformBlockIndex(xt,F.name),j.set(F,_t))}function Gt(F,xt){let _t=l.get(xt).get(F);c.get(xt)!==_t&&(i.uniformBlockBinding(xt,_t,F.__bindingPointIndex),c.set(xt,_t))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},tt=null,st={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,w=null,_=null,b=null,S=null,A=null,y=new pt(0,0,0),T=0,R=!1,I=null,N=null,O=null,L=null,H=null,fe.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:Mt,bindFramebuffer:Wt,drawBuffers:Tt,useProgram:Xt,setBlending:at,setMaterial:lt,setFlipSided:ht,setCullFace:ft,setLineWidth:Ht,setPolygonOffset:Ot,setScissorTest:qt,activeTexture:Jt,bindTexture:D,unbindTexture:pe,compressedTexImage2D:ne,compressedTexImage3D:C,texImage2D:J,texImage3D:et,pixelStorei:Nt,getParameter:mt,updateUBOMapping:Ut,uniformBlockBinding:Gt,texStorage2D:ut,texStorage3D:dt,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:yt,viewport:gt,reset:$t}}function Iv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return g?new OffscreenCanvas(C,v):eo("canvas")}function m(C,v,z){let k=1,Z=ne(C);if((Z.width>z||Z.height>z)&&(k=z/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ut=Math.floor(k*Z.width),dt=Math.floor(k*Z.height);d===void 0&&(d=x(ut,dt));let J=v?x(ut,dt):d;return J.width=ut,J.height=dt,J.getContext("2d").drawImage(C,0,0,ut,dt),zt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ut+"x"+dt+")."),J}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,z,k,Z,ut=!1){if(C!==null){if(i[C]!==void 0)return i[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;k&&(dt=t.get("EXT_texture_norm16"),dt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),z===i.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),v===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),z===i.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),z===i.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let et=ut?to:re.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=et===xe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),z===i.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(C,v){let z;return C?v===null||v===Zn||v===Sr?z=i.DEPTH24_STENCIL8:v===Bn?z=i.DEPTH32F_STENCIL8:v===Mr&&(z=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===Sr?z=i.DEPTH_COMPONENT24:v===Bn?z=i.DEPTH_COMPONENT32F:v===Mr&&(z=i.DEPTH_COMPONENT16),z}function S(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),I(v)}function T(C){let v=n.get(C);if(v.__webglInit===void 0)return;let z=C.source,k=f.get(z);if(k){let Z=k[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(k).length===0&&f.delete(z)}n.remove(C)}function R(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let z=C.source,k=f.get(z);delete k[v.__cacheKey],o.memory.textures--}function I(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let Z=0;Z<v.__webglFramebuffer[k].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[k][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)i.deleteFramebuffer(v.__webglFramebuffer[k]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=C.textures;for(let k=0,Z=z.length;k<Z;k++){let ut=n.get(z[k]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(z[k])}n.remove(C)}let N=0;function O(){N=0}function L(){return N}function H(C){N=C}function q(){let C=N;return C>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function W(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function rt(C,v){let z=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let k=C.image;if(k===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(z,C,v);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function Y(C,v){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Mt(z,C,v);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function tt(C,v){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Mt(z,C,v);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function st(C,v){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Wt(z,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let Dt={[sr]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},Rt={[Ye]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[Po]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Sc]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},fe={[Uf]:i.NEVER,[Hf]:i.ALWAYS,[Ff]:i.LESS,[rl]:i.LEQUAL,[Bf]:i.EQUAL,[ol]:i.GEQUAL,[Of]:i.GREATER,[zf]:i.NOTEQUAL};function ee(C,v){if(v.type===Bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===Sc||v.magFilter===Po||v.magFilter===ji||v.minFilter===hn||v.minFilter===Sc||v.minFilter===Po||v.minFilter===ji)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Dt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Dt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Dt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Rt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Rt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ye||v.minFilter!==Po&&v.minFilter!==ji||v.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ce(C,v){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let k=v.source,Z=f.get(k);Z===void 0&&(Z={},f.set(k,Z));let ut=W(v);if(ut!==C.__cacheKey){Z[ut]===void 0&&(Z[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[ut].usedTimes++;let dt=Z[C.__cacheKey];dt!==void 0&&(Z[C.__cacheKey].usedTimes--,dt.usedTimes===0&&R(v)),C.__cacheKey=ut,C.__webglTexture=Z[ut].texture}return z}function $(C,v,z){return Math.floor(Math.floor(C/z)/v)}function nt(C,v,z,k){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,k,v.data);else{ut.sort((Nt,yt)=>Nt.start-yt.start);let dt=0;for(let Nt=1;Nt<ut.length;Nt++){let yt=ut[dt],gt=ut[Nt],Ut=yt.start+yt.count,Gt=$(gt.start,v.width,4),$t=$(yt.start,v.width,4);gt.start<=Ut+1&&Gt===$t&&$(gt.start+gt.count-1,v.width,4)===Gt?yt.count=Math.max(yt.count,gt.start+gt.count-yt.start):(++dt,ut[dt]=gt)}ut.length=dt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Nt=0,yt=ut.length;Nt<yt;Nt++){let gt=ut[Nt],Ut=Math.floor(gt.start/4),Gt=Math.ceil(gt.count/4),$t=Ut%v.width,F=Math.floor(Ut/v.width),xt=Gt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,$t,F,xt,j,z,k,v.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function Mt(C,v,z){let k=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=i.TEXTURE_3D);let Z=ce(C,v),ut=v.source;e.bindTexture(k,C.__webglTexture,i.TEXTURE0+z);let dt=n.get(ut);if(ut.version!==dt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let j=re.getPrimaries(re.workingColorSpace),_t=v.colorSpace===Ci?null:re.getPrimaries(v.colorSpace),Et=v.colorSpace===Ci||j===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let et=m(v.image,!1,s.maxTextureSize);et=pe(v,et);let mt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),yt=_(v.internalFormat,mt,Nt,v.normalized,v.colorSpace,v.isVideoTexture);ee(k,v);let gt,Ut=v.mipmaps,Gt=v.isVideoTexture!==!0,$t=dt.__version===void 0||Z===!0,F=ut.dataReady,xt=S(v,et);if(v.isDepthTexture)yt=b(v.format===ts,v.type),$t&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,yt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,yt,et.width,et.height,0,mt,Nt,null));else if(v.isDataTexture)if(Ut.length>0){Gt&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ut[0].width,Ut[0].height);for(let j=0,_t=Ut.length;j<_t;j++)gt=Ut[j],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,j,yt,gt.width,gt.height,0,mt,Nt,gt.data);v.generateMipmaps=!1}else Gt?($t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,et.width,et.height),F&&nt(v,et,mt,Nt)):e.texImage2D(i.TEXTURE_2D,0,yt,et.width,et.height,0,mt,Nt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Gt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,Ut[0].width,Ut[0].height,et.depth);for(let j=0,_t=Ut.length;j<_t;j++)if(gt=Ut[j],v.format!==On)if(mt!==null)if(Gt){if(F)if(v.layerUpdates.size>0){let Et=ou(gt.width,gt.height,v.format,v.type);for(let ot of v.layerUpdates){let Ft=gt.data.subarray(ot*Et/gt.data.BYTES_PER_ELEMENT,(ot+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ot,gt.width,gt.height,1,mt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,yt,gt.width,gt.height,et.depth,0,gt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,et.depth,mt,Nt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,yt,gt.width,gt.height,et.depth,0,mt,Nt,gt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Gt&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ut[0].width,Ut[0].height);for(let j=0,_t=Ut.length;j<_t;j++)gt=Ut[j],v.format!==On?mt!==null?Gt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,yt,gt.width,gt.height,0,gt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,j,yt,gt.width,gt.height,0,mt,Nt,gt.data)}else if(v.isDataArrayTexture)if(Gt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,et.width,et.height,et.depth),F)if(v.layerUpdates.size>0){let j=ou(et.width,et.height,v.format,v.type);for(let _t of v.layerUpdates){let Et=et.data.subarray(_t*j/et.data.BYTES_PER_ELEMENT,(_t+1)*j/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,et.width,et.height,1,mt,Nt,Et)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Nt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,et.width,et.height,et.depth,0,mt,Nt,et.data);else if(v.isData3DTexture)Gt?($t&&e.texStorage3D(i.TEXTURE_3D,xt,yt,et.width,et.height,et.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Nt,et.data)):e.texImage3D(i.TEXTURE_3D,0,yt,et.width,et.height,et.depth,0,mt,Nt,et.data);else if(v.isFramebufferTexture){if($t)if(Gt)e.texStorage2D(i.TEXTURE_2D,xt,yt,et.width,et.height);else{let j=et.width,_t=et.height;for(let Et=0;Et<xt;Et++)e.texImage2D(i.TEXTURE_2D,Et,yt,j,_t,0,mt,Nt,null),j>>=1,_t>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),et.parentNode!==j){j.appendChild(et),u.add(v),j.onpaint=_t=>{let Et=_t.changedElements;for(let ot of u)Et.includes(ot.image)&&(ot.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let Et=i.RGBA,ot=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ot,Ft,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Gt&&$t){let j=ne(Ut[0]);e.texStorage2D(i.TEXTURE_2D,xt,yt,j.width,j.height)}for(let j=0,_t=Ut.length;j<_t;j++)gt=Ut[j],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt,Nt,gt):e.texImage2D(i.TEXTURE_2D,j,yt,mt,Nt,gt);v.generateMipmaps=!1}else if(Gt){if($t){let j=ne(et);e.texStorage2D(i.TEXTURE_2D,xt,yt,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Nt,et)}else e.texImage2D(i.TEXTURE_2D,0,yt,mt,Nt,et);p(v)&&M(k),dt.__version=ut.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Wt(C,v,z){if(v.image.length!==6)return;let k=ce(C,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let ut=n.get(Z);if(Z.version!==ut.__version||k===!0){e.activeTexture(i.TEXTURE0+z);let dt=re.getPrimaries(re.workingColorSpace),J=v.colorSpace===Ci?null:re.getPrimaries(v.colorSpace),et=v.colorSpace===Ci||dt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let mt=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let ot=0;ot<6;ot++)!mt&&!Nt?yt[ot]=m(v.image[ot],!0,s.maxCubemapSize):yt[ot]=Nt?v.image[ot].image:v.image[ot],yt[ot]=pe(v,yt[ot]);let gt=yt[0],Ut=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type),$t=_(v.internalFormat,Ut,Gt,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,xt=ut.__version===void 0||k===!0,j=Z.dataReady,_t=S(v,gt);ee(i.TEXTURE_CUBE_MAP,v);let Et;if(mt){F&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,gt.width,gt.height);for(let ot=0;ot<6;ot++){Et=yt[ot].mipmaps;for(let Ft=0;Ft<Et.length;Ft++){let Pt=Et[Ft];v.format!==On?Ut!==null?F?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,Pt.width,Pt.height,Ut,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,$t,Pt.width,Pt.height,0,Pt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,Pt.width,Pt.height,Ut,Gt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,$t,Pt.width,Pt.height,0,Ut,Gt,Pt.data)}}}else{if(Et=v.mipmaps,F&&xt){Et.length>0&&_t++;let ot=ne(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Nt){F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,yt[ot].width,yt[ot].height,Ut,Gt,yt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,yt[ot].width,yt[ot].height,0,Ut,Gt,yt[ot].data);for(let Ft=0;Ft<Et.length;Ft++){let we=Et[Ft].image[ot].image;F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,we.width,we.height,Ut,Gt,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,$t,we.width,we.height,0,Ut,Gt,we.data)}}else{F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ut,Gt,yt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,Ut,Gt,yt[ot]);for(let Ft=0;Ft<Et.length;Ft++){let Pt=Et[Ft];F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,Ut,Gt,Pt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,$t,Ut,Gt,Pt.image[ot])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),ut.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Tt(C,v,z,k,Z,ut){let dt=r.convert(z.format,z.colorSpace),J=r.convert(z.type),et=_(z.internalFormat,dt,J,z.normalized,z.colorSpace),mt=n.get(v),Nt=n.get(z);if(Nt.__renderTarget=v,!mt.__hasExternalTextures){let yt=Math.max(1,v.width>>ut),gt=Math.max(1,v.height>>ut);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ut,et,yt,gt,v.depth,0,dt,J,null):e.texImage2D(Z,ut,et,yt,gt,0,dt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Jt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Z,Nt.__webglTexture,0,qt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Z,Nt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let k=v.depthTexture,Z=k&&k.isDepthTexture?k.type:null,ut=b(v.stencilBuffer,Z),dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),ut,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,C)}else{let k=v.textures;for(let Z=0;Z<k.length;Z++){let ut=k[Z],dt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),et=_(ut.internalFormat,dt,J,ut.normalized,ut.colorSpace);Jt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),et,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(C,v,z){let k=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v.depthTexture);let mt=r.convert(v.depthTexture.format),Nt=r.convert(v.depthTexture.type),yt;v.depthTexture.format===ai?yt=i.DEPTH_COMPONENT24:v.depthTexture.format===ts&&(yt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,yt,v.width,v.height,0,mt,Nt,null)}}else rt(v.depthTexture,0);let ut=Z.__webglTexture,dt=qt(v),J=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,et=v.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ai)Jt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,ut,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,et,J,ut,0);else if(v.depthTexture.format===ts)Jt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,ut,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,et,J,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(C){let v=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=k}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let k=0;k<6;k++)ye(v.__webglFramebuffer[k],C,k);else{let k=C.texture.mipmaps;k&&k.length>0?ye(v.__webglFramebuffer[0],C,0):ye(v.__webglFramebuffer,C,0)}else if(z){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=i.createRenderbuffer(),Xt(v.__webglDepthbuffer[k],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ut)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Xt(v.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,v,z){let k=n.get(C);v!==void 0&&Tt(k.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&it(C)}function lt(C){let v=C.texture,z=n.get(C),k=n.get(v);C.addEventListener("dispose",y);let Z=C.textures,ut=C.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=v.version,o.memory.textures++),ut){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let et=0;et<v.mipmaps.length;et++)z.__webglFramebuffer[J][et]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(dt)for(let J=0,et=Z.length;J<et;J++){let mt=n.get(Z[J]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Jt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let et=Z[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let mt=r.convert(et.format,et.colorSpace),Nt=r.convert(et.type),yt=_(et.internalFormat,mt,Nt,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),gt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)Tt(z.__webglFramebuffer[J][et],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,et);else Tt(z.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let J=0,et=Z.length;J<et;J++){let mt=Z[J],Nt=n.get(mt),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Nt.__webglTexture),ee(yt,mt),Tt(z.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+J,yt,0),p(mt)&&M(yt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,k.__webglTexture),ee(J,v),v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)Tt(z.__webglFramebuffer[et],C,v,i.COLOR_ATTACHMENT0,J,et);else Tt(z.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);p(v)&&M(J),e.unbindTexture()}C.depthBuffer&&it(C)}function ht(C){let v=C.textures;for(let z=0,k=v.length;z<k;z++){let Z=v[z];if(p(Z)){let ut=w(C),dt=n.get(Z).__webglTexture;e.bindTexture(ut,dt),M(ut),e.unbindTexture()}}}let ft=[],Ht=[];function Ot(C){if(C.samples>0){if(Jt(C)===!1){let v=C.textures,z=C.width,k=C.height,Z=i.COLOR_BUFFER_BIT,ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(C),J=v.length>1;if(J)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let et=C.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Nt=n.get(v[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,z,k,0,0,z,k,Z,i.NEAREST),c===!0&&(ft.length=0,Ht.length=0,ft.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ft.push(ut),Ht.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Nt=n.get(v[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Jt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function pe(C,v){let z=C.colorSpace,k=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==jr&&z!==Ci&&(re.getTransfer(z)===xe?(k!==On||Z!==wn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",z)),v}function ne(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=rt,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=st,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Pv(i,t){function e(n,s=Ci){let r,o=re.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===Qh)return i.ALPHA;if(n===jh)return i.RGB;if(n===On)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===br)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===es)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===Lo||n===Do||n===No||n===Uo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Ic||n===Pc||n===Lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Bc||n===Fo||n===Oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Nc)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fc)return r.COMPRESSED_R11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fo)return r.COMPRESSED_RG11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zc||n===Hc||n===Gc||n===Vc||n===kc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Jc||n===$c||n===Kc||n===Qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===tl||n===el)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===Bo||n===sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`,Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wu=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new Tu,p={},M=e.getContextAttributes(),w=null,_=null,b=[],S=[],A=new ct,y=null,T=null,R=new $e;R.viewport=new De;let I=new $e;I.viewport=new De;let N=[R,I],O=new xc,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=b[$];return nt===void 0&&(nt=new cr,b[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=b[$];return nt===void 0&&(nt=new cr,b[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=b[$];return nt===void 0&&(nt=new cr,b[$]=nt),nt.getHandSpace()};function q($){let nt=S.indexOf($.inputSource);if(nt===-1)return;let Mt=b[nt];Mt!==void 0&&(Mt.update($.inputSource,$.frame,l||o),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",rt);for(let $=0;$<b.length;$++){let nt=S[$];nt!==null&&(S[$]=null,b[$].disconnect(nt))}L=null,H=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,_=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",rt),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Wt=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=M.stencil?ts:ai,Wt=M.stencil?Sr:Zn);let Xt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new En(d.textureWidth,d.textureHeight,{format:On,type:wn,depthTexture:new Wi(d.textureWidth,d.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new En(f.framebufferWidth,f.framebufferHeight,{format:On,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt($){for(let nt=0;nt<$.removed.length;nt++){let Mt=$.removed[nt],Wt=S.indexOf(Mt);Wt>=0&&(S[Wt]=null,b[Wt].disconnect(Mt))}for(let nt=0;nt<$.added.length;nt++){let Mt=$.added[nt],Wt=S.indexOf(Mt);if(Wt===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=S.length){S.push(Mt),Wt=Xt;break}else if(S[Xt]===null){S[Xt]=Mt,Wt=Xt;break}if(Wt===-1)break}let Tt=b[Wt];Tt&&Tt.connect(Mt)}}let Y=new P,tt=new P;function st($,nt,Mt){Y.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);let Wt=Y.distanceTo(tt),Tt=nt.projectionMatrix.elements,Xt=Mt.projectionMatrix.elements,ye=Tt[14]/(Tt[10]-1),it=Tt[14]/(Tt[10]+1),at=(Tt[9]+1)/Tt[5],lt=(Tt[9]-1)/Tt[5],ht=(Tt[8]-1)/Tt[0],ft=(Xt[8]+1)/Xt[0],Ht=ye*ht,Ot=ye*ft,qt=Wt/(-ht+ft),Jt=qt*-ht;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Jt),$.translateZ(qt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let D=ye+qt,pe=it+qt,ne=Ht-Jt,C=Ot+(Wt-Jt),v=at*it/pe*D,z=lt*it/pe*D;$.projectionMatrix.makePerspective(ne,C,v,z,D,pe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Dt($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,Mt=$.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),O.near=I.near=R.near=nt,O.far=I.far=R.far=Mt,(L!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,H=O.far),O.layers.mask=$.layers.mask|6,R.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Wt=$.parent,Tt=O.cameras;Dt(O,Wt);for(let Xt=0;Xt<Tt.length;Xt++)Dt(Tt[Xt],Wt);Tt.length===2?st(O,R,I):O.projectionMatrix.copy(R.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Rt($,O,Wt)};function Rt($,nt,Mt){Mt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Va*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return p[$]};let fe=null;function ee($,nt){if(h=nt.getViewerPose(l||o),g=nt,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Wt=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,Wt=!0);for(let it=0;it<Mt.length;it++){let at=Mt[it],lt=null;if(f!==null)lt=f.getViewport(at);else{let ft=u.getViewSubImage(d,at);lt=ft.viewport,it===0&&(t.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(_))}let ht=N[it];ht===void 0&&(ht=new $e,ht.layers.enable(it),ht.viewport=new De,N[it]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),it===0&&(O.matrix.copy(ht.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Wt===!0&&O.cameras.push(ht)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let it=u.getDepthInformation(Mt[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let it=0;it<Mt.length;it++){let at=Mt[it].camera;if(at){let lt=p[at];lt||(lt=new fo,p[at]=lt);let ht=u.getCameraImage(at);lt.sourceTexture=ht}}}}for(let Mt=0;Mt<b.length;Mt++){let Wt=S[Mt],Tt=b[Mt];Wt!==null&&Tt!==void 0&&Tt.update(Wt,nt,l||o)}fe&&fe($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let ce=new Mp;ce.setAnimationLoop(ee),this.setAnimationLoop=function($){fe=$},this.dispose=function(){}}},Nv=new ue,Ap=new Yt;Ap.set(-1,0,0,0,1,0,0,0,1);function Uv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,iu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ap),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function l(_,b){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",M));let A=b.program;n.updateUBOMapping(_,A);let y=t.render.frame;r[_.id]!==y&&(d(_),r[_.id]=y)}function h(_){let b=u();_.__bindingPointIndex=b;let S=i.createBuffer(),A=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],S=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,T=S.length;y<T;y++){let R=S[y];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)f(R[I],y,I,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,S,A){if(x(_,b,S,A)===!0){let y=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let N=T[I],O=p(N);g(N,_.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function x(_,b,S,A){let y=_.value,T=b+"_"+S;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let R=A[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(_){let b=_.uniforms,S=0,A=16;for(let T=0,R=b.length;T<R;T++){let I=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,O=I.length;N<O;N++){let L=I[N],H=Array.isArray(L.value)?L.value:[L.value];for(let q=0,W=H.length;q<W;q++){let rt=H[q],Y=p(rt),tt=S%A,st=tt%Y.boundary,Dt=tt+st;S+=st,Dt!==0&&A-Dt<Y.storage&&(S+=A-Dt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Y.storage}}}let y=S%A;return y>0&&(S+=A-y),_.__size=S,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){let b=_.target;b.removeEventListener("dispose",M);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var Bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function Ov(){return di===null&&(di=new gs(Bv,16,16,es,Jn),di.name="DFG_LUT",di.minFilter=hn,di.magFilter=hn,di.wrapS=ri,di.wrapT=ri,di.generateMipmaps=!1,di.needsUpdate=!0),di}var ul=class{constructor(t={}){let{canvas:e=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([Rc,Ac,wc]),p=new Set([wn,Zn,Mr,Sr,Ec,Tc]),M=new Uint32Array(4),w=new Int32Array(4),_=new P,b=null,S=null,A=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,O=null,L=null,H=null;this._outputColorSpace=ln;let q=0,W=0,rt=null,Y=-1,tt=null,st=new De,Dt=new De,Rt=null,fe=new pt(0),ee=0,ce=e.width,$=e.height,nt=1,Mt=null,Wt=null,Tt=new De(0,0,ce,$),Xt=new De(0,0,ce,$),ye=!1,it=new dr,at=!1,lt=!1,ht=new ue,ft=new P,Ht=new De,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Jt(){return rt===null?nt:1}let D=n;function pe(E,U){return e.getContext(E,U)}let ne,C,v,z,k,Z,ut,dt,J,et,mt,Nt,yt,gt,Ut,Gt,$t,F,xt,j,_t,Et,ot;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Hn,!1),D===null){let U="webgl2";if(D=pe(U,E),D===null)throw pe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(E){throw e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),kt("WebGLRenderer: "+E.message),E}function Ft(){ne=new X_(D),ne.init(),_t=new Pv(D,ne),C=new U_(D,ne,t,_t),v=new Cv(D,ne),C.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),O=D.createFramebuffer(),L=D.createFramebuffer(),H=D.createFramebuffer(),z=new Z_(D),k=new mv,Z=new Iv(D,ne,v,k,C,_t,z),ut=new W_(R),dt=new $0(D),Et=new D_(D,dt),J=new q_(D,dt,z,Et),et=new $_(D,J,dt,Et,z),F=new J_(D,C,Z),Ut=new F_(k),mt=new pv(R,ut,ne,C,Et,Ut),Nt=new Uv(R,k),yt=new xv,gt=new bv(ne),$t=new L_(R,ut,v,et,g,c),Gt=new Rv(R,et,C),ot=new Fv(D,z,C,v),xt=new N_(D,ne,z),j=new Y_(D,ne,z),z.programs=mt.programs,R.capabilities=C,R.extensions=ne,R.properties=k,R.renderLists=yt,R.shadowMap=Gt,R.state=v,R.info=z}x!==wn&&(T=new Q_(x,e.width,e.height,a,s,r));let Pt=new wu(R,D);this.xr=Pt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(ce,$,!1))},this.getSize=function(E){return E.set(ce,$)},this.setSize=function(E,U,X=!0){if(Pt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,$=U,e.width=Math.floor(E*nt),e.height=Math.floor(U*nt),X===!0&&(e.style.width=E+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ce*nt,$*nt).floor()},this.setDrawingBufferSize=function(E,U,X){ce=E,$=U,nt=X,e.width=Math.floor(E*X),e.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===wn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(st)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,U,X,G){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,U,X,G),v.viewport(st.copy(Tt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,U,X,G){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,U,X,G),v.scissor(Dt.copy(Xt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){v.setScissorTest(ye=E)},this.setOpaqueSort=function(E){Mt=E},this.setTransparentSort=function(E){Wt=E},this.getClearColor=function(E){return E.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let G=0;if(E){let V=!1;if(rt!==null){let bt=rt.texture.format;V=m.has(bt)}if(V){let bt=rt.texture.type,At=p.has(bt),St=$t.getClearColor(),Ct=$t.getClearAlpha(),Lt=St.r,Qt=St.g,ie=St.b;At?(M[0]=Lt,M[1]=Qt,M[2]=ie,M[3]=Ct,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Lt,w[1]=Qt,w[2]=ie,w[3]=Ct,D.clearBufferiv(D.COLOR,0,w))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),$t.dispose(),yt.dispose(),gt.dispose(),k.dispose(),ut.dispose(),et.dispose(),Et.dispose(),ot.dispose(),mt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",md),Pt.removeEventListener("sessionend",gd),ls.stop()};function we(E){E.preventDefault(),no("WebGLRenderer: Context Lost."),I=!0}function me(){no("WebGLRenderer: Context Restored."),I=!1;let E=z.autoReset,U=Gt.enabled,X=Gt.autoUpdate,G=Gt.needsUpdate,V=Gt.type;Ft(),z.autoReset=E,Gt.enabled=U,Gt.autoUpdate=X,Gt.needsUpdate=G,Gt.type=V}function Hn(E){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){let U=E.target;U.removeEventListener("dispose",ei),Im(U)}function Im(E){Pm(E),k.remove(E)}function Pm(E){let U=k.get(E).programs;U!==void 0&&(U.forEach(function(X){mt.releaseProgram(X)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,G,V,bt){U===null&&(U=Ot);let At=V.isMesh&&V.matrixWorld.determinantAffine()<0,St=Nm(E,U,X,G,V);v.setMaterial(G,At);let Ct=X.index,Lt=1;if(G.wireframe===!0){if(Ct=J.getWireframeAttribute(X),Ct===void 0)return;Lt=2}let Qt=X.drawRange,ie=X.attributes.position,It=Qt.start*Lt,ge=(Qt.start+Qt.count)*Lt;bt!==null&&(It=Math.max(It,bt.start*Lt),ge=Math.min(ge,(bt.start+bt.count)*Lt)),Ct!==null?(It=Math.max(It,0),ge=Math.min(ge,Ct.count)):ie!=null&&(It=Math.max(It,0),ge=Math.min(ge,ie.count));let Xe=ge-It;if(Xe<0||Xe===1/0)return;Et.setup(V,G,St,X,Ct);let Ce,Ee=xt;if(Ct!==null&&(Ce=dt.get(Ct),Ee=j,Ee.setIndex(Ce)),V.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Jt()),Ee.setMode(D.LINES)):Ee.setMode(D.TRIANGLES);else if(V.isLine){let fn=G.linewidth;fn===void 0&&(fn=1),v.setLineWidth(fn*Jt()),V.isLineSegments?Ee.setMode(D.LINES):V.isLineLoop?Ee.setMode(D.LINE_LOOP):Ee.setMode(D.LINE_STRIP)}else V.isPoints?Ee.setMode(D.POINTS):V.isSprite&&Ee.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Ee.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let fn=V._multiDrawStarts,wt=V._multiDrawCounts,xn=V._multiDrawCount,le=Ct?dt.get(Ct).bytesPerElement:1,Nn=k.get(G).currentProgram.getUniforms();for(let ni=0;ni<xn;ni++)Nn.setValue(D,"_gl_DrawID",ni),Ee.render(fn[ni]/le,wt[ni])}else if(V.isInstancedMesh)Ee.renderInstances(It,Xe,V.count);else if(X.isInstancedBufferGeometry){let fn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,fn);Ee.renderInstances(It,Xe,wt)}else Ee.render(It,Xe)};function pd(E,U,X,G){N!==null&&E.isNodeMaterial&&N.setObject(G,E),at===!0&&Ut.setState(E,X,!1),E.transparent===!0&&E.side===Te&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,ea(E,U,G),E.side=$i,E.needsUpdate=!0,ea(E,U,G),E.side=Te):ea(E,U,G)}this.compile=function(E,U,X=null){X===null&&(X=E),N!==null&&N.renderStart(E,U,X),S=gt.get(X),S.init(U),y.push(S),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),lt=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,lt),at===!0&&Ut.setGlobalState(this.clippingPlanes,U),N!==null&&Gt.render(S.state.shadowsArray,X,U);let G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let bt=V.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){let St=bt[At];pd(St,X,U,V),G.add(St)}else pd(bt,X,U,V),G.add(bt)}),S=y.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(E,U,X=null){let G=this.compile(E,U,X);return new Promise(V=>{function bt(){if(G.forEach(function(At){let Ct=k.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&G.delete(At)}),G.size===0){V(E);return}setTimeout(bt,10)}ne.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ql=null;function Lm(E){ql&&ql(E)}function md(){ls.stop()}function gd(){ls.start()}let ls=new Mp;ls.setAnimationLoop(Lm),typeof self!="undefined"&&ls.setContext(self),this.setAnimationLoop=function(E){ql=E,Pt.setAnimationLoop(E),E===null?ls.stop():ls.start()},Pt.addEventListener("sessionstart",md),Pt.addEventListener("sessionend",gd),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(E,U);let X=Pt.enabled===!0&&Pt.isPresenting===!0,G=T!==null&&(rt===null||X)&&T.begin(R,rt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(U),U=Pt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,rt),S=gt.get(E,y.length),S.init(U),S.state.textureUnits=Z.getTextureUnits(),y.push(S),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(ht,Xn,U.reversedDepth),lt=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,lt),b=yt.get(E,A.length),b.init(),A.push(b),Pt.enabled===!0&&Pt.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&Yl(At,U,-1/0,R.sortObjects)}Yl(E,U,0,R.sortObjects),b.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(Mt,Wt),qt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,qt&&$t.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ut.beginShadows();let V=S.state.shadowsArray;if(Gt.render(V,E,U),at===!0&&Ut.endShadows(),(G&&T.hasRenderPass())===!1){let At=b.opaque,St=b.transmissive;if(S.setupLights(),U.isArrayCamera){let Ct=U.cameras;if(St.length>0)for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ie=Ct[Lt];_d(At,St,E,ie)}qt&&$t.render(E);for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ie=Ct[Lt];xd(b,E,ie,ie.viewport)}}else St.length>0&&_d(At,St,E,U),qt&&$t.render(E),xd(b,E,U)}rt!==null&&W===0&&(Z.updateMultisampleRenderTarget(rt),Z.updateRenderTargetMipmap(rt)),G&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),Et.resetDefaultState(),Y=-1,tt=null,y.pop(),y.length>0?(S=y[y.length-1],Z.setTextureUnits(S.state.textureUnits),at===!0&&Ut.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function Yl(E,U,X,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(it)){G&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);let At=et.update(E),St=E.material;St.visible&&b.push(E,At,St,X,Ht.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(it))){let At=et.update(E),St=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ht.copy(At.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(St)){let Ct=At.groups;for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ie=Ct[Lt],It=St[ie.materialIndex];It&&It.visible&&b.push(E,At,It,X,Ht.z,ie,U)}}else St.visible&&b.push(E,At,St,X,Ht.z,null,U)}}let bt=E.children;for(let At=0,St=bt.length;At<St;At++)Yl(bt[At],U,X,G)}function xd(E,U,X,G){let{opaque:V,transmissive:bt,transparent:At}=E;S.setupLightsView(X),at===!0&&Ut.setGlobalState(R.clippingPlanes,X),G&&v.viewport(st.copy(G)),V.length>0&&ta(V,U,X),bt.length>0&&ta(bt,U,X),At.length>0&&ta(At,U,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function _d(E,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let It=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new En(1,1,{generateMipmaps:!0,type:It?Jn:wn,minFilter:ji,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let bt=S.state.transmissionRenderTarget[G.id],At=G.viewport||st;bt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),Ct=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(fe),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),qt&&$t.render(X);let Qt=R.toneMapping;R.toneMapping=Yn;let ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),at===!0&&Ut.setGlobalState(R.clippingPlanes,G),ta(E,X,G),Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ge=0,Xe=U.length;ge<Xe;ge++){let Ce=U[ge],{object:Ee,geometry:fn,material:wt,group:xn}=Ce;if(wt.side===Te&&Ee.layers.test(G.layers)){let le=wt.side;wt.side=dn,wt.needsUpdate=!0,yd(Ee,X,G,fn,wt,xn),wt.side=le,wt.needsUpdate=!0,It=!0}}It===!0&&(Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt))}R.setRenderTarget(St,Ct,Lt),R.setClearColor(fe,ee),ie!==void 0&&(G.viewport=ie),R.toneMapping=Qt}function ta(E,U,X){let G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,bt=E.length;V<bt;V++){let At=E[V],{object:St,geometry:Ct,group:Lt}=At,Qt=At.material;Qt.allowOverride===!0&&G!==null&&(Qt=G),St.layers.test(X.layers)&&yd(St,U,X,Ct,Qt,Lt)}}function yd(E,U,X,G,V,bt){N!==null&&V.isNodeMaterial&&N.setObject(E,V),E.onBeforeRender(R,U,X,G,V,bt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,U,X,G,E,bt),V.transparent===!0&&V.side===Te&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,R.renderBufferDirect(X,U,G,V,E,bt),V.side=$i,V.needsUpdate=!0,R.renderBufferDirect(X,U,G,V,E,bt),V.side=Te):R.renderBufferDirect(X,U,G,V,E,bt),E.onAfterRender(R,U,X,G,V,bt)}function ea(E,U,X){U.isScene!==!0&&(U=Ot);let G=k.get(E),V=S.state.lights,bt=S.state.shadowsArray,At=V.state.version,St=mt.getParameters(E,V.state,bt,U,X,S.state.lightProbeGridArray),Ct=mt.getProgramCacheKey(St),Lt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Qt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ut.get(E.envMap||G.environment,Qt),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",ei),Lt=new Map,G.programs=Lt);let ie=Lt.get(Ct);if(ie!==void 0){if(G.currentProgram===ie&&G.lightsStateVersion===At)return Md(E,St),ie}else St.uniforms=mt.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,X,St),E.onBeforeCompile(St,R),ie=mt.acquireProgram(St,Ct),Lt.set(Ct,ie),G.uniforms=St.uniforms;let It=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=Ut.uniform),Md(E,St),G.needsLights=Fm(E),G.lightsStateVersion=At,G.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.sunLights.value=V.state.sun,It.sunLightShadows.value=V.state.sunShadow,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.sunShadowMatrix.value=V.state.sunShadowMatrix,It.sunShadowCascade.value=V.state.sunShadowCascade,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=ie,G.uniformsList=null,ie}function vd(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=wr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Md(E,U){let X=k.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Dm(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let X=0,G=E.length;X<G;X++){let V=E[X];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function Nm(E,U,X,G,V){U.isScene!==!0&&(U=Ot),Z.resetTextureUnits();let bt=U.fog,At=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,St=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:re.workingColorSpace,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=ut.get(G.envMap||At,Ct),Qt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ie=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!X.morphAttributes.position,ge=!!X.morphAttributes.normal,Xe=!!X.morphAttributes.color,Ce=Yn;G.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ce=R.toneMapping);let Ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fn=Ee!==void 0?Ee.length:0,wt=k.get(G),xn=S.state.lights;if(at===!0&&(lt===!0||E!==tt)){let Ae=E===tt&&G.id===Y;Ut.setState(G,E,Ae)}let le=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==xn.state.version||wt.outputColorSpace!==St||V.isBatchedMesh&&wt.batching===!1||!V.isBatchedMesh&&wt.batching===!0||V.isBatchedMesh&&wt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&wt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&wt.instancing===!1||!V.isInstancedMesh&&wt.instancing===!0||V.isSkinnedMesh&&wt.skinning===!1||!V.isSkinnedMesh&&wt.skinning===!0||V.isInstancedMesh&&wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&wt.instancingMorph===!1&&V.morphTexture!==null||wt.envMap!==Lt||G.fog===!0&&wt.fog!==bt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Ut.numPlanes||wt.numIntersection!==Ut.numIntersection)||wt.vertexAlphas!==Qt||wt.vertexTangents!==ie||wt.morphTargets!==It||wt.morphNormals!==ge||wt.morphColors!==Xe||wt.toneMapping!==Ce||wt.morphTargetsCount!==fn||!!wt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,wt.__version=G.version);let Nn=wt.currentProgram;le===!0&&(Nn=ea(G,U,V),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Nn,wt));let ni=!1,Ni=!1,Fs=!1,ve=Nn.getUniforms(),Ve=wt.uniforms;if(v.useProgram(Nn.program)&&(ni=!0,Ni=!0,Fs=!0),G.id!==Y&&(Y=G.id,Ni=!0),wt.needsLights){let Ae=Dm(S.state.lightProbeGridArray,V);wt.lightProbeGrid!==Ae&&(wt.lightProbeGrid=Ae,Ni=!0)}if(ni||tt!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ve.setValue(D,"projectionMatrix",E.projectionMatrix),ve.setValue(D,"viewMatrix",E.matrixWorldInverse);let Fi=ve.map.cameraPosition;Fi!==void 0&&Fi.setValue(D,ft.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),tt!==E&&(tt=E,Ni=!0,Fs=!0)}if(wt.needsLights&&(xn.state.sunShadowMap.length>0&&ve.setValue(D,"sunShadowMap",xn.state.sunShadowMap,Z),xn.state.directionalShadowMap.length>0&&ve.setValue(D,"directionalShadowMap",xn.state.directionalShadowMap,Z),xn.state.spotShadowMap.length>0&&ve.setValue(D,"spotShadowMap",xn.state.spotShadowMap,Z),xn.state.pointShadowMap.length>0&&ve.setValue(D,"pointShadowMap",xn.state.pointShadowMap,Z)),V.isSkinnedMesh){ve.setOptional(D,V,"bindMatrix"),ve.setOptional(D,V,"bindMatrixInverse");let Ae=V.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ve.setValue(D,"boneTexture",Ae.boneTexture,Z))}V.isBatchedMesh&&(ve.setOptional(D,V,"batchingTexture"),ve.setValue(D,"batchingTexture",V._matricesTexture,Z),ve.setOptional(D,V,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",V._indirectTexture,Z),ve.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",V._colorsTexture,Z));let Ui=X.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&F.update(V,X,Nn),(Ni||wt.receiveShadow!==V.receiveShadow)&&(wt.receiveShadow=V.receiveShadow,ve.setValue(D,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ve.envMapIntensity.value=U.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Ov()),Ni){if(ve.setValue(D,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&Um(Ve,Fs),bt&&G.fog===!0&&Nt.refreshFogUniforms(Ve,bt),Nt.refreshMaterialUniforms(Ve,G,nt,$,S.state.transmissionRenderTarget[E.id]),wt.needsLights&&wt.lightProbeGrid){let Ae=wt.lightProbeGrid;Ve.probesSH.value=Ae.texture,Ve.probesMin.value.copy(Ae.boundingBox.min),Ve.probesMax.value.copy(Ae.boundingBox.max),Ve.probesResolution.value.copy(Ae.resolution)}wr.upload(D,vd(wt),Ve,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(wr.upload(D,vd(wt),Ve,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(D,"center",V.center),ve.setValue(D,"modelViewMatrix",V.modelViewMatrix),ve.setValue(D,"normalMatrix",V.normalMatrix),ve.setValue(D,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let Ae=G.uniformsGroups;for(let Fi=0,Bs=Ae.length;Fi<Bs;Fi++){let bd=Ae[Fi];ot.update(bd,Nn),ot.bind(bd,Nn)}}return Nn}function Um(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Fm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(E,U,X){let G=k.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),k.get(E.texture).__webglTexture=U,k.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let X=k.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){rt=E,q=U,W=X;let G=null,V=!1,bt=!1;if(E){let St=k.get(E);if(St.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,St.__webglFramebuffer),st.copy(E.viewport),Dt.copy(E.scissor),Rt=E.scissorTest,v.viewport(st),v.scissor(Dt),v.setScissorTest(Rt),Y=-1;return}else if(St.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(St.__hasExternalTextures)Z.rebindTextures(E,k.get(E.texture).__webglTexture,k.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Qt=E.depthTexture;if(St.__boundDepthTexture!==Qt){if(Qt!==null&&k.has(Qt)&&(E.width!==Qt.image.width||E.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(bt=!0);let Lt=k.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?G=Lt[U][X]:G=Lt[U],V=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?G=k.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[X]:G=Lt,st.copy(E.viewport),Dt.copy(E.scissor),Rt=E.scissorTest}else st.copy(Tt).multiplyScalar(nt).floor(),Dt.copy(Xt).multiplyScalar(nt).floor(),Rt=ye;if(X!==0&&(G=O),v.bindFramebuffer(D.FRAMEBUFFER,G)&&v.drawBuffers(E,G),v.viewport(st),v.scissor(Dt),v.setScissorTest(Rt),V){let St=k.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,X)}else if(bt){let St=U;for(let Ct=0;Ct<E.textures.length;Ct++){let Lt=k.get(E.textures[Ct]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,X,St)}}else if(E!==null&&X!==0){let St=k.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,X)}Y=-1};function Sd(E){let U=k.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,X,G,V,bt,At,St=0){if(!(E&&E.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){v.bindFramebuffer(D.FRAMEBUFFER,Ct);try{let Lt=E.textures[St],Qt=Lt.format,ie=Lt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St);let It=Sd(Lt);if(It.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&X>=0&&X<=E.height-V&&D.readPixels(U,X,G,V,_t.convert(Qt),_t.convert(ie),bt)}finally{let Lt=rt!==null?k.get(rt).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,G,V,bt,At,St=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(U>=0&&U<=E.width-G&&X>=0&&X<=E.height-V){v.bindFramebuffer(D.FRAMEBUFFER,Ct);let Lt=E.textures[St],Qt=Lt.format,ie=Lt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St);let It=Sd(Lt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ge),D.bufferData(D.PIXEL_PACK_BUFFER,bt.byteLength,D.STREAM_READ),D.readPixels(U,X,G,V,_t.convert(Qt),_t.convert(ie),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Xe=rt!==null?k.get(rt).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Xe);let Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await kf(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,bt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ge),D.deleteSync(Ce),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){let G=Math.pow(2,-X),V=Math.floor(E.image.width*G),bt=Math.floor(E.image.height*G),At=U!==null?U.x:0,St=U!==null?U.y:0;Z.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,At,St,V,bt),v.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,G=null,V=0,bt=0){let At,St,Ct,Lt,Qt,ie,It,ge,Xe,Ce=E.isCompressedTexture?E.mipmaps[bt]:E.image;if(X!==null)At=X.max.x-X.min.x,St=X.max.y-X.min.y,Ct=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Qt=X.min.y,ie=X.isBox3?X.min.z:0;else{let Ve=Math.pow(2,-V);At=Math.floor(Ce.width*Ve),St=Math.floor(Ce.height*Ve),E.isDataArrayTexture?Ct=Ce.depth:E.isData3DTexture?Ct=Math.floor(Ce.depth*Ve):Ct=1,Lt=0,Qt=0,ie=0}G!==null?(It=G.x,ge=G.y,Xe=G.z):(It=0,ge=0,Xe=0);let Ee=_t.convert(U.format),fn=_t.convert(U.type),wt;U.isData3DTexture?(Z.setTexture3D(U,0),wt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),wt=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),wt=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let xn=v.getParameter(D.UNPACK_ROW_LENGTH),le=v.getParameter(D.UNPACK_IMAGE_HEIGHT),Nn=v.getParameter(D.UNPACK_SKIP_PIXELS),ni=v.getParameter(D.UNPACK_SKIP_ROWS),Ni=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),v.pixelStorei(D.UNPACK_SKIP_IMAGES,ie);let Fs=E.isDataArrayTexture||E.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Ve=k.get(E),Ui=k.get(U),Ae=k.get(Ve.__renderTarget),Fi=k.get(Ui.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,Ae.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Bs=0;Bs<Ct;Bs++)Fs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(E).__webglTexture,V,ie+Bs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(U).__webglTexture,bt,Xe+Bs)),D.blitFramebuffer(Lt,Qt,At,St,It,ge,At,St,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||k.has(E)){let Ve=k.get(E),Ui=k.get(U);v.bindFramebuffer(D.READ_FRAMEBUFFER,L),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let Ae=0;Ae<Ct;Ae++)Fs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ve.__webglTexture,V,ie+Ae):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ve.__webglTexture,V),ve?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ui.__webglTexture,bt,Xe+Ae):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ui.__webglTexture,bt),V!==0?D.blitFramebuffer(Lt,Qt,At,St,It,ge,At,St,D.COLOR_BUFFER_BIT,D.NEAREST):ve?D.copyTexSubImage3D(wt,bt,It,ge,Xe+Ae,Lt,Qt,At,St):D.copyTexSubImage2D(wt,bt,It,ge,Lt,Qt,At,St);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(wt,bt,It,ge,Xe,At,St,Ct,Ee,fn,Ce.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(wt,bt,It,ge,Xe,At,St,Ct,Ee,Ce.data):D.texSubImage3D(wt,bt,It,ge,Xe,At,St,Ct,Ee,fn,Ce):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,bt,It,ge,At,St,Ee,fn,Ce.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,bt,It,ge,Ce.width,Ce.height,Ee,Ce.data):D.texSubImage2D(D.TEXTURE_2D,bt,It,ge,At,St,Ee,fn,Ce);v.pixelStorei(D.UNPACK_ROW_LENGTH,xn),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Nn),v.pixelStorei(D.UNPACK_SKIP_ROWS,ni),v.pixelStorei(D.UNPACK_SKIP_IMAGES,Ni),bt===0&&U.generateMipmaps&&D.generateMipmap(wt),v.unbindTexture()},this.initRenderTarget=function(E){k.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){q=0,W=0,rt=null,v.reset(),Et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Au=(i,t,e)=>Math.max(t,Math.min(e,i)),pi=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],Le=(i,t)=>i+Math.random()*(t-i),tn={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(!this.ok())return;let t=this.ctx.currentTime;this.pluck(pi[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(pi[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6,e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let T=0;T<r.length;T++)r[T]=Math.random()*2-1;this.nbuf=s;let o=Math.floor(t.sampleRate*2.8),a=t.createBuffer(2,o,t.sampleRate);for(let T=0;T<2;T++){let R=a.getChannelData(T);for(let I=0;I<o;I++)R[I]=(Math.random()*2-1)*Math.pow(1-I/o,2.6)}let c=t.createConvolver();c.buffer=a;let l=t.createGain();l.gain.value=.38,n.connect(c),c.connect(l),l.connect(e);let h=this.noise(),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=650;let d=t.createGain();d.gain.value=.07;let f=t.createOscillator();f.frequency.value=.09;let g=t.createGain();g.gain.value=.04,f.connect(g),g.connect(d.gain),f.start(),h.connect(u),u.connect(d),d.connect(e);let x=this.noise(),m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=2200,m.Q.value=.7;let p=t.createGain();p.gain.value=.02,x.connect(m),m.connect(p),p.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(T=>{let R=this.panner(T*4,0,0,2,.6);R.connect(e),this.bk[T]=R,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([I,N,O,L],H)=>{let q=this.noise(Math.random()*1.8),W=t.createBiquadFilter();W.type="bandpass",W.frequency.value=I,W.Q.value=N;let rt=t.createGain();rt.gain.value=L;let Y=t.createOscillator(),tt=t.createGain();Y.frequency.value=O*(T>0?1.13:.91),tt.gain.value=L*.7,Y.connect(tt),tt.connect(rt.gain),Y.start(),q.connect(W),W.connect(rt),rt.connect(R)})});let M=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let T=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,R=t.currentTime,I=t.createOscillator(),N=t.createGain(),O=Le(450,1100),L=this.panner(this.bkx[T],0,Le(-4,2),2,.6,!0);L.connect(e),I.frequency.setValueAtTime(O,R),I.frequency.exponentialRampToValueAtTime(O*Le(1.4,2),R+.07),N.gain.setValueAtTime(0,R),N.gain.linearRampToValueAtTime(Le(.01,.026),R+.012),N.gain.exponentialRampToValueAtTime(1e-4,R+.1),I.connect(N),N.connect(L),I.start(R),I.stop(R+.12)}setTimeout(M,Le(90,260))}};M();let w=this.noise(Math.random()*1.5),_=t.createBiquadFilter();_.type="highpass",_.frequency.value=380;let b=t.createBiquadFilter();b.type="lowpass",b.frequency.value=4200;let S=t.createGain();S.gain.value=0;let A=this.panner(0,0,-30,2,.5);w.connect(_),_.connect(b),b.connect(S),S.connect(A),A.connect(e),this.wfG=S,this.wfP=A,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([T,R])=>{let I=t.createStereoPanner();I.pan.value=T,I.connect(e);let N=this.noise(Math.random()*1.8),O=t.createBiquadFilter();O.type="highpass",O.frequency.value=R;let L=t.createGain();L.gain.value=0,N.connect(O),O.connect(L),L.connect(I),this.rgs.push([L,.07]);let H=this.noise(Math.random()*1.8),q=t.createBiquadFilter();q.type="bandpass",q.frequency.value=1500,q.Q.value=.6;let W=t.createGain();W.gain.value=0,H.connect(q),q.connect(W),W.connect(I),this.rgs.push([W,.035])}),this.rainLvl=0;let y=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let T=t.currentTime,R=t.createOscillator(),I=t.createGain(),N=this.panner(Le(-4,4),Le(0,1),Le(-4,1),1.5,.7,!0);N.connect(e),R.frequency.setValueAtTime(Le(1800,3200),T),R.frequency.exponentialRampToValueAtTime(Le(900,1400),T+.05),I.gain.setValueAtTime(0,T),I.gain.linearRampToValueAtTime(.02*this.rainLvl,T+.004),I.gain.exponentialRampToValueAtTime(1e-4,T+.07),R.connect(I),I.connect(N),R.start(T),R.stop(T+.09)}setTimeout(y,Le(70,260))}};y(),this.music()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let o=e.createOscillator(),a=e.createGain();o.type="sine",o.frequency.setValueAtTime((i?196:262)*s,n),o.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r,n+t)):(a.gain.setValueAtTime(r,n),a.gain.linearRampToValueAtTime(0,n+t)),o.connect(a),a.connect(this.bus),o.start(n),o.stop(n+t+.1)})},noise(i){let t=this.ctx,e=t.createBufferSource();return e.buffer=this.nbuf,e.loop=!0,e.start(0,i||0),e},panner(i,t,e,n,s,r){let o=this.ctx.createPanner();return o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=n||2,o.rolloffFactor=s==null?.6:s,o.positionX?(o.positionX.value=i,o.positionY.value=t,o.positionZ.value=e):o.setPosition(i,t,e),o},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,o=e||r.currentTime,a=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([c,l],h)=>{let u=r.createOscillator(),d=r.createGain();u.type=h?"sine":"triangle",u.frequency.value=i*c,d.gain.setValueAtTime(0,o),d.gain.linearRampToValueAtTime(t*l,o+.01),d.gain.exponentialRampToValueAtTime(1e-4,o+(h?1.1:2)),u.connect(d),d.connect(a),u.start(o),u.stop(o+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r),c=o.createOscillator(),l=o.createOscillator(),h=o.createGain(),u=o.createGain();c.type="sine",l.type="triangle",c.frequency.setValueAtTime(i*.96,t),c.frequency.exponentialRampToValueAtTime(i,t+.18),l.frequency.setValueAtTime(i*2*.96,t),l.frequency.exponentialRampToValueAtTime(i*2,t+.18);let d=o.createOscillator(),f=o.createGain();d.frequency.value=4.8,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(i*.012,t+e*.6),d.connect(f),f.connect(c.frequency),d.start(t),d.stop(t+e+.5),u.gain.value=.1,l.connect(u),u.connect(h),c.connect(h),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(n,t+.35),h.gain.setValueAtTime(n*.85,t+e*.7),h.gain.linearRampToValueAtTime(0,t+e);let g=o.createBufferSource();g.buffer=this.nbuf,g.loop=!0;let x=o.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let m=o.createGain();m.gain.setValueAtTime(0,t),m.gain.linearRampToValueAtTime(n*.5,t+.2),m.gain.linearRampToValueAtTime(0,t+e),g.connect(x),x.connect(m),m.connect(a),g.start(t),g.stop(t+e+.1),h.connect(a),c.start(t),l.start(t),c.stop(t+e+.1),l.stop(t+e+.1)},drum(i,t,e){if(!this.ok())return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28),r.gain.setValueAtTime(t,i),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(this.bus),s.start(i),s.stop(i+1);let o=n.createBufferSource();o.buffer=this.nbuf;let a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=500;let c=n.createGain();c.gain.setValueAtTime(t*.5,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.1),o.connect(a),a.connect(c),c.connect(this.bus),o.start(i,Math.random()),o.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([c,l,h])=>{let u=o.createOscillator(),d=o.createGain();u.type="sine",u.frequency.value=i*c;let f=(n?7:3)*h;d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(e*l,t+.005),d.gain.exponentialRampToValueAtTime(1e-4,t+f),u.connect(d),d.connect(a),u.start(t),u.stop(t+f+.1)})},next(i,t,e){this.idx=Au(this.idx+Math.floor(Math.random()*4)-1,3,pi.length-1),this.bell(pi[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),o=t.currentTime;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+.4),n.connect(s),s.connect(r),r.connect(e),n.start(o,Math.random()),n.stop(o+.45)},bump(i=.6,t=0){if(!this.ok())return;let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),o=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),o.gain.setValueAtTime(.16*i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(o),o.connect(s),r.start(n),r.stop(n+.35)},discover(){if(!this.ok())return;let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(pi[t],.12,i+e*.2)),this.bell(pi[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([c,l],h)=>{let u=i.createOscillator(),d=i.createGain(),f=i.createOscillator(),g=i.createGain();u.type="sine",u.frequency.value=c,d.gain.value=l,f.frequency.value=.05+h*.03,g.gain.value=l*.6,f.connect(g),g.connect(d.gain),u.connect(d),d.connect(this.bus),u.start(),f.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let c=i.currentTime+.05,l=t%8;(t>>3)%4===3?l===0&&this.drum(c,.12,.9):l===0?this.drum(c,.34,1):l===3?this.drum(c,.12,1.35):l===5?this.drum(c,.16,1.15):l===6&&Math.random()<.4&&this.drum(c,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let c=i.currentTime+.2,l=0;if(this.ok()){let h=2+Math.floor(Math.random()*3),u=Le(-3,3);for(let d=0;d<h;d++){n=Au(n+Math.floor(Math.random()*5)-2,0,7);let f=Le(1.8,3.4);this.flute(pi[n],c,f,.06,u+Le(-.3,.3),-2.5),c+=f*.88,l+=f*.88}}setTimeout(s,(l+Le(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){let c=i.currentTime+.05,l=pi[5+Math.floor(Math.random()*5)];this.bell(l,c,.045,!1,Le(-5,5),Le(-5,-1)),Math.random()<.5&&this.bell(pi[5+Math.floor(Math.random()*5)],c+Le(.18,.4),.035,!1,Le(-5,5),Le(-5,-1))}setTimeout(r,Le(3500,8e3))}};setTimeout(r,2500);let o=()=>{if(this.ctx){if(this.ok()){let c=i.currentTime+.05,l=Math.floor(Math.random()*6),h=Le(-4,4);for(let u=0;u<3;u++)this.pluck(pi[Au(l+[0,2,1][u],0,9)],.06,c+u*.28,h,-2)}setTimeout(o,Le(14e3,24e3))}};setTimeout(o,9e3);let a=()=>{this.ctx&&(this.ok()&&this.bell(146.83,i.currentTime+.05,.08,!0,Le(-6,6),-8),setTimeout(a,Le(35e3,55e3)))};setTimeout(a,16e3)},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6,this.ctx.currentTime,.05)}};function zv(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Cp={};function Hv(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=zv(i.length*97+i.charCodeAt(0)),r=(a,c)=>`rgba(${a},${a},${a},${c})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let a=i==="woodV";for(let c=0;c<150;c++){let l=s()*256,h=40+s()*160,u=s()*256,d=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=d,n.beginPath(),a?(n.moveTo(l,u),n.bezierCurveTo(l+4,u+h*.3,l-4,u+h*.7,l+2,u+h)):(n.moveTo(u,l),n.bezierCurveTo(u+h*.3,l+4,u+h*.7,l-4,u+h,l+2)),n.stroke()}for(let c=0;c<3;c++){let l=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let u=1;u<4;u++)n.beginPath(),n.ellipse(l,h,u*3.5,u*2.2,a?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),a?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let a=4;for(let c=0;c<a;c++){let l=-(s()*40),h=256/a;for(;l<256;){let u=38+s()*50,d=190+s()*55|0;n.fillStyle=`rgb(${d},${d-3},${d+8})`,n.beginPath(),n.roundRect?n.roundRect(l+3,c*h+3,u-6,h-6,10):n.rect(l+3,c*h+3,u-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(l+9,c*h+7,u-24,3);for(let f=0;f<14;f++)n.fillStyle=r(120,.08),n.fillRect(l+6+s()*(u-12),c*h+6+s()*(h-12),2,2);l+=u}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let a=6,c=256/a;for(let l=0;l<a;l++){let h=l%2*22;for(let u=-22;u<278;u+=44){let d=196+s()*50|0;n.fillStyle=`rgb(${d},${d-6},${d-8})`,n.beginPath(),n.moveTo(u+h+2,l*c),n.lineTo(u+h+42,l*c),n.lineTo(u+h+42,l*c+c*.55),n.quadraticCurveTo(u+h+22,l*c+c*1.15,u+h+2,l*c+c*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(u+h+8,l*c+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let a=0;a<60;a++){let c=s()*256,l=s()*256,h=10+s()*40,u=170+s()*70|0;n.fillStyle=`rgba(${u},${u-4},${u+10},.35)`,n.beginPath(),n.ellipse(c,l,h,h*.6,s()*3,0,7),n.fill()}for(let a=0;a<30;a++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let c=s()*256,l=s()*256;n.moveTo(c,l);for(let h=0;h<4;h++)c+=s()*40-20,l+=s()*30,n.lineTo(c,l);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let a=0;a<900;a++){let c=s()*256,l=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(c,l),n.lineTo(c+s()*4-2,l-3-s()*7),n.stroke()}for(let a=0;a<20;a++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let a=0;a<70;a++){let c=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(c,0),n.bezierCurveTo(c+8,256*.3,c-8,256*.6,c+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let a=0;a<260;a++){let c=s()*256,l=s()*256,h=6+s()*14,u=s()>.45?215+s()*40|0:120+s()*60|0;for(let d of[-256,0,256])for(let f of[-256,0,256])c+d<-30||c+d>286||l+f<-30||l+f>286||(n.fillStyle=`rgba(${u},${u},${u-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(c+d,l+f,h,h*.62,s()*3.14,0,7),n.fill())}for(let a=0;a<120;a++){let c=s()*256,l=s()*256;n.fillStyle="rgba(70,80,60,.28)",n.beginPath(),n.ellipse(c,l+9,9,4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(c-1,l-3,6,2.4,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(a,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,a,256,1.6);for(let a=0;a<9;a++){let c=s()*256,l=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(c,l),n.bezierCurveTo(c+20,l+30,c-18,l+60,c+6,l+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(c+4,l),n.bezierCurveTo(c+24,l+30,c-14,l+60,c+10,l+95),n.stroke()}for(let a=0;a<5;a++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let a=-256;a<256*2;a+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(a+3,0),n.lineTo(a+3-256,256),n.stroke();for(let a=0;a<256;a+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let a=5,c=256/a;for(let l=0;l<a;l++){let h=l*c;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,c);for(let u=0;u<22;u++){let d=h+3+s()*(c-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,d),n.bezierCurveTo(80,d+3,160,d-3,256,d+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let u of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(u,h+c/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let a=0;a<8;a++){let c=a*256/8;for(let l=-10;l<266;l+=14){let h=l+a%2*7+s()*3,u=18+s()*10,d=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${d},${d},${d-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,c),n.lineTo(h+s()*8-4,c+u),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,c+256/8-2),n.lineTo(256,c+256/8-2),n.stroke()}}let o=new Ai(e);return o.wrapS=o.wrapT=sr,o.colorSpace=ln,o.anisotropy=4,o}var Ue=i=>Cp[i]||(Cp[i]=Hv(i)),Fe=(()=>{let i=new Uint8Array([112,160,208,255]),t=new gs(i,4,1,br);return t.minFilter=t.magFilter=Ye,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function Ip(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function Pp(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function Vo(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ae,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Lp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Lp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Lp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new oe(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Q=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Ze=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),nn=(i,t,e)=>{let n=Ze((e-i)/(t-i));return n*n*(3-2*n)},Zo=(i,t,e)=>i+(t-i)*e;function sn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Q(e,n),l=Q(e+1,n),h=Q(e,n+1),u=Q(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}var Gv=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if((n%10+10)%10===6){let s=240+n*260+Q(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},_e=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+Gv(i),He=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),ti=i=>Math.atan((_e(i+1)-_e(i-1))/2);function ss(i,t){let e=Math.abs(i-_e(t))-He(t);if(e<0)return-1.5+1.7*nn(-5,0,e);let n=sn(i*.018,t*.018)*12+sn(i*.055,t*.055)*4;return .2+.6*nn(0,4,e)+n*nn(5,60,e)+Math.min(e,160)*.1*nn(30,100,e)}var Ir=document.getElementById("c"),Ju=new ul({canvas:Ir,antialias:!0,powerPreference:"high-performance"});Ju.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var Vt=new oo;Vt.fog=new ro(13421772,22,250);var An=new $e(68,1,.05,900);function qp(){let i=innerWidth,t=innerHeight;Ju.setSize(i,t,!1),An.aspect=i/t,An.fov=i/t<1?82:68,An.updateProjectionMatrix()}addEventListener("resize",qp);qp();var Jo=new Eo(16777215,9083528,1.2);Vt.add(Jo);var Ps=new Ro(16777215,1);Vt.add(Ps);var Or=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Ai(i)})(),Kn=new K(new he(700,24,16),new on({side:dn,depthWrite:!1,fog:!1,uniforms:{top:{value:new pt},hor:{value:new pt},sunDir:{value:new P(0,1,0)},sunCol:{value:new pt},glow:{value:1}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,hor,sunDir,sunCol;uniform float glow;
  void main(){vec3 d=normalize(vP);float h=d.y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5));
   float s=max(dot(d,normalize(sunDir)),0.);c+=sunCol*(pow(s,18.)*.45+pow(s,200.)*.6)*glow;
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));Kn.renderOrder=-10;Vt.add(Kn);var Li=(i,t)=>{let e=new ms(new Vi({map:Or,color:i,blending:Ki,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},Vu=Li(16769712,140),ku=Li(14673663,70);Vt.add(Vu,ku);var Yp=new ae,Zp=new Float32Array(450*3);for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);Zp.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3)}Yp.setAttribute("position",new oe(Zp,3));var Wu=new ki(Yp,new wi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));Vt.add(Wu);var Rr=(i,t,e,n,s,r,o,a,c)=>({t:i,top:new pt(t),hor:new pt(e),fog:new pt(n),sun:new pt(s),hi:r,si:o,night:a,hg:new pt(c)}),pl=[Rr(0,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70"),Rr(.12,"#8fa4d8","#f6c7c0","#efcfcf","#ffd2a8",1.4,.5,.2,"#c4ccc0"),Rr(.35,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0"),Rr(.6,"#7e79c2","#f9bd9c","#e8b9b3","#ffb98a",1.5,.8,.1,"#c8c4c0"),Rr(.75,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70"),Rr(1,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70")],de={top:new pt,hor:new pt,fog:new pt,sun:new pt,hg:new pt,hi:1,si:1,night:0};function Vv(i){let t=0;for(;t<pl.length-2&&i>pl[t+1].t;)t++;let e=pl[t],n=pl[t+1],s=Ze((i-e.t)/(n.t-e.t));["top","hor","fog","sun","hg"].forEach(r=>de[r].copy(e[r]).lerp(n[r],s)),de.hi=Zo(e.hi,n.hi,s),de.si=Zo(e.si,n.si,s),de.night=Zo(e.night,n.night,s)}var Ru=new P,Cu=new P,cs=.5;function kv(i,t){Vv(cs);let e=Math.sin(Math.PI*2*(cs-.12));Ru.set(.25,e,-.9).normalize(),Cu.set(-.25,-e*.9+.05,-.9).normalize(),Vt.fog.color.copy(de.fog),Kn.material.uniforms.top.value.copy(de.top),Kn.material.uniforms.hor.value.copy(de.hor);let n=e>0,s=n?Ru:Cu;Kn.material.uniforms.sunDir.value.copy(s),Kn.material.uniforms.sunCol.value.copy(de.sun),Kn.material.uniforms.glow.value=n?1:.5,Jo.color.copy(de.hor).lerp(de.top,.4),Jo.groundColor.copy(de.hg),Jo.intensity=de.hi,Ps.color.copy(de.sun),Ps.intensity=de.si,Ps.position.copy(s).multiplyScalar(100).add(new P(i,0,t)),Ps.target.position.set(i,0,t),Ps.target.updateMatrixWorld(),Kn.position.set(i,0,t),Vu.position.set(i,0,t).addScaledVector(Ru,640),ku.position.set(i,0,t).addScaledVector(Cu,640),Vu.material.opacity=Ze(e*4+.2,0,1),ku.material.opacity=Ze(-e*4,0,1)*.9,Wu.position.set(i,0,t),Wu.material.opacity=Ze(de.night*1.1,0,1),Qn.material.uniforms.sunDir.value.copy(s),Qn.material.uniforms.sunCol.value.copy(de.sun).multiplyScalar(Ze(n?e*3:-e*1.5,0,1)),Qn.material.uniforms.hor.value.copy(de.hor),Qn.material.uniforms.top.value.copy(de.top),Qn.material.uniforms.fog.value.copy(de.fog),Qn.material.uniforms.night.value=de.night,Pr=Ze(de.night*1.2+.25,0,1)}var Pr=.3,Wv=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",Qn=new K(new un(1e3,1e3),new on({uniforms:{t:{value:0},deep:{value:new pt("#5a8f9c")},shallow:{value:new pt("#a3c8c4")},hor:{value:new pt},top:{value:new pt},fog:{value:new pt},sunDir:{value:new P(0,1,0)},sunCol:{value:new pt},night:{value:0},fogN:{value:22},fogF:{value:250}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,night,fogN,fogF;uniform vec3 deep,shallow,hor,top,fog,sunDir,sunCol;
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
}`}));Qn.rotation.x=-Math.PI/2;Vt.add(Qn);var jn=150,mi=120,Pi=2.6,Dn=3,ml=8,yl=new Float32Array(jn*mi*3),vl=new Float32Array(jn*mi*3),Ls=new ae;Ls.setAttribute("position",new oe(yl,3));Ls.setAttribute("color",new oe(vl,3));{let i=new Uint16Array((jn-1)*(mi-1)*6),t=0;for(let e=0;e<mi-1;e++)for(let n=0;n<jn-1;n++){let s=e*jn+n,r=s+1,o=s+jn,a=o+1;i.set([s,r,o,r,a,o],t),t+=6}Ls.setIndex(new oe(i,1))}var Jp=new K(Ls,new Se({vertexColors:!0,gradientMap:Fe}));Jp.frustumCulled=!1;Vt.add(Jp);var Xv=new pt("#eadcb9"),qv=new pt("#b6dca3"),Yv=new pt("#8fc79b"),Zv=new pt("#bdd6c8"),Jv=new pt("#d3cce9"),$v=new pt("#c8d6c0"),Kv=new pt("#d9b45f"),Qv=new pt("#c8964a"),ke=new pt,Bl=1900;function $p(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let l=0;l<s.count;l++)s.setXY(l,s.getX(l)*t[0],s.getY(l)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,o=i.boundingBox.max.y,a=i.attributes.position,c=new Float32Array(a.count*3);for(let l=0;l<a.count;l++){let h=e+(n-e)*((a.getY(l)-r)/(o-r||1));c[l*3]=c[l*3+1]=c[l*3+2]=h}return i.setAttribute("color",new oe(c,3)),i}var Kp=Vo([[2,2.6,.8],[1.6,2.5,2.4],[1.2,2.3,3.9],[.75,2,5.3]].map(([i,t,e])=>$p(new Ne(i,t,8,1).translate(0,e+t/2,0),[4,2],.72,1.18)).map(i=>(i.deleteAttribute("normal"),i)));Kp.computeVertexNormals();var Qp=Vo([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3]].map(([i,t,e,n])=>{let s=new Mn(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),$p(s,[3,3],.82,1.22)}));Qp.computeVertexNormals();var jv=()=>new Se({gradientMap:Fe,color:16777215,vertexColors:!0,map:Ue("leaf")}),Es=new vn(Kp,new Se({gradientMap:Fe,color:16777215,vertexColors:!0,map:Ue("needle")}),Bl),Ii=new vn(Qp,jv(),Bl),Wo=new vn(new Re(.2,.34,4.2,6).translate(0,2.1,0),new Se({gradientMap:Fe,color:9071196,map:Ue("bark")}),Bl),Ts=new vn(new Xi(.7,10).rotateX(-Math.PI/2),new Se({gradientMap:Fe,color:16777215}),500),ws=new vn(new Mn(.28,0).translate(0,.2,0),new Se({gradientMap:Fe,color:16777215}),160);[Es,Ii,Wo,Ts,ws].forEach(i=>{i.frustumCulled=!1,Vt.add(i)});var jp={value:0};function tM(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=jp,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var tm=(()=>{let i=[];for(let t=0;t<9;t++){let e=t/9*6.28+Q(t,1),n=.9+Q(t,2)*1.3,s=.07,r=Math.cos(e)*.25*Q(t,3),o=Math.sin(e)*.25*Q(t,3),a=(Q(t,4)-.5)*.9,c=new ae,l=new Float32Array([-s,0,0,s,0,0,a*.5-s*.5,n*.6,0,a*.5+s*.5,n*.6,0,a,n,0]);c.setAttribute("position",new oe(l,3)),c.setIndex([0,1,2,1,3,2,2,3,4]),c.computeVertexNormals();let h=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((d,f)=>h.set(d,f*3)),c.setAttribute("color",new oe(h,3)),c.rotateY(e),c.translate(r,0,o),i.push(c)}return Vo(i)})(),rs=new vn(tm,tM(new Se({gradientMap:Fe,color:16777215,vertexColors:!0,side:Te})),1400),eM=(()=>{let i=[],t=new Re(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new oe(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,o])=>{let a=new he(1,9,5).toNonIndexed();a.scale(o,o*.28,o),a.translate(n,s,r);let c=a.attributes.position,l=new Float32Array(c.count*3);for(let h=0;h<c.count;h++){let u=.62+.4*Ze((c.getY(h)-s)/(o*.28)*.5+.5);l[h*3]=u*.9,l[h*3+1]=u,l[h*3+2]=u*.92}a.setAttribute("color",new oe(l,3)),a.deleteAttribute("uv"),i.push(a)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),Vo(i)})(),As=new vn(eM,new Se({gradientMap:Fe,color:16777215,vertexColors:!0}),400);[rs,As].forEach(i=>{i.frustumCulled=!1,Vt.add(i)});var nM=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],em=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],Be=new ue,an=new bn,cn=new P,We=new P,Xo=new P(0,1,0),iM=["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],sM=["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],Iu={a:1e9,b:1e9},Rl=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)(n%10+10)%10===3&&(t=Math.max(t,1-nn(40,170,Math.abs(gi(n)-i))));return t},os=new vn(new Mn(1,1).scale(1,.72,1).translate(0,.45,0),new Se({gradientMap:Fe,color:16777215,map:Ue("leaf")}),1700);os.frustumCulled=!1;Vt.add(os);var rM=["#6fa383","#7fb592","#5f957a","#8cc09a"],oM=["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],Ml=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)(n%10+10)%10===8&&(t=Math.max(t,1-nn(70,190,Math.abs(gi(n)-i))));return t},aM=(()=>{let i=new Re(.11,.15,1,6,14,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=s*7%1,o=r<.09?.62:1;e[n*3]=o,e[n*3+1]=o,e[n*3+2]=o*.95}return i.setAttribute("color",new oe(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),Rs=new vn(aM,new Se({gradientMap:Fe,color:16777215,vertexColors:!0}),2800),Cs=new vn(new Mn(1,1).scale(1,.45,1),new Se({gradientMap:Fe,color:16777215}),2800);[Rs,Cs].forEach(i=>{i.frustumCulled=!1,Vt.add(i)});var cM=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],lM=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],hM=["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],uM=new pt("#9ccf8a"),Dp=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=(n%10+10)%10;if((s===5||s===7)&&Math.abs(gi(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},$u=i=>nn(.4,.55,sn(i*.0022+31,5)*.6+sn(i*.0053+8,2)*.4);function dM(i,t){let e=i-jn/2*Pi,n=t-60,s=0,r=0,o=0,a=0,c=0,l=0,h=0,u=0;for(let g=0;g<mi;g++){let x=n+g*Dn,m=Ml(x),p=Rl(x),M=$u(x);for(let w=0;w<jn;w++){let _=e+w*Pi,b=ss(_,x),S=(g*jn+w)*3;yl[S]=_,yl[S+1]=b,yl[S+2]=-x;let A=Math.abs(_-_e(x))-He(x),y=sn(_*.05,x*.05),T=(Q(w+e,g)-.5)*.05;if(A<0)ke.copy($v);else{ke.copy(qv).lerp(Yv,y),ke.lerp(Xv,1-nn(.5,3.5,A)),ke.lerp(Zv,nn(6,13,b)*.8),ke.lerp(Jv,nn(13,24,b)),m>0&&ke.lerp(uM,m*nn(0,5,A)*.65);{let R=sn(_*.03+50,x*.03+20),I=nn(.5,.72,R)*nn(.4,2.5,A)*(1-nn(9,26,A));I>0&&ke.lerp(sn(_*.2,x*.2)>.5?Kv:Qv,I*.85)}}if(vl[S]=ke.r+T,vl[S+1]=ke.g+T,vl[S+2]=ke.b+T,A>5&&b<17&&r<Bl&&!Dp(x,A)){let R=Q(_*3.1,x*1.7),I=.05*(.5+sn(_*.03+9,x*.03))*(A<34?.75:1)+(A<36?(.05+.09*M)*(1-A/44):0)*(.6+.8*sn(_*.07,x*.07))+(A<60?p*.16*(1-A/70):0);if(R<I*(1-m*.92)){let N=(Q(_,x)-.5)*Pi*.9,O=(Q(x,_)-.5)*Dn*.9,L=.8+Q(_+4,x+1)*.9;cn.set(_+N,ss(_+N,x+O)-.1,-(x+O)),an.setFromAxisAngle(Xo,Q(x,_)*6.28),A<60&&Q(_*.7,x*.3)<.04+p*.95?(We.set(L,L,L),Be.compose(cn,an,We),Ii.setMatrixAt(o,Be),Wo.setMatrixAt(o,Be),Ii.setColorAt(o,ke.set(sM[Q(_,x+3)*4|0])),o++):Q(_*1.1,x*1.7)<.3?(We.set(L*1.05,L*(.9+Q(x,5)*.5),L*1.05),Be.compose(cn,an,We),Ii.setMatrixAt(o,Be),Wo.setMatrixAt(o,Be),Ii.setColorAt(o,ke.set(hM[Q(_,x+7)*7|0])),o++):Q(_*1.9,x*.8)>.55&&c<400?(We.set(L*1.2,L*1.2,L*1.2),Be.compose(cn,an,We),As.setMatrixAt(c,Be),As.setColorAt(c,ke.set(nM[Q(_+5,x)*4|0])),c++):(We.set(L,L*(.9+Q(x,3)*1.1),L),Be.compose(cn,an,We),Es.setMatrixAt(a,Be),Es.setColorAt(a,ke.set(iM[Q(_+2,x)*4|0])),a++),r++}}}}for(let g=0;g<mi;g++){let x=n+g*Dn,m=Rl(x),p=Ml(x);for(let M=0;M<jn;M+=1){let w=e+M*Pi,_=Math.abs(w-_e(x))-He(x);if(_<2.2||_>55||h>=1700||Dp(x,_)||ss(w,x)>15||Q(w*2.3+1,x*1.3)>(.05+m*.2)*(1-p*.8))continue;let A=(Q(w,x+9)-.5)*Pi,y=(Q(x,w+9)-.5)*Dn,T=.7+Q(w+8,x)*.9+m*.3;cn.set(w+A,ss(w+A,x+y)-.1,-(x+y)),an.setFromAxisAngle(Xo,Q(x,w)*6.28),We.set(T*1.2,T,T*1.1),Be.compose(cn,an,We),os.setMatrixAt(h,Be),os.setColorAt(h,ke.set(m>.25&&Q(w,x+5)<.55?oM[Q(w,x)*4|0]:rM[Q(x,w+2)*4|0])),h++}}for(let g=0;g<mi;g++){let x=n+g*Dn,m=Ml(x);if(!(m<.02))for(let p=0;p<jn;p++){let M=e+p*Pi,w=_e(x),_=Math.abs(M-w)-He(x);if(!(_<.3||_>26||u>=2780))for(let b=0;b<2;b++){if(Q(M*3.7+b*5,x*2.9+b)>m*(1.05-_*.012))continue;let S=(Q(M+b,x+3)-.5)*Pi,A=(Q(x+b,M+3)-.5)*Dn,y=M+S,T=x+A,R=11+Q(y,T)*12,I=.8+Q(T,y)*.6,N=.05+Q(y*2,T)*.14,O=y>w?1:-1,L=ss(y,T)-.3;cn.set(y,L,-T),an.setFromAxisAngle(new P(0,0,1),O*N),We.set(I,R,I),Be.compose(cn,an,We),Rs.setMatrixAt(u,Be),Rs.setColorAt(u,ke.set(cM[Q(y,T+1)*4|0]));let H=y-O*Math.sin(N)*R,q=L+Math.cos(N)*R;cn.set(H,q,-T),an.identity();let W=1.5+Q(T,y+4)*1.6;We.set(W,W,W),Be.compose(cn,an,We),Cs.setMatrixAt(u,Be),Cs.setColorAt(u,ke.set(lM[Q(y+2,T)*4|0])),u++}}}Rs.count=Cs.count=u,Rs.instanceMatrix.needsUpdate=Cs.instanceMatrix.needsUpdate=!0,Rs.instanceColor&&(Rs.instanceColor.needsUpdate=!0),Cs.instanceColor&&(Cs.instanceColor.needsUpdate=!0),os.count=h,os.instanceMatrix.needsUpdate=!0,os.instanceColor&&(os.instanceColor.needsUpdate=!0);for(let g=0;g<mi;g++){let x=n+g*Dn;for(let m=0;m<4;m++){let p=m%2?1:-1;if(Q(x*.53,m+3)>.62||l>=1400)continue;let M=m>1&&Q(x,m+9)>.6,w=He(x)+p*0+(M?-(1.5+Q(x,m+1)*4):-.3+Q(x,m+2)*3.4),_=_e(x)+p*w,b=-(x+(Q(x,m)-.5)*Dn);if(M&&Math.abs(_-_e(x))>He(x)-1.5)continue;let S=.7+Q(x+m,7)*.9;cn.set(_,Math.max(-.2,ss(_,x)-.15),b),an.setFromAxisAngle(Xo,Q(x,m+5)*6.28),We.set(S,S*(.8+Q(x,m+6)*.7),S),Be.compose(cn,an,We),rs.setMatrixAt(l,Be),rs.setColorAt(l,ke.set(em[Q(x,m+4)*4|0])),l++}}rs.count=l,As.count=c,rs.instanceMatrix.needsUpdate=As.instanceMatrix.needsUpdate=!0,rs.instanceColor&&(rs.instanceColor.needsUpdate=!0),As.instanceColor&&(As.instanceColor.needsUpdate=!0),Es.count=a,Ii.count=o,Wo.count=o,Es.instanceMatrix.needsUpdate=Ii.instanceMatrix.needsUpdate=Wo.instanceMatrix.needsUpdate=!0,Es.instanceColor&&(Es.instanceColor.needsUpdate=!0),Ii.instanceColor&&(Ii.instanceColor.needsUpdate=!0);let d=0,f=0;for(let g=0;g<mi;g++){let x=n+g*Dn;for(let m=0;m<3;m++){if(Q(x*.37,m+7)>.5||d>=500)continue;let p=(Q(x+m,5)*2-1)*(He(x)-2.2),M=_e(x)+p;cn.set(M,.03,-(x+(Q(x,m)-.5)*Dn)),an.setFromAxisAngle(Xo,Q(x,m+2)*6.28);let w=.7+Q(x+m,9)*.9;We.set(w,1,w),Be.compose(cn,an,We),Ts.setMatrixAt(d,Be),Ts.setColorAt(d,ke.set(Q(x,m)>.5?"#a8dba9":"#96cfa0")),d++,Q(x,m+11)>.72&&f<160&&(Be.compose(cn.setY(.05),an,We.set(1,1,1)),ws.setMatrixAt(f,Be),ws.setColorAt(f,ke.set(Q(x,m+1)>.4?"#f7b9cf":"#fbe39a")),f++)}}Ts.count=d,ws.count=f,Ts.instanceMatrix.needsUpdate=ws.instanceMatrix.needsUpdate=!0,Ts.instanceColor&&(Ts.instanceColor.needsUpdate=!0),ws.instanceColor&&(ws.instanceColor.needsUpdate=!0),Ls.attributes.position.needsUpdate=!0,Ls.attributes.color.needsUpdate=!0,Ls.computeVertexNormals()}function fM(i,t){let e=Math.floor(-t/(Dn*ml))*Dn*ml,n=Math.round(i/(Pi*ml))*Pi*ml;(e!==Iu.b||n!==Iu.a)&&(Iu={a:n,b:e},dM(n,e),NM(e))}var Ku=140,nm=[],Qu=new ae,Sl=new Float32Array(Ku*3);for(let i=0;i<Ku;i++)nm.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);Qu.setAttribute("position",new oe(Sl,3));var Xu=new wi({color:16773792,size:.35,map:Or,transparent:!0,opacity:0,blending:Ki,depthWrite:!1}),Cl=new ki(Qu,Xu);Cl.frustumCulled=!1;Vt.add(Cl);var qu=46,Is=new Map,Pu=[],im=new Set,Lu=0,ju=i=>{let t=70+i*qu+Q(i,1)*20,e=(Q(i,2)*2-1)*.6*He(t);return[_e(t)+e,-t]};function pM(){let i=new jt,t=new K(new Re(.3,.3,.55,10),new Pe({color:16767392}));t.position.y=.38;let e=new K(new Re(.34,.34,.06,10),new Pe({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=Li(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new K(new un(1,1).rotateX(-Math.PI/2),new Pe({map:Or,color:16762746,transparent:!0,opacity:.4,blending:Ki,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function mM(i,t){let e=Math.max(0,Math.floor((t-120)/qu)),n=Math.floor((t+320)/qu);for(let[s,r]of Is)(s<e||s>n)&&(Vt.remove(r),Pu.push(r),Is.delete(s));for(let s=e;s<=n;s++){if(im.has(s)||Is.has(s))continue;let r=Pu.pop()||pM();r.userData.fade=1,r.scale.setScalar(1),Vt.add(r),Is.set(s,r)}for(let[s,r]of Is){let[o,a]=ju(s);r.position.set(o,Math.sin(i*1.1+s)*.04,a),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*Pr)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*Pr)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(Vt.remove(r),Is.delete(s),Pu.push(r),r.userData.collecting=!1))}}var Oe=new jt;Vt.add(Oe);var Di=new qi;Di.moveTo(0,3.4);Di.quadraticCurveTo(.5,2.4,.7,1);Di.lineTo(.7,-1.3);Di.lineTo(-.7,-1.3);Di.lineTo(-.7,1);Di.quadraticCurveTo(-.5,2.4,0,3.4);var td=new K(new gr(Di,{depth:.24,bevelEnabled:!1}),new Se({gradientMap:Fe,color:14722684,emissive:4204570,map:Ue("wood")}));td.rotation.x=-Math.PI/2;td.position.y=-.04;Oe.add(td);var jo=new K(new Mo(Di),new Se({gradientMap:Fe,color:11568232,emissive:2759186,map:Ue("plank")}));jo.geometry.scale(.8,.86,1);jo.geometry.translate(0,.2,0);jo.rotation.x=-Math.PI/2;jo.position.y=.21;Oe.add(jo);{let i=Sn(9068357,{map:Ue("wood")}),t=Sn(13146740,{map:Ue("plank")}),e=Di,n=new qi(e.getPoints(24)),s=new xs(n.getPoints(24).map(u=>new ct(u.x*.86,u.y*.9+.1)).reverse());n.holes.push(s);let r=new gr(n,{depth:.07,bevelEnabled:!1}),o=new K(r,i);o.rotation.x=-Math.PI/2,o.position.y=.2,Oe.add(o);for(let u=0;u<6;u++){let d=-2.3+u*.72,f=u<2?1-u*.1:1.28,g=new K(new Tn(f,.07,.08),i);g.position.set(0,.23,d),Oe.add(g)}let a=new K(new Tn(1.35,.07,.34),t);a.position.set(0,.5,.55),Oe.add(a);let c=new K(new Ri(.2,.045,6,14),Sn(14271378));c.rotation.x=Math.PI/2,c.position.set(.25,.27,-1.7),Oe.add(c);let l=c.clone();l.scale.setScalar(.8),l.position.set(.25,.32,-1.7),Oe.add(l);let h=new K(new he(.13,8,6),i);h.position.set(0,.22,-3.35),Oe.add(h)}{let i=Sn(4011314),t=Sn(11045468,{map:Ue("woodV")});[[-.35,.34,-1.55,.34],[-.05,.32,-1.35,.28],[-.3,.3,-1.1,.26]].forEach(([s,r,o,a])=>{let c=new K(new Mn(a,1),i);c.scale.set(1.2,.7,1.1),c.position.set(s,r,o),Oe.add(c)});let e=new K(new Re(.025,.035,4.6,6),t);e.position.set(-.55,.9,-2.6),e.rotation.set(1.28,0,.14),Oe.add(e);let n=new K(new Re(.006,.006,2.3,3),Sn(14209216));n.position.set(-.95,.35,-4.7),Oe.add(n)}var sm=new K(new Re(.03,.04,.9,6),new Se({gradientMap:Fe,color:8018508}));sm.position.set(0,.55,-3.05);Oe.add(sm);var Ol=new K(new he(.12,10,8),new Pe({color:16769704}));Ol.position.set(0,1.05,-3.05);Oe.add(Ol);var ed=Li(16762746,2.4);ed.position.copy(Ol.position);Oe.add(ed);var nd=new Ao(16763274,0,22,1.6);nd.position.set(0,1.5,-2.8);Oe.add(nd);function Np(){let i=new jt,t=new Se({gradientMap:Fe,color:15716516,emissive:3811866}),e=new K(new Re(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new K(new Tn(.2,.03,.62),new Se({gradientMap:Fe,color:15047302}));n.position.z=1.55,i.add(n);let s=new K(new Tn(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new jt;return r.add(i),Oe.add(r),r}var Up=[Np(),Np()],gM=[new P(-.7,.5,-.3),new P(.7,.5,-.3)],xM=[new P(-1.05,.55,-.9),new P(1.05,.55,-.9)],Il=[];for(let i=0;i<28;i++){let t=new K(new xr(.35,.42,28).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,Vt.add(t),Il.push(t)}var _M=0,Lr=(i,t)=>{let e=Il[_M++%Il.length];e.position.set(i,.04,t),e.userData.age=0};function Sn(i,t){return new Se(Object.assign({gradientMap:Fe,color:i},t||{}))}var Ns=new jt;Oe.add(Ns);Ns.position.set(0,.42,.55);Ns.scale.setScalar(1.3);var zn=new jt;zn.position.y=.3;Ns.add(zn);var Dr=new jt;Dr.position.y=1;zn.add(Dr);var as=new jt;as.position.y=.2;Dr.add(as);var rm=[];{let i=Sn(9279656,{map:Ue("cloth")}),t=Sn(7305868,{map:Ue("cloth")}),e=Sn(4540762,{map:Ue("cloth")}),n=Sn(14264706),s=Sn(14727535,{map:Ue("straw"),side:Te}),r=Sn(12159562,{map:Ue("straw")}),o=Sn(2959918),a=new K(new he(.5,14,10),e);a.scale.set(1.2,.42,.85),a.position.y=-.1,Ns.add(a),[-1,1].forEach(p=>{let M=new K(new he(.17,8,6),e);M.position.set(p*.5,-.02,-.3),Ns.add(M)});let c=new K(new Re(.3,.4,.8,12),i);c.position.y=.42,zn.add(c);let l=new K(new Ri(.35,.03,6,14),t);l.rotation.x=Math.PI/2,l.position.y=.12,zn.add(l);let h=new K(new he(.44,12,8),i);h.scale.set(1,.45,.7),h.position.y=.78,zn.add(h);let u=new K(new Ri(.14,.045,6,10),t);u.rotation.x=Math.PI/2,u.position.y=.9,zn.add(u);let d=new K(new Re(.09,.1,.16,6),n);d.position.y=.95,zn.add(d);let f=new K(new he(.21,14,10),o);f.position.y=.2,Dr.add(f);let g=new K(new Ne(.66,.36,24,1,!0),s);g.position.y=.1,as.add(g);let x=new K(new Ne(.1,.08,8),r);x.position.y=.22,as.add(x);let m=new K(new Ri(.655,.018,6,28),r);m.rotation.x=Math.PI/2,m.position.y=-.075,as.add(m),[-1,1].forEach(p=>{let M=new K(new Re(.008,.008,.3,4),o);M.position.set(p*.18,-.12,.05),as.add(M)}),[-1,1].forEach(p=>{let M=new jt;M.position.set(p*.42,.75,0),zn.add(M);let w=new K(new Re(.095,.08,.6,8),i);w.position.y=-.3,M.add(w);let _=new K(new he(.085,8,6),n);_.position.y=-.62,M.add(_);let b=new K(new Ri(.085,.025,5,8),t);b.rotation.x=Math.PI/2,b.position.y=-.52,M.add(b),rm.push(M)})}var Ds=new jt;Oe.add(Ds);{let i=Sn(12159574,{map:Ue("woodV")}),t=Sn(13602164,{map:Ue("plank")}),e=new K(new Re(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,Ds.add(e);let n=new K(new Tn(.22,.04,.55),t);n.position.z=2,Ds.add(n);let s=new K(new Tn(.2,.04,.05),i);s.position.z=-.03,Ds.add(s)}var bs=1,gl=0,B={px:_e(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};B.pz=-30;B.px=_e(30);B.psi=ti(30);var Du=0,Us=!1,id=0,sd=0,Je=i=>document.getElementById(i);function Nr(i){let t=Je("toast");t.textContent=i,t.style.opacity=1,clearTimeout(Nr.h),Nr.h=setTimeout(()=>t.style.opacity=0,4200)}Ir.addEventListener("pointerdown",i=>{Us&&(PM(),Ir.setPointerCapture(i.pointerId),B.hold=!0,am(i),tn.resume())});Ir.addEventListener("pointermove",i=>{B.hold&&am(i)});var om=()=>{B.hold=!1,id=0,sd=0};Ir.addEventListener("pointerup",om);Ir.addEventListener("pointercancel",om);function am(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;id=Math.abs(t)<.1?0:Ze((t-Math.sign(t)*.1)*1.4,-1,1),sd=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(B.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(B.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(B.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(B.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(B.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(B.key.r=!1)});Je("snd").onclick=()=>{tn.on=!tn.on,tn.ctx&&tn.setOn(tn.on),Je("snd").textContent="Sonido: "+(tn.on?"s\xED":"no")};var Cr=0;try{Cr=+localStorage.getItem("rio3d-pos")||0}catch{}function rd(){try{Us&&B.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(B.dist)))}catch{}}setInterval(rd,2500);addEventListener("pagehide",rd);document.addEventListener("visibilitychange",rd);function yM(i){B.pz=-i,B.px=_e(i),B.psi=ti(i),B.dist=i}Cr>150&&(Je("go").textContent="Continuar ("+Cr+" m)",Je("go2").hidden=!1,Je("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}Cr=0,Je("go").onclick()});Je("go").onclick=()=>{Cr>150&&yM(Cr);try{tn.init(),tn.resume()}catch{}Je("start").hidden=!0,Je("hud").hidden=!1,Je("places-row").hidden=!1,cd(0),Je("hint").hidden=!1,Us=!0,setTimeout(()=>Je("hint").style.opacity=0,9e3),setTimeout(()=>Nr("Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros."),1500*1e3)};var cm=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+Q(n,7)*220,r=120+Q(n,8)*70,o=(i-s)/r;t=Math.max(t,Math.exp(-o*o))}return t},qo=16,lm=[];for(let i=0;i<qo;i++){let t=new ms(new Vi({map:Or,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,Vt.add(t),lm.push(t)}var od=800,ad=new ae,hm=new Float32Array(od*6),um=[];for(let i=0;i<od;i++)um.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);ad.setAttribute("position",new oe(hm,3));var dm=new fr({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),Qo=new ho(ad,dm);Qo.frustumCulled=!1;Qo.visible=!1;Vt.add(Qo);var Ge={rain:0,target:0,t:50,on:!1},vM=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),o=[];for(let l=0;l<=220;l++){let h=l/220*Math.PI*2,u=Math.cos(h),d=Math.sin(h),f=sn(u*2.2+n,d*2.2+n),g=sn(u*8+n*2,d*8+n),x=Math.pow(Math.max(0,g-.5)/.5,1.4),m=t*(.3+.55*Math.pow(f,1.5)+.9*x);if(r.set([u*i,-40,d*i,u*i,m,d*i],l*6),l<220){let p=l*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}}let a=new ae;a.setAttribute("position",new oe(r,3)),a.setIndex(o);let c=new K(a,new on({side:Te,fog:!1,depthWrite:!1,uniforms:{col:{value:new pt},hor:{value:new pt},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));return c.renderOrder=-8,c.frustumCulled=!1,c.userData.t=e,Vt.add(c),c}),Yo=new pt,Yu=new pt;function MM(i,t){Us&&(Ge.t-=i,Ge.t<=0&&(Ge.target=Ge.target?0:1,Ge.t=Ge.target?60+Math.random()*40:100+Math.random()*70,Ge.target&&Nr("Empieza una llovizna suave"))),Ge.rain+=(Ge.target-Ge.rain)*Math.min(1,i*.25);let e=Ge.rain>.15;e!==Ge.on&&(Ge.on=e,tn.rain(e));let n=1-nn(.08,.3,cs),s=Ze(Math.max(cm(t)*.95,Ge.rain*.4,n*.4,.2));Ge.fog=s,Vt.fog.near=Zo(22,5,s),Vt.fog.far=Zo(250,85,s),Yo.set(15131886).multiplyScalar(1-de.night*.7),Vt.fog.color.copy(de.fog).lerp(Yo,s*.55);let r=Qn.material.uniforms;r.fogN.value=Vt.fog.near,r.fogF.value=Vt.fog.far,r.fog.value.copy(Vt.fog.color),Kn.material.uniforms.hor.value.lerp(Vt.fog.color,s*.8),Kn.material.uniforms.top.value.lerp(Vt.fog.color,s*.35),Jo.intensity*=1-.22*Ge.rain,Ps.intensity*=1-.45*Ge.rain,vM.forEach(a=>{a.position.set(B.px,0,B.pz);let c=a.userData.t;Yo.copy(de.hor),Yu.copy(de.top).multiplyScalar(.55).lerp(Yo.set(8095400).multiplyScalar(1-de.night*.75),.45),a.material.uniforms.col.value.copy(de.hor).lerp(Yu,1-c).lerp(Vt.fog.color,s*.75),a.material.uniforms.hor.value.copy(Kn.material.uniforms.hor.value)});let o=Math.floor(t/25)-2;for(let a=0;a<qo;a++){let c=o+a,l=lm[(c%qo+qo)%qo],h=c*25,u=_e(h)+(Q(c,3)-.5)*He(h)*1.5;l.position.set(u+Math.sin(B.t*.05+c)*3,1.2+Q(c,4)*2.2,-h);let d=l.position.x-B.px,f=l.position.z-B.pz,g=Math.hypot(d,f);l.material.opacity=s*.5*nn(6,22,g)*(1-nn(300,380,g))*(.7+.3*Q(c,5)),l.material.color.copy(Vt.fog.color).multiplyScalar(1.05)}if(Qo.visible=Ge.rain>.03,dm.opacity=.42*Ge.rain,Qo.visible){for(let a=0;a<od;a++){let c=um[a];c[1]-=16*i,c[1]<0&&(c[1]=13+Math.random()*2,c[0]=Math.random()*40-20,c[2]=Math.random()*40-24);let l=B.px+c[0],h=B.pz+c[2];hm.set([l,c[1],h,l-.05,c[1]+.65,h],a*6)}ad.attributes.position.needsUpdate=!0,Math.random()<i*9*Ge.rain&&Lr(B.px+(Math.random()-.5)*28,B.pz-Math.random()*22+4)}}var Pl=["Puente de madera","Torii sobre el agua","Aldea de farolillos","Jard\xEDn de sakura","Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos"],Ur=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>Ur.add(i))}catch{}function SM(){try{localStorage.setItem("rio3d-found",JSON.stringify([...Ur]))}catch{}}var bM=Pl.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,Je("chips").appendChild(t),t});function cd(i){Je("places").textContent=Ur.size+"/"+Pl.length,bM.forEach((e,n)=>e.classList.toggle("on",Ur.has(n)));let t=Math.max(0,Math.floor((i-240)/Ll)-1);for(;gi(t)<i+1;)t++;Je("next").textContent="Siguiente: "+Pl[t%10]+" en "+Math.max(0,Math.round((gi(t)-i)/10)*10)+" m"}var Ll=260,gi=i=>240+i*Ll+Q(i,5)*50,Zt=(i,t)=>new Se(Object.assign({gradientMap:Fe,color:i},t||{})),fm=[],bl=new Map,EM=new Set,Bt=(i,t,e,n,s,r,o,a,c)=>{let l=new K(new Tn(t,e,n),Zt(s,c));return l.position.set(r,o,a),i.add(l),l},be=(i,t,e,n,s,r,o,a,c=7,l)=>{let h=new K(new Re(t,e,n,c),Zt(s,l));return h.position.set(r,o,a),i.add(h),h},en=(i,t,e,n,s,r,o=.7)=>{let a=Li(t,e);return a.position.set(n,s,r),a.userData.base=o,i.add(a),fm.push(a),a},ld=[],Nu=new Map;function pm(i,t,e,n=64,s=256){let r=i+t+n;if(Nu.has(r))return Nu.get(r);let o=document.createElement("canvas");o.width=n,o.height=s;let a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.fillRect(0,0,n,5),a.fillRect(0,s-5,n,5);let c=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);a.font="bold "+c+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',a.textAlign="center",a.textBaseline="middle";let l=[...i].length;[...i].forEach((u,d)=>a.fillText(u,n/2,s/(l*2)+d*s/l));let h=new Ai(o);return h.colorSpace=ln,Nu.set(r,h),h}function Fp(i,t,e,n,s,r){let o=t(e,n),a=new jt;a.position.set(e,o,n),i.add(a),be(a,.07,.09,6.4,4864562,0,3.2,0,5),Bt(a,1.3,.09,.09,4864562,.62,6,0);let c=new K(new un(1.15,4.4),new Se({gradientMap:Fe,map:pm(s,r,"#f6efe0"),side:Te}));return c.position.set(.62,3.75,0),a.add(c),a.userData.sw=1,ld.push({b:c,ph:e}),a}function El(i,t,e,n,s=1){let r=new jt;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let o=11052706;be(r,.5,.62,.3,o,0,.15,0,8),be(r,.17,.2,1.3,o,0,.95,0,6),be(r,.45,.3,.2,o,0,1.7,0,8),Bt(r,.62,.55,.62,o,0,2.05,0),Bt(r,.34,.34,.66,16767392,0,2.05,0).material=new Pe({color:16767392}),Bt(r,.66,.34,.34,16767392,0,2.05,0).material=new Pe({color:16767392});let a=new K(new Ne(.62,.5,4),Zt(o));a.rotation.y=Math.PI/4,a.position.y=2.6,r.add(a);let c=new K(new he(.11,6,5),Zt(o));return c.position.y=2.92,r.add(c),en(r,16762746,2.6,0,2.05,0,.8),r}function TM(i,t,e,n){for(let o of[-1,1])be(i,.22,.3,10,6965818,o*(e+1.6),t(o*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=be(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let o=0;o<12;o++){let a=(o+.5)/12,c=-s/2+a*s,l=new K(new un(.42,1),new Se({gradientMap:Fe,color:16777215,side:Te}));l.position.set(c,7.9,n),l.rotation.set(0,0,o%2?.18:-.18),i.add(l)}for(let o of[-1,1]){let a=new K(new Ne(.3,1,6),Zt(15128736));a.position.set(o*(e*.5),7.8,n),a.rotation.x=Math.PI,i.add(a)}}function ko(i,t,e,n,s,r){for(let o of[-1,1])Fp(i,t,o*(e+1.6),54,n,r),Fp(i,t,o*(e+3.6),49,n,r),El(i,t,o*(e+2.8),42);s&&TM(i,t,e,37)}function Zu(i,t,e,n,s,r=1){let o=new K(new Ne(t,e,4),Zt(s));o.rotation.y=Math.PI/4,o.position.y=n,o.scale.z=r,i.add(o);let a=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([c,l])=>{let h=new K(new Ne(.32,1.3,5),Zt(s));h.position.set(c*a,n-e/2+.55,l*a*r),h.rotation.set(l*.7,0,-c*.7),i.add(h)})}function wM(i,t,e,n){let s=new jt;s.position.set(t,e,n),i.add(s),Bt(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let o=0;o<4;o++){let a=4.3-o*.75;Bt(s,a,2.3,a,o%2?15853267:15326664,0,r+1.15,0),Bt(s,a+.12,.18,a+.12,11880250,0,r+.1,0);for(let[c,l]of[[1,1],[-1,1],[1,-1],[-1,-1]])be(s,.1,.1,2.3,11880250,c*a/2,r+1.15,l*a/2,6);Zu(s,(a/2+.95)/.707,1.5,r+2.9,5591134),r+=3.1}be(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let o=0;o<6;o++)be(s,.55-o*.07,.55-o*.07,.12,14264410,0,r+.2+o*.62,0,8);return en(s,16762746,5,0,3,3.4,.7),s}function AM(i,t,e,n,s,r){let o=new jt;return o.position.set(t,e,n),o.scale.setScalar(s),i.add(o),[-2.2,2.2].forEach(a=>be(o,.3,.36,6,r,a,3,0,8)),Bt(o,6.8,.4,.55,2894382,0,6.4,0),Bt(o,5.6,.35,.4,r,0,5.4,0),Bt(o,.5,.9,.4,r,0,5.85,0),o}function RM(i,t){let e=new jt,n=16184302,s=15328474,r=new K(new he(.5,10,8),Zt(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let o=new K(new Ne(.2,.7,5),Zt(s));o.rotation.x=-Math.PI/2-.3,o.position.set(0,1.35,-.85),e.add(o),be(e,.045,.045,1.1,4012598,-.12,.55,.05,4),be(e,.045,.045,1.1,4012598,.12,.55,.05,4);let a=new jt;a.position.set(0,1.6,.55),e.add(a);let c=be(a,.07,.09,1,n,0,.45,.05,5);c.rotation.x=-.35;let l=be(a,.06,.07,.7,n,0,1.05,.3,5);l.rotation.x=.45;let h=new K(new he(.14,8,6),Zt(n));h.position.set(0,1.4,.55),a.add(h);let u=new K(new Ne(.05,.5,4),Zt(14918218));return u.rotation.x=Math.PI/2,u.position.set(0,1.38,.9),a.add(u),e.scale.setScalar(i),ld.push({nk:a,ph:t}),e}var $o=new on({transparent:!0,depthWrite:!1,side:Te,uniforms:{t:{value:0},fogCol:{value:new pt(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`});function CM(i){let t=gi(i),e=ti(t),n=i%10,s=new jt,r=He(t),o=n===6||Q(i,9)>.5?1:-1;s.position.set(_e(t),0,-t),s.rotation.y=-e;let a=(f,g)=>{let x=-e;return ss(_e(t)+f*Math.cos(x)+g*Math.sin(x),t-(-f*Math.sin(x)+g*Math.cos(x)))},c=13199183,l=11569004,h=8018508,u=15773373,d=8368266;if(n===0){let f=r*2+12,g=18,x=11880250,m=10329242,p=S=>3.4+1.7*(1-S*S);for(let S=0;S<g;S++){let A=(S+.5)/g*2-1,y=A*f/2,T=p(A),R=Bt(s,f/g+.4,.34,4.2,l,y,T,0,{map:Ue("plank")});R.rotation.z=-A*.4,Bt(s,.07,.34,4.3,h,y-f/g/2,T,0).rotation.z=-A*.4}for(let S of[-1.7,1.7])for(let A=0;A<g;A++){let y=(A+.5)/g*2-1,T=y*f/2,R=Bt(s,f/g+.5,.4,.3,7293498,T,p(y)-.4,S);R.rotation.z=-y*.4}for(let S of[-2,2]){for(let A=0;A<=g;A++){let y=A/g*2-1,T=y*f/2,R=p(y);Bt(s,.18,1.5,.18,x,T,R+.95,S);let I=new K(new he(.16,8,6),Zt(14264410));if(I.position.set(T,R+1.8,S),s.add(I),A%3===0){let N=new K(new Re(.22,.22,.45,8),new Pe({color:16767392}));N.position.set(T,R+2.35,S),s.add(N);let O=new K(new Ne(.3,.2,8),Zt(x));O.position.set(T,R+2.68,S),s.add(O),en(s,16762746,3,T,R+2.35,S,.8)}}for(let A=0;A<g;A++){let y=(A+.5)/g*2-1,T=y*f/2,R=p(y),I=Bt(s,f/g+.2,.14,.14,x,T,R+1.5,S);I.rotation.z=-y*.4;let N=Bt(s,f/g+.2,.1,.1,x,T,R+.7,S);N.rotation.z=-y*.4}}let M=p(0);for(let[S,A]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])be(s,.22,.26,4.2,x,S,M+2.1,A,8);let w=new K(new Ne(4.6,2.4,4),Zt(5982799));w.rotation.y=Math.PI/4,w.position.y=M+5.4,w.scale.set(1,1,.8),s.add(w),Bt(s,6.4,.3,.3,14264410,0,M+4.35,-1.8),Bt(s,6.4,.3,.3,14264410,0,M+4.35,1.8);let _=new K(new he(.4,10,8),new Pe({color:16764810}));_.position.set(0,M+3.6,0),s.add(_),en(s,16762746,6,0,M+3.6,0,.9);let b=[15245466,15913098,10274736,10466268];for(let S=0;S<12;S++){let A=(S+.5)/12*2-1,y=A*(f/2-2),T=p(A)+2.7+Math.sin(S*1.7)*.06,R=new K(new un(.5,.7),Zt(b[S%4],{side:Te}));R.position.set(y,T,0),R.rotation.set(0,0,Math.PI),s.add(R)}Bt(s,f-4,.04,.04,7293498,0,p(0)+3.1,0).scale.y=1,[-1,1].forEach(S=>{let A=S*(f/2+.6);Bt(s,3.4,5.5,5,m,A,.3,0,{map:Ue("stone")}),Bt(s,3.6,.35,5.3,8223610,A,3.2,0);for(let R=0;R<3;R++)Bt(s,1.2,.3,4.2,m,S*(f/2+2.6+R*1.1),.2+R*0,0).position.y=2.2-R*.8;let y=new K(new he(.5,8,6),Zt(12039082));y.scale.set(.9,1.1,1),y.position.set(A,3.9,2.2),s.add(y);let T=y.clone();T.position.z=-2.2,s.add(T)}),[-.28,.28].forEach(S=>{Bt(s,1.8,5.2,4,m,S*f,.4,0,{map:Ue("stone")})})}else if(n===1)[-1,1].forEach(f=>{be(s,.32,.38,7,c,f*3.6,2,0,10)}),Bt(s,10.5,.5,1,c,0,5.7,0),Bt(s,11.8,.35,1.3,5982794,0,6.15,0),Bt(s,8,.28,.5,c,0,4.8,0),en(s,16762746,3,0,4.2,0,.6);else if(n===2){let f=(m,p,M,w,_,b,S,A)=>{let y=a(p,M);m.position.set(p,y-.2,M),m.rotation.y=A,s.add(m),Bt(m,w,b,_,15258550,0,b/2,0,{map:Ue("plank")}),Bt(m,w+.3,.35,_+.3,7293498,0,.1,0);let T=new K(new Ne(Math.max(w,_)*.82,b*.7,4),Zt(S));T.rotation.y=Math.PI/4,T.position.y=b+b*.3,T.scale.set(w/Math.max(w,_),1,_/Math.max(w,_)),m.add(T);let R=new Pe({color:16769184}),I=Bt(m,.9,.9,.12,16769184,-w*.22,b*.55,_/2+.02);I.material=R;let N=Bt(m,.9,.9,.12,16769184,w*.22,b*.55,_/2+.02);N.material=R,Bt(m,.8,1.5,.14,8014394,0,.85,_/2+.04),en(m,16762746,4.2,-w*.22,b*.55,_/2+.6,.85),en(m,16762746,4.2,w*.22,b*.55,_/2+.6,.85);let O=Bt(m,.7,1.6,.7,9075314,w*.25,b+1.1,-_*.2),L=Li(16777215,3);L.material.blending=qn,L.material.opacity=.3,L.position.set(w*.25,b+2.8,-_*.2),m.add(L);let H=new K(new he(.22,8,6),Zt(14245962,{emissive:8006170}));H.position.set(w/2-.2,b*.78,_/2+.5),m.add(H),en(m,16751210,2.4,w/2-.2,b*.78,_/2+.5,.8)},g=[11759722,9398879,11042906,8219250],x=0;for(let m of[-1,1])for(let p=0;p<7;p++){let M=-26+p*8.5+Q(i,p+m*9)*3,w=r+7+Q(i,p+30+m)*6+p%2*5,_=4+Q(i,p+50)*2.5,b=3.6+Q(i,p+60)*2,S=2.6+Q(i,p+70)*1.6;f(new jt,m*w,M,_,b,S,g[(p+x)%4],m>0?-Math.PI/2:Math.PI/2),x++}for(let[m,p]of[[-1,-10],[1,6],[-1,18]]){let M=new jt;M.position.set(m*(r-3.2),.35,p),s.add(M),Bt(M,8,.25,2.2,11569004,m*-0+0,0,0,{map:Ue("plank")}).position.x=m*4;for(let b of[0,3,6.4])for(let S of[-1,1])be(M,.1,.12,1.8,7293498,m*b+0,.2,S,5);let w=new K(new he(.26,8,6),new Pe({color:16766362}));w.position.set(m*6.4,1.5,1),M.add(w),en(M,16762746,3.6,m*6.4,1.5,1,.9);let _=new K(new he(1,10,6),Zt(6965818));_.scale.set(.6,.3,1.9),_.position.set(m*-3.2,-.15,2.2),M.add(_)}for(let m=0;m<18;m++){let p=m/17,M=-24+p*48,w=m%2?1:-1,_=new K(new he(.25,8,6),new Pe({color:m%3?16766362:16751226}));_.position.set(w*(r+4+Math.sin(m)*1.2),4.2+Math.sin(m*1.9)*.5,M),s.add(_),en(s,m%3?16762746:16751210,3.2,_.position.x,_.position.y,M,.85)}en(s,16756838,46,o*(r+11),6,0,.28);for(let m of[-1,1])be(s,.25,.3,6.5,11880250,m*(r-.5),2.6,-34,8);Bt(s,r*2,.4,.5,11880250,0,5.8,-34),en(s,16762746,4,-r*.5,5.2,-34,.9),en(s,16762746,4,r*.5,5.2,-34,.9),en(s,16762746,4,0,5.2,-34,.9)}else if(n===3)for(let f=0;f<9;f++){let g=o*(r+5+Q(i,f)*10),x=(f-4)*4.5+Q(i,f+20)*2,m=a(g,x),p=new jt;p.position.set(g,m,x),s.add(p),be(p,.25,.4,3.4,8018508,0,1.7,0,6);let M=new K(new Mn(2.6+Q(i,f+40),1),Zt(u));M.scale.y=.8,M.position.y=4.4,p.add(M)}else if(n===4){ko(s,a,r,"\u9DFA",!1,"#5f8aa8");let f=900,g=new vn(tm,rs.material,f);g.frustumCulled=!1;let x=0;for(let p=0;p<f;p++){let M=p%2?1:-1,w=M*(r-5.5+Q(i,p)*13),_=(Q(i,p+50)-.5)*84;if(Math.abs(w)<r-5.8)continue;let b=1.1+Q(i,p+70)*1.5,S=Math.max(-.25,a(w,_)-.15);cn.set(w,S,_),an.setFromAxisAngle(Xo,Q(i,p+90)*6.28),We.set(b,b*(1+Q(i,p+30)*.9),b),Be.compose(cn,an,We),g.setMatrixAt(x,Be),g.setColorAt(x,ke.set(em[Q(i,p+4)*4|0])),x++}g.count=x,s.add(g);for(let p=0;p<20;p++){let M=p%2?1:-1,w=p%3!==0,_=M*(r-(w?2.2+Q(i,p)*3.5:-1.5+Q(i,p)*2)),b=(Q(i,p+10)-.5)*70,S=RM(.95+Q(i,p+5)*.5,Q(i,p)*6.28);S.position.set(_,w?-.12:a(_,b)-.1,b),S.rotation.y=Q(i,p+3)*6.28,s.add(S)}let m=Li(16777215,10);m.material.blending=qn,m.material.opacity=.25,m.position.set(0,1.2,0),s.add(m)}else if(n===5){ko(s,a,r,"\u9418",!0,"#9a3a30");let f=o*(r+19),g=a(f,0),x=new jt;x.position.set(f,g,0),x.rotation.y=-o*Math.PI/2,s.add(x);let m=10131604;Bt(x,17,3,15,m,0,-.5,0),Bt(x,15,.5,13,11841964,0,1.25,0),Bt(x,13,.5,11,12763064,0,1.75,0);for(let b=0;b<7;b++)Bt(x,6,.4,1.1,m,0,1.5-b*.28,7.9+b*.95);for(let[b,S]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])be(x,.34,.38,5,12730163,b,4.6,S,8);Bt(x,9.4,.5,.7,12730163,0,7.3,3.4),Bt(x,9.4,.5,.7,12730163,0,7.3,-3.4),Bt(x,.7,.5,7.2,12730163,-4.2,7.3,0),Bt(x,.7,.5,7.2,12730163,4.2,7.3,0),Bt(x,9,.35,.6,14264410,0,6.7,3.4),Bt(x,9,.2,7,8018508,0,2.15,0),Zu(x,9.6,2.7,9.1,4999770),Bt(x,5.2,1.5,5.2,15721421,0,8.7,0),Bt(x,5.5,.2,5.5,12730163,0,7.9,0),Zu(x,5.3,2,11.2,4144461),be(x,.1,.1,1.6,14264410,0,13,0,6);let p=new K(new he(.34,8,6),Zt(14264410,{emissive:5913104}));p.position.y=12.3,x.add(p),Bt(x,.5,.5,5,4864562,0,6.8,0),be(x,.05,.05,1.1,3811874,0,6.1,0,4);let M=be(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});be(x,.8,.8,.12,14264410,0,5.6,0,12),en(x,16762746,5,0,4.6,0,.6);let w=be(x,.2,.2,4,6965818,0,3.3,2.6,6);w.rotation.x=Math.PI/2,w.position.set(0,3.5,2.6),be(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let b of[-4,4])for(let S of[3.4,-3.4]){let A=new K(new he(.34,8,6),Zt(14245962,{emissive:9054746}));A.scale.y=1.3,A.position.set(b*1.12,6.2,S*1.05),x.add(A),en(x,16751210,3,b*1.12,6.2,S*1.05,.85)}for(let b of[-3.4,3.4])for(let S of[10.4,14.5])El(x,()=>0,b,S,1.15).position.y=-.1;for(let b=0;b<5;b++)Bt(x,2.6,.12,1.6,m,0,-.3,10+b*2.1);AM(x,0,-.4,17.5,1.1,12730163);let _=wM(x,0,1.5,-3.5);_.position.set(o>0?-11.5:11.5,1.5,-2.5),_.scale.setScalar(1.1)}else if(n===6){let f=o*(r+3.6),g=a(f,0),x=new jt;x.position.set(f,g,0),s.add(x),ko(s,a,r,"\u6EDD",!1,"#3f7a8a");let m=S=>Zt(S);for(let S=0;S<22;S++){let A=3+Q(i,S)*3.5,y=o*(7.8+Q(i,S+5)*9),T=Q(i,S+9)*15+(y*o<8?3:0),R=(Q(i,S+13)-.5)*17,I=new K(new Mn(A,1),m(S%3?8030846:7114616));I.position.set(y,T,R),I.scale.y=1.2,x.add(I);let N=new K(new Mn(A*.75,1),m(8369002));N.position.set(y,T+A*.65,R),N.scale.set(1.05,.45,1.05),x.add(N)}for(let S=0;S<10;S++){let A=1+Q(i,S+60)*1.2,y=new K(new Mn(A,0),m(8030846));y.position.set(-o*(.5+Q(i,S+70)*3),A*.4,(Q(i,S+80)-.5)*12),x.add(y)}let p=new K(new un(7,19,1,1),$o);p.position.set(-o*.5,9.6,0),p.rotation.y=Math.PI/2,x.add(p);let M=new K(new un(3,14,1,1),$o);M.position.set(-o*.7,7,-5.6),M.rotation.y=Math.PI/2,M.rotation.z=.04,x.add(M);let w=new K(new Xi(6.5,24).rotateX(-Math.PI/2),new Pe({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));w.position.set(-o*3.6,.1,0),x.add(w);let _=new K(new un(3.4,4.6).rotateX(-Math.PI/2),$o);_.rotation.y=o>0?Math.PI/2:-Math.PI/2,_.position.set(-o*3.4,.12,0),x.add(_);for(let S=0;S<6;S++){let A=Li(16777215,5+Q(i,S)*3);A.material.blending=qn,A.material.opacity=.5,A.position.set(-o*(1+Q(i,S+3)*4),.5+Q(i,S)*.8,(Q(i,S+9)-.5)*7),x.add(A)}let b=Li(16777215,26);b.material.blending=qn,b.material.opacity=.5,b.position.set(-o*3,4,0),x.add(b)}else if(n===7){ko(s,a,r,"\u8336",!0,"#a9453a");let f=o*(r-3),g=new jt;g.position.set(f,0,0),s.add(g);for(let p of[-2.4,2.4])for(let M of[-2,2])be(g,.12,.12,3,h,p,-.2,M,5);Bt(g,6,.3,5,l,0,1.3,0),Bt(g,4.6,2.4,3.6,15258550,0,2.6,0),Bt(g,4.8,.2,3.8,5982794,0,3.9,0),Bt(g,4.7,.15,3.7,5982794,0,1.45,0);let x=new K(new Ne(4.6,2,4),Zt(9398879));x.rotation.y=Math.PI/4,x.position.y=4.8,g.add(x),Bt(g,1.2,1.1,.1,16769184,0,2.7,1.85).material=new Pe({color:16769184}),en(g,16762746,4,0,2.7,2.1,.9);for(let p of[-.55,.55]){let M=new K(new un(1,1.4),new Se({gradientMap:Fe,map:pm("\u8336","#2f3f6b","#ffffff",128,160),side:Te}));M.position.set(p,2.9,1.93),g.add(M)}for(let p of[-2.4,2.4]){let M=new K(new he(.3,8,6),Zt(14245962,{emissive:8006170}));M.scale.y=1.3,M.position.set(p,3.2,2.3),g.add(M),en(g,16751210,2.6,p,3.2,2.3,.8)}be(g,.05,.05,2.6,l,3.4,2.2,3.2,5);let m=new K(new Ne(1.7,.7,12),Zt(12730163));m.position.set(3.4,3.6,3.2),g.add(m),Bt(g,1.8,.15,.6,l,3.4,1.5,3.2),Bt(g,1.8,.05,.62,12730163,3.4,1.6,3.2);for(let p of[-1,1]){let M=El(s,a,f+p*6,5,1);M.position.y=a(f+p*6,5)}}else if(n===8){ko(s,a,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let f of[-1,1])for(let g=0;g<6;g++)El(s,a,f*(r+3+Q(i,g)*2.5),-45+g*18+Q(i,g+3)*4);for(let f=0;f<12;f++){let g=f%2?1:-1,x=g*(r+4+Q(i,f)*12),m=(Q(i,f+20)-.5)*110,p=new K(new un(3.6,22),new Pe({map:Or,color:16773296,transparent:!0,opacity:.14,blending:Ki,depthWrite:!1,side:Te}));p.position.set(x,a(x,m)+10,m),p.rotation.set(0,Q(i,f+9)*3,g*.25),s.add(p)}}else for(let f=0;f<46;f++){let g=(Q(i,f)-.5)*r*1.5,x=(Q(i,f+40)-.5)*34,m=new K(new Xi(.8+Q(i,f+7)*.5,10).rotateX(-Math.PI/2),Zt(8372106,{side:Te}));if(m.position.set(g,.05,x),s.add(m),f%4===0){let p=new K(new Mn(.34,0),Zt(16098493,{emissive:9058896}));p.scale.y=1.2,p.position.set(g,.3,x),s.add(p),en(s,16752576,1.8,g,.5,x,.35)}}return s}var Rn=null,Ko=0,ns=new P,Uu=new P,Fu=new $e,Bp=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function IM(i){if(Rn)return;let t=bl.get(i);if(!t)return;let e=gi(i),n=He(e),s=i%10,r=s===6||Q(i,9)>.5?1:-1,o=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0]][s],a=o[3]===1,c=a?Math.abs(o[0])+n*.3:[46,30,52,0,40,0,0,0,30,30][s];Rn={g:t,t:0,dur:11.5,fx:o[0],fy:o[1],fz:o[2],sd:r,sided:a,R:Math.max(30,c),h:[10,6,12,10,8,13,10,7,6,9][s]}}function PM(){Rn&&Rn.t>1.5&&(Rn.t=Math.max(Rn.t,Rn.dur-2.4))}function LM(i){if(!Rn){Ko=0;return}Rn.t+=i;let t=Rn,e=Bp(0,2.6,t.t)*(1-Bp(t.dur-2.6,t.dur,t.t));if(Ko=e,t.t>=t.dur){Rn=null,Ko=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),o=t.sided?-t.sd:0,a=t.sided?0:1,c=o*s+a*r,l=-o*r+a*s;ns.set(t.fx+c*t.R,t.fy+t.h,t.fz+l*t.R),t.g.localToWorld(ns);let h=ss(ns.x,-ns.z);ns.y=Math.max(ns.y,h+3),Uu.set(t.fx,t.fy,t.fz),t.g.localToWorld(Uu),Fu.position.copy(ns),Fu.lookAt(Uu),An.position.lerp(ns,e),An.quaternion.slerp(Fu.quaternion,e)}function DM(i){let t=Math.max(0,Math.floor((i-300)/Ll)),e=Math.floor((i+420)/Ll);for(let[n,s]of bl)(n<t||n>e)&&s.parent&&Vt.remove(s);for(let n=t;n<=e;n++){let s=bl.get(n);if(s||(s=CM(n),bl.set(n,s)),s.parent||Vt.add(s),!Ur.has(n%10)&&gi(n)-i<(n%10===2?70:55)&&i-gi(n)<25){Ur.add(n%10),EM.add(n),IM(n),Nr("Descubriste: "+Pl[n%10]);try{tn.chime(0,n%5)}catch{}SM(),cd(i)}}for(let n of fm)n.material.opacity=n.userData.base*(.3+.7*Pr);$o.uniforms.t.value=B.t,$o.uniforms.fogCol.value.copy(Vt.fog.color);for(let n of ld)n.nk?n.nk.rotation.x=Math.sin(B.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(B.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(B.t*1.1+n.ph)*.12}var zl=0,$n=0,is=0,Op=new bn,zp=new bn,Bu=new $e,Ou=new P,xl=new P,_l=new P,mm=Je("cam");function Hl(i){zl=i,mm.textContent=i?"Vista: 3\xAA persona":"Vista: 1\xAA persona";try{localStorage.setItem("rio3d-cam",i)}catch{}}mm.onclick=()=>Hl(1-zl);addEventListener("keydown",i=>{i.code==="KeyC"&&Hl(1-zl)});try{Hl(+localStorage.getItem("rio3d-cam")||0)}catch{}var gm=new Pe({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:Te}),Fr=mi,xm=new Float32Array(Fr*4*2*3),_m=new Float32Array(Fr*4*2*4),Br=new ae;Br.setAttribute("position",new oe(xm,3));Br.setAttribute("color",new oe(_m,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<Fr-1;e++){let n=(t*Fr+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}Br.setIndex(i)}var Gl=new K(Br,gm);Gl.frustumCulled=!1;Gl.renderOrder=1;Vt.add(Gl);function NM(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<Fr;s++){let r=t+s*Dn,o=He(r)-1+(sn(r*.08,e*9)-.5)*.9,a=.9+sn(r*.2,e)*.9,c=_e(r)+n*o,l=-r,h=.25+.55*sn(r*.11+e*30,5),u=(e*Fr+s)*4,d=[c-n*a*1.4,c-n*a*.4,c+n*a*.5,c+n*a*1.5],f=[0,h,h*.6,0];for(let g=0;g<4;g++)xm.set([d[g],.05,l],(u+g)*3),_m.set([1,1,1,f[g]],(u+g)*4)}}Br.attributes.position.needsUpdate=Br.attributes.color.needsUpdate=!0}var ym=36,hd=[];for(let i=0;i<ym;i++){let t=new K(new Xi(.5,20).rotateX(-Math.PI/2),new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},Vt.add(t),hd.push(t)}var UM=0,zu=0;function Hp(i,t,e,n,s){let r=hd[UM++%ym];r.position.set(i,.045,t),r.userData={age:0,vx:e,vz:n,sc:s},r.scale.setScalar(.4)}var Vl=60,ud=new ae,Tl=new Float32Array(Vl*3),dd=[];for(let i=0;i<Vl;i++)dd.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});ud.setAttribute("position",new oe(Tl,3));var FM=new wi({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),vm=new ki(ud,FM);vm.frustumCulled=!1;Vt.add(vm);var BM=0;function Gp(i,t,e,n){for(let s=0;s<n;s++){let r=dd[BM++%Vl];r.l=1,r.x=i,r.y=t,r.z=e;let o=Math.random()*6.28,a=.8+Math.random()*1.4;r.vx=Math.cos(o)*a,r.vz=Math.sin(o)*a,r.vy=2+Math.random()*2.2}Lr(i,e)}var OM=5,kl=[],Vp=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function zM(i){let t=new jt,e=Vp[i%Vp.length],n=new K(new he(.5,12,8),Zt(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new K(new he(.5,10,6),Zt(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new jt;r.position.z=.45,t.add(r);let o=new K(new Ne(.22,.5,4),Zt(e[0],{side:Te}));o.rotation.x=-Math.PI/2,o.scale.set(1.2,1,.18),o.position.z=.22,r.add(o);let a=new K(new Ne(.08,.3,3),Zt(e[0]));return a.position.set(0,.2,.05),a.rotation.x=-.3,t.add(a),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},Vt.add(t),t}for(let i=0;i<OM;i++)kl.push(zM(i));function Mm(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(He(e)-3);i.position.set(_e(e)+n,-.05,-e),i.userData.st=0,i.userData.hd=ti(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}kl.forEach(i=>Mm(i,30+Math.random()*60));function HM(i,t){for(let e of kl){let n=e.userData;n.t+=i;let s=e.position.z-B.pz,r=-e.position.z;if(r<t-12||r>t+120){Mm(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let o=e.position.x-_e(r),a=He(r)-3;Math.abs(o)>a&&(n.hd+=(ti(r)+(o>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd+Math.PI,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,Gp(e.position.x,.1,e.position.z,5),tn.plop((e.position.x-B.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&Hp(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let o=.95,a=n.j/o,c=Math.sin(Math.PI*a)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+c;let l=Math.cos(Math.PI*a)*1.25*Math.PI/o;e.rotation.set(0,-n.hd+Math.PI,0),e.rotateX(Math.atan2(l,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=o&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd+Math.PI,0),Gp(e.position.x,.1,e.position.z,9),tn.plop((e.position.x-B.px)/25))}}for(let e=0;e<Vl;e++){let n=dd[e];n.l>0&&(n.l-=i*1.4,n.vy-=9*i,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i,n.y<0&&(n.l=0)),Tl[e*3]=n.l>0?n.x:0,Tl[e*3+1]=n.l>0?n.y:-50,Tl[e*3+2]=n.z}if(ud.attributes.position.needsUpdate=!0,zu-=i,zu<=0&&Us){zu=.11;let e=Math.min(B.v,5),n=Math.cos(B.psi),s=Math.sin(B.psi),r=B.px-Math.sin(B.psi)*1.5,o=B.pz+Math.cos(B.psi)*1.5;for(let a of[-1,1])Hp(r+n*.5*a,o+s*.5*a,n*a*.5,s*a*.5,1)}hd.forEach(e=>{let n=e.userData;if(n.age>=3.2){e.material.opacity=0;return}n.age+=i;let s=n.age/3.2;e.position.x+=(n.vx||0)*i,e.position.z+=(n.vz||0)*i,e.scale.setScalar((.4+s*2.6)*(n.sc||1)),e.material.opacity=.38*(1-s)*(1-s)})}var GM=[],Wl=[];function VM(i){let t=new jt,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new K(new Re(.025,.018,.5,6),Zt(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new K(new he(.055,8,6),Zt(n));r.position.z=-.27,t.add(r);let o=new Pe({color:15398655,transparent:!0,opacity:.5,side:Te,depthWrite:!1}),a=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([c,l])=>{let h=new jt;h.position.set(0,.02,l),t.add(h);let u=new K(new un(.38,.1).rotateX(-Math.PI/2),o);u.position.x=c*.2,h.add(u),a.push([h,c])}),t.scale.setScalar(1.8),t.userData={wings:a,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},Vt.add(t),t}for(let i=0;i<8;i++)Wl.push(VM(i));var Xl=[];function kM(i){let t=new jt,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new K(new he(.3,10,8),Zt(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new K(new Ne(.12,.3,5),Zt(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let o=new jt;o.position.set(0,.3,-.25),t.add(o);let a=new K(new Re(.06,.08,.34,6),Zt(e));a.position.y=.15,o.add(a);let c=new K(new he(.1,8,6),Zt(i%2?3486766:e));c.position.set(0,.34,-.03),o.add(c);let l=new K(new Ne(.04,.16,5),Zt(15245898));return l.rotation.x=-Math.PI/2,l.position.set(0,.33,-.15),o.add(l),t.scale.setScalar(1.15),t.userData={neck:o,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},Vt.add(t),t}function Sm(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(He(e)-6);i.position.set(_e(e)+n,0,-e),i.userData.hd=ti(e)+(Math.random()-.5)*2}for(let i=0;i<2;i++)Xl.push(kM(i));Xl.forEach(i=>Sm(i,30));function bm(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(He(e)+2);i.position.set(_e(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}Wl.forEach(i=>bm(i,30));function WM(i,t){let e=1-Ze(de.night*1.5,0,1)*1,n=e>.15&&Ge.rain<.6;for(let s of Xl){s.visible=e>.1;let r=s.userData;r.t+=i;let o=-s.position.z,a=o-t;if(a<-14||a>110){Sm(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let c=Math.sin(Math.PI*Ze(1-r.dip/1.3));r.neck.rotation.x=1.2*c,s.rotation.x=.9*c*.5,s.position.y=-.05*c,c>.9&&!r.rip&&(r.rip=!0,Lr(s.position.x,s.position.z-.4),tn.plop((s.position.x-B.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let c=s.position.x-_e(o);Math.abs(c)>He(o)-5&&(r.hd+=(ti(o)+(c>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*.35*i,s.position.z-=Math.cos(r.hd)*.35*i}s.rotation.y=-r.hd+Math.PI}for(let s of Wl){if(s.visible=n,!n)continue;let r=s.userData;r.t-=i;let o=-s.position.z-t;if(o<-12||o>90){bm(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let d=-s.position.z+(Math.random()-.5)*8,f=s.position.x-_e(d);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let g=r.tx-_e(-r.tz);Math.abs(g)>He(-r.tz)+3&&(r.tx=_e(-r.tz)+Math.sign(g)*(He(-r.tz)+1))}let a=Math.min(1,i*3.2),c=s.position.x,l=s.position.z;s.position.x+=(r.tx-s.position.x)*a,s.position.z+=(r.tz-s.position.z)*a,s.position.y+=(r.ty-s.position.y)*a+Math.sin(B.t*9+r.ph)*.004;let h=s.position.x-c,u=s.position.z-l;Math.hypot(h,u)>.002&&(s.rotation.y=Math.atan2(-h,-u)),s.rotation.x=-Math.min(.5,Math.hypot(h,u)*20)*.5,r.wings.forEach(([d,f],g)=>{d.rotation.z=f*Math.sin(B.t*70+g*1.7+r.ph)*.45})}}var Dl=38,Hu=new Map,kp=[0,1,2].map(i=>{let t=new Mn(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getY(r),c=e.getZ(r),l=1+(Q(Math.round(o*5)+i*9,Math.round(a*5)+Math.round(c*5))-.5)*.35;e.setXYZ(r,o*l*1.15,a*l*.72,c*l);let h=.7+.4*Ze((a+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=h}t.setAttribute("color",new oe(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),XM=new Se({gradientMap:Fe,color:12039108,vertexColors:!0,map:Ue("rock")}),qM=new Se({gradientMap:Fe,color:8829066,map:Ue("leaf")}),YM=new Pe({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:Te});function ZM(i){let t=Q(i,41);if(i<2||t>.34)return null;let e=i*Dl+Q(i,42)*Dl,n=(Q(i,43)*2-1)*He(e)*.4;return{s:e,x:_e(e)+n,z:-e,r:.9+Q(i,44)*1.1,v:Math.floor(Q(i,45)*3),a:Q(i,46)*6.28}}function JM(i){let t=new jt,e=new K(kp[i.v],XM);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new K(kp[(i.v+1)%3],qM);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new K(new xr(1.05,1.55,24).rotateX(-Math.PI/2),YM);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function $M(i,t){let e=Math.floor((t-25)/Dl),n=Math.floor((t+280)/Dl);for(let[s,r]of Hu)(s<e||s>n)&&r&&Vt.remove(r);for(let s=e;s<=n;s++){let r=Hu.get(s);if(r===void 0){let h=ZM(s);r=h?JM(h):null,Hu.set(s,r)}if(!r)continue;r.parent||Vt.add(r);let o=B.px-r.userData.x,a=B.pz-r.userData.z,c=r.userData.r*1.2+1.5,l=Math.hypot(o,a);l<c&&l>.01&&(B.px+=o/l*(c-l)*.6,B.pz+=a/l*(c-l)*.6,B.v*=.9,B.t-B.bumpT>1.2&&(tn.bump(),B.bumpT=B.t,Lr(r.userData.x+o/l*-r.userData.r,r.userData.z+a/l*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(B.t*1.4+s)}}var Nl=230,wl=new Map,KM=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let a=0;a<=16;a++){let c=a/16;for(let l=0;l<26;l++){let h=l/26*6.283,u=1+(sn(Math.cos(h)*2.2+i*7,Math.sin(h)*2.2+c*3)-.5)*.5+(sn(Math.cos(h)*7+i,c*9)-.5)*.14,d=Math.pow(Math.max(0,1-Math.pow(c,2.2)),.62)*(1+.38*(1-c)*(1-c)),f=c,g=(sn(i*3,c*2)-.5)*.5*c;n.push(Math.cos(h)*d*u+g,f,Math.sin(h)*d*u);let x=sn(Math.cos(h)*5+i,c*14),m=nn(.18,.5,sn(Math.cos(h)*9,c*20+i)),p=.45+.2*c+.12*x;s.push(p*(.75+.2*m),p*(.9+.12*m),p*(.82+.1*m))}}for(let a=0;a<16;a++)for(let c=0;c<26;c++){let l=(c+1)%26,h=a*26+c,u=a*26+l,d=(a+1)*26+c,f=(a+1)*26+l;r.push(h,d,u,u,d,f)}let o=new ae;return o.setAttribute("position",new Kt(n,3)),o.setAttribute("color",new Kt(s,3)),o.setIndex(r),o.computeVertexNormals(),o}),QM=new So({vertexColors:!0,color:12175040,fog:!1}),Em=new Vi({map:Or,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function jM(i,t){let e=Q(i,60+t),n=44+e*46,s=95+Q(i,61+t)*120,r=i*Nl+Q(i,62+t)*Nl*.9,o=He(r)+150+Q(i,63+t)*170,a=new jt,c=new K(KM[(i*2+(t>0?1:0)+4)%4],QM.clone());c.scale.set(n,s,n*(.8+Q(i,64)*.4)),c.position.y=-30,c.rotation.y=Q(i,65)*6,a.add(c);for(let l=0;l<2;l++){let h=new ms(Em);h.scale.set(n*4.5,s*.7,1),h.position.set((l?.4:-.3)*n,s*(.18+.2*l),0),h.renderOrder=2,a.add(h)}return a.position.set(_e(r)+t*o,0,-r),a.userData={s:r},a}function tS(i){let t=Math.floor((i-260)/Nl),e=Math.floor((i+720)/Nl);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),o=wl.get(r);if(o===void 0&&(o=Q(n,70+s)>.18?jM(n,s):null,wl.set(r,o),o&&(o.userData.c=n)),o){o.userData.c=n,o.parent||Vt.add(o);let a=Math.hypot(o.position.x-B.px,o.position.z-B.pz),c=Ze(nn(60,520,a)*.88+.08);o.children[0].material.color.set(6130818).lerp(Yu.set(3099218),de.night*.7).lerp(Yo.copy(de.hor).lerp(Vt.fog.color,.5),c)}}for(let[n,s]of wl)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&Vt.remove(s)}var fd=[];function eS(i){let t=new jt,e=Zt(3091244),n=Zt(3102307),s=new K(new he(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new K(new Re(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let o=new K(new he(.12,8,6),Zt(14264706));if(o.position.set(0,1.38,.2),t.add(o),i%2){let c=new K(new Ne(.75,.45,10,1,!0),Zt(3158063,{side:Te}));c.position.set(0,1.95,.2),t.add(c);let l=new K(new Re(.015,.015,1,4),e);l.position.set(0,1.45,.2),t.add(l)}else{let c=new K(new Ne(.34,.2,10,1,!0),Zt(14332522,{side:Te}));c.position.set(0,1.55,.2),t.add(c)}let a=new K(new Re(.02,.02,4,4),Zt(8018502));return a.position.set(.35,1.2,-.9),a.rotation.set(1,0,-.3),t.add(a),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},Vt.add(t),t}for(let i=0;i<3;i++)fd.push(eS(i));function Tm(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(He(e)-9);i.position.set(_e(e)+n,0,-e),i.userData.hd=ti(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}fd.forEach(i=>Tm(i,40+Math.random()*100));function nS(i,t){for(let e of fd){let n=e.userData;if(e.position.z>B.pz+30||-e.position.z>t+300){Tm(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(B.t*.8+n.ph)*.03,e.rotation.set(Math.sin(B.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(B.t*.7+n.ph)*.02)}}var Wp=new P,Xp=performance.now(),Gu=0,Ul=300,Fl=new ae,Al=new Float32Array(Ul*3),wm=[];for(let i=0;i<Ul;i++)wm.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);Fl.setAttribute("position",new oe(Al,3));var iS=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new Ai(i)})(),Am=new wi({map:iS,alphaTest:.3,color:16762578,size:.42,transparent:!0,opacity:.85,depthWrite:!1}),Rm=new ki(Fl,Am);Rm.frustumCulled=!1;Vt.add(Rm);Ip();Pp();function Cm(i){requestAnimationFrame(Cm);let t=Math.min(.05,(i-Xp)/1e3);Xp=i,B.t+=t;let e=-B.pz;if(Us){let o=B.hold||B.key.up,a=Ze(id+(B.key.r?1:0)-(B.key.l?1:0),-1,1),c=2.6*(1-.85*Ko);B.v+=(c-B.v)*.5*t;let l=ti(e),h=a*(.55+Math.min(B.v,6)/6*.45);B.psi+=h*t,Math.abs(a)<.1&&(B.psi+=(l-B.psi)*.32*t),B.psi=Ze(B.psi,l-1.35,l+1.35),window.__lock!=null&&(B.psi=window.__lock),B.steer+=(a-B.steer)*3*t,B.px+=Math.sin(B.psi)*B.v*t+Math.sin(l)*1.1*t,B.pz+=-Math.cos(B.psi)*B.v*t-Math.cos(l)*1.1*t;let u=-B.pz,d=_e(u),f=He(u)-1.7,g=B.px-d;if(Math.abs(g)>f&&(B.px=d+Math.sign(g)*f,B.v>1.2&&B.t-B.bumpT>1.2&&(tn.bump(),B.bumpT=B.t),B.v*=.6,B.psi+=(ti(u)-B.psi)*.4),B.dist=Math.max(B.dist,u),Du-=t,Math.abs(a)>.25&&Du<=0){Du=.7;let x=a>0?1:-1,m=new P(x*1.2,0,.3);Oe.localToWorld(m),Lr(m.x,m.z)}}let n=Math.sin(B.t*.9)*.03+Math.sin(B.t*1.7)*.012;Oe.position.set(B.px,n*.6,B.pz),Oe.rotation.set(0,-B.psi,-B.steer*.025+Math.sin(B.t*.7)*.008),Oe.updateMatrixWorld(!0);for(let o=0;o<Ul;o++){let a=wm[o];a[1]-=t*(.45+.3*Math.sin(a[3]+B.t)),a[1]<.2&&(a[1]=10+Math.random()*3,a[0]=Math.random()*60-30,a[2]=-Math.random()*60),Al[o*3]=B.px+a[0]+Math.sin(B.t*.7+a[3])*1.5,Al[o*3+1]=a[1],Al[o*3+2]=B.pz+a[2]+10+Math.cos(B.t*.5+a[3])}{let o=Math.max(.3*$u(-B.pz),Rl(-B.pz));Fl.setDrawRange(0,Math.round(Ul*(.12+.88*o)))}Fl.attributes.position.needsUpdate=!0,Am.opacity=.85*(1-Ze(de.night,0,1)*.8),Up.forEach((o,a)=>{let c=a?1:-1,l=Ze(B.steer*c,0,1),h=new P().copy(xM[a]);h.lerp(new P(c*1.25,-.1,-.9+Math.sin(B.t*1.3+a)*.08),l);let u=Wp.copy(h).sub(gM[a]).normalize();o.quaternion.setFromUnitVectors(new P(0,0,1),u),o.position.copy(h).addScaledVector(u,-1.55)});{let o=$n>.45||Ko>.15;if(Ns.visible=o,Ds.visible=o,Up.forEach(a=>a.visible=!o),o){B.steer>.2?bs=Math.min(1,bs+t*3):B.steer<-.2&&(bs=Math.max(-1,bs-t*3)),gl+=(B.steer-gl)*Math.min(1,t*2.2);let a=Math.sin(B.t*1.4);zn.rotation.z=-B.steer*.2+Math.sin(B.t*.6)*.02,zn.rotation.y=-B.steer*.28,zn.rotation.x=.05+a*.012+Math.abs(B.steer)*.06,Dr.rotation.y=-B.steer*.38+Math.sin(B.t*.35)*.08,Dr.rotation.x=.04+Math.sin(B.t*.5)*.03,as.rotation.z=(B.steer-gl)*.45,as.rotation.x=-Math.abs(B.steer-gl)*.12;let c=Wp.set(bs*.5,.8,.5),l=Math.abs(B.steer)>.2?1:0,u=new P(bs*(.7+l*.55),-.2,1.35+Math.sin(B.t*1.2)*.12*(1-l)+l*.1).clone().sub(c).normalize();Ds.quaternion.setFromUnitVectors(new P(0,0,1),u),Ds.position.copy(c);let d=[c.clone().addScaledVector(u,.75),c.clone()];bs<0&&d.reverse(),rm.forEach((f,g)=>{let x=f.getWorldPosition(new P),m=Oe.localToWorld(d[g].clone()),p=m.sub(x),M=p.length();f.parent.worldToLocal(m.copy(x).add(p));let w=m.sub(f.position);f.quaternion.setFromUnitVectors(new P(0,-1,0),w.clone().normalize()),f.scale.y=Ze(w.length()/.66,.7,1.5)})}}let s=Math.sin(B.t*.5)*.01;An.position.set(B.px,1.18+n,B.pz).addScaledVector(new P(Math.sin(B.psi),0,-Math.cos(B.psi)),-.15),B.pitch+=(-sd*.22-B.pitch)*2*t,An.rotation.set(B.pitch-.06,-B.psi+s,-B.steer*.02,"YXZ"),$n+=((zl?1:0)-$n)*Math.min(1,t*2.2),$n<.01&&(is=B.psi);{let o=innerWidth/innerHeight<1?82:68,a=o*(1-.3*$n*$n*(3-2*$n));Math.abs(An.fov-a)>.05&&(An.fov=a,An.updateProjectionMatrix())}if($n>.003){let o=$n*$n*(3-2*$n);zp.copy(An.quaternion),is+=(B.psi-is)*Math.min(1,t*1.6);let a=is+.3;_l.set(Math.sin(a),0,-Math.cos(a)),Ou.set(B.px,6.2+n,B.pz).addScaledVector(_l,-10.8),_l.set(Math.sin(is),0,-Math.cos(is)),xl.set(B.px,.3,B.pz).addScaledVector(_l,6.5),xl.x+=Math.cos(is)*1.9,xl.z+=Math.sin(is)*1.9,Bu.position.copy(Ou),Bu.lookAt(xl),Op.copy(Bu.quaternion),An.position.lerp(Ou,o),An.quaternion.copy(zp).slerp(Op,o)}LM(t),Us&&(cs=(cs+t/900)%1),kv(B.px,B.pz),MM(t,e),fM(B.px,B.pz),jp.value=B.t,Qn.position.set(B.px,0,B.pz),Qn.material.uniforms.t.value=B.t;let r=de.night;nd.intensity=Pr*3.2,ed.material.opacity=.3+.35*Pr,Ol.material.color.set(16769704),$M(t,B.dist||e),nS(t,B.dist||e),tS(B.dist||e),Em.color.copy(Vt.fog.color).multiplyScalar(1.05),HM(t,B.dist||e),WM(t,B.dist||e),gm.opacity=.55+.15*Math.sin(B.t*.8),Gl.position.y=Math.sin(B.t*.9)*.01,mM(B.t,B.dist||e),DM(B.dist||e);for(let[o,a]of Is){if(a.userData.collecting)continue;let[c,l]=ju(o),h=c-B.px,u=l-B.pz;if(h*h+u*u<17){im.add(o),Lu++,a.userData.collecting=!0;let d=Math.atan2(h,-u)-B.psi;tn.lantern(Math.sin(d)),Lr(c,l),Je("n").textContent=Lu,Lu===1&&Nr("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}if(Il.forEach(o=>{if(o.userData.age<4){o.userData.age+=t;let a=o.userData.age/4;o.scale.setScalar(1+a*6),o.material.opacity=.35*(1-a)}else o.material.opacity=0}),Xu.opacity=Ze(r*1.3-.2,0,.9),Cl.visible=Xu.opacity>.01,Cl.visible){for(let o=0;o<Ku;o++){let a=nm[o],c=B.t*.4+a[3],l=Math.sin(B.psi),h=-Math.cos(B.psi);Sl[o*3]=B.px+a[0]+Math.sin(c*2.1+o)*1.5,Sl[o*3+1]=a[1]+Math.sin(c*3+o)*.4,Sl[o*3+2]=B.pz+a[2]+Math.cos(c*1.7+o)*1.5}Qu.attributes.position.needsUpdate=!0}tn.update(B.v+Math.abs(B.steer)*1.5,r,B.t),Gu-=t,Gu<=0&&(Gu=.4,cd(B.dist||e),Je("m").textContent=Math.round(B.dist/1),Je("tod").textContent=Wv(cs)),Ju.render(Vt,An)}requestAnimationFrame(Cm);window.__r3d={cineJump:i=>{Rn&&(Rn.t=i)},cineOn:()=>!!Rn,bambooAt:Ml,gardenAt:Rl,forestAt:$u,lmPos:gi,wbirds:Xl,massifs:wl,birds:GM,dfs:Wl,fish:kl,W:Ge,mistAt:cm,setCam:Hl,P:B,lanternPos:ju,setTod:i=>{cs=i},scene:Vt,tp:(i,t=0,e=0)=>{B.pz=-i,B.px=_e(i)+e,B.psi=ti(i)+t},sideOf:i=>Q(i,9)>.5?1:-1,get tod(){return cs}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
